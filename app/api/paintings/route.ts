import { connectDB } from '@/lib/database';
import Repair from '@/models/Repair';

export const POST = async (req: any, res: any) => {
  const { author, imageUrl, title, size, price, user } = await req.json();

  try {
    connectDB();
    const post = new Repair({
      author: author,
      imageUrl: imageUrl,
      title: title,
      size: size,
      price: price,
      user,
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

export const GET = async (req : any, res : any) => {
  try {
    const allPosts = await Repair.find({});

    if (allPosts) {
      return new Response(JSON.stringify(allPosts), {
        status: 200,
      });
    } else {
      console.log('Пока товаров в корзине нет');
    }
  } catch (err) {
    console.log(err);
    return new Response('Ошибка на стороне сервера', { status: 500 });
  }
};
