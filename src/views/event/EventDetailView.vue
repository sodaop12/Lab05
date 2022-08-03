<template>
  <h4>airline name: {{ event.airline[0].name }}</h4>
  <h4>country: {{ event.airline[0].country }}</h4>
  <h4>slogan: {{ event.airline[0].slogan }}</h4>
  <h4>headquaters: {{ event.airline[0].head_quaters }}</h4>
</template>

<script>
export default {
  props: ['id', 'event']
}
</script>
