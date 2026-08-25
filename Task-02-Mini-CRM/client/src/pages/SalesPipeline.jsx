import React from 'react';

const stages = [
  { name: 'New Lead', count: 12, value: '$24,000' },
  { name: 'Contacted', count: 8, value: '$18,500' },
  { name: 'Qualified', count: 5, value: '$15,000' },
  { name: 'Proposal Sent', count: 3, value: '$9,200' },
  { name: 'Closed Won', count: 6, value: '$31,000' },
];

const SalesPipeline = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-900">Sales Pipeline</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {stages.map((stage) => (
          <div key={stage.name} className="bg-slate-100/70 p-4 rounded-2xl space-y-3 min-h-[400px]">
            <div className="flex justify-between items-center pb-2 border-b border-slate-200">
              <span className="font-semibold text-sm text-slate-700">{stage.name}</span>
              <span className="text-xs bg-slate-200 text-slate-600 px-2 py-0.5 rounded-full font-bold">{stage.count}</span>
            </div>
            <p className="text-xs font-medium text-slate-500">Value: {stage.value}</p>

            <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-200/60 space-y-2">
              <p className="text-xs font-bold text-slate-800">Acme Corp Deal</p>
              <p className="text-xs text-slate-500">$5,000 • High Priority</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesPipeline;