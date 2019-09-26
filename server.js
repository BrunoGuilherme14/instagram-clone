const express = require('express');
const path = require('path');
const nomeApp = process.env.npm_package_name;
const app = express();
 
app.use(express.static('./dist/instagram-clone'));
 
app.get('/*', (req, res) => {
    res.status(200).sendFile(path.join('./dist/instagram-clone/index.html'));
});
 
app.listen(process.env.PORT || 8080);