import mongoose, { models, model, Schema,  } from 'mongoose';

const RepairSchema = new Schema({
  author: {
    type: String,
  },
  paintingName: {
    type: String,
  },
  paintingSize: {
    type: String,
  },
  paintingPrice: {
    type: String,
  },
  images: {
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
