
(function () {

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos,
      behavior: 'smooth'
    })
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function (e) {
    select('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('pre code').forEach((el) => {
      hljs.highlightElement(el);
    });
  });

  // 为文档中的图片添加自适应class样式
  const images = document.querySelectorAll('.inner-page img');
  for (let i = 0; i < images.length; i++) {
    images[i].classList.add('img-fluid');
  }


  // 全站搜索
  const blog_url = suiyan.url
  const searchInput = document.getElementById('search-input');
  const searchBtn = document.getElementById('search-btn');
  const modal = document.getElementById('modal');
  const resultList = document.getElementById('result-list');

  // 读取JSON文件
  fetch(blog_url + 'blog_data.json')
    .then(response => response.json())
    .then(data => {
      // 处理搜索按钮点击事件
      searchBtn.addEventListener('click', () => {
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
          modal.style.display = 'block';
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
          modal.style.display = 'block';
        }
      });
    });

  // 当#search-input获取焦点时，删除#search-btn的.vibrate-1类
  searchInput.addEventListener('focus', () => {
    searchBtn.classList.remove('vibrate-1');
  });

  // 当#search-input失去焦点时，#search-btn添加.vibrate-1类
  searchInput.addEventListener('blur', () => {
    searchBtn.classList.add('vibrate-1');
  });


})()