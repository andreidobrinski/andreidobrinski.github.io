/* eslint-disable max-len */
import React from 'react';
import StackSkill from '../../app/stack-skill';
import { ExternalLink } from '../../app/styled';
import { Body, ListItem } from '../styled';

const UXDesign = () => (
  <div>
    <StackSkill skill="sketch" />
    <StackSkill skill="invision" />
    <StackSkill skill="xcode" />
    <Body>I&apos;ve taken on several design roles as a UX designer at LifeTales, as designers at startups usually do. These roles have ranged anywhere from UX research with user testing and surveys to UI design for icons, screens and flows, to designing logic for when to ask users for iOS permissions, all while learning and understanding how and why our users use LifeTales.</Body>
    <Body>I conducted UX research both independently and as part of a design team at LifeTales. The research conducted included:</Body>
    <ul>
      <ListItem>video-recorded user testing sessions of the onboarding and story interaction experience,</ListItem>
      <ListItem>hallway user testing of specific features or sections of the app,</ListItem>
      <ListItem>interviews with members of the target market, and</ListItem>
      <ListItem>composing and sending out surveys to test interest in potential new features.</ListItem>
    </ul>
    <Body>User testing was a positive experience for learning pain points in the UX flows, as well as hearing users&apos; responses to our value proposition. These tests gave me valuable information to consider while designing flows and information architecture, as well as micro-interactions and motion design. I used prototypes to conduct user tests of new features, as well as testing the prototype against the current app to see which version provided a better experience for the user. For the user tests, I designed screens in Sketch and used Invision for flow-based prototypes and leveraged Swift and Xcode for more interaction-based prototypes. The code for the motion design that went into the Xcode prototypes was then able to migrated over to the codebase of the app, such as the a menu animation for adding new media items.</Body>
    <Body>A design project I worked on was the onboarding slides for the app. This involved copywriting with the product team, designing prototypes, testing them, and iterating on them until users could understand our value proposition in 4 slides. After the design was complete, I built out the onboarding slides in Swift.</Body>
    <Body>
      I also designed, animated, and wrote the script for
      {' '}
      <ExternalLink href="https://www.youtube.com/watch?v=6FqLhpU_t_E">
        this PowToon video
      </ExternalLink>
      {' '}
      that we used in our marketing materials.
    </Body>
    <Body>I was involved with the strategic side of design, both in how LifeTales categorizes the usage of the app, as well as how LifeTales fits in to the competitive market. I designed a framework to group different use cases of the app at a high-level, in terms of how the user comes into the app, why they do it, and how long they&apos;ll spend in their sessions. In addition, I wrote competitive analyses of companies with similar offerings to LifeTales, to help guide the positioning and strategy of LifeTales.</Body>
    <Body>I designed logic for our onboarding flows, by working with developers and the product team to find the best way for users to come into the app. The flows were created in Realtimeboard and involved a map of all the ways a user can get into LifeTales. In addition, I designed logic for how and when to ask for iOS permissions, including where to place soft-prompts to gauge whether or not to display the real iOS permissions modal.</Body>
  </div>
);

export default UXDesign;
