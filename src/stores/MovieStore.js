import { defineStore } from "pinia";
import { ref, computed, watch } from "vue";

export const useMovieStore = defineStore("movieStore", () => {
  const movies = ref([])
  const activeTab = ref(2)

  const moviesInLC = localStorage.getItem("movies")
  if(moviesInLC){
    movies.value = JSON.parse(moviesInLC)._value
  }

  const watchedMovies = computed(() => { 
    return movies.value.filter((el) => el.isWatched)
  })

  const switchTab = (n) => {
    activeTab.value = n
  }
  const toggleWatch = (id) => {
    const movieId = movies.value.findIndex((el) => el.id === id)
    movies.value[movieId].isWatched = !movies.value[movieId].isWatched
  }
  const deleteMovie = (id) => {
    movies.value = movies.value.filter(el => el.id !== id)
  }

  watch(
    () => movies, 
    (state) => {
      localStorage.setItem("movies", JSON.stringify(state))
    }, 
    { deep: true }
  )

  return {
    movies,
    activeTab,
    watchedMovies,
    switchTab,
    toggleWatch,
    deleteMovie
  }
})