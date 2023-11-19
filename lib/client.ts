import { createClient } from 'next-sanity';

const client = createClient({
  projectId: '5l4p48au',
  dataset: 'replica-paintings',
  apiVersion: '2022-03-25',
  useCdn: false,
});

export default client;
