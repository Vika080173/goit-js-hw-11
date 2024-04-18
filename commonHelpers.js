import{S as m,i as c}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function f(s){const r="https://pixabay.com/api/",o="43059810-21766dfeafea29ca9c24ae0e2",i=new URLSearchParams({key:o,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${r}?${i}`;return fetch(e).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}document.querySelector(".gallery");function y(s){return s.map(({webformatURL:r,largeImageURL:o,tags:i,likes:e,views:t,comments:n,downloads:p})=>`
        <li class="gallery-item">
        <a class="gallery-link" href="${o}">
        <img 
        class="gallery-image"
        src="${r}"
        alt="${i}" />
        </a>
        <div class="image-text">
        <p>Likes: ${e}</p>
        <p>Views: ${t}</p>
        <p>Comments: ${n}</p>
        <p>Downloads: ${p}</p>
        </div>
        </li>`).join("")}new m(".gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt"});const u=document.querySelector(".form"),l=document.querySelector(".gallery"),a=document.querySelector(".loader");u.addEventListener("submit",h);function h(s){s.preventDefault(),a.style.opacity=1,l.innerHTML="";const r=s.currentTarget.elements.searchImg.value;if(r===""){c.show({message:"Please search for something",position:"topRight",color:"orang"}),a.style.opacity=0;return}f(r).then(o=>{if(a.style.opacity=1,!o.hits.length){c.show({message:'❌ "Sorry, there are no images matching your search query. Please try again!"',position:"topRight",color:"red"});return}l.innerHTML=y(o.hits),lightbox.refresh()}).catch(o=>{c.show({message:"Request completed",position:"topRight",color:"green"})}).finally(()=>{u.reset(),a.style.opacity=0})}
//# sourceMappingURL=commonHelpers.js.map
