function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.section');
  
  for (let elm of elements) {
    observer.observe(elm);
  }

  let restaurants = document.querySelectorAll('.restaurant-item');

  for (let rest of restaurants) {
    observer.observe(rest);
  }