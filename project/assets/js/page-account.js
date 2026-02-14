// داتا جاية من الباك (Mock)
const userData = {
  name: "محمد أحمد",
  email: "mohamed@gmail.com",
  role: "دعم فني",
  avatar: "avatar.png"
};

// تحميل الداتا
window.onload = () => {
  document.getElementById("nameInput").value = userData.name;
  document.getElementById("emailInput").value = userData.email;
  document.getElementById("userNameText").innerText = userData.name;
  document.getElementById("userRoleText").innerText = `نوع المستخدم: ${userData.role}`;
  document.getElementById("avatarImg").src = userData.avatar;
};

// تفعيل التعديل
document.querySelectorAll(".edit").forEach(icon => {
  icon.addEventListener("click", () => {
    const type = icon.dataset.edit;
    const input = document.getElementById(type + "Input");
    input.disabled = false;
    input.focus();
    document.getElementById("saveProfile").disabled = false;
  });
});

// حفظ البيانات
document.getElementById("saveProfile").addEventListener("click", () => {
  const updatedData = {
    name: nameInput.value,
    email: emailInput.value
  };

  console.log("إرسال للباك:", updatedData);

  nameInput.disabled = true;
  emailInput.disabled = true;
  saveProfile.disabled = true;
  alert("تم حفظ التعديلات");
});

// تغيير الصورة
avatarInput.addEventListener("change", () => {
  const file = avatarInput.files[0];
  if (file) {
    avatarImg.src = URL.createObjectURL(file);
    console.log("صورة جديدة:", file);
  }
});

// تغيير الباسورد
changePassword.addEventListener("click", () => {
  if (passwordInput.value.length < 6) {
    alert("كلمة المرور ضعيفة");
    return;
  }

  console.log("تغيير باسورد:", passwordInput.value);
  alert("تم تغيير كلمة المرور");
  passwordInput.value = "";
});
