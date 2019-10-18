<template>
  <div :class="$style.home">
    <HelloWorld/>
    {{ token }}
  </div>
</template>

<script>
import * as Cookies from 'js-cookie'
import ExampleService from '@@@/domains/example/ExampleService'
import { ApiError } from '@@@/apis/utils/error'

import HelloWorld from '@/components/HelloWorld'

export default {
  name: 'home',
  computed: {
    token() {
      return Cookies.get('_appToken')
    },
  },
  mounted() {
    ExampleService.getExample()
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        if (err instanceof ApiError) {
          console.log(err.props)
        }
      })
  },
  components: {
    HelloWorld,
  },
}
</script>

<style lang="scss" module>
.home {
  color: $xgb-red;
}
</style>
