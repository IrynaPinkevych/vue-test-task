<template>
  <li class="card" v-bind:id="card.id">
    <p><b class="card-id">id: </b>{{ card.id }}</p>
    <p>{{ card.text }}</p>
    <span class="close-card-btn" @click="deleteCard(card.id)">
      &times;
    </span>
  </li>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Card',
  props: {
    card: {
      type: Object,
      required: true
    },
    columnKey: {
      type: String,
      required: true
    }
  },
  methods: mapActions(['deleteCard'])
}
</script>

<style>
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 6rem;
  padding: 1rem 0.5rem;
  margin-bottom: 0.5rem;
  background: #1d2022;
  cursor: move;
}

.card p {
  color: #898c90;
}

.card-id {
  color: #f1ecea;
}

.close-card-btn {
  position: absolute;
  top: 2%;
  right: 2%;
  color: #898c90;
  font-size: 1.3rem;
  font-weight: bold;
  padding: 0.2rem;
  cursor: pointer;
}
</style>
