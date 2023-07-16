

//文章时间的格式化。
// moment.locale('zh-CN');
dayjs.locale('zh-cn')
dayjs.extend(window.dayjs_plugin_relativeTime)
$(function () {
    $('.cr-time').each(function (i, e) {
        $(e).text(dayjs($(e).text()).fromNow())
    });
    $('.up-time').each(function (i, e) {
        $(e).text(dayjs($(e).text()).fromNow())  
    });
});



