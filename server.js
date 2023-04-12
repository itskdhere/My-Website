import express from 'express';
import path from 'path';

const server = express();

const port = process.env.PORT || 3000;

server.disable('x-powered-by');
server.disable('X-Powered-By');
server.set('x-powered-by', false);
server.set('X-Powered-By', false);

server.use("/static", express.static(path.resolve("public", "static")));

server.get("/*", (req, res) => {
    res.sendFile(path.resolve("public", "index.html"));
});

server.listen(port, () => console.log(`Server Running On Port ${port} !! \nVisit: http://localhost:${port}`));