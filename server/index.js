import express from "express";

const app = express();

const PORT = process.env.PORT || 9000;

app.get('/api', (req, res) => {
    res.json({ message: 'Hello server' });
});

app.listen(PORT, () =>{
    console.log(`App listening on port ${PORT}`)
})
