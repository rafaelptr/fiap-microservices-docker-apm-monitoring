var nvg46436=window.nvg46436||new function(){this.w=window;this.d=document;this.version=9;this.url=this.dom=this.usr=this.qry=this.hld=this.hat=this.isnew=this.tmc=0;this.dsy=1;this.syn=this.nvg='';this.schema='//';this.acc=46436;this.account=46436;this.hat=true;this.schema='https://';this.account&&(this.acc=this.account);this.ckn='nav'+this.acc;this.ser=['usr.navdmp.com','cdn.navdmp.com'];this.preLoad=function(){if(this.w.location.hostname.search(this.dom)==-1)this.dom='';if(!this.dom)this.dom=this.__getTLD();try{var n_schema=new URL(document.getElementById('navegg').src);if(n_schema.protocol=="https:")this.schema="https://";}catch(e){};this.nvg=this.getCookie(this.ckn)||0;if(this.nvg){this.nvg=this.nvg.split('_');this.usr=this.nvg[0].split('|');this.syn=this.usr[1]?'|'+this.usr[1]:'';this.ctr=this.nvg[1]||false;this.usr=this.usr[0];}if(this.tmc)this.include('','script',this.tmc);};this.load=function(){if(this.hld)return false;this.hld=1;this.preLoad();if(!this.usr||(!this.syn&&this.dsy)){var url='/usr?v='+this.version;url+='&acc='+this.acc;if(this.usr){url+='&id='+this.usr;if(!this.syn)url+='&jds=1';}else{url+='&new=1';this.isnew=1;}if(!this.dsy)url+='&dsy=0';this.include(this.schema+this.ser[0]+url,'script');};if(this.usr)this.saveRequest(this.usr);this.setCookie(this.ckn,this.usr+this.syn+'_'+this.datestr());};this.start=function(id,values){if(this.usr!=id||this.ctr!=this.datestr()&&id!=''){this.usr=id;document.cookie=this.ckn+'=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';this.setCookie(this.ckn,id+this.syn+'_'+this.datestr());this.usr=id;};if(!this.nvg)this.saveRequest(id);};this.conversion=function(valor){var url=this.schema+this.ser[1]+'/req?acc='+this.acc+'&revenue='+(valor||'0');this.include(url);};this.saveRequest=function(profile){var a;this.par='/req?v='+this.version;this.par+='&id='+profile+this.syn;this.par+='&acc='+this.acc;if(!this.ctr||(this.ctr!=this.datestr()))this.par+='&upd=1';if(this.isnew)this.par+='&new=1';if(this.product)this.par+='&prd='+this.product;if(this.category)this.par+='&cat='+this.category;if(this.url)this.par+='&url='+escape(this.url);if(this.d.referrer)this.par+='&ref='+escape(this.d.referrer);this.par+='&tit='+escape(this.d.title);if(a=this.getCookie('__utmz'))this.par+='&utm='+escape(a);if(this.hat)if(a=this.getH1())this.par+='&h1='+escape(a);this.include(this.schema+this.ser[1]+this.par);this.call_callbacks();};this.getH1=function(){function __get_children(element){if(element.children.length)return __get_children(element.children[0]);if(element.tagName=="IMG")return element.alt||'';return element.innerText;}var h1;h1=document.getElementsByTagName('h1');if(!h1.length)return '';return __get_children(h1[0]);};this.call_callbacks=function(){function callUserFunc(userFunc){if(typeof userFunc=="function")try{userFunc();}catch(e){};}function AsyncExecutor(pending){if(typeof pending!="undefined"&&pending.length)for(var i=0;i<pending.length;i++)callUserFunc(pending[i]);}AsyncExecutor.prototype.push=function(userFunc){callUserFunc(userFunc);};this.w.naveggReady=new AsyncExecutor(this.w.naveggReady);};this.getSegment=function(fld){return '';};this.getParameter=function(fld){if(this.qry==0){this.qry={};var prmstr=this.w.location.search.substr(1);var prmarr=prmstr.split("&");for(var i=0;i<prmarr.length;i++){var tmparr=prmarr[i].split("=");this.qry[tmparr[0]]=tmparr[1];};};return this.qry[fld]||'';};this.getCookie=function(name){var start=this.d.cookie.indexOf(name+"=");var len=start+name.length+1;if((!start)&&(name!=this.d.cookie.substring(0,name.length)))return "";if(start==-1)return "";var end=this.d.cookie.indexOf(";",len);if(end==-1)end=this.d.cookie.length;return unescape(this.d.cookie.substring(len,end));};this.setCookie=function(fld,vle,ttl){var ltd='';if(this.dom)ltd=';domain='+this.dom;var d=new Date();if(ttl!=ttl||!ttl)ttl=365*24*60;d.setTime(d.getTime()+(ttl*60*1000));var ttl=d.toGMTString();this.d.cookie=fld+"="+vle+";expires="+ttl+";path=/"+ltd;};this.__getTLD=function(){var tld,parts,parcial="",x,d,result,val,coknm;coknm='nvgTLD'+this.account;d=new Date();val=d.getTime();tld=window.localStorage.getItem('nvgTLD');if(tld)return tld;parts=window.location.hostname.split(".");for(x=parts.length-1;x>0;x--){parcial="."+parts[x]+parcial;d.setTime(d.getTime()+5*1000);document.cookie=coknm+'='+val+';expires='+(d.toGMTString())+';domain='+parcial;result=this.getCookie(coknm);if(result==val){window.localStorage.setItem('nvgTLD',parcial);d=new Date();document.cookie=coknm+'='+val+';expires='+(d.toGMTString())+';domain='+parcial;return parcial;}}return '.'+window.location.hostname;};this.datestr=function(){var now=new Date();var start=new Date(now.getFullYear(),0,0);var diff=now-start;var oneDay=1000*60*60*24;return Math.ceil(diff/oneDay).toString();};this.include=function(src,inctype,html,nvgasync){if(inctype==''||inctype==undefined)inctype="script";if(nvgasync===''||nvgasync===undefined)nvgasync=true;var c=this.d.createElement(inctype);if(inctype=='script')c.type="text/javascript";if(html)c.text=html;else c.src=src;c.async=nvgasync;var p=this.d.getElementsByTagName('script')[0];p.parentNode.insertBefore(c,p);};this.doSync=function(version){var cok=this.getCookie(this.ckn)||'';cok=cok.split('_');if(cok[0].search(/\|/)>=0){cok[0]=cok[0].split('|');cok[0]=cok[0][0];};cok[0]+='|'+version;cok=cok.join('_');this.setCookie(this.ckn,cok);};this.findOf=function(val,ar){if(typeof ar!='object')return -1;for(var x in ar)if(ar[x]==val)return x;return -1;};this.regexEscape=function(text){return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&");};}();function nvgGetSegment(f){return nvg46436.getSegment(f);};function ltgc(s){return nvg46436.getSegment(s);};nvg46436.load();