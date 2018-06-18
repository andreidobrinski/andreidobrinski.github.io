import illustratorIcon from './assets/illustrator-icon.svg';

export const selectImage = (skill) => {
  if (skill === 'illustrator') return illustratorIcon;
  return false;
};

export const selectTitle = (skill) => {
  if (skill === 'illustrator') return 'Adobe Illustrator';
  return false;
};

export const selectAltText = skill => `${selectTitle(skill)} icon`;
