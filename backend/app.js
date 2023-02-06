const express = require('express');

const app = express();
const port = process.env.APPID;

app.get('/', async (_, res) => {
    res.send(`Response from the server ${port}`);
});

app.listen(port, (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log(`Server up and running on ${port}`);
    }
});
