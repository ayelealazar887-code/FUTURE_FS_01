import React, { useState } from 'react';
import { Phone, Mail, Calendar, FileText, CheckCircle2 } from 'lucide-react';

const Activities = () => {
  const [formData, setFormData] = useState({
    title: '',
    type: 'Call',
    lead: '65f1a2b3c4d5e6f7a8b9c0d1', // Simulated selected Lead ObjectId
    scheduledAt: new Date().toISOString().slice(0, 16), // YYYY-MM-THH:mm for datetime-local input
  });

  // Mock leads list for dropdown population
  const leads = [
    { _id: '65f1a2b3c4d5e6f7a8b9c0d1', name: 'Samantha Miller' },
    { _id: '65f1a2b3c4d5e6f7a8b9c0d2', name: 'David Miller' },
    { _id: '65f1a2b3c4d5e6f7a8b9c0d3', name: 'TechCorp HQ' },
  ];

  // Local Activities list matching ActivitiesSchema
  const [activitiesList, setActivitiesList] = useState([
    {
      _id: 'act_101',
      title: 'Follow-up Call regarding proposal',
      type: 'Call',
      lead: { _id: '65f1a2b3c4d5e6f7a8b9c0d1', name: 'Samantha Miller' },
      performedBy: { name: 'Alex Johnson' },
      scheduledAt: '2026-08-26T10:00:00.000Z',
    },
    {
      _id: 'act_102',
      title: 'Sent updated pricing deck',
      type: 'Email',
      lead: { _id: '65f1a2b3c4d5e6f7a8b9c0d2', name: 'David Miller' },
      performedBy: { name: 'Alex Johnson' },
      scheduledAt: '2026-08-25T14:30:00.000Z',
    },
  ]);

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedLeadObj = leads.find((l) => l._id === formData.lead);

    // Create new Activities record matching ActivitiesSchema
    const newActivities = {
      _id: `act_${Date.now()}`,
      title: formData.title,
      type: formData.type,
      lead: selectedLeadObj || { _id: formData.lead, name: 'Selected Lead' },
      performedBy: { name: 'Alex Johnson' }, // Current logged-in user
      scheduledAt: new Date(formData.scheduledAt).toISOString(),
    };

    setActivitiesList([newActivities, ...activitiesList]);
    setSuccessMessage(`Activities "${formData.title}" logged successfully!`);

    // Reset form
    setFormData({
      title: '',
      type: 'Call',
      lead: leads[0]?._id || '',
      scheduledAt: new Date().toISOString().slice(0, 16),
    });

    setTimeout(() => setSuccessMessage(''), 3000);
  };

  // Icon mapping per Activities type
  const getTypeIcon = (type) => {
    switch (type) {
      case 'Call':
        return <Phone className="w-3.5 h-3.5 text-blue-600" />;
      case 'Email':
        return <Mail className="w-3.5 h-3.5 text-purple-600" />;
      case 'Meeting':
        return <Calendar className="w-3.5 h-3.5 text-orange-600" />;
      case 'Note':
        return <FileText className="w-3.5 h-3.5 text-emerald-600" />;
      default:
        return <CheckCircle2 className="w-3.5 h-3.5 text-slate-600" />;
    }
  };

  return (
    <div className="max-w-4xl space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Log Activities</h1>
        <p className="text-xs text-slate-500 mt-1">
          Schedule or record sales touchpoints matching your Activities schema.
        </p>
      </div>

      {successMessage && (
        <div className="p-3 text-xs font-semibold rounded-xl bg-orange-50 text-orange-600 border border-orange-200/80 max-w-xl">
          {successMessage}
        </div>
      )}

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Form Card (5 Columns) */}
        <div className="lg:col-span-5 bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
          <h2 className="text-sm font-bold text-slate-900 pb-2 border-b border-slate-100">
            Activities Details
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">
                Activities Title *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g. Discovery Call with CEO"
                required
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 text-slate-900"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">
                  Type *
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-orange-500 text-slate-900"
                >
                  <option value="Call">Call</option>
                  <option value="Email">Email</option>
                  <option value="Meeting">Meeting</option>
                  <option value="Note">Note</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">
                  Associated Lead *
                </label>
                <select
                  name="lead"
                  value={formData.lead}
                  onChange={handleChange}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-orange-500 text-slate-900"
                >
                  {leads.map((l) => (
                    <option key={l._id} value={l._id}>
                      {l.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">
                Scheduled At *
              </label>
              <input
                type="datetime-local"
                name="scheduledAt"
                value={formData.scheduledAt}
                onChange={handleChange}
                required
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-orange-500 text-slate-900"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-orange-600 text-white font-semibold rounded-xl hover:bg-orange-700 transition-colors text-sm shadow-sm"
            >
              Save Activities
            </button>
          </form>
        </div>

        {/* Activities Feed Card (7 Columns) */}
        <div className="lg:col-span-7 bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <h2 className="text-sm font-bold text-slate-900">Activities History</h2>
            <span className="text-xs bg-orange-50 text-orange-600 font-bold px-2.5 py-0.5 rounded-full">
              {activitiesList.length} Logged
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-[11px] text-slate-400 uppercase font-semibold border-b border-slate-100">
                  <th className="pb-2">Type & Title</th>
                  <th className="pb-2">Lead</th>
                  <th className="pb-2 text-right">Scheduled</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs">
                {activitiesList.map((act) => (
                  <tr key={act._id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-3">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 bg-slate-100 rounded-lg">
                          {getTypeIcon(act.type)}
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900">{act.title}</div>
                          <div className="text-[10px] text-slate-400">By: {act.performedBy?.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 font-medium text-slate-700">
                      {act.lead?.name}
                    </td>
                    <td className="py-3 text-right text-slate-400 font-medium text-[11px]">
                      {new Date(act.scheduledAt).toLocaleDateString()}{' '}
                      {new Date(act.scheduledAt).toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
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

export default Activities;