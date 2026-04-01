// menu.js - 全ページ共通ナビゲーション & セキュリティ一括管理スクリプト
document.addEventListener('DOMContentLoaded', function() {
    // 1. ナビゲーションメニューの生成
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
                <li><a href="terms.html">Terms<span>利用規約</span></a></li>
            </ul>
        </div>
    </nav>
    `;

    // bodyの先頭にメニューを挿入
    document.body.insertAdjacentHTML('afterbegin', navHTML);

    // 2. セキュリティ機能：右クリック禁止
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    }, false);

    // 3. セキュリティ機能：ドラッグ禁止（画像等の保護）
    document.addEventListener('dragstart', function(e) {
        e.preventDefault();
    }, false);

    // 4. セキュリティ機能：特定のショートカットキーを制限（保存・ソース表示）
    document.addEventListener('keydown', function(e) {
        // Ctrl+S (保存), Ctrl+U (ソース表示), Ctrl+Shift+I (デベロッパーツール) などを制限
        if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'u')) {
            e.preventDefault();
        }
    }, false);
});
