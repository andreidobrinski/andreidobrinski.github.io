import React from 'react';
import { Text } from '../app/card/styled';
import { Body } from '../work/styled';
import { ExternalLink } from '../app/styled';
import { learning } from './years';

const LearningList = () => learning.map(item => {
  if (item.year) return <Text key={item.year} style={{ fontWeight: 'bold' }}>{item.year}</Text>;

  return (
    <Body key={item.name}>
      {item.inProgress && <em>In Progress: </em>}
      {item.author}
      &nbsp;-&nbsp;
      {item.type}
      :&nbsp;
      <ExternalLink
        eventLabel="Learning List Item"
        to={item.link}
      >
        {item.name}
      </ExternalLink>
      {item.repo && (
        <span>
          &nbsp;/&nbsp;
          <ExternalLink
            eventLabel="Learning List Repo"
            to={item.repo}
          >
            Repo
          </ExternalLink>
        </span>
      )}
    </Body>
  );
});

export { LearningList };