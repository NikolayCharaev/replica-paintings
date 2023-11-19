const reproductions = {
  name: 'reproductions',
  type: 'document',
  title: 'галерея картин',
  fields: [
    
    {
      name: 'country',
      title: 'введите страну',
      type: 'string',
    },
    {
        name: 'images',
        type: 'array',
        title: 'изображение картины',
        of: [{type: 'image'}],
      },
    {
      name: 'author',
      title: 'введите имя автора',
      type: 'string',
    },

    {
      name: 'paintingName',
      title: 'введите название картины',
      type: 'string',
    },

    {
      name: 'paintingSize',
      title: 'размеры картины пример: (50x80)',
      type: 'string',
    },


    {
      name: 'paintingPrice',
      title: 'цена картины',
      type: 'string',
    },
  ],
}

export default reproductions
