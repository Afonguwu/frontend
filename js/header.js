const loginButton = document.getElementById('loginButton');
const profileButton = document.getElementById('profileButton');

loginButton.addEventListener('click', () => {
  // Hide the login button
    loginButton.style.display = 'none';
  // Show the profile button
    profileButton.style.display = 'block';
});

// 前往search頁面
  // 平板以上
  // seach input text
  const goSearchText = document.querySelector('#goSearchText');
  // 搜索按钮
  const goSearchBtn = document.querySelector('#goSearchBtn');
  // search按鈕
  goSearchBtn.addEventListener('click', event => {
    event.preventDefault();
    window.location.href = "search.html";
  });
  //enter輸入
  goSearchText.addEventListener('keydown', event => {
    event.preventDefault(); // 阻止表单默认提交行为
    window.location.href = "search.html";
  });

  // 手機板
   // seach input text
  const goSearchFillText = document.querySelector('#goSearchFillText');
  // 搜索按钮
  const goSearchFillBtn = document.querySelector('#goSearchFillBtn');
  // search按鈕
  goSearchFillBtn.addEventListener('click', event => {
    event.preventDefault();
    window.location.href = "search.html";
  });
  //enter輸入
  goSearchFillTex.addEventListener('keydown', event => {
    event.preventDefault(); // 阻止表单默认提交行为
    window.location.href = "search.html";
  });