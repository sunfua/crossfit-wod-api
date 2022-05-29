const express = require('express')
const workoutController = require('../../controllers/workoutController')
const router = express.Router()

router.get('/',workoutController.getAllworkouts)
router.get('/:workoutId', workoutController.getOneworkout)
router.post('/', workoutController.createNewworkout)
router.patch('/:workoutId', workoutController.updateOneworkout)
router.delete('/:workoutId', workoutController.deleteOneworkout)

module.exports = router
