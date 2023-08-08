// Load environment variables from .env file
import * as dotenv from "dotenv";
dotenv.config();

import express from 'express';
import router from "./infra/routes/serverRoutes";


const app = express();
const PORT = process.env.PORT || 3000;

// Use routes
app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
