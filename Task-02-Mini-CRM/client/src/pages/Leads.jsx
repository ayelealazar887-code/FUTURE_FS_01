import React from 'react';

const leadsList = [
  { id: 1, name: 'Samantha', email: 'samantha@gmail.com', status: 'New', value: '$1,000' },
  { id: 2, name: 'David Miller', email: 'david@company.io', status: 'Contacted', value: '$2,500' },
  { id: 3, name: 'Elena Rostova', email: 'elena@tech.com', status: 'Qualified', value: '$4,200' },
];

const Leads = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-900">Leads Management</h1>

      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200/80 text-xs text-slate-500 uppercase font-semibold">
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Status</th>
              <th className="p-4">Deal Value</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
            {leadsList.map((lead) => (
              <tr key={lead.id} className="hover:bg-slate-50/50 transition-colors cursor-pointer">
                <td className="p-4 font-semibold text-slate-900">{lead.name}</td>
                <td className="p-4 text-slate-500">{lead.email}</td>
                <td className="p-4">
                  <span className="px-2.5 py-1 text-xs font-semibold bg-orange-50 text-orange-600 rounded-full">
                    {lead.status}
                  </span>
                </td>
                <td className="p-4 font-medium">{lead.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leads;