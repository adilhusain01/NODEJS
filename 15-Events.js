const EventEmitter = require("events");

//on -> listen for an event
//new -> emit an event

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, age) => {
  console.log(`data recieved -> ${name}, ${age}`);
});

customEmitter.on("response", () => {
  console.log("data recieved");
});

customEmitter.emit("response", "john", 34);

// const http = require("http");

// const server = http.createServer();

// server.on("request", (req, res) => {
//   res.end("Hello there");
// });

// server.listen(5000, () => {
//   console.log("Running on port 5000");
// });
