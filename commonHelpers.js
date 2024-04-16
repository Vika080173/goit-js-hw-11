import{S as p,i as c}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const u=document.querySelector(".form"),l=document.querySelector(".gallery"),n=document.querySelector(".loader");u.addEventListener("submit",d);function m(i){const r="https://pixabay.com/api",o="43059810-21766dfeafea29ca9c24ae0e2",s=new URLSearchParams({key:o,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${r}?${s}`;return fetch(e).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function y(i){return i.map(({webformatURL:r,largeImageURL:o,tags:s,likes:e,views:t,comments:a,downloads:f})=>`
        <li class="gallery-item">
        <a class="gallery-link" href="${o}">
        <img 
        class="gallery-image"
        src="${r}"
        alt="${s}"/>
        </a>
        <div class="image-text">
        <p>Likes: ${e}</p>
        <p>Views: ${t}</p>
        <p>Comments: ${a}</p>
        <p>Downloads: ${f}</p>
        </div>
        </li>`).join("")}new p(".gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt"});function d(i){i.preventDefault(),n.style.opacity=1,l.innerHTML="";const r=i.currentTarget.elements.value;if(r===""){c.show({message:"Please search for something",position:"topRight",color:"orang"}),n.style.opacity=0;return}m(r).then(o=>{if(!o.hits.length){c.show({message:'❌ "Sorry, there are no images matching your search query. Please try again!"',position:"topRight",color:"red"});return}l.innerHTML=y(o.hits)}).catch(o=>alert(o)).finally(()=>{u.reset(),n.style.opacity=0})}
//# sourceMappingURL=commonHelpers.js.map
