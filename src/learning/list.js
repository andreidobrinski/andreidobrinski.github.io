const LearningList = {
  1: {
    author: 'Codecademy',
    name: 'React Part 1 & 2, JavaScript, Responsive Design, HTML, CSS, Git',
    link: 'https://www.codecademy.com/catalog/subject/all',
    type: 'Course',
  },
  2: {
    author: 'FreeCodeCamp',
    name: 'Basic JavaScript',
    link:
      'https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript',
    type: 'Course',
  },
  3: {
    author: 'Various authors',
    name: 'Hack Design',
    link: 'https://hackdesign.org/',
    type: 'Course',
  },
  4: {
    author: 'Taras Mankovski',
    name: 'Microstates Workshop',
    link: 'https://github.com/taras/microstates-workshop',
    repo: 'https://github.com/andreidobrinski/microstates-workshop',
    type: 'Workshop',
  },
  5: {
    author: 'Stephen Grider',
    name: 'Modern React and Redux',
    link: 'https://www.udemy.com/react-redux/',
    repo: 'https://github.com/andreidobrinski/modern-react-redux-course',
    type: 'Course',
  },
  6: {
    author: 'Wes Bos',
    name: 'CSS Grid',
    link: 'https://cssgrid.io/',
    repo: 'https://github.com/andreidobrinski/css-grid',
    type: 'Course',
  },
  7: {
    author: 'Kent C. Dodds',
    name: 'Advanced React Patterns',
    link: 'https://frontendmasters.com/courses/advanced-react-patterns/',
    repo: 'https://github.com/andreidobrinski/advanced-react-patterns-v2',
    type: 'Workshop',
  },
  8: {
    author: 'Kent C. Dodds',
    name: 'Testing React Applications',
    link: 'https://frontendmasters.com/courses/testing-react/',
    repo: 'https://github.com/andreidobrinski/testing-workshop',
    type: 'Workshop',
  },
  9: {
    author: 'Monarch Haveri',
    name: 'React 101',
    link: 'https://github.com/monarchjhaveri/react101',
    repo: 'https://github.com/andreidobrinski/react101',
    type: 'Workshop',
  },
  10: {
    author: 'Designlab',
    name: 'Figma 101',
    link: 'https://trydesignlab.com/figma-101-course/',
    type: 'Course',
  },
  11: {
    author: 'RegexOne',
    name: 'Learn Regular Expressions',
    link: 'https://regexone.com/',
    type: 'Lessons',
  },
  12: {
    author: 'Wes Bos',
    name: 'Mastering Markdown',
    link: 'https://masteringmarkdown.com',
    type: 'Mini Course',
  },
  13: {
    author: 'Matt Gaunt (Google CodeLabs)',
    name: 'Adding Push Notifications to a Web App',
    link:
      'https://developers.google.com/web/fundamentals/codelabs/push-notifications/',
    repo: 'https://github.com/andreidobrinski/web-push-codelab',
    type: 'Tutorial',
  },
  14: {
    author: 'Stephen Grider',
    name: 'The Coding Interview Bootcamp',
    link:
      'https://www.udemy.com/coding-interview-bootcamp-algorithms-and-data-structure/',
    repo: 'https://github.com/andreidobrinski/AlgoCasts',
    type: 'Course',
  },
  15: {
    author: 'Taylor Bell',
    name: 'Build a Blog with React and Markdown using Gatsby',
    link:
      'https://egghead.io/courses/build-a-blog-with-react-and-markdown-using-gatsby',
    repo: 'https://github.com/andreidobrinski/blog-tutorial-gatsby',
    type: 'Egghead Course',
  },
  16: {
    author: 'Zach Goldstein',
    name: 'Penrose Triangle with Three.js',
    link: 'https://github.com/zachgoldstein/penroseTriangle',
    type: 'Workshop',
  },
  17: {
    author: 'Peter Cottle',
    name: 'Learn Git Branching',
    link: 'https://learngitbranching.js.org/',
    type: 'Mini-Course',
  },
  18: {
    author: 'Codecademy',
    name: 'Learn Color Design',
    link: 'https://www.codecademy.com/learn/learn-color-design',
    type: 'Course',
  },
  19: {
    author: 'Nik Graf',
    name: 'GraphQL Data in React with Apollo Client',
    link: 'https://egghead.io/courses/graphql-data-in-react-with-apollo-client',
    repo:
      'https://github.com/andreidobrinski/graphql-apollo-client-course-egghead',
    type: 'Egghead Course',
  },
  20: {
    author: 'Chris Achard',
    name: 'Progressive Web Apps in React with create-react-app',
    link:
      'https://egghead.io/courses/progressive-web-apps-in-react-with-create-react-app',
    repo: 'https://github.com/andreidobrinski/todo-pwa-course',
    type: 'Egghead Course',
  },
  // 2019
  21: {
    author: 'David Katz',
    name: 'Essentials in JavaScript ES6',
    link: 'https://www.udemy.com/essentials-in-javascript-es6/',
    repo: 'https://github.com/andreidobrinski/es6-course-udemy',
    type: 'Course',
  },
  22: {
    author: 'Marius Schulz',
    name: 'JavaScript Promises in Depth',
    link: 'https://egghead.io/courses/javascript-promises-in-depth',
    type: 'Egghead Course',
  },
  23: {
    author: 'Trevor Miller',
    name: 'Practical Git for Everyday Professional Use',
    link:
      'https://egghead.io/courses/practical-git-for-everyday-professional-use',
    type: 'Egghead Course',
  },
  24: {
    author: 'Stephen Grider',
    name: 'Electron for Desktop Apps: The Complete Developers Guide',
    link: 'https://www.udemy.com/electron-react-tutorial/',
    repo: 'https://github.com/andreidobrinski/electron-course-udemy',
    type: 'Course',
  },
  25: {
    author: 'Codecademy',
    name: 'Learn Express',
    link: 'https://www.codecademy.com/learn/learn-express',
    type: 'Course',
  },
  26: {
    author: 'Ryerson University',
    name: 'Introduction to Web Accessibility',
    link: 'https://de.ryerson.ca/wa/introduction/',
    type: 'Course',
  },
  27: {
    author: 'Kent C. Dodds',
    name: 'React Hooks and Suspense',
    link:
      'https://egghead.io/playlists/react-hooks-and-suspense-650307f2?__s=ns3juptwu4vybog9objt',
    type: 'Egghead Course',
  },
  28: {
    author: 'Stephen Grider',
    name: 'The Complete React Native and Redux Course',
    link: 'https://www.udemy.com/the-complete-react-native-and-redux-course/',
    repo: 'https://github.com/andreidobrinski/react-native-course-udemy',
    type: 'Course',
  },
  29: {
    author: 'Cameron Nokes',
    name: 'Advanced Bash Automation for Web Developers',
    link: 'https://www.udemy.com/the-complete-react-native-and-redux-course/',
    type: 'Egghead Course',
  },
  30: {
    name: 'Simplify React Apps with React Hooks',
    author: 'Kent C. Dodds',
    link: 'https://egghead.io/courses/simplify-react-apps-with-react-hooks',
    type: 'Egghead Course',
  },
  31: {
    name: 'Typescript with modern React (i.e. hooks, context, suspense)',
    author: 'Richard Oliver Bray',
    link: 'https://www.udemy.com/typescript-with-react-hooks-and-context/',
    repo: 'https://github.com/andreidobrinski/typescript-with-react-course-udemy',
    type: 'Course',
  },
  32: {
    name: 'JavaScript ES2019 in Practice',
    author: 'Mike Sherov',
    link: 'https://egghead.io/lessons/javascript-course-overview-javascript-es2019-in-practice',
    type: 'Egghead Course',
  },
  33: {
    name: 'Building Neural Networks in JavaScript',
    author: 'Matthew Mihok',
    link: 'https://github.com/mihok/workshop-aug13',
    repo: 'https://github.com/andreidobrinski/workshop-aug13',
    type: 'Workshop',
  },
  34: {
    name: 'Augmented Reality Workshop',
    author: 'Simon Stern',
    link: 'https://github.com/simistern/ARWorkshop01',
    repo: 'https://github.com/andreidobrinski/react-ar-workshop-sept-2019',
    type: 'Workshop',
  },
  35: {
    name: `Dart and Flutter: The Complete Developer's Guide`,
    author: 'Stephen Grider',
    link: 'https://www.udemy.com/course/dart-and-flutter-the-complete-developers-guide/',
    repo: 'https://github.com/andreidobrinski/dart-and-flutter-course-udemy',
    type: 'Course',
  },
};

export default LearningList;
