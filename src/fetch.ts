import { Configuration, DefaultApi, DefaultApiInterface } from './api'

const fetchConfig = new Configuration({
  basePath: `http://${location.host}`,
})

export const defaultApi: DefaultApiInterface = new DefaultApi(fetchConfig)
