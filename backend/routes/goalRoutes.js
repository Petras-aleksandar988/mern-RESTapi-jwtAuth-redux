import express from "express";
import {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} from "../controllers/goalControllers.js";
const router = express.Router();

router.route("/").get(getGoals).post(setGoal);
router.route("/:id").delete(deleteGoal).put(updateGoal);

export default router;
