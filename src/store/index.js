import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      memories: [
        {
          id: "m1",
          image:
            "https://c402277.ssl.cf1.rackcdn.com/photos/2325/images/hero_full/mountains-hero.jpg?1345838509",
          title: "Hiking",
          description: "A really nice trip",
        },
        {
          id: "m2",
          image:
            "https://www.stevens.edu/sites/stevens_edu/files/styles/news_detail/public/Big-waves.jpg?itok=4jOwStEE",
          title: "Surfing",
          description: "Killer waves",
        },
        {
          id: "m3",
          image:
            "https://d279m997dpfwgl.cloudfront.net/wp/2019/12/IMG_3509-1000x667.jpg",
          title: "Eating",
          description: "Feeling fat",
        },
      ],
    }
  },
  getters: {
    memories(state) {
      return state.memories
    },
    memory(state) {
      return (memoryId) => {
        return state.memories.find(memory => memory.id === memoryId)
      }
    }
  },
  mutations: {
    ADD_MEMORY(state, memoryData) {
      const newMemory = {
        id: new Date().toDateString(),
        image: memoryData.image,
        title: memoryData.title,
        description: memoryData.description
      }

      state.memories.unshift(newMemory)
    }
  },
  actions: {
    addMemory(context, memoryData) {
      context.commit('ADD_MEMORY', memoryData)
    }
  }
});

export default store;