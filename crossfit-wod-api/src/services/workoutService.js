const Workout = require('../database/workout')
const { v4: uuid} = require('uuid')

const getAllworkouts = () => {
    const allWorkouts = Workout.getAllWorkouts()
    return allWorkouts
}
const getOneworkout = (workoutId) => {
    const workout = Workout.getOneworkout(workoutId)
    return workout
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
const updateOneworkout = (workoutId, changes) => {
    const updateWorkout = Workout.updateOneworkout(workoutId,changes)
    return updateWorkout
}
const deleteOneworkout = (workoutId) => {
    Workout.deleteOneworkout(workoutId)
}

module.exports = {
    getAllworkouts,
    getOneworkout,
    createNewworkout,
    updateOneworkout,
    deleteOneworkout
}