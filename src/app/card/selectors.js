import badlandsLogo from './assets/badlands-logo.svg';

export const selectProjectName = (project) => {
  if (project === 'badlands') return 'Badlands Brewing';
  if (project === 'albumpicker') return 'Album Picker';
  return false;
};

export const selectProjectSkill = (project) => {
  if (project === 'badlands') return 'Logo Design';
  if (project === 'albumpicker') return 'Dev & Design';
  return false;
};

export const selectProjectImage = (project) => {
  if (project === 'badlands') return badlandsLogo;
  return false;
};
