import { ServerSummary } from '../../domain/models/serverSummary';
import { DriveInfo } from '../../domain/models/driveInfo';
import { MemoryInfo } from '../../domain/models/memoryInfo';
import { RunningProcess } from '../../domain/models/runningProcess';

export interface DataAccess {
  saveServerSummary(serverParams: ServerSummary): Promise<void>;
  saveDriveInfo(driveInfo: DriveInfo): Promise<void>;
  saveMemoryInfo(memoryInfo: MemoryInfo): Promise<void>;
  saveRunningProcess(runningProcess: RunningProcess): Promise<void>;
}
