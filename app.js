"use strict";

document.addEventListener("DOMContentLoaded", function () {
  function run() {
    let htmlCode = document.querySelector("#html-code").value;
    let cssCode = "<style>" + document.querySelector("#css-code").value + "</style>";
    let jsCode = document.querySelector("#js-code").value;
    let output = document.querySelector("#output");

    output.contentDocument.body.innerHTML = htmlCode + cssCode;
    output.contentWindow.eval(jsCode);
  }

  document.querySelector("#html-code").addEventListener("keyup", run);
  document.querySelector("#css-code").addEventListener("keyup", run);
  document.querySelector("#js-code").addEventListener("keyup", run);

  const htmlPane = document.getElementById("html-pane");
  const cssPane = document.getElementById("css-pane");
  const jsPane = document.getElementById("js-pane");
  const separator = document.getElementById("separator");

  const tabs = document.querySelectorAll(".tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", function () {
      const codeType = this.dataset.codeType;

      document.querySelectorAll(".pane").forEach(pane => pane.style.display = "none");
      tabs.forEach(tab => tab.classList.remove("active"));

      document.querySelector(`#${codeType}-pane`).style.display = "block";
      this.classList.add("active");
    });
  });

  document.querySelector("#html-pane").style.display = "block";
  document.querySelector(".tab[data-code-type='html']").classList.add("active");

  cssPane.style.display = "none";
  jsPane.style.display = "none";

  separator.addEventListener("mousedown", function () {
    document.addEventListener("mousemove", resizePanes);
  });

  document.addEventListener("mouseup", function () {
    document.removeEventListener("mousemove", resizePanes);
  });
});
