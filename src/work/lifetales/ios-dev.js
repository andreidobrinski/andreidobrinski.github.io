/* eslint-disable max-len */
import React from 'react';
import StackSkill from '../../app/stack-skill';
import { Body, ListItem } from '../styled';

const IosDev = () => (
  <>
    <StackSkill skill="swift" />
    <StackSkill skill="xcode" />
    <Body>During my time as a UX designer at LifeTales, I began learning Swift on my own time. After a few months, I moved into an iOS development role at the company. I mainly focused on animation, prototyping, as well as building out and styling the front-end.</Body>
    <Body>Some of the work I did for the iOS app included:</Body>
    <ul>
      <ListItem>Designing and developing an animated fly-out menu, made in a XIB to be reused across the app.</ListItem>
      <ListItem>Designing and developing onboarding welcome slides.</ListItem>
      <ListItem>Creating a style guide and using it to update the UI to be consistent with the design specs.</ListItem>
    </ul>
    <Body>Throughout these projects, I familiarized myself with Xcode, the Swift language, and the VIPER stack. My experiences of working with a small team on a disciplined architecture helped to make me a better web developer today.</Body>
    <Body>I also used Xcode for prototyping animations and flows, as part of my responsibilities as a UX designer at LifeTales.</Body>
  </>
);

export default IosDev;
