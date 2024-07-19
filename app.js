const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    const url = req.url;

    res.writeHead(200, { 'Content-Type': 'text/plain' });

    if (url === '/home') {
        console.log('entered into the home')
        res.end('Welcome home');
    } else if (url === '/about') {
        console.log('entered into the about section')
        res.end('Welcome to About Us page');
    } else if (url === '/node') {
        console.log('entered into the node section')
        res.end('Welcome to my Node Js project');
    } else {
        res.end('Invalid URL. Please visit /home, /about, or /node');
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
