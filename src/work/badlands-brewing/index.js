import React from 'react';
import InstagramEmbed from 'react-instagram-embed';
import ScrollToTop from '../../app/scroll-to-top';
import Card from '../../app/card';
import StackSkill from '../../app/stack-skill';
import LargeImage from '../../app/large-image';
import badlandsLogoLight from './assets/badlands-logo-light.png';
import badlandsLogoDark from './assets/badlands-logo-dark.png';
import zeldaOwl from './assets/zelda-owl.png';
import BackButton from '../../app/back-button';
import Footer from '../../app/footer';
import { ExternalLink } from '../../app/styled';
import {
  Content, Context, Header, Subheader, Body,
} from '../styled';
import { LogoWrap, Logo, InstagramWrap } from './styled';

const BadlandsBrewing = () => (
  <ScrollToTop>
    <Card isHeader project="badlands" />
    <Content>
      <Header>
        Badlands Brewing
      </Header>
      <Context>
        Designing a logo for an Ontario craft brewery.
      </Context>
      <Subheader>
        The Motivation
      </Subheader>
      <Body>
        Badlands Brewing Company needed a logo that would be suitable for
        bottle labels, kegs, taps, glasses, and merchandise.
        The logo needed to be simple enough to be printed on the different mediums.
      </Body>
      <Body>
        Badlands Brewing started in Caledon, Ontario - near the Cheltenham Badlands.
        The brand wanted an aesthetic that would fit the rugged, natural environment
        of the Badlands that inspired them.
      </Body>
      <Body>
        My task was to design a unique and iconic logo that would identify the
        Badlands Brewing brand in the competitive beer industry.
      </Body>
      <Subheader>
        The Stack
      </Subheader>
      <StackSkill skill="illustrator" />
      <Subheader>
        The Process
      </Subheader>
      <Body>
        Coming up with an image that represented the Cheltenham Badlands while
        also giving the brand an identifying logo was initally a challenge.
        The Badlands are known for their sweaping landscapes but
        the brand needed an image that would be multi-functional.
      </Body>
      <Body>
        I decided to choose an owl as this could serve as both a logo and
        a mascot for the brand. For the design I was inspired by
        {' '}
        <ExternalLink
          eventLabel="Zelda Owl"
          to="http://zelda.wikia.com/wiki/Kaepora_Gaebora"
        >
          this owl
        </ExternalLink>
        {' '}
        from
        {' '}
        <i>The Legend of Zelda - Ocarina of Time.</i>
        {' '}
        As a nocturnal animal,
        it would be something beer-drinking night owls could relate to.
      </Body>
    </Content>
    <LargeImage
      image={zeldaOwl}
      alt="owl from Ocarina of Time"
      cite="The Legend of Zelda Ocarina of Time. Nintendo, 1998"
    />
    <Content>
      <Body>
        Designing the logo took several iterations. The owl needed to resemble
        both the beauty and grit of the Badlands, while being recognizable in the
        craft beer market. Following this idea was the pronounced sterness of the
        owl&apos;s face, as well as the mixture of sharp and rounded edges throughout the body.
        Below is the final design.
      </Body>
    </Content>
    <LogoWrap>
      <Logo src={badlandsLogoLight} />
      <Logo src={badlandsLogoDark} />
    </LogoWrap>
    <Content>
      <Subheader>
        The Learning
      </Subheader>
      <Body>
        This project was an interesting challenge as it expanded both my technical knowledge of
        Illustrator and my knowledge of branding in a competitive market.
      </Body>
      <Body>
        My final design for the owl&apos;s wings started to take shape when I began
        using using the Simplify Path feature in Illustrator. This was the first
        project where I was using the feature and
        I felt that it fit the brewery&apos;s aesthetic well.
      </Body>
      <Body>
        I enjoyed the challenge of symbolizing the Badlands environment and the process
        of making the design a reality.
      </Body>
      <Subheader>
        The Company
      </Subheader>
      <Body>
        If you would like to learn more about Badlands Brewing, check out their website
        {' '}
        <ExternalLink
          eventLabel="Badlands Brewing Website"
          to="http://badlandsbrewing.ca"
        >
          here.
        </ExternalLink>
      </Body>
      <InstagramWrap>
        <InstagramEmbed
          url="https://www.instagram.com/p/BedKYX5nFla/?taken-by=badlandsbrewing"
          hideCaption
        />
      </InstagramWrap>
      <BackButton />
    </Content>
    <Footer />
  </ScrollToTop>
);

export default BadlandsBrewing;
