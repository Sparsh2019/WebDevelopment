var allFeeds = [{
  id:0,
  name: 'CSS Tricks',
  url: 'http://feeds.feedburner.com/CssTricks'
}, {
  id:1,
  name: 'HTML5 Rocks',
  url: 'http://feeds.feedburner.com/html5rocks'
}, {
  id:2,
  name: 'Linear Digressions',
  url: 'http://feeds.feedburner.com/udacity-linear-digressions'
}];
function init() {
  feeditem = Handlebars.compile($('.tpl-feed-item').html());
  loadFeed(0,(result) => {
    var allfeed = $('.feed');
    allfeed[0].innerHTML="";
    if(result.status==="ok")
    {
    result.items.forEach((item) => {
      allfeed.append(feeditem(item));
    });
  }
  });
}

/* This function performs everything necessary to load a
 * feed using the rss2json API.
 * This function all supports a callback as the second parameter
 * which will be called after everything has run successfully.
 */
function loadFeed(id, cb) {
// console.log(id);
  $.ajax({
    type: "GET",
    url: 'https://api.rss2json.com/v1/api.json',
    data: {
      rss_url: allFeeds[id].url
    },
    success: function (result, status) {
      if (cb) {
        console.log(status);
        cb(result,status);
      }
    },
    error: function (result, status, err) {
      //run only the callback without attempting to parse result due to error
      if (cb) {
        // console.log(status);
        cb(result,status);
      }
    },
    dataType: "json"
  });
}
window.onload = init;

$(function () {
  var feedList = $('.feed-list'),
    feedItemTemplate = Handlebars.compile($('.tpl-feed-list-item').html()),
    menuIcon = $('.menu-icon-link');


  allFeeds.forEach(function (feed) {
    feedList.append(feedItemTemplate(feed));
  });
    var click0 = $(`a[data-id="0"]`);
    click0.on('click',function (){
      loadFeed(0,(result) => {
        var allfeed = $('.feed');
        allfeed[0].innerHTML="";
        result.items.forEach((item) => {
          allfeed.append(feeditem(item));
        });
      });
    })
    var click1 = $(`a[data-id="1"]`);
    click1.on('click',function (){
      loadFeed(1,(result) => {
        var allfeed = $('.feed');
        allfeed[0].innerHTML="";
        result.items.forEach((item) => {
          allfeed.append(feeditem(item));
        });
      });
    })
    var click2 = $(`a[data-id="2"]`);
    click2.on('click',function (){
      loadFeed(2,(result) => {
        var allfeed = $('.feed');
        allfeed[0].innerHTML="";
        result.items.forEach((item) => {
          // console.log(item);
          allfeed.append(feeditem(item));
        });
      });
    })

  // feedList.on('click', function () {
  //   var item = $(this);
  //   $('body').addClass( /*A class here*/ );
  //   loadFeed(item.data('id'));
  //   return false;
  // });

  /* When the menu icon is clicked on, we need to toggle a class
   * on the body to perform the hiding/showing of our menu.
   */

   var menu = document.querySelector('.menuiconimg');
   menu.addEventListener('click',(e) => {
     var body = document.querySelector('body');
     body.classList.toggle('menu-hidden');
   })
}());
