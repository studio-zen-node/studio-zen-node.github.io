(function() {
    // 1. スタイルの注入（JSだけで完結させるため）
    const style = document.createElement('style');
    style.innerHTML = `
        /* ハンバーガーボタンの外観 */
        .menu-btn {
            position: fixed; top: 25px; right: 25px; z-index: 10000;
            width: 50px; height: 50px; cursor: pointer;
            display: flex; flex-direction: column; justify-content: center; align-items: center;
            background: rgba(0, 0, 0, 0.6); border-radius: 50%; backdrop-filter: blur(8px); border: 1px solid #333;
            transition: 0.3s;
        }
        .menu-btn:hover { border-color: #007bff; background: rgba(0, 123, 255, 0.1); }
        .menu-btn span {
            width: 24px; height: 1.5px; background: #fff; margin: 3.5px; transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        /* オープン時のアニメーション */
        .menu-btn.open span:nth-child(1) { transform: translateY(8.5px) rotate(45deg); }
        .menu-btn.open span:nth-child(2) { opacity: 0; transform: translateX(10px); }
        .menu-btn.open span:nth-child(3) { transform: translateY(-8.5px) rotate(-45deg); }

        /* フルスクリーンオーバーレイ */
        #nav-overlay {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0, 0, 0, 0.96); z-index: 9999;
            display: flex; justify-content: center; align-items: center;
            opacity: 0; visibility: hidden; transition: 0.5s; backdrop-filter: blur(15px);
        }
        #nav-overlay.active { opacity: 1; visibility: visible; }

        /* ナビゲーションリスト */
        .nav-list-recruit { list-style: none; text-align: center; padding: 0; margin: 0; }
        .nav-list-recruit li { margin: 35px 0; opacity: 0; transform: translateY(30px); transition: 0.6s cubic-bezier(0.4, 0, 0.2, 1); }
        #nav-overlay.active li { opacity: 1; transform: translateY(0); }
        
        .nav-list-recruit a {
            text-decoration: none; color: #fff; font-size: 2.2rem; font-weight: 900;
            letter-spacing: 12px; text-transform: uppercase; display: block; transition: 0.4s;
        }
        .nav-list-recruit a span {
            display: block; font-size: 0.75rem; color: #007bff; letter-spacing: 5px; margin-top: 8px; font-weight: normal;
        }
        .nav-list-recruit a:hover { color: #007bff; letter-spacing: 18px; transform: scale(1.05); }

        /* スマホ対応の微調整 */
        @media (max-width: 768px) {
            .nav-list-recruit a { font-size: 1.6rem; letter-spacing: 8px; }
            .nav-list-recruit a:hover { letter-spacing: 12px; }
        }
    `;
    document.head.appendChild(style);

    // 2. メニュー項目の設定（リンク先は絶対パスで指定）
    const items = [
        { name: "Home", sub: "ホーム", link: "https://studio-zen-node.github.io/index.html" },
        { name: "Service", sub: "制作プラン（法人）", link: "https://studio-zen-node.github.io/business/service.html" },
        { name: "Personal", sub: "制作プラン（個人）", link: "https://studio-zen-node.github.io/service.html" },
        { name: "Recruit", sub: "採用情報", link: "https://studio-zen-node.github.io/recruit/index.html" },
        { name: "Payment", sub: "決済ガイド", link: "https://studio-zen-node.github.io/payment.html" }
    ];

    // 3. 要素の生成
    const menuBtn = document.createElement('div');
    menuBtn.className = 'menu-btn';
    menuBtn.innerHTML = '<span></span><span></span><span></span>';

    const overlay = document.createElement('div');
    overlay.id = 'nav-overlay';
    
    let listHtml = '<ul class="nav-list-recruit">';
    items.forEach((item, index) => {
        listHtml += `<li style="transition-delay: ${index * 0.08}s">
            <a href="${item.link}">${item.name}<span>${item.sub}</span></a>
        </li>`;
    });
    listHtml += '</ul>';
    overlay.innerHTML = listHtml;

    document.body.appendChild(menuBtn);
    document.body.appendChild(overlay);

    // 4. 開閉イベント
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('open');
        overlay.classList.toggle('active');
        
        // メニューが開いているときはスクロール禁止
        if (overlay.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    // リンククリックで閉じる
    overlay.addEventListener('click', (e) => {
        if (e.target.tagName === 'A' || e.target.parentElement.tagName === 'A') {
            menuBtn.classList.remove('open');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
})();
