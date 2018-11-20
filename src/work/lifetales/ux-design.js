/* eslint-disable max-len */
import React from 'react';
import StackSkill from '../../app/stack-skill';
import { ExternalLink } from '../../app/styled';
import { Body, ListItem } from '../styled';

const UXDesign = () => (
  <>
    <StackSkill skill="sketch" />
    <StackSkill skill="invision" />
    <StackSkill skill="xcode" />
    <Body>I&apos;ve taken on several UX roles at LifeTales, as designers at startups usually do, all while seeking to understand how users interact with the product. These responsibilities included:</Body>
    <ul>
      <ListItem>UX research with user testing and surveys.</ListItem>
      <ListItem>High-fidelity UI design for screens.</ListItem>
      <ListItem>Wireframing user flows.</ListItem>
      <ListItem>Designing logic for when to ask users for standard iOS permissions.</ListItem>
    </ul>
    <Body>I conducted UX research both independently and as part of a design team at LifeTales. The research included:</Body>
    <ul>
      <ListItem>Video-recorded user testing sessions of the onboarding and story interaction experience.</ListItem>
      <ListItem>Hallway user testing of specific features or sections of the app.</ListItem>
      <ListItem>Interviews with members of the target market.</ListItem>
      <ListItem>Composing and sending out surveys to test interest in potential new features.</ListItem>
    </ul>
    <Body>User testing was a positive experience for learning pain points in the UX flows, as well as hearing users&apos; responses to our value proposition. These tests gave me valuable information to consider while designing flows and information architecture, and an understanding of what users value in the app.</Body>
    <Body>I used prototypes to conduct user tests of new features, as well as testing the prototype against the current app to see which version provided a better experience for the user. For the user tests, I designed the screens in Sketch, used Invision for flow-based prototypes, and used Swift/Xcode for more interaction-based prototypes.</Body>
    <Body>
      I also designed, animated, and wrote the script for
      {' '}
      <ExternalLink href="https://www.youtube.com/watch?v=6FqLhpU_t_E">
        this PowToon video
      </ExternalLink>
      {' '}
      that we used in our marketing materials.
    </Body>
    <Body>I was also involved with the strategic side of design - how LifeTales fits in to the competitive market and how to categorize the value propositions of the app. I designed a framework to group different use cases of the app at a high-level, to understand how the user comes into the app, why they do it, and how long they spend in their sessions. In addition, I wrote competitive analyses of companies with similar offerings to LifeTales, to help guide the positioning and strategy of LifeTales.</Body>
    <Body>My experiences as a UX designer has helped me to be a better web developer. By understanding the intersection of business goals, how users interact with the product and the technology powering it, I’ve been able to make better decisions about tackling problems in a lean manner.</Body>
  </>
);

export default UXDesign;
