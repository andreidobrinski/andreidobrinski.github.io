import React, { Component } from 'react';

class AlbumPicker extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <h1>
          Album Picker
        </h1>
        <h2>
          Motivation
        </h2>
        <p>
          To build a React App that helps people with a
          vinyl collection choose which album to listen to.
        </p>
        <h2>
          Stack
        </h2>
        <p>
          React, React Router, Styled Components, Google Sheets, Sketch
        </p>
        <h2>
          The Product
        </h2>
        <p>
          Album Picker helps people with a list of albums they love choose which music
          to listen to for the next hour. It does this by taking a list of artists and
          album titles from a Google Sheet and presenting one of them at random.
          It supports multiple curators and works on all devices.
        </p>
        <h2>
          The Process
        </h2>
        <p>
          write about the process of making it
        </p>
        <h4>
          Check out the link to the project here, and the open-source code here.
        </h4>
      </div>
    );
  }
}

export default AlbumPicker;
