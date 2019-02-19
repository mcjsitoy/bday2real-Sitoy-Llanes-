

var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
      swipe: 'left',
    },
    // Add default routes
    routes: [
      {
        path: '/adobo/',
        url: 'adobo.html',
      },
      {
        path: '/afritada/',
        url: 'afritada.html',
      },
      {
        path: '/bulalo/',
        url: 'bulalo.html',
      },
      {
        path: '/kinilaw/',
        url: 'kinilaw.html',
      },
      {
        path: '/sisig/',
        url: 'sisig.html',
      },
      {
        path: '/tinola/',
        url: 'tinola.html',
      },
      {
        path: '/tito/',
        url: 'tito.html',
      },
       {
        path: '/dev/',
        url: 'dev.html',
      },
      {
        path: '/fb/',
        url: 'https://www.youtube.com/',
      },
    ],
    // ... other parameters
  });
  
  var mainView = app.views.create('.view-main');
  

  var swiper = app.swiper.create('.swiper-container', {
    speed: 400,
    spaceBetween: 100
    
});