const express = require('express');
const protect = require('../middleware/authMiddleware.js');
const { addLead, getLeads, deleteLead } = require('../controllers/leadController.js');


const leadRouter = express.Router();

leadRouter.post('/auth/addlead', protect, addLead)
leadRouter.get('/auth/getlead', protect, getLeads)
leadRouter.delete('/auth/deleteLead/:id', protect, deleteLead);

module.exports = leadRouter;