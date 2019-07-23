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

const RlInventory = () => (
  <ScrollToTop>
    <Card isHeader project="rlinventory" />
    <Content>
      <Header>Rocket League Item Inventory</Header>
      <Context>
        Designing and building a
        {' '}
        <ExternalLink
          to="https://rl-inventory.web.app/"
          eventLabel="RL app from project"
        >
          React App
        </ExternalLink>
        {' '}
        to help keep track
        of items that I want to trade in Rocket League.
      </Context>
      <Subheader>The Motivation</Subheader>
      <Body>
        The motivation for this project was twofold:
        to build a Firebase app as part of a Google Developer Group Toronto Study Jam
        and to solve a personal problem.
      </Body>
      <Body>
        The
        {' '}
        <ExternalLink to="https://www.meetup.com/GDG-Toronto/" eventLabel="GDG group">
          GDG Toronto meetup group
        </ExternalLink>
        {' '}
        holds Study Jams,
        where members build an app to learn a Google technology,
        and meet up to talk about the insights and issues they came across while building their app.
        The Google tech for this Study Jam was
        {' '}
        <ExternalLink to="https://firebase.google.com/" eventLabel="Firebase">
          Firebase,
        </ExternalLink>
        {' '}
        so I needed to think of a front-end app to build to work with Firebase.
      </Body>
      <Body>
        At the same time, I was facing issues with trading items
        while playing Rocket League on my Nintendo Switch.
        My item inventory was growing and not all the items I had were tradeable
        - some were trade-locked and some I wanted to keep.
        I wanted a way to get a look at all the items I had that I wanted to trade,
        without having to mentally filter through my inventory.
      </Body>
      <Body>
        That&apos;s when the idea for Rocket League Item Inventory came together.
        I could build a React app to help me input and display my items,
        with Firebase managing the data.
      </Body>
      <Subheader>The Stack</Subheader>
      <StackSkill skill="react" />
      <StackSkill skill="styledcomponents" />
      <StackSkill skill="firebase" />
      <Subheader>The Product</Subheader>
      <Body>
        <ExternalLink
          to="https://rl-inventory.web.app/"
          eventLabel="RL app from project"
        >
          Rocket League Item Inventory
        </ExternalLink>
        {' '}
        lets users add, view, and delete items.
        Users can create an account and authenticate with an email link
        - one of my favourite of Firebase&apos;s features.
        The project is intentionally narrow in scope,
        as it was built and demoed in the 6 weeks that
        our meetup group met and talked about our apps.
        I have some
        {' '}
        <ExternalLink
          to="https://github.com/andreidobrinski/rocket-league-item-inventory/blob/master/README.md#current-features-and-roadmap"
          eventLabel="RL Inventory README"
        >
          ideas
        </ExternalLink>
        {' '}
        about how to possibly expand the feature set in the future.
      </Body>
      <Subheader>The Process</Subheader>
      <Body>
        I started by thinking about this project from two perspectives:
        the affordances a user would have for their item inventory and how to
        store the data in a NoSQL database.
        To do this, I made a list of what functionality would need to exist
        to meet the minimum viable use case of the app.
        The initial requirements involved the user being able to authenticate themselves
        to have a unique list that only they could control,
        add and delete items, and have a define a level of specificity
        that items would go into, ie. how many form fields would be on an item.
      </Body>
      <Body>
        I reached out to Psyonix (the company that developed Rocket League)
        to see if I was able to get access to their item API.
        I was hoping to pull from a preset list of items so that
        users would have to enter fewer fields manually.
        I got a quick reply saying that I wasn&apos;t able to
        get access because the API is in a closed beta.
        Fortunately, this simplified the UI and database requirements because I
        didn&apos;t need to consider how to present and store a preexisting list of
        items to pull from and customize.
        The user would need to submit their item information themselves.
      </Body>
      <Body>
        I mocked a sketch on paper of what the adding and viewing item UI would look like.
        I decided where the buttons would go and how the form would be presented.
        There was no need for a high fidelity mock in Sketch or Figma since I went from paper
        to experimenting with HTML directly and didn&apos;t
        need to hand over a design spec to anyone.
      </Body>
      <Body>
        I let the database requirements follow the UI requirements at this point.
        I went with Firebase&apos;s Cloud Firestore, since it was the more recent addition
        to their database choices compared to Realtime Database, and generally
        the one that was recommended in the meetup group.
        In Firestore, I decided I would need a single collection,
        {' '}
        <code>Users</code>
        , that would have documents titled with the user&apos;s unique ID.
        Each user only needed one collection,
        {' '}
        <code>Items</code>
        , which had documents titled with unique item ID&apos;s.
        Those documents then held the data model that items needed.
      </Body>
      <Body>
        The execution of the front-end was fairly straightforward.
        I felt confident in my React development and didn&apos;t face too many challenges
        outside of the initial architecture decisions.
        I went with two independent React Contexts that store and pass down
        information for Firebase and the User respectively.
        A challenge I set for myself was to build the app without needing Redux or Class components,
        which was doable with React Context and Hooks.
        The codebase is all
        {' '}
        <ExternalLink to="https://github.com/andreidobrinski/rocket-league-item-inventory" eventLabel="RL repo">
          open source
        </ExternalLink>
        {' '}
        and you can have a look at it if you&apos;d like.
      </Body>
      <Body>
        I enjoyed working with the
        {' '}
        <ExternalLink to="https://www.react-reveal.com/" eventLabel="React Reveal from RL">
          React Reveal library
        </ExternalLink>
        {' '}
        while building the front-end.
        It&apos;s a lightweight animation library that let me
        create subtle let interesting animations in the UI.
        The documentation is great and I would definitely use
        it again to add a bit of flair to a React app.
      </Body>
      <Body>
        The challenges I faced along the way were mainly with Firebase authentication.
        I moved from using username and passwords - which was reasonably simple - to an email link,
        which introduced some challenges.
        One difficulty I faced was with changing between development and production environments,
        since I needed to change code in my project as well an in the Firebase console
        to redirect the email link to the proper domain.
        Switching to using an email link also involved moving some data up from a component to a
        React Context to make sure the browser got data from local storage early enough in the tree.
        The rest of Firebase&apos;s API, including Firestore and Hosting, were great to work with.
        I would definitely consider using Firebase again in a personal project or proof-of-concept
        where I needed either a NoSQL database, authentication or hosting.
      </Body>
      <Body>
        I&apos;ve outlined some potential next steps in the repo&apos;s
        {' '}
        <ExternalLink
          to="https://github.com/andreidobrinski/rocket-league-item-inventory/blob/master/README.md#current-features-and-roadmap"
          eventLabel="RL Inventory README"
        >
          README.
        </ExternalLink>
        {' '}
        The plan for now is to use the app myself,
        share it with friends, and post it on social media
        to see if it can help others having a similar issue to mine.
        From there, I&apos;ll let the feedback and/or the open source community
        to drive any further development of Rocket League Item Inventory.
      </Body>
      <BackButton />
    </Content>
    <Footer />
  </ScrollToTop>
);

export default RlInventory;
