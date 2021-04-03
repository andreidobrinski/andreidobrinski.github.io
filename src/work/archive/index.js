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
        A list of archived projects.
      </Context>
      <Body>-</Body>
      {ArchiveList.map(item => (
        <article key={item}>
          <Body style={{ marginBottom: '4px' }}>
            <strong>{item.name}</strong>
          </Body>
          <TagList>
            {item.tech.map(tag => <Tag key={tag}>{tag}</Tag>)}
          </TagList>
          <Body style={{ marginTop: '4px' }}>
            {item.description}
            <br />
            {item.demo && (
              <ExternalLink
                eventLabel="Archive List Demo"
                to={item.demo}
              >
                Demo
              </ExternalLink>
            )}
            {item.repo && (
              <span>
                &nbsp;/&nbsp;
                <ExternalLink
                  eventLabel="Archive List Repo"
                  to={item.repo}
                >
                  Repo
                </ExternalLink>
              </span>
            )}
          </Body>
        </article>
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
