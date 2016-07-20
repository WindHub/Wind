import { Problem } from './problem';
import { User } from './user';
import { DirectMessage } from './pi';
import { Permission } from './permission';

export enum ContestState {
  pd = 0,
  en = 1,
  rn = 2,
  ed = 3
}

export class Contest {
  public id: number;
  public name: string;
  public abstract: string;
  public description: string;
  public enrollTime: number;
  public startTime: number;
  public endTime: number;
  public isAvailable: boolean;
  public problems: Problem[];
  public enrolledUsers: User[];
  public notifications: DirectMessage[];
  public permissions: Permission[];
}
