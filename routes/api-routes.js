const db = require("../models");

const router = require("express").Router();

//Creates a new workout
router.post("/api/workouts", (req, res) => {
    
    db.Workout.create({})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
});


router.get("/api/workouts", (req, res) => {
    //like sequilize findOne or findall, this find method will find all workouts
    db.Workout.find({})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
    });



//Add exercises
router.put("/api/workouts/:id", ({body, params}, res) => {
    db.Workout.findByIdAndUpdate(
        params.id,
        { $push: { exercises: body } },
        { new: true, runValidators: true }
    )
        .then((dbWorkout) => {
            console.log(dbWorkout);
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
});


//show the total number of workouts on a stats page!
router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({}).limit(7)
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json(err);
    });
});



module.exports = router;