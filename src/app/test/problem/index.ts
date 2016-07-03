import { Problem, ProblemLabel, ProblemPermission, ProblemData } from '../../models/problem';
import { User } from '../../models/user';

export let apb_problem = new Problem(
  1,
  'A+B Problem',
  true,
  'Very easy problem', [
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
    'pe': 2
  }, [], [
    new ProblemData('1 2\n', '3\n'),
    new ProblemData('4 5\n', '9\n')
  ], [
    new User(1, 'SkyZH'),
    new User(5, 'CyanD1314')
  ]
);

export let apbp_problem = new Problem(
  2,
  'A+B Problem Plus',
  true,
  'Very difficult problem', [
    new ProblemLabel('source', 'WindOJ'),
    new ProblemLabel('type', 'Algorithm'),
    new ProblemLabel('type', 'Math')
  ], {
    'time': 2000,
    'memory': 131072,
    'language': ['c++', 'pascal']
  }, {
    'ac': 5,
    'wa': 10,
    'tle': 10,
    'mle': 20,
    're': 5,
    'pe': 2
  }, [
    new ProblemPermission(1, { exp: 20 })
  ], [
    new ProblemData('1\n2\n', '3\n'),
    new ProblemData('4\n5\n', '9\n'),
    new ProblemData('233333333\n466666666\n', '699999999\n')
  ], [
    new User(5, 'CyanD1314')
  ]
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
