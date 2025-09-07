const counterAnimation = (element, target, duration) => {
    let prevValue = -1;
    let startTime;

    function animate(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const value = Math.floor(progress * target);

        if (value !== prevValue) {
            element.textContent = value;
            element.classList.remove("animate");
            void element.offsetWidth;
            element.classList.add("animate");
            prevValue = value;
        }

        if (progress < 1) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
};

export default counterAnimation;
