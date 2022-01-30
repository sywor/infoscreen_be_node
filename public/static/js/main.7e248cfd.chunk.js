(this["webpackJsonpinfoscreen-ui"]=this["webpackJsonpinfoscreen-ui"]||[]).push([[0],{110:function(e,t,n){},111:function(e,t,n){},112:function(e,t,n){"use strict";n.r(t);var i=n(1),r=n.n(i),c=n(21),a=n.n(c),s=n(4),l=n(5),o=n(7),u=n(6),d=(n(66),n(2)),h={weekday:"long",day:"numeric",month:"long"},j={hour12:!1,timeStyle:"short"},m=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(e){var i;Object(s.a)(this,n),i=t.call(this,e);var r=new Date;return i.state={date:r.toLocaleDateString("sv-SE",h),time:r.toLocaleTimeString("sv-SE",j)},i}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.intervalID=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID)}},{key:"tick",value:function(){var e=new Date;this.setState({date:e.toLocaleDateString("sv-SE",h),time:e.toLocaleTimeString("sv-SE",j)})}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"clock",children:[Object(d.jsx)("h1",{children:this.state.time}),Object(d.jsx)("h3",{children:this.state.date})]})}}]),n}(r.a.Component),p=n(13),b=(n(73),n(22)),f=n.n(b),v="weather_update",x="news_update",O="news_state",w=n(24);function g(e){return Object.fromEntries(Object.entries(e).map((function(e){var t=Object(w.a)(e,2),n=t[0],i=t[1];return"object"===typeof i&&null!==i&&(i=g(i)),[n.charAt(0).toLowerCase()+n.slice(1),i]})))}var y=n(59),k=n(8);function S(e,t){return e&&e.fileName?"../images/".concat(e.fileName):t}var N=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.data,n=e.marginLeft,i=e.marginTop,r=e.innerWidth;if(!t)return null;for(var c=r/t.length,a=[],s=null,l=null,o=0;o<t.length;o++){var u=t[o],h=S(u.weatherIcon),j=S(u.windDirectionIcon);a.push({x:o*c,weatherIcon:s===h?null:h,windDirectionIcon:l===j?null:j}),s=h,l=j}var m=c/2;return Object(d.jsxs)("g",{transform:"translate(".concat(n,",").concat(i,")"),className:"rv-xy-plot__series rv-xy-plot__series--rect",children:[a.map((function(e){return Object(d.jsx)("image",{x:e.x+m/2,y:-10,width:m,height:m,href:e.weatherIcon})})),a.map((function(e){return Object(d.jsx)("image",{x:e.x+m/2,y:115,width:m,height:m,href:e.windDirectionIcon})}))]})}}]),n}(k.a),T=n.p+"static/media/no_forecast.a31e47c4.png",_={hour12:!1,timeStyle:"short"},D=[1,2,3,5],I=[0,.25,.5,.75,1],M=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(s.a)(this,n),(i=t.call(this,e)).state={},i}return Object(l.a)(n,[{key:"getStepMinMax",value:function(e,t){for(var n=(t-e)/4,i=Math.ceil(n),r=0;r<D.length;r++)if(D[r]>=n){i=D[r];break}return{stepMax:Math.ceil(t/i)*i,stepMin:Math.floor(e/i)*i}}},{key:"render",value:function(){if(!this.props.weather||0===this.props.weather.weatherForecast.forecast.length)return Object(d.jsx)("img",{src:T,alt:"weather forecast"});for(var e=this.props.weather.weatherForecast,t=Object.entries(e.forecast).map((function(e){var t=Object(w.a)(e,2);t[0];return t[1]})).slice(0,36),n=e.maxTemp,i=e.minTemp,r=e.maxWindSpeed,c=this.getStepMinMax(i,n),a=c.stepMax,s=c.stepMin,l=this.getStepMinMax(0,r),o=l.stepMax,u=l.stepMin,h=t.length%3,j=[],m=0;m<t.length-h;m+=3){var p=t[m],b=t[m+1],f=t[m+2],v=p.precipitation+b.precipitation+f.precipitation,x=new Date(p.validTime.trimRight("Z")),O=new Date(f.validTime.trimRight("Z"));O.setMinutes(55),j.push({precipitation:v,startTime:x,endTime:O,windDirectionIcon:b.windDirectionIcon,weatherIcon:b.weatherIcon})}var g=t.length>0?Object(y.a)(t):[];if(g.length>0){var S=g[g.length-1],D=new Date(S.validTime.trimRight("Z"));D.setHours(D.getHours()+1),S.validTime=D.toUTCString(),g.push(S)}return Object(d.jsxs)(k.g,{width:960,height:200,xType:"time",yDomain:[0,1],margin:{left:70,right:40},children:[Object(d.jsx)(k.d,{style:{strokeWidth:.2},tickValues:j.map((function(e){return e.startTime}))}),Object(d.jsx)(k.b,{style:{strokeWidth:.2},tickValues:I}),Object(d.jsx)(k.e,{style:{fill:"#6495ED",stroke:"none"},data:j.map((function(e){return{x0:e.startTime,x:e.endTime,y:(e.precipitation-0)/8+.01}}))}),Object(d.jsx)(k.c,{data:g.map((function(e){return{x:new Date(e.validTime.trimRight("Z")),y:(e.temperature-s)/(a-s)}})),style:{strokeLinejoin:"round",strokeWidth:2,fill:"none"},color:"red",curve:"curveMonotoneX"}),Object(d.jsx)(k.c,{data:g.map((function(e){return{x:new Date(e.validTime.trimRight("Z")),y:(e.windSpeed-u)/(o-u)}})),style:{strokeLinejoin:"round",strokeWidth:2,fill:"none"},color:"#FF8C00",curve:"curveMonotoneX"}),Object(d.jsx)(N,{data:j}),Object(d.jsx)(k.f,{style:{ticks:{fill:"#ffffff"},text:{stroke:"none",fill:"#A2A0A0",fontWeight:400},line:{visibility:"hidden"}},tickValues:j.map((function(e){return e.startTime})),tickFormat:function(e){return"".concat(e.toLocaleTimeString("sv-SE",_))},tickSize:3}),Object(d.jsx)(k.h,{style:{line:{visibility:"hidden"}},tickValues:I,tickFormat:function(e){return Object(d.jsxs)("g",{children:[Object(d.jsxs)("text",{"text-anchor":"end",dy:"0.32em",transform:"translate(-6, 0)",class:"rv-xy-plot__axis__tick__text",style:{fill:"red",stroke:"none",fontWeight:400},children:[Math.round(e*(a-s)+s),"\xb0"]}),Object(d.jsxs)("text",{"text-anchor":"end",dy:"0.32em",transform:"translate(-30, 0)",class:"rv-xy-plot__axis__tick__text",style:{fill:"#FF8C00",stroke:"none",fontWeight:400},children:[(e*(o-u)+u).toFixed(1)," m/s"]})]})},tickPadding:1,tickSize:3}),Object(d.jsx)(k.h,{style:{line:{visibility:"hidden"}},orientation:"right",tickValues:I,tickSize:3,tickFormat:function(e){return Object(d.jsxs)("text",{"text-anchor":"start",x:"0.5em",dy:"0.32em",class:"rv-xy-plot__axis__tick__text",style:{fill:"#6495ED",stroke:"none",fontWeight:400},children:[Math.round(8*e+0)," mm"]})}})]})}}]),n}(r.a.Component);function E(e,t){return e&&e.fileName?"http://s3.error404.nu:8080/info_screen/".concat(e.directory,"/").concat(e.fileName):t}var F="\xb0",W="../images/no_weather.png",C="../images/radarUnavailable.png",L="../images/North.png",A=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(s.a)(this,n),(i=t.call(this,e)).state={weather:null},i}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.intervalID=setInterval((function(){return e.tick()}),3e5),this.tick()}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID)}},{key:"tick",value:function(){this.props.fetchWeatherTick()}},{key:"round",value:function(e){return Math.round(10*e)/10}},{key:"calcTemp",value:function(e){return e?this.round(e.temperature)+" C"+F:"N/A C\xb0"}},{key:"calcTempFeelsLike",value:function(e){if(e){if(e.windSpeed>35||e.temperature<-40||e.temperature>10)return"";if(e.windSpeed<2)return"Feels like "+this.round(e.temperature)+" C"+F;var t=Math.pow(e.windSpeed,.16);return"Feels like "+this.round(13.12+.6215*e.temperature-13.956*t+.48669*e.temperature*t)+" C"+F}return""}},{key:"render",value:function(){var e=this.props.weather;return Object(d.jsxs)("div",{className:"container-weather",children:[Object(d.jsx)("div",{className:"container-weather-top",children:Object(d.jsx)("table",{style:{marginTop:"20px"},children:Object(d.jsxs)("tbody",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:"weather-icon-cell",children:Object(d.jsxs)("div",{className:"weather-icon",children:[Object(d.jsx)("img",{src:e?S(e.weatherIcon,W):W,alt:"weather",width:256}),Object(d.jsx)("h3",{children:e?e.weatherDescription:"N/A"})]})}),Object(d.jsxs)("td",{className:"weather-info-cell",children:[Object(d.jsx)("div",{className:"content-center",children:Object(d.jsxs)("div",{className:"weather-temp",children:[Object(d.jsx)("h2",{children:this.calcTemp(e)}),Object(d.jsx)("h4",{children:this.calcTempFeelsLike(e)})]})}),Object(d.jsx)("div",{className:"horizontal-divider"}),Object(d.jsxs)("div",{className:"weather-wind-info",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h4",{children:"Wind speed"}),Object(d.jsx)("h3",{children:e?this.round(e.windSpeed)+" m/s":"N/A m/s"}),Object(d.jsx)("h4",{children:"Wind gust speed"}),Object(d.jsx)("h3",{children:e?this.round(e.windGustSpeed)+" m/s":"N/A m/s"})]}),Object(d.jsx)("img",{className:"wind-dir-icon",src:e?S(e.windDirection,L):L,alt:"wind direction"})]})]}),Object(d.jsx)("td",{rowSpan:"2",children:Object(d.jsx)("img",{className:"mapGif",src:e?E(e.radarImage,C):C,alt:"radar"})})]}),Object(d.jsxs)("tr",{children:[Object(d.jsxs)("td",{className:"weather-info-cell",children:[Object(d.jsx)("div",{className:"horizontal-divider"}),Object(d.jsxs)("div",{style:{paddingTop:"10px"},children:[Object(d.jsx)("h4",{children:"Precipitation"}),Object(d.jsx)("h3",{children:e?this.round(e.precipitationValue.lastHour)+" mm":"N/A mm"}),Object(d.jsx)("h4",{children:"Humidity"}),Object(d.jsx)("h3",{children:e?this.round(e.humidity)+" %":"N/A %"})]})]}),Object(d.jsxs)("td",{className:"weather-info-cell",children:[Object(d.jsx)("div",{className:"horizontal-divider"}),Object(d.jsxs)("div",{style:{paddingTop:"10px"},children:[Object(d.jsx)("h4",{children:"visibility"}),Object(d.jsx)("h3",{children:e?this.round(e.visibility)+" km":"N/A km"}),Object(d.jsx)("h4",{children:"cloud cover"}),Object(d.jsx)("h3",{children:e?this.round(e.cloudCover)+" %":"N/A %"})]})]})]})]})})}),Object(d.jsx)("div",{className:"tempdiagram",children:Object(d.jsx)(M,{weather:e})})]})}}]),n}(r.a.Component),R=Object(p.b)((function(e){return e.weather?{weather:e.weather}:{}}),{fetchWeatherTick:function(){return function(e,t){f.a.get("http://api.infoscreen.error404.nu/Weather/Latest").then((function(t){var n=g(t.data);e({type:v,payload:n})})).catch((function(e){console.log(e)}))}}})(A);n(110);var z="../images/no_image.png",H={dateStyle:"short",timeStyle:"short"},V=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(s.a)(this,n),(i=t.call(this,e)).state={},i}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.intervalID=setInterval((function(){return e.tick()}),1e3),this.tick()}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID)}},{key:"tick",value:function(){var e=this.props.newsState;switch(e.tick){case 30:e.articleStyle="article-fade-out",e.progressBarStyle="progress-value backwards",e.tick++;break;case 31:this.props.fetchNewsTick(),e.tick++;break;case 32:e.articleStyle="article-fade-in",e.tick++;break;case 33:e.progressBarStyle="progress-value forward",e.tick=0;break;default:e.tick++}this.props.setNewsStateTick(e)}},{key:"render",value:function(){var e=this.props.news,t=e.published?new Date(e.published.trimRight("Z")).toLocaleString("sv-SE",H):"N/A";return Object(d.jsxs)("div",{className:"container-news",children:[Object(d.jsxs)("div",{className:this.props.newsState.articleStyle,children:[Object(d.jsx)("div",{className:"news-title-center",children:Object(d.jsx)("h3",{className:"news-title",children:e.title})}),Object(d.jsxs)("div",{className:"news-body",children:[Object(d.jsx)("div",{className:"content-center",children:Object(d.jsx)("div",{className:"news-body-text",children:Object(d.jsx)("p",{children:e.summary})})}),Object(d.jsx)("img",{className:"news-image",src:e.image?E(e.image,z):z,alt:"article"})]}),Object(d.jsxs)("div",{className:"news-footer",children:[Object(d.jsx)("h4",{children:"Source: "+e.source}),Object(d.jsx)("h4",{children:"Published at: "+t})]})]}),Object(d.jsx)("div",{className:"progress-bar",children:Object(d.jsx)("div",{className:this.props.newsState.progressBarStyle})})]})}}]),n}(r.a.Component),q=Object(p.b)((function(e){return e.news||e.newsState?{news:e.news,newsState:e.newsState}:{}}),{fetchNewsTick:function(){return function(e,t){f.a.get("http://api.infoscreen.error404.nu/News/Next").then((function(t){var n=g(t.data);e({type:x,payload:n})})).catch((function(e){console.log(e)}))}},setNewsStateTick:function(e){return function(t,n){t({type:O,payload:e})}}})(V);document.fullscreenEnabled=document.fullscreenEnabled||document.mozFullScreenEnabled||document.documentElement.webkitRequestFullScreen;var U=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{onClick:function(e){!function(e){if(e.preventDefault(),document.fullscreenEnabled){var t=document.documentElement;t.requestFullscreen?t.requestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.webkitRequestFullScreen&&t.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)}}(e)},children:[Object(d.jsx)(m,{}),Object(d.jsx)(R,{}),Object(d.jsx)(q,{})]})}}]),n}(r.a.Component);n(111);var B=function(){return Object(d.jsx)(U,{})},Z=n(14),P={weatherIcon:"../images/no_weather.png",weatherDescription:null,temperature:null,windSpeed:null,windGustSpeed:null,windDirection:"../images/North.png",radarImage:null,precipitationValue:{lastHour:null,last3Hours:null,last12Hours:null,last24Hours:null},humidity:null,visibility:null,cloudCover:null,weatherForecast:{minTemp:null,maxTemp:null,minWindSpeed:null,maxWindSpeed:null,startTime:null,endTime:null,forecast:[]}};var X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object.assign({},e,t.payload);default:return e}},G={title:null,fetched:null,published:null,image:null,content:null,source:null,key:null};var J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object.assign({},e,t.payload);default:return e}},K={tick:31,articleStyle:"article-hidden",progressBarStyle:"progress-value"};var Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object.assign({},e,t.payload);default:return e}},Q=Object(Z.b)({weather:X,news:J,newsState:Y}),$=n(58),ee=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Z.c,te=Object(Z.d)(Q,ee(Object(Z.a)($.a)));a.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(p.a,{store:te,children:Object(d.jsx)(B,{})})}),document.getElementById("root"))},66:function(e,t,n){},73:function(e,t,n){}},[[112,1,2]]]);
//# sourceMappingURL=main.7e248cfd.chunk.js.map