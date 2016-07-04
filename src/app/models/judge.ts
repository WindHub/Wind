import { User } from './user';
import { Problem } from './problem';

export enum JudgeState {
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

export class JudgePoint {
  constructor(
    public id: number,
    public name: string,
    public state: JudgeState,
    public time: number,
    public memory: number,
    public score: number,
    public total: number
  ) {}
}

export enum JudgeLang {
  gpp = 0,
  gpp11,
  gcc,
  cpp,
  c,
  pas,
  java,
  py2,
  py3,
  pypy2,
  pypy3,
  go,
  haskell,
  jsv8,
  rust,
  perl
}

export class Judge {
  constructor(
   public id: number,
   public user: User,
   public problem: Problem,
   public state: JudgeState,
   public time: number,
   public memory: number,
   public language: JudgeLang,
   public length: number,
   public score: number,
   public totalScore: number,
   public submittime: number,
   public points?: JudgePoint[],
   public code?: string
 ) {}
}