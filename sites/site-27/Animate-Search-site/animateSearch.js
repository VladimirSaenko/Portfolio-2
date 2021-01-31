
"use strict";


const searchBtn = document.querySelector(".search-btn");
const searchBox = document.querySelector(".search-box");
const cancelBtn = document.querySelector(".cancel-btn");
const searchInput = document.querySelector("input");

searchBtn.onclick = () => {
    searchBox.classList.add("active");
    searchInput.classList.add("active");
    searchBtn.classList.add("active");
    cancelBtn.classList.add("active");
}

cancelBtn.onclick = () => {
    searchBox.classList.remove("active");
    searchInput.classList.remove("active");
    searchBtn.classList.remove("active");
    cancelBtn.classList.remove("active");
}

