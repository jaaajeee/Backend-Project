const express = require('express')

const activityDataRouter = require('./activityDatas')

const router = express.Router();



router.use('/me/activityData', activityDataRouter);

// router.post('/login', (req, res, next) => {});
// router.post('/signup', (req, res, next) => {});

// router.get('/me', (req, res, next) => {});
// router.put('/me', (req, res, next) => {});

module.exports = router;