import { log } from "logger";
import { createServer } from "./server";

const port = process.env.PORT || 8002;
const server = createServer();

server.listen(port, () => {
  log(`api running on ${port}`);
});
