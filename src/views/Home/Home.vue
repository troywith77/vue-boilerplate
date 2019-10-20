<template>
  <div :class="$style.home">
    <HelloWorld/>
  </div>
</template>

<script>
import ExampleService from '@@@/domains/example/ExampleService'
import { HttpError, BusinessError } from '@@@/apis/utils/error'

import HelloWorld from '@/components/HelloWorld'

export default {
  name: 'home',
  mounted() {
    ExampleService.getExample()
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        if (err instanceof BusinessError) {
          console.log(err.message, err.code)
        } else if (err instanceof HttpError) {
          console.log(err.status)
        } else {
          console.log(err)
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
