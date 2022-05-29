const Workout = require('../database/workout')

const getAllworkouts = () => {
    const allWorkouts = Workout.getAllWorkouts()
    return allWorkouts
}
const getOneworkout = () => {
    return
}
const createNewworkout = () => {
    return
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