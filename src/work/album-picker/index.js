import React from 'react';
import ScrollToTop from '../../app/scroll-to-top';
import Card from '../../app/card';
import StackSkill from '../../app/stack-skill';
import Footer from '../../app/footer';
import { ExternalLink } from '../../app/styled';
import { Content, Header, Subheader, Body } from '../styled';

const AlbumPicker = () => (
  <ScrollToTop>
    <Card isHeader project="albumpicker" />
    <Content>
      <Header>
        Album Picker
      </Header>
      <Subheader>
        The Motivation
      </Subheader>
      <Body>
        To learn React through building an app that helps people with a
        vinyl collection choose which album to listen to.
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
        Album Picker helps people with a list of albums they love choose which music
        to listen to for the next hour. It does this by taking a list of artists and
        album titles from a Google Sheet and presenting one of them at random.
        It supports multiple curators and works on all devices.
      </Body>
      <Subheader>
        The Process
      </Subheader>
      <Body>
        write about the process of making it
      </Body>
      <Body>
        Check out the project&nbsp;
        <ExternalLink href="https://andreidobrinski.github.io/album-picker/">
          here
        </ExternalLink>, and the open-source code&nbsp;
        <ExternalLink href="https://github.com/andreidobrinski/album-picker">
          here
        </ExternalLink>.
      </Body>
    </Content>
    <Footer />
  </ScrollToTop>
);

export default AlbumPicker;
