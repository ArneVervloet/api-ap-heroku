const express = require('express');
const app = express();
var cors = require('cors');

app.use(
    cors({
        credentials: true,
        origin: 'https://baguette-app.herokuapp.com'
    })
);
app.options('*', cors());

app.get('/', (req, res) => res.send('Baguette-app is working :)'));

app.listen(process.env.PORT || 3000, function() {
    console.log('server running on port 3000', '');
});
