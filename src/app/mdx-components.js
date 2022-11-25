import { StyledPre, Header, Subheader, Body, ListItem, Header3 } from '../work/styled';
import { StyledLink } from './styled'

export const mdxComponents = {
  p: Body,
  h1: Header,
  h2: Subheader,
  h3: Header3,
  li: ListItem,
  pre: StyledPre,
  a: StyledLink,
}