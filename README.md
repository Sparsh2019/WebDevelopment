# Project Overview

This project is a web-based application that reads RSS feeds. As a part of the Debug It competition, hosted by Sparsh2k19 and ACM NIT Surat, you are required to solve the bugs in the project and bring out the app that it essentially is. You are free to change the UI as per your linking. Please have a look at the submission.md for info regarding submissions.

I have kept the project very open ended and it is your expertise to give it the shape you think the best. Maintain the basic skeleton and the subtlety of the app, rest is your imagination. Work it!

## Parameters of Evalution

1. Adding accessibility tags.
2. Enhancing the UI/UX to anything presentable, while maintaining the subtlety of the app.
3. Adding testing.
4. Making the app dynamic as essentially it should be.

## Overview of Tests -:

1. A test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.

2. A test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.

3. A test that ensures the menu element is hidden by default.

4. A test that ensures the menu changes visibility when the menu icon is clicked. This test have two expectations: does the menu display itself when clicked, and does it hide when clicked again?

5. A test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.

6. A test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.

## Running the Project-:

The project is simple to run. You just need to fork the repo and then clone it. Open the index.html file with a browser. All the tests are performed by Mocha and are done automatic.

## Submitting the project-:

The submissions starts at 12AM 23rd February 2019. The submission time only last for an hour and the deadline is 10 AM 23rd February 2019.  **Those projects will be disqualified which have commits after 12AM 23rd Febraury 2019** .To submit -:
> Make a Pull Request from your fork on the main repo.

