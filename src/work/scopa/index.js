import React from 'react';
import ScrollToTop from '../../app/scroll-to-top';
import Card from '../../app/card';
import StackSkill from '../../app/stack-skill';
import BackButton from '../../app/back-button';
import Footer from '../../app/footer';
import { ExternalLink } from '../../app/styled';
import {
  Content, Context, Header, Subheader, Body, ListItem,
} from '../styled';

const Scopa = () => (
  <ScrollToTop>
    <Card isHeader project="scopa" />
    <Content>
      <Header>Scopa Calculator</Header>
      <Context>
        Building an
        {' '}
        <ExternalLink
          to="https://github.com/andreidobrinski/scopa"
          eventLabel="Scopa repo from project"
        >
          open-source
        </ExternalLink>
        {' '}
        calculator to count your "primiera" score in a game of
        {' '}
        <ExternalLink
          to="https://en.wikipedia.org/wiki/Scopa"
          eventLabel="Scopa wiki from project"
        >
          Scopa.
        </ExternalLink>
        {' '}
        Check it out
        {' '}
        <ExternalLink
          to="https://andreidobrinski.github.io/scopa/"
          eventLabel="Scopa demo from project"
        >
          here.
        </ExternalLink>
      </Context>
      <Subheader>The Motivation</Subheader>
      <Body>
        Scopa is a great card game. It's easy to learn and fun to play, until you have to calculate our primiera score.
        You don't necessarily need to calculate it for every game, but when you need to, it involves remembering the primiera value of the cards
        and doing mental math to get the score. Remembering values and doing math are two things that machines excel at.
      </Body>
      <Body>
        In the spirit of solving problems with technology, I started thinking about what information would be needed
        to perform the calculation and what the UI might look like.
        If you're interested, you can learn more about
        {' '}
        <ExternalLink
          to="https://en.wikipedia.org/wiki/Scopa#Scoring"
          eventLabel="Scopa scoring from project"
        >
          how scoring works
        </ExternalLink>
        {' '}
        in Scopa.
      </Body>
      <Subheader>The Stack</Subheader>
      <StackSkill skill="react" />
      <StackSkill skill="gatsby" />
      <StackSkill skill="styledcomponents" />
      <Subheader>The Product</Subheader>
      <Body>
        The calculator shows a list of all available card types in Scopa and asks the user to choose how many of each card type they have.
        The maximum number of cards that a user can have for each type is 4, so an array of buttons from 1-4 does the trick.
      </Body>
      <Body>
        When the user inputs a number, they get back a subtotal for that card type as well an an incremented total for all the cards they've selected.
      </Body>
      <Body>
        You can find a demo of it
        {' '}
        <ExternalLink
          to="https://andreidobrinski.github.io/scopa/"
          eventLabel="Scopa demo from project"
        >
          here.
        </ExternalLink>
      </Body>
      <Subheader>The Process</Subheader>
      <Body>
        I started by mapping the available card types into two objects:
        one to store the primiera values of each card and one as the initial state, instantializing each card's value to 0.
      </Body>
      <Body>
        When a user selects a value for a card type, between 1 and 4, I used React's component state
        with a <code>useReducer</code> hook that keeps track of that state object.
        To get the subtotals, I multiply a card's value by it's primiera score.
        A <code>reduce</code> function is used to sum the total of all card values.
      </Body>
      <Body>
        The initial implementation took one day to build and ship, split up into a few sittings.
        I spent more time in the following days to:
      </Body>
      <ul>
        <ListItem>add subtotals to the UI</ListItem>
        <ListItem>add semantic HTML and aria labels for accessibility</ListItem>
        <ListItem>create the logo</ListItem>
        <ListItem>polish up styles</ListItem>
      </ul>
      <Body>
        I chose Gatsby because the calculator can be served as a static site, so it made sense to get the speed and SEO benefits from Gatsby.
        I chose Styled Components as my preferred method to style elements conditionally based on passed props,
        as seen in the "selected" and "unselected" states of the buttons.
        Feel free to have a look at the
        {' '}
        <ExternalLink
          to="https://github.com/andreidobrinski/scopa"
          eventLabel="Scopa repo from project"
        >
          source code.
        </ExternalLink>
      </Body>
      <Subheader>The Challenges</Subheader>
      <Body>
        This project didn't have too many hurdles. The complexity was low and the end result was clear from the beginning.
      </Body>
      <Body>
        I ran into an issue with deploying to GitHub pages, where the GitHub project page that the calculator is deployed to
        would resolve to an empty page that came from my GitHub user page where I have my portfolio.
        It was as though my Create React App portfolio was giving a 404 instead of routing to the Gatsby site with the calculator.
        This seems to be a caching issue that only affected my Chrome browser.
      </Body>
      <Subheader>The Next Steps</Subheader>
      <Body>
        I plan to:
      </Body>  
      <ul>
        <ListItem>use the app while playing scopa</ListItem>
        <ListItem>share with anyone while they're playing</ListItem>
        <ListItem>improve the SEO so that other's searching for the issue are more likely to find the calculator.</ListItem>
      </ul>
      <Body>
        Feel free to have a look at the
        {' '}
        <ExternalLink
          to="https://andreidobrinski.github.io/scopa/"
          eventLabel="Scopa demo from project"
        >
          demo
        </ExternalLink>
        {' '}
        or the
        {' '}
        <ExternalLink
          to="https://github.com/andreidobrinski/scopa"
          eventLabel="Scopa repo from project"
        >
          source code.
        </ExternalLink>
      </Body>
      <BackButton />
    </Content>
    <Footer />
  </ScrollToTop>
);

export default Scopa;
