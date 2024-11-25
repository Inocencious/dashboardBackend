import { Router } from "express";
import userData from "../data/dummyData"

const router = Router();

router.post("/", (req, res) => {
    const { email } = req.body

    if (userData[email]) {
        res.json({mssg: "Login Successful", user: userData[email]})
    } else {
        res.status(404).json({error: "User not found"})
    }
})

export default router;