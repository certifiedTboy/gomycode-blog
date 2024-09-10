const http = require("http");
const app = require("./app");
const connectDb = require("./helpers/db");
const { PORT } = require("./config/index");
const httpServer = http.createServer(app);

const startServer = async () => {
  await connectDb();
  httpServer.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`);
  });
};

startServer();
