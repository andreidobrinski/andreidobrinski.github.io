import React from 'react';
import InstagramEmbed from 'react-instagram-embed';
import { InstagramWrap } from './styled';

const InstagramPhotos = () => (
  <InstagramWrap>
    <InstagramEmbed
      url="https://www.instagram.com/p/BbCJF1xnFmV/?taken-by=badlandsbrewing"
      hideCaption
    />
    <InstagramEmbed
      url="https://www.instagram.com/p/BedKYX5nFla/?taken-by=badlandsbrewing"
      hideCaption
    />
  </InstagramWrap>
);

export default InstagramPhotos;
