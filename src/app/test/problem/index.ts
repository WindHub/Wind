import { JudgeState, JudgeLang } from '../../models/judge';

export let apb_problem = {
  id: 1,
  name: 'A+B Problem',
  isAvailable: true,
  content: 'Very easy problem',
  hint: '',
  data: [{
    name: 'Sample1',
    input: '1 2\n',
    output: '3\n'
  }, {
    name: 'Sample2',
    input: '4 5\n',
    output: '9\n'
  }],
  labels: [{ type: 'source', name: 'WindOJ' }, { type: 'type', name: 'Algorithm' }],
  limits: {
    'time': 1000,
    'memory': 65536
  },
  judge: {
    'ac': 100,
    'wa': 50,
    'tle': 10,
    'mle': 20,
    're': 5,
    'pe': 2,
    'sum': 187
  },
  permissions: [],
  contributors: [
    {id: 1, name: 'SkyZH'},
    {id: 5, name: 'CyanD1317'}
  ],
  state: JudgeState.ac
};

export let apbp_problem = {
  id: 2,
  name: 'A+B Problem Plus',
  isAvailable: true,
  content: 'Very difficult problem',
  hint: '',
  data: [{
    name: 'Sample1',
    input: '1 2\n',
    output: '3\n'
  }, {
    name: 'Sample2',
    input: '4 5\n',
    output: '9\n'
  }, {
    name: 'Sample3',
    input: '233333333\n466666666\n',
    output: '699999999\n'
  }],
  labels: [{ type: 'source', name: 'WindOJ' }, { type: 'type', name: 'Algorithm' }, { type: 'type', name: 'Math' }],
  limits: {
    'time': 1000,
    'memory': 65536,
    'lang': [JudgeLang.gpp, JudgeLang.gpp11, JudgeLang.gcc, JudgeLang.cpp, JudgeLang.c, JudgeLang.pas, JudgeLang.java]
  },
  judge: {
    'ac': 5,
    'wa': 10,
    'tle': 10,
    'mle': 20,
    're': 5,
    'pe': 2,
    'sum': 52
  },
  permissions: [{ type: 1, data: { exp: 20 }}],
  contributors: [
    {id: 5, name: 'CyanD1317'}
  ],
  state: JudgeState.mle
};

export let lsq_problem = {
  id: 3,
  name: 'lsq and osu!',
  isAvailable: false
};

export let skyzh_problem = {
  id: 4,
  name: 'SkyZH and Touhou',
  isAvailable: false
};
