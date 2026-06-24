'use client';
import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

export default function StaffManagement() {
  const [staffs, setStaffs] = useState<any[]>([]);

  useEffect(() => {
    fetchStaffs();
  }, []);

  async function fetchStaffs() {
    const { data } = await supabase.from('staffs').select('*');
    if (data) setStaffs(data);
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">隊員管理</h1>
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">隊員番号</th>
            <th className="border p-2">氏名</th>
            <th className="border p-2">状態</th>
          </tr>
        </thead>
        <tbody>
          {staffs.map((s) => (
            <tr key={s.id}>
              <td className="border p-2">{s.staff_number}</td>
              <td className="border p-2">{s.name}</td>
              <td className="border p-2">{s.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
