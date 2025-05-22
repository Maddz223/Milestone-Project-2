# What2Watch

Welcome to What2Watch – Your Go-To Entertainment Pal.
Discover your next binge-watch obsession with What2Watch – your go-to entertainment guide for the newest movies and television shows! Whether you're a casual viewer, a movie buff, or a television series buff, What2Watch is your go-to place for finding the perfect title to match your mood and interests.

Our platform offers a simple, easy-to-use experience where you can dive into the most popular titles, explore long show and movie pages, and keep your own watchlist – all in one place. From action-packed thrillers to laugh-out-loud comedies to critically acclaimed dramas, What2Watch streamlines the search and adds a dash of fun.
Lights, camera, action – binge on!

What the Website Offers:
- Top TV Shows & Movies Trending Now – Stay up to date with what is currently trending now.
- Deep Show & Movie Pages – Learn about cast, release dates, ratings, trailers, where to watch, and more.
- Watchlist Feature – Mark your favorites and schedule your next view easily.
- Trailer Modals – Quickly get official trailers with stylish pop-out video modals.
- Streaming Provider Information – Know where to watch every title exactly.
- Highlights for Cast – Find out stars playing your favorite characters.
- Mobile-Friendly UI – Effortless experience on any screen.
- Find the latest releases and all-time favorites, and let What2Watch take you to your next watch – because your time counts more than endless scrolling.

![Responsive Mockup](https://github.com/Maddz223/Milestone-Project-2/blob/main/Assets/README-images/Responsive.png)

## Planning

### User Stories

As a user, I want to browse trending movies and TV shows so that I can discover popular content.
Tasks:
- Integrate TMDB API to fetch trending content.
- Display movies and shows in separate sections.
- Create responsive card layout with basic info (poster, title, rating).
Acceptance Criteria:
- Trending movies and TV shows are displayed on the homepage.
- Cards show image, title, and rating.
- Clicking a card opens the detail page.

As a user, I want to search for specific movies or TV seires by title.
Tasks:
- Implement search input field in navbar.
- Call API on input change or submit.
- Display search results in a separate view.
- Give the user 5 suggestions within the searchbar.
Acceptance Criteria:
- Users can type and submit a search term.
- Matching movies and shows are displayed.
- 5 Suggestions will drop down below the searchbar.
- Clicking a result opens the detail page.

As a user, I want to view detailed information about a movie or TV show.
Tasks:
- Create MovieDetails and TVDetails components.
- Display cast, plot summary, release date, rating.
- Split into subcomponents (CastList, TrailerGallery, etc.).
Acceptance Criteria:
- Details page loads all key data for selected title.
- Information is clearly grouped and styled.
- No missing or undefined data is displayed.

As a user, I want to watch trailers directly on the site.
Tasks:
- Fetch trailer links from TMDB or YouTube API.
- Implement modal player with Tailwind.
- Ensure responsive design for video.
Acceptance Criteria:
- Clicking the trailer thumbnail will open a modal with embedded video.
- Modal is accessible and mobile-friendly.
- Only official trailers are shown (if available).

As a user, I want to see where to watch a movie or show.
Tasks:
- Fetch watch provider data from TMDB.
- Display streaming services (logos + links).
- Show availability by region (if applicable).
Acceptance Criteria:
- At least one watch provider is listed (if available).
- Clicking a provider opens its link in a new tab.
- Fallback message if no provider is available.

As a user, I want to add movies and TV shows to my watchlist.
Tasks:
- Add "Add to Watchlist" button.
- Store data in localStorage (or database if logged in).
- Indicate if a title is already in the watchlist.
Acceptance Criteria:
- Clicking button adds item to watchlist.
- Button changes state to "Added".
- Watchlist persists across sessions (using localStorage).

As a user, I want to view and manage my watchlist.
Tasks:
- Create Watchlist page.
- Display saved items in a grid.
- Add remove button for each item.
Acceptance Criteria:
- Watchlist page shows all added titles.
- Remove button updates UI and storage immediately (works across tabs).
- User receives confirmation or feedback on removal.

As a user, I want the site to be responsive across devices.
Tasks:
- Use Tailwind CSS utility classes for responsiveness.
- Test layouts on mobile, tablet, and desktop.
- Optimize image and video components.
Acceptance Criteria:
- No major layout issues on common device sizes.
- Navbar collapses into hamburger menu on small screens.
- Images and videos scale appropriately.

As a user, I want to contact the What2Watch team with questions or feedback.
Tasks:
- Create a Contact Us page with form (Name, Email, Message).
- Add form validation and success feedback.
- (Optional) Hook up to email service or backend.
Acceptance Criteria:
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
### Navigation Bar

The Navigation Bar is consistently displayed across all pages, providing a seamless and intuitive user experience throughout the website.

#### Features
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

#### Responsiveness
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

#### Features
- Each carousel contains clickable cards displaying poster images sourced from the TMDB API.

- The cards represent individual movies or TV shows and serve as entry points to more detailed content.

#### Click Behavior

- Trending Movies / TV Shows: Navigates to the detail page (/details/:id) of the selected item.

- Latest Trailers: Opens a modal window to play the trailer for the selected movie.

These components introduce users to the app's core offerings right from the homepage, making the experience both informative and visually compelling.

![Landing Page](https://github.com/Maddz223/Milestone-Project-2/blob/main/Assets/README-images/mainpage.png)
### Image Carousels Section
The Image Carousels section showcases a rotating selection of trending movies and TV series, offering users an interactive and visually engaging experience.

#### Features
- Interactive Cards
Each image card is clickable and navigates to its respective detail page (/details/:id).
- Dynamic Content
Poster images and metadata (e.g., title, ID) are dynamically fetched from the TMDB (The Movie Database) API, ensuring up-to-date and relevant content.

#### Responsiveness

- Carousels are fully responsive, adapting to various screen sizes.
- The number of visible slides automatically adjusts based on the device:
- More cards are shown on larger screens (e.g., desktops)
- Fewer cards are shown on smaller screens (e.g., tablets and mobile devices) to preserve readability and usability

This section boosts user engagement by allowing intuitive navigation through popular content in a smooth, mobile-friendly interface.

![Image Carousels Cards](https://github.com/Maddz223/Milestone-Project-2/blob/main/Assets/README-images/Lastest-Movies-carousel.png)
### The Footer
The Footer provides consistent navigation and branding across all pages, enhancing both usability and accessibility.

#### Elements
- © Copyright Notice
Displays the current year and ownership information.
- Social Media Links
Clickable icons that open external platforms (e.g., Github, Facebook, Instagram, X ) in a new tab.
- Navigation Links
Internal links to primary pages within the application (e.g., Home, Movies, TV Series, Watchlist, Contact Us).

#### Functionality
- All links are interactive, with hover effects to indicate interactivity.
- Quick access to both internal and external destinations from any page.

#### Responsiveness
- The footer layout is fully responsive, adapting to various screen sizes
- On larger screens, elements are arranged horizontally for a clean, wide layout.
- On smaller screens (e.g., tablets and mobile), the layout stacks vertically to maintain readability and accessibility.
- All text and icons scale appropriately to ensure usability across devices.

![Footer](https://github.com/Maddz223/Milestone-Project-2/blob/main/Assets/README-images/footer.png)

### Movies / Tv Series Page
The Movies / TV Series page features a responsive grid layout showcasing a collection of media cards, each representing a movie or TV show.

#### Each card includes

- A high-resolution poster image, dynamically fetched from the TMDB API
- The title of the movie or show (also sourced from the TMDB API)
- An "Add to Watchlist" button
- Adds the selected item to the Watchlist page
- Once added, the button dynamically changes to a "Remove" option, allowing users to manage their watchlist directly

#### Responsiveness
- The grid layout is fully responsive
- Adjusts the number of columns based on the screen size
- Ensures a consistent and optimal viewing experience across desktops, tablets, and mobile devices

This page serves as a central hub for discovering and saving movies and TV series, with a design optimized for usability and performance.

![Movies](https://github.com/Maddz223/Milestone-Project-2/blob/main/Assets/README-images/Movies.png)

![Tv Series](https://github.com/Maddz223/Milestone-Project-2/blob/main/Assets/README-images/Tv-Series.png)
### Details Page

The Details Page provides an in-depth view of a selected movie or tv series, including visual assets, metadata, cast, trailers, and availability information. This details page is used for both moives and tv series pages.

#### Features
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

#### Responsiveness
The grid layout is designed to be fully responsive, adjusting seamlessly to various screen sizes for an optimal viewing experience across all devices.

![Details Page](https://github.com/Maddz223/Milestone-Project-2/blob/main/Assets/README-images/Details-page.png)

### Watchlist Page
The Watchlist page displays a curated list of movies and TV series that the user has added from the Movies or TV Series pages.

#### Features
- Responsive grid layout of saved items.
- Poster image (from the TMDB API).
- Title.
- "Remove" button to delete the item from the watchlist.
- Changes made on this page (e.g., removing an item) are immediately reflected across the application, including on the original Movies/TV Series pages where the "Add to Watchlist" button is restored.

#### Responsiveness
- The grid layout is fully responsive
- Adjusts the number of columns based on the screen size
- Ensures a consistent and optimal viewing experience across desktops, tablets, and mobile devices

![Watchlist Page](https://github.com/Maddz223/Milestone-Project-2/blob/main/Assets/README-images/Watchlist-page.png)
### Modal Popout
The application uses a modal popout component to display trailers and other dynamic content without navigating away from the current page or when completing the contact us form. This Modal component is used in the latest movies carousel, detail page and contact us page.

#### Features
- Opens a centered overlay window (modal) containing an embedded video player (e.g., YouTube iframe).
- Contact form confirmations.
- Fetches trailer video URLs from the TMDB API.
- The rest of the page is blurred to keep the user's focus on the modal content.
- Includes a close icon/button to dismiss the modal and return to the current page.

#### Responsiveness
- The modal adapts to screen size
- Scales video and layout appropriately on mobile devices
- Maintains aspect ratio for an optimal viewing experience across devices

These features enhance the users experience by allowing media playback in context, without disrupting the browsing flow.
![Modal popout](https://github.com/Maddz223/Milestone-Project-2/blob/main/Assets/README-images/Modal-popup.png)

### Contact Us Page

The Contact Us Page provides users with a straightforward and accessible way to reach out with questions or feedback.

#### Features
- Input Fields
- Name: Text input for the user's full name.
- Email: Email input field with format validation.
- Message: Multi-line textarea for writing user queries or comments.
- Name and emailfields include autocompletion to enhance the user experience.
- Submit Button which triggers form validation and submission.

#### Success Modal
- Upon successful submission, a modal popup confirms that the message has been sent.
- Centered overlay with a success message (e.g., "Thank you for reaching out! We'll get back to you soon.").
- Background is blurred to maintain focus on the modal.
- Includes a close button/icon to dismiss the modal.

#### Form Behavior
- All fields are required.
- Real-time input validation ensures proper formatting before submission.
- Visual feedback (such as input highlighting or error messages) guides users to correct mistakes.

#### Responsiveness
- The form is fully responsive, scaling smoothly across devices from desktop to mobile.
- Layout adjusts spacing and input sizes based on screen resolution.
- Ensures accessibility and usability regardless of device.

![Contact Us](https://github.com/Maddz223/Milestone-Project-2/blob/main/Assets/README-images/ContactUs.png)

## Testing 

### Lighthouse Testing

Lighthouse is an open-source, automated tool developed by Google that helps developers improve the quality of their web applications by evaluating performance, accessibility, SEO, best practices, and more. By running a Lighthouse audit, you can identify areas where your site needs improvement and get suggestions for optimization.

Key Features Tested by Lighthouse:
Performance: Evaluates how quickly your page loads and renders. It considers metrics such as First Contentful Paint (FCP), Time to Interactive (TTI), and Speed Index.
Accessibility: Measures how easily users, including those with disabilities, can navigate and interact with your site. Lighthouse checks for things like color contrast, keyboard accessibility, and screen reader compatibility.
Best Practices: Evaluates your site’s adherence to modern web development best practices, including security features, error handling, and code quality.
SEO: Ensures that your website is optimized for search engines, looking at things like meta tags, structured data, and the use of alt attributes for images.
Progressive Web App (PWA): Checks if your web application follows PWA principles, like being installable and providing a reliable experience offline.
How to Run Lighthouse Tests
You can run Lighthouse in several ways:

Chrome DevTools:

Open the webpage in Google Chrome.
Right-click and choose "Inspect" or press Ctrl+Shift+I.
Go to the "Lighthouse" tab.
Click on "Generate report" to run the test.
- Lighthouse CLI:

  Install Lighthouse globally with npm install -g lighthouse.
  Run a Lighthouse audit by executing lighthouse https://yourwebsite.com in the terminal.

- PageSpeed Insights:

  Visit PageSpeed Insights.
  Enter the URL of your website, and the tool will run a Lighthouse report.

- Web Vitals Extension:

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
![Success Page](https://github.com/Maddz223/Milestone-Project-2/blob/main/Assets/README-images/ContactUs-page-lighthouse.png)

All testing was conducted in Google Chrome using incognito mode.

### Validator Testing 
#### W3C Validator
  
To ensure that the code in this project is compliant with web standards, you can use the W3C Validator to check the HTML and CSS. This validator helps identify potential issues like incorrect syntax, missing tags, or non-standard code that might cause compatibility problems across browsers.

### How to Use W3C Validator

#### HTML Validation

- Visit the W3C HTML Validator.
- Paste the URL of the webpage you want to validate or upload the HTML file directly.
- The tool will analyze the code and provide you with a detailed report on any issues or warnings.
- Correct any issues based on the feedback to improve code quality.

#### CSS Validation

- Visit the W3C CSS Validator.
- Paste the URL of the CSS file or upload it directly.
- The tool will provide feedback on any invalid CSS rules or potential improvements.

#### Automated Checks

If you want to integrate the validation into your development workflow, consider using continuous integration (CI) tools that run the W3C Validator checks automatically during the build process. Tools like Travis CI or GitHub Actions can run these checks on your codebase, ensuring ongoing compliance.

#### Benefits of Using W3C Validator
##### Improved Compatibility
- Ensures your pages work well across different browsers and devices.

##### Better SEO
- Search engines prefer well-structured code, which can enhance your site's ranking.

##### Increased Accessibility
- Cleaner code makes it easier for screen readers and other assistive technologies to interpret your site.

#### Common Errors and Fixes
- The W3C Validator will highlight various errors and warnings. 

Some common issues you may encounter include:

- Missing or misplaced tags (e.g., closing tags).
-  Deprecated attributes or elements.
- Invalid CSS properties.
- For each issue, the W3C Validator provides suggestions for fixing the problem.


### HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/)

#### Main page
![w3c Index](https://github.com/Maddz223/Milestone-Project-2/blob/main/Assets/README-images/HtmlChecker.png)

This website is developed with JavaScript (React), and during the build process for deployment, all assets are bundled, minified, and served through a single HTML file for optimized delivery.


#### Automated Validation (Optional)
If you're working in a development environment, you can integrate the CSS validation into your continuous integration (CI) pipeline. This allows you to automate validation checks and ensure that invalid CSS is caught early during the development process.

You can use services like Travis CI, GitHub Actions, or CircleCI to set up automated CSS validation steps in your workflow.

## Deployment
### Local Deployment
To run this project locally on your computer, follow the steps below. This is useful for development, testing, or reviewing the project before deploying it to a live server.

#### Prerequisites
You can find the clone link here [What2Watch Github](https://github.com/Maddz223/Milestone-Project-2)

Ensure you have the following tools installed:

#### Git

Step 1: Clone the Repository, this can be done by going to the Sprinkles github and clicking code then copy the link.

![How to clone](https://github.com/Maddz223/Milestone-Project-2/blob/main/Assets/README-images/how-to-clone.png)

Start by opening up command prompt on your computer and cloning the project repository to your local machine:

Enter the code below
```
git clone https://github.com/Maddz223/Milestone-Project-2.git
```
Then direct yourself to your repository for the What2Watch site.
```
cd Milestone-Project-2
cd What2Watch
```
Step 2: Installing the dependencies.

```
npm install
```
This uses package.json to install all the needed dependencies.

Step 3: Build the project.

```
npm run build
```
This builds the project and creates a dist/ folder with opitmized files.

Step 4: Run the build in development mode.

```
npm run dev
```
This uses vite internal local host development server which is accessible at http://localhost:5173/Milestone-Project-2/ 

This allows for auto reload and debug tools like google inspect.

#### Github Pages
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


## Credits 
- Colour pallet for the site was taken from [Colorkit](https://colorkit.co/color-palette-generator/111827-1F2937-4F46E5-fff-000000/) 
- The icons on the site were taken from Lud
- Tailwindcss for their amazing libary that helped build this site[Tailwindcss](https://tailwindcss.com/)
- Java script for lightbox in the gallery from [React](https://react.dev/)
[Vite](https://vite.dev/)

### Content 

- The text for all the pages was generated by ChatGPT. [ChatGPT](https://chatgpt.com/)
- Instructions on how to implement bootstrap 5 was taken from [Bootstrap](https://getbootstrap.com/)
- The icons for the site were taken from [Font Awesome](https://fontawesome.com/)

### Media

- The photos and images used on this site are from [Freepik](https://www.freepik.com/pikaso/ai-image-generator)

### Special Thanks
- To my wife for putting up with my annoying questions and helping me brainstorm.
- To Lyupche Bozhinovski, for helping me trouble shoot issues.
- My mentor, Dick Vlaanderen, for helping me stay focused.

### Extra Comments

- My commits were a little messy and misleading. once i spoke to my mentor he helped me understand where i was going wrong and to stay more consistent.