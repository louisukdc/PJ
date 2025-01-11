import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import PeminjamanRoute from "./routes/PeminjamanRoute.js";
import AnggotaRoute from "./routes/AnggotaRoute.js";
import BukuRoute from "./routes/BukuRoute.js";
import PengembalianRoute from "./routes/PengembalianRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.use(PengembalianRoute);
app.use(AnggotaRoute);
app.use(PeminjamanRoute);
app.use(BukuRoute);


app.listen(5002, () => console.log('Server up and running...'));