CREATE OR REPLACE FUNCTION get_daily_dashboard_stats(target_date DATE)
RETURNS TABLE(
  needed_count BIGINT,
  assigned_count BIGINT,
  missing_count BIGINT
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    SUM(s.required_count)::BIGINT as needed_count,
    COUNT(a.id)::BIGINT as assigned_count,
    (SUM(s.required_count) - COUNT(a.id))::BIGINT as missing_count
  FROM sites s
  LEFT JOIN assignments a ON s.id = a.site_id AND a.date = target_date;
END;
$$ LANGUAGE plpgsql;
