class CommonSidebar extends HTMLElement {
  connectedCallback() {
    // 1. 定义侧边栏的 HTML 结构和基础样式
    this.innerHTML = `
      <aside class="w-64 border-r border-white/5 bg-[#090e1a] p-4 flex flex-col justify-between h-screen">
        <div class="space-y-6">
          <!-- Logo 区域 -->
          <a href="index.html" class="text-xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 italic px-3 block">
            TypeWords
          </a>
          
          <!-- 导航菜单 -->
          <nav class="space-y-1" id="sidebar-nav">
            <a href="dashboard.html" class="nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-white/60 hover:bg-white/5 transition">
              <span>🔤</span> 单词
            </a>
            
            <a href="articles.html" class="nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-white/60 hover:bg-white/5 transition">
              <span>📄</span> 文章
            </a>
            
            <a href="settings.html" class="nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-white/60 hover:bg-white/5 transition">
              <span>⚙️</span> 设置
            </a>

            <a href="feedback.html" class="nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-white/60 hover:bg-white/5 transition">
              <span>💬</span> 反馈
            </a>

            <a href="resources.html" class="nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-white/60 hover:bg-white/5 transition">
              <span>📚</span> 资料
            </a>

            <a href="help.html" class="nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-white/60 hover:bg-white/5 transition">
              <span>❓</span> 帮助
            </a>
          </nav>
        </div>
        
        <div class="px-3 py-2 text-xs text-white/30 border-t border-white/5 pt-4">本地浏览器安全同步</div>
      </aside>
    `;

    // 2. 自动高亮逻辑
    const currentPath = window.location.pathname;
    const navItems = this.querySelectorAll(".nav-item");

    navItems.forEach(item => {
      const href = item.getAttribute("href");
      // 判断当前页面是否匹配该菜单
      if (currentPath.includes(href)) {
        item.classList.remove("text-white/60", "hover:bg-white/5");
        // 匹配图片 image_de7c84.png 对应的深灰色高亮背景
        item.classList.add("bg-white/10", "text-white", "font-medium");
      }
    });
  }
}

// 注册自定义标签 <common-sidebar></common-sidebar>
customElements.define('common-sidebar', CommonSidebar);