import badlandsLogo from '../../work/badlands-brewing/assets/badlands-logo-light.png';
import albumpickerLogo from './assets/album-picker.svg';
import spiralGif from './assets/spiral-one.gif';
import lifetalesLogo from './assets/lifetales-logo.svg';
import rlLogo from './assets/car.png';
import gymTodoLogo from './assets/gym-todo.svg';

const Projects = {
  lifetales: {
    name: 'LifeTales',
    skill: 'Dev & Design',
    image: lifetalesLogo,
  },
  rlinventory: {
    name: 'Rocket League Item Inventory',
    skill: 'Web Dev',
    image: rlLogo,
  },
  gymtodo: {
    name: 'Gym Todo',
    skill: 'App Dev',
    image: gymTodoLogo,
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
  badlands: {
    name: 'Badlands Brewing',
    skill: 'Logo Design',
    image: badlandsLogo,
  },
  albumpicker: {
    name: 'Album Picker',
    skill: 'Dev & Design',
    image: albumpickerLogo,
    backgroundColor: '#062F70',
  },
  loadingAnimations: {
    name: 'LoadingAnimations',
    skill: 'iOS Motion Design',
    image: spiralGif,
  },
};

export default Projects;
