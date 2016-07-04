import { Problem, ProblemLabel, ProblemPermission, ProblemData } from '../../models/problem';
import { User } from '../../models/user';
import { JudgeState, JudgeLang } from '../../models/judge';

export let apb_problem = new Problem(
  1,
  'A+B Problem',
  true,
  'Very easy problem',
  '', [
    new ProblemData('Sample1', '1 2\n', '3\n'),
    new ProblemData('Sample2', '4 5\n', '9\n')
  ], [
    new ProblemLabel('source', 'WindOJ'),
    new ProblemLabel('type', 'Algorithm')
  ], {
    'time': 1000,
    'memory': 65536,
    'language': ['c++', 'pascal', 'python2', 'python3']
  }, {
    'ac': 100,
    'wa': 50,
    'tle': 10,
    'mle': 20,
    're': 5,
    'pe': 2,
    'sum': 187
  }, [], [
    new User(1, 'SkyZH'),
    new User(5, 'CyanD1317')
  ],
  JudgeState.ac
);

export let apbp_problem = new Problem(
  2,
  'A+B Problem Plus',
  true,
  'Very difficult problem',
  '', [
    new ProblemData('Sample1', '1\n2\n', '3\n'),
    new ProblemData('Sample2', '4\n5\n', '9\n'),
    new ProblemData('Sample3', '233333333\n466666666\n', '699999999\n')
  ], [
    new ProblemLabel('source', 'WindOJ'),
    new ProblemLabel('type', 'Algorithm'),
    new ProblemLabel('type', 'Math')
  ], {
    'time': 2000,
    'memory': 131072,
    'lang': [JudgeLang.gpp, JudgeLang.gpp11, JudgeLang.gcc, JudgeLang.cpp, JudgeLang.c, JudgeLang.pas, JudgeLang.java]
  }, {
    'ac': 5,
    'wa': 10,
    'tle': 10,
    'mle': 20,
    're': 5,
    'pe': 2,
    'sum': 52
  }, [
    new ProblemPermission(1, { exp: 20 })
  ], [
    new User(5, 'CyanD1317')
  ],
  JudgeState.mle
);

export let lsq_problem = new Problem(
  3,
  'lsq and osu!',
  false
);

export let skyzh_problem = new Problem(
  4,
  'SkyZH and Touhou',
  false
);
