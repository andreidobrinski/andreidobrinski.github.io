import illustratorIcon from './assets/illustrator.svg';
import reactIcon from './assets/react.svg';
import reactRouterIcon from './assets/react-router.svg';
import sketchIcon from './assets/sketch.svg';
import styledComponentsIcon from './assets/styled-components.png';
import googleSheetsIcon from './assets/google-sheets.png';

export const selectImage = (skill) => {
  if (skill === 'illustrator') return illustratorIcon;
  if (skill === 'react') return reactIcon;
  if (skill === 'reactrouter') return reactRouterIcon;
  if (skill === 'sketch') return sketchIcon;
  if (skill === 'styledcomponents') return styledComponentsIcon;
  if (skill === 'googlesheets') return googleSheetsIcon;
  return false;
};

export const selectTitle = (skill) => {
  if (skill === 'illustrator') return 'Adobe Illustrator';
  if (skill === 'react') return 'React';
  if (skill === 'reactrouter') return 'React-Router';
  if (skill === 'sketch') return 'Sketch';
  if (skill === 'styledcomponents') return 'Styled Components';
  if (skill === 'googlesheets') return 'Google Sheets';
  return false;
};

export const selectAltText = skill => `${selectTitle(skill)} icon`;
