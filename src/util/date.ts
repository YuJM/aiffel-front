import { format } from 'date-fns';

export function dateFormat(date: Date | number = new Date()) {
  return format(date, 'yyyy-MM-dd');
}
