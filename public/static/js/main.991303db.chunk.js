(this["webpackJsonpinfoscreen-ui"]=this["webpackJsonpinfoscreen-ui"]||[]).push([[0],{115:function(e,t,n){},116:function(e,t,n){},117:function(e,t,n){"use strict";n.r(t);var i=n(1),r=n.n(i),c=n(22),a=n.n(c),s=n(5),l=n(6),o=n(9),h=n(8),d=(n(72),n(2)),u={weekday:"long",day:"numeric",month:"long"},j={hour12:!1,timeStyle:"short"},m=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(e){var i;Object(s.a)(this,n),i=t.call(this,e);var r=new Date;return i.state={date:r.toLocaleDateString("sv-SE",u),time:r.toLocaleTimeString("sv-SE",j)},i}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.intervalID=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID)}},{key:"tick",value:function(){var e=new Date;this.setState({date:e.toLocaleDateString("sv-SE",u),time:e.toLocaleTimeString("sv-SE",j)})}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"clock",children:[Object(d.jsx)("h1",{children:this.state.time}),Object(d.jsx)("h3",{children:this.state.date})]})}}]),n}(r.a.Component),p=n(14),b=(n(118),n(79),n(23)),f=n.n(b),v="weather_update",A="news_update",x="news_state",O=n(25);function g(e){return Object.fromEntries(Object.entries(e).map((function(e){var t=Object(O.a)(e,2),n=t[0],i=t[1];return"object"===typeof i&&null!==i&&(i=g(i)),[n.charAt(0).toLowerCase()+n.slice(1),i]})))}var k=n(65),w=n(4);function y(e,t){return e.fileName?"../images/".concat(e.fileName):t}var S=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.data,n=e.marginLeft,i=e.marginTop,r=e.innerWidth;if(!t)return null;for(var c=r/t.length,a=[],s=null,l=null,o=0;o<t.length;o++){var h=t[o],u=y(h.weatherIcon),j=y(h.windDirectionIcon);a.push({x:o*c,weatherIcon:s===u?null:u,windDirectionIcon:l===j?null:j}),s=u,l=j}var m=c/2;return Object(d.jsxs)("g",{transform:"translate(".concat(n,",").concat(i,")"),className:"rv-xy-plot__series rv-xy-plot__series--rect",children:[a.map((function(e){return Object(d.jsx)("image",{x:e.x+m/2,y:-10,width:m,height:m,href:e.weatherIcon})})),a.map((function(e){return Object(d.jsx)("image",{x:e.x+m/2,y:115,width:m,height:m,href:e.windDirectionIcon})}))]})}}]),n}(w.a),T=n.p+"static/media/no_forecast.a31e47c4.png",I={hour12:!1,timeStyle:"short"},N=[1,2,3,5],D=[0,.25,.5,.75,1],L=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(s.a)(this,n),(i=t.call(this,e)).state={},i}return Object(l.a)(n,[{key:"getStepMinMax",value:function(e,t){for(var n=(t-e)/4,i=Math.ceil(n),r=0;r<N.length;r++)if(N[r]>=n){i=N[r];break}return{stepMax:Math.ceil(t/i)*i,stepMin:Math.floor(e/i)*i}}},{key:"render",value:function(){if(!this.props.weather||0===this.props.weather.weatherForecast.forecast.length)return Object(d.jsx)("img",{src:T,alt:"weather forecast"});for(var e=this.props.weather.weatherForecast,t=Object.entries(e.forecast).map((function(e){var t=Object(O.a)(e,2);t[0];return t[1]})).slice(0,36),n=e.maxTemp,i=e.minTemp,r=e.maxWindSpeed,c=this.getStepMinMax(i,n),a=c.stepMax,s=c.stepMin,l=this.getStepMinMax(0,r),o=l.stepMax,h=l.stepMin,u=t.length%3,j=[],m=0;m<t.length-u;m+=3){var p=t[m],b=t[m+1],f=t[m+2],v=p.precipitation+b.precipitation+f.precipitation,A=new Date(p.validTime.trimRight("Z")),x=new Date(f.validTime.trimRight("Z"));x.setMinutes(55),j.push({precipitation:v,startTime:A,endTime:x,windDirectionIcon:b.windDirectionIcon,weatherIcon:b.weatherIcon})}var g=t.length>0?Object(k.a)(t):[];if(g.length>0){var y=g[g.length-1],N=new Date(y.validTime.trimRight("Z"));N.setHours(N.getHours()+1),y.validTime=N.toUTCString(),g.push(y)}return Object(d.jsxs)(w.g,{width:950,height:200,xType:"time",yDomain:[0,1],margin:{left:70,right:40},children:[Object(d.jsx)(w.d,{style:{strokeWidth:.2},tickValues:j.map((function(e){return e.startTime}))}),Object(d.jsx)(w.b,{style:{strokeWidth:.2},tickValues:D}),Object(d.jsx)(w.e,{style:{fill:"#6495ED",stroke:"none"},data:j.map((function(e){return{x0:e.startTime,x:e.endTime,y:(e.precipitation-0)/8+.01}}))}),Object(d.jsx)(w.c,{data:g.map((function(e){return{x:new Date(e.validTime.trimRight("Z")),y:(e.temperature-s)/(a-s)}})),style:{strokeLinejoin:"round",strokeWidth:2,fill:"none"},color:"red",curve:"curveMonotoneX"}),Object(d.jsx)(w.c,{data:g.map((function(e){return{x:new Date(e.validTime.trimRight("Z")),y:(e.windSpeed-h)/(o-h)}})),style:{strokeLinejoin:"round",strokeWidth:2,fill:"none"},color:"#FF8C00",curve:"curveMonotoneX"}),Object(d.jsx)(S,{data:j}),Object(d.jsx)(w.f,{style:{ticks:{fill:"#ffffff"},text:{stroke:"none",fill:"#A2A0A0",fontWeight:400},line:{visibility:"hidden"}},tickValues:j.map((function(e){return e.startTime})),tickFormat:function(e){return"".concat(e.toLocaleTimeString("sv-SE",I))},tickSize:3}),Object(d.jsx)(w.h,{style:{line:{visibility:"hidden"}},tickValues:D,tickFormat:function(e){return Object(d.jsxs)("g",{children:[Object(d.jsxs)("text",{"text-anchor":"end",dy:"0.32em",transform:"translate(-6, 0)",class:"rv-xy-plot__axis__tick__text",style:{fill:"red",stroke:"none",fontWeight:400},children:[Math.round(e*(a-s)+s),"\xb0"]}),Object(d.jsxs)("text",{"text-anchor":"end",dy:"0.32em",transform:"translate(-35, 0)",class:"rv-xy-plot__axis__tick__text",style:{fill:"#FF8C00",stroke:"none",fontWeight:400},children:[(e*(o-h)+h).toFixed(1)," m/s"]})]})},tickPadding:1,tickSize:3}),Object(d.jsx)(w.h,{style:{line:{visibility:"hidden"}},orientation:"right",tickValues:D,tickSize:3,tickFormat:function(e){return Object(d.jsxs)("text",{"text-anchor":"start",x:"0.5em",dy:"0.32em",class:"rv-xy-plot__axis__tick__text",style:{fill:"#6495ED",stroke:"none",fontWeight:400},children:[Math.round(8*e+0)," mm"]})}})]})}}]),n}(r.a.Component);function M(e){return"http://192.168.1.16:8080/info_screen/".concat(e.directory,"/").concat(e.fileName)}var C="../images/no_weather.png",J="../images/North.png",E=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(s.a)(this,n),(i=t.call(this,e)).state={weather:null},i}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.intervalID=setInterval((function(){return e.tick()}),3e5),this.tick()}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID)}},{key:"tick",value:function(){this.props.fetchWeatherTick()}},{key:"round",value:function(e){return Math.round(10*e)/10}},{key:"render",value:function(){var e=this.props.weather;return Object(d.jsxs)("div",{className:"container-weather",children:[Object(d.jsx)("div",{className:"container-weather-top",children:Object(d.jsx)("table",{style:{marginTop:"20px"},children:Object(d.jsxs)("tbody",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:"weather-icon-cell",children:Object(d.jsxs)("div",{className:"weather-icon",children:[Object(d.jsx)("img",{src:e?y(e.weatherIcon,C):C,alt:"weather",width:256}),Object(d.jsx)("h3",{children:e?e.weatherDescription:"N/A"})]})}),Object(d.jsxs)("td",{className:"weather-info-cell",children:[Object(d.jsx)("div",{className:"content-center",children:Object(d.jsx)("div",{className:"weather-temp",children:Object(d.jsx)("h2",{children:e?this.round(e.temperature)+" C\xb0":"N/A C\xb0"})})}),Object(d.jsx)("div",{className:"horizontal-divider"}),Object(d.jsxs)("div",{className:"weather-wind-info",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h4",{children:"Wind speed"}),Object(d.jsx)("h3",{children:e?this.round(e.windSpeed)+" m/s":"N/A m/s"}),Object(d.jsx)("h4",{children:"Wind gust speed"}),Object(d.jsx)("h3",{children:e?this.round(e.windGustSpeed)+" m/s":"N/A m/s"})]}),Object(d.jsx)("img",{className:"wind-dir-icon",src:e?y(e.windDirection,J):J,alt:"wind direction"})]})]}),Object(d.jsx)("td",{rowSpan:"2",children:Object(d.jsx)("img",{className:"mapGif",src:e?M(e.radarImage):"../images/radarUnavailable.png",alt:"radar"})})]}),Object(d.jsxs)("tr",{children:[Object(d.jsxs)("td",{className:"weather-info-cell",children:[Object(d.jsx)("div",{className:"horizontal-divider"}),Object(d.jsxs)("div",{style:{paddingTop:"10px"},children:[Object(d.jsx)("h4",{children:"Precipitation"}),Object(d.jsx)("h3",{children:e?this.round(e.precipitationValue.lastHour)+" mm":"N/A mm"}),Object(d.jsx)("h4",{children:"Humidity"}),Object(d.jsx)("h3",{children:e?this.round(e.humidity)+" %":"N/A %"})]})]}),Object(d.jsxs)("td",{className:"weather-info-cell",children:[Object(d.jsx)("div",{className:"horizontal-divider"}),Object(d.jsxs)("div",{style:{paddingTop:"10px"},children:[Object(d.jsx)("h4",{children:"visibility"}),Object(d.jsx)("h3",{children:e?this.round(e.visibility)+" km":"N/A km"}),Object(d.jsx)("h4",{children:"cloud cover"}),Object(d.jsx)("h3",{children:e?this.round(e.cloudCover)+" %":"N/A %"})]})]})]})]})})}),Object(d.jsx)("div",{className:"tempdiagram",children:Object(d.jsx)(L,{weather:e})})]})}}]),n}(r.a.Component),W=Object(p.b)((function(e){return e.weather?{weather:e.weather}:{}}),{fetchWeatherTick:function(){return function(e,t){f.a.get("http://api.infoscreen.error404.nu/Weather/Latest").then((function(t){var n=g(t.data);e({type:v,payload:n})})).catch((function(e){console.log(e)}))}}})(E);n(115);var U={dateStyle:"short",timeStyle:"short"},F=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(s.a)(this,n),(i=t.call(this,e)).state={},i}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.intervalID=setInterval((function(){return e.tick()}),1e3),this.tick()}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID)}},{key:"tick",value:function(){var e=this.props.newsState;switch(e.tick){case 30:e.articleStyle="article-fade-out",e.progressBarStyle="progress-value backwards",e.tick++;break;case 31:this.props.fetchNewsTick(),e.tick++;break;case 32:e.articleStyle="article-fade-in",e.tick++;break;case 33:e.progressBarStyle="progress-value forward",e.tick=0;break;default:e.tick++}this.props.setNewsStateTick(e)}},{key:"render",value:function(){var e=this.props.news,t=e.published?new Date(e.published.trimRight("Z")).toLocaleString("sv-SE",U):"N/A",n="";return e.content&&(n=e.content.length<700?e.content:"".concat(e.content.slice(0,700),"...")),Object(d.jsxs)("div",{className:"container-news",children:[Object(d.jsxs)("div",{className:this.props.newsState.articleStyle,children:[Object(d.jsx)("div",{className:"news-title-center",children:Object(d.jsx)("h3",{className:"news-title",children:e.title})}),Object(d.jsxs)("div",{className:"news-body",children:[Object(d.jsx)("div",{className:"content-center",children:Object(d.jsx)("div",{className:"news-body-text",children:Object(d.jsx)("p",{children:n})})}),Object(d.jsx)("img",{className:"news-image",src:e.image?M(e.image):"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMkAAACzCAYAAAAjfziiAAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAC4jAAAuIwF4pT92AAAAB3RJTUUH4wMGECMPDP8vAAAAB4FJREFUeNrtnVuK4zoQQOXo9o4C3kC8lkAgW+mfgCFryWzAkC0J358Emu7EkW1ZqiqdAwMDM/2ISkdVJfnhHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAGGoYgH8MwHLz3t7XfJ4TQtW37jxFFEtXc7/cx98/c7/fEE0mQAmmQBDEQBkkQA2GQBDmQBUmQYy0hBOec65xzLmaXahiGw+OvN+89siCJHTlybdWm2lpGFiTJIUe33++Ln1+slQZZkCSpHBomlOXPhiR5JtDBOTd31RWRMfisSCJuhbW0stb82ZFkgxXV8gSZKUuVWaWpUJARORgXJFk5EWouLRijv+wI/p9youo+7fH5u9Q9DZmElZGxI5OQPcgq9WaVqndtkIPxrFYSBGFckYRAMr5IQgC1j7Wlcd7VJAgkb+qriMcOQQBRjEvyuA4LoeSKckCS8twWiIUo+US5af98qpurtZOdJj5fPDSP9c6oIF0IoXMfTovJKMnpLI51Y1CQP6tWTduV2mJDJhFSH9e0XSm9kSeTCK97ySj0J+YlSTHwiIIo1Zdba8sBSi9Qm0lSr0pkFLKJqUwydWq7dKDJKOUzt5bTeC3l1i13ABFFb1yrK7dypGtKL8ouGncyCljNJLlXHzIK2eQV/ykd726Lb7rf75upQN7v9zE2mJfLpUhTej6f/wmPm7qrgsXaO/W83q1XnVQZ5Xq9FinTjsej5Li+GxOxzxmW3JPccmaRLXoUyZNVYBUgNsOoa9xzrTaaRSmVwSTFz7wkUnaTyCh1xl11JimxA6JVFOHZRNWiIU4SiasJGaXu+DeKBqn47kfqXa8QggshuPP5/PbrLpfL6L13S9/fLlXMkruXZiWRMnClDxz7vh/nCKNxOxhJFk7ArQbu96SLmVRSTuZz9B0hBHc6nRor8bbcuHe5flDMxJNyrdfxeGxCCJpbkE7DL6lCkty9iCZRTqdTs7SkevRE3Y8/puO6FK3XbmUR5dPkS3mtV4qsMqf8evPZmlxlnCbEZBKJW3+aMsqcJv3T/5PQ7EuaD+LLrceTGKsRpe/78eef1KLEllS5Sq/S8TUhSdu2xevWnKKcTqfmeS7ivXfX63W8Xq9j3/eHFKJIa/QlxNdE415b6fVqknvvbwl6jllNPQiSZBiGA6LETfJHVllcr8ceRC494bc4L0RI4r1Xc7eaBFGeZdjCjKRGEinzQnS5JTXlSxDl2eRbKGekl3aiJWnbVux1R1IyypKvnfrd+74/5D4nkRxn5zhMXC1KrgPHd4eFMb/DlOQ/V3EJJRaZxBixZcLWGeVT2TX1e/7cbgYkKcrG28Oqa34kMczcS8hL3eE4dVMXIEk1GcXKTheSvEDLQaJ0Uaz2FBLmB5nEYI8CSCKCT82wlANHmnckKUZMeSNJFLZ4kUQs2m7cAoGSaLifYG05hii65weZhIwCSLIdUy/qeXXQWEqUUi8UQhJYdL9DCVE03a+DJPYkmfz3qbsLc4rCzhaSqGngS4nCgaNhSTRcsvLpmqmpiyARRUecRUuioZZeencgouiJswhJNDygbG0zjih654UISaweKL6aoPQo+uYFjXvGbPLsUSTsetHMI4loUZ6T9JlZSl3CgihxiBmkUm89mvt6NUmTL/U7HN/0BZu96apk3FVmEu3N+9KMsgbLGUXSfBAjibXmXZIojzfdqhJF0nygJ6lAFPfmVdD0KIYk0XyJ+PP9IpReeuMqShJp7+9OLcvWj/2x0qNImweUWxn59eaqWcL0fT+yPVwGcQORe0twiy3gpcQ+vDpmAkfI0MW8Irrv+3GLLWANW79iM4nlkism08Q8vDpFRnHO3WJ2vbY8I9ESf5ETcmKViVr95vD9/T1+fX2plCrmGb+pMkri+B7cmx03JDE6iNKRJkrORdBs4y5xoDSTqvSqNe7qdrd4rI5uUTTGb6c4qGAoo0iOt8pzErKJTlG0xm2nPKBgIKNIj7PaE3eyiS5RNMdrpzmYEnZkEGWdIBqqBe3XbvH4TsPNvBTU1PzaVyMD5euigz4LcdOUSTqmsq6M8uH/q4mnqhWYbKIro1iJV2MpiIgiRxRLcdLYuHcrggsZSq8PcVBXNu8UBpCLHwWL8qlv0Ri/nbUAkk2Ki3KzVg6rruHpT8T0KCmEI5NoDCyw4KjPJDEykFHKLzzaY9DUEDxEKSeKhbFvagkeouQXxcqYm+lJUr/7HOhjTDbuiIIglFuUXqXH9e2jniyPbWM4oCmecgiMp2sILKIwjhVLMqMP6bgmbFl5VcNC01QS7Kq2LBkzJNl0Vaxdlhk7gNVk34ZJgCiMDZKsWS2rmBCMB5KsLr+sTo6Zh6vVbm5U36guOYXXLExtnxdJmDx8PiSRP5GehBC6tm3FlCPDMBy894ufcIkgSLKZLCUnWe232SKJUll+ZRvXtu3qMR+GIflrtZEDSUTJIgnkQJLUsszaNhYM16ohCdmFrIEkCIMYSII0SIEkFbH2zOId0s5mkASyyPT8O5MfAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgF/8DJcewxtahmksAAAAASUVORK5CYII=",alt:"article"})]}),Object(d.jsxs)("div",{className:"news-footer",children:[Object(d.jsx)("h4",{children:"Source: "+e.source}),Object(d.jsx)("h4",{children:"Published at: "+t})]})]}),Object(d.jsx)("div",{className:"progress-bar",children:Object(d.jsx)("div",{className:this.props.newsState.progressBarStyle})})]})}}]),n}(r.a.Component),R=Object(p.b)((function(e){return e.news||e.newsState?{news:e.news,newsState:e.newsState}:{}}),{fetchNewsTick:function(){return function(e,t){f.a.get("http://api.infoscreen.error404.nu/News/Next").then((function(t){var n=g(t.data);e({type:A,payload:n})})).catch((function(e){console.log(e)}))}},setNewsStateTick:function(e){return function(t,n){t({type:x,payload:e})}}})(F);n(116);var K=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(m,{}),Object(d.jsx)(W,{}),Object(d.jsx)(R,{})]})},X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,120)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),i(e),r(e),c(e),a(e)}))},q=n(11),B={weatherIcon:"../images/no_weather.png",weatherDescription:null,temperature:null,windSpeed:null,windGustSpeed:null,windDirection:"../images/North.png",radarImage:"../images/radarUnavailable.png",precipitationValue:{lastHour:null,last3Hours:null,last12Hours:null,last24Hours:null},humidity:null,visibility:null,cloudCover:null,weatherForecast:{minTemp:null,maxTemp:null,minWindSpeed:null,maxWindSpeed:null,startTime:null,endTime:null,forecast:[]}};var V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object.assign({},e,t.payload);default:return e}},Z={title:null,fetched:null,published:null,image:null,content:null,source:null,key:null};var P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return Object.assign({},e,t.payload);default:return e}},Q={tick:31,articleStyle:"article-hidden",progressBarStyle:"progress-value"};var G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object.assign({},e,t.payload);default:return e}},z=Object(q.c)({weather:V,news:P,newsState:G}),H=n(63),_=n(64),Y=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||q.d,$=Object(_.createLogger)(),ee=Object(q.e)(z,Y(Object(q.a)(H.a,$)));a.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(p.a,{store:ee,children:Object(d.jsx)(K,{})})}),document.getElementById("root")),X()},72:function(e,t,n){},79:function(e,t,n){}},[[117,1,2]]]);
//# sourceMappingURL=main.991303db.chunk.js.map