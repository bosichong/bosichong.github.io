
(function () {
  

  const sider = document.getElementById("sider");
  const menuOpenBtn = document.getElementById("menu-open-btn");
  const menuCloseBtn = document.getElementById("menu-close-btn");

  menuOpenBtn.addEventListener("click", () => {
    toggleMenu();
  });

  menuCloseBtn.addEventListener("click", () => {
    toggleMenu();
  });

  function toggleMenu() {
    sider.classList.toggle("sider-top");
  }



  document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('pre code').forEach((el) => {
      hljs.highlightElement(el);
    });
  });




  // 全站搜索
  const blog_url = suiyan.url
  const searchInput = document.getElementById('search-input');
  const searchBtn = document.getElementById('search-btn');
  const resultList = document.getElementById('result-list');

  const searchInput1 = document.getElementById('search-input1');
  const searchBtn1 = document.getElementById('search-btn1');
  const resultList1 = document.getElementById('result-list1');

  // 读取JSON文件
  fetch(blog_url + 'blog_data.json')
    .then(response => response.json())
    .then(data => {
      // 处理搜索按钮点击事件
      searchBtn.addEventListener('click', (e) => {
        showRst(searchInput, data, resultList, blog_url);
        e.preventDefault()
        return false;
      });

      searchBtn1.addEventListener('click', (e) => {
        showRst(searchInput1, data, resultList1, blog_url);
        e.preventDefault()
        return false;
      });
    });


})()

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
function showRst(searchInput, data, resultList, blog_url) {
  const keyword = searchInput.value.trim().toLowerCase();
  const filteredArticles = data.filter(article => {
    return article.title.toLowerCase().includes(keyword);
  });
  // 清空搜索结果列表
  resultList.innerHTML = '';
  // 添加搜索结果到列表中
  if (filteredArticles.length === 0) {
    const li = document.createElement('li');
    li.textContent = '没有搜到相关内容';
    resultList.appendChild(li);
  } else {
    filteredArticles.forEach(article => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = blog_url + article.url + ".html";
      a.target = '_blank';
      a.textContent = article.title;
      li.appendChild(a);
      resultList.appendChild(li);
    });
  }
}

$(function () {
    $.scrollUp({
        scrollName: 'scrollUp',      // Element ID
        scrollDistance: 300,         // Distance from top/bottom before showing element (px)
        scrollFrom: 'top',           // 'top' or 'bottom'
        scrollSpeed: 300,            // Speed back to top (ms)
        easingType: 'linear',        // Scroll to top easing (see http://easings.net/)
        animation: 'fade',           // Fade, slide, none
        animationSpeed: 200,         // Animation speed (ms)
        scrollTrigger: false,        // Set a custom triggering element. Can be an HTML string or jQuery object
        scrollTarget: false,         // Set a custom target element for scrolling to. Can be element or number
        scrollText: '<i class="fa fa-arrow-up"></i>', // Text for element, can contain HTML
        scrollTitle: false,          // Set a custom <a> title if required.
        scrollImg: false,            // Set true to use image
        activeOverlay: false,        // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        zIndex: 999           // Z-Index for the overlay
    });
});