(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{gY3p:function(l,n,u){"use strict";u.r(n);var e=u("LoAr"),a=function(){},t=u("C9Ky"),c=u("7tlY"),i=u("WAtv"),o=u("//aV"),b=u("U+go"),r=u("WT9V"),s=u("ChgE"),g=u("fxml"),d=u("bcGG"),m=u("WjFU"),h=u("Gien"),f=u("981U"),U=u("GcYS"),p=u("WV+C"),y=u("0xYh"),x=u("Z5FQ"),T=u("YzpY"),v=u("TeY9"),z=u("9LWm"),k=u("wwR/"),w=u("ResS"),C=u("/q0v"),j=u("fDe+"),G=u("jQpT"),O=u("T/rf"),L=function(){return function(l,n){this._pixabay=l,this.images$=this._pixabay.getImages("camera"),this.code=P,n.ref("lightbox").setConfig({thumbPosition:"bottom"}),n.ref("auto-detect").setConfig({dots:!0})}}(),P={onElements:'<div class="container" gallerize>\n  <img *ngFor="let srcPath of images" src="{{srcPath}}">\n</div>',withSelector:'<div class="container" gallerize selector=".gallery-img">\n  <div *ngFor="let srcPath of images" class="gallery-img" [style.backgroundImage]="\'url(\' + srcPath + \')\'"></div>\n</div>',onGallery:'<gallery gallerize [items]="cameraImages"></gallery>'},F=e.Sa({encapsulation:0,styles:[['@charset "UTF-8";img[_ngcontent-%COMP%]{width:100%}#gallerize-ex[_ngcontent-%COMP%], .row[_ngcontent-%COMP%]{margin:3em 0}#gallerize-ex[_ngcontent-%COMP%]     .g-image-item{cursor:pointer}#gallerize-ex[_ngcontent-%COMP%]     gallery-thumb{padding:0}ul[_ngcontent-%COMP%]{list-style:none}li[_ngcontent-%COMP%]{display:flex;align-items:center}li[_ngcontent-%COMP%]:before{margin-right:10px;content:"\u2022";color:#e91e63;font-size:2em}']],data:{}});function M(l){return e.nb(0,[(l()(),e.Ua(0,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null))],null,function(l,n){l(n,0,0,e.Wa(1,"",n.context.$implicit.data.src,""))})}function _(l){return e.nb(0,[(l()(),e.Ua(0,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null))],null,function(l,n){l(n,0,0,e.Wa(1,"",n.context.$implicit.data.src,""))})}function S(l){return e.nb(0,[(l()(),e.Ua(0,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null))],null,function(l,n){l(n,0,0,e.Wa(1,"",n.context.$implicit.data.src,""))})}function W(l){return e.nb(2,[(l()(),e.Ua(0,0,null,null,109,"ng-scrollbar",[],null,null,null,o.b,o.a)),e.Ta(1,4374528,null,0,b.a,[e.B,e.G,r.d,e.D],null,null),(l()(),e.Ua(2,0,null,0,2,"div",[["class","page-title"]],null,null,null,null,null)),(l()(),e.Ua(3,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),e.lb(-1,null,["Gallerize"])),(l()(),e.Ua(5,0,null,0,102,"div",[["class","page-content"]],null,null,null,null,null)),(l()(),e.Ua(6,0,null,null,38,"section",[],null,null,null,null,null)),(l()(),e.Ua(7,0,null,null,2,"section-title",[],null,null,null,s.b,s.a)),e.Ta(8,49152,null,0,g.a,[],null,null),(l()(),e.lb(-1,0,["Overview"])),(l()(),e.Ua(10,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),e.lb(-1,null,["The "])),(l()(),e.Ua(12,0,null,null,1,"code",[["class","hljs"]],null,null,null,null,null)),(l()(),e.lb(-1,null,["gallerize"])),(l()(),e.lb(-1,null,[" directive is used to create lightbox gallery from image elements or gallery components."])),(l()(),e.Ua(15,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.lb(-1,null,["This directive loads the images in the gallery autmatically, you don't need to load them manually."])),(l()(),e.Ua(17,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),e.Ua(18,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.lb(-1,null,["Gallerize"])),(l()(),e.lb(-1,null,[" has 2 modes:"])),(l()(),e.Ua(21,0,null,null,11,"ul",[],null,null,null,null,null)),(l()(),e.Ua(22,0,null,null,5,"li",[],null,null,null,null,null)),(l()(),e.Ua(23,0,null,null,4,"span",[],null,null,null,null,null)),(l()(),e.lb(-1,null,["If used on "])),(l()(),e.Ua(25,0,null,null,1,"code",[["class","hljs"]],null,null,null,null,null)),(l()(),e.lb(-1,null,["HTMLElement"])),(l()(),e.lb(-1,null,[", it detects the images and hooks their clicks to the lightbox."])),(l()(),e.Ua(28,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),e.Ua(29,0,null,null,3,"span",[],null,null,null,null,null)),(l()(),e.lb(-1,null,["If used on "])),(l()(),e.Ua(31,0,null,null,0,"code",[["class","hljs"]],[[8,"textContent",0]],null,null,null,null)),(l()(),e.lb(-1,null,[", it hooks the images click to the lightbox."])),(l()(),e.Ua(33,0,null,null,11,"note",[["class","info"],["style","margin-top: -1em"]],null,null,null,d.b,d.a)),e.Ta(34,49152,null,0,m.a,[],null,null),(l()(),e.Ua(35,0,null,0,9,"p",[],null,null,null,null,null)),(l()(),e.lb(-1,null,["If you haven't installed and imported the module in step "])),(l()(),e.Ua(37,0,null,null,1,"span",[["class","section-number inline-number"]],null,null,null,null,null)),(l()(),e.lb(-1,null,["1"])),(l()(),e.lb(-1,null,[", see the "])),(l()(),e.Ua(40,0,null,null,4,"a",[["class","inline-button"],["color","accent"],["mat-button",""],["style","padding: 0 0.5em"]],[[1,"target",0],[8,"href",4],[1,"tabindex",0],[1,"disabled",0],[1,"aria-disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,u){var a=!0;return"click"===n&&(a=!1!==e.eb(l,41).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&a),"click"===n&&(a=!1!==e.eb(l,43)._haltDisabledEvents(u)&&a),a},h.c,h.a)),e.Ta(41,671744,null,0,f.q,[f.o,f.a,r.h],{routerLink:[0,"routerLink"]},null),e.fb(42,1),e.Ta(43,180224,null,0,U.a,[p.a,y.e,e.l,[2,x.a]],{color:[0,"color"]},null),(l()(),e.lb(-1,0,["Getting Started Guide"])),(l()(),e.Ua(45,0,null,null,41,"section",[],null,null,null,null,null)),(l()(),e.Ua(46,0,null,null,2,"section-title",[],null,null,null,s.b,s.a)),e.Ta(47,49152,null,0,g.a,[],null,null),(l()(),e.lb(-1,0,["Auto-detect images"])),(l()(),e.Ua(49,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.lb(-1,null,["There are use cases when images are received as HTML format, this directive takes the headache of fetching the src paths for you and connect them automatically to the lightbox."])),(l()(),e.Ua(51,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.lb(-1,null,["Basic example"])),(l()(),e.Ua(53,0,null,null,1,"hl-code",[],null,null,null,T.b,T.a)),e.Ta(54,4243456,null,0,v.a,[e.i],{code:[0,"code"]},null),(l()(),e.Ua(55,0,null,null,16,"div",[["class","row"],["gallerize","auto-detect"]],null,null,null,null,null)),e.Ta(56,212992,null,0,z.a,[e.l,k.a,w.a,e.G,e.D,[8,null]],{gallerize:[0,"gallerize"]},null),(l()(),e.Ua(57,0,null,null,4,"div",[["class","column"]],null,null,null,null,null)),(l()(),e.La(16777216,null,null,3,null,M)),e.Ta(59,278528,null,0,r.j,[e.T,e.Q,e.u],{ngForOf:[0,"ngForOf"]},null),e.gb(131072,r.b,[e.i]),e.gb(0,r.u,[]),(l()(),e.Ua(62,0,null,null,4,"div",[["class","column"]],null,null,null,null,null)),(l()(),e.La(16777216,null,null,3,null,_)),e.Ta(64,278528,null,0,r.j,[e.T,e.Q,e.u],{ngForOf:[0,"ngForOf"]},null),e.gb(131072,r.b,[e.i]),e.gb(0,r.u,[]),(l()(),e.Ua(67,0,null,null,4,"div",[["class","column"]],null,null,null,null,null)),(l()(),e.La(16777216,null,null,3,null,S)),e.Ta(69,278528,null,0,r.j,[e.T,e.Q,e.u],{ngForOf:[0,"ngForOf"]},null),e.gb(131072,r.b,[e.i]),e.gb(0,r.u,[]),(l()(),e.Ua(72,0,null,null,6,"note",[],null,null,null,d.b,d.a)),e.Ta(73,49152,null,0,m.a,[],null,null),(l()(),e.Ua(74,0,null,0,4,"p",[],null,null,null,null,null)),(l()(),e.lb(-1,null,["By default, "])),(l()(),e.Ua(76,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.lb(-1,null,["Gallerize"])),(l()(),e.lb(-1,null,[" will process all img elements, but you can limit that to elements with a specific selector."])),(l()(),e.Ua(79,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.lb(-1,null,["Selector example"])),(l()(),e.Ua(81,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),e.lb(-1,null,["Detect background images of elements with selector "])),(l()(),e.Ua(83,0,null,null,1,"code",[["class","hljs"]],null,null,null,null,null)),(l()(),e.lb(-1,null,[".gallery-img"])),(l()(),e.Ua(85,0,null,null,1,"hl-code",[],null,null,null,T.b,T.a)),e.Ta(86,4243456,null,0,v.a,[e.i],{code:[0,"code"]},null),(l()(),e.Ua(87,0,null,null,20,"section",[],null,null,null,null,null)),(l()(),e.Ua(88,0,null,null,4,"section-title",[],null,null,null,s.b,s.a)),e.Ta(89,49152,null,0,g.a,[],null,null),(l()(),e.lb(-1,0,["Use with "])),(l()(),e.Ua(91,0,null,0,0,"code",[["class","hljs"]],[[8,"textContent",0]],null,null,null,null)),(l()(),e.lb(-1,0,[" Component"])),(l()(),e.Ua(93,0,null,null,6,"p",[],null,null,null,null,null)),(l()(),e.lb(-1,null,["Gallerize is also compatible with the "])),(l()(),e.Ua(95,0,null,null,0,"code",[["class","hljs"]],[[8,"textContent",0]],null,null,null,null)),(l()(),e.lb(-1,null,[" component, if you want to trigger the lightbox on a gallery item's click, just add "])),(l()(),e.Ua(97,0,null,null,1,"code",[["class","hljs"]],null,null,null,null,null)),(l()(),e.lb(-1,null,["gallerize"])),(l()(),e.lb(-1,null,[" on your gallery component. "])),(l()(),e.Ua(100,0,null,null,3,"gallery",[["gallerize",""],["id","gallerize-ex"]],null,null,null,C.b,C.a)),e.Ta(101,770048,null,0,k.b,[k.a],{id:[0,"id"],items:[1,"items"]},null),e.gb(131072,r.b,[e.i]),e.Ta(103,212992,null,0,z.a,[e.l,k.a,w.a,e.G,e.D,[6,k.b]],{gallerize:[0,"gallerize"]},null),(l()(),e.Ua(104,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.lb(-1,null,["Code"])),(l()(),e.Ua(106,0,null,null,1,"hl-code",[],null,null,null,T.b,T.a)),e.Ta(107,4243456,null,0,v.a,[e.i],{code:[0,"code"]},null),(l()(),e.Ua(108,0,null,0,1,"footer",[],null,null,null,j.b,j.a)),e.Ta(109,49152,null,0,G.a,[],null,null)],function(l,n){var u=n.component;l(n,41,0,l(n,42,0,"/getting-started/gallery")),l(n,43,0,"accent"),l(n,54,0,u.code.onElements),l(n,56,0,"auto-detect"),l(n,59,0,e.mb(n,59,0,e.eb(n,61).transform(e.mb(n,59,0,e.eb(n,60).transform(u.images$)),0,3))),l(n,64,0,e.mb(n,64,0,e.eb(n,66).transform(e.mb(n,64,0,e.eb(n,65).transform(u.images$)),3,6))),l(n,69,0,e.mb(n,69,0,e.eb(n,71).transform(e.mb(n,69,0,e.eb(n,70).transform(u.images$)),6,9))),l(n,86,0,u.code.withSelector),l(n,101,0,"gallerize-ex",e.mb(n,101,1,e.eb(n,102).transform(u.images$))),l(n,103,0,""),l(n,107,0,u.code.onGallery)},function(l,n){l(n,31,0,"<gallery>"),l(n,40,0,e.eb(n,41).target,e.eb(n,41).href,e.eb(n,43).disabled?-1:e.eb(n,43).tabIndex||0,e.eb(n,43).disabled||null,e.eb(n,43).disabled.toString(),"NoopAnimations"===e.eb(n,43)._animationMode),l(n,91,0,"<gallery>"),l(n,95,0,"<gallery>")})}var D=e.Qa("gallerize-example",L,function(l){return e.nb(0,[(l()(),e.Ua(0,0,null,null,1,"gallerize-example",[],null,null,null,W,F)),e.Ta(1,49152,null,0,L,[O.a,k.a],null,null)],null,null)},{},{},[]),I=u("y7gG"),K=u("LYzL"),Y=u("eXL1"),$=u("C7Lb"),E=u("s8WJ"),V=u("SPdK"),Q=u("+3V+"),A=u("Ho7M"),B=u("dgjn"),N=u("/hyk"),R=u("rXXt"),q=u("abkR"),H=u("IvSS"),J=u("V3Ng"),X=u("a198"),Z=u("w9fW"),ll=u("vvyD"),nl=u("AFqu"),ul=u("UelK"),el=u("WgBV"),al=u("LxDK"),tl=u("V7OE"),cl=u("FOLC"),il=u("PCNd"),ol=u("rh80");u.d(n,"GallerizeExampleModuleNgFactory",function(){return bl});var bl=e.Ra(a,[],function(l){return e.bb([e.cb(512,e.k,e.Ga,[[8,[t.a,c.a,i.a,D]],[3,e.k],e.z]),e.cb(4608,r.m,r.l,[e.w,[2,r.z]]),e.cb(4608,I.c,I.c,[]),e.cb(4608,K.b,K.b,[]),e.cb(4608,Y.c,Y.c,[Y.i,Y.e,e.k,Y.h,Y.f,e.s,e.B,r.d,$.b]),e.cb(5120,Y.j,Y.k,[Y.c]),e.cb(5120,E.c,E.d,[Y.c]),e.cb(4608,E.e,E.e,[Y.c,e.s,[2,r.g],[2,E.b],E.c,[3,E.e],Y.e]),e.cb(4608,V.j,V.i,[V.d,V.g]),e.cb(5120,e.b,function(l,n){return[V.m(l,n)]},[r.d,e.D]),e.cb(1073742336,r.c,r.c,[]),e.cb(1073742336,f.r,f.r,[[2,f.x],[2,f.o]]),e.cb(1073742336,I.d,I.d,[]),e.cb(1073742336,p.b,p.b,[]),e.cb(1073742336,Q.c,Q.c,[]),e.cb(1073742336,A.d,A.d,[]),e.cb(1073742336,B.b,B.b,[]),e.cb(1073742336,$.a,$.a,[]),e.cb(1073742336,K.j,K.j,[[2,K.c]]),e.cb(1073742336,N.b,N.b,[]),e.cb(1073742336,K.s,K.s,[]),e.cb(1073742336,U.c,U.c,[]),e.cb(1073742336,R.b,R.b,[]),e.cb(1073742336,q.g,q.g,[]),e.cb(1073742336,H.b,H.b,[]),e.cb(1073742336,Y.g,Y.g,[]),e.cb(1073742336,E.j,E.j,[]),e.cb(1073742336,J.h,J.h,[]),e.cb(1073742336,X.b,X.b,[]),e.cb(1073742336,y.a,y.a,[]),e.cb(1073742336,Z.j,Z.j,[]),e.cb(1073742336,ll.a,ll.a,[]),e.cb(1073742336,nl.c,nl.c,[]),e.cb(1073742336,V.e,V.e,[]),e.cb(1073742336,ul.b,ul.b,[]),e.cb(1073742336,el.a,el.a,[]),e.cb(1073742336,al.a,al.a,[]),e.cb(1073742336,tl.a,tl.a,[[2,V.k],e.D]),e.cb(1073742336,k.d,k.d,[]),e.cb(1073742336,w.c,w.c,[]),e.cb(1073742336,z.b,z.b,[]),e.cb(1073742336,b.b,b.b,[]),e.cb(1073742336,cl.f,cl.f,[]),e.cb(1073742336,il.a,il.a,[]),e.cb(1073742336,a,a,[]),e.cb(256,X.a,{separatorKeyCodes:[ol.f]},[]),e.cb(1024,f.m,function(){return[[{path:"",component:L}]]},[])])})}}]);