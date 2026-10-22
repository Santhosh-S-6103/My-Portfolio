(function(){
var $=function(s,c){return(c||document).querySelector(s)},$$=function(s,c){return Array.prototype.slice.call((c||document).querySelectorAll(s))};
var burger=$('#burger'),menu=$('#menu');
function closeMenu(){menu.classList.remove('open');burger.setAttribute('aria-expanded','false')}
burger.addEventListener('click',function(){var o=menu.classList.toggle('open');burger.setAttribute('aria-expanded',o)});
$$('a',menu).forEach(function(a){a.addEventListener('click',closeMenu)});
document.addEventListener('keydown',function(e){if(e.key==='Escape')closeMenu()});
if('IntersectionObserver' in window){
  var links=$$('a',menu);
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){links.forEach(function(l){l.classList.toggle('on',l.getAttribute('href')==='#'+e.target.id)})}})},{rootMargin:'-45% 0px -50% 0px'});
  $$('main section').forEach(function(s){io.observe(s)});
}
var info={
EC2:'Virtual servers in the cloud. I work with Linux instances such as Ubuntu and Amazon Linux.',
RDS:'Managed relational databases, which pairs with my SQL experience.',
S3:'Object storage for files and static assets.',
IAM:'Users, roles and permissions that control access to AWS resources.',
CloudWatch:'Metrics, logs and alarms for monitoring resources.',
SNS:'Notifications and messaging between services and people.',
VPC:'A private, isolated network where AWS resources run.'};
var out=$('#archInfo');
function show(k){out.textContent=k+': '+info[k];$$('.chip').forEach(function(c){var on=c.dataset.k===k;c.classList.toggle('active',on);c.setAttribute('aria-selected',on)})}
$$('.chip').forEach(function(c){c.addEventListener('click',function(){show(c.dataset.k)})});
show('EC2');
$$('.f').forEach(function(b){b.addEventListener('click',function(){
  $$('.f').forEach(function(x){x.classList.toggle('active',x===b)});
  var f=b.dataset.f;
  $$('.skill-grid .card').forEach(function(c){c.classList.toggle('hide',f!=='all'&&c.dataset.c.split(' ').indexOf(f)<0)});
})});
$('#send').addEventListener('click',function(){
  var n=$('#fn').value.trim(),e=$('#fe').value.trim(),m=$('#fm').value.trim(),h=$('#hint');
  if(!n||!e||!m){h.textContent='Please fill in your name, email and message first.';return}
  if(!/^\S+@\S+\.\S+$/.test(e)){h.textContent='Please enter a valid email address.';return}
  var body=m+'\n\nFrom: '+n+' ('+e+')';
  window.location.href='mailto:santhoshs612003@gmail.com?subject='+encodeURIComponent('Portfolio enquiry from '+n)+'&body='+encodeURIComponent(body);
  h.textContent='Opening your email app. If nothing opens, email me directly at the address on the left.';
});
$('#yr').textContent=new Date().getFullYear();
})();
