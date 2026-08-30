import React, { useEffect, useState } from "react";
import api from "../api/axios";

const stages = [
  {
    name: "New",
    label: "New Lead",
  },
  {
    name: "Contacted",
    label: "Contacted",
  },
  {
    name: "Qualified",
    label: "Qualified",
  },
  {
    name: "Proposal Sent",
    label: "Proposal Sent",
  },
  {
    name: "Closed Won",
    label: "Closed Won",
  },
  {
    name: "Closed Lost",
    label: "Closed Lost",
  },
];

const SalesPipeline = () => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await api.get("/auth/getlead");

        setLeads(response.data.leads);
      } catch (error) {
        console.error("Failed to fetch leads:", error);

        setError("Failed to load leads.");
      } finally {
        setLoading(false);
      }
    };

    fetchLeads();
  }, []);

  const getLeadsByStage = (stageName) => {
    return leads.filter((lead) => lead.status === stageName);
  };

  const getStageValue = (stageName) => {
    const stageLeads = getLeadsByStage(stageName);

    return stageLeads.reduce((total, lead) => {
      return total + Number(lead.dealValue || 0);
    }, 0);
  };

  if (loading) {
    return (
      <div className="p-6">
        <p className="text-slate-500">Loading pipeline...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-900">
        Sales Pipeline
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {stages.map((stage) => {
          const stageLeads = getLeadsByStage(stage.name);
          const stageValue = getStageValue(stage.name);

          return (
            <div
              key={stage.name}
              className="bg-slate-100/70 p-4 rounded-2xl space-y-3 min-h-[400px]"
            >
              {/* Stage header */}
              <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                <span className="font-semibold text-sm text-slate-700">
                  {stage.label}
                </span>

                <span className="text-xs bg-slate-200 text-slate-600 px-2 py-0.5 rounded-full font-bold">
                  {stageLeads.length}
                </span>
              </div>

              {/* Stage total */}
              <p className="text-xs font-medium text-slate-500">
                Value: ${stageValue.toLocaleString()}
              </p>

              {/* Leads */}
              <div className="space-y-2">
                {stageLeads.map((lead) => (
                  <div
                    key={lead._id}
                    className="p-3 bg-white rounded-xl shadow-sm border border-slate-200/60 space-y-2"
                  >
                    <p className="text-xs font-bold text-slate-800">
                      {lead.fullName}
                    </p>

                    <p className="text-xs text-slate-500">
                      {lead.email}
                    </p>

                    <p className="text-xs font-medium text-slate-600">
                      ${Number(lead.dealValue || 0).toLocaleString()}
                    </p>
                  </div>
                ))}

                {stageLeads.length === 0 && (
                  <p className="text-xs text-slate-400 text-center py-4">
                    No leads
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SalesPipeline;