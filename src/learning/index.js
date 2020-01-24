import React from 'react';
import ScrollToTop from '../app/scroll-to-top';
import ADLogo from '../landing-page/intro/ad-logo';
import Footer from '../app/footer';
import LearningList from './list';
import BackButton from '../app/back-button';
import { ExternalLink } from '../app/styled';
import { Text } from '../app/card/styled';
import { Content, Context, Header, Body } from '../work/styled';

const Learning = () => (
  <ScrollToTop>
    <ADLogo height={200} />
    <Content>
      <Header>Learning</Header>
      <Context>
        A quick list of courses and workshops I&apos;ve taken and enjoyed
      </Context>
      <Body>In reverse chronological order:</Body>
      <Body>-</Body>
      {Object.keys(LearningList)
        .slice()
        .reverse()
        .map(item => {
          console.log('item', item);
          if (LearningList[item].year) return (
            <Text key={item} style={{ fontWeight: 'bold' }}>{LearningList[item].year}</Text>
          );
          return (
            <Body key={item}>
              {LearningList[item].inProgress && <em>In Progress: </em>}
              {LearningList[item].author}
              &nbsp;-&nbsp;
            {LearningList[item].type}
              :&nbsp;
            <ExternalLink
                eventLabel="Learning List Item"
                to={LearningList[item].link}
              >
                {LearningList[item].name}
              </ExternalLink>
              {LearningList[item].repo && (
                <span>
                  &nbsp;/&nbsp;
                <ExternalLink
                    eventLabel="Learning List Repo"
                    to={LearningList[item].repo}
                  >
                    Repo
                </ExternalLink>
                </span>
              )}
            </Body>
          );
        })}
      <BackButton />
    </Content>
    <Footer />
  </ScrollToTop>
);

export default Learning;
