import React from 'react';
import ScrollToTop from '../../app/scroll-to-top';
import Card from '../../app/card';
import StackSkill from '../../app/stack-skill';
import BackButton from '../../app/back-button';
import Footer from '../../app/footer';
import { ExternalLink } from '../../app/styled';
import {
  Content, Context, Header, Subheader, Body,
} from '../styled';

const AlbumPicker = () => (
  <ScrollToTop>
    <Card isHeader project="albumpicker" />
    <Content>
      <Header>
        Album Picker
      </Header>
      <Context>
        Designing and building a
        {' '}
        <ExternalLink href="https://andreidobrinski.github.io/album-picker/">
          React app
        </ExternalLink>
        {' '}
        as a side project to solve a personal problem.
      </Context>
      <Subheader>
        The Motivation
      </Subheader>
      <Body>
        To learn React through building an app to help people
        with a vinyl collection choose which album to listen to.
        The inspiration for this idea came from visiting a friend with a
        large record collection of good music, and not being
        able to decide what to listen to.
      </Body>
      <Subheader>
        The Stack
      </Subheader>
      <StackSkill skill="react" />
      <StackSkill skill="reactrouter" />
      <StackSkill skill="styledcomponents" />
      <StackSkill skill="googlesheets" />
      <StackSkill skill="sketch" />
      <Subheader>
        The Product
      </Subheader>
      <Body>
        Album Picker helps people with a list of albums they
        love choose which one to listen to.
        It does this by taking their list of album titles from a Google Sheet
        and presenting one of them at random. It supports multiple curators and
        works on all devices as a web app.
      </Body>
      <Subheader>
        The Process
      </Subheader>
      <Body>
        This project started simply and grew through several iterations
        to improve the functionality and the user experience of the app.
      </Body>
      <Body>
        The first iteration had a button, a function, two labels, and a JavaScript object.
        Tapping the button triggered the function, which selected a random number between one and
        the number of keys in the JavaScript object, mapped the random number to the object key,
        and presented the data in that key - an artist and an album title - in each of the labels.
        This was the simplest and fastest way I could build the basic functionality of the app to
        pick a random album from a list, as the MVP.
      </Body>
      <Body>
        The second iteration added complexity by adding support for multiple curators,
        by having the randomizer be applicable to more than one list. This iteration
        meant having a &quot;curator&quot; state, so that the app knew which
        list to act on, and a label that showed the
        user which list is being selected from. The album data was now in multiple JavaScript
        objects: one for each curator. The goal of this iteration was to build out support for
        multiple curators in an efficient way.
      </Body>
      <Body>
        The third iteration changed how the data got into the app and how the user would store their
        album list. I decided that the best balance between functionality, user experience, and
        complexity would be to use a Google Sheet as the list from which the app would pull
        its data. This meant that I could create a master Google Sheet and share individual
        edit permissions with users for their own sheet. Users could then enter their vinyls
        into the list and the app would fetch, parse and present the JSON data from whatever
        list it was given. It would determine which sheet to fetch from based on the sheetID,
        and the user would know which list was open from the URL and the label. This approach
        also enabled users to bookmark their unique URL for easy access.
      </Body>
      <Body>
        Check out the project
        {' '}
        <ExternalLink href="https://andreidobrinski.github.io/album-picker/">
          here
        </ExternalLink>
        {' '}
        , and the open-source code
        {' '}
        <ExternalLink href="https://github.com/andreidobrinski/album-picker">
          here.
        </ExternalLink>
      </Body>
      <BackButton />
    </Content>
    <Footer />
  </ScrollToTop>
);

export default AlbumPicker;
