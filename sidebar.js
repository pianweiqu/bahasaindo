// sidebar.js - 核心自动化侧边栏组件
class CommonSidebar extends HTMLElement {
  connectedCallback() {
    // 1. 声明完整的 HTML 菜单结构与极客暗黑主题样式
    this.innerHTML = `
      <aside class="w-64 border-r border-white/5 bg-[#090e1a] p-4 flex flex-col justify-between h-screen sticky top-0">
        <div class="space-y-6">
          <a href="index.html" class="text-xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 italic px-3 block">
            TypeWords ID
          </a>
          
          <nav class="space-y-1" id="sidebar-nav">
            <a href="dashboard.html" class="nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-white/60 hover:bg-white/5 transition">
              <span>🔤</span> 单词工作台
            </a>
            
            <a href="articles.html" class="nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-white/60 hover:bg-white/5 transition">
              <span>📄</span> 文章练习
            </a>
            
            <a href="typing.html" class="nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-white/60 hover:bg-white/5 transition">
              <span>⌨️</span> 开始键盘打字
            </a>

            <a href="settings.html" class="nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-white/60 hover:bg-white/5 transition">
              <span>⚙️</span> 设置中心
            </a>

            <a href="feedback.html" class="nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-white/60 hover:bg-white/5 transition">
              <span>💬</span> 反馈建议
            </a>

            <a href="resources.html" class="nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-white/60 hover:bg-white/5 transition">
              <span>📚</span> 学习资料
            </a>

            <a href="help.html" class="nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-white/60 hover:bg-white/5 transition">
              <span>❓</span> 帮助中心
            </a>
          </nav>
        </div>
        
        <div class="px-3 py-2 text-xs text-white/30 border-t border-white/5 pt-4">
          本地浏览器安全同步
        </div>
      </aside>
    `;

    // 2. 高级 URL 路由识别自动点亮菜单
    const currentPath = window.location.pathname;
    const navItems = this.querySelectorAll(".nav-item");

    navItems.forEach(item => {
      const href = item.getAttribute("href");
      
      // 当浏览器地址栏包含该菜单链接时，褪去常规暗色调，点亮为高亮状态
      if (currentPath.includes(href)) {
        item.classList.remove("text-white/60", "hover:bg-white/5");
        // 匹配精细的微光高亮背景：bg-white/[0.06]、文字纯白、字重加粗
        item.classList.add("bg-white/[0.06]", "text-white", "font-semibold");
      }
    });
  }
}

// 注册标准自定义 HTML 标签组件 <common-sidebar></common-sidebar>
customElements.define('common-sidebar', CommonSidebar);
