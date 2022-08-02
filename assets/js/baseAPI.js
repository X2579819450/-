const baseURL = "http://www.liulongbin.top:3007"
$.ajaxPrefilter(Option => {
  Option.url = baseURL + option.url
})