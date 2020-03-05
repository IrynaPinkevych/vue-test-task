export default {
  state: {
    cards: [],
    newCardName: ''
  },
  mutations: {
    updateCards: (state, updatedCards) => (state.cards = updatedCards),
    changeValue: (state, newValue) => (state.newCardName = newValue),
    cardsToStorage: state => {
      const cardsJSON = JSON.stringify(state.cards)
      localStorage.setItem('cards', cardsJSON)
    }
  },
  actions: {
    getCards({ commit }) {
      const storageCards = JSON.parse(localStorage.getItem('cards'))
      const mockCards = [
        {
          id: 0,
          row: '0',
          seq_num: 0,
          text: 'test'
        },
        {
          id: 1,
          row: '2',
          seq_num: 1,
          text: 'Todo Vue App'
        }
      ]
      const cards = storageCards || mockCards

      commit('updateCards', cards)
      commit('cardsToStorage')
    },
    createCards: ({ commit, state }, { row, text }) => {
      if (!text.trim()) return
      const newCard = {
        id: Date.now(),
        row,
        seq_num: Date.now(),
        text
      }

      const cards = [...state.cards, newCard]

      commit('updateCards', cards)
      commit('updateAddingStatus', row)
      commit('changeValue', '')
      commit('cardsToStorage')
    },
    deleteCard: ({ commit, state }, cardId) => {
      const cards = state.cards.filter(card => card.id !== cardId)

      commit('updateCards', cards)
      commit('cardsToStorage')
    },
    updateCardRow: ({ commit, state }, { id, row }) => {
      const updatedCardIdx = state.cards.findIndex(
        card => card.id.toString() === id
      )
      const updatedCard = state.cards[updatedCardIdx]
      const cards = [...state.cards]
      updatedCard.row = row
      cards.splice(updatedCardIdx, 1, updatedCard)

      commit('updateCards', cards)
      commit('cardsToStorage')
    },
    enterCardName: ({ commit }, value) => commit('changeValue', value)
  },
  getters: {
    columnCards: state => key => state.cards.filter(card => card.row === key),
    newCardName: state => state.newCardName
  }
}
