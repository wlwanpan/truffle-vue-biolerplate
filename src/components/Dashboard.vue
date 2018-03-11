<template>
  <div class="dashboard">
    <div>
      <h1>{{ msg }}</h1>
      <a href="#" @click.prevent="openWelcomeDialog">Open Welcome Dialog</a>
    </div>

    <form @submit.prevent="changeMessage">
      <input v-model="msg" placeholder="Change Message"/>
      <button type="submit">Change</button>
    </form>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import WelcomeDialog from '@/components/dialogs/WelcomeDialog'

export default {
  name: 'dashboard',

  data () {
    return {
      msg: this.$store.getters.getDappTitle,
    }
  },

  computed: {

    ...mapGetters([
      'getDappTitle'
    ])

  },

  methods: {

    changeMessage: function () {
      this.$store.dispatch('changeDappTitle', this.msg)
    },

    openWelcomeDialog: function () {
      this.$modal.show(
        WelcomeDialog,
        {
          title: 'Welcome',
          message: this.getDappTitle
        },
        { adaptive: true }
      )
    }

  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
  display: block;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

form {
  margin-top: 20px;
}

input {
  width: 50%
}

</style>
