const express = require('express');
const app = express();
const path = require('path')

app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('../client/dist')) //builds out routes automatically

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/dist/index.html'))
    })
}



const PORT = process.env.PORT || 3014;


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

