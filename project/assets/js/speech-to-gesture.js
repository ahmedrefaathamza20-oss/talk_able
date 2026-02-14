// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xeeeeee);

// Camera
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
camera.position.set(0, 1.6, 4);

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(400, 400);
document
  .getElementById("avatar-container")
  .appendChild(renderer.domElement);

// Lights
scene.add(new THREE.AmbientLight(0xffffff, 2));

const dirLight = new THREE.DirectionalLight(0xffffff, 2);
dirLight.position.set(5, 10, 5);
scene.add(dirLight);

// Helper
;

// Loader
const loader = new THREE.GLTFLoader();

// جرّب واحد واحد
const MODEL_PATH = "assets/models/avatar_style.glb";
 //const MODEL_PATH = "assets/models/ready_player_me_male_avatar__vrchatgame.glb";

loader.load(
  MODEL_PATH,
  function (gltf) {
    console.log("✅ Avatar Loaded");

    const avatar = gltf.scene;

    // 🔴 إعدادات آمنة 100%
   
avatar.position.set(0, -1.1, 0); // عدّل الرقم حسب الشكل
avatar.scale.set(3, 3, 3);
 // نزول بسيط
// avatar.rotation.y = Math.P/2;
    scene.add(avatar);

    // 🔴 كاميرا بعيدة شوية
    
camera.position.set(0, 0, 7);
camera.lookAt(0, 0, 0);
  },
  undefined,
  function (error) {
    console.error("❌ GLB ERROR:", error);
  }
);


// Render
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
