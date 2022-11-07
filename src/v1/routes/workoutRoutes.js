const express = require("express");
const workoutController = require("../../controllers/workoutController");

const router = express.Router();

//Los controlers se encargan de hacer todo el trabajo de la petición manejando los req y res.
console.log('1');
router.get("/", workoutController.getAllWorkouts);

router.get("/:workoutId", workoutController.getOneWorkout);

router.post("/", workoutController.createNewWorkout);

router.patch("/:workoutId", workoutController.updateOneWorkout);

router.delete("/:workoutId", workoutController.deleteOneWorkout);

module.exports = router;

    