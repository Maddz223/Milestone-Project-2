# What2Watch
*Your Go-To Entertainment Pal*

## Live Link

Click below for a live link.
[What2Watch](https://maddz223.github.io/Milestone-Project-2/#/)

##  Overview 
Welcome to What2Watch.
Discover your next binge-watch obsession with What2Watch – your go-to entertainment guide for the newest movies and television shows! Whether you're a casual viewer, a movie buff, or a television series buff, What2Watch is your go-to place for finding the perfect title to match your mood and interests.

Our platform offers a simple, easy-to-use experience where you can dive into the most popular titles, explore long show and movie pages, and keep your own watchlist – all in one place. From action-packed thrillers to laugh-out-loud comedies to critically acclaimed dramas, What2Watch streamlines the search and adds a dash of fun.
Lights, camera, action – binge on!

What the Website Offers:
- Trending Content: Stay updated with the latest popular movies and TV shows.
- Detailed Pages: Access comprehensive information, including cast, release dates, ratings, trailers, and streaming options.
- Watchlist: Save your favorite titles for easy access later.
- Trailer Modals: View official trailers in stylish pop-out modals.
- Streaming Providers: Find out where to watch each title.
- Cast Highlights: Learn about the actors behind your favorite characters.
- Responsive Design: Enjoy a seamless experience on any device.

![Responsive Mockup](https://github.com/Maddz223/Milestone-Project-2/blob/main/Assets/README-images/Responsive.png)

<sub>Experience smooth and responsive UI across all devices.</sub>

## Planning

## User Stories & Acceptance Criteria

### 1. **Browse Trending Content**
**As a user, I want to see trending movies and TV shows to discover popular content.**

- **Tasks**:
  - Integrate TMDB API to fetch trending content.
  - Display movies and shows in separate sections.
  - Create responsive card layout with basic info (poster, title, rating).

- **Acceptance Criteria**:
  - Trending movies and TV shows are displayed on the homepage.
  - Cards show image, title, and rating.
  - Clicking a card opens the detail page.

---

### 2. **Search for Content**
**As a user, I want to search for specific movies or TV series by title.**

- **Tasks**:
  - Implement search input field in navbar.
  - Call API on input change or submit.
  - Display search results in a separate view.
  - Give the user 5 suggestions within the search bar.

- **Acceptance Criteria**:
  - Users can type and submit a search term.
  - Matching movies and shows are displayed.
  - 5 Suggestions will drop down below the search bar.
  - Clicking a result opens the detail page.

---

### 3. **View Detailed Information**
**As a user, I want to view detailed information about a movie or TV show.**

- **Tasks**:
  - Create MovieDetails and TVDetails components.
  - Display cast, plot summary, release date, rating.
  - Split into subcomponents (CastList, TrailerGallery, etc.).

- **Acceptance Criteria**:
  - Details page loads all key data for selected title.
  - Information is clearly grouped and styled.
  - No missing or undefined data is displayed.

---

### 4. **Watch Trailers**
**As a user, I want to watch trailers directly on the site.**

- **Tasks**:
  - Fetch trailer links from TMDB or YouTube API.
  - Implement modal player with Tailwind.
  - Ensure responsive design for video.

- **Acceptance Criteria**:
  - Clicking the trailer thumbnail opens a modal with embedded video.
  - Modal is accessible and mobile-friendly.
  - Only official trailers are shown (if available).

---

### 5. **Check Streaming Availability**
**As a user, I want to see where to watch a movie or show.**

- **Tasks**:
  - Fetch watch provider data from TMDB.
  - Display streaming services (logos + links).
  - Show availability by region (if applicable).

- **Acceptance Criteria**:
  - At least one watch provider is listed (if available).
  - Clicking a provider opens its link in a new tab.
  - Fallback message if no provider is available.

---

### 6. **Add to Watchlist**
**As a user, I want to add movies and TV shows to my watchlist.**

- **Tasks**:
  - Add "Add to Watchlist" button.
  - Store data in localStorage (or database if logged in).
  - Indicate if a title is already in the watchlist.

- **Acceptance Criteria**:
  - Clicking button adds item to watchlist.
  - Button changes state to "Added".
  - Watchlist persists across sessions (using localStorage).

---

### 7. **Manage Watchlist**
**As a user, I want to view and manage my watchlist.**

- **Tasks**:
  - Create Watchlist page.
  - Display saved items in a grid.
  - Add remove button for each item.

- **Acceptance Criteria**:
  - Watchlist page shows all added titles.
  - Remove button updates UI and storage immediately (works across tabs).
  - User receives confirmation or feedback on removal.

---

### 8. **Responsive Design**
**As a user, I want the site to be responsive across devices.**

- **Tasks**:
  - Use Tailwind CSS utility classes for responsiveness.
  - Test layouts on mobile, tablet, and desktop.
  - Optimize image and video components.

- **Acceptance Criteria**:
  - No major layout issues on common device sizes.
  - Navbar collapses into hamburger menu on small screens.
  - Images and videos scale appropriately.

---

### 9. **Contact Support**
**As a user, I want to contact the What2Watch team with questions or feedback.**

- **Tasks**:
  - Create a Contact Us page with form (Name, Email, Message).
  - Add form validation and success feedback.
  - (Optional) Hook up to email service or backend.

- **Acceptance Criteria**:
  - User can submit a form with valid input.
  - Feedback message confirms form submission.
  - Fields reset after submission.

### Wireframes
- __Mobile__
![Mobile Wireframes](https://github.com/Maddz223/Milestone-Project-2/blob/main/Assets/README-images/Mobile.png)
- __Ipad__
![Ipad Wireframes](https://github.com/Maddz223/Milestone-Project-2/blob/main/Assets/README-images/Ipad.png)
- __Laptop__
![Laptop Wireframes](https://github.com/Maddz223/Milestone-Project-2/blob/main/Assets/README-images/Laptop_Small%20Desktops.png)
- __Desktop__
![Desktop Wireframes](https://github.com/Maddz223/Milestone-Project-2/blob/main/Assets/README-images/Large%20Desktops.png)

### Colour Scheme

![Color Kit](https://github.com/Maddz223/Milestone-Project-2/blob/main/Assets/README-images/colorkit.png)

## Features
### **Navigation Bar**

The Navigation Bar is consistently displayed across all pages, providing a seamless and intuitive user experience throughout the website.

#### *Features*
- Persistent Layout
- The navigation bar appears on every page, allowing users to move between sections without relying on the browser’s "back" button.
- Navigation Links
Includes direct links to the following core pages:
  - Navbar heading (clickable, redirects to the Home page)
  - Home
  - Movies
  - TV Series
  - Watchlist
  - Contact Us
- Active & Hover States
- The active page link is visually highlighted, helping users identify their current location within the site.
- Hover effects provide additional visual feedback to enhance interactivity.
- A search bar is included in the navigation for real-time content discovery.
- As users type, the search field displays up to 5 live suggestions matching the query.
- All results are dynamically fetched from the TMDB (The Movie Database) API.
- Clicking a suggestion navigates the user directly to the detail page of the selected movie or TV show.
- A toggle button is available in the navigation bar to switch between Light and Dark themes.
- The theme selection is applied site-wide and enhances readability and accessibility based on user preference.
- Dark mode styling is implemented using Tailwind CSS’s dark: utility classes.

#### *Responsiveness*
- The navigation bar is fully responsive, adapting seamlessly to all screen sizes:
- On larger screens, elements are arranged horizontally.
- On smaller screens, a collapsible menu (e.g., hamburger icon) may be used.
- Both the search bar and dark mode toggle remain accessible and usable across devices.

#### Full Screen Size
![NavBar Full Size](https://github.com/Maddz223/Milestone-Project-2/blob/main/Assets/README-images/Nav-bar-fullsize.png)
#### Mobile Screen Size
![Navbar Mobile Size](https://github.com/Maddz223/Milestone-Project-2/blob/main/Assets/README-images/Nav-bar-mobile.png)
### Landing Page
The Landing Page features three dynamic, image-based carousels that offer users a visually engaging overview of current media content:

- Latest Trailers
- Trending Movies
- Trending TV Shows

#### *Features*
- Each carousel contains clickable cards displaying poster images sourced from the TMDB API.
- The cards represent individual movies or TV shows and serve as entry points to more detailed content.

#### *Click Behavior*

- Trending Movies / TV Shows: Navigates to the detail page (/details/:id) of the selected item.
- Latest Trailers: Opens a modal window to play the trailer for the selected movie.

These components introduce users to the app's core offerings right from the homepage, making the experience both informative and visually compelling.

![Landing Page](https://github.com/Maddz223/Milestone-Project-2/blob/main/Assets/README-images/mainpage.png)
### Image Carousels Section
The Image Carousels section showcases a rotating selection of trending movies and TV series, offering users an interactive and visually engaging experience.

#### *Features*
- Interactive Cards
Each image card is clickable and navigates to its respective detail page (/details/:id).
- Dynamic Content
Poster images and metadata (e.g., title, ID) are dynamically fetched from the TMDB (The Movie Database) API, ensuring up-to-date and relevant content.

#### *Responsiveness*

- Carousels are fully responsive, adapting to various screen sizes.
- The number of visible slides automatically adjusts based on the device:
- More cards are shown on larger screens (e.g., desktops)
- Fewer cards are shown on smaller screens (e.g., tablets and mobile devices) to preserve readability and usability

This section boosts user engagement by allowing intuitive navigation through popular content in a smooth, mobile-friendly interface.

![Image Carousels Cards](https://github.com/Maddz223/Milestone-Project-2/blob/main/Assets/README-images/Lastest-Movies-carousel.png)
### The Footer
The Footer provides consistent navigation and branding across all pages, enhancing both usability and accessibility.

#### *Elements*
- © Copyright Notice
Displays the current year and ownership information.
- Social Media Links
Clickable icons that open external platforms (e.g., Github, Facebook, Instagram, X ) in a new tab.
- Navigation Links
Internal links to primary pages within the application (e.g., Home, Movies, TV Series, Watchlist, Contact Us).

#### *Functionality*
- All links are interactive, with hover effects to indicate interactivity.
- Quick access to both internal and external destinations from any page.

#### *Responsiveness*
- The footer layout is fully responsive, adapting to various screen sizes
- On larger screens, elements are arranged horizontally for a clean, wide layout.
- On smaller screens (e.g., tablets and mobile), the layout stacks vertically to maintain readability and accessibility.
- All text and icons scale appropriately to ensure usability across devices.

![Footer](https://github.com/Maddz223/Milestone-Project-2/blob/main/Assets/README-images/footer.png)

### Movies / Tv Series Page
The Movies / TV Series page features a responsive grid layout showcasing a collection of media cards, each representing a movie or TV show.

#### *Each card includes*

- A high-resolution poster image, dynamically fetched from the TMDB API
- The title of the movie or show (also sourced from the TMDB API)
- An "Add to Watchlist" button
- Adds the selected item to the Watchlist page
- Once added, the button dynamically changes to a "Remove" option, allowing users to manage their watchlist directly

#### *Responsiveness*
- The grid layout is fully responsive
- Adjusts the number of columns based on the screen size
- Ensures a consistent and optimal viewing experience across desktops, tablets, and mobile devices

This page serves as a central hub for discovering and saving movies and TV series, with a design optimized for usability and performance.

![Movies](https://github.com/Maddz223/Milestone-Project-2/blob/main/Assets/README-images/Movies.png)

<sub>Movies</sub>

![Tv Series](https://github.com/Maddz223/Milestone-Project-2/blob/main/Assets/README-images/Tv-Series.png)

<sub>Tv Series</sub>
### Details Page

The Details Page provides an in-depth view of a selected movie or tv series, including visual assets, metadata, cast, trailers, and availability information. This details page is used for both moives and tv series pages.

#### *Features*
- Poster Display
A high-resolution poster of the movie is displayed prominently on the left side of the page.
- Basic Metadata
Shown on the right side next to the poster:
- Title (e.g., A Minecraft Movie)
- Release Date
- Ratings (e.g., 6.5 / 10)
- Overview: A brief synopsis of the movie pulled from the TMDB API
- Add to Watchlist Button
Below the poster, users can add the movie to their personal watchlist. Once added, the button changes to "Remove", allowing users to toggle their preference.
- Cast Members
A horizontal scrollable list of cast members, each displaying:
- Actor’s image
- Actor's Name
- Character name
(All data fetched from the TMDB API)
- Trailers Section
Embedded video thumbnails link to official trailers. Clicking a trailer opens it in a popup modal.
- Where to Watch Section
Displays streaming availability based on the user's region.
- If no streaming providers are available, a fallback message is shown.

#### *Responsiveness*
The grid layout is designed to be fully responsive, adjusting seamlessly to various screen sizes for an optimal viewing experience across all devices.

![Details Page](https://github.com/Maddz223/Milestone-Project-2/blob/main/Assets/README-images/Details-page.png)

### Watchlist Page
The Watchlist page displays a curated list of movies and TV series that the user has added from the Movies or TV Series pages.

#### *Features*
- Responsive grid layout of saved items.
- Poster image (from the TMDB API).
- Title.
- "Remove" button to delete the item from the watchlist.
- Changes made on this page (e.g., removing an item) are immediately reflected across the application, including on the original Movies/TV Series pages where the "Add to Watchlist" button is restored.

#### *Responsiveness*
- The grid layout is fully responsive
- Adjusts the number of columns based on the screen size
- Ensures a consistent and optimal viewing experience across desktops, tablets, and mobile devices

![Watchlist Page](https://github.com/Maddz223/Milestone-Project-2/blob/main/Assets/README-images/Watchlist-page.png)
### Modal Popout
The application uses a modal popout component to display trailers and other dynamic content without navigating away from the current page or when completing the contact us form. This Modal component is used in the latest movies carousel, detail page and contact us page.

#### *Features*
- Opens a centered overlay window (modal) containing an embedded video player (e.g., YouTube iframe).
- Contact form confirmations.
- Fetches trailer video URLs from the TMDB API.
- The rest of the page is blurred to keep the user's focus on the modal content.
- Includes a close icon/button to dismiss the modal and return to the current page.

#### *Responsiveness*
- The modal adapts to screen size
- Scales video and layout appropriately on mobile devices
- Maintains aspect ratio for an optimal viewing experience across devices

These features enhance the users experience by allowing media playback in context, without disrupting the browsing flow.
![Modal popout](https://github.com/Maddz223/Milestone-Project-2/blob/main/Assets/README-images/Modal-popup.png)

### Contact Us Page

The Contact Us Page provides users with a straightforward and accessible way to reach out with questions or feedback.

#### *Features*
- Input Fields
- Name: Text input for the user's full name.
- Email: Email input field with format validation.
- Message: Multi-line textarea for writing user queries or comments.
- Name and emailfields include autocompletion to enhance the user experience.
- Submit Button which triggers form validation and submission.

#### *Success Modal*
- Upon successful submission, a modal popup confirms that the message has been sent.
- Centered overlay with a success message (e.g., "Thank you for reaching out! We'll get back to you soon.").
- Background is blurred to maintain focus on the modal.
- Includes a close button/icon to dismiss the modal.

#### *Form Behavior*
- All fields are required.
- Real-time input validation ensures proper formatting before submission.
- Visual feedback (such as input highlighting or error messages) guides users to correct mistakes.

#### *Responsiveness*
- The form is fully responsive, scaling smoothly across devices from desktop to mobile.
- Layout adjusts spacing and input sizes based on screen resolution.
- Ensures accessibility and usability regardless of device.

![Contact Us](https://github.com/Maddz223/Milestone-Project-2/blob/main/Assets/README-images/ContactUs.png)

## Technologies Used

| Tool             | Purpose                                 |
|------------------|-----------------------------------------|
| React            | Frontend framework                      |
| Vite             | Build tool & dev server                 |
| Tailwind CSS     | Utility-first styling                   |
| TMDB API         | Fetch Movie & TV data                   |
| Axios            | HTTP requests used with API             |
| Framer Motion    | Animations                              |
| Lucide React     | Icon library                            |
| Prop-Types       | Type-checking for components            |
| Swiper           | Carousels for trending sections         |
| Tailwind Scrollbar Hide | Hide scrollbars in UI            |
| Vite Plugin Compression | Compress assets for deployment   |

## Testing 

### *Lighthouse Testing*

Lighthouse is an open-source, automated tool developed by Google that helps developers improve the quality of their web applications by evaluating performance, accessibility, SEO, best practices, and more. By running a Lighthouse audit, you can identify areas where your site needs improvement and get suggestions for optimization.

Key Features Tested by Lighthouse:
Performance: Evaluates how quickly your page loads and renders. It considers metrics such as First Contentful Paint (FCP), Time to Interactive (TTI), and Speed Index.
Accessibility: Measures how easily users, including those with disabilities, can navigate and interact with your site. Lighthouse checks for things like color contrast, keyboard accessibility, and screen reader compatibility.
Best Practices: Evaluates your site’s adherence to modern web development best practices, including security features, error handling, and code quality.
SEO: Ensures that your website is optimized for search engines, looking at things like meta tags, structured data, and the use of alt attributes for images.
Progressive Web App (PWA): Checks if your web application follows PWA principles, like being installable and providing a reliable experience offline.
How to Run Lighthouse Tests
You can run Lighthouse in several ways:

*Chrome DevTools*:

Open the webpage in Google Chrome.
Right-click and choose "Inspect" or press Ctrl+Shift+I.
Go to the "Lighthouse" tab.
Click on "Generate report" to run the test.
- *Lighthouse CLI*:

  Install Lighthouse globally with npm install -g lighthouse.
  Run a Lighthouse audit by executing lighthouse https://yourwebsite.com in the terminal.

- *PageSpeed Insights*:

  Visit PageSpeed Insights.
  Enter the URL of your website, and the tool will run a Lighthouse report.

- *Web Vitals Extension*:

  Use the Web Vitals extension for Chrome to track real-time metrics directly in your browser.
- Interpreting Lighthouse Scores
  Lighthouse scores range from 0 to 100, with higher scores indicating better performance. Here's how to interpret the scores:

  90-100: Excellent

  50-89: Needs improvement
  
  
- Suggestions for Improvement
  Lighthouse provides detailed suggestions for improving each aspect of your website. These recommendations can help you optimize load times, enhance accessibility, and improve overall user experience.

For more information, check the Lighthouse documentation.

#### Index page
![Index-lighthouse](https://github.com/Maddz223/Milestone-Project-2/blob/main/Assets/README-images/mainpage-lighthouse.png)

#### Movies
![Movies Page](https://github.com/Maddz223/Milestone-Project-2/blob/main/Assets/README-images/movies-page-lighthouse.png)

#### Movie Details
![Movies Details Page](https://github.com/Maddz223/Milestone-Project-2/blob/main/Assets/README-images/movies-page-lighthouse.png)

#### TVSeries
![TVSeries Page](https://github.com/Maddz223/Milestone-Project-2/blob/main/Assets/README-images/TVSeries-page-lighthouse.png)

#### Watchlist
![Watchlist Page](https://github.com/Maddz223/Milestone-Project-2/blob/main/Assets/README-images/Watchlist-page-lighthouse.png)

#### Contact Us
![Contact Us Page](https://github.com/Maddz223/Milestone-Project-2/blob/main/Assets/README-images/ContactUs-page-lighthouse.png)

All testing was conducted in Google Chrome using incognito mode.

### Validator Testing 
#### *W3C Validator*
  
To ensure that the code in this project is compliant with web standards, you can use the W3C Validator to check the HTML. This validator helps identify potential issues like incorrect syntax, missing tags, or non-standard code that might cause compatibility problems across browsers.

### How to Use W3C Validator

#### *HTML Validation*

- Visit the W3C HTML Validator.
- Paste the URL of the webpage you want to validate or upload the HTML file directly.
- The tool will analyze the code and provide you with a detailed report on any issues or warnings.
- Correct any issues based on the feedback to improve code quality.

#### *Automated Checks*

If you want to integrate the validation into your development workflow, consider using continuous integration (CI) tools that run the W3C Validator checks automatically during the build process. Tools like Travis CI or GitHub Actions can run these checks on your codebase, ensuring ongoing compliance.

#### *Benefits of Using W3C Validator*
##### *Improved Compatibility*
- Ensures your pages work well across different browsers and devices.

##### *Better SEO*
- Search engines prefer well-structured code, which can enhance your site's ranking.

##### *Increased Accessibility*
- Cleaner code makes it easier for screen readers and other assistive technologies to interpret your site.

#### *Common Errors and Fixes*
- The W3C Validator will highlight various errors and warnings. 

#### *Some common issues you may encounter include*

- Missing or misplaced tags (e.g., closing tags).
- Deprecated attributes or elements.
- Invalid CSS properties.
- For each issue, the W3C Validator provides suggestions for fixing the problem.


### HTML
- No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/)

#### *Main page*
![w3c Index](https://github.com/Maddz223/Milestone-Project-2/blob/main/Assets/README-images/HtmlChecker.png)

This website is developed in vite using JavaScript (React), and during the build process for deployment, all assets are bundled, minified, and served through a single HTML file for optimized delivery.


#### *Automated Validation*
##### *Eslint*
ESLint is a pluggable linting tool for JavaScript and TypeScript. It helps you find and fix problems in your code by analyzing it according to a set of predefined or custom rules.
##### *Tailwind CSS IntelliSense*
Visual Studio Code (VS Code) extension that provides smart editor features for working with Tailwind CSS. It significantly improves the developer experience when writing Tailwind utility classes.
##### *Jest*
Jest is a JavaScript testing framework developed by Facebook, widely used for testing React applications. It provides an all-in-one solution for.

- Unit testing
- Snapshot testing
- Mocking
- Code coverage

Once setup you can make and run scripts to check if your scripts are working correctly.

### *Jest Tests*

The following tests where created and ran.
```
Card.test.jsx
CastList.test.jsx
ContactUs.test.jsx
Home.test.jsx
TrailerGallery.test.jsx
Watchlist.test.jsx
WatchlistButton.test.jsx
WatchlistContext.test.jsx
WatchProviders.test.jsx
```

#### Card Test
![Card Test](https://github.com/Maddz223/Milestone-Project-2/blob/main/Assets/README-images/Card-Test.png)

#### Castlist Test
![Castlist Test](https://github.com/Maddz223/Milestone-Project-2/blob/main/Assets/README-images/Castlist-Test.png)

#### ContactUs Test
![ContactUs Test](https://github.com/Maddz223/Milestone-Project-2/blob/main/Assets/README-images/ContactUs-test.png)

#### Home Test
![Home Test](https://github.com/Maddz223/Milestone-Project-2/blob/main/Assets/README-images/Home-Test.png)

#### TrailerGallery Test
![TrailerGallery Test](https://github.com/Maddz223/Milestone-Project-2/blob/main/Assets/README-images/TrailerGallery-Test.png)

#### Watchlist Test
![Watchlist Test](https://github.com/Maddz223/Milestone-Project-2/blob/main/Assets/README-images/Watchlist-Test.png)

#### WatchlistButton Test
![WatchlistButton Test](https://github.com/Maddz223/Milestone-Project-2/blob/main/Assets/README-images/WatchlistButton-Test.png)

#### WatchlistContext Test
![WatchlistContext Test](https://github.com/Maddz223/Milestone-Project-2/blob/main/Assets/README-images/WatchlistContext-Test.png)

#### WatchProviders Test
![WatchProviders Test](https://github.com/Maddz223/Milestone-Project-2/blob/main/Assets/README-images/WatchProviders-Test.png)


## Deployment
### *Local Deployment*
To run this project locally on your computer, follow the steps below. This is useful for development, testing, or reviewing the project before deploying it to a live server.

---
### *API Integration*

- **TMDB (The Movie Database)**  
  Used for fetching movies, TV shows, cast, and trailer information.  
  [→ Get an API key here](https://developer.themoviedb.org/docs/getting-started)

- **JustWatch API (via TMDB)**  
  Used to fetch streaming availability by region.

#### *How to get a API key*

- Step 1 Create a TMDB Account
Go to https://www.themoviedb.org/signup
Sign up with your email and verify it.

- Step 2 Log In and Go to Settings
After logging in, click on your profile avatar in the top-right corner.
Choose Settings from the dropdown.

- Step 3 Navigate to API Section
In the left sidebar, click on API.
Scroll down to the API Key section.

- Step 4 Apply for a Developer API Key
You’ll see an application form under "Request an API Key."
Choose Developer or Personal use (not commercial unless you're building a paid app).
Fill in the App name, Description, and Intended use.

- Step 5 Submit the Form
Once submitted, you'll get:
  - API Key (v3 auth) – used in most HTTP requests.
  - API Read Access Token (v4 auth) – used for more advanced OAuth workflows.

#### *Best Practices*
Store your key in .env files when using frameworks like Vite and react:
```
VITE_TMDB_API_KEY=your_api_key_here
```
- Never expose your key in public GitHub repos.
- Respect TMDB’s rate limits and usage policies.
---
### *Prerequisites*
You can find the clone link here [What2Watch Github](https://github.com/Maddz223/Milestone-Project-2)

Ensure you have the following tools installed:

### *Git*

Step 1: Clone the Repository, this can be done by going to the Sprinkles github and clicking code then copy the link.

![How to clone](https://github.com/Maddz223/Milestone-Project-2/blob/main/Assets/README-images/how-to-clone.png)

Start by opening up command prompt on your computer and cloning the project repository to your local machine:

Enter the code below
```
git clone https://github.com/Maddz223/Milestone-Project-2.git
```
Step 2: Then direct yourself to your repository for the What2Watch site.
```
cd Milestone-Project-2
cd What2Watch
```
Step 3: Installing the dependencies.

```
npm install
```
This uses package.json to install all the needed dependencies.

Step 4: Build the project.

```
npm run build
```
This builds the project and creates a dist/ folder with opitmized files.

Step 5: Run the build in development mode.

```
npm run dev
```

This uses vite internal local host development server which is accessible at http://localhost:5173/Milestone-Project-2/ 

This allows for auto reload and debug tools like google inspect.

> ⚠️ Make sure you have a TMDB API key set in your `.env`:
```env
VITE_TMDB_API_KEY=your_tmdb_api_key_here
```
---
#### *Deploying to Github Pages*
Step 1: Installing gh-pages

```
npm install gh-pages --save-dev
```

Step 2: Editing vite.config.js
Add this if your repo is at https://github.com/yourusername/Milestone-Project-2:

```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/your-repo/',
  plugins: [react()],
})
```

Step 3: Add deploy scripts to package.json

```
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "deploy": "gh-pages -d dist"
}
```

Step 4: Deploying the project.

```
npm run build
npm run deploy
```

Then your app is live at:

https://yourusername.github.io/Milestone-Project-2/

---

### *Recommended Extensions*

- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [ESLint](https://eslint.org/) – For code quality & formatting.
- [Jest](https://jestjs.io/) – For unit testing.
- [React](https://react.dev/) - Ease of use.
- [Vite](https://vite.dev/) - Next Generation Frontend Tooling

---

## Credits 

### *Content*

- Colour pallet for the site was taken from [Colorkit](https://colorkit.co/color-palette-generator/111827-1F2937-4F46E5-fff-000000/) 
- The icons on the site were taken from lucide-react dependency [Lucide React](https://lucide.dev/guide/packages/lucide-react)
- Tailwindcss for reducing css that helped in building this site[Tailwindcss](https://tailwindcss.com/)
- React for their Comprehensive, beginner-friendly React docs. [React](https://react.dev/)
- Vite for building an amazing tool. [Vite](https://vite.dev/)

### *Media*

- All media was taken from TMDB API. [TMDB](https://www.themoviedb.org/)

### *Special Thanks*
- To my wife for putting up with my annoying questions, helping me brainstorm and testing.
- To Samantha Spencer, for testing.
- To my mother and Nan, for testing.

### *Extra Comments*

- My commits were a little messy and misleading.
- I made a error with making another branch then had to merge before i carried on.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.