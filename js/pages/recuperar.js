const form = document.querySelector(".form");
const statusDiv = document.getElementById("status");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;

  // Estado: enviando
  statusDiv.className = "status loading";
  statusDiv.textContent = "⏳ Enviando correo...";
  statusDiv.classList.remove("hidden");

  emailjs
    .send("service_lfj76iu", "template_z6j9h3s", { email })
    .then(() => {
      statusDiv.className = "status success";
      statusDiv.textContent =
        "✅ Correo enviado correctamente. Revisa tu bandeja.";
      form.reset();
    })
    .catch(() => {
      statusDiv.className = "status error";
      statusDiv.textContent =
        "❌ Error al enviar el correo. Intenta nuevamente.";
    });
});
