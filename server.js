const uWS = require("uWebSockets.js");
const port = 7777;

const app = uWS
  .App()
  .ws("/ws", {
    // config
    compression: 0,
    maxPayloadLength: 16 * 1024 * 1024,
    idleTimeout: 60,

    open: (ws, req) => {
      // this handler is called when a client opens a ws connection with the server
      console.log(`Opened connection: ${ws}, ${req}`)
    },

    message: (ws) => {
      // called when a client sends a message
      
      console.log(`Message: ${ws.message}`)
    },

    close: (ws, code, message) => {
      // called when a ws connection is closed
      console.log(`Closed: ${ws}, ${code},${message}`)
    },
  })
  .listen(port, (token) => {
    token
      ? console.log(`Listening to port ${port}`)
      : console.log(`Failed to listen to port ${port}`);
  });