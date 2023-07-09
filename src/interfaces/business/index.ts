import { FeedbackInterface } from 'interfaces/feedback';
import { StrategyInterface } from 'interfaces/strategy';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface BusinessInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  feedback?: FeedbackInterface[];
  strategy?: StrategyInterface[];
  user?: UserInterface;
  _count?: {
    feedback?: number;
    strategy?: number;
  };
}

export interface BusinessGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
