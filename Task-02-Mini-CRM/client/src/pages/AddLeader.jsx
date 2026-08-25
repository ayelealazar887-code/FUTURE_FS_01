import React from 'react';

const AddLeader = () => {
  return (
    <div className="max-w-xl space-y-6">
      <h1 className="text-2xl font-bold text-slate-900">Add New Team Leader</h1>

      <form className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
        <div>
          <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Leader Name</label>
          <input type="text" placeholder="e.g. Alex Johnson" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Email</label>
          <input type="email" placeholder="alex@company.com" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Assigned Department</label>
          <select className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500">
            <option>Enterprise Sales</option>
            <option>SMB Operations</option>
            <option>Customer Success</option>
          </select>
        </div>
        <button type="submit" className="w-full py-3 bg-orange-600 text-white font-semibold rounded-xl hover:bg-orange-700 transition-colors text-sm">
          Save Leader
        </button>
      </form>
    </div>
  );
};

export default AddLeader;