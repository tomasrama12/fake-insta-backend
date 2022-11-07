
const Workout = require('../database/Workout');
const {v4: uuid } = require('uuid');

//Contiene la lógica de negocio, que además se comunica con el modelo que tiene comunicación directa con la base de datos.


const getAllWorkouts = async () => {
    const allWorkouts = await Workout.getAllWorkouts();
    console.log('service get ' + allWorkouts);
    return allWorkouts;
  };
  
  const getOneWorkout = () => {
    return;
  };
  
  const createNewWorkout = async (newWorkout) => {
    
    console.log('estoy service ');
    try {
      const  createdWorkout = await Workout.createNewWorkout(newWorkout);
      return createdWorkout;
    } catch (error) {
      throw error;
    }
    
  };
  
  const updateOneWorkout = () => {
    return;
  };
  
  const deleteOneWorkout = () => {
    return;
  };
  
  module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
  };