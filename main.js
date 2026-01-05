window.addEventListener('load', () => {
    let progress = 0;
    const bar = document.getElementById('progress-bar');
    const text = document.getElementById('loader-text');
    const wrapper = document.getElementById('loader-wrapper');

    const interval = setInterval(() => {
        progress += Math.random() * 10;
        if (progress > 100) progress = 100;
        
        bar.style.width = progress + '%';

        if (progress === 100) {
            clearInterval(interval);
            text.innerText = "سیستم آماده است";
            text.style.color = "#00f2ff";
            
            setTimeout(() => {
                wrapper.style.opacity = '0';
                wrapper.style.transition = 'opacity 0.8s ease';
                setTimeout(() => {
                    wrapper.style.display = 'none';
                }, 800);
            }, 500);
        }
    }, 150);

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});