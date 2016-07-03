import { User } from './user';
import { Problem } from './problem';

export enum JudgeStatus {
  pending = 0,
  wait,
  ready,
  running,
  re,
  wa,
  tle,
  mle,
  unknown,
  ve,
  ac,
  pe
}

export class Judge {
  constructor(
   public id: number,
   public user: User,
   public problem: Problem,
   public status: JudgeStatus
 ) {}
}
