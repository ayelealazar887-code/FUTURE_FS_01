const Lead = require("../models/Lead.js");

const addLead = async (req, res) => {
  try {
    const { fullName, email, status, dealValue, initialNote } = req.body;

    if (!fullName || !email) {
      return res.status(400).json({
        message: "Full name and email are required!",
      });
    }

    const lead = new Lead({
      fullName,
      email,
      status: status || "New",
      dealValue: dealValue || 0,
      notes: initialNote
        ? [
            {
              text: initialNote,
              createdBy: req.user.userId,
            },
          ]
        : [],
    });

    const savedLead = await lead.save();

    res.status(201).json({
      message: "Lead created successfully",
      lead: savedLead,
    });
  } catch (error) {
    console.error("Add lead error:", error);

    res.status(500).json({
      message: "Failed to create lead",
      error: error.message,
    });
  }
};

const getLeads = async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });

    res.status(200).json({
      leads,
    });
  } catch (error) {
    console.error(`Get leads error:`, error);

    res.status(500).json({
      message: "Failed to fetch leads",
      error: error.message,
    });
  }
};

const deleteLead = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedLead = await Lead.findByIdAndDelete(id);

    if (!deleteLead) {
      return res.status(404).json({
        message: "Lead not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Lead deleted successfully",
    });
  } catch (error) {
    console.error("Delete lead error:", error);
    return res
      .status(500)
      .json({ message: "Server error while deleting lead" });
  }
};

module.exports = {
  addLead,
  getLeads,
  deleteLead
};
