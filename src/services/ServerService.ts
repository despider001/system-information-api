import { DriveInfo } from '../domain/models/driveInfo';
import { MemoryInfo } from '../domain/models/memoryInfo';
import { ServerSummary } from '../domain/models/serverSummary';
import { RunningProcess } from '../domain/models/runningProcess';

export interface ServerService {
  getHdd(): Promise<DriveInfo[]>;
  getRam(): Promise<MemoryInfo>;
  getRunningProcesses(): Promise<RunningProcess[]>;
  getRunningProcessByPid(pid: number): Promise<RunningProcess | null>;
  getServerSummary(): Promise<ServerSummary>
}
