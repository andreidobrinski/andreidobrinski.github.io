/* eslint-disable max-len */
import React from 'react';
import StackSkill from '../../app/stack-skill';
import { Body, ListItem } from '../styled';

const WebDev = () => (
  <>
    <StackSkill skill="react" />
    <StackSkill skill="redux" />
    <StackSkill skill="reactrouter" />
    <StackSkill skill="styledcomponents" />
    <StackSkill skill="gatsby" />
    <StackSkill skill="graphql" />
    <StackSkill skill="next" />
    <Body>As part of a small web development team, I contributed to our web app, our server-rendered public app, as well as our static marketing site. The front-end stack I worked with included React, Redux, React Router and Styled Components. I worked with Next.js for the server-rendered public app. For our static marketing site, I worked with Gatsby and GraphQL. Working at LifeTales taught me to focus on clean, DRY code for readable and reusable React components.</Body>
    <Body>Examples of reusable component workflows I’ve created and worked with across the app and site included:</Body>
    <ul>
      <ListItem>Using React Hooks and Context to abstract and reuse business logic across components.</ListItem>
      <ListItem>Render props and higher-order components used to fetch data from the Redux store and provide data to child components.</ListItem>
      <ListItem>A reusable modal component that was rendered with either component/application state or using a route.</ListItem>
      <ListItem>Components that render svg icons with passed props for size and colour.</ListItem>
      <ListItem>A style guide using Styled Components’ theme provider, used across the app and site.</ListItem>
    </ul>
    <Body>Much of my work for the app involved building components that dynamically render photos, videos, text, and audio. I also built components that handle the API calls to fetch, post, update and delete the appropriate data for the user. In addition to this, work that I’ve done on the app includes:</Body>
    <ul>
      <ListItem>Building a paywall for features that require a subscription.</ListItem>
      <ListItem>Creating an onboarding flow with a carousel of features and progress-based tooltips.</ListItem>
      <ListItem>Implementing web push notifications for desktop and mobile browsers.</ListItem>
      <ListItem>Data-fetching notifications using WebSockets.</ListItem>
      <ListItem>Creating and improving on forms with Formik and redux-form.</ListItem>
      <ListItem>Animating interactions with react-pose and react-reveal.</ListItem>
    </ul>
    <Body>Most of my work involved building out features for the main LifeTales app in a create-react-app environment. Our team also rebuilt a subset of those features for the server-rendered Next.js app, for users to be able to publicly share and view LifeTales Stories without needing to register for an account.</Body>
    <Body>I worked on several iterations of the marketing site using Gatsby v2 for generating the static site from React components. I used GraphQL for populating the site with necessary data and to load responsive images efficiently with gatsby-image-sharp. I used modern CSS techniques like grid and flexbox in styled-components, with fallbacks for older browser support.</Body>
    <Body>I began learning React through Codecademy, Udemy, and several other resources while working as a UX designer at LifeTales. In November 2017, I moved into a full-time React development role at LifeTales.</Body>
    <Body>Before moving to full-time web development, I have been involved in several other areas at LifeTales such as user experience (UX) design and iOS development.</Body>
  </>
);

export default WebDev;
