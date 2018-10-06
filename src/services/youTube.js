angular.module('video-player')
.service('youTube', function($http) {
  this.search = function(options, callback) {
    $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        part: 'snippet',
        key: options.key,
        q: options.query,
        maxResults: options.max,
        pageToken: options.pageToken,
        type: 'video',
        videoEmbeddable: 'true'
      },
      contentType: 'application/json',
    }).then(function successCallback(response) {
       callback(response.data)
      }).catch(function errorCallback(response) {
        console.log('ERROR')
      });
  }
});
