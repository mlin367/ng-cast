angular.module('video-player')

.controller('appCtrl',function(youTube) {
  
  this.videos = exampleVideoData
  this.currentVideo = exampleVideoData[0]
  this.nextPage = '';
  this.prevPage = '';
  this.currentQuery = '';

  this.selectVideo = (video) => {
    this.currentVideo = video;
  }

  this.searchResults = (query) => {
    youTube.search({
      key: YOUTUBE_API_KEY,
      query,
      max: 5
    }, (videos) => {
      this.videos = videos.items;
      this.currentVideo = videos.items[0];
      this.nextPage = videos.nextPageToken;
      this.prevPage = videos.prevPageToken;
      this.currentQuery = query;
    })
  }

  this.pagination = (direction) => {
    youTube.search({
      key: YOUTUBE_API_KEY,
      query: this.currentQuery,
      max: 5,
      pageToken: direction ? this.nextPage : this.prevPage
    }, (videos) => {
      this.videos = videos.items;
      this.nextPage = videos.nextPageToken;
      this.prevPage = videos.prevPageToken;
    })
  }

  this.searchResults('lakers')
})



.component('app', {
  templateUrl: 'src/templates/app.html',
  controller: 'appCtrl'
})

