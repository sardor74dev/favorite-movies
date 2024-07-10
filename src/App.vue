<script setup>
import { useMovieStore } from './stores/MovieStore'
import Movie from './components/Movie.vue';
import Search from './components/Search.vue';

const movieStore = useMovieStore()
</script>

<template>
  <main>
    <header class="header">
      <img src="/logo.svg" alt="logo" class="header-logo">
      <h2>My Favorite Movies</h2>
    </header>
    <div class="tabs">
      <button 
        :class="['tab', {tab_green: movieStore.activeTab === 1}]"
        @click="movieStore.switchTab(1)"  
      >
        Favorites
      </button>
      <button 
        :class="['tab', {tab_green: movieStore.activeTab === 2}]"
        @click="movieStore.switchTab(2)"  
      >
        Search
      </button>
    </div>
    <div v-if="movieStore.activeTab === 1" class="movies">
      <div>
        <h3>Watched Movies</h3>
        <Movie v-for="movie in movieStore.watchedMovies" :key="movie.id" :movie="movie"/>
      </div>
      <h3>All Movies</h3>
      <Movie v-for="movie in movieStore.movies" :key="movie.id" :movie="movie"/>
    </div>
    <div v-else class="search">
      <Search/>
    </div>
  </main>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.header-logo {
  max-width: 50px;
  margin-right: 10px;
}
.tab {
  border: none;
  width: 100px;
  height: 40px;
  font-size: 14px;
  /* margin: 0 10px; */
  border: 0;
  border-bottom: 3px solid #4AB8A1;
  background-color: transparent;
  color: #4AB8A1;
  /* border-radius: 10px; */
}
.tab_green {
  background: #4AB8A1;
  color: white;
}

.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
</style>
