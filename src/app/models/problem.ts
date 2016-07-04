import { User } from './user';
import { JudgeState } from './judge';

export class ProblemPermission {
  constructor(
    public type: number,
    public data: Object
 ) {}
}

export class ProblemLabel {
  constructor(
    public type: string,
    public name: string
 ) {}
}

export class ProblemData {
  constructor(
    public name: string,
    public input: string,
    public output: string
 ) {}
}

export class Problem {
  constructor(
    public id: number,
    public name: string,
    public isAvailable?: boolean,
    public content?: string,
    public hint?: string,
    public data?: ProblemData[],
    public labels?: ProblemLabel[],
    public limits?: Object,
    public judge?: Object,
    public permissions?: ProblemPermission[],
    public contributors?: User[],
    public state?: JudgeState
 ) {}
}