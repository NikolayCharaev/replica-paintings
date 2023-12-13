import mongoose, { Schema, models, model } from 'mongoose';
const UserShema = new Schema({
  email: {
    type: String,
    unique: [true, 'такой email занят'],
    required: [true, 'поле обязательно для заполнения'],
  },
  username: {
    type: String,
    required: [true, 'поле обязательно для заполнения'],
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      'Некорректное имя пользователя. Поле должно содержать от 8 до 20 символов!',
    ],
  },
  image: {
    type: String,
  },
});

const User = models.User || model('User', UserShema);

export default User;
