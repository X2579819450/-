// $(function () {
  // 点击去注册账号让 登录框隐藏，注册框显示
  $("#link_reg").click(() => {
    $(".login-box").hide();
    $(".reg-box").show();
  });
  // 点击去登录让 注册框隐藏，登录框显示
  $("#link_login").click(() => {
    $(".login-box").show();
    $(".reg-box").hide();
  });
// });

//! 2、实现登录注册表单的验证
// 从 LayUI 中获取 form 对象
const form = layui.form;
// 通过 form.verify() 方法自定义校验规则
form.verify({
  // 自定义一个叫 pwd 的校验规则
  pwd: [/^[\S]{6,12}$/, "密码必须6到12位，且不能出现空格"],
  // 校验两次密码是否一致的规则
  repwd: (val) => {
      // 通过形参拿到的是确认密码框中的内容
      // 还需要拿到密码框中的内容
      // 然后进行一次等于的判断
      // 如果判断失败,则return一个提示消息即可
      const pwd = $(".reg-box [name=password").val();
      if(pwd !== val) return "两次密码不一致"
  },
    
});

 // 获取 layui 弹窗
const layer = layui.layer;
const baseURL = "http://www.liulongbin.top:3007"
$('#form_reg').on('submit', function (e) { 
  e.preventDefault();
  const data = $(this).serialize();
  $.ajax({
    type: 'POST',
    url: baseURL + "/api/reguser",
    data,
    success: function (res) {
      //  console.log(res);
      const { status, message } = res;
      if (status !== 0) return layer.msg(message)
      $('#link_login').click()  // 没有理解清楚
    },
  })
});

$('#form_login').on('submit', function (e) { 
  e.preventDefault();
  const data = $(this).serialize();
  $.ajax({
    type: 'POST',
    url: baseURL + "/api/login",
    data,
    success: function (res) {
      // console.log(res);
      const { status, message, token } = res;
      if (status !== 0) return layer.msg(message)
      localStorage.setItem('token', token);
      localStorage.href = '/index.html'
     }
  })
});