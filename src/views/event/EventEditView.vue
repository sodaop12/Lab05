<template>
  <p>Edit the event here</p>
  <button @click="register">Register Me</button>
</template>

<script>
export default {
  props: ['id', 'event'],
  inject: ['Gstore'],
  methods: {
    register() {
      this.Gstore.flashMessage =
        'you are success fully updated the' + this.event.title
      setTimeout(() => {
        this.Gstore.flashMessage = ''
      }, 3000)
      this.$router.push({
        name: 'EventDetails',
        params: { id: this.event.id }
      })
    }
  }
}
</script>
