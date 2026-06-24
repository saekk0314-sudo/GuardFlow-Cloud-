// src/app/test-db/page.tsx
import { supabase } from '@/lib/supabase';

export default async function TestPage() {
  // sitesテーブルからデータを1件だけ取ってみる
  const { data, error } = await supabase.from('sites').select('*').limit(1);

  return (
    <div className="p-10">
      <h1 className="text-xl font-bold">接続確認結果</h1>
      {error ? (
        <p className="text-red-500">エラー: {error.message}</p>
      ) : (
        <pre className="bg-gray-100 p-4 mt-4">
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
}
