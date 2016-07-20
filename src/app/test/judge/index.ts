import { JudgeState, JudgeLang } from '../../models';

export let points = [];

let __test_points = [];

for (let i = 1; i <= 10; i++) {
  __test_points.push({
    id: i,
    name: 'Case #' + i,
    state: i > 5 ? JudgeState.ac : JudgeState.mle,
    time: 233 + i,
    memory: 32767,
    score: i > 5 ? 10 : 0,
    totalScore: 10
  });
}

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
    submitTime: Date.now() - (i - 1) * 100000000,
    isAvailable: i > 4 ? true : false,
    points: i > 4 ? __test_points : [],
    code: '#include<iostream>\nusing namespace std;\nint main() {\n    int a, b;\n    cin >> a >> b;\n    cout << a + b << endl;\n    return 0;\n\n\n\n\n\n\n\n\n\n\n\n\n}',
    detail: 'Judged by Official Judger\n'
  });
}
