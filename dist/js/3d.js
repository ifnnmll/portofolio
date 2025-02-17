// Inisialisasi scene, kamera, dan renderer
const scene = new THREE.Scene();
const container = document.getElementById('canvas-container');
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
camera.position.z = 5;

// Tambahkan pencahayaan
const ambientLight = new THREE.AmbientLight(0xffffff, 2);
scene.add(ambientLight);

// Load model GLB
const loader = new THREE.GLTFLoader();
loader.load("mim.glb", function (gltf) {
  const model = gltf.scene;
  model.position.set(0, -1, 0);
  scene.add(model);
}, undefined, function (error) {
  console.error('Error loading GLB model:', error);
});

// Fungsi animasi render
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

// Update ukuran renderer saat window di-resize
window.addEventListener("resize", () => {
  const width = container.clientWidth;
  const height = container.clientHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});
