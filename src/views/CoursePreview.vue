<template>
  <div class="course">
    <h3>{{ course.title }}</h3>
    <p>{{ course.description }}</p>
    <button @click="viewCourseDetails(course)">View Details</button>
  </div>
</template>

<script>
export default {
  name: 'CoursePreview',
  props: ['course'],
  methods: {
    viewCourseDetails(course) {
      localStorage.setItem('courseTitle', course.title);
      localStorage.setItem('courseDescription', course.description);
      window.location.href = '/course-details';
    }
  }
};
</script>

<style scoped>
/* Add your course preview-specific styles here */
</style>
