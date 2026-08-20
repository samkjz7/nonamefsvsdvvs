const DISCORD="https://discord.gg/xQX9QzVUjf";
document.getElementById("year").textContent=new Date().getFullYear();
const copy=document.getElementById("copy"),toast=document.getElementById("toast");
copy.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(DISCORD)}catch{window.prompt("Copie o link do Discord:",DISCORD)}toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),1800)});
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>{document.querySelector("nav a.active")?.classList.remove("active");a.classList.add("active")}));
