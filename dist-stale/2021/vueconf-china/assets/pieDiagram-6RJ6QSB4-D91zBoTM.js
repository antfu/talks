import{p as N}from"./chunk-K2ZEYYM2-BvNAM__T.js";import{p as B}from"./treemap-75Q7IDZK-SV5UZEO6-CKPg7Epr.js";import{_ as i,g as U,s as Q,a as V,b as Z,v as j,t as q,l as C,c as H,G as J,aN as K,aP as X,aQ as z,aR as Y,e as tt,A as et,aS as at,I as rt}from"./md-gs6tCKWA.js";import"./chunk-TGZYFRKZ-2s8RmVmH.js";import"./monaco/bundled-types-ClnUT3dW.js";import"./modules/file-saver-DnRyLYBS.js";import"./modules/vue-CvjR9cJg.js";import"./lz-string-DHL27hw0.js";import"./index-CNpXpCqI.js";import"./modules/shiki-BE4ErvX9.js";import"./slidev/default-b867RgRe.js";import"./slidev/context-CDJPmaAZ.js";var it=rt.pie,D={sections:new Map,showData:!1},m=D.sections,w=D.showData,st=structuredClone(it),ot=i(()=>structuredClone(st),"getConfig"),nt=i(()=>{m=new Map,w=D.showData,et()},"clear"),lt=i(({label:t,value:e})=>{m.has(t)||(m.set(t,e),C.debug(`added new section: ${t}, with value: ${e}`))},"addSection"),ct=i(()=>m,"getSections"),pt=i(t=>{w=t},"setShowData"),dt=i(()=>w,"getShowData"),G={getConfig:ot,clear:nt,setDiagramTitle:q,getDiagramTitle:j,setAccTitle:Z,getAccTitle:V,setAccDescription:Q,getAccDescription:U,addSection:lt,getSections:ct,setShowData:pt,getShowData:dt},gt=i((t,e)=>{N(t,e),e.setShowData(t.showData),t.sections.map(e.addSection)},"populateDb"),ut={parse:i(async t=>{const e=await B("pie",t);C.debug(e),gt(e,G)},"parse")},ft=i(t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`,"getStyles"),mt=ft,ht=i(t=>{const e=[...t.entries()].map(s=>({label:s[0],value:s[1]})).sort((s,n)=>n.value-s.value);return at().value(s=>s.value)(e)},"createPieArcs"),St=i((t,e,F,s)=>{C.debug(`rendering pie chart
`+t);const n=s.db,y=H(),T=J(n.getConfig(),y.pie),$=40,o=18,d=4,c=450,h=c,S=K(e),l=S.append("g");l.attr("transform","translate("+h/2+","+c/2+")");const{themeVariables:a}=y;let[A]=X(a.pieOuterStrokeWidth);A??=2;const _=T.textPosition,g=Math.min(h,c)/2-$,P=z().innerRadius(0).outerRadius(g),R=z().innerRadius(g*_).outerRadius(g*_);l.append("circle").attr("cx",0).attr("cy",0).attr("r",g+A/2).attr("class","pieOuterCircle");const b=n.getSections(),v=ht(b),W=[a.pie1,a.pie2,a.pie3,a.pie4,a.pie5,a.pie6,a.pie7,a.pie8,a.pie9,a.pie10,a.pie11,a.pie12],p=Y(W);l.selectAll("mySlices").data(v).enter().append("path").attr("d",P).attr("fill",r=>p(r.data.label)).attr("class","pieCircle");let E=0;b.forEach(r=>{E+=r}),l.selectAll("mySlices").data(v).enter().append("text").text(r=>(r.data.value/E*100).toFixed(0)+"%").attr("transform",r=>"translate("+R.centroid(r)+")").style("text-anchor","middle").attr("class","slice"),l.append("text").text(n.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText");const x=l.selectAll(".legend").data(p.domain()).enter().append("g").attr("class","legend").attr("transform",(r,u)=>{const f=o+d,M=f*p.domain().length/2,O=12*o,L=u*f-M;return"translate("+O+","+L+")"});x.append("rect").attr("width",o).attr("height",o).style("fill",p).style("stroke",p),x.data(v).append("text").attr("x",o+d).attr("y",o-d).text(r=>{const{label:u,value:f}=r.data;return n.getShowData()?`${u} [${f}]`:u});const I=Math.max(...x.selectAll("text").nodes().map(r=>r?.getBoundingClientRect().width??0)),k=h+$+o+d+I;S.attr("viewBox",`0 0 ${k} ${c}`),tt(S,c,k,T.useMaxWidth)},"draw"),vt={draw:St},zt={parser:ut,db:G,renderer:vt,styles:mt};export{zt as diagram};
