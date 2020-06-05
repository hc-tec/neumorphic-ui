import { MessageBoxType } from '../utils/config/neumorphic-type';

export interface MessageBoxConfig {
  message: string;
  type: MessageBoxType;
  styleTimeout: number;
  removeTimeout: number;
}

