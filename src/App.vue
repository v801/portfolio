<template>
  <div id='app'>

    <div class='view'>

      <portfolio></portfolio>

    </div>

  </div>
</template>

<script>
import Portfolio from '@/components/portfolio.vue'

export default {
  name: 'app',
  components: { Portfolio },
  data () {
    return {
    }
  },
  mounted() {
  }
}
</script>
