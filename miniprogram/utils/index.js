function request(url, method = 'GET', data) {
  return new Promise((resolve, reject) => {
    wx.request({
      url,
      method,
      data,
      header: {
        'Content-Type': 'application/json'
      },
      success: function(res) {
        if (res.statusCode === 200) {
          resolve(res.data);
        } else {
          reject(res.errMsg);
        }
      },
      fail: function(err) {
        reject(err);
      }
    });
  });
}

function login() {
  return new Promise((resolve, reject) => {
    console.log('Perform Login');
    wx.login({
      success: function(res) {
        if (res.code) {
          console.log(res);
          resolve(res);
        } else {
          reject(res);
        }
      },
      fail: function(err) {
        console.log(err);
        reject(err);
      }
    });
  });
}

module.exports = { login, request };
