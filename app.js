
document.addEventListener("DOMContentLoaded", () => {
  const login_btn = document.getElementById("login-btn");
  const account_btn = document.getElementById("account-btn");

  // Handle account creation
  account_btn.addEventListener('click', () => {
      const Fname = document.getElementById("name-input").value.trim();
      const Sname = document.getElementById("surname-input").value.trim();
      const Email = document.getElementById("email-input").value.trim();
      const Password = document.getElementById("password-input").value.trim();
      const Date = document.getElementById("date").value;
      const Month = document.getElementById("months").value;
      const Year = document.getElementById("year").value;
      const Female = document.getElementById("gender-female").checked;
      const Male = document.getElementById("gender-male").checked;

      // Validation
      if (Fname === '' || Sname === '' || Email === '' || Password === '') {
          alert("Please fill all requirements!");
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email)) {
          alert("Please enter a valid email address!");
      } else {
          // Save data to localStorage
          const user = {
              firstName: Fname,
              lastName: Sname,
              email: Email,
              password: Password,
              dob: `${Date}/${Month}/${Year}`,
              gender: Female ? "Female" : Male ? "Male" : "Unspecified"
          };
          localStorage.setItem("user", JSON.stringify(user));
          alert("Your account has been created!");

          // Clear input fields
          document.getElementById('name-input').value = '';
          document.getElementById("surname-input").value = '';
          document.getElementById("email-input").value = '';
          document.getElementById("password-input").value = '';
          document.getElementById("date").value = '';
          document.getElementById("months").value = '';
          document.getElementById("year").value = '';
          document.getElementById("gender-female").checked = false;
          document.getElementById("gender-male").checked = false;
      }
  });

  // Handle login
  login_btn.addEventListener('click', () => {
      const login_email = document.getElementById('login-email').value.trim();
      const login_password = document.getElementById('login-password').value.trim();
      
      // Retrieve stored user data
      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (login_email === '' || login_password === '') {
          alert('Please fill both email and password!');
      } else if (storedUser && storedUser.email === login_email && storedUser.password === login_password) {
          alert("You have logged In!");
      } else {
          alert("Please enter a valid email or password!");
      }

      // Clear the login input fields
      document.getElementById('login-email').value = '';
      document.getElementById('login-password').value = '';
  });
});