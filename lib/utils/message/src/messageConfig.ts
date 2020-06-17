import { MessageBoxType } from '../../utils/config/neumorphic-type';

export interface MessageBoxConfig {
  message: string;
  type?: MessageBoxType | string;
  styleTimeout: number;
  removeTimeout: number;
}

