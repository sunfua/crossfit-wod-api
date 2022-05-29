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
    const {body} = req
    if (!body.name || !body.mode || !body.equipment || !body.exercises || !body.trainerTips){ 
        return
    }
    const newWorkout = {
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exercises: body.exercises,
        trainerTips: body.trainerTips
    }    
    const createWorkout = workoutService.createNewworkout(newWorkout)
    res.status(201).send({status:"OK", data: createNewworkout})
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