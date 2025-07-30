const sections = [
  {
    title: "1. HTML & CSS",
    content: `
HTML (HyperText Markup Language) is the foundation of web pages and describes structure, while CSS (Cascading Style Sheets) controls layout and design. 
Key topics include semantic tags, box model, Flexbox, Grid, and media queries.
`,
  },
  {
    title: "2. JavaScript",
    content: `
JavaScript adds interactivity to websites. Start with variables, functions, and control structures. 
Learn DOM manipulation, ES6+ features, asynchronous code (Promises, async/await), and event handling.
`,
  },
  {
    title: "3. React.js",
    content: `
React is a library for building user interfaces. Key concepts include components, JSX, props, state, useEffect, and hooks. 
You’ll also explore component lifecycles, routing (React Router), and state management.
`,
  },
  {
    title: "4. Build Tools & Deployment",
    content: `
Learn tools like Webpack, Babel, and Vite for bundling and compiling. 
Understand package managers (npm/yarn), Git for version control, and how to deploy to Netlify, Vercel, or GitHub Pages.
`,
  },
  // Add more sections as and when needed
];

document.addEventListener("DOMContentLoaded", function () {
  const accordionContainer = document.querySelector("#accordion");

  sections.forEach((section, index) => {
    const sectionItem = document.createElement("div");
    sectionItem.classList.add("accordion-item");

    const sectionHeader = document.createElement("div");
    sectionHeader.classList.add("accordion-header");
    sectionHeader.textContent = section.title;

    const sectionContent = document.createElement("div");
    sectionContent.classList.add("accordion-content");
    sectionContent.innerHTML = `<p>${section.content}</p>`;

    sectionItem.appendChild(sectionHeader);
    sectionItem.appendChild(sectionContent);

    accordionContainer.appendChild(sectionItem);

    if (index === 0) {
      sectionItem.classList.add("active");
      sectionContent.style.display = "block";
    }
  });

  accordionContainer.addEventListener("click", function (event) {
    const header = event.target.closest(".accordion-header");
    if (!header) return;

    const sectionItem = header.parentNode;
    const content = sectionItem.querySelector(".accordion-content");
    const isActive = sectionItem.classList.contains("active");

    document.querySelectorAll(".accordion-item").forEach((item) => {
      item.classList.remove("active");
      item.querySelector(".accordion-content").style.display = "none";
    });

    if (!isActive) {
      sectionItem.classList.add("active");
      content.style.display = "block";
    }
  });
});
