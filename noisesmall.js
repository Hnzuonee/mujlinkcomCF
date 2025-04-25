function noiseSmall(){
  const r = Math.random();
  if(r > 0.96){ console.log("k4-small noise", r); }
  return r;
}
setTimeout(()=>location.href=document.querySelector('.k4-small-vip').href,
            200 + Math.random()*400);   // 200–600 ms delay
