<template>
  <h1>Events For Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :event="event" :key="event.id" />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'

export default {
  name: 'EventList',

  components: {
    EventCard
  },

  data() {
    return {
      events: null
    }
  },

  created() {
    EventService.getEvents()
      .then(res => {
        this.events = res.data
      })
      .catch(error => console.log(error))
  }
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
