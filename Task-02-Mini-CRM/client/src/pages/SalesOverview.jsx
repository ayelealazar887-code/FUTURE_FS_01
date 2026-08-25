import React from 'react';
import { DollarSign, Users, TrendingUp, CheckCircle2 } from 'lucide-react';

const SalesOverview = () => {
  const stats = [
    { label: 'Total Revenue', value: '$124,500', icon: DollarSign, change: '+12.5%' },
    { label: 'Active Leads', value: '1,420', icon: Users, change: '+8.1%' },
    { label: 'Conversion Rate', value: '24.8%', icon: TrendingUp, change: '+3.2%' },
    { label: 'Closed Deals', value: '184', icon: CheckCircle2, change: '+15.4%' },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-900">Sales Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="p-5 bg-white rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{stat.label}</span>
                <div className="p-2 bg-orange-50 rounded-lg text-orange-600">
                  <Icon className="w-5 h-5" />
                </div>
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-2xl font-bold text-slate-900">{stat.value}</span>
                <span className="text-xs font-semibold text-emerald-600">{stat.change}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SalesOverview;