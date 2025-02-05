import { Router } from "express";
const router = Router();

router.get('/',(req,res)=>{
    res.send("Album route wiht GET method");

})

export default router;