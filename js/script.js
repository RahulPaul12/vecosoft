"use strict";

//prealoader js
window.addEventListener("load", function(){
    var preload = document.querySelector(".preloader");
    preload?.classList.add("finish");
});


// For sticky header
window?.addEventListener("scroll", function () {
    const headerElement = document?.querySelector(".ff-header");
    const windowScroll = this?.scrollY;

    if (windowScroll > 0) headerElement?.classList?.add("active");
    else headerElement?.classList?.remove("active");
});


// sidebar open & closing
const sidebarBtn = document?.querySelector(".db-header-nav");
const sidebarDiv = document?.querySelector(".db-sidebar");
const mainDiv = document?.querySelector(".db-main");


function openClose(dataAttr, attrName, dataName, closeClass) {
    let openBtn = document?.querySelector(dataAttr);
    let targetElm = document?.querySelector(openBtn?.dataset[attrName]);
    let closeBtn = targetElm?.querySelector(closeClass);

    const openFunc = () => {
        targetElm?.classList?.add(dataName);
        document.body.classList.add("overflow-hidden");
    }

    const closeFunc = () => {
        targetElm?.classList?.remove(dataName);
        document.body.classList.remove("overflow-hidden");
    }

    openBtn?.addEventListener("click", openFunc);
    closeBtn?.addEventListener("click", closeFunc);
}
openClose("[data-webcart]", "webcart", "active", ".xmark-btn");
openClose("[data-mobcart]", "mobcart", "active", ".xmark-btn");
openClose("[data-account]", "account", "active", ".xmark-btn");
openClose("[data-profile]", "profile", "active", ".xmark-btn");

