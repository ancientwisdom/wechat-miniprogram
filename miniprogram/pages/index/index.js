//index.js
const utils = require('../../utils/index');
const app = getApp();
const host = 'https://culture-api.maoyu.info/poetry/';

Page({
  data: {
    poem: '',
    isLoading: true,
    show: false,
    list: ''
  },
  onLoad: function() {
    utils.login();
    this.getPoem('关雎');
    this.getList();
  },
  // onPullDownRefresh: function() {
  //   this.getPoem();
  // },
  showMenu: function() {
    this.setData({
      show: true
    });
  },
  closeMenu: function() {
    this.setData({
      show: false
    });
  },
  getList: function() {
    const that = this;
    utils.request(host + '/list', 'GET').then(res => {
      this.setData({
        list: res
      });
    });
  },
  getPoem: function(title) {
    utils.request(host + '/poem/' + title).then(res => {
      console.log(res);
      this.setData({
        poem: res,
        isLoading: false
      });
    });
  },
  getPoemTap: function(event) {
    const title = event.target.dataset.title;
    this.getPoem(title);
    this.setData({
      show: false
    });
  }
});
