import {Router} from "express";
import { getAll, create, remove } from "../controllers/server.js";

const router = Router();

// 1-й способ
// router.get("/api/serve", (req, res) => {
//     res.json({test: 42})
// })

// 2-й способ (приоритетнее)
router.get("/api/serve", getAll)

router.post("/api/serve", create)

router.delete("/api/serve/:id", remove)

export default router;