<template>
  <h4>passenger name: {{ event.name }}</h4>
  <h4>trips: {{ event.trips }}</h4>
  <h4>id: {{ event.id }}</h4>
  <button @click="register">update passengers detail</button>
</template>

<script>
export default {
  props: ['id', 'event'],
  inject: ['Gstore'],
  methods: {
    register() {
      this.Gstore.flashMessage =
        'you are success fully update the passengers information ' +
        this.event.name
      setTimeout(() => {
        this.Gstore.flashMessage = ''
      }, 5000)
      this.$router.push({
        name: 'EventList'
      })
    }
  }
}
</script>
