/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
  /* This is our first test suite - a test suite just contains
   * a related set of tests. This suite is all about the RSS
   * feeds definitions, the allFeeds variable in our application.
   */
  describe('RSS Feeds', function () {
    /* This is our first test - it tests to make sure that the
     * allFeeds variable has been defined and that it is not
     * empty. Experiment with this before you get started on
     * the rest of this project. What happens when you change
     * allFeeds in app.js to be an empty array and refresh the
     * page?
     */
    it('are defined', function () {
      let expect = chai.expect;
      expect(allFeeds).to.not.be.undefined;
      expect(allFeeds.length).to.be.above(0);
    });


    // This test checks whether all the url field are defined and are not empty.
    it('should have defined Urls', function () {
      // Test here

    });

    // This test check whether all the feed names are defined and are not empty.
    it('should have defined names', function () {
      // Test here

    });
  });


  describe('The Menu', () => {


    // Test to check node hidden by default.
    it('should be hidden by default', () => {
      // test here
    });
    // A test that ensures the menu changes visibility when the menu icon is clicked. 
    // This test have two expectations: does the menu display itself when clicked, and does it hide when clicked again?
    it('should change visibility when the menu icon is clicked', (done) => {
      done();
    });

  })

  describe('Initial Entries', () => {
    let feedContainer, id;

    // Test to check the entries are not empty.
    it(`should not be empty for feeds`, (done) => {
      done();
    })
  })


  describe('New Feed Selection', () => {

    // A test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.
    it(`should change content for feeds`, (done) => {
      done();
    })
  })
}());
