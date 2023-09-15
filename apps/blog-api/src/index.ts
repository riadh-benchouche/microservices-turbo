import { createServer } from "./server";

const port = process.env.PORT || 5003;
const server = createServer();

server.listen(port, () => {
  console.log(`api running on ${port}`);
});
