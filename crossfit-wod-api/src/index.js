const express = require('express')
const app = express();
const v1Route = require('./v1/routes')
const v1workoutRoute = require('./v1/routes/workoutRoutes')

const PORT = process.env.PORT || 3000
app.get('/',(req,res)=>{
    res.send('<h2>Its working </h2>')
})
app.use(express.json())
app.use('/api/v1',v1Route)
app.use('/api/v1/workouts',v1workoutRoute)

app.listen(PORT,()=>{
    console.log(`API is listening on port ${PORT}`)
})
