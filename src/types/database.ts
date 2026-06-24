export interface Staff {
  id: string;
  staff_number: string;
  name: string;
  kana: string;
  phone: string;
  status: 'active' | 'inactive';
}

export interface Site {
  id: number;
  site_number: string;
  name: string;
  required_count: number;
  start_time: string;
  end_time: string;
}

export interface Assignment {
  id: string;
  site_id: number;
  staff_id: string;
  date: string;
  status: 'unconfirmed' | 'confirmed' | 'declined' | 'absent';
}
