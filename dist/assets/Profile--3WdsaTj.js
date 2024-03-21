import{r as h,R as gr,h as mr,i as vr,G as hr,g as yr,j as P}from"./index-MFkXzy34.js";import{P as x}from"./index-UPE9V4vu.js";import{S as Ar}from"./index-B3feB2rc.js";import{s as Re}from"./index-CWgEG4yM.js";function G(e,r,t,n){function o(i){return i instanceof t?i:new t(function(a){a(i)})}return new(t||(t=Promise))(function(i,a){function l(w){try{f(n.next(w))}catch(E){a(E)}}function v(w){try{f(n.throw(w))}catch(E){a(E)}}function f(w){w.done?i(w.value):o(w.value).then(l,v)}f((n=n.apply(e,r||[])).next())})}function q(e,r){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,o,i,a;return a={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function l(f){return function(w){return v([f,w])}}function v(f){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,f[0]&&(t=0)),t;)try{if(n=1,o&&(i=f[0]&2?o.return:f[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,f[1])).done)return i;switch(o=0,i&&(f=[f[0]&2,i.value]),f[0]){case 0:case 1:i=f;break;case 4:return t.label++,{value:f[1],done:!1};case 5:t.label++,o=f[1],f=[0];continue;case 7:f=t.ops.pop(),t.trys.pop();continue;default:if(i=t.trys,!(i=i.length>0&&i[i.length-1])&&(f[0]===6||f[0]===2)){t=0;continue}if(f[0]===3&&(!i||f[1]>i[0]&&f[1]<i[3])){t.label=f[1];break}if(f[0]===6&&t.label<i[1]){t.label=i[1],i=f;break}if(i&&t.label<i[2]){t.label=i[2],t.ops.push(f);break}i[2]&&t.ops.pop(),t.trys.pop();continue}f=r.call(e,t)}catch(w){f=[6,w],o=0}finally{n=i=0}if(f[0]&5)throw f[1];return{value:f[0]?f[1]:void 0,done:!0}}}function _e(e,r){var t=typeof Symbol=="function"&&e[Symbol.iterator];if(!t)return e;var n=t.call(e),o,i=[],a;try{for(;(r===void 0||r-- >0)&&!(o=n.next()).done;)i.push(o.value)}catch(l){a={error:l}}finally{try{o&&!o.done&&(t=n.return)&&t.call(n)}finally{if(a)throw a.error}}return i}function Le(e,r,t){if(t||arguments.length===2)for(var n=0,o=r.length,i;n<o;n++)(i||!(n in r))&&(i||(i=Array.prototype.slice.call(r,0,n)),i[n]=r[n]);return e.concat(i||Array.prototype.slice.call(r))}var br=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function Q(e,r){var t=wr(e);if(typeof t.path!="string"){var n=e.webkitRelativePath;Object.defineProperty(t,"path",{value:typeof r=="string"?r:typeof n=="string"&&n.length>0?n:e.name,writable:!1,configurable:!1,enumerable:!0})}return t}function wr(e){var r=e.name,t=r&&r.lastIndexOf(".")!==-1;if(t&&!e.type){var n=r.split(".").pop().toLowerCase(),o=br.get(n);o&&Object.defineProperty(e,"type",{value:o,writable:!1,configurable:!1,enumerable:!0})}return e}var xr=[".DS_Store","Thumbs.db"];function Dr(e){return G(this,void 0,void 0,function(){return q(this,function(r){return ae(e)&&Sr(e.dataTransfer)?[2,Cr(e.dataTransfer,e.type)]:Or(e)?[2,Er(e)]:Array.isArray(e)&&e.every(function(t){return"getFile"in t&&typeof t.getFile=="function"})?[2,jr(e)]:[2,[]]})})}function Sr(e){return ae(e)}function Or(e){return ae(e)&&ae(e.target)}function ae(e){return typeof e=="object"&&e!==null}function Er(e){return be(e.target.files).map(function(r){return Q(r)})}function jr(e){return G(this,void 0,void 0,function(){var r;return q(this,function(t){switch(t.label){case 0:return[4,Promise.all(e.map(function(n){return n.getFile()}))];case 1:return r=t.sent(),[2,r.map(function(n){return Q(n)})]}})})}function Cr(e,r){return G(this,void 0,void 0,function(){var t,n;return q(this,function(o){switch(o.label){case 0:return e.items?(t=be(e.items).filter(function(i){return i.kind==="file"}),r!=="drop"?[2,t]:[4,Promise.all(t.map(Mr))]):[3,2];case 1:return n=o.sent(),[2,Be(Qe(n))];case 2:return[2,Be(be(e.files).map(function(i){return Q(i)}))]}})})}function Be(e){return e.filter(function(r){return xr.indexOf(r.name)===-1})}function be(e){if(e===null)return[];for(var r=[],t=0;t<e.length;t++){var n=e[t];r.push(n)}return r}function Mr(e){if(typeof e.webkitGetAsEntry!="function")return Ne(e);var r=e.webkitGetAsEntry();return r&&r.isDirectory?Ze(r):Ne(e)}function Qe(e){return e.reduce(function(r,t){return Le(Le([],_e(r),!1),_e(Array.isArray(t)?Qe(t):[t]),!1)},[])}function Ne(e){var r=e.getAsFile();if(!r)return Promise.reject("".concat(e," is not a File"));var t=Q(r);return Promise.resolve(t)}function Pr(e){return G(this,void 0,void 0,function(){return q(this,function(r){return[2,e.isDirectory?Ze(e):Fr(e)]})})}function Ze(e){var r=e.createReader();return new Promise(function(t,n){var o=[];function i(){var a=this;r.readEntries(function(l){return G(a,void 0,void 0,function(){var v,f,w;return q(this,function(E){switch(E.label){case 0:if(l.length)return[3,5];E.label=1;case 1:return E.trys.push([1,3,,4]),[4,Promise.all(o)];case 2:return v=E.sent(),t(v),[3,4];case 3:return f=E.sent(),n(f),[3,4];case 4:return[3,6];case 5:w=Promise.all(l.map(Pr)),o.push(w),i(),E.label=6;case 6:return[2]}})})},function(l){n(l)})}i()})}function Fr(e){return G(this,void 0,void 0,function(){return q(this,function(r){return[2,new Promise(function(t,n){e.file(function(o){var i=Q(o,e.fullPath);t(i)},function(o){n(o)})})]})})}var Ir=function(e,r){if(e&&r){var t=Array.isArray(r)?r:r.split(","),n=e.name||"",o=(e.type||"").toLowerCase(),i=o.replace(/\/.*$/,"");return t.some(function(a){var l=a.trim().toLowerCase();return l.charAt(0)==="."?n.toLowerCase().endsWith(l):l.endsWith("/*")?i===l.replace(/\/.*$/,""):o===l})}return!0};function We(e){return zr(e)||Tr(e)||$e(e)||Ur()}function Ur(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Tr(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function zr(e){if(Array.isArray(e))return we(e)}function He(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,n)}return t}function Ke(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?He(Object(t),!0).forEach(function(n){Ve(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):He(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function Ve(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function Y(e,r){return _r(e)||Rr(e,r)||$e(e,r)||kr()}function kr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $e(e,r){if(e){if(typeof e=="string")return we(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return we(e,r)}}function we(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function Rr(e,r){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var n=[],o=!0,i=!1,a,l;try{for(t=t.call(e);!(o=(a=t.next()).done)&&(n.push(a.value),!(r&&n.length===r));o=!0);}catch(v){i=!0,l=v}finally{try{!o&&t.return!=null&&t.return()}finally{if(i)throw l}}return n}}function _r(e){if(Array.isArray(e))return e}var Lr="file-invalid-type",Br="file-too-large",Nr="file-too-small",Wr="too-many-files",Hr=function(r){r=Array.isArray(r)&&r.length===1?r[0]:r;var t=Array.isArray(r)?"one of ".concat(r.join(", ")):r;return{code:Lr,message:"File type must be ".concat(t)}},Xe=function(r){return{code:Br,message:"File is larger than ".concat(r," ").concat(r===1?"byte":"bytes")}},Ge=function(r){return{code:Nr,message:"File is smaller than ".concat(r," ").concat(r===1?"byte":"bytes")}},Kr={code:Wr,message:"Too many files"};function er(e,r){var t=e.type==="application/x-moz-file"||Ir(e,r);return[t,t?null:Hr(r)]}function rr(e,r,t){if(N(e.size))if(N(r)&&N(t)){if(e.size>t)return[!1,Xe(t)];if(e.size<r)return[!1,Ge(r)]}else{if(N(r)&&e.size<r)return[!1,Ge(r)];if(N(t)&&e.size>t)return[!1,Xe(t)]}return[!0,null]}function N(e){return e!=null}function Xr(e){var r=e.files,t=e.accept,n=e.minSize,o=e.maxSize,i=e.multiple,a=e.maxFiles,l=e.validator;return!i&&r.length>1||i&&a>=1&&r.length>a?!1:r.every(function(v){var f=er(v,t),w=Y(f,1),E=w[0],D=rr(v,n,o),m=Y(D,1),s=m[0],u=l?l(v):null;return E&&s&&!u})}function se(e){return typeof e.isPropagationStopped=="function"?e.isPropagationStopped():typeof e.cancelBubble<"u"?e.cancelBubble:!1}function oe(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,function(r){return r==="Files"||r==="application/x-moz-file"}):!!e.target&&!!e.target.files}function qe(e){e.preventDefault()}function Gr(e){return e.indexOf("MSIE")!==-1||e.indexOf("Trident/")!==-1}function qr(e){return e.indexOf("Edge/")!==-1}function Jr(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.navigator.userAgent;return Gr(e)||qr(e)}function R(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(n){for(var o=arguments.length,i=new Array(o>1?o-1:0),a=1;a<o;a++)i[a-1]=arguments[a];return r.some(function(l){return!se(n)&&l&&l.apply(void 0,[n].concat(i)),se(n)})}}function Yr(){return"showOpenFilePicker"in window}function Qr(e){if(N(e)){var r=Object.entries(e).filter(function(t){var n=Y(t,2),o=n[0],i=n[1],a=!0;return tr(o)||(console.warn('Skipped "'.concat(o,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),a=!1),(!Array.isArray(i)||!i.every(nr))&&(console.warn('Skipped "'.concat(o,'" because an invalid file extension was provided.')),a=!1),a}).reduce(function(t,n){var o=Y(n,2),i=o[0],a=o[1];return Ke(Ke({},t),{},Ve({},i,a))},{});return[{description:"Files",accept:r}]}return e}function Zr(e){if(N(e))return Object.entries(e).reduce(function(r,t){var n=Y(t,2),o=n[0],i=n[1];return[].concat(We(r),[o],We(i))},[]).filter(function(r){return tr(r)||nr(r)}).join(",")}function Vr(e){return e instanceof DOMException&&(e.name==="AbortError"||e.code===e.ABORT_ERR)}function $r(e){return e instanceof DOMException&&(e.name==="SecurityError"||e.code===e.SECURITY_ERR)}function tr(e){return e==="audio/*"||e==="video/*"||e==="image/*"||e==="text/*"||/\w+\/[-+.\w]+/g.test(e)}function nr(e){return/^.*\.[\w]+$/.test(e)}var et=["children"],rt=["open"],tt=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],nt=["refKey","onChange","onClick"];function it(e){return st(e)||at(e)||ir(e)||ot()}function ot(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function at(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function st(e){if(Array.isArray(e))return xe(e)}function Ae(e,r){return lt(e)||ct(e,r)||ir(e,r)||ut()}function ut(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ir(e,r){if(e){if(typeof e=="string")return xe(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return xe(e,r)}}function xe(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function ct(e,r){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var n=[],o=!0,i=!1,a,l;try{for(t=t.call(e);!(o=(a=t.next()).done)&&(n.push(a.value),!(r&&n.length===r));o=!0);}catch(v){i=!0,l=v}finally{try{!o&&t.return!=null&&t.return()}finally{if(i)throw l}}return n}}function lt(e){if(Array.isArray(e))return e}function Je(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,n)}return t}function O(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?Je(Object(t),!0).forEach(function(n){De(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Je(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function De(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function ue(e,r){if(e==null)return{};var t=ft(e,r),n,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],!(r.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}function ft(e,r){if(e==null)return{};var t={},n=Object.keys(e),o,i;for(i=0;i<n.length;i++)o=n[i],!(r.indexOf(o)>=0)&&(t[o]=e[o]);return t}var Oe=h.forwardRef(function(e,r){var t=e.children,n=ue(e,et),o=ar(n),i=o.open,a=ue(o,rt);return h.useImperativeHandle(r,function(){return{open:i}},[i]),gr.createElement(h.Fragment,null,t(O(O({},a),{},{open:i})))});Oe.displayName="Dropzone";var or={disabled:!1,getFilesFromEvent:Dr,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};Oe.defaultProps=or;Oe.propTypes={children:x.func,accept:x.objectOf(x.arrayOf(x.string)),multiple:x.bool,preventDropOnDocument:x.bool,noClick:x.bool,noKeyboard:x.bool,noDrag:x.bool,noDragEventsBubbling:x.bool,minSize:x.number,maxSize:x.number,maxFiles:x.number,disabled:x.bool,getFilesFromEvent:x.func,onFileDialogCancel:x.func,onFileDialogOpen:x.func,useFsAccessApi:x.bool,autoFocus:x.bool,onDragEnter:x.func,onDragLeave:x.func,onDragOver:x.func,onDrop:x.func,onDropAccepted:x.func,onDropRejected:x.func,onError:x.func,validator:x.func};var Se={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function ar(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=O(O({},or),e),t=r.accept,n=r.disabled,o=r.getFilesFromEvent,i=r.maxSize,a=r.minSize,l=r.multiple,v=r.maxFiles,f=r.onDragEnter,w=r.onDragLeave,E=r.onDragOver,D=r.onDrop,m=r.onDropAccepted,s=r.onDropRejected,u=r.onFileDialogCancel,g=r.onFileDialogOpen,d=r.useFsAccessApi,b=r.autoFocus,y=r.preventDropOnDocument,S=r.noClick,F=r.noKeyboard,C=r.noDrag,A=r.noDragEventsBubbling,k=r.onError,_=r.validator,L=h.useMemo(function(){return Zr(t)},[t]),Z=h.useMemo(function(){return Qr(t)},[t]),ce=h.useMemo(function(){return typeof g=="function"?g:Ye},[g]),V=h.useMemo(function(){return typeof u=="function"?u:Ye},[u]),I=h.useRef(null),z=h.useRef(null),ur=h.useReducer(pt,Se),Ee=Ae(ur,2),le=Ee[0],U=Ee[1],cr=le.isFocused,je=le.isFileDialogActive,$=h.useRef(typeof window<"u"&&window.isSecureContext&&d&&Yr()),Ce=function(){!$.current&&je&&setTimeout(function(){if(z.current){var p=z.current.files;p.length||(U({type:"closeDialog"}),V())}},300)};h.useEffect(function(){return window.addEventListener("focus",Ce,!1),function(){window.removeEventListener("focus",Ce,!1)}},[z,je,V,$]);var W=h.useRef([]),Me=function(p){I.current&&I.current.contains(p.target)||(p.preventDefault(),W.current=[])};h.useEffect(function(){return y&&(document.addEventListener("dragover",qe,!1),document.addEventListener("drop",Me,!1)),function(){y&&(document.removeEventListener("dragover",qe),document.removeEventListener("drop",Me))}},[I,y]),h.useEffect(function(){return!n&&b&&I.current&&I.current.focus(),function(){}},[I,b,n]);var B=h.useCallback(function(c){k?k(c):console.error(c)},[k]),Pe=h.useCallback(function(c){c.preventDefault(),c.persist(),ne(c),W.current=[].concat(it(W.current),[c.target]),oe(c)&&Promise.resolve(o(c)).then(function(p){if(!(se(c)&&!A)){var j=p.length,M=j>0&&Xr({files:p,accept:L,minSize:a,maxSize:i,multiple:l,maxFiles:v,validator:_}),T=j>0&&!M;U({isDragAccept:M,isDragReject:T,isDragActive:!0,type:"setDraggedFiles"}),f&&f(c)}}).catch(function(p){return B(p)})},[o,f,B,A,L,a,i,l,v,_]),Fe=h.useCallback(function(c){c.preventDefault(),c.persist(),ne(c);var p=oe(c);if(p&&c.dataTransfer)try{c.dataTransfer.dropEffect="copy"}catch{}return p&&E&&E(c),!1},[E,A]),Ie=h.useCallback(function(c){c.preventDefault(),c.persist(),ne(c);var p=W.current.filter(function(M){return I.current&&I.current.contains(M)}),j=p.indexOf(c.target);j!==-1&&p.splice(j,1),W.current=p,!(p.length>0)&&(U({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),oe(c)&&w&&w(c))},[I,w,A]),ee=h.useCallback(function(c,p){var j=[],M=[];c.forEach(function(T){var J=er(T,L),X=Ae(J,2),pe=X[0],de=X[1],ge=rr(T,a,i),ie=Ae(ge,2),me=ie[0],ve=ie[1],he=_?_(T):null;if(pe&&me&&!he)j.push(T);else{var ye=[de,ve];he&&(ye=ye.concat(he)),M.push({file:T,errors:ye.filter(function(dr){return dr})})}}),(!l&&j.length>1||l&&v>=1&&j.length>v)&&(j.forEach(function(T){M.push({file:T,errors:[Kr]})}),j.splice(0)),U({acceptedFiles:j,fileRejections:M,type:"setFiles"}),D&&D(j,M,p),M.length>0&&s&&s(M,p),j.length>0&&m&&m(j,p)},[U,l,L,a,i,v,D,m,s,_]),re=h.useCallback(function(c){c.preventDefault(),c.persist(),ne(c),W.current=[],oe(c)&&Promise.resolve(o(c)).then(function(p){se(c)&&!A||ee(p,c)}).catch(function(p){return B(p)}),U({type:"reset"})},[o,ee,B,A]),H=h.useCallback(function(){if($.current){U({type:"openDialog"}),ce();var c={multiple:l,types:Z};window.showOpenFilePicker(c).then(function(p){return o(p)}).then(function(p){ee(p,null),U({type:"closeDialog"})}).catch(function(p){Vr(p)?(V(p),U({type:"closeDialog"})):$r(p)?($.current=!1,z.current?(z.current.value=null,z.current.click()):B(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):B(p)});return}z.current&&(U({type:"openDialog"}),ce(),z.current.value=null,z.current.click())},[U,ce,V,d,ee,B,Z,l]),Ue=h.useCallback(function(c){!I.current||!I.current.isEqualNode(c.target)||(c.key===" "||c.key==="Enter"||c.keyCode===32||c.keyCode===13)&&(c.preventDefault(),H())},[I,H]),Te=h.useCallback(function(){U({type:"focus"})},[]),ze=h.useCallback(function(){U({type:"blur"})},[]),ke=h.useCallback(function(){S||(Jr()?setTimeout(H,0):H())},[S,H]),K=function(p){return n?null:p},fe=function(p){return F?null:K(p)},te=function(p){return C?null:K(p)},ne=function(p){A&&p.stopPropagation()},lr=h.useMemo(function(){return function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},p=c.refKey,j=p===void 0?"ref":p,M=c.role,T=c.onKeyDown,J=c.onFocus,X=c.onBlur,pe=c.onClick,de=c.onDragEnter,ge=c.onDragOver,ie=c.onDragLeave,me=c.onDrop,ve=ue(c,tt);return O(O(De({onKeyDown:fe(R(T,Ue)),onFocus:fe(R(J,Te)),onBlur:fe(R(X,ze)),onClick:K(R(pe,ke)),onDragEnter:te(R(de,Pe)),onDragOver:te(R(ge,Fe)),onDragLeave:te(R(ie,Ie)),onDrop:te(R(me,re)),role:typeof M=="string"&&M!==""?M:"presentation"},j,I),!n&&!F?{tabIndex:0}:{}),ve)}},[I,Ue,Te,ze,ke,Pe,Fe,Ie,re,F,C,n]),fr=h.useCallback(function(c){c.stopPropagation()},[]),pr=h.useMemo(function(){return function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},p=c.refKey,j=p===void 0?"ref":p,M=c.onChange,T=c.onClick,J=ue(c,nt),X=De({accept:L,multiple:l,type:"file",style:{display:"none"},onChange:K(R(M,re)),onClick:K(R(T,fr)),tabIndex:-1},j,z);return O(O({},X),J)}},[z,t,l,re,n]);return O(O({},le),{},{isFocused:cr&&!n,getRootProps:lr,getInputProps:pr,rootRef:I,inputRef:z,open:K(H)})}function pt(e,r){switch(r.type){case"focus":return O(O({},e),{},{isFocused:!0});case"blur":return O(O({},e),{},{isFocused:!1});case"openDialog":return O(O({},Se),{},{isFileDialogActive:!0});case"closeDialog":return O(O({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return O(O({},e),{},{isDragActive:r.isDragActive,isDragAccept:r.isDragAccept,isDragReject:r.isDragReject});case"setFiles":return O(O({},e),{},{acceptedFiles:r.acceptedFiles,fileRejections:r.fileRejections});case"reset":return O({},Se);default:return e}}function Ye(){}var sr={exports:{}};(function(e,r){(function(n,o){e.exports=o(h)})(mr,function(t){return function(n){var o={};function i(a){if(o[a])return o[a].exports;var l=o[a]={i:a,l:!1,exports:{}};return n[a].call(l.exports,l,l.exports,i),l.l=!0,l.exports}return i.m=n,i.c=o,i.d=function(a,l,v){i.o(a,l)||Object.defineProperty(a,l,{enumerable:!0,get:v})},i.r=function(a){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},i.t=function(a,l){if(l&1&&(a=i(a)),l&8||l&4&&typeof a=="object"&&a&&a.__esModule)return a;var v=Object.create(null);if(i.r(v),Object.defineProperty(v,"default",{enumerable:!0,value:a}),l&2&&typeof a!="string")for(var f in a)i.d(v,f,(function(w){return a[w]}).bind(null,f));return v},i.n=function(a){var l=a&&a.__esModule?function(){return a.default}:function(){return a};return i.d(l,"a",l),l},i.o=function(a,l){return Object.prototype.hasOwnProperty.call(a,l)},i.p="",i(i.s="./src/react-webcam.tsx")}({"./src/react-webcam.tsx":function(n,o,i){i.r(o);var a=i("react"),l=function(){var D=function(m,s){return D=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(u,g){u.__proto__=g}||function(u,g){for(var d in g)g.hasOwnProperty(d)&&(u[d]=g[d])},D(m,s)};return function(m,s){D(m,s);function u(){this.constructor=m}m.prototype=s===null?Object.create(s):(u.prototype=s.prototype,new u)}}(),v=function(){return v=Object.assign||function(D){for(var m,s=1,u=arguments.length;s<u;s++){m=arguments[s];for(var g in m)Object.prototype.hasOwnProperty.call(m,g)&&(D[g]=m[g])}return D},v.apply(this,arguments)},f=function(D,m){var s={};for(var u in D)Object.prototype.hasOwnProperty.call(D,u)&&m.indexOf(u)<0&&(s[u]=D[u]);if(D!=null&&typeof Object.getOwnPropertySymbols=="function")for(var g=0,u=Object.getOwnPropertySymbols(D);g<u.length;g++)m.indexOf(u[g])<0&&Object.prototype.propertyIsEnumerable.call(D,u[g])&&(s[u[g]]=D[u[g]]);return s};(function(){typeof window>"u"||(navigator.mediaDevices===void 0&&(navigator.mediaDevices={}),navigator.mediaDevices.getUserMedia===void 0&&(navigator.mediaDevices.getUserMedia=function(m){var s=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia;return s?new Promise(function(u,g){s.call(navigator,m,u,g)}):Promise.reject(new Error("getUserMedia is not implemented in this browser"))}))})();function w(){return!!(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia)}var E=function(D){l(m,D);function m(s){var u=D.call(this,s)||this;return u.canvas=null,u.ctx=null,u.requestUserMediaId=0,u.unmounted=!1,u.state={hasUserMedia:!1},u}return m.prototype.componentDidMount=function(){var s=this,u=s.state,g=s.props;if(this.unmounted=!1,!w()){g.onUserMediaError("getUserMedia not supported");return}u.hasUserMedia||this.requestUserMedia(),g.children&&typeof g.children!="function"&&console.warn("children must be a function")},m.prototype.componentDidUpdate=function(s){var u=this.props;if(!w()){u.onUserMediaError("getUserMedia not supported");return}var g=JSON.stringify(s.audioConstraints)!==JSON.stringify(u.audioConstraints),d=JSON.stringify(s.videoConstraints)!==JSON.stringify(u.videoConstraints),b=s.minScreenshotWidth!==u.minScreenshotWidth,y=s.minScreenshotHeight!==u.minScreenshotHeight;(d||b||y)&&(this.canvas=null,this.ctx=null),(g||d)&&(this.stopAndCleanup(),this.requestUserMedia())},m.prototype.componentWillUnmount=function(){this.unmounted=!0,this.stopAndCleanup()},m.stopMediaStream=function(s){s&&(s.getVideoTracks&&s.getAudioTracks?(s.getVideoTracks().map(function(u){s.removeTrack(u),u.stop()}),s.getAudioTracks().map(function(u){s.removeTrack(u),u.stop()})):s.stop())},m.prototype.stopAndCleanup=function(){var s=this.state;s.hasUserMedia&&(m.stopMediaStream(this.stream),s.src&&window.URL.revokeObjectURL(s.src))},m.prototype.getScreenshot=function(s){var u=this,g=u.state,d=u.props;if(!g.hasUserMedia)return null;var b=this.getCanvas(s);return b&&b.toDataURL(d.screenshotFormat,d.screenshotQuality)},m.prototype.getCanvas=function(s){var u=this,g=u.state,d=u.props;if(!this.video||!g.hasUserMedia||!this.video.videoHeight)return null;if(!this.ctx){var b=this.video.videoWidth,y=this.video.videoHeight;if(!this.props.forceScreenshotSourceSize){var S=b/y;b=d.minScreenshotWidth||this.video.clientWidth,y=b/S,d.minScreenshotHeight&&y<d.minScreenshotHeight&&(y=d.minScreenshotHeight,b=y*S)}this.canvas=document.createElement("canvas"),this.canvas.width=(s==null?void 0:s.width)||b,this.canvas.height=(s==null?void 0:s.height)||y,this.ctx=this.canvas.getContext("2d")}var F=this,C=F.ctx,A=F.canvas;return C&&A&&(A.width=(s==null?void 0:s.width)||A.width,A.height=(s==null?void 0:s.height)||A.height,d.mirrored&&(C.translate(A.width,0),C.scale(-1,1)),C.imageSmoothingEnabled=d.imageSmoothing,C.drawImage(this.video,0,0,(s==null?void 0:s.width)||A.width,(s==null?void 0:s.height)||A.height),d.mirrored&&(C.scale(-1,1),C.translate(-A.width,0))),A},m.prototype.requestUserMedia=function(){var s=this,u=this.props,g=function(y,S){var F={video:typeof S<"u"?S:!0};u.audio&&(F.audio=typeof y<"u"?y:!0),s.requestUserMediaId++;var C=s.requestUserMediaId;navigator.mediaDevices.getUserMedia(F).then(function(A){s.unmounted||C!==s.requestUserMediaId?m.stopMediaStream(A):s.handleUserMedia(null,A)}).catch(function(A){s.handleUserMedia(A)})};if("mediaDevices"in navigator)g(u.audioConstraints,u.videoConstraints);else{var d=function(y){return{optional:[{sourceId:y}]}},b=function(y){var S=y.deviceId;return typeof S=="string"?S:Array.isArray(S)&&S.length>0?S[0]:typeof S=="object"&&S.ideal?S.ideal:null};MediaStreamTrack.getSources(function(y){var S=null,F=null;y.forEach(function(k){k.kind==="audio"?S=k.id:k.kind==="video"&&(F=k.id)});var C=b(u.audioConstraints);C&&(S=C);var A=b(u.videoConstraints);A&&(F=A),g(d(S),d(F))})}},m.prototype.handleUserMedia=function(s,u){var g=this.props;if(s||!u){this.setState({hasUserMedia:!1}),g.onUserMediaError(s);return}this.stream=u;try{this.video&&(this.video.srcObject=u),this.setState({hasUserMedia:!0})}catch{this.setState({hasUserMedia:!0,src:window.URL.createObjectURL(u)})}g.onUserMedia(u)},m.prototype.render=function(){var s=this,u=this,g=u.state,d=u.props,b=d.audio;d.forceScreenshotSourceSize;var y=d.disablePictureInPicture;d.onUserMedia,d.onUserMediaError,d.screenshotFormat,d.screenshotQuality,d.minScreenshotWidth,d.minScreenshotHeight,d.audioConstraints,d.videoConstraints,d.imageSmoothing;var S=d.mirrored,F=d.style,C=F===void 0?{}:F,A=d.children,k=f(d,["audio","forceScreenshotSourceSize","disablePictureInPicture","onUserMedia","onUserMediaError","screenshotFormat","screenshotQuality","minScreenshotWidth","minScreenshotHeight","audioConstraints","videoConstraints","imageSmoothing","mirrored","style","children"]),_=S?v(v({},C),{transform:(C.transform||"")+" scaleX(-1)"}):C,L={getScreenshot:this.getScreenshot.bind(this)};return a.createElement(a.Fragment,null,a.createElement("video",v({autoPlay:!0,disablePictureInPicture:y,src:g.src,muted:!b,playsInline:!0,ref:function(Z){s.video=Z},style:_},k)),A&&A(L))},m.defaultProps={audio:!1,disablePictureInPicture:!1,forceScreenshotSourceSize:!1,imageSmoothing:!0,mirrored:!1,onUserMedia:function(){},onUserMediaError:function(){},screenshotFormat:"image/webp",screenshotQuality:.92},m}(a.Component);o.default=E},react:function(n,o){n.exports=t}}).default})})(sr);var dt=sr.exports;const gt=vr(dt);function mt(e){return hr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497.94 74.17l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.75 18.75-49.15 0-67.91zm-246.8-20.53c-15.62-15.62-40.94-15.62-56.56 0L75.8 172.43c-6.25 6.25-6.25 16.38 0 22.62l22.63 22.63c6.25 6.25 16.38 6.25 22.63 0l101.82-101.82 22.63 22.62L93.95 290.03A327.038 327.038 0 0 0 .17 485.11l-.03.23c-1.7 15.28 11.21 28.2 26.49 26.51a327.02 327.02 0 0 0 195.34-93.8l196.79-196.79-82.77-82.77-84.85-84.85z"},child:[]}]})(e)}const vt="data:image/avif;base64,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",wt=()=>{const{userInfo:e,loading:r}=yr({endpoint:"getUserInfo"}),[t,n]=h.useState(!1),[o,i]=h.useState("file"),a=h.useRef(null),l=h.useRef(null),[v,f]=h.useState(vt),[w,E]=h.useState(!1),D=async b=>{if(b.length!==0){n(!0);try{const y=b[0],S=URL.createObjectURL(y);f(S),Re.success("Profile picture updated successfully!")}catch(y){console.error("Error uploading image:",y),Re.error("Failed to update profile picture")}finally{n(!1)}}},{getRootProps:m,getInputProps:s}=ar({onDrop:D}),u=()=>{o==="file"?a.current&&a.current.click():o==="webcam"&&(E(b=>!b),g())},g=h.useCallback(()=>{var y;const b=(y=l.current)==null?void 0:y.getScreenshot();b&&f(b)},[l]),d=()=>{i(b=>b==="file"?"webcam":"file")};return r?P.jsx(Ar,{spinning:r}):e?P.jsxs("div",{className:"mx-9 m-3 flex gap-[4rem] justify-center",children:[P.jsxs("div",{className:"flex flex-col justify-center items-center gap-4",children:[P.jsxs("div",{...m(),className:"cursor-pointer",children:[P.jsx("input",{...s(),ref:a,style:{display:"none"}}),o==="file"?P.jsx("img",{id:"profile-image",src:v,alt:"image-profile",className:"h-[14rem] w-[14rem] p-5 rounded-md"}):P.jsx(gt,{height:600,width:600,mirrored:w,ref:l,screenshotFormat:"image/jpeg"}),P.jsx("label",{onClick:u,children:P.jsxs("p",{id:"changeProfilePicture",className:"flex gap-2 cursor-pointer",children:["Change profile picture"," ",P.jsx("span",{className:"rotate-icon",children:P.jsx(mt,{className:"w-30px"})})]})})]}),P.jsx("button",{className:"p-2 text-gray-100 bg-[#713f12] rounded-2xl",onClick:d,children:o==="file"?"Use Webcam":"CAPTURE"}),P.jsx("hr",{className:"w-full mt-[12px]"}),P.jsxs("h2",{className:"bg-slate-100 p-4 rounded-md font-semibold",children:[(e==null?void 0:e.firstName)+" "+(e==null?void 0:e.lastName),P.jsxs("span",{children:[" - ",e==null?void 0:e.role]})]})]}),P.jsx("div",{className:"grid gap-4 mt-8 "})]}):P.jsx("div",{children:"No user information available"})};export{wt as default};