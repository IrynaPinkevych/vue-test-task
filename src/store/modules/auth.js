export default {
  state: {
    user: {}
  },
  mutations: {},
  actions: {
    createUser: async (state, payload) => {
      payload = JSON.stringify(payload)

      try {
        const res = await fetch(
          'http://trello.backend.tests.nekidaem.ru/api/v1/users/create/',
          {
            method: 'POST',
            // mode: 'no-cors',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: payload
          }
        )
        console.log(res.ok)

        const responseMsg = await res.json()
        console.log(responseMsg)
      } catch (err) {
        console.error(err)
      }
    }
  },
  getters: {}
}
