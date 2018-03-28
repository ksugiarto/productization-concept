document.addEventListener("DOMContentLoaded", function(event) { 
  // Put Name, Logo, and Banner based on the site presets
  document.getElementsByClassName('title')[0].innerText = `${ sessionStorage.siteName }`;
  document.getElementsByTagName('title')[0].innerText = `${ sessionStorage.siteName }`;
  document.getElementsByClassName('site-logo')[0].src = `${ sessionStorage.logo }`;
});
