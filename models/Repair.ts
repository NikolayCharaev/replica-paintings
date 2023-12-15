import { models, model, Schema, mongoose } from 'mongoose';

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
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const Repair = models.Repair || model('Repair', RepairSchema);

export default Repair;
