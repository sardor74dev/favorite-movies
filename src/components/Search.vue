<script setup>
import { ref } from 'vue'
import { useSearchStore } from '../stores/SearchStore'
import Loader from '../components/Loader.vue'
import Movie from '../components/Movie.vue'

const searchMovie = ref('')
const searchStore = useSearchStore()
</script>

<template>
  <form @submit.prevent="searchStore.getMovies(searchMovie)">
    <input 
      class="search-input" 
      placeholder="Search movie" 
      v-model="searchMovie"
    >
    <button class="btn" type="submit">
        Search
    </button>
  </form>
  <div v-if="!searchStore.isMoviesEmpty" class="message">
    <img width="80" height="80" src="/magnifying-glass-solid.svg" alt="search glass">
    <h1>Search a movie</h1>
  </div>
  <Loader v-if="searchStore.loader" />
  <div class="movie-list" v-else>
    <Movie
      v-for="movie of searchStore.movies"
      :key="movie.id"
      :movie="movie"
      :isSearch="true"
    />
  </div>
</template>
<style scoped>
.movie-list {
    margin-top: 20px;
}
.search-input {
  border: 1px solid #e7e7e7;
  width: 100%;
  height: 40px;
  padding: 0 10px;
  border-radius: 10px;
}
form {
    display: flex;
    flex-direction: row;
    gap: 10px;   
}
button {
    background-color: crimson;
    border: 1px solid crimson;
    color: white;
}
.message {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 100px 0 0 0;
}
.message h1 {
  color: #4AB8A1;
}
</style>