const express = require('express');

const app = express();
const port = process.env.APPID;

app.get('/', async (_, res) => {
    res.send(`Response from the server ${port}`);
});

app.get('/one', async (_, res) => {
    res.send(`Response from the server ${port} - Page one says Hello!`);
});

app.get('/two', async (_, res) => {
    res.send(`Response from the server ${port} - Page two says Hello!`);
});

app.get('/three', async (_, res) => {
    res.send(`Response from the server ${port} - Page three says Hello!`);
});

app.get('/admin', async (_, res) => {
    res.send(`Response from the server ${port} - This is the admin page, only few people should see it`);
});

app.listen(port, (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log(`Server up and running on ${port}`);
    }
});
