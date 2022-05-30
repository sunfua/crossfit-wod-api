const workoutService = require('../services/workoutService')

const getAllworkouts = (req,res) => {
    const allWorkouts = workoutService.getAllworkouts()
    res.send({status: "OK", data: allWorkouts})
}
const getOneworkout = (req, res) => {
    if(!req.params.workoutId){
        return
    }
    const workout = workoutService.getOneworkout(req.params.workoutId)
    res.send({status:'OK', data:workout})
}
const createNewworkout = (req, res) => {
    const {body} = req
    if (!body.name || !body.mode || !body.equipment || !body.exercises || !body.trainerTips){ 
        res.status(400).send({
            status: 'failed',
            data: {
                error: "One of the following keys is missing or is empty in request body: 'name', 'mode', 'equipment', 'exercises', 'trainerTips'",
            }
        })
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
    if(!req.params.workoutId){
        return
    }
    const updateWorkout = workoutService.updateOneworkout(req.params.workoutId,req.body)
    res.send({status:'OK',data: updateWorkout})
}
const deleteOneworkout = (req,res)=>{
    if(!req.params.workoutId){
        return
    }
    workoutService.deleteOneworkout(req.params.workoutId)
    res.status(204).send({status: 'OK'})
}
module.exports = {
    getAllworkouts,
    getOneworkout,
    createNewworkout,
    updateOneworkout,
    deleteOneworkout
}