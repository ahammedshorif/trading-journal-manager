import express from "express";
import "dotenv/config";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 8000;
// * Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
    return res.json({
      mes: `its working`
    })
});
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
//# sourceMappingURL=index.js.map