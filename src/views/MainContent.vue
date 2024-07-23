<template>
  <HeaderVue />
  <main>
    <section id="latest-courses" class="sec">
      <h2>Latest Courses</h2>
      <div class="course-container">
        <CoursePreview v-for="course in latestCourses" :key="course.title" :course="course" />
      </div>
    </section>
    <section id="recommended-courses" class="sec">
      <h2>Recommended Courses</h2>
      <div class="course-container">
        <CoursePreview v-for="course in recommendedCourses" :key="course.title" :course="course" />
      </div>
    </section>
  </main>
</template>

<script>
import CoursePreview from './CoursePreview.vue';
import HeaderVue from '../components/HeaderVue.vue';

export default {
  name: 'MainContent',
  components: {
    CoursePreview,HeaderVue
  },
  data() {
    return {
      latestCourses: [
        { title: 'Introduction to Python Programming', description: 'Dive into the basics of Python, one of the most popular programming languages today.Learn syntax, data types, control structures, functions.' },
        { title: 'Web Development with HTML, CSS, and JavaScript', description: 'Learn the foundational technologies of web development. This course covers HTML for structure, CSS for styling, and JavaScript for interactivity.' },
        { title: 'Data Science and Machine Learning with Python', description: 'Explore the world of data science and machine learning. This course includes data manipulation, visualization, and applying machine learning algorithms.' },
        { title: 'Introduction to Digital Marketing ', description: 'Gain insights into the digital marketing landscape. Learn about SEO, content marketing, social media marketing, email marketing, and analytics.' },
        { title: 'Project Management Essentials', description: 'Understand the principles and practices of effective project management. Learn about project lifecycles, methodologies, tools, and techniques for managing projects successfully.' },
        { title: 'Graphic Design with Adobe Photoshop', description: 'Master the basics of graphic design using Adobe Photoshop. This course covers essential tools and techniques for creating stunning graphics, photo editing, and digital art.' },
      ],
      recommendedCourses: [
        { title: 'Financial Accounting for Beginners', description: 'Get a solid foundation in financial accounting. Learn about financial statements, accounting principles, and how to analyze and interpret financial data for managing projects successfully.' },
        { title: 'Introduction to Cybersecurity for Beginners', description: 'Learn about the key concepts of cybersecurity. This course covers threats and vulnerabilities, security measures, risk management, and best practices for protecting information systems.' },
        { title: 'Advanced JavaScript: ES6 and Beyond', description: 'Enhance your JavaScript skills by learning the latest features of ECMAScript 6 (ES6) and beyond. This course covers modern syntax, asynchronous programming, modules, and more.' },
      ]
    };
  }
};
</script>

<style scoped>
/* Add your main content-specific styles here */
</style>
