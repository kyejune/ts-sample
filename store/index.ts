import {Vue} from "~/node_modules/nuxt-property-decorator";

export const state = () => ({
  people: []
})

export const mutations = {
  setPeople(state, people) {
    state.people = people
  }
}

export const actions = {
  async nuxtServerInit({ commit }, { app }) {
    const people = await app.$axios.$get(
      "./random-data.json"
    )
    commit("setPeople", people.slice(0, 2))
  }
}



// Storage & Cookie
const engine = require('store/src/store-engine')
export const storage:StoreJsAPI = engine.createStore(
    [
        require('store/storages/localStorage'),
        require('store/storages/cookieStorage')
    ],
    [
        require('store/plugins/defaults')
    ]
);

export const cookie:CookieJsAPI = engine.createStore(
    [
        require('store/storages/localStorage'),
        require('store/storages/cookieStorage')
    ],
    [
        require('store/plugins/defaults'),
        require('store/plugins/expire')
    ]
);