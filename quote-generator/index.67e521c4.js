var t,e,r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o=function(t){return t&&t.Math==Math&&t};n=o("object"==typeof globalThis&&globalThis)||o("object"==typeof window&&window)||o("object"==typeof self&&self)||o("object"==typeof r&&r)||function(){return this}()||Function("return this")();var a,i;a=!(i=function(t){try{return!!t()}catch(t){return!0}})((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}));var u,s={};u=!i((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}));var l,h=Function.prototype.call;s=u?h.bind(h):function(){return h.apply(h,arguments)};var c={}.propertyIsEnumerable,f=Object.getOwnPropertyDescriptor,p=f&&!c.call({1:2},1);l=p?function(t){var e=f(this,t);return!!e&&e.enumerable}:c;var d;d=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}};var y,v,g={},m={},w=Function.prototype,b=w.bind,x=w.call,S=u&&b.bind(x,x),k=(m=u?function(t){return t&&S(t)}:function(t){return t&&function(){return x.apply(t,arguments)}})({}.toString),E=m("".slice);v=function(t){return E(k(t),8,-1)};var O=Object,L=m("".split);g=i((function(){return!O("z").propertyIsEnumerable(0)}))?function(t){return"String"==v(t)?L(t,""):O(t)}:O;var j,T=TypeError;j=function(t){if(null==t)throw T("Can't call method on "+t);return t},y=function(t){return g(j(t))};var P,B,I,W;W=function(t){return"function"==typeof t},I=function(t){return"object"==typeof t?null!==t:W(t)};var A,C={},N=function(t){return W(t)?t:void 0};A=function(t,e){return arguments.length<2?N(n[t]):n[t]&&n[t][e]};var F={};F=m({}.isPrototypeOf);var _,G,D,M={};M=A("navigator","userAgent")||"";var R,H,Y=n.process,z=n.Deno,q=Y&&Y.versions||z&&z.version,J=q&&q.v8;J&&(H=(R=J.split("."))[0]>0&&R[0]<4?1:+(R[0]+R[1])),!H&&M&&(!(R=M.match(/Edge\/(\d+)/))||R[1]>=74)&&(R=M.match(/Chrome\/(\d+)/))&&(H=+R[1]),D=H,G=!!Object.getOwnPropertySymbols&&!i((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&D&&D<41})),_=G&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var K=Object;C=_?function(t){return"symbol"==typeof t}:function(t){var e=A("Symbol");return W(e)&&F(e.prototype,K(t))};var V,U,$,X=String;$=function(t){try{return X(t)}catch(t){return"Object"}};var Z=TypeError;U=function(t){if(W(t))return t;throw Z($(t)+" is not a function")},V=function(t,e){var r=t[e];return null==r?void 0:U(r)};var Q,tt=TypeError;Q=function(t,e){var r,n;if("string"===e&&W(r=t.toString)&&!I(n=s(r,t)))return n;if(W(r=t.valueOf)&&!I(n=s(r,t)))return n;if("string"!==e&&W(r=t.toString)&&!I(n=s(r,t)))return n;throw tt("Can't convert object to primitive value")};var et,rt;var nt,ot={},at=Object.defineProperty;nt=function(t,e){try{at(n,t,{value:e,configurable:!0,writable:!0})}catch(r){n[t]=e}return e};var it=n["__core-js_shared__"]||nt("__core-js_shared__",{});ot=it,(rt=function(t,e){return ot[t]||(ot[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.23.2",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.23.2/LICENSE",source:"https://github.com/zloirock/core-js"});var ut,st={},lt=Object;ut=function(t){return lt(j(t))};var ht=m({}.hasOwnProperty);st=Object.hasOwn||function(t,e){return ht(ut(t),e)};var ct,ft=0,pt=Math.random(),dt=m(1..toString);ct=function(t){return"Symbol("+(void 0===t?"":t)+")_"+dt(++ft+pt,36)};var yt=rt("wks"),vt=n.Symbol,gt=vt&&vt.for,mt=_?vt:vt&&vt.withoutSetter||ct;et=function(t){if(!st(yt,t)||!G&&"string"!=typeof yt[t]){var e="Symbol."+t;G&&st(vt,t)?yt[t]=vt[t]:yt[t]=_&&gt?gt(e):mt(e)}return yt[t]};var wt=TypeError,bt=et("toPrimitive");B=function(t,e){if(!I(t)||C(t))return t;var r,n=V(t,bt);if(n){if(void 0===e&&(e="default"),r=s(n,t,e),!I(r)||C(r))return r;throw wt("Can't convert object to primitive value")}return void 0===e&&(e="number"),Q(t,e)},P=function(t){var e=B(t,"string");return C(e)?e:e+""};var xt,St,kt=n.document,Et=I(kt)&&I(kt.createElement);St=function(t){return Et?kt.createElement(t):{}},xt=!a&&!i((function(){return 7!=Object.defineProperty(St("div"),"a",{get:function(){return 7}}).a}));var Ot,Lt,jt=Object.getOwnPropertyDescriptor,Tt=e=a?jt:function(t,e){if(t=y(t),e=P(e),xt)try{return jt(t,e)}catch(t){}if(st(t,e))return d(!s(l,t,e),t[e])},Pt={};Lt=a&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}));var Bt,It=String,Wt=TypeError;Bt=function(t){if(I(t))return t;throw Wt(It(t)+" is not an object")};var At=TypeError,Ct=Object.defineProperty,Nt=Object.getOwnPropertyDescriptor;Ot=a?Lt?function(t,e,r){if(Bt(t),e=P(e),Bt(r),"function"==typeof t&&"prototype"===e&&"value"in r&&"writable"in r&&!r.writable){var n=Nt(t,e);n&&n.writable&&(t[e]=r.value,r={configurable:"configurable"in r?r.configurable:n.configurable,enumerable:"enumerable"in r?r.enumerable:n.enumerable,writable:!1})}return Ct(t,e,r)}:Ct:function(t,e,r){if(Bt(t),e=P(e),Bt(r),xt)try{return Ct(t,e,r)}catch(t){}if("get"in r||"set"in r)throw At("Accessors not supported");return"value"in r&&(t[e]=r.value),t},Pt=a?function(t,e,r){return Ot(t,e,d(1,r))}:function(t,e,r){return t[e]=r,t};var Ft,_t,Gt=Function.prototype,Dt=a&&Object.getOwnPropertyDescriptor,Mt=st(Gt,"name"),Rt={EXISTS:Mt,PROPER:Mt&&"something"===function(){}.name,CONFIGURABLE:Mt&&(!a||a&&Dt(Gt,"name").configurable)}.CONFIGURABLE,Ht={},Yt=m(Function.toString);W(ot.inspectSource)||(ot.inspectSource=function(t){return Yt(t)}),Ht=ot.inspectSource;var zt,qt,Jt=n.WeakMap;qt=W(Jt)&&/native code/.test(Ht(Jt));var Kt,Vt=rt("keys");Kt=function(t){return Vt[t]||(Vt[t]=ct(t))};var Ut={};Ut={};var $t,Xt,Zt,Qt=n.TypeError,te=n.WeakMap;if(qt||ot.state){var ee=ot.state||(ot.state=new te),re=m(ee.get),ne=m(ee.has),oe=m(ee.set);$t=function(t,e){if(ne(ee,t))throw new Qt("Object already initialized");return e.facade=t,oe(ee,t,e),e},Xt=function(t){return re(ee,t)||{}},Zt=function(t){return ne(ee,t)}}else{var ae=Kt("state");Ut[ae]=!0,$t=function(t,e){if(st(t,ae))throw new Qt("Object already initialized");return e.facade=t,Pt(t,ae,e),e},Xt=function(t){return st(t,ae)?t[ae]:{}},Zt=function(t){return st(t,ae)}}var ie=(zt={set:$t,get:Xt,has:Zt,enforce:function(t){return Zt(t)?Xt(t):$t(t,{})},getterFor:function(t){return function(e){var r;if(!I(e)||(r=Xt(e)).type!==t)throw Qt("Incompatible receiver, "+t+" required");return r}}}).enforce,ue=zt.get,se=Object.defineProperty,le=a&&!i((function(){return 8!==se((function(){}),"length",{value:8}).length})),he=String(String).split("String"),ce=_t=function(t,e,r){"Symbol("===String(e).slice(0,7)&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(e="get "+e),r&&r.setter&&(e="set "+e),(!st(t,"name")||Rt&&t.name!==e)&&se(t,"name",{value:e,configurable:!0}),le&&r&&st(r,"arity")&&t.length!==r.arity&&se(t,"length",{value:r.arity});try{r&&st(r,"constructor")&&r.constructor?a&&se(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var n=ie(t);return st(n,"source")||(n.source=he.join("string"==typeof e?e:"")),t};Function.prototype.toString=ce((function(){return W(this)&&ue(this).source||Ht(this)}),"toString"),Ft=function(t,e,r,n){n||(n={});var o=n.enumerable,a=void 0!==n.name?n.name:e;return W(r)&&_t(r,a,n),n.global?o?t[e]=r:nt(e,r):(n.unsafe?t[e]&&(o=!0):delete t[e],o?t[e]=r:Ot(t,e,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})),t};var fe,pe,de,ye,ve,ge,me={},we={},be=Math.ceil,xe=Math.floor;we=Math.trunc||function(t){var e=+t;return(e>0?xe:be)(e)},ge=function(t){var e=+t;return e!=e||0===e?0:we(e)};var Se=Math.max,ke=Math.min;ve=function(t,e){var r=ge(t);return r<0?Se(r+e,0):ke(r,e)};var Ee,Oe,Le=Math.min;Oe=function(t){return t>0?Le(ge(t),9007199254740991):0},Ee=function(t){return Oe(t.length)};var je=function(t){return function(e,r,n){var o,a=y(e),i=Ee(a),u=ve(n,i);if(t&&r!=r){for(;i>u;)if((o=a[u++])!=o)return!0}else for(;i>u;u++)if((t||u in a)&&a[u]===r)return t||u||0;return!t&&-1}},Te=(ye={includes:je(!0),indexOf:je(!1)}).indexOf,Pe=m([].push);de=function(t,e){var r,n=y(t),o=0,a=[];for(r in n)!st(Ut,r)&&st(n,r)&&Pe(a,r);for(;e.length>o;)st(n,r=e[o++])&&(~Te(a,r)||Pe(a,r));return a};var Be,Ie={},We=(Ie=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]).concat("length","prototype");pe=Object.getOwnPropertyNames||function(t){return de(t,We)},Be=Object.getOwnPropertySymbols;var Ae=m([].concat);me=A("Reflect","ownKeys")||function(t){var e=pe(Bt(t));return Be?Ae(e,Be(t)):e},fe=function(t,r,n){for(var o=me(r),a=Ot,i=e,u=0;u<o.length;u++){var s=o[u];st(t,s)||n&&st(n,s)||a(t,s,i(r,s))}};var Ce={},Ne=/#|\.prototype\./,Fe=function(t,e){var r=Ge[_e(t)];return r==Me||r!=De&&(W(e)?i(e):!!e)},_e=Fe.normalize=function(t){return String(t).replace(Ne,".").toLowerCase()},Ge=Fe.data={},De=Fe.NATIVE="N",Me=Fe.POLYFILL="P";Ce=Fe,t=function(t,e){var r,o,a,i,u,s=t.target,l=t.global,h=t.stat;if(r=l?n:h?n[s]||nt(s,{}):(n[s]||{}).prototype)for(o in e){if(i=e[o],a=t.dontCallGetSet?(u=Tt(r,o))&&u.value:r[o],!Ce(l?o:s+(h?".":"#")+o,t.forced)&&void 0!==a){if(typeof i==typeof a)continue;fe(i,a)}(t.sham||a&&a.sham)&&Pt(i,"sham",!0),Ft(r,o,i,t)}};var Re,He,Ye=ye.includes,ze={},qe={};qe=Object.keys||function(t){return de(t,Ie)},He=a&&!Lt?Object.defineProperties:function(t,e){Bt(t);for(var r,n=y(e),o=qe(e),a=o.length,i=0;a>i;)Ot(t,r=o[i++],n[r]);return t};var Je={};Je=A("document","documentElement");var Ke,Ve=Kt("IE_PROTO"),Ue=function(){},$e=function(t){return"<script>"+t+"<\/script>"},Xe=function(t){t.write($e("")),t.close();var e=t.parentWindow.Object;return t=null,e},Ze=function(){try{Ke=new ActiveXObject("htmlfile")}catch(t){}var t,e;Ze="undefined"!=typeof document?document.domain&&Ke?Xe(Ke):((e=St("iframe")).style.display="none",Je.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write($e("document.F=Object")),t.close(),t.F):Xe(Ke);for(var r=Ie.length;r--;)delete Ze.prototype[Ie[r]];return Ze()};Ut[Ve]=!0,ze=Object.create||function(t,e){var r;return null!==t?(Ue.prototype=Bt(t),r=new Ue,Ue.prototype=null,r[Ve]=t):r=Ze(),void 0===e?r:He(r,e)};var Qe=Ot,tr=et("unscopables"),er=Array.prototype;null==er[tr]&&Qe(er,tr,{configurable:!0,value:ze(null)}),Re=function(t){er[tr][t]=!0},t({target:"Array",proto:!0,forced:i((function(){return!Array(1).includes()}))},{includes:function(t){return Ye(this,t,arguments.length>1?arguments[1]:void 0)}}),Re("includes");var rr,nr={},or=Function.prototype,ar=or.apply,ir=or.call;nr="object"==typeof Reflect&&Reflect.apply||(u?ir.bind(ar):function(){return ir.apply(ar,arguments)});var ur,sr=m(m.bind);ur=function(t,e){return U(t),void 0===e?t:u?sr(t,e):function(){return t.apply(e,arguments)}};var lr={};lr=m([].slice);var hr,cr=TypeError;hr=function(t,e){if(t<e)throw cr("Not enough arguments");return t};var fr;fr=/(?:ipad|iphone|ipod).*applewebkit/i.test(M);var pr;pr="process"==v(n.process);var dr,yr,vr,gr,mr=n.setImmediate,wr=n.clearImmediate,br=n.process,xr=n.Dispatch,Sr=n.Function,kr=n.MessageChannel,Er=n.String,Or=0,Lr={};try{dr=n.location}catch(t){}var jr=function(t){if(st(Lr,t)){var e=Lr[t];delete Lr[t],e()}},Tr=function(t){return function(){jr(t)}},Pr=function(t){jr(t.data)},Br=function(t){n.postMessage(Er(t),dr.protocol+"//"+dr.host)};mr&&wr||(mr=function(t){hr(arguments.length,1);var e=W(t)?t:Sr(t),r=lr(arguments,1);return Lr[++Or]=function(){nr(e,void 0,r)},yr(Or),Or},wr=function(t){delete Lr[t]},pr?yr=function(t){br.nextTick(Tr(t))}:xr&&xr.now?yr=function(t){xr.now(Tr(t))}:kr&&!fr?(gr=(vr=new kr).port2,vr.port1.onmessage=Pr,yr=ur(gr.postMessage,gr)):n.addEventListener&&W(n.postMessage)&&!n.importScripts&&dr&&"file:"!==dr.protocol&&!i(Br)?(yr=Br,n.addEventListener("message",Pr,!1)):yr="onreadystatechange"in St("script")?function(t){Je.appendChild(St("script")).onreadystatechange=function(){Je.removeChild(this),jr(t)}}:function(t){setTimeout(Tr(t),0)});var Ir=(rr={set:mr,clear:wr}).clear;t({global:!0,bind:!0,enumerable:!0,forced:n.clearImmediate!==Ir},{clearImmediate:Ir});var Wr=rr.set;t({global:!0,bind:!0,enumerable:!0,forced:n.setImmediate!==Wr},{setImmediate:Wr});var Ar=[{text:"Genius is one percent inspiration and ninety-nine percent perspiration.",author:"Thomas Edison"},{text:"You can observe a lot just by watching.",author:"Yogi Berra"},{text:"A house divided against itself cannot stand.",author:"Abraham Lincoln"},{text:"Difficulties increase the nearer we get to the goal.",author:"Johann Wolfgang von Goethe"},{text:"Fate is in your hands and no one elses",author:"Byron Pulsifer"},{text:"Be the chief but never the lord.",author:"Lao Tzu"},{text:"Nothing happens unless first we dream.",author:"Carl Sandburg"},{text:"Well begun is half done.",author:"Aristotle"},{text:"Life is a learning experience, only if you learn.",author:"Yogi Berra"},{text:"Self-complacency is fatal to progress.",author:"Margaret Sangster"},{text:"Peace comes from within. Do not seek it without.",author:"Buddha"},{text:"What you give is what you get.",author:"Byron Pulsifer"},{text:"We can only learn to love by loving.",author:"Iris Murdoch"},{text:"Life is change. Growth is optional. Choose wisely.",author:"Karen Clark"},{text:"You'll see it when you believe it.",author:"Wayne Dyer"},{text:"Today is the tomorrow we worried about yesterday.",author:null},{text:"It's easier to see the mistakes on someone else's paper.",author:null},{text:"Every man dies. Not every man really lives.",author:null},{text:"To lead people walk behind them.",author:"Lao Tzu"},{text:"Having nothing, nothing can he lose.",author:"William Shakespeare"},{text:"Trouble is only opportunity in work clothes.",author:"Henry J. Kaiser"},{text:"A rolling stone gathers no moss.",author:"Publilius Syrus"},{text:"Ideas are the beginning points of all fortunes.",author:"Napoleon Hill"},{text:"Everything in life is luck.",author:"Donald Trump"},{text:"Doing nothing is better than being busy doing nothing.",author:"Lao Tzu"},{text:"Trust yourself. You know more than you think you do.",author:"Benjamin Spock"},{text:"Study the past, if you would divine the future.",author:"Confucius"},{text:"The day is already blessed, find peace within it.",author:null},{text:"From error to error one discovers the entire truth.",author:"Sigmund Freud"},{text:"Well done is better than well said.",author:"Benjamin Franklin"},{text:"Bite off more than you can chew, then chew it.",author:"Ella Williams"},{text:"Work out your own salvation. Do not depend on others.",author:"Buddha"},{text:"One today is worth two tomorrows.",author:"Benjamin Franklin"},{text:"Once you choose hope, anythings possible.",author:"Christopher Reeve"},{text:"God always takes the simplest way.",author:"Albert Einstein"},{text:"One fails forward toward success.",author:"Charles Kettering"},{text:"From small beginnings come great things.",author:null},{text:"Learning is a treasure that will follow its owner everywhere",author:"Chinese proverb"},{text:"Be as you wish to seem.",author:"Socrates"},{text:"The world is always in movement.",author:"V. Naipaul"},{text:"Never mistake activity for achievement.",author:"John Wooden"},{text:"What worries you masters you.",author:"Haddon Robinson"},{text:"One faces the future with ones past.",author:"Pearl Buck"},{text:"Goals are the fuel in the furnace of achievement.",author:"Brian Tracy"},{text:"Who sows virtue reaps honour.",author:"Leonardo da Vinci"},{text:"Be kind whenever possible. It is always possible.",author:"Dalai Lama"},{text:"Talk doesn't cook rice.",author:"Chinese proverb"},{text:"He is able who thinks he is able.",author:"Buddha"},{text:"A goal without a plan is just a wish.",author:"Larry Elder"},{text:"To succeed, we must first believe that we can.",author:"Michael Korda"},{text:"Learn from yesterday, live for today, hope for tomorrow.",author:"Albert Einstein"},{text:"A weed is no more than a flower in disguise.",author:"James Lowell"},{text:"Do, or do not. There is no try.",author:"Yoda"},{text:"All serious daring starts from within.",author:"Harriet Beecher Stowe"},{text:"The best teacher is experience learned from failures.",author:"Byron Pulsifer"},{text:"Think how hard physics would be if particles could think.",author:"Murray Gell-Mann"},{text:"Love is the flower you've got to let grow.",author:"John Lennon"},{text:"Don't wait. The time will never be just right.",author:"Napoleon Hill"},{text:"Time is the wisest counsellor of all.",author:"Pericles"},{text:"You give before you get.",author:"Napoleon Hill"},{text:"Wisdom begins in wonder.",author:"Socrates"},{text:"Without courage, wisdom bears no fruit.",author:"Baltasar Gracian"},{text:"Change in all things is sweet.",author:"Aristotle"},{text:"What you fear is that which requires action to overcome.",author:"Byron Pulsifer"},{text:"When performance exceeds ambition, the overlap is called success.",author:"Cullen Hightower"},{text:"When deeds speak, words are nothing.",author:"African proverb"},{text:"Real magic in relationships means an absence of judgement of others.",author:"Wayne Dyer"},{text:"I never think of the future. It comes soon enough.",author:"Albert Einstein"},{text:"Skill to do comes of doing.",author:"Ralph Emerson"},{text:"Wisdom is the supreme part of happiness.",author:"Sophocles"},{text:"I believe that every person is born with talent.",author:"Maya Angelou"},{text:"Important principles may, and must, be inflexible.",author:"Abraham Lincoln"},{text:"The undertaking of a new action brings new strength.",author:"Richard Evans"},{text:"The years teach much which the days never know.",author:"Ralph Emerson"},{text:"Our distrust is very expensive.",author:"Ralph Emerson"},{text:"All know the way; few actually walk it.",author:"Bodhidharma"},{text:"Great talent finds happiness in execution.",author:"Johann Wolfgang von Goethe"},{text:"Faith in oneself is the best and safest course.",author:"Michelangelo"},{text:"Courage is going from failure to failure without losing enthusiasm.",author:"Winston Churchill"},{text:"The two most powerful warriors are patience and time.",author:"Leo Tolstoy"},{text:"Anticipate the difficult by managing the easy.",author:"Lao Tzu"},{text:"Those who are free of resentful thoughts surely find peace.",author:"Buddha"},{text:"A short saying often contains much wisdom.",author:"Sophocles"},{text:"It takes both sunshine and rain to make a rainbow.",author:null},{text:"A beautiful thing is never perfect.",author:null},{text:"Only do what your heart tells you.",author:"Princess Diana"},{text:"Life is movement-we breathe, we eat, we walk, we move!",author:"John Pierrakos"},{text:"No one can make you feel inferior without your consent.",author:"Eleanor Roosevelt"},{text:"Argue for your limitations, and sure enough theyre yours.",author:"Richard Bach"},{text:"Luck is what happens when preparation meets opportunity.",author:"Seneca"},{text:"Victory belongs to the most persevering.",author:"Napoleon Bonaparte"},{text:"Love all, trust a few, do wrong to none.",author:"William Shakespeare"},{text:"In order to win, you must expect to win.",author:"Richard Bach"},{text:"A goal is a dream with a deadline.",author:"Napoleon Hill"},{text:"You can do it if you believe you can!",author:"Napoleon Hill"},{text:"Set your goals high, and don't stop till you get there.",author:"Bo Jackson"},{text:"Every new day is another chance to change your life.",author:null},{text:"Smile, breathe, and go slowly.",author:"Thich Nhat Hanh"},{text:"Nobody will believe in you unless you believe in yourself.",author:"Liberace"},{text:"Do more than dream: work.",author:"William Arthur Ward"},{text:"No man was ever wise by chance.",author:"Seneca"},{text:"Some pursue happiness, others create it.",author:null},{text:"He that is giddy thinks the world turns round.",author:"William Shakespeare"},{text:"Don't ruin the present with the ruined past.",author:"Ellen Gilchrist"},{text:"Do something wonderful, people may imitate it.",author:"Albert Schweitzer"},{text:"We do what we do because we believe.",author:null},{text:"Do one thing every day that scares you.",author:"Eleanor Roosevelt"},{text:"If you cannot be silent be brilliant and thoughtful.",author:"Byron Pulsifer"},{text:"Who looks outside, dreams; who looks inside, awakes.",author:"Carl Jung"},{text:"What we think, we become.",author:"Buddha"},{text:"The shortest answer is doing.",author:"Lord Herbert"},{text:"All our knowledge has its origins in our perceptions.",author:"Leonardo da Vinci"},{text:"The harder you fall, the higher you bounce.",author:null},{text:"Trusting our intuition often saves us from disaster.",author:"Anne Wilson Schaef"},{text:"Truth is powerful and it prevails.",author:"Sojourner Truth"},{text:"Light tomorrow with today!",author:"Elizabeth Browning"},{text:"Silence is a fence around wisdom.",author:"German proverb"},{text:"Society develops wit, but its contemplation alone forms genius.",author:"Madame de Stael"},{text:"The simplest things are often the truest.",author:"Richard Bach"},{text:"Everyone smiles in the same language.",author:null},{text:"Yesterday I dared to struggle. Today I dare to win.",author:"Bernadette Devlin"},{text:"No alibi will save you from accepting the responsibility.",author:"Napoleon Hill"},{text:"If you can dream it, you can do it.",author:"Walt Disney"},{text:"It is better to travel well than to arrive.",author:"Buddha"},{text:"Life shrinks or expands in proportion to one's courage.",author:"Anais Nin"},{text:"You have to believe in yourself.",author:"Sun Tzu"},{text:"Our intention creates our reality.",author:"Wayne Dyer"},{text:"Silence is a true friend who never betrays.",author:"Confucius"},{text:"Character develops itself in the stream of life.",author:"Johann Wolfgang von Goethe"},{text:"From little acorns mighty oaks do grow.",author:"American proverb"},{text:"You can't stop the waves, but you can learn to surf.",author:"Jon Kabat-Zinn"},{text:"Reality does not conform to the ideal, but confirms it.",author:"Gustave Flaubert"},{text:"Speak low, if you speak love.",author:"William Shakespeare"},{text:"A really great talent finds its happiness in execution.",author:"Johann Wolfgang von Goethe"},{text:"Reality leaves a lot to the imagination.",author:"John Lennon"},{text:"The greatest remedy for anger is delay.",author:"Seneca"},{text:"Growth itself contains the germ of happiness.",author:"Pearl Buck"},{text:"You can do what's reasonable or you can decide what's possible.",author:null}],Cr=function(t){var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),i=new T(n||[]);return a._invoke=function(t,e,r){var n=c;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return B()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var u=O(i,r);if(u){if(u===y)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===c)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var s=h(t,e,r);if("normal"===s.type){if(n=r.done?d:f,s.arg===y)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=d,r.method="throw",r.arg=s.arg)}}}(t,r,i),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var c="suspendedStart",f="suspendedYield",p="executing",d="completed",y={};function v(){}function g(){}function m(){}var w={};s(w,a,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(P([])));x&&x!==r&&n.call(x,a)&&(w=x);var S=m.prototype=v.prototype=Object.create(w);function k(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(o,a,i,u){var s=h(t[o],t,a);if("throw"!==s.type){var l=s.arg,c=l.value;return c&&"object"==typeof c&&n.call(c,"__await")?e.resolve(c.__await).then((function(t){r("next",t,i,u)}),(function(t){r("throw",t,i,u)})):e.resolve(c).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,u)}))}u(s.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function O(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,O(t,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=h(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function P(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:B}}function B(){return{value:e,done:!0}}return g.prototype=m,s(S,"constructor",m),s(m,"constructor",g),g.displayName=s(m,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,u,"GeneratorFunction")),t.prototype=Object.create(S),t},t.awrap=function(t){return{__await:t}},k(E.prototype),s(E.prototype,i,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new E(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},k(S),s(S,u,"Generator"),s(S,a,(function(){return this})),s(S,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=P,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],u=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(s&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:P(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}({});try{regeneratorRuntime=Cr}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=Cr:Function("r","regeneratorRuntime = r")(Cr)}const Nr={quotes:[]},Fr=document.getElementById("quote-container"),_r=document.getElementById("quote"),Gr=document.getElementById("author"),Dr=document.getElementById("twitter"),Mr=document.getElementById("new-quote"),Rr=document.getElementById("loader"),Hr=()=>{Rr.hidden^=1,Fr.hidden^=1},Yr=()=>{Hr();const t=Math.floor(Math.random()*Nr.quotes.length),e=Nr.quotes[t];e.text.length>120?_r.classList.add("long-quote"):_r.classList.remove("long-quote"),_r.textContent=e.text,Gr.textContent=e.author??"Unknown",Hr()};(async()=>{Rr.hidden=!0,Fr.hidden=!1,await(async()=>{try{Hr();const t=await fetch("https://type.fit/api/quotes"),e=await t.json();Nr.quotes=e}catch(t){Nr.quotes=Ar}finally{Hr()}})(),Yr(),Dr.addEventListener("click",(()=>{window.open(`https://twitter.com/intent/tweet?text=${_r.textContent} - ${Gr.textContent}`,"_blank")})),Mr.addEventListener("click",Yr)})();
//# sourceMappingURL=index.67e521c4.js.map