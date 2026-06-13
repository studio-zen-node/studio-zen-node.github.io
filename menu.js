document.addEventListener('DOMContentLoaded', function() {
 
    // 1. ナビゲーションメニューの生成
    const navHTML = `
    <nav class="nav-container" aria-label="メインナビゲーション">
        <div class="logo">Studio Zen-Node</div>
        <input type="checkbox" id="menu-btn-check" aria-hidden="true">
        <label for="menu-btn-check" class="menu-btn"><span></span></label>
        <div class="menu-content">
            <ul>
                <li><a href="/index">Home<span>トップページ</span></a></li>
                <li><a href="/works">Works<span>制作実績</span></a></li>
                <li><a href="/blog">Blog<span>技術・制作ログ</span></a></li>
                <li><a href="/device-logic">Column<span>Windows vs iPad</span></a></li>
                <li><a href="experience" class="btn">体験ページへ</a></li>
                <li><a href="/service">Service<span>ご依頼・料金</span></a></li>
                <li><a href="/env">Environment<span>制作環境</span></a></li>
                <li><a href="/terms">Terms<span>利用規約</span></a></li>
                <li><a href="/legal">Legal<span>特定商取引法</span></a></li>
                <li><a href="/business/index">Business<span>企業様へ (JP)</span></a></li>
                <li><a href="/business/en/index">Business<span>Corporate (EN)</span></a></li>
                <li><a href="/recruit/index">Recruit<span>採用情報</span></a></li>
                <li><a href="payment">Payment<span>お支払い方法</span></a></li>
            </ul>
        </div>
    </nav>
    `;

    document.body.insertAdjacentHTML('afterbegin', navHTML);

    // 2. メニューを開いている時にスクロールを防止する（必要に応じて追加）
    const menuBtn = document.getElementById('menu-btn-check');
    if (menuBtn) {
        menuBtn.addEventListener('change', function() {
            if (this.checked) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        });
    }

    // 3. リンクをクリックした時にメニューを閉じる
    const navLinks = document.querySelectorAll('.menu-content a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (menuBtn) {
                menuBtn.checked = false;
                document.body.style.overflow = 'auto';
            }
        });
    });

});
