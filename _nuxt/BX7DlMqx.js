import{E as h}from"./CSAlJCuO.js";let t=null;const l=78,i=78,r=5,A=()=>(t=h({totalAssets:innerWidth>960?l:l-r,requiredAssets:innerWidth>960?i:i-r,loadedAssets:0,activeSlide:0,activeSlideHeader:!1,sound:1,scrollPos:0}),t),a=()=>{t.loadedAssets++},L=e=>{t.activeSlide=e},g=e=>{t.activeSlideHeader=e},v=()=>{t.sound===1?t.sound=0:t.sound=1},E=e=>{t.scrollPos=e},w=()=>t;let d=null,c=!1,s=null,p=!1,u=null,m=!1,o=null,f=!1,n=null,S=!1;const k=()=>{innerWidth<=960||(d=new Audio("/sounds/drone_compressed.mp3"),d.volume=.5,d.loop=!0,d.addEventListener("canplaythrough",()=>{c||(a(),c=!0)}),d.load(),s=new Audio("/sounds/ui1.mp3"),s.volume=.1,s.addEventListener("canplaythrough",()=>{p||(a(),p=!0)}),s.load(),u=new Audio("/sounds/ui2.mp3"),u.volume=.5,u.addEventListener("canplaythrough",()=>{m||(a(),m=!0)}),u.load(),o=new Audio("/sounds/ui3.mp3"),o.volume=.2,o.addEventListener("canplaythrough",()=>{f||(a(),f=!0)}),o.load(),n=new Audio("/sounds/ticker.mp3"),n.volume=.2,n.addEventListener("canplaythrough",()=>{S||(a(),S=!0)}),n.load())},H=()=>{d&&d.play()},P=()=>{s&&(s.currentTime=0,s.play())},T=()=>{o&&(o.currentTime=0,o.play())},W=()=>{n&&n.play()},q=e=>{d&&s&&u&&o&&n&&(d.muted=e,s.muted=e,u.muted=e,o.muted=e,n.muted=e),v()};export{T as a,k as b,A as c,a as d,E as e,L as f,g,W as h,H as i,q as m,P as p,w as u};