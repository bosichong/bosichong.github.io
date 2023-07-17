

//文章时间的格式化。
dayjs.locale('zh-cn')
dayjs.extend(window.dayjs_plugin_relativeTime)
window.onload = function () {
  var crTimes = document.querySelectorAll(".cr-time");
  var upTimes = document.querySelectorAll(".up-time");

  for (var i = 0; i < crTimes.length; i++) {
    var crTime = crTimes[i];
    crTime.textContent = dayjs(crTime.textContent).fromNow();
  }

  for (var i = 0; i < upTimes.length; i++) {
    var upTime = upTimes[i];
    upTime.textContent = dayjs(upTime.textContent).fromNow();
  }


};