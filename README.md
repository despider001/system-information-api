# System Information API

The System Information API is a Node.js application that provides information about the server's hardware resources, memory usage, running processes, and more. It exposes endpoints for retrieving various system parameters and stores them in a MongoDB database.


## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4 or higher)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/despider001/system-information-api.git
   ```

2. Navigate to the project directory:

   ```sh
   cd system-information-api
   ```

3. Install the dependencies:

   ```sh
   npm install
   ```

### Configuration

1. Create a `.env` file in the project root directory and set the following environment variables:

```env
# Database configuration
DATABASE_TYPE=mongodb
MONGODB_URI=<mongodb-uri-goes-here>
DATABASE_NAME=server_parameters
SERVER_PARAMETERS_COLLECTION=serverSummary
DRIVE_INFO_COLLECTION=driveInfo
MEMORY_INFO_COLLECTION=memoryInfo
RUNNING_PROCESS_COLLECTION=runningProcess

# Server configuration
PORT=3000
TZ=UTC
```

   Adjust the MongoDB URI and port as needed.

## Usage

### API Endpoints

- **GET /api/summary**: Retrieves a summary of system parameters, including HDD information, memory usage, and running processes.

- **GET /api/hdd**: Retrieves information about available hard drives, including total space, free space, and used space.

- **GET /api/ram**: Retrieves information about memory usage, including total memory, free memory, and used memory.

- **GET /api/services**: Retrieves a list of currently running processes.

- **GET /api/services/:pid**: Retrieves detailed information about a specific running process identified by its process ID (PID).

## Technologies Used

- Node.js
- Express.js
- MongoDB
- TypeScript
- systeminformation NPM package
