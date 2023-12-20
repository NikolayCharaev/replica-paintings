import Repair from '@/models/Repair';
import { connectDB } from '@/lib/database';

export const DELETE = async (req: any, { params }: { params: { id: string } }) => {
  await connectDB();
  try {
    const postId = await params.id;
    const deletedPost = await Repair.findByIdAndDelete(postId);

    if (deletedPost) {
      return new Response('Пост удален', { status: 200 });
    }
  } catch (err) {
    console.log(err);
    return new Response('Произошла ошибка на сервере', { status: 500 });
  }
};
