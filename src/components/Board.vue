<template>
  <div class="board">
    <Column
      v-for="column of columns"
      :key="column.key"
      v-bind:column="column"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Column from '@/components/Column'

export default {
  name: 'Board',
  computed: mapGetters(['columns']),
  components: {
    Column
  }
}
</script>

<style>
.board {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

@media screen and (max-width: 768px) {
  .board {
    display: block;
  }
}
</style>
