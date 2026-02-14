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
const MODEL_PATH = "assets/models/avatar_style2.glb";
 //const MODEL_PATH = "assets/models/ready_player_me_male_avatar__vrchatgame.glb";

loader.load(
  MODEL_PATH,
  function (gltf) {
    console.log("✅ Avatar Loaded");

    const avatar = gltf.scene;
// ضبط الحجم تلقائيًا
const box = new THREE.Box3().setFromObject(avatar);
const size = new THREE.Vector3();
box.getSize(size);
const maxDim = Math.max(size.x, size.y, size.z);
const scale = 11  / maxDim;
avatar.scale.set(scale, scale, scale);

// مركز الأفاتار جوه الدائرة
const center = new THREE.Vector3();
box.getCenter(center);
avatar.position.sub(center);
avatar.position.y += -0.2; // حرّكه شوية لفوق
const focusPoint = new THREE.Vector3(0, 1.5, 0); // عدل y على حسب مكان الرأس تقريبًا
camera.position.set(0, 2, 3); // مكان الكاميرا بعيد شوية
camera.lookAt(focusPoint);

    
scene.add(avatar);



    


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
