$(function  () {
  
  var handler = function(){ 
    var now = new Date();
    
    var time = now.toTimeString().substring(0,8);

    var appear_time = ['21:50:33','22:06:22','22:39:23','22:44:01','23:10:11','23:40:11',
                       '00:03:10','00:17:00','00:40:30','01:25:45','01:30:45','01:55:12',
                       '02:07:45','02:27:00','02:43:30','02:58:50','03:25:45','05:40:01',
                       '07:25:45','08:00:00','08:55:45','09:10:23','09:25:45','10:05:15',
                       '10:25:00','10:58:41','11:03:45','11:22:45','11:45:00','11:59:00'];

    var disappear_time = ['21:51:33','22:07:22','22:40:23','22:45:01','23:11:11','23:41:11',
                          '00:04:10','00:18:00','00:41:30','01:26:45','01:31:45','01:56:12',
                          '02:08:45','02:28:00','02:44:30','02:59:50','03:26:45','05:41:01',
                          '07:26:45','08:01:00','08:56:45','09:11:23','09:26:45','10:06:15',
                          '10:26:00','10:59:41','11:04:45','11:23:45','11:46:00','12:00:00'];


    // var appear_time = ['20:28:00','20:26:30','20:26:50','20:27:10'];
    // var disappear_time = ['20:29:00','20:26:40','20:27:00','20:27:20'];

    var questions =  [
      '<class class="1">1+1等于几？</class>',
      '<class class="2">200+400等于几？</class>',
      '<class class="3">300-10等于几？</class>',
      '<class class="4">40X40等于几？</class>',
      '<class class="5">5+6等于几？</class>',
      '<class class="6">78+33等于几？</class>',
      '<class class="7">66-20等于几？</class>',
      '<class class="8">77X2等于几？</class>',
      '<class class="9">100+30等于几？</class>',
      '<class class="10">110-1等于几？</class>',
      '<class class="11">129+300等于几？</class>',
      '<class class="12">3000-10等于几？</class>',
      '<class class="13">40X2等于几？</class>',
      '<class class="14">60-2等于几？</class>',
      '<class class="15">80-8等于几？</class>',
      '<class class="16">70+109等于几？</class>',
      '<class class="17">89+301等于几？</class>',
      '<class class="18">99+20等于几？</class>',
      '<class class="19">111+300等于几？</class>',
      '<class class="20">609-30等于几？</class>',
      '<class class="21">701+30等于几？</class>',
      '<class class="22">90X3等于几？</class>',
      '<class class="23">1300+0等于几？</class>',
      '<class class="24">1000-1等于几？</class>',
      '<class class="25">600+66等于几？</class>',
      '<class class="26">109+40-10等于几？</class>',
      '<class class="27">208+9-183等于几？</class>',
      '<class class="28">70+70+70-3等于几？</class>',
      '<class class="29">3+4+5+6-10等于几？</class>',
      '<class class="30">209-13-45-78+390等于几？</class>']


    for (var i = 0; i < 30; i++) {
      if (time > appear_time[i] && time < disappear_time[i]) {
        $('.question').html(questions[i])
      }
    }
  } 
  handler();

})