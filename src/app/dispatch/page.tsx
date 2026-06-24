'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

export default function DispatchBoard() {
  const [sites, setSites] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await supabase.from('sites').select('*');
      if (data) setSites(data);
    }
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 p-6 h-screen bg-gray-50">
      {/* 左カラム：不足現場 */}
      <div className="bg-white p-4 shadow rounded">
        <h2 className="font-bold mb-4">不足現場一覧</h2>
        {sites.map(site => (
          <div key={site.id} className="p-2 border-b cursor-pointer hover:bg-blue-50">
            {site.name} ({site.required_count}名)
          </div>
        ))}
      </div>

      {/* 中央：現場詳細 */}
      <div className="bg-white p-4 shadow rounded">
        <h2 className="font-bold mb-4">現場詳細</h2>
        {/* 現場の詳細情報と配置状況を表示 */}
      </div>

      {/* 右：AI候補 */}
      <div className="bg-white p-4 shadow rounded">
        <h2 className="font-bold mb-4">AI候補一覧</h2>
        {/* スコアリングされた隊員リスト */}
      </div>
    </div>
  );
}
