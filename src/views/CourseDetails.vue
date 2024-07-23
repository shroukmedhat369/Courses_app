<template>
  <main class="main">
    <section id="course-details">
      <h2 id="course-title">{{ courseTitle }}</h2>
      <p id="course-description">{{ courseDescription }}</p>
      <div id="course-rating">
        <h3>Rating: <span id="course-rating-value">{{ courseRating }}</span>/5</h3>
      </div>
      <button id="like-button" @click="toggleLike">{{ likeButtonText }}</button>
    </section>
    <section id="course-comments">
      <h3>User Reviews</h3>
      <div id="comments-container">
        <div class="comment" v-for="comment in comments" :key="comment.id">
          <p>{{ comment.text }}</p>
          <p>Rating: {{ comment.rating }}/5</p>
        </div>
      </div>
      <form id="comment-form" @submit.prevent="addComment">
        <textarea id="comment-text" v-model="newComment" placeholder="Add your comment" required></textarea>
        <label for="rating">Rate this course:</label>
        <select id="rating" v-model="newRating" required>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button type="submit">Submit</button>
      </form>
      <button @click="goBack" class="back">Back</button>
    </section>
  </main>
</template>

<script>
export default {
  name: 'CourseDetails',
  data() {
    return {
      courseTitle: localStorage.getItem('courseTitle'),
      courseDescription: localStorage.getItem('courseDescription'),
      courseRating: 0,
      likeButtonText: 'Like',
      comments: [],
      newComment: '',
      newRating: 5
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    addComment() {
      const comment = {
        id: Date.now(),
        text: this.newComment,
        rating: this.newRating
      };
      this.comments.push(comment);
      this.newComment = '';
      this.newRating = 5;
      this.updateCourseRating(comment.rating);
    },
    updateCourseRating(newRating) {
      const totalRating = this.comments.reduce((sum, comment) => sum + comment.rating, 0);
      this.courseRating = (totalRating / this.comments.length).toFixed(1);
    },
    toggleLike() {
      let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      const index = favorites.findIndex(course => course.title === this.courseTitle);
      if (index === -1) {
        favorites.push({ title: this.courseTitle, description: this.courseDescription });
        this.likeButtonText = 'Unlike';
      } else {
        favorites.splice(index, 1);
        this.likeButtonText = 'Like';
      }
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  },
  mounted() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isFavorite = favorites.some(course => course.title === this.courseTitle);
    this.likeButtonText = isFavorite ? 'Unlike' : 'Like';
  }
};
</script>

<style >

.main{
    padding: 20px;
    background: #f2f2f2;
    flex: 1;
    width: 450px;
    position: relative;
    left: 33%;

}

.course-container .course, .comment {
    background-color: #fff;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    flex: 1;
    min-width: 280px;
}



h2 {
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    color: #333;
}

form {
    display: flex;
    flex-direction: column;
}

input {
    padding: 0.75rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
}

input:focus {
    border-color: #82b440;
    outline: none;
}

button {
    padding: 0.75rem;
    background: #82b440;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background: #218838;
}

p {
    margin-top: 1rem;
    font-size: 0.9rem;
    color: #666;
}

a {
    color: #82b440;
    text-decoration: none;
    transition: color 0.3s ease;
}

a:hover {
    color: #218838;
}

/* Responsive Design */
@media (max-width: 480px) {
    .form-container {
        padding: 1.5rem;
    }

    h2 {
        font-size: 1.25rem;
    }

    input, button {
        font-size: 0.875rem;
    }

    nav ul li {
        margin: 0 5px;
    }

    nav ul li a {
        font-size: 0.875rem;
    }

    .sec {
        padding: 1.5rem;
    }

    h2, h3 {
        font-size: 1.25rem;
    }
}

/* Specific Styles for course-details.html */
#course-details {
    padding: 2rem;
    background: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin-bottom: 2rem;
}

#course-details h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
}

#course-details p {
    font-size: 1rem;
    margin-bottom: 1rem;
    color: #666;
}

#course-details #course-rating {
    margin-bottom: 1rem;
}

#course-details button {
    background: #82b440;
    color: #fff;
}

#course-details button:hover {
    background: #218838;
}

#course-comments form {
    margin-top: 20px;
}

#course-comments textarea {
    padding: 0.75rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
    resize: vertical;
}

#course-comments textarea:focus {
    border-color: #82b440;
    outline: none;
}

#course-comments select {
    padding: 0.75rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
}

#course-comments select:focus {
    border-color: #82b440;
    outline: none;
}

/* Back Button */
button.back {
    margin-top: 20px;
    padding: 0.75rem;
    background: #82b440;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button.back:hover {
    background: #218838;
}

/* Add your course details-specific styles here */
</style>
