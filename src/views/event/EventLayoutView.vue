<template>
  <div v-if="Gstore.event">
    <h1>{{ Gstore.event.title }}</h1>
    <div id="nav">
      <router-link :to="{ name: 'EventDetails' }">Airline</router-link>
      |
      <router-link :to="{ name: 'EventRegister' }">Passengers</router-link>
    </div>
    <router-view :event="Gstore.event" />
  </div>
</template>
<script>
export default {
  inject: ['Gstore']
}
</script>
