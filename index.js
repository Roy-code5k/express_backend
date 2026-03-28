import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/task', (req, res) => {
    console.log(req.body);
    res.json({ message: "Received", data: req.body });
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});