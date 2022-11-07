const workoutService = require("../services/workoutService");
//Se comunica con los servicios además de manejar las req y res mirando los datos que llegan y validarlo.
const getAllWorkouts = async (req, res) => {
  // *** ADD ***
  const allWorkouts = await workoutService.getAllWorkouts();
  console.log(allWorkouts + ' del controller');
  res.send({status: 'OK', data: allWorkouts});
};

const getOneWorkout = (req, res) => {
  // *** ADD ***
  const workout = workoutService.getOneWorkout(req.params.workoutId);
  res.send("Get an existing workout");
};

const createNewWorkout = async (req, res, next) => {
  // *** ADD ***
  const {body} = req; //desestructuración.
  /*
  //clausula de cierre, salir si no es correcto.
  if (
    !body.name ||
    !body.mode ||
    !body.equipment ||
    !body.exercises ||
    !body.trainerTips
  ){
    return;
  }*/

  const newWorkout = {
    id: body.id,
    name: body.name,
    mode: body.mode,
  };

  console.log('estoy controller');

  try {
    const createdWorkout = await workoutService.createNewWorkout(newWorkout);
    res.status(201).send({status: 'OK', data: createdWorkout})
  } catch (error) {
    res.status(error?.status || 500).send({status:"FAILED", data:{error: error?.message || error}})
  }
  
};

const updateOneWorkout = (req, res) => {
  // *** ADD ***
  const updatedWorkout = workoutService.updateOneWorkout(req.params.workoutId);
  res.send("Update an existing workout");
};

const deleteOneWorkout = (req, res, next) => {
  // *** ADD ***
  workoutService.deleteOneWorkout(req.params.workoutId);
  res.send("Delete an existing workout");
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};