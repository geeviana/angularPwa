(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"/cdV":function(l,n,e){"use strict";e.r(n);var u=e("CcnG"),t=function(){},o=e("pMnS"),a=e("A7o+"),r=e("lwpf"),d=e("ebCm"),i=e("ZYCi"),s=e("Ip0R"),c=function(){function l(l,n){var e=this;this.translate=l,this.router=n,this.pushRightClass="push-right",this.translate.addLangs(["en","fr","ur","es","it","fa","de","zh-CHS","pt-br"]),this.translate.setDefaultLang("en");var u=this.translate.getBrowserLang();this.translate.use(u.match(/en|fr|ur|es|it|fa|de|zh-CHS|pt-br/)?u:"en"),this.router.events.subscribe(function(l){l instanceof i.d&&window.innerWidth<=992&&e.isToggled()&&e.toggleSidebar()})}return l.prototype.ngOnInit=function(){},l.prototype.isToggled=function(){return document.querySelector("body").classList.contains(this.pushRightClass)},l.prototype.toggleSidebar=function(){document.querySelector("body").classList.toggle(this.pushRightClass)},l.prototype.rltAndLtr=function(){document.querySelector("body").classList.toggle("rtl")},l.prototype.onLoggedout=function(){localStorage.removeItem("isLoggedin")},l.prototype.changeLang=function(l){this.translate.use(l)},l}(),p=u["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]{background-color:#222}[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]{color:#fff}[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{color:#999}[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover{color:#fff}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]{width:300px}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]{border-bottom:1px solid #ddd;padding:5px 10px}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]:last-child{border-bottom:none}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:13px;font-weight:600}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%]{margin:0}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   .last[_ngcontent-%COMP%]{font-size:12px;margin:0}"]],data:{}});function g(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,130,"nav",[["class","navbar navbar-expand-lg fixed-top"]],null,null,null,null,null)),(l()(),u["\u0275eld"](1,0,null,null,1,"a",[["class","navbar-brand"],["href","#"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Apresenta\xe7\xe3o de Angular - Pwa Geraldo Viana"])),(l()(),u["\u0275eld"](3,0,null,null,1,"button",[["class","navbar-toggler"],["type","button"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.toggleSidebar()&&u),u},null,null)),(l()(),u["\u0275eld"](4,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-bars text-muted"]],null,null,null,null,null)),(l()(),u["\u0275eld"](5,0,null,null,125,"div",[["class","collapse navbar-collapse"]],null,null,null,null,null)),(l()(),u["\u0275eld"](6,0,null,null,2,"form",[["class","form-inline my-2 my-lg-0"]],null,null,null,null,null)),(l()(),u["\u0275eld"](7,0,null,null,1,"input",[["class","form-control mr-sm-2"],["type","text"]],[[8,"placeholder",0]],null,null,null,null)),u["\u0275pid"](131072,a.i,[a.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](9,0,null,null,121,"ul",[["class","navbar-nav ml-auto"]],null,null,null,null,null)),(l()(),u["\u0275eld"](10,0,null,null,3,"li",[["class","nav-item d-none d-xl-block"]],null,null,null,null,null)),(l()(),u["\u0275eld"](11,0,null,null,2,"a",[["class","nav-link btn mt-1"],["href",""],["role","button"],["style","padding: .375rem 1rem !important;border-color: #999;"]],null,null,null,null,null)),(l()(),u["\u0275ted"](12,null,[" "," "])),u["\u0275pid"](131072,a.i,[a.j,u.ChangeDetectorRef]),(l()(),u["\u0275ted"](-1,null,[" \xa0 "])),(l()(),u["\u0275eld"](15,0,null,null,1,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),u["\u0275eld"](16,0,null,null,0,"a",[["class","nav-link mt-1"],["href","javascript:void(0)"],["style","padding: 0.375rem 1rem !important; border-color: #999;"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.rltAndLtr()&&u),u},null,null)),(l()(),u["\u0275ted"](-1,null,[" \xa0 "])),(l()(),u["\u0275eld"](18,0,null,null,20,"li",[["class","nav-item dropdown"],["ngbDropdown",""]],[[2,"show",null]],[[null,"keyup.esc"],["document","click"]],function(l,n,e){var t=!0;return"keyup.esc"===n&&(t=!1!==u["\u0275nov"](l,19).closeFromOutsideEsc()&&t),"document:click"===n&&(t=!1!==u["\u0275nov"](l,19).closeFromClick(e)&&t),t},null,null)),u["\u0275did"](19,212992,null,2,r.a,[d.a,u.NgZone],null,null),u["\u0275qud"](335544320,1,{_menu:0}),u["\u0275qud"](335544320,2,{_anchor:0}),(l()(),u["\u0275eld"](22,0,null,null,6,"a",[["aria-haspopup","true"],["class","nav-link dropdown-toggle"],["href","javascript:void(0)"],["ngbDropdownToggle",""]],[[1,"aria-expanded",0]],[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==u["\u0275nov"](l,23).toggleOpen()&&t),t},null,null)),u["\u0275did"](23,16384,null,0,r.d,[r.a,u.ElementRef],null,null),u["\u0275prd"](2048,[[2,4]],r.b,null,[r.d]),(l()(),u["\u0275eld"](25,0,null,null,0,"i",[["class","fa fa-envelope"]],null,null,null,null,null)),(l()(),u["\u0275eld"](26,0,null,null,0,"b",[["class","caret"]],null,null,null,null,null)),(l()(),u["\u0275eld"](27,0,null,null,1,"span",[["class","sr-only"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["(current)"])),(l()(),u["\u0275eld"](29,0,null,null,9,"ul",[["class","dropdown-menu-right messages"],["ngbDropdownMenu",""]],[[2,"dropdown-menu",null],[2,"show",null],[1,"x-placement",0]],null,null,null,null)),u["\u0275did"](30,16384,[[1,4]],0,r.c,[r.a,u.ElementRef,u.Renderer2],null,null),(l()(),u["\u0275eld"](31,0,null,null,7,"li",[["class","media"]],null,null,null,null,null)),(l()(),u["\u0275eld"](32,0,null,null,0,"img",[["alt","Generic placeholder image"],["class","d-flex align-self-center mr-3"],["src","https://cdn.icon-icons.com/icons2/512/PNG/512/angularjs_icon-icons.com_50952.png"]],null,null,null,null,null)),(l()(),u["\u0275eld"](33,0,null,null,5,"div",[["class","media-body"]],null,null,null,null,null)),(l()(),u["\u0275eld"](34,0,null,null,1,"h5",[["class","mt-0 mb-1"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Geraldo Viana"])),(l()(),u["\u0275eld"](36,0,null,null,2,"p",[["class","small text-muted"]],null,null,null,null,null)),(l()(),u["\u0275eld"](37,0,null,null,0,"i",[["class","fa fa-clock-o"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" Angular-Pwa."])),(l()(),u["\u0275eld"](39,0,null,null,21,"li",[["class","nav-item dropdown"],["ngbDropdown",""]],[[2,"show",null]],[[null,"keyup.esc"],["document","click"]],function(l,n,e){var t=!0;return"keyup.esc"===n&&(t=!1!==u["\u0275nov"](l,40).closeFromOutsideEsc()&&t),"document:click"===n&&(t=!1!==u["\u0275nov"](l,40).closeFromClick(e)&&t),t},null,null)),u["\u0275did"](40,212992,null,2,r.a,[d.a,u.NgZone],null,null),u["\u0275qud"](335544320,3,{_menu:0}),u["\u0275qud"](335544320,4,{_anchor:0}),(l()(),u["\u0275eld"](43,0,null,null,6,"a",[["aria-haspopup","true"],["class","nav-link dropdown-toggle"],["href","javascript:void(0)"],["ngbDropdownToggle",""]],[[1,"aria-expanded",0]],[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==u["\u0275nov"](l,44).toggleOpen()&&t),t},null,null)),u["\u0275did"](44,16384,null,0,r.d,[r.a,u.ElementRef],null,null),u["\u0275prd"](2048,[[4,4]],r.b,null,[r.d]),(l()(),u["\u0275eld"](46,0,null,null,0,"i",[["class","fa fa-bell"]],null,null,null,null,null)),(l()(),u["\u0275eld"](47,0,null,null,0,"b",[["class","caret"]],null,null,null,null,null)),(l()(),u["\u0275eld"](48,0,null,null,1,"span",[["class","sr-only"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["(current)"])),(l()(),u["\u0275eld"](50,0,null,null,10,"div",[["class","dropdown-menu-right"],["ngbDropdownMenu",""]],[[2,"dropdown-menu",null],[2,"show",null],[1,"x-placement",0]],null,null,null,null)),u["\u0275did"](51,16384,[[3,4]],0,r.c,[r.a,u.ElementRef,u.Renderer2],null,null),(l()(),u["\u0275eld"](52,0,null,null,4,"a",[["class","dropdown-item"],["href","javascript:void(0)"]],null,null,null,null,null)),(l()(),u["\u0275ted"](53,null,[" "," "])),u["\u0275pid"](131072,a.i,[a.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](55,0,null,null,1,"span",[["class","badge badge-info"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["6"])),(l()(),u["\u0275eld"](57,0,null,null,0,"li",[["class","dropdown-divider"]],null,null,null,null,null)),(l()(),u["\u0275eld"](58,0,null,null,2,"a",[["class","dropdown-item"],["href","javascript:void(0)"]],null,null,null,null,null)),(l()(),u["\u0275ted"](59,null,[" "," "])),u["\u0275pid"](131072,a.i,[a.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](61,0,null,null,39,"li",[["class","nav-item dropdown"],["ngbDropdown",""]],[[2,"show",null]],[[null,"keyup.esc"],["document","click"]],function(l,n,e){var t=!0;return"keyup.esc"===n&&(t=!1!==u["\u0275nov"](l,62).closeFromOutsideEsc()&&t),"document:click"===n&&(t=!1!==u["\u0275nov"](l,62).closeFromClick(e)&&t),t},null,null)),u["\u0275did"](62,212992,null,2,r.a,[d.a,u.NgZone],null,null),u["\u0275qud"](335544320,5,{_menu:0}),u["\u0275qud"](335544320,6,{_anchor:0}),(l()(),u["\u0275eld"](65,0,null,null,6,"a",[["aria-haspopup","true"],["class","nav-link dropdown-toggle"],["href","javascript:void(0)"],["ngbDropdownToggle",""]],[[1,"aria-expanded",0]],[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==u["\u0275nov"](l,66).toggleOpen()&&t),t},null,null)),u["\u0275did"](66,16384,null,0,r.d,[r.a,u.ElementRef],null,null),u["\u0275prd"](2048,[[6,4]],r.b,null,[r.d]),(l()(),u["\u0275eld"](68,0,null,null,0,"i",[["class","fa fa-language"]],null,null,null,null,null)),(l()(),u["\u0275ted"](69,null,[" "," "])),u["\u0275pid"](131072,a.i,[a.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](71,0,null,null,0,"b",[["class","caret"]],null,null,null,null,null)),(l()(),u["\u0275eld"](72,0,null,null,28,"div",[["class","dropdown-menu-right"],["ngbDropdownMenu",""]],[[2,"dropdown-menu",null],[2,"show",null],[1,"x-placement",0]],null,null,null,null)),u["\u0275did"](73,16384,[[5,4]],0,r.c,[r.a,u.ElementRef,u.Renderer2],null,null),(l()(),u["\u0275eld"](74,0,null,null,2,"a",[["class","dropdown-item"],["href","javascript:void(0)"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.changeLang("en")&&u),u},null,null)),(l()(),u["\u0275ted"](75,null,[" "," "])),u["\u0275pid"](131072,a.i,[a.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](77,0,null,null,2,"a",[["class","dropdown-item"],["href","javascript:void(0)"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.changeLang("fr")&&u),u},null,null)),(l()(),u["\u0275ted"](78,null,[" "," "])),u["\u0275pid"](131072,a.i,[a.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](80,0,null,null,2,"a",[["class","dropdown-item"],["href","javascript:void(0)"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.changeLang("ur")&&u),u},null,null)),(l()(),u["\u0275ted"](81,null,[" "," "])),u["\u0275pid"](131072,a.i,[a.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](83,0,null,null,2,"a",[["class","dropdown-item"],["href","javascript:void(0)"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.changeLang("es")&&u),u},null,null)),(l()(),u["\u0275ted"](84,null,[" "," "])),u["\u0275pid"](131072,a.i,[a.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](86,0,null,null,2,"a",[["class","dropdown-item"],["href","javascript:void(0)"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.changeLang("it")&&u),u},null,null)),(l()(),u["\u0275ted"](87,null,[" "," "])),u["\u0275pid"](131072,a.i,[a.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](89,0,null,null,2,"a",[["class","dropdown-item"],["href","javascript:void(0)"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.changeLang("fa")&&u),u},null,null)),(l()(),u["\u0275ted"](90,null,[" "," "])),u["\u0275pid"](131072,a.i,[a.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](92,0,null,null,2,"a",[["class","dropdown-item"],["href","javascript:void(0)"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.changeLang("de")&&u),u},null,null)),(l()(),u["\u0275ted"](93,null,[" "," "])),u["\u0275pid"](131072,a.i,[a.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](95,0,null,null,2,"a",[["class","dropdown-item"],["href","javascript:void(0)"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.changeLang("zh-CHS")&&u),u},null,null)),(l()(),u["\u0275ted"](96,null,[" "," "])),u["\u0275pid"](131072,a.i,[a.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](98,0,null,null,2,"a",[["class","dropdown-item"],["href","javascript:void(0)"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.changeLang("pt-br")&&u),u},null,null)),(l()(),u["\u0275ted"](99,null,[" "," "])),u["\u0275pid"](131072,a.i,[a.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](101,0,null,null,29,"li",[["class","nav-item dropdown"],["ngbDropdown",""]],[[2,"show",null]],[[null,"keyup.esc"],["document","click"]],function(l,n,e){var t=!0;return"keyup.esc"===n&&(t=!1!==u["\u0275nov"](l,102).closeFromOutsideEsc()&&t),"document:click"===n&&(t=!1!==u["\u0275nov"](l,102).closeFromClick(e)&&t),t},null,null)),u["\u0275did"](102,212992,null,2,r.a,[d.a,u.NgZone],null,null),u["\u0275qud"](335544320,7,{_menu:0}),u["\u0275qud"](335544320,8,{_anchor:0}),(l()(),u["\u0275eld"](105,0,null,null,5,"a",[["aria-haspopup","true"],["class","nav-link dropdown-toggle"],["href","javascript:void(0)"],["ngbDropdownToggle",""]],[[1,"aria-expanded",0]],[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==u["\u0275nov"](l,106).toggleOpen()&&t),t},null,null)),u["\u0275did"](106,16384,null,0,r.d,[r.a,u.ElementRef],null,null),u["\u0275prd"](2048,[[8,4]],r.b,null,[r.d]),(l()(),u["\u0275eld"](108,0,null,null,0,"i",[["class","fa fa-user"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" Geraldo Viana "])),(l()(),u["\u0275eld"](110,0,null,null,0,"b",[["class","caret"]],null,null,null,null,null)),(l()(),u["\u0275eld"](111,0,null,null,19,"div",[["class","dropdown-menu-right"],["ngbDropdownMenu",""]],[[2,"dropdown-menu",null],[2,"show",null],[1,"x-placement",0]],null,null,null,null)),u["\u0275did"](112,16384,[[7,4]],0,r.c,[r.a,u.ElementRef,u.Renderer2],null,null),(l()(),u["\u0275eld"](113,0,null,null,3,"a",[["class","dropdown-item"],["href","javascript:void(0)"]],null,null,null,null,null)),(l()(),u["\u0275eld"](114,0,null,null,0,"i",[["class","fa fa-fw fa-user"]],null,null,null,null,null)),(l()(),u["\u0275ted"](115,null,[" "," "])),u["\u0275pid"](131072,a.i,[a.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](117,0,null,null,3,"a",[["class","dropdown-item"],["href","javascript:void(0)"]],null,null,null,null,null)),(l()(),u["\u0275eld"](118,0,null,null,0,"i",[["class","fa fa-fw fa-envelope"]],null,null,null,null,null)),(l()(),u["\u0275ted"](119,null,[" "," "])),u["\u0275pid"](131072,a.i,[a.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](121,0,null,null,3,"a",[["class","dropdown-item"],["href","javascript:void(0)"]],null,null,null,null,null)),(l()(),u["\u0275eld"](122,0,null,null,0,"i",[["class","fa fa-fw fa-gear"]],null,null,null,null,null)),(l()(),u["\u0275ted"](123,null,[" "," "])),u["\u0275pid"](131072,a.i,[a.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](125,0,null,null,5,"a",[["class","dropdown-item"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var t=!0,o=l.component;return"click"===n&&(t=!1!==u["\u0275nov"](l,126).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&t),"click"===n&&(t=!1!==o.onLoggedout()&&t),t},null,null)),u["\u0275did"](126,671744,null,0,i.n,[i.l,i.a,s.j],{routerLink:[0,"routerLink"]},null),u["\u0275pad"](127,1),(l()(),u["\u0275eld"](128,0,null,null,0,"i",[["class","fa fa-fw fa-power-off"]],null,null,null,null,null)),(l()(),u["\u0275ted"](129,null,[" "," "])),u["\u0275pid"](131072,a.i,[a.j,u.ChangeDetectorRef])],function(l,n){l(n,19,0),l(n,40,0),l(n,62,0),l(n,102,0),l(n,126,0,l(n,127,0,"/login"))},function(l,n){l(n,7,0,u["\u0275inlineInterpolate"](1,"",u["\u0275unv"](n,7,0,u["\u0275nov"](n,8).transform("Pesquisar")),"")),l(n,12,0,u["\u0275unv"](n,12,0,u["\u0275nov"](n,13).transform("Baixar App"))),l(n,18,0,u["\u0275nov"](n,19).isOpen()),l(n,22,0,u["\u0275nov"](n,23).dropdown.isOpen()),l(n,29,0,!0,u["\u0275nov"](n,30).dropdown.isOpen(),u["\u0275nov"](n,30).placement),l(n,39,0,u["\u0275nov"](n,40).isOpen()),l(n,43,0,u["\u0275nov"](n,44).dropdown.isOpen()),l(n,50,0,!0,u["\u0275nov"](n,51).dropdown.isOpen(),u["\u0275nov"](n,51).placement),l(n,53,0,u["\u0275unv"](n,53,0,u["\u0275nov"](n,54).transform("Pending Task"))),l(n,59,0,u["\u0275unv"](n,59,0,u["\u0275nov"](n,60).transform("View All"))),l(n,61,0,u["\u0275nov"](n,62).isOpen()),l(n,65,0,u["\u0275nov"](n,66).dropdown.isOpen()),l(n,69,0,u["\u0275unv"](n,69,0,u["\u0275nov"](n,70).transform("Idioma"))),l(n,72,0,!0,u["\u0275nov"](n,73).dropdown.isOpen(),u["\u0275nov"](n,73).placement),l(n,75,0,u["\u0275unv"](n,75,0,u["\u0275nov"](n,76).transform("Ingl\xeas"))),l(n,78,0,u["\u0275unv"](n,78,0,u["\u0275nov"](n,79).transform("Franc\xeas"))),l(n,81,0,u["\u0275unv"](n,81,0,u["\u0275nov"](n,82).transform("Urdu"))),l(n,84,0,u["\u0275unv"](n,84,0,u["\u0275nov"](n,85).transform("Espanhol"))),l(n,87,0,u["\u0275unv"](n,87,0,u["\u0275nov"](n,88).transform("Italiano"))),l(n,90,0,u["\u0275unv"](n,90,0,u["\u0275nov"](n,91).transform("Farsi"))),l(n,93,0,u["\u0275unv"](n,93,0,u["\u0275nov"](n,94).transform("Alem\xe3o"))),l(n,96,0,u["\u0275unv"](n,96,0,u["\u0275nov"](n,97).transform("Chin\xeas"))),l(n,99,0,u["\u0275unv"](n,99,0,u["\u0275nov"](n,100).transform("Portugu\xeas"))),l(n,101,0,u["\u0275nov"](n,102).isOpen()),l(n,105,0,u["\u0275nov"](n,106).dropdown.isOpen()),l(n,111,0,!0,u["\u0275nov"](n,112).dropdown.isOpen(),u["\u0275nov"](n,112).placement),l(n,115,0,u["\u0275unv"](n,115,0,u["\u0275nov"](n,116).transform("Perfil"))),l(n,119,0,u["\u0275unv"](n,119,0,u["\u0275nov"](n,120).transform("Mensagens"))),l(n,123,0,u["\u0275unv"](n,123,0,u["\u0275nov"](n,124).transform("Configura\xe7\xf5es"))),l(n,125,0,u["\u0275nov"](n,126).target,u["\u0275nov"](n,126).href),l(n,129,0,u["\u0275unv"](n,129,0,u["\u0275nov"](n,130).transform("Sair")))})}var f=function(){function l(l,n){var e=this;this.translate=l,this.router=n,this.isActive=!1,this.collapsed=!1,this.showMenu="",this.pushRightClass="push-right",this.collapsedEvent=new u.EventEmitter,this.translate.addLangs(["en","fr","ur","es","it","fa","de"]),this.translate.setDefaultLang("en");var t=this.translate.getBrowserLang();this.translate.use(t.match(/en|fr|ur|es|it|fa|de/)?t:"en"),this.router.events.subscribe(function(l){l instanceof i.d&&window.innerWidth<=992&&e.isToggled()&&e.toggleSidebar()})}return l.prototype.eventCalled=function(){this.isActive=!this.isActive},l.prototype.addExpandClass=function(l){this.showMenu=l===this.showMenu?"0":l},l.prototype.toggleCollapsed=function(){this.collapsed=!this.collapsed,this.collapsedEvent.emit(this.collapsed)},l.prototype.isToggled=function(){return document.querySelector("body").classList.contains(this.pushRightClass)},l.prototype.toggleSidebar=function(){document.querySelector("body").classList.toggle(this.pushRightClass)},l.prototype.rltAndLtr=function(){document.querySelector("body").classList.toggle("rtl")},l.prototype.changeLang=function(l){this.translate.use(l)},l.prototype.onLoggedout=function(){localStorage.removeItem("isLoggedin")},l}(),m=u["\u0275crt"]({encapsulation:0,styles:[[".sidebar[_ngcontent-%COMP%]{border-radius:0;position:fixed;z-index:1000;top:56px;left:235px;width:235px;margin-left:-235px;margin-bottom:48px;border:none;overflow-y:auto;background-color:#222;bottom:0;overflow-x:hidden;padding-bottom:40px;white-space:nowrap;transition:all .2s ease-in-out}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a.list-group-item[_ngcontent-%COMP%]{background:#222;border:0;border-radius:0;color:#999;text-decoration:none}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a.list-group-item[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{margin-right:10px}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a.router-link-active[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:#151515;color:#fff}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .header-fields[_ngcontent-%COMP%]{padding-top:10px}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .header-fields[_ngcontent-%COMP%] > .list-group-item[_ngcontent-%COMP%]:first-child{border-top:1px solid rgba(255,255,255,.2)}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:focus{border-radius:none;border:none}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]{font-size:1rem;height:50px;margin-bottom:0}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#999;text-decoration:none;font-weight:400;background:#222}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative;display:block;padding:1rem 1.5rem .75rem}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fff;outline:0;outline-offset:-2px}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]:hover{background:#151515}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]{border-radious:0;border:none}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]{border-radius:0;background-color:#222;border:0 solid transparent}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#999}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fff}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]:hover{background:#151515}.nested-menu[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]{cursor:pointer}.nested-menu[_ngcontent-%COMP%]   .nested[_ngcontent-%COMP%]{list-style-type:none}.nested-menu[_ngcontent-%COMP%]   ul.submenu[_ngcontent-%COMP%]{display:none;height:0}.nested-menu[_ngcontent-%COMP%]   .expand[_ngcontent-%COMP%]   ul.submenu[_ngcontent-%COMP%]{display:block;list-style-type:none;height:auto}.nested-menu[_ngcontent-%COMP%]   .expand[_ngcontent-%COMP%]   ul.submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;padding:10px;display:block}@media screen and (max-width:992px){.sidebar[_ngcontent-%COMP%]{top:54px;left:0}}@media print{.sidebar[_ngcontent-%COMP%]{display:none!important}}@media (min-width:992px){.header-fields[_ngcontent-%COMP%]{display:none}}[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 0 #fff;border-radius:3px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border-radius:3px;-webkit-box-shadow:inset 0 0 3px #fff}.toggle-button[_ngcontent-%COMP%]{position:fixed;width:236px;cursor:pointer;padding:12px;bottom:0;color:#999;background:#212529;border-top:1px solid #999;transition:all .2s ease-in-out}.toggle-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:23px}.toggle-button[_ngcontent-%COMP%]:hover{background:#151515;color:#fff}.collapsed[_ngcontent-%COMP%]{width:50px}.collapsed[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:none}"]],data:{}});function v(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,115,"nav",[["class","sidebar"]],null,null,null,null,null)),u["\u0275did"](1,278528,null,0,s.k,[u.IterableDiffers,u.KeyValueDiffers,u.ElementRef,u.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),u["\u0275pod"](2,{sidebarPushRight:0,collapsed:1}),(l()(),u["\u0275eld"](3,0,null,null,104,"div",[["class","list-group"]],null,null,null,null,null)),(l()(),u["\u0275eld"](4,0,null,null,11,"a",[["class","list-group-item"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==u["\u0275nov"](l,5).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&t),t},null,null)),u["\u0275did"](5,671744,[[2,4]],0,i.n,[i.l,i.a,s.j],{routerLink:[0,"routerLink"]},null),u["\u0275pad"](6,1),u["\u0275did"](7,1720320,null,2,i.m,[i.l,u.ElementRef,u.Renderer2,u.ChangeDetectorRef],{routerLinkActive:[0,"routerLinkActive"]},null),u["\u0275qud"](603979776,1,{links:1}),u["\u0275qud"](603979776,2,{linksWithHrefs:1}),u["\u0275pad"](10,1),(l()(),u["\u0275eld"](11,0,null,null,0,"i",[["class","fa fa-fw fa-edit"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\xa0 "])),(l()(),u["\u0275eld"](13,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),u["\u0275ted"](14,null,["",""])),u["\u0275pid"](131072,a.i,[a.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](16,0,null,null,11,"a",[["class","list-group-item"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==u["\u0275nov"](l,17).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&t),t},null,null)),u["\u0275did"](17,671744,[[4,4]],0,i.n,[i.l,i.a,s.j],{routerLink:[0,"routerLink"]},null),u["\u0275pad"](18,1),u["\u0275did"](19,1720320,null,2,i.m,[i.l,u.ElementRef,u.Renderer2,u.ChangeDetectorRef],{routerLinkActive:[0,"routerLinkActive"]},null),u["\u0275qud"](603979776,3,{links:1}),u["\u0275qud"](603979776,4,{linksWithHrefs:1}),u["\u0275pad"](22,1),(l()(),u["\u0275eld"](23,0,null,null,0,"i",[["class","fa fa-th-list"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\xa0 "])),(l()(),u["\u0275eld"](25,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),u["\u0275ted"](26,null,["",""])),u["\u0275pid"](131072,a.i,[a.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](28,0,null,null,29,"div",[["class","nested-menu"]],null,null,null,null,null)),(l()(),u["\u0275eld"](29,0,null,null,5,"a",[["class","list-group-item"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.addExpandClass("pages")&&u),u},null,null)),(l()(),u["\u0275eld"](30,0,null,null,0,"i",[["class","fa fa-plus"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\xa0 "])),(l()(),u["\u0275eld"](32,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),u["\u0275ted"](33,null,["",""])),u["\u0275pid"](131072,a.i,[a.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](35,0,null,null,22,"li",[["class","nested"]],[[2,"expand",null]],null,null,null,null)),(l()(),u["\u0275eld"](36,0,null,null,21,"ul",[["class","submenu"]],null,null,null,null,null)),(l()(),u["\u0275eld"](37,0,null,null,6,"li",[],null,null,null,null,null)),(l()(),u["\u0275eld"](38,0,null,null,5,"a",[["href","javascript:void(0)"]],null,null,null,null,null)),(l()(),u["\u0275eld"](39,0,null,null,0,"i",[["class","fa fa-monument"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\xa0 "])),(l()(),u["\u0275eld"](41,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),u["\u0275ted"](42,null,["",""])),u["\u0275pid"](131072,a.i,[a.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](44,0,null,null,6,"li",[],null,null,null,null,null)),(l()(),u["\u0275eld"](45,0,null,null,5,"a",[["href","javascript:void(0)"]],null,null,null,null,null)),(l()(),u["\u0275eld"](46,0,null,null,0,"i",[["class","fa fa-monument"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\xa0 "])),(l()(),u["\u0275eld"](48,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),u["\u0275ted"](49,null,["",""])),u["\u0275pid"](131072,a.i,[a.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](51,0,null,null,6,"li",[],null,null,null,null,null)),(l()(),u["\u0275eld"](52,0,null,null,5,"a",[["href","javascript:void(0)"]],null,null,null,null,null)),(l()(),u["\u0275eld"](53,0,null,null,0,"i",[["class","fa fa-monument"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\xa0 "])),(l()(),u["\u0275eld"](55,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),u["\u0275ted"](56,null,["",""])),u["\u0275pid"](131072,a.i,[a.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](58,0,null,null,11,"a",[["class","list-group-item"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==u["\u0275nov"](l,59).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&t),t},null,null)),u["\u0275did"](59,671744,[[6,4]],0,i.n,[i.l,i.a,s.j],{routerLink:[0,"routerLink"]},null),u["\u0275pad"](60,1),u["\u0275did"](61,1720320,null,2,i.m,[i.l,u.ElementRef,u.Renderer2,u.ChangeDetectorRef],{routerLinkActive:[0,"routerLinkActive"]},null),u["\u0275qud"](603979776,5,{links:1}),u["\u0275qud"](603979776,6,{linksWithHrefs:1}),u["\u0275pad"](64,1),(l()(),u["\u0275eld"](65,0,null,null,0,"i",[["class","fa fa-file-o"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\xa0 "])),(l()(),u["\u0275eld"](67,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),u["\u0275ted"](68,null,["",""])),u["\u0275pid"](131072,a.i,[a.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](70,0,null,null,37,"div",[["class","header-fields"]],null,null,null,null,null)),(l()(),u["\u0275eld"](71,0,null,null,3,"a",[["class","list-group-item"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.rltAndLtr()&&u),u},null,null)),(l()(),u["\u0275eld"](72,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),u["\u0275eld"](73,0,null,null,0,"i",[["class","fa fa-arrows-h"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\xa0 "])),(l()(),u["\u0275eld"](75,0,null,null,32,"div",[["class","nested-menu"]],null,null,null,null,null)),(l()(),u["\u0275eld"](76,0,null,null,3,"a",[["class","list-group-item"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.addExpandClass("profile")&&u),u},null,null)),(l()(),u["\u0275eld"](77,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),u["\u0275eld"](78,0,null,null,0,"i",[["class","fa fa-user"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\xa0 John Smith"])),(l()(),u["\u0275eld"](80,0,null,null,27,"li",[["class","nested"]],[[2,"expand",null]],null,null,null,null)),(l()(),u["\u0275eld"](81,0,null,null,26,"ul",[["class","submenu"]],null,null,null,null,null)),(l()(),u["\u0275eld"](82,0,null,null,5,"li",[],null,null,null,null,null)),(l()(),u["\u0275eld"](83,0,null,null,4,"a",[["href","javascript:void(0)"]],null,null,null,null,null)),(l()(),u["\u0275eld"](84,0,null,null,3,"span",[],null,null,null,null,null)),(l()(),u["\u0275eld"](85,0,null,null,0,"i",[["class","fa fa-fw fa-user"]],null,null,null,null,null)),(l()(),u["\u0275ted"](86,null,[" ",""])),u["\u0275pid"](131072,a.i,[a.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](88,0,null,null,5,"li",[],null,null,null,null,null)),(l()(),u["\u0275eld"](89,0,null,null,4,"a",[["href","javascript:void(0)"]],null,null,null,null,null)),(l()(),u["\u0275eld"](90,0,null,null,3,"span",[],null,null,null,null,null)),(l()(),u["\u0275eld"](91,0,null,null,0,"i",[["class","fa fa-fw fa-envelope"]],null,null,null,null,null)),(l()(),u["\u0275ted"](92,null,[" ",""])),u["\u0275pid"](131072,a.i,[a.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](94,0,null,null,5,"li",[],null,null,null,null,null)),(l()(),u["\u0275eld"](95,0,null,null,4,"a",[["href","javascript:void(0)"]],null,null,null,null,null)),(l()(),u["\u0275eld"](96,0,null,null,3,"span",[],null,null,null,null,null)),(l()(),u["\u0275eld"](97,0,null,null,0,"i",[["class","fa fa-fw fa-gear"]],null,null,null,null,null)),(l()(),u["\u0275ted"](98,null,[" ",""])),u["\u0275pid"](131072,a.i,[a.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](100,0,null,null,7,"li",[],null,null,null,null,null)),(l()(),u["\u0275eld"](101,0,null,null,6,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var t=!0,o=l.component;return"click"===n&&(t=!1!==u["\u0275nov"](l,102).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&t),"click"===n&&(t=!1!==o.onLoggedout()&&t),t},null,null)),u["\u0275did"](102,671744,null,0,i.n,[i.l,i.a,s.j],{routerLink:[0,"routerLink"]},null),u["\u0275pad"](103,1),(l()(),u["\u0275eld"](104,0,null,null,3,"span",[],null,null,null,null,null)),(l()(),u["\u0275eld"](105,0,null,null,0,"i",[["class","fa fa-fw fa-power-off"]],null,null,null,null,null)),(l()(),u["\u0275ted"](106,null,[" ",""])),u["\u0275pid"](131072,a.i,[a.j,u.ChangeDetectorRef]),(l()(),u["\u0275eld"](108,0,null,null,7,"div",[["class","toggle-button"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.toggleCollapsed()&&u),u},null,null)),u["\u0275did"](109,278528,null,0,s.k,[u.IterableDiffers,u.KeyValueDiffers,u.ElementRef,u.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),u["\u0275pod"](110,{collapsed:0}),(l()(),u["\u0275eld"](111,0,null,null,0,"i",[["class","fa fa-fw fa-angle-double-left"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\xa0 "])),(l()(),u["\u0275eld"](113,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),u["\u0275ted"](114,null,["",""])),u["\u0275pid"](131072,a.i,[a.j,u.ChangeDetectorRef])],function(l,n){var e=n.component;l(n,1,0,"sidebar",l(n,2,0,e.isActive,e.collapsed)),l(n,5,0,l(n,6,0,"/forms")),l(n,7,0,l(n,10,0,"router-link-active")),l(n,17,0,l(n,18,0,"/components")),l(n,19,0,l(n,22,0,"router-link-active")),l(n,59,0,l(n,60,0,"/blank-page")),l(n,61,0,l(n,64,0,"router-link-active")),l(n,102,0,l(n,103,0,"/login")),l(n,109,0,"toggle-button",l(n,110,0,e.collapsed))},function(l,n){var e=n.component;l(n,4,0,u["\u0275nov"](n,5).target,u["\u0275nov"](n,5).href),l(n,14,0,u["\u0275unv"](n,14,0,u["\u0275nov"](n,15).transform("Forms"))),l(n,16,0,u["\u0275nov"](n,17).target,u["\u0275nov"](n,17).href),l(n,26,0,u["\u0275unv"](n,26,0,u["\u0275nov"](n,27).transform("Component"))),l(n,33,0,u["\u0275unv"](n,33,0,u["\u0275nov"](n,34).transform("Menu"))),l(n,35,0,"pages"===e.showMenu),l(n,42,0,u["\u0275unv"](n,42,0,u["\u0275nov"](n,43).transform("Submenu"))),l(n,49,0,u["\u0275unv"](n,49,0,u["\u0275nov"](n,50).transform("Submenu"))),l(n,56,0,u["\u0275unv"](n,56,0,u["\u0275nov"](n,57).transform("Submenu"))),l(n,58,0,u["\u0275nov"](n,59).target,u["\u0275nov"](n,59).href),l(n,68,0,u["\u0275unv"](n,68,0,u["\u0275nov"](n,69).transform("Blank Page"))),l(n,80,0,"profile"===e.showMenu),l(n,86,0,u["\u0275unv"](n,86,0,u["\u0275nov"](n,87).transform("Profile"))),l(n,92,0,u["\u0275unv"](n,92,0,u["\u0275nov"](n,93).transform("Inbox"))),l(n,98,0,u["\u0275unv"](n,98,0,u["\u0275nov"](n,99).transform("Settings"))),l(n,101,0,u["\u0275nov"](n,102).target,u["\u0275nov"](n,102).href),l(n,106,0,u["\u0275unv"](n,106,0,u["\u0275nov"](n,107).transform("Log Out"))),l(n,114,0,u["\u0275unv"](n,114,0,u["\u0275nov"](n,115).transform("Barra Lateral")))})}var h=function(){function l(){}return l.prototype.ngOnInit=function(){},l.prototype.receiveCollapsed=function(l){this.collapedSideBar=l},l}(),C=u["\u0275crt"]({encapsulation:0,styles:[["*[_ngcontent-%COMP%]{transition:margin-left .2s ease-in-out}.main-container[_ngcontent-%COMP%]{margin-top:56px;margin-left:235px;padding:15px;-ms-overflow-x:hidden;overflow-x:hidden;overflow-y:scroll;position:relative;overflow:hidden}.collapsed[_ngcontent-%COMP%]{margin-left:100px}@media screen and (max-width:992px){.main-container[_ngcontent-%COMP%]{margin-left:0!important}}@media print{.main-container[_ngcontent-%COMP%]{margin-top:0!important;margin-left:0!important}}"]],data:{}});function b(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"app-header",[],null,null,null,g,p)),u["\u0275did"](1,114688,null,0,c,[a.j,i.l],null,null),(l()(),u["\u0275eld"](2,0,null,null,1,"app-sidebar",[],null,[[null,"collapsedEvent"]],function(l,n,e){var u=!0;return"collapsedEvent"===n&&(u=!1!==l.component.receiveCollapsed(e)&&u),u},v,m)),u["\u0275did"](3,49152,null,0,f,[a.j,i.l],null,{collapsedEvent:"collapsedEvent"}),(l()(),u["\u0275eld"](4,0,null,null,4,"section",[["class","main-container"]],null,null,null,null,null)),u["\u0275did"](5,278528,null,0,s.k,[u.IterableDiffers,u.KeyValueDiffers,u.ElementRef,u.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),u["\u0275pod"](6,{collapsed:0}),(l()(),u["\u0275eld"](7,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),u["\u0275did"](8,212992,null,0,i.p,[i.b,u.ViewContainerRef,u.ComponentFactoryResolver,[8,null],u.ChangeDetectorRef],null,null)],function(l,n){var e=n.component;l(n,1,0),l(n,5,0,"main-container",l(n,6,0,e.collapedSideBar)),l(n,8,0)},null)}var O=u["\u0275ccf"]("app-layout",h,function(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"app-layout",[],null,null,null,b,C)),u["\u0275did"](1,114688,null,0,h,[],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),M=function(){},P=e("C9m0");e.d(n,"LayoutModuleNgFactory",function(){return _});var _=u["\u0275cmf"](t,[],function(l){return u["\u0275mod"]([u["\u0275mpd"](512,u.ComponentFactoryResolver,u["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,O]],[3,u.ComponentFactoryResolver],u.NgModuleRef]),u["\u0275mpd"](4608,s.o,s.n,[u.LOCALE_ID,[2,s.y]]),u["\u0275mpd"](4608,d.a,d.a,[]),u["\u0275mpd"](1073742336,s.b,s.b,[]),u["\u0275mpd"](1073742336,i.o,i.o,[[2,i.u],[2,i.l]]),u["\u0275mpd"](1073742336,M,M,[]),u["\u0275mpd"](1073742336,a.g,a.g,[]),u["\u0275mpd"](1073742336,P.a,P.a,[]),u["\u0275mpd"](1073742336,t,t,[]),u["\u0275mpd"](1024,i.j,function(){return[[{path:"",component:h,children:[{path:"",redirectTo:"dashboard",pathMatch:"prefix"},{path:"dashboard",loadChildren:"./dashboard/dashboard.module#DashboardModule"},{path:"charts",loadChildren:"./charts/charts.module#ChartsModule"},{path:"tables",loadChildren:"./tables/tables.module#TablesModule"},{path:"forms",loadChildren:"./form/form.module#FormModule"},{path:"bs-element",loadChildren:"./bs-element/bs-element.module#BsElementModule"},{path:"grid",loadChildren:"./grid/grid.module#GridModule"},{path:"components",loadChildren:"./bs-component/bs-component.module#BsComponentModule"},{path:"blank-page",loadChildren:"./blank-page/blank-page.module#BlankPageModule"}]}]]},[])])})}}]);