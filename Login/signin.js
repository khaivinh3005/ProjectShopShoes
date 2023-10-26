const callElement = (id) => {
  return document.querySelector(id);
};

const showHeader = callElement('#show_header');
const btnSignin = callElement('#btn_signin');
const valueEmail = callElement('#signin_email');
const valuePassword = callElement('#signin_password');
// ---------- Function set Localstorage-------------
const setLocalStorage = (data) => {
  localStorage.setItem('token', JSON.stringify(data));
};

// ---------- Function Signin-------------
const signinAPI = (e) => {
  e.preventDefault();
  let loginEmail = valueEmail.value;
  let loginPassword = valuePassword.value;
  let userLogin = {
    email: loginEmail,
    password: loginPassword,
  };

  if (loginEmail && loginPassword) {
    axios({
      method: 'post',
      url: 'https://shop.cyberlearn.vn/api/Users/signin',
      data: userLogin,
    })
      .then((response) => {
        if (response.status === 200) {
          const token = response.data.content.accessToken;
          alert(response.data.message);
          setLocalStorage(token);
          window.location.href = 'http://127.0.0.1:5500/HomePage/homePage.html';
        }
      })
      .catch((error) => {
        if (error) {
          alert(error.response.data.message);
        }
      });
  } else {
    alert('Vui lòng không để trống thông tin đăng nhập');
  }
};
btnSignin.addEventListener('click', signinAPI);
