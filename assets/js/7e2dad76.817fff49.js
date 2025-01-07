"use strict";(self.webpackChunkdsd_project=self.webpackChunkdsd_project||[]).push([[3065],{1163:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>a,contentTitle:()=>s,default:()=>o,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var i=r(4848),t=r(8453);r(1470),r(9365);const c={sidebar_label:"Series",sidebar_position:2},s="Series",d={id:"kungfupandas/DataStructure/Series",title:"Series",description:"Gi\u1edbi thi\u1ec7u",source:"@site/docs/kungfupandas/01-DataStructure/01-Series.mdx",sourceDirName:"kungfupandas/01-DataStructure",slug:"/kungfupandas/DataStructure/Series",permalink:"/docs/kungfupandas/DataStructure/Series",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Series",sidebar_position:2},sidebar:"tailieuSidebar",previous:{title:"Gi\u1edbi thi\u1ec7u",permalink:"/docs/kungfupandas/DataStructure/Introduction"},next:{title:"DataFrame",permalink:"/docs/kungfupandas/DataStructure/DataFrame"}},a={},h=[{value:"Gi\u1edbi thi\u1ec7u",id:"gi\u1edbi-thi\u1ec7u",level:2},{value:"C\xe1c c\xe1ch kh\u1edfi t\u1ea1o",id:"c\xe1c-c\xe1ch-kh\u1edfi-t\u1ea1o",level:2},{value:"Kh\u1edfi t\u1ea1o Series b\u1eb1ng m\u1ed9t gi\xe1 tr\u1ecb duy nh\u1ea5t",id:"kh\u1edfi-t\u1ea1o-series-b\u1eb1ng-m\u1ed9t-gi\xe1-tr\u1ecb-duy-nh\u1ea5t",level:3},{value:"Kh\u1edfi t\u1ea1o Series b\u1eb1ng List ho\u1eb7c d\u1ea1ng numpy.array",id:"kh\u1edfi-t\u1ea1o-series-b\u1eb1ng-list-ho\u1eb7c-d\u1ea1ng-numpyarray",level:3},{value:"Kh\u1edfi t\u1ea1o Series b\u1eb1ng dictionary",id:"kh\u1edfi-t\u1ea1o-series-b\u1eb1ng-dictionary",level:3},{value:"M\u1ed9t s\u1ed1 thao t\xe1c c\u01a1 b\u1ea3n v\u1edbi Series",id:"m\u1ed9t-s\u1ed1-thao-t\xe1c-c\u01a1-b\u1ea3n-v\u1edbi-series",level:2},{value:"Hi\u1ec3n th\u1ecb to\xe0n b\u1ed9 gi\xe1 tr\u1ecb c\u1ee7a Series",id:"hi\u1ec3n-th\u1ecb-to\xe0n-b\u1ed9-gi\xe1-tr\u1ecb-c\u1ee7a-series",level:3},{value:"Truy c\u1eadp m\u1ed9t ph\u1ea7n t\u1eed trong Series",id:"truy-c\u1eadp-m\u1ed9t-ph\u1ea7n-t\u1eed-trong-series",level:3},{value:"L\u1ea5y Series con c\u1ee7a m\u1ed9t Series",id:"l\u1ea5y-series-con-c\u1ee7a-m\u1ed9t-series",level:3}];function l(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"series",children:"Series"}),"\n",(0,i.jsx)(e.h2,{id:"gi\u1edbi-thi\u1ec7u",children:"Gi\u1edbi thi\u1ec7u"}),"\n",(0,i.jsxs)(e.p,{children:["Trong Pandas, ",(0,i.jsx)(e.code,{children:"Series"})," l\xe0 m\u1ea3ng 1 chi\u1ec1u bao g\u1ed3m m\u1ed9t danh s\xe1ch gi\xe1 tr\u1ecb, v\xe0 m\u1ed9t m\u1ea3ng ch\u1ee9a index\r\nc\u1ee7a c\xe1c gi\xe1 tr\u1ecb. Trong d\u1eef li\u1ec7u d\u1ea3ng b\u1ea3ng, m\u1ed7i Series \u0111\u01b0\u1ee3c xem nh\u01b0 l\xe0 m\u1ed9t c\u1ed9t c\u1ee7a b\u1ea3ng \u0111\xf3.\r\nC\xe1ch \u0111\u01a1n gi\u1ea3n \u0111\u1ec3 t\u1ea1o Series nh\u01b0 sau"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:r(5967).A+"",width:"569",height:"454"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"s = pd.Series(data, index=None, name=None)\n"})}),"\n",(0,i.jsxs)(e.p,{children:["Trong \u0111\xf3 ",(0,i.jsx)(e.code,{children:"data"})," c\xf3 th\u1ec3  c\xf3 d\u1ea1ng:"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["d\u1ea1ng List c\u1ee7a Python ho\u1eb7c d\u1ea1ng ",(0,i.jsx)(e.code,{children:"numpy.array"})]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"dictionary c\u1ee7a Python"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"l\xe0 m\u1ed9t h\u1eb1ng s\u1ed1 duy nh\u1ea5t"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"index"})," c\xf3 th\u1ec3 truy\u1ec1n ho\u1eb7c kh\xf4ng, t\xf9y v\xe0o d\u1ea1ng c\u1ee7a ",(0,i.jsx)(e.code,{children:"data"})," m\xe0 ",(0,i.jsx)(e.code,{children:"index"})," s\u1ebd \u0111\u01b0\u1ee3c \u0111\u1ecbnh ngh\u0129a kh\xe1c nhau.\r\n",(0,i.jsx)(e.code,{children:"name"})," l\xe0 t\xean c\u1ee7a ",(0,i.jsx)(e.code,{children:"Series"}),", gi\xe1 tr\u1ecb n\xe0y c\u0169ng kh\xf4ng nh\u1ea5t thi\u1ebft ph\u1ea3i truy\u1ec1n v\xe0o."]}),"\n",(0,i.jsx)(e.h2,{id:"c\xe1c-c\xe1ch-kh\u1edfi-t\u1ea1o",children:"C\xe1c c\xe1ch kh\u1edfi t\u1ea1o"}),"\n",(0,i.jsx)(e.h3,{id:"kh\u1edfi-t\u1ea1o-series-b\u1eb1ng-m\u1ed9t-gi\xe1-tr\u1ecb-duy-nh\u1ea5t",children:"Kh\u1edfi t\u1ea1o Series b\u1eb1ng m\u1ed9t gi\xe1 tr\u1ecb duy nh\u1ea5t"}),"\n",(0,i.jsx)(e.p,{children:"\u0110\xe2y l\xe0 c\xe1ch kh\u1edfi t\u1ea1o \u0111\u01a1n gian nh\u1ea5t, d\u1eef li\u1ec7u truy\u1ec1n v\xe0o ch\u1ec9 l\xe0 m\u1ed9t gi\xe1 tr\u1ecb duy nh\u1ea5t"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"pd.Series(data=1)\n"})}),"\n",(0,i.jsx)("pythonoutput",{children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"0    1\r\ndtype: int64\n"})})}),"\n",(0,i.jsx)(e.p,{children:"B\u1ea1n c\u0169ng c\xf3 th\u1ec3 kh\u1edfi t\u1ea1o Series v\u1edbi nhi\u1ec1u ph\u1ea7n t\u1eed gi\xf3ng nhau"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"pd.Series(data=1, index=[1, 2, 3])\n"})}),"\n",(0,i.jsx)("pythonoutput",{children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"1    1\r\n2    1\r\n3    1\r\ndtype: int64\n"})})}),"\n",(0,i.jsx)(e.h3,{id:"kh\u1edfi-t\u1ea1o-series-b\u1eb1ng-list-ho\u1eb7c-d\u1ea1ng-numpyarray",children:"Kh\u1edfi t\u1ea1o Series b\u1eb1ng List ho\u1eb7c d\u1ea1ng numpy.array"}),"\n",(0,i.jsxs)(e.p,{children:["B\xe2y gi\u1edd ta c\xf3 th\u1ec3 kh\u1edfi t\u1ea1o m\u1ed9t Series v\u1edbi d\u1eef li\u1ec7u \u0111\u1ea7u v\xe0o l\xe0 m\u1ed9t List \u0111\u01a1n gi\u1ea3n ",(0,i.jsx)(e.code,{children:'["m\u1ed9t", "hai", "ba"]'})]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:'pd.Series(data=["m\u1ed9t", "hai", "ba"])\n'})}),"\n",(0,i.jsxs)(e.p,{children:["L\xfac n\xe0y, h\u1ec7 th\u1ed1ng s\u1ebd m\u1eb7c \u0111\u1ecbnh ",(0,i.jsx)(e.code,{children:"index"})," s\u1ebd c\xf3 gi\xe1 tr\u1ecb t\u1eeb ",(0,i.jsx)(e.code,{children:"0"})," \u0111\u1ebfn \u0111\u1ed9 d\xe0i c\u1ee7a ",(0,i.jsx)(e.code,{children:"list - 1"})," t\u1ee9c l\xe0 2"]}),"\n",(0,i.jsx)("pythonoutput",{children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"0    m\u1ed9t\r\n1    hai\r\n2     ba\r\ndtype: object\n"})})}),"\n",(0,i.jsxs)(e.p,{children:["Ch\xfang ta c\xf3 th\u1ec3 thay \u0111\u1ed5i m\u1eb7c \u0111inh ",(0,i.jsx)(e.code,{children:"index"})," truy\u1ec1n v\xe0o b\u1eb1ng c\xe1ch th\xeam v\xe0o bi\u1ebfn ",(0,i.jsx)(e.code,{children:"index"})," nh\u01b0 v\xed d\u1ee5 d\u01b0\u1edbi \u0111\xe2y"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:'pd.Series(data=["m\u1ed9t", "hai", "ba"], index=["m", "h", "b"])\n'})}),"\n",(0,i.jsx)("pythonoutput",{children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"m    m\u1ed9t\r\nh    hai\r\nb     ba\r\ndtype: object\n"})})}),"\n",(0,i.jsxs)(e.p,{children:["Khi ch\xfang ta truy\u1ec1n ",(0,i.jsx)(e.code,{children:"index"})," c\xf3 \u0111\u1ed9 d\xe0i nh\u1ecf h\u01a1n \u0111\u1ed9 d\xe0i c\u1ee7a m\u1ea3ng \u0111\u01b0a v\xe0o th\xec pandas s\u1ebd b\xe1o l\u1ed7i, trong v\xed d\u1ee5 d\u01b0\u1edbi \u0111\xe2y m\xecnh s\u1ebd\r\ntruy\u1ec1n index ch\u1ec9 2 ph\u1ea7n t\u1eed trong khi data c\xf3 3 ph\u1ea7n t\u1eed"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:'pd.Series(data=["m\u1ed9t", "hai", "ba"], index=["m", "h"])\n'})}),"\n",(0,i.jsx)("pythonoutput",{children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"ValueError: Length of values (3) does not match length of index (2)\n"})})}),"\n",(0,i.jsxs)(e.p,{children:["T\u01b0\u01a1ng t\u1ef1 khi truy\u1ec1n ",(0,i.jsx)(e.code,{children:"index"})," c\xf3 \u0111\u1ed9 d\xe0i l\u1edbn h\u01a1n, pandas c\u0169ng b\xe1o l\u1ed7i t\u01b0\u01a1ng t\u1ef1"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:'pd.Series(data=["m\u1ed9t", "hai", "ba"], index=["m", "h", "b","t"])\n'})}),"\n",(0,i.jsx)("pythonoutput",{children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"ValueError: Length of values (3) does not match length of index (4)\n"})})}),"\n",(0,i.jsx)(e.p,{children:"B\u1ea1n c\u0169ng c\xf3 th\u1ec3 thay th\u1ebf list b\u1eb1ng numpy array nh\u01b0 sau"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:'pd.Series(data=np.array(["m\u1ed9t", "hai", "ba"]), index=["m", "h", "b"])\n'})}),"\n",(0,i.jsx)("pythonoutput",{children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"m    m\u1ed9t\r\nh    hai\r\nb     ba\r\ndtype: object\n"})})}),"\n",(0,i.jsxs)(e.p,{children:["Ngo\xe0i ra ch\xfang ta c\xf3 th\u1ec3 \u0111\u1eb7t t\xean cho Series b\u1eb1ng tham s\u1ed1 ",(0,i.jsx)(e.code,{children:"name"}),", tuy nhi\xean m\xecnh th\u1ea5y kh\xf4ng c\u1ea7n thi\u1ebft l\u1eafm"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:'pd.Series(data=np.array(["m\u1ed9t", "hai", "ba"]), index=["m", "h", "b"], name=\'meow\')\n'})}),"\n",(0,i.jsx)("pythonoutput",{children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"m    m\u1ed9t\r\nh    hai\r\nb     ba\r\nName: meow, dtype: object\n"})})}),"\n",(0,i.jsx)(e.h3,{id:"kh\u1edfi-t\u1ea1o-series-b\u1eb1ng-dictionary",children:"Kh\u1edfi t\u1ea1o Series b\u1eb1ng dictionary"}),"\n",(0,i.jsx)(e.p,{children:"gi\u1ea3 s\u1eed ch\xfang ta c\xf3 Dictionary nh\u01b0 sau"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:'{"a": 0, "b":1, "c": 2} \n'})}),"\n",(0,i.jsx)(e.p,{children:"Khi kh\u1edfi t\u1ea1o Series ta ch\u1ec9 c\u1ea7n g\u1ecdi \u0111\u01a1n gi\u1ea3n"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:'pd.Series({"a": 0, "b":1, "c": 2} )\n'})}),"\n",(0,i.jsx)("pythonoutput",{children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"a    0\r\nb    1\r\nc    2\r\ndtype: int64\n"})})}),"\n",(0,i.jsxs)(e.p,{children:["L\xfac n\xe0y ",(0,i.jsx)(e.code,{children:"Series"})," s\u1ebd l\u1ea5y th\u1ee9 t\u1ef1 ",(0,i.jsx)(e.code,{children:"keys"})," c\u1ee7a dictionary theo th\u1ee9 t\u1ef1 l\xe0 ",(0,i.jsx)(e.code,{children:'["a", "b", "c"]'})]}),"\n",(0,i.jsxs)(e.p,{children:["Tuy nhi\xean khi ta truy\u1ec1n v\xe0o v\u1edbi dictionary ",(0,i.jsx)(e.code,{children:'{"b": 1, "a":0, "c": 2}'}),", Series v\u1eabn gi\u1eef nguy\xean th\u1ee9 t\u1ef1  index l\xe0 ",(0,i.jsx)(e.code,{children:'["b", "a", "c"]'})," ch\u1ee9 kh\xf4ng s\u1eafp x\u1ebfp theo b\u1ea3ng ch\u1eef c\xe1i"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:'pd.Series({"b": 1, "a":0, "c": 2})\n'})}),"\n",(0,i.jsx)("pythonoutput",{children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"b    1\r\na    0\r\nc    2\r\ndtype: int64\n"})})}),"\n",(0,i.jsx)(e.admonition,{title:"L\u01b0u \xfd",type:"tip",children:(0,i.jsxs)(e.p,{children:["Trong tr\u01b0\u1eddng h\u1ee3p b\u1ea1n truy\u1ec1n bi\u1ebfn ",(0,i.jsx)(e.code,{children:"index"})," v\xe0o, ",(0,i.jsx)(e.code,{children:"Series"})," s\u1ebd \u0111\xe1nh index d\u1ef1a v\xe0o th\u1ee9 t\u1ef1 trong ",(0,i.jsx)(e.code,{children:"index"}),", v\xe0 ch\u1ec9 ch\u1ee9a c\xe1c gi\xe1 tr\u1ecb c\u1ee7a dict c\xf3 key n\u1eb1m trong ",(0,i.jsx)(e.code,{children:"index"}),".\r\nV\u1edbi c\xe1c gi\xe1 tr\u1ecb trong bi\u1ebfn ",(0,i.jsx)(e.code,{children:"index"})," kh\xf4ng c\xf3 trong keys c\u1ee7a dict, ",(0,i.jsx)(e.code,{children:"Series"})," s\u1ebd t\u1ea1o ra c\xe1c gi\xe1 tr\u1ecb b\u1ecb thi\u1ebfu ",(0,i.jsx)(e.code,{children:"NaN"}),"."]})}),"\n",(0,i.jsx)(e.p,{children:"V\xed d\u1ee5"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:'pd.Series({"a": 0, "b": 1, "c": 2, "e": 4}, index=["b", "c", "d", "a"])\n'})}),"\n",(0,i.jsxs)(e.p,{children:["Trong v\xed d\u1ee5 n\xe0y, gi\xe1 tr\u1ecb ",(0,i.jsx)(e.code,{children:"d"})," c\xf3 trong ",(0,i.jsx)(e.code,{children:"index"})," nh\u01b0ng kh\xf4ng l\xe0 key trong dictionary, do \u0111\xf3 Series s\u1ebd m\u1eb7c \u0111\u1ecbnh gi\xe1 tr\u1ecb t\u1ea1i index ",(0,i.jsx)(e.code,{children:"d"})," l\xe0 ",(0,i.jsx)(e.code,{children:"NaN"}),". Ng\u01b0\u1ee3c l\u1ea1i, trong dictionary c\xf3 key ",(0,i.jsx)(e.code,{children:"e"})," nh\u01b0ng trong\r\nindex truy\u1ec1n v\xe0o kh\xf4ng c\xf3 gi\xe1 tr\u1ecb n\xe0y n\xean ",(0,i.jsx)(e.code,{children:"Series"})," s\u1ebd kh\xf4ng l\u01b0u gi\xe1 tr\u1ecb c\u1ee7a key ",(0,i.jsx)(e.code,{children:"e"})," l\xe0 4"]}),"\n",(0,i.jsx)("pythonoutput",{children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"b    1.0\r\nc    2.0\r\nd    NaN\r\na    0.0\r\ndtype: float64\n"})})}),"\n",(0,i.jsx)(e.admonition,{title:"L\u01b0u \xfd",type:"tip",children:(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"NaN"})," l\xe0 gi\xe1 tr\u1ecb m\u1eb7c \u0111\u1ecbnh cho d\u1eef li\u1ec7u b\u1ecb thi\u1ebfu trong pandas v\xe0 gi\xe1 tr\u1ecb n\xe0y c\xf3 ki\u1ec3u\r\nl\xe0 ",(0,i.jsx)(e.code,{children:"float64"})," n\xean ki\u1ec3u d\u1eef li\u1ec7u c\u1ee7a ",(0,i.jsx)(e.code,{children:"Series"})," c\u0169ng l\xe0 ",(0,i.jsx)(e.code,{children:"float64"})," kh\xe1c v\u1edbi ",(0,i.jsx)(e.code,{children:"int64"})," \u1edf v\xed d\u1ee5 tr\u01b0\u1edbc \u0111\xf3."]})}),"\n",(0,i.jsx)(e.h2,{id:"m\u1ed9t-s\u1ed1-thao-t\xe1c-c\u01a1-b\u1ea3n-v\u1edbi-series",children:"M\u1ed9t s\u1ed1 thao t\xe1c c\u01a1 b\u1ea3n v\u1edbi Series"}),"\n",(0,i.jsxs)(e.p,{children:["Thao t\xe1c tr\xean ",(0,i.jsx)(e.code,{children:"Series"})," c\u0169ng gi\u1ed1ng v\u1edbi thao t\xe1c tr\xean ",(0,i.jsx)(e.code,{children:"numpy.array"}),". Ngo\xe0i ra ch\xfang ta c\xf2n c\xf3 th\u1ec3\r\nt\xe1c v\u1edbi Series d\u1ef1a v\xe0o index"]}),"\n",(0,i.jsxs)(e.p,{children:["V\xed d\u1ee5 ta kh\u1edfi t\u1ea1o m\u1ed9t Series v\xe0 g\xe1n v\xe0o bi\u1ebfn ",(0,i.jsx)(e.code,{children:"s"})]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:'s = pd.Series(data=[0, 1, 2, 3, 4, 5], index=["a", "b", "c", "d", "e", "f"])\n'})}),"\n",(0,i.jsx)(e.h3,{id:"hi\u1ec3n-th\u1ecb-to\xe0n-b\u1ed9-gi\xe1-tr\u1ecb-c\u1ee7a-series",children:"Hi\u1ec3n th\u1ecb to\xe0n b\u1ed9 gi\xe1 tr\u1ecb c\u1ee7a Series"}),"\n",(0,i.jsxs)(e.p,{children:["\u0110\u1ec3 xem to\xe0n b\u1ed9 c\xe1c gi\xe1 tr\u1ecb c\u1ee7a m\u1ed9t Series, ta c\xf3 th\u1ec3 g\u1ecdi thu\u1ed9c t\xednh ",(0,i.jsx)(e.code,{children:".values"}),", k\u1ebft qu\u1ea3 s\u1ebd tr\u1ea3 v\u1ec1 d\u1ea1ng ",(0,i.jsx)(e.code,{children:"numpy.ndarray"})]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"s.values\n"})}),"\n",(0,i.jsx)("pythonoutput",{children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"array([0, 1, 2, 3, 4, 5])\n"})})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"type(s.values)\n"})}),"\n",(0,i.jsx)("pythonoutput",{children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"numpy.ndarray\n"})})}),"\n",(0,i.jsxs)(e.p,{children:["Vi\u0300 k\xea\u0301t qua\u0309 tra\u0309 v\xea\u0300 cu\u0309a ",(0,i.jsx)(e.code,{children:".values"})," la\u0300 ",(0,i.jsx)(e.code,{children:"numpy.ndarray"})," n\xean ta co\u0301 thao ta\u0301c m\xf4\u0323t s\xf4\u0301 phe\u0301p ti\u0301nh tr\xean numpy nh\u01b0 c\xf4\u0323ng th\xeam gia\u0301 tri\u0323"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"s.values + 1 \n"})}),"\n",(0,i.jsx)("pythonoutput",{children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"array([1, 2, 3, 4, 5, 6], dtype=int64)\n"})})}),"\n",(0,i.jsx)(e.p,{children:"Ho\u1eb7c nh\xe2n"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"s.values * 2\n"})}),"\n",(0,i.jsx)("pythonoutput",{children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"array([ 0,  2,  4,  6,  8, 10], dtype=int64)\n"})})}),"\n",(0,i.jsxs)(e.p,{children:["Trong khi \u0111o\u0301, mu\xf4\u0301n n\xf4\u0301i th\xeam gia\u0301 tri\u0323 v\u01a1\u0301i m\xf4\u0323t list cho tr\u01b0\u01a1\u0301c, thay vi\u0300 chuy\xea\u0309n v\xea\u0300 ",(0,i.jsx)(e.code,{children:".values"}),", ta co\u0301 th\xea\u0309 chuy\xea\u0309n v\xea\u0300 da\u0323ng list b\u0103\u0300ng ph\u01b0\u01a1ng th\u01b0\u0301c ",(0,i.jsx)(e.code,{children:".to_list()"})," r\xf4\u0300i a\u0301p du\u0323ng ca\u0301c ph\u01b0\u01a1ng th\u01b0\u0301c cho ki\xea\u0309u list."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"s.to_list() + [6, 7, 8, 9, 10]\n"})}),"\n",(0,i.jsx)("pythonoutput",{children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\n"})})}),"\n",(0,i.jsx)(e.h3,{id:"truy-c\u1eadp-m\u1ed9t-ph\u1ea7n-t\u1eed-trong-series",children:"Truy c\u1eadp m\u1ed9t ph\u1ea7n t\u1eed trong Series"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:r(105).A+"",width:"632",height:"457"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Theo indice"})}),"\n",(0,i.jsx)(e.p,{children:"indice trong Series th\xea\u0309 hi\xea\u0323n vi\u0323 tri\u0301 cu\u0309a ph\xe2\u0300n t\u01b0\u0309 Series \u0111o\u0301, hi\xea\u0309u n\xf4m na la\u0300 no\u0301 \u01a1\u0309 vi\u0323 tri\u0301 th\u01b0\u0301 m\xe2\u0301y, do\u0300ng th\u01b0\u0301 m\xe2\u0301y cu\u0309a Series"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"s[2]\n"})}),"\n",(0,i.jsx)("pythonoutput",{children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"2\n"})})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Theo index"})}),"\n",(0,i.jsxs)(e.p,{children:["index trong Series th\xea\u0309 hi\xea\u0323n chi\u0309 mu\u0323c cu\u0309a ph\xe2\u0300n t\u01b0\u0309 Series \u0111o\u0301, kh\xf4ng gi\xf4\u0301ng nh\u01b0 indice, index co\u0301 th\xea\u0309 la\u0300 ki\xea\u0309u s\xf4\u0301 ho\u0103\u0323c ki\xea\u0309u ch\u01b0\u0303 ho\u0103\u0323c co\u0301 th\xea\u0309 la\u0300 ki\xea\u0309u ",(0,i.jsx)(e.code,{children:"datetime"})]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:'s["c"]\n'})}),"\n",(0,i.jsx)("pythonoutput",{children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"2 \n"})})}),"\n",(0,i.jsx)(e.admonition,{title:"L\u01b0u \xfd",type:"tip",children:(0,i.jsxs)(e.p,{children:["Nh\u01b0 vi\u0301 du\u0323 tr\xean, Series ",(0,i.jsx)(e.code,{children:"s"})," cu\u0309a chu\u0301ng ta \u0111a\u0303 \u0111\u01b0\u01a1\u0323c \u0111a\u0301nh index la\u0300 da\u0323ng ch\u01b0\u0303, ",(0,i.jsx)(e.code,{children:'["a", "b", "c", "d", "e", "f"]'}),". V\xe2\u0323y n\xea\u0301u chu\u0301ng ta co\u0301 index la\u0300 da\u0323ng s\xf4\u0301 thi\u0300 se\u0303 nh\u01b0 th\xea\u0301 na\u0300o?"]})}),"\n",(0,i.jsx)(e.p,{children:"Vi\u0301 du\u0323 ta co\u0301 m\xf4\u0323t Series co\u0301 index kha\u0301c so v\u01a1\u0301i indice"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"s2 = pd.Series(data=[0, 1, 2, 3, 4, 5], index=[0, 2, 3, 5, 8, 9])\r\ns2\n"})}),"\n",(0,i.jsx)("pythonoutput",{children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"0    0\r\n2    1\r\n3    2\r\n5    3\r\n8    4\r\n9    5\r\ndtype: int64\n"})})}),"\n",(0,i.jsxs)(e.p,{children:["Lu\u0301c na\u0300y khi truy\xea\u0300n ",(0,i.jsx)(e.code,{children:"s2[3]"})," thi\u0300 k\xea\u0301t qua\u0309 se\u0303 la\u0300"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"s2[3]\n"})}),"\n",(0,i.jsx)("pythonoutput",{children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"2\n"})})}),"\n",(0,i.jsx)(e.admonition,{title:"L\u01b0u \xfd",type:"tip",children:(0,i.jsxs)(e.p,{children:["V\xe2\u0323y n\xea\u0301u chu\u0301ng ta co\u0301 index la\u0300 da\u0323ng s\xf4\u0301 thi\u0300 vi\xea\u0323c truy\xea\u0300n m\xf4\u0323t s\xf4\u0301 va\u0300o ",(0,i.jsx)(e.code,{children:"[]"})," se\u0303 \u01b0u ti\xean index cu\u0309a chu\u0301ng.\r\nTrong vi\u0301 du\u0323 tr\xean se\u0303 \u01b0u ti\xean index la\u0300 ",(0,i.jsx)(e.code,{children:"3"})," co\u0301 gia\u0301 tri\u0323 ",(0,i.jsx)(e.code,{children:"2"})," ch\u1ee9 kh\xf4ng ph\u1ea3i l\xe0 indice ",(0,i.jsx)(e.code,{children:"3"})," c\xf3 gi\xe1 tr\u1ecb ",(0,i.jsx)(e.code,{children:"3"})]})}),"\n",(0,i.jsx)(e.h3,{id:"l\u1ea5y-series-con-c\u1ee7a-m\u1ed9t-series",children:"L\u1ea5y Series con c\u1ee7a m\u1ed9t Series"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:'s = pd.Series(data=[0, 1, 2, 3, 4, 5], index=["a", "b", "c", "d", "e", "f"])\n'})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Theo slice indice"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"s[1:3]\n"})}),"\n",(0,i.jsx)("pythonoutput",{children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"b    1\r\nd    2\r\ndtype: int64\n"})})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Theo slice index"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:'s["b":"c"]\n'})}),"\n",(0,i.jsx)("pythonoutput",{children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"b    1\r\nc    2\r\ndtype: int64\n"})})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Theo list indice"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"s[[1, 2, 4]]\n"})}),"\n",(0,i.jsx)("pythonoutput",{children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"b    1\r\nc    2\r\ne    4\r\ndtype: int64\n"})})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Theo list index"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:'s[["b", "c", "e"]]\n'})}),"\n",(0,i.jsx)("pythonoutput",{children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"b    1\r\nc    2\r\ne    4\r\ndtype: int64\n"})})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Theo \u0111i\u1ec1u ki\u1ec7n"})}),"\n",(0,i.jsx)(e.p,{children:"Ch\xfang ta c\xf3 th\u1ec3 l\u1ea5y Series con theo \u0111i\u1ec1u ki\u1ec7n"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"s[s > 3]\n"})}),"\n",(0,i.jsx)("pythonoutput",{children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"e    4\r\nf    5\r\ndtype: int64\n"})})}),"\n",(0,i.jsx)(e.p,{children:"Ch\xfang ta c\xf3 th\u1ec3 l\u1ea5y ph\u1ee9c t\u1ea1p h\u01a1n nh\u01b0 l\u1ea5y nh\u1eefng ph\u1ea9n t\u1eeb l\u1edbn h\u01a1n trung b\xecnh c\xe1c ph\u1ea7n t\u1eed"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"s[s > s.mean()]\n"})}),"\n",(0,i.jsx)("pythonoutput",{children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"d    3\r\ne    4\r\nf    5\r\ndtype: int64\n"})})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Theo danh s\xe1ch boolean"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"s[[False, False, False, False,  True,  True]]\n"})}),"\n",(0,i.jsx)("pythonoutput",{children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"e    4\r\nf    5\r\ndtype: int64\n"})})})]})}function o(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(l,{...n})}):l(n)}},9365:(n,e,r)=>{r.d(e,{A:()=>s});r(6540);var i=r(4164);const t={tabItem:"tabItem_Ymn6"};var c=r(4848);function s(n){let{children:e,hidden:r,className:s}=n;return(0,c.jsx)("div",{role:"tabpanel",className:(0,i.A)(t.tabItem,s),hidden:r,children:e})}},1470:(n,e,r)=>{r.d(e,{A:()=>S});var i=r(6540),t=r(4164),c=r(3104),s=r(6347),d=r(205),a=r(7485),h=r(1682),l=r(9466);function o(n){return i.Children.toArray(n).filter((n=>"\n"!==n)).map((n=>{if(!n||(0,i.isValidElement)(n)&&function(n){const{props:e}=n;return!!e&&"object"==typeof e&&"value"in e}(n))return n;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof n.type?n.type:n.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(n){const{values:e,children:r}=n;return(0,i.useMemo)((()=>{const n=e??function(n){return o(n).map((n=>{let{props:{value:e,label:r,attributes:i,default:t}}=n;return{value:e,label:r,attributes:i,default:t}}))}(r);return function(n){const e=(0,h.X)(n,((n,e)=>n.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((n=>n.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(n),n}),[e,r])}function p(n){let{value:e,tabValues:r}=n;return r.some((n=>n.value===e))}function x(n){let{queryString:e=!1,groupId:r}=n;const t=(0,s.W6)(),c=function(n){let{queryString:e=!1,groupId:r}=n;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:e,groupId:r});return[(0,a.aZ)(c),(0,i.useCallback)((n=>{if(!c)return;const e=new URLSearchParams(t.location.search);e.set(c,n),t.replace({...t.location,search:e.toString()})}),[c,t])]}function j(n){const{defaultValue:e,queryString:r=!1,groupId:t}=n,c=u(n),[s,a]=(0,i.useState)((()=>function(n){let{defaultValue:e,tabValues:r}=n;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!p({value:e,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${r.map((n=>n.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const i=r.find((n=>n.default))??r[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:e,tabValues:c}))),[h,o]=x({queryString:r,groupId:t}),[j,g]=function(n){let{groupId:e}=n;const r=function(n){return n?`docusaurus.tab.${n}`:null}(e),[t,c]=(0,l.Dv)(r);return[t,(0,i.useCallback)((n=>{r&&c.set(n)}),[r,c])]}({groupId:t}),y=(()=>{const n=h??j;return p({value:n,tabValues:c})?n:null})();(0,d.A)((()=>{y&&a(y)}),[y]);return{selectedValue:s,selectValue:(0,i.useCallback)((n=>{if(!p({value:n,tabValues:c}))throw new Error(`Can't select invalid tab value=${n}`);a(n),o(n),g(n)}),[o,g,c]),tabValues:c}}var g=r(2303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=r(4848);function b(n){let{className:e,block:r,selectedValue:i,selectValue:s,tabValues:d}=n;const a=[],{blockElementScrollPositionUntilNextRender:h}=(0,c.a_)(),l=n=>{const e=n.currentTarget,r=a.indexOf(e),t=d[r].value;t!==i&&(h(e),s(t))},o=n=>{let e=null;switch(n.key){case"Enter":l(n);break;case"ArrowRight":{const r=a.indexOf(n.currentTarget)+1;e=a[r]??a[0];break}case"ArrowLeft":{const r=a.indexOf(n.currentTarget)-1;e=a[r]??a[a.length-1];break}}e?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":r},e),children:d.map((n=>{let{value:e,label:r,attributes:c}=n;return(0,m.jsx)("li",{role:"tab",tabIndex:i===e?0:-1,"aria-selected":i===e,ref:n=>a.push(n),onKeyDown:o,onClick:l,...c,className:(0,t.A)("tabs__item",y.tabItem,c?.className,{"tabs__item--active":i===e}),children:r??e},e)}))})}function v(n){let{lazy:e,children:r,selectedValue:t}=n;const c=(Array.isArray(r)?r:[r]).filter(Boolean);if(e){const n=c.find((n=>n.props.value===t));return n?(0,i.cloneElement)(n,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:c.map(((n,e)=>(0,i.cloneElement)(n,{key:e,hidden:n.props.value!==t})))})}function f(n){const e=j(n);return(0,m.jsxs)("div",{className:(0,t.A)("tabs-container",y.tabList),children:[(0,m.jsx)(b,{...n,...e}),(0,m.jsx)(v,{...n,...e})]})}function S(n){const e=(0,g.A)();return(0,m.jsx)(f,{...n,children:o(n.children)},String(e))}},105:(n,e,r)=>{r.d(e,{A:()=>i});const i=r.p+"assets/images/indice_index-91f84aca76ddd9557d9c271d058cbed4.png"},5967:(n,e,r)=>{r.d(e,{A:()=>i});const i=r.p+"assets/images/series-8bc5a6a866ec89bfed5c6a9c2cdd13b3.png"},8453:(n,e,r)=>{r.d(e,{R:()=>s,x:()=>d});var i=r(6540);const t={},c=i.createContext(t);function s(n){const e=i.useContext(c);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:s(n.components),i.createElement(c.Provider,{value:e},n.children)}}}]);