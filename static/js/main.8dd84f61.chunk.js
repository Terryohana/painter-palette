(this["webpackJsonppainter-palette"]=this["webpackJsonppainter-palette"]||[]).push([[0],{45:function(e,o,a){e.exports=a.p+"static/media/logo.ecea6c3a.png"},51:function(e,o,a){e.exports=a(70)},56:function(e,o,a){},57:function(e,o,a){},58:function(e,o,a){},62:function(e,o,a){},67:function(e,o,a){},70:function(e,o,a){"use strict";a.r(o);var r=a(0),l=a.n(r),n=a(5),c=a.n(n),t=(a(56),a(57),a(23)),m=a(24),i=a(17),s=a(26),u=a(25),d=(a(58),a(39)),h=function(e){Object(s.a)(a,e);var o=Object(u.a)(a);function a(e){var r;return Object(t.a)(this,a),(r=o.call(this,e)).state={showCopyOverlay:!1},r.showOverlay=r.showOverlay.bind(Object(i.a)(r)),r}return Object(m.a)(a,[{key:"showOverlay",value:function(){var e=this;this.setState({showCopyOverlay:!0}),setTimeout((function(){e.setState({showCopyOverlay:!1})}),1e3)}},{key:"render",value:function(){var e=this.props,o=e.backgroundColor,a=e.colorName,r=this.state.showCopyOverlay;return l.a.createElement(d.CopyToClipboard,{text:o,onCopy:this.showOverlay},l.a.createElement("div",{style:{background:o},className:"ColorBox"},l.a.createElement("div",{style:{background:o},className:"ColorBox-copy-overlay ".concat(r&&"show")}),l.a.createElement("div",{className:"ColorBox-copy-overlay-content ".concat(r&&"show")},l.a.createElement("h1",null,"Copied!"),l.a.createElement("p",null,o)),l.a.createElement("div",{className:"ColorBox-copy-container"},l.a.createElement("button",{className:"ColorBox-copy-button"},"Copy")),l.a.createElement("div",{className:"ColorBox-description"},l.a.createElement("span",null,a)),l.a.createElement("span",{className:"ColorBox-more-btn"},"More")))}}]),a}(r.Component),f=(a(62),a(100)),p=a(101),b=a(47),C=(a(66),a(67),a(45)),v=a.n(C),g=function(e){Object(s.a)(a,e);var o=Object(u.a)(a);function a(e){var r;return Object(t.a)(this,a),(r=o.call(this,e)).state={colorFormat:"hex"},r.handleColorFormatChange=r.handleColorFormatChange.bind(Object(i.a)(r)),r}return Object(m.a)(a,[{key:"handleColorFormatChange",value:function(e){this.setState({colorFormat:e.target.value}),this.props.changeColorFormat(e.target.value)}},{key:"render",value:function(){var e=this.props,o=e.colorLevel,a=e.changeColorLevel;return l.a.createElement("div",{className:"NavBar"},l.a.createElement("div",{className:"NavBar-logo"},l.a.createElement("img",{src:v.a,alt:"painter palette logo"}),l.a.createElement("a",{href:"#"},"painter palette")),l.a.createElement("div",{className:"NavBar-slider-container"},l.a.createElement("span",{className:"NavBar-slider-textVal"},"Level: ",o),l.a.createElement("div",{className:"NavBar-palette-slider"},l.a.createElement(b.a,{defaultValue:o,min:100,max:900,step:100,onAfterChange:a}))),l.a.createElement("div",{className:"NavBar-select-container"},l.a.createElement(f.a,{value:this.state.colorFormat,onChange:this.handleColorFormatChange},l.a.createElement(p.a,{value:"hex"},"HEX - #ffff"),l.a.createElement(p.a,{value:"rgb"},"RGB - rgb(255, 255, 255)"),l.a.createElement(p.a,{value:"rgba"},"RGBA - rgba(255, 255, 255, 0.2)"))))}}]),a}(r.Component),F=function(e){Object(s.a)(a,e);var o=Object(u.a)(a);function a(e){var r;return Object(t.a)(this,a),(r=o.call(this,e)).state={colorLevel:500,colorFormat:"hex"},r.changeColorLevel=r.changeColorLevel.bind(Object(i.a)(r)),r.changeColorFormat=r.changeColorFormat.bind(Object(i.a)(r)),r}return Object(m.a)(a,[{key:"changeColorLevel",value:function(e){this.setState({colorLevel:e})}},{key:"changeColorFormat",value:function(e){this.setState({colorFormat:e})}},{key:"render",value:function(){var e=this.props.palette,o=this.state,a=o.colorLevel,r=o.colorFormat,n=e.colors[a].map((function(e){return l.a.createElement(h,{key:e.id,backgroundColor:e[r],colorName:e.name})}));return l.a.createElement("div",{className:"Palette"},l.a.createElement(g,{changeColorLevel:this.changeColorLevel,changeColorFormat:this.changeColorFormat,colorLevel:this.state.colorLevel}),l.a.createElement("div",{className:"Palette-colors"},n))}}]),a}(r.Component),B=[{paletteName:"Material UI Colors",id:"material-ui-colors",emoji:"\ud83c\udfa8",colors:[{name:"red",color:"#F44336"},{name:"pink",color:"#E91E63"},{name:"purple",color:"#9C27B0"},{name:"deeppurple",color:"#673AB7"},{name:"indigo",color:"#3F51B5"},{name:"blue",color:"#2196F3"},{name:"lightblue",color:"#03A9F4"},{name:"cyan",color:"#00BCD4"},{name:"teal",color:"#009688"},{name:"green",color:"#4CAF50"},{name:"lightgreen",color:"#8BC34A"},{name:"lime",color:"#CDDC39"},{name:"yellow",color:"#FFEB3B"},{name:"amber",color:"#FFC107"},{name:"orange",color:"#FF9800"},{name:"deeporange",color:"#FF5722"},{name:"brown",color:"#795548"},{name:"grey",color:"#9E9E9E"},{name:"bluegrey",color:"#607D8B"}]},{paletteName:"Flat UI Colors v1",id:"flat-ui-colors-v1",emoji:"\ud83e\udd19",colors:[{name:"Turquoise",color:"#1abc9c"},{name:"Emerald",color:"#2ecc71"},{name:"PeterRiver",color:"#3498db"},{name:"Amethyst",color:"#9b59b6"},{name:"WetAsphalt",color:"#34495e"},{name:"GreenSea",color:"#16a085"},{name:"Nephritis",color:"#27ae60"},{name:"BelizeHole",color:"#2980b9"},{name:"Wisteria",color:"#8e44ad"},{name:"MidnightBlue",color:"#2c3e50"},{name:"SunFlower",color:"#f1c40f"},{name:"Carrot",color:"#e67e22"},{name:"Alizarin",color:"#e74c3c"},{name:"Clouds",color:"#ecf0f1"},{name:"Concrete",color:"#95a5a6"},{name:"Orange",color:"#f39c12"},{name:"Pumpkin",color:"#d35400"},{name:"Pomegranate",color:"#c0392b"},{name:"Silver",color:"#bdc3c7"},{name:"Asbestos",color:"#7f8c8d"}]},{paletteName:"Flat UI Colors Dutch",id:"flat-ui-colors-dutch",emoji:"\ud83c\uddf3\ud83c\uddf1",colors:[{name:"Sunflower",color:"#FFC312"},{name:"Energos",color:"#C4E538"},{name:"BlueMartina",color:"#12CBC4"},{name:"LavenderRose",color:"#FDA7DF"},{name:"BaraRose",color:"#ED4C67"},{name:"RadiantYellow",color:"#F79F1F"},{name:"AndroidGreen",color:"#A3CB38"},{name:"MediterraneanSea",color:"#1289A7"},{name:"LavenderTea",color:"#D980FA"},{name:"VerryBerry",color:"#B53471"},{name:"PuffinsBill",color:"#EE5A24"},{name:"PixelatedGrass",color:"#009432"},{name:"MerchantMarineBlue",color:"#0652DD"},{name:"ForgottenPurple",color:"#9980FA"},{name:"HollyHock",color:"#833471"},{name:"RedPigment",color:"#EA2027"},{name:"TurkishAqua",color:"#006266"},{name:"20000LeaguesUnderTheSea",color:"#1B1464"},{name:"CircumorbitalRing",color:"#5758BB"},{name:"MagentaPurple",color:"#6F1E51"}]},{paletteName:"Flat UI Colors American",id:"flat-ui-colors-american",emoji:"\ud83c\uddfa\ud83c\uddf8",colors:[{name:"LightGreenishBlue",color:"#55efc4"},{name:"FadedPoster",color:"#81ecec"},{name:"GreenDarnerTail",color:"#74b9ff"},{name:"ShyMoment",color:"#a29bfe"},{name:"CityLights",color:"#dfe6e9"},{name:"MintLeaf",color:"#00b894"},{name:"RobinsEggBlue",color:"#00cec9"},{name:"ElectronBlue",color:"#0984e3"},{name:"ExodusFruit",color:"#6c5ce7"},{name:"SoothingBreeze",color:"#b2bec3"},{name:"SourLemon",color:"#ffeaa7"},{name:"FirstDate",color:"#fab1a0"},{name:"PinkGlamour",color:"#ff7675"},{name:"Pico8Pink",color:"#fd79a8"},{name:"AmericanRiver",color:"#636e72"},{name:"BrightYarrow",color:"#fdcb6e"},{name:"OrangeVille",color:"#e17055"},{name:"Chi-Gong",color:"#d63031"},{name:"PrunusAvium",color:"#e84393"},{name:"DraculaOrchid",color:"#2d3436"}]},{paletteName:"Flat UI Colors Aussie",id:"flat-ui-colors-aussie",emoji:"\ud83c\udde6\ud83c\uddfa",colors:[{name:"Beekeeper",color:"#f6e58d"},{name:"SpicedNectarine",color:"#ffbe76"},{name:"PinkGlamour",color:"#ff7979"},{name:"JuneBud",color:"#badc58"},{name:"CoastalBreeze",color:"#dff9fb"},{name:"Turbo",color:"#f9ca24"},{name:"QuinceJelly",color:"#f0932b"},{name:"CarminePink",color:"#eb4d4b"},{name:"PureApple",color:"#6ab04c"},{name:"HintOfIcePack",color:"#c7ecee"},{name:"MiddleBlue",color:"#7ed6df"},{name:"Heliotrope",color:"#e056fd"},{name:"ExodusFruit",color:"#686de0"},{name:"DeepKoamaru",color:"#30336b"},{name:"SoaringEagle",color:"#95afc0"},{name:"GreenlandGreen",color:"#22a6b3"},{name:"SteelPink",color:"#be2edd"},{name:"Blurple",color:"#4834d4"},{name:"DeepCove",color:"#130f40"},{name:"WizardGrey",color:"#535c68"}]},{paletteName:"Flat UI Colors British",id:"flat-ui-colors-british",emoji:"\ud83c\uddec\ud83c\udde7",colors:[{name:"ProtossPylon",color:"#00a8ff"},{name:"Periwinkle",color:"#9c88ff"},{name:"Rise-N-Shine",color:"#fbc531"},{name:"DownloadProgress",color:"#4cd137"},{name:"Seabrook",color:"#487eb0"},{name:"VanaDylBlue",color:"#0097e6"},{name:"MattPurple",color:"#8c7ae6"},{name:"NanohanachaGold",color:"#e1b12c"},{name:"SkirretGreen",color:"#44bd32"},{name:"Naval",color:"#40739e"},{name:"NasturcianFlower",color:"#e84118"},{name:"LynxWhite",color:"#f5f6fa"},{name:"BlueberrySoda",color:"#7f8fa6"},{name:"MazarineBlue",color:"#273c75"},{name:"BlueNights",color:"#353b48"},{name:"HarleyOrange",color:"#c23616"},{name:"HintOfPensive",color:"#dcdde1"},{name:"ChainGangGrey",color:"#718093"},{name:"PicoVoid",color:"#192a56"},{name:"ElectroMagnetic",color:"#2f3640"}]},{paletteName:"Flat UI Colors Spanish",id:"flat-ui-colors-spanish",emoji:"\ud83c\uddea\ud83c\uddf8",colors:[{name:"JacksonsPurple",color:"#40407a"},{name:"C64Purple",color:"#706fd3"},{name:"SwanWhite",color:"#f7f1e3"},{name:"SummerSky",color:"#34ace0"},{name:"CelestialGreen",color:"#33d9b2"},{name:"LuckyPoint",color:"#2c2c54"},{name:"Liberty",color:"#474787"},{name:"HotStone",color:"#aaa69d"},{name:"DevilBlue",color:"#227093"},{name:"PalmSpringsSplash",color:"#218c74"},{name:"FlourescentRed",color:"#ff5252"},{name:"SyntheticPumpkin",color:"#ff793f"},{name:"CrocodileTooth",color:"#d1ccc0"},{name:"MandarinSorbet",color:"#ffb142"},{name:"SpicedButterNut",color:"#ffda79"},{name:"EyeOfNewt",color:"#b33939"},{name:"ChileanFire",color:"#cd6133"},{name:"GreyPorcelain",color:"#84817a"},{name:"AlamedaOchre",color:"#cc8e35"},{name:"Desert",color:"#ccae62"}]},{paletteName:"Flat UI Colors Indian",id:"flat-ui-colors-indian",emoji:"\ud83c\uddee\ud83c\uddf3",colors:[{name:"OrchidOrange",color:"#FEA47F"},{name:"SpiroDiscoBall",color:"#25CCF7"},{name:"HoneyGlow",color:"#EAB543"},{name:"SweetGarden",color:"#55E6C1"},{name:"FallingStar",color:"#CAD3C8"},{name:"RichGardenia",color:"#F97F51"},{name:"ClearChill",color:"#1B9CFC"},{name:"WhitePepper",color:"#F8EFBA"},{name:"Keppel",color:"#58B19F"},{name:"ShipsOfficer",color:"#2C3A47"},{name:"FieryFuchsia",color:"#B33771"},{name:"BlueBell",color:"#3B3B98"},{name:"GeorgiaPeach",color:"#FD7272"},{name:"OasisStream",color:"#9AECDB"},{name:"BrightUbe",color:"#D6A2E8"},{name:"MagentaPurple",color:"#6D214F"},{name:"EndingNavyBlue",color:"#182C61"},{name:"SasquatchSocks",color:"#FC427B"},{name:"PineGlade",color:"#BDC581"},{name:"HighlighterLavender",color:"#82589F"}]},{paletteName:"Flat UI Colors French",id:"flat-ui-colors-french",emoji:"\ud83c\uddeb\ud83c\uddf7",colors:[{name:"FlatFlesh",color:"#fad390"},{name:"MelonMelody",color:"#f8c291"},{name:"Livid",color:"#6a89cc"},{name:"Spray",color:"#82ccdd"},{name:"ParadiseGreen",color:"#b8e994"},{name:"SquashBlossom",color:"#f6b93b"},{name:"MandarinRed",color:"#e55039"},{name:"AzraqBlue",color:"#4a69bd"},{name:"Dupain",color:"#60a3bc"},{name:"AuroraGreen",color:"#78e08f"},{name:"IcelandPoppy",color:"#fa983a"},{name:"TomatoRed",color:"#eb2f06"},{name:"YueGuangBlue",color:"#1e3799"},{name:"GoodSamaritan",color:"#3c6382"},{name:"Waterfall",color:"#38ada9"},{name:"CarrotOrange",color:"#e58e26"},{name:"JalapenoRed",color:"#b71540"},{name:"DarkSapphire",color:"#0c2461"},{name:"ForestBlues",color:"#0a3d62"},{name:"ReefEncounter",color:"#079992"}]}],y=a(36),E=a(30),N=a.n(E),S=[50,100,200,300,400,500,600,700,800,900];function O(e){var o,a={paletteName:e.paletteName,id:e.id,emoji:e.emoji,colors:{}},r=Object(y.a)(S);try{for(r.s();!(o=r.n()).done;){var l=o.value;a.colors[l]=[]}}catch(h){r.e(h)}finally{r.f()}var n,c,t,m,i=Object(y.a)(e.colors);try{for(i.s();!(n=i.n()).done;){var s=n.value,u=(t=s.color,m=10,N.a.scale((c=t,[N()(c).darken(1.4).hex(),c,"#fff"])).mode("lab").colors(m)).reverse();for(var d in u)a.colors[S[d]].push({name:"".concat(s.name," ").concat(S[d]),id:s.name.toLowerCase().replace(/ /g,"-"),hex:u[d],rgb:N()(u[d]).css(),rgba:N()(u[d]).css().replace("rgb","rgba").replace(")",",1.0)")})}}catch(h){i.e(h)}finally{i.f()}return a}var P=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(F,{palette:O(B[0])}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.8dd84f61.chunk.js.map