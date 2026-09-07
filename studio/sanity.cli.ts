import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'n266tgrj',
    dataset: 'production'
  },
  deployment: {
    appId: 'fcnrfzv2sknkocgrl3ipri1v',
    autoUpdates: true,
  },
})

