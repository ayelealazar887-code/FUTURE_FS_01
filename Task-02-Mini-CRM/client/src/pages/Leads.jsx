import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import api from "../api/axios";
import LoadingPage from "../components/Loading";
import { FaSearch } from 'react-icons/fa'

const Leads = () => {
  const [leadsList, setLeadsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const response = await api.get("/auth/getLead");
        setLeadsList(response.data.leads || []);
      } catch (error) {
        console.error("Fetch leads error:", error);

        setError(error.response?.data?.message || "Failed to fetch leads");
      } finally {
        setLoading(false);
      }
    };

    fetchLeads();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this lead?")) {
      return;
    }

    try {
      await api.delete(`/auth/deleteLead/${id}`);
      setLeadsList((prev) => prev.filter((lead) => lead._id !== id));
    } catch (err) {
      console.error("Delete lead error:", err);
      alert(err.response?.data?.message || "Failed to delete lead");
    }
  };

  const filteredLeads = leadsList.filter((lead) => {
    const searchTerm = search.toLowerCase().trim();

    return (
      lead.fullName?.toLowerCase().includes(searchTerm) ||
      lead.email?.toLowerCase().includes(searchTerm) ||
      lead.status?.toLowerCase().includes(searchTerm)
    );
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentLeads = filteredLeads.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredLeads.length / itemsPerPage);

  if (loading) {
    return (
      <div className="p-6 text-sm text-slate-500">
        <LoadingPage />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="mt-3 flex items-center overflow-hidden rounded-lg border border-slate-300 bg-white shadow-sm">
        <input
          type="text"
          placeholder="Search leads..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className="flex-1 px-4 py-2.5 text-sm outline-none bg-white text-slate-900 placeholder-slate-400"
        />
        <button className="bg-emerald-600 px-5 py-2.5 text-white hover:bg-emerald-700 transition-colors duration-200 flex items-center justify-center">
          <FaSearch size={18} />
        </button>
      </div>
      <h1 className="text-2xl font-bold text-slate-900">Leads Management</h1>

      {error && (
        <div className="p-3 bg-red-50 text-red-600 rounded-xl text-sm">
          {error}
        </div>
      )}

      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
        {currentLeads.length === 0 ? (
          <div className="p-8 text-center text-sm text-slate-500">
            No leads found.
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200/80 text-xs text-slate-500 uppercase font-semibold">
                    <th className="p-4">Name</th>
                    <th className="p-4">Email</th>
                    <th className="p-4">Status</th>
                    <th className="p-4">Deal Value</th>
                    <th className="p-4">Delete</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
                  {currentLeads.map((lead) => (
                    <tr
                      key={lead._id}
                      className="hover:bg-slate-50/50 transition-colors cursor-pointer"
                    >
                      <td className="p-4 font-semibold text-slate-900">
                        {lead.fullName}
                      </td>
                      <td className="p-4 text-slate-500">{lead.email}</td>
                      <td className="p-4">
                        <span className="px-2.5 py-1 text-xs font-semibold bg-orange-50 text-orange-600 rounded-full">
                          {lead.status}
                        </span>
                      </td>
                      <td className="p-4 font-medium">${lead.dealValue}</td>
                      <td className="p-4 text-right">
                        <button
                          onClick={() => handleDelete(lead._id)}
                          className="px-3 py-1 text-xs font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {totalPages > 1 && (
              <div className="flex flex-col gap-3 border-t border-slate-200 bg-slate-50/70 p-4 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-sm font-medium text-slate-600">
                  Showing {indexOfFirstItem + 1} to{" "}
                  {Math.min(indexOfLastItem, filteredLeads.length)} of{" "}
                  {filteredLeads.length} entries
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                    className="rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-sm font-medium text-slate-700 transition-all duration-200 hover:border-orange-300 hover:text-orange-600 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-slate-300 disabled:hover:text-slate-700"
                  >
                    Previous
                  </button>

                  <div className="flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-1.5 py-1 shadow-sm">
                    <span className="rounded-lg bg-slate-900 px-2.5 py-1.5 text-xs font-bold text-white">
                      {currentPage}
                    </span>
                    <span className="px-1 text-xs font-medium text-slate-500">
                      / {totalPages}
                    </span>
                  </div>

                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className="rounded-xl bg-gradient-to-r from-orange-500 to-rose-500 px-3.5 py-2 text-sm font-medium text-white shadow-sm shadow-orange-500/20 transition-all duration-200 hover:from-orange-400 hover:to-rose-400 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:from-orange-500 disabled:hover:to-rose-500"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
export default Leads;
