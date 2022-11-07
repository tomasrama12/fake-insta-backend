
const workoutSchema = require('./WorkoutMongo')

// *** ADD ***


const getAllWorkouts = async () => {

  const dataret = await workoutSchema.find();
  console.log(dataret);
  return dataret;
};

// *** ADD ***
const createNewWorkout = async (newWorkout) => {
  //chequear si ya existe.

  try {
    const wkSchema = workoutSchema(newWorkout);

    console.log('estoy acaa ' + wkSchema);

    let x = await wkSchema.save();
    console.log('llegue lejos' + x);

    return newWorkout;
  } catch (err) {
    console.log('xdddddddd');
    throw {status:500, message: err?.message || err};
  }
  
};

module.exports = {
  getAllWorkouts,
  // *** ADD ***
  createNewWorkout,
};