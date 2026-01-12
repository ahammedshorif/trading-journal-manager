import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import journalRoutes from "./routes/journal.routes.js"
import authRoutes from "./routes/auth.routes.js"
import analyticsRoutes from "./routes/analytics.routes.js"

const app = express();
dotenv.config();

app.use(express.json())
app.use(cors())
const port = process.env.PORT || 5000


app.use("/api/journals", journalRoutes)
app.use("/api/auth",authRoutes)
app.use("/api/analytics",analyticsRoutes)








app.listen(port, ()=>{
    console.log(`server listening on ${port}`);
    
})