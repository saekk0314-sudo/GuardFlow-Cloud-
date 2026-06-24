export function calculateScore(staff: any, site: any) {
  let score = 0;

  // 資格: 20点
  if (staff.has_qualification) score += 20;
  // 交通費: 15点 (距離計算等のロジックをここへ)
  // 通勤時間: 10点
  // 指名: 15点
  // 固定班: 10点
  // 経験: 10点
  // リーダー経験: 10点
  // 隊長経験: 5点
  // 稼働率: 5点

  return score;
}
