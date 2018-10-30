/* eslint-disable max-len */
import React from 'react';
import StackSkill from '../../app/stack-skill';
import { Subheader, Body } from '../styled';

const IosDev = () => (
  <>
    <Subheader>
      iOS Development
    </Subheader>
    <StackSkill skill="swift" />
    <StackSkill skill="xcode" />
    <Body>After a few months of learning Swift and Xcode in my own time, I put my skills to practice at LifeTales. I mainly focused on animation, prototyping, as well as building out and styling the front-end.</Body>
    <Body>My first coding project for LifeTales was to create an animated fly-out menu for the button that users would tap on to choose which piece of media (text, audio, video) to add to a story. I approached this project by first designing and developing the animation we needed with placeholder views, and then replacing the placeholders with the correct assets and styles. I learned from our senior developer early on to build the menu as a reusable XIB, so that we could plug the menu into the proper View Controller later. I used animation constraints that were relative to the centre of the menu&apos;s XIB, so that the animation would look the same regardless of where it was in the View Controller, or what iOS device showed the animation. I used delegation and protocols to connect the menu to the appropriate events on their View Controllers. The animated menu was later used in two different places in the app.</Body>
    <Body>My second coding project was building out the onboarding welcome slides. I used a Page View Controller to contain the different View Controllers with each slide. I added swipe gestures as well a Back and Skip buttons for navigation. I also added an animation of a circle sliding across the screen to indicate a swipe gesture on the first slide. I handed off the onboarding slides for integration with the rest of the app.</Body>
    <Body>My third coding project was what we called a UI Refresh, which consisted of updating styles all across the app to reflect changes in the design specs. This involved creating a style guide for colours and fonts, to store several layers of abstraction for the styles used across the app. I worked with our senior developer to deliver the style guide as a submodule for the rest of the app. The UI Refresh also involved updating the navigation bar styles, assets, labels, borders, margins etc. across the app. Through this I familiarized myself with some of the different layers of a VIPER stack, and how they interact.</Body>
    <Body>I also used Xcode for much of the prototyping of animations and flows, which I&apos;ll elaborate more on in the Design section below.</Body>
  </>
);

export default IosDev;
