const DB = require('./db.json')
const {saveToDatabase} = require('./utils')

const getAllWorkouts = () => {
    return DB.workouts
}
const getOneworkout = (workoutId) => {
    const workout = DB.workouts.find((workout)=>workout.id === workoutId)
    if (!workout) {
        return
    }
    return workout
}
const createNewWorkout = (newWorkout) => {
    const isAllreadyAdded = DB.workouts.findIndex((workout)=>workout.name===newWorkout.name)>-1
    if(isAllreadyAdded) {
        return
    }
    DB.workouts.push(newWorkout)
    saveToDatabase(DB)
    return newWorkout
}
const updateOneworkout = (workoutId, changes) => {
    const indexForupdate = DB.workouts.findIndex((workout)=>workout.id===workoutId)
    if (indexForupdate===-1){
        return
    }
    const updateWorkout = {
        ...DB.workouts[indexForupdate],
        ...changes,
        updateAt: new Date().toLocaleString('es-US',{timeZone: 'UTC'}),
    }
    DB.workouts[indexForupdate]=updateWorkout
    saveToDatabase(DB)
    return updateWorkout
}
const deleteOneworkout = (workoutId) => {
    const indexForDelete=DB.workouts.findIndex((workout)=>workout.id===workoutId)
    if(indexForDelete===-1) {
        return
    }
    DB.workouts.splice(indexForDelete,1)
    saveToDatabase(DB)
}
module.exports = { 
    getAllWorkouts,
    getOneworkout,
    createNewWorkout,
    updateOneworkout,
    deleteOneworkout
}