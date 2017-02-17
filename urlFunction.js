function href() {
document.getElementById("ref1").innerHTML="current URL is :" +location.href;
}
function host() {
  document.getElementById("host1").innerHTML="HostName of current URL is :" +location.hostname;

}
function path() {

  document.getElementById("path1").innerHTML="pathName of current URL is :" +location.pathname;
  // console.log();
}
function protocol() {
  document.getElementById("protocol1").innerHTML="protocol of current URL is :" +location.protocol;

}
