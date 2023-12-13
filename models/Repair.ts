import { models, model, Schema } from 'mongoose';

const RepairSchema = new Schema({
  author: {
    type: String,
  },
  title: {
    type: String,
  },
  paintingSize: {
    type: String,
  },
  paintingPrice: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
});

const Post = models.Post || model('Post', RepairSchema);

export default Post;
