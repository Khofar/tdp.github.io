

// script.js

// Grab elements
const modal     = document.getElementById('modal');
const modalImg  = document.getElementById('modal-img');
const closeBtn  = document.querySelector('.close');
const gallery   = document.querySelectorAll('.gallery-container img');

// When any gallery image is clicked…
gallery.forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'flex';    // turn on flex centering
    modalImg.src       = img.src;    // clone the image
    modalImg.alt       = img.alt;    // copy alt text for accessibility
  });
});

// Close modal when × is clicked
function closeModal() {
  modal.style.display = 'none';
}

// (Optional) Close when clicking outside the image
modal.addEventListener('click', e => {
  if (e.target === modal) closeModal();
});





    function showInfo() { document.getElementById("infoBox").style.display = "block"; }
    function hideInfo() { document.getElementById("infoBox").style.display = "none"; }
    function showContact() { document.getElementById("contactBox").style.display = "block"; }
    function hideContact() { document.getElementById("contactBox").style.display = "none"; }

    const laser = document.getElementById('laser');
    document.addEventListener('mousemove', e => {
      laser.style.left = e.clientX + 'px';
      laser.style.top = e.clientY + 'px';
    });

    const canvas = document.getElementById("fire-sparks");
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    let sparks = [];

    function Spark() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.radius = Math.random() * 2 + 1;
      this.opacity = Math.random() * 0.6 + 0.3;
      this.speedY = Math.random() * -1 - 0.5;
      this.color = `rgba(255, ${Math.floor(Math.random() * 150)}, 0, ${this.opacity})`;
    }

    function createSparks(count) {
      for (let i = 0; i < count; i++) {
        sparks.push(new Spark());
      }
    }

    function animateSparks() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      sparks.forEach((spark, i) => {
        spark.y += spark.speedY;
        if (spark.y < 0) {
          sparks[i] = new Spark();
          sparks[i].y = canvas.height;
        }
        ctx.beginPath();
        ctx.arc(spark.x, spark.y, spark.radius, 0, Math.PI * 2);
        ctx.fillStyle = spark.color;
        ctx.fill();
      });
      requestAnimationFrame(animateSparks);
    }

    createSparks(40);
    animateSparks();
  