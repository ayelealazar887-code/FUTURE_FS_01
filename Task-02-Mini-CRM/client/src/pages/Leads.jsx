import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import api from '../api/axios';
import LoadingPage from '../components/Loading';



const Leads = () => {
  const [leadsList, setLeadsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const response = await api.get('/auth/getLead');

        setLeadsList(response.data.leads);
      } catch (error) {
        console.error('Fetch leads error:', error);

        setError(
          error.response?.data?.message || 
          'Failed to fetch leads'
        )
      } finally {
        setLoading(false);
      }
    };

    fetchLeads();
  },[]);

  if(loading) {
      return (
      <div className="p-6 text-sm text-slate-500">
        <LoadingPage />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-900">Leads Management</h1>

      {
        error && (
          <div className="p-3 bg-red-50 text-red-600 rounded-xl text-sm">
            {error}
          </div>
        )
      }

      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
      {leadsList.length === 0 ? (
          <div className="p-8 text-center text-sm text-slate-500">
            No leads found.
          </div>
        ) : (
        <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] text-left border-collapse">
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
              <tr key={lead._id} className="hover:bg-slate-50/50 transition-colors cursor-pointer">
                <td className="p-4 font-semibold text-slate-900">{lead.fullName}</td>
                <td className="p-4 text-slate-500">{lead.email}</td>
                <td className="p-4">
                  <span className="px-2.5 py-1 text-xs font-semibold bg-orange-50 text-orange-600 rounded-full">
                    {lead.status}
                  </span>
                </td>
                <td className="p-4 font-medium">${lead.dealValue}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        )}
      </div>
    </div>
  );
};
export default Leads;