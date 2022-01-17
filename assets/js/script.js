const menuToggle = document.querySelector(".menu-toggle");
const menuMobile = document.querySelector(".menu-mobile");
menuToggle.addEventListener("click", function () {
  setTimeout(() => {
    menuMobile.classList.toggle("slide");
  }, 60);
});

window.addEventListener("scroll", function() {
  var header = document.querySelector("nav");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// desktop

const openProfile = document.querySelector(".openProfile");
const menu = document.querySelector("#menuProfile");
const openProgram = document.querySelector(".openProgram");
const menu_program = document.querySelector("#menuProgram");
const openDepartemen = document.querySelector(".openDepartemen");
const menu_Departemen = document.querySelector("#menuDepartemen");

const icon_panahBawah1 = document.querySelector(".openProfile .icon_panahBawah");
const icon_panahBawah2 = document.querySelector(".openProgram .icon_panahBawah");
const icon_panahBawah3 = document.querySelector(".openDepartemen .icon_panahBawah");

openProfile.addEventListener("click", function () {
  setTimeout(() => {
    menu.classList.toggle("hide");
  }, 60);
  setTimeout(() => {
    icon_panahBawah1.classList.toggle("icon_keatas");
  }, 60);
});
openProgram.addEventListener("click", function () {
  setTimeout(() => {
    menu_program.classList.toggle("hide");
  }, 60);
  setTimeout(() => {
    icon_panahBawah2.classList.toggle("icon_keatas");
  }, 60);
});
openDepartemen.addEventListener("click", function () {
  setTimeout(() => {
    menu_Departemen.classList.toggle("hide");
  }, 60);
  setTimeout(() => {
    icon_panahBawah3.classList.toggle("icon_keatas");
  }, 60);
});

// mobile

const mToggleProfile = document.querySelector("#mToggleProfile");
const mMenuProfile = document.querySelector("#mMenuProfile");
const mToggleProgram = document.querySelector("#mToggleProgram");
const mMenuProgram = document.querySelector("#mMenuProgram");
const mToggleDepartemen = document.querySelector("#mToggleDepartemen");
const mMenuDepartemen = document.querySelector("#mMenuDepartemen");

const mIconBawah = document.querySelector("#mToggleProfile .icon_panahBawah");
const mIconBawah1 = document.querySelector("#mToggleProgram .icon_panahBawah");
const mIconBawah2 = document.querySelector("#mToggleDepartemen .icon_panahBawah");

mToggleProfile.addEventListener("click", function () {
  setTimeout(() => {
    mMenuProfile.classList.toggle("hidden");
  }, 60);
  setTimeout(() => {
    mIconBawah.classList.toggle("icon_keatas");
  }, 60);
});
mToggleProgram.addEventListener("click", function () {
  setTimeout(() => {
    mMenuProgram.classList.toggle("hidden");
  }, 60);
  setTimeout(() => {
    mIconBawah1.classList.toggle("icon_keatas");
  }, 60);
});
mToggleDepartemen.addEventListener("click", function () {
  setTimeout(() => {
    mMenuDepartemen.classList.toggle("hidden");
  }, 60);
  setTimeout(() => {
    mIconBawah2.classList.toggle("icon_keatas");
  }, 60);
});
