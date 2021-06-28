const router = require("express").Router();
const Workouts = require("../models/workouts");

router.post("/api/workouts", (req, res) => {
    Workouts.create({})
    .then((dbworkout) => {
        res.json(dbworkout);
    })
    .catch((err) => {
        res.json(err);
    });
})


router.get("/api/workouts", (req, res) => {
    Workouts.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: "$exercises.duration"
                }
            }
        }
    ])
    .then((dbworkouts) => {
        res.json(dbworkouts);
    })
    .catch((err) => {
        res.json(err);
    });
})

// put
router.put("/api/workouts/: id", (req, res) => {
    Workouts.findByIdAndUpdate(
        params.id, 
        {
            $push: {
                exercises: req.body
            }
        },
        {
            new: true,
            runValidators: true, 
        }
    )
    .then((dbworkout) => {
        res.json(dbworkout);
    })
    .catch((err) => {
        res.json(err);
    });
})

// get- range
router.get("/api/workouts/range", (req, res) => {
    Workouts.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: "$exercises.duration"
                }
            }
        }
    ])
    .sort({ _id: -1 })
    .limit(7)
    .then((dbworkouts) => {
        res.json(dbworkouts);
    })
    .catch((err) => {
        res.json(err);
    });
})

// delete
router.delete("/api/workouts", (req, res) => {
    Workouts.findByIdAndDelete(req.body.id)
    .then(() => {
        res.json(true);
    })
    .catch((err) => {
        res.json(err);
    });
})

module.exports = router;