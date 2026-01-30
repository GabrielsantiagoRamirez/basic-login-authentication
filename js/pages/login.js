import { loginWithGoogle, loginWithEmail } from "../firebase/auth.service.js";

const form = document.querySelector("form");
const googleBtn = document.querySelector(".mail");

const emailInput = document.querySelector('input[type="text"]');
const passwordInput = document.querySelector('input[type="password"]');

form?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!email || !password) {
    alert("Por favor completa todos los campos");
    return;
  }

  try {
    await loginWithEmail(email, password);
    redirectToSuccess();
  } catch (error) {
    handleAuthError(error);
  }
});

googleBtn?.addEventListener("click", async () => {
  try {
    await loginWithGoogle();
    redirectToSuccess();
  } catch (error) {
    handleAuthError(error);
  }
});

function redirectToSuccess() {
  window.location.href = "./exitoso.html";
}

function handleAuthError(error) {
  console.error(error);

  switch (error.code) {
    case "auth/user-not-found":
      alert("El usuario no existe");
      break;
    case "auth/wrong-password":
      alert("Contraseña incorrecta");
      break;
    case "auth/invalid-email":
      alert("Correo inválido");
      break;
    default:
      alert("Error al iniciar sesión");
  }
}
