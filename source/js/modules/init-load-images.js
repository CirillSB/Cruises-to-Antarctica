export const initLoadImages = () => {
  const lazyImages = document.querySelectorAll('[data-containing-images]')
  console.log(lazyImages);
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.src = entry.target.dataset.src
        observer.unobserve(entry.target)
      }
    })
  }
  const options = {
    rootMargin: '0px 0px 75px 0px',
    threshold: 0,
  }
  const observer = new IntersectionObserver(callback, options)
  lazyImages.forEach((image) => observer.observe(image));
};
