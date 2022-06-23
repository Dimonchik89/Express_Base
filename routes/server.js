import {Router} from "express";
import { getAll } from "../controllers/server.js";

const router = Router();

// 1-й способ
// router.get("/api/serve", (req, res) => {
//     res.json({test: 42})
// })

// 2-й способ (приоритетнее)
router.get("/api/serve", getAll)

export default router;