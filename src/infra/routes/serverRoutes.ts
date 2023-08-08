import express from 'express';
import { ServerController } from '../controllers/serverController';
import { SystemInformationService } from '../../services/SystemInformationService';
const router = express.Router()
const controller = new ServerController();

router.get('/summary', controller.getSummary);
router.get('/hdd', controller.getHdd);
router.get('/ram', controller.getRam);
router.get('/services', controller.getServices);
router.get('/services/:pid', controller.getServiceByPid);

export default router;
