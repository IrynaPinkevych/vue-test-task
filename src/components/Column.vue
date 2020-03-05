<template>
  <div class="column">
    <h4 v-bind:style="{ backgroundColor: column.titleBgColor }">
      {{ column.title | uppercase }}
      &nbsp;
      <span>({{ columnCards(column.key).length }})</span>
    </h4>
    <CardList
      v-bind:columnKey="column.key"
      v-bind:columnCards="columnCards(column.key)"
    />
    <AddCard v-bind:isAdding="column.isAdding" v-bind:columnKey="column.key" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import AddCard from '@/components/AddCard'
import CardList from '@/components/CardList'

export default {
  name: 'Column',
  props: {
    column: {
      type: Object,
      required: true
    }
  },
  filters: {
    uppercase: value => value.toUpperCase()
  },
  computed: mapGetters(['columnCards']),
  methods: mapActions(['getCards']),
  mounted() {
    this.getCards()
  },
  components: {
    AddCard,
    CardList
  }
}
</script>

<style>
.column {
  width: 22%;
  background: #2e3135;
}

h4 {
  display: block;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  color: #ffffff;
}

@media screen and (max-width: 768px) {
  .column {
    width: 100%;
    margin-bottom: 1rem;
  }
}
</style>
