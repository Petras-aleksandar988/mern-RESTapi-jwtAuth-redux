import asyncHandler from "express-async-handler"


// @desc get goals
// @route GET /api/goals
// access Private
const getGoals = asyncHandler( async (req, res) => {
  res.json({ mesage: "get goals", data: "all data" });
})
// @desc set goal
// @route POST /api/goals
// access Private
const setGoal = asyncHandler( async (req, res) =>{
    
    if(!req.body.test) {
         res.status(400)
       throw new Error("Please add a text filed")
    
    };
    
  res.status(200).json({ mesage: "set goals", data: "all data" })
})
// @desc update goal
// @route PUT /api/goals/:id
// access Private
const updateGoal = asyncHandler( async (req, res) =>{
  res.json({ mesage: `update goal ${req.params.id}`, data: "all data" })})
// @desc delete goal
// @route DELETE /api/goals/:id
// access Private
const deleteGoal = asyncHandler( async (req, res) =>{
  res.json({ mesage: `delete goal ${req.params.id}`, data: "all data" })})

export { getGoals, setGoal, updateGoal, deleteGoal };
