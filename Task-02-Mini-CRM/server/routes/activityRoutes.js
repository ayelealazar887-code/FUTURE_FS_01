const express = require('express');
const protect = require('../middleware/authMiddleware.js');
const { createActivity, getActivities, deleteActivity } = require('../controllers/activityController.js')


const activityRouter = express.Router();

activityRouter.post('/auth/addactivity', protect, createActivity)
activityRouter.get('/auth/getactivity', protect, getActivities)
activityRouter.delete('/auth/deleteactivity/:id', protect, deleteActivity);

module.exports = activityRouter;