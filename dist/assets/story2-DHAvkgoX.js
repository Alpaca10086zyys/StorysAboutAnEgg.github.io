import{_ as i}from"./index-C5V36jfG.js";const c="/assets/%E6%96%87%E5%AD%971-DZP8JZQ3.png",u="/assets/%E5%AF%B9%E8%AF%9D1-1-Dq5JYPvb.png",l="/assets/%E5%AF%B9%E8%AF%9D1-2-CTaFI3bK.png",a="/assets/%E5%AF%B9%E8%AF%9D1-3-BpRYCYbE.png",m="/assets/egg-ORLi7G0t.png",V="/assets/%E5%AF%B9%E8%AF%9D2-1-WQU38qxR.png",r="/assets/%E5%AF%B9%E8%AF%9D2-2-BG4dL0ES.png",g="/assets/%E6%96%87%E5%AD%973-BubItI8L.png",C="/assets/%E5%AF%B9%E8%AF%9D3-1-SJSEXM9a.png",k="/assets/%E5%AF%B9%E8%AF%9D3-2-CbreMZEO.png",_="/assets/%E5%AF%B9%E8%AF%9D3-3-BQImu7__.png",h="/assets/%E5%AF%B9%E8%AF%9D4-1-DEB9OaEa.png",d="/assets/%E5%AF%B9%E8%AF%9D4-2-B0WrhUro.png",w="/assets/music1-BztZbbhY.png",p="/assets/%E6%96%87%E5%AD%975-BFMX7MKW.png",B="/assets/%E5%AF%B9%E8%AF%9D5-1-CEd0pUOG.png",E="/assets/%E5%AF%B9%E8%AF%9D5-2-DoToqJ96.png",f="/assets/%E5%AF%B9%E8%AF%9D5-3-NIlwb71s.png",N="/assets/%E5%AF%B9%E8%AF%9D6-1-BxgmBtFz.png",A="/assets/%E5%AF%B9%E8%AF%9D6-2-ff6BJwe7.png",F="/assets/music2-D0k3UmJN.png",y="/assets/%E6%96%87%E5%AD%977-B-Y-Jfj2.png",x="/assets/%E5%AF%B9%E8%AF%9D7-1-BMajq6W7.png",T="/assets/%E5%AF%B9%E8%AF%9D7-2-Dvwx-MzR.png",D="/assets/music3-qdsHKXLU.png",b="/assets/%E5%AF%B9%E8%AF%9D8-1-BV2uh92m.png",I="/assets/%E5%AF%B9%E8%AF%9D8-2-B3g9oNsW.png",M="/assets/%E5%AF%B9%E8%AF%9D8mouth-6mbWaG3h.png",W="/assets/%E5%AF%B9%E8%AF%9D8-3-C79Vg-y3.png",q="/assets/%E5%AF%B9%E8%AF%9D9-1-D5ADlTXG.png",L="/assets/%E5%AF%B9%E8%AF%9D9-2-1-CE0X2xkl.png",J="/assets/%E5%AF%B9%E8%AF%9D9sweat-DEAW86XW.png",O="/assets/%E5%AF%B9%E8%AF%9D9-3-CN-qjVrg.png",R="/assets/%E5%AF%B9%E8%AF%9D10-1-BtaMtt1q.png",Y="/assets/dot1-CA5KMW2q.png",j="/assets/dot2-B5nR3n4Y.png",G="/assets/dot3-CChvg9Gu.png",U="/assets/dot4-H1epiEpy.png",X="/assets/dot5-s45nux9-.png",K="/assets/dot6-DAvAbLW6.png",S="/assets/%E5%AF%B9%E8%AF%9D11-BOO2TreT.png",z="/assets/%E6%96%87%E5%AD%9711-CaCTRONL.png",P="/assets/%E5%AF%B9%E8%AF%9D12-KpMds7hj.png",Q="/assets/%E6%96%87%E5%AD%9712-BuYxpF4u.png",Z="/assets/%E6%96%87%E5%AD%9713-CzQh5PmN.png",v="/assets/%E6%89%8B13-CpgpLDMc.png",H="/assets/%E6%89%8B14-BAiooSCP.png",$="/assets/%E5%8F%8C%E8%9B%8B14-B1300-Ab.png",ee="/assets/%E6%96%87%E5%AD%9714-BcUwq_C7.png",te={name:"Story2",data(){return{clickCount:0,newClickCount:0,newImageVisible:!1,showEggButton:!1,showMusic1:!1,showBackEggButton:!1,stage:0}},methods:{handleClick(){this.stage===0&&this.clickCount<5&&this.clickCount++},handleAnimationEnd(n){n.animationName==="slideLeftAndRotate"&&(n.target.style.display="none"),n.animationName==="bounce-left-to-right"&&(n.target.style.display="none")},handleBouncingEnd(){this.showEggButton=!0},showButton(){this.showEggButton=!0},showNewImage(){this.stage===0?(this.stage=1,this.newImageVisible=!0,this.newClickCount=1):this.stage===1&&this.newClickCount<2?this.newClickCount++:this.stage===1&&this.newClickCount===2?(this.stage=3,this.newClickCount++,this.newImageVisible=!0):this.stage===3&&this.newClickCount<6?this.newClickCount++:this.stage===3&&this.newClickCount===6?(this.stage=4,this.newClickCount++):this.stage===4&&this.newClickCount<8?this.newClickCount++:this.stage===4&&this.newClickCount===8?(this.showMusic1=!0,this.newClickCount++):this.stage===4&&this.newClickCount===9?(this.showMusic1=!1,this.stage=5,this.newClickCount++):this.stage===5&&this.newClickCount<13?this.newClickCount++:this.stage===5&&this.newClickCount===13?(this.stage=6,this.newClickCount++):this.stage===6&&this.newClickCount<15?this.newClickCount++:this.stage===6&&this.newClickCount===15?(this.stage=7,this.newClickCount++):this.stage===7&&this.newClickCount<18?this.newClickCount++:this.stage===7&&this.newClickCount===18?(this.stage=8,this.newClickCount++):this.stage===8&&this.newClickCount<21?this.newClickCount++:this.stage===8&&this.newClickCount===21?(this.stage=9,this.newClickCount++):this.stage===9&&this.newClickCount<24?this.newClickCount++:this.stage===9&&this.newClickCount===24?(this.stage=10,this.newClickCount++):this.stage===10&&this.newClickCount<26?this.newClickCount++:this.stage===10&&this.newClickCount===26?(this.stage=11,this.newClickCount++):this.stage===11&&this.newClickCount<28?this.newClickCount++:this.stage===11&&this.newClickCount===28?(this.stage=12,this.newClickCount++):this.stage===12&&this.newClickCount<30?this.newClickCount++:this.stage===12&&this.newClickCount===30?(this.stage=13,this.newClickCount++):this.stage===13&&this.newClickCount<31?this.newClickCount++:this.stage===13&&this.newClickCount===31?(this.stage=14,this.newClickCount++):this.stage===14&&this.newClickCount<33?this.newClickCount++:this.stage===14&&this.newClickCount===33?(this.newClickCount++,this.showEggButton=!1,this.showBackEggButton=!0):this.stage===14&&this.newClickCount===34&&this.$router.push("/menu")}}},se={key:0,src:c,alt:"文字1",class:"text-image"},oe={key:0,src:u,alt:"对话1-1",class:"dialog-image"},ne={key:0,src:l,alt:"对话1-2",class:"dialog-image"},ie={key:0,src:a,alt:"对话1-3",class:"dialog-image"},ce={key:0,src:V,alt:"对话2-1",class:"dialog2-image"},ue={key:0,src:r,alt:"对话2-2",class:"dialog2-image"},le={key:0,src:g,alt:"文字3",class:"text-image"},ae={key:0,src:C,alt:"对话3-1",class:"dialog-image"},me={key:0,src:k,alt:"对话3-2",class:"dialog-image"},Ve={key:0,src:_,alt:"对话3-3",class:"dialog-image"},re={key:0,src:h,alt:"对话4-1",class:"dialog2-image"},ge={key:0,src:d,alt:"对话4-2",class:"dialog2-image"},Ce={key:0,src:w,alt:"music1",class:"bouncing-music-image"},ke={key:0,src:p,alt:"文字5",class:"text-image"},_e={key:0,src:B,alt:"对话5-1",class:"dialog-image"},he={key:0,src:E,alt:"对话5-2",class:"dialog-image"},de={key:0,src:f,alt:"对话5-3",class:"dialog-image"},we={key:0,src:N,alt:"对话6-1",class:"dialog2-image"},pe={key:0,src:A,alt:"对话6-2",class:"dialog2-image"},Be={key:0,src:F,alt:"music2",class:"music2-image"},Ee={key:0,src:y,alt:"文字7",class:"text-image"},fe={key:0,src:x,alt:"对话7-1",class:"dialog-image"},Ne={key:0,src:T,alt:"对话7-2",class:"dialog-image"},Ae={key:0,src:D,alt:"music3",class:"music3-image"},Fe={key:0,src:b,alt:"对话8-1",class:"dialog2-image"},ye={key:0,src:I,alt:"对话8-2",class:"dialog2-image"},xe={key:0,src:M,alt:"对话8-2",class:"dialog2-image speak"},Te={key:0,src:W,alt:"对话8-3",class:"dialog2-image"},De={key:0,src:q,alt:"对话9-1",class:"dialog2-image"},be={key:0,src:L,alt:"对话9-2-1",class:"dialog2-image"},Ie={key:0,src:J,alt:"sweat",class:"dialog2-image"},Me={key:0,src:O,alt:"对话9-3",class:"dialog2-image"},We={key:0,src:R,alt:"对话10-1",class:"dialog2-image"},qe={key:1,src:Y,alt:"dot1",class:"dialog2-image dot1"},Le={key:2,src:j,alt:"dot2",class:"dialog2-image dot2"},Je={key:3,src:G,alt:"dot3",class:"dialog2-image dot3"},Oe={key:4,src:U,alt:"dot4",class:"dialog2-image dot4"},Re={key:5,src:X,alt:"dot5",class:"dialog2-image dot5"},Ye={key:6,src:K,alt:"dot6",class:"dialog2-image dot6"},je={key:0,src:S,alt:"对话11",class:"dialog2-image"},Ge={key:0,src:z,alt:"文字11",class:"dialog2-image"},Ue={key:0,src:P,alt:"对话12",class:"dialog2-image"},Xe={key:0,src:Q,alt:"文字12",class:"dialog2-image"},Ke={key:0,src:Z,alt:"文字13",class:"dialog2-image"},Se={key:0,src:v,alt:"手13",class:"dialog2-image"},ze={key:0,src:H,alt:"手14",class:"dialog2-image"},Pe={key:0,src:$,alt:"双蛋14",class:"dialog2-image"},Qe={key:0,src:ee,alt:"文字14",class:"dialog2-image"};function Ze(n,s,ve,He,e,t){return Vue.openBlock(),Vue.createElementBlock("div",{class:"about",onClick:s[3]||(s[3]=(...o)=>t.handleClick&&t.handleClick(...o))},[Vue.createVNode(Vue.Transition,{name:"fade-in-up"},{default:Vue.withCtx(()=>[e.clickCount>0&&e.stage===0?(Vue.openBlock(),Vue.createElementBlock("img",se)):Vue.createCommentVNode("",!0)]),_:1}),Vue.createVNode(Vue.Transition,{name:"fade-in-up"},{default:Vue.withCtx(()=>[e.clickCount>1&&e.stage===0?(Vue.openBlock(),Vue.createElementBlock("img",oe)):Vue.createCommentVNode("",!0)]),_:1}),Vue.createVNode(Vue.Transition,{name:"fade"},{default:Vue.withCtx(()=>[e.clickCount>2&&e.stage===0?(Vue.openBlock(),Vue.createElementBlock("img",ne)):Vue.createCommentVNode("",!0)]),_:1}),Vue.createVNode(Vue.Transition,{name:"fade"},{default:Vue.withCtx(()=>[e.clickCount>3&&e.stage===0?(Vue.openBlock(),Vue.createElementBlock("img",ie)):Vue.createCommentVNode("",!0)]),_:1}),Vue.createVNode(Vue.Transition,{name:"slide-left",onAfterEnter:t.showButton},{default:Vue.withCtx(()=>[e.clickCount===5&&e.stage===0?(Vue.openBlock(),Vue.createElementBlock("img",{key:0,ref:"egg",onAnimationend:s[0]||(s[0]=(...o)=>t.handleAnimationEnd&&t.handleAnimationEnd(...o)),src:m,alt:"egg",class:"egg-image"},null,544)):Vue.createCommentVNode("",!0)]),_:1},8,["onAfterEnter"]),Vue.createVNode(Vue.Transition,{name:"fade"},{default:Vue.withCtx(()=>[e.newImageVisible&&e.newClickCount>0&&e.stage===1?(Vue.openBlock(),Vue.createElementBlock("img",ce)):Vue.createCommentVNode("",!0)]),_:1}),Vue.createVNode(Vue.Transition,{name:"fadefromsmall"},{default:Vue.withCtx(()=>[e.newImageVisible&&e.newClickCount>1&&e.stage===1?(Vue.openBlock(),Vue.createElementBlock("img",ue)):Vue.createCommentVNode("",!0)]),_:1}),Vue.createVNode(Vue.Transition,{name:"fade-in-up"},{default:Vue.withCtx(()=>[e.stage===3&&e.newClickCount>2?(Vue.openBlock(),Vue.createElementBlock("img",le)):Vue.createCommentVNode("",!0)]),_:1}),Vue.createVNode(Vue.Transition,{name:"fade-in-up"},{default:Vue.withCtx(()=>[e.stage===3&&e.newClickCount>3?(Vue.openBlock(),Vue.createElementBlock("img",ae)):Vue.createCommentVNode("",!0)]),_:1}),Vue.createVNode(Vue.Transition,{name:"fade"},{default:Vue.withCtx(()=>[e.stage===3&&e.newClickCount>4?(Vue.openBlock(),Vue.createElementBlock("img",me)):Vue.createCommentVNode("",!0)]),_:1}),Vue.createVNode(Vue.Transition,{name:"fade"},{default:Vue.withCtx(()=>[e.stage===3&&e.newClickCount>5?(Vue.openBlock(),Vue.createElementBlock("img",Ve)):Vue.createCommentVNode("",!0)]),_:1}),Vue.createVNode(Vue.Transition,{name:"fade"},{default:Vue.withCtx(()=>[e.stage===4&&e.newClickCount>6?(Vue.openBlock(),Vue.createElementBlock("img",re)):Vue.createCommentVNode("",!0)]),_:1}),Vue.createVNode(Vue.Transition,{name:"fadefromsmall"},{default:Vue.withCtx(()=>[e.stage===4&&e.newClickCount>7?(Vue.openBlock(),Vue.createElementBlock("img",ge)):Vue.createCommentVNode("",!0)]),_:1}),Vue.createVNode(Vue.Transition,{name:"bounce-left-to-right",onAfterEnter:t.handleBouncingEnd},{default:Vue.withCtx(()=>[e.showMusic1?(Vue.openBlock(),Vue.createElementBlock("img",Ce)):Vue.createCommentVNode("",!0)]),_:1},8,["onAfterEnter"]),Vue.createVNode(Vue.Transition,{name:"fade-in-up"},{default:Vue.withCtx(()=>[e.stage===5&&e.newClickCount>9?(Vue.openBlock(),Vue.createElementBlock("img",ke)):Vue.createCommentVNode("",!0)]),_:1}),Vue.createVNode(Vue.Transition,{name:"fade-in-up"},{default:Vue.withCtx(()=>[e.stage===5&&e.newClickCount>10?(Vue.openBlock(),Vue.createElementBlock("img",_e)):Vue.createCommentVNode("",!0)]),_:1}),Vue.createVNode(Vue.Transition,{name:"fade"},{default:Vue.withCtx(()=>[e.stage===5&&e.newClickCount>11?(Vue.openBlock(),Vue.createElementBlock("img",he)):Vue.createCommentVNode("",!0)]),_:1}),Vue.createVNode(Vue.Transition,{name:"fade"},{default:Vue.withCtx(()=>[e.stage===5&&e.newClickCount>12?(Vue.openBlock(),Vue.createElementBlock("img",de)):Vue.createCommentVNode("",!0)]),_:1}),Vue.createVNode(Vue.Transition,{name:"fade"},{default:Vue.withCtx(()=>[e.stage===6&&e.newClickCount>13?(Vue.openBlock(),Vue.createElementBlock("img",we)):Vue.createCommentVNode("",!0)]),_:1}),Vue.createVNode(Vue.Transition,{name:"fade"},{default:Vue.withCtx(()=>[e.stage===6&&e.newClickCount>14?(Vue.openBlock(),Vue.createElementBlock("img",pe)):Vue.createCommentVNode("",!0)]),_:1}),Vue.createVNode(Vue.Transition,{name:"fade-in-jumping"},{default:Vue.withCtx(()=>[e.stage===6&&e.newClickCount>14?(Vue.openBlock(),Vue.createElementBlock("img",Be)):Vue.createCommentVNode("",!0)]),_:1}),Vue.createVNode(Vue.Transition,{name:"fade-in-up"},{default:Vue.withCtx(()=>[e.stage===7&&e.newClickCount>15?(Vue.openBlock(),Vue.createElementBlock("img",Ee)):Vue.createCommentVNode("",!0)]),_:1}),Vue.createVNode(Vue.Transition,{name:"fade"},{default:Vue.withCtx(()=>[e.stage===7&&e.newClickCount>16?(Vue.openBlock(),Vue.createElementBlock("img",fe)):Vue.createCommentVNode("",!0)]),_:1}),Vue.createVNode(Vue.Transition,{name:"fade"},{default:Vue.withCtx(()=>[e.stage===7&&e.newClickCount>17?(Vue.openBlock(),Vue.createElementBlock("img",Ne)):Vue.createCommentVNode("",!0)]),_:1}),Vue.createVNode(Vue.Transition,{name:"fade-in-jumping2"},{default:Vue.withCtx(()=>[e.stage===7&&e.newClickCount>17?(Vue.openBlock(),Vue.createElementBlock("img",Ae)):Vue.createCommentVNode("",!0)]),_:1}),Vue.createVNode(Vue.Transition,{name:"fade-in-up"},{default:Vue.withCtx(()=>[e.stage===8&&e.newClickCount>18?(Vue.openBlock(),Vue.createElementBlock("img",Fe)):Vue.createCommentVNode("",!0)]),_:1}),Vue.createVNode(Vue.Transition,{name:"fade"},{default:Vue.withCtx(()=>[e.stage===8&&e.newClickCount>19?(Vue.openBlock(),Vue.createElementBlock("img",ye)):Vue.createCommentVNode("",!0)]),_:1}),e.stage===8&&e.newClickCount>19?(Vue.openBlock(),Vue.createElementBlock("img",xe)):Vue.createCommentVNode("",!0),Vue.createVNode(Vue.Transition,{name:"fade"},{default:Vue.withCtx(()=>[e.stage===8&&e.newClickCount>20?(Vue.openBlock(),Vue.createElementBlock("img",Te)):Vue.createCommentVNode("",!0)]),_:1}),Vue.createVNode(Vue.Transition,{name:"fade-in-up"},{default:Vue.withCtx(()=>[e.stage===9&&e.newClickCount>21?(Vue.openBlock(),Vue.createElementBlock("img",De)):Vue.createCommentVNode("",!0)]),_:1}),Vue.createVNode(Vue.Transition,{name:"fade"},{default:Vue.withCtx(()=>[e.stage===9&&e.newClickCount>22?(Vue.openBlock(),Vue.createElementBlock("img",be)):Vue.createCommentVNode("",!0)]),_:1}),Vue.createVNode(Vue.Transition,{name:"fade-in-down"},{default:Vue.withCtx(()=>[e.stage===9&&e.newClickCount>22?(Vue.openBlock(),Vue.createElementBlock("img",Ie)):Vue.createCommentVNode("",!0)]),_:1}),Vue.createVNode(Vue.Transition,{name:"fade"},{default:Vue.withCtx(()=>[e.stage===9&&e.newClickCount>23?(Vue.openBlock(),Vue.createElementBlock("img",Me)):Vue.createCommentVNode("",!0)]),_:1}),Vue.createVNode(Vue.Transition,{name:"fade-in-up"},{default:Vue.withCtx(()=>[e.stage===10&&e.newClickCount>24?(Vue.openBlock(),Vue.createElementBlock("img",We)):Vue.createCommentVNode("",!0)]),_:1}),e.stage===10&&e.newClickCount>25?(Vue.openBlock(),Vue.createElementBlock("img",qe)):Vue.createCommentVNode("",!0),e.stage===10&&e.newClickCount>25?(Vue.openBlock(),Vue.createElementBlock("img",Le)):Vue.createCommentVNode("",!0),e.stage===10&&e.newClickCount>25?(Vue.openBlock(),Vue.createElementBlock("img",Je)):Vue.createCommentVNode("",!0),e.stage===10&&e.newClickCount>25?(Vue.openBlock(),Vue.createElementBlock("img",Oe)):Vue.createCommentVNode("",!0),e.stage===10&&e.newClickCount>25?(Vue.openBlock(),Vue.createElementBlock("img",Re)):Vue.createCommentVNode("",!0),e.stage===10&&e.newClickCount>25?(Vue.openBlock(),Vue.createElementBlock("img",Ye)):Vue.createCommentVNode("",!0),Vue.createVNode(Vue.Transition,{name:"fade-in-up"},{default:Vue.withCtx(()=>[e.stage===11&&e.newClickCount>26?(Vue.openBlock(),Vue.createElementBlock("img",je)):Vue.createCommentVNode("",!0)]),_:1}),Vue.createVNode(Vue.Transition,{name:"fade-in-down"},{default:Vue.withCtx(()=>[e.stage===11&&e.newClickCount>27?(Vue.openBlock(),Vue.createElementBlock("img",Ge)):Vue.createCommentVNode("",!0)]),_:1}),Vue.createVNode(Vue.Transition,{name:"fade-in-up"},{default:Vue.withCtx(()=>[e.stage===12&&e.newClickCount>28?(Vue.openBlock(),Vue.createElementBlock("img",Ue)):Vue.createCommentVNode("",!0)]),_:1}),Vue.createVNode(Vue.Transition,{name:"fade"},{default:Vue.withCtx(()=>[e.stage===12&&e.newClickCount>29?(Vue.openBlock(),Vue.createElementBlock("img",Xe)):Vue.createCommentVNode("",!0)]),_:1}),Vue.createVNode(Vue.Transition,{name:"fadefromsmall"},{default:Vue.withCtx(()=>[e.stage===13&&e.newClickCount>30?(Vue.openBlock(),Vue.createElementBlock("img",Ke)):Vue.createCommentVNode("",!0)]),_:1}),Vue.createVNode(Vue.Transition,{name:"fade2"},{default:Vue.withCtx(()=>[e.stage===13&&e.newClickCount>30?(Vue.openBlock(),Vue.createElementBlock("img",Se)):Vue.createCommentVNode("",!0)]),_:1}),Vue.createVNode(Vue.Transition,{name:"fade-in-up"},{default:Vue.withCtx(()=>[e.stage===14&&e.newClickCount>31?(Vue.openBlock(),Vue.createElementBlock("img",ze)):Vue.createCommentVNode("",!0)]),_:1}),Vue.createVNode(Vue.Transition,{name:"fade"},{default:Vue.withCtx(()=>[e.stage===14&&e.newClickCount>32?(Vue.openBlock(),Vue.createElementBlock("img",Pe)):Vue.createCommentVNode("",!0)]),_:1}),Vue.createVNode(Vue.Transition,{name:"fade-in-up"},{default:Vue.withCtx(()=>[e.stage===14&&e.newClickCount>33?(Vue.openBlock(),Vue.createElementBlock("img",Qe)):Vue.createCommentVNode("",!0)]),_:1}),Vue.createVNode(Vue.Transition,{name:"fade-in-down"},{default:Vue.withCtx(()=>[e.showEggButton?(Vue.openBlock(),Vue.createElementBlock("button",{key:0,class:"action-button",onClick:s[1]||(s[1]=(...o)=>t.showNewImage&&t.showNewImage(...o))})):Vue.createCommentVNode("",!0)]),_:1}),Vue.createVNode(Vue.Transition,{name:"fade-in-down"},{default:Vue.withCtx(()=>[e.showBackEggButton?(Vue.openBlock(),Vue.createElementBlock("button",{key:0,class:"action-back-button",onClick:s[2]||(s[2]=(...o)=>t.showNewImage&&t.showNewImage(...o))})):Vue.createCommentVNode("",!0)]),_:1})])}const et=i(te,[["render",Ze],["__scopeId","data-v-7618f87a"]]);export{et as default};
