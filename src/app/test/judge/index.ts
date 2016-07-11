import { JudgeState, JudgeLang } from '../../models/judge';

export let points = [];

for (let i = 1; i <= 10; i++) {
  points.push({
    id: i,
    user: i < 8 ? { id: 1, name: 'SkyZH' } : { id: 5, name: 'CyanD1317' },
    problem: i < 3 ? { id: 1, name: 'A+B Problem' } : { id: 2, name: 'A+B Problem Plus' },
    state: i < 5 ? JudgeState.ac : JudgeState.mle,
    time: 221,
    memory: i > 3 ? 3321 : 32876,
    lang: JudgeLang.gpp11,
    length: 233,
    score: 50,
    totalScore: 100,
    submittime: Date.now() - (i - 1) * 100000000,
    isAvailable: i > 4 ? true : false
  });
}
