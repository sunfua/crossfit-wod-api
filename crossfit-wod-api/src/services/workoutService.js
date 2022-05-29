const Workout = require('../database/workout')
const { v4: uuid} = require('uuid')

const getAllworkouts = () => {
    const allWorkouts = Workout.getAllWorkouts()
    return allWorkouts
}
const getOneworkout = () => {
    return
}
const createNewworkout = (newWorkout) => {
    const workoutToinsert = {
        ...newWorkout,
        id: uuid(),
        createAt: new Date().toLocaleDateString('es-US',{timeZone:'UTC'}),
        updateAt: new Date().toLocaleDateString('es-US',{timeZone:'UTC'})
    }
    const createWorkout = Workout.createNewworkout(workoutToinsert)
    return createWorkout
}
const updateOneworkout = () => {
    return
}
const deleteOneworkout = () => {
    return
}

module.exports = {
    getAllworkouts,
    getOneworkout,
    createNewworkout,
    updateOneworkout,
    deleteOneworkout
}