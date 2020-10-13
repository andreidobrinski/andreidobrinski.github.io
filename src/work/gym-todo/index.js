import React from 'react';
import ScrollToTop from '../../app/scroll-to-top';
import Card from '../../app/card';
import StackSkill from '../../app/stack-skill';
import BackButton from '../../app/back-button';
import Footer from '../../app/footer';
import { Img } from '../../app/large-image/styled';
import { ExternalLink } from '../../app/styled';
import {
  Content, Context, Header, Subheader, Body, ListItem,
} from '../styled';

const GymTodo = () => (
  <ScrollToTop>
    <Card isHeader project="gymtodo" />
    <Content>
      <Header>Gym Todo</Header>
      <Context>
        Building an open-source
        {' '}
        <ExternalLink
          to="https://github.com/andreidobrinski/todo-flutter"
          eventLabel="Gym Todo repo from project"
        >
          Flutter app  
        </ExternalLink>
        {' '}
        and
        {' '}
        <ExternalLink
          to="https://github.com/andreidobrinski/gym-todo"
          eventLabel="Gym Todo repo from project"
        >
          React/TypeScript app
        </ExternalLink>
        {' '}
        to keep track of exercises to be done at the gym every week.
        Check it out
        {' '}
        <ExternalLink
          to="https://andreidobrinski.com/gym-todo"
          eventLabel="Gym Todo demo from project"
        >
          here.
        </ExternalLink>
      </Context>
      <Img src="https://github.com/andreidobrinski/todo-flutter/raw/master/demo.png" alt="gym todo app with flutter" />
      <Subheader>The Motivation</Subheader>
      <Body>
        The idea for this app came up while attending a
        {' '}
        <ExternalLink
          to="https://www.meetup.com/GDG-Toronto/"
          eventLabel="GDG group"
        >
          GDG Toronto Study Jam meetup.
        </ExternalLink>
        {' '}
        The meetup was based around building out an app idea in Flutter,
        and meeting every other week to discuss our progress and challenges along the way.
      </Body>
      <Body>
        The goal was to create a simple todo app that can be used at the gym.
        Each todo item (exercise) would uncheck itself one week after the date it was completed.
        The app is meant to balance the rigidity of pre-planned workouts with the accountability of
        doing the exercises that needed to be done every week,
        while staying flexible about what to do at the gym on any given day.
      </Body>
      <Body>
        I later decided to rewrite the app with React and TypeScript to practice the technologies and to
        be able to share the app with more people.
      </Body>
      <Subheader>The Stack: Flutter App</Subheader>
      <StackSkill skill="flutter" />
      <StackSkill skill="dartprovider" />
      <StackSkill skill="sqlite" />
      <Subheader>The Stack: React App</Subheader>
      <StackSkill skill="react" />
      <StackSkill skill="typescript" />
      <StackSkill skill="styledcomponents" />
      <StackSkill skill="jest" />
      <StackSkill skill="reactTestingLib" />
      <Subheader>The Product</Subheader>
      <Body>
        A todo app that adds, delete, checks and unchecks exercises.
        On launch, if an exercise has been completed more than a week ago, the app will uncheck the exercise,
        letting the user know that it's time to do that exercise again.
        All the exercise data is stored locally on the device.
      </Body>
      <Subheader>The Architecture</Subheader>
      <Body>
        The app uses the Flutter provider pattern to pass data to any widget that needs it.
        The <code>TodoProvider</code> component is responsible for bridging the communication between the database and the UI.
      </Body>
      <Body>
        Each UI action is a function passed down by the Provider.
        Each function starts by optimistically updating the UI with local state.
        After that, the Provider function calls the appropriate database action
        (<code>insert</code>, <code>update</code>, <code>delete</code>),
        the database updates the data,
        the Provider queries the updated database and updates the local state with the updated database query.
      </Body>
      <Body>Here's a diagram of what the widget tree looks like:</Body>
      <Img src="https://github.com/andreidobrinski/todo-flutter/raw/master/widgets.png" alt="widget tree" />
      <Body>Here's how that maps to the UI:</Body>
      <Img src="https://github.com/andreidobrinski/todo-flutter/raw/master/demo-labelled.png" alt="labelled ui" />
      <Subheader>The Process</Subheader>
      <Body>
        I started by building the <code>TaskItem</code> and identifying the data model that an exercise needed to have.
        It needed:
      </Body>
      <ol>
        <ListItem><code>int id</code></ListItem>
        <ListItem><code>String title</code></ListItem>
        <ListItem><code>bool complete</code></ListItem>
        <ListItem><code>dynamic dateCompleted</code></ListItem>
      </ol>
      <Body>
        I made <code>dateCompleted</code> of type <code>dynamic</code> to be able to coerce the data between a
        string of <code>DateTime</code> when the task is complete and a <code>null</code> value when it is not.
      </Body>
      <Body>
        I decided to implement the Provider pattern for state management,
        mainly because I wanted to learn it along the way but also because it seemed like the
        preferred state management solution at the time of building.
        I saw the parallels between the Provider pattern and React's Context API, which helped my understanding.
        The Provider was a great fit for communicating with the SQLite database and to passing functions to my app's widgets.
      </Body>
      <Subheader>The Challenges</Subheader>
      <Body>
        The challenges I ran into while building this app are generally in one of two categories:
        the majority of issues were related to environment and some were related to developing with Dart in Flutter.
      </Body>
      <Body>
        One environmental challenge was getting Flutter to build to an iOS device.
        There were a few issues along the way, but one that wasn't well documented was making
        sure that the Pods XCode project is inside the workspace.
        Others that experienced my issue online said to "use the workspace instead of the project",
        which only worked for me after noticing that my workspace and project were
        the same and that my workspaceneeded the Cocoapods.
      </Body>
      <Body>
        A challenge I faced with Dart and Flutter was wrapping my head around working with mutability.
        This was difficult at first, coming from a Functional Programming in React background,
        but I eventually came around the to Object-Oriented way of doing things.
      </Body>
      <Subheader>The Next Steps</Subheader>
      <Body>
        I intend to continue using the app at the gym and keep an eye out for any functionality I may want to add on later.
      </Body>
      <Body>
        The app hasn't been shipped to the App Store or Play Store, but the code will continue to stay
        {' '}
        <ExternalLink
          to="https://github.com/andreidobrinski/todo-flutter"
          eventLabel="Gym Todo repo"
        >
          open source.
        </ExternalLink>
      </Body>
      <Body>
        The TypeScript/React app is live and can be found
        {' '}
        <ExternalLink
          to="https://andreidobrinski.com/gym-todo/"
          eventLabel="TypeScript app demo"
        >
          here.
        </ExternalLink>
      </Body>
      <BackButton />
    </Content>
    <Footer />
  </ScrollToTop>
);

export default GymTodo;
