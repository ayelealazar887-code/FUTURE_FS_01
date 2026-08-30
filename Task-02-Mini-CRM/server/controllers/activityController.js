const Activity = require("../models/Activity.js");

const createActivity = async (req, res) => {
  try {
    const { title, type, lead, scheduledAt } = req.body;

    if (!title || !type || !lead) {
      return res.status(400).json({
        message: "Title, type, and lead are required",
      });
    }

    if (!req.user || !req.user._id) {
      return res.status(401).json({
        message: "User not authenticated",
      });
    }

    const activity = await Activity.create({
      title,
      type,
      lead,
      performedBy: req.user._id,
      scheduledAt: scheduledAt || new Date(),
    });

    const populatedActivity = await Activity.findById(activity._id)
      .populate("lead", "fullName email")
      .populate("performedBy", "fullName email");

    return res.status(201).json({
      message: "Activity created successfully",
      activity: populatedActivity,
    });
  } catch (error) {
    console.error("CREATE ACTIVITY ERROR:", error);

    return res.status(500).json({
      message: "Failed to create activity",
      error: error.message,
    });
  }
};

const getActivities = async (req, res) => {
  try {
    const activities = await Activity.find()
      .populate("lead", "fullName email")
      .populate("performedBy", "fullName email")
      .sort({ scheduledAt: -1 });

    res.status(200).json({
      message: "Activities retrieved successfully",
      count: activities.length,
      activities,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve activities",
      error: error.message,
    });
  }
};

const deleteActivity = async (req, res) => {
  try {
    const activity = await Activity.findByIdAndDelete(req.params.id);

    if (!activity) {
      return res.status(404).json({
        message: "Activity not found",
      });
    }

    res.status(200).json({
      message: "Activity deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete activity",
      error: error.message,
    });
  }
};

module.exports = { createActivity, getActivities, deleteActivity };
