import React, { Component } from 'react';
import Card from '../../app/card';
import StackSkill from '../../app/stack-skill';
import Footer from '../../app/footer';
import { ExternalLink } from '../../app/styled';
import { Wrapper, Content, Header, Body } from '../styled';

class AlbumPicker extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Wrapper>
        <Card project="albumpicker" isHeader />
        <Content>
          <Header>
            Album Picker
          </Header>
          <Header>
            The Motivation
          </Header>
          <Body>
            To learn React through building an app that helps people with a
            vinyl collection choose which album to listen to.
          </Body>
          <Header>
            The Stack
          </Header>
          <StackSkill skill="react" />
          <StackSkill skill="reactrouter" />
          <StackSkill skill="styledcomponents" />
          <StackSkill skill="googlesheets" />
          <StackSkill skill="sketch" />
          <Header>
            The Product
          </Header>
          <Body>
            Album Picker helps people with a list of albums they love choose which music
            to listen to for the next hour. It does this by taking a list of artists and
            album titles from a Google Sheet and presenting one of them at random.
            It supports multiple curators and works on all devices.
          </Body>
          <Header>
            The Process
          </Header>
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
      </Wrapper>
    );
  }
}

export default AlbumPicker;
