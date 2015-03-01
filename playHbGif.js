// ==UserScript==
// @name         Play Them all!
// @namespace    http://armgod.com/
// @version      0.4
// @description  Play all the Gif images at huaban.com.
// @author       Dan
// @include      *://*huaban.com/*
// @copyright    2015
// @grant        none
// ==/UserScript==

var gGif = function() {
    $$('.pin a.img img').each(function(img){img.src = img.src.replace(/fw236$/, 'fw236g'); img.src = img.src.replace(/fw320$/, 'fw320g')});
    $$('.pin .img .gif-icon').setStyle('display','none');
}
window.addEvent('domready', gGif); 
window.addEvent('scroll', gGif); 
window.addEvent('click', gGif); 