const s=document.querySelector(".feedback-form");document.querySelector("button");function r(e){const t=e.email.value.trim(),a=e.message.value.trim();return{userMail:t,message:a}}s.addEventListener("submit",e=>{e.preventDefault(),localStorage.clear(),s.reset()});s.addEventListener("input",e=>{e.preventDefault();const t=r(e.currentTarget),a=JSON.stringify(t);localStorage.setItem("feedback-form-state",a)});function n(){const e=localStorage.getItem("feedback-form-state");if(e){const{userMail:t,message:a}=JSON.parse(e);s.email.value=t,s.message.value=a}}n();
//# sourceMappingURL=2-form-b42d2757.js.map