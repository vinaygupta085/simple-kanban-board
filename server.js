const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist/simple-kanban-board'));

app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/dist/simple-kanban-board/index.html'));});
app.listen(process.env.PORT || 8080);
