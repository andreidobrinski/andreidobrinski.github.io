import React, { Component } from 'react';
import StackSkill from '../../app/stack-skill';
import { Wrapper, Content, Header, Body } from '../styled';

class AlbumPicker extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Wrapper>
        <Content>
          <Header>
            Album Picker
          </Header>
          <Header>
            Motivation
          </Header>
          <Body>
            To build a React App that helps people with a
            vinyl collection choose which album to listen to.
          </Body>
          <Header>
            Stack
          </Header>
          <Body>
            <StackSkill skill="react" />
            <StackSkill skill="reactrouter" />
            <StackSkill skill="styledcomponents" />
            <StackSkill skill="googlesheets" />
            <StackSkill skill="sketch" />
          </Body>
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
          <h4>
            Check out the link to the project here, and the open-source code here.
          </h4>
        </Content>
      </Wrapper>
    );
  }
}

export default AlbumPicker;
