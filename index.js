$(function  () {
  // $.get('http://localhost:8888/api/v1/test', function (data) {
  // $.get('https://sabox-server.nie.netease.com/api/v1/endurance', function (data) {
  //   if (data != '') {
  //     $('.question').html(data)
  //     console.log(data);
      
  //   } else {
  //     $('.question').html('电视机上啥都没有哦')
  //   }
  // })

  $.ajax({

    url: 'https://sabox-server.nie.netease.com/api/v1/endurance',
    type: 'GET',
    crossDomain: true,
    dataType: 'jsonp',
    success: function (data) { alert("Success"); },
    // error: function () { alert('Failed!'); },
  });
})