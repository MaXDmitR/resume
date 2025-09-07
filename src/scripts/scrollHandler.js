const scrollToElement = (elementId) => {
  setTimeout(() => {
    const el = document.getElementById(elementId);
    if (!el) return;

    const navbar = document.querySelector('.navbar'); 
    const navHeight =  navbar.offsetHeight;
    const offset = 12; 

    const top = el.getBoundingClientRect().top + window.pageYOffset - navHeight - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }, 60);
};

export default scrollToElement;