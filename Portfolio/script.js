document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Stop observing once it's visible
        }
      });
    });
  
    const cards = document.querySelectorAll(".project-card");
    cards.forEach((card) => observer.observe(card));
  });


/*gtyhujikyhujiko.p */
document.getElementById('view-demo-btn').addEventListener('click', function() {
  const demoDetails = document.getElementById('demo-details');
  demoDetails.style.display = (demoDetails.style.display === 'none' || demoDetails.style.display === '') ? 'block' : 'none';
});
