function run() {
  let htmlCode = document.querySelector("#html-code").value;
  let cssCode = <style> document.querySelector("#css-code").value </style>;
  let jsCode = document.querySelector("#js-code").value;
  let output = document.querySelector("#output");
  //console.log(htmlCode, cssCode, jsCode, output);
  output.contentDocument.body.innerHTML = htmlCode.cssCode;
}