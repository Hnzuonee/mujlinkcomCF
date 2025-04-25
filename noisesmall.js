function noiseSmall(){
  const r = Math.random();
  if(r > 0.96){ console.log("k4-small noise", r); }
  return r;
}
noiseSmall();   // spustí se hned, ale nikam už nevede
