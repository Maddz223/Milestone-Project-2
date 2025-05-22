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

  - The navigation bar is prominently featured on all pages of the website, ensuring a consistent and smooth user experience. It includes links to key sections: Navbar heading(home page), Home page, Movies page, Tv Series page, Watchlist page and Contact Us page. The bar is fully responsive, adapting seamlessly to different screen sizes and devices, ensuring easy access regardless of whether the user is on a desktop, tablet, or smartphone.

  - This design guarantees that users can navigate through the website effortlessly from any page to any other without the need to use the browser’s 'back' button. By maintaining the same navigation structure across all pages, visitors can switch between sections with just a few clicks, enhancing usability and making the browsing experience more intuitive. 
  - The navigation links also have a highlighted color when on a active page and when hovered over with the mouse, this allows the user to know exactly where they are on the site. 

### Full Screen Size

![NavBar Full Size](https://github.com/Maddz223/test/blob/main/assets/images/readme-images/navbar-full-size.png)

### Mobile Screen Size

![Navbar Mobile Size](https://github.com/Maddz223/test/blob/main/assets/images/readme-images/navbar-mobile-size.png)

### Landing Page

  - The landing includes a large image carousel with text overlay at the bottom saying Sprinkles and the start of the card images. 
  - This section introduces the users to our home page with an eye catching images of cupcakes, brownies and a creative birthday cake within the carousel and card images to grab their attention.

![Landing Page](https://github.com/Maddz223/Sprinkles/blob/main/assets/images/readme-images/landing-page.png)

### Image Card Section

  - The Image card section will allow the user to see the types of cupcakes, brownies, birthday cakes,
  Celebration Events, Special Occasion Cupcakes and Special Occasion Brownies that we have to offer. 
  - These image cards all have links to our gallery for the user to see all the creations we offer.

![Image Cards](https://github.com/Maddz223/Sprinkles/blob/main/assets/images/readme-images/card-section.png)

### Our Services section

  - This section will allow the user to see exactly what services we offer. 
  - This section has some animated icons that spin to grab the attention of the users. 
  - This section has a paralax background that scrolls as the user scrolls down the our services section.
 
![Our Services](https://github.com/Maddz223/Sprinkles/blob/main/assets/images/readme-images/our-services.png)

### News Letter Signup section

  - This section will allow the users to sign up to our newletter for special offers, events and key infomation.
  - This section has a input box for the users to enter a email address and a submit button to sumbit the info.
  - This form input has validation to make sure a email address is added before submitted.

![News Letter Signup](https://github.com/Maddz223/Sprinkles/blob/main/assets/images/readme-images/news-letter-signup.png)

### The Footer

  - The footer section includes an about us section with a small bit of information for the user to read to get to know Sprinkles better.
  - The footer section also has a quick links section to act the same as the navbar to allow the user to navigate to different pages.
  - The footer section includes links to the relevant social media sites for Sprinkles. 
  - The footer is valuable to the user as it encourages them to keep connected via social media
  - The links will open to a new tab to allow easy navigation for the user. 
  - The footer has all the opening times and location for when out store is open.
  - The footer also has contact phone number and email address for the user to use to contact.

![Footer](https://github.com/Maddz223/Sprinkles/blob/main/assets/images/readme-images/footer.png)

### About Us Page

  - This page will allow the user to get more information on what Sprinkles is about. 
  - This page shows the user information and images. 

![About Us](https://github.com/Maddz223/Sprinkles/blob/main/assets/images/readme-images/about-us-page.png)

### Gallery

  - The gallery will provide the user with supporting images to see what creatations Sprinkles has to offer. 
  - This section is valuable to the user as they will be able to easily identify the types of creations and styles the organisation has to offer to the user. 
  -  The gallery also used a small amount of Java script to allow the images to pop out into a modal when clicked.
  - This allows a better user experience to allow the user to have a better view of the images.

![Gallery](https://github.com/Maddz223/Sprinkles/blob/main/assets/images/readme-images/gallery-page.png)

### Modal Popout

![Modal popout](https://github.com/Maddz223/Sprinkles/blob/main/assets/images/readme-images/modal-gallery-popout.png)

### Contact Us Page

  - This page will allow the user to get in contact with Sprinkles. 
  - The user will be asked to submit their full name, email address, phone number and a section to for the user to write a message. all these inputs are required before the user can proceed. 

![Contact Us](https://github.com/Maddz223/Sprinkles/blob/main/assets/images/readme-images/contact-us-page.png)

### Success Page

  - This page will allow the user to get conformation that their message or email address has been accepted. 

![Success Page](https://github.com/Maddz223/Sprinkles/blob/main/assets/images/readme-images/success-page.png)

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
![Index-lighthouse](https://github.com/Maddz223/Sprinkles/blob/main/assets/images/readme-images/index-lighthouse.png)

#### About Us
![About Us Page](https://github.com/Maddz223/Sprinkles/blob/main/assets/images/readme-images/about-us-lighthouse.png)

#### Gallery
![Gallery Page](https://github.com/Maddz223/Sprinkles/blob/main/assets/images/readme-images/gallery-lighthouse.png)

#### Contact Us
![Contact Us Page](https://github.com/Maddz223/Sprinkles/blob/main/assets/images/readme-images/contact-us-lighthouse.png)

#### Success Page
![Success Page](https://github.com/Maddz223/Sprinkles/blob/main/assets/images/readme-images/success-lighthouse.png)

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

#### Index page
![w3c Index](https://github.com/Maddz223/Sprinkles/blob/main/assets/images/readme-images/w3c-indexpage.png)

#### About Us
![w3c About Us Page](https://github.com/Maddz223/Sprinkles/blob/main/assets/images/readme-images/w3c-about-us-page.png)

#### Gallery
![w3c Gallery Page](https://github.com/Maddz223/Sprinkles/blob/main/assets/images/readme-images/w3c-gallery-page.png)

#### Contact Us
![w3c Contact Us Page](https://github.com/Maddz223/Sprinkles/blob/main/assets/images/readme-images/w3c-contact-us-page.png)

#### Success Page
![w3c Success Page](https://github.com/Maddz223/Sprinkles/blob/main/assets/images/readme-images/w3c-success-page.png)

### Jigsaw CSS Validator

The Jigsaw CSS Validator is a tool from the W3C used to check the validity of your CSS code. It ensures that your CSS follows proper syntax and adheres to web standards, preventing issues like broken styles or compatibility problems across browsers.

### How to Use Jigsaw CSS Validator

#### Online CSS Validation

- Go to the Jigsaw CSS Validator.
- You can validate CSS in three ways:
- By URL: Enter the URL of your stylesheet (e.g., style.css) to validate a live CSS file.
- By File: Upload your CSS file directly from your computer.
- By Text: Paste your CSS code into the provided text box.
- Once you submit the form, the validator will check your CSS code for errors, warnings, and potential      improvements.

#### Understanding the Results

- Errors: The validator will highlight syntax issues, such as missing semicolons, unrecognized properties, or invalid values.
- Warnings: It will also flag CSS properties that are deprecated or may cause issues in specific browsers.
- Suggestions: The validator will recommend improvements or alternative, more efficient CSS practices.

#### Correcting Issues

- Review the error and warning messages provided by the validator.
- Modify your CSS file based on the suggestions and fix the identified problems.
- Re-run the validation to confirm the corrections were successful.
- Benefits of Using Jigsaw CSS Validator
- Cross-Browser Compatibility: Ensures that your CSS will work as intended across different web browsers.
- Standard Compliance: Validates that your CSS follows W3C standards, improving code quality and performance.
- Debugging: Helps identify hidden issues in your CSS that could affect the layout or design.
- Future-Proofing: By identifying deprecated CSS properties, it helps future-proof your stylesheets for upcoming web standards.

#### Automated Validation (Optional)
If you're working in a development environment, you can integrate the CSS validation into your continuous integration (CI) pipeline. This allows you to automate validation checks and ensure that invalid CSS is caught early during the development process.

You can use services like Travis CI, GitHub Actions, or CircleCI to set up automated CSS validation steps in your workflow.

#### Example
After running the validator, you may encounter results like the following:

- Error: background-color: #fff; — should be written as background-color: white; (more readable and accessible).
- Warning: font-size: 16px; — consider using rem instead of px for better scalability.

### CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/)

#### Jigsaw Results
![Jigsaw css](https://github.com/Maddz223/Sprinkles/blob/main/assets/images/readme-images/jigsaw-css.png)

#### Jigsaw Warnings
![Jigsaw warnings](https://github.com/Maddz223/Sprinkles/blob/main/assets/images/readme-images/jigsaw-css-warnings.png)


## Deployment
### Local Deployment
To run this project locally on your computer, follow the steps below. This is useful for development, testing, or reviewing the project before deploying it to a live server.

#### Prerequisites
You can find the clone link here [Sprinkles Github](https://github.com/Maddz223/Sprinkles.git)

Ensure you have the following tools installed:

#### Git

Step 1: Clone the Repository, this can be done by going to the Sprinkles github and clicking code then copy the link.

![How to clone](https://github.com/Maddz223/Sprinkles/blob/main/assets/images/readme-images/how-to-clone.png)

Start by opening up command prompt on your computer and cloning the project repository to your local machine:

Enter the code below
```
git clone https://github.com/Maddz223/Sprinkles.git
```
Then direct yourself to your repository.
```
cd Sprinkles
```
Step 2: For static sites (HTML/CSS/JS), you can use a simple web server like Live Server in VSCode or run the following code if you have python installed.

```
python -m http.server
```
After running the project, it should be accessible at http://localhost:3000 (or another port, depending on your project).

You can also open the index.html file straight from your directory folder and view the page.

#### Github Pages
- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://maddz223.github.io/Sprinkles/index.html


## Credits 
- Colour pallet for the site was taken from [Colorkit](https://colorkit.co/color-palette-generator/f8d3e0-f9b4c1-f76988/) 
- The icons on the site were taken from [Font Awesome](https://fontawesome.com/)
- Bootstrap for their amazing libary that helped build this site[Bootstrap](https://getbootstrap.com/)
- Java script for lightbox in the gallery from [Lightbox](https://trvswgnr.github.io/bs5-lightbox/)

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