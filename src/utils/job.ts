import { FieldSet } from "airtable";

export interface Job extends FieldSet {
  id: number;
  name: string;
  company: string;
  startDate: string;
  description_en?: string;
  description_ru?: string;
  endDate?: string;
  tags?: string[];
}
