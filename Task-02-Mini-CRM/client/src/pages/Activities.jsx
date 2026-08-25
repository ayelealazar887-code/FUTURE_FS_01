import React from 'react';
import { Mail, PhoneCall, Calendar } from 'lucide-react';

const activities = [
  { id: 1, type: 'Call', title: 'Call with Samantha', time: '10:30 AM', icon: PhoneCall },
  { id: 2, type: 'Email', title: 'Sent pricing proposal to Acme Corp', time: '01:15 PM', icon: Mail },
  { id: 3, type: 'Meeting', title: 'Demo review with Lead Team', time: '04:00 PM', icon: Calendar },
];

const Activities = () => {
  return (
    <div className="space-y-6 max-w-3xl">
      <h1 className="text-2xl font-bold text-slate-900">Recent Activities</h1>

      <div className="bg-white rounded-2xl border border-slate-200/80 divide-y divide-slate-100 shadow-sm">
        {activities.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.id} className="p-4 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-2.5 bg-orange-50 text-orange-600 rounded-xl">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">{item.title}</p>
                  <span className="text-xs text-slate-400">{item.type}</span>
                </div>
              </div>
              <span className="text-xs font-medium text-slate-400">{item.time}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Activities;