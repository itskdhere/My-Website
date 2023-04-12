import express from 'express';
import path from 'path';

const server = express();

const port = process.env.PORT || 3000;

//server.use(express.static('public'));

server.set('x-powered-by', 'Express.JS/NGiNX');

server.use("/static", express.static(path.resolve("public", "static")));

server.get("/*", (req, res) => {
    res.sendFile(path.resolve("public", "index.html"));
});

server.listen(port, () => console.log(`Server Running On Port ${port} !! \nVisit: http://localhost:${port}`));