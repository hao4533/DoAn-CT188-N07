document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của form

    // Lấy thông tin từ các trường nhập liệu
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Kiểm tra thông tin đăng nhập
    if (email === "admin@gmail.com" && password === "123456") {
      // Chuyển hướng đến trang index.html nếu thông tin đúng
      window.location.href = "index.html";
    } else {
      // Hiển thị thông báo lỗi
      alert("Sai email hoặc mật khẩu!");
    }
  });
