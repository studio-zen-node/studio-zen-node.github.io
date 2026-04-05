(function() {
    const baseUrl = "https://studio-zen-node.github.io/";

    // 1. スタイルの注入（ハンバーガーメニュー専用のデザイン）
    const style = document.createElement('style');
    style.innerHTML = `
        /* ハンバーガーボタン */
        .menu-btn {
            position: fixed; top: 20px; right: 20px; z-index: 1000;
            width: 50px; height: 50px; cursor: pointer;
            display: flex; flex-direction: column; justify-content: center; align-items: center;
            background: rgba(0, 0, 0, 0.5); border-radius: 50%; backdrop-filter: blur(5px); border: 1px solid #333;
        }
        .menu-btn span {
            width: 25px; height: 2px; background: #fff; margin: 3px; transition: 0.4s;
        }
        /* オープン時のボタンアニメーション */
        .menu-btn.open span:nth-child(1) { transform: translateY(8px) rotate(45deg); }
        .menu-btn.open span:nth-child(2) { opacity: 0; }
        .menu-btn.open span:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }

        /* フルスクリーンメニュー外枠 */
        #nav-overlay {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0, 0, 0, 0.95); z-index: 999;
            display: flex; justify-content: center; align-items: center;
            opacity: 0; visibility: hidden; transition: 0.5s; backdrop-filter: blur(15px);
        }
        #nav-overlay.active { opacity: 1; visibility: visible; }

        /* メニューリスト */
        .nav-list-recruit { list-style: none; text-align: center; padding: 0; }
        .nav-list-recruit li { margin: 40px 0; opacity: 0; transform: translateY(20px); transition: 0.5s; }
        #nav-overlay.active li { opacity: 1; transform: translateY(0); }
        
        .nav-list-recruit a {
            text-decoration: none; color: #fff; font-size: 2rem; font-weight: 900;
            letter-spacing: 10px; text-transform: uppercase; display: block; transition: 0.3s;
        }
        .nav-list-recruit a span {
            display: block; font-size: 0.8rem; color: #007bff; letter-spacing: 5px; margin-top: 5px; font-weight: normal;
        }
        .nav-list-recruit a:hover { color: #007bff; letter-spacing: 15px; }
    `;
    document.head.appendChild(style);

    // 2. メニュー項目の定義
    const items = [
        { name: "Home", sub: "ホーム", link: "index.html" },
        { name: "Philosophy", sub: "理念", link: "recruit/index.html#philosophy" },
        { name: "Positions", sub: "募集職種", link: "recruit/index.html#roles" },
        { name: "Contact", sub: "相談窓口", link: "service.html" }
    ];

    // 3. HTML構造の生成
    const menuBtn = document.createElement('div');
    menuBtn.className = 'menu-btn';
    menuBtn.innerHTML = '<span></span><span></span><span></span>';

    const overlay = document.createElement('div');
    overlay.id = 'nav-overlay';
    
    let listHtml = '<ul class="nav-list-recruit">';
    items.forEach((item, index) => {
        listHtml += `<li style="transition-delay: ${index * 0.1}s">
            <a href="${baseUrl}${item.link}">${item.name}<span>${item.sub}</span></a>
        </li>`;
    });
    listHtml += '</ul>';
    overlay.innerHTML = listHtml;

    document.body.appendChild(menuBtn);
    document.body.appendChild(overlay);

    // 4. クリックイベント
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('open');
        overlay.classList.toggle('active');
    });

    // メニュークリックで閉じる（ページ内リンク用）
    overlay.addEventListener('click', () => {
        menuBtn.classList.remove('open');
        overlay.classList.remove('active');
    });
})();
