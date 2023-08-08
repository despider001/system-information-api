/**
 * 
 * This file simple shows that the application does not need to depend only a single package, 
 * which in this case is systeminformation.
 * 
 * You can use any package that does the job, without having to change your code
 * 

import os from 'os';
import { DriveInfo } from '../domain/models/driveInfo';
import { MemoryInfo } from '../domain/models/memoryInfo';
import { RunningProcess } from '../domain/models/runningProcess';
import { ServerService } from './serverService';

export class OsService implements ServerService {
    async getHdd(): Promise<DriveInfo[]> {
        // implementation goes here
    }

    async getRam(): Promise<MemoryInfo> {
        // implementation goes here
    }

    async getRunningProcesses(): Promise<RunningProcess[]> {
        // implementation goes here
    }

    async getRunningProcessByPid(pid: number): Promise<RunningProcess | null> {
        // implementation goes here
    }

    async getServerSummary(): Promise<ServerSummary> {
        // implementation goes here
    }

}
*/