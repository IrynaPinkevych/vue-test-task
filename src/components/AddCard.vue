<template>
  <div v-if="!isAdding" class="add-card" @click="changeAddingStatus(columnKey)">
    <span class="add-card-symbol">+</span>
    <span>{{ addButtonName }}</span>
  </div>
  <form
    v-else
    class="add-card-form"
    @submit.prevent="createCards({ row: columnKey, text: newCardName })"
  >
    <textarea
      :value="newCardName"
      @change="enterCardName($event.target.value)"
      v-bind:placeholder="addPlaceholder"
    ></textarea>
    <div class="buttons">
      <button type="submit" class="add-btn">
        {{ addButtonName }}
      </button>
      <span class="close-btn" @click="changeAddingStatus(columnKey)">
        &times;
      </span>
    </div>
  </form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'AddCard',
  props: {
    columnKey: {
      type: String,
      required: true
    },
    isAdding: {
      type: Boolean,
      required: true
    }
  },
  computed: mapGetters(['addButtonName', 'addPlaceholder', 'newCardName']),
  methods: mapActions(['changeAddingStatus', 'createCards', 'enterCardName'])
}
</script>

<style>
.add-card {
  color: #6f7278;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.add-card-symbol {
  font-size: 1.3rem;
  font-weight: bold;
  padding: 0.2rem 0.5rem;
}

.add-card-form {
  padding: 0.5rem;
}

textarea {
  width: 100%;
  height: 6rem;
  margin-bottom: 0.3rem;
  padding: 0.4rem;
  background: #505050;
  border-color: #505050;
  color: #b6b5b5;
  resize: none;
  font-size: 0.8rem;
}

textarea::placeholder {
  color: #b6b5b5;
  font-size: 0.8rem;
}

.buttons {
  display: flex;
  align-items: center;
}

.add-btn {
  margin-right: 1rem;
  padding: 0.3rem 1rem;
  background: #616160;
  border-color: #616160;
  color: #b1b6b3;
  font-size: 0.9rem;
  font-weight: bold;
  cursor: pointer;
}

.close-btn {
  font-size: 1.5rem;
  font-weight: bold;
  color: #8a8d91;
  cursor: pointer;
}

@media screen and (max-width: 1024px) {
  .buttons {
    justify-content: space-between;
  }

  .add-btn {
    margin: 0;
    padding: 0.3rem;
  }
}
</style>
