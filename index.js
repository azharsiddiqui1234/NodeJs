const http = require("http");
// const server = http.createServer((req, resp) => {
//   resp.writeHead(200, { "content-Type": "application/json" });
//   resp.end(
//     JSON.stringify({
//       data: "Hello World",
//     })
//   );
// });

// server.listen(4500);



const server = http.createServer((req, resp) => {
  resp.write("hello Azhar How Are you");
  resp.end();
});
server.listen(4500);

