## Submissions

Use this md to tell us the bugs you solved and also explain the approach you had while solving them. Make them bulleted like

1. Accessibility - The web app just uses various links that can be refered to regarding css, html. The feature to toggle the 'menu-icon-link' which serves as a slide bar which can be compared to a drop down list.

2. Aesthetics - The web application is been made to serve its beauty and be user-friendly. Its slide bar is made dynamic keeping the header fixed as original. Combinations of dual colors add to the effect. The cause for doing so is to increase the ease of its usage.
Other simpler effects provided by CSS are alignment and margin setting to increase its worth.

3. Testing - 
   - A test that insures that all the feed are present without any missings..

   - A test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.  (A separate array named count_url is constructed in app.js file which stores all the url's. Further, a testing is made to check if all the 3 url's are present or is there any url missing by.. Can be easily extended for dynamic use.)

   - A test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.   (A separate array named count_name is constructed in app.js file which stores all the names. Further, a testing is made to check if all the 3 names are present or is there any url missing by.. Can be easily extended for dynamic use.)

   - A test that ensures the menu element is hidden by default. (This test assures and checks the default case of the slide bar whether it is toggled or not. This is done by retrieving the className and id from index.html and comparing them to check the above mentioned case..)


4. Technicality Improvements - 
-. A separate open.html file constructed for toggling improvement.
-. CSS alignment changes.
-. The separate html file helps to align the slide bar and separate its effect from header which was interconnected initially.
-. This enables them function independently.