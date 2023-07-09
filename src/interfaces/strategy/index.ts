import { BusinessInterface } from 'interfaces/business';
import { GetQueryInterface } from 'interfaces';

export interface StrategyInterface {
  id?: string;
  type: string;
  content: string;
  business_id?: string;
  created_at?: any;
  updated_at?: any;

  business?: BusinessInterface;
  _count?: {};
}

export interface StrategyGetQueryInterface extends GetQueryInterface {
  id?: string;
  type?: string;
  content?: string;
  business_id?: string;
}
