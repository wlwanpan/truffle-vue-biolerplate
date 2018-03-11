<template>
  <div id="welcome-dialog">
    <div>
      <h1>{{ title }}</h1>
      <p>{{ message }}</p>
    </div>
    <button @click="$emit('close')">Close</button>
  </div>
</template>

<script>

export default {

  data () {
    return {}
  },

  props: [
    'title',
    'message'
  ],

  mounted () {},

  computed: {},

  methods: {}

}
</script>

<style lang="scss" scoped>

#welcome-dialog {
  text-align: center; padding: 20px;
}

</style>
