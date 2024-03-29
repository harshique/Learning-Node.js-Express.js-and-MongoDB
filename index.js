const http = require("http");
const fs = require("fs"); // Import the fs module
const { homedir } = require("os");

const port = 3003;
const hostname = "localhost";

// Read the content of the home.html file synchronously
const home = fs.readFileSync('./home.html', "utf-8");

const server = http.createServer((req, res) => {
    if (req.url === "/about") {
        return res.end("hola maga macha athya working ");
    } 
    else if (req.url === '/contact') {
        // res.writeHead(200, {'Content-Type': 'text/html'}); // Set the content type to HTML
        return res.end('<h1>Contactf Us Page</h1>'); // HTML content
    }
    else if (req.url === '/home') {
        return res.end(home); // Send the content of home.html
    }
    else {
      return res.end("hello world and recognizing bro");
    }
});

server.listen(port, hostname, () => {
    console.log(`Server is working on ${port} and the host name is ${hostname}`);
    console.log(`http://${hostname}:${port}`);
});
