import styled from 'styled-components';
import { theme } from '../styles/theme';

export const Container = styled.section`
  margin: auto;
  max-width: 350px;
  padding: ${theme.padding[2]};
  font-size: 24px;
`;

export const Title = styled.h1`
  color: ${theme.colors.black};
  text-align: center;
  font-size: ${theme.typography.title};
`;

export const ContactsTitle = styled.h2`
  text-align: center;
  font-size: ${theme.typography.title};
  margin-top: 24px;
`;

export const Error = styled.b`
  color: ${theme.colors.red};
  text-align: center;
  font-size: ${theme.typography.title};
`;
