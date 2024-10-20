import asyncHandler from "express-async-handler"
import Goal from "../models/goalModel.js"

// @desc get goals
// @route GET /api/goals
// access Private
const getGoals = asyncHandler( async (req, res) => {

   const goals  = await  Goal.find()


  res.json( goals );
})


// @desc set goal
// @route POST /api/goals
// access Private
const setGoal = asyncHandler( async (req, res) =>{
    
    if(!req.body.text) {
         res.status(400)
       throw new Error("Please add a text filed")
    
    };
    const goal = await Goal.create({
      text: req.body.text,
    })
    console.log(goal);
    
  res.status(200).json(goal)
})


// @desc update goal
// @route PUT /api/goals/:id
// access Private
const updateGoal = asyncHandler( async (req, res) =>{
   
  const goal = await Goal.findById(req.params.id)
  if(!goal){
    res.status(400)
    throw new Error("Goal not found")
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body,{
    new: true,
  } )

  res.json(updatedGoal)})


// @desc delete goal
// @route DELETE /api/goals/:id
// access Private
const deleteGoal = asyncHandler( async (req, res) =>{
    
  const goal = await Goal.findById(req.params.id)
  if(!goal){
    res.status(400)
    throw new Error("Goal not found")
  }
  await Goal.findByIdAndDelete()
  res.json({ id: req.params.id})})

export { getGoals, setGoal, updateGoal, deleteGoal };
