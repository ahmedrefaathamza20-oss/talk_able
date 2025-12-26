// ===== Fake Existing Email =====
const EXISTING_EMAIL = "test@gmail.com";

// ===== Elements =====
const form = document.getElementById("registerForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const message = document.getElementById("message");
const registerBtn = document.getElementById("registerBtn");

// ===== Submit =====
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const userType = document.querySelector('input[name="user"]:checked');

  console.log({ name, email, password, userType });

  if (!name || !email || !password) {
    alert("املأ كل البيانات");
    return;
  }

  if (!userType) {
    alert("اختار نوع المستخدم");
    return;
  }

  alert("تمام ✅ نوع المستخدم: " + userType.value);
});


  fakeRegisterAPI({
    name,
    email,
    password,
    userType: userType.value,
  })
    .then(() => {
      showMessage("تم إنشاء الحساب بنجاح 🎉", "success");

      setTimeout(() => {
        window.location.href ="../login.html";
      }, 100);
    })
    .catch((err) => {
      showMessage(err, "error");
      setLoading(false);
    });
;

// ===== Fake API =====
function fakeRegisterAPI(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.email === EXISTING_EMAIL) {
        reject("هذا البريد الإلكتروني مسجل بالفعل ❌");
      } else {
        console.log("User Data:", data); // للتجربة
        resolve();
      }
    }, 1200);
  });
}

// ===== UI Helpers =====
function showMessage(text, type) {
  message.textContent = text;
  message.style.display = "block";
  message.style.color = type === "success" ? "green" : "red";
}

function hideMessage() {
  message.style.display = "none";
}

function setLoading(isLoading) {
  if (isLoading) {
    registerBtn.disabled = true;
    registerBtn.textContent = "جاري إنشاء الحساب...";
  } else {
    registerBtn.disabled = false;
    registerBtn.textContent = "إنشاء حساب";
  }
}


document.querySelectorAll('input[name="user"]').forEach(radio => {
  radio.addEventListener("change", () => {
    console.log("Selected:", radio.value);
  });
});
