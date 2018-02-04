import React from 'react';
import illustratorIcon from './assets/illustrator-icon.svg';
import { StackToolWrap, StackIcon } from './styled';

const StackTool = () => (
  <StackToolWrap>
    <StackIcon src={illustratorIcon} alt="adobe illustrator logo" />
    <p>Adobe Illustrator</p>
  </StackToolWrap>
);

export default StackTool;
