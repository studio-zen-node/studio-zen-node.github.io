document.addEventListener('DOMContentLoaded', function() {

// 1. ナビゲーションメニューの生成
const navHTML = `

<nav class="nav-container" aria-label="メインナビゲーション">
<div class="logo">Studio Zen-Node</div>
<input type="checkbox" id="menu-btn-check" aria-hidden="true">
<label for="menu-btn-check" class="menu-btn"><span></span></label>
<div class="menu-content">
<ul>
<li><a href="/index.html">Home<span>トップページ</span></a></li>
<li><a href="/works.html">Works<span>制作実績</span></a></li>
<li><a href="/blog.html">Blog<span>技術・制作ログ</span></a></li>
<li><a href="/service.html">Service<span>ご依頼・料金</span></a></li>
<li><a href="/env.html">Environment<span>制作環境</span></a></li>
<li><a href="/terms.html">Terms<span>利用規約</span></a></li>
<li><a href="/legal.html">Legal<span>特定商取引法</span></a></li>
<li><a href="/business/index.html">Business<span>企業様へ (JP)</span></a></li>
<li><a href="/business/en/index.html">Business<span>Corporate (EN)</span></a></li>
<li><a href="/recruit/index.html">Recruit<span>採用情報</span></a></li>
<li><a href="payment.html">Payment<span>お支払い方法</span></a></li>
</ul>
</div>
</nav>
`;

document.body.insertAdjacentHTML('afterbegin', navHTML);

// 2. セキュリティとUXのバランス
// 右クリック禁止やドラッグ禁止は、ユーザーが不便を感じるため削除を推奨しますが、
// どうしても画像保護が必要な場合はCSS（user-select: noneやpointer-events: none）での対応を検討してください。

// 3. ショートカット制限（必要最小限に留める）
document.addEventListener('keydown', function(e) {
const isMac = /Mac|iPod|iPhone|iPad/.test(navigator.userAgent);
const ctrlKey = isMac ? e.metaKey : e.ctrlKey;

// 保存 (Ctrl/Cmd + S) のみ、誤操作による保存ダイアログ防止として残す場合
if (ctrlKey && e.key === 's') {
    e.preventDefault();
}

// F12やソース表示の禁止は、開発者には通用せず一般ユーザーを混乱させるため、削除を推奨します。
}, false);

});

