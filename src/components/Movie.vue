<script setup>
import { useMovieStore } from '../stores/MovieStore';
import { useSearchStore } from '../stores/SearchStore';

const movieStore = useMovieStore()
const searchStore = useSearchStore()

const props = defineProps({
  movie: {
    type: Object,
    required: true
  },
  isSearch: {
    type: Boolean,
    required: false,
    default: false
  }
})

</script>

<template>
    <div class="movie">
        <img :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`" :alt="movie.original_title" class="movie-img">
        <div>
            <div class="movie-name">
                {{ movie.original_title }} {{ movie.release_date }}
            </div>
            <span class="movie_overview">
                {{ movie.overview }}
            </span>
            <div v-if="!isSearch" class="movie-buttons">
                <button class="btn movie-buttons-watched" @click="movieStore.toggleWatch(movie.id)">
                    <span v-if="!movie.isWatched">Watched</span>
                    <span v-else>Not Watched</span>
                </button>
                <button class="btn movie-buttons-delete" @click="movieStore.deleteMovie(movie.id)">
                    Delete
                </button>
            </div>
            <div v-else class="movie-buttons">
                <button class="btn movie-buttons-watched" @click="searchStore.addToUserMovies(movie)">
                    <span>Add to favorites</span>
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.movie {
  display: grid;
  grid-template-columns: 200px 1fr;
  column-gap: 30px;
  margin-bottom: 20px;
  border: 2px solid #efefef;
  padding: 10px;
  border-radius: 10px;
}

.movie-accept {
  margin-right: 10px;
}

.movie-img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 8.5px;
}

.movie-name {
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-bottom: 20px;
}

.movie-overview {
  display: block;
  margin-bottom: 20px;
}

.movie-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 15px 0 0 0;
}

.movie-buttons-watched {
  color: #fff;
  background: #1eb4c3;
  border: 1px solid #1eb4c3
}

.movie-buttons-watched__icon {
  width: 15px;
  margin-left: 10px;
}

.movie-buttons-delete {
  color: #fff;
  background: #ff2a2a;
  border: 1px solid #ff2a2a
}
</style>