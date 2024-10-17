// @desc get goals
// @route GET /api/goals
// access Private
const getGoals = (req, res) => {
  res.json({ mesage: "get goals", data: "all data" });
};
// @desc set goal
// @route POST /api/goals
// access Private
const setGoal = (req, res) =>
  res.json({ mesage: "set goals", data: "all data" });
// @desc update goal
// @route PUT /api/goals/:id
// access Private
const updateGoal = (req, res) =>
  res.json({ mesage: `update goal ${req.params.id}`, data: "all data" });
// @desc delete goal
// @route DELETE /api/goals/:id
// access Private
const deleteGoal = (req, res) =>
  res.json({ mesage: `delete goal ${req.params.id}`, data: "all data" });

export { getGoals, setGoal, updateGoal, deleteGoal };
