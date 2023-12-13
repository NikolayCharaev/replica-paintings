import { connectDB } from '@/lib/database';
import Post from '@/models/Repair';

export const POST = async (req: any, res: any) => {
  const { author, imageUrl, title, size, price } = await req.json();

  try {
    connectDB();
    const post = new Post({
      author: author,
      imageUrl: imageUrl,
      title: title,
      size: size,
      price: price,
    });

    await post.save();

    return new Response(JSON.stringify(post), {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new Response('Ошибка на стороне сервера', { status: 500 });
  }
};
