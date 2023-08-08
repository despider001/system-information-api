import { Request, Response } from 'express';
import { MongoDB } from '../dal/databases/mongodb';
import { SystemInformationService } from '../../services/SystemInformationService';

const db = new MongoDB(process.env.MONGODB_URI);
const si = new SystemInformationService();

export class ServerController {

    async getSummary(req: Request, res: Response): Promise<void> {
        try {
            const serverParams = await si.getServerSummary();
            // await db.saveServerSummary(serverParams);

            res.status(200).json(serverParams);
        } catch (err) {
            console.error('Error getting server summary:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async getHdd(req: Request, res: Response): Promise<void> {
        try {
            const hddInfo = await si.getHdd();
            for (let item of hddInfo) {
                //await db.saveDriveInfo(item);
            }

            res.status(200).json(hddInfo);
        } catch (err) {
            console.error('Error getting HDD information:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async getRam(req: Request, res: Response): Promise<void> {
        try {
            const memoryInfo = await si.getRam();
            // await db.saveMemoryInfo(memoryInfo);

            res.status(200).json(memoryInfo);
        } catch (err) {
            console.error('Error getting RAM information:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async getServices(req: Request, res: Response): Promise<void> {
        try {
            const runningProcesses = await si.getRunningProcesses();
            for (let runningProcess of runningProcesses) {
                // await db.saveRunningProcess(runningProcess);
            }
            res.status(200).json(runningProcesses);
        } catch (err) {
            console.error('Error getting running services:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async getServiceByPid(req: Request, res: Response): Promise<void> {
        try {
            const { pid } = req.params;
            const pidNumber = parseInt(pid, 10);

            const runningProcess = await si.getRunningProcessByPid(pidNumber);
            if (!runningProcess) {
                res.status(404).json({ error: 'Process not found' });
            } else {
                // await db.saveRunningProcess(runningProcess);

                res.status(200).json(runningProcess);
            }
        } catch (err) {
            console.error('Error getting service by PID:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}


