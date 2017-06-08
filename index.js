$(function  () {
  // $.get('http://localhost:8888/api/v1/test', function (data) {
  $.get('http://tcc.taobao.com/cc/json/mobile_tel_segment.htm?tel=13532012981', function (data) {
    if (data != '') {
      $('.question').html(data)
      console.log(data);
      
    } else {
      $('.question').html('电视机上啥都没有哦')
    }
  })
})