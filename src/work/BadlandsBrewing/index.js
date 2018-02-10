import React, { Component } from 'react';
import Card from '../../card/Card';
import StackTool from '../../components/stack-tool';
import LargeImage from '../../components/large-image';
import InstagramPhotos from './instagram-photos';
import badlandsLogo from './assets/badlands-brewing-logo.svg';
import zeldaOwl from './assets/zelda-owl.png';
import illustratorIcon from './assets/illustrator-icon.svg';
import { Wrapper, Content, Summary, Header, Body } from './styled';

class BadlandsBrewing extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    return (
      <Wrapper>
        <Content>
          <Card
            product="Badlands Brewing"
            skill="Logo Design"
            image={badlandsLogo}
            noHover
          />
          <Summary>Designing a logo for an Ontario craft brewery.</Summary>
          <Header>Understanding the Problem</Header>
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
          <Header>The Stack</Header>
          <StackTool
            image={illustratorIcon}
            alt="Adobe Illustrator icon"
            tool="Adobe Illustrator"
          />
          <Header>The Process</Header>
          <Body>
            Coming up with an image that represented the Cheltenham Badlands while
            also giving the brand an identifying logo was initally a challenge.
            The Badlands are known for their sweaping landscapes but
            the brand needed an image that would be multi-functional.
          </Body>
          <Body>
            I decided to choose an owl as this could serve as both a logo and
            a mascot for the brand. For the design I was inspired by&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://zelda.wikia.com/wiki/Kaepora_Gaebora"
            >
              this owl
            </a>&nbsp;from <i>The Legend of Zelda - Ocarina of Time</i>. As a nocturnal animal,
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
          <p>insert picture of logo</p>
          <Header>The Learning</Header>
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
          <Header>The Company</Header>
          <Body>
            If you would like to learn more about Badlands Brewing, check out their website&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://badlandsbrewing.ca"
            >
              here
            </a>.
          </Body>
          <InstagramPhotos />
        </Content>
      </Wrapper>
    );
  }
}

export default BadlandsBrewing;
