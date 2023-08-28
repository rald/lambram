//	----------------------
//	--- Calc Functions ---
//	----------------------

doc=document;
body=doc.body;
say=(x)=>doc.write(x+'<br>');
ask=(m)=>window.prompt(m);
sayl=(x)=>console.log(x);
str=(n,b=10)=>n.toString(b);
int=(x)=>Math.floor(x);
pint=(s,b)=>parseInt(s,b);
pflt=(s)=>parseFloat(s);
ran=(x)=>int(Math.random()*x);
ranr=(b,e)=>rnd(int(e)-int(b)+1)+int(b);
div=(x,y)=>int(x/y);
mod=(x,y)=>int(x%y);
chr=(c)=>String.fromCharCode(c);
ord=(s,i=0)=>s.charCodeAt(i);
sin=(x)=>Math.sin(x);
cos=(x)=>Math.cos(x);
tan=(x)=>Math.tan(x);
log=(x)=>Math.log(x);
base=(x,y)=>log(y)/log(x);
make=(e)=>doc.createElement(e);
add=(o,e)=>o.append(e);
ani=f=>window.requestAnimationFrame(f);
sint=(f,t)=>window.setInterval(f,t);
sout=(f,t)=>window.setTimeout(f,t);
fac=(n)=>{var r=n;if(n===0||n===1)return 1;while(n>1){n--;r*= n;}return r;}
nPr=(n,r)=>fac(n)/fac(n-r);
nCr=(n,r)=>fac(n)/fac(r)*fac(n-r);
perp=(n,N)=>(n/N)*100;
pern=(p,N)=>(p*N)/100;
rnd=(x)=>Math.round(x);
abs=(x)=>Math.abs(x);
sgn=(x)=>x<0?-1:x>0?1:0;
ceil=(x)=>Math.ceil(x);
flr=(x)=>Math.floor(x);
trc=(x)=>Math.trunc(x);
clamp=(x,b,e)=>x<=b?b:x>=e?e:x;
PI=Math.PI;
d2r=PI/180.0;
r2d=180/PI



// --------------------------
// --- graphics functions ---
// --------------------------



gctx=(c)=>c.getContext("2d");
txt=(c,t,x,y,f)=>{c.fillStyle=f;c.fillText(t,x,y);}
pset=(c,x,y,f,s)=>{c.fillStyle=f;c.fillRect(x*s,y*s,s,s);}
pget=(c,x,y)=>{let d=c.getImageData();return new Color(d.data[0],d.data[1],d.data[2],d.data[3]);}
clear=(c,f)=>{c.fillStyle=f;c.fillRect(0,0,c.canvas.width,c.canvas.height);}
rgba=(c)=>`rgba(${c.r},${c.g},${c.b},${c.a})`;
line=(c,x0,y0,x1,y1,s)=>{c.beginPath();c.strokeStyle=s;c.moveTo(x0,y0);c.lineTo(x1,y1);c.stroke();c.closePath();}
