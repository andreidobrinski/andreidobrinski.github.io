import React from 'react';
import styled from 'styled-components';
import ScrollToTop from '../../app/scroll-to-top';
import ADLogo from '../../landing-page/intro/ad-logo';
import Footer from '../../app/footer';
import BackButton from '../../app/back-button';
import ArchiveList from './list';
import { ExternalLink } from '../../app/styled';
import { Content, Context, Header, Body } from '../../work/styled';

const Archive = () => (
  <ScrollToTop>
    <ADLogo height={200} />
    <Content>
      <Header>Archive</Header>
      <Context>
        A list of older archived projects.
      </Context>
      <Body>-</Body>
      {Object.keys(ArchiveList)
        .slice()
        .reverse()
        .map(item => (
          <div key={item}>
            <Body style={{ marginBottom: '4px' }}>
              <strong>{ArchiveList[item].name}</strong>
            </Body>
            <TagList>
              {ArchiveList[item].tech.map(tag => <Tag>{tag}</Tag>)}
            </TagList>
            <Body style={{ marginTop: '4px' }}>
              {ArchiveList[item].description}
              <br />
              {ArchiveList[item].demo && (
                <ExternalLink
                  eventLabel="Archive List Demo"
                  to={ArchiveList[item].demo}
                >
                  Demo
                </ExternalLink>
              )}
              {ArchiveList[item].repo && (
                <span>
                  &nbsp;/&nbsp;
                  <ExternalLink
                    eventLabel="Archive List Repo"
                    to={ArchiveList[item].repo}
                  >
                    Repo
                  </ExternalLink>
                </span>
              )}
            </Body>
          </div>
        ))}
      <BackButton />
    </Content>
    <Footer />
  </ScrollToTop>
);

const Tag = styled.div`
  background-color: ${props => props.theme.colours.text};
  color: #fff;
  font-family: ${props => props.theme.fonts.body};
  font-size: 14px;
  padding: 2px 6px;
  border-radius: 6px;
  margin-right: 4px;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default Archive;
