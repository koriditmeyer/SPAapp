<h3 align="center">
Welcome to the SPA app [FRONTEND]
</h3>

For the [BACKEND] project go here: https://github.com/koriditmeyer/ecommerceBackendMVC

## 🌐 Live version
https://spaapp-4fdk.onrender.com/

(with more than +170 000 amazon products)


## 💻 Technologies Used

!["React"](https://img.shields.io/badge/react-React-brightgreen?logo=react&logoColor=61DAFB&label=%20&labelColor=black&color=61DAFB)
!["Vite"](https://img.shields.io/badge/vite-Vite-brightgreen?logo=vite&logoColor=646CFF&label=%20&labelColor=black&color=646CFF)
![JavaScript](https://img.shields.io/badge/javascript-JavaScript-brightgreen?logo=javascript&logoColor=F7DF1E&label=%20&labelColor=black&color=F7DF1E)
![Node JS](https://img.shields.io/badge/nodedotjs-Node_Js-brightgreen?logo=nodedotjs&logoColor=339933&label=%20&labelColor=black&color=339933)
![tailwindcss](https://img.shields.io/badge/tailwindcss-Tailwind_CSS-brightgreen?logo=tailwindcss&logoColor=06B6D4&label=%20&labelColor=black&color=06B6D4)

!["React Router"](https://img.shields.io/badge/reactrouter-React_Router-brightgreen?logo=reactrouter&logoColor=CA4245&label=%20&labelColor=black&color=CA4245)
![React Redux](https://img.shields.io/badge/redux-React_Redux-brightgreen?logo=redux&logoColor=764ABC&label=%20&labelColor=black&color=764ABC)
![React Redux Persist](https://img.shields.io/badge/Redux_Persist-brightgreen?logo&logoColor=6332F6&label=%20&labelColor=black&color=black)
![swiper](https://img.shields.io/badge/swiper-Swiper-brightgreen?logo=swiper&logoColor=6332F6&label=%20&labelColor=black&color=6332F6)
![heroicons](https://img.shields.io/badge/Heroicons-brightgreen?logo=hero&logoColor=6332F6&label=%20&labelColor=black&color=black)
![React Icons](https://img.shields.io/badge/React_Icons-brightgreen?logo&logoColor=6332F6&label=%20&labelColor=black&color=black)
![React Scroll](https://img.shields.io/badge/React_Scroll-brightgreen?logo&logoColor=6332F6&label=%20&labelColor=black&color=black)
![Framer Motion](https://img.shields.io/badge/framer-Framer_Motion-brightgreen?logo=framer&logoColor=0055FF&label=%20&labelColor=black&color=0055FF)
![React Toastify](https://img.shields.io/badge/React_Toastify-brightgreen?logo&logoColor=6332F6&label=%20&labelColor=black&color=black)
![React Loading Skeleton](https://img.shields.io/badge/React_Loading_Skeleton-brightgreen?logo&logoColor=6332F6&label=%20&labelColor=black&color=black)
![React Query](https://img.shields.io/badge/React_Query-brightgreen?logo=reactquery&logoColor=FF4154&label=%20&labelColor=black&color=FF4154)
![Axios](https://img.shields.io/badge/Axios-brightgreen?logo=axios&logoColor=5A29E4&label=%20&labelColor=black&color=5A29E4)

![Git](https://img.shields.io/badge/git-Git-brightgreen?logo=git&logoColor=F05032&label=%20&labelColor=black&color=F05032)
![GitHub](https://img.shields.io/badge/github-GitHub-brightgreen?logo=github&logoColor=white&label=%20&labelColor=black&color=181717)

## 💼 Technical Elements

18/04/24
- Migrate from Firebase to ![Mongo DB](https://img.shields.io/badge/nodedotjs-MongoDb-brightgreen?logo=mongodb&logoColor=47A248&label=%20&labelColor=black&color=47A248) database with a backend build with ![Node JS](https://img.shields.io/badge/nodedotjs-Node_Js-brightgreen?logo=nodedotjs&logoColor=339933&label=%20&labelColor=black&color=339933) to manage users, products, carts...
- Use of ![React Query](https://img.shields.io/badge/React_Query-brightgreen?logo=reactquery&logoColor=FF4154&label=%20&labelColor=black&color=FF4154) to handle queries to optimise cache and get loading and error states. Use of ![Axios](https://img.shields.io/badge/Axios-brightgreen?logo=axios&logoColor=5A29E4&label=%20&labelColor=black&color=5A29E4) to fetch the data. 
- Implement loading skeleton with react-loading-skeletons. 
- Add a product pagination
- Add a category filter to products search
- Add admin panel
- Add a gallery to products
- Add a custom made progress bar with the use of a reciprocal function with time steps adjustments for smoother progress -> It allows to have a smooth progress bar even if the loading time is unknown (the backend does not send the data by chunks)

23/01/24
- Refactor the router to use React-Router-DOM v6.4. For each route who need it: Implement the data fetch with loader function / Implment the error component in case of incorrect fetch or other errors.
- With the new version of React-Router-DOM, implement page transition with Framer-Motion and a global spinner icon.
- Implement the navigation with protected routes and role base authorization wth a router middleware
- Implement toast to inform user of action with React-toastify

15-16/01/24
- Add login and registration pages
- Change context implementation of the store from React to ![React Redux](https://img.shields.io/badge/redux-React_Redux-brightgreen?logo=redux&logoColor=764ABC&label=%20&labelColor=black&color=764ABC)
- Implement the context persistance with Redux Persist library
- Add pages and left side menu transition with ![Framer Motion](https://img.shields.io/badge/framer-Framer_Motion-brightgreen?logo=framer&logoColor=0055FF&label=%20&labelColor=black&color=0055FF)

12/01/24
- Create left side menu
- Implement responsiveness of the website for all the pages

10/12/23

- Change the behaviour of queries to fetch data from ![firebase](https://img.shields.io/badge/firebase-Firebase-brightgreen?logo=firebase&logoColor=FFCA28&label=%20&labelColor=black&color=FFCA28).
- Use a .env file to store the Firebase credentials
- Implement a new global context named CartContext to globally manage the orders and cart status (add products, remove product, clear, update)
- Implement several pages to the e-commerce website: homepage, item, search results, cart, checkout (with user form), order complete
- When submitting an order, create a new order in Firebase with order details
- Use of ![swiper](https://img.shields.io/badge/swiper-Swiper-brightgreen?logo=swiper&logoColor=6332F6&label=%20&labelColor=black&color=6332F6) for the carousel on the home page
- Update the style of the e-commerce using ![tailwindcss](https://img.shields.io/badge/tailwindcss-Tailwind_CSS-brightgreen?logo=tailwindcss&logoColor=06B6D4&label=%20&labelColor=black&color=06B6D4) to look like the Amazon website (inspired from https://www.youtube.com/watch?v=pnnblIo1iO0 )


14/11/23

- Organise navbar, use of !["React Router"](https://img.shields.io/badge/reactrouter-React_Router-brightgreen?logo=reactrouter&logoColor=CA4245&label=%20&labelColor=black&color=CA4245) to display API data and go into detail, categories
- Fetch data from API

26/10/23:

- Use of !["React"](https://img.shields.io/badge/react-React-brightgreen?logo=react&logoColor=61DAFB&label=%20&labelColor=black&color=61DAFB) with !["Vite"](https://img.shields.io/badge/vite-Vite-brightgreen?logo=vite&logoColor=646CFF&label=%20&labelColor=black&color=646CFF) to build the components, props
- Use of Tailwind CSS to build the SPA

----

Future implementations (v1)
- ~~Create left side menu~~
- ~~Create login and registration page~~
- Modify checkout page
- ~~Create a user page~~ and order page
- add favorite

Future implementations (v2)
- ~~Use Redux to implement the context~~
- ~~Use Axios to fetch API and loading bar~~
- ~~Use Mongo DB as DB and fetch API from Mongo DB~~
- ~~Use Node and Mongo DB to manage users and log in~~
- ~~Create a filter bar for queries~~
- ~~Add gallery to products~~
- Add stripe connectivity
- Connect react redux to backend