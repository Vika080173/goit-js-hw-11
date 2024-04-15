import{S as u,i as m}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const a=document.querySelector(".form"),c=document.querySelector(".gallery"),f=document.querySelector(".loader");a.addEventListener("submit",y);function p(o){const r="https://pixabay.com/api/",i="6410346f89264d6e919165208231505",s=new URLSearchParams({key:i,q:names,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${r}?${s}`;return fetch(e).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function d(o){return o.map(({webformatURL:r,largeImageURL:i,tags:s,likes:e,views:t,comments:n,downloads:l})=>`
        <li class="gallery-item">
        <a class="gallery-link" href="${i}">
        <img 
        class="gallery-image"
        src="${r}"
        alt="${s}"/>
        </a>
        <div class="image-text">
        <p>Likes: ${e}</p>
        <p>Views: ${t}</p>
        <p>Comments: ${n}</p>
        <p>Downloads: ${l}</p>
        </div>
        </li>`).join("")}c.insertAdjacentHTML("beforeend",d());new u(".gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt"});function y(o){o.preventDefault(),c.innerHTML="",f.stule.opacity=1,o.currentTarget.elements,p().then(r=>{r.names}).catch(r=>{m.show({message:'❌ "Sorry, there are no images matching your search query. Please try again!"',position:"topRight",color:"red",messageColor:"with",messageSize:12})}).finally(()=>{a.reset()})}
//# sourceMappingURL=commonHelpers.js.map
