// 2.1.2.2
const elementEmail = document.getElementById('email');
const elementPassword = document.getElementById('password');

const elementName = document.getElementById('name');
const elementConfirmPassword = document.getElementById('confirmPassword');
const elementPhone = document.getElementById('phone');
const elementGender = document.getElementById('male');
const elementGenderWomen = document.getElementById('female');
const btnSubmit = document.getElementById('submit');

// console.log(
//   elementEmail,
//   elementName,
//   elementPassword,
//   elementConfirmPassword,
//   elementPhone,
//   elementGender
// );

// 2.1.2.3
const handleSubmit = (e) => {
  e.preventDefault();
  const valueEmail = elementEmail.value;
  const valuePassword = elementPassword.value;
  const valueName = elementName.value;
  const valueConfirmPassword = elementConfirmPassword.value;
  const valuePhone = elementPhone.value;
  const valueGender = elementGender.value;
  const isCheckMan = elementGender.checked;
  const isCheckWomen = elementGenderWomen.checked;

  //2.2.2.4
  if (
    (valueEmail &&
      valuePassword &&
      valueConfirmPassword &&
      valueName &&
      valuePhone &&
      valueGender &&
      isCheckMan) ||
    isCheckWomen
  ) {
    if (valuePassword === valueConfirmPassword) {
      const user = {
        email: valueEmail,
        password: valuePassword,
        name: valueName,
        gender: isCheckMan || isCheckWomen,
        phone: valuePhone,
      };

      // 2.2.2.5
      axios({
        method: 'post',
        url: 'https://shop.cyberlearn.vn/api/Users/signup',
        data: user,
      })
        .then((response) => {
          console.log('response : ', response);
          alert(response.data.message);

          // 2.2.2.6
          window.location.href = 'http://127.0.0.1:5500/Login/login.html';
        })
        .catch((error) => {
          console.log('error : ', error);
          alert(error.response.data.message);
        });
    } else {
      alert('passwork ko trung nhau');
    }
  } else {
    alert('vui long nhap du thong tin');
  }
};

btnSubmit.addEventListener('click', handleSubmit);
