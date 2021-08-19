const router = require("express").Router();
const Workout = require("../models/workoutModel.js");

router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put('/api/workouts/:id', async (req, res) => {
  try {
    const exercise = await Workout.updateOne(
      {'_id': req.params.id},
      {$push: {exercises: req.body}}
    );

    res.status(200).json(exercise);
  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  };
})

router.post("/api/workouts/bulk", ({ body }, res) => {
  Workout.insertMany(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  Workout.aggregate([
    { $sort: { day: -1 }},
    { $addFields: {
      totalDuration: { $sum: '$exercises.duration' }
    }}
  ]).then(dbWorkout => {
    res.status(200).json(dbWorkout);
  }).catch(err => {
    res.status(500).json(err);
  })

  // Workout.find({})
  //   .sort({ date: -1 })
  //   .then(dbWorkout => {
  //     res.json(dbWorkout);
  //   })
  //   .catch(err => {
  //     res.status(400).json(err);
  //   });
});

router.get('/api/workouts/range', async (req, res) => {
  try {
    const range = await Workout.aggregate([
      { $sort: { day: -1 }},
      {
        $addFields: {
          totalDuration: { $sum: '$exercises.duration'}
        }
      }
    ]).limit(7);

    res.status(200).json(range)
  } catch(err) {
    console.log(err);
    res.status(500).json(err);
  };
});

module.exports = router;