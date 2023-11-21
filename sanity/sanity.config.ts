import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'

//@ts-ignore
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'replica-paintings',

  projectId: '5l4p48au',
  dataset: 'replica-paintings',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
