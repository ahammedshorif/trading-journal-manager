import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware.js"

const router= Router()

router.post("/:journalId", authMiddleware,(req,res)=>{
    res.json({
        mag:"addTrade"
    })
})

module.exports = router