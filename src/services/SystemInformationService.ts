import si from 'systeminformation';
import { ServerService } from './serverService';
import { DriveInfo } from '../domain/models/driveInfo';
import { MemoryInfo } from '../domain/models/memoryInfo';
import { ServerSummary } from '../domain/models/serverSummary';
import { RunningProcess } from '../domain/models/runningProcess';

export class SystemInformationService implements ServerService {

  async getHdd(): Promise<DriveInfo[]> {
    const drives = await si.fsSize();
    return drives.map((drive) => ({
      fs: drive.fs,
      totalSpace: drive.size,
      freeSpace: drive.available,
      usedSpace: drive.used,
    }));
  }

  async getRam(): Promise<MemoryInfo> {
    const memory = await si.mem();
    return {
      totalMemory: memory.total,
      freeMemory: memory.available,
      usedMemory: memory.used,
    };
  }

  async getRunningProcesses(): Promise<RunningProcess[]> {
    const processes = await si.processes();
    return processes.list.map((process) => ({
      name: process.name,
      pid: process.pid,
    }));
  }

  async getRunningProcessByPid(pid: number): Promise<RunningProcess | null> {
    const processes = await si.processes();
    const process = processes.list.find((p) => p.pid === pid);
    return process ? { name: process.name, pid: process.pid } : null;
  }

  async getServerSummary(): Promise<ServerSummary> {
    const hdd = await this.getHdd();
    const memory = await this.getRam();
    const runningProcesses = await this.getRunningProcesses();
    const timestamp = new Date().toISOString();

    return {
      hdd,
      memory,
      runningProcesses,
      timestamp,
    };
  }
}

// (async function() {
//   let sii =  new SystemInformationService();
//   let siii = await sii.getRam()
//   console.log('here: ', siii)
// })()

