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

const DruidWildShape = () => (
  <ScrollToTop>
    <Card isHeader project="druidWildShape" />
    <Content>
      <Header>Druid Wild Shape</Header>
      <Context>
        Building a Dungeons and Dragons tool to help Druid characters use their Wild Shape feature in game.
        Check it out on
        {' '}
        <ExternalLink
          to="https://arcaneeye.com/apps/wildshape-tracker/"
          eventLabel="Druid Wild Shape from project"
        >
          Arcane Eye.
        </ExternalLink>
      </Context>
      <Subheader>The Motivation</Subheader>
      <Body>
        The motivation behind this project came from the intersection of three ideas:
      </Body>
      <ul>
        <ListItem>getting familiar with new frontend libraries</ListItem>
        <ListItem>solving a personal problem</ListItem>
        <ListItem>sharing the solution to solve the problem for others</ListItem>
      </ul>
      <Body>
        'Wild Shape' for a DnD Druid player means getting to transform into a vast array of animals and beasts,
        taking on the abilities, skills and attacks for each creature.
        It also means having to manage the list of available animals and stats and hit points of the animals you become,
        which for me has resulted in juggling several browser tabs throughout each turn of the game.
      </Body>
      <Body>
        I searched for an existing tool that would help with managing the Wild Shape animals, couldn't find one, and got to work!
        I started by building an MVP that satisfied my use case, showed it to the folks at
        {' '}
        <ExternalLink
          to="https://arcaneeye.com"
          eventLabel="Arcane Eye from Druid project"
        >
          Arcane Eye,
        </ExternalLink>
        {' '}
        and collaborated on a version that could be more broadly used. The
        {' '}
        <ExternalLink
          to="https://arcaneeye.com/apps/wildshape-tracker/"
          eventLabel="Druid Wild Shape from project"
        >
          current version
        </ExternalLink>
        {' '}lives on their site.
      </Body>
      <Subheader>The Stack</Subheader>
      <StackSkill skill="react" />
      <StackSkill skill="typescript" />
      <StackSkill skill="apollo" />
      <StackSkill skill="graphql" />
      <StackSkill skill="styledcomponents" />
      <StackSkill skill="tailwind" />
      <StackSkill skill="twinMacro" />
      <StackSkill skill="jest" />
      <StackSkill skill="reactTestingLib" />
      <StackSkill skill="cypress" />
      <Subheader>The Product</Subheader>
      <Body>
        The app exists mainly to help players select a creature to play as and give them to tools and information to play as that creature.
        The list of creatures is organized by Challenge Rating, helpful for players to see at a glance what animals are available to them based on their DnD level.
      </Body>
      <Body>
        The player selects the animal and sees a character sheet with the Hit Points, abilities, actions and everything they need to know about playing as that creature.
      </Body>
      <Body>
        The player can "roll" for attack rolls and damage for their chosen creature.
        The app simulates the appropriate dice roll and adds/subtracts any modifiers, presenting the user with the final result.
        The player can also roll for Strength, Dexterity and Constitution checks for their creature.
      </Body>
      <Body>
        The player also has the ability to modify the creatures HP by inputting a number and selecting a "Damage" or "Heal" option to modify their health.
        The modified HP gets stored in Session Storage for their creature, so the player can navigate to other creature's and still keep their modifications.
      </Body>
      <Subheader>The Process</Subheader>
      <Body>
        I started by searching for an available API or data source to pull creature data from. This
        {' '}
        <ExternalLink
          to="http://www.dnd5eapi.co/"
          eventLabel="Dnd 5e API"
        >
          DnD 5e API
        </ExternalLink>
        {' '}
        was a great option, and I chose it mainly because it had the data available through a GraphQL API.
        I wrote the GraphQL queries I needed and used Apollo Client to fetch (and cache) the data from the API.
      </Body>
      <Body>
        I wrote a sorting function to group and sort the the monsters by challenge rating, to make sure that the list is easy to select from depending on the DnD level of the player.
      </Body>
      <Body>
        The character sheet itself was designed to show only the relevant information for a Druid character playing the creature.
        GraphQL was a great fit for this use case because while much information is available for each creature, I was able to query only the relevant data for the UI.
      </Body>
      <Body>
        Once an MVP was finished, I shared it out to get feedback. Mike from
        {' '}
        <ExternalLink
          to="https://arcaneeye.com"
          eventLabel="Arcane Eye from Druid project"
        >
          Arcane Eye
        </ExternalLink>
        {' '}
        was a huge help towards understanding what a Druid player would be looking for in a web app like this.
        We worked together for several iterations before coming up with a shippable version.
      </Body>
      <Body>
        The site is served as a microfrontend within the Arcane Eye Wordpress site.
        The microfrontend is generated with Create React App with some additional Webpack modifications.
        The styling is scoped with CSS-in-JS as to not affect the rest of the site.
        Animations were later added using
        {' '}
        <ExternalLink
          to="https://www.react-reveal.com/"
          eventLabel="Arcane Eye from Druid project"
        >
          React Reveal.
        </ExternalLink>
      </Body>
      <Body>
        Unit tests and integration tests are run with Jest and written with React Testing Library.
        Cypress runs several end-to-end tests on the development build pre-release and on the deployed site post-release.        
      </Body>
      <BackButton />
    </Content>
    <Footer />
  </ScrollToTop>
);

export default DruidWildShape;
