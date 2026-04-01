// menu.js - 全ページ共通ナビゲーション生成スクリプト
document.addEventListener('DOMContentLoaded', function() {
    const navHTML = `
    <nav class="nav-container">
        <div class="logo">Studio Zen-Node</div>
        <input type="checkbox" id="menu-btn-check">
        <label for="menu-btn-check" class="menu-btn"><span></span></label>
        <div class="menu-content">
            <ul>
                <li><a href="index.html">Home<span>トップページ</span></a></li>
                <li><a href="works.html">Works<span>制作実績</span></a></li>
                <li><a href="blog.html">Blog<span>技術・制作ログ</span></a></li>
                <li><a href="service.html">Service<span>ご依頼・料金</span></a></li>
                <li><a href="env.html">Environment<span>制作環境</span></a></li>
            </ul>
        </div>
    </nav>
    `;

    // bodyの先頭に挿入
    document.body.insertAdjacentHTML('afterbegin', navHTML);
});


