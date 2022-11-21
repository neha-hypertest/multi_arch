// Importing the http module
const http = require("http")

// Creating server
const server = http.createServer((req, res) => {
    // Sending the response
    res.write("This is the response from the server")
    res.end();
})

// Server listening to port 3000
server.listen((5000), () => {
    console.log("Test Server is Running");
})
