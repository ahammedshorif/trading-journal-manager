import express from "express"
import journalRoutes from "./routes/journal.routes.js"
const app = express()
app.use(express.json())
const port = process.env.PORT || 5000


app.use("/api/journals", journalRoutes)








app.listen(port, ()=>{
    console.log(`server listening on ${port}`);
    
})