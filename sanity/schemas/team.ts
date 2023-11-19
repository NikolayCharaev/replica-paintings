const team = {
  name: 'team',
  title: 'Фотографии команды',
  type: 'document',
  fields: [
    {
      name: 'images',
      type: 'array',
      title: 'фотография человека',
      of: [{type: 'image'}],
    },
  ],
}

export default team
