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
    <Body>In 2017, I began learning React through Codecademy, Udemy, and several other resources. In November, I brought my learning to practice and began working with React full-time at LifeTales.</Body>
    <Body>The front-end stack I worked with includes React, Redux, React Router, and Styled Components (including their Theme Provider), as well as Gatsby and GraphQL for a static marketing site. Working at LifeTales has taught me to focus on clean, DRY code for improved component re-usability and readability.</Body>
    <Body>At LifeTales, I&apos;ve:</Body>
    <ul>
      <ListItem>created and improved on React components that are conditionally styled and rendered based on the component and application state,</ListItem>
      <ListItem>worked on fully-functional components as part of the web app and visual components for the static marketing site,</ListItem>
      <ListItem>worked with advanced React patterns such as render props and higher-order components,</ListItem>
      <ListItem>implemented web push notifications for mobile and desktop browsers,</ListItem>
      <ListItem>worked on the static marketing site using Gatsby and GraphQL,</ListItem>
      <ListItem>worked with component routing with React Router,</ListItem>
      <ListItem>worked with connected components in Redux patterns,</ListItem>
      <ListItem>worked with API calls to fetch, post, update and delete data,</ListItem>
      <ListItem>worked with technologies such as Formik, redux-form, react-powerplug and react tippy for input components and dropdown menus, and</ListItem>
      <ListItem>implemented styles throughout the app using a centralized style guide.</ListItem>
    </ul>
    <Body>Examples of some of my work include:</Body>
    <ul>
      <ListItem>building components that handle the fetching, posting, updating and deleting of text, images, video and audio,</ListItem>
      <ListItem>reusable interactive modal components, rendered as part of the route with React Router or as part of the application state with Redux,</ListItem>
      <ListItem>componentized, reusable SVG’s,</ListItem>
      <ListItem>UI components for a static marketing site,</ListItem>
      <ListItem>interactive dropdown menus,</ListItem>
      <ListItem>data-fetching for notifications using websockets,</ListItem>
      <ListItem>CSS styling with modern layout techniques such as Flexbox and CSS Grid, as well as conditional styling with props and styled-components.</ListItem>
    </ul>
    <Body>I also worked with the Foundation framework to build the HTML and CSS for the email notifications we send to LifeTales users.</Body>
    <Body>Before moving to full-time web development, I have been involved in several other areas at LifeTales such as user experience (UX) design and iOS development. In addition, I analyzed the market to create competitive reviews which helped LifeTales strategize positioning and define the company’s value proposition.</Body>
  </>
);

export default WebDev;
