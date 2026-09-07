export default {
  name: 'carrossel',
  title: 'Carrossel de Imagens',
  type: 'document',
  fields: [
    {
      name: 'titulo',
      title: 'Título do Carrossel',
      type: 'string',
    },
    {
      name: 'imagens',
      title: 'Lista de Imagens',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'legenda',
              type: 'string',
              title: 'Legenda da Imagem',
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Texto Alternativo (Alt)',
            }
          ]
        }
      ]
    }
  ]
}