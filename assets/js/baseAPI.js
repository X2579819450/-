const baseURL = "http://www.liulongbin.top:3007"
$.ajaxPrefilter(option => {
  option.url = baseURL + option.url
})