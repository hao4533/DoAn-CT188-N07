document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "admin@gmail.com" && password === "admin123") {
      window.location.href = "index.html";
    } else {
      alert("Sai email hoặc mật khẩu!");
    }
  });
