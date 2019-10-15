import {
  getExample,
} from '@@@/data/example/requests'

import Example from './entities/Example'

export default class ExampleService {
  static getExample() {
    return getExample()
      .then((res) => ({
        ...res,
        items: res.items.map(item => new Example(item))
      }))
  }
}
