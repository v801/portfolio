<template>
  <div class='portfolio'>

      <header>
        <h1>portfolio</h1>
        <p class='intro'>here's a few of my latest front-end development projects.  you can find the source code for this site on <a href='//github.com/cherryslimes/portfolio' target='_blank' rel='noreferrer'>github</a>.</p>
      </header>

      <ul>
        <li v-for='job in jobs'>
          <div class='browser-window'>
            <div class='top-bar'>
              <div class='circles'>
                <div class='circle'></div>
                <div class='circle'></div>
                <div class='circle'></div>
              </div>
            </div>
            <div class='content'>
              <div class='content-bg' v-lazy:background-image='job.img'></div>
            </div>
          </div>
          <div class='info'>
              <h4>{{ job.title }}</h4>
              <p>{{ job.desc }}</p>
              <p v-if='job.url'><a :href='"//" + job.url' target='_blank' rel='noreferrer'>{{ job.url }}</a></p>
          </div>
        </li>
      </ul>
  </div>
</template>

<script>
module.exports = {
  data() {
    return {
      jobs: ''
    }
  },
  mounted() {
    this.$http.get('./portfolio.json').then((response) => {
      // success callback
      this.jobs = response.data
    }, (response) => {
      // error callback
      console.log(response)
    })
  }
}
</script>
