"use strict";

const searchBody = document.querySelector(".search");

document.addEventListener("click", active);

function active(event) {
	if (event.target.closest(".search__button")) {
		searchBody.classList.add("_active");
	}
	if (!event.target.closest(".search")) {
		searchBody.classList.remove("_active");
	}
}

document.addEventListener("keyup", push);

function push(e) {
	if (event.code === "Escape") searchBody.classList.remove("_active");
}

const searchForm = document.querySelector(".search__form");
const searchLength = searchForm.getAttribute("maxlength");
const searchCounter = document.querySelector(".search__counter span");

searchCounter.innerHTML = searchLength;

searchForm.addEventListener("keyup", counter);
searchForm.addEventListener("keydown", function (e) {
	if (event.repeat) {
		counter();
	}
});

function counter(e) {
	const counterResult = searchLength - searchForm.value.length;
	searchCounter.innerHTML = counterResult;
}






