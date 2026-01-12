import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware.js"

const router= Router()

router.post("/:id", authMiddleware,(req,res)=>{
    res.json({
        mag:"journalAnalytics"
    })
})

 export default router