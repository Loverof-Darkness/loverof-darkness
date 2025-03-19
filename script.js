// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default anchor behavior
      const targetId = this.getAttribute('href'); // Get the target section ID
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth' // Smooth scroll to the section
      });
    });
  });
  
  // Dark Mode Toggle
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode'); // Toggle dark mode class
    if (body.classList.contains('dark-mode')) {
      themeToggle.textContent = 'Light Mode';
    } else {
      themeToggle.textContent = 'Dark Mode';
    }
  });
  
  // Dynamic Year in Footer
  const year = new Date().getFullYear();
  document.getElementById('year').textContent = year;
  const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();
gsap.to(cube.rotation, { x: Math.PI * 2, duration: 2, repeat: -1, yoyo: true });
