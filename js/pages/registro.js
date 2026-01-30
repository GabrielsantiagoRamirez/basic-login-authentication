import { registerWithEmail } from "../firebase/auth.service.js";

const form = document.querySelector("form");

form?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombre = document.querySelector("#nombre").value.trim();
  const apellido = document.querySelector("#apellido").value.trim();
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value;
  const confirmPassword = document.querySelector("#confirmar-password").value;

  if (!nombre || !apellido || !email || !password || !confirmPassword) {
    alert("Completa todos los campos");
    return;
  }

  if (password !== confirmPassword) {
    alert("Las contraseñas no coinciden");
    return;
  }

  try {
    await registerWithEmail(email, password);

    alert("Registro exitoso. Ahora puedes iniciar sesión.");

    window.location.href = "./login.html";
  } catch (e) {
    console.error(e);

    switch (e.code) {
      case "auth/email-already-in-use":
        alert("Este correo ya está registrado");
        break;
      case "auth/weak-password":
        alert("La contraseña debe tener al menos 6 caracteres");
        break;
      case "auth/invalid-email":
        alert("Correo inválido");
        break;
      default:
        alert("Error al registrar");
    }
  }
});
