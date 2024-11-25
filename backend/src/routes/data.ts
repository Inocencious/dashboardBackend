import { Router } from "express";
import userData from "../data/dummyData";

const router = Router()

router.get("/:email", (req, res) => {
    const { email } = req.params

    if (userData[email]) {
        res.json(userData[email]);
      } else {
        res.status(404).json({ error: "User not found" });
      }
    });
    
export default router;