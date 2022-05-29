const workoutService = require('../services/workoutService')

const getAllworkouts = (req,res) => {
    const allWorkouts = workoutService.getAllworkouts()
    res.send({status: "OK", data: allWorkouts})
}
const getOneworkout = (req, res) => {
    const workout = workoutService.getOneworkout()
    res.send('Get an existing workout')
}
const createNewworkout = (req, res) => {
    const createWorkout = workoutService.createNewworkout()
    res.send('Create a new worout')
}
const updateOneworkout = (req, res) => {
    const updateWorkout = workoutService.updateOneworkout()
    res.send('Update sn existing workout')
}
const deleteOneworkout = (req,res)=>{
    workoutService.deleteOneworkout()
    res.send('Delete an existing workout')
}
module.exports = {
    getAllworkouts,
    getOneworkout,
    createNewworkout,
    updateOneworkout,
    deleteOneworkout
}