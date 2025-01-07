"use strict";(self.webpackChunkdsd_project=self.webpackChunkdsd_project||[]).push([[3065],{1163:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>o,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var t=r(4848),i=r(8453);r(1470),r(9365);const c={sidebar_label:"Series",sidebar_position:2},s="Series",a={id:"kungfupandas/DataStructure/Series",title:"Series",description:"Gi\u1edbi thi\u1ec7u",source:"@site/docs/kungfupandas/01-DataStructure/01-Series.mdx",sourceDirName:"kungfupandas/01-DataStructure",slug:"/kungfupandas/DataStructure/Series",permalink:"/docs/kungfupandas/DataStructure/Series",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Series",sidebar_position:2},sidebar:"tailieuSidebar",previous:{title:"Gi\u1edbi thi\u1ec7u",permalink:"/docs/kungfupandas/DataStructure/Introduction"},next:{title:"DataFrame",permalink:"/docs/kungfupandas/DataStructure/DataFrame"}},d={},l=[{value:"Gi\u1edbi thi\u1ec7u",id:"gi\u1edbi-thi\u1ec7u",level:2},{value:"C\xe1c c\xe1ch kh\u1edfi t\u1ea1o",id:"c\xe1c-c\xe1ch-kh\u1edfi-t\u1ea1o",level:2},{value:"Kh\u1edfi t\u1ea1o Series b\u1eb1ng List ho\u1eb7c d\u1ea1ng numpy.array",id:"kh\u1edfi-t\u1ea1o-series-b\u1eb1ng-list-ho\u1eb7c-d\u1ea1ng-numpyarray",level:3},{value:"Kh\u1edfi t\u1ea1o Series b\u1eb1ng dictionary",id:"kh\u1edfi-t\u1ea1o-series-b\u1eb1ng-dictionary",level:3},{value:"Kh\u1edfi t\u1ea1o Series b\u1eb1ng m\u1ed9t gi\xe1 tr\u1ecb duy nh\u1ea5t",id:"kh\u1edfi-t\u1ea1o-series-b\u1eb1ng-m\u1ed9t-gi\xe1-tr\u1ecb-duy-nh\u1ea5t",level:3},{value:"M\u1ed9t s\u1ed1 thao t\xe1c c\u01a1 b\u1ea3n v\u1edbi Series",id:"m\u1ed9t-s\u1ed1-thao-t\xe1c-c\u01a1-b\u1ea3n-v\u1edbi-series",level:2},{value:"Hi\u1ec3n th\u1ecb to\xe0n b\u1ed9 gi\xe1 tr\u1ecb c\u1ee7a Series",id:"hi\u1ec3n-th\u1ecb-to\xe0n-b\u1ed9-gi\xe1-tr\u1ecb-c\u1ee7a-series",level:3},{value:"Truy c\u1eadp m\u1ed9t ph\u1ea7n t\u1eed trong Series",id:"truy-c\u1eadp-m\u1ed9t-ph\u1ea7n-t\u1eed-trong-series",level:3},{value:"L\u1ea5y Series con c\u1ee7a m\u1ed9t Series",id:"l\u1ea5y-series-con-c\u1ee7a-m\u1ed9t-series",level:3}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"series",children:"Series"}),"\n",(0,t.jsx)(n.h2,{id:"gi\u1edbi-thi\u1ec7u",children:"Gi\u1edbi thi\u1ec7u"}),"\n",(0,t.jsxs)(n.p,{children:["Trong Pandas, ",(0,t.jsx)(n.code,{children:"Series"})," l\xe0 m\u1ea3ng 1 chi\u1ec1u bao g\u1ed3m m\u1ed9t danh s\xe1ch gi\xe1 tr\u1ecb, v\xe0 m\u1ed9t m\u1ea3ng ch\u1ee9a index\r\nc\u1ee7a c\xe1c gi\xe1 tr\u1ecb. Trong d\u1eef li\u1ec7u d\u1ea3ng b\u1ea3ng, m\u1ed7i Series \u0111\u01b0\u1ee3c xem nh\u01b0 l\xe0 m\u1ed9t c\u1ed9t c\u1ee7a b\u1ea3ng \u0111\xf3.\r\nC\xe1ch \u0111\u01a1n gi\u1ea3n \u0111\u1ec3 t\u1ea1o Series nh\u01b0 sau"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(5967).A+"",width:"569",height:"454"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"s = pd.Series(data, index=None, name=None)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Trong \u0111\xf3 ",(0,t.jsx)(n.code,{children:"data"})," c\xf3 th\u1ec3  c\xf3 d\u1ea1ng:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["d\u1ea1ng List c\u1ee7a Python ho\u1eb7c d\u1ea1ng ",(0,t.jsx)(n.code,{children:"numpy.array"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"dictionary c\u1ee7a Python"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"l\xe0 m\u1ed9t h\u1eb1ng s\u1ed1 duy nh\u1ea5t"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"index"})," c\xf3 th\u1ec3 truy\u1ec1n ho\u1eb7c kh\xf4ng, t\xf9y v\xe0o d\u1ea1ng c\u1ee7a ",(0,t.jsx)(n.code,{children:"data"})," m\xe0 ",(0,t.jsx)(n.code,{children:"index"})," s\u1ebd \u0111\u01b0\u1ee3c \u0111\u1ecbnh ngh\u0129a kh\xe1c nhau.\r\n",(0,t.jsx)(n.code,{children:"name"})," l\xe0 t\xean c\u1ee7a ",(0,t.jsx)(n.code,{children:"Series"}),", gi\xe1 tr\u1ecb n\xe0y c\u0169ng kh\xf4ng nh\u1ea5t thi\u1ebft ph\u1ea3i truy\u1ec1n v\xe0o."]}),"\n",(0,t.jsx)(n.h2,{id:"c\xe1c-c\xe1ch-kh\u1edfi-t\u1ea1o",children:"C\xe1c c\xe1ch kh\u1edfi t\u1ea1o"}),"\n",(0,t.jsx)(n.h3,{id:"kh\u1edfi-t\u1ea1o-series-b\u1eb1ng-list-ho\u1eb7c-d\u1ea1ng-numpyarray",children:"Kh\u1edfi t\u1ea1o Series b\u1eb1ng List ho\u1eb7c d\u1ea1ng numpy.array"}),"\n",(0,t.jsxs)(n.p,{children:["B\xe2y gi\u1edd ta c\xf3 th\u1ec3 kh\u1edfi t\u1ea1o m\u1ed9t Series v\u1edbi d\u1eef li\u1ec7u \u0111\u1ea7u v\xe0o l\xe0 m\u1ed9t List \u0111\u01a1n gi\u1ea3n ",(0,t.jsx)(n.code,{children:'["m\u1ed9t", "hai", "ba"]'})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'pd.Series(data=["m\u1ed9t", "hai", "ba"])\n'})}),"\n",(0,t.jsxs)(n.p,{children:["L\xfac n\xe0y, h\u1ec7 th\u1ed1ng s\u1ebd m\u1eb7c \u0111\u1ecbnh ",(0,t.jsx)(n.code,{children:"index"})," s\u1ebd c\xf3 gi\xe1 tr\u1ecb t\u1eeb ",(0,t.jsx)(n.code,{children:"0"})," \u0111\u1ebfn \u0111\u1ed9 d\xe0i c\u1ee7a ",(0,t.jsx)(n.code,{children:"list - 1"})," t\u1ee9c l\xe0 2"]}),"\n",(0,t.jsx)("pythonoutput",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"0    m\u1ed9t\r\n1    hai\r\n2     ba\r\ndtype: object\n"})})}),"\n",(0,t.jsxs)(n.p,{children:["Ch\xfang ta c\xf3 th\u1ec3 thay \u0111\u1ed5i m\u1eb7c \u0111inh ",(0,t.jsx)(n.code,{children:"index"})," truy\u1ec1n v\xe0o b\u1eb1ng c\xe1ch th\xeam v\xe0o bi\u1ebfn ",(0,t.jsx)(n.code,{children:"index"})," nh\u01b0 v\xed d\u1ee5 d\u01b0\u1edbi \u0111\xe2y"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'pd.Series(data=["m\u1ed9t", "hai", "ba"], index=["m", "h", "b"])\n'})}),"\n",(0,t.jsx)("pythonoutput",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"m    m\u1ed9t\r\nh    hai\r\nb     ba\r\ndtype: object\n"})})}),"\n",(0,t.jsxs)(n.p,{children:["Khi ch\xfang ta truy\u1ec1n ",(0,t.jsx)(n.code,{children:"index"})," c\xf3 \u0111\u1ed9 d\xe0i nh\u1ecf h\u01a1n \u0111\u1ed9 d\xe0i c\u1ee7a m\u1ea3ng \u0111\u01b0a v\xe0o th\xec pandas s\u1ebd b\xe1o l\u1ed7i, trong v\xed d\u1ee5 d\u01b0\u1edbi \u0111\xe2y m\xecnh s\u1ebd\r\ntruy\u1ec1n index ch\u1ec9 2 ph\u1ea7n t\u1eed trong khi data c\xf3 3 ph\u1ea7n t\u1eed"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'pd.Series(data=["m\u1ed9t", "hai", "ba"], index=["m", "h"])\n'})}),"\n",(0,t.jsx)("pythonoutput",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"ValueError: Length of values (3) does not match length of index (2)\n"})})}),"\n",(0,t.jsxs)(n.p,{children:["T\u01b0\u01a1ng t\u1ef1 khi truy\u1ec1n ",(0,t.jsx)(n.code,{children:"index"})," c\xf3 \u0111\u1ed9 d\xe0i l\u1edbn h\u01a1n, pandas c\u0169ng b\xe1o l\u1ed7i t\u01b0\u01a1ng t\u1ef1"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'pd.Series(data=["m\u1ed9t", "hai", "ba"], index=["m", "h", "b","t"])\n'})}),"\n",(0,t.jsx)("pythonoutput",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"ValueError: Length of values (3) does not match length of index (4)\n"})})}),"\n",(0,t.jsx)(n.p,{children:"B\u1ea1n c\u0169ng c\xf3 th\u1ec3 thay th\u1ebf list b\u1eb1ng numpy array nh\u01b0 sau"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'pd.Series(data=np.array(["m\u1ed9t", "hai", "ba"]), index=["m", "h", "b"])\n'})}),"\n",(0,t.jsx)("pythonoutput",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"m    m\u1ed9t\r\nh    hai\r\nb     ba\r\ndtype: object\n"})})}),"\n",(0,t.jsxs)(n.p,{children:["Ngo\xe0i ra ch\xfang ta c\xf3 th\u1ec3 \u0111\u1eb7t t\xean cho Series b\u1eb1ng tham s\u1ed1 ",(0,t.jsx)(n.code,{children:"name"}),", tuy nhi\xean m\xecnh th\u1ea5y kh\xf4ng c\u1ea7n thi\u1ebft l\u1eafm"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'pd.Series(data=np.array(["m\u1ed9t", "hai", "ba"]), index=["m", "h", "b"], name=\'meow\')\n'})}),"\n",(0,t.jsx)("pythonoutput",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"m    m\u1ed9t\r\nh    hai\r\nb     ba\r\nName: meow, dtype: object\n"})})}),"\n",(0,t.jsx)(n.h3,{id:"kh\u1edfi-t\u1ea1o-series-b\u1eb1ng-dictionary",children:"Kh\u1edfi t\u1ea1o Series b\u1eb1ng dictionary"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'pd.Series({"b": 1, "a":0, "c": 2})\n'})}),"\n",(0,t.jsx)("pythonoutput",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"b    1\r\na    0\r\nc    2\r\ndtype: int64\n"})})}),"\n",(0,t.jsx)(n.admonition,{title:"L\u01b0u \xfd",type:"tip",children:(0,t.jsxs)(n.p,{children:["Trong tr\u01b0\u1eddng h\u1ee3p b\u1ea1n truy\u1ec1n bi\u1ebfn ",(0,t.jsx)(n.code,{children:"index"})," v\xe0o, ",(0,t.jsx)(n.code,{children:"Series"})," s\u1ebd \u0111\xe1nh index d\u1ef1a v\xe0o th\u1ee9 t\u1ef1 trong ",(0,t.jsx)(n.code,{children:"index"}),", v\xe0 ch\u1ec9 ch\u1ee9a c\xe1c gi\xe1 tr\u1ecb c\u1ee7a dict c\xf3 key n\u1eb1m trong ",(0,t.jsx)(n.code,{children:"index"}),".\r\nV\u1edbi c\xe1c gi\xe1 tr\u1ecb trong bi\u1ebfn ",(0,t.jsx)(n.code,{children:"index"})," kh\xf4ng c\xf3 trong keys c\u1ee7a dict, ",(0,t.jsx)(n.code,{children:"Series"})," s\u1ebd t\u1ea1o ra c\xe1c gi\xe1 tr\u1ecb b\u1ecb thi\u1ebfu ",(0,t.jsx)(n.code,{children:"NaN"}),"."]})}),"\n",(0,t.jsx)(n.p,{children:"V\xed d\u1ee5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'pd.Series({"a": 0, "b": 1, "c": 2, "e": 4}, index=["b", "c", "d", "a"])\n'})}),"\n",(0,t.jsx)("pythonoutput",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"b    1.0\r\nc    2.0\r\nd    NaN\r\na    0.0\r\ndtype: float64\n"})})}),"\n",(0,t.jsx)(n.admonition,{title:"L\u01b0u \xfd",type:"tip",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"NaN"})," l\xe0 gi\xe1 tr\u1ecb m\u1eb7c \u0111\u1ecbnh cho d\u1eef li\u1ec7u b\u1ecb thi\u1ebfu trong pandas v\xe0 gi\xe1 tr\u1ecb n\xe0y c\xf3 ki\u1ec3u\r\nl\xe0 ",(0,t.jsx)(n.code,{children:"float64"})," n\xean ki\u1ec3u d\u1eef li\u1ec7u c\u1ee7a ",(0,t.jsx)(n.code,{children:"Series"})," c\u0169ng l\xe0 ",(0,t.jsx)(n.code,{children:"float64"})," kh\xe1c v\u1edbi ",(0,t.jsx)(n.code,{children:"int64"})," \u1edf v\xed d\u1ee5 tr\u01b0\u1edbc \u0111\xf3."]})}),"\n",(0,t.jsx)(n.h3,{id:"kh\u1edfi-t\u1ea1o-series-b\u1eb1ng-m\u1ed9t-gi\xe1-tr\u1ecb-duy-nh\u1ea5t",children:"Kh\u1edfi t\u1ea1o Series b\u1eb1ng m\u1ed9t gi\xe1 tr\u1ecb duy nh\u1ea5t"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'pd.Series(data=1, index=["a", "b", "c"])\n'})}),"\n",(0,t.jsx)("pythonoutput",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-{.python_output}",children:"a    1\r\nb    1\r\nc    1\r\ndtype: int64\n"})})}),"\n",(0,t.jsx)(n.h2,{id:"m\u1ed9t-s\u1ed1-thao-t\xe1c-c\u01a1-b\u1ea3n-v\u1edbi-series",children:"M\u1ed9t s\u1ed1 thao t\xe1c c\u01a1 b\u1ea3n v\u1edbi Series"}),"\n",(0,t.jsxs)(n.p,{children:["Thao t\xe1c tr\xean ",(0,t.jsx)(n.code,{children:"Series"})," c\u0169ng gi\u1ed1ng v\u1edbi thao t\xe1c tr\xean ",(0,t.jsx)(n.code,{children:"numpy.array"}),". Ngo\xe0i ra ch\xfang ta c\xf2n c\xf3 th\u1ec3\r\nt\xe1c v\u1edbi Series d\u1ef1a v\xe0o index"]}),"\n",(0,t.jsx)(n.p,{children:"V\xed d\u1ee5:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'s = pd.Series(data=[0, 1, 2, 3, 4, 5], index=["a", "b", "c", "d", "e", "f"])\n'})}),"\n",(0,t.jsx)(n.h3,{id:"hi\u1ec3n-th\u1ecb-to\xe0n-b\u1ed9-gi\xe1-tr\u1ecb-c\u1ee7a-series",children:"Hi\u1ec3n th\u1ecb to\xe0n b\u1ed9 gi\xe1 tr\u1ecb c\u1ee7a Series"}),"\n",(0,t.jsxs)(n.p,{children:["\u0110\u1ec3 xem to\xe0n b\u1ed9 c\xe1c gi\xe1 tr\u1ecb c\u1ee7a m\u1ed9t Series, ta c\xf3 th\u1ec3 g\u1ecdi thu\u1ed9c t\xednh ",(0,t.jsx)(n.code,{children:".values"}),", k\u1ebft qu\u1ea3 s\u1ebd tr\u1ea3 v\u1ec1 d\u1ea1ng ",(0,t.jsx)(n.code,{children:"numpy.ndarray"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"s.values\n"})}),"\n",(0,t.jsx)("pythonoutput",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"array([0, 1, 2, 3, 4, 5])\n"})})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"type(s.values)\n"})}),"\n",(0,t.jsx)("pythonoutput",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"numpy.ndarray\n"})})}),"\n",(0,t.jsxs)(n.p,{children:["Vi\u0300 k\xea\u0301t qua\u0309 tra\u0309 v\xea\u0300 cu\u0309a ",(0,t.jsx)(n.code,{children:".values"})," la\u0300 ",(0,t.jsx)(n.code,{children:"numpy.ndarray"})," n\xean ta co\u0301 thao ta\u0301c m\xf4\u0323t s\xf4\u0301 phe\u0301p ti\u0301nh tr\xean numpy nh\u01b0 c\xf4\u0323ng th\xeam gia\u0301 tri\u0323"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"s.values + 1 \n"})}),"\n",(0,t.jsx)("pythonoutput",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"array([1, 2, 3, 4, 5, 6], dtype=int64)\n"})})}),"\n",(0,t.jsxs)(n.p,{children:["Trong khi \u0111o\u0301, mu\xf4\u0301n n\xf4\u0301i th\xeam gia\u0301 tri\u0323 v\u01a1\u0301i m\xf4\u0323t list cho tr\u01b0\u01a1\u0301c, thay vi\u0300 chuy\xea\u0309n v\xea\u0300 ",(0,t.jsx)(n.code,{children:".values"}),", ta co\u0301 th\xea\u0309 chuy\xea\u0309n v\xea\u0300 da\u0323ng list b\u0103\u0300ng ph\u01b0\u01a1ng th\u01b0\u0301c ",(0,t.jsx)(n.code,{children:".to_list()"})," r\xf4\u0300i a\u0301p du\u0323ng ca\u0301c ph\u01b0\u01a1ng th\u01b0\u0301c cho ki\xea\u0309u list."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"s.to_list() + [6, 7, 8, 9, 10]\n"})}),"\n",(0,t.jsx)("pythonoutput",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\n"})})}),"\n",(0,t.jsx)(n.h3,{id:"truy-c\u1eadp-m\u1ed9t-ph\u1ea7n-t\u1eed-trong-series",children:"Truy c\u1eadp m\u1ed9t ph\u1ea7n t\u1eed trong Series"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Theo indice"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"indice trong Series th\xea\u0309 hi\xea\u0323n vi\u0323 tri\u0301 cu\u0309a ph\xe2\u0300n t\u01b0\u0309 Series \u0111o\u0301, hi\xea\u0309u n\xf4m na la\u0300 no\u0301 \u01a1\u0309 vi\u0323 tri\u0301 th\u01b0\u0301 m\xe2\u0301y, do\u0300ng th\u01b0\u0301 m\xe2\u0301y cu\u0309a Series"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"s[2]\n"})}),"\n",(0,t.jsx)("pythonoutput",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"2\n"})})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Theo index"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["index trong Series th\xea\u0309 hi\xea\u0323n chi\u0309 mu\u0323c cu\u0309a ph\xe2\u0300n t\u01b0\u0309 Series \u0111o\u0301, kh\xf4ng gi\xf4\u0301ng nh\u01b0 indice, index co\u0301 th\xea\u0309 la\u0300 ki\xea\u0309u s\xf4\u0301 ho\u0103\u0323c ki\xea\u0309u ch\u01b0\u0303 ho\u0103\u0323c co\u0301 th\xea\u0309 la\u0300 ki\xea\u0309u ",(0,t.jsx)(n.code,{children:"datetime"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'s["c"]\n'})}),"\n",(0,t.jsx)("pythonoutput",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"2 \n"})})}),"\n",(0,t.jsx)(n.admonition,{title:"L\u01b0u \xfd",type:"tip",children:(0,t.jsxs)(n.p,{children:["Nh\u01b0 vi\u0301 du\u0323 tr\xean, Series ",(0,t.jsx)(n.code,{children:"s"})," cu\u0309a chu\u0301ng ta \u0111a\u0303 \u0111\u01b0\u01a1\u0323c \u0111a\u0301nh index la\u0300 da\u0323ng ch\u01b0\u0303, ",(0,t.jsx)(n.code,{children:'["a", "b", "c", "d", "e", "f"]'}),". V\xe2\u0323y n\xea\u0301u chu\u0301ng ta co\u0301 index la\u0300 da\u0323ng s\xf4\u0301 thi\u0300 se\u0303 nh\u01b0 th\xea\u0301 na\u0300o?"]})}),"\n",(0,t.jsx)(n.p,{children:"Vi\u0301 du\u0323 ta co\u0301 m\xf4\u0323t Series co\u0301 index kha\u0301c so v\u01a1\u0301i indice"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"s2 = pd.Series(data=[0, 1, 2, 3, 4, 5], index=[0, 2, 3, 5, 8, 9])\r\ns2\n"})}),"\n",(0,t.jsx)("pythonoutput",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"0    0\r\n2    1\r\n3    2\r\n5    3\r\n8    4\r\n9    5\r\ndtype: int64\n"})})}),"\n",(0,t.jsxs)(n.p,{children:["Lu\u0301c na\u0300y khi truy\xea\u0300n ",(0,t.jsx)(n.code,{children:"s2[3]"})," thi\u0300 k\xea\u0301t qua\u0309 se\u0303 la\u0300"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"s2[3]\n"})}),"\n",(0,t.jsx)("pythonoutput",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"2\n"})})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-{block2,",metastring:"type='rmdnote'}",children:"**_L\u01b0u \xfd_:** \r\nV\xe2\u0323y n\xea\u0301u chu\u0301ng ta co\u0301 index la\u0300 da\u0323ng s\xf4\u0301 thi\u0300 vi\xea\u0323c truy\xea\u0300n m\xf4\u0323t s\xf4\u0301 va\u0300o `[]` se\u0303 \u01b0u ti\xean index cu\u0309a chu\u0301ng. Trong vi\u0301 du\u0323 tr\xean se\u0303 \u01b0u ti\xean index la\u0300 3 co\u0301 gia\u0301 tri\u0323 2\n"})}),"\n",(0,t.jsx)(n.h3,{id:"l\u1ea5y-series-con-c\u1ee7a-m\u1ed9t-series",children:"L\u1ea5y Series con c\u1ee7a m\u1ed9t Series"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Theo Slice indice"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"s[1:3]\n"})}),"\n",(0,t.jsx)("pythonoutput",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"b    1\r\nd    2\r\ndtype: int64\n"})})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Theo Slice index"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'s["b":"c"]\n'})}),"\n",(0,t.jsx)("pythonoutput",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"b    1\r\nc    2\r\ndtype: int64\n"})})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Theo List indice"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"s[[1, 2, 4]]\n"})}),"\n",(0,t.jsx)("pythonoutput",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"b    1\r\nc    2\r\ne    4\r\ndtype: int64\n"})})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Theo List index"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'s[["b", "c", "e"]]\n'})}),"\n",(0,t.jsx)("pythonoutput",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"b    1\r\nc    2\r\ne    4\r\ndtype: int64\n"})})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Theo \u0110i\u1ec1u ki\u1ec7n"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"s[s > s.mean()]\n"})}),"\n",(0,t.jsx)("pythonoutput",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"d    3\r\ne    4\r\nf    5\r\ndtype: int64\n"})})})]})}function o(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},9365:(e,n,r)=>{r.d(n,{A:()=>s});r(6540);var t=r(4164);const i={tabItem:"tabItem_Ymn6"};var c=r(4848);function s(e){let{children:n,hidden:r,className:s}=e;return(0,c.jsx)("div",{role:"tabpanel",className:(0,t.A)(i.tabItem,s),hidden:r,children:n})}},1470:(e,n,r)=>{r.d(n,{A:()=>S});var t=r(6540),i=r(4164),c=r(3104),s=r(6347),a=r(205),d=r(7485),l=r(1682),h=r(9466);function o(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return o(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:i}}=e;return{value:n,label:r,attributes:t,default:i}}))}(r);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:r}=e;const i=(0,s.W6)(),c=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,d.aZ)(c),(0,t.useCallback)((e=>{if(!c)return;const n=new URLSearchParams(i.location.search);n.set(c,e),i.replace({...i.location,search:n.toString()})}),[c,i])]}function j(e){const{defaultValue:n,queryString:r=!1,groupId:i}=e,c=u(e),[s,d]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:c}))),[l,o]=x({queryString:r,groupId:i}),[j,g]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,c]=(0,h.Dv)(r);return[i,(0,t.useCallback)((e=>{r&&c.set(e)}),[r,c])]}({groupId:i}),m=(()=>{const e=l??j;return p({value:e,tabValues:c})?e:null})();(0,a.A)((()=>{m&&d(m)}),[m]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:c}))throw new Error(`Can't select invalid tab value=${e}`);d(e),o(e),g(e)}),[o,g,c]),tabValues:c}}var g=r(2303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=r(4848);function b(e){let{className:n,block:r,selectedValue:t,selectValue:s,tabValues:a}=e;const d=[],{blockElementScrollPositionUntilNextRender:l}=(0,c.a_)(),h=e=>{const n=e.currentTarget,r=d.indexOf(n),i=a[r].value;i!==t&&(l(n),s(i))},o=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;n=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;n=d[r]??d[d.length-1];break}}n?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":r},n),children:a.map((e=>{let{value:n,label:r,attributes:c}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>d.push(e),onKeyDown:o,onClick:h,...c,className:(0,i.A)("tabs__item",m.tabItem,c?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function v(e){let{lazy:n,children:r,selectedValue:i}=e;const c=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=c.find((e=>e.props.value===i));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:c.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function f(e){const n=j(e);return(0,y.jsxs)("div",{className:(0,i.A)("tabs-container",m.tabList),children:[(0,y.jsx)(b,{...e,...n}),(0,y.jsx)(v,{...e,...n})]})}function S(e){const n=(0,g.A)();return(0,y.jsx)(f,{...e,children:o(e.children)},String(n))}},5967:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/series-8bc5a6a866ec89bfed5c6a9c2cdd13b3.png"},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>a});var t=r(6540);const i={},c=t.createContext(i);function s(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);