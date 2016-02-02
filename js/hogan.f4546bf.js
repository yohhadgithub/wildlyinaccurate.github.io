var Hogan={};!function(a){function b(a,b,c){var d;return b&&"object"==typeof b&&(void 0!==b[a]?d=b[a]:c&&b.get&&"function"==typeof b.get&&(d=b.get(a))),d}function c(a,b,c,d,e,f){function g(){}function h(){}g.prototype=a,h.prototype=a.subs;var i,j=new g;j.subs=new h,j.subsText={},j.buf="",d=d||{},j.stackSubs=d,j.subsText=f;for(i in b)d[i]||(d[i]=b[i]);for(i in d)j.subs[i]=d[i];e=e||{},j.stackPartials=e;for(i in c)e[i]||(e[i]=c[i]);for(i in e)j.partials[i]=e[i];return j}function d(a){return String(null===a||void 0===a?"":a)}function e(a){return a=d(a),k.test(a)?a.replace(f,"&amp;").replace(g,"&lt;").replace(h,"&gt;").replace(i,"&#39;").replace(j,"&quot;"):a}a.Template=function(a,b,c,d){a=a||{},this.r=a.code||this.r,this.c=c,this.options=d||{},this.text=b||"",this.partials=a.partials||{},this.subs=a.subs||{},this.buf=""},a.Template.prototype={r:function(){return""},v:e,t:d,render:function(a,b,c){return this.ri([a],b||{},c)},ri:function(a,b,c){return this.r(a,b,c)},ep:function(a,b){var d=this.partials[a],e=b[d.name];if(d.instance&&d.base==e)return d.instance;if("string"==typeof e){if(!this.c)throw new Error("No compiler available.");e=this.c.compile(e,this.options)}if(!e)return null;if(this.partials[a].base=e,d.subs){b.stackText||(b.stackText={});for(key in d.subs)b.stackText[key]||(b.stackText[key]=void 0!==this.activeSub&&b.stackText[this.activeSub]?b.stackText[this.activeSub]:this.text);e=c(e,d.subs,d.partials,this.stackSubs,this.stackPartials,b.stackText)}return this.partials[a].instance=e,e},rp:function(a,b,c,d){var e=this.ep(a,c);return e?e.ri(b,c,d):""},rs:function(a,b,c){var d=a[a.length-1];if(!l(d))return void c(a,b,this);for(var e=0;e<d.length;e++)a.push(d[e]),c(a,b,this),a.pop()},s:function(a,b,c,d,e,f,g){var h;return l(a)&&0===a.length?!1:("function"==typeof a&&(a=this.ms(a,b,c,d,e,f,g)),h=!!a,!d&&h&&b&&b.push("object"==typeof a?a:b[b.length-1]),h)},d:function(a,c,d,e){var f,g=a.split("."),h=this.f(g[0],c,d,e),i=this.options.modelGet,j=null;if("."===a&&l(c[c.length-2]))h=c[c.length-1];else for(var k=1;k<g.length;k++)f=b(g[k],h,i),void 0!==f?(j=h,h=f):h="";return e&&!h?!1:(e||"function"!=typeof h||(c.push(j),h=this.mv(h,c,d),c.pop()),h)},f:function(a,c,d,e){for(var f=!1,g=null,h=!1,i=this.options.modelGet,j=c.length-1;j>=0;j--)if(g=c[j],f=b(a,g,i),void 0!==f){h=!0;break}return h?(e||"function"!=typeof f||(f=this.mv(f,c,d)),f):e?!1:""},ls:function(a,b,c,e,f){var g=this.options.delimiters;return this.options.delimiters=f,this.b(this.ct(d(a.call(b,e)),b,c)),this.options.delimiters=g,!1},ct:function(a,b,c){if(this.options.disableLambda)throw new Error("Lambda features disabled.");return this.c.compile(a,this.options).render(b,c)},b:function(a){this.buf+=a},fl:function(){var a=this.buf;return this.buf="",a},ms:function(a,b,c,d,e,f,g){var h,i=b[b.length-1],j=a.call(i);return"function"==typeof j?d?!0:(h=this.activeSub&&this.subsText&&this.subsText[this.activeSub]?this.subsText[this.activeSub]:this.text,this.ls(j,i,c,h.substring(e,f),g)):j},mv:function(a,b,c){var e=b[b.length-1],f=a.call(e);return"function"==typeof f?this.ct(d(f.call(e)),e,c):f},sub:function(a,b,c,d){var e=this.subs[a];e&&(this.activeSub=a,e(b,c,this,d),this.activeSub=!1)}};var f=/&/g,g=/</g,h=/>/g,i=/\'/g,j=/\"/g,k=/[&<>\"\']/,l=Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)}}("undefined"!=typeof exports?exports:Hogan),function(a){function b(a){"}"===a.n.substr(a.n.length-1)&&(a.n=a.n.substring(0,a.n.length-1))}function c(a){return a.trim?a.trim():a.replace(/^\s*|\s*$/g,"")}function d(a,b,c){if(b.charAt(c)!=a.charAt(0))return!1;for(var d=1,e=a.length;e>d;d++)if(b.charAt(c+d)!=a.charAt(d))return!1;return!0}function e(b,c,d,h){var i=[],j=null,k=null,l=null;for(k=d[d.length-1];b.length>0;){if(l=b.shift(),k&&"<"==k.tag&&!(l.tag in v))throw new Error("Illegal content in < super tag.");if(a.tags[l.tag]<=a.tags.$||f(l,h))d.push(l),l.nodes=e(b,l.tag,d,h);else{if("/"==l.tag){if(0===d.length)throw new Error("Closing tag without opener: /"+l.n);if(j=d.pop(),l.n!=j.n&&!g(l.n,j.n,h))throw new Error("Nesting error: "+j.n+" vs. "+l.n);return j.end=l.i,i}"\n"==l.tag&&(l.last=0==b.length||"\n"==b[0].tag)}i.push(l)}if(d.length>0)throw new Error("missing closing tag: "+d.pop().n);return i}function f(a,b){for(var c=0,d=b.length;d>c;c++)if(b[c].o==a.n)return a.tag="#",!0}function g(a,b,c){for(var d=0,e=c.length;e>d;d++)if(c[d].c==a&&c[d].o==b)return!0}function h(a){var b=[];for(var c in a)b.push('"'+j(c)+'": function(c,p,t,i) {'+a[c]+"}");return"{ "+b.join(",")+" }"}function i(a){var b=[];for(var c in a.partials)b.push('"'+j(c)+'":{name:"'+j(a.partials[c].name)+'", '+i(a.partials[c])+"}");return"partials: {"+b.join(",")+"}, subs: "+h(a.subs)}function j(a){return a.replace(s,"\\\\").replace(p,'\\"').replace(q,"\\n").replace(r,"\\r").replace(t,"\\u2028").replace(u,"\\u2029")}function k(a){return~a.indexOf(".")?"d":"f"}function l(a,b){var c="<"+(b.prefix||""),d=c+a.n+w++;return b.partials[d]={name:a.n,partials:{}},b.code+='t.b(t.rp("'+j(d)+'",c,p,"'+(a.indent||"")+'"));',d}function m(a,b){b.code+="t.b(t.t(t."+k(a.n)+'("'+j(a.n)+'",c,p,0)));'}function n(a){return"t.b("+a+");"}var o=/\S/,p=/\"/g,q=/\n/g,r=/\r/g,s=/\\/g,t=/\u2028/,u=/\u2029/;a.tags={"#":1,"^":2,"<":3,$:4,"/":5,"!":6,">":7,"=":8,_v:9,"{":10,"&":11,_t:12},a.scan=function(e,f){function g(){s.length>0&&(t.push({tag:"_t",text:new String(s)}),s="")}function h(){for(var b=!0,c=w;c<t.length;c++)if(b=a.tags[t[c].tag]<a.tags._v||"_t"==t[c].tag&&null===t[c].text.match(o),!b)return!1;return b}function i(a,b){if(g(),a&&h())for(var c,d=w;d<t.length;d++)t[d].text&&((c=t[d+1])&&">"==c.tag&&(c.indent=t[d].text.toString()),t.splice(d,1));else b||t.push({tag:"\n"});u=!1,w=t.length}function j(a,b){var d="="+y,e=a.indexOf(d,b),f=c(a.substring(a.indexOf("=",b)+1,e)).split(" ");return x=f[0],y=f[f.length-1],e+d.length-1}var k=e.length,l=0,m=1,n=2,p=l,q=null,r=null,s="",t=[],u=!1,v=0,w=0,x="{{",y="}}";for(f&&(f=f.split(" "),x=f[0],y=f[1]),v=0;k>v;v++)p==l?d(x,e,v)?(--v,g(),p=m):"\n"==e.charAt(v)?i(u):s+=e.charAt(v):p==m?(v+=x.length-1,r=a.tags[e.charAt(v+1)],q=r?e.charAt(v+1):"_v","="==q?(v=j(e,v),p=l):(r&&v++,p=n),u=v):d(y,e,v)?(t.push({tag:q,n:c(s),otag:x,ctag:y,i:"/"==q?u-x.length:v+y.length}),s="",v+=y.length-1,p=l,"{"==q&&("}}"==y?v++:b(t[t.length-1]))):s+=e.charAt(v);return i(u,!0),t};var v={_t:!0,"\n":!0,$:!0,"/":!0};a.stringify=function(b){return"{code: function (c,p,i) { "+a.wrapMain(b.code)+" },"+i(b)+"}"};var w=0;a.generate=function(b,c,d){w=0;var e={code:"",subs:{},partials:{}};return a.walk(b,e),d.asString?this.stringify(e,c,d):this.makeTemplate(e,c,d)},a.wrapMain=function(a){return'var t=this;t.b(i=i||"");'+a+"return t.fl();"},a.template=a.Template,a.makeTemplate=function(a,b,c){var d=this.makePartials(a);return d.code=new Function("c","p","i",this.wrapMain(a.code)),new this.template(d,b,this,c)},a.makePartials=function(a){var b,c={subs:{},partials:a.partials,name:a.name};for(b in c.partials)c.partials[b]=this.makePartials(c.partials[b]);for(b in a.subs)c.subs[b]=new Function("c","p","t","i",a.subs[b]);return c},a.codegen={"#":function(b,c){c.code+="if(t.s(t."+k(b.n)+'("'+j(b.n)+'",c,p,1),c,p,0,'+b.i+","+b.end+',"'+b.otag+" "+b.ctag+'")){t.rs(c,p,function(c,p,t){',a.walk(b.nodes,c),c.code+="});c.pop();}"},"^":function(b,c){c.code+="if(!t.s(t."+k(b.n)+'("'+j(b.n)+'",c,p,1),c,p,1,0,0,"")){',a.walk(b.nodes,c),c.code+="};"},">":l,"<":function(b,c){var d={partials:{},code:"",subs:{},inPartial:!0};a.walk(b.nodes,d);var e=c.partials[l(b,c)];e.subs=d.subs,e.partials=d.partials},$:function(b,c){var d={subs:{},code:"",partials:c.partials,prefix:b.n};a.walk(b.nodes,d),c.subs[b.n]=d.code,c.inPartial||(c.code+='t.sub("'+j(b.n)+'",c,p,i);')},"\n":function(a,b){b.code+=n('"\\n"'+(a.last?"":" + i"))},_v:function(a,b){b.code+="t.b(t.v(t."+k(a.n)+'("'+j(a.n)+'",c,p,0)));'},_t:function(a,b){b.code+=n('"'+j(a.text)+'"')},"{":m,"&":m},a.walk=function(b,c){for(var d,e=0,f=b.length;f>e;e++)d=a.codegen[b[e].tag],d&&d(b[e],c);return c},a.parse=function(a,b,c){return c=c||{},e(a,"",[],c.sectionTags||[])},a.cache={},a.cacheKey=function(a,b){return[a,!!b.asString,!!b.disableLambda,b.delimiters,!!b.modelGet].join("||")},a.compile=function(b,c){c=c||{};var d=a.cacheKey(b,c),e=this.cache[d];if(e){var f=e.partials;for(var g in f)delete f[g].instance;return e}return e=this.generate(this.parse(this.scan(b,c.delimiters),b,c),b,c),this.cache[d]=e}}("undefined"!=typeof exports?exports:Hogan);