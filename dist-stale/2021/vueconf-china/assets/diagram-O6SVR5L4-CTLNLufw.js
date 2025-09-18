import{p as y}from"./chunk-K2ZEYYM2-BvNAM__T.js";import{p as B}from"./treemap-75Q7IDZK-SV5UZEO6-CKPg7Epr.js";import{_ as l,s as S,g as z,v as F,t as P,a as E,b as W,G as v,aN as T,e as A,A as D,H as _,I as N,l as w}from"./md-gs6tCKWA.js";import"./chunk-TGZYFRKZ-2s8RmVmH.js";import"./monaco/bundled-types-ClnUT3dW.js";import"./modules/file-saver-DnRyLYBS.js";import"./modules/vue-CvjR9cJg.js";import"./lz-string-DHL27hw0.js";import"./index-CNpXpCqI.js";import"./modules/shiki-BE4ErvX9.js";import"./slidev/default-b867RgRe.js";import"./slidev/context-CDJPmaAZ.js";var x={packet:[]},m=structuredClone(x),I=N.packet,L=l(()=>{const t=v({...I,..._().packet});return t.showBits&&(t.paddingY+=10),t},"getConfig"),Y=l(()=>m.packet,"getPacket"),G=l(t=>{t.length>0&&m.packet.push(t)},"pushWord"),H=l(()=>{D(),m=structuredClone(x)},"clear"),u={pushWord:G,getPacket:Y,getConfig:L,clear:H,setAccTitle:W,getAccTitle:E,setDiagramTitle:P,getDiagramTitle:F,getAccDescription:z,setAccDescription:S},M=1e4,O=l(t=>{y(t,u);let e=-1,o=[],i=1;const{bitsPerRow:s}=u.getConfig();for(let{start:a,end:r,bits:c,label:f}of t.blocks){if(a!==void 0&&r!==void 0&&r<a)throw new Error(`Packet block ${a} - ${r} is invalid. End must be greater than start.`);if(a??=e+1,a!==e+1)throw new Error(`Packet block ${a} - ${r??a} is not contiguous. It should start from ${e+1}.`);if(c===0)throw new Error(`Packet block ${a} is invalid. Cannot have a zero bit field.`);for(r??=a+(c??1)-1,c??=r-a+1,e=r,w.debug(`Packet block ${a} - ${e} with label ${f}`);o.length<=s+1&&u.getPacket().length<M;){const[d,p]=K({start:a,end:r,bits:c,label:f},i,s);if(o.push(d),d.end+1===i*s&&(u.pushWord(o),o=[],i++),!p)break;({start:a,end:r,bits:c,label:f}=p)}}u.pushWord(o)},"populate"),K=l((t,e,o)=>{if(t.start===void 0)throw new Error("start should have been set during first phase");if(t.end===void 0)throw new Error("end should have been set during first phase");if(t.start>t.end)throw new Error(`Block start ${t.start} is greater than block end ${t.end}.`);if(t.end+1<=e*o)return[t,void 0];const i=e*o-1,s=e*o;return[{start:t.start,end:i,label:t.label,bits:i-t.start},{start:s,end:t.end,label:t.label,bits:t.end-s}]},"getNextFittingBlock"),R={parse:l(async t=>{const e=await B("packet",t);w.debug(e),O(e)},"parse")},U=l((t,e,o,i)=>{const s=i.db,a=s.getConfig(),{rowHeight:r,paddingY:c,bitWidth:f,bitsPerRow:d}=a,p=s.getPacket(),n=s.getDiagramTitle(),k=r+c,g=k*(p.length+1)-(n?0:r),b=f*d+2,h=T(e);h.attr("viewbox",`0 0 ${b} ${g}`),A(h,g,b,a.useMaxWidth);for(const[C,$]of p.entries())X(h,$,C,a);h.append("text").text(n).attr("x",b/2).attr("y",g-k/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")},"draw"),X=l((t,e,o,{rowHeight:i,paddingX:s,paddingY:a,bitWidth:r,bitsPerRow:c,showBits:f})=>{const d=t.append("g"),p=o*(i+a)+a;for(const n of e){const k=n.start%c*r+1,g=(n.end-n.start+1)*r-s;if(d.append("rect").attr("x",k).attr("y",p).attr("width",g).attr("height",i).attr("class","packetBlock"),d.append("text").attr("x",k+g/2).attr("y",p+i/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(n.label),!f)continue;const b=n.end===n.start,h=p-2;d.append("text").attr("x",k+(b?g/2:0)).attr("y",h).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",b?"middle":"start").text(n.start),b||d.append("text").attr("x",k+g).attr("y",h).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(n.end)}},"drawWord"),j={draw:U},q={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},J=l(({packet:t}={})=>{const e=v(q,t);return`
	.packetByte {
		font-size: ${e.byteFontSize};
	}
	.packetByte.start {
		fill: ${e.startByteColor};
	}
	.packetByte.end {
		fill: ${e.endByteColor};
	}
	.packetLabel {
		fill: ${e.labelColor};
		font-size: ${e.labelFontSize};
	}
	.packetTitle {
		fill: ${e.titleColor};
		font-size: ${e.titleFontSize};
	}
	.packetBlock {
		stroke: ${e.blockStrokeColor};
		stroke-width: ${e.blockStrokeWidth};
		fill: ${e.blockFillColor};
	}
	`},"styles"),ct={parser:R,db:u,renderer:j,styles:J};export{ct as diagram};
