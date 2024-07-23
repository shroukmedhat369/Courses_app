<template>
  <main>
    <section id="favorites" class="sec">
      <h2>Your Favorite Courses</h2>
      <div class="course-container" id="favorite-courses">
        <CoursePreview v-for="course in favoriteCourses" :key="course.title" :course="course" />
      </div>
    </section>
    <button @click="goBack">Back</button>
  </main>
</template>

<script>
import CoursePreview from './CoursePreview.vue';

export default {
  name: 'FavoritesContent',
  components: {
    CoursePreview
  },
  data() {
    return {
      favoriteCourses: []
    };
  },
  methods: {
    goBack() {
      window.history.back();
    },
    loadFavoriteCourses() {
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      this.favoriteCourses = favorites;
    }
  },
  mounted() {
    this.loadFavoriteCourses();
  }
};
</script>

<style >
/* Add your main content-specific styles here */

main {
    padding: 20px;
    background: #f2f2f2;
    flex: 1;
}

.sec {
    background: #82b440;
    padding: 2rem;
    margin-bottom: 2rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
}

h2, h3 {
    border-bottom: 2px solid #ccc;
    padding: 10px;
    color: #333;
}

.course-container, #comments-container, #favorites-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

</style>
