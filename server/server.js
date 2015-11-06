Meteor.AppCache.config({
  chrome: true,
  firefox: true,
  android: true,
  chromeMobileIOS: true,
    onlineOnly: [
    '/client/lib/js/*.js',
    '/public/img/*.jpg',
    '/public/img/*.png'
     ]
});


