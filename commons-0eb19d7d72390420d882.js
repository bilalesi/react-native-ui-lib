(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"6MIl":function(e,t,n){},"6VaU":function(e,t,n){"use strict";var r=n("XKFU"),a=n("xF/b"),i=n("S/j/"),o=n("ne8i"),c=n("2OiF"),u=n("zRwo");r(r.P,"Array",{flatMap:function(e){var t,n,r=i(this);return c(e),t=o(r.length),n=u(r,0),a(n,r,r,t,0,1,e,arguments[1]),n}}),n("nGyu")("flatMap")},"7VC1":function(e,t,n){"use strict";var r=n("XKFU"),a=n("Lgjv"),i=n("ol8x"),o=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);r(r.P+r.F*o,"String",{padEnd:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0,!1)}})},"8+s/":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}n("V+eJ"),n("bWfx"),n("f3/d"),n("hHhE"),n("HAE/");var a=n("q1tI"),i=r(a),o=r(n("Gytx"));function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function d(){l=e(s.map((function(e){return e.props}))),p.canUseDOM?t(l):n&&(l=n(l))}var p=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return l},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var c=a.prototype;return c.shouldComponentUpdate=function(e){return!o(e,this.props)},c.componentWillMount=function(){s.push(this),d()},c.componentDidUpdate=function(){d()},c.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),d()},c.render=function(){return i.createElement(r,this.props)},a}(a.Component);return c(p,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),c(p,"canUseDOM",u),p}}},"9XZr":function(e,t,n){"use strict";var r=n("XKFU"),a=n("Lgjv"),i=n("ol8x"),o=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);r(r.P+r.F*o,"String",{padStart:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0,!0)}})},ATp1:function(e,t){e.exports="data:image/png;base64,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"},AphP:function(e,t,n){"use strict";var r=n("XKFU"),a=n("S/j/"),i=n("apmT");r(r.P+r.F*n("eeVq")((function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})})),"Date",{toJSON:function(e){var t=a(this),n=i(t);return"number"!=typeof n||isFinite(n)?t.toISOString():null}})},Bl7J:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("TJpk"),o=n.n(i),c=n("+ZDr"),u=n.n(c),l=(n("6MIl"),n("ATp1")),s=n.n(l),d=function(){return a.a.createElement("div",{className:"header"},a.a.createElement(u.a,{to:"/"},a.a.createElement("img",{className:"logo",src:s.a,alt:"logo"}),a.a.createElement("span",{className:"logo-title"},"RNUILIB")),a.a.createElement("div",{className:"links"},a.a.createElement(u.a,{to:"/getting-started/setup"},"Docs"),a.a.createElement("a",{target:"_blank",href:"https://github.com/wix/react-native-ui-lib"},"GitHub"),a.a.createElement("a",{target:"_blank",href:"https://github.com/wix/react-native-ui-lib/wiki"},"Wiki")))},p=(n("Z2Ku"),n("L9s1"),n("HQyU")),f=n("Wbzz"),T=n("LvDl"),m=n.n(T),E=(n("qmnl"),n("jrv4")),A=n.n(E);var y=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).state={filter:""},n.renderNavbar=function(e){var t=n.state.filter,r=n.getMarkdownPages(e),i=n.getNavbarComponents(e),o=m.a.filter(i,(function(e){return m.a.includes(m.a.lowerCase(e.node.displayName),m.a.lowerCase(t))}));return a.a.createElement("div",{className:"navbar"},a.a.createElement("div",{className:"search"},a.a.createElement("img",{src:A.a}),a.a.createElement("input",{placeholder:"Search...",onChange:n.setFilter})),a.a.createElement("ul",null,m.a.map(r,(function(e){return a.a.createElement("li",null,a.a.createElement(u.a,{to:e.path},e.title))})),a.a.createElement("li",{className:"separator"}),m.a.map(o,(function(e,t){return a.a.createElement("li",{key:t},a.a.createElement(u.a,{key:e.node.displayName,to:"/docs/"+e.node.displayName+"/"},e.node.displayName))}))))},n.setFilter=n.setFilter.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n)),n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=r.prototype;return i.setFilter=function(e){var t=e.target.value;this.setState({filter:t})},i.getMarkdownPages=function(e){var t=e.allFile.edges;return m.a.chain(t).map((function(e){return e.node.childMarkdownRemark.frontmatter})).sortBy("index").value()},i.getNavbarComponents=function(e){var t=e.allComponentMetadata.edges;return m.a.chain(t).filter((function(e){return"IGNORE"!==e.node.displayName})).sortBy("node.displayName").value()},i.render=function(){return a.a.createElement(f.StaticQuery,{query:"25822855",render:this.renderNavbar,data:p})},r}(r.Component);n("XjQp"),t.a=function(e){var t=e.children,n=e.showSidebar;return a.a.createElement("div",{className:"layout"},a.a.createElement(o.a,{title:"RNUILIB",meta:[{name:"description",content:"React Native UI Library"},{name:"keywords",content:"react native, uilib"}]}),a.a.createElement(d,null),a.a.createElement("div",{className:"main"},n&&a.a.createElement(y,null),a.a.createElement("div",{className:"content "+(n?"with-navbar":"")},t)))}},FLlr:function(e,t,n){var r=n("XKFU");r(r.P,"String",{repeat:n("l0Rn")})},Gytx:function(e,t,n){n("2Spj"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),o=Object.keys(t);if(i.length!==o.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(t),u=0;u<i.length;u++){var l=i[u];if(!c(l))return!1;var s=e[l],d=t[l];if(!1===(a=n?n.call(r,s,d,l):void 0)||void 0===a&&s!==d)return!1}return!0}},"HAE/":function(e,t,n){var r=n("XKFU");r(r.S+r.F*!n("nh4g"),"Object",{defineProperty:n("hswa").f})},HQyU:function(e){e.exports=JSON.parse('{"data":{"allComponentMetadata":{"edges":[{"node":{"displayName":"Wizard.Step"}},{"node":{"displayName":"Wizard"}},{"node":{"displayName":"IGNORE"}},{"node":{"displayName":"View"}},{"node":{"displayName":"TouchableOpacity"}},{"node":{"displayName":"Text"}},{"node":{"displayName":"TabController.PageCarousel"}},{"node":{"displayName":"TabController.TabBarItem"}},{"node":{"displayName":"TabController.TabPage"}},{"node":{"displayName":"TabBar.Item"}},{"node":{"displayName":"TabController"}},{"node":{"displayName":"IGNORE"}},{"node":{"displayName":"Stepper"}},{"node":{"displayName":"StackAggregator"}},{"node":{"displayName":"Switch"}},{"node":{"displayName":"StateScreen"}},{"node":{"displayName":"GradientSlider"}},{"node":{"displayName":"ColorSliderGroup"}},{"node":{"displayName":"SharedArea"}},{"node":{"displayName":"SliderGroup"}},{"node":{"displayName":"SourceElement"}},{"node":{"displayName":"TargetElement"}},{"node":{"displayName":"ScrollBarGradient"}},{"node":{"displayName":"ScrollBar"}},{"node":{"displayName":"Item"}},{"node":{"displayName":"RadioButton"}},{"node":{"displayName":"RadioGroup"}},{"node":{"displayName":"ProgressBar"}},{"node":{"displayName":"PickerDialog"}},{"node":{"displayName":"ProgressiveImage"}},{"node":{"displayName":"PickerDialog"}},{"node":{"displayName":"NativePicker"}},{"node":{"displayName":"IGNORE"}},{"node":{"displayName":"Picker.Item"}},{"node":{"displayName":"PanGestureView"}},{"node":{"displayName":"PanningProvider"}},{"node":{"displayName":"PanListenerView"}},{"node":{"displayName":"PageControl"}},{"node":{"displayName":"PanResponderView"}},{"node":{"displayName":"ListItem.Part"}},{"node":{"displayName":"Modal.TopBar"}},{"node":{"displayName":"Modal"}},{"node":{"displayName":"ListItem"}},{"node":{"displayName":"LoaderScreen"}},{"node":{"displayName":"MaskedInput"}},{"node":{"displayName":"TextArea"}},{"node":{"displayName":"Image"}},{"node":{"displayName":"FloatingButton"}},{"node":{"displayName":"DialogDismissibleView"}},{"node":{"displayName":"DateTimePicker"}},{"node":{"displayName":"ConnectionStatusBar"}},{"node":{"displayName":"ColorSwatch"}},{"node":{"displayName":"Chip"}},{"node":{"displayName":"Checkbox"}},{"node":{"displayName":"Card.Section"}},{"node":{"displayName":"Card.Image"}},{"node":{"displayName":"Badge"}},{"node":{"displayName":"ActionSheet"}},{"node":{"displayName":"AnimatedScanner"}},{"node":{"displayName":"ActionBar"}},{"node":{"displayName":"AnimatedImage"}},{"node":{"displayName":"KeyboardAwareListView"}},{"node":{"displayName":"KeyboardAwareScrollView"}},{"node":{"displayName":"Toast"}},{"node":{"displayName":"TagsInput"}},{"node":{"displayName":"TabController.TabBar"}},{"node":{"displayName":"TabBar"}},{"node":{"displayName":"Slider"}},{"node":{"displayName":"Picker"}},{"node":{"displayName":"PanDismissibleView"}},{"node":{"displayName":"Hint"}},{"node":{"displayName":"Swipeable"}},{"node":{"displayName":"FeatureHighlight"}},{"node":{"displayName":"Drawer"}},{"node":{"displayName":"Dialog"}},{"node":{"displayName":"ColorPalette"}},{"node":{"displayName":"ColorPicker"}},{"node":{"displayName":"Carousel"}},{"node":{"displayName":"Card"}},{"node":{"displayName":"Button"}},{"node":{"displayName":"Avatar"}},{"node":{"displayName":"TextField"}}]},"allFile":{"edges":[{"node":{"childMarkdownRemark":{"frontmatter":{"index":1,"title":"Setup","path":"/getting-started/setup"}}}},{"node":{"childMarkdownRemark":{"frontmatter":{"index":2,"title":"Usage","path":"/getting-started/usage"}}}},{"node":{"childMarkdownRemark":{"frontmatter":{"index":3,"title":"v5","path":"/getting-started/v5"}}}},{"node":{"childMarkdownRemark":{"frontmatter":{"index":6,"title":"Assets","path":"/foundation/assets"}}}},{"node":{"childMarkdownRemark":{"frontmatter":{"index":5,"title":"Modifiers","path":"/foundation/modifiers"}}}},{"node":{"childMarkdownRemark":{"frontmatter":{"index":4,"title":"Style","path":"/foundation/style"}}}},{"node":{"childMarkdownRemark":{"frontmatter":{"index":7,"title":"Theme Manager","path":"/foundation/theme-manager"}}}}]}}}')},I74W:function(e,t,n){"use strict";n("qncB")("trimLeft",(function(e){return function(){return e(this,1)}}),"trimStart")},INYr:function(e,t,n){"use strict";var r=n("XKFU"),a=n("CkkT")(6),i="findIndex",o=!0;i in[]&&Array(1)[i]((function(){o=!1})),r(r.P+r.F*o,"Array",{findIndex:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),n("nGyu")(i)},Lgjv:function(e,t,n){var r=n("ne8i"),a=n("l0Rn"),i=n("vhPU");e.exports=function(e,t,n,o){var c=String(i(e)),u=c.length,l=void 0===n?" ":String(n),s=r(t);if(s<=u||""==l)return c;var d=s-u,p=a.call(l,Math.ceil(d/l.length));return p.length>d&&(p=p.slice(0,d)),o?p+c:c+p}},Nr18:function(e,t,n){"use strict";var r=n("S/j/"),a=n("d/Gc"),i=n("ne8i");e.exports=function(e){for(var t=r(this),n=i(t.length),o=arguments.length,c=a(o>1?arguments[1]:void 0,n),u=o>2?arguments[2]:void 0,l=void 0===u?n:a(u,n);l>c;)t[c++]=e;return t}},Oyvg:function(e,t,n){var r=n("dyZX"),a=n("Xbzi"),i=n("hswa").f,o=n("kJMx").f,c=n("quPj"),u=n("C/va"),l=r.RegExp,s=l,d=l.prototype,p=/a/g,f=/a/g,T=new l(p)!==p;if(n("nh4g")&&(!T||n("eeVq")((function(){return f[n("K0xU")("match")]=!1,l(p)!=p||l(f)==f||"/a/i"!=l(p,"i")})))){l=function(e,t){var n=this instanceof l,r=c(e),i=void 0===t;return!n&&r&&e.constructor===l&&i?e:a(T?new s(r&&!i?e.source:e,t):s((r=e instanceof l)?e.source:e,r&&i?u.call(e):t),n?this:d,l)};for(var m=function(e){e in l||i(l,e,{configurable:!0,get:function(){return s[e]},set:function(t){s[e]=t}})},E=o(s),A=0;E.length>A;)m(E[A++]);d.constructor=l,l.prototype=d,n("KroJ")(r,"RegExp",l)}n("elZq")("RegExp")},SPin:function(e,t,n){"use strict";var r=n("XKFU"),a=n("eyMr");r(r.P+r.F*!n("LyE8")([].reduceRight,!0),"Array",{reduceRight:function(e){return a(this,e,arguments.length,arguments[1],!0)}})},TJpk:function(e,t,n){n("LK8F"),n("dZ+Y"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("8+KV"),n("/SS/"),n("hHhE"),n("V+eJ"),n("HAE/"),n("91GP"),t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=d(n("q1tI")),o=d(n("17x9")),c=d(n("8+s/")),u=d(n("bmMU")),l=n("v1p5"),s=n("hFT/");function d(e){return e&&e.__esModule?e:{default:e}}function p(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function T(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var m,E,A,y=(0,c.default)(l.reducePropsToState,l.handleClientStateChange,l.mapStateOnServer)((function(){return null})),g=(m=y,A=E=function(e){function t(){return f(this,t),T(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,u.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case s.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,a=e.arrayTypeChildren,i=e.newChildProps,o=e.nestedChildren;return r({},a,((t={})[n.type]=[].concat(a[n.type]||[],[r({},i,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,a=e.child,i=e.newProps,o=e.newChildProps,c=e.nestedChildren;switch(a.type){case s.TAG_NAMES.TITLE:return r({},i,((t={})[a.type]=c,t.titleAttributes=r({},o),t));case s.TAG_NAMES.BODY:return r({},i,{bodyAttributes:r({},o)});case s.TAG_NAMES.HTML:return r({},i,{htmlAttributes:r({},o)})}return r({},i,((n={})[a.type]=r({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var a;n=r({},n,((a={})[t]=e[t],a))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return i.default.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=p(a,["children"]),c=(0,l.convertReactPropstoHtmlAttributes)(o);switch(n.warnOnInvalidChildren(e,i),e.type){case s.TAG_NAMES.LINK:case s.TAG_NAMES.META:case s.TAG_NAMES.NOSCRIPT:case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=p(e,["children"]),a=r({},n);return t&&(a=this.mapChildrenToProps(t,a)),i.default.createElement(m,a)},a(t,null,[{key:"canUseDOM",set:function(e){m.canUseDOM=e}}]),t}(i.default.Component),E.propTypes={base:o.default.object,bodyAttributes:o.default.object,children:o.default.oneOfType([o.default.arrayOf(o.default.node),o.default.node]),defaultTitle:o.default.string,defer:o.default.bool,encodeSpecialCharacters:o.default.bool,htmlAttributes:o.default.object,link:o.default.arrayOf(o.default.object),meta:o.default.arrayOf(o.default.object),noscript:o.default.arrayOf(o.default.object),onChangeClientState:o.default.func,script:o.default.arrayOf(o.default.object),style:o.default.arrayOf(o.default.object),title:o.default.string,titleAttributes:o.default.object,titleTemplate:o.default.string},E.defaultProps={defer:!0,encodeSpecialCharacters:!0},E.peek=m.peek,E.rewind=function(){var e=m.rewind();return e||(e=(0,l.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},A);g.renderStatic=g.rewind,t.Helmet=g,t.default=g},Tze0:function(e,t,n){"use strict";n("qncB")("trim",(function(e){return function(){return e(this,3)}}))},XjQp:function(e,t,n){},YuTi:function(e,t,n){n("HAE/"),e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},bHtr:function(e,t,n){var r=n("XKFU");r(r.P,"Array",{fill:n("Nr18")}),n("nGyu")("fill")},bmMU:function(e,t,n){"use strict";n("f3/d"),n("SRfc"),n("a1Th"),n("h7Nl"),n("Oyvg"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("LK8F");var r=Array.isArray,a=Object.keys,i=Object.prototype.hasOwnProperty,o="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var c,u,l,s=r(t),d=r(n);if(s&&d){if((u=t.length)!=n.length)return!1;for(c=u;0!=c--;)if(!e(t[c],n[c]))return!1;return!0}if(s!=d)return!1;var p=t instanceof Date,f=n instanceof Date;if(p!=f)return!1;if(p&&f)return t.getTime()==n.getTime();var T=t instanceof RegExp,m=n instanceof RegExp;if(T!=m)return!1;if(T&&m)return t.toString()==n.toString();var E=a(t);if((u=E.length)!==a(n).length)return!1;for(c=u;0!=c--;)if(!i.call(n,E[c]))return!1;if(o&&t instanceof Element&&n instanceof Element)return t===n;for(c=u;0!=c--;)if(!("_owner"===(l=E[c])&&t.$$typeof||e(t[l],n[l])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},"dZ+Y":function(e,t,n){"use strict";var r=n("XKFU"),a=n("CkkT")(3);r(r.P+r.F*!n("LyE8")([].some,!0),"Array",{some:function(e){return a(this,e,arguments[1])}})},fA63:function(e,t,n){"use strict";n("qncB")("trimRight",(function(e){return function(){return e(this,2)}}),"trimEnd")},h7Nl:function(e,t,n){var r=Date.prototype,a=r.toString,i=r.getTime;new Date(NaN)+""!="Invalid Date"&&n("KroJ")(r,"toString",(function(){var e=i.call(this);return e==e?a.call(this):"Invalid Date"}))},"hFT/":function(e,t,n){n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},a=(t.VALID_TAG_NAMES=Object.keys(r).map((function(e){return r[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(a).reduce((function(e,t){return e[a[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},jrv4:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTYuOTY2IDU2Ljk2NiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTYuOTY2IDU2Ljk2NjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggZD0iTTU1LjE0Niw1MS44ODdMNDEuNTg4LDM3Ljc4NmMzLjQ4Ni00LjE0NCw1LjM5Ni05LjM1OCw1LjM5Ni0xNC43ODZjMC0xMi42ODItMTAuMzE4LTIzLTIzLTIzcy0yMywxMC4zMTgtMjMsMjMNCglzMTAuMzE4LDIzLDIzLDIzYzQuNzYxLDAsOS4yOTgtMS40MzYsMTMuMTc3LTQuMTYybDEzLjY2MSwxNC4yMDhjMC41NzEsMC41OTMsMS4zMzksMC45MiwyLjE2MiwwLjkyDQoJYzAuNzc5LDAsMS41MTgtMC4yOTcsMi4wNzktMC44MzdDNTYuMjU1LDU0Ljk4Miw1Ni4yOTMsNTMuMDgsNTUuMTQ2LDUxLjg4N3ogTTIzLjk4NCw2YzkuMzc0LDAsMTcsNy42MjYsMTcsMTdzLTcuNjI2LDE3LTE3LDE3DQoJcy0xNy03LjYyNi0xNy0xN1MxNC42MSw2LDIzLjk4NCw2eiIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="},l0Rn:function(e,t,n){"use strict";var r=n("RYi7"),a=n("vhPU");e.exports=function(e){var t=String(a(this)),n="",i=r(e);if(i<0||i==1/0)throw RangeError("Count can't be negative");for(;i>0;(i>>>=1)&&(t+=t))1&i&&(n+=t);return n}},mGWK:function(e,t,n){"use strict";var r=n("XKFU"),a=n("aCFj"),i=n("RYi7"),o=n("ne8i"),c=[].lastIndexOf,u=!!c&&1/[1].lastIndexOf(1,-0)<0;r(r.P+r.F*(u||!n("LyE8")(c)),"Array",{lastIndexOf:function(e){if(u)return c.apply(this,arguments)||0;var t=a(this),n=o(t.length),r=n-1;for(arguments.length>1&&(r=Math.min(r,i(arguments[1]))),r<0&&(r=n+r);r>=0;r--)if(r in t&&t[r]===e)return r||0;return-1}})},qmnl:function(e,t,n){},v1p5:function(e,t,n){(function(e){n("dZ+Y"),n("KKXr"),n("eM6i"),n("8+KV"),n("LK8F"),n("V+eJ"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("0l/t"),n("bWfx"),n("DNiP"),n("pIFo"),n("91GP"),n("rE2o"),n("ioFf"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=u(n("q1tI")),o=u(n("MgzW")),c=n("hFT/");function u(e){return e&&e.__esModule?e:{default:e}}var l,s=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},d=function(e){var t=E(e,c.TAG_NAMES.TITLE),n=E(e,c.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=E(e,c.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},p=function(e){return E(e,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},f=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return a({},e,t)}),{})},T=function(e,t){return t.filter((function(e){return void 0!==e[c.TAG_NAMES.BASE]})).map((function(e){return e[c.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var i=r[a].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},m=function(e,t,n){var a={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&N("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),o=0;o<i.length;o++){var u=i[o],l=u.toLowerCase();-1===t.indexOf(l)||n===c.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||l===c.TAG_PROPERTIES.REL&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(u)||u!==c.TAG_PROPERTIES.INNER_HTML&&u!==c.TAG_PROPERTIES.CSS_TEXT&&u!==c.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return a[n]||(a[n]={}),r[n]||(r[n]={}),!a[n][s]&&(r[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(r),u=0;u<i.length;u++){var l=i[u],s=(0,o.default)({},a[l],r[l]);a[l]=s}return e}),[]).reverse()},E=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},A=(l=Date.now(),function(e){var t=Date.now();t-l>16?(l=t,e(t)):setTimeout((function(){A(e)}),0)}),y=function(e){return clearTimeout(e)},g="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||A:e.requestAnimationFrame||A,h="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||y:e.cancelAnimationFrame||y,N=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},S=null,v=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,u=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,d=e.styleTags,p=e.title,f=e.titleAttributes;C(c.TAG_NAMES.BODY,r),C(c.TAG_NAMES.HTML,a),b(p,f);var T={baseTag:P(c.TAG_NAMES.BASE,n),linkTags:P(c.TAG_NAMES.LINK,i),metaTags:P(c.TAG_NAMES.META,o),noscriptTags:P(c.TAG_NAMES.NOSCRIPT,u),scriptTags:P(c.TAG_NAMES.SCRIPT,s),styleTags:P(c.TAG_NAMES.STYLE,d)},m={},E={};Object.keys(T).forEach((function(e){var t=T[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(E[e]=T[e].oldTags)})),t&&t(),l(e,m,E)},M=function(e){return Array.isArray(e)?e.join(""):e},b=function(e,t){void 0!==e&&document.title!==e&&(document.title=M(e)),C(c.TAG_NAMES.TITLE,t)},C=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(c.HELMET_ATTRIBUTE),a=r?r.split(","):[],i=[].concat(a),o=Object.keys(t),u=0;u<o.length;u++){var l=o[u],s=t[l]||"";n.getAttribute(l)!==s&&n.setAttribute(l,s),-1===a.indexOf(l)&&a.push(l);var d=i.indexOf(l);-1!==d&&i.splice(d,1)}for(var p=i.length-1;p>=0;p--)n.removeAttribute(i[p]);a.length===i.length?n.removeAttribute(c.HELMET_ATTRIBUTE):n.getAttribute(c.HELMET_ATTRIBUTE)!==o.join(",")&&n.setAttribute(c.HELMET_ATTRIBUTE,o.join(","))}},P=function(e,t){var n=document.head||document.querySelector(c.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+c.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(r),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===c.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===c.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u=void 0===t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(c.HELMET_ATTRIBUTE,"true"),a.some((function(e,t){return o=t,n.isEqualNode(e)}))?a.splice(o,1):i.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:i}},I=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.REACT_TAG_MAP[n]||n]=e[n],t}),t)},R=function(e,t,n){switch(e){case c.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[c.HELMET_ATTRIBUTE]=!0,a=w(n,r),[i.default.createElement(c.TAG_NAMES.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=I(n),i=M(t);return a?"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+a+">"+s(i,r)+"</"+e+">":"<"+e+" "+c.HELMET_ATTRIBUTE+'="true">'+s(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return w(t)},toString:function(){return I(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[c.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=c.REACT_TAG_MAP[e]||e;if(n===c.TAG_PROPERTIES.INNER_HTML||n===c.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),i.default.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===c.TAG_PROPERTIES.INNER_HTML||e===c.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+s(r[t],n)+'"';return e?e+" "+a:a}),""),i=r.innerHTML||r.cssText||"",o=-1===c.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){S&&h(S),e.defer?S=g((function(){v(e,(function(){S=null}))})):(v(e),S=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,u=e.noscriptTags,l=e.scriptTags,s=e.styleTags,d=e.title,p=void 0===d?"":d,f=e.titleAttributes;return{base:R(c.TAG_NAMES.BASE,t,r),bodyAttributes:R(c.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:R(c.ATTRIBUTE_NAMES.HTML,a,r),link:R(c.TAG_NAMES.LINK,i,r),meta:R(c.TAG_NAMES.META,o,r),noscript:R(c.TAG_NAMES.NOSCRIPT,u,r),script:R(c.TAG_NAMES.SCRIPT,l,r),style:R(c.TAG_NAMES.STYLE,s,r),title:R(c.TAG_NAMES.TITLE,{title:p,titleAttributes:f},r)}},t.reducePropsToState=function(e){return{baseTag:T([c.TAG_PROPERTIES.HREF],e),bodyAttributes:f(c.ATTRIBUTE_NAMES.BODY,e),defer:E(e,c.HELMET_PROPS.DEFER),encode:E(e,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:f(c.ATTRIBUTE_NAMES.HTML,e),linkTags:m(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],e),metaTags:m(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:m(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:m(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],e),styleTags:m(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],e),title:d(e),titleAttributes:f(c.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=g,t.warn=N}).call(this,n("yLpj"))},"xF/b":function(e,t,n){"use strict";var r=n("EWmC"),a=n("0/R4"),i=n("ne8i"),o=n("m0Pp"),c=n("K0xU")("isConcatSpreadable");e.exports=function e(t,n,u,l,s,d,p,f){for(var T,m,E=s,A=0,y=!!p&&o(p,f,3);A<l;){if(A in u){if(T=y?y(u[A],A,n):u[A],m=!1,a(T)&&(m=void 0!==(m=T[c])?!!m:r(T)),m&&d>0)E=e(t,n,T,i(T.length),E,d-1)-1;else{if(E>=9007199254740991)throw TypeError();t[E]=T}E++}A++}return E}},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=commons-0eb19d7d72390420d882.js.map