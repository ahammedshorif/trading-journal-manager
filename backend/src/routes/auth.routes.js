import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware";

const router = Router();

router.post("/login",authMiddleware,async(req , res)=>{
    res.json({
        message: "Login success",
        user: req.user
    })
 
})

export default router;