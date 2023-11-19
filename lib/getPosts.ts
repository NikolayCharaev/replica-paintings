import client from "./client"

export async function getPosts() {
    const query = `*[_type == "reproductions"]{
      "images": images[0].asset->url,
      country,
      _id,
      author,
      paintingName,
      paintingSize,
      paintingPrice


    }`
  
    const data = await client.fetch(query)
    return data
  }
  
