import { Contest, ContestState } from '../models';

export const ContestClass = [
  'default',
  'warning',
  'info',
  'default'
];

export function getContestState(contest: Contest, currentTime: number) {
  if (currentTime < contest.enrollTime) {
    return ContestState.pd;
  } else if (currentTime < contest.startTime) {
    return ContestState.en;
  } else if (currentTime < contest.endTime) {
    return ContestState.rn;
  } else {
    return ContestState.ed;
  }
}
