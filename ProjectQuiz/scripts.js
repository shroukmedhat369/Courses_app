document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');
    const commentForm = document.getElementById('comment-form');
    const likeButton = document.getElementById('like-button');
    const favoriteCoursesContainer = document.getElementById('favorite-courses');

    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Signup successful! Redirecting to login...');
            window.location.href = 'index.html';
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Login successful! Redirecting to home page...');
            window.location.href = 'home.html';
        });
    }

    if (commentForm) {
        commentForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const commentText = document.getElementById('comment-text').value;
            const rating = document.getElementById('rating').value;
            addComment(commentText, rating);
            document.getElementById('comment-text').value = '';
            document.getElementById('rating').value = '1';
        });
    }

    if (likeButton) {
        likeButton.addEventListener('click', function() {
            const courseTitle = localStorage.getItem('courseTitle');
            const courseDescription = localStorage.getItem('courseDescription');
            toggleLike(courseTitle, courseDescription);
        });
    }

    if (favoriteCoursesContainer) {
        loadFavoriteCourses();
    }

    function addComment(comment, rating) {
        const commentsContainer = document.getElementById('comments-container');
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        commentElement.innerHTML = `
            <p>${comment}</p>
            <p>Rating: ${rating}/5</p>
        `;
        commentsContainer.appendChild(commentElement);

        updateCourseRating(rating);
    }

    function updateCourseRating(newRating) {
        const ratingValueElement = document.getElementById('course-rating-value');
        const currentRating = parseFloat(ratingValueElement.textContent);
        const updatedRating = (currentRating + parseFloat(newRating)) / 2;
        ratingValueElement.textContent = updatedRating.toFixed(1);
    }

    function toggleLike(title, description) {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const index = favorites.findIndex(course => course.title === title);
        if (index === -1) {
            favorites.push({ title, description });
            likeButton.textContent = 'Unlike';
        } else {
            favorites.splice(index, 1);
            likeButton.textContent = 'Like';
        }
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }

    function loadFavoriteCourses() {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        favoriteCoursesContainer.innerHTML = '';
        favorites.forEach(course => {
            const courseElement = document.createElement('div');
            courseElement.classList.add('course');
            courseElement.innerHTML = `
                <h3>${course.title}</h3>
                <p>${course.description}</p>
            `;
            favoriteCoursesContainer.appendChild(courseElement);
        });
    }

    const latestCoursesContainer = document.querySelector('#latest-courses .course-container');
    const recommendedCoursesContainer = document.querySelector('#recommended-courses .course-container');

    if (latestCoursesContainer && recommendedCoursesContainer) {
        const latestCourses = [
            { title: 'Introduction to Python Programming',
            description: 'Dive into the basics of Python, one of the most popular programming languages today.Learn syntax, data types, control structures, functions.' },
            { title: 'Web Development with HTML, CSS, and JavaScript', description: 'Learn the foundational technologies of web development. This course covers HTML for structure, CSS for styling, and JavaScript for interactivity.' },
            { title: 'Data Science and Machine Learning with Python', description: 'Explore the world of data science and machine learning. This course includes data manipulation, visualization, and applying machine learning algorithms.' },
            { title: 'Introduction to Digital Marketing ', description: 'Gain insights into the digital marketing landscape. Learn about SEO, content marketing, social media marketing, email marketing, and analytics.' },
            { title: 'Project Management Essentials', description: ' Understand the principles and practices of effective project management. Learn about project lifecycles, methodologies, tools, and techniques for managing projects successfully.' },
            { title: 'Graphic Design with Adobe Photoshop', description: 'Master the basics of graphic design using Adobe Photoshop. This course covers essential tools and techniques for creating stunning graphics, photo editing, and digital art.' },
        ];

        const recommendedCourses = [
            { title: 'Financial Accounting for Beginners', description: 'Get a solid foundation in financial accounting. Learn about financial statements, accounting principles, and how to analyze and interpret financial data for managing projects successfully.' },
            { title: 'Introduction to Cybersecurity for Beginners', description: ' Learn about the key concepts of cybersecurity. This course covers threats and vulnerabilities, security measures, risk management, and best practices for protecting information systems.' },
            { title: 'Advanced JavaScript: ES6 and Beyond', description: 'Enhance your JavaScript skills by learning the latest features of ECMAScript 6 (ES6) and beyond. This course covers modern syntax, asynchronous programming, modules, and more.' },
        ];

        function loadCourses(container, courses) {
            container.innerHTML = ''; // Clear existing courses
            courses.forEach(course => {
                const courseElement = document.createElement('div');
                courseElement.classList.add('course');
                courseElement.innerHTML = `
                    <h3>${course.title}</h3>
                    <p>${course.description}</p>
                    <button onclick="viewCourseDetails('${course.title}', '${course.description}')">View Details</button>
                `;
                container.appendChild(courseElement);
            });
        }

        loadCourses(latestCoursesContainer, latestCourses);
        loadCourses(recommendedCoursesContainer, recommendedCourses);
    }

    window.viewCourseDetails = function(title, description) {
        localStorage.setItem('courseTitle', title);
        localStorage.setItem('courseDescription', description);
        window.location.href = 'course-details.html';
    }

    const courseTitleElement = document.getElementById('course-title');
    const courseDescriptionElement = document.getElementById('course-description');
    if (courseTitleElement && courseDescriptionElement) {
        const courseTitle = localStorage.getItem('courseTitle');
        const courseDescription = localStorage.getItem('courseDescription');
        courseTitleElement.textContent = courseTitle;
        courseDescriptionElement.textContent = courseDescription;

        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const isFavorite = favorites.some(course => course.title === courseTitle);
        likeButton.textContent = isFavorite ? 'Unlike' : 'Like';
    }
});
