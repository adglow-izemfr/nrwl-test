export interface TrackerEntry {
  category: TrackerCategories;
  event: string;
  label?: string;
  value?: number;
}
export type TrackerCategories = 'ERROR' | 'BUSINESS' | 'SYSTEM';
