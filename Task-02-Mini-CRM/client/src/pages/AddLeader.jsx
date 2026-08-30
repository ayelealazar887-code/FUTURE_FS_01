import React, { useState } from 'react';
import api from '../api/axios';
import { useEffect } from 'react';

const AddLeader = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    status: 'New',
    dealValue: '',
    initialNote: '',
  });
  
  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const response = await api.get('/auth/getLead');

        setLeadsList(response.data.leads);
      } catch (error) {
        console.error('Fetch leads error:', error)
      }
    };

    fetchLeads();
  },[])
  const [leadsList, setLeadsList] = useState([])

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      
      const response = await api.post('/auth/addlead', formData);

      const newLead = response.data.lead
      console.log(response.data.message);

      setLeadsList((prevLeads) => [
        newLead,
        ...prevLeads
      ]);
      
      setSuccessMessage(
        `Lead "${newLead.fullName}" created successfully!`
      );

      setFormData({
        fullName: '',
        email: '',
        status: 'New',
        dealValue: '',
        initialNote: '',
      });

      setTimeout(() => {
        setSuccessMessage('')
      }, 3000);
    } catch (error) {
        console.error('Create lead error:', error);

        setSuccessMessage(
          error.response?.data?.message ||
          'Failed to create lead'
        );
    }
  };

  return (
    <div className="max-w-4xl space-y-6">

      <div>
        <h1 className="text-2xl font-bold text-slate-900">Add New Lead</h1>
        <p className="text-xs text-slate-500 mt-1">
          Create a new prospective client record aligned with your Lead database model.
        </p>
      </div>

      {successMessage && (
        <div className="p-3 text-xs font-semibold rounded-xl bg-green-50 text-green-600 border border-green-200/80 max-w-xl">
          {successMessage}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-5 bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
          <h2 className="text-sm font-bold text-slate-900 pb-2 border-b border-slate-100">
            Lead Details
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Samantha Miller"
                required
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 text-slate-900"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="samantha@acmecorp.com"
                required
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 text-slate-900"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">
                  Status
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-orange-500 text-slate-900"
                >
                  <option value="New">New</option>
                  <option value="Contacted">Contacted</option>
                  <option value="Qualified">Qualified</option>
                  <option value="Proposal Sent">Proposal Sent</option>
                  <option value="Closed Won">Closed Won</option>
                  <option value="Closed Lost">Closed Lost</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">
                  Deal Value ($) *
                </label>
                <input
                  type="number"
                  name="dealValue"
                  value={formData.dealValue}
                  onChange={handleChange}
                  placeholder="5000"
                  min="0"
                  required
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-orange-500 text-slate-900"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">
                Initial Note (noteSchema)
              </label>
              <textarea
                name="initialNote"
                rows={2}
                value={formData.initialNote}
                onChange={handleChange}
                placeholder="Log initial contact details or notes..."
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-orange-500 text-slate-900 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-orange-600 text-white font-semibold rounded-xl hover:bg-orange-700 transition-colors text-sm shadow-sm"
            >
              Save Lead
            </button>
          </form>
        </div>

        <div className="lg:col-span-7 bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <h2 className="text-sm font-bold text-slate-900">Recent Leads</h2>
            <span className="text-xs bg-orange-50 text-orange-600 font-bold px-2.5 py-0.5 rounded-full">
              {leadsList.length} Leads
            </span>
          </div>

          <div className="max-h-[60vh] overflow-y-auto overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-[11px] text-slate-400 uppercase font-semibold border-b border-slate-100">
                  <th className="pb-2">Lead</th>
                  <th className="pb-2">Status</th>
                  <th className="pb-2">Value</th>
                  <th className="pb-2 text-right">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs">
                {leadsList.map((lead) => (
                  <tr key={lead._id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-3 font-semibold text-slate-900">
                      <div>{lead.fullName}</div>
                      <div className="text-[11px] font-normal text-slate-400">{lead.email}</div>
                    </td>
                    <td className="py-3">
                      <span className="px-2 py-0.5 text-[11px] font-semibold bg-orange-50 text-orange-600 rounded-md">
                        {lead.status}
                      </span>
                    </td>
                    <td className="py-3 font-medium text-slate-800">
                      ${lead.dealValue.toLocaleString()}
                    </td>
                    <td className="py-3 text-right text-slate-400 font-medium">
                      {lead.notes.length}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddLeader;