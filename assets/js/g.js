function loadComments() {
    var script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.dataset.repo = "bosichong/bosichong.github.io";
    script.dataset.repoId = "R_kgDOJLHieA";
    script.dataset.category = "Announcements";
    script.dataset.categoryId = "DIC_kwDOJLHieM4CWhL8";
    script.dataset.mapping = "title";
    script.dataset.strict = "0";
    script.dataset.reactionsEnabled = "1";
    script.dataset.emitMetadata = "0";
    script.dataset.inputPosition = "top";
    script.dataset.theme = "light";
    script.dataset.lang = "zh-CN";
    script.crossOrigin = "anonymous";
    document.getElementById("comments-container").appendChild(script);
    // 删除按钮
    let gbtn = document.getElementById("load-comments-btn");
    gbtn.parentNode.removeChild(gbtn);
  }

    
    
  

  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("load-comments-btn").addEventListener("click", loadComments);
    
  });
  