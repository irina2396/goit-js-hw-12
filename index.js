import{a as _,S as w,i as l}from"./assets/vendor-CrlV4O_2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const S="50359122-c0461bb177b5f80fbb401fd3b",q="https://pixabay.com/api/";async function u(r,t){const a={key:S,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t};return(await _.get(q,{params:a})).data}const f=document.querySelector(".gallery"),B=new w(".gallery a"),m=document.querySelector(".loader"),p=document.querySelector(".load-more");function g(r){const t=r.map(({webformatURL:a,largeImageURL:i,tags:e,likes:s,views:n,comments:b,downloads:L})=>`
        <li class="card">
    <a class="card__link" href="${i}">
      <img class="card__img" src="${a}" alt="${e}" />
    </a>
    <div class="card__info">
      <div class="card__info-item">
        <span class="label">Likes</span>
        <span class="value">${s}</span>
      </div>
      <div class="card__info-item">
        <span class="label">Views</span>
        <span class="value">${n}</span>
      </div>
      <div class="card__info-item">
        <span class="label">Comments</span>
        <span class="value">${b}</span>
      </div>
      <div class="card__info-item">
        <span class="label">Downloads</span>
        <span class="value">${L}</span>
      </div>
    </div>
  </li>
`).join("");f.insertAdjacentHTML("beforeend",t),B.refresh()}function E(){f.innerHTML=""}function h(){m.classList.add("active")}function y(){m.classList.remove("active")}function $(){p.classList.remove("is-hidden")}function v(){p.classList.add("is-hidden")}const M=document.querySelector(".form"),P=document.querySelector(".load-more");let c="",o=1,d=0;M.addEventListener("submit",async r=>{if(r.preventDefault(),c=r.target.elements["search-text"].value.trim(),o=1,!c){l.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}E(),v(),h();try{const t=await u(c,o);if(d=t.totalHits,t.hits.length===0){l.info({title:"No Results",message:"No images found for this query.",position:"topRight"});return}g(t.hits),d>o*15&&$()}catch(t){l.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(t)}finally{y()}});P.addEventListener("click",async()=>{o+=1,h();try{const r=await u(c,o);g(r.hits),o*15>=d&&(v(),l.info({title:"End of results",message:"We're sorry, but you've reached the end of search results."})),O()}catch{l.error({title:"Error",message:"Failed to load more images."})}finally{y()}});function O(){const{height:r}=document.querySelector(".card").getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
