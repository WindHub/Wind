import { User } from './user';
import { JudgeState } from './judge';
import { Permission } from './permission';

export class ProblemLabel {
  public type: string;
  public name: string;
}

export class ProblemData {
  public name: string;
  public input: string;
  public output: string;
}

export class Problem {
  public id: number;
  public name: string;
  public isAvailable: boolean;
  public content: string;
  public hint: string;
  public data: ProblemData[];
  public labels: ProblemLabel[];
  public limits: {};
  public judge: {};
  public permissions: Permission[];
  public contributors: User[];
  public state: JudgeState;
}
