'use client';

import { useEffect, useState } from 'react';

interface Lead {
  _id: string;
  name: string;
  email: string;
  phone: string;
}

export default function DashboardPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchLeads = async () => {
      const token = localStorage.getItem('token');
      const res = await fetch('/api/admin/leads', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (data.success) {
        setLeads(data.data);
      } else {
        setError('Unauthorized');
      }
    };

    fetchLeads();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded shadow-md  mt-20">
        <h1 className="text-3xl font-bold mb-6">Leads</h1>
        <ul>
          {leads.map((lead) => (
            <li key={lead._id} className="border-b border-gray-200 py-2">
              <span className="font-semibold">{lead.name}</span> - {lead.email} - {lead.phone}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
