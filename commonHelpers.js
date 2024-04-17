import{S as f,i as a}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const u=document.querySelector(".form"),l=document.querySelector(".gallery"),c=document.querySelector(".loader");u.addEventListener("submit",d);function m(s){const r="https://pixabay.com/api/",o="43059810-21766dfeafea29ca9c24ae0e2",i=new URLSearchParams({key:o,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${r}?${i}`;return fetch(e).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function h(s){return s.map(({webformatURL:r,largeImageURL:o,tags:i,likes:e,views:t,comments:n,downloads:p})=>`
        <li class="gallery-item">
        <a class="gallery-link" href="${o}">
        <img 
        class="gallery-image"
        src="${r}"
        alt="${i}"/>
        </a>
        <div class="image-text">
        <p>Likes: ${e}</p>
        <p>Views: ${t}</p>
        <p>Comments: ${n}</p>
        <p>Downloads: ${p}</p>
        </div>
        </li>`).join("")}const y=new f(".gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt"});function d(s){s.preventDefault(),c.style.opacity=1,l.innerHTML="";const r=s.currentTarget.elements.searchImg.value;if(r===""){a.show({message:"Please search for something",position:"topRight",color:"orang"}),c.style.opacity=0;return}m(r).then(o=>{if(!o.hits.length){a.show({message:'❌ "Sorry, there are no images matching your search query. Please try again!"',position:"topRight",color:"red"});return}l.innerHTML=h(o.hits),y.refresh()}).catch(o=>{a.show({message:"ERROR",position:"topRight",color:"red"})}).finally(()=>{u.reset(),c.style.opacity=0})}
//# sourceMappingURL=commonHelpers.js.map
