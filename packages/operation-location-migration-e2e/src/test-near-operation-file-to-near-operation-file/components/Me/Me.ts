import { useQuery } from '@apollo/client';
import { MeDoc } from './Me.graphql';

export const Me = () => {
  useQuery(MeDoc);
};
