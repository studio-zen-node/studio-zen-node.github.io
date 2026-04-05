(function() {
    const baseUrl = "https://studio-zen-node.github.io/";

    // 採用ページ専用のナビゲーション項目
    const recruitMenuItems = [
        { name: "Home", sub: "ホーム", link: "index.html" },
        { name: "Philosophy", sub: "理念", link: "recruit/index.html#philosophy" },
        { name: "Positions", sub: "募集職種", link: "recruit/index.html#roles" },
        { name: "Contact", sub: "相談窓口", link: "service.html" }
    ];

    let menuHtml = '<ul class="nav-list">';
    recruitMenuItems.forEach(item => {
        menuHtml += `<li><a href="${baseUrl}${item.link}">${item.name}<span>${item.sub}</span></a></li>`;
    });
    menuHtml += '</ul>';

    // 既存のメニュー挿入箇所（global-nav等）に反映
    const navElement = document.getElementById('global-nav');
    if (navElement) {
        navElement.innerHTML = menuHtml;
    } else {
        document.write(menuHtml);
    }
})();
