import { MongoClient, Db, Collection } from 'mongodb';
import { DataAccess } from '../dataAccess';
import { DriveInfo } from '../../../domain/models/driveInfo';
import { MemoryInfo } from '../../../domain/models/memoryInfo';
import { RunningProcess } from '../../../domain/models/runningProcess';
import { ServerSummary } from '../../../domain/models/serverSummary';

export class MongoDB implements DataAccess {
  private client: MongoClient;
  private db: Db;

  constructor(connectionURI: string) {
    this.client = new MongoClient(connectionURI);
    this.db = this.client.db(process.env.DATABASE_NAME);
  }

  // Function to save server parameters
  async saveServerSummary(serverParams: ServerSummary): Promise<void> {
    try {
      const collection = this.db.collection(process.env.SERVER_PARAMETERS_COLLECTION);
      await collection.insertOne(serverParams);
    } catch (err) {
      console.error('Error saving server parameters to MongoDB:', err);
      throw err;
    }
  }


  // Function to save drive info
  async saveDriveInfo(driveInfo: DriveInfo): Promise<void> {
    try {
      const collection = this.db.collection(process.env.DRIVE_INFO_COLLECTION);
      await collection.insertOne(driveInfo);
    } catch (err) {
      console.error('Error saving drive info to MongoDB:', err);
      throw err;
    }
  }



  // Function to save memory info
  async saveMemoryInfo(memoryInfo: MemoryInfo): Promise<void> {
    try {
      const collection = this.db.collection(process.env.MEMORY_INFO_COLLECTION);
      await collection.insertOne(memoryInfo);
    } catch (err) {
      console.error('Error saving memory info to MongoDB:', err);
      throw err;
    }
  }


  // Function to save running process
  async saveRunningProcess(runningProcess: RunningProcess): Promise<void> {
    try {
      const collection = this.db.collection(process.env.RUNNING_PROCESS_COLLECTION);
      await collection.insertOne(runningProcess);
    } catch (err) {
      console.error('Error saving running process to MongoDB:', err);
      throw err;
    }
  }

  async disconnect(): Promise<void> {
    await this.client.close();
  }
}
