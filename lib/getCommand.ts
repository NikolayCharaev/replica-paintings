import client from './client';

export async function getCommand() {
  const query = `*[_type == "team"]{
      "images": images[0].asset->url,
    }`;

  const data = await client.fetch(query);
  return data;
}
