'use client';
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

export default function Dashboard() {
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    async function loadStats() {
      const today = new Date().toISOString().split('T')[0];
      const { data } = await supabase.rpc('get_daily_dashboard_stats', { target_date: today });
      if (data) setStats(data[0]);
    }
    loadStats();
  }, []);

  if (!stats) return <div>読み込み中...</div>;

  return (
    <div className="grid grid-cols-3 gap-4 p-6">
      <div className="p-4 bg-blue-100 rounded">必要人数: {stats.needed_count}</div>
      <div className="p-4 bg-green-100 rounded">配置済: {stats.assigned_count}</div>
      <div className="p-4 bg-red-100 rounded">不足人数: {stats.missing_count}</div>
    </div>
  );
}
