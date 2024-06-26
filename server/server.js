const express = require('express');
const app = express();
const path = require('path')

app.use(express.json());

if (process.env.NODE_ENV === 'production') {

    const clientPath = path.resolve(__dirname, '../client/dist');

    app.use(express.static(clientPath)) //builds out routes automatically

    app.get('*', (req, res) => {
        res.sendFile(path.join(clientPath, '../client/dist/index.html'))
    })
}



const PORT = process.env.PORT || 3014;


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

