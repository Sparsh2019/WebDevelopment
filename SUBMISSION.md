## Submissions

Use this md to tell us the bugs you solved and also explain the approach you had while solving them. Make them bulleted like

1. Accessibility -
    * on clicking menuicon the slide-menu will toggle its position(process:added eventlistener and toggled the class)
2. Aesthetics - 
    * aligned the feed to center
    * aligned the silde-menu so that it does not collapse with header
    * fixed the slide-menu to left side
3. Testing - 
    * Added the test to check if all urls are defined(process: by expecting them not to be undefined)
    * Added the test to check if all names are defined(process: by expecting them not to be undefined)
    * Added the test to check if nav is hidden by default(process:Selected the transform property and split the matrix and checked if the value is less than zero)
    * Added the test to check intial entries are not empty(process: called the loadfeed function and checked the status to be equal to success)
4. Technicality Improvements -
    * on selecting one of the items of feed-list corresponding feeds will be displayed(process:on selecting called the loadfeed function and removed the previous feed and appended the corresponding feed)
