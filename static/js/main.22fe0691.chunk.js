(this["webpackJsonppainter-palette"]=this["webpackJsonppainter-palette"]||[]).push([[0],{145:function(e,a,t){e.exports=t.p+"static/media/logo.ecea6c3a.png"},163:function(e,a,t){e.exports=t(286)},168:function(e,a,t){},169:function(e,a,t){},286:function(e,a,t){"use strict";t.r(a);var o=t(0),r=t.n(o),n=t(8),l=t.n(n),c=t(45),i=(t(168),t(21)),s=t(22),m=t(24),d=t(23),p=(t(169),t(32)),u=t(29),h=t(139),f=t(53),g=t.n(f);var b=function(e){return g.a.contrast(e,"white")<4.5?"black":"white"},v=t(288),C=t(15),x=t.n(C),y=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(e){var o;return Object(i.a)(this,t),(o=a.call(this,e)).state={isCopied:!1},o.showOverlay=o.showOverlay.bind(Object(p.a)(o)),o}return Object(s.a)(t,[{key:"showOverlay",value:function(){var e=this;this.setState({isCopied:!0}),setTimeout((function(){e.setState({isCopied:!1})}),1e3)}},{key:"render",value:function(){var e=this.props,a=e.backgroundColor,t=e.colorName,o=e.colorID,n=e.palette,l=e.showFullPalette,i=e.classes,s=this.state.isCopied;return r.a.createElement(h.CopyToClipboard,{text:a,onCopy:this.showOverlay},r.a.createElement("div",{style:{background:a},className:i.ColorBox},r.a.createElement("div",{style:{background:a},className:x()(i.copyOverlay,Object(u.a)({},i.showOverlay,s))}),r.a.createElement("div",{className:x()(i.copyMessage,Object(u.a)({},i.showMessage,s))},r.a.createElement("h1",{style:{color:b(a)}},"Copied!"),r.a.createElement("p",{style:{color:b(a)}},a)),r.a.createElement("div",null,r.a.createElement("button",{style:{color:b(a)},className:i.copyBtn},"Copy")),r.a.createElement("div",{className:i.description},r.a.createElement("span",{style:{color:b(a)}},t)),l&&r.a.createElement(c.b,{to:"/painter-palette/palette/".concat(n.id,"/").concat(o),onClick:function(e){return e.stopPropagation()}},r.a.createElement("span",{style:{color:b(a)},className:i.moreBtn},"More"))))}}]),t}(o.Component),E=Object(v.a)({ColorBox:{width:"20%",height:function(e){return e.showFullPalette?"25%":"50%"},display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-3.5px","&:hover button":{opacity:1}},moreBtn:{background:"rgba(255, 255, 255, 0.3)",position:"absolute",border:"none",right:"0px",bottom:"0px",width:"60px",height:"30px",textAlign:"center",lineHeight:"30px",textTransform:"uppercase",fontSize:"12px"},copyBtn:{cursor:"pointer",width:"100px",height:"30px",position:"absolute",display:"inline-block",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",textAlign:"center",outline:"none",background:"rgba(255, 255, 255, 0.3)",fontSize:"1rem",lineHeight:"30px",textTransform:"uppercase",border:"none",textDecoration:"none",opacity:0},description:{position:"absolute",width:"100%",left:"0px",bottom:"0px",padding:"10px",color:"black",letterSpacing:"1px",textTransform:"uppercase",fontSize:"12px"},copyOverlay:{opacity:"0",zIndex:"0",width:"100%",height:"100%",transition:"transform 0.6s ease-in-out",transform:"scale(0.1)"},showOverlay:{opacity:"1",transform:"scale(50)",zIndex:"10",position:"absolute"},copyMessage:{position:"fixed",left:"0",right:"0",top:"0",bottom:"0",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",fontSize:"4rem",transform:"scale(0.1)",opacity:"0",color:"white","& h1":{fontWeight:"400",textShadow:"1px 2px black",background:"rgba(255, 255, 255, 0.2)",width:"100%",textAlign:"center",marginBottom:"0",padding:"1rem",textTransform:"uppercase"},"& p":{fontSize:"2rem",fontWeight:"100"}},showMessage:{opacity:"1",transform:"scale(1)",zIndex:"25",transition:"all 0.4s ease-in-out",transitionDelay:"0.3s"}})(y),w={palette:{height:"100vh",display:"flex",flexDirection:"column"},paletteColors:{height:"calc(90%)",display:"flex",overflow:"hidden",flexWrap:"wrap",alignItems:"flex-start",justifyContent:"flex-start",flex:"1"},goBack:{width:"20%",height:"50%",margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-3.5px",opacity:1,backgroundColor:"black","& button":{cursor:"pointer",width:"100px",height:"30px",position:"absolute",display:"inline-block",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",background:"rgba(255, 255, 255, 0.3)",color:"white",fontSize:"1rem",textAlign:"center",lineHeight:"30px",textTransform:"uppercase",border:"none",outline:"none",textDecoration:"none"}}},O=t(332),k=t(336),j=t(335),B=t(326),S=t(154),F=(t(178),t(145)),N=t.n(F),P=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(e){var o;return Object(i.a)(this,t),(o=a.call(this,e)).state={colorFormat:"hex",snackBarOpen:!1},o.handleColorFormatChange=o.handleColorFormatChange.bind(Object(p.a)(o)),o.openSnackBar=o.openSnackBar.bind(Object(p.a)(o)),o.closeSnackBar=o.closeSnackBar.bind(Object(p.a)(o)),o}return Object(s.a)(t,[{key:"openSnackBar",value:function(){this.setState({snackBarOpen:!0})}},{key:"closeSnackBar",value:function(){this.setState({snackBarOpen:!1})}},{key:"handleColorFormatChange",value:function(e){this.setState({colorFormat:e.target.value}),this.props.changeColorFormat(e.target.value),this.openSnackBar()}},{key:"render",value:function(){var e=this.props,a=e.colorLevel,t=e.changeColorLevel,o=e.showSlider,n=e.showColorFormatSelector,l=e.classes;return r.a.createElement("div",{className:l.NavBar},r.a.createElement("div",{className:l.NavBarLogo},r.a.createElement("img",{src:N.a,alt:"painter palette logo"}),r.a.createElement("a",{href:"/painter-palette"},"painter palette")),r.a.createElement("div",null,r.a.createElement("span",null,"Create A Palette")),o&&r.a.createElement("div",null,r.a.createElement("span",null,"Level: ",a),r.a.createElement("div",{className:l.paletteSlider},r.a.createElement(S.a,{defaultValue:a,min:100,max:900,step:100,onAfterChange:t}))),n&&r.a.createElement("div",{className:l.selectContainer},r.a.createElement(O.a,{value:this.state.colorFormat,onChange:this.handleColorFormatChange},r.a.createElement(k.a,{value:"hex"},"HEX - #ffff"),r.a.createElement(k.a,{value:"rgb"},"RGB - rgb(255, 255, 255)"),r.a.createElement(k.a,{value:"rgba"},"RGBA - rgba(255, 255, 255, 0.2)"))),r.a.createElement(j.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.snackBarOpen,autoHideDuration:2e3,onClose:this.closeSnackBar,message:"Color Format Changed",action:r.a.createElement(r.a.Fragment,null,r.a.createElement(B.a,{color:"secondary",size:"small",onClick:this.closeSnackBar},"CLOSE"))}))}}]),t}(o.Component),D=Object(v.a)({NavBar:{display:"flex",alignItems:"center",height:"6vh","& a":{fontWeight:"bold"}},NavBarLogo:{padding:"0 15px",fontSize:"22px",height:"100%",marginRight:"1rem",display:"flex",alignItems:"center",borderRight:".1px solid gray","& a":{color:"black",paddingLeft:"10px",textDecoration:"none"},"& img":{width:"2em"}},paletteSlider:{width:"350px",margin:"0 10px",display:"inline-block","& .rc-slider-track":{backgroundColor:"transparent"},"& .rc-slider-rail":{height:"8px"},"& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover":{border:"2px solid #03a2ec",outline:"none",backgroundColor:"#03a2ec"}},selectContainer:{marginRight:"1rem",marginLeft:"auto"}})(P),I=t(7),A=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(e){var o;return Object(i.a)(this,t),(o=a.call(this,e)).state={},o}return Object(s.a)(t,[{key:"render",value:function(){var e=this.props,a=e.paletteName,t=e.paletteEmoji,o=e.classes;return r.a.createElement("div",{className:o.Footer},r.a.createElement("span",{className:o.paletteName},a),r.a.createElement("span",null,t))}}]),t}(o.Component),L=Object(I.a)({Footer:{margin:"10px",display:"flex",justifyContent:"flex-end",alignItems:"center",overflowY:"hidden"},paletteName:{fontWeight:"bold",paddingRight:"10px"}})(A),G=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(e){var o;return Object(i.a)(this,t),(o=a.call(this,e)).state={colorLevel:500,colorFormat:"hex"},o.changeColorLevel=o.changeColorLevel.bind(Object(p.a)(o)),o.changeColorFormat=o.changeColorFormat.bind(Object(p.a)(o)),o}return Object(s.a)(t,[{key:"changeColorLevel",value:function(e){this.setState({colorLevel:e})}},{key:"changeColorFormat",value:function(e){this.setState({colorFormat:e})}},{key:"render",value:function(){var e=this.props,a=e.palette,t=e.classes,o=this.state,n=o.colorLevel,l=o.colorFormat,c=a.colors[n].map((function(e){return r.a.createElement(E,{key:e.id,palette:a,backgroundColor:e[l],colorName:e.name,colorID:e.id,showFullPalette:!0})}));return r.a.createElement("div",{className:t.palette},r.a.createElement(D,{changeColorLevel:this.changeColorLevel,changeColorFormat:this.changeColorFormat,colorLevel:this.state.colorLevel,showSlider:!0,showColorFormatSelector:!0}),r.a.createElement("div",{className:t.paletteColors},c),r.a.createElement(L,{paletteName:a.paletteName,paletteEmoji:a.emoji}))}}]),t}(o.Component),T=Object(v.a)(w)(G),z=[{paletteName:"Material UI Colors",id:"material-ui-colors",emoji:"\ud83c\udfa8",colors:[{name:"red",color:"#F44336"},{name:"pink",color:"#E91E63"},{name:"purple",color:"#9C27B0"},{name:"deeppurple",color:"#673AB7"},{name:"indigo",color:"#3F51B5"},{name:"blue",color:"#2196F3"},{name:"lightblue",color:"#03A9F4"},{name:"cyan",color:"#00BCD4"},{name:"teal",color:"#009688"},{name:"green",color:"#4CAF50"},{name:"lightgreen",color:"#8BC34A"},{name:"lime",color:"#CDDC39"},{name:"yellow",color:"#FFEB3B"},{name:"amber",color:"#FFC107"},{name:"orange",color:"#FF9800"},{name:"deeporange",color:"#FF5722"},{name:"brown",color:"#795548"},{name:"grey",color:"#9E9E9E"},{name:"bluegrey",color:"#607D8B"}]},{paletteName:"Flat UI Colors v1",id:"flat-ui-colors-v1",emoji:"\ud83e\udd19",colors:[{name:"Turquoise",color:"#1abc9c"},{name:"Emerald",color:"#2ecc71"},{name:"PeterRiver",color:"#3498db"},{name:"Amethyst",color:"#9b59b6"},{name:"WetAsphalt",color:"#34495e"},{name:"GreenSea",color:"#16a085"},{name:"Nephritis",color:"#27ae60"},{name:"BelizeHole",color:"#2980b9"},{name:"Wisteria",color:"#8e44ad"},{name:"MidnightBlue",color:"#2c3e50"},{name:"SunFlower",color:"#f1c40f"},{name:"Carrot",color:"#e67e22"},{name:"Alizarin",color:"#e74c3c"},{name:"Clouds",color:"#ecf0f1"},{name:"Concrete",color:"#95a5a6"},{name:"Orange",color:"#f39c12"},{name:"Pumpkin",color:"#d35400"},{name:"Pomegranate",color:"#c0392b"},{name:"Silver",color:"#bdc3c7"},{name:"Asbestos",color:"#7f8c8d"}]},{paletteName:"Flat UI Colors Dutch",id:"flat-ui-colors-dutch",emoji:"\ud83c\uddf3\ud83c\uddf1",colors:[{name:"Sunflower",color:"#FFC312"},{name:"Energos",color:"#C4E538"},{name:"BlueMartina",color:"#12CBC4"},{name:"LavenderRose",color:"#FDA7DF"},{name:"BaraRose",color:"#ED4C67"},{name:"RadiantYellow",color:"#F79F1F"},{name:"AndroidGreen",color:"#A3CB38"},{name:"MediterraneanSea",color:"#1289A7"},{name:"LavenderTea",color:"#D980FA"},{name:"VerryBerry",color:"#B53471"},{name:"PuffinsBill",color:"#EE5A24"},{name:"PixelatedGrass",color:"#009432"},{name:"MerchantMarineBlue",color:"#0652DD"},{name:"ForgottenPurple",color:"#9980FA"},{name:"HollyHock",color:"#833471"},{name:"RedPigment",color:"#EA2027"},{name:"TurkishAqua",color:"#006266"},{name:"20000LeaguesUnderTheSea",color:"#1B1464"},{name:"CircumorbitalRing",color:"#5758BB"},{name:"MagentaPurple",color:"#6F1E51"}]},{paletteName:"Flat UI Colors American",id:"flat-ui-colors-american",emoji:"\ud83c\uddfa\ud83c\uddf8",colors:[{name:"LightGreenishBlue",color:"#55efc4"},{name:"FadedPoster",color:"#81ecec"},{name:"GreenDarnerTail",color:"#74b9ff"},{name:"ShyMoment",color:"#a29bfe"},{name:"CityLights",color:"#dfe6e9"},{name:"MintLeaf",color:"#00b894"},{name:"RobinsEggBlue",color:"#00cec9"},{name:"ElectronBlue",color:"#0984e3"},{name:"ExodusFruit",color:"#6c5ce7"},{name:"SoothingBreeze",color:"#b2bec3"},{name:"SourLemon",color:"#ffeaa7"},{name:"FirstDate",color:"#fab1a0"},{name:"PinkGlamour",color:"#ff7675"},{name:"Pico8Pink",color:"#fd79a8"},{name:"AmericanRiver",color:"#636e72"},{name:"BrightYarrow",color:"#fdcb6e"},{name:"OrangeVille",color:"#e17055"},{name:"Chi-Gong",color:"#d63031"},{name:"PrunusAvium",color:"#e84393"},{name:"DraculaOrchid",color:"#2d3436"}]},{paletteName:"Flat UI Colors Aussie",id:"flat-ui-colors-aussie",emoji:"\ud83c\udde6\ud83c\uddfa",colors:[{name:"Beekeeper",color:"#f6e58d"},{name:"SpicedNectarine",color:"#ffbe76"},{name:"PinkGlamour",color:"#ff7979"},{name:"JuneBud",color:"#badc58"},{name:"CoastalBreeze",color:"#dff9fb"},{name:"Turbo",color:"#f9ca24"},{name:"QuinceJelly",color:"#f0932b"},{name:"CarminePink",color:"#eb4d4b"},{name:"PureApple",color:"#6ab04c"},{name:"HintOfIcePack",color:"#c7ecee"},{name:"MiddleBlue",color:"#7ed6df"},{name:"Heliotrope",color:"#e056fd"},{name:"ExodusFruit",color:"#686de0"},{name:"DeepKoamaru",color:"#30336b"},{name:"SoaringEagle",color:"#95afc0"},{name:"GreenlandGreen",color:"#22a6b3"},{name:"SteelPink",color:"#be2edd"},{name:"Blurple",color:"#4834d4"},{name:"DeepCove",color:"#130f40"},{name:"WizardGrey",color:"#535c68"}]},{paletteName:"Flat UI Colors British",id:"flat-ui-colors-british",emoji:"\ud83c\uddec\ud83c\udde7",colors:[{name:"ProtossPylon",color:"#00a8ff"},{name:"Periwinkle",color:"#9c88ff"},{name:"Rise-N-Shine",color:"#fbc531"},{name:"DownloadProgress",color:"#4cd137"},{name:"Seabrook",color:"#487eb0"},{name:"VanaDylBlue",color:"#0097e6"},{name:"MattPurple",color:"#8c7ae6"},{name:"NanohanachaGold",color:"#e1b12c"},{name:"SkirretGreen",color:"#44bd32"},{name:"Naval",color:"#40739e"},{name:"NasturcianFlower",color:"#e84118"},{name:"LynxWhite",color:"#f5f6fa"},{name:"BlueberrySoda",color:"#7f8fa6"},{name:"MazarineBlue",color:"#273c75"},{name:"BlueNights",color:"#353b48"},{name:"HarleyOrange",color:"#c23616"},{name:"HintOfPensive",color:"#dcdde1"},{name:"ChainGangGrey",color:"#718093"},{name:"PicoVoid",color:"#192a56"},{name:"ElectroMagnetic",color:"#2f3640"}]},{paletteName:"Flat UI Colors Spanish",id:"flat-ui-colors-spanish",emoji:"\ud83c\uddea\ud83c\uddf8",colors:[{name:"JacksonsPurple",color:"#40407a"},{name:"C64Purple",color:"#706fd3"},{name:"SwanWhite",color:"#f7f1e3"},{name:"SummerSky",color:"#34ace0"},{name:"CelestialGreen",color:"#33d9b2"},{name:"LuckyPoint",color:"#2c2c54"},{name:"Liberty",color:"#474787"},{name:"HotStone",color:"#aaa69d"},{name:"DevilBlue",color:"#227093"},{name:"PalmSpringsSplash",color:"#218c74"},{name:"FlourescentRed",color:"#ff5252"},{name:"SyntheticPumpkin",color:"#ff793f"},{name:"CrocodileTooth",color:"#d1ccc0"},{name:"MandarinSorbet",color:"#ffb142"},{name:"SpicedButterNut",color:"#ffda79"},{name:"EyeOfNewt",color:"#b33939"},{name:"ChileanFire",color:"#cd6133"},{name:"GreyPorcelain",color:"#84817a"},{name:"AlamedaOchre",color:"#cc8e35"},{name:"Desert",color:"#ccae62"}]},{paletteName:"Flat UI Colors Indian",id:"flat-ui-colors-indian",emoji:"\ud83c\uddee\ud83c\uddf3",colors:[{name:"OrchidOrange",color:"#FEA47F"},{name:"SpiroDiscoBall",color:"#25CCF7"},{name:"HoneyGlow",color:"#EAB543"},{name:"SweetGarden",color:"#55E6C1"},{name:"FallingStar",color:"#CAD3C8"},{name:"RichGardenia",color:"#F97F51"},{name:"ClearChill",color:"#1B9CFC"},{name:"WhitePepper",color:"#F8EFBA"},{name:"Keppel",color:"#58B19F"},{name:"ShipsOfficer",color:"#2C3A47"},{name:"FieryFuchsia",color:"#B33771"},{name:"BlueBell",color:"#3B3B98"},{name:"GeorgiaPeach",color:"#FD7272"},{name:"OasisStream",color:"#9AECDB"},{name:"BrightUbe",color:"#D6A2E8"},{name:"MagentaPurple",color:"#6D214F"},{name:"EndingNavyBlue",color:"#182C61"},{name:"SasquatchSocks",color:"#FC427B"},{name:"PineGlade",color:"#BDC581"},{name:"HighlighterLavender",color:"#82589F"}]},{paletteName:"Flat UI Colors French",id:"flat-ui-colors-french",emoji:"\ud83c\uddeb\ud83c\uddf7",colors:[{name:"FlatFlesh",color:"#fad390"},{name:"MelonMelody",color:"#f8c291"},{name:"Livid",color:"#6a89cc"},{name:"Spray",color:"#82ccdd"},{name:"ParadiseGreen",color:"#b8e994"},{name:"SquashBlossom",color:"#f6b93b"},{name:"MandarinRed",color:"#e55039"},{name:"AzraqBlue",color:"#4a69bd"},{name:"Dupain",color:"#60a3bc"},{name:"AuroraGreen",color:"#78e08f"},{name:"IcelandPoppy",color:"#fa983a"},{name:"TomatoRed",color:"#eb2f06"},{name:"YueGuangBlue",color:"#1e3799"},{name:"GoodSamaritan",color:"#3c6382"},{name:"Waterfall",color:"#38ada9"},{name:"CarrotOrange",color:"#e58e26"},{name:"JalapenoRed",color:"#b71540"},{name:"DarkSapphire",color:"#0c2461"},{name:"ForestBlues",color:"#0a3d62"},{name:"ReefEncounter",color:"#079992"}]}],R=t(106),M=[50,100,200,300,400,500,600,700,800,900];function H(e){var a,t={paletteName:e.paletteName,id:e.id,emoji:e.emoji,colors:{}},o=Object(R.a)(M);try{for(o.s();!(a=o.n()).done;){var r=a.value;t.colors[r]=[]}}catch(u){o.e(u)}finally{o.f()}var n,l,c,i,s=Object(R.a)(e.colors);try{for(s.s();!(n=s.n()).done;){var m=n.value,d=(c=m.color,i=10,g.a.scale((l=c,[g()(l).darken(1.4).hex(),l,"#fff"])).mode("lab").colors(i)).reverse();for(var p in d)t.colors[M[p]].push({name:"".concat(m.name," ").concat(M[p]),id:m.name.toLowerCase().replace(/ /g,"-"),hex:d[p],rgb:g()(d[p]).css(),rgba:g()(d[p]).css().replace("rgb","rgba").replace(")",",1.0)")})}}catch(u){s.e(u)}finally{s.f()}return t}var W=t(19);var U,q,J,V=Object(v.a)({root:{backgroundColor:"white",border:"1px solid black",borderRadius:"5px",padding:"0.5rem",position:"relative",overflow:"hidden",cursor:"pointer","&:hover svg":{opacity:1}},colors:{backgroundColor:"#dae1e4",height:"150px",width:"100%",borderRadius:"5px",overflow:"hidden"},title:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"0",color:"black",paddingTop:"0.5rem",position:"relative"},emoji:{marginLeft:"0.5rem",fontSize:"1rem"},miniColor:{height:"25%",width:"20%",display:"inline-block",margin:"0 auto",position:"relative",marginBottom:"-3.5px"}})((function(e){var a=e.paletteName,t=e.colors,o=e.emoji,n=e.classes,l=t.map((function(e){return r.a.createElement("div",{key:e.id,className:n.miniColor,style:{backgroundColor:e.color}})}));return r.a.createElement("div",{className:n.root,onClick:e.goToPalette},r.a.createElement("div",{className:n.colors},l),r.a.createElement("h5",{className:n.title},a," ",r.a.createElement("span",{className:n.emoji},o)))})),Y=function(e){return"@media (max-width: ".concat({xs:"575.98px",sm:"767.98px",md:"991.98px",lg:"1199.98px",xl:"1600px"}[e],")")},_={root:{height:"100vh",display:"flex",alignItems:"flex-start",justifyContent:"center",background:"#2980b9 url('https://static.tumblr.com/03fbbc566b081016810402488936fbae/pqpk3dn/MRSmlzpj3/tumblr_static_bg3.png') repeat 0 0",animation:"$animate 10s infinite linear"},"@keyframes animate":{from:{backgroundPosition:"0 0"},to:{backgroundPosition:"500px 0"}},container:(U={width:"50%",display:"flex",flexDirection:"column",flexWrap:"wrap",justifyContent:"center",alignItems:"center"},Object(u.a)(U,Y("xl"),{width:"75%"}),Object(u.a)(U,Y("xs"),{width:"60%"}),U),palettes:(q={boxSizing:"border-box",width:"90%",display:"inline-grid",gridTemplateColumns:"repeat(3,33%)",gridGap:"1rem"},Object(u.a)(q,Y("md"),{gridTemplateColumns:"repeat(2,50%)"}),Object(u.a)(q,Y("xs"),{gridTemplateColumns:"repeat(1,100%)",gridGap:"1rem"}),q),nav:{color:"white",display:"flex",width:"100%",justifyContent:"space-between",alignItems:"center","& a":{color:"white","&:hover":{color:"lightgray"}}}},K=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(e){var o;return Object(i.a)(this,t),(o=a.call(this,e)).state={},o}return Object(s.a)(t,[{key:"goToPalette",value:function(e){this.props.history.push("/painter-palette/palette/".concat(e))}},{key:"render",value:function(){var e=this,a=this.props,t=a.list,o=a.classes,n=t.map((function(a){return r.a.createElement(V,Object.assign({},a,{goToPalette:function(){return e.goToPalette(a.id)}}))}));return r.a.createElement("div",{className:o.root},r.a.createElement("div",{className:o.container},r.a.createElement("nav",{className:o.nav},r.a.createElement("h1",null,"Painter Palette"),r.a.createElement("a",{href:"/painter-palette/palette/new"},"Create Palette")),r.a.createElement("div",{className:o.palettes},n)))}}]),t}(o.Component),X=Object(v.a)(_)(K),$=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(e){var o;return Object(i.a)(this,t),(o=a.call(this,e)).state={colorFormat:"hex"},o._shades=o.gatherShades(o.props.palette,o.props.colorID),o.changeColorFormat=o.changeColorFormat.bind(Object(p.a)(o)),console.log(o._shades),o}return Object(s.a)(t,[{key:"gatherShades",value:function(e,a){var t=[],o=e.colors;for(var r in o)t=t.concat(o[r].filter((function(e){return e.id===a})));return t.slice(1)}},{key:"changeColorFormat",value:function(e){this.setState({colorFormat:e})}},{key:"render",value:function(){var e=this.state.colorFormat,a=this.props,t=a.palette,o=a.classes,n=this._shades.map((function(a){return r.a.createElement(E,{key:a.name,backgroundColor:a[e],colorName:a.name,showFullPalette:!1})}));return r.a.createElement("div",{className:o.palette},r.a.createElement(D,{changeColorFormat:this.changeColorFormat,showSlider:!1,showColorFormatSelector:!0}),r.a.createElement("div",{className:o.paletteColors},n,r.a.createElement("div",{className:o.goBack},r.a.createElement(c.b,{to:"/painter-palette/palette/".concat(t.id),onClick:function(e){return e.stopPropagation()}},r.a.createElement("div",null,r.a.createElement("button",null,"Go Back"))))),r.a.createElement(L,{paletteName:t.paletteName,paletteEmoji:t.emoji}))}}]),t}(o.Component),Q=Object(v.a)(w)($),Z=t(329),ee=t(146),ae=t.n(ee),te=t(330),oe=t(328),re=t(327),ne=function(e){return{root:{display:"flex",backgroundColor:"white"},hide:{display:"none"},navBar:{backgroundColor:"white",flexDirection:"row",justifyContent:"space-between",alignItems:"center",height:"64px"},navBarShift:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240},menuButton:{marginLeft:12,marginRight:20},navBtns:{"& a":{textDecoration:"none"}},button:{margin:"0 0.5rem",textTransform:"capitalize",borderRadius:3,border:0,color:"white",height:48,padding:"0 30px",boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)"}}},le=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(e){var o;return Object(i.a)(this,t),(o=a.call(this,e)).state={},o}return Object(s.a)(t,[{key:"render",value:function(){var e=this.props,a=e.classes,t=e.drawerOpen,o=e.handleDrawerOpen;return r.a.createElement("div",{className:a.root},r.a.createElement(re.a,{position:"fixed",color:"default",className:x()(a.navBar,Object(u.a)({},a.navBarShift,t))},r.a.createElement(oe.a,{disableGutters:!t},r.a.createElement(Z.a,{color:"inherit","aria-label":"Open drawer",onClick:o,className:x()(a.menuButton,Object(u.a)({},a.hide,t))},r.a.createElement(ae.a,null)),r.a.createElement(te.a,{variant:"h6",color:"inherit",noWrap:!0},"Create A Palette")),r.a.createElement("div",{className:a.navBtns},r.a.createElement(c.b,{to:"/painter-palette/"},r.a.createElement(B.a,{className:a.button,variant:"contained",color:"secondary"},"Go Back")),r.a.createElement(B.a,{className:a.button,variant:"contained",color:"primary"},"Save Palette"))))}}]),t}(o.Component),ce=Object(v.a)(ne,{withTheme:!0})(le),ie=t(334),se=t(331),me=t(152),de=t.n(me),pe=t(153),ue=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(e){var o;return Object(i.a)(this,t),(o=a.call(this,e)).handleColorChange=function(e){o.setState({currentColor:e.hex})},o.state={currentColor:"#3f51b5",newColorName:""},o}return Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes,a=this.state.currentColor;return r.a.createElement("div",{className:e.root},r.a.createElement(pe.a,{color:this.state.currentColor,onChangeComplete:this.handleColorChange}),r.a.createElement(B.a,{className:e.addBtn,variant:"contained",type:"submit",color:"primary",style:{backgroundColor:a}},"Add Color"))}}]),t}(o.Component),he=Object(v.a)({root:{zIndex:"2"},addBtn:{width:"100%",padding:"1rem",marginTop:"1rem",fontSize:"1em"}})(ue),fe=t(105),ge=function(e){return{root:{display:"flex",overflowX:"none"},drawer:{width:240,flexShrink:0,height:"100vh"},drawerPaper:{width:240,display:"flex",alignItems:"center"},drawerHeader:Object(fe.a)(Object(fe.a)({display:"flex",alignItems:"center",width:"100%"},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,height:"calc(100vh - 64px)",padding:0,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},container:{width:"90%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},button:{margin:"0 0.5rem",textTransform:"capitalize",borderRadius:3,border:0,color:"white",height:48,padding:"0 30px",boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)"}}},be=t(151),ve=t.n(be),Ce={root:(J={width:"20%",height:"25%",margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-3.5px"},Object(u.a)(J,Y("lg"),{width:"25%",height:"20%"}),Object(u.a)(J,Y("md"),{width:"50%",height:"10%"}),Object(u.a)(J,Y("sm"),{width:"100%",height:"5%"}),J),content:{position:"absolute",width:"100%",left:"0px",bottom:"0px",letterSpacing:"1px",textTransform:"uppercase",fontSize:"12px",display:"flex",justifyContent:"space-between",alignItems:"center","& span":{padding:"5px"}},deleteIcon:{transition:"all 0.3s ease-in-out",padding:"5px","&:hover":{transform:"scale(1.5)"}}},xe=t(56),ye=Object(xe.b)((function(e){var a=e.classes,t=e.backgroundColor,o=e.name;return r.a.createElement("div",{className:a.root,style:{backgroundColor:t}},r.a.createElement("div",{style:{color:b(t)},className:a.content},r.a.createElement("span",null,o),r.a.createElement(ve.a,{className:a.deleteIcon})))})),Ee=Object(v.a)(Ce)(ye),we=Object(xe.a)((function(e){var a=e.colors;e.removeColor;return r.a.createElement("div",{style:{height:"100%"}},a.map((function(e,a){return r.a.createElement(Ee,{index:a,key:e.name,backgroundColor:e.color,name:e.name})})))})),Oe=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(e){var o;return Object(i.a)(this,t),(o=a.call(this,e)).onSortEnd=function(e){var a=e.oldIndex,t=e.newIndex;o.setState((function(e){var o=e.colors;return{colors:Object(xe.c)(o,a,t)}}))},o.state={drawerOpen:!0,colors:z[0].colors},o.handleDrawerOpen=o.handleDrawerOpen.bind(Object(p.a)(o)),o.handleDrawerClose=o.handleDrawerClose.bind(Object(p.a)(o)),o}return Object(s.a)(t,[{key:"handleDrawerOpen",value:function(){this.setState({drawerOpen:!0})}},{key:"handleDrawerClose",value:function(){this.setState({drawerOpen:!1})}},{key:"render",value:function(){var e=this.props.classes,a=this.state,t=a.drawerOpen,o=a.colors;return r.a.createElement("div",{className:e.root},r.a.createElement(ce,{drawerOpen:t,handleDrawerOpen:this.handleDrawerOpen}),r.a.createElement(ie.a,{className:e.drawer,variant:"persistent",anchor:"left",open:t,classes:{paper:e.drawerPaper}},r.a.createElement("div",{className:e.drawerHeader},r.a.createElement(Z.a,{onClick:this.handleDrawerClose},r.a.createElement(de.a,null))),r.a.createElement(se.a,null),r.a.createElement("div",{className:e.container},r.a.createElement(te.a,{variant:"h5",gutterBottom:!0},"Design Your Palette"),r.a.createElement(he,null))),r.a.createElement("main",{className:x()(e.content,Object(u.a)({},e.contentShift,t))},r.a.createElement("div",{className:e.drawerHeader}),r.a.createElement(we,{colors:o,axis:"xy",onSortEnd:this.onSortEnd,distance:20})))}}]),t}(o.Component);Oe.defaultProps={maxColors:20};var ke=Object(I.a)(ge,{withTheme:!0})(Oe),je=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"findPalette",value:function(e){return z.find((function(a){return a.id===e}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(W.c,null,r.a.createElement(W.a,{exact:!0,path:"/painter-palette",render:function(e){return r.a.createElement(X,Object.assign({list:z},e))}}),r.a.createElement(W.a,{exact:!0,path:"/painter-palette/palette/new",render:function(e){return r.a.createElement(ke,e)}}),r.a.createElement(W.a,{exact:!0,path:"/painter-palette/palette/:id",render:function(a){return r.a.createElement(T,{palette:H(e.findPalette(a.match.params.id))})}}),r.a.createElement(W.a,{exact:!0,path:"/painter-palette/palette/:paletteID/:colorID",render:function(a){return r.a.createElement(Q,{colorID:a.match.params.colorID,palette:H(e.findPalette(a.match.params.paletteID))})}})))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(c.a,null,r.a.createElement(je,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[163,1,2]]]);
//# sourceMappingURL=main.22fe0691.chunk.js.map