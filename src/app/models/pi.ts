import { User } from './user';

export class DirectMessage {
  public origin: User;
  public target: User;
  public message: string;
  public time: number;
};
