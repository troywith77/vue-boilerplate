import baoer from '@@@/api/baoer'

import {
  exampleTransformer,
} from './transformers'

export function getExample() {
  return baoer.get('/api/v2/tab/recommend?module=headlines').then(exampleTransformer)
}
