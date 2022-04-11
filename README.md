# Portfolio | Justin Scorzafava

### This is my portfolio website to display my software applications/projects.

**Link to project: [Live-demo]https://www.justinscorzafava.com**

![portfolio](static/mainImg.png)

---

## **How It's Made:**

---

### I began building the project with a hello world starter from Gatsby's website. I decided to build out all the pages first and make sure the routing was setup correctly. When I was sure the routing was correct, I then built out the Navbar followed by the hero, services, experience, projects, and footer sections on the index.js page(home-page). Some of the data for these sections was imported from constants folder, and other data was pulled via GraphQL queries built upon a Strapi backend. Afterwards, I built the about page with more graphql queries. I also built out the projects page, but with same data via slightyly-altered queries from the projects section on the home page. The contact page was straightforward and the form is built upon formspree.io's backend to store the submissions.

---

## **Tech used:**

---

### HTML, CSS, Javascript, React JS, Gatsby JS, GraphQL, Strapi

---

## **Optimizations:**

---

### Optimization of the entire project was part of the reason Gatsby JS and GraphQL were chosen. Many of the built in plugins allowed me to pull data from queries and use static images to speed up loading times. The pages for individual projects were created programatically, saving plenty of time that would have been spent hard-coding data for the pages and SEO. Most sections with more than one of the same kind of element were either queries or constants that were iterated over to save code space as well.
