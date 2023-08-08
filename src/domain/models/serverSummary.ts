import { DriveInfo } from './driveInfo';
import { MemoryInfo } from './memoryInfo';
import { RunningProcess } from './runningProcess';

export interface ServerSummary {
  hdd: DriveInfo[];
  memory: MemoryInfo;
  runningProcesses: RunningProcess[];
  timestamp: string;
}
