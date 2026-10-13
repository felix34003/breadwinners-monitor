const endpoint=document.getElementById('endpoint');
endpoint.value=localStorage.getItem('bread-pi-endpoint')||'';
document.getElementById('endpoint-form').onsubmit=e=>{
  e.preventDefault();
  try{const url=new URL(endpoint.value);if(url.protocol!=='https:'||!url.hostname.endsWith('.ts.net')||url.username||url.password||url.port||url.search||url.hash||url.pathname!=='/')throw new Error('Use the Pi’s HTTPS Tailscale address, without a path or password.');
  localStorage.setItem('bread-pi-endpoint',url.origin);const frame=document.getElementById('workspace');frame.src=url.origin+'/';frame.hidden=false;document.getElementById('connect').hidden=true;document.getElementById('fallback').hidden=false;document.getElementById('direct').href=url.origin+'/';
  }catch(error){document.getElementById('notice').textContent=error.message;}
};
