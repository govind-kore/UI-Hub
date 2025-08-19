## ♾️ INFINITE SCROLL Application (ReactJS)
> This project implements a fully functional Infinite Scrolling feature in **ReactJS**, where new product data is automatically fetched and displayed as the user scrolls down. The goal was to practice **React Hooks, API integration, scroll event handling, and performance optimization with Throttling**.

> The application fetches product data from dummyjson.com and loads 10 items per request. As the user scrolls near the bottom of the page, the next batch of products is fetched dynamically, providing a seamless user experience without requiring manual pagination.

#### 🪶 Functionalities Covered : 
- Built with ReactJS (Functional Components + Hooks)
- Data fetching handled with useEffect and stored in component state (useState)
- Infinite scrolling with scroll event listeners
- Implemented a custom throttle function to optimize scroll performance
- Material UI LinearProgress used as a loader during data fetch
- Edge case handling (stop fetching when API limit is reached)
- Clean, modular logic with state management using useState
- Responsive design for smooth product rendering

#### 🪟 Output : 
![Infinite Scroll Demo](Output.gif)

#### 🛠️ Use Case :
- Ideal for e-commerce product listings, blogs, social feeds, or search results
- Eliminates the need for pagination, improving user engagement and UX
- Demonstrates practical usage of **React Hooks** (useState, useEffect)
- Showcases performance optimization with **throttling scroll events**
- Integration of **Material-UI** for modern UI elements

#### 🧑‍💻 Learning from this Project :
- Learned how to implement infinite scrolling logic in React applications
- Gained hands-on experience with event listeners + cleanup in useEffect
- Understood how to use a throttle function to reduce unnecessary API calls
- Explored how to manage loading states and conditionally render loaders
- Practiced integrating Material UI components (LinearProgress) with React
- Improved understanding of state management and API-driven rendering

#### 🪛 How to use this Application ?
1. **Clone or download the repository**
2. Follow below steps one after another:
   - `npm install` – installs all the dependancies
   - `npm run dev` - runs the application
   - `http://localhost:5173/` - open this link on any browser

---
🧠 _This project highlights strong React fundamentals, API handling, event-driven rendering, and performance optimization techniques — all while integrating a modern UI library (Material UI)._