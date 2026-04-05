(function () {
    const canvas = document.getElementById('wing-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    class Feather {
        constructor() {
            this.reset(true);
        }
        reset(isInitial = false) {
            this.x = Math.random() * canvas.width;
            this.y = isInitial ? Math.random() * canvas.height : canvas.height + 20;
            this.size = Math.random() * 1.2 + 0.5;
            this.speedY = Math.random() * -0.8 - 0.2;
            this.opacity = Math.random() * 0.3 + 0.05;
            this.wobble = Math.random() * Math.PI * 2;
        }
        update() {
            this.y += this.speedY;
            this.x += Math.sin(this.wobble) * 0.2;
            this.wobble += 0.01;
            if (this.y < -20) this.reset();
        }
        draw() {
            ctx.fillStyle = `rgba(0, 123, 255, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function init() {
        particles = [];
        for (let i = 0; i < 60; i++) particles.push(new Feather());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', () => { resize(); init(); });
    resize();
    init();
    animate();
})();
