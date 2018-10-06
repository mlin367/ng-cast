angular.module('video-player')

.controller('appCtrl',function(youTube) {
  
  this.videos = exampleVideoData
  this.currentVideo = exampleVideoData[0]

  this.selectVideo = (video) => {
    this.currentVideo = video;
  }

  this.searchResults = (query) => {
    youTube.search({
      key: YOUTUBE_API_KEY,
      query,
      max: 5
    }, (videos) => {
      this.videos = videos;
      this.currentVideo = videos[0];
    })
  }

  this.searchResults('lakers')
})



.component('app', {
  templateUrl: 'src/templates/app.html',
  controller: 'appCtrl'
})

