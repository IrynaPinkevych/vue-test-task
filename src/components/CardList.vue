<template>
  <ul class="card-list">
    <Draggable
      group="cards"
      v-bind:id="columnKey"
      @end="updateCardRow({ id: $event.item.id, row: $event.to.id })"
    >
      <Card
        v-for="card of columnCards"
        :key="card.id"
        v-bind:card="card"
        v-bind:columnKey="columnKey"
      />
    </Draggable>
  </ul>
</template>

<script>
import { mapActions } from 'vuex'
import Card from '@/components/Card'
import Draggable from 'vuedraggable'

export default {
  name: 'CardList',
  props: {
    columnKey: {
      type: String,
      required: true
    },
    columnCards: {
      type: Array,
      required: true
    }
  },
  methods: mapActions(['updateCardRow']),
  components: {
    Card,
    Draggable
  }
}
</script>

<style>
.card-list {
  padding: 0.5rem;
  max-height: 70vh;
  overflow-y: auto;
}

@media screen and (max-width: 1024px) and (orientation: landscape) {
  .card-list {
    max-height: 60vh;
  }
}

@media screen and (max-width: 768px) {
  .card-list {
    max-height: none;
    overflow-y: hidden;
  }
}
</style>
