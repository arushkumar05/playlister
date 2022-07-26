(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"00b4":function(e,t,n){"use strict";n("ac1f");var r=n("23e7"),i=n("c65b"),s=n("e330"),o=n("1626"),a=n("861d"),c=function(){var e=!1,t=/[ac]/;return t.exec=function(){return e=!0,/./.exec.apply(this,arguments)},!0===t.test("abc")&&e}(),u=TypeError,l=s(/./.test);r({target:"RegExp",proto:!0,forced:!c},{test:function(e){var t=this.exec;if(!o(t))return l(this,e);var n=i(t,this,e);if(null!==n&&!a(n))throw new u("RegExp exec method returned something other than an Object or null");return!!n}})},"00ee":function(e,t,n){var r=n("b622"),i=r("toStringTag"),s={};s[i]="z",e.exports="[object z]"===String(s)},"01b4":function(e,t){var n=function(){this.head=null,this.tail=null};n.prototype={add:function(e){var t={item:e,next:null};this.head?this.tail.next=t:this.head=t,this.tail=t},get:function(){var e=this.head;if(e)return this.head=e.next,this.tail===e&&(this.tail=null),e.item}},e.exports=n},"0366":function(e,t,n){var r=n("e330"),i=n("59ed"),s=n("40d5"),o=r(r.bind);e.exports=function(e,t){return i(e),void 0===t?e:s?o(e,t):function(){return e.apply(t,arguments)}}},"057f":function(e,t,n){var r=n("c6b6"),i=n("fc6a"),s=n("241c").f,o=n("4dae"),a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(e){try{return s(e)}catch(t){return o(a)}};e.exports.f=function(e){return a&&"Window"==r(e)?c(e):s(i(e))}},"06cf":function(e,t,n){var r=n("83ab"),i=n("c65b"),s=n("d1e7"),o=n("5c6c"),a=n("fc6a"),c=n("a04b"),u=n("1a2d"),l=n("0cfb"),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=c(t),l)try{return h(e,t)}catch(n){}if(u(e,t))return o(!i(s.f,e,t),e[t])}},"07fa":function(e,t,n){var r=n("50c4");e.exports=function(e){return r(e.length)}},"0829":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return Tl})),n.d(t,"b",(function(){return vu})),n.d(t,"c",(function(){return ru})),n.d(t,"d",(function(){return $c})),n.d(t,"e",(function(){return Ju})),n.d(t,"f",(function(){return yu})),n.d(t,"g",(function(){return T})),n.d(t,"h",(function(){return wu})),n.d(t,"i",(function(){return Xu})),n.d(t,"j",(function(){return Zu})),n.d(t,"k",(function(){return U})),n.d(t,"l",(function(){return Ol})),n.d(t,"m",(function(){return se})),n.d(t,"n",(function(){return ue})),n.d(t,"o",(function(){return W})),n.d(t,"p",(function(){return qc})),n.d(t,"q",(function(){return w})),n.d(t,"r",(function(){return Q})),n.d(t,"s",(function(){return m})),n.d(t,"t",(function(){return Mc})),n.d(t,"u",(function(){return Fl})),n.d(t,"v",(function(){return Hl})),n.d(t,"w",(function(){return Wl})),n.d(t,"x",(function(){return lu})),n.d(t,"y",(function(){return Qc})),n.d(t,"z",(function(){return Yc})),n.d(t,"A",(function(){return zc})),n.d(t,"B",(function(){return Ml})),n.d(t,"C",(function(){return zl})),n.d(t,"D",(function(){return fu})),n.d(t,"E",(function(){return Jc})),n.d(t,"F",(function(){return au})),n.d(t,"G",(function(){return cu})),n.d(t,"H",(function(){return du})),n.d(t,"I",(function(){return yl})),n.d(t,"J",(function(){return ml})),n.d(t,"K",(function(){return su})),n.d(t,"L",(function(){return ql})),n.d(t,"M",(function(){return Al})),n.d(t,"N",(function(){return xl})),n.d(t,"O",(function(){return Rl})),n.d(t,"P",(function(){return Nl})),n.d(t,"Q",(function(){return Dl})),n.d(t,"R",(function(){return Pl})),n.d(t,"S",(function(){return Ql})),n.d(t,"T",(function(){return ll})),n.d(t,"U",(function(){return hl})),n.d(t,"V",(function(){return pu})),n.d(t,"W",(function(){return gu})),n.d(t,"X",(function(){return Ul})),n.d(t,"Y",(function(){return Vl})),n.d(t,"Z",(function(){return cl})),n.d(t,"ab",(function(){return il})),n.d(t,"bb",(function(){return Zc})),n.d(t,"cb",(function(){return Xc})),n.d(t,"db",(function(){return Kl})),n.d(t,"eb",(function(){return $l})),n.d(t,"fb",(function(){return jl})),n.d(t,"gb",(function(){return f})),n.d(t,"hb",(function(){return tl})),n.d(t,"ib",(function(){return pl})),n.d(t,"jb",(function(){return fl})),n.d(t,"kb",(function(){return Ll})),n.d(t,"lb",(function(){return hu})),n.d(t,"mb",(function(){return ol}));var r=n("589b"),i=n("22e5"),s=n("e691"),o=n("1fd5"),a=n("8f6b");const c="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}u.UNAUTHENTICATED=new u(null),u.GOOGLE_CREDENTIALS=new u("google-credentials-uid"),u.FIRST_PARTY=new u("first-party-uid"),u.MOCK_USER=new u("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let l="9.8.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h=new s["b"]("@firebase/firestore");function d(){return h.logLevel}function f(e){h.setLogLevel(e)}function p(e,...t){if(h.logLevel<=s["a"].DEBUG){const n=t.map(y);h.debug(`Firestore (${l}): ${e}`,...n)}}function g(e,...t){if(h.logLevel<=s["a"].ERROR){const n=t.map(y);h.error(`Firestore (${l}): ${e}`,...n)}}function m(e,...t){if(h.logLevel<=s["a"].WARN){const n=t.map(y);h.warn(`Firestore (${l}): ${e}`,...n)}}function y(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(e="Unexpected state"){const t=`FIRESTORE (${l}) INTERNAL ASSERTION FAILED: `+e;throw g(t),new Error(t)}function b(e,t){e||v()}function w(e,t){e||v()}function _(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class T extends o["c"]{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer "+e)}}class O{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(u.UNAUTHENTICATED))}shutdown(){}}class k{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class A{constructor(e){this.t=e,this.currentUser=u.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new E;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new E,e.enqueueRetryable(()=>r(this.currentUser))};const s=()=>{const t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},o=e=>{p("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(p("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new E)}},0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(p("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(b("string"==typeof t.accessToken),new S(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return b(null===e||"string"==typeof e),new u(e)}}class C{constructor(e,t,n){this.type="FirstParty",this.user=u.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class x{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new C(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(u.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class R{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class N{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,t){const n=e=>{null!=e.error&&p("FirebaseAppCheckTokenProvider","Error getting App Check token; using placeholder token instead. Error: "+e.error.message);const n=e.token!==this.p;return this.p=e.token,p("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};const r=e=>{p("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.g.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){const e=this.g.getImmediate({optional:!0});e?r(e):p("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?(b("string"==typeof e.token),this.p=e.token,new R(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class D{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.I(e),this.T=e=>t.writeSequenceNumber(e))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */D.A=-1;class j{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=P(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function L(e,t){return e<t?-1:e>t?1:0}function M(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}function F(e){return e+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new T(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new T(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new T(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new T(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return U.fromMillis(Date.now())}static fromDate(e){return U.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new U(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?L(this.nanoseconds,e.nanoseconds):L(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.timestamp=e}static fromTimestamp(e){return new V(e)}static min(){return new V(new U(0,0))}static max(){return new V(new U(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function B(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function G(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e,t,n){void 0===t?t=0:t>e.length&&v(),void 0===n?n=e.length-t:n>e.length-t&&v(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===K.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof K?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class z extends K{construct(e,t,n){return new z(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new T(I.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new z(t)}static emptyPath(){return new z([])}}const $=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class W extends K{construct(e,t,n){return new W(e,t,n)}static isValidIdentifier(e){return $.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),W.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new W(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new T(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new T(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new T(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new T(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new W(t)}static emptyPath(){return new W([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.fields=e,e.sort(W.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return M(this.fields,e.fields,(e,t)=>e.isEqual(t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(){return"undefined"!=typeof atob}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new Y(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Y(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return L(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Y.EMPTY_BYTE_STRING=new Y("");const J=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function X(e){if(b(!!e),"string"==typeof e){let t=0;const n=J.exec(e);if(b(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Z(e.seconds),nanos:Z(e.nanos)}}function Z(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function ee(e){return"string"==typeof e?Y.fromBase64String(e):Y.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function ne(e){const t=e.mapValue.fields.__previous_value__;return te(t)?ne(t):t}function re(e){const t=X(e.mapValue.fields.__local_write_time__.timestampValue);return new U(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e,t,n,r,i,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class se{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new se("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof se&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(e){return null==e}function ae(e){return 0===e&&1/e==-1/0}function ce(e){return"number"==typeof e&&Number.isInteger(e)&&!ae(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.path=e}static fromPath(e){return new ue(z.fromString(e))}static fromName(e){return new ue(z.fromString(e).popFirst(5))}static empty(){return new ue(z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===z.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return z.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ue(new z(e.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},he={nullValue:"NULL_VALUE"};function de(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?te(e)?4:Oe(e)?9007199254740991:10:v()}function fe(e,t){if(e===t)return!0;const n=de(e);if(n!==de(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return re(e).isEqual(re(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=X(e.timestampValue),r=X(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return ee(e.bytesValue).isEqual(ee(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Z(e.geoPointValue.latitude)===Z(t.geoPointValue.latitude)&&Z(e.geoPointValue.longitude)===Z(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Z(e.integerValue)===Z(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Z(e.doubleValue),r=Z(t.doubleValue);return n===r?ae(n)===ae(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return M(e.arrayValue.values||[],t.arrayValue.values||[],fe);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(q(n)!==q(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!fe(n[i],r[i])))return!1;return!0}(e,t);default:return v()}}function pe(e,t){return void 0!==(e.values||[]).find(e=>fe(e,t))}function ge(e,t){if(e===t)return 0;const n=de(e),r=de(t);if(n!==r)return L(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return L(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Z(e.integerValue||e.doubleValue),r=Z(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return me(e.timestampValue,t.timestampValue);case 4:return me(re(e),re(t));case 5:return L(e.stringValue,t.stringValue);case 6:return function(e,t){const n=ee(e),r=ee(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=L(n[i],r[i]);if(0!==e)return e}return L(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=L(Z(e.latitude),Z(t.latitude));return 0!==n?n:L(Z(e.longitude),Z(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=ge(n[i],r[i]);if(e)return e}return L(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===le.mapValue&&t===le.mapValue)return 0;if(e===le.mapValue)return 1;if(t===le.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const e=L(r[o],s[o]);if(0!==e)return e;const t=ge(n[r[o]],i[s[o]]);if(0!==t)return t}return L(r.length,s.length)}(e.mapValue,t.mapValue);default:throw v()}}function me(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return L(e,t);const n=X(e),r=X(t),i=L(n.seconds,r.seconds);return 0!==i?i:L(n.nanos,r.nanos)}function ye(e){return ve(e)}function ve(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=X(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?ee(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,ue.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=ve(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${ve(e.fields[i])}`;return n+"}"}(e.mapValue):v();var t,n}function be(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function we(e){return!!e&&"integerValue"in e}function _e(e){return!!e&&"arrayValue"in e}function Ie(e){return!!e&&"nullValue"in e}function Te(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Ee(e){return!!e&&"mapValue"in e}function Se(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return B(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=Se(n)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Se(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Oe(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}function ke(e){return"nullValue"in e?he:"booleanValue"in e?{booleanValue:!1}:"integerValue"in e||"doubleValue"in e?{doubleValue:NaN}:"timestampValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in e?{stringValue:""}:"bytesValue"in e?{bytesValue:""}:"referenceValue"in e?be(se.empty(),ue.empty()):"geoPointValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in e?{arrayValue:{}}:"mapValue"in e?{mapValue:{}}:v()}function Ae(e){return"nullValue"in e?{booleanValue:!1}:"booleanValue"in e?{doubleValue:NaN}:"integerValue"in e||"doubleValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in e?{stringValue:""}:"stringValue"in e?{bytesValue:""}:"bytesValue"in e?be(se.empty(),ue.empty()):"referenceValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in e?{arrayValue:{}}:"arrayValue"in e?{mapValue:{}}:"mapValue"in e?le:v()}function Ce(e,t){const n=ge(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?-1:!e.inclusive&&t.inclusive?1:0}function xe(e,t){const n=ge(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?1:!e.inclusive&&t.inclusive?-1:0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e){this.value=e}static empty(){return new Re({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Ee(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Se(t)}setAll(e){let t=W.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=Se(e):r.push(i.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());Ee(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return fe(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Ee(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){B(t,(t,n)=>e[t]=n);for(const r of n)delete e[r]}clone(){return new Re(Se(this.value))}}function Ne(e){const t=[];return B(e.fields,(e,n)=>{const r=new W([e]);if(Ee(n)){const e=Ne(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)}),new H(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class De{constructor(e,t,n,r,i,s){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.data=i,this.documentState=s}static newInvalidDocument(e){return new De(e,0,V.min(),V.min(),Re.empty(),0)}static newFoundDocument(e,t,n){return new De(e,1,t,V.min(),n,0)}static newNoDocument(e,t){return new De(e,2,t,V.min(),Re.empty(),0)}static newUnknownDocument(e,t){return new De(e,3,t,V.min(),Re.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Re.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Re.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof De&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new De(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}class Pe{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}function je(e){return e.fields.find(e=>2===e.kind)}function Le(e){return e.fields.filter(e=>2!==e.kind)}Pe.UNKNOWN_ID=-1;class Me{constructor(e,t){this.fieldPath=e,this.kind=t}}class Fe{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Fe(0,qe.min())}}function Ue(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=V.fromTimestamp(1e9===r?new U(n+1,0):new U(n,r));return new qe(i,ue.empty(),t)}function Ve(e){return new qe(e.readTime,e.key,-1)}class qe{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new qe(V.min(),ue.empty(),-1)}static max(){return new qe(V.max(),ue.empty(),-1)}}function Be(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=ue.comparator(e.documentKey,t.documentKey),0!==n?n:L(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,t){this.comparator=e,this.root=t||ze.EMPTY}insert(e,t){return new Ge(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ze.BLACK,null,null))}remove(e){return new Ge(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ze.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ke(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ke(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ke(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ke(this.root,e,this.comparator,!0)}}class Ke{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ze{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:ze.RED,this.left=null!=r?r:ze.EMPTY,this.right=null!=i?i:ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new ze(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return ze.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw v();if(this.right.isRed())throw v();const e=this.left.check();if(e!==this.right.check())throw v();return e+(this.isRed()?0:1)}}ze.EMPTY=null,ze.RED=!0,ze.BLACK=!1,ze.EMPTY=new class{constructor(){this.size=0}get key(){throw v()}get value(){throw v()}get color(){throw v()}get left(){throw v()}get right(){throw v()}copy(e,t,n,r,i){return this}insert(e,t,n){return new ze(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $e{constructor(e){this.comparator=e,this.data=new Ge(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new We(this.data.getIterator())}getIteratorFrom(e){return new We(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof $e))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new $e(this.comparator);return t.data=e,t}}class We{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function He(e){return e.hasNext()?e.getNext():void 0}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.P=null}}function Ye(e,t=null,n=[],r=[],i=null,s=null,o=null){return new Qe(e,t,n,r,i,s,o)}function Je(e){const t=_(e);if(null===t.P){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(e=>{return(t=e).field.canonicalString()+t.op.toString()+ye(t.value);var t}).join(","),e+="|ob:",e+=t.orderBy.map(e=>function(e){return e.field.canonicalString()+e.dir}(e)).join(","),oe(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(e=>ye(e)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(e=>ye(e)).join(",")),t.P=e}return t.P}function Xe(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(e=>{return`${(t=e).field.canonicalString()} ${t.op} ${ye(t.value)}`;var t}).join(", ")}]`),oe(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(e=>ye(e)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(e=>ye(e)).join(",")),`Target(${t})`}function Ze(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++)if(!gt(e.orderBy[i],t.orderBy[i]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],r=t.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!fe(n.value,r.value))return!1;var n,r;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!yt(e.startAt,t.startAt)&&yt(e.endAt,t.endAt)}function et(e){return ue.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function tt(e,t){return e.filters.filter(e=>e instanceof it&&e.field.isEqual(t))}function nt(e,t,n){let r=he,i=!0;for(const s of tt(e,t)){let e=he,t=!0;switch(s.op){case"<":case"<=":e=ke(s.value);break;case"==":case"in":case">=":e=s.value;break;case">":e=s.value,t=!1;break;case"!=":case"not-in":e=he}Ce({value:r,inclusive:i},{value:e,inclusive:t})<0&&(r=e,i=t)}if(null!==n)for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){const e=n.position[s];Ce({value:r,inclusive:i},{value:e,inclusive:n.inclusive})<0&&(r=e,i=n.inclusive);break}return{value:r,inclusive:i}}function rt(e,t,n){let r=le,i=!0;for(const s of tt(e,t)){let e=le,t=!0;switch(s.op){case">=":case">":e=Ae(s.value),t=!1;break;case"==":case"in":case"<=":e=s.value;break;case"<":e=s.value,t=!1;break;case"!=":case"not-in":e=le}xe({value:r,inclusive:i},{value:e,inclusive:t})>0&&(r=e,i=t)}if(null!==n)for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){const e=n.position[s];xe({value:r,inclusive:i},{value:e,inclusive:n.inclusive})>0&&(r=e,i=n.inclusive);break}return{value:r,inclusive:i}}class it extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.V(e,t,n):new st(e,t,n):"array-contains"===t?new ut(e,n):"in"===t?new lt(e,n):"not-in"===t?new ht(e,n):"array-contains-any"===t?new dt(e,n):new it(e,t,n)}static V(e,t,n){return"in"===t?new ot(e,n):new at(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.v(ge(t,this.value)):null!==t&&de(this.value)===de(t)&&this.v(ge(t,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return v()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class st extends it{constructor(e,t,n){super(e,t,n),this.key=ue.fromName(n.referenceValue)}matches(e){const t=ue.comparator(e.key,this.key);return this.v(t)}}class ot extends it{constructor(e,t){super(e,"in",t),this.keys=ct("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class at extends it{constructor(e,t){super(e,"not-in",t),this.keys=ct("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function ct(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>ue.fromName(e.referenceValue))}class ut extends it{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return _e(t)&&pe(t.arrayValue,this.value)}}class lt extends it{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&pe(this.value.arrayValue,t)}}class ht extends it{constructor(e,t){super(e,"not-in",t)}matches(e){if(pe(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!pe(this.value.arrayValue,t)}}class dt extends it{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!_e(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>pe(this.value.arrayValue,e))}}class ft{constructor(e,t){this.position=e,this.inclusive=t}}class pt{constructor(e,t="asc"){this.field=e,this.dir=t}}function gt(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function mt(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?ue.comparator(ue.fromName(o.referenceValue),n.key):ge(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function yt(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!fe(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.D=null,this.C=null,this.startAt,this.endAt}}function bt(e,t,n,r,i,s,o,a){return new vt(e,t,n,r,i,s,o,a)}function wt(e){return new vt(e)}function _t(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function It(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Tt(e){for(const t of e.filters)if(t.S())return t.field;return null}function Et(e){return null!==e.collectionGroup}function St(e){const t=_(e);if(null===t.D){t.D=[];const e=Tt(t),n=It(t);if(null!==e&&null===n)e.isKeyField()||t.D.push(new pt(e)),t.D.push(new pt(W.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.D.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.D.push(new pt(W.keyField(),e))}}}return t.D}function Ot(e){const t=_(e);if(!t.C)if("F"===t.limitType)t.C=Ye(t.path,t.collectionGroup,St(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const i of St(t)){const t="desc"===i.dir?"asc":"desc";e.push(new pt(i.field,t))}const n=t.endAt?new ft(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ft(t.startAt.position,t.startAt.inclusive):null;t.C=Ye(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.C}function kt(e,t,n){return new vt(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function At(e,t){return Ze(Ot(e),Ot(t))&&e.limitType===t.limitType}function Ct(e){return`${Je(Ot(e))}|lt:${e.limitType}`}function xt(e){return`Query(target=${Xe(Ot(e))}; limitType=${e.limitType})`}function Rt(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):ue.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=mt(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,St(e),t))&&!(e.endAt&&!function(e,t,n){const r=mt(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,St(e),t))}(e,t)}function Nt(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Dt(e){return(t,n)=>{let r=!1;for(const i of St(e)){const e=Pt(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function Pt(e,t,n){const r=e.field.isKeyField()?ue.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?ge(r,i):v()}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return v()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(e,t){if(e.N){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ae(t)?"-0":t}}function Lt(e){return{integerValue:""+e}}function Mt(e,t){return ce(t)?Lt(t):jt(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(){this._=void 0}}function Ut(e,t,n){return e instanceof Bt?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof Gt?Kt(e,t):e instanceof zt?$t(e,t):function(e,t){const n=qt(e,t),r=Ht(n)+Ht(e.k);return we(n)&&we(e.k)?Lt(r):jt(e.M,r)}(e,t)}function Vt(e,t,n){return e instanceof Gt?Kt(e,t):e instanceof zt?$t(e,t):n}function qt(e,t){return e instanceof Wt?we(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class Bt extends Ft{}class Gt extends Ft{constructor(e){super(),this.elements=e}}function Kt(e,t){const n=Qt(t);for(const r of e.elements)n.some(e=>fe(e,r))||n.push(r);return{arrayValue:{values:n}}}class zt extends Ft{constructor(e){super(),this.elements=e}}function $t(e,t){let n=Qt(t);for(const r of e.elements)n=n.filter(e=>!fe(e,r));return{arrayValue:{values:n}}}class Wt extends Ft{constructor(e,t){super(),this.M=e,this.k=t}}function Ht(e){return Z(e.integerValue||e.doubleValue)}function Qt(e){return _e(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e,t){this.field=e,this.transform=t}}function Jt(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof Gt&&t instanceof Gt||e instanceof zt&&t instanceof zt?M(e.elements,t.elements,fe):e instanceof Wt&&t instanceof Wt?fe(e.k,t.k):e instanceof Bt&&t instanceof Bt}(e.transform,t.transform)}class Xt{constructor(e,t){this.version=e,this.transformResults=t}}class Zt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Zt}static exists(e){return new Zt(void 0,e)}static updateTime(e){return new Zt(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function en(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class tn{}function nn(e,t,n){e instanceof cn?function(e,t,n){const r=e.value.clone(),i=hn(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof un?function(e,t,n){if(!en(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=hn(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(ln(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function rn(e,t,n){e instanceof cn?function(e,t,n){if(!en(e.precondition,t))return;const r=e.value.clone(),i=dn(e.fieldTransforms,n,t);r.setAll(i),t.convertToFoundDocument(an(t),r).setHasLocalMutations()}(e,t,n):e instanceof un?function(e,t,n){if(!en(e.precondition,t))return;const r=dn(e.fieldTransforms,n,t),i=t.data;i.setAll(ln(e)),i.setAll(r),t.convertToFoundDocument(an(t),i).setHasLocalMutations()}(e,t,n):function(e,t){en(e.precondition,t)&&t.convertToNoDocument(V.min())}(e,t)}function sn(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=qt(r.transform,e||null);null!=i&&(null==n&&(n=Re.empty()),n.set(r.field,i))}return n||null}function on(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&M(e,t,(e,t)=>Jt(e,t))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}function an(e){return e.isFoundDocument()?e.version:V.min()}class cn extends tn{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}}class un extends tn{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function ln(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function hn(e,t,n){const r=new Map;b(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,Vt(o,a,n[i]))}return r}function dn(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,Ut(e,s,t))}return r}class fn extends tn{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class pn extends tn{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e){this.count=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mn,yn;function vn(e){switch(e){default:return v();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function bn(e){if(void 0===e)return g("GRPC error has no .code"),I.UNKNOWN;switch(e){case mn.OK:return I.OK;case mn.CANCELLED:return I.CANCELLED;case mn.UNKNOWN:return I.UNKNOWN;case mn.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case mn.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case mn.INTERNAL:return I.INTERNAL;case mn.UNAVAILABLE:return I.UNAVAILABLE;case mn.UNAUTHENTICATED:return I.UNAUTHENTICATED;case mn.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case mn.NOT_FOUND:return I.NOT_FOUND;case mn.ALREADY_EXISTS:return I.ALREADY_EXISTS;case mn.PERMISSION_DENIED:return I.PERMISSION_DENIED;case mn.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case mn.ABORTED:return I.ABORTED;case mn.OUT_OF_RANGE:return I.OUT_OF_RANGE;case mn.UNIMPLEMENTED:return I.UNIMPLEMENTED;case mn.DATA_LOSS:return I.DATA_LOSS;default:return v()}}(yn=mn||(mn={}))[yn.OK=0]="OK",yn[yn.CANCELLED=1]="CANCELLED",yn[yn.UNKNOWN=2]="UNKNOWN",yn[yn.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",yn[yn.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",yn[yn.NOT_FOUND=5]="NOT_FOUND",yn[yn.ALREADY_EXISTS=6]="ALREADY_EXISTS",yn[yn.PERMISSION_DENIED=7]="PERMISSION_DENIED",yn[yn.UNAUTHENTICATED=16]="UNAUTHENTICATED",yn[yn.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",yn[yn.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",yn[yn.ABORTED=10]="ABORTED",yn[yn.OUT_OF_RANGE=11]="OUT_OF_RANGE",yn[yn.UNIMPLEMENTED=12]="UNIMPLEMENTED",yn[yn.INTERNAL=13]="INTERNAL",yn[yn.UNAVAILABLE=14]="UNAVAILABLE",yn[yn.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){B(this.inner,(t,n)=>{for(const[r,i]of n)e(r,i)})}isEmpty(){return G(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n=new Ge(ue.comparator);function In(){return _n}const Tn=new Ge(ue.comparator);function En(...e){let t=Tn;for(const n of e)t=t.insert(n.key,n);return t}function Sn(){return new wn(e=>e.toString(),(e,t)=>e.isEqual(t))}const On=new Ge(ue.comparator),kn=new $e(ue.comparator);function An(...e){let t=kn;for(const n of e)t=t.add(n);return t}const Cn=new $e(L);function xn(){return Cn}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t){const n=new Map;return n.set(e,Nn.createSynthesizedTargetChangeForCurrentChange(e,t)),new Rn(V.min(),n,xn(),In(),An())}}class Nn{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t){return new Nn(Y.EMPTY_BYTE_STRING,t,An(),An(),An())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e,t,n,r){this.O=e,this.removedTargetIds=t,this.key=n,this.F=r}}class Pn{constructor(e,t){this.targetId=e,this.$=t}}class jn{constructor(e,t,n=Y.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Ln{constructor(){this.B=0,this.L=Un(),this.U=Y.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return 0!==this.B}get j(){return this.K}W(e){e.approximateByteSize()>0&&(this.K=!0,this.U=e)}H(){let e=An(),t=An(),n=An();return this.L.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:v()}}),new Nn(this.U,this.q,e,t,n)}J(){this.K=!1,this.L=Un()}Y(e,t){this.K=!0,this.L=this.L.insert(e,t)}X(e){this.K=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class Mn{constructor(e){this.nt=e,this.st=new Map,this.it=In(),this.rt=Fn(),this.ot=new $e(L)}ut(e){for(const t of e.O)e.F&&e.F.isFoundDocument()?this.at(t,e.F):this.ct(t,e.key,e.F);for(const t of e.removedTargetIds)this.ct(t,e.key,e.F)}ht(e){this.forEachTarget(e,t=>{const n=this.lt(t);switch(e.state){case 0:this.ft(t)&&n.W(e.resumeToken);break;case 1:n.tt(),n.G||n.J(),n.W(e.resumeToken);break;case 2:n.tt(),n.G||this.removeTarget(t);break;case 3:this.ft(t)&&(n.et(),n.W(e.resumeToken));break;case 4:this.ft(t)&&(this.dt(t),n.W(e.resumeToken));break;default:v()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.st.forEach((e,n)=>{this.ft(n)&&t(n)})}_t(e){const t=e.targetId,n=e.$.count,r=this.wt(t);if(r){const e=r.target;if(et(e))if(0===n){const n=new ue(e.path);this.ct(t,n,De.newNoDocument(n,V.min()))}else b(1===n);else this.gt(t)!==n&&(this.dt(t),this.ot=this.ot.add(t))}}yt(e){const t=new Map;this.st.forEach((n,r)=>{const i=this.wt(r);if(i){if(n.current&&et(i.target)){const t=new ue(i.target.path);null!==this.it.get(t)||this.It(r,t)||this.ct(r,t,De.newNoDocument(t,e))}n.j&&(t.set(r,n.H()),n.J())}});let n=An();this.rt.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{const t=this.wt(e);return!t||2===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.it.forEach((t,n)=>n.setReadTime(e));const r=new Rn(e,t,this.ot,this.it,n);return this.it=In(),this.rt=Fn(),this.ot=new $e(L),r}at(e,t){if(!this.ft(e))return;const n=this.It(e,t.key)?2:0;this.lt(e).Y(t.key,n),this.it=this.it.insert(t.key,t),this.rt=this.rt.insert(t.key,this.Tt(t.key).add(e))}ct(e,t,n){if(!this.ft(e))return;const r=this.lt(e);this.It(e,t)?r.Y(t,1):r.X(t),this.rt=this.rt.insert(t,this.Tt(t).delete(e)),n&&(this.it=this.it.insert(t,n))}removeTarget(e){this.st.delete(e)}gt(e){const t=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let t=this.st.get(e);return t||(t=new Ln,this.st.set(e,t)),t}Tt(e){let t=this.rt.get(e);return t||(t=new $e(L),this.rt=this.rt.insert(e,t)),t}ft(e){const t=null!==this.wt(e);return t||p("WatchChangeAggregator","Detected inactive target",e),t}wt(e){const t=this.st.get(e);return t&&t.G?null:this.nt.Et(e)}dt(e){this.st.set(e,new Ln),this.nt.getRemoteKeysForTarget(e).forEach(t=>{this.ct(e,t,null)})}It(e,t){return this.nt.getRemoteKeysForTarget(e).has(t)}}function Fn(){return new Ge(ue.comparator)}function Un(){return new Ge(ue.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),qn=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})();class Bn{constructor(e,t){this.databaseId=e,this.N=t}}function Gn(e,t){return e.N?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Kn(e,t){return e.N?t.toBase64():t.toUint8Array()}function zn(e,t){return Gn(e,t.toTimestamp())}function $n(e){return b(!!e),V.fromTimestamp(function(e){const t=X(e);return new U(t.seconds,t.nanos)}(e))}function Wn(e,t){return function(e){return new z(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function Hn(e){const t=z.fromString(e);return b(wr(t)),t}function Qn(e,t){return Wn(e.databaseId,t.path)}function Yn(e,t){const n=Hn(t);if(n.get(1)!==e.databaseId.projectId)throw new T(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new T(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new ue(er(n))}function Jn(e,t){return Wn(e.databaseId,t)}function Xn(e){const t=Hn(e);return 4===t.length?z.emptyPath():er(t)}function Zn(e){return new z(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function er(e){return b(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function tr(e,t,n){return{name:Qn(e,t),fields:n.value.mapValue.fields}}function nr(e,t,n){const r=Yn(e,t.name),i=$n(t.updateTime),s=new Re({mapValue:{fields:t.fields}}),o=De.newFoundDocument(r,i,s);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function rr(e,t){return"found"in t?function(e,t){b(!!t.found),t.found.name,t.found.updateTime;const n=Yn(e,t.found.name),r=$n(t.found.updateTime),i=new Re({mapValue:{fields:t.found.fields}});return De.newFoundDocument(n,r,i)}(e,t):"missing"in t?function(e,t){b(!!t.missing),b(!!t.readTime);const n=Yn(e,t.missing),r=$n(t.readTime);return De.newNoDocument(n,r)}(e,t):v()}function ir(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:v()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.N?(b(void 0===t||"string"==typeof t),Y.fromBase64String(t||"")):(b(void 0===t||t instanceof Uint8Array),Y.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?I.UNKNOWN:bn(e.code);return new T(t,e.message||"")}(o);n=new jn(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Yn(e,r.document.name),s=$n(r.document.updateTime),o=new Re({mapValue:{fields:r.document.fields}}),a=De.newFoundDocument(i,s,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new Dn(c,u,a.key,a)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Yn(e,r.document),s=r.readTime?$n(r.readTime):V.min(),o=De.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Dn([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Yn(e,r.document),s=r.removedTargetIds||[];n=new Dn([],s,i,null)}else{if(!("filter"in t))return v();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,i=new gn(r),s=e.targetId;n=new Pn(s,i)}}return n}function sr(e,t){let n;if(t instanceof cn)n={update:tr(e,t.key,t.value)};else if(t instanceof fn)n={delete:Qn(e,t.key)};else if(t instanceof un)n={update:tr(e,t.key,t.data),updateMask:br(t.fieldMask)};else{if(!(t instanceof pn))return v();n={verify:Qn(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>function(e,t){const n=t.transform;if(n instanceof Bt)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Gt)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof zt)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Wt)return{fieldPath:t.field.canonicalString(),increment:n.k};throw v()}(0,e))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:zn(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:v()}(e,t.precondition)),n}function or(e,t){const n=t.currentDocument?function(e){return void 0!==e.updateTime?Zt.updateTime($n(e.updateTime)):void 0!==e.exists?Zt.exists(e.exists):Zt.none()}(t.currentDocument):Zt.none(),r=t.updateTransforms?t.updateTransforms.map(t=>function(e,t){let n=null;if("setToServerValue"in t)b("REQUEST_TIME"===t.setToServerValue),n=new Bt;else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[];n=new Gt(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[];n=new zt(e)}else"increment"in t?n=new Wt(e,t.increment):v();const r=W.fromServerFormat(t.fieldPath);return new Yt(r,n)}(e,t)):[];if(t.update){t.update.name;const i=Yn(e,t.update.name),s=new Re({mapValue:{fields:t.update.fields}});if(t.updateMask){const e=function(e){const t=e.fieldPaths||[];return new H(t.map(e=>W.fromServerFormat(e)))}(t.updateMask);return new un(i,s,e,n,r)}return new cn(i,s,n,r)}if(t.delete){const r=Yn(e,t.delete);return new fn(r,n)}if(t.verify){const r=Yn(e,t.verify);return new pn(r,n)}return v()}function ar(e,t){return e&&e.length>0?(b(void 0!==t),e.map(e=>function(e,t){let n=e.updateTime?$n(e.updateTime):$n(t);return n.isEqual(V.min())&&(n=$n(t)),new Xt(n,e.transformResults||[])}(e,t))):[]}function cr(e,t){return{documents:[Jn(e,t.path)]}}function ur(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=Jn(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Jn(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0===e.length)return;const t=e.map(e=>function(e){if("=="===e.op){if(Te(e.value))return{unaryFilter:{field:gr(e.field),op:"IS_NAN"}};if(Ie(e.value))return{unaryFilter:{field:gr(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Te(e.value))return{unaryFilter:{field:gr(e.field),op:"IS_NOT_NAN"}};if(Ie(e.value))return{unaryFilter:{field:gr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:gr(e.field),op:pr(e.op),value:e.value}}}(e));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map(e=>function(e){return{field:gr(e.field),direction:fr(e.dir)}}(e))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(e,t){return e.N||oe(t)?t:{value:t}}(e,t.limit);var a;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function lr(e){let t=Xn(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){b(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=dr(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(e=>function(e){return new pt(mr(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e)));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,oe(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new ft(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new ft(n,t)}(n.endAt)),bt(t,i,o,s,a,"F",c,u)}function hr(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return v()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}function dr(e){return e?void 0!==e.unaryFilter?[vr(e)]:void 0!==e.fieldFilter?[yr(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map(e=>dr(e)).reduce((e,t)=>e.concat(t)):v():[]}function fr(e){return Vn[e]}function pr(e){return qn[e]}function gr(e){return{fieldPath:e.canonicalString()}}function mr(e){return W.fromServerFormat(e.fieldPath)}function yr(e){return it.create(mr(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return v()}}(e.fieldFilter.op),e.fieldFilter.value)}function vr(e){switch(e.unaryFilter.op){case"IS_NAN":const t=mr(e.unaryFilter.field);return it.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=mr(e.unaryFilter.field);return it.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=mr(e.unaryFilter.field);return it.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=mr(e.unaryFilter.field);return it.create(i,"!=",{nullValue:"NULL_VALUE"});default:return v()}}function br(e){const t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function wr(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _r(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=Tr(t)),t=Ir(e.get(n),t);return Tr(t)}function Ir(e,t){let n=t;const r=e.length;for(let i=0;i<r;i++){const t=e.charAt(i);switch(t){case"\0":n+="";break;case"":n+="";break;default:n+=t}}return n}function Tr(e){return e+""}function Er(e){const t=e.length;if(b(t>=2),2===t)return b(""===e.charAt(0)&&""===e.charAt(1)),z.emptyPath();const n=t-2,r=[];let i="";for(let s=0;s<t;){const t=e.indexOf("",s);switch((t<0||t>n)&&v(),e.charAt(t+1)){case"":const n=e.substring(s,t);let o;0===i.length?o=n:(i+=n,o=i,i=""),r.push(o);break;case"":i+=e.substring(s,t),i+="\0";break;case"":i+=e.substring(s,t+1);break;default:v()}s=t+2}return new z(r)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr=["userId","batchId"];
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Or(e,t){return[e,_r(t)]}function kr(e,t,n){return[e,_r(t),n]}const Ar={},Cr=["prefixPath","collectionGroup","readTime","documentId"],xr=["prefixPath","collectionGroup","documentId"],Rr=["collectionGroup","readTime","prefixPath","documentId"],Nr=["canonicalId","targetId"],Dr=["targetId","path"],Pr=["path","targetId"],jr=["collectionId","parent"],Lr=["indexId","uid"],Mr=["uid","sequenceNumber"],Fr=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Ur=["indexId","uid","orderedDocumentKey"],Vr=["userId","collectionPath","documentId"],qr=["userId","collectionPath","largestBatchId"],Br=["userId","collectionGroup","largestBatchId"],Gr=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Kr=[...Gr,"documentOverlays"],zr=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],$r=[...zr,"indexConfiguration","indexState","indexEntries"],Wr="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&v(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Qr((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof Qr?t:Qr.resolve(t)}catch(e){return Qr.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):Qr.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):Qr.reject(t)}static resolve(e){return new Qr((t,n)=>{t(e)})}static reject(e){return new Qr((t,n)=>{n(e)})}static waitFor(e){return new Qr((t,n)=>{let r=0,i=0,s=!1;e.forEach(e=>{++r,e.next(()=>{++i,s&&i===r&&t()},e=>n(e))}),s=!0,i===r&&t()})}static or(e){let t=Qr.resolve(!1);for(const n of e)t=t.next(e=>e?Qr.resolve(e):n());return t}static forEach(e,t){const n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.At=new E,this.transaction.oncomplete=()=>{this.At.resolve()},this.transaction.onabort=()=>{t.error?this.At.reject(new Zr(e,t.error)):this.At.resolve()},this.transaction.onerror=t=>{const n=ii(t.target.error);this.At.reject(new Zr(e,n))}}static open(e,t,n,r){try{return new Yr(t,e.transaction(r,n))}catch(e){throw new Zr(t,e)}}get Rt(){return this.At.promise}abort(e){e&&this.At.reject(e),this.aborted||(p("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}bt(){const e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){const t=this.transaction.objectStore(e);return new ti(t)}}class Jr{constructor(e,t,n){this.name=e,this.version=t,this.Pt=n,12.2===Jr.Vt(Object(o["m"])())&&g("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return p("SimpleDb","Removing database:",e),ni(window.indexedDB.deleteDatabase(e)).toPromise()}static vt(){if(!Object(o["s"])())return!1;if(Jr.St())return!0;const e=Object(o["m"])(),t=Jr.Vt(e),n=0<t&&t<10,r=Jr.Dt(e),i=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static St(){var t;return"undefined"!=typeof e&&"YES"===(null===(t=Object({NODE_ENV:"production",BASE_URL:"/"}))||void 0===t?void 0:t.Ct)}static xt(e,t){return e.store(t)}static Vt(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static Dt(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async Nt(e){return this.db||(p("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{const n=e.target.result;t(n)},r.onblocked=()=>{n(new Zr(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{const r=t.target.error;"VersionError"===r.name?n(new T(I.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new T(I.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new Zr(e,r))},r.onupgradeneeded=e=>{p("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.Pt.kt(t,r.transaction,e.oldVersion,this.version).next(()=>{p("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.Mt&&(this.db.onversionchange=e=>this.Mt(e)),this.db}Ot(e){this.Mt=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){const i="readonly"===t;let s=0;for(;;){++s;try{this.db=await this.Nt(e);const t=Yr.open(this.db,e,i?"readonly":"readwrite",n),s=r(t).next(e=>(t.bt(),e)).catch(e=>(t.abort(e),Qr.reject(e))).toPromise();return s.catch(()=>{}),await t.Rt,s}catch(e){const t="FirebaseError"!==e.name&&s<3;if(p("SimpleDb","Transaction failed with error:",e.message,"Retrying:",t),this.close(),!t)return Promise.reject(e)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Xr{constructor(e){this.Ft=e,this.$t=!1,this.Bt=null}get isDone(){return this.$t}get Lt(){return this.Bt}set cursor(e){this.Ft=e}done(){this.$t=!0}Ut(e){this.Bt=e}delete(){return ni(this.Ft.delete())}}class Zr extends T{constructor(e,t){super(I.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function ei(e){return"IndexedDbTransactionError"===e.name}class ti{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(p("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(p("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),ni(n)}add(e){return p("SimpleDb","ADD",this.store.name,e,e),ni(this.store.add(e))}get(e){return ni(this.store.get(e)).next(t=>(void 0===t&&(t=null),p("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return p("SimpleDb","DELETE",this.store.name,e),ni(this.store.delete(e))}count(){return p("SimpleDb","COUNT",this.store.name),ni(this.store.count())}qt(e,t){const n=this.options(e,t);if(n.index||"function"!=typeof this.store.getAll){const e=this.cursor(n),t=[];return this.Kt(e,(e,n)=>{t.push(n)}).next(()=>t)}{const e=this.store.getAll(n.range);return new Qr((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}})}}Gt(e,t){const n=this.store.getAll(e,null===t?void 0:t);return new Qr((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}})}Qt(e,t){p("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.jt=!1;const r=this.cursor(n);return this.Kt(r,(e,t,n)=>n.delete())}Wt(e,t){let n;t?n=e:(n={},t=e);const r=this.cursor(n);return this.Kt(r,t)}zt(e){const t=this.cursor({});return new Qr((n,r)=>{t.onerror=e=>{const t=ii(e.target.error);r(t)},t.onsuccess=t=>{const r=t.target.result;r?e(r.primaryKey,r.value).next(e=>{e?r.continue():n()}):n()}})}Kt(e,t){const n=[];return new Qr((r,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{const i=e.target.result;if(!i)return void r();const s=new Xr(i),o=t(i.primaryKey,i.value,s);if(o instanceof Qr){const e=o.catch(e=>(s.done(),Qr.reject(e)));n.push(e)}s.isDone?r():null===s.Lt?i.continue():i.continue(s.Lt)}}).next(()=>Qr.waitFor(n))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.jt?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function ni(e){return new Qr((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=ii(e.target.error);n(t)}})}let ri=!1;function ii(e){const t=Jr.Vt(Object(o["m"])());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new T("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return ri||(ri=!0,setTimeout(()=>{throw e},0)),e}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si extends Hr{constructor(e,t){super(),this.Ht=e,this.currentSequenceNumber=t}}function oi(e,t){const n=_(e);return Jr.xt(n.Ht,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&nn(t,e,n[r])}}applyToLocalView(e){for(const t of this.baseMutations)t.key.isEqual(e.key)&&rn(t,e,this.localWriteTime);for(const t of this.mutations)t.key.isEqual(e.key)&&rn(t,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(t=>{const n=e.get(t.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(V.min())})}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),An())}isEqual(e){return this.batchId===e.batchId&&M(this.mutations,e.mutations,(e,t)=>on(e,t))&&M(this.baseMutations,e.baseMutations,(e,t)=>on(e,t))}}class ci{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){b(e.mutations.length===n.length);let r=On;const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new ci(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,t,n,r,i=V.min(),s=V.min(),o=Y.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(e){return new li(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new li(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new li(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e){this.Jt=e}}function di(e,t){let n;if(t.document)n=nr(e.Jt,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const e=ue.fromSegments(t.noDocument.path),r=mi(t.noDocument.readTime);n=De.newNoDocument(e,r),t.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!t.unknownDocument)return v();{const e=ue.fromSegments(t.unknownDocument.path),r=mi(t.unknownDocument.version);n=De.newUnknownDocument(e,r)}}return t.readTime&&n.setReadTime(function(e){const t=new U(e[0],e[1]);return V.fromTimestamp(t)}(t.readTime)),n}function fi(e,t){const n=t.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:pi(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())r.document=function(e,t){return{name:Qn(e,t.key),fields:t.data.value.mapValue.fields,updateTime:Gn(e,t.version.toTimestamp())}}(e.Jt,t);else if(t.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:gi(t.version)};else{if(!t.isUnknownDocument())return v();r.unknownDocument={path:n.path.toArray(),version:gi(t.version)}}return r}function pi(e){const t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function gi(e){const t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function mi(e){const t=new U(e.seconds,e.nanoseconds);return V.fromTimestamp(t)}function yi(e,t){const n=(t.baseMutations||[]).map(t=>or(e.Jt,t));for(let s=0;s<t.mutations.length-1;++s){const e=t.mutations[s];if(s+1<t.mutations.length&&void 0!==t.mutations[s+1].transform){const n=t.mutations[s+1];e.updateTransforms=n.transform.fieldTransforms,t.mutations.splice(s+1,1),++s}}const r=t.mutations.map(t=>or(e.Jt,t)),i=U.fromMillis(t.localWriteTimeMs);return new ai(t.batchId,i,n,r)}function vi(e){const t=mi(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?mi(e.lastLimboFreeSnapshotVersion):V.min();let r;var i;return void 0!==e.query.documents?(b(1===(i=e.query).documents.length),r=Ot(wt(Xn(i.documents[0])))):r=function(e){return Ot(lr(e))}(e.query),new li(r,e.targetId,0,e.lastListenSequenceNumber,t,n,Y.fromBase64String(e.resumeToken))}function bi(e,t){const n=gi(t.snapshotVersion),r=gi(t.lastLimboFreeSnapshotVersion);let i;i=et(t.target)?cr(e.Jt,t.target):ur(e.Jt,t.target);const s=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:Je(t.target),readTime:n,resumeToken:s,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function wi(e){const t=lr({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?kt(t,t.limit,"L"):t}function _i(e,t){return new ui(t.largestBatchId,or(e.Jt,t.overlayMutation))}function Ii(e,t){const n=t.path.lastSegment();return[e,_r(t.path.popLast()),n]}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{getBundleMetadata(e,t){return Ei(e).get(t).next(e=>{if(e)return{id:(t=e).bundleId,createTime:mi(t.createTime),version:t.version};var t})}saveBundleMetadata(e,t){return Ei(e).put({bundleId:(n=t).id,createTime:gi($n(n.createTime)),version:n.version});var n}getNamedQuery(e,t){return Si(e).get(t).next(e=>{if(e)return{name:(t=e).name,query:wi(t.bundledQuery),readTime:mi(t.readTime)};var t})}saveNamedQuery(e,t){return Si(e).put(function(e){return{name:e.name,readTime:gi($n(e.readTime)),bundledQuery:e.bundledQuery}}(t))}}function Ei(e){return oi(e,"bundles")}function Si(e){return oi(e,"namedQueries")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,t){this.M=e,this.userId=t}static Yt(e,t){const n=t.uid||"";return new Oi(e,n)}getOverlay(e,t){return ki(e).get(Ii(this.userId,t)).next(e=>e?_i(this.M,e):null)}saveOverlays(e,t,n){const r=[];return n.forEach((n,i)=>{const s=new ui(t,i);r.push(this.Xt(e,s))}),Qr.waitFor(r)}removeOverlaysForBatchId(e,t,n){const r=new Set;t.forEach(e=>r.add(_r(e.getCollectionPath())));const i=[];return r.forEach(t=>{const r=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,n+1],!1,!0);i.push(ki(e).Qt("collectionPathOverlayIndex",r))}),Qr.waitFor(i)}getOverlaysForCollection(e,t,n){const r=Sn(),i=_r(t),s=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return ki(e).qt("collectionPathOverlayIndex",s).next(e=>{for(const t of e){const e=_i(this.M,t);r.set(e.getKey(),e)}return r})}getOverlaysForCollectionGroup(e,t,n,r){const i=Sn();let s;const o=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return ki(e).Wt({index:"collectionGroupOverlayIndex",range:o},(e,t,n)=>{const o=_i(this.M,t);i.size()<r||o.largestBatchId===s?(i.set(o.getKey(),o),s=o.largestBatchId):n.done()}).next(()=>i)}Xt(e,t){return ki(e).put(function(e,t,n){const[r,i,s]=Ii(t,n.mutation.key);return{userId:t,collectionPath:i,documentId:s,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:sr(e.Jt,n.mutation)}}(this.M,this.userId,t))}}function ki(e){return oi(e,"documentOverlays")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(){}Zt(e,t){this.te(e,t),t.ee()}te(e,t){if("nullValue"in e)this.ne(t,5);else if("booleanValue"in e)this.ne(t,10),t.se(e.booleanValue?1:0);else if("integerValue"in e)this.ne(t,15),t.se(Z(e.integerValue));else if("doubleValue"in e){const n=Z(e.doubleValue);isNaN(n)?this.ne(t,13):(this.ne(t,15),ae(n)?t.se(0):t.se(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ne(t,20),"string"==typeof n?t.ie(n):(t.ie(""+(n.seconds||"")),t.se(n.nanos||0))}else if("stringValue"in e)this.re(e.stringValue,t),this.oe(t);else if("bytesValue"in e)this.ne(t,30),t.ue(ee(e.bytesValue)),this.oe(t);else if("referenceValue"in e)this.ae(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ne(t,45),t.se(n.latitude||0),t.se(n.longitude||0)}else"mapValue"in e?Oe(e)?this.ne(t,Number.MAX_SAFE_INTEGER):(this.ce(e.mapValue,t),this.oe(t)):"arrayValue"in e?(this.he(e.arrayValue,t),this.oe(t)):v()}re(e,t){this.ne(t,25),this.le(e,t)}le(e,t){t.ie(e)}ce(e,t){const n=e.fields||{};this.ne(t,55);for(const r of Object.keys(n))this.re(r,t),this.te(n[r],t)}he(e,t){const n=e.values||[];this.ne(t,50);for(const r of n)this.te(r,t)}ae(e,t){this.ne(t,37),ue.fromName(e).path.forEach(e=>{this.ne(t,60),this.le(e,t)})}ne(e,t){e.se(t)}oe(e){e.se(2)}}function Ci(e){if(0===e)return 8;let t=0;return e>>4==0&&(t+=4,e<<=4),e>>6==0&&(t+=2,e<<=2),e>>7==0&&(t+=1),t}function xi(e){const t=64-function(e){let t=0;for(let n=0;n<8;++n){const r=Ci(255&e[n]);if(t+=r,8!==r)break}return t}(e);return Math.ceil(t/8)}Ai.fe=new Ai;class Ri{constructor(){this.buffer=new Uint8Array(1024),this.position=0}de(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this._e(n.value),n=t.next();this.we()}me(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.ge(n.value),n=t.next();this.ye()}pe(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this._e(e);else if(e<2048)this._e(960|e>>>6),this._e(128|63&e);else if(t<"\ud800"||"\udbff"<t)this._e(480|e>>>12),this._e(128|63&e>>>6),this._e(128|63&e);else{const e=t.codePointAt(0);this._e(240|e>>>18),this._e(128|63&e>>>12),this._e(128|63&e>>>6),this._e(128|63&e)}}this.we()}Ie(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.ge(e);else if(e<2048)this.ge(960|e>>>6),this.ge(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.ge(480|e>>>12),this.ge(128|63&e>>>6),this.ge(128|63&e);else{const e=t.codePointAt(0);this.ge(240|e>>>18),this.ge(128|63&e>>>12),this.ge(128|63&e>>>6),this.ge(128|63&e)}}this.ye()}Te(e){const t=this.Ee(e),n=xi(t);this.Ae(1+n),this.buffer[this.position++]=255&n;for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=255&t[r]}Re(e){const t=this.Ee(e),n=xi(t);this.Ae(1+n),this.buffer[this.position++]=~(255&n);for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=~(255&t[r])}be(){this.Pe(255),this.Pe(255)}Ve(){this.ve(255),this.ve(255)}reset(){this.position=0}seed(e){this.Ae(e.length),this.buffer.set(e,this.position),this.position+=e.length}Se(){return this.buffer.slice(0,this.position)}Ee(e){const t=function(e){const t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),n=0!=(128&t[0]);t[0]^=n?255:128;for(let r=1;r<t.length;++r)t[r]^=n?255:0;return t}_e(e){const t=255&e;0===t?(this.Pe(0),this.Pe(255)):255===t?(this.Pe(255),this.Pe(0)):this.Pe(t)}ge(e){const t=255&e;0===t?(this.ve(0),this.ve(255)):255===t?(this.ve(255),this.ve(0)):this.ve(e)}we(){this.Pe(0),this.Pe(1)}ye(){this.ve(0),this.ve(1)}Pe(e){this.Ae(1),this.buffer[this.position++]=e}ve(e){this.Ae(1),this.buffer[this.position++]=~e}Ae(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class Ni{constructor(e){this.De=e}ue(e){this.De.de(e)}ie(e){this.De.pe(e)}se(e){this.De.Te(e)}ee(){this.De.be()}}class Di{constructor(e){this.De=e}ue(e){this.De.me(e)}ie(e){this.De.Ie(e)}se(e){this.De.Re(e)}ee(){this.De.Ve()}}class Pi{constructor(){this.De=new Ri,this.Ce=new Ni(this.De),this.xe=new Di(this.De)}seed(e){this.De.seed(e)}Ne(e){return 0===e?this.Ce:this.xe}Se(){return this.De.Se()}reset(){this.De.reset()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,t,n,r){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=r}ke(){const e=this.directionalValue.length,t=0===e||255===this.directionalValue[e-1]?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new ji(this.indexId,this.documentKey,this.arrayValue,n)}}function Li(e,t){let n=e.indexId-t.indexId;return 0!==n?n:(n=Mi(e.arrayValue,t.arrayValue),0!==n?n:(n=Mi(e.directionalValue,t.directionalValue),0!==n?n:ue.comparator(e.documentKey,t.documentKey)))}function Mi(e,t){for(let n=0;n<e.length&&n<t.length;++n){const r=e[n]-t[n];if(0!==r)return r}return e.length-t.length}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e){this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.Me=e.orderBy,this.Oe=[];for(const t of e.filters){const e=t;e.S()?this.Fe=e:this.Oe.push(e)}}$e(e){const t=je(e);if(void 0!==t&&!this.Be(t))return!1;const n=Le(e);let r=0,i=0;for(;r<n.length&&this.Be(n[r]);++r);if(r===n.length)return!0;if(void 0!==this.Fe){const e=n[r];if(!this.Le(this.Fe,e)||!this.Ue(this.Me[i++],e))return!1;++r}for(;r<n.length;++r){const e=n[r];if(i>=this.Me.length||!this.Ue(this.Me[i++],e))return!1}return!0}Be(e){for(const t of this.Oe)if(this.Le(t,e))return!0;return!1}Le(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;const n="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===n}Ue(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(){this.qe=new Vi}addToCollectionParentIndex(e,t){return this.qe.add(t),Qr.resolve()}getCollectionParents(e,t){return Qr.resolve(this.qe.getEntries(t))}addFieldIndex(e,t){return Qr.resolve()}deleteFieldIndex(e,t){return Qr.resolve()}getDocumentsMatchingTarget(e,t){return Qr.resolve(null)}getIndexType(e,t){return Qr.resolve(0)}getFieldIndexes(e,t){return Qr.resolve([])}getNextCollectionGroupToUpdate(e){return Qr.resolve(null)}getMinOffset(e,t){return Qr.resolve(qe.min())}updateCollectionGroup(e,t,n){return Qr.resolve()}updateIndexEntries(e,t){return Qr.resolve()}}class Vi{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new $e(z.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new $e(z.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi=new Uint8Array(0);class Bi{constructor(e,t){this.user=e,this.databaseId=t,this.Ke=new Vi,this.Ge=new wn(e=>Je(e),(e,t)=>Ze(e,t)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Ke.has(t)){const n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener(()=>{this.Ke.add(t)});const i={collectionId:n,parent:_r(r)};return Gi(e).put(i)}return Qr.resolve()}getCollectionParents(e,t){const n=[],r=IDBKeyRange.bound([t,""],[F(t),""],!1,!0);return Gi(e).qt(r).next(e=>{for(const r of e){if(r.collectionId!==t)break;n.push(Er(r.parent))}return n})}addFieldIndex(e,t){const n=zi(e),r=function(e){return{indexId:e.indexId,collectionGroup:e.collectionGroup,fields:e.fields.map(e=>[e.fieldPath.canonicalString(),e.kind])}}(t);return delete r.indexId,n.add(r).next()}deleteFieldIndex(e,t){const n=zi(e),r=$i(e),i=Ki(e);return n.delete(t.indexId).next(()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t){const n=Ki(e);let r=!0;const i=new Map;return Qr.forEach(this.Qe(t),t=>this.je(e,t).next(e=>{r&&(r=!!e),i.set(t,e)})).next(()=>{if(r){let e=An();const r=[];return Qr.forEach(i,(i,s)=>{var o;p("IndexedDbIndexManager",`Using index ${o=i,`id=${o.indexId}|cg=${o.collectionGroup}|f=${o.fields.map(e=>`${e.fieldPath}:${e.kind}`).join(",")}`} to execute ${Je(t)}`);const a=function(e,t){const n=je(t);if(void 0===n)return null;for(const r of tt(e,n.fieldPath))switch(r.op){case"array-contains-any":return r.value.arrayValue.values||[];case"array-contains":return[r.value]}return null}(s,i),c=function(e,t){const n=new Map;for(const r of Le(t))for(const t of tt(e,r.fieldPath))switch(t.op){case"==":case"in":n.set(r.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return n.set(r.fieldPath.canonicalString(),t.value),Array.from(n.values())}return null}(s,i),u=function(e,t){const n=[];let r=!0;for(const i of Le(t)){const t=0===i.kind?nt(e,i.fieldPath,e.startAt):rt(e,i.fieldPath,e.startAt);n.push(t.value),r&&(r=t.inclusive)}return new ft(n,r)}(s,i),l=function(e,t){const n=[];let r=!0;for(const i of Le(t)){const t=0===i.kind?rt(e,i.fieldPath,e.endAt):nt(e,i.fieldPath,e.endAt);n.push(t.value),r&&(r=t.inclusive)}return new ft(n,r)}(s,i),h=this.We(i,s,u),d=this.We(i,s,l),f=this.ze(i,s,c),g=this.He(i.indexId,a,h,u.inclusive,d,l.inclusive,f);return Qr.forEach(g,i=>n.Gt(i,t.limit).next(t=>{t.forEach(t=>{const n=ue.fromSegments(t.documentKey);e.has(n)||(e=e.add(n),r.push(n))})}))}).next(()=>r)}return Qr.resolve(null)})}Qe(e){let t=this.Ge.get(e);return t||(t=[e],this.Ge.set(e,t),t)}He(e,t,n,r,i,s,o){const a=(null!=t?t.length:1)*Math.max(n.length,i.length),c=a/(null!=t?t.length:1),u=[];for(let l=0;l<a;++l){const a=t?this.Je(t[l/c]):qi,h=this.Ye(e,a,n[l%c],r),d=this.Xe(e,a,i[l%c],s),f=o.map(t=>this.Ye(e,a,t,!0));u.push(...this.createRange(h,d,f))}return u}Ye(e,t,n,r){const i=new ji(e,ue.empty(),t,n);return r?i:i.ke()}Xe(e,t,n,r){const i=new ji(e,ue.empty(),t,n);return r?i.ke():i}je(e,t){const n=new Fi(t),r=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next(e=>{let t=null;for(const r of e)n.$e(r)&&(!t||r.fields.length>t.fields.length)&&(t=r);return t})}getIndexType(e,t){let n=2;return Qr.forEach(this.Qe(t),t=>this.je(e,t).next(e=>{e?0!==n&&e.fields.length<function(e){let t=new $e(W.comparator),n=!1;for(const r of e.filters){const e=r;e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?n=!0:t=t.add(e.field))}for(const r of e.orderBy)r.field.isKeyField()||(t=t.add(r.field));return t.size+(n?1:0)}(t)&&(n=1):n=0})).next(()=>n)}Ze(e,t){const n=new Pi;for(const r of Le(e)){const e=t.data.field(r.fieldPath);if(null==e)return null;const i=n.Ne(r.kind);Ai.fe.Zt(e,i)}return n.Se()}Je(e){const t=new Pi;return Ai.fe.Zt(e,t.Ne(0)),t.Se()}tn(e,t){const n=new Pi;return Ai.fe.Zt(be(this.databaseId,t),n.Ne(function(e){const t=Le(e);return 0===t.length?0:t[t.length-1].kind}(e))),n.Se()}ze(e,t,n){if(null===n)return[];let r=[];r.push(new Pi);let i=0;for(const s of Le(e)){const e=n[i++];for(const n of r)if(this.en(t,s.fieldPath)&&_e(e))r=this.nn(r,s,e);else{const t=n.Ne(s.kind);Ai.fe.Zt(e,t)}}return this.sn(r)}We(e,t,n){return this.ze(e,t,n.position)}sn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].Se();return t}nn(e,t,n){const r=[...e],i=[];for(const s of n.arrayValue.values||[])for(const e of r){const n=new Pi;n.seed(e.Se()),Ai.fe.Zt(s,n.Ne(t.kind)),i.push(n)}return i}en(e,t){return!!e.filters.find(e=>e instanceof it&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op))}getFieldIndexes(e,t){const n=zi(e),r=$i(e);return(t?n.qt("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.qt()).next(e=>{const t=[];return Qr.forEach(e,e=>r.get([e.indexId,this.uid]).next(n=>{t.push(function(e,t){const n=t?new Fe(t.sequenceNumber,new qe(mi(t.readTime),new ue(Er(t.documentKey)),t.largestBatchId)):Fe.empty(),r=e.fields.map(([e,t])=>new Me(W.fromServerFormat(e),t));return new Pe(e.indexId,e.collectionGroup,r,n)}(e,n))})).next(()=>t)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(e=>0===e.length?null:(e.sort((e,t)=>{const n=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==n?n:L(e.collectionGroup,t.collectionGroup)}),e[0].collectionGroup))}updateCollectionGroup(e,t,n){const r=zi(e),i=$i(e);return this.rn(e).next(e=>r.qt("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(t=>Qr.forEach(t,t=>i.put(function(e,t,n,r){return{indexId:e,uid:t.uid||"",sequenceNumber:n,readTime:gi(r.readTime),documentKey:_r(r.documentKey.path),largestBatchId:r.largestBatchId}}(t.indexId,this.user,e,n)))))}updateIndexEntries(e,t){const n=new Map;return Qr.forEach(t,(t,r)=>{const i=n.get(t.collectionGroup);return(i?Qr.resolve(i):this.getFieldIndexes(e,t.collectionGroup)).next(i=>(n.set(t.collectionGroup,i),Qr.forEach(i,n=>this.on(e,t,n).next(t=>{const i=this.un(r,n);return t.isEqual(i)?Qr.resolve():this.an(e,r,n,t,i)}))))})}cn(e,t,n,r){return Ki(e).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.tn(n,t.key),documentKey:t.key.path.toArray()})}hn(e,t,n,r){return Ki(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.tn(n,t.key),t.key.path.toArray()])}on(e,t,n){const r=Ki(e);let i=new $e(Li);return r.Wt({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.tn(n,t)])},(e,r)=>{i=i.add(new ji(n.indexId,t,r.arrayValue,r.directionalValue))}).next(()=>i)}un(e,t){let n=new $e(Li);const r=this.Ze(t,e);if(null==r)return n;const i=je(t);if(null!=i){const s=e.data.field(i.fieldPath);if(_e(s))for(const i of s.arrayValue.values||[])n=n.add(new ji(t.indexId,e.key,this.Je(i),r))}else n=n.add(new ji(t.indexId,e.key,qi,r));return n}an(e,t,n,r,i){p("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const s=[];return function(e,t,n,r,i){const s=e.getIterator(),o=t.getIterator();let a=He(s),c=He(o);for(;a||c;){let e=!1,t=!1;if(a&&c){const r=n(a,c);r<0?t=!0:r>0&&(e=!0)}else null!=a?t=!0:e=!0;e?(r(c),c=He(o)):t?(i(a),a=He(s)):(a=He(s),c=He(o))}}(r,i,Li,r=>{s.push(this.cn(e,t,n,r))},r=>{s.push(this.hn(e,t,n,r))}),Qr.waitFor(s)}rn(e){let t=1;return $i(e).Wt({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(e,n,r)=>{r.done(),t=n.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((e,t)=>Li(e,t)).filter((e,t,n)=>!t||0!==Li(e,n[t-1]));const r=[];r.push(e);for(const s of n){const n=Li(s,e),i=Li(s,t);if(0===n)r[0]=e.ke();else if(n>0&&i<0)r.push(s),r.push(s.ke());else if(i>0)break}r.push(t);const i=[];for(let s=0;s<r.length;s+=2)i.push(IDBKeyRange.bound([r[s].indexId,this.uid,r[s].arrayValue,r[s].directionalValue,qi,[]],[r[s+1].indexId,this.uid,r[s+1].arrayValue,r[s+1].directionalValue,qi,[]]));return i}getMinOffset(e,t){let n;return Qr.forEach(this.Qe(t),t=>this.je(e,t).next(e=>{e?(!n||Be(e.indexState.offset,n)<0)&&(n=e.indexState.offset):n=qe.min()})).next(()=>n)}}function Gi(e){return oi(e,"collectionParents")}function Ki(e){return oi(e,"indexEntries")}function zi(e){return oi(e,"indexConfiguration")}function $i(e){return oi(e,"indexState")}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Hi{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Hi(e,Hi.DEFAULT_COLLECTION_PERCENTILE,Hi.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(e,t,n){const r=e.store("mutations"),i=e.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.Wt({range:o},(e,t,n)=>(a++,n.delete()));s.push(c.next(()=>{b(1===a)}));const u=[];for(const l of n.mutations){const e=kr(t,l.key.path,n.batchId);s.push(i.delete(e)),u.push(l.key)}return Qr.waitFor(s).next(()=>u)}function Yi(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw v();t=e.noDocument}return JSON.stringify(t).length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Hi.DEFAULT_COLLECTION_PERCENTILE=10,Hi.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Hi.DEFAULT=new Hi(41943040,Hi.DEFAULT_COLLECTION_PERCENTILE,Hi.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Hi.DISABLED=new Hi(-1,0,0);class Ji{constructor(e,t,n,r){this.userId=e,this.M=t,this.indexManager=n,this.referenceDelegate=r,this.ln={}}static Yt(e,t,n,r){b(""!==e.uid);const i=e.isAuthenticated()?e.uid:"";return new Ji(i,t,n,r)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Zi(e).Wt({index:"userMutationsIndex",range:n},(e,n,r)=>{t=!1,r.done()}).next(()=>t)}addMutationBatch(e,t,n,r){const i=es(e),s=Zi(e);return s.add({}).next(o=>{b("number"==typeof o);const a=new ai(o,t,n,r),c=function(e,t,n){const r=n.baseMutations.map(t=>sr(e.Jt,t)),i=n.mutations.map(t=>sr(e.Jt,t));return{userId:t,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:r,mutations:i}}(this.M,this.userId,a),u=[];let l=new $e((e,t)=>L(e.canonicalString(),t.canonicalString()));for(const e of r){const t=kr(this.userId,e.key.path,o);l=l.add(e.key.path.popLast()),u.push(s.put(c)),u.push(i.put(t,Ar))}return l.forEach(t=>{u.push(this.indexManager.addToCollectionParentIndex(e,t))}),e.addOnCommittedListener(()=>{this.ln[o]=a.keys()}),Qr.waitFor(u).next(()=>a)})}lookupMutationBatch(e,t){return Zi(e).get(t).next(e=>e?(b(e.userId===this.userId),yi(this.M,e)):null)}fn(e,t){return this.ln[t]?Qr.resolve(this.ln[t]):this.lookupMutationBatch(e,t).next(e=>{if(e){const n=e.keys();return this.ln[t]=n,n}return null})}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return Zi(e).Wt({index:"userMutationsIndex",range:r},(e,t,r)=>{t.userId===this.userId&&(b(t.batchId>=n),i=yi(this.M,t)),r.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return Zi(e).Wt({index:"userMutationsIndex",range:t,reverse:!0},(e,t,r)=>{n=t.batchId,r.done()}).next(()=>n)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Zi(e).qt("userMutationsIndex",t).next(e=>e.map(e=>yi(this.M,e)))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=Or(this.userId,t.path),r=IDBKeyRange.lowerBound(n),i=[];return es(e).Wt({range:r},(n,r,s)=>{const[o,a,c]=n,u=Er(a);if(o===this.userId&&t.path.isEqual(u))return Zi(e).get(c).next(e=>{if(!e)throw v();b(e.userId===this.userId),i.push(yi(this.M,e))});s.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new $e(L);const r=[];return t.forEach(t=>{const i=Or(this.userId,t.path),s=IDBKeyRange.lowerBound(i),o=es(e).Wt({range:s},(e,r,i)=>{const[s,o,a]=e,c=Er(o);s===this.userId&&t.path.isEqual(c)?n=n.add(a):i.done()});r.push(o)}),Qr.waitFor(r).next(()=>this.dn(e,n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1,i=Or(this.userId,n),s=IDBKeyRange.lowerBound(i);let o=new $e(L);return es(e).Wt({range:s},(e,t,i)=>{const[s,a,c]=e,u=Er(a);s===this.userId&&n.isPrefixOf(u)?u.length===r&&(o=o.add(c)):i.done()}).next(()=>this.dn(e,o))}dn(e,t){const n=[],r=[];return t.forEach(t=>{r.push(Zi(e).get(t).next(e=>{if(null===e)throw v();b(e.userId===this.userId),n.push(yi(this.M,e))}))}),Qr.waitFor(r).next(()=>n)}removeMutationBatch(e,t){return Qi(e.Ht,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this._n(t.batchId)}),Qr.forEach(n,t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))}_n(e){delete this.ln[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return Qr.resolve();const n=IDBKeyRange.lowerBound([this.userId]),r=[];return es(e).Wt({range:n},(e,t,n)=>{if(e[0]===this.userId){const t=Er(e[1]);r.push(t)}else n.done()}).next(()=>{b(0===r.length)})})}containsKey(e,t){return Xi(e,this.userId,t)}wn(e){return ts(e).get(this.userId).next(e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function Xi(e,t,n){const r=Or(t,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return es(e).Wt({range:s,jt:!0},(e,n,r)=>{const[s,a,c]=e;s===t&&a===i&&(o=!0),r.done()}).next(()=>o)}function Zi(e){return oi(e,"mutations")}function es(e){return oi(e,"documentMutations")}function ts(e){return oi(e,"mutationQueues")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e){this.mn=e}next(){return this.mn+=2,this.mn}static gn(){return new ns(0)}static yn(){return new ns(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,t){this.referenceDelegate=e,this.M=t}allocateTargetId(e){return this.pn(e).next(t=>{const n=new ns(t.highestTargetId);return t.highestTargetId=n.next(),this.In(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.pn(e).next(e=>V.fromTimestamp(new U(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.pn(e).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.pn(e).next(r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.In(e,r)))}addTargetData(e,t){return this.Tn(e,t).next(()=>this.pn(e).next(n=>(n.targetCount+=1,this.En(t,n),this.In(e,n))))}updateTargetData(e,t){return this.Tn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>is(e).delete(t.targetId)).next(()=>this.pn(e)).next(t=>(b(t.targetCount>0),t.targetCount-=1,this.In(e,t)))}removeTargets(e,t,n){let r=0;const i=[];return is(e).Wt((s,o)=>{const a=vi(o);a.sequenceNumber<=t&&null===n.get(a.targetId)&&(r++,i.push(this.removeTargetData(e,a)))}).next(()=>Qr.waitFor(i)).next(()=>r)}forEachTarget(e,t){return is(e).Wt((e,n)=>{const r=vi(n);t(r)})}pn(e){return ss(e).get("targetGlobalKey").next(e=>(b(null!==e),e))}In(e,t){return ss(e).put("targetGlobalKey",t)}Tn(e,t){return is(e).put(bi(this.M,t))}En(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.pn(e).next(e=>e.targetCount)}getTargetData(e,t){const n=Je(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return is(e).Wt({range:r,index:"queryTargetsIndex"},(e,n,r)=>{const s=vi(n);Ze(t,s.target)&&(i=s,r.done())}).next(()=>i)}addMatchingKeys(e,t,n){const r=[],i=os(e);return t.forEach(t=>{const s=_r(t.path);r.push(i.put({targetId:n,path:s})),r.push(this.referenceDelegate.addReference(e,n,t))}),Qr.waitFor(r)}removeMatchingKeys(e,t,n){const r=os(e);return Qr.forEach(t,t=>{const i=_r(t.path);return Qr.waitFor([r.delete([n,i]),this.referenceDelegate.removeReference(e,n,t)])})}removeMatchingKeysForTargetId(e,t){const n=os(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),r=os(e);let i=An();return r.Wt({range:n,jt:!0},(e,t,n)=>{const r=Er(e[1]),s=new ue(r);i=i.add(s)}).next(()=>i)}containsKey(e,t){const n=_r(t.path),r=IDBKeyRange.bound([n],[F(n)],!1,!0);let i=0;return os(e).Wt({index:"documentTargetsIndex",jt:!0,range:r},([e,t],n,r)=>{0!==e&&(i++,r.done())}).next(()=>i>0)}Et(e,t){return is(e).get(t).next(e=>e?vi(e):null)}}function is(e){return oi(e,"targets")}function ss(e){return oi(e,"targetGlobal")}function os(e){return oi(e,"targetDocuments")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function as(e){if(e.code!==I.FAILED_PRECONDITION||e.message!==Wr)throw e;p("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cs([e,t],[n,r]){const i=L(e,n);return 0===i?L(t,r):i}class us{constructor(e){this.An=e,this.buffer=new $e(cs),this.Rn=0}bn(){return++this.Rn}Pn(e){const t=[e,this.bn()];if(this.buffer.size<this.An)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();cs(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class ls{constructor(e,t){this.garbageCollector=e,this.asyncQueue=t,this.Vn=!1,this.vn=null}start(e){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Sn(e)}stop(){this.vn&&(this.vn.cancel(),this.vn=null)}get started(){return null!==this.vn}Sn(e){const t=this.Vn?3e5:6e4;p("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.vn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.vn=null,this.Vn=!0;try{await e.collectGarbage(this.garbageCollector)}catch(e){ei(e)?p("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await as(e)}await this.Sn(e)})}}class hs{constructor(e,t){this.Dn=e,this.params=t}calculateTargetCount(e,t){return this.Dn.Cn(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return Qr.resolve(D.A);const n=new us(t);return this.Dn.forEachTarget(e,e=>n.Pn(e.sequenceNumber)).next(()=>this.Dn.xn(e,e=>n.Pn(e))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Dn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Dn.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(p("LruGarbageCollector","Garbage collection skipped; disabled"),Qr.resolve(Wi)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(p("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Wi):this.Nn(e,t))}getCacheSize(e){return this.Dn.getCacheSize(e)}Nn(e,t){let n,r,i,o,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(p("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,o=Date.now(),this.nthSequenceNumber(e,r))).next(r=>(n=r,a=Date.now(),this.removeTargets(e,n,t))).next(t=>(i=t,c=Date.now(),this.removeOrphanedDocuments(e,n))).next(e=>(u=Date.now(),d()<=s["a"].DEBUG&&p("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${o-l}ms\n\tDetermined least recently used ${r} in `+(a-o)+"ms\n"+`\tRemoved ${i} targets in `+(c-a)+"ms\n"+`\tRemoved ${e} documents in `+(u-c)+"ms\n"+`Total Duration: ${u-l}ms`),Qr.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e})))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,t){this.db=e,this.garbageCollector=function(e,t){return new hs(e,t)}(this,t)}Cn(e){const t=this.kn(e);return this.db.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}kn(e){let t=0;return this.xn(e,e=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}xn(e,t){return this.Mn(e,(e,n)=>t(n))}addReference(e,t,n){return fs(e,n)}removeReference(e,t,n){return fs(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return fs(e,t)}On(e,t){return function(e,t){let n=!1;return ts(e).zt(r=>Xi(e,r,t).next(e=>(e&&(n=!0),Qr.resolve(!e)))).next(()=>n)}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this.Mn(e,(s,o)=>{if(o<=t){const t=this.On(e,s).next(t=>{if(!t)return i++,n.getEntry(e,s).next(()=>(n.removeEntry(s,V.min()),os(e).delete([0,_r(s.path)])))});r.push(t)}}).next(()=>Qr.waitFor(r)).next(()=>n.apply(e)).next(()=>i)}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return fs(e,t)}Mn(e,t){const n=os(e);let r,i=D.A;return n.Wt({index:"documentTargetsIndex"},([e,n],{path:s,sequenceNumber:o})=>{0===e?(i!==D.A&&t(new ue(Er(r)),i),i=o,r=s):i=D.A}).next(()=>{i!==D.A&&t(new ue(Er(r)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function fs(e,t){return os(e).put(function(e,t){return{targetId:0,path:_r(e.path),sequenceNumber:t}}(t,e.currentSequenceNumber))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(){this.changes=new wn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,De.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Qr.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e){this.M=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return vs(e).put(n)}removeEntry(e,t,n){return vs(e).delete(function(e,t){const n=e.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],pi(t),n[n.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.Fn(e,n)))}getEntry(e,t){let n=De.newInvalidDocument(t);return vs(e).Wt({index:"documentKeyIndex",range:IDBKeyRange.only(bs(t))},(e,r)=>{n=this.$n(t,r)}).next(()=>n)}Bn(e,t){let n={size:0,document:De.newInvalidDocument(t)};return vs(e).Wt({index:"documentKeyIndex",range:IDBKeyRange.only(bs(t))},(e,r)=>{n={document:this.$n(t,r),size:Yi(r)}}).next(()=>n)}getEntries(e,t){let n=In();return this.Ln(e,t,(e,t)=>{const r=this.$n(e,t);n=n.insert(e,r)}).next(()=>n)}Un(e,t){let n=In(),r=new Ge(ue.comparator);return this.Ln(e,t,(e,t)=>{const i=this.$n(e,t);n=n.insert(e,i),r=r.insert(e,Yi(t))}).next(()=>({documents:n,qn:r}))}Ln(e,t,n){if(t.isEmpty())return Qr.resolve();let r=new $e(_s);t.forEach(e=>r=r.add(e));const i=IDBKeyRange.bound(bs(r.first()),bs(r.last())),s=r.getIterator();let o=s.getNext();return vs(e).Wt({index:"documentKeyIndex",range:i},(e,t,r)=>{const i=ue.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;o&&_s(o,i)<0;)n(o,null),o=s.getNext();o&&o.isEqual(i)&&(n(o,t),o=s.hasNext()?s.getNext():null),o?r.Ut(bs(o)):r.done()}).next(()=>{for(;o;)n(o,null),o=s.hasNext()?s.getNext():null})}getAllFromCollection(e,t,n){const r=[t.popLast().toArray(),t.lastSegment(),pi(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],i=[t.popLast().toArray(),t.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return vs(e).qt(IDBKeyRange.bound(r,i,!0)).next(e=>{let t=In();for(const n of e){const e=this.$n(ue.fromSegments(n.prefixPath.concat(n.collectionGroup,n.documentId)),n);t=t.insert(e.key,e)}return t})}getAllFromCollectionGroup(e,t,n,r){let i=In();const s=ws(t,n),o=ws(t,qe.max());return vs(e).Wt({index:"collectionGroupIndex",range:IDBKeyRange.bound(s,o,!0)},(e,t,n)=>{const s=this.$n(ue.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);i=i.insert(s.key,s),i.size===r&&n.done()}).next(()=>i)}newChangeBuffer(e){return new ms(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(e=>e.byteSize)}getMetadata(e){return ys(e).get("remoteDocumentGlobalKey").next(e=>(b(!!e),e))}Fn(e,t){return ys(e).put("remoteDocumentGlobalKey",t)}$n(e,t){if(t){const e=di(this.M,t);if(!e.isNoDocument()||!e.version.isEqual(V.min()))return e}return De.newInvalidDocument(e)}}class ms extends ps{constructor(e,t){super(),this.Kn=e,this.trackRemovals=t,this.Gn=new wn(e=>e.toString(),(e,t)=>e.isEqual(t))}applyChanges(e){const t=[];let n=0,r=new $e((e,t)=>L(e.canonicalString(),t.canonicalString()));return this.changes.forEach((i,s)=>{const o=this.Gn.get(i);if(t.push(this.Kn.removeEntry(e,i,o.readTime)),s.isValidDocument()){const a=fi(this.Kn.M,s);r=r.add(i.path.popLast());const c=Yi(a);n+=c-o.size,t.push(this.Kn.addEntry(e,i,a))}else if(n-=o.size,this.trackRemovals){const n=fi(this.Kn.M,s.convertToNoDocument(V.min()));t.push(this.Kn.addEntry(e,i,n))}}),r.forEach(n=>{t.push(this.Kn.indexManager.addToCollectionParentIndex(e,n))}),t.push(this.Kn.updateMetadata(e,n)),Qr.waitFor(t)}getFromCache(e,t){return this.Kn.Bn(e,t).next(e=>(this.Gn.set(t,{size:e.size,readTime:e.document.readTime}),e.document))}getAllFromCache(e,t){return this.Kn.Un(e,t).next(({documents:e,qn:t})=>(t.forEach((t,n)=>{this.Gn.set(t,{size:n,readTime:e.get(t).readTime})}),e))}}function ys(e){return oi(e,"remoteDocumentGlobal")}function vs(e){return oi(e,"remoteDocumentsV14")}function bs(e){const t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function ws(e,t){const n=t.documentKey.path.toArray();return[e,pi(t.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function _s(e,t){const n=e.path.toArray(),r=t.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=L(n[s],r[s]),i)return i;return i=L(n.length,r.length),i||(i=L(n[n.length-2],r[r.length-2]),i||L(n[n.length-1],r[r.length-1]))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e){this.M=e}kt(e,t,n,r){const i=new Yr("createOrUpgrade",t);n<1&&r>=1&&(function(e){e.createObjectStore("owner")}(e),function(e){e.createObjectStore("mutationQueues",{keyPath:"userId"}),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Sr,{unique:!0}),e.createObjectStore("documentMutations")}(e),Ts(e),function(e){e.createObjectStore("remoteDocuments")}(e));let s=Qr.resolve();return n<3&&r>=3&&(0!==n&&(function(e){e.deleteObjectStore("targetDocuments"),e.deleteObjectStore("targets"),e.deleteObjectStore("targetGlobal")}(e),Ts(e)),s=s.next(()=>function(e){const t=e.store("targetGlobal"),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:V.min().toTimestamp(),targetCount:0};return t.put("targetGlobalKey",n)}(i))),n<4&&r>=4&&(0!==n&&(s=s.next(()=>function(e,t){return t.store("mutations").qt().next(n=>{e.deleteObjectStore("mutations"),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Sr,{unique:!0});const r=t.store("mutations"),i=n.map(e=>r.put(e));return Qr.waitFor(i)})}(e,i))),s=s.next(()=>{!function(e){e.createObjectStore("clientMetadata",{keyPath:"clientId"})}(e)})),n<5&&r>=5&&(s=s.next(()=>this.Qn(i))),n<6&&r>=6&&(s=s.next(()=>(function(e){e.createObjectStore("remoteDocumentGlobal")}(e),this.jn(i)))),n<7&&r>=7&&(s=s.next(()=>this.Wn(i))),n<8&&r>=8&&(s=s.next(()=>this.zn(e,i))),n<9&&r>=9&&(s=s.next(()=>{!function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")}(e)})),n<10&&r>=10&&(s=s.next(()=>this.Hn(i))),n<11&&r>=11&&(s=s.next(()=>{!function(e){e.createObjectStore("bundles",{keyPath:"bundleId"})}(e),function(e){e.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),n<12&&r>=12&&(s=s.next(()=>{!function(e){const t=e.createObjectStore("documentOverlays",{keyPath:Vr});t.createIndex("collectionPathOverlayIndex",qr,{unique:!1}),t.createIndex("collectionGroupOverlayIndex",Br,{unique:!1})}(e)})),n<13&&r>=13&&(s=s.next(()=>function(e){const t=e.createObjectStore("remoteDocumentsV14",{keyPath:Cr});t.createIndex("documentKeyIndex",xr),t.createIndex("collectionGroupIndex",Rr)}(e)).next(()=>this.Jn(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),n<14&&r>=14&&(s=s.next(()=>{!function(e){e.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),e.createObjectStore("indexState",{keyPath:Lr}).createIndex("sequenceNumberIndex",Mr,{unique:!1}),e.createObjectStore("indexEntries",{keyPath:Fr}).createIndex("documentKeyIndex",Ur,{unique:!1})}(e)})),s}jn(e){let t=0;return e.store("remoteDocuments").Wt((e,n)=>{t+=Yi(n)}).next(()=>{const n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)})}Qn(e){const t=e.store("mutationQueues"),n=e.store("mutations");return t.qt().next(t=>Qr.forEach(t,t=>{const r=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.qt("userMutationsIndex",r).next(n=>Qr.forEach(n,n=>{b(n.userId===t.userId);const r=yi(this.M,n);return Qi(e,t.userId,r).next(()=>{})}))}))}Wn(e){const t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(e=>{const r=[];return n.Wt((n,i)=>{const s=new z(n),o=function(e){return[0,_r(e)]}(s);r.push(t.get(o).next(n=>n?Qr.resolve():(n=>t.put({targetId:0,path:_r(n),sequenceNumber:e.highestListenSequenceNumber}))(s)))}).next(()=>Qr.waitFor(r))})}zn(e,t){e.createObjectStore("collectionParents",{keyPath:jr});const n=t.store("collectionParents"),r=new Vi,i=e=>{if(r.add(e)){const t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:_r(r)})}};return t.store("remoteDocuments").Wt({jt:!0},(e,t)=>{const n=new z(e);return i(n.popLast())}).next(()=>t.store("documentMutations").Wt({jt:!0},([e,t,n],r)=>{const s=Er(t);return i(s.popLast())}))}Hn(e){const t=e.store("targets");return t.Wt((e,n)=>{const r=vi(n),i=bi(this.M,r);return t.put(i)})}Jn(e,t){const n=t.store("remoteDocuments"),r=[];return n.Wt((e,n)=>{const i=t.store("remoteDocumentsV14"),s=(o=n,o.document?new ue(z.fromString(o.document.name).popFirst(5)):o.noDocument?ue.fromSegments(o.noDocument.path):o.unknownDocument?ue.fromSegments(o.unknownDocument.path):v()).path.toArray();var o;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a={prefixPath:s.slice(0,s.length-2),collectionGroup:s[s.length-2],documentId:s[s.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};r.push(i.put(a))}).next(()=>Qr.waitFor(r))}}function Ts(e){e.createObjectStore("targetDocuments",{keyPath:Dr}).createIndex("documentTargetsIndex",Pr,{unique:!0}),e.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",Nr,{unique:!0}),e.createObjectStore("targetGlobal")}const Es="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Ss{constructor(e,t,n,r,i,s,o,a,c,u,l=13){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Yn=i,this.window=s,this.document=o,this.Xn=c,this.Zn=u,this.ts=l,this.es=null,this.ns=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ss=null,this.inForeground=!1,this.rs=null,this.os=null,this.us=Number.NEGATIVE_INFINITY,this.cs=e=>Promise.resolve(),!Ss.vt())throw new T(I.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new ds(this,r),this.hs=t+"main",this.M=new hi(a),this.ls=new Jr(this.hs,this.ts,new Is(this.M)),this.fs=new rs(this.referenceDelegate,this.M),this.ds=function(e){return new gs(e)}(this.M),this._s=new Ti,this.window&&this.window.localStorage?this.ws=this.window.localStorage:(this.ws=null,!1===u&&g("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.gs().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new T(I.FAILED_PRECONDITION,Es);return this.ys(),this.ps(),this.Is(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.fs.getHighestSequenceNumber(e))}).then(e=>{this.es=new D(e,this.Xn)}).then(()=>{this.ns=!0}).catch(e=>(this.ls&&this.ls.close(),Promise.reject(e)))}Ts(e){return this.cs=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ls.Ot(async t=>{null===t.newVersion&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Yn.enqueueAndForget(async()=>{this.started&&await this.gs()}))}gs(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>ks(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Es(e).next(e=>{e||(this.isPrimary=!1,this.Yn.enqueueRetryable(()=>this.cs(!1)))})}).next(()=>this.As(e)).next(t=>this.isPrimary&&!t?this.Rs(e).next(()=>!1):!!t&&this.bs(e).next(()=>!0))).catch(e=>{if(ei(e))return p("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return p("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Yn.enqueueRetryable(()=>this.cs(e)),this.isPrimary=e})}Es(e){return Os(e).get("owner").next(e=>Qr.resolve(this.Ps(e)))}Vs(e){return ks(e).delete(this.clientId)}async vs(){if(this.isPrimary&&!this.Ss(this.us,18e5)){this.us=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{const t=oi(e,"clientMetadata");return t.qt().next(e=>{const n=this.Ds(e,18e5),r=e.filter(e=>-1===n.indexOf(e));return Qr.forEach(r,e=>t.delete(e.clientId)).next(()=>r)})}).catch(()=>[]);if(this.ws)for(const t of e)this.ws.removeItem(this.Cs(t.clientId))}}Is(){this.os=this.Yn.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.gs().then(()=>this.vs()).then(()=>this.Is()))}Ps(e){return!!e&&e.ownerId===this.clientId}As(e){return this.Zn?Qr.resolve(!0):Os(e).get("owner").next(t=>{if(null!==t&&this.Ss(t.leaseTimestampMs,5e3)&&!this.xs(t.ownerId)){if(this.Ps(t)&&this.networkEnabled)return!0;if(!this.Ps(t)){if(!t.allowTabSynchronization)throw new T(I.FAILED_PRECONDITION,Es);return!1}}return!(!this.networkEnabled||!this.inForeground)||ks(e).qt().next(e=>void 0===this.Ds(e,5e3).find(e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))}).next(e=>(this.isPrimary!==e&&p("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.ns=!1,this.Ns(),this.os&&(this.os.cancel(),this.os=null),this.ks(),this.Ms(),await this.ls.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new si(e,D.A);return this.Rs(t).next(()=>this.Vs(t))}),this.ls.close(),this.Os()}Ds(e,t){return e.filter(e=>this.Ss(e.updateTimeMs,t)&&!this.xs(e.clientId))}Fs(){return this.runTransaction("getActiveClients","readonly",e=>ks(e).qt().next(e=>this.Ds(e,18e5).map(e=>e.clientId)))}get started(){return this.ns}getMutationQueue(e,t){return Ji.Yt(e,this.M,t,this.referenceDelegate)}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getIndexManager(e){return new Bi(e,this.M.Jt.databaseId)}getDocumentOverlayCache(e){return Oi.Yt(this.M,e)}getBundleCache(){return this._s}runTransaction(e,t,n){p("IndexedDbPersistence","Starting transaction:",e);const r="readonly"===t?"readonly":"readwrite",i=14===(s=this.ts)?$r:13===s?zr:12===s?Kr:11===s?Gr:void v();var s;let o;return this.ls.runTransaction(e,r,i,r=>(o=new si(r,this.es?this.es.next():D.A),"readwrite-primary"===t?this.Es(o).next(e=>!!e||this.As(o)).next(t=>{if(!t)throw g(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Yn.enqueueRetryable(()=>this.cs(!1)),new T(I.FAILED_PRECONDITION,Wr);return n(o)}).next(e=>this.bs(o).next(()=>e)):this.$s(o).next(()=>n(o)))).then(e=>(o.raiseOnCommittedEvent(),e))}$s(e){return Os(e).get("owner").next(e=>{if(null!==e&&this.Ss(e.leaseTimestampMs,5e3)&&!this.xs(e.ownerId)&&!this.Ps(e)&&!(this.Zn||this.allowTabSynchronization&&e.allowTabSynchronization))throw new T(I.FAILED_PRECONDITION,Es)})}bs(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Os(e).put("owner",t)}static vt(){return Jr.vt()}Rs(e){const t=Os(e);return t.get("owner").next(e=>this.Ps(e)?(p("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):Qr.resolve())}Ss(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(g(`Detected an update time that is in the future: ${e} > ${n}`),!1))}ys(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.rs=()=>{this.Yn.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.gs()))},this.document.addEventListener("visibilitychange",this.rs),this.inForeground="visible"===this.document.visibilityState)}ks(){this.rs&&(this.document.removeEventListener("visibilitychange",this.rs),this.rs=null)}ps(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.ss=()=>{this.Ns(),Object(o["w"])()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Yn.enterRestrictedMode(!0),this.Yn.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ss))}Ms(){this.ss&&(this.window.removeEventListener("pagehide",this.ss),this.ss=null)}xs(e){var t;try{const n=null!==(null===(t=this.ws)||void 0===t?void 0:t.getItem(this.Cs(e)));return p("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(e){return g("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}Ns(){if(this.ws)try{this.ws.setItem(this.Cs(this.clientId),String(Date.now()))}catch(e){g("Failed to set zombie client id.",e)}}Os(){if(this.ws)try{this.ws.removeItem(this.Cs(this.clientId))}catch(e){}}Cs(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Os(e){return oi(e,"owner")}function ks(e){return oi(e,"clientMetadata")}function As(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Cs{constructor(e,t,n){this.ds=e,this.Bs=t,this.indexManager=n}Ls(e,t){return this.Bs.getAllMutationBatchesAffectingDocumentKey(e,t).next(n=>this.Us(e,t,n))}Us(e,t,n){return this.ds.getEntry(e,t).next(e=>{for(const t of n)t.applyToLocalView(e);return e})}qs(e,t){e.forEach((e,n)=>{for(const r of t)r.applyToLocalView(n)})}Ks(e,t){return this.ds.getEntries(e,t).next(t=>this.Gs(e,t).next(()=>t))}Gs(e,t){return this.Bs.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>this.qs(t,e))}Qs(e,t,n){return function(e){return ue.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.js(e,t.path):Et(t)?this.Ws(e,t,n):this.zs(e,t,n)}js(e,t){return this.Ls(e,new ue(t)).next(e=>{let t=En();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}Ws(e,t,n){const r=t.collectionGroup;let i=En();return this.indexManager.getCollectionParents(e,r).next(s=>Qr.forEach(s,s=>{const o=function(e,t){return new vt(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(r));return this.zs(e,o,n).next(e=>{e.forEach((e,t)=>{i=i.insert(e,t)})})}).next(()=>i))}zs(e,t,n){let r;return this.ds.getAllFromCollection(e,t.path,n).next(n=>(r=n,this.Bs.getAllMutationBatchesAffectingQuery(e,t))).next(e=>{for(const t of e)for(const e of t.mutations){const n=e.key;let i=r.get(n);null==i&&(i=De.newInvalidDocument(n),r=r.insert(n,i)),rn(e,i,t.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}}).next(()=>(r.forEach((e,n)=>{Rt(t,n)||(r=r.remove(e))}),r))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Hs=n,this.Js=r}static Ys(e,t){let n=An(),r=An();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new xs(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(){this.Xs=!1}initialize(e,t){this.Zs=e,this.indexManager=t,this.Xs=!0}Qs(e,t,n,r){return this.ti(e,t).next(i=>i||this.ei(e,t,r,n)).next(n=>n||this.ni(e,t))}ti(e,t){return Qr.resolve(null)}ei(e,t,n,r){return _t(t)||r.isEqual(V.min())?this.ni(e,t):this.Zs.Ks(e,n).next(i=>{const o=this.si(t,i);return this.ii(t,o,n,r)?this.ni(e,t):(d()<=s["a"].DEBUG&&p("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),xt(t)),this.ri(e,o,t,Ue(r,-1)))})}si(e,t){let n=new $e(Dt(e));return t.forEach((t,r)=>{Rt(e,r)&&(n=n.add(r))}),n}ii(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ni(e,t){return d()<=s["a"].DEBUG&&p("QueryEngine","Using full collection scan to execute query:",xt(t)),this.Zs.Qs(e,t,qe.min())}ri(e,t,n,r){return this.Zs.Qs(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e,t,n,r){this.persistence=e,this.oi=t,this.M=r,this.ui=new Ge(L),this.ai=new wn(e=>Je(e),Ze),this.ci=new Map,this.hi=e.getRemoteDocumentCache(),this.fs=e.getTargetCache(),this._s=e.getBundleCache(),this.li(n)}li(e){this.indexManager=this.persistence.getIndexManager(e),this.Bs=this.persistence.getMutationQueue(e,this.indexManager),this.fi=new Cs(this.hi,this.Bs,this.indexManager),this.hi.setIndexManager(this.indexManager),this.oi.initialize(this.fi,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ui))}}function Ds(e,t,n,r){return new Ns(e,t,n,r)}async function Ps(e,t){const n=_(e);return await n.persistence.runTransaction("Handle user change","readonly",e=>{let r;return n.Bs.getAllMutationBatches(e).next(i=>(r=i,n.li(t),n.Bs.getAllMutationBatches(e))).next(t=>{const i=[],s=[];let o=An();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.fi.Ks(e,o).next(e=>({di:e,removedBatchIds:i,addedBatchIds:s}))})})}function js(e,t){const n=_(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{const r=t.batch.keys(),i=n.hi.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=Qr.resolve();return s.forEach(e=>{o=o.next(()=>r.getEntry(t,e)).next(t=>{const s=n.docVersions.get(e);b(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),o.next(()=>e.Bs.removeMutationBatch(t,i))}(n,e,t,i).next(()=>i.apply(e)).next(()=>n.Bs.performConsistencyCheck(e)).next(()=>n.fi.Ks(e,r))})}function Ls(e){const t=_(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.fs.getLastRemoteSnapshotVersion(e))}function Ms(e,t){const n=_(e),r=t.snapshotVersion;let i=n.ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{const s=n.hi.newChangeBuffer({trackRemovals:!0});i=n.ui;const o=[];t.targetChanges.forEach((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.fs.removeMatchingKeys(e,s.removedDocuments,a).next(()=>n.fs.addMatchingKeys(e,s.addedDocuments,a)));let u=c.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?u=u.withResumeToken(Y.EMPTY_BYTE_STRING,V.min()).withLastLimboFreeSnapshotVersion(V.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.fs.updateTargetData(e,u))});let a=In();if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))}),o.push(Fs(e,s,t.documentUpdates).next(e=>{a=e})),!r.isEqual(V.min())){const t=n.fs.getLastRemoteSnapshotVersion(e).next(t=>n.fs.setTargetsMetadata(e,e.currentSequenceNumber,r));o.push(t)}return Qr.waitFor(o).next(()=>s.apply(e)).next(()=>n.fi.Gs(e,a)).next(()=>a)}).then(e=>(n.ui=i,e))}function Fs(e,t,n){let r=An();return n.forEach(e=>r=r.add(e)),t.getEntries(e,r).next(e=>{let r=In();return n.forEach((n,i)=>{const s=e.get(n);i.isNoDocument()&&i.version.isEqual(V.min())?(t.removeEntry(n,i.readTime),r=r.insert(n,i)):!s.isValidDocument()||i.version.compareTo(s.version)>0||0===i.version.compareTo(s.version)&&s.hasPendingWrites?(t.addEntry(i),r=r.insert(n,i)):p("LocalStore","Ignoring outdated watch update for ",n,". Current version:",s.version," Watch version:",i.version)}),r})}function Us(e,t){const n=_(e);return n.persistence.runTransaction("Get next mutation batch","readonly",e=>(void 0===t&&(t=-1),n.Bs.getNextMutationBatchAfterBatchId(e,t)))}function Vs(e,t){const n=_(e);return n.persistence.runTransaction("Allocate target","readwrite",e=>{let r;return n.fs.getTargetData(e,t).next(i=>i?(r=i,Qr.resolve(r)):n.fs.allocateTargetId(e).next(i=>(r=new li(t,i,0,e.currentSequenceNumber),n.fs.addTargetData(e,r).next(()=>r))))}).then(e=>{const r=n.ui.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.ui=n.ui.insert(e.targetId,e),n.ai.set(t,e.targetId)),e})}async function qs(e,t,n){const r=_(e),i=r.ui.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,e=>r.persistence.referenceDelegate.removeTarget(e,i))}catch(e){if(!ei(e))throw e;p("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.ui=r.ui.remove(t),r.ai.delete(i.target)}function Bs(e,t,n){const r=_(e);let i=V.min(),s=An();return r.persistence.runTransaction("Execute query","readonly",e=>function(e,t,n){const r=_(e),i=r.ai.get(n);return void 0!==i?Qr.resolve(r.ui.get(i)):r.fs.getTargetData(t,n)}(r,e,Ot(t)).next(t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.fs.getMatchingKeysForTargetId(e,t.targetId).next(e=>{s=e})}).next(()=>r.oi.Qs(e,t,n?i:V.min(),n?s:An())).next(e=>(zs(r,Nt(t),e),{documents:e,_i:s})))}function Gs(e,t){const n=_(e),r=_(n.fs),i=n.ui.get(t);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",e=>r.Et(e,t).next(e=>e?e.target:null))}function Ks(e,t){const n=_(e),r=n.ci.get(t)||V.min();return n.persistence.runTransaction("Get new document changes","readonly",e=>n.hi.getAllFromCollectionGroup(e,t,Ue(r,-1),Number.MAX_SAFE_INTEGER)).then(e=>(zs(n,t,e),e))}function zs(e,t,n){let r=V.min();n.forEach((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)}),e.ci.set(t,r)}async function $s(e,t,n,r){const i=_(e);let s=An(),o=In();for(const u of n){const e=t.wi(u.metadata.name);u.document&&(s=s.add(e));const n=t.mi(u);n.setReadTime(t.gi(u.metadata.readTime)),o=o.insert(e,n)}const a=i.hi.newChangeBuffer({trackRemovals:!0}),c=await Vs(i,function(e){return Ot(wt(z.fromString("__bundle__/docs/"+e)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",e=>Fs(e,a,o).next(t=>(a.apply(e),t)).next(t=>i.fs.removeMatchingKeysForTargetId(e,c.targetId).next(()=>i.fs.addMatchingKeys(e,s,c.targetId)).next(()=>i.fi.Gs(e,t)).next(()=>t)))}async function Ws(e,t,n=An()){const r=await Vs(e,Ot(wi(t.bundledQuery))),i=_(e);return i.persistence.runTransaction("Save named query","readwrite",e=>{const s=$n(t.readTime);if(r.snapshotVersion.compareTo(s)>=0)return i._s.saveNamedQuery(e,t);const o=r.withResumeToken(Y.EMPTY_BYTE_STRING,s);return i.ui=i.ui.insert(o.targetId,o),i.fs.updateTargetData(e,o).next(()=>i.fs.removeMatchingKeysForTargetId(e,r.targetId)).next(()=>i.fs.addMatchingKeys(e,n,r.targetId)).next(()=>i._s.saveNamedQuery(e,t))})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e){this.M=e,this.yi=new Map,this.pi=new Map}getBundleMetadata(e,t){return Qr.resolve(this.yi.get(t))}saveBundleMetadata(e,t){var n;return this.yi.set(t.id,{id:(n=t).id,version:n.version,createTime:$n(n.createTime)}),Qr.resolve()}getNamedQuery(e,t){return Qr.resolve(this.pi.get(t))}saveNamedQuery(e,t){return this.pi.set(t.name,function(e){return{name:e.name,query:wi(e.bundledQuery),readTime:$n(e.readTime)}}(t)),Qr.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(){this.overlays=new Ge(ue.comparator),this.Ii=new Map}getOverlay(e,t){return Qr.resolve(this.overlays.get(t))}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.Xt(e,t,r)}),Qr.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.Ii.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.Ii.delete(n)),Qr.resolve()}getOverlaysForCollection(e,t,n){const r=Sn(),i=t.length+1,s=new ue(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return Qr.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new Ge((e,t)=>e-t);const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=Sn(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=Sn(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach((e,t)=>o.set(e,t)),o.size()>=r)break;return Qr.resolve(o)}Xt(e,t,n){if(null===n)return;const r=this.overlays.get(n.key);if(null!==r){const e=this.Ii.get(r.largestBatchId).delete(n.key);this.Ii.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new ui(t,n));let i=this.Ii.get(t);void 0===i&&(i=An(),this.Ii.set(t,i)),this.Ii.set(t,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(){this.Ti=new $e(Js.Ei),this.Ai=new $e(Js.Ri)}isEmpty(){return this.Ti.isEmpty()}addReference(e,t){const n=new Js(e,t);this.Ti=this.Ti.add(n),this.Ai=this.Ai.add(n)}bi(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.Pi(new Js(e,t))}Vi(e,t){e.forEach(e=>this.removeReference(e,t))}vi(e){const t=new ue(new z([])),n=new Js(t,e),r=new Js(t,e+1),i=[];return this.Ai.forEachInRange([n,r],e=>{this.Pi(e),i.push(e.key)}),i}Si(){this.Ti.forEach(e=>this.Pi(e))}Pi(e){this.Ti=this.Ti.delete(e),this.Ai=this.Ai.delete(e)}Di(e){const t=new ue(new z([])),n=new Js(t,e),r=new Js(t,e+1);let i=An();return this.Ai.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){const t=new Js(e,0),n=this.Ti.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Js{constructor(e,t){this.key=e,this.Ci=t}static Ei(e,t){return ue.comparator(e.key,t.key)||L(e.Ci,t.Ci)}static Ri(e,t){return L(e.Ci,t.Ci)||ue.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.Bs=[],this.xi=1,this.Ni=new $e(Js.Ei)}checkEmpty(e){return Qr.resolve(0===this.Bs.length)}addMutationBatch(e,t,n,r){const i=this.xi;this.xi++,this.Bs.length>0&&this.Bs[this.Bs.length-1];const s=new ai(i,t,n,r);this.Bs.push(s);for(const o of r)this.Ni=this.Ni.add(new Js(o.key,i)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return Qr.resolve(s)}lookupMutationBatch(e,t){return Qr.resolve(this.ki(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.Mi(n),i=r<0?0:r;return Qr.resolve(this.Bs.length>i?this.Bs[i]:null)}getHighestUnacknowledgedBatchId(){return Qr.resolve(0===this.Bs.length?-1:this.xi-1)}getAllMutationBatches(e){return Qr.resolve(this.Bs.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Js(t,0),r=new Js(t,Number.POSITIVE_INFINITY),i=[];return this.Ni.forEachInRange([n,r],e=>{const t=this.ki(e.Ci);i.push(t)}),Qr.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new $e(L);return t.forEach(e=>{const t=new Js(e,0),r=new Js(e,Number.POSITIVE_INFINITY);this.Ni.forEachInRange([t,r],e=>{n=n.add(e.Ci)})}),Qr.resolve(this.Oi(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;ue.isDocumentKey(i)||(i=i.child(""));const s=new Js(new ue(i),0);let o=new $e(L);return this.Ni.forEachWhile(e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.Ci)),!0)},s),Qr.resolve(this.Oi(o))}Oi(e){const t=[];return e.forEach(e=>{const n=this.ki(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){b(0===this.Fi(t.batchId,"removed")),this.Bs.shift();let n=this.Ni;return Qr.forEach(t.mutations,r=>{const i=new Js(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Ni=n})}_n(e){}containsKey(e,t){const n=new Js(t,0),r=this.Ni.firstAfterOrEqual(n);return Qr.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.Bs.length,Qr.resolve()}Fi(e,t){return this.Mi(e)}Mi(e){return 0===this.Bs.length?0:e-this.Bs[0].batchId}ki(e){const t=this.Mi(e);return t<0||t>=this.Bs.length?null:this.Bs[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e){this.$i=e,this.docs=new Ge(ue.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.$i(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Qr.resolve(n?n.document.mutableCopy():De.newInvalidDocument(t))}getEntries(e,t){let n=In();return t.forEach(e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():De.newInvalidDocument(e))}),Qr.resolve(n)}getAllFromCollection(e,t,n){let r=In();const i=new ue(t.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:e,value:{document:i}}=s.getNext();if(!t.isPrefixOf(e.path))break;e.path.length>t.length+1||Be(Ve(i),n)<=0||(r=r.insert(i.key,i.mutableCopy()))}return Qr.resolve(r)}getAllFromCollectionGroup(e,t,n,r){v()}Bi(e,t){return Qr.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new eo(this)}getSize(e){return Qr.resolve(this.size)}}class eo extends ps{constructor(e){super(),this.Kn=e}applyChanges(e){const t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.Kn.addEntry(e,r)):this.Kn.removeEntry(n)}),Qr.waitFor(t)}getFromCache(e,t){return this.Kn.getEntry(e,t)}getAllFromCache(e,t){return this.Kn.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e){this.persistence=e,this.Li=new wn(e=>Je(e),Ze),this.lastRemoteSnapshotVersion=V.min(),this.highestTargetId=0,this.Ui=0,this.qi=new Ys,this.targetCount=0,this.Ki=ns.gn()}forEachTarget(e,t){return this.Li.forEach((e,n)=>t(n)),Qr.resolve()}getLastRemoteSnapshotVersion(e){return Qr.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Qr.resolve(this.Ui)}allocateTargetId(e){return this.highestTargetId=this.Ki.next(),Qr.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Ui&&(this.Ui=t),Qr.resolve()}Tn(e){this.Li.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ki=new ns(t),this.highestTargetId=t),e.sequenceNumber>this.Ui&&(this.Ui=e.sequenceNumber)}addTargetData(e,t){return this.Tn(t),this.targetCount+=1,Qr.resolve()}updateTargetData(e,t){return this.Tn(t),Qr.resolve()}removeTargetData(e,t){return this.Li.delete(t.target),this.qi.vi(t.targetId),this.targetCount-=1,Qr.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Li.forEach((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Li.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)}),Qr.waitFor(i).next(()=>r)}getTargetCount(e){return Qr.resolve(this.targetCount)}getTargetData(e,t){const n=this.Li.get(t)||null;return Qr.resolve(n)}addMatchingKeys(e,t,n){return this.qi.bi(t,n),Qr.resolve()}removeMatchingKeys(e,t,n){this.qi.Vi(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),Qr.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.qi.vi(t),Qr.resolve()}getMatchingKeysForTargetId(e,t){const n=this.qi.Di(t);return Qr.resolve(n)}containsKey(e,t){return Qr.resolve(this.qi.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e,t){this.Gi={},this.overlays={},this.es=new D(0),this.ns=!1,this.ns=!0,this.referenceDelegate=e(this),this.fs=new to(this),this.indexManager=new Ui,this.ds=function(e){return new Zs(e)}(e=>this.referenceDelegate.Qi(e)),this.M=new hi(t),this._s=new Hs(this.M)}start(){return Promise.resolve()}shutdown(){return this.ns=!1,Promise.resolve()}get started(){return this.ns}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Qs,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Gi[e.toKey()];return n||(n=new Xs(t,this.referenceDelegate),this.Gi[e.toKey()]=n),n}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getBundleCache(){return this._s}runTransaction(e,t,n){p("MemoryPersistence","Starting transaction:",e);const r=new ro(this.es.next());return this.referenceDelegate.ji(),n(r).next(e=>this.referenceDelegate.Wi(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}zi(e,t){return Qr.or(Object.values(this.Gi).map(n=>()=>n.containsKey(e,t)))}}class ro extends Hr{constructor(e){super(),this.currentSequenceNumber=e}}class io{constructor(e){this.persistence=e,this.Hi=new Ys,this.Ji=null}static Yi(e){return new io(e)}get Xi(){if(this.Ji)return this.Ji;throw v()}addReference(e,t,n){return this.Hi.addReference(n,t),this.Xi.delete(n.toString()),Qr.resolve()}removeReference(e,t,n){return this.Hi.removeReference(n,t),this.Xi.add(n.toString()),Qr.resolve()}markPotentiallyOrphaned(e,t){return this.Xi.add(t.toString()),Qr.resolve()}removeTarget(e,t){this.Hi.vi(t.targetId).forEach(e=>this.Xi.add(e.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Xi.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}ji(){this.Ji=new Set}Wi(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Qr.forEach(this.Xi,n=>{const r=ue.fromPath(n);return this.Zi(e,r).next(e=>{e||t.removeEntry(r,V.min())})}).next(()=>(this.Ji=null,t.apply(e)))}updateLimboDocument(e,t){return this.Zi(e,t).next(e=>{e?this.Xi.delete(t.toString()):this.Xi.add(t.toString())})}Qi(e){return 0}Zi(e,t){return Qr.or([()=>Qr.resolve(this.Hi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.zi(e,t)])}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(e,t){return`firestore_clients_${e}_${t}`}function oo(e,t,n){let r=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(r+="_"+t.uid),r}function ao(e,t){return`firestore_targets_${e}_${t}`}class co{constructor(e,t,n,r){this.user=e,this.batchId=t,this.state=n,this.error=r}static tr(e,t,n){const r=JSON.parse(n);let i,s="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return s&&r.error&&(s="string"==typeof r.error.message&&"string"==typeof r.error.code,s&&(i=new T(r.error.code,r.error.message))),s?new co(e,t,r.state,i):(g("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}er(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class uo{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static tr(e,t){const n=JSON.parse(t);let r,i="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return i&&n.error&&(i="string"==typeof n.error.message&&"string"==typeof n.error.code,i&&(r=new T(n.error.code,n.error.message))),i?new uo(e,n.state,r):(g("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}er(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class lo{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static tr(e,t){const n=JSON.parse(t);let r="object"==typeof n&&n.activeTargetIds instanceof Array,i=xn();for(let s=0;r&&s<n.activeTargetIds.length;++s)r=ce(n.activeTargetIds[s]),i=i.add(n.activeTargetIds[s]);return r?new lo(e,i):(g("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class ho{constructor(e,t){this.clientId=e,this.onlineState=t}static tr(e){const t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new ho(t.clientId,t.onlineState):(g("SharedClientState","Failed to parse online state: "+e),null)}}class fo{constructor(){this.activeTargetIds=xn()}nr(e){this.activeTargetIds=this.activeTargetIds.add(e)}sr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}er(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class po{constructor(e,t,n,r,i){this.window=e,this.Yn=t,this.persistenceKey=n,this.ir=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.rr=this.ur.bind(this),this.ar=new Ge(L),this.started=!1,this.cr=[];const s=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.hr=so(this.persistenceKey,this.ir),this.lr=function(e){return"firestore_sequence_number_"+e}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.persistenceKey),this.ar=this.ar.insert(this.ir,new fo),this.dr=new RegExp(`^firestore_clients_${s}_([^_]*)$`),this._r=new RegExp(`^firestore_mutations_${s}_(\\d+)(?:_(.*))?$`),this.wr=new RegExp(`^firestore_targets_${s}_(\\d+)$`),this.mr=function(e){return"firestore_online_state_"+e}(this.persistenceKey),this.gr=function(e){return"firestore_bundle_loaded_v2_"+e}(this.persistenceKey),this.window.addEventListener("storage",this.rr)}static vt(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Fs();for(const n of e){if(n===this.ir)continue;const e=this.getItem(so(this.persistenceKey,n));if(e){const t=lo.tr(n,e);t&&(this.ar=this.ar.insert(t.clientId,t))}}this.yr();const t=this.storage.getItem(this.mr);if(t){const e=this.pr(t);e&&this.Ir(e)}for(const n of this.cr)this.ur(n);this.cr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.lr,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Tr(this.ar)}isActiveQueryTarget(e){let t=!1;return this.ar.forEach((n,r)=>{r.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Er(e,"pending")}updateMutationState(e,t,n){this.Er(e,t,n),this.Ar(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const n=this.storage.getItem(ao(this.persistenceKey,e));if(n){const r=uo.tr(e,n);r&&(t=r.state)}}return this.Rr.nr(e),this.yr(),t}removeLocalQueryTarget(e){this.Rr.sr(e),this.yr()}isLocalQueryTarget(e){return this.Rr.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(ao(this.persistenceKey,e))}updateQueryState(e,t,n){this.br(e,t,n)}handleUserChange(e,t,n){t.forEach(e=>{this.Ar(e)}),this.currentUser=e,n.forEach(e=>{this.addPendingMutation(e)})}setOnlineState(e){this.Pr(e)}notifyBundleLoaded(e){this.Vr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.rr),this.removeItem(this.hr),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return p("SharedClientState","READ",e,t),t}setItem(e,t){p("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){p("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ur(e){const t=e;if(t.storageArea===this.storage){if(p("SharedClientState","EVENT",t.key,t.newValue),t.key===this.hr)return void g("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Yn.enqueueRetryable(async()=>{if(this.started){if(null!==t.key)if(this.dr.test(t.key)){if(null==t.newValue){const e=this.vr(t.key);return this.Sr(e,null)}{const e=this.Dr(t.key,t.newValue);if(e)return this.Sr(e.clientId,e)}}else if(this._r.test(t.key)){if(null!==t.newValue){const e=this.Cr(t.key,t.newValue);if(e)return this.Nr(e)}}else if(this.wr.test(t.key)){if(null!==t.newValue){const e=this.kr(t.key,t.newValue);if(e)return this.Mr(e)}}else if(t.key===this.mr){if(null!==t.newValue){const e=this.pr(t.newValue);if(e)return this.Ir(e)}}else if(t.key===this.lr){const e=function(e){let t=D.A;if(null!=e)try{const n=JSON.parse(e);b("number"==typeof n),t=n}catch(e){g("SharedClientState","Failed to read sequence number from WebStorage",e)}return t}(t.newValue);e!==D.A&&this.sequenceNumberHandler(e)}else if(t.key===this.gr){const e=this.Or(t.newValue);await Promise.all(e.map(e=>this.syncEngine.Fr(e)))}}else this.cr.push(t)})}}get Rr(){return this.ar.get(this.ir)}yr(){this.setItem(this.hr,this.Rr.er())}Er(e,t,n){const r=new co(this.currentUser,e,t,n),i=oo(this.persistenceKey,this.currentUser,e);this.setItem(i,r.er())}Ar(e){const t=oo(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Pr(e){const t={clientId:this.ir,onlineState:e};this.storage.setItem(this.mr,JSON.stringify(t))}br(e,t,n){const r=ao(this.persistenceKey,e),i=new uo(e,t,n);this.setItem(r,i.er())}Vr(e){const t=JSON.stringify(Array.from(e));this.setItem(this.gr,t)}vr(e){const t=this.dr.exec(e);return t?t[1]:null}Dr(e,t){const n=this.vr(e);return lo.tr(n,t)}Cr(e,t){const n=this._r.exec(e),r=Number(n[1]),i=void 0!==n[2]?n[2]:null;return co.tr(new u(i),r,t)}kr(e,t){const n=this.wr.exec(e),r=Number(n[1]);return uo.tr(r,t)}pr(e){return ho.tr(e)}Or(e){return JSON.parse(e)}async Nr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.$r(e.batchId,e.state,e.error);p("SharedClientState","Ignoring mutation for non-active user "+e.user.uid)}Mr(e){return this.syncEngine.Br(e.targetId,e.state,e.error)}Sr(e,t){const n=t?this.ar.insert(e,t):this.ar.remove(e),r=this.Tr(this.ar),i=this.Tr(n),s=[],o=[];return i.forEach(e=>{r.has(e)||s.push(e)}),r.forEach(e=>{i.has(e)||o.push(e)}),this.syncEngine.Lr(s,o).then(()=>{this.ar=n})}Ir(e){this.ar.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Tr(e){let t=xn();return e.forEach((e,n)=>{t=t.unionWith(n.activeTargetIds)}),t}}class go{constructor(){this.Ur=new fo,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Ur.nr(e),this.qr[e]||"not-current"}updateQueryState(e,t,n){this.qr[e]=t}removeLocalQueryTarget(e){this.Ur.sr(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new fo,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{Kr(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(){this.Gr=()=>this.Qr(),this.jr=()=>this.Wr(),this.zr=[],this.Hr()}Kr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Gr),window.removeEventListener("offline",this.jr)}Hr(){window.addEventListener("online",this.Gr),window.addEventListener("offline",this.jr)}Qr(){p("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Wr(){p("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static vt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vo={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e){this.Jr=e.Jr,this.Yr=e.Yr}Xr(e){this.Zr=e}eo(e){this.no=e}onMessage(e){this.so=e}close(){this.Yr()}send(e){this.Jr(e)}io(){this.Zr()}ro(e){this.no(e)}oo(e){this.so(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.uo=t+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(e,t,n,r,i){const s=this.ho(e,t);p("RestConnection","Sending: ",s,n);const o={};return this.lo(o,r,i),this.fo(e,s,o,n).then(e=>(p("RestConnection","Received: ",e),e),t=>{throw m("RestConnection",e+" failed with error: ",t,"url: ",s,"request:",n),t})}_o(e,t,n,r,i){return this.co(e,t,n,r,i)}lo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+l,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}ho(e,t){const n=vo[e];return`${this.uo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,t,n,r){return new Promise((i,s)=>{const o=new a["g"];o.listenOnce(a["c"].COMPLETE,()=>{try{switch(o.getLastErrorCode()){case a["a"].NO_ERROR:const t=o.getResponseJson();p("Connection","XHR received:",JSON.stringify(t)),i(t);break;case a["a"].TIMEOUT:p("Connection",'RPC "'+e+'" timed out'),s(new T(I.DEADLINE_EXCEEDED,"Request time out"));break;case a["a"].HTTP_ERROR:const n=o.getStatus();if(p("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const e=o.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(t)>=0?t:I.UNKNOWN}(e.status);s(new T(t,e.message))}else s(new T(I.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new T(I.UNAVAILABLE,"Connection failed."));break;default:v()}}finally{p("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);o.send(t,"POST",c,n,15)})}wo(e,t,n){const r=[this.uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=Object(a["h"])(),s=Object(a["i"])(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new a["d"]({})),this.lo(c.initMessageHeaders,t,n),Object(o["t"])()||Object(o["v"])()||Object(o["p"])()||Object(o["r"])()||Object(o["x"])()||Object(o["o"])()||(c.httpHeadersOverwriteParam="$httpHeaders");const u=r.join("");p("Connection","Creating WebChannel: "+u,c);const l=i.createWebChannel(u,c);let h=!1,d=!1;const f=new bo({Jr:e=>{d?p("Connection","Not sending because WebChannel is closed:",e):(h||(p("Connection","Opening WebChannel transport."),l.open(),h=!0),p("Connection","WebChannel sending:",e),l.send(e))},Yr:()=>l.close()}),g=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return g(l,a["f"].EventType.OPEN,()=>{d||p("Connection","WebChannel transport opened.")}),g(l,a["f"].EventType.CLOSE,()=>{d||(d=!0,p("Connection","WebChannel transport closed"),f.ro())}),g(l,a["f"].EventType.ERROR,e=>{d||(d=!0,m("Connection","WebChannel transport errored:",e),f.ro(new T(I.UNAVAILABLE,"The operation could not be completed")))}),g(l,a["f"].EventType.MESSAGE,e=>{var t;if(!d){const n=e.data[0];b(!!n);const r=n,i=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(i){p("Connection","WebChannel received error:",i);const e=i.status;let t=function(e){const t=mn[e];if(void 0!==t)return bn(t)}(e),n=i.message;void 0===t&&(t=I.INTERNAL,n="Unknown error status: "+e+" with message "+i.message),d=!0,f.ro(new T(t,n)),l.close()}else p("Connection","WebChannel received:",n),f.oo(n)}}),g(s,a["b"].STAT_EVENT,e=>{e.stat===a["e"].PROXY?p("Connection","Detected buffering proxy"):e.stat===a["e"].NOPROXY&&p("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.io()},0),f}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(){return"undefined"!=typeof window?window:null}function Io(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(e){return new Bn(e,!0)}class Eo{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Yn=e,this.timerId=t,this.mo=n,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const t=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),r=Math.max(0,t-n);r>0&&p("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.To=this.Yn.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e,t,n,r,i,s,o,a){this.Yn=e,this.Vo=n,this.vo=r,this.So=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new Eo(e,t)}ko(){return 1===this.state||5===this.state||this.Mo()}Mo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Mo()&&null===this.Co&&(this.Co=this.Yn.enqueueAfterDelay(this.Vo,6e4,()=>this.Bo()))}Lo(e){this.Uo(),this.stream.send(e)}async Bo(){if(this.Mo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(e,t){this.Uo(),this.qo(),this.No.cancel(),this.Do++,4!==e?this.No.reset():t&&t.code===I.RESOURCE_EXHAUSTED?(g(t.toString()),g("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):t&&t.code===I.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Ko(),this.stream.close(),this.stream=null),this.state=e,await this.listener.eo(t)}Ko(){}auth(){this.state=1;const e=this.Go(this.Do),t=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.Do===t&&this.Qo(e,n)},t=>{e(()=>{const e=new T(I.UNKNOWN,"Fetching auth token failed: "+t.message);return this.jo(e)})})}Qo(e,t){const n=this.Go(this.Do);this.stream=this.Wo(e,t),this.stream.Xr(()=>{n(()=>(this.state=2,this.xo=this.Yn.enqueueAfterDelay(this.vo,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.eo(e=>{n(()=>this.jo(e))}),this.stream.onMessage(e=>{n(()=>this.onMessage(e))})}Oo(){this.state=5,this.No.Ro(async()=>{this.state=0,this.start()})}jo(e){return p("PersistentStream","close with error: "+e),this.stream=null,this.close(4,e)}Go(e){return t=>{this.Yn.enqueueAndForget(()=>this.Do===e?t():(p("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Oo extends So{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.M=i}Wo(e,t){return this.So.wo("Listen",e,t)}onMessage(e){this.No.reset();const t=ir(this.M,e),n=function(e){if(!("targetChange"in e))return V.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?V.min():t.readTime?$n(t.readTime):V.min()}(e);return this.listener.zo(t,n)}Ho(e){const t={};t.database=Zn(this.M),t.addTarget=function(e,t){let n;const r=t.target;return n=et(r)?{documents:cr(e,r)}:{query:ur(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=Kn(e,t.resumeToken):t.snapshotVersion.compareTo(V.min())>0&&(n.readTime=Gn(e,t.snapshotVersion.toTimestamp())),n}(this.M,e);const n=hr(this.M,e);n&&(t.labels=n),this.Lo(t)}Jo(e){const t={};t.database=Zn(this.M),t.removeTarget=e,this.Lo(t)}}class ko extends So{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.M=i,this.Yo=!1}get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(e,t){return this.So.wo("Write",e,t)}onMessage(e){if(b(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Yo){this.No.reset();const t=ar(e.writeResults,e.commitTime),n=$n(e.commitTime);return this.listener.tu(n,t)}return b(!e.writeResults||0===e.writeResults.length),this.Yo=!0,this.listener.eu()}nu(){const e={};e.database=Zn(this.M),this.Lo(e)}Zo(e){const t={streamToken:this.lastStreamToken,writes:e.map(e=>sr(this.M,e))};this.Lo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.So=n,this.M=r,this.su=!1}iu(){if(this.su)throw new T(I.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,t,n){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.So.co(e,t,n,r,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new T(I.UNKNOWN,e.toString())})}_o(e,t,n){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.So._o(e,t,n,r,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new T(I.UNKNOWN,e.toString())})}terminate(){this.su=!0}}class Co{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}au(){0===this.ru&&(this.cu("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}lu(e){"Online"===this.state?this.cu("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu("Connection failed 1 times. Most recent error: "+e.toString()),this.cu("Offline")))}set(e){this.fu(),this.ru=0,"Online"===e&&(this.uu=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}hu(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(g(t),this.uu=!1):p("OnlineStateTracker",t)}fu(){null!==this.ou&&(this.ou.cancel(),this.ou=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=i,this.gu.Kr(e=>{n.enqueueAndForget(async()=>{Uo(this)&&(p("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=_(e);t.wu.add(4),await No(t),t.yu.set("Unknown"),t.wu.delete(4),await Ro(t)}(this))})}),this.yu=new Co(n,r)}}async function Ro(e){if(Uo(e))for(const t of e.mu)await t(!0)}async function No(e){for(const t of e.mu)await t(!1)}function Do(e,t){const n=_(e);n._u.has(t.targetId)||(n._u.set(t.targetId,t),Fo(n)?Mo(n):ra(n).Mo()&&jo(n,t))}function Po(e,t){const n=_(e),r=ra(n);n._u.delete(t),r.Mo()&&Lo(n,t),0===n._u.size&&(r.Mo()?r.$o():Uo(n)&&n.yu.set("Unknown"))}function jo(e,t){e.pu.Z(t.targetId),ra(e).Ho(t)}function Lo(e,t){e.pu.Z(t),ra(e).Jo(t)}function Mo(e){e.pu=new Mn({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>e._u.get(t)||null}),ra(e).start(),e.yu.au()}function Fo(e){return Uo(e)&&!ra(e).ko()&&e._u.size>0}function Uo(e){return 0===_(e).wu.size}function Vo(e){e.pu=void 0}async function qo(e){e._u.forEach((t,n)=>{jo(e,t)})}async function Bo(e,t){Vo(e),Fo(e)?(e.yu.lu(t),Mo(e)):e.yu.set("Unknown")}async function Go(e,t,n){if(e.yu.set("Online"),t instanceof jn&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e._u.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e._u.delete(r),e.pu.removeTarget(r))}(e,t)}catch(n){p("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Ko(e,n)}else if(t instanceof Dn?e.pu.ut(t):t instanceof Pn?e.pu._t(t):e.pu.ht(t),!n.isEqual(V.min()))try{const t=await Ls(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.pu.yt(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e._u.get(r);i&&e._u.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach(t=>{const n=e._u.get(t);if(!n)return;e._u.set(t,n.withResumeToken(Y.EMPTY_BYTE_STRING,n.snapshotVersion)),Lo(e,t);const r=new li(n.target,t,1,n.sequenceNumber);jo(e,r)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){p("RemoteStore","Failed to raise snapshot:",t),await Ko(e,t)}}async function Ko(e,t,n){if(!ei(t))throw t;e.wu.add(1),await No(e),e.yu.set("Offline"),n||(n=()=>Ls(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{p("RemoteStore","Retrying IndexedDB access"),await n(),e.wu.delete(1),await Ro(e)})}function zo(e,t){return t().catch(n=>Ko(e,n,t))}async function $o(e){const t=_(e),n=ia(t);let r=t.du.length>0?t.du[t.du.length-1].batchId:-1;for(;Wo(t);)try{const e=await Us(t.localStore,r);if(null===e){0===t.du.length&&n.$o();break}r=e.batchId,Ho(t,e)}catch(e){await Ko(t,e)}Qo(t)&&Yo(t)}function Wo(e){return Uo(e)&&e.du.length<10}function Ho(e,t){e.du.push(t);const n=ia(e);n.Mo()&&n.Xo&&n.Zo(t.mutations)}function Qo(e){return Uo(e)&&!ia(e).ko()&&e.du.length>0}function Yo(e){ia(e).start()}async function Jo(e){ia(e).nu()}async function Xo(e){const t=ia(e);for(const n of e.du)t.Zo(n.mutations)}async function Zo(e,t,n){const r=e.du.shift(),i=ci.from(r,t,n);await zo(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await $o(e)}async function ea(e,t){t&&ia(e).Xo&&await async function(e,t){if(n=t.code,vn(n)&&n!==I.ABORTED){const n=e.du.shift();ia(e).Fo(),await zo(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await $o(e)}var n}(e,t),Qo(e)&&Yo(e)}async function ta(e,t){const n=_(e);n.asyncQueue.verifyOperationInProgress(),p("RemoteStore","RemoteStore received new credentials");const r=Uo(n);n.wu.add(3),await No(n),r&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.wu.delete(3),await Ro(n)}async function na(e,t){const n=_(e);t?(n.wu.delete(2),await Ro(n)):t||(n.wu.add(2),await No(n),n.yu.set("Unknown"))}function ra(e){return e.Iu||(e.Iu=function(e,t,n){const r=_(e);return r.iu(),new Oo(t,r.So,r.authCredentials,r.appCheckCredentials,r.M,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{Xr:qo.bind(null,e),eo:Bo.bind(null,e),zo:Go.bind(null,e)}),e.mu.push(async t=>{t?(e.Iu.Fo(),Fo(e)?Mo(e):e.yu.set("Unknown")):(await e.Iu.stop(),Vo(e))})),e.Iu}function ia(e){return e.Tu||(e.Tu=function(e,t,n){const r=_(e);return r.iu(),new ko(t,r.So,r.authCredentials,r.appCheckCredentials,r.M,n)}(e.datastore,e.asyncQueue,{Xr:Jo.bind(null,e),eo:ea.bind(null,e),eu:Xo.bind(null,e),tu:Zo.bind(null,e)}),e.mu.push(async t=>{t?(e.Tu.Fo(),await $o(e)):(await e.Tu.stop(),e.du.length>0&&(p("RemoteStore",`Stopping write stream with ${e.du.length} pending writes`),e.du=[]))})),e.Tu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class sa{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new E,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new sa(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new T(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function oa(e,t){if(g("AsyncQueue",`${t}: ${e}`),ei(e))return new T(I.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e){this.comparator=e?(t,n)=>e(t,n)||ue.comparator(t.key,n.key):(e,t)=>ue.comparator(e.key,t.key),this.keyedMap=En(),this.sortedSet=new Ge(this.comparator)}static emptySet(e){return new aa(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof aa))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new aa;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(){this.Eu=new Ge(ue.comparator)}track(e){const t=e.doc.key,n=this.Eu.get(t);n?0!==e.type&&3===n.type?this.Eu=this.Eu.insert(t,e):3===e.type&&1!==n.type?this.Eu=this.Eu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Eu=this.Eu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Eu=this.Eu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Eu=this.Eu.remove(t):1===e.type&&2===n.type?this.Eu=this.Eu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Eu=this.Eu.insert(t,{type:2,doc:e.doc}):v():this.Eu=this.Eu.insert(t,e)}Au(){const e=[];return this.Eu.inorderTraversal((t,n)=>{e.push(n)}),e}}class ua{constructor(e,t,n,r,i,s,o,a){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(e,t,n,r){const i=[];return t.forEach(e=>{i.push({type:0,doc:e})}),new ua(e,t,aa.emptySet(t),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&At(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(){this.Ru=void 0,this.listeners=[]}}class ha{constructor(){this.queries=new wn(e=>Ct(e),At),this.onlineState="Unknown",this.bu=new Set}}async function da(e,t){const n=_(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new la),i)try{s.Ru=await n.onListen(r)}catch(e){const n=oa(e,`Initialization of query '${xt(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.listeners.push(t),t.Pu(n.onlineState),s.Ru&&t.Vu(s.Ru)&&ma(n)}async function fa(e,t){const n=_(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function pa(e,t){const n=_(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.Vu(i)&&(r=!0);t.Ru=i}}r&&ma(n)}function ga(e,t,n){const r=_(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function ma(e){e.bu.forEach(e=>{e.next()})}class ya{constructor(e,t,n){this.query=e,this.vu=t,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=n||{}}Vu(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new ua(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.Su?this.Cu(e)&&(this.vu.next(e),t=!0):this.xu(e,this.onlineState)&&(this.Nu(e),t=!0),this.Du=e,t}onError(e){this.vu.error(e)}Pu(e){this.onlineState=e;let t=!1;return this.Du&&!this.Su&&this.xu(this.Du,e)&&(this.Nu(this.Du),t=!0),t}xu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.ku||!n)&&(!e.docs.isEmpty()||"Offline"===t)}Cu(e){if(e.docChanges.length>0)return!0;const t=this.Du&&this.Du.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Nu(e){e=ua.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.Su=!0,this.vu.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e,t){this.payload=e,this.byteLength=t}Mu(){return"metadata"in this.payload}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e){this.M=e}wi(e){return Yn(this.M,e)}mi(e){return e.metadata.exists?nr(this.M,e.document,!1):De.newNoDocument(this.wi(e.metadata.name),this.gi(e.metadata.readTime))}gi(e){return $n(e)}}class wa{constructor(e,t,n){this.Ou=e,this.localStore=t,this.M=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=_a(e)}Fu(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.payload.namedQuery)this.queries.push(e.payload.namedQuery);else if(e.payload.documentMetadata){this.documents.push({metadata:e.payload.documentMetadata}),e.payload.documentMetadata.exists||++t;const n=z.fromString(e.payload.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.payload.document&&(this.documents[this.documents.length-1].document=e.payload.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}$u(e){const t=new Map,n=new ba(this.M);for(const r of e)if(r.metadata.queries){const e=n.wi(r.metadata.name);for(const n of r.metadata.queries){const r=(t.get(n)||An()).add(e);t.set(n,r)}}return t}async complete(){const e=await $s(this.localStore,new ba(this.M),this.documents,this.Ou.id),t=this.$u(this.documents);for(const n of this.queries)await Ws(this.localStore,n,t.get(n.name));return this.progress.taskState="Success",{progress:this.progress,Bu:this.collectionGroups,Lu:e}}}function _a(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e){this.key=e}}class Ta{constructor(e){this.key=e}}class Ea{constructor(e,t){this.query=e,this.Uu=t,this.qu=null,this.current=!1,this.Ku=An(),this.mutatedKeys=An(),this.Gu=Dt(e),this.Qu=new aa(this.Gu)}get ju(){return this.Uu}Wu(e,t){const n=t?t.zu:new ca,r=t?t.Qu:this.Qu;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{const u=r.get(e),l=Rt(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Hu(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Gu(l,a)>0||c&&this.Gu(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Qu:s,zu:n,ii:o,mutatedKeys:i}}Hu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Au();i.sort((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return v()}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.Gu(e.doc,t.doc)),this.Ju(n);const s=t?this.Yu():[],o=0===this.Ku.size&&this.current?1:0,a=o!==this.qu;return this.qu=o,0!==i.length||a?{snapshot:new ua(this.query,e.Qu,r,i,e.mutatedKeys,0===o,a,!1),Xu:s}:{Xu:s}}Pu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new ca,mutatedKeys:this.mutatedKeys,ii:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(e=>this.Uu=this.Uu.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.Uu=this.Uu.delete(e)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=An(),this.Qu.forEach(e=>{this.Zu(e.key)&&(this.Ku=this.Ku.add(e.key))});const t=[];return e.forEach(e=>{this.Ku.has(e)||t.push(new Ta(e))}),this.Ku.forEach(n=>{e.has(n)||t.push(new Ia(n))}),t}ta(e){this.Uu=e._i,this.Ku=An();const t=this.Wu(e.documents);return this.applyChanges(t,!0)}ea(){return ua.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.qu)}}class Sa{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Oa{constructor(e){this.key=e,this.na=!1}}class ka{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.sa={},this.ia=new wn(e=>Ct(e),At),this.ra=new Map,this.oa=new Set,this.ua=new Ge(ue.comparator),this.aa=new Map,this.ca=new Ys,this.ha={},this.la=new Map,this.fa=ns.yn(),this.onlineState="Unknown",this.da=void 0}get isPrimaryClient(){return!0===this.da}}async function Aa(e,t){const n=rc(e);let r,i;const s=n.ia.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ea();else{const e=await Vs(n.localStore,Ot(t));n.isPrimaryClient&&Do(n.remoteStore,e);const s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await Ca(n,t,r,"current"===s)}return i}async function Ca(e,t,n,r){e._a=(t,n,r)=>async function(e,t,n,r){let i=t.view.Wu(n);i.ii&&(i=await Bs(e.localStore,t.query,!1).then(({documents:e})=>t.view.Wu(e,i)));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return Ba(e,t.targetId,o.Xu),o.snapshot}(e,t,n,r);const i=await Bs(e.localStore,t,!0),s=new Ea(t,i._i),o=s.Wu(i.documents),a=Nn.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState),c=s.applyChanges(o,e.isPrimaryClient,a);Ba(e,n,c.Xu);const u=new Sa(t,n,s);return e.ia.set(t,u),e.ra.has(n)?e.ra.get(n).push(t):e.ra.set(n,[t]),c.snapshot}async function xa(e,t){const n=_(e),r=n.ia.get(t),i=n.ra.get(r.targetId);if(i.length>1)return n.ra.set(r.targetId,i.filter(e=>!At(e,t))),void n.ia.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await qs(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Po(n.remoteStore,r.targetId),Va(n,r.targetId)}).catch(as)):(Va(n,r.targetId),await qs(n.localStore,r.targetId,!0))}async function Ra(e,t,n){const r=ic(e);try{const e=await function(e,t){const n=_(e),r=U.now(),i=t.reduce((e,t)=>e.add(t.key),An());let s;return n.persistence.runTransaction("Locally write mutations","readwrite",e=>n.fi.Ks(e,i).next(i=>{s=i;const o=[];for(const e of t){const t=sn(e,s.get(e.key));null!=t&&o.push(new un(e.key,t,Ne(t.value.mapValue),Zt.exists(!0)))}return n.Bs.addMutationBatch(e,r,o,t)})).then(e=>(e.applyToLocalDocumentSet(s),{batchId:e.batchId,changes:s}))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.ha[e.currentUser.toKey()];r||(r=new Ge(L)),r=r.insert(t,n),e.ha[e.currentUser.toKey()]=r}(r,e.batchId,n),await za(r,e.changes),await $o(r.remoteStore)}catch(e){const t=oa(e,"Failed to persist write");n.reject(t)}}async function Na(e,t){const n=_(e);try{const e=await Ms(n.localStore,t);t.targetChanges.forEach((e,t)=>{const r=n.aa.get(t);r&&(b(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.na=!0:e.modifiedDocuments.size>0?b(r.na):e.removedDocuments.size>0&&(b(r.na),r.na=!1))}),await za(n,e,t)}catch(e){await as(e)}}function Da(e,t,n){const r=_(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.ia.forEach((n,r)=>{const i=r.view.Pu(t);i.snapshot&&e.push(i.snapshot)}),function(e,t){const n=_(e);n.onlineState=t;let r=!1;n.queries.forEach((e,n)=>{for(const i of n.listeners)i.Pu(t)&&(r=!0)}),r&&ma(n)}(r.eventManager,t),e.length&&r.sa.zo(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Pa(e,t,n){const r=_(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.aa.get(t),s=i&&i.key;if(s){let e=new Ge(ue.comparator);e=e.insert(s,De.newNoDocument(s,V.min()));const n=An().add(s),i=new Rn(V.min(),new Map,new $e(L),e,n);await Na(r,i),r.ua=r.ua.remove(s),r.aa.delete(t),Ka(r)}else await qs(r.localStore,t,!1).then(()=>Va(r,t,n)).catch(as)}async function ja(e,t){const n=_(e),r=t.batch.batchId;try{const e=await js(n.localStore,t);Ua(n,r,null),Fa(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await za(n,e)}catch(e){await as(e)}}async function La(e,t,n){const r=_(e);try{const e=await function(e,t){const n=_(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",e=>{let r;return n.Bs.lookupMutationBatch(e,t).next(t=>(b(null!==t),r=t.keys(),n.Bs.removeMutationBatch(e,t))).next(()=>n.Bs.performConsistencyCheck(e)).next(()=>n.fi.Ks(e,r))})}(r.localStore,t);Ua(r,t,n),Fa(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await za(r,e)}catch(n){await as(n)}}async function Ma(e,t){const n=_(e);Uo(n.remoteStore)||p("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const e=await function(e){const t=_(e);return t.persistence.runTransaction("Get highest unacknowledged batch id","readonly",e=>t.Bs.getHighestUnacknowledgedBatchId(e))}(n.localStore);if(-1===e)return void t.resolve();const r=n.la.get(e)||[];r.push(t),n.la.set(e,r)}catch(e){const n=oa(e,"Initialization of waitForPendingWrites() operation failed");t.reject(n)}}function Fa(e,t){(e.la.get(t)||[]).forEach(e=>{e.resolve()}),e.la.delete(t)}function Ua(e,t,n){const r=_(e);let i=r.ha[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.ha[r.currentUser.toKey()]=i}}function Va(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.ra.get(t))e.ia.delete(r),n&&e.sa.wa(r,n);e.ra.delete(t),e.isPrimaryClient&&e.ca.vi(t).forEach(t=>{e.ca.containsKey(t)||qa(e,t)})}function qa(e,t){e.oa.delete(t.path.canonicalString());const n=e.ua.get(t);null!==n&&(Po(e.remoteStore,n),e.ua=e.ua.remove(t),e.aa.delete(n),Ka(e))}function Ba(e,t,n){for(const r of n)r instanceof Ia?(e.ca.addReference(r.key,t),Ga(e,r)):r instanceof Ta?(p("SyncEngine","Document no longer in limbo: "+r.key),e.ca.removeReference(r.key,t),e.ca.containsKey(r.key)||qa(e,r.key)):v()}function Ga(e,t){const n=t.key,r=n.path.canonicalString();e.ua.get(n)||e.oa.has(r)||(p("SyncEngine","New document in limbo: "+n),e.oa.add(r),Ka(e))}function Ka(e){for(;e.oa.size>0&&e.ua.size<e.maxConcurrentLimboResolutions;){const t=e.oa.values().next().value;e.oa.delete(t);const n=new ue(z.fromString(t)),r=e.fa.next();e.aa.set(r,new Oa(n)),e.ua=e.ua.insert(n,r),Do(e.remoteStore,new li(Ot(wt(n.path)),r,2,D.A))}}async function za(e,t,n){const r=_(e),i=[],s=[],o=[];r.ia.isEmpty()||(r.ia.forEach((e,a)=>{o.push(r._a(a,t,n).then(e=>{if(e){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,e.fromCache?"not-current":"current"),i.push(e);const t=xs.Ys(a.targetId,e);s.push(t)}}))}),await Promise.all(o),r.sa.zo(i),await async function(e,t){const n=_(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>Qr.forEach(t,t=>Qr.forEach(t.Hs,r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r)).next(()=>Qr.forEach(t.Js,r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))}catch(e){if(!ei(e))throw e;p("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.ui.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.ui=n.ui.insert(e,i)}}}(r.localStore,s))}async function $a(e,t){const n=_(e);if(!n.currentUser.isEqual(t)){p("SyncEngine","User change. New user:",t.toKey());const e=await Ps(n.localStore,t);n.currentUser=t,function(e,t){e.la.forEach(e=>{e.forEach(e=>{e.reject(new T(I.CANCELLED,t))})}),e.la.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await za(n,e.di)}}function Wa(e,t){const n=_(e),r=n.aa.get(t);if(r&&r.na)return An().add(r.key);{let e=An();const r=n.ra.get(t);if(!r)return e;for(const t of r){const r=n.ia.get(t);e=e.unionWith(r.view.ju)}return e}}async function Ha(e,t){const n=_(e),r=await Bs(n.localStore,t.query,!0),i=t.view.ta(r);return n.isPrimaryClient&&Ba(n,t.targetId,i.Xu),i}async function Qa(e,t){const n=_(e);return Ks(n.localStore,t).then(e=>za(n,e))}async function Ya(e,t,n,r){const i=_(e),s=await function(e,t){const n=_(e),r=_(n.Bs);return n.persistence.runTransaction("Lookup mutation documents","readonly",e=>r.fn(e,t).next(t=>t?n.fi.Ks(e,t):Qr.resolve(null)))}(i.localStore,t);null!==s?("pending"===n?await $o(i.remoteStore):"acknowledged"===n||"rejected"===n?(Ua(i,t,r||null),Fa(i,t),function(e,t){_(_(e).Bs)._n(t)}(i.localStore,t)):v(),await za(i,s)):p("SyncEngine","Cannot apply mutation batch with id: "+t)}async function Ja(e,t){const n=_(e);if(rc(n),ic(n),!0===t&&!0!==n.da){const e=n.sharedClientState.getAllActiveQueryTargets(),t=await Xa(n,e.toArray());n.da=!0,await na(n.remoteStore,!0);for(const r of t)Do(n.remoteStore,r)}else if(!1===t&&!1!==n.da){const e=[];let t=Promise.resolve();n.ra.forEach((r,i)=>{n.sharedClientState.isLocalQueryTarget(i)?e.push(i):t=t.then(()=>(Va(n,i),qs(n.localStore,i,!0))),Po(n.remoteStore,i)}),await t,await Xa(n,e),function(e){const t=_(e);t.aa.forEach((e,n)=>{Po(t.remoteStore,n)}),t.ca.Si(),t.aa=new Map,t.ua=new Ge(ue.comparator)}(n),n.da=!1,await na(n.remoteStore,!1)}}async function Xa(e,t,n){const r=_(e),i=[],s=[];for(const o of t){let e;const t=r.ra.get(o);if(t&&0!==t.length){e=await Vs(r.localStore,Ot(t[0]));for(const e of t){const t=r.ia.get(e),n=await Ha(r,t);n.snapshot&&s.push(n.snapshot)}}else{const t=await Gs(r.localStore,o);e=await Vs(r.localStore,t),await Ca(r,Za(t),o,!1)}i.push(e)}return r.sa.zo(s),i}function Za(e){return bt(e.path,e.collectionGroup,e.orderBy,e.filters,e.limit,"F",e.startAt,e.endAt)}function ec(e){const t=_(e);return _(_(t.localStore).persistence).Fs()}async function tc(e,t,n,r){const i=_(e);if(i.da)return void p("SyncEngine","Ignoring unexpected query state notification.");const s=i.ra.get(t);if(s&&s.length>0)switch(n){case"current":case"not-current":{const e=await Ks(i.localStore,Nt(s[0])),r=Rn.createSynthesizedRemoteEventForCurrentChange(t,"current"===n);await za(i,e,r);break}case"rejected":await qs(i.localStore,t,!0),Va(i,t,r);break;default:v()}}async function nc(e,t,n){const r=rc(e);if(r.da){for(const e of t){if(r.ra.has(e)){p("SyncEngine","Adding an already active target "+e);continue}const t=await Gs(r.localStore,e),n=await Vs(r.localStore,t);await Ca(r,Za(t),n.targetId,!1),Do(r.remoteStore,n)}for(const e of n)r.ra.has(e)&&await qs(r.localStore,e,!1).then(()=>{Po(r.remoteStore,e),Va(r,e)}).catch(as)}}function rc(e){const t=_(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Na.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Wa.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Pa.bind(null,t),t.sa.zo=pa.bind(null,t.eventManager),t.sa.wa=ga.bind(null,t.eventManager),t}function ic(e){const t=_(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=ja.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=La.bind(null,t),t}function sc(e,t,n){const r=_(e);(async function(e,t,n){try{const r=await t.getMetadata();if(await function(e,t){const n=_(e),r=$n(t.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",e=>n._s.getBundleMetadata(e,t.id)).then(e=>!!e&&e.createTime.compareTo(r)>=0)}(e.localStore,r))return await t.close(),n._completeWith(function(e){return{taskState:"Success",documentsLoaded:e.totalDocuments,bytesLoaded:e.totalBytes,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}(r)),Promise.resolve(new Set);n._updateProgress(_a(r));const i=new wa(r,e.localStore,t.M);let s=await t.ma();for(;s;){const e=await i.Fu(s);e&&n._updateProgress(e),s=await t.ma()}const o=await i.complete();return await za(e,o.Lu,void 0),await function(e,t){const n=_(e);return n.persistence.runTransaction("Save bundle","readwrite",e=>n._s.saveBundleMetadata(e,t))}(e.localStore,r),n._completeWith(o.progress),Promise.resolve(o.Bu)}catch(e){return m("SyncEngine","Loading bundle failed with "+e),n._failWith(e),Promise.resolve(new Set)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(r,t,n).then(e=>{r.sharedClientState.notifyBundleLoaded(e)})}class oc{constructor(){this.synchronizeTabs=!1}async initialize(e){this.M=To(e.databaseInfo.databaseId),this.sharedClientState=this.ga(e),this.persistence=this.ya(e),await this.persistence.start(),this.gcScheduler=this.pa(e),this.localStore=this.Ia(e)}pa(e){return null}Ia(e){return Ds(this.persistence,new Rs,e.initialUser,this.M)}ya(e){return new no(io.Yi,this.M)}ga(e){return new go}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ac extends oc{constructor(e,t,n){super(),this.Ta=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ta.initialize(this,e),await ic(this.Ta.syncEngine),await $o(this.Ta.remoteStore),await this.persistence.Ts(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(this.localStore),Promise.resolve()))}Ia(e){return Ds(this.persistence,new Rs,e.initialUser,this.M)}pa(e){const t=this.persistence.referenceDelegate.garbageCollector;return new ls(t,e.asyncQueue)}ya(e){const t=As(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?Hi.withCacheSize(this.cacheSizeBytes):Hi.DEFAULT;return new Ss(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,_o(),Io(),this.M,this.sharedClientState,!!this.forceOwnership)}ga(e){return new go}}class cc extends ac{constructor(e,t){super(e,t,!1),this.Ta=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ta.syncEngine;this.sharedClientState instanceof po&&(this.sharedClientState.syncEngine={$r:Ya.bind(null,t),Br:tc.bind(null,t),Lr:nc.bind(null,t),Fs:ec.bind(null,t),Fr:Qa.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Ts(async e=>{await Ja(this.Ta.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start(this.localStore):e||this.gcScheduler.stop())})}ga(e){const t=_o();if(!po.vt(t))throw new T(I.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=As(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new po(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class uc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Da(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=$a.bind(null,this.syncEngine),await na(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new ha}createDatastore(e){const t=To(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new wo(r));var r;return function(e,t,n,r){return new Ao(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>Da(this.syncEngine,e,0),s=yo.vt()?new yo:new mo,new xo(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new ka(e,t,n,r,i,s);return o&&(a.da=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=_(e);p("RemoteStore","RemoteStore shutting down."),t.wu.add(5),await No(t),t.gu.shutdown(),t.yu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lc(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){const r={value:e.slice(n,n+t),done:!1};return n+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ea(this.observer.next,e)}error(e){this.observer.error?this.Ea(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Aa(){this.muted=!0}Ea(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e,t){this.Ra=e,this.M=t,this.metadata=new E,this.buffer=new Uint8Array,this.ba=new TextDecoder("utf-8"),this.Pa().then(e=>{e&&e.Mu()?this.metadata.resolve(e.payload.metadata):this.metadata.reject(new Error("The first element of the bundle is not a metadata, it is\n             "+JSON.stringify(null==e?void 0:e.payload)))},e=>this.metadata.reject(e))}close(){return this.Ra.cancel()}async getMetadata(){return this.metadata.promise}async ma(){return await this.getMetadata(),this.Pa()}async Pa(){const e=await this.Va();if(null===e)return null;const t=this.ba.decode(e),n=Number(t);isNaN(n)&&this.va(`length string (${t}) is not valid number`);const r=await this.Sa(n);return new va(JSON.parse(r),e.length+n)}Da(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Va(){for(;this.Da()<0;)if(await this.Ca())break;if(0===this.buffer.length)return null;const e=this.Da();e<0&&this.va("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Sa(e){for(;this.buffer.length<e;)await this.Ca()&&this.va("Reached the end of bundle when more is expected.");const t=this.ba.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}va(e){throw this.Ra.cancel(),new Error("Invalid bundle format: "+e)}async Ca(){const e=await this.Ra.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new T(I.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(e,t){const n=_(e),r=Zn(n.M)+"/documents",i={documents:t.map(e=>Qn(n.M,e))},s=await n._o("BatchGetDocuments",r,i),o=new Map;s.forEach(e=>{const t=rr(n.M,e);o.set(t.key.toString(),t)});const a=[];return t.forEach(e=>{const t=o.get(e.toString());b(!!t),a.push(t)}),a}(this.datastore,e);return t.forEach(e=>this.recordVersion(e)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastWriteError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new fn(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((e,t)=>{const n=ue.fromPath(t);this.mutations.push(new pn(n,this.precondition(n)))}),await async function(e,t){const n=_(e),r=Zn(n.M)+"/documents",i={writes:t.map(e=>sr(n.M,e))};await n.co("Commit",r,i)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw v();t=V.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new T(I.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?Zt.updateTime(t):Zt.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(V.min()))throw new T(I.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Zt.updateTime(t)}return Zt.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e,t,n,r,i){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=r,this.deferred=i,this.xa=n.maxAttempts,this.No=new Eo(this.asyncQueue,"transaction_retry")}run(){this.xa-=1,this.Na()}Na(){this.No.Ro(async()=>{const e=new fc(this.datastore),t=this.ka(e);t&&t.then(t=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(t)}).catch(e=>{this.Ma(e)}))}).catch(e=>{this.Ma(e)})})}ka(e){try{const t=this.updateFunction(e);return!oe(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}Ma(e){this.xa>0&&this.Oa(e)?(this.xa-=1,this.asyncQueue.enqueueAndForget(()=>(this.Na(),Promise.resolve()))):this.deferred.reject(e)}Oa(e){if("FirebaseError"===e.name){const t=e.code;return"aborted"===t||"failed-precondition"===t||!vn(t)}return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=u.UNAUTHENTICATED,this.clientId=j.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async e=>{p("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(p("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new T(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new E;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=oa(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function mc(e,t){e.asyncQueue.verifyOperationInProgress(),p("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await Ps(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function yc(e,t){e.asyncQueue.verifyOperationInProgress();const n=await vc(e);p("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(e=>ta(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>ta(t.remoteStore,n)),e.onlineComponents=t}async function vc(e){return e.offlineComponents||(p("FirestoreClient","Using default OfflineComponentProvider"),await mc(e,new oc)),e.offlineComponents}async function bc(e){return e.onlineComponents||(p("FirestoreClient","Using default OnlineComponentProvider"),await yc(e,new uc)),e.onlineComponents}function wc(e){return vc(e).then(e=>e.persistence)}function _c(e){return vc(e).then(e=>e.localStore)}function Ic(e){return bc(e).then(e=>e.remoteStore)}function Tc(e){return bc(e).then(e=>e.syncEngine)}async function Ec(e){const t=await bc(e),n=t.eventManager;return n.onListen=Aa.bind(null,t.syncEngine),n.onUnlisten=xa.bind(null,t.syncEngine),n}function Sc(e){return e.asyncQueue.enqueue(async()=>{const t=await wc(e),n=await Ic(e);return t.setNetworkEnabled(!0),function(e){const t=_(e);return t.wu.delete(0),Ro(t)}(n)})}function Oc(e){return e.asyncQueue.enqueue(async()=>{const t=await wc(e),n=await Ic(e);return t.setNetworkEnabled(!1),async function(e){const t=_(e);t.wu.add(0),await No(t),t.yu.set("Offline")}(n)})}function kc(e,t){const n=new E;return e.asyncQueue.enqueueAndForget(async()=>async function(e,t,n){try{const r=await function(e,t){const n=_(e);return n.persistence.runTransaction("read document","readonly",e=>n.fi.Ls(e,t))}(e,t);r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new T(I.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(e){const r=oa(e,`Failed to get document '${t} from cache`);n.reject(r)}}(await _c(e),t,n)),n.promise}function Ac(e,t,n={}){const r=new E;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,r,i){const s=new hc({next:s=>{t.enqueueAndForget(()=>fa(e,o));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new T(I.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new T(I.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),o=new ya(wt(n.path),s,{includeMetadataChanges:!0,ku:!0});return da(e,o)}(await Ec(e),e.asyncQueue,t,n,r)),r.promise}function Cc(e,t){const n=new E;return e.asyncQueue.enqueueAndForget(async()=>async function(e,t,n){try{const r=await Bs(e,t,!0),i=new Ea(t,r._i),s=i.Wu(r.documents),o=i.applyChanges(s,!1);n.resolve(o.snapshot)}catch(e){const r=oa(e,`Failed to execute query '${t} against cache`);n.reject(r)}}(await _c(e),t,n)),n.promise}function xc(e,t,n={}){const r=new E;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,r,i){const s=new hc({next:n=>{t.enqueueAndForget(()=>fa(e,o)),n.fromCache&&"server"===r.source?i.reject(new T(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new ya(n,s,{includeMetadataChanges:!0,ku:!0});return da(e,o)}(await Ec(e),e.asyncQueue,t,n,r)),r.promise}function Rc(e,t){const n=new hc(t);return e.asyncQueue.enqueueAndForget(async()=>function(e,t){_(e).bu.add(t),t.next()}(await Ec(e),n)),()=>{n.Aa(),e.asyncQueue.enqueueAndForget(async()=>function(e,t){_(e).bu.delete(t)}(await Ec(e),n))}}function Nc(e,t,n){const r=new E;return e.asyncQueue.enqueueAndForget(async()=>{const i=await function(e){return bc(e).then(e=>e.datastore)}(e);new pc(e.asyncQueue,i,n,t,r).run()}),r.promise}function Dc(e,t,n,r){const i=function(e,t){let n;return n="string"==typeof e?(new TextEncoder).encode(e):e,function(e,t){return new dc(e,t)}(function(e,t){if(e instanceof Uint8Array)return lc(e,t);if(e instanceof ArrayBuffer)return lc(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n,To(t));e.asyncQueue.enqueueAndForget(async()=>{sc(await Tc(e),i,r)})}function Pc(e,t){return e.asyncQueue.enqueue(async()=>function(e,t){const n=_(e);return n.persistence.runTransaction("Get named query","readonly",e=>n._s.getNamedQuery(e,t))}(await _c(e),t))}const jc=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc(e,t,n){if(!n)throw new T(I.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Mc(e,t,n,r){if(!0===t&&!0===r)throw new T(I.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Fc(e){if(!ue.isDocumentKey(e))throw new T(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Uc(e){if(ue.isDocumentKey(e))throw new T(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Vc(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=e.substring(0,20)+"..."),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":v()}function qc(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new T(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Vc(e);throw new T(I.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function Bc(e,t){if(t<=0)throw new T(I.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new T(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new T(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Mc("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e,t,n){this._authCredentials=t,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Gc({}),this._settingsFrozen=!1,e instanceof se?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new T(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new se(e.options.projectId)}(e))}get app(){if(!this._app)throw new T(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new T(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Gc(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new O;switch(e.type){case"gapi":const t=e.client;return b(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new x(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new T(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=jc.get(e);t&&(p("ComponentProvider","Removing Datastore"),jc.delete(e),t.terminate())}(this),Promise.resolve()}}function zc(e,t,n,r={}){var i;const s=(e=qc(e,Kc))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==t&&m("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=u.MOCK_USER;else{t=Object(o["g"])(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new T(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new u(s)}e._authCredentials=new k(new S(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Hc(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $c(this.firestore,e,this._key)}}class Wc{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Wc(this.firestore,e,this._query)}}class Hc extends Wc{constructor(e,t,n){super(e,t,wt(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $c(this.firestore,null,new ue(e))}withConverter(e){return new Hc(this.firestore,e,this._path)}}function Qc(e,t,...n){if(e=Object(o["l"])(e),Lc("collection","path",t),e instanceof Kc){const r=z.fromString(t,...n);return Uc(r),new Hc(e,null,r)}{if(!(e instanceof $c||e instanceof Hc))throw new T(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(z.fromString(t,...n));return Uc(r),new Hc(e.firestore,null,r)}}function Yc(e,t){if(e=qc(e,Kc),Lc("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new T(I.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Wc(e,null,function(e){return new vt(z.emptyPath(),e)}(t))}function Jc(e,t,...n){if(e=Object(o["l"])(e),1===arguments.length&&(t=j.R()),Lc("doc","path",t),e instanceof Kc){const r=z.fromString(t,...n);return Fc(r),new $c(e,null,new ue(r))}{if(!(e instanceof $c||e instanceof Hc))throw new T(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(z.fromString(t,...n));return Fc(r),new $c(e.firestore,e instanceof Hc?e.converter:null,new ue(r))}}function Xc(e,t){return e=Object(o["l"])(e),t=Object(o["l"])(t),(e instanceof $c||e instanceof Hc)&&(t instanceof $c||t instanceof Hc)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function Zc(e,t){return e=Object(o["l"])(e),t=Object(o["l"])(t),e instanceof Wc&&t instanceof Wc&&e.firestore===t.firestore&&At(e._query,t._query)&&e.converter===t.converter
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class eu{constructor(){this.Fa=Promise.resolve(),this.$a=[],this.Ba=!1,this.La=[],this.Ua=null,this.qa=!1,this.Ka=!1,this.Ga=[],this.No=new Eo(this,"async_queue_retry"),this.Qa=()=>{const e=Io();e&&p("AsyncQueue","Visibility state changed to "+e.visibilityState),this.No.Po()};const e=Io();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Qa)}get isShuttingDown(){return this.Ba}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ja(),this.Wa(e)}enterRestrictedMode(e){if(!this.Ba){this.Ba=!0,this.Ka=e||!1;const t=Io();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Qa)}}enqueue(e){if(this.ja(),this.Ba)return new Promise(()=>{});const t=new E;return this.Wa(()=>this.Ba&&this.Ka?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.$a.push(e),this.za()))}async za(){if(0!==this.$a.length){try{await this.$a[0](),this.$a.shift(),this.No.reset()}catch(e){if(!ei(e))throw e;p("AsyncQueue","Operation failed with retryable error: "+e)}this.$a.length>0&&this.No.Ro(()=>this.za())}}Wa(e){const t=this.Fa.then(()=>(this.qa=!0,e().catch(e=>{this.Ua=e,this.qa=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw g("INTERNAL UNHANDLED ERROR: ",t),e}).then(e=>(this.qa=!1,e))));return this.Fa=t,t}enqueueAfterDelay(e,t,n){this.ja(),this.Ga.indexOf(e)>-1&&(t=0);const r=sa.createAndSchedule(this,e,t,n,e=>this.Ha(e));return this.La.push(r),r}ja(){this.Ua&&v()}verifyOperationInProgress(){}async Ja(){let e;do{e=this.Fa,await e}while(e!==this.Fa)}Ya(e){for(const t of this.La)if(t.timerId===e)return!0;return!1}Xa(e){return this.Ja().then(()=>{this.La.sort((e,t)=>e.targetTimeMs-t.targetTimeMs);for(const t of this.La)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Ja()})}Za(e){this.Ga.push(e)}Ha(e){const t=this.La.indexOf(e);this.La.splice(t,1)}}function tu(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,["next","error","complete"])}class nu{constructor(){this._progressObserver={},this._taskCompletionResolver=new E,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru=-1;class iu extends Kc{constructor(e,t,n){super(e,t,n),this.type="firestore",this._queue=new eu,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||ou(this),this._firestoreClient.terminate()}}function su(e){return e._firestoreClient||ou(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function ou(e){var t;const n=e._freezeSettings(),r=function(e,t,n,r){return new ie(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new gc(e._authCredentials,e._appCheckCredentials,e._queue,r)}function au(e,t){mu(e=qc(e,iu));const n=su(e),r=e._freezeSettings(),i=new uc;return uu(n,i,new ac(i,r.cacheSizeBytes,null==t?void 0:t.forceOwnership))}function cu(e){mu(e=qc(e,iu));const t=su(e),n=e._freezeSettings(),r=new uc;return uu(t,r,new cc(r,n.cacheSizeBytes))}function uu(e,t,n){const r=new E;return e.asyncQueue.enqueue(async()=>{try{await mc(e,n),await yc(e,t),r.resolve()}catch(e){if(!function(e){return"FirebaseError"===e.name?e.code===I.FAILED_PRECONDITION||e.code===I.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||(22===e.code||20===e.code||11===e.code)}(e))throw e;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+e),r.reject(e)}}).then(()=>r.promise)}function lu(e){if(e._initialized&&!e._terminated)throw new T(I.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new E;return e._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(e){if(!Jr.vt())return Promise.resolve();const t=e+"main";await Jr.delete(t)}(As(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}}),t.promise}function hu(e){return function(e){const t=new E;return e.asyncQueue.enqueueAndForget(async()=>Ma(await Tc(e),t)),t.promise}(su(e=qc(e,iu)))}function du(e){return Sc(su(e=qc(e,iu)))}function fu(e){return Oc(su(e=qc(e,iu)))}function pu(e,t){const n=su(e=qc(e,iu)),r=new nu;return Dc(n,e._databaseId,t,r),r}function gu(e,t){return Pc(su(e=qc(e,iu)),t).then(t=>t?new Wc(e,null,t.query):null)}function mu(e){if(e._initialized||e._terminated)throw new T(I.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new T(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new W(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vu{constructor(e){this._byteString=e}static fromBase64String(e){try{return new vu(Y.fromBase64String(e))}catch(e){throw new T(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new vu(Y.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new T(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new T(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return L(this._lat,e._lat)||L(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u=/^__.*__$/;class Iu{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new un(e,this.data,this.fieldMask,t,this.fieldTransforms):new cn(e,this.data,t,this.fieldTransforms)}}class Tu{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new un(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Eu(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw v()}}class Su{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.M=n,this.ignoreUndefinedProperties=r,void 0===i&&this.tc(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get ec(){return this.settings.ec}nc(e){return new Su(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}sc(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.nc({path:n,ic:!1});return r.rc(e),r}oc(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.nc({path:n,ic:!1});return r.tc(),r}uc(e){return this.nc({path:void 0,ic:!0})}ac(e){return zu(e,this.settings.methodName,this.settings.cc||!1,this.path,this.settings.hc)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}tc(){if(this.path)for(let e=0;e<this.path.length;e++)this.rc(this.path.get(e))}rc(e){if(0===e.length)throw this.ac("Document fields must not be empty");if(Eu(this.ec)&&_u.test(e))throw this.ac('Document fields cannot begin and end with "__"')}}class Ou{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.M=n||To(e)}lc(e,t,n,r=!1){return new Su({ec:e,methodName:t,hc:n,path:W.emptyPath(),ic:!1,cc:r},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function ku(e){const t=e._freezeSettings(),n=To(e._databaseId);return new Ou(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Au(e,t,n,r,i,s={}){const o=e.lc(s.merge||s.mergeFields?2:0,t,n,i);qu("Data must be an object, but it was:",o,r);const a=Uu(r,o);let c,u;if(s.merge)c=new H(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=Bu(t,r,n);if(!o.contains(i))throw new T(I.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);$u(e,i)||e.push(i)}c=new H(e),u=o.fieldTransforms.filter(e=>c.covers(e.field))}else c=null,u=o.fieldTransforms;return new Iu(new Re(a),c,u)}class Cu extends bu{_toFieldTransform(e){if(2!==e.ec)throw 1===e.ec?e.ac(this._methodName+"() can only appear at the top level of your update data"):e.ac(this._methodName+"() cannot be used with set() unless you pass {merge:true}");return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Cu}}function xu(e,t,n){return new Su({ec:3,hc:t.settings.hc,methodName:e._methodName,ic:n},t.databaseId,t.M,t.ignoreUndefinedProperties)}class Ru extends bu{_toFieldTransform(e){return new Yt(e.path,new Bt)}isEqual(e){return e instanceof Ru}}class Nu extends bu{constructor(e,t){super(e),this.fc=t}_toFieldTransform(e){const t=xu(this,e,!0),n=this.fc.map(e=>Fu(e,t)),r=new Gt(n);return new Yt(e.path,r)}isEqual(e){return this===e}}class Du extends bu{constructor(e,t){super(e),this.fc=t}_toFieldTransform(e){const t=xu(this,e,!0),n=this.fc.map(e=>Fu(e,t)),r=new zt(n);return new Yt(e.path,r)}isEqual(e){return this===e}}class Pu extends bu{constructor(e,t){super(e),this.dc=t}_toFieldTransform(e){const t=new Wt(e.M,Mt(e.M,this.dc));return new Yt(e.path,t)}isEqual(e){return this===e}}function ju(e,t,n,r){const i=e.lc(1,t,n);qu("Data must be an object, but it was:",i,r);const s=[],a=Re.empty();B(r,(e,r)=>{const c=Ku(t,e,n);r=Object(o["l"])(r);const u=i.oc(c);if(r instanceof Cu)s.push(c);else{const e=Fu(r,u);null!=e&&(s.push(c),a.set(c,e))}});const c=new H(s);return new Tu(a,c,i.fieldTransforms)}function Lu(e,t,n,r,i,s){const a=e.lc(1,t,n),c=[Bu(t,r,n)],u=[i];if(s.length%2!=0)throw new T(I.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let o=0;o<s.length;o+=2)c.push(Bu(t,s[o])),u.push(s[o+1]);const l=[],h=Re.empty();for(let f=c.length-1;f>=0;--f)if(!$u(l,c[f])){const e=c[f];let t=u[f];t=Object(o["l"])(t);const n=a.oc(e);if(t instanceof Cu)l.push(e);else{const r=Fu(t,n);null!=r&&(l.push(e),h.set(e,r))}}const d=new H(l);return new Tu(h,d,a.fieldTransforms)}function Mu(e,t,n,r=!1){return Fu(n,e.lc(r?4:3,t))}function Fu(e,t){if(Vu(e=Object(o["l"])(e)))return qu("Unsupported field value:",t,e),Uu(e,t);if(e instanceof bu)return function(e,t){if(!Eu(t.ec))throw t.ac(e._methodName+"() can only be used with update() and set()");if(!t.path)throw t.ac(e._methodName+"() is not currently supported inside arrays");const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ic&&4!==t.ec)throw t.ac("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=Fu(i,t.uc(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=Object(o["l"])(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Mt(t.M,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=U.fromDate(e);return{timestampValue:Gn(t.M,n)}}if(e instanceof U){const n=new U(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Gn(t.M,n)}}if(e instanceof wu)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof vu)return{bytesValue:Kn(t.M,e._byteString)};if(e instanceof $c){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.ac(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Wn(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ac("Unsupported field value: "+Vc(e))}(e,t)}function Uu(e,t){const n={};return G(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):B(e,(e,r)=>{const i=Fu(r,t.sc(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function Vu(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof U||e instanceof wu||e instanceof vu||e instanceof $c||e instanceof bu)}function qu(e,t,n){if(!Vu(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=Vc(n);throw"an object"===r?t.ac(e+" a custom object"):t.ac(e+" "+r)}}function Bu(e,t,n){if((t=Object(o["l"])(t))instanceof yu)return t._internalPath;if("string"==typeof t)return Ku(e,t);throw zu("Field path arguments must be of type string or ",e,!1,void 0,n)}const Gu=new RegExp("[~\\*/\\[\\]]");function Ku(e,t,n){if(t.search(Gu)>=0)throw zu(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new yu(...t.split("."))._internalPath}catch(r){throw zu(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function zu(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=" in field "+r),o&&(c+=" in document "+i),c+=")"),new T(I.INVALID_ARGUMENT,a+e+c)}function $u(e,t){return e.some(e=>e.isEqual(t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new $c(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Hu(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Qu("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Hu extends Wu{data(){return super.data()}}function Qu(e,t){return"string"==typeof t?Ku(e,t):t instanceof yu?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ju extends Wu{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Xu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Qu("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Xu extends Ju{data(e={}){return super.data(e)}}class Zu{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Yu(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new Xu(this._firestore,this._userDataWriter,n.key,n,new Yu(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new T(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>({type:"added",doc:new Xu(e._firestore,e._userDataWriter,n.doc.key,n.doc,new Yu(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter),oldIndex:-1,newIndex:t++}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{const r=new Xu(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Yu(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:el(t.type),doc:r,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function el(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return v()}}function tl(e,t){return e instanceof Ju&&t instanceof Ju?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof Zu&&t instanceof Zu&&e._firestore===t._firestore&&Zc(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nl(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new T(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class rl{}function il(e,...t){for(const n of t)e=n._apply(e);return e}class sl extends rl{constructor(e,t,n){super(),this._c=e,this.wc=t,this.mc=n,this.type="where"}_apply(e){const t=ku(e.firestore),n=function(e,t,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new T(I.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){wl(o,s);const t=[];for(const n of o)t.push(bl(r,e,n));a={arrayValue:{values:t}}}else a=bl(r,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||wl(o,s),a=Mu(n,t,o,"in"===s||"not-in"===s);const c=it.create(i,s,a);return function(e,t){if(t.S()){const n=Tt(e);if(null!==n&&!n.isEqual(t.field))throw new T(I.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${t.field.toString()}'`);const r=It(e);null!==r&&_l(e,t.field,r)}const n=function(e,t){for(const n of e.filters)if(t.indexOf(n.op)>=0)return n.op;return null}(e,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new T(I.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new T(I.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}(e,c),c}(e._query,"where",t,e.firestore._databaseId,this._c,this.wc,this.mc);return new Wc(e.firestore,e.converter,function(e,t){const n=e.filters.concat([t]);return new vt(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}(e._query,n))}}function ol(e,t,n){const r=t,i=Qu("where",e);return new sl(i,r,n)}class al extends rl{constructor(e,t){super(),this._c=e,this.gc=t,this.type="orderBy"}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new T(I.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new T(I.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new pt(t,n);return function(e,t){if(null===It(e)){const n=Tt(e);null!==n&&_l(e,n,t.field)}}(e,r),r}(e._query,this._c,this.gc);return new Wc(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new vt(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function cl(e,t="asc"){const n=t,r=Qu("orderBy",e);return new al(r,n)}class ul extends rl{constructor(e,t,n){super(),this.type=e,this.yc=t,this.Ic=n}_apply(e){return new Wc(e.firestore,e.converter,kt(e._query,this.yc,this.Ic))}}function ll(e){return Bc("limit",e),new ul("limit",e,"F")}function hl(e){return Bc("limitToLast",e),new ul("limitToLast",e,"L")}class dl extends rl{constructor(e,t,n){super(),this.type=e,this.Tc=t,this.Ec=n}_apply(e){const t=vl(e,this.type,this.Tc,this.Ec);return new Wc(e.firestore,e.converter,function(e,t){return new vt(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,t,e.endAt)}(e._query,t))}}function fl(...e){return new dl("startAt",e,!0)}function pl(...e){return new dl("startAfter",e,!1)}class gl extends rl{constructor(e,t,n){super(),this.type=e,this.Tc=t,this.Ec=n}_apply(e){const t=vl(e,this.type,this.Tc,this.Ec);return new Wc(e.firestore,e.converter,function(e,t){return new vt(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,t)}(e._query,t))}}function ml(...e){return new gl("endBefore",e,!1)}function yl(...e){return new gl("endAt",e,!0)}function vl(e,t,n,r){if(n[0]=Object(o["l"])(n[0]),n[0]instanceof Wu)return function(e,t,n,r,i){if(!r)throw new T(I.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const s=[];for(const o of St(e))if(o.field.isKeyField())s.push(be(t,r.key));else{const e=r.data.field(o.field);if(te(e))throw new T(I.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){const e=o.field.canonicalString();throw new T(I.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}s.push(e)}return new ft(s,i)}(e._query,e.firestore._databaseId,t,n[0]._document,r);{const i=ku(e.firestore);return function(e,t,n,r,i,s){const o=e.explicitOrderBy;if(i.length>o.length)throw new T(I.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let c=0;c<i.length;c++){const s=i[c];if(o[c].field.isKeyField()){if("string"!=typeof s)throw new T(I.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof s}`);if(!Et(e)&&-1!==s.indexOf("/"))throw new T(I.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${s}' contains a slash.`);const n=e.path.child(z.fromString(s));if(!ue.isDocumentKey(n))throw new T(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const i=new ue(n);a.push(be(t,i))}else{const e=Mu(n,r,s);a.push(e)}}return new ft(a,s)}(e._query,e.firestore._databaseId,i,t,n,r)}}function bl(e,t,n){if("string"==typeof(n=Object(o["l"])(n))){if(""===n)throw new T(I.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Et(t)&&-1!==n.indexOf("/"))throw new T(I.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(z.fromString(n));if(!ue.isDocumentKey(r))throw new T(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return be(e,new ue(r))}if(n instanceof $c)return be(e,n._key);throw new T(I.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Vc(n)}.`)}function wl(e,t){if(!Array.isArray(e)||0===e.length)throw new T(I.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new T(I.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function _l(e,t,n){if(!n.isEqual(t))throw new T(I.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il={maxAttempts:5};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{convertValue(e,t="none"){switch(de(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Z(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ee(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw v()}}convertObject(e,t){const n={};return B(e.fields,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertGeoPoint(e){return new wu(Z(e.latitude),Z(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=ne(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(re(e));default:return null}}convertTimestamp(e){const t=X(e);return new U(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=z.fromString(e);b(wr(n));const r=new se(n.get(1),n.get(3)),i=new ue(n.popFirst(5));return r.isEqual(t)||g(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function El(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class Sl extends Tl{constructor(e){super(),this.firestore=e}convertBytes(e){return new vu(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new $c(this.firestore,null,t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=ku(e)}set(e,t,n){this._verifyNotCommitted();const r=kl(e,this._firestore),i=El(r.converter,t,n),s=Au(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(s.toMutation(r._key,Zt.none())),this}update(e,t,n,...r){this._verifyNotCommitted();const i=kl(e,this._firestore);let s;return s="string"==typeof(t=Object(o["l"])(t))||t instanceof yu?Lu(this._dataReader,"WriteBatch.update",i._key,t,n,r):ju(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(s.toMutation(i._key,Zt.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=kl(e,this._firestore);return this._mutations=this._mutations.concat(new fn(t._key,Zt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new T(I.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function kl(e,t){if((e=Object(o["l"])(e)).firestore!==t)throw new T(I.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Al(e){e=qc(e,$c);const t=qc(e.firestore,iu);return Ac(su(t),e._key).then(n=>Bl(t,e,n))}class Cl extends Tl{constructor(e){super(),this.firestore=e}convertBytes(e){return new vu(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new $c(this.firestore,null,t)}}function xl(e){e=qc(e,$c);const t=qc(e.firestore,iu),n=su(t),r=new Cl(t);return kc(n,e._key).then(n=>new Ju(t,r,e._key,n,new Yu(null!==n&&n.hasLocalMutations,!0),e.converter))}function Rl(e){e=qc(e,$c);const t=qc(e.firestore,iu);return Ac(su(t),e._key,{source:"server"}).then(n=>Bl(t,e,n))}function Nl(e){e=qc(e,Wc);const t=qc(e.firestore,iu),n=su(t),r=new Cl(t);return nl(e._query),xc(n,e._query).then(n=>new Zu(t,r,e,n))}function Dl(e){e=qc(e,Wc);const t=qc(e.firestore,iu),n=su(t),r=new Cl(t);return Cc(n,e._query).then(n=>new Zu(t,r,e,n))}function Pl(e){e=qc(e,Wc);const t=qc(e.firestore,iu),n=su(t),r=new Cl(t);return xc(n,e._query,{source:"server"}).then(n=>new Zu(t,r,e,n))}function jl(e,t,n){e=qc(e,$c);const r=qc(e.firestore,iu),i=El(e.converter,t,n);return ql(r,[Au(ku(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,Zt.none())])}function Ll(e,t,n,...r){e=qc(e,$c);const i=qc(e.firestore,iu),s=ku(i);let a;return a="string"==typeof(t=Object(o["l"])(t))||t instanceof yu?Lu(s,"updateDoc",e._key,t,n,r):ju(s,"updateDoc",e._key,t),ql(i,[a.toMutation(e._key,Zt.exists(!0))])}function Ml(e){return ql(qc(e.firestore,iu),[new fn(e._key,Zt.none())])}function Fl(e,t){const n=qc(e.firestore,iu),r=Jc(e),i=El(e.converter,t);return ql(n,[Au(ku(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,Zt.exists(!1))]).then(()=>r)}function Ul(e,...t){var n,r,i;e=Object(o["l"])(e);let s={includeMetadataChanges:!1},a=0;"object"!=typeof t[a]||tu(t[a])||(s=t[a],a++);const c={includeMetadataChanges:s.includeMetadataChanges};if(tu(t[a])){const e=t[a];t[a]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[a+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[a+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}let u,l,h;if(e instanceof $c)l=qc(e.firestore,iu),h=wt(e._key.path),u={next:n=>{t[a]&&t[a](Bl(l,e,n))},error:t[a+1],complete:t[a+2]};else{const n=qc(e,Wc);l=qc(n.firestore,iu),h=n._query;const r=new Cl(l);u={next:e=>{t[a]&&t[a](new Zu(l,r,n,e))},error:t[a+1],complete:t[a+2]},nl(e._query)}return function(e,t,n,r){const i=new hc(r),s=new ya(t,i,n);return e.asyncQueue.enqueueAndForget(async()=>da(await Ec(e),s)),()=>{i.Aa(),e.asyncQueue.enqueueAndForget(async()=>fa(await Ec(e),s))}}(su(l),h,c,u)}function Vl(e,t){return Rc(su(e=qc(e,iu)),tu(t)?t:{next:t})}function ql(e,t){return function(e,t){const n=new E;return e.asyncQueue.enqueueAndForget(async()=>Ra(await Tc(e),t,n)),n.promise}(su(e),t)}function Bl(e,t,n){const r=n.docs.get(t._key),i=new Cl(e);return new Ju(e,i,t._key,r,new Yu(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=ku(e)}get(e){const t=kl(e,this._firestore),n=new Sl(this._firestore);return this._transaction.lookup([t._key]).then(e=>{if(!e||1!==e.length)return v();const r=e[0];if(r.isFoundDocument())return new Wu(this._firestore,n,r.key,r,t.converter);if(r.isNoDocument())return new Wu(this._firestore,n,t._key,null,t.converter);throw v()})}set(e,t,n){const r=kl(e,this._firestore),i=El(r.converter,t,n),s=Au(this._dataReader,"Transaction.set",r._key,i,null!==r.converter,n);return this._transaction.set(r._key,s),this}update(e,t,n,...r){const i=kl(e,this._firestore);let s;return s="string"==typeof(t=Object(o["l"])(t))||t instanceof yu?Lu(this._dataReader,"Transaction.update",i._key,t,n,r):ju(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,s),this}delete(e){const t=kl(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=kl(e,this._firestore),n=new Cl(this._firestore);return super.get(e).then(e=>new Ju(this._firestore,n,t._key,e._document,new Yu(!1,!1),t.converter))}}function Kl(e,t,n){e=qc(e,iu);const r=Object.assign(Object.assign({},Il),n);return function(e){if(e.maxAttempts<1)throw new T(I.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),Nc(su(e),n=>t(new Gl(e,n)),r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zl(){return new Cu("deleteField")}function $l(){return new Ru("serverTimestamp")}function Wl(...e){return new Nu("arrayUnion",e)}function Hl(...e){return new Du("arrayRemove",e)}function Ql(e){return new Pu("increment",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){!function(e){l=e}(r["SDK_VERSION"]),Object(r["_registerComponent"])(new i["a"]("firestore",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=new iu(r,new A(e.getProvider("auth-internal")),new N(e.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:t},n),i._setSettings(n),i},"PUBLIC")),Object(r["registerVersion"])(c,"3.4.9",e),Object(r["registerVersion"])(c,"3.4.9","esm2017")}()}).call(this,n("4362"))},"0b42":function(e,t,n){var r=n("e8b5"),i=n("68ee"),s=n("861d"),o=n("b622"),a=o("species"),c=Array;e.exports=function(e){var t;return r(e)&&(t=e.constructor,i(t)&&(t===c||r(t.prototype))?t=void 0:s(t)&&(t=t[a],null===t&&(t=void 0))),void 0===t?c:t}},"0c47":function(e,t,n){var r=n("da84"),i=n("d44e");i(r.JSON,"JSON",!0)},"0cfb":function(e,t,n){var r=n("83ab"),i=n("d039"),s=n("cc12");e.exports=!r&&!i((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},"0d51":function(e,t){var n=String;e.exports=function(e){try{return n(e)}catch(t){return"Object"}}},"107c":function(e,t,n){var r=n("d039"),i=n("da84"),s=i.RegExp;e.exports=r((function(){var e=s("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},"13d2":function(e,t,n){var r=n("d039"),i=n("1626"),s=n("1a2d"),o=n("83ab"),a=n("5e77").CONFIGURABLE,c=n("8925"),u=n("69f3"),l=u.enforce,h=u.get,d=Object.defineProperty,f=o&&!r((function(){return 8!==d((function(){}),"length",{value:8}).length})),p=String(String).split("String"),g=e.exports=function(e,t,n){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!s(e,"name")||a&&e.name!==t)&&d(e,"name",{value:t,configurable:!0}),f&&n&&s(n,"arity")&&e.length!==n.arity&&d(e,"length",{value:n.arity});try{n&&s(n,"constructor")&&n.constructor?o&&d(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(i){}var r=l(e);return s(r,"source")||(r.source=p.join("string"==typeof t?t:"")),e};Function.prototype.toString=g((function(){return i(this)&&h(this).source||c(this)}),"toString")},"14e5":function(e,t,n){"use strict";var r=n("23e7"),i=n("c65b"),s=n("59ed"),o=n("f069"),a=n("e667"),c=n("2266"),u=n("5eed");r({target:"Promise",stat:!0,forced:u},{all:function(e){var t=this,n=o.f(t),r=n.resolve,u=n.reject,l=a((function(){var n=s(t.resolve),o=[],a=0,l=1;c(e,(function(e){var s=a++,c=!1;l++,i(n,t,e).then((function(e){c||(c=!0,o[s]=e,--l||r(o))}),u)})),--l||r(o)}));return l.error&&u(l.value),n.promise}})},"159b":function(e,t,n){var r=n("da84"),i=n("fdbc"),s=n("785a"),o=n("17c2"),a=n("9112"),c=function(e){if(e&&e.forEach!==o)try{a(e,"forEach",o)}catch(t){e.forEach=o}};for(var u in i)i[u]&&c(r[u]&&r[u].prototype);c(s)},1626:function(e,t){e.exports=function(e){return"function"==typeof e}},"17c2":function(e,t,n){"use strict";var r=n("b727").forEach,i=n("a640"),s=i("forEach");e.exports=s?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},1862:function(e,t,n){"use strict";var r=n("7ded"),i=n("0829"),s=n("1fd5"),o=n("22e5");const a="@firebase/firestore-compat",c="0.1.18";
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(e,t){if(void 0===t)return{merge:!1};if(void 0!==t.mergeFields&&void 0!==t.merge)throw new i["g"]("invalid-argument",`Invalid options passed to function ${e}(): You cannot specify both "merge" and "mergeFields".`);return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l(){if("undefined"===typeof Uint8Array)throw new i["g"]("unimplemented","Uint8Arrays are not available in this environment.")}function h(){if(!Object(i["r"])())throw new i["g"]("unimplemented","Blobs are unavailable in Firestore in this environment.")}class d{constructor(e){this._delegate=e}static fromBase64String(e){return h(),new d(i["b"].fromBase64String(e))}static fromUint8Array(e){return l(),new d(i["b"].fromUint8Array(e))}toBase64(){return h(),this._delegate.toBase64()}toUint8Array(){return l(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(e){return p(e,["next","error","complete"])}function p(e,t){if("object"!==typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"===typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g{enableIndexedDbPersistence(e,t){return Object(i["F"])(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return Object(i["G"])(e._delegate)}clearIndexedDbPersistence(e){return Object(i["x"])(e._delegate)}}class m{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof i["m"]||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();e.merge||t.host===e.host||Object(i["s"])("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,n={}){Object(i["A"])(this._delegate,e,t,n)}enableNetwork(){return Object(i["H"])(this._delegate)}disableNetwork(){return Object(i["D"])(this._delegate)}enablePersistence(e){let t=!1,n=!1;return e&&(t=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,Object(i["t"])("synchronizeTabs",t,"experimentalForceOwningTab",n)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return Object(i["lb"])(this._delegate)}onSnapshotsInSync(e){return Object(i["Y"])(this._delegate,e)}get app(){if(!this._appCompat)throw new i["g"]("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new R(this,Object(i["y"])(this._delegate,e))}catch(t){throw T(t,"collection()","Firestore.collection()")}}doc(e){try{return new I(this,Object(i["E"])(this._delegate,e))}catch(t){throw T(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new A(this,Object(i["z"])(this._delegate,e))}catch(t){throw T(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return Object(i["db"])(this._delegate,t=>e(new b(this,t)))}batch(){return Object(i["K"])(this._delegate),new w(new i["l"](this._delegate,e=>Object(i["L"])(this._delegate,e)))}loadBundle(e){return Object(i["V"])(this._delegate,e)}namedQuery(e){return Object(i["W"])(this._delegate,e).then(e=>e?new A(this,e):null)}}class y extends i["a"]{constructor(e){super(),this.firestore=e}convertBytes(e){return new d(new i["b"](e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return I.forKey(t,this.firestore,null)}}function v(e){Object(i["gb"])(e)}class b{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new y(e)}get(e){const t=N(e);return this._delegate.get(t).then(e=>new O(this._firestore,new i["e"](this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,t.converter)))}set(e,t,n){const r=N(e);return n?(u("Transaction.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=N(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=N(e);return this._delegate.delete(t),this}}class w{constructor(e){this._delegate=e}set(e,t,n){const r=N(e);return n?(u("WriteBatch.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=N(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=N(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class _{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){const n=new i["i"](this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new k(this._firestore,n),null!==t&&void 0!==t?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const n=_.INSTANCES;let r=n.get(e);r||(r=new WeakMap,n.set(e,r));let i=r.get(t);return i||(i=new _(e,new y(e),t),r.set(t,i)),i}}_.INSTANCES=new WeakMap;class I{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new y(e)}static forPath(e,t,n){if(e.length%2!==0)throw new i["g"]("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new I(t,new i["d"](t._delegate,n,new i["n"](e)))}static forKey(e,t,n){return new I(t,new i["d"](t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new R(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new R(this.firestore,Object(i["y"])(this._delegate,e))}catch(t){throw T(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=Object(s["l"])(e),e instanceof i["d"]&&Object(i["cb"])(this._delegate,e)}set(e,t){t=u("DocumentReference.set",t);try{return t?Object(i["fb"])(this._delegate,e,t):Object(i["fb"])(this._delegate,e)}catch(n){throw T(n,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{return 1===arguments.length?Object(i["kb"])(this._delegate,e):Object(i["kb"])(this._delegate,e,t,...n)}catch(r){throw T(r,"updateDoc()","DocumentReference.update()")}}delete(){return Object(i["B"])(this._delegate)}onSnapshot(...e){const t=E(e),n=S(e,e=>new O(this.firestore,new i["e"](this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter)));return Object(i["X"])(this._delegate,t,n)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?Object(i["N"])(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?Object(i["O"])(this._delegate):Object(i["M"])(this._delegate),t.then(e=>new O(this.firestore,new i["e"](this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter)))}withConverter(e){return new I(this.firestore,e?this._delegate.withConverter(_.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function T(e,t,n){return e.message=e.message.replace(t,n),e}function E(e){for(const t of e)if("object"===typeof t&&!f(t))return t;return{}}function S(e,t){var n,r;let i;return i=f(e[0])?e[0]:f(e[1])?e[1]:"function"===typeof e[0]?{next:e[0],error:e[1],complete:e[2]}:{next:e[1],error:e[2],complete:e[3]},{next:e=>{i.next&&i.next(t(e))},error:null===(n=i.error)||void 0===n?void 0:n.bind(i),complete:null===(r=i.complete)||void 0===r?void 0:r.bind(i)}}class O{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new I(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return Object(i["hb"])(this._delegate,e._delegate)}}class k extends O{data(e){const t=this._delegate.data(e);return Object(i["q"])(void 0!==t,"Document in a QueryDocumentSnapshot should exist"),t}}class A{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new y(e)}where(e,t,n){try{return new A(this.firestore,Object(i["ab"])(this._delegate,Object(i["mb"])(e,t,n)))}catch(r){throw T(r,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new A(this.firestore,Object(i["ab"])(this._delegate,Object(i["Z"])(e,t)))}catch(n){throw T(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new A(this.firestore,Object(i["ab"])(this._delegate,Object(i["T"])(e)))}catch(t){throw T(t,"limit()","Query.limit()")}}limitToLast(e){try{return new A(this.firestore,Object(i["ab"])(this._delegate,Object(i["U"])(e)))}catch(t){throw T(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new A(this.firestore,Object(i["ab"])(this._delegate,Object(i["jb"])(...e)))}catch(t){throw T(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new A(this.firestore,Object(i["ab"])(this._delegate,Object(i["ib"])(...e)))}catch(t){throw T(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new A(this.firestore,Object(i["ab"])(this._delegate,Object(i["J"])(...e)))}catch(t){throw T(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new A(this.firestore,Object(i["ab"])(this._delegate,Object(i["I"])(...e)))}catch(t){throw T(t,"endAt()","Query.endAt()")}}isEqual(e){return Object(i["bb"])(this._delegate,e._delegate)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?Object(i["Q"])(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?Object(i["R"])(this._delegate):Object(i["P"])(this._delegate),t.then(e=>new x(this.firestore,new i["j"](this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot)))}onSnapshot(...e){const t=E(e),n=S(e,e=>new x(this.firestore,new i["j"](this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot)));return Object(i["X"])(this._delegate,t,n)}withConverter(e){return new A(this.firestore,e?this._delegate.withConverter(_.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class C{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new k(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class x{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new A(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new k(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(e=>new C(this._firestore,e))}forEach(e,t){this._delegate.forEach(n=>{e.call(t,new k(this._firestore,n))})}isEqual(e){return Object(i["hb"])(this._delegate,e._delegate)}}class R extends A{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new I(this.firestore,e):null}doc(e){try{return new I(this.firestore,void 0===e?Object(i["E"])(this._delegate):Object(i["E"])(this._delegate,e))}catch(t){throw T(t,"doc()","CollectionReference.doc()")}}add(e){return Object(i["u"])(this._delegate,e).then(e=>new I(this.firestore,e))}isEqual(e){return Object(i["cb"])(this._delegate,e._delegate)}withConverter(e){return new R(this.firestore,e?this._delegate.withConverter(_.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function N(e){return Object(i["p"])(e,i["d"])}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(...e){this._delegate=new i["f"](...e)}static documentId(){return new D(i["o"].keyField().canonicalString())}isEqual(e){return e=Object(s["l"])(e),e instanceof i["f"]&&this._delegate._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this._delegate=e}static serverTimestamp(){const e=Object(i["eb"])();return e._methodName="FieldValue.serverTimestamp",new P(e)}static delete(){const e=Object(i["C"])();return e._methodName="FieldValue.delete",new P(e)}static arrayUnion(...e){const t=Object(i["w"])(...e);return t._methodName="FieldValue.arrayUnion",new P(t)}static arrayRemove(...e){const t=Object(i["v"])(...e);return t._methodName="FieldValue.arrayRemove",new P(t)}static increment(e){const t=Object(i["S"])(e);return t._methodName="FieldValue.increment",new P(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j={Firestore:m,GeoPoint:i["h"],Timestamp:i["k"],Blob:d,Transaction:b,WriteBatch:w,DocumentReference:I,DocumentSnapshot:O,Query:A,QueryDocumentSnapshot:k,QuerySnapshot:x,CollectionReference:R,FieldPath:D,FieldValue:P,setLogLevel:v,CACHE_SIZE_UNLIMITED:i["c"]};function L(e,t){e.INTERNAL.registerComponent(new o["a"]("firestore-compat",e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("firestore").getImmediate();return t(n,r)},"PUBLIC").setServiceProps(Object.assign({},j)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(e){L(e,(e,t)=>new m(e,t,new g)),e.registerVersion(a,c)}M(r["a"])},"19aa":function(e,t,n){var r=n("3a9b"),i=TypeError;e.exports=function(e,t){if(r(t,e))return e;throw i("Incorrect invocation")}},"1a2d":function(e,t,n){var r=n("e330"),i=n("7b0b"),s=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return s(i(e),t)}},"1be4":function(e,t,n){var r=n("d066");e.exports=r("document","documentElement")},"1c7e":function(e,t,n){var r=n("b622"),i=r("iterator"),s=!1;try{var o=0,a={next:function(){return{done:!!o++}},return:function(){s=!0}};a[i]=function(){return this},Array.from(a,(function(){throw 2}))}catch(c){}e.exports=function(e,t){if(!t&&!s)return!1;var n=!1;try{var r={};r[i]=function(){return{next:function(){return{done:n=!0}}}},e(r)}catch(c){}return n}},"1cdc":function(e,t,n){var r=n("342f");e.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},"1d80":function(e,t){var n=TypeError;e.exports=function(e){if(void 0==e)throw n("Can't call method on "+e);return e}},"1da1":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("d3b7");function r(e,t,n,r,i,s,o){try{var a=e[s](o),c=a.value}catch(u){return void n(u)}a.done?t(c):Promise.resolve(c).then(r,i)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(i,s){var o=e.apply(t,n);function a(e){r(o,i,s,a,c,"next",e)}function c(e){r(o,i,s,a,c,"throw",e)}a(void 0)}))}}},"1dde":function(e,t,n){var r=n("d039"),i=n("b622"),s=n("2d00"),o=i("species");e.exports=function(e){return s>=51||!r((function(){var t=[],n=t.constructor={};return n[o]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"1f5a":function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return Ue})),n.d(t,"c",(function(){return lt})),n.d(t,"d",(function(){return pt})),n.d(t,"e",(function(){return mt})),n.d(t,"f",(function(){return gt})),n.d(t,"g",(function(){return et})),n.d(t,"h",(function(){return ft})),n.d(t,"i",(function(){return Dr})),n.d(t,"j",(function(){return Hi})),n.d(t,"k",(function(){return c})),n.d(t,"l",(function(){return Sr})),n.d(t,"m",(function(){return vt})),n.d(t,"n",(function(){return wt})),n.d(t,"o",(function(){return _t})),n.d(t,"p",(function(){return I})),n.d(t,"q",(function(){return Ne})),n.d(t,"r",(function(){return y})),n.d(t,"s",(function(){return Ln})),n.d(t,"t",(function(){return O})),n.d(t,"u",(function(){return ai})),n.d(t,"v",(function(){return Jr})),n.d(t,"w",(function(){return fe})),n.d(t,"y",(function(){return Kt})),n.d(t,"z",(function(){return Rn})),n.d(t,"A",(function(){return zi})),n.d(t,"B",(function(){return Dn})),n.d(t,"C",(function(){return zt})),n.d(t,"D",(function(){return Gt})),n.d(t,"E",(function(){return Pe})),n.d(t,"G",(function(){return Wt})),n.d(t,"H",(function(){return d})),n.d(t,"I",(function(){return Zt})),n.d(t,"J",(function(){return gn})),n.d(t,"K",(function(){return vn})),n.d(t,"L",(function(){return oi})),n.d(t,"M",(function(){return de})),n.d(t,"N",(function(){return ir})),n.d(t,"O",(function(){return Yt})),n.d(t,"P",(function(){return jt})),n.d(t,"Q",(function(){return Cr})),n.d(t,"R",(function(){return Gr})),n.d(t,"S",(function(){return ii})),n.d(t,"T",(function(){return En})),n.d(t,"U",(function(){return Lt})),n.d(t,"V",(function(){return xr})),n.d(t,"W",(function(){return Br})),n.d(t,"X",(function(){return ni})),n.d(t,"Y",(function(){return en})),n.d(t,"Z",(function(){return Bt})),n.d(t,"ab",(function(){return Qt})),n.d(t,"bb",(function(){return St})),n.d(t,"cb",(function(){return Pt})),n.d(t,"db",(function(){return Ft})),n.d(t,"eb",(function(){return Ht})),n.d(t,"fb",(function(){return Jt})),n.d(t,"gb",(function(){return Ar})),n.d(t,"hb",(function(){return qr})),n.d(t,"ib",(function(){return ei})),n.d(t,"jb",(function(){return Ct})),n.d(t,"kb",(function(){return sn})),n.d(t,"lb",(function(){return on})),n.d(t,"mb",(function(){return Nr})),n.d(t,"nb",(function(){return rn})),n.d(t,"ob",(function(){return tn})),n.d(t,"pb",(function(){return $t})),n.d(t,"x",(function(){return Ss})),n.d(t,"F",(function(){return Ts}));var r=n("1fd5"),i=n("589b");function s(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;var o=n("e691"),a=n("22e5");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const c={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},u={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",["timeout"]:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function h(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const d=l,f=h,p=new r["b"]("auth","Firebase",h()),g=new o["b"]("@firebase/auth");function m(e,...t){g.logLevel<=o["a"].ERROR&&g.error(`Auth (${i["SDK_VERSION"]}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(e,...t){throw _(e,...t)}function v(e,...t){return _(e,...t)}function b(e,t,n){const i=Object.assign(Object.assign({},f()),{[t]:n}),s=new r["b"]("auth","Firebase",i);return s.create(t,{appName:e.name})}function w(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&y(e,"argument-error"),b(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function _(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return p.create(e,...t)}function I(e,t,...n){if(!e)throw _(t,...n)}function T(e){const t="INTERNAL ASSERTION FAILED: "+e;throw m(t),new Error(t)}function E(e,t){e||T(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S=new Map;function O(e){E(e instanceof Function,"Expected a class definition");let t=S.get(e);return t?(E(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,S.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(O);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function C(){return"http:"===x()||"https:"===x()}function x(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(C()||Object(r["o"])()||"connection"in navigator))||navigator.onLine}function N(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e,t){this.shortDelay=e,this.longDelay=t,E(t>e,"Short delay should be less than long delay!"),this.isMobile=Object(r["t"])()||Object(r["v"])()}get(){return R()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(e,t){E(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void T("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void T("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void T("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},M=new D(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function U(e,t,n,i,s={}){return V(e,s,async()=>{let s={},o={};i&&("GET"===t?o=i:s={body:JSON.stringify(i)});const a=Object(r["y"])(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),j.fetch()(B(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))})}async function V(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},L),t);try{const t=new G(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw K(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw K(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw K(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw K(e,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw b(e,a,o);y(e,a)}}catch(s){if(s instanceof r["c"])throw s;y(e,"network-request-failed")}}async function q(e,t,n,r,i={}){const s=await U(e,t,n,r,i);return"mfaPendingCredential"in s&&y(e,"multi-factor-auth-required",{_serverResponse:s}),s}function B(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?P(e.config,i):`${e.config.apiScheme}://${i}`}class G{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(v(this.auth,"network-request-failed")),M.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function K(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=v(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z(e,t){return U(e,"POST","/v1/accounts:delete",t)}async function $(e,t){return U(e,"POST","/v1/accounts:update",t)}async function W(e,t){return U(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(e,t=!1){const n=Object(r["l"])(e),i=await n.getIdToken(t),s=J(i);I(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:i,authTime:H(Y(s.auth_time)),issuedAtTime:H(Y(s.iat)),expirationTime:H(Y(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function Y(e){return 1e3*Number(e)}function J(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return m("JWT malformed, contained fewer than 3 sections"),null;try{const e=Object(r["d"])(n);return e?JSON.parse(e):(m("Failed to decode base64 JWT payload"),null)}catch(s){return m("Caught error parsing JWT payload as JSON",s),null}}function X(e){const t=J(e);return I(t,"internal-error"),I("undefined"!==typeof t.exp,"internal-error"),I("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof r["c"]&&ee(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function ee({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=H(this.lastLoginAt),this.creationTime=H(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function re(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Z(e,W(n,{idToken:r}));I(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?oe(s.providerUserInfo):[],a=se(e.providerData,o),c=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new ne(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(e,h)}async function ie(e){const t=Object(r["l"])(e);await re(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function se(e,t){const n=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...n,...t]}function oe(e){return e.map(e=>{var{providerId:t}=e,n=s(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ae(e,t){const n=await V(e,{},async()=>{const n=Object(r["y"])({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=B(e,i,"/v1/token","key="+s),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",j.fetch()(o,{method:"POST",headers:a,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){I(e.idToken,"internal-error"),I("undefined"!==typeof e.idToken,"internal-error"),I("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):X(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return I(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await ae(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new ce;return n&&(I("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(I("string"===typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(I("number"===typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ce,this.toJSON())}_performRefresh(){return T("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(e,t){I("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class le{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=s(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new te(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ne(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Z(this,this.stsTokenManager.getToken(this.auth,e));return I(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Q(this,e)}reload(){return ie(this)}_assign(e){this!==e&&(I(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new le(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){I(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await re(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Z(this,z(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:b,isAnonymous:w,providerData:_,stsTokenManager:T}=t;I(v&&T,e,"internal-error");const E=ce.fromJSON(this.name,T);I("string"===typeof v,e,"internal-error"),ue(l,e.name),ue(h,e.name),I("boolean"===typeof b,e,"internal-error"),I("boolean"===typeof w,e,"internal-error"),ue(d,e.name),ue(f,e.name),ue(p,e.name),ue(g,e.name),ue(m,e.name),ue(y,e.name);const S=new le({uid:v,auth:e,email:h,emailVerified:b,displayName:l,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:E,createdAt:m,lastLoginAt:y});return _&&Array.isArray(_)&&(S.providerData=_.map(e=>Object.assign({},e))),g&&(S._redirectEventId=g),S}static async _fromIdTokenResponse(e,t,n=!1){const r=new ce;r.updateFromServerResponse(t);const i=new le({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await re(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}he.type="NONE";const de=he;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(e,t,n){return`firebase:${e}:${t}:${n}`}class pe{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=fe(this.userKey,r.apiKey,i),this.fullPersistenceKey=fe("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?le._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new pe(O(de),e,n);const r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let i=r[0]||O(de);const s=fe(n,e.config.apiKey,e.name);let o=null;for(const u of t)try{const t=await u._get(s);if(t){const n=le._fromJSON(e,t);u!==i&&(o=n),i=u;break}}catch(c){}const a=r.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(s)}catch(c){}})),new pe(i,e,n)):new pe(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(be(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(me(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(_e(t))return"Blackberry";if(Ie(t))return"Webos";if(ye(t))return"Safari";if((t.includes("chrome/")||ve(t))&&!t.includes("edge/"))return"Chrome";if(we(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function me(e=Object(r["m"])()){return/firefox\//i.test(e)}function ye(e=Object(r["m"])()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ve(e=Object(r["m"])()){return/crios\//i.test(e)}function be(e=Object(r["m"])()){return/iemobile/i.test(e)}function we(e=Object(r["m"])()){return/android/i.test(e)}function _e(e=Object(r["m"])()){return/blackberry/i.test(e)}function Ie(e=Object(r["m"])()){return/webos/i.test(e)}function Te(e=Object(r["m"])()){return/iphone|ipad|ipod/i.test(e)}function Ee(e=Object(r["m"])()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}function Se(e=Object(r["m"])()){var t;return Te(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function Oe(){return Object(r["r"])()&&10===document.documentMode}function ke(e=Object(r["m"])()){return Te(e)||we(e)||Ie(e)||_e(e)||/windows phone/i.test(e)||be(e)}function Ae(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(e,t=[]){let n;switch(e){case"Browser":n=ge(Object(r["m"])());break;case"Worker":n=`${ge(Object(r["m"])())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i["SDK_VERSION"]}/${s}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise((n,r)=>{try{const r=e(t);n(r)}catch(i){r(i)}});n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new De(this),this.idTokenSubscription=new De(this),this.beforeStateQueue=new xe(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=p,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=O(t)),this._initializationPromise=this.queue(async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await pe.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null===r||void 0===r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null===o||void 0===o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return I(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await re(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=N()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Object(r["l"])(e):null;return t&&I(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&I(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(O(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r["b"]("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&O(e)||this._popupRedirectResolver;I(t,this,"argument-error"),this.redirectPersistenceManager=await pe.create(this,[O(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return I(s,this,"internal-error"),s.then(()=>i(this.currentUser)),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return I(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ce(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function Ne(e){return Object(r["l"])(e)}class De{constructor(e){this.auth=e,this.observer=null,this.addObserver=Object(r["h"])(e=>this.observer=e)}get next(){return I(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Pe(e,t,n){const r=Ne(e);I(r._canInitEmulator,r,"emulator-config-failed"),I(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),s=je(t),{host:o,port:a}=Le(t),c=null===a?"":":"+a;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Fe()}function je(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Le(e){const t=je(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Me(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Me(t)}}}function Me(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Fe(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return T("not implemented")}_getIdTokenResponse(e){return T("not implemented")}_linkToIdToken(e,t){return T("not implemented")}_getReauthenticationResolver(e){return T("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ve(e,t){return U(e,"POST","/v1/accounts:resetPassword",F(e,t))}async function qe(e,t){return U(e,"POST","/v1/accounts:update",t)}async function Be(e,t){return U(e,"POST","/v1/accounts:update",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ge(e,t){return q(e,"POST","/v1/accounts:signInWithPassword",F(e,t))}async function Ke(e,t){return U(e,"POST","/v1/accounts:sendOobCode",F(e,t))}async function ze(e,t){return Ke(e,t)}async function $e(e,t){return Ke(e,t)}async function We(e,t){return Ke(e,t)}async function He(e,t){return Ke(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qe(e,t){return q(e,"POST","/v1/accounts:signInWithEmailLink",F(e,t))}async function Ye(e,t){return q(e,"POST","/v1/accounts:signInWithEmailLink",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je extends Ue{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Je(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Je(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Ge(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Qe(e,{email:this._email,oobCode:this._password});default:y(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return qe(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ye(e,{idToken:t,email:this._email,oobCode:this._password});default:y(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xe(e,t){return q(e,"POST","/v1/accounts:signInWithIdp",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze="http://localhost";class et extends Ue{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new et(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):y("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=s(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new et(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Xe(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Xe(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Xe(e,t)}buildRequest(){const e={requestUri:Ze,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=Object(r["y"])(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tt(e,t){return U(e,"POST","/v1/accounts:sendVerificationCode",F(e,t))}async function nt(e,t){return q(e,"POST","/v1/accounts:signInWithPhoneNumber",F(e,t))}async function rt(e,t){const n=await q(e,"POST","/v1/accounts:signInWithPhoneNumber",F(e,t));if(n.temporaryProof)throw K(e,"account-exists-with-different-credential",n);return n}const it={["USER_NOT_FOUND"]:"user-not-found"};async function st(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return q(e,"POST","/v1/accounts:signInWithPhoneNumber",F(e,n),it)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot extends Ue{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new ot({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new ot({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return nt(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return rt(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return st(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new ot({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ct(e){const t=Object(r["z"])(Object(r["k"])(e))["link"],n=t?Object(r["z"])(Object(r["k"])(t))["deep_link_id"]:null,i=Object(r["z"])(Object(r["k"])(e))["deep_link_id"],s=i?Object(r["z"])(Object(r["k"])(i))["link"]:null;return s||i||n||t||e}class ut{constructor(e){var t,n,i,s,o,a;const c=Object(r["z"])(Object(r["k"])(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=at(null!==(i=c["mode"])&&void 0!==i?i:null);I(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=ct(e);try{return new ut(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lt{constructor(){this.providerId=lt.PROVIDER_ID}static credential(e,t){return Je._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=ut.parseLink(t);return I(n,"argument-error"),Je._fromEmailAndCode(e,n.code,n.tenantId)}}lt.PROVIDER_ID="password",lt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",lt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ht{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt extends ht{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class ft extends dt{static credentialFromJSON(e){const t="string"===typeof e?JSON.parse(e):e;return I("providerId"in t&&"signInMethod"in t,"argument-error"),et._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return I(e.idToken||e.accessToken,"argument-error"),et._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return ft.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return ft.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:r,pendingToken:i,nonce:s,providerId:o}=e;if(!n&&!r&&!t&&!i)return null;if(!o)return null;try{return new ft(o)._credential({idToken:t,accessToken:n,nonce:s,pendingToken:i})}catch(a){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt extends dt{constructor(){super("facebook.com")}static credential(e){return et._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return pt.credential(e.oauthAccessToken)}catch(t){return null}}}pt.FACEBOOK_SIGN_IN_METHOD="facebook.com",pt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gt extends dt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return et._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return gt.credential(t,n)}catch(r){return null}}}gt.GOOGLE_SIGN_IN_METHOD="google.com",gt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mt extends dt{constructor(){super("github.com")}static credential(e){return et._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return mt.credential(e.oauthAccessToken)}catch(t){return null}}}mt.GITHUB_SIGN_IN_METHOD="github.com",mt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const yt="http://localhost";class vt extends Ue{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Xe(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Xe(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Xe(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,pendingToken:i}=t;return n&&r&&i&&n===r?new vt(n,i):null}static _create(e,t){return new vt(e,t)}buildRequest(){return{requestUri:yt,returnSecureToken:!0,pendingToken:this.pendingToken}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt="saml.";class wt extends ht{constructor(e){I(e.startsWith(bt),"argument-error"),super(e)}static credentialFromResult(e){return wt.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return wt.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=vt.fromJSON(e);return I(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return vt._create(n,t)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends dt{constructor(){super("twitter.com")}static credential(e,t){return et._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return _t.credential(t,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function It(e,t){return q(e,"POST","/v1/accounts:signUp",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_t.TWITTER_SIGN_IN_METHOD="twitter.com",_t.PROVIDER_ID="twitter.com";class Tt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await le._fromIdTokenResponse(e,n,r),s=Et(n),o=new Tt({user:i,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Et(n);return new Tt({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Et(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function St(e){var t;const n=Ne(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new Tt({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await It(n,{returnSecureToken:!0}),i=await Tt._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot extends r["c"]{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Ot.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Ot(e,t,n,r)}}function kt(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw Ot._fromErrorAndOperation(e,n,t,r);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(e){return new Set(e.map(({providerId:e})=>e).filter(e=>!!e))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ct(e,t){const n=Object(r["l"])(e);await Rt(!0,n,t);const{providerUserInfo:i}=await $(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),s=At(i||[]);return n.providerData=n.providerData.filter(e=>s.has(e.providerId)),s.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function xt(e,t,n=!1){const r=await Z(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Tt._forOperation(e,"link",r)}async function Rt(e,t,n){await re(t);const r=At(t.providerData),i=!1===e?"provider-already-linked":"no-such-provider";I(r.has(n)===e,t.auth,i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nt(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await Z(e,kt(r,i,t,e),n);I(s.idToken,r,"internal-error");const o=J(s.idToken);I(o,r,"internal-error");const{sub:a}=o;return I(e.uid===a,r,"user-mismatch"),Tt._forOperation(e,i,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&y(r,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dt(e,t,n=!1){const r="signIn",i=await kt(e,r,t),s=await Tt._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function Pt(e,t){return Dt(Ne(e),t)}async function jt(e,t){const n=Object(r["l"])(e);return await Rt(!1,n,t.providerId),xt(n,t)}async function Lt(e,t){return Nt(Object(r["l"])(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mt(e,t){return q(e,"POST","/v1/accounts:signInWithCustomToken",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ft(e,t){const n=Ne(e),r=await Mt(n,{token:t,returnSecureToken:!0}),i=await Tt._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Vt._fromServerResponse(e,t):y(e,"internal-error")}}class Vt extends Ut{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Vt(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(e,t,n){var r;I((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),I("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(I(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(I(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bt(e,t,n){const i=Object(r["l"])(e),s={requestType:"PASSWORD_RESET",email:t};n&&qt(i,s,n),await $e(i,s)}async function Gt(e,t,n){await Ve(Object(r["l"])(e),{oobCode:t,newPassword:n})}async function Kt(e,t){await Be(Object(r["l"])(e),{oobCode:t})}async function zt(e,t){const n=Object(r["l"])(e),i=await Ve(n,{oobCode:t}),s=i.requestType;switch(I(s,n,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":I(i.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":I(i.mfaInfo,n,"internal-error");default:I(i.email,n,"internal-error")}let o=null;return i.mfaInfo&&(o=Ut._fromServerResponse(Ne(n),i.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.newEmail:i.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.email:i.newEmail)||null,multiFactorInfo:o},operation:s}}async function $t(e,t){const{data:n}=await zt(Object(r["l"])(e),t);return n.email}async function Wt(e,t,n){const r=Ne(e),i=await It(r,{returnSecureToken:!0,email:t,password:n}),s=await Tt._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function Ht(e,t,n){return Pt(Object(r["l"])(e),lt.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qt(e,t,n){const i=Object(r["l"])(e),s={requestType:"EMAIL_SIGNIN",email:t};I(n.handleCodeInApp,i,"argument-error"),n&&qt(i,s,n),await We(i,s)}function Yt(e,t){const n=ut.parseLink(t);return"EMAIL_SIGNIN"===(null===n||void 0===n?void 0:n.operation)}async function Jt(e,t,n){const i=Object(r["l"])(e),s=lt.credentialWithLink(t,n||A());return I(s._tenantId===(i.tenantId||null),i,"tenant-id-mismatch"),Pt(i,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xt(e,t){return U(e,"POST","/v1/accounts:createAuthUri",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zt(e,t){const n=C()?A():"http://localhost",i={identifier:t,continueUri:n},{signinMethods:s}=await Xt(Object(r["l"])(e),i);return s||[]}async function en(e,t){const n=Object(r["l"])(e),i=await e.getIdToken(),s={requestType:"VERIFY_EMAIL",idToken:i};t&&qt(n.auth,s,t);const{email:o}=await ze(n.auth,s);o!==e.email&&await e.reload()}async function tn(e,t,n){const i=Object(r["l"])(e),s=await e.getIdToken(),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:s,newEmail:t};n&&qt(i.auth,o,n);const{email:a}=await He(i.auth,o);a!==e.email&&await e.reload()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nn(e,t){return U(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rn(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const i=Object(r["l"])(e),s=await i.getIdToken(),o={idToken:s,displayName:t,photoUrl:n,returnSecureToken:!0},a=await Z(i,nn(i.auth,o));i.displayName=a.displayName||null,i.photoURL=a.photoUrl||null;const c=i.providerData.find(({providerId:e})=>"password"===e);c&&(c.displayName=i.displayName,c.photoURL=i.photoURL),await i._updateTokensIfNecessary(a)}function sn(e,t){return an(Object(r["l"])(e),t,null)}function on(e,t){return an(Object(r["l"])(e),null,t)}async function an(e,t,n){const{auth:r}=e,i=await e.getIdToken(),s={idToken:i,returnSecureToken:!0};t&&(s.email=t),n&&(s.password=n);const o=await Z(e,qe(r,s));await e._updateTokensIfNecessary(o,!0)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(e){var t,n;if(!e)return null;const{providerId:r}=e,i=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},s=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!r&&(null===e||void 0===e?void 0:e.idToken)){const r=null===(n=null===(t=J(e.idToken))||void 0===t?void 0:t.firebase)||void 0===n?void 0:n["sign_in_provider"];if(r){const e="anonymous"!==r&&"custom"!==r?r:null;return new un(s,e)}}if(!r)return null;switch(r){case"facebook.com":return new hn(s,i);case"github.com":return new dn(s,i);case"google.com":return new fn(s,i);case"twitter.com":return new pn(s,i,e.screenName||null);case"custom":case"anonymous":return new un(s,null);default:return new un(s,r,i)}}class un{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class ln extends un{constructor(e,t,n,r){super(e,t,n),this.username=r}}class hn extends un{constructor(e,t){super(e,"facebook.com",t)}}class dn extends ln{constructor(e,t){super(e,"github.com",t,"string"===typeof(null===t||void 0===t?void 0:t.login)?null===t||void 0===t?void 0:t.login:null)}}class fn extends un{constructor(e,t){super(e,"google.com",t)}}class pn extends ln{constructor(e,t,n){super(e,"twitter.com",t,n)}}function gn(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:cn(n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e,t){this.type=e,this.credential=t}static _fromIdtoken(e){return new mn("enroll",e)}static _fromMfaPendingCredential(e){return new mn("signin",e)}toJSON(){const e="enroll"===this.type?"idToken":"pendingCredential";return{multiFactorSession:{[e]:this.credential}}}static fromJSON(e){var t,n;if(null===e||void 0===e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return mn._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(n=e.multiFactorSession)||void 0===n?void 0:n.idToken)return mn._fromIdtoken(e.multiFactorSession.idToken)}return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=Ne(e),r=t.customData._serverResponse,i=(r.mfaInfo||[]).map(e=>Ut._fromServerResponse(n,e));I(r.mfaPendingCredential,n,"internal-error");const s=mn._fromMfaPendingCredential(r.mfaPendingCredential);return new yn(s,i,async e=>{const i=await e._process(n,s);delete r.mfaInfo,delete r.mfaPendingCredential;const o=Object.assign(Object.assign({},r),{idToken:i.idToken,refreshToken:i.refreshToken});switch(t.operationType){case"signIn":const e=await Tt._fromIdTokenResponse(n,t.operationType,o);return await n._updateCurrentUser(e.user),e;case"reauthenticate":return I(t.user,n,"internal-error"),Tt._forOperation(t.user,t.operationType,o);default:y(n,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function vn(e,t){var n;const i=Object(r["l"])(e),s=t;return I(t.customData.operationType,i,"argument-error"),I(null===(n=s.customData._serverResponse)||void 0===n?void 0:n.mfaPendingCredential,i,"argument-error"),yn._fromError(i,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(e,t){return U(e,"POST","/v2/accounts/mfaEnrollment:start",F(e,t))}function wn(e,t){return U(e,"POST","/v2/accounts/mfaEnrollment:finalize",F(e,t))}function _n(e,t){return U(e,"POST","/v2/accounts/mfaEnrollment:withdraw",F(e,t))}class In{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(t=>Ut._fromServerResponse(e.auth,t)))})}static _fromUser(e){return new In(e)}async getSession(){return mn._fromIdtoken(await this.user.getIdToken())}async enroll(e,t){const n=e,r=await this.getSession(),i=await Z(this.user,n._process(this.user.auth,r,t));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){const t="string"===typeof e?e:e.uid,n=await this.user.getIdToken(),r=await Z(this.user,_n(this.user.auth,{idToken:n,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:e})=>e!==t),await this.user._updateTokensIfNecessary(r);try{await this.user.reload()}catch(i){if("auth/user-token-expired"!==i.code)throw i}}}const Tn=new WeakMap;function En(e){const t=Object(r["l"])(e);return Tn.has(t)||Tn.set(t,In._fromUser(t)),Tn.get(t)}const Sn="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Sn,"1"),this.storage.removeItem(Sn),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(){const e=Object(r["m"])();return ye(e)||Te(e)}const An=1e3,Cn=10;class xn extends On{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=kn()&&Ae(),this.fallbackToPolling=ke(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Oe()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Cn):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},An)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}xn.type="LOCAL";const Rn=xn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends On{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Nn.type="SESSION";const Dn=Nn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(e){return Promise.all(e.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new jn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map(async e=>e(t.origin,i)),a=await Pn(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ln(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jn.receivers=[];class Mn{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise((o,a)=>{const c=Ln("",20);r.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(){return window}function Un(e){Fn().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(){return"undefined"!==typeof Fn()["WorkerGlobalScope"]&&"function"===typeof Fn()["importScripts"]}async function qn(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function Bn(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Gn(){return Vn()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn="firebaseLocalStorageDb",zn=1,$n="firebaseLocalStorage",Wn="fbase_key";class Hn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Qn(e,t){return e.transaction([$n],t?"readwrite":"readonly").objectStore($n)}function Yn(){const e=indexedDB.deleteDatabase(Kn);return new Hn(e).toPromise()}function Jn(){const e=indexedDB.open(Kn,zn);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore($n,{keyPath:Wn})}catch(r){n(r)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains($n)?t(n):(n.close(),await Yn(),t(await Jn()))})})}async function Xn(e,t,n){const r=Qn(e,!0).put({[Wn]:t,value:n});return new Hn(r).toPromise()}async function Zn(e,t){const n=Qn(e,!1).get(t),r=await new Hn(n).toPromise();return void 0===r?null:r.value}function er(e,t){const n=Qn(e,!0).delete(t);return new Hn(n).toPromise()}const tr=800,nr=3;class rr{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await Jn()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>nr)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Vn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jn._getInstance(Gn()),this.receiver._subscribe("keyChanged",async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await qn(),!this.activeServiceWorker)return;this.sender=new Mn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&Bn()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jn();return await Xn(e,Sn,"1"),await er(e,Sn),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Xn(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>Zn(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>er(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=Qn(e,!1).getAll();return new Hn(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),tr)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}rr.type="LOCAL";const ir=rr;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(e,t){return U(e,"POST","/v2/accounts/mfaSignIn:start",F(e,t))}function or(e,t){return U(e,"POST","/v2/accounts/mfaSignIn:finalize",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ar(e){return(await U(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function ur(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=v("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",cr().appendChild(r)})}function lr(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr=500,dr=6e4,fr=1e12;class pr{constructor(e){this.auth=e,this.counter=fr,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new gr(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||fr;null===(t=this._widgets.get(n))||void 0===t||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||fr;return(null===(t=this._widgets.get(n))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;const n=e||fr;return null===(t=this._widgets.get(n))||void 0===t||t.execute(),""}}class gr{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r="string"===typeof e?document.getElementById(e):e;I(r,"argument-error",{appName:t}),this.container=r,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout(()=>{this.responseToken=mr(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(n){}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(n){}this.isVisible&&this.execute()},dr)},hr))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function mr(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<e;r++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr=lr("rcb"),vr=new D(3e4,6e4),br="https://www.google.com/recaptcha/api.js?";class wr{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!Fn().grecaptcha}load(e,t=""){return I(_r(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(Fn().grecaptcha):new Promise((n,i)=>{const s=Fn().setTimeout(()=>{i(v(e,"network-request-failed"))},vr.get());Fn()[yr]=()=>{Fn().clearTimeout(s),delete Fn()[yr];const r=Fn().grecaptcha;if(!r)return void i(v(e,"internal-error"));const o=r.render;r.render=(e,t)=>{const n=o(e,t);return this.counter++,n},this.hostLanguage=t,n(r)};const o=`${br}?${Object(r["y"])({onload:yr,render:"explicit",hl:t})}`;ur(o).catch(()=>{clearTimeout(s),i(v(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!Fn().grecaptcha&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function _r(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}class Ir{async load(e){return new pr(e)}clearedOneInstance(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr="recaptcha",Er={theme:"light",type:"image"};class Sr{constructor(e,t=Object.assign({},Er),n){this.parameters=t,this.type=Tr,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Ne(n),this.isInvisible="invisible"===this.parameters.size,I("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment");const r="string"===typeof e?document.getElementById(e):e;I(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Ir:new wr,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise(n=>{const r=e=>{e&&(this.tokenChangeListeners.delete(r),n(e))};this.tokenChangeListeners.add(r),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e})),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){I(!this.parameters.sitekey,this.auth,"argument-error"),I(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),I("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(e=>e(t)),"function"===typeof e)e(t);else if("string"===typeof e){const n=Fn()[e];"function"===typeof n&&n(t)}}}assertNotDestroyed(){I(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){I(C()&&!Vn(),this.auth,"internal-error"),await Or(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await ar(this.auth);I(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return I(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Or(){let e=null;return new Promise(t=>{"complete"!==document.readyState?(e=()=>t(),window.addEventListener("load",e)):t()}).catch(t=>{throw e&&window.removeEventListener("load",e),t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=ot._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function Ar(e,t,n){const i=Ne(e),s=await Rr(i,t,Object(r["l"])(n));return new kr(s,e=>Pt(i,e))}async function Cr(e,t,n){const i=Object(r["l"])(e);await Rt(!1,i,"phone");const s=await Rr(i.auth,t,Object(r["l"])(n));return new kr(s,e=>jt(i,e))}async function xr(e,t,n){const i=Object(r["l"])(e),s=await Rr(i.auth,t,Object(r["l"])(n));return new kr(s,e=>Lt(i,e))}async function Rr(e,t,n){var r;const i=await n.verify();try{let s;if(I("string"===typeof i,e,"argument-error"),I(n.type===Tr,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){I("enroll"===t.type,e,"internal-error");const n=await bn(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{I("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;I(n,e,"missing-multi-factor-info");const o=await sr(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await tt(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}async function Nr(e,t){await xt(Object(r["l"])(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e){this.providerId=Dr.PROVIDER_ID,this.auth=Ne(e)}verifyPhoneNumber(e,t){return Rr(this.auth,e,Object(r["l"])(t))}static credential(e,t){return ot._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Dr.credentialFromTaggedObject(t)}static credentialFromError(e){return Dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?ot._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Pr(e,t){return t?O(t):(I(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dr.PROVIDER_ID="phone",Dr.PHONE_SIGN_IN_METHOD="phone";class jr extends Ue{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xe(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Xe(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Xe(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Lr(e){return Dt(e.auth,new jr(e),e.bypassAuthState)}function Mr(e){const{auth:t,user:n}=e;return I(n,t,"internal-error"),Nt(n,new jr(e),e.bypassAuthState)}async function Fr(e){const{auth:t,user:n}=e;return I(n,t,"internal-error"),xt(n,new jr(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Lr;case"linkViaPopup":case"linkViaRedirect":return Fr;case"reauthViaPopup":case"reauthViaRedirect":return Mr;default:y(this.auth,"internal-error")}}resolve(e){E(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){E(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr=new D(2e3,1e4);async function qr(e,t,n){const r=Ne(e);w(e,t,ht);const i=Pr(r,n),s=new Kr(r,"signInViaPopup",t,i);return s.executeNotNull()}async function Br(e,t,n){const i=Object(r["l"])(e);w(i.auth,t,ht);const s=Pr(i.auth,n),o=new Kr(i.auth,"reauthViaPopup",t,s,i);return o.executeNotNull()}async function Gr(e,t,n){const i=Object(r["l"])(e);w(i.auth,t,ht);const s=Pr(i.auth,n),o=new Kr(i.auth,"linkViaPopup",t,s,i);return o.executeNotNull()}class Kr extends Ur{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Kr.currentPopupAction&&Kr.currentPopupAction.cancel(),Kr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return I(e,this.auth,"internal-error"),e}async onExecution(){E(1===this.filter.length,"Popup operations only handle one event");const e=Ln();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(v(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(v(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Kr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(v(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(e,Vr.get())};e()}}Kr.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const zr="pendingRedirect",$r=new Map;class Wr extends Ur{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=$r.get(this.auth._key());if(!e){try{const t=await Hr(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}$r.set(this.auth._key(),e)}return this.bypassAuthState||$r.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Hr(e,t){const n=Zr(t),r=Xr(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}async function Qr(e,t){return Xr(e)._set(Zr(t),"true")}function Yr(){$r.clear()}function Jr(e,t){$r.set(e._key(),t)}function Xr(e){return O(e._redirectPersistence)}function Zr(e){return fe(zr,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(e,t,n){return ti(e,t,n)}async function ti(e,t,n){const r=Ne(e);w(e,t,ht);const i=Pr(r,n);return await Qr(i,r),i._openRedirect(r,t,"signInViaRedirect")}function ni(e,t,n){return ri(e,t,n)}async function ri(e,t,n){const i=Object(r["l"])(e);w(i.auth,t,ht);const s=Pr(i.auth,n);await Qr(s,i.auth);const o=await ci(i);return s._openRedirect(i.auth,t,"reauthViaRedirect",o)}function ii(e,t,n){return si(e,t,n)}async function si(e,t,n){const i=Object(r["l"])(e);w(i.auth,t,ht);const s=Pr(i.auth,n);await Rt(!1,i,t.providerId),await Qr(s,i.auth);const o=await ci(i);return s._openRedirect(i.auth,t,"linkViaRedirect",o)}async function oi(e,t){return await Ne(e)._initializationPromise,ai(e,t,!1)}async function ai(e,t,n=!1){const r=Ne(e),i=Pr(r,t),s=new Wr(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}async function ci(e){const t=Ln(e.uid+":::");return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui=6e5;class li{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fi(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!di(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(v(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ui&&this.cachedEventUids.clear(),this.cachedEventUids.has(hi(e))}saveEventToCache(e){this.cachedEventUids.add(hi(e)),this.lastProcessedEventTime=Date.now()}}function hi(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function di({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function fi(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return di(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pi(e,t={}){return U(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,mi=/^https?/;async function yi(e){if(e.config.emulator)return;const{authorizedDomains:t}=await pi(e);for(const r of t)try{if(vi(r))return}catch(n){}y(e,"unauthorized-domain")}function vi(e){const t=A(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!mi.test(n))return!1;if(gi.test(e))return r===e;const i=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi=new D(3e4,6e4);function wi(){const e=Fn().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function _i(e){return new Promise((t,n)=>{var r,i,s;function o(){wi(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{wi(),n(v(e,"network-request-failed"))},timeout:bi.get()})}if(null===(i=null===(r=Fn().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Fn().gapi)||void 0===s?void 0:s.load)){const t=lr("iframefcb");return Fn()[t]=()=>{gapi.load?o():n(v(e,"network-request-failed"))},ur("https://apis.google.com/js/api.js?onload="+t).catch(e=>n(e))}o()}}).catch(e=>{throw Ii=null,e})}let Ii=null;function Ti(e){return Ii=Ii||_i(e),Ii}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei=new D(5e3,15e3),Si="__/auth/iframe",Oi="emulator/auth/iframe",ki={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ai=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ci(e){const t=e.config;I(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?P(t,Oi):`https://${e.config.authDomain}/${Si}`,s={apiKey:t.apiKey,appName:e.name,v:i["SDK_VERSION"]},o=Ai.get(e.config.apiHost);o&&(s.eid=o);const a=e._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${Object(r["y"])(s).slice(1)}`}async function xi(e){const t=await Ti(e),n=Fn().gapi;return I(n,e,"internal-error"),t.open({where:document.body,url:Ci(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ki,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=v(e,"network-request-failed"),s=Fn().setTimeout(()=>{r(i)},Ei.get());function o(){Fn().clearTimeout(s),n(t)}t.ping(o).then(o,()=>{r(i)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ni=500,Di=600,Pi="_blank",ji="http://localhost";class Li{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Mi(e,t,n,i=Ni,s=Di){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Ri),{width:i.toString(),height:s.toString(),top:o,left:a}),l=Object(r["m"])().toLowerCase();n&&(c=ve(l)?Pi:n),me(l)&&(t=t||ji,u.scrollbars="yes");const h=Object.entries(u).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(Se(l)&&"_self"!==c)return Fi(t||"",c),new Li(null);const d=window.open(t||"",c,h);I(d,e,"popup-blocked");try{d.focus()}catch(f){}return new Li(d)}function Fi(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui="__/auth/handler",Vi="emulator/auth/handler";function qi(e,t,n,s,o,a){I(e.config.authDomain,e,"auth-domain-config-required"),I(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:i["SDK_VERSION"],eventId:o};if(t instanceof ht){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",Object(r["q"])(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof dt){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];return`${Bi(e)}?${Object(r["y"])(u).slice(1)}`}function Bi({config:e}){return e.emulator?P(e,Vi):`https://${e.authDomain}/${Ui}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi="webStorageSupport";class Ki{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Dn,this._completeRedirectFn=ai,this._overrideRedirectResult=Jr}async _openPopup(e,t,n,r){var i;E(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=qi(e,t,n,A(),r);return Mi(e,s,Ln())}async _openRedirect(e,t,n,r){return await this._originValidation(e),Un(qi(e,t,n,A(),r)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(E(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await xi(e),n=new li(e);return t.register("authEvent",t=>{I(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Gi,{type:Gi},n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Gi];void 0!==i&&t(!!i),y(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=yi(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ke()||ye()||Te()}}const zi=Ki;class $i{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return T("unexpected MultiFactorSessionType")}}}class Wi extends $i{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Wi(e)}_finalizeEnroll(e,t,n){return wn(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return or(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Hi{constructor(){}static assertion(e){return Wi._fromCredential(e)}}Hi.FACTOR_ID="phone";var Qi="@firebase/auth",Yi="0.20.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ji{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){I(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Zi(e){Object(i["_registerComponent"])(new a["a"]("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((t,r)=>{I(s&&!s.includes(":"),"invalid-api-key",{appName:t.name}),I(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:t.name});const i={apiKey:s,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ce(e)},a=new Re(t,r,i);return k(a,n),a})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()})),Object(i["_registerComponent"])(new a["a"]("auth-internal",e=>{const t=Ne(e.getProvider("auth").getImmediate());return(e=>new Ji(e))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Object(i["registerVersion"])(Qi,Yi,Xi(e)),Object(i["registerVersion"])(Qi,Yi,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function es(){return window}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zi("Browser");const ts=2e3;async function ns(e,t,n){var r;const{BuildInfo:i}=es();E(t.sessionId,"AuthEvent did not contain a session ID");const s=await as(t.sessionId),o={};return Te()?o["ibi"]=i.packageName:we()?o["apn"]=i.packageName:y(e,"operation-not-supported-in-this-environment"),i.displayName&&(o["appDisplayName"]=i.displayName),o["sessionId"]=s,qi(e,n,t.type,void 0,null!==(r=t.eventId)&&void 0!==r?r:void 0,o)}async function rs(e){const{BuildInfo:t}=es(),n={};Te()?n.iosBundleId=t.packageName:we()?n.androidPackageName=t.packageName:y(e,"operation-not-supported-in-this-environment"),await pi(e,n)}function is(e){const{cordova:t}=es();return new Promise(n=>{t.plugins.browsertab.isAvailable(r=>{let i=null;r?t.plugins.browsertab.openUrl(e):i=t.InAppBrowser.open(e,Ee()?"_blank":"_system","location=yes"),n(i)})})}async function ss(e,t,n){const{cordova:r}=es();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function c(){var e;s();const t=null===(e=r.plugins.browsertab)||void 0===e?void 0:e.close;"function"===typeof t&&t(),"function"===typeof(null===n||void 0===n?void 0:n.close)&&n.close()}function u(){a||(a=window.setTimeout(()=>{o(v(e,"redirect-cancelled-by-user"))},ts))}function l(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&u()}t.addPassiveListener(c),document.addEventListener("resume",u,!1),we()&&document.addEventListener("visibilitychange",l,!1),i=()=>{t.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}})}finally{i()}}function os(e){var t,n,r,i,s,o,a,c,u,l;const h=es();I("function"===typeof(null===(t=null===h||void 0===h?void 0:h.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),I("undefined"!==typeof(null===(n=null===h||void 0===h?void 0:h.BuildInfo)||void 0===n?void 0:n.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),I("function"===typeof(null===(s=null===(i=null===(r=null===h||void 0===h?void 0:h.cordova)||void 0===r?void 0:r.plugins)||void 0===i?void 0:i.browsertab)||void 0===s?void 0:s.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),I("function"===typeof(null===(c=null===(a=null===(o=null===h||void 0===h?void 0:h.cordova)||void 0===o?void 0:o.plugins)||void 0===a?void 0:a.browsertab)||void 0===c?void 0:c.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),I("function"===typeof(null===(l=null===(u=null===h||void 0===h?void 0:h.cordova)||void 0===u?void 0:u.InAppBrowser)||void 0===l?void 0:l.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function as(e){const t=cs(e),n=await crypto.subtle.digest("SHA-256",t),r=Array.from(new Uint8Array(n));return r.map(e=>e.toString(16).padStart(2,"0")).join("")}function cs(e){if(E(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!==typeof TextEncoder)return(new TextEncoder).encode(e);const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us=20;class ls extends li{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function hs(e,t,n=null){return{type:t,eventId:n,urlResponse:null,sessionId:gs(),postBody:null,tenantId:e.tenantId,error:v(e,"no-auth-event")}}function ds(e,t){return ms()._set(ys(e),t)}async function fs(e){const t=await ms()._get(ys(e));return t&&await ms()._remove(ys(e)),t}function ps(e,t){var n,r;const i=bs(t);if(i.includes("/__/auth/callback")){const t=ws(i),s=t["firebaseError"]?vs(decodeURIComponent(t["firebaseError"])):null,o=null===(r=null===(n=null===s||void 0===s?void 0:s["code"])||void 0===n?void 0:n.split("auth/"))||void 0===r?void 0:r[1],a=o?v(o):null;return a?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:a,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:i,postBody:null}}return null}function gs(){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<us;n++){const n=Math.floor(Math.random()*t.length);e.push(t.charAt(n))}return e.join("")}function ms(){return O(Rn)}function ys(e){return fe("authEvent",e.config.apiKey,e.name)}function vs(e){try{return JSON.parse(e)}catch(t){return null}}function bs(e){const t=ws(e),n=t["link"]?decodeURIComponent(t["link"]):void 0,r=ws(n)["link"],i=t["deep_link_id"]?decodeURIComponent(t["deep_link_id"]):void 0,s=ws(i)["link"];return s||i||r||n||e}function ws(e){if(!(null===e||void 0===e?void 0:e.includes("?")))return{};const[t,...n]=e.split("?");return Object(r["z"])(n.join("?"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s=500;class Is{constructor(){this._redirectPersistence=Dn,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=ai,this._overrideRedirectResult=Jr}async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new ls(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){y(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,r){os(e);const i=await this._initialize(e);await i.initialized(),i.resetRedirect(),Yr(),await this._originValidation(e);const s=hs(e,n,r);await ds(e,s);const o=await ns(e,s,t),a=await is(o);return ss(e,i,a)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=rs(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:r,BuildInfo:i}=es(),s=setTimeout(async()=>{await fs(e),t.onEvent(Es())},_s),o=async n=>{clearTimeout(s);const r=await fs(e);let i=null;r&&(null===n||void 0===n?void 0:n["url"])&&(i=ps(r,n["url"])),t.onEvent(i||Es())};"undefined"!==typeof n&&"function"===typeof n.subscribe&&n.subscribe(null,o);const a=r,c=i.packageName.toLowerCase()+"://";es().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(c)&&o({url:e}),"function"===typeof a)try{a(e)}catch(t){console.error(t)}}}}const Ts=Is;function Es(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:v("no-auth-event")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ss(e,t){Ne(e)._logFramework(t)}},"1fd5":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return k})),n.d(t,"c",(function(){return O})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return a})),n.d(t,"f",(function(){return x})),n.d(t,"g",(function(){return d})),n.d(t,"h",(function(){return M})),n.d(t,"i",(function(){return N})),n.d(t,"j",(function(){return u})),n.d(t,"k",(function(){return L})),n.d(t,"l",(function(){return q})),n.d(t,"m",(function(){return f})),n.d(t,"n",(function(){return m})),n.d(t,"o",(function(){return y})),n.d(t,"p",(function(){return b})),n.d(t,"q",(function(){return R})),n.d(t,"r",(function(){return w})),n.d(t,"s",(function(){return T})),n.d(t,"t",(function(){return p})),n.d(t,"u",(function(){return g})),n.d(t,"v",(function(){return v})),n.d(t,"w",(function(){return I})),n.d(t,"x",(function(){return _})),n.d(t,"y",(function(){return P})),n.d(t,"z",(function(){return j})),n.d(t,"A",(function(){return E}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,l=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length,o=s?n[e.charAt(i)]:0;++i;const a=i<e.length,c=a?n[e.charAt(i)]:64;++i;const u=i<e.length,l=u?n[e.charAt(i)]:64;if(++i,null==t||null==o||null==c||null==l)throw Error();const h=t<<2|o>>4;if(r.push(h),64!==c){const e=o<<4&240|c>>2;if(r.push(e),64!==l){const e=c<<6&192|l;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},o=function(e){const t=r(e);return s.encodeByteArray(t,!0)},a=function(e){return o(e).replace(/\./g,"")},c=function(e){try{return s.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&l(n)&&(e[n]=u(e[n],t[n]));return e}function l(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:"https://securetoken.google.com/"+r,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),c="";return[a(JSON.stringify(n)),a(JSON.stringify(o)),c].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function p(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(f())}function g(){try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(t){return!1}}function m(){return"object"===typeof self&&self.self===self}function y(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function v(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function b(){return f().indexOf("Electron/")>=0}function w(){const e=f();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function _(){return f().indexOf("MSAppHost/")>=0}function I(){return!g()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function T(){return"object"===typeof indexedDB}function E(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const S="FirebaseError";class O extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=S,Object.setPrototypeOf(this,O.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,k.prototype.create)}}class k{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?A(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new O(r,o,n);return a}}function A(e,t){return e.replace(C,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}const C=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function x(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function R(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function N(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(D(n)&&D(s)){if(!N(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function D(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function j(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach(e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function L(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(e,t){const n=new F(e,t);return n.subscribe.bind(n)}class F{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=U(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=V),void 0===r.error&&(r.error=V),void 0===r.complete&&(r.complete=V);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function U(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function V(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function q(e){return e&&e._delegate?e._delegate:e}}).call(this,n("c8ba"))},2266:function(e,t,n){var r=n("0366"),i=n("c65b"),s=n("825a"),o=n("0d51"),a=n("e95a"),c=n("07fa"),u=n("3a9b"),l=n("9a1f"),h=n("35a1"),d=n("2a62"),f=TypeError,p=function(e,t){this.stopped=e,this.result=t},g=p.prototype;e.exports=function(e,t,n){var m,y,v,b,w,_,I,T=n&&n.that,E=!(!n||!n.AS_ENTRIES),S=!(!n||!n.IS_ITERATOR),O=!(!n||!n.INTERRUPTED),k=r(t,T),A=function(e){return m&&d(m,"normal",e),new p(!0,e)},C=function(e){return E?(s(e),O?k(e[0],e[1],A):k(e[0],e[1])):O?k(e,A):k(e)};if(S)m=e;else{if(y=h(e),!y)throw f(o(e)+" is not iterable");if(a(y)){for(v=0,b=c(e);b>v;v++)if(w=C(e[v]),w&&u(g,w))return w;return new p(!1)}m=l(e,y)}_=m.next;while(!(I=i(_,m)).done){try{w=C(I.value)}catch(x){d(m,"throw",x)}if("object"==typeof w&&w&&u(g,w))return w}return new p(!1)}},"22e5":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u}));var r=n("1fd5");class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r["a"];if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},"23cb":function(e,t,n){var r=n("5926"),i=Math.max,s=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):s(n,t)}},"23dc":function(e,t,n){var r=n("d44e");r(Math,"Math",!0)},"23e7":function(e,t,n){var r=n("da84"),i=n("06cf").f,s=n("9112"),o=n("cb2d"),a=n("6374"),c=n("e893"),u=n("94ca");e.exports=function(e,t){var n,l,h,d,f,p,g=e.target,m=e.global,y=e.stat;if(l=m?r:y?r[g]||a(g,{}):(r[g]||{}).prototype,l)for(h in t){if(f=t[h],e.dontCallGetSet?(p=i(l,h),d=p&&p.value):d=l[h],n=u(m?h:g+(y?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&s(f,"sham",!0),o(l,h,f,e)}}},"241c":function(e,t,n){var r=n("ca84"),i=n("7839"),s=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,s)}},"24ee":function(e,t,n){"use strict";var r=n("7ded"),i=n("589b"),s=n("1fd5"),o=n("22e5");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const a="firebasestorage.googleapis.com",c="storageBucket",u=12e4,l=6e5;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class h extends s["c"]{constructor(e,t){super(d(e),`Firebase Storage: ${t} (${d(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,h.prototype)}_codeEquals(e){return d(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function d(e){return"storage/"+e}function f(){const e="An unknown error occurred, please check the error payload for server response.";return new h("unknown",e)}function p(e){return new h("object-not-found","Object '"+e+"' does not exist.")}function g(e){return new h("quota-exceeded","Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function m(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new h("unauthenticated",e)}function y(){return new h("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function v(e){return new h("unauthorized","User does not have permission to access '"+e+"'.")}function b(){return new h("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function w(){return new h("canceled","User canceled the upload/download.")}function _(e){return new h("invalid-url","Invalid URL '"+e+"'.")}function I(e){return new h("invalid-default-bucket","Invalid default bucket '"+e+"'.")}function T(){return new h("no-default-bucket","No default bucket found. Did you set the '"+c+"' property when initializing the app?")}function E(){return new h("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function S(){return new h("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.")}function O(){return new h("no-download-url","The given file does not have any download URLs.")}function k(e){return new h("invalid-argument",e)}function A(){return new h("app-deleted","The Firebase app was deleted.")}function C(e){return new h("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function x(e,t){return new h("invalid-format","String does not match format '"+e+"': "+t)}function R(e){throw new h("internal-error","Internal error: "+e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=N.makeFromUrl(e,t)}catch(r){return new N(e,"")}if(""===n.path)return n;throw I(e)}static makeFromUrl(e,t){let n=null;const r="([A-Za-z0-9.\\-_]+)";function i(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}const s="(/(.*))?$",o=new RegExp("^gs://"+r+s,"i"),c={bucket:1,path:3};function u(e){e.path_=decodeURIComponent(e.path)}const l="v[A-Za-z0-9_]+",h=t.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${l}/b/${r}/o${d}`,"i"),p={bucket:1,path:3},g=t===a?"(?:storage.googleapis.com|storage.cloud.google.com)":t,m="([^?#]*)",y=new RegExp(`^https?://${g}/${r}/${m}`,"i"),v={bucket:1,path:2},b=[{regex:o,indices:c,postModify:i},{regex:f,indices:p,postModify:u},{regex:y,indices:v,postModify:u}];for(let a=0;a<b.length;a++){const t=b[a],r=t.regex.exec(e);if(r){const e=r[t.indices.bucket];let i=r[t.indices.path];i||(i=""),n=new N(e,i),t.postModify(n);break}}if(null==n)throw _(e);return n}}class D{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(e,t,n){let r=1,i=null,s=null,o=!1,a=0;function c(){return 2===a}let u=!1;function l(...e){u||(u=!0,t.apply(null,e))}function h(t){i=setTimeout(()=>{i=null,e(f,c())},t)}function d(){s&&clearTimeout(s)}function f(e,...t){if(u)return void d();if(e)return d(),void l.call(null,e,...t);const n=c()||o;if(n)return d(),void l.call(null,e,...t);let i;r<64&&(r*=2),1===a?(a=2,i=0):i=1e3*(r+Math.random()),h(i)}let p=!1;function g(e){p||(p=!0,d(),u||(null!==i?(e||(a=2),clearTimeout(i),h(0)):e||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,g(!0)},n),g}function j(e){e(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e){return void 0!==e}function M(e){return"function"===typeof e}function F(e){return"object"===typeof e&&!Array.isArray(e)}function U(e){return"string"===typeof e||e instanceof String}function V(e){return q()&&e instanceof Blob}function q(){return"undefined"!==typeof Blob}function B(e,t,n,r){if(r<t)throw k(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw k(`Invalid value for '${e}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(e,t,n){let r=t;return null==n&&(r="https://"+t),`${n}://${r}/v0${e}`}function K(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var z;(function(e){e[e["NO_ERROR"]=0]="NO_ERROR",e[e["NETWORK_ERROR"]=1]="NETWORK_ERROR",e[e["ABORT"]=2]="ABORT"})(z||(z={}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ${constructor(e,t,n,r,i,s,o,a,c,u,l){this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=l,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()})}start_(){const e=(e,t)=>{if(t)return void e(!1,new W(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const t=n.getErrorCode()===z.NO_ERROR,i=n.getStatus();if(!t||this.isRetryStatusCode_(i)){const t=n.getErrorCode()===z.ABORT;return void e(!1,new W(!1,null,t))}const s=-1!==this.successCodes_.indexOf(i);e(!0,new W(s,n))})},t=(e,t)=>{const n=this.resolve_,r=this.reject_,i=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(i,i.getResponse());L(e)?n(e):n()}catch(s){r(s)}else if(null!==i){const e=f();e.serverResponse=i.getErrorText(),this.errorCallback_?r(this.errorCallback_(i,e)):r(e)}else if(t.canceled){const e=this.appDelete_?A():w();r(e)}else{const e=b();r(e)}};this.canceled_?t(!1,new W(!1,null,!0)):this.backoffId_=P(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&j(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const t=e>=500&&e<600,n=[408,429],r=-1!==n.indexOf(e),i=-1!==this.additionalRetryCodes_.indexOf(e);return t||r||i}}class W{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function H(e,t){null!==t&&t.length>0&&(e["Authorization"]="Firebase "+t)}function Q(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!==t&&void 0!==t?t:"AppManager")}function Y(e,t){t&&(e["X-Firebase-GMPID"]=t)}function J(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}function X(e,t,n,r,i,s){const o=K(e.urlParams),a=e.url+o,c=Object.assign({},e.headers);return Y(c,t),H(c,n),Q(c,s),J(c,r),new $(a,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function ee(...e){const t=Z();if(void 0!==t){const n=new t;for(let t=0;t<e.length;t++)n.append(e[t]);return n.getBlob()}if(q())return new Blob(e);throw new h("unsupported-environment","This browser doesn't seem to support creating Blobs")}function te(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(e){return atob(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const re={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ie{constructor(e,t){this.data=e,this.contentType=t||null}}function se(e,t){switch(e){case re.RAW:return new ie(oe(t));case re.BASE64:case re.BASE64URL:return new ie(ce(e,t));case re.DATA_URL:return new ie(le(t),he(t))}throw f()}function oe(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|63&r);else if(55296===(64512&r)){const i=n<e.length-1&&56320===(64512&e.charCodeAt(n+1));if(i){const i=r,s=e.charCodeAt(++n);r=65536|(1023&i)<<10|1023&s,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else t.push(239,191,189)}else 56320===(64512&r)?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(t)}function ae(e){let t;try{t=decodeURIComponent(e)}catch(n){throw x(re.DATA_URL,"Malformed data URL.")}return oe(t)}function ce(e,t){switch(e){case re.BASE64:{const n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r){const t=n?"-":"_";throw x(e,"Invalid character '"+t+"' found: is it base64url encoded?")}break}case re.BASE64URL:{const n=-1!==t.indexOf("+"),r=-1!==t.indexOf("/");if(n||r){const t=n?"+":"/";throw x(e,"Invalid character '"+t+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=ne(t)}catch(i){throw x(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class ue{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw x(re.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;null!=n&&(this.base64=de(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=e.substring(e.indexOf(",")+1)}}function le(e){const t=new ue(e);return t.base64?ce(re.BASE64,t.rest):ae(t.rest)}function he(e){const t=new ue(e);return t.contentType}function de(e,t){const n=e.length>=t.length;return!!n&&e.substring(e.length-t.length)===t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e,t){let n=0,r="";V(e)?(this.data_=e,n=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if(V(this.data_)){const n=this.data_,r=te(n,e,t);return null===r?null:new fe(r)}{const n=new Uint8Array(this.data_.buffer,e,t-e);return new fe(n,!0)}}static getBlob(...e){if(q()){const t=e.map(e=>e instanceof fe?e.data_:e);return new fe(ee.apply(null,t))}{const t=e.map(e=>U(e)?se(re.RAW,e).data:e.data_);let n=0;t.forEach(e=>{n+=e.byteLength});const r=new Uint8Array(n);let i=0;return t.forEach(e=>{for(let t=0;t<e.length;t++)r[i++]=e[t]}),new fe(r,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(e){let t;try{t=JSON.parse(e)}catch(n){return null}return F(t)?t:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(e){if(0===e.length)return null;const t=e.lastIndexOf("/");if(-1===t)return"";const n=e.slice(0,t);return n}function me(e,t){const n=t.split("/").filter(e=>e.length>0).join("/");return 0===e.length?n:e+"/"+n}function ye(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(e,t){return t}class be{constructor(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||ve}}let we=null;function _e(e){return!U(e)||e.length<2?e:ye(e)}function Ie(){if(we)return we;const e=[];function t(e,t){return _e(t)}e.push(new be("bucket")),e.push(new be("generation")),e.push(new be("metageneration")),e.push(new be("name","fullPath",!0));const n=new be("name");function r(e,t){return void 0!==t?Number(t):t}n.xform=t,e.push(n);const i=new be("size");return i.xform=r,e.push(i),e.push(new be("timeCreated")),e.push(new be("updated")),e.push(new be("md5Hash",null,!0)),e.push(new be("cacheControl",null,!0)),e.push(new be("contentDisposition",null,!0)),e.push(new be("contentEncoding",null,!0)),e.push(new be("contentLanguage",null,!0)),e.push(new be("contentType",null,!0)),e.push(new be("metadata","customMetadata",!0)),we=e,we}function Te(e,t){function n(){const n=e["bucket"],r=e["fullPath"],i=new N(n,r);return t._makeStorageReference(i)}Object.defineProperty(e,"ref",{get:n})}function Ee(e,t,n){const r={type:"file"},i=n.length;for(let s=0;s<i;s++){const e=n[s];r[e.local]=e.xform(r,t[e.server])}return Te(r,e),r}function Se(e,t,n){const r=pe(t);if(null===r)return null;const i=r;return Ee(e,i,n)}function Oe(e,t,n,r){const i=pe(t);if(null===i)return null;if(!U(i["downloadTokens"]))return null;const s=i["downloadTokens"];if(0===s.length)return null;const o=encodeURIComponent,a=s.split(","),c=a.map(t=>{const i=e["bucket"],s=e["fullPath"],a="/b/"+o(i)+"/o/"+o(s),c=G(a,n,r),u=K({alt:"media",token:t});return c+u});return c[0]}function ke(e,t){const n={},r=t.length;for(let i=0;i<r;i++){const r=t[i];r.writable&&(n[r.server]=e[r.local])}return JSON.stringify(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ae="prefixes",Ce="items";function xe(e,t,n){const r={prefixes:[],items:[],nextPageToken:n["nextPageToken"]};if(n[Ae])for(const i of n[Ae]){const n=i.replace(/\/$/,""),s=e._makeStorageReference(new N(t,n));r.prefixes.push(s)}if(n[Ce])for(const i of n[Ce]){const n=e._makeStorageReference(new N(t,i["name"]));r.items.push(n)}return r}function Re(e,t,n){const r=pe(n);if(null===r)return null;const i=r;return xe(e,t,i)}class Ne{constructor(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(e){if(!e)throw f()}function Pe(e,t){function n(n,r){const i=Se(e,r,t);return De(null!==i),i}return n}function je(e,t){function n(n,r){const i=Re(e,t,r);return De(null!==i),i}return n}function Le(e,t){function n(n,r){const i=Se(e,r,t);return De(null!==i),Oe(i,r,e.host,e._protocol)}return n}function Me(e){function t(t,n){let r;return r=401===t.getStatus()?t.getErrorText().includes("Firebase App Check token is invalid")?y():m():402===t.getStatus()?g(e.bucket):403===t.getStatus()?v(e.path):n,r.serverResponse=n.serverResponse,r}return t}function Fe(e){const t=Me(e);function n(n,r){let i=t(n,r);return 404===n.getStatus()&&(i=p(e.path)),i.serverResponse=r.serverResponse,i}return n}function Ue(e,t,n){const r=t.fullServerUrl(),i=G(r,e.host,e._protocol),s="GET",o=e.maxOperationRetryTime,a=new Ne(i,s,Pe(e,n),o);return a.errorHandler=Fe(t),a}function Ve(e,t,n,r,i){const s={};t.isRoot?s["prefix"]="":s["prefix"]=t.path+"/",n&&n.length>0&&(s["delimiter"]=n),r&&(s["pageToken"]=r),i&&(s["maxResults"]=i);const o=t.bucketOnlyServerUrl(),a=G(o,e.host,e._protocol),c="GET",u=e.maxOperationRetryTime,l=new Ne(a,c,je(e,t.bucket),u);return l.urlParams=s,l.errorHandler=Me(t),l}function qe(e,t,n){const r=t.fullServerUrl(),i=G(r,e.host,e._protocol),s="GET",o=e.maxOperationRetryTime,a=new Ne(i,s,Le(e,n),o);return a.errorHandler=Fe(t),a}function Be(e,t,n,r){const i=t.fullServerUrl(),s=G(i,e.host,e._protocol),o="PATCH",a=ke(n,r),c={"Content-Type":"application/json; charset=utf-8"},u=e.maxOperationRetryTime,l=new Ne(s,o,Pe(e,r),u);return l.headers=c,l.body=a,l.errorHandler=Fe(t),l}function Ge(e,t){const n=t.fullServerUrl(),r=G(n,e.host,e._protocol),i="DELETE",s=e.maxOperationRetryTime;function o(e,t){}const a=new Ne(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=Fe(t),a}function Ke(e,t){return e&&e["contentType"]||t&&t.type()||"application/octet-stream"}function ze(e,t,n){const r=Object.assign({},n);return r["fullPath"]=e.path,r["size"]=t.size(),r["contentType"]||(r["contentType"]=Ke(null,t)),r}function $e(e,t,n,r,i){const s=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=ze(t,r,i),l=ke(u,n),h="--"+c+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+l+"\r\n--"+c+"\r\nContent-Type: "+u["contentType"]+"\r\n\r\n",d="\r\n--"+c+"--",f=fe.getBlob(h,r,d);if(null===f)throw E();const p={name:u["fullPath"]},g=G(s,e.host,e._protocol),m="POST",y=e.maxUploadRetryTime,v=new Ne(g,m,Pe(e,n),y);return v.urlParams=p,v.headers=o,v.body=f.uploadData(),v.errorHandler=Me(t),v}class We{constructor(e,t,n,r){this.current=e,this.total=t,this.finalized=!!n,this.metadata=r||null}}function He(e,t){let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch(i){De(!1)}const r=t||["active"];return De(!!n&&-1!==r.indexOf(n)),n}function Qe(e,t,n,r,i){const s=t.bucketOnlyServerUrl(),o=ze(t,r,i),a={name:o["fullPath"]},c=G(s,e.host,e._protocol),u="POST",l={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":""+r.size(),"X-Goog-Upload-Header-Content-Type":o["contentType"],"Content-Type":"application/json; charset=utf-8"},h=ke(o,n),d=e.maxUploadRetryTime;function f(e){let t;He(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(n){De(!1)}return De(U(t)),t}const p=new Ne(c,u,f,d);return p.urlParams=a,p.headers=l,p.body=h,p.errorHandler=Me(t),p}function Ye(e,t,n,r){const i={"X-Goog-Upload-Command":"query"};function s(e){const t=He(e,["active","final"]);let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(s){De(!1)}n||De(!1);const i=Number(n);return De(!isNaN(i)),new We(i,r.size(),"final"===t)}const o="POST",a=e.maxUploadRetryTime,c=new Ne(n,o,s,a);return c.headers=i,c.errorHandler=Me(t),c}const Je=262144;function Xe(e,t,n,r,i,s,o,a){const c=new We(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=r.size()),r.size()!==c.total)throw S();const u=c.total-c.current;let l=u;i>0&&(l=Math.min(l,i));const h=c.current,d=h+l,f=l===u?"upload, finalize":"upload",p={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":""+c.current},g=r.slice(h,d);if(null===g)throw E();function m(e,n){const i=He(e,["active","final"]),o=c.current+l,a=r.size();let u;return u="final"===i?Pe(t,s)(e,n):null,new We(o,a,"final"===i,u)}const y="POST",v=t.maxUploadRetryTime,b=new Ne(n,y,m,v);return b.headers=p,b.body=g.uploadData(),b.progressCallback=a||null,b.errorHandler=Me(e),b}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze={STATE_CHANGED:"state_changed"},et={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function tt(e){switch(e){case"running":case"pausing":case"canceling":return et.RUNNING;case"paused":return et.PAUSED;case"success":return et.SUCCESS;case"canceled":return et.CANCELED;case"error":return et.ERROR;default:return et.ERROR}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,t,n){const r=M(e)||null!=t||null!=n;if(r)this.next=e,this.error=null!==t&&void 0!==t?t:void 0,this.complete=null!==n&&void 0!==n?n:void 0;else{const t=e;this.next=t.next,this.error=t.error,this.complete=t.complete}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(e){return(...t)=>{Promise.resolve().then(()=>e(...t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let it=null;class st{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=z.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=z.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=z.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,n,r){if(this.sent_)throw R("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==r)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw R("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw R("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponse(){if(!this.sent_)throw R("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw R("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class ot extends st{initXhr(){this.xhr_.responseType="text"}}function at(){return it?it():new ot}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ct{constructor(e,t,n=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=n,this._mappings=Ie(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=e=>{this._request=void 0,this._chunkMultiplier=1,e._codeEquals("canceled")?(this._needToFetchStatus=!0,this.completeTransitions_()):(this._error=e,this._transition("error"))},this._metadataErrorHandler=e=>{this._request=void 0,e._codeEquals("canceled")?this.completeTransitions_():(this._error=e,this._transition("error"))},this._promise=new Promise((e,t)=>{this._resolve=e,this._reject=t,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,n])=>{switch(this._state){case"running":e(t,n);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,t)=>{const n=Qe(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,at,e,t);this._request=r,r.getPromise().then(e=>{this._request=void 0,this._uploadUrl=e,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((t,n)=>{const r=Ye(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(r,at,t,n);this._request=i,i.getPromise().then(e=>{e=e,this._request=void 0,this._updateProgress(e.current),this._needToFetchStatus=!1,e.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Je*this._chunkMultiplier,t=new We(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken((r,i)=>{let s;try{s=Xe(this._ref._location,this._ref.storage,n,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(a){return this._error=a,void this._transition("error")}const o=this._ref.storage._makeRequest(s,at,r,i);this._request=o,o.getPromise().then(e=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(e.current),e.finalized?(this._metadata=e.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){const e=Je*this._chunkMultiplier;e<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{const n=Ue(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(n,at,e,t);this._request=r,r.getPromise().then(e=>{this._request=void 0,this._metadata=e,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{const n=$e(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,at,e,t);this._request=r,r.getPromise().then(e=>{this._request=void 0,this._metadata=e,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":this._state=e,void 0!==this._request&&this._request.cancel();break;case"pausing":this._state=e,void 0!==this._request&&this._request.cancel();break;case"running":const t="paused"===this._state;this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=w(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=tt(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,n,r){const i=new nt(t||void 0,n||void 0,r||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);-1!==t&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise();const e=this._observers.slice();e.forEach(e=>{this._notifyObserver(e)})}_finishPromise(){if(void 0!==this._resolve){let e=!0;switch(tt(this._state)){case et.SUCCESS:rt(this._resolve.bind(null,this.snapshot))();break;case et.CANCELED:case et.ERROR:const t=this._reject;rt(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){const t=tt(this._state);switch(t){case et.RUNNING:case et.PAUSED:e.next&&rt(e.next.bind(e,this.snapshot))();break;case et.SUCCESS:e.complete&&rt(e.complete.bind(e))();break;case et.CANCELED:case et.ERROR:e.error&&rt(e.error.bind(e,this._error))();break;default:e.error&&rt(e.error.bind(e,this._error))()}}resume(){const e="paused"===this._state||"pausing"===this._state;return e&&this._transition("running"),e}pause(){const e="running"===this._state;return e&&this._transition("pausing"),e}cancel(){const e="running"===this._state||"pausing"===this._state;return e&&this._transition("canceling"),e}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e,t){this._service=e,this._location=t instanceof N?t:N.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new ut(e,t)}get root(){const e=new N(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ye(this._location.path)}get storage(){return this._service}get parent(){const e=ge(this._location.path);if(null===e)return null;const t=new N(this._location.bucket,e);return new ut(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw C(e)}}function lt(e,t,n){return e._throwIfRoot("uploadBytesResumable"),new ct(e,new fe(t),n)}function ht(e){const t={prefixes:[],items:[]};return dt(e,t).then(()=>t)}async function dt(e,t,n){const r={pageToken:n},i=await ft(e,r);t.prefixes.push(...i.prefixes),t.items.push(...i.items),null!=i.nextPageToken&&await dt(e,t,i.nextPageToken)}function ft(e,t){null!=t&&"number"===typeof t.maxResults&&B("options.maxResults",1,1e3,t.maxResults);const n=t||{},r=Ve(e.storage,e._location,"/",n.pageToken,n.maxResults);return e.storage.makeRequestWithTokens(r,at)}function pt(e){e._throwIfRoot("getMetadata");const t=Ue(e.storage,e._location,Ie());return e.storage.makeRequestWithTokens(t,at)}function gt(e,t){e._throwIfRoot("updateMetadata");const n=Be(e.storage,e._location,t,Ie());return e.storage.makeRequestWithTokens(n,at)}function mt(e){e._throwIfRoot("getDownloadURL");const t=qe(e.storage,e._location,Ie());return e.storage.makeRequestWithTokens(t,at).then(e=>{if(null===e)throw O();return e})}function yt(e){e._throwIfRoot("deleteObject");const t=Ge(e.storage,e._location);return e.storage.makeRequestWithTokens(t,at)}function vt(e,t){const n=me(e._location.path,t),r=new N(e._location.bucket,n);return new ut(e.storage,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(e){return/^[A-Za-z]+:\/\//.test(e)}function wt(e,t){return new ut(e,t)}function _t(e,t){if(e instanceof St){const n=e;if(null==n._bucket)throw T();const r=new ut(n,n._bucket);return null!=t?_t(r,t):r}return void 0!==t?vt(e,t):e}function It(e,t){if(t&&bt(t)){if(e instanceof St)return wt(e,t);throw k("To use ref(service, url), the first argument must be a Storage instance.")}return _t(e,t)}function Tt(e,t){const n=null===t||void 0===t?void 0:t[c];return null==n?null:N.makeFromBucketSpec(n,e)}function Et(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:i}=r;i&&(e._overrideAuthToken="string"===typeof i?i:Object(s["g"])(i,e.app.options.projectId))}class St{constructor(e,t,n,r,i){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=a,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=u,this._maxUploadRetryTime=l,this._requests=new Set,this._bucket=null!=r?N.makeFromBucketSpec(r,this._host):Tt(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=N.makeFromBucketSpec(this._url,e):this._bucket=Tt(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){B("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){B("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();return t.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ut(this,e)}_makeRequest(e,t,n,r){if(this._deleted)return new D(A());{const i=X(e,this._appId,n,r,t,this._firebaseVersion);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e,t){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}}const Ot="@firebase/storage",kt="0.9.6",At="storage";function Ct(e,t,n){return e=Object(s["l"])(e),lt(e,t,n)}function xt(e){return e=Object(s["l"])(e),pt(e)}function Rt(e,t){return e=Object(s["l"])(e),gt(e,t)}function Nt(e,t){return e=Object(s["l"])(e),ft(e,t)}function Dt(e){return e=Object(s["l"])(e),ht(e)}function Pt(e){return e=Object(s["l"])(e),mt(e)}function jt(e){return e=Object(s["l"])(e),yt(e)}function Lt(e,t){return e=Object(s["l"])(e),It(e,t)}function Mt(e,t){return vt(e,t)}function Ft(e,t,n,r={}){Et(e,t,n,r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return new St(n,r,s,t,i["SDK_VERSION"])}function Vt(){Object(i["_registerComponent"])(new o["a"](At,Ut,"PUBLIC").setMultipleInstances(!0)),Object(i["registerVersion"])(Ot,kt,""),Object(i["registerVersion"])(Ot,kt,"esm2017")}Vt();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qt{constructor(e,t,n){this._delegate=e,this.task=t,this.ref=n}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,t){this._delegate=e,this._ref=t,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new qt(this._delegate.snapshot,this,this._ref)}then(e,t){return this._delegate.then(t=>{if(e)return e(new qt(t,this,this._ref))},t)}on(e,t,n,r){let i=void 0;return t&&(i="function"===typeof t?e=>t(new qt(e,this,this._ref)):{next:t.next?e=>t.next(new qt(e,this,this._ref)):void 0,complete:t.complete||void 0,error:t.error||void 0}),this._delegate.on(e,i,n||void 0,r||void 0)}}class Gt{constructor(e,t){this._delegate=e,this._service=t}get prefixes(){return this._delegate.prefixes.map(e=>new Kt(e,this._service))}get items(){return this._delegate.items.map(e=>new Kt(e,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e,t){this._delegate=e,this.storage=t}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const t=Mt(this._delegate,e);return new Kt(t,this.storage)}get root(){return new Kt(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return null==e?null:new Kt(e,this.storage)}put(e,t){return this._throwIfRoot("put"),new Bt(Ct(this._delegate,e,t),this)}putString(e,t=re.RAW,n){this._throwIfRoot("putString");const r=se(t,e),i=Object.assign({},n);return null==i["contentType"]&&null!=r.contentType&&(i["contentType"]=r.contentType),new Bt(new ct(this._delegate,new fe(r.data,!0),i),this)}listAll(){return Dt(this._delegate).then(e=>new Gt(e,this.storage))}list(e){return Nt(this._delegate,e||void 0).then(e=>new Gt(e,this.storage))}getMetadata(){return xt(this._delegate)}updateMetadata(e){return Rt(this._delegate,e)}getDownloadURL(){return Pt(this._delegate)}delete(){return this._throwIfRoot("delete"),jt(this._delegate)}_throwIfRoot(e){if(""===this._delegate._location.path)throw C(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,t){this.app=e,this._delegate=t}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if($t(e))throw k("ref() expected a child path but got a URL, use refFromURL instead.");return new Kt(Lt(this._delegate,e),this)}refFromURL(e){if(!$t(e))throw k("refFromURL() expected a full URL but got a child path, use ref() instead.");try{N.makeFromUrl(e,this._delegate.host)}catch(t){throw k("refFromUrl() expected a valid full URL but got an invalid one.")}return new Kt(Lt(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,t,n={}){Ft(this._delegate,e,t,n)}}function $t(e){return/^[A-Za-z]+:\/\//.test(e)}const Wt="@firebase/storage-compat",Ht="0.1.14",Qt="storage-compat";function Yt(e,{instanceIdentifier:t}){const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("storage").getImmediate({identifier:t}),i=new zt(n,r);return i}function Jt(e){const t={TaskState:et,TaskEvent:Ze,StringFormat:re,Storage:zt,Reference:Kt};e.INTERNAL.registerComponent(new o["a"](Qt,Yt,"PUBLIC").setServiceProps(t).setMultipleInstances(!0)),e.registerVersion(Wt,Ht)}Jt(r["a"])},"256a":function(e,t,n){"use strict";n("5994")},2626:function(e,t,n){"use strict";var r=n("d066"),i=n("9bf2"),s=n("b622"),o=n("83ab"),a=s("species");e.exports=function(e){var t=r(e),n=i.f;o&&t&&!t[a]&&n(t,a,{configurable:!0,get:function(){return this}})}},2909:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e){if(Array.isArray(e))return r(e)}n.d(t,"a",(function(){return c}));n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630");function s(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}n("fb6a"),n("b0c0"),n("ac1f"),n("00b4");function o(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}n("d9e2");function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e){return i(e)||s(e)||o(e)||a()}},"2a62":function(e,t,n){var r=n("c65b"),i=n("825a"),s=n("dc4a");e.exports=function(e,t,n){var o,a;i(e);try{if(o=s(e,"return"),!o){if("throw"===t)throw n;return n}o=r(o,e)}catch(c){a=!0,o=c}if("throw"===t)throw n;if(a)throw o;return i(o),n}},"2ba4":function(e,t,n){var r=n("40d5"),i=Function.prototype,s=i.apply,o=i.call;e.exports="object"==typeof Reflect&&Reflect.apply||(r?o.bind(s):function(){return o.apply(s,arguments)})},"2cf4":function(e,t,n){var r,i,s,o,a=n("da84"),c=n("2ba4"),u=n("0366"),l=n("1626"),h=n("1a2d"),d=n("d039"),f=n("1be4"),p=n("f36a"),g=n("cc12"),m=n("d6d6"),y=n("1cdc"),v=n("605d"),b=a.setImmediate,w=a.clearImmediate,_=a.process,I=a.Dispatch,T=a.Function,E=a.MessageChannel,S=a.String,O=0,k={},A="onreadystatechange";try{r=a.location}catch(D){}var C=function(e){if(h(k,e)){var t=k[e];delete k[e],t()}},x=function(e){return function(){C(e)}},R=function(e){C(e.data)},N=function(e){a.postMessage(S(e),r.protocol+"//"+r.host)};b&&w||(b=function(e){m(arguments.length,1);var t=l(e)?e:T(e),n=p(arguments,1);return k[++O]=function(){c(t,void 0,n)},i(O),O},w=function(e){delete k[e]},v?i=function(e){_.nextTick(x(e))}:I&&I.now?i=function(e){I.now(x(e))}:E&&!y?(s=new E,o=s.port2,s.port1.onmessage=R,i=u(o.postMessage,o)):a.addEventListener&&l(a.postMessage)&&!a.importScripts&&r&&"file:"!==r.protocol&&!d(N)?(i=N,a.addEventListener("message",R,!1)):i=A in g("script")?function(e){f.appendChild(g("script"))[A]=function(){f.removeChild(this),C(e)}}:function(e){setTimeout(x(e),0)}),e.exports={set:b,clear:w}},"2d00":function(e,t,n){var r,i,s=n("da84"),o=n("342f"),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},3410:function(e,t,n){var r=n("23e7"),i=n("d039"),s=n("7b0b"),o=n("e163"),a=n("e177"),c=i((function(){o(1)}));r({target:"Object",stat:!0,forced:c,sham:!a},{getPrototypeOf:function(e){return o(s(e))}})},"342f":function(e,t,n){var r=n("d066");e.exports=r("navigator","userAgent")||""},3511:function(e,t){var n=TypeError,r=9007199254740991;e.exports=function(e){if(e>r)throw n("Maximum allowed index exceeded");return e}},3529:function(e,t,n){"use strict";var r=n("23e7"),i=n("c65b"),s=n("59ed"),o=n("f069"),a=n("e667"),c=n("2266"),u=n("5eed");r({target:"Promise",stat:!0,forced:u},{race:function(e){var t=this,n=o.f(t),r=n.reject,u=a((function(){var o=s(t.resolve);c(e,(function(e){i(o,t,e).then(n.resolve,r)}))}));return u.error&&r(u.value),n.promise}})},"35a1":function(e,t,n){var r=n("f5df"),i=n("dc4a"),s=n("3f8c"),o=n("b622"),a=o("iterator");e.exports=function(e){if(void 0!=e)return i(e,a)||i(e,"@@iterator")||s[r(e)]}},"37e8":function(e,t,n){var r=n("83ab"),i=n("aed9"),s=n("9bf2"),o=n("825a"),a=n("fc6a"),c=n("df75");t.f=r&&!i?Object.defineProperties:function(e,t){o(e);var n,r=a(t),i=c(t),u=i.length,l=0;while(u>l)s.f(e,n=i[l++],r[n]);return e}},"3a9b":function(e,t,n){var r=n("e330");e.exports=r({}.isPrototypeOf)},"3bbe":function(e,t,n){var r=n("1626"),i=String,s=TypeError;e.exports=function(e){if("object"==typeof e||r(e))return e;throw s("Can't set "+i(e)+" as a prototype")}},"3ca3":function(e,t,n){"use strict";var r=n("6547").charAt,i=n("577e"),s=n("69f3"),o=n("7dd0"),a="String Iterator",c=s.set,u=s.getterFor(a);o(String,"String",(function(e){c(this,{type:a,string:i(e),index:0})}),(function(){var e,t=u(this),n=t.string,i=t.index;return i>=n.length?{value:void 0,done:!0}:(e=r(n,i),t.index+=e.length,{value:e,done:!1})}))},"3d87":function(e,t,n){var r=n("4930");e.exports=r&&!!Symbol["for"]&&!!Symbol.keyFor},"3f8c":function(e,t){e.exports={}},"40d5":function(e,t,n){var r=n("d039");e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},"428f":function(e,t,n){var r=n("da84");e.exports=r},4362:function(e,t,n){t.nextTick=function(e){var t=Array.prototype.slice.call(arguments);t.shift(),setTimeout((function(){e.apply(null,t)}),0)},t.platform=t.arch=t.execPath=t.title="browser",t.pid=1,t.browser=!0,t.env={},t.argv=[],t.binding=function(e){throw new Error("No such module. (Possibly not yet loaded)")},function(){var e,r="/";t.cwd=function(){return r},t.chdir=function(t){e||(e=n("df7c")),r=e.resolve(t,r)}}(),t.exit=t.kill=t.umask=t.dlopen=t.uptime=t.memoryUsage=t.uvCounters=function(){},t.features={}},"44ad":function(e,t,n){var r=n("e330"),i=n("d039"),s=n("c6b6"),o=Object,a=r("".split);e.exports=i((function(){return!o("z").propertyIsEnumerable(0)}))?function(e){return"String"==s(e)?a(e,""):o(e)}:o},"44d2":function(e,t,n){var r=n("b622"),i=n("7c73"),s=n("9bf2").f,o=r("unscopables"),a=Array.prototype;void 0==a[o]&&s(a,o,{configurable:!0,value:i(null)}),e.exports=function(e){a[o][e]=!0}},"44de":function(e,t,n){var r=n("da84");e.exports=function(e,t){var n=r.console;n&&n.error&&(1==arguments.length?n.error(e):n.error(e,t))}},4738:function(e,t,n){var r=n("da84"),i=n("d256"),s=n("1626"),o=n("94ca"),a=n("8925"),c=n("b622"),u=n("6069"),l=n("c430"),h=n("2d00"),d=i&&i.prototype,f=c("species"),p=!1,g=s(r.PromiseRejectionEvent),m=o("Promise",(function(){var e=a(i),t=e!==String(i);if(!t&&66===h)return!0;if(l&&(!d["catch"]||!d["finally"]))return!0;if(h>=51&&/native code/.test(e))return!1;var n=new i((function(e){e(1)})),r=function(e){e((function(){}),(function(){}))},s=n.constructor={};return s[f]=r,p=n.then((function(){}))instanceof r,!p||!t&&u&&!g}));e.exports={CONSTRUCTOR:m,REJECTION_EVENT:g,SUBCLASSING:p}},4840:function(e,t,n){var r=n("825a"),i=n("5087"),s=n("b622"),o=s("species");e.exports=function(e,t){var n,s=r(e).constructor;return void 0===s||void 0==(n=r(s)[o])?t:i(n)}},"485a":function(e,t,n){var r=n("c65b"),i=n("1626"),s=n("861d"),o=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&i(n=e.toString)&&!s(a=r(n,e)))return a;if(i(n=e.valueOf)&&!s(a=r(n,e)))return a;if("string"!==t&&i(n=e.toString)&&!s(a=r(n,e)))return a;throw o("Can't convert object to primitive value")}},4930:function(e,t,n){var r=n("2d00"),i=n("d039");e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},"4d64":function(e,t,n){var r=n("fc6a"),i=n("23cb"),s=n("07fa"),o=function(e){return function(t,n,o){var a,c=r(t),u=s(c),l=i(o,u);if(e&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},"4dae":function(e,t,n){var r=n("23cb"),i=n("07fa"),s=n("8418"),o=Array,a=Math.max;e.exports=function(e,t,n){for(var c=i(e),u=r(t,c),l=r(void 0===n?c:n,c),h=o(a(l-u,0)),d=0;u<l;u++,d++)s(h,d,e[u]);return h.length=d,h}},"4de4":function(e,t,n){"use strict";var r=n("23e7"),i=n("b727").filter,s=n("1dde"),o=s("filter");r({target:"Array",proto:!0,forced:!o},{filter:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},"4df4":function(e,t,n){"use strict";var r=n("0366"),i=n("c65b"),s=n("7b0b"),o=n("9bdd"),a=n("e95a"),c=n("68ee"),u=n("07fa"),l=n("8418"),h=n("9a1f"),d=n("35a1"),f=Array;e.exports=function(e){var t=s(e),n=c(this),p=arguments.length,g=p>1?arguments[1]:void 0,m=void 0!==g;m&&(g=r(g,p>2?arguments[2]:void 0));var y,v,b,w,_,I,T=d(t),E=0;if(!T||this===f&&a(T))for(y=u(t),v=n?new this(y):f(y);y>E;E++)I=m?g(t[E],E):t[E],l(v,E,I);else for(w=h(t,T),_=w.next,v=n?new this:[];!(b=i(_,w)).done;E++)I=m?o(w,g,[b.value,E],!0):b.value,l(v,E,I);return v.length=E,v}},"4f60":function(e,t,n){"use strict";var r=n("7ded");n.d(t,"a",(function(){return r["a"]}));var i="firebase",s="9.8.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r["a"].registerVersion(i,s,"app-compat")},5087:function(e,t,n){var r=n("68ee"),i=n("0d51"),s=TypeError;e.exports=function(e){if(r(e))return e;throw s(i(e)+" is not a constructor")}},"50c4":function(e,t,n){var r=n("5926"),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},5134:function(e,t,n){"use strict";(function(e){let r,i;function s(){var t;return void 0!==r||("undefined"!==typeof window&&window.performance?(r=!0,i=window.performance):"undefined"!==typeof e&&(null===(t=e.perf_hooks)||void 0===t?void 0:t.performance)?(r=!0,i=e.perf_hooks.performance):r=!1),r}function o(){return s()?i.now():Date.now()}n.d(t,"a",(function(){return o}))}).call(this,n("c8ba"))},5530:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n("b64b"),n("a4d3"),n("4de4"),n("d3b7"),n("e439"),n("159b"),n("dbb4");function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},5692:function(e,t,n){var r=n("c430"),i=n("c6cd");(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.22.8",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.8/LICENSE",source:"https://github.com/zloirock/core-js"})},"56ef":function(e,t,n){var r=n("d066"),i=n("e330"),s=n("241c"),o=n("7418"),a=n("825a"),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=s.f(a(e)),n=o.f;return n?c(t,n(e)):t}},"577e":function(e,t,n){var r=n("f5df"),i=String;e.exports=function(e){if("Symbol"===r(e))throw TypeError("Cannot convert a Symbol value to a string");return i(e)}},"57b9":function(e,t,n){var r=n("c65b"),i=n("d066"),s=n("b622"),o=n("cb2d");e.exports=function(){var e=i("Symbol"),t=e&&e.prototype,n=t&&t.valueOf,a=s("toPrimitive");t&&!t[a]&&o(t,a,(function(e){return r(n,this)}),{arity:1})}},"589b":function(e,t,n){"use strict";n.r(t),n.d(t,"FirebaseError",(function(){return s["c"]})),n.d(t,"SDK_VERSION",(function(){return ve})),n.d(t,"_DEFAULT_ENTRY_NAME",(function(){return se})),n.d(t,"_addComponent",(function(){return ue})),n.d(t,"_addOrOverwriteComponent",(function(){return le})),n.d(t,"_apps",(function(){return ae})),n.d(t,"_clearComponents",(function(){return pe})),n.d(t,"_components",(function(){return ce})),n.d(t,"_getProvider",(function(){return de})),n.d(t,"_registerComponent",(function(){return he})),n.d(t,"_removeServiceInstance",(function(){return fe})),n.d(t,"deleteApp",(function(){return Ie})),n.d(t,"getApp",(function(){return we})),n.d(t,"getApps",(function(){return _e})),n.d(t,"initializeApp",(function(){return be})),n.d(t,"onLog",(function(){return Ee})),n.d(t,"registerVersion",(function(){return Te})),n.d(t,"setLogLevel",(function(){return Se}));var r=n("22e5"),i=n("e691"),s=n("1fd5");const o=(e,t)=>t.some(t=>e instanceof t);let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,g=new WeakMap;function m(e){const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(I(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&h.set(t,e)}).catch(()=>{}),g.set(t,e),t}function y(e){if(d.has(e))return;const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});d.set(e,t)}let v={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||f.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return I(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function b(e){v=e(v)}function w(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(e)?function(...t){return e.apply(T(this),t),I(h.get(this))}:function(...t){return I(e.apply(T(this),t))}:function(t,...n){const r=e.call(T(this),t,...n);return f.set(r,t.sort?t.sort():[t]),I(r)}}function _(e){return"function"===typeof e?w(e):(e instanceof IDBTransaction&&y(e),o(e,u())?new Proxy(e,v):e)}function I(e){if(e instanceof IDBRequest)return m(e);if(p.has(e))return p.get(e);const t=_(e);return t!==e&&(p.set(e,t),g.set(t,e)),t}const T=e=>g.get(e);function E(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=I(o);return r&&o.addEventListener("upgradeneeded",e=>{r(I(o.result),e.oldVersion,e.newVersion,I(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(e=>{s&&e.addEventListener("close",()=>s()),i&&e.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const S=["get","getKey","getAll","getAllKeys","count"],O=["put","add","delete","clear"],k=new Map;function A(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(k.get(t))return k.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=O.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!S.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return k.set(t,s),s}b(e=>({...e,get:(t,n,r)=>A(t,n)||e.get(t,n,r),has:(t,n)=>!!A(t,n)||e.has(t,n)}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class C{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map(e=>{if(x(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}function x(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const R="@firebase/app",N="0.7.25",D=new i["b"]("@firebase/app"),P="@firebase/app-compat",j="@firebase/analytics-compat",L="@firebase/analytics",M="@firebase/app-check-compat",F="@firebase/app-check",U="@firebase/auth",V="@firebase/auth-compat",q="@firebase/database",B="@firebase/database-compat",G="@firebase/functions",K="@firebase/functions-compat",z="@firebase/installations",$="@firebase/installations-compat",W="@firebase/messaging",H="@firebase/messaging-compat",Q="@firebase/performance",Y="@firebase/performance-compat",J="@firebase/remote-config",X="@firebase/remote-config-compat",Z="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",re="firebase",ie="9.8.2",se="[DEFAULT]",oe={[R]:"fire-core",[P]:"fire-core-compat",[L]:"fire-analytics",[j]:"fire-analytics-compat",[F]:"fire-app-check",[M]:"fire-app-check-compat",[U]:"fire-auth",[V]:"fire-auth-compat",[q]:"fire-rtdb",[B]:"fire-rtdb-compat",[G]:"fire-fn",[K]:"fire-fn-compat",[z]:"fire-iid",[$]:"fire-iid-compat",[W]:"fire-fcm",[H]:"fire-fcm-compat",[Q]:"fire-perf",[Y]:"fire-perf-compat",[J]:"fire-rc",[X]:"fire-rc-compat",[Z]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[re]:"fire-js-all"},ae=new Map,ce=new Map;function ue(e,t){try{e.container.addComponent(t)}catch(n){D.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function le(e,t){e.container.addOrOverwriteComponent(t)}function he(e){const t=e.name;if(ce.has(t))return D.debug(`There were multiple attempts to register component ${t}.`),!1;ce.set(t,e);for(const n of ae.values())ue(n,e);return!0}function de(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function fe(e,t,n=se){de(e,t).clearInstance(n)}function pe(){ce.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ge={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},me=new s["b"]("app","Firebase",ge);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ye{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw me.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ve=ie;function be(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:se,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!==typeof i||!i)throw me.create("bad-app-name",{appName:String(i)});const o=ae.get(i);if(o){if(Object(s["i"])(e,o.options)&&Object(s["i"])(n,o.config))return o;throw me.create("duplicate-app",{appName:i})}const a=new r["b"](i);for(const r of ce.values())a.addComponent(r);const c=new ye(e,n,a);return ae.set(i,c),c}function we(e=se){const t=ae.get(e);if(!t)throw me.create("no-app",{appName:e});return t}function _e(){return Array.from(ae.values())}async function Ie(e){const t=e.name;ae.has(t)&&(ae.delete(t),await Promise.all(e.container.getProviders().map(e=>e.delete())),e.isDeleted=!0)}function Te(e,t,n){var i;let s=null!==(i=oe[e])&&void 0!==i?i:e;n&&(s+="-"+n);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void D.warn(e.join(" "))}he(new r["a"](s+"-version",()=>({library:s,version:t}),"VERSION"))}function Ee(e,t){if(null!==e&&"function"!==typeof e)throw me.create("invalid-log-argument");Object(i["d"])(e,t)}function Se(e){Object(i["c"])(e)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oe="firebase-heartbeat-database",ke=1,Ae="firebase-heartbeat-store";let Ce=null;function xe(){return Ce||(Ce=E(Oe,ke,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ae)}}}).catch(e=>{throw me.create("storage-open",{originalErrorMessage:e.message})})),Ce}async function Re(e){try{const t=await xe();return t.transaction(Ae).objectStore(Ae).get(De(e))}catch(t){throw me.create("storage-get",{originalErrorMessage:t.message})}}async function Ne(e,t){try{const n=await xe(),r=n.transaction(Ae,"readwrite"),i=r.objectStore(Ae);return await i.put(t,De(e)),r.done}catch(n){throw me.create("storage-set",{originalErrorMessage:n.message})}}function De(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe=1024,je=2592e6;class Le{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ue(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Me();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some(e=>e.date===n))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=je}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Me(),{heartbeatsToSend:t,unsentEntries:n}=Fe(this._heartbeatsCache.heartbeats),r=Object(s["e"])(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Me(){const e=new Date;return e.toISOString().substring(0,10)}function Fe(e,t=Pe){const n=[];let r=e.slice();for(const i of e){const e=n.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),Ve(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ve(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ue{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Object(s["s"])()&&Object(s["A"])().then(()=>!0).catch(()=>!1)}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Re(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ne(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ne(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Ve(e){return Object(s["e"])(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(e){he(new r["a"]("platform-logger",e=>new C(e),"PRIVATE")),he(new r["a"]("heartbeat",e=>new Le(e),"PRIVATE")),Te(R,N,e),Te(R,N,"esm2017"),Te("fire-js","")}qe("")},5926:function(e,t,n){var r=n("b42e");e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},5994:function(e,t,n){"use strict";(function(e){var t=n("7ded"),r=n("1f5a"),i=n("22e5"),s=n("1fd5"),o="@firebase/auth-compat",a="0.2.15";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const c=1e3;function u(){var e;return(null===(e=null===self||void 0===self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function l(){return"http:"===u()||"https:"===u()}function h(e=Object(s["m"])()){return!("file:"!==u()&&"ionic:"!==u()&&"capacitor:"!==u()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function d(){return Object(s["v"])()||Object(s["u"])()}function f(){return Object(s["r"])()&&11===(null===document||void 0===document?void 0:document.documentMode)}function p(e=Object(s["m"])()){return/Edge\/\d+/.test(e)}function g(e=Object(s["m"])()){return f()||p(e)}function m(){try{const e=self.localStorage,t=r["s"]();if(e)return e["setItem"](t,"1"),e["removeItem"](t),!g()||Object(s["s"])()}catch(e){return y()&&Object(s["s"])()}return!1}function y(){return"undefined"!==typeof e&&"WorkerGlobalScope"in e&&"importScripts"in e}function v(){return(l()||Object(s["o"])()||h())&&!d()&&m()&&!y()}function b(){return h()&&"undefined"!==typeof document}async function w(){return!!b()&&new Promise(e=>{const t=setTimeout(()=>{e(!1)},c);document.addEventListener("deviceready",()=>{clearTimeout(t),e(!0)})})}function _(){return"undefined"!==typeof window?window:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I={LOCAL:"local",NONE:"none",SESSION:"session"},T=r["p"],E="persistence";function S(e,t){T(Object.values(I).includes(t),e,"invalid-persistence-type"),Object(s["v"])()?T(t!==I.SESSION,e,"unsupported-persistence-type"):Object(s["u"])()?T(t===I.NONE,e,"unsupported-persistence-type"):y()?T(t===I.NONE||t===I.LOCAL&&Object(s["s"])(),e,"unsupported-persistence-type"):T(t===I.NONE||m(),e,"unsupported-persistence-type")}async function O(e){await e._initializationPromise;const t=A(),n=r["w"](E,e.config.apiKey,e.name);t&&t.setItem(n,e._getPersistence())}function k(e,t){const n=A();if(!n)return[];const i=r["w"](E,e,t),s=n.getItem(i);switch(s){case I.NONE:return[r["M"]];case I.LOCAL:return[r["N"],r["B"]];case I.SESSION:return[r["B"]];default:return[]}}function A(){var e;try{return(null===(e=_())||void 0===e?void 0:e.sessionStorage)||null}catch(t){return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C=r["p"];class x{constructor(){this.browserResolver=r["t"](r["A"]),this.cordovaResolver=r["t"](r["F"]),this.underlyingResolver=null,this._redirectPersistence=r["B"],this._completeRedirectFn=r["u"],this._overrideRedirectResult=r["v"]}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,r)}async _openRedirect(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,r)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return b()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return C(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await w();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e){return e.unwrap()}function N(e){return e.wrapped()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e){return j(e)}function P(e,t){var n;const i=null===(n=t.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===t.code){const n=t;n.resolver=new F(e,r["K"](e,t))}else if(i){const e=j(t),n=t;e&&(n.credential=e,n.tenantId=i.tenantId||void 0,n.email=i.email||void 0,n.phoneNumber=i.phoneNumber||void 0)}}function j(e){const{_tokenResponse:t}=e instanceof s["c"]?e.customData:e;if(!t)return null;if(!(e instanceof s["c"])&&"temporaryProof"in t&&"phoneNumber"in t)return r["i"].credentialFromResult(e);const n=t.providerId;if(!n||n===r["k"].PASSWORD)return null;let i;switch(n){case r["k"].GOOGLE:i=r["f"];break;case r["k"].FACEBOOK:i=r["d"];break;case r["k"].GITHUB:i=r["e"];break;case r["k"].TWITTER:i=r["o"];break;default:const{oauthIdToken:e,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:c}=t;return s||o||e||a?a?n.startsWith("saml.")?r["m"]._create(n,a):r["g"]._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:e,accessToken:s}):new r["h"](n).credential({idToken:e,accessToken:s,rawNonce:c}):null}return e instanceof s["c"]?i.credentialFromError(e):i.credentialFromResult(e)}function L(e,t){return t.catch(t=>{throw t instanceof s["c"]&&P(e,t),t}).then(e=>{const t=e.operationType,n=e.user;return{operationType:t,credential:D(e),additionalUserInfo:r["J"](e),user:U.getOrCreate(n)}})}async function M(e,t){const n=await t;return{verificationId:n.verificationId,confirm:t=>L(e,n.confirm(t))}}class F{constructor(e,t){this.resolver=t,this.auth=N(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return L(R(this.auth),this.resolver.resolveSignIn(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this._delegate=e,this.multiFactor=r["T"](e)}static getOrCreate(e){return U.USER_MAP.has(e)||U.USER_MAP.set(e,new U(e)),U.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return L(this.auth,r["P"](this._delegate,e))}async linkWithPhoneNumber(e,t){return M(this.auth,r["Q"](this._delegate,e,t))}async linkWithPopup(e){return L(this.auth,r["R"](this._delegate,e,x))}async linkWithRedirect(e){return await O(r["q"](this.auth)),r["S"](this._delegate,e,x)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return L(this.auth,r["U"](this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return M(this.auth,r["V"](this._delegate,e,t))}reauthenticateWithPopup(e){return L(this.auth,r["W"](this._delegate,e,x))}async reauthenticateWithRedirect(e){return await O(r["q"](this.auth)),r["X"](this._delegate,e,x)}sendEmailVerification(e){return r["Y"](this._delegate,e)}async unlink(e){return await r["jb"](this._delegate,e),this}updateEmail(e){return r["kb"](this._delegate,e)}updatePassword(e){return r["lb"](this._delegate,e)}updatePhoneNumber(e){return r["mb"](this._delegate,e)}updateProfile(e){return r["nb"](this._delegate,e)}verifyBeforeUpdateEmail(e,t){return r["ob"](this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}U.USER_MAP=new WeakMap;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const V=r["p"];class q{constructor(e,t){if(this.app=e,t.isInitialized())return this._delegate=t.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:n}=e.options;V(n,"invalid-api-key",{appName:e.name}),V(n,"invalid-api-key",{appName:e.name});const i="undefined"!==typeof window?x:void 0;this._delegate=t.initialize({options:{persistence:G(n,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(r["H"]),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?U.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){r["E"](this._delegate,e,t)}applyActionCode(e){return r["y"](this._delegate,e)}checkActionCode(e){return r["C"](this._delegate,e)}confirmPasswordReset(e,t){return r["D"](this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return L(this._delegate,r["G"](this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return r["I"](this._delegate,e)}isSignInWithEmailLink(e){return r["O"](this._delegate,e)}async getRedirectResult(){V(v(),this._delegate,"operation-not-supported-in-this-environment");const e=await r["L"](this._delegate,x);return e?L(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){r["x"](this._delegate,e)}onAuthStateChanged(e,t,n){const{next:r,error:i,complete:s}=B(e,t,n);return this._delegate.onAuthStateChanged(r,i,s)}onIdTokenChanged(e,t,n){const{next:r,error:i,complete:s}=B(e,t,n);return this._delegate.onIdTokenChanged(r,i,s)}sendSignInLinkToEmail(e,t){return r["ab"](this._delegate,e,t)}sendPasswordResetEmail(e,t){return r["Z"](this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(S(this._delegate,e),e){case I.SESSION:t=r["B"];break;case I.LOCAL:const e=await r["t"](r["N"])._isAvailable();t=e?r["N"]:r["z"];break;case I.NONE:t=r["M"];break;default:return r["r"]("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return L(this._delegate,r["bb"](this._delegate))}signInWithCredential(e){return L(this._delegate,r["cb"](this._delegate,e))}signInWithCustomToken(e){return L(this._delegate,r["db"](this._delegate,e))}signInWithEmailAndPassword(e,t){return L(this._delegate,r["eb"](this._delegate,e,t))}signInWithEmailLink(e,t){return L(this._delegate,r["fb"](this._delegate,e,t))}signInWithPhoneNumber(e,t){return M(this._delegate,r["gb"](this._delegate,e,t))}async signInWithPopup(e){return V(v(),this._delegate,"operation-not-supported-in-this-environment"),L(this._delegate,r["hb"](this._delegate,e,x))}async signInWithRedirect(e){return V(v(),this._delegate,"operation-not-supported-in-this-environment"),await O(this._delegate),r["ib"](this._delegate,e,x)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return r["pb"](this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function B(e,t,n){let r=e;"function"!==typeof e&&({next:r,error:t,complete:n}=e);const i=r,s=e=>i(e&&U.getOrCreate(e));return{next:s,error:t,complete:n}}function G(e,t){const n=k(e,t);if("undefined"===typeof self||n.includes(r["N"])||n.push(r["N"]),"undefined"!==typeof window)for(const i of[r["z"],r["B"]])n.includes(i)||n.push(i);return n.includes(r["M"])||n.push(r["M"]),n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */q.Persistence=I;class K{constructor(){this.providerId="phone",this._delegate=new r["i"](R(t["a"].auth()))}static credential(e,t){return r["i"].credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}K.PHONE_SIGN_IN_METHOD=r["i"].PHONE_SIGN_IN_METHOD,K.PROVIDER_ID=r["i"].PROVIDER_ID;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const z=r["p"];class ${constructor(e,n,i=t["a"].app()){var s;z(null===(s=i.options)||void 0===s?void 0:s.apiKey,"invalid-api-key",{appName:i.name}),this._delegate=new r["l"](e,n,i.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W="auth-compat";function H(e){e.INTERNAL.registerComponent(new i["a"](W,e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new q(t,n)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:r["a"].EMAIL_SIGNIN,PASSWORD_RESET:r["a"].PASSWORD_RESET,RECOVER_EMAIL:r["a"].RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:r["a"].REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:r["a"].VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:r["a"].VERIFY_EMAIL}},EmailAuthProvider:r["c"],FacebookAuthProvider:r["d"],GithubAuthProvider:r["e"],GoogleAuthProvider:r["f"],OAuthProvider:r["h"],SAMLAuthProvider:r["n"],PhoneAuthProvider:K,PhoneMultiFactorGenerator:r["j"],RecaptchaVerifier:$,TwitterAuthProvider:r["o"],Auth:q,AuthCredential:r["b"],Error:s["c"]}).setInstantiationMode("LAZY").setMultipleInstances(!1)),e.registerVersion(o,a)}H(t["a"])}).call(this,n("c8ba"))},"59ed":function(e,t,n){var r=n("1626"),i=n("0d51"),s=TypeError;e.exports=function(e){if(r(e))return e;throw s(i(e)+" is not a function")}},"5a47":function(e,t,n){var r=n("23e7"),i=n("4930"),s=n("d039"),o=n("7418"),a=n("7b0b"),c=!i||s((function(){o.f(1)}));r({target:"Object",stat:!0,forced:c},{getOwnPropertySymbols:function(e){var t=o.f;return t?t(a(e)):[]}})},"5c40":function(e,t,n){"use strict";n.d(t,"a",(function(){return ye})),n.d(t,"b",(function(){return Yt})),n.d(t,"c",(function(){return Zt})),n.d(t,"d",(function(){return f})),n.d(t,"e",(function(){return Jn})),n.d(t,"f",(function(){return un})),n.d(t,"g",(function(){return _n})),n.d(t,"h",(function(){return cn})),n.d(t,"i",(function(){return gn})),n.d(t,"j",(function(){return Kt})),n.d(t,"k",(function(){return Gt})),n.d(t,"l",(function(){return wn})),n.d(t,"m",(function(){return mn})),n.d(t,"n",(function(){return Ee})),n.d(t,"o",(function(){return Rn})),n.d(t,"p",(function(){return Te})),n.d(t,"q",(function(){return Xn})),n.d(t,"r",(function(){return Zn})),n.d(t,"s",(function(){return se})),n.d(t,"t",(function(){return qn})),n.d(t,"u",(function(){return C})),n.d(t,"v",(function(){return Ae})),n.d(t,"w",(function(){return Ce})),n.d(t,"x",(function(){return Me})),n.d(t,"y",(function(){return qe})),n.d(t,"z",(function(){return Ue})),n.d(t,"A",(function(){return nn})),n.d(t,"B",(function(){return H})),n.d(t,"C",(function(){return ie})),n.d(t,"D",(function(){return W})),n.d(t,"G",(function(){return Ze})),n.d(t,"H",(function(){return Qe})),n.d(t,"I",(function(){return be})),n.d(t,"J",(function(){return Ie})),n.d(t,"N",(function(){return pe})),n.d(t,"O",(function(){return o})),n.d(t,"P",(function(){return ue})),n.d(t,"Q",(function(){return oe})),n.d(t,"R",(function(){return ae})),n.d(t,"S",(function(){return Q})),n.d(t,"T",(function(){return $e}));var r=n("a1e9");n.d(t,"E",(function(){return r["l"]})),n.d(t,"F",(function(){return r["m"]})),n.d(t,"K",(function(){return r["p"]})),n.d(t,"M",(function(){return r["t"]}));var i=n("9ff4");n.d(t,"L",(function(){return i["M"]}));const s=[];function o(e,...t){Object(r["j"])();const n=s.length?s[s.length-1].component:null,i=n&&n.appContext.config.warnHandler,o=a();if(i)d(i,n,11,[e+t.join(""),n&&n.proxy,o.map(({vnode:e})=>`at <${Qn(n,e.type)}>`).join("\n"),o]);else{const n=["[Vue warn]: "+e,...t];o.length&&n.push("\n",...c(o)),console.warn(...n)}Object(r["n"])()}function a(){let e=s[s.length-1];if(!e)return[];const t=[];while(e){const n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});const r=e.component&&e.component.parent;e=r&&r.vnode}return t}function c(e){const t=[];return e.forEach((e,n)=>{t.push(...0===n?[]:["\n"],...u(e))}),t}function u({vnode:e,recurseCount:t}){const n=t>0?`... (${t} recursive calls)`:"",r=!!e.component&&null==e.component.parent,i=" at <"+Qn(e.component,e.type,r),s=">"+n;return e.props?[i,...l(e.props),s]:[i+s]}function l(e){const t=[],n=Object.keys(e);return n.slice(0,3).forEach(n=>{t.push(...h(n,e[n]))}),n.length>3&&t.push(" ..."),t}function h(e,t,n){return Object(i["E"])(t)?(t=JSON.stringify(t),n?t:[`${e}=${t}`]):"number"===typeof t||"boolean"===typeof t||null==t?n?t:[`${e}=${t}`]:Object(r["g"])(t)?(t=h(e,Object(r["q"])(t.value),!0),n?t:[e+"=Ref<",t,">"]):Object(i["q"])(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=Object(r["q"])(t),n?t:[e+"=",t])}function d(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){p(s,t,n)}return i}function f(e,t,n,r){if(Object(i["q"])(e)){const s=d(e,t,n,r);return s&&Object(i["z"])(s)&&s.catch(e=>{p(e,t,n)}),s}const s=[];for(let i=0;i<e.length;i++)s.push(f(e[i],t,n,r));return s}function p(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,s=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,s))return;r=r.parent}const o=t.appContext.config.errorHandler;if(o)return void d(o,null,10,[e,i,s])}g(e,n,i,r)}function g(e,t,n,r=!0){console.error(e)}let m=!1,y=!1;const v=[];let b=0;const w=[];let _=null,I=0;const T=[];let E=null,S=0;const O=Promise.resolve();let k=null,A=null;function C(e){const t=k||O;return e?t.then(this?e.bind(this):e):t}function x(e){let t=b+1,n=v.length;while(t<n){const r=t+n>>>1,i=U(v[r]);i<e?t=r+1:n=r}return t}function R(e){v.length&&v.includes(e,m&&e.allowRecurse?b+1:b)||e===A||(null==e.id?v.push(e):v.splice(x(e.id),0,e),N())}function N(){m||y||(y=!0,k=O.then(V))}function D(e){const t=v.indexOf(e);t>b&&v.splice(t,1)}function P(e,t,n,r){Object(i["o"])(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?r+1:r)||n.push(e),N()}function j(e){P(e,_,w,I)}function L(e){P(e,E,T,S)}function M(e,t=null){if(w.length){for(A=t,_=[...new Set(w)],w.length=0,I=0;I<_.length;I++)_[I]();_=null,I=0,A=null,M(e,t)}}function F(e){if(M(),T.length){const e=[...new Set(T)];if(T.length=0,E)return void E.push(...e);for(E=e,E.sort((e,t)=>U(e)-U(t)),S=0;S<E.length;S++)E[S]();E=null,S=0}}const U=e=>null==e.id?1/0:e.id;function V(e){y=!1,m=!0,M(e),v.sort((e,t)=>U(e)-U(t));i["d"];try{for(b=0;b<v.length;b++){const e=v[b];e&&!1!==e.active&&d(e,null,14)}}finally{b=0,v.length=0,F(e),m=!1,k=null,(v.length||w.length||T.length)&&V(e)}}new Set;new Map;function q(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||i["b"];let s=n;const o=t.startsWith("update:"),a=o&&t.slice(7);if(a&&a in r){const e=("modelValue"===a?"model":a)+"Modifiers",{number:t,trim:o}=r[e]||i["b"];o&&(s=n.map(e=>e.trim())),t&&(s=n.map(i["O"]))}let c;let u=r[c=Object(i["N"])(t)]||r[c=Object(i["N"])(Object(i["e"])(t))];!u&&o&&(u=r[c=Object(i["N"])(Object(i["l"])(t))]),u&&f(u,e,6,s);const l=r[c+"Once"];if(l){if(e.emitted){if(e.emitted[c])return}else e.emitted={};e.emitted[c]=!0,f(l,e,6,s)}}function B(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(void 0!==s)return s;const o=e.emits;let a={},c=!1;if(!Object(i["q"])(e)){const r=e=>{const n=B(e,t,!0);n&&(c=!0,Object(i["h"])(a,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return o||c?(Object(i["o"])(o)?o.forEach(e=>a[e]=null):Object(i["h"])(a,o),r.set(e,a),a):(r.set(e,null),null)}function G(e,t){return!(!e||!Object(i["x"])(t))&&(t=t.slice(2).replace(/Once$/,""),Object(i["k"])(e,t[0].toLowerCase()+t.slice(1))||Object(i["k"])(e,Object(i["l"])(t))||Object(i["k"])(e,t))}let K=null,z=null;function $(e){const t=K;return K=e,z=e&&e.type.__scopeId||null,t}function W(e){z=e}function H(){z=null}function Q(e,t=K,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&on(-1);const i=$(t),s=e(...n);return $(i),r._d&&on(1),s};return r._n=!0,r._c=!0,r._d=!0,r}function Y(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:o,propsOptions:[a],slots:c,attrs:u,emit:l,render:h,renderCache:d,data:f,setupState:g,ctx:m,inheritAttrs:y}=e;let v,b;const w=$(e);try{if(4&n.shapeFlag){const e=s||r;v=In(h.call(e,e,d,o,g,f,m)),b=u}else{const e=t;0,v=In(e.length>1?e(o,{attrs:u,slots:c,emit:l}):e(o,null)),b=t.props?u:J(u)}}catch(I){en.length=0,p(I,e,1),v=mn(Xt)}let _=v;if(b&&!1!==y){const e=Object.keys(b),{shapeFlag:t}=_;e.length&&7&t&&(a&&e.some(i["v"])&&(b=X(b,a)),_=bn(_,b))}return n.dirs&&(_=bn(_),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&(_.transition=n.transition),v=_,$(w),v}const J=e=>{let t;for(const n in e)("class"===n||"style"===n||Object(i["x"])(n))&&((t||(t={}))[n]=e[n]);return t},X=(e,t)=>{const n={};for(const r in e)Object(i["v"])(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function Z(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:c}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||ee(r,o,u):!!o);if(1024&c)return!0;if(16&c)return r?ee(r,o,u):!!o;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!G(u,n))return!0}}return!1}function ee(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!G(n,s))return!0}return!1}function te({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const ne=e=>e.__isSuspense;function re(e,t){t&&t.pendingBranch?Object(i["o"])(e)?t.effects.push(...e):t.effects.push(e):L(e)}function ie(e,t){if(xn){let n=xn.provides;const r=xn.parent&&xn.parent.provides;r===n&&(n=xn.provides=Object.create(r)),n[e]=t}else 0}function se(e,t,n=!1){const r=xn||K;if(r){const s=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&Object(i["q"])(t)?t.call(r.proxy):t}else 0}function oe(e,t){return le(e,null,t)}function ae(e,t){return le(e,null,{flush:"post"})}const ce={};function ue(e,t,n){return le(e,t,n)}function le(e,t,{immediate:n,deep:s,flush:o,onTrack:a,onTrigger:c}=i["b"]){const u=xn;let l,h,p=!1,g=!1;if(Object(r["g"])(e)?(l=()=>e.value,p=Object(r["h"])(e)):Object(r["e"])(e)?(l=()=>e,s=!0):Object(i["o"])(e)?(g=!0,p=e.some(e=>Object(r["e"])(e)||Object(r["h"])(e)),l=()=>e.map(e=>Object(r["g"])(e)?e.value:Object(r["e"])(e)?fe(e):Object(i["q"])(e)?d(e,u,2):void 0)):l=Object(i["q"])(e)?t?()=>d(e,u,2):()=>{if(!u||!u.isUnmounted)return h&&h(),f(e,u,3,[m])}:i["d"],t&&s){const e=l;l=()=>fe(e())}let m=e=>{h=w.onStop=()=>{d(e,u,4)}};if(Mn)return m=i["d"],t?n&&f(t,u,3,[l(),g?[]:void 0,m]):l(),i["d"];let y=g?[]:ce;const v=()=>{if(w.active)if(t){const e=w.run();(s||p||(g?e.some((e,t)=>Object(i["j"])(e,y[t])):Object(i["j"])(e,y)))&&(h&&h(),f(t,u,3,[e,y===ce?void 0:y,m]),y=e)}else w.run()};let b;v.allowRecurse=!!t,b="sync"===o?v:"post"===o?()=>Bt(v,u&&u.suspense):()=>j(v);const w=new r["b"](l,b);return t?n?v():y=w.run():"post"===o?Bt(w.run.bind(w),u&&u.suspense):w.run(),()=>{w.stop(),u&&u.scope&&Object(i["L"])(u.scope.effects,w)}}function he(e,t,n){const r=this.proxy,s=Object(i["E"])(e)?e.includes(".")?de(r,e):()=>r[e]:e.bind(r,r);let o;Object(i["q"])(t)?o=t:(o=t.handler,n=t);const a=xn;Nn(this);const c=le(s,o.bind(r),n);return a?Nn(a):Dn(),c}function de(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function fe(e,t){if(!Object(i["w"])(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),Object(r["g"])(e))fe(e.value,t);else if(Object(i["o"])(e))for(let n=0;n<e.length;n++)fe(e[n],t);else if(Object(i["C"])(e)||Object(i["u"])(e))e.forEach(e=>{fe(e,t)});else if(Object(i["y"])(e))for(const n in e)fe(e[n],t);return e}function pe(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Me(()=>{e.isMounted=!0}),Ve(()=>{e.isUnmounting=!0}),e}const ge=[Function,Array],me={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ge,onEnter:ge,onAfterEnter:ge,onEnterCancelled:ge,onBeforeLeave:ge,onLeave:ge,onAfterLeave:ge,onLeaveCancelled:ge,onBeforeAppear:ge,onAppear:ge,onAfterAppear:ge,onAppearCancelled:ge},setup(e,{slots:t}){const n=Rn(),i=pe();let s;return()=>{const o=t.default&&Te(t.default(),!0);if(!o||!o.length)return;let a=o[0];if(o.length>1){let e=!1;for(const t of o)if(t.type!==Xt){0,a=t,e=!0;break}}const c=Object(r["q"])(e),{mode:u}=c;if(i.isLeaving)return we(a);const l=_e(a);if(!l)return we(a);const h=be(l,c,i,n);Ie(l,h);const d=n.subTree,f=d&&_e(d);let p=!1;const{getTransitionKey:g}=l.type;if(g){const e=g();void 0===s?s=e:e!==s&&(s=e,p=!0)}if(f&&f.type!==Xt&&(!hn(l,f)||p)){const e=be(f,c,i,n);if(Ie(f,e),"out-in"===u)return i.isLeaving=!0,e.afterLeave=()=>{i.isLeaving=!1,n.update()},we(a);"in-out"===u&&l.type!==Xt&&(e.delayLeave=(e,t,n)=>{const r=ve(i,f);r[String(f.key)]=f,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=n})}return a}}},ye=me;function ve(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function be(e,t,n,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:l,onEnterCancelled:h,onBeforeLeave:d,onLeave:p,onAfterLeave:g,onLeaveCancelled:m,onBeforeAppear:y,onAppear:v,onAfterAppear:b,onAppearCancelled:w}=t,_=String(e.key),I=ve(n,e),T=(e,t)=>{e&&f(e,r,9,t)},E=(e,t)=>{const n=t[1];T(e,t),Object(i["o"])(e)?e.every(e=>e.length<=1)&&n():e.length<=1&&n()},S={mode:o,persisted:a,beforeEnter(t){let r=c;if(!n.isMounted){if(!s)return;r=y||c}t._leaveCb&&t._leaveCb(!0);const i=I[_];i&&hn(e,i)&&i.el._leaveCb&&i.el._leaveCb(),T(r,[t])},enter(e){let t=u,r=l,i=h;if(!n.isMounted){if(!s)return;t=v||u,r=b||l,i=w||h}let o=!1;const a=e._enterCb=t=>{o||(o=!0,T(t?i:r,[e]),S.delayedLeave&&S.delayedLeave(),e._enterCb=void 0)};t?E(t,[e,a]):a()},leave(t,r){const i=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();T(d,[t]);let s=!1;const o=t._leaveCb=n=>{s||(s=!0,r(),T(n?m:g,[t]),t._leaveCb=void 0,I[i]===e&&delete I[i])};I[i]=e,p?E(p,[t,o]):o()},clone(e){return be(e,t,n,r)}};return S}function we(e){if(Oe(e))return e=bn(e),e.children=null,e}function _e(e){return Oe(e)?e.children?e.children[0]:void 0:e}function Ie(e,t){6&e.shapeFlag&&e.component?Ie(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Te(e,t=!1,n){let r=[],i=0;for(let s=0;s<e.length;s++){let o=e[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===Yt?(128&o.patchFlag&&i++,r=r.concat(Te(o.children,t,a))):(t||o.type!==Xt)&&r.push(null!=a?bn(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function Ee(e){return Object(i["q"])(e)?{setup:e,name:e.name}:e}const Se=e=>!!e.type.__asyncLoader;const Oe=e=>e.type.__isKeepAlive;RegExp,RegExp;function ke(e,t){return Object(i["o"])(e)?e.some(e=>ke(e,t)):Object(i["E"])(e)?e.split(",").includes(t):!!e.test&&e.test(t)}function Ae(e,t){xe(e,"a",t)}function Ce(e,t){xe(e,"da",t)}function xe(e,t,n=xn){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(Pe(t,r,n),n){let e=n.parent;while(e&&e.parent)Oe(e.parent.vnode)&&Re(r,t,n,e),e=e.parent}}function Re(e,t,n,r){const s=Pe(t,e,r,!0);qe(()=>{Object(i["L"])(r[t],s)},n)}function Ne(e){let t=e.shapeFlag;256&t&&(t-=256),512&t&&(t-=512),e.shapeFlag=t}function De(e){return 128&e.shapeFlag?e.ssContent:e}function Pe(e,t,n=xn,i=!1){if(n){const s=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;Object(r["j"])(),Nn(n);const s=f(t,n,e,i);return Dn(),Object(r["n"])(),s});return i?s.unshift(o):s.push(o),o}}const je=e=>(t,n=xn)=>(!Mn||"sp"===e)&&Pe(e,t,n),Le=je("bm"),Me=je("m"),Fe=je("bu"),Ue=je("u"),Ve=je("bum"),qe=je("um"),Be=je("sp"),Ge=je("rtg"),Ke=je("rtc");function ze(e,t=xn){Pe("ec",e,t)}function $e(e,t){const n=K;if(null===n)return e;const r=zn(n)||n.proxy,s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[e,n,a,c=i["b"]]=t[o];Object(i["q"])(e)&&(e={mounted:e,updated:e}),e.deep&&fe(n),s.push({dir:e,instance:r,value:n,oldValue:void 0,arg:a,modifiers:c})}return e}function We(e,t,n,i){const s=e.dirs,o=t&&t.dirs;for(let a=0;a<s.length;a++){const c=s[a];o&&(c.oldValue=o[a].value);let u=c.dir[i];u&&(Object(r["j"])(),f(u,n,8,[e.el,c,e,t]),Object(r["n"])())}}const He="components";function Qe(e,t){return Je(He,e,!0,t)||e}const Ye=Symbol();function Je(e,t,n=!0,r=!1){const s=K||xn;if(s){const n=s.type;if(e===He){const e=Hn(n,!1);if(e&&(e===t||e===Object(i["e"])(t)||e===Object(i["f"])(Object(i["e"])(t))))return n}const o=Xe(s[e]||n[e],t)||Xe(s.appContext[e],t);return!o&&r?n:o}}function Xe(e,t){return e&&(e[t]||e[Object(i["e"])(t)]||e[Object(i["f"])(Object(i["e"])(t))])}function Ze(e,t,n,r){let s;const o=n&&n[r];if(Object(i["o"])(e)||Object(i["E"])(e)){s=new Array(e.length);for(let n=0,r=e.length;n<r;n++)s[n]=t(e[n],n,void 0,o&&o[n])}else if("number"===typeof e){0,s=new Array(e);for(let n=0;n<e;n++)s[n]=t(n+1,n,void 0,o&&o[n])}else if(Object(i["w"])(e))if(e[Symbol.iterator])s=Array.from(e,(e,n)=>t(e,n,void 0,o&&o[n]));else{const n=Object.keys(e);s=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];s[r]=t(e[i],i,r,o&&o[r])}}else s=[];return n&&(n[r]=s),s}const et=e=>e?Pn(e)?zn(e)||e.proxy:et(e.parent):null,tt=Object(i["h"])(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>et(e.parent),$root:e=>et(e.root),$emit:e=>e.emit,$options:e=>ct(e),$forceUpdate:e=>e.f||(e.f=()=>R(e.update)),$nextTick:e=>e.n||(e.n=C.bind(e.proxy)),$watch:e=>he.bind(e)}),nt={get({_:e},t){const{ctx:n,setupState:s,data:o,props:a,accessCache:c,type:u,appContext:l}=e;let h;if("$"!==t[0]){const r=c[t];if(void 0!==r)switch(r){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return a[t]}else{if(s!==i["b"]&&Object(i["k"])(s,t))return c[t]=1,s[t];if(o!==i["b"]&&Object(i["k"])(o,t))return c[t]=2,o[t];if((h=e.propsOptions[0])&&Object(i["k"])(h,t))return c[t]=3,a[t];if(n!==i["b"]&&Object(i["k"])(n,t))return c[t]=4,n[t];rt&&(c[t]=0)}}const d=tt[t];let f,p;return d?("$attrs"===t&&Object(r["r"])(e,"get",t),d(e)):(f=u.__cssModules)&&(f=f[t])?f:n!==i["b"]&&Object(i["k"])(n,t)?(c[t]=4,n[t]):(p=l.config.globalProperties,Object(i["k"])(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;return s!==i["b"]&&Object(i["k"])(s,t)?(s[t]=n,!0):r!==i["b"]&&Object(i["k"])(r,t)?(r[t]=n,!0):!Object(i["k"])(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let c;return!!n[a]||e!==i["b"]&&Object(i["k"])(e,a)||t!==i["b"]&&Object(i["k"])(t,a)||(c=o[0])&&Object(i["k"])(c,a)||Object(i["k"])(r,a)||Object(i["k"])(tt,a)||Object(i["k"])(s.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:Object(i["k"])(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let rt=!0;function it(e){const t=ct(e),n=e.proxy,s=e.ctx;rt=!1,t.beforeCreate&&ot(t.beforeCreate,e,"bc");const{data:o,computed:a,methods:c,watch:u,provide:l,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:g,updated:m,activated:y,deactivated:v,beforeDestroy:b,beforeUnmount:w,destroyed:_,unmounted:I,render:T,renderTracked:E,renderTriggered:S,errorCaptured:O,serverPrefetch:k,expose:A,inheritAttrs:C,components:x,directives:R,filters:N}=t,D=null;if(h&&st(h,s,D,e.appContext.config.unwrapInjectedRef),c)for(const r in c){const e=c[r];Object(i["q"])(e)&&(s[r]=e.bind(n))}if(o){0;const t=o.call(n,n);0,Object(i["w"])(t)&&(e.data=Object(r["l"])(t))}if(rt=!0,a)for(const r in a){const e=a[r],t=Object(i["q"])(e)?e.bind(n,n):Object(i["q"])(e.get)?e.get.bind(n,n):i["d"];0;const o=!Object(i["q"])(e)&&Object(i["q"])(e.set)?e.set.bind(n):i["d"],c=Jn({get:t,set:o});Object.defineProperty(s,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:e=>c.value=e})}if(u)for(const r in u)at(u[r],s,n,r);if(l){const e=Object(i["q"])(l)?l.call(n):l;Reflect.ownKeys(e).forEach(t=>{ie(t,e[t])})}function P(e,t){Object(i["o"])(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(d&&ot(d,e,"c"),P(Le,f),P(Me,p),P(Fe,g),P(Ue,m),P(Ae,y),P(Ce,v),P(ze,O),P(Ke,E),P(Ge,S),P(Ve,w),P(qe,I),P(Be,k),Object(i["o"])(A))if(A.length){const t=e.exposed||(e.exposed={});A.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})})}else e.exposed||(e.exposed={});T&&e.render===i["d"]&&(e.render=T),null!=C&&(e.inheritAttrs=C),x&&(e.components=x),R&&(e.directives=R)}function st(e,t,n=i["d"],s=!1){Object(i["o"])(e)&&(e=ft(e));for(const o in e){const n=e[o];let a;a=Object(i["w"])(n)?"default"in n?se(n.from||o,n.default,!0):se(n.from||o):se(n),Object(r["g"])(a)&&s?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e}):t[o]=a}}function ot(e,t,n){f(Object(i["o"])(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function at(e,t,n,r){const s=r.includes(".")?de(n,r):()=>n[r];if(Object(i["E"])(e)){const n=t[e];Object(i["q"])(n)&&ue(s,n)}else if(Object(i["q"])(e))ue(s,e.bind(n));else if(Object(i["w"])(e))if(Object(i["o"])(e))e.forEach(e=>at(e,t,n,r));else{const r=Object(i["q"])(e.handler)?e.handler.bind(n):t[e.handler];Object(i["q"])(r)&&ue(s,r,e)}else 0}function ct(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(t);let c;return a?c=a:i.length||n||r?(c={},i.length&&i.forEach(e=>ut(c,e,o,!0)),ut(c,t,o)):c=t,s.set(t,c),c}function ut(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&ut(e,s,n,!0),i&&i.forEach(t=>ut(e,t,n,!0));for(const o in t)if(r&&"expose"===o);else{const r=lt[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const lt={data:ht,props:gt,emits:gt,methods:gt,computed:gt,beforeCreate:pt,created:pt,beforeMount:pt,mounted:pt,beforeUpdate:pt,updated:pt,beforeDestroy:pt,beforeUnmount:pt,destroyed:pt,unmounted:pt,activated:pt,deactivated:pt,errorCaptured:pt,serverPrefetch:pt,components:gt,directives:gt,watch:mt,provide:ht,inject:dt};function ht(e,t){return t?e?function(){return Object(i["h"])(Object(i["q"])(e)?e.call(this,this):e,Object(i["q"])(t)?t.call(this,this):t)}:t:e}function dt(e,t){return gt(ft(e),ft(t))}function ft(e){if(Object(i["o"])(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function pt(e,t){return e?[...new Set([].concat(e,t))]:t}function gt(e,t){return e?Object(i["h"])(Object(i["h"])(Object.create(null),e),t):t}function mt(e,t){if(!e)return t;if(!t)return e;const n=Object(i["h"])(Object.create(null),e);for(const r in t)n[r]=pt(e[r],t[r]);return n}function yt(e,t,n,s=!1){const o={},a={};Object(i["g"])(a,dn,1),e.propsDefaults=Object.create(null),bt(e,t,o,a);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);n?e.props=s?o:Object(r["o"])(o):e.type.props?e.props=o:e.props=a,e.attrs=a}function vt(e,t,n,s){const{props:o,attrs:a,vnode:{patchFlag:c}}=e,u=Object(r["q"])(o),[l]=e.propsOptions;let h=!1;if(!(s||c>0)||16&c){let r;bt(e,t,o,a)&&(h=!0);for(const s in u)t&&(Object(i["k"])(t,s)||(r=Object(i["l"])(s))!==s&&Object(i["k"])(t,r))||(l?!n||void 0===n[s]&&void 0===n[r]||(o[s]=wt(l,u,s,void 0,e,!0)):delete o[s]);if(a!==u)for(const e in a)t&&Object(i["k"])(t,e)||(delete a[e],h=!0)}else if(8&c){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];if(G(e.emitsOptions,s))continue;const c=t[s];if(l)if(Object(i["k"])(a,s))c!==a[s]&&(a[s]=c,h=!0);else{const t=Object(i["e"])(s);o[t]=wt(l,u,t,c,e,!1)}else c!==a[s]&&(a[s]=c,h=!0)}}h&&Object(r["s"])(e,"set","$attrs")}function bt(e,t,n,s){const[o,a]=e.propsOptions;let c,u=!1;if(t)for(let r in t){if(Object(i["A"])(r))continue;const l=t[r];let h;o&&Object(i["k"])(o,h=Object(i["e"])(r))?a&&a.includes(h)?(c||(c={}))[h]=l:n[h]=l:G(e.emitsOptions,r)||r in s&&l===s[r]||(s[r]=l,u=!0)}if(a){const t=Object(r["q"])(n),s=c||i["b"];for(let r=0;r<a.length;r++){const c=a[r];n[c]=wt(o,t,c,s[c],e,!Object(i["k"])(s,c))}}return u}function wt(e,t,n,r,s,o){const a=e[n];if(null!=a){const e=Object(i["k"])(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&Object(i["q"])(e)){const{propsDefaults:i}=s;n in i?r=i[n]:(Nn(s),r=i[n]=e.call(null,t),Dn())}else r=e}a[0]&&(o&&!e?r=!1:!a[1]||""!==r&&r!==Object(i["l"])(n)||(r=!0))}return r}function _t(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const o=e.props,a={},c=[];let u=!1;if(!Object(i["q"])(e)){const r=e=>{u=!0;const[n,r]=_t(e,t,!0);Object(i["h"])(a,n),r&&c.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!o&&!u)return r.set(e,i["a"]),i["a"];if(Object(i["o"])(o))for(let h=0;h<o.length;h++){0;const e=Object(i["e"])(o[h]);It(e)&&(a[e]=i["b"])}else if(o){0;for(const e in o){const t=Object(i["e"])(e);if(It(t)){const n=o[e],r=a[t]=Object(i["o"])(n)||Object(i["q"])(n)?{type:n}:n;if(r){const e=St(Boolean,r.type),n=St(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||Object(i["k"])(r,"default"))&&c.push(t)}}}}const l=[a,c];return r.set(e,l),l}function It(e){return"$"!==e[0]}function Tt(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function Et(e,t){return Tt(e)===Tt(t)}function St(e,t){return Object(i["o"])(t)?t.findIndex(t=>Et(t,e)):Object(i["q"])(t)&&Et(t,e)?0:-1}const Ot=e=>"_"===e[0]||"$stable"===e,kt=e=>Object(i["o"])(e)?e.map(In):[In(e)],At=(e,t,n)=>{if(t._n)return t;const r=Q((...e)=>kt(t(...e)),n);return r._c=!1,r},Ct=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Ot(s))continue;const n=e[s];if(Object(i["q"])(n))t[s]=At(s,n,r);else if(null!=n){0;const e=kt(n);t[s]=()=>e}}},xt=(e,t)=>{const n=kt(t);e.slots.default=()=>n},Rt=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=Object(r["q"])(t),Object(i["g"])(t,"_",n)):Ct(t,e.slots={})}else e.slots={},t&&xt(e,t);Object(i["g"])(e.slots,dn,1)},Nt=(e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,a=i["b"];if(32&r.shapeFlag){const e=t._;e?n&&1===e?o=!1:(Object(i["h"])(s,t),n||1!==e||delete s._):(o=!t.$stable,Ct(t,s)),a=t}else t&&(xt(e,t),a={default:1});if(o)for(const i in s)Ot(i)||i in a||delete s[i]};function Dt(){return{app:null,config:{isNativeTag:i["c"],performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Pt=0;function jt(e,t){return function(n,r=null){Object(i["q"])(n)||(n=Object.assign({},n)),null==r||Object(i["w"])(r)||(r=null);const s=Dt(),o=new Set;let a=!1;const c=s.app={_uid:Pt++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:er,get config(){return s.config},set config(e){0},use(e,...t){return o.has(e)||(e&&Object(i["q"])(e.install)?(o.add(e),e.install(c,...t)):Object(i["q"])(e)&&(o.add(e),e(c,...t))),c},mixin(e){return s.mixins.includes(e)||s.mixins.push(e),c},component(e,t){return t?(s.components[e]=t,c):s.components[e]},directive(e,t){return t?(s.directives[e]=t,c):s.directives[e]},mount(i,o,u){if(!a){0;const l=mn(n,r);return l.appContext=s,o&&t?t(l,i):e(l,i,u),a=!0,c._container=i,i.__vue_app__=c,zn(l.component)||l.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return s.provides[e]=t,c}};return c}}function Lt(e,t,n,s,o=!1){if(Object(i["o"])(e))return void e.forEach((e,r)=>Lt(e,t&&(Object(i["o"])(t)?t[r]:t),n,s,o));if(Se(s)&&!o)return;const a=4&s.shapeFlag?zn(s.component)||s.component.proxy:s.el,c=o?null:a,{i:u,r:l}=e;const h=t&&t.r,f=u.refs===i["b"]?u.refs={}:u.refs,p=u.setupState;if(null!=h&&h!==l&&(Object(i["E"])(h)?(f[h]=null,Object(i["k"])(p,h)&&(p[h]=null)):Object(r["g"])(h)&&(h.value=null)),Object(i["q"])(l))d(l,u,12,[c,f]);else{const t=Object(i["E"])(l),s=Object(r["g"])(l);if(t||s){const r=()=>{if(e.f){const n=t?f[l]:l.value;o?Object(i["o"])(n)&&Object(i["L"])(n,a):Object(i["o"])(n)?n.includes(a)||n.push(a):t?(f[l]=[a],Object(i["k"])(p,l)&&(p[l]=f[l])):(l.value=[a],e.k&&(f[e.k]=l.value))}else t?(f[l]=c,Object(i["k"])(p,l)&&(p[l]=c)):s&&(l.value=c,e.k&&(f[e.k]=c))};c?(r.id=-1,Bt(r,n)):r()}else 0}}let Mt=!1;const Ft=e=>/svg/.test(e.namespaceURI)&&"foreignObject"!==e.tagName,Ut=e=>8===e.nodeType;function Vt(e){const{mt:t,p:n,o:{patchProp:r,createText:s,nextSibling:o,parentNode:a,remove:c,insert:u,createComment:l}}=e,h=(e,t)=>{if(!t.hasChildNodes())return n(null,e,t),F(),void(t._vnode=e);Mt=!1,d(t.firstChild,e,null,null,null),F(),t._vnode=e,Mt&&console.error("Hydration completed but contains mismatches.")},d=(n,r,i,c,l,h=!1)=>{const v=Ut(n)&&"["===n.data,b=()=>m(n,r,i,c,l,v),{type:w,ref:_,shapeFlag:I,patchFlag:T}=r,E=n.nodeType;r.el=n,-2===T&&(h=!1,r.dynamicChildren=null);let S=null;switch(w){case Jt:3!==E?""===r.children?(u(r.el=s(""),a(n),n),S=n):S=b():(n.data!==r.children&&(Mt=!0,n.data=r.children),S=o(n));break;case Xt:S=8!==E||v?b():o(n);break;case Zt:if(1===E||3===E){S=n;const e=!r.children.length;for(let t=0;t<r.staticCount;t++)e&&(r.children+=1===S.nodeType?S.outerHTML:S.data),t===r.staticCount-1&&(r.anchor=S),S=o(S);return S}S=b();break;case Yt:S=v?g(n,r,i,c,l,h):b();break;default:if(1&I)S=1!==E||r.type.toLowerCase()!==n.tagName.toLowerCase()?b():f(n,r,i,c,l,h);else if(6&I){r.slotScopeIds=l;const e=a(n);if(t(r,e,null,i,c,Ft(e),h),S=v?y(n):o(n),S&&Ut(S)&&"teleport end"===S.data&&(S=o(S)),Se(r)){let t;v?(t=mn(Yt),t.anchor=S?S.previousSibling:e.lastChild):t=3===n.nodeType?wn(""):mn("div"),t.el=n,r.component.subTree=t}}else 64&I?S=8!==E?b():r.type.hydrate(n,r,i,c,l,h,e,p):128&I&&(S=r.type.hydrate(n,r,i,c,Ft(a(n)),l,h,e,d))}return null!=_&&Lt(_,null,c,r),S},f=(e,t,n,s,o,a)=>{a=a||!!t.dynamicChildren;const{type:u,props:l,patchFlag:h,shapeFlag:d,dirs:f}=t,g="input"===u&&f||"option"===u;if(g||-1!==h){if(f&&We(t,null,n,"created"),l)if(g||!a||48&h)for(const t in l)(g&&t.endsWith("value")||Object(i["x"])(t)&&!Object(i["A"])(t))&&r(e,t,null,l[t],!1,void 0,n);else l.onClick&&r(e,"onClick",null,l.onClick,!1,void 0,n);let u;if((u=l&&l.onVnodeBeforeMount)&&On(u,n,t),f&&We(t,null,n,"beforeMount"),((u=l&&l.onVnodeMounted)||f)&&re(()=>{u&&On(u,n,t),f&&We(t,null,n,"mounted")},s),16&d&&(!l||!l.innerHTML&&!l.textContent)){let r=p(e.firstChild,t,e,n,s,o,a);while(r){Mt=!0;const e=r;r=r.nextSibling,c(e)}}else 8&d&&e.textContent!==t.children&&(Mt=!0,e.textContent=t.children)}return e.nextSibling},p=(e,t,r,i,s,o,a)=>{a=a||!!t.dynamicChildren;const c=t.children,u=c.length;for(let l=0;l<u;l++){const t=a?c[l]:c[l]=In(c[l]);if(e)e=d(e,t,i,s,o,a);else{if(t.type===Jt&&!t.children)continue;Mt=!0,n(null,t,r,null,i,s,Ft(r),o)}}return e},g=(e,t,n,r,i,s)=>{const{slotScopeIds:c}=t;c&&(i=i?i.concat(c):c);const h=a(e),d=p(o(e),t,h,n,r,i,s);return d&&Ut(d)&&"]"===d.data?o(t.anchor=d):(Mt=!0,u(t.anchor=l("]"),h,d),d)},m=(e,t,r,i,s,u)=>{if(Mt=!0,t.el=null,u){const t=y(e);while(1){const n=o(e);if(!n||n===t)break;c(n)}}const l=o(e),h=a(e);return c(e),n(null,t,h,l,r,i,Ft(h),s),l},y=e=>{let t=0;while(e)if(e=o(e),e&&Ut(e)&&("["===e.data&&t++,"]"===e.data)){if(0===t)return o(e);t--}return e};return[h,d]}function qt(){}const Bt=re;function Gt(e){return zt(e)}function Kt(e){return zt(e,Vt)}function zt(e,t){qt();const n=Object(i["i"])();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:c,createText:u,createComment:l,setText:h,setElementText:d,parentNode:f,nextSibling:p,setScopeId:g=i["d"],cloneNode:m,insertStaticContent:y}=e,v=(e,t,n,r=null,i=null,s=null,o=!1,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!hn(e,t)&&(r=J(e),z(e,i,s,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=t;switch(u){case Jt:b(e,t,n,r);break;case Xt:w(e,t,n,r);break;case Zt:null==e&&_(t,n,r,o);break;case Yt:N(e,t,n,r,i,s,o,a,c);break;default:1&h?E(e,t,n,r,i,s,o,a,c):6&h?P(e,t,n,r,i,s,o,a,c):(64&h||128&h)&&u.process(e,t,n,r,i,s,o,a,c,ee)}null!=l&&i&&Lt(l,e&&e.ref,s,t||e,!t)},b=(e,t,n,r)=>{if(null==e)s(t.el=u(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&h(n,t.children)}},w=(e,t,n,r)=>{null==e?s(t.el=l(t.children||""),n,r):t.el=e.el},_=(e,t,n,r)=>{[e.el,e.anchor]=y(e.children,t,n,r,e.el,e.anchor)},I=({el:e,anchor:t},n,r)=>{let i;while(e&&e!==t)i=p(e),s(e,n,r),e=i;s(t,n,r)},T=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),o(e),e=n;o(t)},E=(e,t,n,r,i,s,o,a,c)=>{o=o||"svg"===t.type,null==e?S(t,n,r,i,s,o,a,c):A(e,t,i,s,o,a,c)},S=(e,t,n,r,o,u,l,h)=>{let f,p;const{type:g,props:y,shapeFlag:v,transition:b,patchFlag:w,dirs:_}=e;if(e.el&&void 0!==m&&-1===w)f=e.el=m(e.el);else{if(f=e.el=c(e.type,u,y&&y.is,y),8&v?d(f,e.children):16&v&&k(e.children,f,null,r,o,u&&"foreignObject"!==g,l,h),_&&We(e,null,r,"created"),y){for(const t in y)"value"===t||Object(i["A"])(t)||a(f,t,null,y[t],u,e.children,r,o,Q);"value"in y&&a(f,"value",null,y.value),(p=y.onVnodeBeforeMount)&&On(p,r,e)}O(f,e,e.scopeId,l,r)}_&&We(e,null,r,"beforeMount");const I=(!o||o&&!o.pendingBranch)&&b&&!b.persisted;I&&b.beforeEnter(f),s(f,t,n),((p=y&&y.onVnodeMounted)||I||_)&&Bt(()=>{p&&On(p,r,e),I&&b.enter(f),_&&We(e,null,r,"mounted")},o)},O=(e,t,n,r,i)=>{if(n&&g(e,n),r)for(let s=0;s<r.length;s++)g(e,r[s]);if(i){let n=i.subTree;if(t===n){const t=i.vnode;O(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},k=(e,t,n,r,i,s,o,a,c=0)=>{for(let u=c;u<e.length;u++){const c=e[u]=a?Tn(e[u]):In(e[u]);v(null,c,t,n,r,i,s,o,a)}},A=(e,t,n,r,s,o,c)=>{const u=t.el=e.el;let{patchFlag:l,dynamicChildren:h,dirs:f}=t;l|=16&e.patchFlag;const p=e.props||i["b"],g=t.props||i["b"];let m;n&&$t(n,!1),(m=g.onVnodeBeforeUpdate)&&On(m,n,t,e),f&&We(t,e,n,"beforeUpdate"),n&&$t(n,!0);const y=s&&"foreignObject"!==t.type;if(h?C(e.dynamicChildren,h,u,n,r,y,o):c||q(e,t,u,null,n,r,y,o,!1),l>0){if(16&l)x(u,t,p,g,n,r,s);else if(2&l&&p.class!==g.class&&a(u,"class",null,g.class,s),4&l&&a(u,"style",p.style,g.style,s),8&l){const i=t.dynamicProps;for(let t=0;t<i.length;t++){const o=i[t],c=p[o],l=g[o];l===c&&"value"!==o||a(u,o,c,l,s,e.children,n,r,Q)}}1&l&&e.children!==t.children&&d(u,t.children)}else c||null!=h||x(u,t,p,g,n,r,s);((m=g.onVnodeUpdated)||f)&&Bt(()=>{m&&On(m,n,t,e),f&&We(t,e,n,"updated")},r)},C=(e,t,n,r,i,s,o)=>{for(let a=0;a<t.length;a++){const c=e[a],u=t[a],l=c.el&&(c.type===Yt||!hn(c,u)||70&c.shapeFlag)?f(c.el):n;v(c,u,l,null,r,i,s,o,!0)}},x=(e,t,n,r,s,o,c)=>{if(n!==r){for(const u in r){if(Object(i["A"])(u))continue;const l=r[u],h=n[u];l!==h&&"value"!==u&&a(e,u,h,l,c,t.children,s,o,Q)}if(n!==i["b"])for(const u in n)Object(i["A"])(u)||u in r||a(e,u,n[u],null,c,t.children,s,o,Q);"value"in r&&a(e,"value",n.value,r.value)}},N=(e,t,n,r,i,o,a,c,l)=>{const h=t.el=e?e.el:u(""),d=t.anchor=e?e.anchor:u("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:g}=t;g&&(c=c?c.concat(g):g),null==e?(s(h,n,r),s(d,n,r),k(t.children,n,d,i,o,a,c,l)):f>0&&64&f&&p&&e.dynamicChildren?(C(e.dynamicChildren,p,n,i,o,a,c),(null!=t.key||i&&t===i.subTree)&&Wt(e,t,!0)):q(e,t,n,d,i,o,a,c,l)},P=(e,t,n,r,i,s,o,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,o,c):j(t,n,r,i,s,o,c):L(e,t,c)},j=(e,t,n,r,i,s,o)=>{const a=e.component=Cn(e,r,i);if(Oe(e)&&(a.ctx.renderer=ee),Fn(a),a.asyncDep){if(i&&i.registerDep(a,U),!e.el){const e=a.subTree=mn(Xt);w(null,e,t,n)}}else U(a,e,t,n,i,s,o)},L=(e,t,n)=>{const r=t.component=e.component;if(Z(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void V(r,t,n);r.next=t,D(r.update),r.update()}else t.el=e.el,r.vnode=t},U=(e,t,n,s,o,a,c)=>{const u=()=>{if(e.isMounted){let t,{next:n,bu:r,u:s,parent:u,vnode:l}=e,h=n;0,$t(e,!1),n?(n.el=l.el,V(e,n,c)):n=l,r&&Object(i["n"])(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&On(t,u,n,l),$t(e,!0);const d=Y(e);0;const p=e.subTree;e.subTree=d,v(p,d,f(p.el),J(p),e,o,a),n.el=d.el,null===h&&te(e,d.el),s&&Bt(s,o),(t=n.props&&n.props.onVnodeUpdated)&&Bt(()=>On(t,u,n,l),o)}else{let r;const{el:c,props:u}=t,{bm:l,m:h,parent:d}=e,f=Se(t);if($t(e,!1),l&&Object(i["n"])(l),!f&&(r=u&&u.onVnodeBeforeMount)&&On(r,d,t),$t(e,!0),c&&re){const n=()=>{e.subTree=Y(e),re(c,e.subTree,e,o,null)};f?t.type.__asyncLoader().then(()=>!e.isUnmounted&&n()):n()}else{0;const r=e.subTree=Y(e);0,v(null,r,n,s,e,o,a),t.el=r.el}if(h&&Bt(h,o),!f&&(r=u&&u.onVnodeMounted)){const e=t;Bt(()=>On(r,d,e),o)}(256&t.shapeFlag||d&&Se(d.vnode)&&256&d.vnode.shapeFlag)&&e.a&&Bt(e.a,o),e.isMounted=!0,t=n=s=null}},l=e.effect=new r["b"](u,()=>R(h),e.scope),h=e.update=()=>l.run();h.id=e.uid,$t(e,!0),h()},V=(e,t,n)=>{t.component=e;const i=e.vnode.props;e.vnode=t,e.next=null,vt(e,t.props,i,n),Nt(e,t.children,n),Object(r["j"])(),M(void 0,e.update),Object(r["n"])()},q=(e,t,n,r,i,s,o,a,c=!1)=>{const u=e&&e.children,l=e?e.shapeFlag:0,h=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void G(u,h,n,r,i,s,o,a,c);if(256&f)return void B(u,h,n,r,i,s,o,a,c)}8&p?(16&l&&Q(u,i,s),h!==u&&d(n,h)):16&l?16&p?G(u,h,n,r,i,s,o,a,c):Q(u,i,s,!0):(8&l&&d(n,""),16&p&&k(h,n,r,i,s,o,a,c))},B=(e,t,n,r,s,o,a,c,u)=>{e=e||i["a"],t=t||i["a"];const l=e.length,h=t.length,d=Math.min(l,h);let f;for(f=0;f<d;f++){const r=t[f]=u?Tn(t[f]):In(t[f]);v(e[f],r,n,null,s,o,a,c,u)}l>h?Q(e,s,o,!0,!1,d):k(t,n,r,s,o,a,c,u,d)},G=(e,t,n,r,s,o,a,c,u)=>{let l=0;const h=t.length;let d=e.length-1,f=h-1;while(l<=d&&l<=f){const r=e[l],i=t[l]=u?Tn(t[l]):In(t[l]);if(!hn(r,i))break;v(r,i,n,null,s,o,a,c,u),l++}while(l<=d&&l<=f){const r=e[d],i=t[f]=u?Tn(t[f]):In(t[f]);if(!hn(r,i))break;v(r,i,n,null,s,o,a,c,u),d--,f--}if(l>d){if(l<=f){const e=f+1,i=e<h?t[e].el:r;while(l<=f)v(null,t[l]=u?Tn(t[l]):In(t[l]),n,i,s,o,a,c,u),l++}}else if(l>f)while(l<=d)z(e[l],s,o,!0),l++;else{const p=l,g=l,m=new Map;for(l=g;l<=f;l++){const e=t[l]=u?Tn(t[l]):In(t[l]);null!=e.key&&m.set(e.key,l)}let y,b=0;const w=f-g+1;let _=!1,I=0;const T=new Array(w);for(l=0;l<w;l++)T[l]=0;for(l=p;l<=d;l++){const r=e[l];if(b>=w){z(r,s,o,!0);continue}let i;if(null!=r.key)i=m.get(r.key);else for(y=g;y<=f;y++)if(0===T[y-g]&&hn(r,t[y])){i=y;break}void 0===i?z(r,s,o,!0):(T[i-g]=l+1,i>=I?I=i:_=!0,v(r,t[i],n,null,s,o,a,c,u),b++)}const E=_?Ht(T):i["a"];for(y=E.length-1,l=w-1;l>=0;l--){const e=g+l,i=t[e],d=e+1<h?t[e+1].el:r;0===T[l]?v(null,i,n,d,s,o,a,c,u):_&&(y<0||l!==E[y]?K(i,n,d,2):y--)}}},K=(e,t,n,r,i=null)=>{const{el:o,type:a,transition:c,children:u,shapeFlag:l}=e;if(6&l)return void K(e.component.subTree,t,n,r);if(128&l)return void e.suspense.move(t,n,r);if(64&l)return void a.move(e,t,n,ee);if(a===Yt){s(o,t,n);for(let e=0;e<u.length;e++)K(u[e],t,n,r);return void s(e.anchor,t,n)}if(a===Zt)return void I(e,t,n);const h=2!==r&&1&l&&c;if(h)if(0===r)c.beforeEnter(o),s(o,t,n),Bt(()=>c.enter(o),i);else{const{leave:e,delayLeave:r,afterLeave:i}=c,a=()=>s(o,t,n),u=()=>{e(o,()=>{a(),i&&i()})};r?r(o,a,u):u()}else s(o,t,n)},z=(e,t,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:d}=e;if(null!=a&&Lt(a,null,n,e,!0),256&l)return void t.ctx.deactivate(e);const f=1&l&&d,p=!Se(e);let g;if(p&&(g=o&&o.onVnodeBeforeUnmount)&&On(g,t,e),6&l)H(e.component,n,r);else{if(128&l)return void e.suspense.unmount(n,r);f&&We(e,null,t,"beforeUnmount"),64&l?e.type.remove(e,t,n,i,ee,r):u&&(s!==Yt||h>0&&64&h)?Q(u,t,n,!1,!0):(s===Yt&&384&h||!i&&16&l)&&Q(c,t,n),r&&$(e)}(p&&(g=o&&o.onVnodeUnmounted)||f)&&Bt(()=>{g&&On(g,t,e),f&&We(e,null,t,"unmounted")},n)},$=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===Yt)return void W(n,r);if(t===Zt)return void T(e);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,o=()=>t(n,s);r?r(e.el,s,o):o()}else s()},W=(e,t)=>{let n;while(e!==t)n=p(e),o(e),e=n;o(t)},H=(e,t,n)=>{const{bum:r,scope:s,update:o,subTree:a,um:c}=e;r&&Object(i["n"])(r),s.stop(),o&&(o.active=!1,z(a,e,t,n)),c&&Bt(c,t),Bt(()=>{e.isUnmounted=!0},t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},Q=(e,t,n,r=!1,i=!1,s=0)=>{for(let o=s;o<e.length;o++)z(e[o],t,n,r,i)},J=e=>6&e.shapeFlag?J(e.component.subTree):128&e.shapeFlag?e.suspense.next():p(e.anchor||e.el),X=(e,t,n)=>{null==e?t._vnode&&z(t._vnode,null,null,!0):v(t._vnode||null,e,t,null,null,null,n),F(),t._vnode=e},ee={p:v,um:z,m:K,r:$,mt:j,mc:k,pc:q,pbc:C,n:J,o:e};let ne,re;return t&&([ne,re]=t(ee)),{render:X,hydrate:ne,createApp:jt(X,ne)}}function $t({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Wt(e,t,n=!1){const r=e.children,s=t.children;if(Object(i["o"])(r)&&Object(i["o"])(s))for(let i=0;i<r.length;i++){const e=r[i];let t=s[i];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=s[i]=Tn(s[i]),t.el=e.el),n||Wt(e,t))}}function Ht(e){const t=e.slice(),n=[0];let r,i,s,o,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,e[n[a]]<c?s=a+1:o=a;c<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=t[o];return n}const Qt=e=>e.__isTeleport;const Yt=Symbol(void 0),Jt=Symbol(void 0),Xt=Symbol(void 0),Zt=Symbol(void 0),en=[];let tn=null;function nn(e=!1){en.push(tn=e?null:[])}function rn(){en.pop(),tn=en[en.length-1]||null}let sn=1;function on(e){sn+=e}function an(e){return e.dynamicChildren=sn>0?tn||i["a"]:null,rn(),sn>0&&tn&&tn.push(e),e}function cn(e,t,n,r,i,s){return an(gn(e,t,n,r,i,s,!0))}function un(e,t,n,r,i){return an(mn(e,t,n,r,i,!0))}function ln(e){return!!e&&!0===e.__v_isVNode}function hn(e,t){return e.type===t.type&&e.key===t.key}const dn="__vInternal",fn=({key:e})=>null!=e?e:null,pn=({ref:e,ref_key:t,ref_for:n})=>null!=e?Object(i["E"])(e)||Object(r["g"])(e)||Object(i["q"])(e)?{i:K,r:e,k:t,f:!!n}:e:null;function gn(e,t=null,n=null,r=0,s=null,o=(e===Yt?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&fn(t),ref:t&&pn(t),scopeId:z,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return c?(En(u,n),128&o&&e.normalize(u)):n&&(u.shapeFlag|=Object(i["E"])(n)?8:16),sn>0&&!a&&tn&&(u.patchFlag>0||6&o)&&32!==u.patchFlag&&tn.push(u),u}const mn=yn;function yn(e,t=null,n=null,s=0,o=null,a=!1){if(e&&e!==Ye||(e=Xt),ln(e)){const r=bn(e,t,!0);return n&&En(r,n),sn>0&&!a&&tn&&(6&r.shapeFlag?tn[tn.indexOf(e)]=r:tn.push(r)),r.patchFlag|=-2,r}if(Yn(e)&&(e=e.__vccOpts),t){t=vn(t);let{class:e,style:n}=t;e&&!Object(i["E"])(e)&&(t.class=Object(i["J"])(e)),Object(i["w"])(n)&&(Object(r["d"])(n)&&!Object(i["o"])(n)&&(n=Object(i["h"])({},n)),t.style=Object(i["K"])(n))}const c=Object(i["E"])(e)?1:ne(e)?128:Qt(e)?64:Object(i["w"])(e)?4:Object(i["q"])(e)?2:0;return gn(e,t,n,s,o,c,a,!0)}function vn(e){return e?Object(r["d"])(e)||dn in e?Object(i["h"])({},e):e:null}function bn(e,t,n=!1){const{props:r,ref:s,patchFlag:o,children:a}=e,c=t?Sn(r||{},t):r,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&fn(c),ref:t&&t.ref?n&&s?Object(i["o"])(s)?s.concat(pn(t)):[s,pn(t)]:pn(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Yt?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&bn(e.ssContent),ssFallback:e.ssFallback&&bn(e.ssFallback),el:e.el,anchor:e.anchor};return u}function wn(e=" ",t=0){return mn(Jt,null,e,t)}function _n(e="",t=!1){return t?(nn(),un(Xt,null,e)):mn(Xt,null,e)}function In(e){return null==e||"boolean"===typeof e?mn(Xt):Object(i["o"])(e)?mn(Yt,null,e.slice()):"object"===typeof e?Tn(e):mn(Jt,null,String(e))}function Tn(e){return null===e.el||e.memo?e:bn(e)}function En(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if(Object(i["o"])(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),En(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||dn in t?3===r&&K&&(1===K.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=K}}else Object(i["q"])(t)?(t={default:t,_ctx:K},n=32):(t=String(t),64&r?(n=16,t=[wn(t)]):n=8);e.children=t,e.shapeFlag|=n}function Sn(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=Object(i["J"])([t.class,r.class]));else if("style"===e)t.style=Object(i["K"])([t.style,r.style]);else if(Object(i["x"])(e)){const n=t[e],s=r[e];!s||n===s||Object(i["o"])(n)&&n.includes(s)||(t[e]=n?[].concat(n,s):s)}else""!==e&&(t[e]=r[e])}return t}function On(e,t,n,r=null){f(e,t,7,[n,r])}const kn=Dt();let An=0;function Cn(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||kn,a={uid:An++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new r["a"](!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_t(s,o),emitsOptions:B(s,o),emit:null,emitted:null,propsDefaults:i["b"],inheritAttrs:s.inheritAttrs,ctx:i["b"],data:i["b"],props:i["b"],attrs:i["b"],slots:i["b"],refs:i["b"],setupState:i["b"],setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=q.bind(null,a),e.ce&&e.ce(a),a}let xn=null;const Rn=()=>xn||K,Nn=e=>{xn=e,e.scope.on()},Dn=()=>{xn&&xn.scope.off(),xn=null};function Pn(e){return 4&e.vnode.shapeFlag}let jn,Ln,Mn=!1;function Fn(e,t=!1){Mn=t;const{props:n,children:r}=e.vnode,i=Pn(e);yt(e,n,i,t),Rt(e,r);const s=i?Un(e,t):void 0;return Mn=!1,s}function Un(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Object(r["i"])(new Proxy(e.ctx,nt));const{setup:s}=n;if(s){const n=e.setupContext=s.length>1?Kn(e):null;Nn(e),Object(r["j"])();const o=d(s,e,0,[e.props,n]);if(Object(r["n"])(),Dn(),Object(i["z"])(o)){if(o.then(Dn,Dn),t)return o.then(n=>{Vn(e,n,t)}).catch(t=>{p(t,e,0)});e.asyncDep=o}else Vn(e,o,t)}else Bn(e,t)}function Vn(e,t,n){Object(i["q"])(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Object(i["w"])(t)&&(e.setupState=Object(r["k"])(t)),Bn(e,n)}const qn=()=>!jn;function Bn(e,t,n){const s=e.type;if(!e.render){if(!t&&jn&&!s.render){const t=s.template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:o,compilerOptions:a}=s,c=Object(i["h"])(Object(i["h"])({isCustomElement:n,delimiters:o},r),a);s.render=jn(t,c)}}e.render=s.render||i["d"],Ln&&Ln(e)}Nn(e),Object(r["j"])(),it(e),Object(r["n"])(),Dn()}function Gn(e){return new Proxy(e.attrs,{get(t,n){return Object(r["r"])(e,"get","$attrs"),t[n]}})}function Kn(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=Gn(e))},slots:e.slots,emit:e.emit,expose:t}}function zn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Object(r["k"])(Object(r["i"])(e.exposed)),{get(t,n){return n in t?t[n]:n in tt?tt[n](e):void 0}}))}const $n=/(?:^|[-_])(\w)/g,Wn=e=>e.replace($n,e=>e.toUpperCase()).replace(/[-_]/g,"");function Hn(e,t=!0){return Object(i["q"])(e)?e.displayName||e.name:e.name||t&&e.__name}function Qn(e,t,n=!1){let r=Hn(t);if(!r&&t.__file){const e=t.__file.match(/([^/\\]+)\.\w+$/);e&&(r=e[1])}if(!r&&e&&e.parent){const n=e=>{for(const n in e)if(e[n]===t)return n};r=n(e.components||e.parent.type.components)||n(e.appContext.components)}return r?Wn(r):n?"App":"Anonymous"}function Yn(e){return Object(i["q"])(e)&&"__vccOpts"in e}const Jn=(e,t)=>Object(r["c"])(e,t,Mn);function Xn(e,t,n){const r=arguments.length;return 2===r?Object(i["w"])(t)&&!Object(i["o"])(t)?ln(t)?mn(e,null,[t]):mn(e,t):mn(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&ln(n)&&(n=[n]),mn(e,t,n))}Symbol("");function Zn(){return void 0}const er="3.2.37"},"5c6c":function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},"5e77":function(e,t,n){var r=n("83ab"),i=n("1a2d"),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&o(s,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},"5e7e":function(e,t,n){"use strict";var r,i,s,o,a=n("23e7"),c=n("c430"),u=n("605d"),l=n("da84"),h=n("c65b"),d=n("cb2d"),f=n("d2bb"),p=n("d44e"),g=n("2626"),m=n("59ed"),y=n("1626"),v=n("861d"),b=n("19aa"),w=n("4840"),_=n("2cf4").set,I=n("b575"),T=n("44de"),E=n("e667"),S=n("01b4"),O=n("69f3"),k=n("d256"),A=n("4738"),C=n("f069"),x="Promise",R=A.CONSTRUCTOR,N=A.REJECTION_EVENT,D=A.SUBCLASSING,P=O.getterFor(x),j=O.set,L=k&&k.prototype,M=k,F=L,U=l.TypeError,V=l.document,q=l.process,B=C.f,G=B,K=!!(V&&V.createEvent&&l.dispatchEvent),z="unhandledrejection",$="rejectionhandled",W=0,H=1,Q=2,Y=1,J=2,X=function(e){var t;return!(!v(e)||!y(t=e.then))&&t},Z=function(e,t){var n,r,i,s=t.value,o=t.state==H,a=o?e.ok:e.fail,c=e.resolve,u=e.reject,l=e.domain;try{a?(o||(t.rejection===J&&ie(t),t.rejection=Y),!0===a?n=s:(l&&l.enter(),n=a(s),l&&(l.exit(),i=!0)),n===e.promise?u(U("Promise-chain cycle")):(r=X(n))?h(r,n,c,u):c(n)):u(s)}catch(d){l&&!i&&l.exit(),u(d)}},ee=function(e,t){e.notified||(e.notified=!0,I((function(){var n,r=e.reactions;while(n=r.get())Z(n,e);e.notified=!1,t&&!e.rejection&&ne(e)})))},te=function(e,t,n){var r,i;K?(r=V.createEvent("Event"),r.promise=t,r.reason=n,r.initEvent(e,!1,!0),l.dispatchEvent(r)):r={promise:t,reason:n},!N&&(i=l["on"+e])?i(r):e===z&&T("Unhandled promise rejection",n)},ne=function(e){h(_,l,(function(){var t,n=e.facade,r=e.value,i=re(e);if(i&&(t=E((function(){u?q.emit("unhandledRejection",r,n):te(z,n,r)})),e.rejection=u||re(e)?J:Y,t.error))throw t.value}))},re=function(e){return e.rejection!==Y&&!e.parent},ie=function(e){h(_,l,(function(){var t=e.facade;u?q.emit("rejectionHandled",t):te($,t,e.value)}))},se=function(e,t,n){return function(r){e(t,r,n)}},oe=function(e,t,n){e.done||(e.done=!0,n&&(e=n),e.value=t,e.state=Q,ee(e,!0))},ae=function(e,t,n){if(!e.done){e.done=!0,n&&(e=n);try{if(e.facade===t)throw U("Promise can't be resolved itself");var r=X(t);r?I((function(){var n={done:!1};try{h(r,t,se(ae,n,e),se(oe,n,e))}catch(i){oe(n,i,e)}})):(e.value=t,e.state=H,ee(e,!1))}catch(i){oe({done:!1},i,e)}}};if(R&&(M=function(e){b(this,F),m(e),h(r,this);var t=P(this);try{e(se(ae,t),se(oe,t))}catch(n){oe(t,n)}},F=M.prototype,r=function(e){j(this,{type:x,done:!1,notified:!1,parent:!1,reactions:new S,rejection:!1,state:W,value:void 0})},r.prototype=d(F,"then",(function(e,t){var n=P(this),r=B(w(this,M));return n.parent=!0,r.ok=!y(e)||e,r.fail=y(t)&&t,r.domain=u?q.domain:void 0,n.state==W?n.reactions.add(r):I((function(){Z(r,n)})),r.promise})),i=function(){var e=new r,t=P(e);this.promise=e,this.resolve=se(ae,t),this.reject=se(oe,t)},C.f=B=function(e){return e===M||e===s?new i(e):G(e)},!c&&y(k)&&L!==Object.prototype)){o=L.then,D||d(L,"then",(function(e,t){var n=this;return new M((function(e,t){h(o,n,e,t)})).then(e,t)}),{unsafe:!0});try{delete L.constructor}catch(ce){}f&&f(L,F)}a({global:!0,constructor:!0,wrap:!0,forced:R},{Promise:M}),p(M,x,!1,!0),g(x)},"5eed":function(e,t,n){var r=n("d256"),i=n("1c7e"),s=n("4738").CONSTRUCTOR;e.exports=s||!i((function(e){r.all(e).then(void 0,(function(){}))}))},"605d":function(e,t,n){var r=n("c6b6"),i=n("da84");e.exports="process"==r(i.process)},6069:function(e,t){e.exports="object"==typeof window&&"object"!=typeof Deno},"60da":function(e,t,n){"use strict";var r=n("83ab"),i=n("e330"),s=n("c65b"),o=n("d039"),a=n("df75"),c=n("7418"),u=n("d1e7"),l=n("7b0b"),h=n("44ad"),d=Object.assign,f=Object.defineProperty,p=i([].concat);e.exports=!d||o((function(){if(r&&1!==d({b:1},d(f({},"a",{enumerable:!0,get:function(){f(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},n=Symbol(),i="abcdefghijklmnopqrst";return e[n]=7,i.split("").forEach((function(e){t[e]=e})),7!=d({},e)[n]||a(d({},t)).join("")!=i}))?function(e,t){var n=l(e),i=arguments.length,o=1,d=c.f,f=u.f;while(i>o){var g,m=h(arguments[o++]),y=d?p(a(m),d(m)):a(m),v=y.length,b=0;while(v>b)g=y[b++],r&&!s(f,m,g)||(n[g]=m[g])}return n}:d},6374:function(e,t,n){var r=n("da84"),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},6547:function(e,t,n){var r=n("e330"),i=n("5926"),s=n("577e"),o=n("1d80"),a=r("".charAt),c=r("".charCodeAt),u=r("".slice),l=function(e){return function(t,n){var r,l,h=s(o(t)),d=i(n),f=h.length;return d<0||d>=f?e?"":void 0:(r=c(h,d),r<55296||r>56319||d+1===f||(l=c(h,d+1))<56320||l>57343?e?a(h,d):r:e?u(h,d,d+2):l-56320+(r-55296<<10)+65536)}};e.exports={codeAt:l(!1),charAt:l(!0)}},"65f0":function(e,t,n){var r=n("0b42");e.exports=function(e,t){return new(r(e))(0===t?0:t)}},"68ee":function(e,t,n){var r=n("e330"),i=n("d039"),s=n("1626"),o=n("f5df"),a=n("d066"),c=n("8925"),u=function(){},l=[],h=a("Reflect","construct"),d=/^\s*(?:class|function)\b/,f=r(d.exec),p=!d.exec(u),g=function(e){if(!s(e))return!1;try{return h(u,l,e),!0}catch(t){return!1}},m=function(e){if(!s(e))return!1;switch(o(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return p||!!f(d,c(e))}catch(t){return!0}};m.sham=!0,e.exports=!h||i((function(){var e;return g(g.call)||!g(Object)||!g((function(){e=!0}))||e}))?m:g},"69f3":function(e,t,n){var r,i,s,o=n("7f9a"),a=n("da84"),c=n("e330"),u=n("861d"),l=n("9112"),h=n("1a2d"),d=n("c6cd"),f=n("f772"),p=n("d012"),g="Object already initialized",m=a.TypeError,y=a.WeakMap,v=function(e){return s(e)?i(e):r(e,{})},b=function(e){return function(t){var n;if(!u(t)||(n=i(t)).type!==e)throw m("Incompatible receiver, "+e+" required");return n}};if(o||d.state){var w=d.state||(d.state=new y),_=c(w.get),I=c(w.has),T=c(w.set);r=function(e,t){if(I(w,e))throw new m(g);return t.facade=e,T(w,e,t),t},i=function(e){return _(w,e)||{}},s=function(e){return I(w,e)}}else{var E=f("state");p[E]=!0,r=function(e,t){if(h(e,E))throw new m(g);return t.facade=e,l(e,E,t),t},i=function(e){return h(e,E)?e[E]:{}},s=function(e){return h(e,E)}}e.exports={set:r,get:i,has:s,enforce:v,getterFor:b}},"6b0d":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},"6c02":function(e,t,n){"use strict";n.d(t,"a",(function(){return et})),n.d(t,"b",(function(){return K})),n.d(t,"c",(function(){return rt}));var r=n("7a23");n("abc5");n("5134");
/*!
  * vue-router v4.0.15
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const i="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,s=e=>i?Symbol(e):"_vr_"+e,o=s("rvlm"),a=s("rvd"),c=s("r"),u=s("rl"),l=s("rvl"),h="undefined"!==typeof window;function d(e){return e.__esModule||i&&"Module"===e[Symbol.toStringTag]}const f=Object.assign;function p(e,t){const n={};for(const r in t){const i=t[r];n[r]=Array.isArray(i)?i.map(e):e(i)}return n}const g=()=>{};const m=/\/$/,y=e=>e.replace(m,"");function v(e,t,n="/"){let r,i={},s="",o="";const a=t.indexOf("?"),c=t.indexOf("#",a>-1?a:0);return a>-1&&(r=t.slice(0,a),s=t.slice(a+1,c>-1?c:t.length),i=e(s)),c>-1&&(r=r||t.slice(0,c),o=t.slice(c,t.length)),r=O(null!=r?r:t,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function b(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function w(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function _(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&I(t.matched[r],n.matched[i])&&T(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function I(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function T(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!E(e[n],t[n]))return!1;return!0}function E(e,t){return Array.isArray(e)?S(e,t):Array.isArray(t)?S(t,e):e===t}function S(e,t){return Array.isArray(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):1===e.length&&e[0]===t}function O(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let i,s,o=n.length-1;for(i=0;i<r.length;i++)if(s=r[i],1!==o&&"."!==s){if(".."!==s)break;o--}return n.slice(0,o).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var k,A;(function(e){e["pop"]="pop",e["push"]="push"})(k||(k={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(A||(A={}));function C(e){if(!e)if(h){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),y(e)}const x=/^[^#]+#/;function R(e,t){return e.replace(x,"#")+t}function N(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const D=()=>({left:window.pageXOffset,top:window.pageYOffset});function P(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=N(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function j(e,t){const n=history.state?history.state.position-t:-1;return n+e}const L=new Map;function M(e,t){L.set(e,t)}function F(e){const t=L.get(e);return L.delete(e),t}let U=()=>location.protocol+"//"+location.host;function V(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let t=i.includes(e.slice(s))?e.slice(s).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),w(n,"")}const o=w(n,e);return o+r+i}function q(e,t,n,r){let i=[],s=[],o=null;const a=({state:s})=>{const a=V(e,location),c=n.value,u=t.value;let l=0;if(s){if(n.value=a,t.value=s,o&&o===c)return void(o=null);l=u?s.position-u.position:0}else r(a);i.forEach(e=>{e(n.value,c,{delta:l,type:k.pop,direction:l?l>0?A.forward:A.back:A.unknown})})};function c(){o=n.value}function u(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return s.push(t),t}function l(){const{history:e}=window;e.state&&e.replaceState(f({},e.state,{scroll:D()}),"")}function h(){for(const e of s)e();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function B(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?D():null}}function G(e){const{history:t,location:n}=window,r={value:V(e,n)},i={value:t.state};function s(r,s,o){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:U()+e+r;try{t[o?"replaceState":"pushState"](s,"",c),i.value=s}catch(u){console.error(u),n[o?"replace":"assign"](c)}}function o(e,n){const o=f({},t.state,B(i.value.back,e,i.value.forward,!0),n,{position:i.value.position});s(e,o,!0),r.value=e}function a(e,n){const o=f({},i.value,t.state,{forward:e,scroll:D()});s(o.current,o,!0);const a=f({},B(r.value,e,null),{position:o.position+1},n);s(e,a,!1),r.value=e}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:a,replace:o}}function K(e){e=C(e);const t=G(e),n=q(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const i=f({location:"",base:e,go:r,createHref:R.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function z(e){return"string"===typeof e||e&&"object"===typeof e}function $(e){return"string"===typeof e||"symbol"===typeof e}const W={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},H=s("nf");var Q;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(Q||(Q={}));function Y(e,t){return f(new Error,{type:e,[H]:!0},t)}function J(e,t){return e instanceof Error&&H in e&&(null==t||!!(e.type&t))}const X="[^/]+?",Z={sensitive:!1,strict:!1,start:!0,end:!0},ee=/[.+*?^${}()[\]/\\]/g;function te(e,t){const n=f({},Z,t),r=[];let i=n.start?"^":"";const s=[];for(const l of e){const e=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let t=0;t<l.length;t++){const r=l[t];let o=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(ee,"\\$&"),o+=40;else if(1===r.type){const{value:e,repeatable:n,optional:a,regexp:c}=r;s.push({name:e,repeatable:n,optional:a});const h=c||X;if(h!==X){o+=10;try{new RegExp(`(${h})`)}catch(u){throw new Error(`Invalid custom RegExp for param "${e}" (${h}): `+u.message)}}let d=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;t||(d=a&&l.length<2?`(?:/${d})`:"/"+d),a&&(d+="?"),i+=d,o+=20,a&&(o+=-8),n&&(o+=-20),".*"===h&&(o+=-50)}e.push(o)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(e){const t=e.match(o),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=s[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n}function c(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const s of i)if(0===s.type)n+=s.value;else if(1===s.type){const{value:o,repeatable:a,optional:c}=s,u=o in t?t[o]:"";if(Array.isArray(u)&&!a)throw new Error(`Provided param "${o}" is an array but it is not repeatable (* or + modifiers)`);const l=Array.isArray(u)?u.join("/"):u;if(!l){if(!c)throw new Error(`Missing required param "${o}"`);i.length<2&&e.length>1&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=l}}return n}return{re:o,score:r,keys:s,parse:a,stringify:c}}function ne(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function re(e,t){let n=0;const r=e.score,i=t.score;while(n<r.length&&n<i.length){const e=ne(r[n],i[n]);if(e)return e;n++}return i.length-r.length}const ie={type:0,value:""},se=/[a-zA-Z0-9_]/;function oe(e){if(!e)return[[]];if("/"===e)return[[ie]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${u}": ${e}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,c=0,u="",l="";function h(){u&&(0===n?s.push({type:0,value:u}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),u="")}function d(){u+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:se.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${u}"`),h(),o(),i}function ae(e,t,n){const r=te(oe(e.path),n);const i=f(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf===!t.record.aliasOf&&t.children.push(i),i}function ce(e,t){const n=[],r=new Map;function i(e){return r.get(e)}function s(e,n,r){const i=!r,a=le(e);a.aliasOf=r&&r.record;const u=pe(t,e),l=[a];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)l.push(f({},a,{components:r?r.record.components:a.components,path:e,aliasOf:r?r.record:a}))}let h,d;for(const t of l){const{path:l}=t;if(n&&"/"!==l[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(l&&r+l)}if(h=ae(t,n,u),r?r.alias.push(h):(d=d||h,d!==h&&d.alias.push(h),i&&e.name&&!de(h)&&o(e.name)),"children"in a){const e=a.children;for(let t=0;t<e.length;t++)s(e[t],h,r&&r.children[t])}r=r||h,c(h)}return d?()=>{o(d)}:g}function o(e){if($(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function a(){return n}function c(e){let t=0;while(t<n.length&&re(e,n[t])>=0&&(e.record.path!==n[t].record.path||!ge(e,n[t])))t++;n.splice(t,0,e),e.record.name&&!de(e)&&r.set(e.record.name,e)}function u(e,t){let i,s,o,a={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw Y(1,{location:e});o=i.record.name,a=f(ue(t.params,i.keys.filter(e=>!e.optional).map(e=>e.name)),e.params),s=i.stringify(a)}else if("path"in e)s=e.path,i=n.find(e=>e.re.test(s)),i&&(a=i.parse(s),o=i.record.name);else{if(i=t.name?r.get(t.name):n.find(e=>e.re.test(t.path)),!i)throw Y(1,{location:e,currentLocation:t});o=i.record.name,a=f({},t.params,e.params),s=i.stringify(a)}const c=[];let u=i;while(u)c.unshift(u.record),u=u.parent;return{name:o,path:s,params:a,matched:c,meta:fe(c)}}return t=pe({strict:!1,end:!0,sensitive:!1},t),e.forEach(e=>s(e)),{addRoute:s,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function ue(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function le(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:he(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function he(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"===typeof n?n:n[r];return t}function de(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function fe(e){return e.reduce((e,t)=>f(e,t.meta),{})}function pe(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function ge(e,t){return t.children.some(t=>t===e||ge(e,t))}const me=/#/g,ye=/&/g,ve=/\//g,be=/=/g,we=/\?/g,_e=/\+/g,Ie=/%5B/g,Te=/%5D/g,Ee=/%5E/g,Se=/%60/g,Oe=/%7B/g,ke=/%7C/g,Ae=/%7D/g,Ce=/%20/g;function xe(e){return encodeURI(""+e).replace(ke,"|").replace(Ie,"[").replace(Te,"]")}function Re(e){return xe(e).replace(Oe,"{").replace(Ae,"}").replace(Ee,"^")}function Ne(e){return xe(e).replace(_e,"%2B").replace(Ce,"+").replace(me,"%23").replace(ye,"%26").replace(Se,"`").replace(Oe,"{").replace(Ae,"}").replace(Ee,"^")}function De(e){return Ne(e).replace(be,"%3D")}function Pe(e){return xe(e).replace(me,"%23").replace(we,"%3F")}function je(e){return null==e?"":Pe(e).replace(ve,"%2F")}function Le(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Me(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const e=r[i].replace(_e," "),n=e.indexOf("="),s=Le(n<0?e:e.slice(0,n)),o=n<0?null:Le(e.slice(n+1));if(s in t){let e=t[s];Array.isArray(e)||(e=t[s]=[e]),e.push(o)}else t[s]=o}return t}function Fe(e){let t="";for(let n in e){const r=e[n];if(n=De(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const i=Array.isArray(r)?r.map(e=>e&&Ne(e)):[r&&Ne(r)];i.forEach(e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))})}return t}function Ue(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=Array.isArray(r)?r.map(e=>null==e?null:""+e):null==r?r:""+r)}return t}function Ve(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function qe(e,t,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=e=>{!1===e?a(Y(4,{from:n,to:t})):e instanceof Error?a(e):z(e)?a(Y(2,{from:t,to:e})):(s&&r.enterCallbacks[i]===s&&"function"===typeof e&&s.push(e),o())},u=e.call(r&&r.instances[i],t,n,c);let l=Promise.resolve(u);e.length<3&&(l=l.then(c)),l.catch(e=>a(e))})}function Be(e,t,n,r){const i=[];for(const s of e)for(const e in s.components){let o=s.components[e];if("beforeRouteEnter"===t||s.instances[e])if(Ge(o)){const a=o.__vccOpts||o,c=a[t];c&&i.push(qe(c,n,r,s,e))}else{let a=o();0,i.push(()=>a.then(i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${s.path}"`));const o=d(i)?i.default:i;s.components[e]=o;const a=o.__vccOpts||o,c=a[t];return c&&qe(c,n,r,s,e)()}))}}return i}function Ge(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function Ke(e){const t=Object(r["m"])(c),n=Object(r["m"])(u),i=Object(r["b"])(()=>t.resolve(Object(r["B"])(e.to))),s=Object(r["b"])(()=>{const{matched:e}=i.value,{length:t}=e,r=e[t-1],s=n.matched;if(!r||!s.length)return-1;const o=s.findIndex(I.bind(null,r));if(o>-1)return o;const a=Qe(e[t-2]);return t>1&&Qe(r)===a&&s[s.length-1].path!==a?s.findIndex(I.bind(null,e[t-2])):o}),o=Object(r["b"])(()=>s.value>-1&&He(n.params,i.value.params)),a=Object(r["b"])(()=>s.value>-1&&s.value===n.matched.length-1&&T(n.params,i.value.params));function l(n={}){return We(n)?t[Object(r["B"])(e.replace)?"replace":"push"](Object(r["B"])(e.to)).catch(g):Promise.resolve()}return{route:i,href:Object(r["b"])(()=>i.value.href),isActive:o,isExactActive:a,navigate:l}}const ze=Object(r["j"])({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ke,setup(e,{slots:t}){const n=Object(r["v"])(Ke(e)),{options:i}=Object(r["m"])(c),s=Object(r["b"])(()=>({[Ye(e.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Ye(e.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Object(r["l"])("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),$e=ze;function We(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function He(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!Array.isArray(i)||i.length!==r.length||r.some((e,t)=>e!==i[t]))return!1}return!0}function Qe(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ye=(e,t,n)=>null!=e?e:null!=t?t:n,Je=Object(r["j"])({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const i=Object(r["m"])(l),s=Object(r["b"])(()=>e.route||i.value),c=Object(r["m"])(a,0),u=Object(r["b"])(()=>s.value.matched[c]);Object(r["t"])(a,c+1),Object(r["t"])(o,u),Object(r["t"])(l,s);const h=Object(r["w"])();return Object(r["D"])(()=>[h.value,u.value,e.name],([e,t,n],[r,i,s])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&I(t,i)&&r||(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:"post"}),()=>{const i=s.value,o=u.value,a=o&&o.components[e.name],c=e.name;if(!a)return Xe(n.default,{Component:a,route:i});const l=o.props[e.name],d=l?!0===l?i.params:"function"===typeof l?l(i):l:null,p=e=>{e.component.isUnmounted&&(o.instances[c]=null)},g=Object(r["l"])(a,f({},d,t,{onVnodeUnmounted:p,ref:h}));return Xe(n.default,{Component:g,route:i})||g}}});function Xe(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const Ze=Je;function et(e){const t=ce(e.routes,e),n=e.parseQuery||Me,i=e.stringifyQuery||Fe,s=e.history;const o=Ve(),a=Ve(),d=Ve(),m=Object(r["z"])(W);let y=W;h&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const w=p.bind(null,e=>""+e),I=p.bind(null,je),T=p.bind(null,Le);function E(e,n){let r,i;return $(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function S(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function O(){return t.getRoutes().map(e=>e.record)}function A(e){return!!t.getRecordMatcher(e)}function C(e,r){if(r=f({},r||m.value),"string"===typeof e){const i=v(n,e,r.path),o=t.resolve({path:i.path},r),a=s.createHref(i.fullPath);return f(i,o,{params:T(o.params),hash:Le(i.hash),redirectedFrom:void 0,href:a})}let o;if("path"in e)o=f({},e,{path:v(n,e.path,r.path).path});else{const t=f({},e.params);for(const e in t)null==t[e]&&delete t[e];o=f({},e,{params:I(e.params)}),r.params=I(r.params)}const a=t.resolve(o,r),c=e.hash||"";a.params=w(T(a.params));const u=b(i,f({},e,{hash:Re(c),path:a.path})),l=s.createHref(u);return f({fullPath:u,hash:c,query:i===Fe?Ue(e.query):e.query||{}},a,{redirectedFrom:void 0,href:l})}function x(e){return"string"===typeof e?v(n,e,m.value.path):f({},e)}function R(e,t){if(y!==e)return Y(8,{from:t,to:e})}function N(e){return V(e)}function L(e){return N(f(x(e),{replace:!0}))}function U(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=x(r):{path:r},r.params={}),f({query:e.query,hash:e.hash,params:e.params},r)}}function V(e,t){const n=y=C(e),r=m.value,s=e.state,o=e.force,a=!0===e.replace,c=U(n);if(c)return V(f(x(c),{state:s,force:o,replace:a}),t||n);const u=n;let l;return u.redirectedFrom=t,!o&&_(i,r,n)&&(l=Y(16,{to:u,from:r}),re(r,r,!0,!1)),(l?Promise.resolve(l):B(u,r)).catch(e=>J(e)?J(e,2)?e:ne(e):ee(e,u,r)).then(e=>{if(e){if(J(e,2))return V(f(x(e.to),{state:s,force:o,replace:a}),t||u)}else e=K(u,r,!0,a,s);return G(u,r,e),e})}function q(e,t){const n=R(e,t);return n?Promise.reject(n):Promise.resolve()}function B(e,t){let n;const[r,i,s]=nt(e,t);n=Be(r.reverse(),"beforeRouteLeave",e,t);for(const o of r)o.leaveGuards.forEach(r=>{n.push(qe(r,e,t))});const c=q.bind(null,e,t);return n.push(c),tt(n).then(()=>{n=[];for(const r of o.list())n.push(qe(r,e,t));return n.push(c),tt(n)}).then(()=>{n=Be(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach(r=>{n.push(qe(r,e,t))});return n.push(c),tt(n)}).then(()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const i of r.beforeEnter)n.push(qe(i,e,t));else n.push(qe(r.beforeEnter,e,t));return n.push(c),tt(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=Be(s,"beforeRouteEnter",e,t),n.push(c),tt(n))).then(()=>{n=[];for(const r of a.list())n.push(qe(r,e,t));return n.push(c),tt(n)}).catch(e=>J(e,8)?e:Promise.reject(e))}function G(e,t,n){for(const r of d.list())r(e,t,n)}function K(e,t,n,r,i){const o=R(e,t);if(o)return o;const a=t===W,c=h?history.state:{};n&&(r||a?s.replace(e.fullPath,f({scroll:a&&c&&c.scroll},i)):s.push(e.fullPath,i)),m.value=e,re(e,t,n,a),ne()}let z;function H(){z||(z=s.listen((e,t,n)=>{const r=C(e),i=U(r);if(i)return void V(f(i,{replace:!0}),r).catch(g);y=r;const o=m.value;h&&M(j(o.fullPath,n.delta),D()),B(r,o).catch(e=>J(e,12)?e:J(e,2)?(V(e.to,r).then(e=>{J(e,20)&&!n.delta&&n.type===k.pop&&s.go(-1,!1)}).catch(g),Promise.reject()):(n.delta&&s.go(-n.delta,!1),ee(e,r,o))).then(e=>{e=e||K(r,o,!1),e&&(n.delta?s.go(-n.delta,!1):n.type===k.pop&&J(e,20)&&s.go(-1,!1)),G(r,o,e)}).catch(g)}))}let Q,X=Ve(),Z=Ve();function ee(e,t,n){ne(e);const r=Z.list();return r.length?r.forEach(r=>r(e,t,n)):console.error(e),Promise.reject(e)}function te(){return Q&&m.value!==W?Promise.resolve():new Promise((e,t)=>{X.add([e,t])})}function ne(e){return Q||(Q=!e,H(),X.list().forEach(([t,n])=>e?n(e):t()),X.reset()),e}function re(t,n,i,s){const{scrollBehavior:o}=e;if(!h||!o)return Promise.resolve();const a=!i&&F(j(t.fullPath,0))||(s||!i)&&history.state&&history.state.scroll||null;return Object(r["n"])().then(()=>o(t,n,a)).then(e=>e&&P(e)).catch(e=>ee(e,t,n))}const ie=e=>s.go(e);let se;const oe=new Set,ae={currentRoute:m,addRoute:E,removeRoute:S,hasRoute:A,getRoutes:O,resolve:C,options:e,push:N,replace:L,go:ie,back:()=>ie(-1),forward:()=>ie(1),beforeEach:o.add,beforeResolve:a.add,afterEach:d.add,onError:Z.add,isReady:te,install(e){const t=this;e.component("RouterLink",$e),e.component("RouterView",Ze),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>Object(r["B"])(m)}),h&&!se&&m.value===W&&(se=!0,N(s.location).catch(e=>{0}));const n={};for(const s in W)n[s]=Object(r["b"])(()=>m.value[s]);e.provide(c,t),e.provide(u,Object(r["v"])(n)),e.provide(l,m);const i=e.unmount;oe.add(e),e.unmount=function(){oe.delete(e),oe.size<1&&(y=W,z&&z(),z=null,m.value=W,se=!1,Q=!1),i()}}};return ae}function tt(e){return e.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function nt(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const s=t.matched[o];s&&(e.matched.find(e=>I(e,s))?r.push(s):n.push(s));const a=e.matched[o];a&&(t.matched.find(e=>I(e,a))||i.push(a))}return[n,r,i]}function rt(){return Object(r["m"])(c)}},7149:function(e,t,n){"use strict";var r=n("23e7"),i=n("d066"),s=n("c430"),o=n("d256"),a=n("4738").CONSTRUCTOR,c=n("cdf9"),u=i("Promise"),l=s&&!a;r({target:"Promise",stat:!0,forced:s||a},{resolve:function(e){return c(l&&this===u?o:this,e)}})},7156:function(e,t,n){var r=n("1626"),i=n("861d"),s=n("d2bb");e.exports=function(e,t,n){var o,a;return s&&r(o=t.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&s(e,a),e}},7418:function(e,t){t.f=Object.getOwnPropertySymbols},"746f":function(e,t,n){var r=n("428f"),i=n("1a2d"),s=n("e538"),o=n("9bf2").f;e.exports=function(e){var t=r.Symbol||(r.Symbol={});i(t,e)||o(t,e,{value:s.f(e)})}},7839:function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"785a":function(e,t,n){var r=n("cc12"),i=r("span").classList,s=i&&i.constructor&&i.constructor.prototype;e.exports=s===Object.prototype?void 0:s},"7a23":function(e,t,n){"use strict";n.d(t,"v",(function(){return r["E"]})),n.d(t,"w",(function(){return r["F"]})),n.d(t,"z",(function(){return r["K"]})),n.d(t,"B",(function(){return r["M"]})),n.d(t,"A",(function(){return r["L"]})),n.d(t,"a",(function(){return r["b"]})),n.d(t,"b",(function(){return r["e"]})),n.d(t,"d",(function(){return r["f"]})),n.d(t,"e",(function(){return r["g"]})),n.d(t,"f",(function(){return r["h"]})),n.d(t,"g",(function(){return r["i"]})),n.d(t,"h",(function(){return r["l"]})),n.d(t,"i",(function(){return r["m"]})),n.d(t,"j",(function(){return r["n"]})),n.d(t,"k",(function(){return r["o"]})),n.d(t,"l",(function(){return r["q"]})),n.d(t,"m",(function(){return r["s"]})),n.d(t,"n",(function(){return r["u"]})),n.d(t,"o",(function(){return r["v"]})),n.d(t,"p",(function(){return r["w"]})),n.d(t,"q",(function(){return r["y"]})),n.d(t,"r",(function(){return r["A"]})),n.d(t,"s",(function(){return r["B"]})),n.d(t,"t",(function(){return r["C"]})),n.d(t,"u",(function(){return r["D"]})),n.d(t,"x",(function(){return r["G"]})),n.d(t,"y",(function(){return r["H"]})),n.d(t,"D",(function(){return r["P"]})),n.d(t,"E",(function(){return r["Q"]})),n.d(t,"F",(function(){return r["S"]})),n.d(t,"G",(function(){return r["T"]})),n.d(t,"c",(function(){return ue})),n.d(t,"C",(function(){return ne})),n.d(t,"H",(function(){return se}));var r=n("5c40"),i=n("9ff4");n("a1e9");const s="http://www.w3.org/2000/svg",o="undefined"!==typeof document?document:null,a=o&&o.createElement("template"),c={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?o.createElementNS(s,e):o.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>o.createTextNode(e),createComment:e=>o.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>o.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(t.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{a.innerHTML=r?`<svg>${e}</svg>`:e;const i=a.content;if(r){const e=i.firstChild;while(e.firstChild)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function u(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function l(e,t,n){const r=e.style,s=Object(i["E"])(n);if(n&&!s){for(const e in n)d(r,e,n[e]);if(t&&!Object(i["E"])(t))for(const e in t)null==n[e]&&d(r,e,"")}else{const i=r.display;s?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const h=/\s*!important$/;function d(e,t,n){if(Object(i["o"])(n))n.forEach(n=>d(e,t,n));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=g(e,t);h.test(n)?e.setProperty(Object(i["l"])(r),n.replace(h,""),"important"):e[r]=n}}const f=["Webkit","Moz","ms"],p={};function g(e,t){const n=p[t];if(n)return n;let r=Object(i["e"])(t);if("filter"!==r&&r in e)return p[t]=r;r=Object(i["f"])(r);for(let i=0;i<f.length;i++){const n=f[i]+r;if(n in e)return p[t]=n}return t}const m="http://www.w3.org/1999/xlink";function y(e,t,n,r,s){if(r&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(m,t.slice(6,t.length)):e.setAttributeNS(m,t,n);else{const r=Object(i["D"])(t);null==n||r&&!Object(i["m"])(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}function v(e,t,n,r,s,o,a){if("innerHTML"===t||"textContent"===t)return r&&a(r,s,o),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=n;const r=null==n?"":n;return e.value===r&&"OPTION"!==e.tagName||(e.value=r),void(null==n&&e.removeAttribute(t))}let c=!1;if(""===n||null==n){const r=typeof e[t];"boolean"===r?n=Object(i["m"])(n):null==n&&"string"===r?(n="",c=!0):"number"===r&&(n=0,c=!0)}try{e[t]=n}catch(u){0}c&&e.removeAttribute(t)}const[b,w]=(()=>{let e=Date.now,t=!1;if("undefined"!==typeof window){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let _=0;const I=Promise.resolve(),T=()=>{_=0},E=()=>_||(I.then(T),_=b());function S(e,t,n,r){e.addEventListener(t,n,r)}function O(e,t,n,r){e.removeEventListener(t,n,r)}function k(e,t,n,r,i=null){const s=e._vei||(e._vei={}),o=s[t];if(r&&o)o.value=r;else{const[n,a]=C(t);if(r){const o=s[t]=x(r,i);S(e,n,o,a)}else o&&(O(e,n,o,a),s[t]=void 0)}}const A=/(?:Once|Passive|Capture)$/;function C(e){let t;if(A.test(e)){let n;t={};while(n=e.match(A))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Object(i["l"])(e.slice(2)),t]}function x(e,t){const n=e=>{const i=e.timeStamp||b();(w||i>=n.attached-1)&&Object(r["d"])(R(e,n.value),t,5,[e])};return n.value=e,n.attached=E(),n}function R(e,t){if(Object(i["o"])(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e&&e(t))}return t}const N=/^on[a-z]/,D=(e,t,n,r,s=!1,o,a,c,h)=>{"class"===t?u(e,r,s):"style"===t?l(e,n,r):Object(i["x"])(t)?Object(i["v"])(t)||k(e,t,n,r,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):P(e,t,r,s))?v(e,t,r,o,a,c,h):("true-value"===t?e._trueValue=r:"false-value"===t&&(e._falseValue=r),y(e,t,r,s))};function P(e,t,n,r){return r?"innerHTML"===t||"textContent"===t||!!(t in e&&N.test(t)&&Object(i["q"])(n)):"spellcheck"!==t&&"draggable"!==t&&"translate"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!N.test(t)||!Object(i["E"])(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const j="transition",L="animation",M=(e,{slots:t})=>Object(r["q"])(r["a"],q(e),t);M.displayName="Transition";const F={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},U=(M.props=Object(i["h"])({},r["a"].props,F),(e,t=[])=>{Object(i["o"])(e)?e.forEach(e=>e(...t)):e&&e(...t)}),V=e=>!!e&&(Object(i["o"])(e)?e.some(e=>e.length>1):e.length>1);function q(e){const t={};for(const i in e)i in F||(t[i]=e[i]);if(!1===e.css)return t;const{name:n="v",type:r,duration:s,enterFromClass:o=n+"-enter-from",enterActiveClass:a=n+"-enter-active",enterToClass:c=n+"-enter-to",appearFromClass:u=o,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:d=n+"-leave-from",leaveActiveClass:f=n+"-leave-active",leaveToClass:p=n+"-leave-to"}=e,g=B(s),m=g&&g[0],y=g&&g[1],{onBeforeEnter:v,onEnter:b,onEnterCancelled:w,onLeave:_,onLeaveCancelled:I,onBeforeAppear:T=v,onAppear:E=b,onAppearCancelled:S=w}=t,O=(e,t,n)=>{z(e,t?h:c),z(e,t?l:a),n&&n()},k=(e,t)=>{e._isLeaving=!1,z(e,d),z(e,p),z(e,f),t&&t()},A=e=>(t,n)=>{const i=e?E:b,s=()=>O(t,e,n);U(i,[t,s]),$(()=>{z(t,e?u:o),K(t,e?h:c),V(i)||H(t,r,m,s)})};return Object(i["h"])(t,{onBeforeEnter(e){U(v,[e]),K(e,o),K(e,a)},onBeforeAppear(e){U(T,[e]),K(e,u),K(e,l)},onEnter:A(!1),onAppear:A(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>k(e,t);K(e,d),X(),K(e,f),$(()=>{e._isLeaving&&(z(e,d),K(e,p),V(_)||H(e,r,y,n))}),U(_,[e,n])},onEnterCancelled(e){O(e,!1),U(w,[e])},onAppearCancelled(e){O(e,!0),U(S,[e])},onLeaveCancelled(e){k(e),U(I,[e])}})}function B(e){if(null==e)return null;if(Object(i["w"])(e))return[G(e.enter),G(e.leave)];{const t=G(e);return[t,t]}}function G(e){const t=Object(i["O"])(e);return t}function K(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e._vtc||(e._vtc=new Set)).add(t)}function z(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.remove(t));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function $(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let W=0;function H(e,t,n,r){const i=e._endId=++W,s=()=>{i===e._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=Q(e,t);if(!o)return r();const u=o+"end";let l=0;const h=()=>{e.removeEventListener(u,d),s()},d=t=>{t.target===e&&++l>=c&&h()};setTimeout(()=>{l<c&&h()},a+1),e.addEventListener(u,d)}function Q(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(j+"Delay"),s=r(j+"Duration"),o=Y(i,s),a=r(L+"Delay"),c=r(L+"Duration"),u=Y(a,c);let l=null,h=0,d=0;t===j?o>0&&(l=j,h=o,d=s.length):t===L?u>0&&(l=L,h=u,d=c.length):(h=Math.max(o,u),l=h>0?o>u?j:L:null,d=l?l===j?s.length:c.length:0);const f=l===j&&/\b(transform|all)(,|$)/.test(n[j+"Property"]);return{type:l,timeout:h,propCount:d,hasTransform:f}}function Y(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map((t,n)=>J(t)+J(e[n])))}function J(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function X(){return document.body.offsetHeight}new WeakMap,new WeakMap;const Z=e=>{const t=e.props["onUpdate:modelValue"]||!1;return Object(i["o"])(t)?e=>Object(i["n"])(t,e):t};function ee(e){e.target.composing=!0}function te(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ne={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e._assign=Z(s);const o=r||s.props&&"number"===s.props.type;S(e,t?"change":"input",t=>{if(t.target.composing)return;let r=e.value;n&&(r=r.trim()),o&&(r=Object(i["O"])(r)),e._assign(r)}),n&&S(e,"change",()=>{e.value=e.value.trim()}),t||(S(e,"compositionstart",ee),S(e,"compositionend",te),S(e,"change",te))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:s}},o){if(e._assign=Z(o),e.composing)return;if(document.activeElement===e&&"range"!==e.type){if(n)return;if(r&&e.value.trim()===t)return;if((s||"number"===e.type)&&Object(i["O"])(e.value)===t)return}const a=null==t?"":t;e.value!==a&&(e.value=a)}};const re=["ctrl","shift","alt","meta"],ie={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>re.some(n=>e[n+"Key"]&&!t.includes(n))},se=(e,t)=>(n,...r)=>{for(let e=0;e<t.length;e++){const r=ie[t[e]];if(r&&r(n,t))return}return e(n,...r)};const oe=Object(i["h"])({patchProp:D},c);let ae;function ce(){return ae||(ae=Object(r["k"])(oe))}const ue=(...e)=>{const t=ce().createApp(...e);const{mount:n}=t;return t.mount=e=>{const r=le(e);if(!r)return;const s=t._component;Object(i["q"])(s)||s.render||s.template||(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function le(e){if(Object(i["E"])(e)){const t=document.querySelector(e);return t}return e}},"7b0b":function(e,t,n){var r=n("1d80"),i=Object;e.exports=function(e){return i(r(e))}},"7c73":function(e,t,n){var r,i=n("825a"),s=n("37e8"),o=n("7839"),a=n("d012"),c=n("1be4"),u=n("cc12"),l=n("f772"),h=">",d="<",f="prototype",p="script",g=l("IE_PROTO"),m=function(){},y=function(e){return d+p+h+e+d+"/"+p+h},v=function(e){e.write(y("")),e.close();var t=e.parentWindow.Object;return e=null,t},b=function(){var e,t=u("iframe"),n="java"+p+":";return t.style.display="none",c.appendChild(t),t.src=String(n),e=t.contentWindow.document,e.open(),e.write(y("document.F=Object")),e.close(),e.F},w=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}w="undefined"!=typeof document?document.domain&&r?v(r):b():v(r);var e=o.length;while(e--)delete w[f][o[e]];return w()};a[g]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(m[f]=i(e),n=new m,m[f]=null,n[g]=e):n=w(),void 0===t?n:s.f(n,t)}},"7dd0":function(e,t,n){"use strict";var r=n("23e7"),i=n("c65b"),s=n("c430"),o=n("5e77"),a=n("1626"),c=n("9ed3"),u=n("e163"),l=n("d2bb"),h=n("d44e"),d=n("9112"),f=n("cb2d"),p=n("b622"),g=n("3f8c"),m=n("ae93"),y=o.PROPER,v=o.CONFIGURABLE,b=m.IteratorPrototype,w=m.BUGGY_SAFARI_ITERATORS,_=p("iterator"),I="keys",T="values",E="entries",S=function(){return this};e.exports=function(e,t,n,o,p,m,O){c(n,t,o);var k,A,C,x=function(e){if(e===p&&j)return j;if(!w&&e in D)return D[e];switch(e){case I:return function(){return new n(this,e)};case T:return function(){return new n(this,e)};case E:return function(){return new n(this,e)}}return function(){return new n(this)}},R=t+" Iterator",N=!1,D=e.prototype,P=D[_]||D["@@iterator"]||p&&D[p],j=!w&&P||x(p),L="Array"==t&&D.entries||P;if(L&&(k=u(L.call(new e)),k!==Object.prototype&&k.next&&(s||u(k)===b||(l?l(k,b):a(k[_])||f(k,_,S)),h(k,R,!0,!0),s&&(g[R]=S))),y&&p==T&&P&&P.name!==T&&(!s&&v?d(D,"name",T):(N=!0,j=function(){return i(P,this)})),p)if(A={values:x(T),keys:m?j:x(I),entries:x(E)},O)for(C in A)(w||N||!(C in D))&&f(D,C,A[C]);else r({target:t,proto:!0,forced:w||N},A);return s&&!O||D[_]===j||f(D,_,j,{name:p}),g[t]=j,A}},"7ded":function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var r=n("1fd5"),i=n("22e5"),s=n("589b"),o=n("e691");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(e,t){this._delegate=e,this.firebase=t,Object(s["_addComponent"])(e,new i["a"]("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Object(s["deleteApp"])(this._delegate)))}_getService(e,t=s["_DEFAULT_ENTRY_NAME"]){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=s["_DEFAULT_ENTRY_NAME"]){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Object(s["_addComponent"])(this._delegate,e)}_addOrOverwriteComponent(e){Object(s["_addOrOverwriteComponent"])(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},u=new r["b"]("app-compat","Firebase",c);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(e){const t={},n={__esModule:!0,initializeApp:a,app:o,registerVersion:s["registerVersion"],setLogLevel:s["setLogLevel"],onLog:s["onLog"],apps:null,SDK_VERSION:s["SDK_VERSION"],INTERNAL:{registerComponent:l,removeApp:i,useAsService:h,modularAPIs:s}};function i(e){delete t[e]}function o(e){if(e=e||s["_DEFAULT_ENTRY_NAME"],!Object(r["f"])(t,e))throw u.create("no-app",{appName:e});return t[e]}function a(i,o={}){const a=s["initializeApp"](i,o);if(Object(r["f"])(t,a.name))return t[a.name];const c=new e(a,n);return t[a.name]=c,c}function c(){return Object.keys(t).map(e=>t[e])}function l(t){const i=t.name,a=i.replace("-compat","");if(s["_registerComponent"](t)&&"PUBLIC"===t.type){const s=(e=o())=>{if("function"!==typeof e[a])throw u.create("invalid-app-argument",{appName:i});return e[a]()};void 0!==t.serviceProps&&Object(r["j"])(s,t.serviceProps),n[a]=s,e.prototype[a]=function(...e){const n=this._getService.bind(this,i);return n.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[a]:null}function h(e,t){if("serverAuth"===t)return null;const n=t;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:c}),o["App"]=e,n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(){const e=l(a);function t(t){Object(r["j"])(e,t)}return e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:h,extendNamespace:t,createSubscribe:r["h"],ErrorFactory:r["b"],deepExtend:r["j"]}),e}const d=h(),f=new o["b"]("@firebase/app-compat"),p="@firebase/app-compat",g="0.1.26";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function m(e){Object(s["registerVersion"])(p,g,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(Object(r["n"])()&&void 0!==self.firebase){f.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&f.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const y=d;m()},"7f9a":function(e,t,n){var r=n("da84"),i=n("1626"),s=n("8925"),o=r.WeakMap;e.exports=i(o)&&/native code/.test(s(o))},"825a":function(e,t,n){var r=n("861d"),i=String,s=TypeError;e.exports=function(e){if(r(e))return e;throw s(i(e)+" is not an object")}},"83ab":function(e,t,n){var r=n("d039");e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},8418:function(e,t,n){"use strict";var r=n("a04b"),i=n("9bf2"),s=n("5c6c");e.exports=function(e,t,n){var o=r(t);o in e?i.f(e,o,s(0,n)):e[o]=n}},"861d":function(e,t,n){var r=n("1626");e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},8925:function(e,t,n){var r=n("e330"),i=n("1626"),s=n("c6cd"),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(e){return o(e)}),e.exports=s.inspectSource},"8f6b":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return Ar})),n.d(t,"b",(function(){return xr})),n.d(t,"c",(function(){return Cr})),n.d(t,"d",(function(){return Nr})),n.d(t,"e",(function(){return Rr})),n.d(t,"f",(function(){return Dr})),n.d(t,"g",(function(){return Pr})),n.d(t,"h",(function(){return Or})),n.d(t,"i",(function(){return kr}));var r,i="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof e?e:"undefined"!==typeof self?self:{},s={},o=o||{},a=i||self;function c(){}function u(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function l(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function h(e){return Object.prototype.hasOwnProperty.call(e,d)&&e[d]||(e[d]=++f)}var d="closure_uid_"+(1e9*Math.random()>>>0),f=0;function p(e,t,n){return e.call.apply(e.bind,arguments)}function g(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function m(e,t,n){return m=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?p:g,m.apply(null,arguments)}function y(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function v(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function b(){this.s=this.s,this.o=this.o}var w=0,_={};b.prototype.s=!1,b.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=w)){var e=h(this);delete _[e]}},b.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const I=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},T=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const r=e.length,i="string"===typeof e?e.split(""):e;for(let s=0;s<r;s++)s in i&&t.call(n,i[s],s,e)};function E(e){e:{var t=Bn;const n=e.length,r="string"===typeof e?e.split(""):e;for(let i=0;i<n;i++)if(i in r&&t.call(void 0,r[i],i,e)){t=i;break e}t=-1}return 0>t?null:"string"===typeof e?e.charAt(t):e[t]}function S(e){return Array.prototype.concat.apply([],arguments)}function O(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function k(e){return/^[\s\xa0]*$/.test(e)}var A,C=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function x(e,t){return-1!=e.indexOf(t)}function R(e,t){return e<t?-1:e>t?1:0}e:{var N=a.navigator;if(N){var D=N.userAgent;if(D){A=D;break e}}A=""}function P(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function j(e){const t={};for(const n in e)t[n]=e[n];return t}var L="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function M(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<L.length;t++)n=L[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function F(e){return F[" "](e),e}function U(e){var t=X;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}F[" "]=c;var V,q=x(A,"Opera"),B=x(A,"Trident")||x(A,"MSIE"),G=x(A,"Edge"),K=G||B,z=x(A,"Gecko")&&!(x(A.toLowerCase(),"webkit")&&!x(A,"Edge"))&&!(x(A,"Trident")||x(A,"MSIE"))&&!x(A,"Edge"),$=x(A.toLowerCase(),"webkit")&&!x(A,"Edge");function W(){var e=a.document;return e?e.documentMode:void 0}e:{var H="",Q=function(){var e=A;return z?/rv:([^\);]+)(\)|;)/.exec(e):G?/Edge\/([\d\.]+)/.exec(e):B?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):$?/WebKit\/(\S+)/.exec(e):q?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(Q&&(H=Q?Q[1]:""),B){var Y=W();if(null!=Y&&Y>parseFloat(H)){V=String(Y);break e}}V=H}var J,X={};function Z(){return U((function(){let e=0;const t=C(String(V)).split("."),n=C("9").split("."),r=Math.max(t.length,n.length);for(let o=0;0==e&&o<r;o++){var i=t[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;e=R(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||R(0==i[2].length,0==s[2].length)||R(i[2],s[2]),i=i[3],s=s[3]}while(0==e)}return 0<=e}))}if(a.document&&B){var ee=W();J=ee||(parseInt(V,10)||void 0)}else J=void 0;var te=J,ne=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{a.addEventListener("test",c,t),a.removeEventListener("test",c,t)}catch(n){}return e}();function re(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function ie(e,t){if(re.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(z){e:{try{F(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:se[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ie.Z.h.call(this)}}re.prototype.h=function(){this.defaultPrevented=!0},v(ie,re);var se={2:"touch",3:"pen",4:"mouse"};ie.prototype.h=function(){ie.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var oe="closure_listenable_"+(1e6*Math.random()|0),ae=0;function ce(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ia=i,this.key=++ae,this.ca=this.fa=!1}function ue(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function le(e){this.src=e,this.g={},this.h=0}function he(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=I(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(ue(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function de(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ca&&s.listener==t&&s.capture==!!n&&s.ia==r)return i}return-1}le.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=de(e,t,r,i);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new ce(t,this.src,s,!!r,i),t.fa=n,e.push(t)),t};var fe="closure_lm_"+(1e6*Math.random()|0),pe={};function ge(e,t,n,r,i){if(r&&r.once)return ve(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)ge(e,t[s],n,r,i);return null}return n=Se(n),e&&e[oe]?e.N(t,n,l(r)?!!r.capture:!!r,i):me(e,t,n,!1,r,i)}function me(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=l(i)?!!i.capture:!!i,a=Te(e);if(a||(e[fe]=a=new le(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=ye(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)ne||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(_e(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function ye(){function e(n){return t.call(e.src,e.listener,n)}var t=Ie;return e}function ve(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)ve(e,t[s],n,r,i);return null}return n=Se(n),e&&e[oe]?e.O(t,n,l(r)?!!r.capture:!!r,i):me(e,t,n,!0,r,i)}function be(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)be(e,t[s],n,r,i);else r=l(r)?!!r.capture:!!r,n=Se(n),e&&e[oe]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=de(s,n,r,i),-1<n&&(ue(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=Te(e))&&(t=e.g[t.toString()],e=-1,t&&(e=de(t,n,r,i)),(n=-1<e?t[e]:null)&&we(n))}function we(e){if("number"!==typeof e&&e&&!e.ca){var t=e.src;if(t&&t[oe])he(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(_e(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Te(t))?(he(n,e),0==n.h&&(n.src=null,t[fe]=null)):ue(e)}}}function _e(e){return e in pe?pe[e]:pe[e]="on"+e}function Ie(e,t){if(e.ca)e=!0;else{t=new ie(t,this);var n=e.listener,r=e.ia||e.src;e.fa&&we(e),e=n.call(r,t)}return e}function Te(e){return e=e[fe],e instanceof le?e:null}var Ee="__closure_events_fn_"+(1e9*Math.random()>>>0);function Se(e){return"function"===typeof e?e:(e[Ee]||(e[Ee]=function(t){return e.handleEvent(t)}),e[Ee])}function Oe(){b.call(this),this.i=new le(this),this.P=this,this.I=null}function ke(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"===typeof t)t=new re(t,e);else if(t instanceof re)t.target=t.target||e;else{var i=t;t=new re(r,e),M(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Ae(o,r,!0,t)&&i}if(o=t.g=e,i=Ae(o,r,!0,t)&&i,i=Ae(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Ae(o,r,!1,t)&&i}function Ae(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&he(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}v(Oe,b),Oe.prototype[oe]=!0,Oe.prototype.removeEventListener=function(e,t,n,r){be(this,e,t,n,r)},Oe.prototype.M=function(){if(Oe.Z.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ue(n[r]);delete t.g[e],t.h--}}this.I=null},Oe.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Oe.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Ce=a.JSON.stringify;function xe(){var e=Ue;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Re{constructor(){this.h=this.g=null}add(e,t){const n=De.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var Ne,De=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new Pe,e=>e.reset());class Pe{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function je(e){a.setTimeout(()=>{throw e},0)}function Le(e,t){Ne||Me(),Fe||(Ne(),Fe=!0),Ue.add(e,t)}function Me(){var e=a.Promise.resolve(void 0);Ne=function(){e.then(Ve)}}var Fe=!1,Ue=new Re;function Ve(){for(var e;e=xe();){try{e.h.call(e.g)}catch(n){je(n)}var t=De;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Fe=!1}function qe(e,t){Oe.call(this),this.h=e||1,this.g=t||a,this.j=m(this.kb,this),this.l=Date.now()}function Be(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function Ge(e,t,n){if("function"===typeof e)n&&(e=m(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=m(e.handleEvent,e)}return 2147483647<Number(t)?-1:a.setTimeout(e,t||0)}function Ke(e){e.g=Ge(()=>{e.g=null,e.i&&(e.i=!1,Ke(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}v(qe,Oe),r=qe.prototype,r.da=!1,r.S=null,r.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),ke(this,"tick"),this.da&&(Be(this),this.start()))}},r.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){qe.Z.M.call(this),Be(this),delete this.g};class ze extends b{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Ke(this)}M(){super.M(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $e(e){b.call(this),this.h=e,this.g={}}v($e,b);var We=[];function He(e,t,n,r){Array.isArray(n)||(n&&(We[0]=n.toString()),n=We);for(var i=0;i<n.length;i++){var s=ge(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Qe(e){P(e.g,(function(e,t){this.g.hasOwnProperty(t)&&we(e)}),e),e.g={}}function Ye(){this.g=!0}function Je(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}function Xe(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}function Ze(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+tt(e,n)+(r?" "+r:"")}))}function et(e,t){e.info((function(){return"TIMEOUT: "+t}))}function tt(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Ce(n)}catch(a){return t}}$e.prototype.M=function(){$e.Z.M.call(this),Qe(this)},$e.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Ye.prototype.Aa=function(){this.g=!1},Ye.prototype.info=function(){};var nt={},rt=null;function it(){return rt=rt||new Oe}function st(e){re.call(this,nt.Ma,e)}function ot(e){const t=it();ke(t,new st(t,e))}function at(e,t){re.call(this,nt.STAT_EVENT,e),this.stat=t}function ct(e){const t=it();ke(t,new at(t,e))}function ut(e,t){re.call(this,nt.Na,e),this.size=t}function lt(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){e()}),t)}nt.Ma="serverreachability",v(st,re),nt.STAT_EVENT="statevent",v(at,re),nt.Na="timingevent",v(ut,re);var ht={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},dt={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ft(){}function pt(e){return e.h||(e.h=e.i())}function gt(){}ft.prototype.h=null;var mt,yt={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function vt(){re.call(this,"d")}function bt(){re.call(this,"c")}function wt(){}function _t(e,t,n,r){this.l=e,this.j=t,this.m=n,this.X=r||1,this.V=new $e(this),this.P=Tt,e=K?125:void 0,this.W=new qe(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new It}function It(){this.i=null,this.g="",this.h=!1}v(vt,re),v(bt,re),v(wt,ft),wt.prototype.g=function(){return new XMLHttpRequest},wt.prototype.i=function(){return{}},mt=new wt;var Tt=45e3,Et={},St={};function Ot(e,t,n){e.K=1,e.v=Jt(zt(t)),e.s=n,e.U=!0,kt(e,null)}function kt(e,t){e.F=Date.now(),Rt(e),e.A=zt(e.v);var n=e.A,r=e.X;Array.isArray(r)||(r=[String(r)]),fn(n.h,"t",r),e.C=0,n=e.l.H,e.h=new It,e.g=br(e.l,n?t:null,!e.s),0<e.O&&(e.L=new ze(m(e.Ia,e,e.g),e.O)),He(e.V,e.g,"readystatechange",e.gb),t=e.H?j(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),ot(1),Je(e.j,e.u,e.A,e.m,e.X,e.s)}function At(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function Ct(e,t,n){let r,i=!0;for(;!e.I&&e.C<n.length;){if(r=xt(e,n),r==St){4==t&&(e.o=4,ct(14),i=!1),Ze(e.j,e.m,null,"[Incomplete Response]");break}if(r==Et){e.o=4,ct(15),Ze(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Ze(e.j,e.m,r,null),Lt(e,r)}At(e)&&r!=St&&r!=Et&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,ct(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),hr(t),t.L=!0,ct(11))):(Ze(e.j,e.m,n,"[Invalid Chunked Response]"),jt(e),Pt(e))}function xt(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?St:(n=Number(t.substring(n,r)),isNaN(n)?Et:(r+=1,r+n>t.length?St:(t=t.substr(r,n),e.C=r+n,t)))}function Rt(e){e.Y=Date.now()+e.P,Nt(e,e.P)}function Nt(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=lt(m(e.eb,e),t)}function Dt(e){e.B&&(a.clearTimeout(e.B),e.B=null)}function Pt(e){0==e.l.G||e.I||pr(e.l,e)}function jt(e){Dt(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,Be(e.W),Qe(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Lt(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||_n(n.i,e)))if(n.I=e.N,!e.J&&_n(n.i,e)&&3==n.G){try{var r=n.Ca.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;fr(n),tr(n)}lr(n),ct(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=lt(m(n.ab,n),6e3));if(1>=wn(n.i)&&n.ka){try{n.ka()}catch(u){}n.ka=void 0}}else mr(n,11)}else if((e.J||n.g==e)&&fr(n),!k(t))for(i=n.Ca.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const t=u[3];null!=t&&(n.ma=t,n.h.info("VER="+n.ma));const i=u[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.i;!s.g&&(x(e,"spdy")||x(e,"quic")||x(e,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(In(s,s.h),s.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.sa=e,Yt(r.F,r.D,e))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=e;if(r.oa=vr(r,r.H?r.la:null,r.W),o.J){Tn(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(Dt(a),Rt(a)),r.g=o}else ur(r);0<n.l.length&&ir(n)}else"stop"!=u[0]&&"close"!=u[0]||mr(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?mr(n,7):er(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}ot(4)}catch(u){}}function Mt(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"===typeof e)return e.split("");if(u(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function Ft(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(u(e)||"string"===typeof e)T(e,t,void 0);else{if(e.T&&"function"==typeof e.T)var n=e.T();else if(e.R&&"function"==typeof e.R)n=void 0;else if(u(e)||"string"===typeof e){n=[];for(var r=e.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,e)n[r++]=i;r=Mt(e),i=r.length;for(var s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}}function Ut(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(e)if(e instanceof Ut)for(n=e.T(),r=0;r<n.length;r++)this.set(n[r],e.get(n[r]));else for(r in e)this.set(r,e[r])}function Vt(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var r=e.g[t];qt(e.h,r)&&(e.g[n++]=r),t++}e.g.length=n}if(e.i!=e.g.length){var i={};for(n=t=0;t<e.g.length;)r=e.g[t],qt(i,r)||(e.g[n++]=r,i[r]=1),t++;e.g.length=n}}function qt(e,t){return Object.prototype.hasOwnProperty.call(e,t)}r=_t.prototype,r.setTimeout=function(e){this.P=e},r.gb=function(e){e=e.target;const t=this.L;t&&3==Hn(e)?t.l():this.Ia(e)},r.Ia=function(e){try{if(e==this.g)e:{const h=Hn(this.g);var t=this.g.Da();const d=this.g.ba();if(!(3>h)&&(3!=h||K||this.g&&(this.h.h||this.g.ga()||Qn(this.g)))){this.I||4!=h||7==t||ot(8==t||0>=d?3:2),Dt(this);var n=this.g.ba();this.N=n;t:if(At(this)){var r=Qn(this.g);e="";var i=r.length,s=4==Hn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){jt(this),Pt(this);var o="";break t}this.h.i=new a.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,Xe(this.j,this.u,this.A,this.m,this.X,h,n),this.i){if(this.$&&!this.J){t:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!k(c)){var l=c;break t}}l=null}if(!(n=l)){this.i=!1,this.o=3,ct(12),jt(this),Pt(this);break e}Ze(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Lt(this,n)}this.U?(Ct(this,h,o),K&&this.i&&3==h&&(He(this.V,this.W,"tick",this.fb),this.W.start())):(Ze(this.j,this.m,o,null),Lt(this,o)),4==h&&jt(this),this.i&&!this.I&&(4==h?pr(this.l,this):(this.i=!1,Rt(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ct(12)):(this.o=0,ct(13)),jt(this),Pt(this)}}}catch(h){}},r.fb=function(){if(this.g){var e=Hn(this.g),t=this.g.ga();this.C<t.length&&(Dt(this),Ct(this,e,t),this.i&&4!=e&&Rt(this))}},r.cancel=function(){this.I=!0,jt(this)},r.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(et(this.j,this.A),2!=this.K&&(ot(3),ct(17)),jt(this),this.o=2,Pt(this)):Nt(this,this.Y-e)},r=Ut.prototype,r.R=function(){Vt(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},r.T=function(){return Vt(this),this.g.concat()},r.get=function(e,t){return qt(this.h,e)?this.h[e]:t},r.set=function(e,t){qt(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},r.forEach=function(e,t){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);e.call(t,s,i,this)}};var Bt=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Gt(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Kt(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof Kt){this.g=void 0!==t?t:e.g,$t(this,e.j),this.s=e.s,Wt(this,e.i),Ht(this,e.m),this.l=e.l,t=e.h;var n=new un;n.i=t.i,t.g&&(n.g=new Ut(t.g),n.h=t.h),Qt(this,n),this.o=e.o}else e&&(n=String(e).match(Bt))?(this.g=!!t,$t(this,n[1]||"",!0),this.s=en(n[2]||""),Wt(this,n[3]||"",!0),Ht(this,n[4]),this.l=en(n[5]||"",!0),Qt(this,n[6]||"",!0),this.o=en(n[7]||"")):(this.g=!!t,this.h=new un(null,this.g))}function zt(e){return new Kt(e)}function $t(e,t,n){e.j=n?en(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Wt(e,t,n){e.i=n?en(t,!0):t}function Ht(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Qt(e,t,n){t instanceof un?(e.h=t,gn(e.h,e.g)):(n||(t=tn(t,an)),e.h=new un(t,e.g))}function Yt(e,t,n){e.h.set(t,n)}function Jt(e){return Yt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Xt(e){return e instanceof Kt?zt(e):new Kt(e,void 0)}function Zt(e,t,n,r){var i=new Kt(null,void 0);return e&&$t(i,e),t&&Wt(i,t),n&&Ht(i,n),r&&(i.l=r),i}function en(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function tn(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,nn),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function nn(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}Kt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(tn(t,rn,!0),":");var n=this.i;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(tn(t,rn,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&e.push("/"),e.push(tn(n,"/"==n.charAt(0)?on:sn,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",tn(n,cn)),e.join("")};var rn=/[#\/\?@]/g,sn=/[#\?:]/g,on=/[#\?]/g,an=/[#\?@]/g,cn=/#/g;function un(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function ln(e){e.g||(e.g=new Ut,e.h=0,e.i&&Gt(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function hn(e,t){ln(e),t=pn(e,t),qt(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,qt(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&Vt(e)))}function dn(e,t){return ln(e),t=pn(e,t),qt(e.g.h,t)}function fn(e,t,n){hn(e,t),0<n.length&&(e.i=null,e.g.set(pn(e,t),O(n)),e.h+=n.length)}function pn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function gn(e,t){t&&!e.j&&(ln(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(hn(this,t),fn(this,n,e))}),e)),e.j=t}r=un.prototype,r.add=function(e,t){ln(this),this.i=null,e=pn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},r.forEach=function(e,t){ln(this),this.g.forEach((function(n,r){T(n,(function(n){e.call(t,n,r,this)}),this)}),this)},r.T=function(){ln(this);for(var e=this.g.R(),t=this.g.T(),n=[],r=0;r<t.length;r++)for(var i=e[r],s=0;s<i.length;s++)n.push(t[r]);return n},r.R=function(e){ln(this);var t=[];if("string"===typeof e)dn(this,e)&&(t=S(t,this.g.get(pn(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=S(t,e[n])}return t},r.set=function(e,t){return ln(this),this.i=null,e=pn(this,e),dn(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var r=t[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),e.push(o)}}return this.i=e.join("&")};var mn=class{constructor(e,t){this.h=e,this.g=t}};function yn(e){this.l=e||vn,a.PerformanceNavigationTiming?(e=a.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(a.g&&a.g.Ea&&a.g.Ea()&&a.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var vn=10;function bn(e){return!!e.h||!!e.g&&e.g.size>=e.j}function wn(e){return e.h?1:e.g?e.g.size:0}function _n(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function In(e,t){e.g?e.g.add(t):e.h=t}function Tn(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function En(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return O(e.i)}function Sn(){}function On(){this.g=new Sn}function kn(e,t,n){const r=n||"";try{Ft(e,(function(e,n){let i=e;l(e)&&(i=Ce(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function An(e,t){const n=new Ye;if(a.Image){const r=new Image;r.onload=y(Cn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=y(Cn,n,r,"TestLoadImage: error",!1,t),r.onabort=y(Cn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=y(Cn,n,r,"TestLoadImage: timeout",!1,t),a.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function Cn(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(s){}}function xn(e){this.l=e.$b||null,this.j=e.ib||!1}function Rn(e,t){Oe.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Nn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}yn.prototype.cancel=function(){if(this.i=En(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},Sn.prototype.stringify=function(e){return a.JSON.stringify(e,void 0)},Sn.prototype.parse=function(e){return a.JSON.parse(e,void 0)},v(xn,ft),xn.prototype.g=function(){return new Rn(this.l,this.j)},xn.prototype.i=function(e){return function(){return e}}({}),v(Rn,Oe);var Nn=0;function Dn(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function Pn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,jn(e)}function jn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}r=Rn.prototype,r.open=function(e,t){if(this.readyState!=Nn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,jn(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||a).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Pn(this)),this.readyState=Nn},r.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,jn(this)),this.g&&(this.readyState=3,jn(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Dn(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},r.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Pn(this):jn(this),3==this.readyState&&Dn(this)}},r.Ua=function(e){this.g&&(this.response=this.responseText=e,Pn(this))},r.Ta=function(e){this.g&&(this.response=e,Pn(this))},r.ha=function(){this.g&&Pn(this)},r.setRequestHeader=function(e,t){this.v.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Rn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var Ln=a.JSON.parse;function Mn(e){Oe.call(this),this.headers=new Ut,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Fn,this.K=this.L=!1}v(Mn,Oe);var Fn="",Un=/^https?$/i,Vn=["POST","PUT"];function qn(e){return B&&Z()&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function Bn(e){return"content-type"==e.toLowerCase()}function Gn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Kn(e),$n(e)}function Kn(e){e.D||(e.D=!0,ke(e,"complete"),ke(e,"error"))}function zn(e){if(e.h&&"undefined"!=typeof o&&(!e.C[1]||4!=Hn(e)||2!=e.ba()))if(e.v&&4==Hn(e))Ge(e.Fa,0,e);else if(ke(e,"readystatechange"),4==Hn(e)){e.h=!1;try{const o=e.ba();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===o){var i=String(e.H).match(Bt)[1]||null;if(!i&&a.self&&a.self.location){var s=a.self.location.protocol;i=s.substr(0,s.length-1)}r=!Un.test(i?i.toLowerCase():"")}n=r}if(n)ke(e,"complete"),ke(e,"success");else{e.m=6;try{var c=2<Hn(e)?e.g.statusText:""}catch(u){c=""}e.j=c+" ["+e.ba()+"]",Kn(e)}}finally{$n(e)}}}function $n(e,t){if(e.g){Wn(e);const r=e.g,i=e.C[0]?c:null;e.g=null,e.C=null,t||ke(e,"ready");try{r.onreadystatechange=i}catch(n){}}}function Wn(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(a.clearTimeout(e.A),e.A=null)}function Hn(e){return e.g?e.g.readyState:0}function Qn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Fn:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Yn(e){let t="";return P(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Jn(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Yn(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):Yt(e,t,n))}function Xn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Zn(e){this.za=0,this.l=[],this.h=new Ye,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Xn("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Xn("baseRetryDelayMs",5e3,e),this.$a=Xn("retryDelaySeedMs",1e4,e),this.Ya=Xn("forwardChannelMaxRetries",2,e),this.ra=Xn("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new yn(e&&e.concurrentRequestLimit),this.Ca=new On,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function er(e){if(nr(e),3==e.G){var t=e.V++,n=zt(e.F);Yt(n,"SID",e.J),Yt(n,"RID",t),Yt(n,"TYPE","terminate"),ar(e,n),t=new _t(e,e.h,t,void 0),t.K=2,t.v=Jt(zt(n)),n=!1,a.navigator&&a.navigator.sendBeacon&&(n=a.navigator.sendBeacon(t.v.toString(),"")),!n&&a.Image&&((new Image).src=t.v,n=!0),n||(t.g=br(t.l,null),t.g.ea(t.v)),t.F=Date.now(),Rt(t)}yr(e)}function tr(e){e.g&&(hr(e),e.g.cancel(),e.g=null)}function nr(e){tr(e),e.u&&(a.clearTimeout(e.u),e.u=null),fr(e),e.i.cancel(),e.m&&("number"===typeof e.m&&a.clearTimeout(e.m),e.m=null)}function rr(e,t){e.l.push(new mn(e.Za++,t)),3==e.G&&ir(e)}function ir(e){bn(e.i)||e.m||(e.m=!0,Le(e.Ha,e),e.C=0)}function sr(e,t){return!(wn(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.l=t.D.concat(e.l),!0):!(1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya))&&(e.m=lt(m(e.Ha,e,t),gr(e,e.C)),e.C++,!0))}function or(e,t){var n;n=t?t.m:e.V++;const r=zt(e.F);Yt(r,"SID",e.J),Yt(r,"RID",n),Yt(r,"AID",e.U),ar(e,r),e.o&&e.s&&Jn(r,e.o,e.s),n=new _t(e,e.h,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=cr(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),In(e.i,n),Ot(n,r,t)}function ar(e,t){e.j&&Ft({},(function(e,n){Yt(t,n,e)}))}function cr(e,t,n){n=Math.min(e.l.length,n);var r=e.j?m(e.j.Oa,e.j,e):null;e:{var i=e.l;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let o=!0;for(let a=0;a<n;a++){let n=i[a].h;const c=i[a].g;if(n-=t,0>n)t=Math.max(0,i[a].h-100),o=!1;else try{kn(c,e,"req"+n+"_")}catch(s){r&&r(c)}}if(o){r=e.join("&");break e}}}return e=e.l.splice(0,n),t.D=e,r}function ur(e){e.g||e.u||(e.Y=1,Le(e.Ga,e),e.A=0)}function lr(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=lt(m(e.Ga,e),gr(e,e.A)),e.A++,!0)}function hr(e){null!=e.B&&(a.clearTimeout(e.B),e.B=null)}function dr(e){e.g=new _t(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=zt(e.oa);Yt(t,"RID","rpc"),Yt(t,"SID",e.J),Yt(t,"CI",e.N?"0":"1"),Yt(t,"AID",e.U),ar(e,t),Yt(t,"TYPE","xmlhttp"),e.o&&e.s&&Jn(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=Jt(zt(t)),n.s=null,n.U=!0,kt(n,e)}function fr(e){null!=e.v&&(a.clearTimeout(e.v),e.v=null)}function pr(e,t){var n=null;if(e.g==t){fr(e),hr(e),e.g=null;var r=2}else{if(!_n(e.i,t))return;n=t.D,Tn(e.i,t),r=1}if(e.I=t.N,0!=e.G)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;r=it(),ke(r,new ut(r,n,t,i)),ir(e)}else ur(e);else if(i=t.o,3==i||0==i&&0<e.I||!(1==r&&sr(e,t)||2==r&&lr(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:mr(e,5);break;case 4:mr(e,10);break;case 3:mr(e,6);break;default:mr(e,2)}}function gr(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function mr(e,t){if(e.h.info("Error code "+t),2==t){var n=null;e.j&&(n=null);var r=m(e.jb,e);n||(n=new Kt("//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||$t(n,"https"),Jt(n)),An(n.toString(),r)}else ct(2);e.G=0,e.j&&e.j.va(t),yr(e),nr(e)}function yr(e){e.G=0,e.I=-1,e.j&&(0==En(e.i).length&&0==e.l.length||(e.i.i.length=0,O(e.l),e.l.length=0),e.j.ua())}function vr(e,t,n){let r=Xt(n);if(""!=r.i)t&&Wt(r,t+"."+r.i),Ht(r,r.m);else{const e=a.location;r=Zt(e.protocol,t?t+"."+e.hostname:e.hostname,+e.port,n)}return e.aa&&P(e.aa,(function(e,t){Yt(r,t,e)})),t=e.D,n=e.sa,t&&n&&Yt(r,t,n),Yt(r,"VER",e.ma),ar(e,r),r}function br(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new Mn(new xn({ib:!0})):new Mn(e.qa),t.L=e.H,t}function wr(){}function _r(){if(B&&!(10<=Number(te)))throw Error("Environmental error: no available transport.")}function Ir(e,t){Oe.call(this),this.g=new Zn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!k(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!k(t)&&(this.g.D=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Sr(this)}function Tr(e){vt.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Er(){bt.call(this),this.status=1}function Sr(e){this.g=e}r=Mn.prototype,r.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():mt.g(),this.C=this.u?pt(this.u):pt(mt),this.g.onreadystatechange=m(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(s){return void Gn(this,s)}e=n||"";const i=new Ut(this.headers);r&&Ft(r,(function(e,t){i.set(t,e)})),r=E(i.T()),n=a.FormData&&e instanceof a.FormData,!(0<=I(Vn,t))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(e,t){this.g.setRequestHeader(t,e)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Wn(this),0<this.B&&((this.K=qn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=m(this.pa,this)):this.A=Ge(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Gn(this,s)}},r.pa=function(){"undefined"!=typeof o&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ke(this,"timeout"),this.abort(8))},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,ke(this,"complete"),ke(this,"abort"),$n(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),$n(this,!0)),Mn.Z.M.call(this)},r.Fa=function(){this.s||(this.F||this.v||this.l?zn(this):this.cb())},r.cb=function(){zn(this)},r.ba=function(){try{return 2<Hn(this)?this.g.status:-1}catch(e){return-1}},r.ga=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Ln(t)}},r.Da=function(){return this.m},r.La=function(){return"string"===typeof this.j?this.j:String(this.j)},r=Zn.prototype,r.ma=8,r.G=1,r.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(t){}},r.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const i=new _t(this,this.h,e,void 0);let s=this.s;if(this.P&&(s?(s=j(s),M(s,this.P)):s=this.P),null===this.o&&(i.H=s),this.ja)e:{for(var t=0,n=0;n<this.l.length;n++){var r=this.l[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.l.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=cr(this,i,t),n=zt(this.F),Yt(n,"RID",e),Yt(n,"CVER",22),this.D&&Yt(n,"X-HTTP-Session-Id",this.D),ar(this,n),this.o&&s&&Jn(n,this.o,s),In(this.i,i),this.Ra&&Yt(n,"TYPE","init"),this.ja?(Yt(n,"$req",t),Yt(n,"SID","null"),i.$=!0,Ot(i,n,null)):Ot(i,n,t),this.G=2}}else 3==this.G&&(e?or(this,e):0==this.l.length||bn(this.i)||or(this))},r.Ga=function(){if(this.u=null,dr(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=lt(m(this.bb,this),e)}},r.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ct(10),tr(this),dr(this))},r.ab=function(){null!=this.v&&(this.v=null,tr(this),lr(this),ct(19))},r.jb=function(e){e?(this.h.info("Successfully pinged google.com"),ct(2)):(this.h.info("Failed to ping google.com"),ct(1))},r=wr.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Oa=function(){},_r.prototype.g=function(e,t){return new Ir(e,t)},v(Ir,Oe),Ir.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),Le(m(e.hb,e,t))),ct(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=vr(e,null,e.W),ir(e)},Ir.prototype.close=function(){er(this.g)},Ir.prototype.u=function(e){if("string"===typeof e){var t={};t.__data__=e,rr(this.g,t)}else this.v?(t={},t.__data__=Ce(e),rr(this.g,t)):rr(this.g,e)},Ir.prototype.M=function(){this.g.j=null,delete this.j,er(this.g),delete this.g,Ir.Z.M.call(this)},v(Tr,vt),v(Er,bt),v(Sr,wr),Sr.prototype.xa=function(){ke(this.g,"a")},Sr.prototype.wa=function(e){ke(this.g,new Tr(e))},Sr.prototype.va=function(e){ke(this.g,new Er(e))},Sr.prototype.ua=function(){ke(this.g,"b")},_r.prototype.createWebChannel=_r.prototype.g,Ir.prototype.send=Ir.prototype.u,Ir.prototype.open=Ir.prototype.m,Ir.prototype.close=Ir.prototype.close,ht.NO_ERROR=0,ht.TIMEOUT=8,ht.HTTP_ERROR=6,dt.COMPLETE="complete",gt.EventType=yt,yt.OPEN="a",yt.CLOSE="b",yt.ERROR="c",yt.MESSAGE="d",Oe.prototype.listen=Oe.prototype.N,Mn.prototype.listenOnce=Mn.prototype.O,Mn.prototype.getLastError=Mn.prototype.La,Mn.prototype.getLastErrorCode=Mn.prototype.Da,Mn.prototype.getStatus=Mn.prototype.ba,Mn.prototype.getResponseJson=Mn.prototype.Qa,Mn.prototype.getResponseText=Mn.prototype.ga,Mn.prototype.send=Mn.prototype.ea;var Or=s.createWebChannelTransport=function(){return new _r},kr=s.getStatEventTarget=function(){return it()},Ar=s.ErrorCode=ht,Cr=s.EventType=dt,xr=s.Event=nt,Rr=s.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Nr=s.FetchXmlHttpFactory=xn,Dr=s.WebChannel=gt,Pr=s.XhrIo=Mn}).call(this,n("c8ba"))},"90e3":function(e,t,n){var r=n("e330"),i=0,s=Math.random(),o=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++i+s,36)}},9112:function(e,t,n){var r=n("83ab"),i=n("9bf2"),s=n("5c6c");e.exports=r?function(e,t,n){return i.f(e,t,s(1,n))}:function(e,t,n){return e[t]=n,e}},9263:function(e,t,n){"use strict";var r=n("c65b"),i=n("e330"),s=n("577e"),o=n("ad6d"),a=n("9f7f"),c=n("5692"),u=n("7c73"),l=n("69f3").get,h=n("fce3"),d=n("107c"),f=c("native-string-replace",String.prototype.replace),p=RegExp.prototype.exec,g=p,m=i("".charAt),y=i("".indexOf),v=i("".replace),b=i("".slice),w=function(){var e=/a/,t=/b*/g;return r(p,e,"a"),r(p,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),_=a.BROKEN_CARET,I=void 0!==/()??/.exec("")[1],T=w||I||_||h||d;T&&(g=function(e){var t,n,i,a,c,h,d,T=this,E=l(T),S=s(e),O=E.raw;if(O)return O.lastIndex=T.lastIndex,t=r(g,O,S),T.lastIndex=O.lastIndex,t;var k=E.groups,A=_&&T.sticky,C=r(o,T),x=T.source,R=0,N=S;if(A&&(C=v(C,"y",""),-1===y(C,"g")&&(C+="g"),N=b(S,T.lastIndex),T.lastIndex>0&&(!T.multiline||T.multiline&&"\n"!==m(S,T.lastIndex-1))&&(x="(?: "+x+")",N=" "+N,R++),n=new RegExp("^(?:"+x+")",C)),I&&(n=new RegExp("^"+x+"$(?!\\s)",C)),w&&(i=T.lastIndex),a=r(p,A?n:T,N),A?a?(a.input=b(a.input,R),a[0]=b(a[0],R),a.index=T.lastIndex,T.lastIndex+=a[0].length):T.lastIndex=0:w&&a&&(T.lastIndex=T.global?a.index+a[0].length:i),I&&a&&a.length>1&&r(f,a[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(a[c]=void 0)})),a&&k)for(a.groups=h=u(null),c=0;c<k.length;c++)d=k[c],h[d[0]]=a[d[1]];return a}),e.exports=g},"944a":function(e,t,n){var r=n("d066"),i=n("746f"),s=n("d44e");i("toStringTag"),s(r("Symbol"),"Symbol")},"94ca":function(e,t,n){var r=n("d039"),i=n("1626"),s=/#|\.prototype\./,o=function(e,t){var n=c[a(e)];return n==l||n!=u&&(i(t)?r(t):!!t)},a=o.normalize=function(e){return String(e).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";e.exports=o},"99af":function(e,t,n){"use strict";var r=n("23e7"),i=n("d039"),s=n("e8b5"),o=n("861d"),a=n("7b0b"),c=n("07fa"),u=n("3511"),l=n("8418"),h=n("65f0"),d=n("1dde"),f=n("b622"),p=n("2d00"),g=f("isConcatSpreadable"),m=p>=51||!i((function(){var e=[];return e[g]=!1,e.concat()[0]!==e})),y=d("concat"),v=function(e){if(!o(e))return!1;var t=e[g];return void 0!==t?!!t:s(e)},b=!m||!y;r({target:"Array",proto:!0,arity:1,forced:b},{concat:function(e){var t,n,r,i,s,o=a(this),d=h(o,0),f=0;for(t=-1,r=arguments.length;t<r;t++)if(s=-1===t?o:arguments[t],v(s))for(i=c(s),u(f+i),n=0;n<i;n++,f++)n in s&&l(d,f,s[n]);else u(f+1),l(d,f++,s);return d.length=f,d}})},"9a1f":function(e,t,n){var r=n("c65b"),i=n("59ed"),s=n("825a"),o=n("0d51"),a=n("35a1"),c=TypeError;e.exports=function(e,t){var n=arguments.length<2?a(e):t;if(i(n))return s(r(n,e));throw c(o(e)+" is not iterable")}},"9bdd":function(e,t,n){var r=n("825a"),i=n("2a62");e.exports=function(e,t,n,s){try{return s?t(r(n)[0],n[1]):t(n)}catch(o){i(e,"throw",o)}}},"9bf2":function(e,t,n){var r=n("83ab"),i=n("0cfb"),s=n("aed9"),o=n("825a"),a=n("a04b"),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",f="writable";t.f=r?s?function(e,t,n){if(o(e),t=a(t),o(n),"function"===typeof e&&"prototype"===t&&"value"in n&&f in n&&!n[f]){var r=l(e,t);r&&r[f]&&(e[t]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:h in n?n[h]:r[h],writable:!1})}return u(e,t,n)}:u:function(e,t,n){if(o(e),t=a(t),o(n),i)try{return u(e,t,n)}catch(r){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},"9ed3":function(e,t,n){"use strict";var r=n("ae93").IteratorPrototype,i=n("7c73"),s=n("5c6c"),o=n("d44e"),a=n("3f8c"),c=function(){return this};e.exports=function(e,t,n,u){var l=t+" Iterator";return e.prototype=i(r,{next:s(+!u,n)}),o(e,l,!1,!0),a[l]=c,e}},"9f7f":function(e,t,n){var r=n("d039"),i=n("da84"),s=i.RegExp,o=r((function(){var e=s("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),a=o||r((function(){return!s("a","y").sticky})),c=o||r((function(){var e=s("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:c,MISSED_STICKY:a,UNSUPPORTED_Y:o}},"9ff4":function(e,t,n){"use strict";(function(e){function r(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}n.d(t,"a",(function(){return E})),n.d(t,"b",(function(){return T})),n.d(t,"c",(function(){return O})),n.d(t,"d",(function(){return S})),n.d(t,"e",(function(){return X})),n.d(t,"f",(function(){return te})),n.d(t,"g",(function(){return se})),n.d(t,"h",(function(){return x})),n.d(t,"i",(function(){return ce})),n.d(t,"j",(function(){return re})),n.d(t,"k",(function(){return D})),n.d(t,"l",(function(){return ee})),n.d(t,"m",(function(){return c})),n.d(t,"n",(function(){return ie})),n.d(t,"o",(function(){return P})),n.d(t,"p",(function(){return Q})),n.d(t,"q",(function(){return F})),n.d(t,"r",(function(){return s})),n.d(t,"s",(function(){return m})),n.d(t,"t",(function(){return W})),n.d(t,"u",(function(){return j})),n.d(t,"v",(function(){return C})),n.d(t,"w",(function(){return q})),n.d(t,"x",(function(){return A})),n.d(t,"y",(function(){return $})),n.d(t,"z",(function(){return B})),n.d(t,"A",(function(){return H})),n.d(t,"B",(function(){return y})),n.d(t,"C",(function(){return L})),n.d(t,"D",(function(){return a})),n.d(t,"E",(function(){return U})),n.d(t,"F",(function(){return V})),n.d(t,"G",(function(){return b})),n.d(t,"H",(function(){return w})),n.d(t,"I",(function(){return r})),n.d(t,"J",(function(){return f})),n.d(t,"K",(function(){return u})),n.d(t,"L",(function(){return R})),n.d(t,"M",(function(){return _})),n.d(t,"N",(function(){return ne})),n.d(t,"O",(function(){return oe})),n.d(t,"P",(function(){return z}));const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",s=r(i);const o="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=r(o);function c(e){return!!e||""===e}function u(e){if(P(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=U(r)?d(r):u(r);if(i)for(const e in i)t[e]=i[e]}return t}return U(e)||q(e)?e:void 0}const l=/;(?![^(]*\))/g,h=/:(.+)/;function d(e){const t={};return e.split(l).forEach(e=>{if(e){const n=e.split(h);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function f(e){let t="";if(U(e))t=e;else if(P(e))for(let n=0;n<e.length;n++){const r=f(e[n]);r&&(t+=r+" ")}else if(q(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const p="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",g="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",m=r(p),y=r(g);function v(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=b(e[r],t[r]);return n}function b(e,t){if(e===t)return!0;let n=M(e),r=M(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=V(e),r=V(t),n||r)return e===t;if(n=P(e),r=P(t),n||r)return!(!n||!r)&&v(e,t);if(n=q(e),r=q(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,s=Object.keys(t).length;if(i!==s)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!b(e[n],t[n]))return!1}}return String(e)===String(t)}function w(e,t){return e.findIndex(e=>b(e,t))}const _=e=>U(e)?e:null==e?"":P(e)||q(e)&&(e.toString===G||!F(e.toString))?JSON.stringify(e,I,2):String(e),I=(e,t)=>t&&t.__v_isRef?I(e,t.value):j(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n])=>(e[t+" =>"]=n,e),{})}:L(t)?{[`Set(${t.size})`]:[...t.values()]}:!q(t)||P(t)||$(t)?t:String(t),T={},E=[],S=()=>{},O=()=>!1,k=/^on[^a-z]/,A=e=>k.test(e),C=e=>e.startsWith("onUpdate:"),x=Object.assign,R=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},N=Object.prototype.hasOwnProperty,D=(e,t)=>N.call(e,t),P=Array.isArray,j=e=>"[object Map]"===K(e),L=e=>"[object Set]"===K(e),M=e=>"[object Date]"===K(e),F=e=>"function"===typeof e,U=e=>"string"===typeof e,V=e=>"symbol"===typeof e,q=e=>null!==e&&"object"===typeof e,B=e=>q(e)&&F(e.then)&&F(e.catch),G=Object.prototype.toString,K=e=>G.call(e),z=e=>K(e).slice(8,-1),$=e=>"[object Object]"===K(e),W=e=>U(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,H=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Q=r("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Y=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},J=/-(\w)/g,X=Y(e=>e.replace(J,(e,t)=>t?t.toUpperCase():"")),Z=/\B([A-Z])/g,ee=Y(e=>e.replace(Z,"-$1").toLowerCase()),te=Y(e=>e.charAt(0).toUpperCase()+e.slice(1)),ne=Y(e=>e?"on"+te(e):""),re=(e,t)=>!Object.is(e,t),ie=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},se=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},oe=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ae;const ce=()=>ae||(ae="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof e?e:{})}).call(this,n("c8ba"))},a04b:function(e,t,n){var r=n("c04e"),i=n("d9b5");e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},a1e9:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b})),n.d(t,"c",(function(){return Ge})),n.d(t,"d",(function(){return ke})),n.d(t,"e",(function(){return Ee})),n.d(t,"f",(function(){return Se})),n.d(t,"g",(function(){return Pe})),n.d(t,"h",(function(){return Oe})),n.d(t,"i",(function(){return Ce})),n.d(t,"j",(function(){return T})),n.d(t,"k",(function(){return qe})),n.d(t,"l",(function(){return we})),n.d(t,"m",(function(){return je})),n.d(t,"n",(function(){return E})),n.d(t,"o",(function(){return _e})),n.d(t,"p",(function(){return Le})),n.d(t,"q",(function(){return Ae})),n.d(t,"r",(function(){return S})),n.d(t,"s",(function(){return k})),n.d(t,"t",(function(){return Ue}));var r=n("9ff4");let i;class s{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&i&&(this.parent=i,this.index=(i.scopes||(i.scopes=[])).push(this)-1)}run(e){if(this.active){const t=i;try{return i=this,e()}finally{i=t}}else 0}on(){i=this}off(){i=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.active=!1}}}function o(e,t=i){t&&t.active&&t.effects.push(e)}const a=e=>{const t=new Set(e);return t.w=0,t.n=0,t},c=e=>(e.w&p)>0,u=e=>(e.n&p)>0,l=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=p},h=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];c(i)&&!u(i)?i.delete(e):t[n++]=i,i.w&=~p,i.n&=~p}t.length=n}},d=new WeakMap;let f=0,p=1;const g=30;let m;const y=Symbol(""),v=Symbol("");class b{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,o(this,n)}run(){if(!this.active)return this.fn();let e=m,t=_;while(e){if(e===this)return;e=e.parent}try{return this.parent=m,m=this,_=!0,p=1<<++f,f<=g?l(this):w(this),this.fn()}finally{f<=g&&h(this),p=1<<--f,m=this.parent,_=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){m===this?this.deferStop=!0:this.active&&(w(this),this.onStop&&this.onStop(),this.active=!1)}}function w(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let _=!0;const I=[];function T(){I.push(_),_=!1}function E(){const e=I.pop();_=void 0===e||e}function S(e,t,n){if(_&&m){let t=d.get(e);t||d.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=a());const i=void 0;O(r,i)}}function O(e,t){let n=!1;f<=g?u(e)||(e.n|=p,n=!c(e)):n=!e.has(m),n&&(e.add(m),m.deps.push(e))}function k(e,t,n,i,s,o){const c=d.get(e);if(!c)return;let u=[];if("clear"===t)u=[...c.values()];else if("length"===n&&Object(r["o"])(e))c.forEach((e,t)=>{("length"===t||t>=i)&&u.push(e)});else switch(void 0!==n&&u.push(c.get(n)),t){case"add":Object(r["o"])(e)?Object(r["t"])(n)&&u.push(c.get("length")):(u.push(c.get(y)),Object(r["u"])(e)&&u.push(c.get(v)));break;case"delete":Object(r["o"])(e)||(u.push(c.get(y)),Object(r["u"])(e)&&u.push(c.get(v)));break;case"set":Object(r["u"])(e)&&u.push(c.get(y));break}if(1===u.length)u[0]&&A(u[0]);else{const e=[];for(const t of u)t&&e.push(...t);A(a(e))}}function A(e,t){const n=Object(r["o"])(e)?e:[...e];for(const r of n)r.computed&&C(r,t);for(const r of n)r.computed||C(r,t)}function C(e,t){(e!==m||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const x=Object(r["I"])("__proto__,__v_isRef,__isVue"),R=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>"arguments"!==e&&"caller"!==e).map(e=>Symbol[e]).filter(r["F"])),N=M(),D=M(!1,!0),P=M(!0),j=L();function L(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...e){const n=Ae(this);for(let t=0,i=this.length;t<i;t++)S(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(Ae)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...e){T();const n=Ae(this)[t].apply(this,e);return E(),n}}),e}function M(e=!1,t=!1){return function(n,i,s){if("__v_isReactive"===i)return!e;if("__v_isReadonly"===i)return e;if("__v_isShallow"===i)return t;if("__v_raw"===i&&s===(e?t?ye:me:t?ge:pe).get(n))return n;const o=Object(r["o"])(n);if(!e&&o&&Object(r["k"])(j,i))return Reflect.get(j,i,s);const a=Reflect.get(n,i,s);return(Object(r["F"])(i)?R.has(i):x(i))?a:(e||S(n,"get",i),t?a:Pe(a)?o&&Object(r["t"])(i)?a:a.value:Object(r["w"])(a)?e?Ie(a):we(a):a)}}const F=V(),U=V(!0);function V(e=!1){return function(t,n,i,s){let o=t[n];if(Se(o)&&Pe(o)&&!Pe(i))return!1;if(!e&&!Se(i)&&(Oe(i)||(i=Ae(i),o=Ae(o)),!Object(r["o"])(t)&&Pe(o)&&!Pe(i)))return o.value=i,!0;const a=Object(r["o"])(t)&&Object(r["t"])(n)?Number(n)<t.length:Object(r["k"])(t,n),c=Reflect.set(t,n,i,s);return t===Ae(s)&&(a?Object(r["j"])(i,o)&&k(t,"set",n,i,o):k(t,"add",n,i)),c}}function q(e,t){const n=Object(r["k"])(e,t),i=e[t],s=Reflect.deleteProperty(e,t);return s&&n&&k(e,"delete",t,void 0,i),s}function B(e,t){const n=Reflect.has(e,t);return Object(r["F"])(t)&&R.has(t)||S(e,"has",t),n}function G(e){return S(e,"iterate",Object(r["o"])(e)?"length":y),Reflect.ownKeys(e)}const K={get:N,set:F,deleteProperty:q,has:B,ownKeys:G},z={get:P,set(e,t){return!0},deleteProperty(e,t){return!0}},$=Object(r["h"])({},K,{get:D,set:U}),W=e=>e,H=e=>Reflect.getPrototypeOf(e);function Q(e,t,n=!1,r=!1){e=e["__v_raw"];const i=Ae(e),s=Ae(t);n||(t!==s&&S(i,"get",t),S(i,"get",s));const{has:o}=H(i),a=r?W:n?Re:xe;return o.call(i,t)?a(e.get(t)):o.call(i,s)?a(e.get(s)):void(e!==i&&e.get(t))}function Y(e,t=!1){const n=this["__v_raw"],r=Ae(n),i=Ae(e);return t||(e!==i&&S(r,"has",e),S(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function J(e,t=!1){return e=e["__v_raw"],!t&&S(Ae(e),"iterate",y),Reflect.get(e,"size",e)}function X(e){e=Ae(e);const t=Ae(this),n=H(t),r=n.has.call(t,e);return r||(t.add(e),k(t,"add",e,e)),this}function Z(e,t){t=Ae(t);const n=Ae(this),{has:i,get:s}=H(n);let o=i.call(n,e);o||(e=Ae(e),o=i.call(n,e));const a=s.call(n,e);return n.set(e,t),o?Object(r["j"])(t,a)&&k(n,"set",e,t,a):k(n,"add",e,t),this}function ee(e){const t=Ae(this),{has:n,get:r}=H(t);let i=n.call(t,e);i||(e=Ae(e),i=n.call(t,e));const s=r?r.call(t,e):void 0,o=t.delete(e);return i&&k(t,"delete",e,void 0,s),o}function te(){const e=Ae(this),t=0!==e.size,n=void 0,r=e.clear();return t&&k(e,"clear",void 0,void 0,n),r}function ne(e,t){return function(n,r){const i=this,s=i["__v_raw"],o=Ae(s),a=t?W:e?Re:xe;return!e&&S(o,"iterate",y),s.forEach((e,t)=>n.call(r,a(e),a(t),i))}}function re(e,t,n){return function(...i){const s=this["__v_raw"],o=Ae(s),a=Object(r["u"])(o),c="entries"===e||e===Symbol.iterator&&a,u="keys"===e&&a,l=s[e](...i),h=n?W:t?Re:xe;return!t&&S(o,"iterate",u?v:y),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:c?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function ie(e){return function(...t){return"delete"!==e&&this}}function se(){const e={get(e){return Q(this,e)},get size(){return J(this)},has:Y,add:X,set:Z,delete:ee,clear:te,forEach:ne(!1,!1)},t={get(e){return Q(this,e,!1,!0)},get size(){return J(this)},has:Y,add:X,set:Z,delete:ee,clear:te,forEach:ne(!1,!0)},n={get(e){return Q(this,e,!0)},get size(){return J(this,!0)},has(e){return Y.call(this,e,!0)},add:ie("add"),set:ie("set"),delete:ie("delete"),clear:ie("clear"),forEach:ne(!0,!1)},r={get(e){return Q(this,e,!0,!0)},get size(){return J(this,!0)},has(e){return Y.call(this,e,!0)},add:ie("add"),set:ie("set"),delete:ie("delete"),clear:ie("clear"),forEach:ne(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach(i=>{e[i]=re(i,!1,!1),n[i]=re(i,!0,!1),t[i]=re(i,!1,!0),r[i]=re(i,!0,!0)}),[e,n,t,r]}const[oe,ae,ce,ue]=se();function le(e,t){const n=t?e?ue:ce:e?ae:oe;return(t,i,s)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get(Object(r["k"])(n,i)&&i in t?n:t,i,s)}const he={get:le(!1,!1)},de={get:le(!1,!0)},fe={get:le(!0,!1)};const pe=new WeakMap,ge=new WeakMap,me=new WeakMap,ye=new WeakMap;function ve(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function be(e){return e["__v_skip"]||!Object.isExtensible(e)?0:ve(Object(r["P"])(e))}function we(e){return Se(e)?e:Te(e,!1,K,he,pe)}function _e(e){return Te(e,!1,$,de,ge)}function Ie(e){return Te(e,!0,z,fe,me)}function Te(e,t,n,i,s){if(!Object(r["w"])(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const o=s.get(e);if(o)return o;const a=be(e);if(0===a)return e;const c=new Proxy(e,2===a?i:n);return s.set(e,c),c}function Ee(e){return Se(e)?Ee(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Se(e){return!(!e||!e["__v_isReadonly"])}function Oe(e){return!(!e||!e["__v_isShallow"])}function ke(e){return Ee(e)||Se(e)}function Ae(e){const t=e&&e["__v_raw"];return t?Ae(t):e}function Ce(e){return Object(r["g"])(e,"__v_skip",!0),e}const xe=e=>Object(r["w"])(e)?we(e):e,Re=e=>Object(r["w"])(e)?Ie(e):e;function Ne(e){_&&m&&(e=Ae(e),O(e.dep||(e.dep=a())))}function De(e,t){e=Ae(e),e.dep&&A(e.dep)}function Pe(e){return!(!e||!0!==e.__v_isRef)}function je(e){return Me(e,!1)}function Le(e){return Me(e,!0)}function Me(e,t){return Pe(e)?e:new Fe(e,t)}class Fe{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ae(e),this._value=t?e:xe(e)}get value(){return Ne(this),this._value}set value(e){e=this.__v_isShallow?e:Ae(e),Object(r["j"])(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:xe(e),De(this,e))}}function Ue(e){return Pe(e)?e.value:e}const Ve={get:(e,t,n)=>Ue(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Pe(i)&&!Pe(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function qe(e){return Ee(e)?e:new Proxy(e,Ve)}class Be{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new b(e,()=>{this._dirty||(this._dirty=!0,De(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const e=Ae(this);return Ne(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Ge(e,t,n=!1){let i,s;const o=Object(r["q"])(e);o?(i=e,s=r["d"]):(i=e.get,s=e.set);const a=new Be(i,s,o||!s,n);return a}},a4b4:function(e,t,n){var r=n("342f");e.exports=/web0s(?!.*chrome)/i.test(r)},a4d3:function(e,t,n){n("d9f5"),n("b4f8"),n("c513"),n("e9c4"),n("5a47")},a630:function(e,t,n){var r=n("23e7"),i=n("4df4"),s=n("1c7e"),o=!s((function(e){Array.from(e)}));r({target:"Array",stat:!0,forced:o},{from:i})},a640:function(e,t,n){"use strict";var r=n("d039");e.exports=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){return 1},1)}))}},a79d:function(e,t,n){"use strict";var r=n("23e7"),i=n("c430"),s=n("d256"),o=n("d039"),a=n("d066"),c=n("1626"),u=n("4840"),l=n("cdf9"),h=n("cb2d"),d=s&&s.prototype,f=!!s&&o((function(){d["finally"].call({then:function(){}},(function(){}))}));if(r({target:"Promise",proto:!0,real:!0,forced:f},{finally:function(e){var t=u(this,a("Promise")),n=c(e);return this.then(n?function(n){return l(t,e()).then((function(){return n}))}:e,n?function(n){return l(t,e()).then((function(){throw n}))}:e)}}),!i&&c(s)){var p=a("Promise").prototype["finally"];d["finally"]!==p&&h(d,"finally",p,{unsafe:!0})}},ab36:function(e,t,n){var r=n("861d"),i=n("9112");e.exports=function(e,t){r(t)&&"cause"in t&&i(e,"cause",t.cause)}},abc5:function(e,t,n){"use strict";(function(e){function r(){return i().__VUE_DEVTOOLS_GLOBAL_HOOK__}function i(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof e?e:{}}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return s}));const s="function"===typeof Proxy}).call(this,n("c8ba"))},ac1f:function(e,t,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(e,t,n){"use strict";var r=n("825a");e.exports=function(){var e=r(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},ae93:function(e,t,n){"use strict";var r,i,s,o=n("d039"),a=n("1626"),c=n("7c73"),u=n("e163"),l=n("cb2d"),h=n("b622"),d=n("c430"),f=h("iterator"),p=!1;[].keys&&(s=[].keys(),"next"in s?(i=u(u(s)),i!==Object.prototype&&(r=i)):p=!0);var g=void 0==r||o((function(){var e={};return r[f].call(e)!==e}));g?r={}:d&&(r=c(r)),a(r[f])||l(r,f,(function(){return this})),e.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},aeb0:function(e,t,n){var r=n("9bf2").f;e.exports=function(e,t,n){n in e||r(e,n,{configurable:!0,get:function(){return t[n]},set:function(e){t[n]=e}})}},aed9:function(e,t,n){var r=n("83ab"),i=n("d039");e.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},b041:function(e,t,n){"use strict";var r=n("00ee"),i=n("f5df");e.exports=r?{}.toString:function(){return"[object "+i(this)+"]"}},b0c0:function(e,t,n){var r=n("83ab"),i=n("5e77").EXISTS,s=n("e330"),o=n("9bf2").f,a=Function.prototype,c=s(a.toString),u=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,l=s(u.exec),h="name";r&&!i&&o(a,h,{configurable:!0,get:function(){try{return l(u,c(this))[1]}catch(e){return""}}})},b42e:function(e,t){var n=Math.ceil,r=Math.floor;e.exports=Math.trunc||function(e){var t=+e;return(t>0?r:n)(t)}},b4f8:function(e,t,n){var r=n("23e7"),i=n("d066"),s=n("1a2d"),o=n("577e"),a=n("5692"),c=n("3d87"),u=a("string-to-symbol-registry"),l=a("symbol-to-string-registry");r({target:"Symbol",stat:!0,forced:!c},{for:function(e){var t=o(e);if(s(u,t))return u[t];var n=i("Symbol")(t);return u[t]=n,l[n]=t,n}})},b575:function(e,t,n){var r,i,s,o,a,c,u,l,h=n("da84"),d=n("0366"),f=n("06cf").f,p=n("2cf4").set,g=n("1cdc"),m=n("d4c3"),y=n("a4b4"),v=n("605d"),b=h.MutationObserver||h.WebKitMutationObserver,w=h.document,_=h.process,I=h.Promise,T=f(h,"queueMicrotask"),E=T&&T.value;E||(r=function(){var e,t;v&&(e=_.domain)&&e.exit();while(i){t=i.fn,i=i.next;try{t()}catch(n){throw i?o():s=void 0,n}}s=void 0,e&&e.enter()},g||v||y||!b||!w?!m&&I&&I.resolve?(u=I.resolve(void 0),u.constructor=I,l=d(u.then,u),o=function(){l(r)}):v?o=function(){_.nextTick(r)}:(p=d(p,h),o=function(){p(r)}):(a=!0,c=w.createTextNode(""),new b(r).observe(c,{characterData:!0}),o=function(){c.data=a=!a})),e.exports=E||function(e){var t={fn:e,next:void 0};s&&(s.next=t),i||(i=t,o()),s=t}},b622:function(e,t,n){var r=n("da84"),i=n("5692"),s=n("1a2d"),o=n("90e3"),a=n("4930"),c=n("fdbf"),u=i("wks"),l=r.Symbol,h=l&&l["for"],d=c?l:l&&l.withoutSetter||o;e.exports=function(e){if(!s(u,e)||!a&&"string"!=typeof u[e]){var t="Symbol."+e;a&&s(l,e)?u[e]=l[e]:u[e]=c&&h?h(t):d(t)}return u[e]}},b636:function(e,t,n){var r=n("746f");r("asyncIterator")},b64b:function(e,t,n){var r=n("23e7"),i=n("7b0b"),s=n("df75"),o=n("d039"),a=o((function(){s(1)}));r({target:"Object",stat:!0,forced:a},{keys:function(e){return s(i(e))}})},b727:function(e,t,n){var r=n("0366"),i=n("e330"),s=n("44ad"),o=n("7b0b"),a=n("07fa"),c=n("65f0"),u=i([].push),l=function(e){var t=1==e,n=2==e,i=3==e,l=4==e,h=6==e,d=7==e,f=5==e||h;return function(p,g,m,y){for(var v,b,w=o(p),_=s(w),I=r(g,m),T=a(_),E=0,S=y||c,O=t?S(p,T):n||d?S(p,0):void 0;T>E;E++)if((f||E in _)&&(v=_[E],b=I(v,E,w),e))if(t)O[E]=b;else if(b)switch(e){case 3:return!0;case 5:return v;case 6:return E;case 2:u(O,v)}else switch(e){case 4:return!1;case 7:u(O,v)}return h?-1:i||l?l:O}};e.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterReject:l(7)}},b980:function(e,t,n){var r=n("d039"),i=n("5c6c");e.exports=!r((function(){var e=Error("a");return!("stack"in e)||(Object.defineProperty(e,"stack",i(1,7)),7!==e.stack)}))},c04e:function(e,t,n){var r=n("c65b"),i=n("861d"),s=n("d9b5"),o=n("dc4a"),a=n("485a"),c=n("b622"),u=TypeError,l=c("toPrimitive");e.exports=function(e,t){if(!i(e)||s(e))return e;var n,c=o(e,l);if(c){if(void 0===t&&(t="default"),n=r(c,e,t),!i(n)||s(n))return n;throw u("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},c430:function(e,t){e.exports=!1},c513:function(e,t,n){var r=n("23e7"),i=n("1a2d"),s=n("d9b5"),o=n("0d51"),a=n("5692"),c=n("3d87"),u=a("symbol-to-string-registry");r({target:"Symbol",stat:!0,forced:!c},{keyFor:function(e){if(!s(e))throw TypeError(o(e)+" is not a symbol");if(i(u,e))return u[e]}})},c65b:function(e,t,n){var r=n("40d5"),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},c6b6:function(e,t,n){var r=n("e330"),i=r({}.toString),s=r("".slice);e.exports=function(e){return s(i(e),8,-1)}},c6cd:function(e,t,n){var r=n("da84"),i=n("6374"),s="__core-js_shared__",o=r[s]||i(s,{});e.exports=o},c770:function(e,t,n){var r=n("e330"),i=Error,s=r("".replace),o=function(e){return String(i(e).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(o);e.exports=function(e,t){if(c&&"string"==typeof e&&!i.prepareStackTrace)while(t--)e=s(e,a,"");return e}},c7eb:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("b636"),n("944a"),n("0c47"),n("23dc"),n("d9e2"),n("3410"),n("159b"),n("b0c0"),n("fb6a");function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function i(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
i=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,s="function"==typeof Symbol?Symbol:{},o=s.iterator||"@@iterator",a=s.asyncIterator||"@@asyncIterator",c=s.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(A){u=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var i=t&&t.prototype instanceof f?t:f,s=Object.create(i.prototype),o=new S(r||[]);return s._invoke=function(e,t,n){var r="suspendedStart";return function(i,s){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw s;return k()}for(n.method=i,n.arg=s;;){var o=n.delegate;if(o){var a=I(o,n);if(a){if(a===d)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=h(e,t,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(e,n,o),s}function h(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(A){return{type:"throw",arg:A}}}e.wrap=l;var d={};function f(){}function p(){}function g(){}var m={};u(m,o,(function(){return this}));var y=Object.getPrototypeOf,v=y&&y(y(O([])));v&&v!==t&&n.call(v,o)&&(m=v);var b=g.prototype=f.prototype=Object.create(m);function w(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function _(e,t){function i(s,o,a,c){var u=h(e[s],e,o);if("throw"!==u.type){var l=u.arg,d=l.value;return d&&"object"==r(d)&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){i("next",e,a,c)}),(function(e){i("throw",e,a,c)})):t.resolve(d).then((function(e){l.value=e,a(l)}),(function(e){return i("throw",e,a,c)}))}c(u.arg)}var s;this._invoke=function(e,n){function r(){return new t((function(t,r){i(e,n,t,r)}))}return s=s?s.then(r,r):r()}}function I(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator["return"]&&(t.method="return",t.arg=void 0,I(e,t),"throw"===t.method))return d;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var r=h(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,d;var i=r.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function O(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,i=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:k}}function k(){return{value:void 0,done:!0}}return p.prototype=g,u(b,"constructor",g),u(g,"constructor",p),p.displayName=u(g,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,u(e,c,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},w(_.prototype),u(_.prototype,a,(function(){return this})),e.AsyncIterator=_,e.async=function(t,n,r,i,s){void 0===s&&(s=Promise);var o=new _(l(t,n,r,i),s);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},w(b),u(b,c,"Generator"),u(b,o,(function(){return this})),u(b,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=O,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return o.type="throw",o.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var s=this.tryEntries[i],o=s.completion;if("root"===s.tryLoc)return r("end");if(s.tryLoc<=this.prev){var a=n.call(s,"catchLoc"),c=n.call(s,"finallyLoc");if(a&&c){if(this.prev<s.catchLoc)return r(s.catchLoc,!0);if(this.prev<s.finallyLoc)return r(s.finallyLoc)}else if(a){if(this.prev<s.catchLoc)return r(s.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return r(s.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var s=i;break}}s&&("break"===e||"continue"===e)&&s.tryLoc<=t&&t<=s.finallyLoc&&(s=null);var o=s?s.completion:{};return o.type=e,o.arg=t,s?(this.method="next",this.next=s.finallyLoc,d):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),E(n),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;E(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:O(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},e}},c8ba:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n},ca84:function(e,t,n){var r=n("e330"),i=n("1a2d"),s=n("fc6a"),o=n("4d64").indexOf,a=n("d012"),c=r([].push);e.exports=function(e,t){var n,r=s(e),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(t.length>u)i(r,n=t[u++])&&(~o(l,n)||c(l,n));return l}},caad:function(e,t,n){"use strict";var r=n("23e7"),i=n("4d64").includes,s=n("d039"),o=n("44d2"),a=s((function(){return!Array(1).includes()}));r({target:"Array",proto:!0,forced:a},{includes:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),o("includes")},cb2d:function(e,t,n){var r=n("1626"),i=n("9112"),s=n("13d2"),o=n("6374");e.exports=function(e,t,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:t;return r(n)&&s(n,u,a),a.global?c?e[t]=n:o(t,n):(a.unsafe?e[t]&&(c=!0):delete e[t],c?e[t]=n:i(e,t,n)),e}},cc12:function(e,t,n){var r=n("da84"),i=n("861d"),s=r.document,o=i(s)&&i(s.createElement);e.exports=function(e){return o?s.createElement(e):{}}},cc98:function(e,t,n){"use strict";var r=n("23e7"),i=n("c430"),s=n("4738").CONSTRUCTOR,o=n("d256"),a=n("d066"),c=n("1626"),u=n("cb2d"),l=o&&o.prototype;if(r({target:"Promise",proto:!0,forced:s,real:!0},{catch:function(e){return this.then(void 0,e)}}),!i&&c(o)){var h=a("Promise").prototype["catch"];l["catch"]!==h&&u(l,"catch",h,{unsafe:!0})}},cca6:function(e,t,n){var r=n("23e7"),i=n("60da");r({target:"Object",stat:!0,arity:2,forced:Object.assign!==i},{assign:i})},cdf9:function(e,t,n){var r=n("825a"),i=n("861d"),s=n("f069");e.exports=function(e,t){if(r(e),i(t)&&t.constructor===e)return t;var n=s.f(e),o=n.resolve;return o(t),n.promise}},d012:function(e,t){e.exports={}},d039:function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},d066:function(e,t,n){var r=n("da84"),i=n("1626"),s=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?s(r[e]):r[e]&&r[e][t]}},d1e7:function(e,t,n){"use strict";var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,s=i&&!r.call({1:2},1);t.f=s?function(e){var t=i(this,e);return!!t&&t.enumerable}:r},d256:function(e,t,n){var r=n("da84");e.exports=r.Promise},d28b:function(e,t,n){var r=n("746f");r("iterator")},d2bb:function(e,t,n){var r=n("e330"),i=n("825a"),s=n("3bbe");e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),e(n,[]),t=n instanceof Array}catch(o){}return function(n,r){return i(n),s(r),t?e(n,r):n.__proto__=r,n}}():void 0)},d3b7:function(e,t,n){var r=n("00ee"),i=n("cb2d"),s=n("b041");r||i(Object.prototype,"toString",s,{unsafe:!0})},d44e:function(e,t,n){var r=n("9bf2").f,i=n("1a2d"),s=n("b622"),o=s("toStringTag");e.exports=function(e,t,n){e&&!n&&(e=e.prototype),e&&!i(e,o)&&r(e,o,{configurable:!0,value:t})}},d4c3:function(e,t,n){var r=n("342f"),i=n("da84");e.exports=/ipad|iphone|ipod/i.test(r)&&void 0!==i.Pebble},d6d6:function(e,t){var n=TypeError;e.exports=function(e,t){if(e<t)throw n("Not enough arguments");return e}},d9b5:function(e,t,n){var r=n("d066"),i=n("1626"),s=n("3a9b"),o=n("fdbf"),a=Object;e.exports=o?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return i(t)&&s(t.prototype,a(e))}},d9e2:function(e,t,n){var r=n("23e7"),i=n("da84"),s=n("2ba4"),o=n("e5cb"),a="WebAssembly",c=i[a],u=7!==Error("e",{cause:7}).cause,l=function(e,t){var n={};n[e]=o(e,t,u),r({global:!0,constructor:!0,arity:1,forced:u},n)},h=function(e,t){if(c&&c[e]){var n={};n[e]=o(a+"."+e,t,u),r({target:a,stat:!0,constructor:!0,arity:1,forced:u},n)}};l("Error",(function(e){return function(t){return s(e,this,arguments)}})),l("EvalError",(function(e){return function(t){return s(e,this,arguments)}})),l("RangeError",(function(e){return function(t){return s(e,this,arguments)}})),l("ReferenceError",(function(e){return function(t){return s(e,this,arguments)}})),l("SyntaxError",(function(e){return function(t){return s(e,this,arguments)}})),l("TypeError",(function(e){return function(t){return s(e,this,arguments)}})),l("URIError",(function(e){return function(t){return s(e,this,arguments)}})),h("CompileError",(function(e){return function(t){return s(e,this,arguments)}})),h("LinkError",(function(e){return function(t){return s(e,this,arguments)}})),h("RuntimeError",(function(e){return function(t){return s(e,this,arguments)}}))},d9f5:function(e,t,n){"use strict";var r=n("23e7"),i=n("da84"),s=n("c65b"),o=n("e330"),a=n("c430"),c=n("83ab"),u=n("4930"),l=n("d039"),h=n("1a2d"),d=n("3a9b"),f=n("825a"),p=n("fc6a"),g=n("a04b"),m=n("577e"),y=n("5c6c"),v=n("7c73"),b=n("df75"),w=n("241c"),_=n("057f"),I=n("7418"),T=n("06cf"),E=n("9bf2"),S=n("37e8"),O=n("d1e7"),k=n("cb2d"),A=n("5692"),C=n("f772"),x=n("d012"),R=n("90e3"),N=n("b622"),D=n("e538"),P=n("746f"),j=n("57b9"),L=n("d44e"),M=n("69f3"),F=n("b727").forEach,U=C("hidden"),V="Symbol",q="prototype",B=M.set,G=M.getterFor(V),K=Object[q],z=i.Symbol,$=z&&z[q],W=i.TypeError,H=i.QObject,Q=T.f,Y=E.f,J=_.f,X=O.f,Z=o([].push),ee=A("symbols"),te=A("op-symbols"),ne=A("wks"),re=!H||!H[q]||!H[q].findChild,ie=c&&l((function(){return 7!=v(Y({},"a",{get:function(){return Y(this,"a",{value:7}).a}})).a}))?function(e,t,n){var r=Q(K,t);r&&delete K[t],Y(e,t,n),r&&e!==K&&Y(K,t,r)}:Y,se=function(e,t){var n=ee[e]=v($);return B(n,{type:V,tag:e,description:t}),c||(n.description=t),n},oe=function(e,t,n){e===K&&oe(te,t,n),f(e);var r=g(t);return f(n),h(ee,r)?(n.enumerable?(h(e,U)&&e[U][r]&&(e[U][r]=!1),n=v(n,{enumerable:y(0,!1)})):(h(e,U)||Y(e,U,y(1,{})),e[U][r]=!0),ie(e,r,n)):Y(e,r,n)},ae=function(e,t){f(e);var n=p(t),r=b(n).concat(de(n));return F(r,(function(t){c&&!s(ue,n,t)||oe(e,t,n[t])})),e},ce=function(e,t){return void 0===t?v(e):ae(v(e),t)},ue=function(e){var t=g(e),n=s(X,this,t);return!(this===K&&h(ee,t)&&!h(te,t))&&(!(n||!h(this,t)||!h(ee,t)||h(this,U)&&this[U][t])||n)},le=function(e,t){var n=p(e),r=g(t);if(n!==K||!h(ee,r)||h(te,r)){var i=Q(n,r);return!i||!h(ee,r)||h(n,U)&&n[U][r]||(i.enumerable=!0),i}},he=function(e){var t=J(p(e)),n=[];return F(t,(function(e){h(ee,e)||h(x,e)||Z(n,e)})),n},de=function(e){var t=e===K,n=J(t?te:p(e)),r=[];return F(n,(function(e){!h(ee,e)||t&&!h(K,e)||Z(r,ee[e])})),r};u||(z=function(){if(d($,this))throw W("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?m(arguments[0]):void 0,t=R(e),n=function(e){this===K&&s(n,te,e),h(this,U)&&h(this[U],t)&&(this[U][t]=!1),ie(this,t,y(1,e))};return c&&re&&ie(K,t,{configurable:!0,set:n}),se(t,e)},$=z[q],k($,"toString",(function(){return G(this).tag})),k(z,"withoutSetter",(function(e){return se(R(e),e)})),O.f=ue,E.f=oe,S.f=ae,T.f=le,w.f=_.f=he,I.f=de,D.f=function(e){return se(N(e),e)},c&&(Y($,"description",{configurable:!0,get:function(){return G(this).description}}),a||k(K,"propertyIsEnumerable",ue,{unsafe:!0}))),r({global:!0,constructor:!0,wrap:!0,forced:!u,sham:!u},{Symbol:z}),F(b(ne),(function(e){P(e)})),r({target:V,stat:!0,forced:!u},{useSetter:function(){re=!0},useSimple:function(){re=!1}}),r({target:"Object",stat:!0,forced:!u,sham:!c},{create:ce,defineProperty:oe,defineProperties:ae,getOwnPropertyDescriptor:le}),r({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:he}),j(),L(z,V),x[U]=!0},da84:function(e,t,n){(function(t){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||function(){return this}()||Function("return this")()}).call(this,n("c8ba"))},dbb4:function(e,t,n){var r=n("23e7"),i=n("83ab"),s=n("56ef"),o=n("fc6a"),a=n("06cf"),c=n("8418");r({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(e){var t,n,r=o(e),i=a.f,u=s(r),l={},h=0;while(u.length>h)n=i(r,t=u[h++]),void 0!==n&&c(l,t,n);return l}})},dc4a:function(e,t,n){var r=n("59ed");e.exports=function(e,t){var n=e[t];return null==n?void 0:r(n)}},ddb0:function(e,t,n){var r=n("da84"),i=n("fdbc"),s=n("785a"),o=n("e260"),a=n("9112"),c=n("b622"),u=c("iterator"),l=c("toStringTag"),h=o.values,d=function(e,t){if(e){if(e[u]!==h)try{a(e,u,h)}catch(r){e[u]=h}if(e[l]||a(e,l,t),i[t])for(var n in o)if(e[n]!==o[n])try{a(e,n,o[n])}catch(r){e[n]=o[n]}}};for(var f in i)d(r[f]&&r[f].prototype,f);d(s,"DOMTokenList")},df75:function(e,t,n){var r=n("ca84"),i=n("7839");e.exports=Object.keys||function(e){return r(e,i)}},df7c:function(e,t,n){(function(e){function n(e,t){for(var n=0,r=e.length-1;r>=0;r--){var i=e[r];"."===i?e.splice(r,1):".."===i?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function r(e){"string"!==typeof e&&(e+="");var t,n=0,r=-1,i=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!i){n=t+1;break}}else-1===r&&(i=!1,r=t+1);return-1===r?"":e.slice(n,r)}function i(e,t){if(e.filter)return e.filter(t);for(var n=[],r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}t.resolve=function(){for(var t="",r=!1,s=arguments.length-1;s>=-1&&!r;s--){var o=s>=0?arguments[s]:e.cwd();if("string"!==typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(t=o+"/"+t,r="/"===o.charAt(0))}return t=n(i(t.split("/"),(function(e){return!!e})),!r).join("/"),(r?"/":"")+t||"."},t.normalize=function(e){var r=t.isAbsolute(e),o="/"===s(e,-1);return e=n(i(e.split("/"),(function(e){return!!e})),!r).join("/"),e||r||(e="."),e&&o&&(e+="/"),(r?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(i(e,(function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,n){function r(e){for(var t=0;t<e.length;t++)if(""!==e[t])break;for(var n=e.length-1;n>=0;n--)if(""!==e[n])break;return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var i=r(e.split("/")),s=r(n.split("/")),o=Math.min(i.length,s.length),a=o,c=0;c<o;c++)if(i[c]!==s[c]){a=c;break}var u=[];for(c=a;c<i.length;c++)u.push("..");return u=u.concat(s.slice(a)),u.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!==typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,r=-1,i=!0,s=e.length-1;s>=1;--s)if(t=e.charCodeAt(s),47===t){if(!i){r=s;break}}else i=!1;return-1===r?n?"/":".":n&&1===r?"/":e.slice(0,r)},t.basename=function(e,t){var n=r(e);return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){"string"!==typeof e&&(e+="");for(var t=-1,n=0,r=-1,i=!0,s=0,o=e.length-1;o>=0;--o){var a=e.charCodeAt(o);if(47!==a)-1===r&&(i=!1,r=o+1),46===a?-1===t?t=o:1!==s&&(s=1):-1!==t&&(s=-1);else if(!i){n=o+1;break}}return-1===t||-1===r||0===s||1===s&&t===r-1&&t===n+1?"":e.slice(t,r)};var s="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n("4362"))},e01a:function(e,t,n){"use strict";var r=n("23e7"),i=n("83ab"),s=n("da84"),o=n("e330"),a=n("1a2d"),c=n("1626"),u=n("3a9b"),l=n("577e"),h=n("9bf2").f,d=n("e893"),f=s.Symbol,p=f&&f.prototype;if(i&&c(f)&&(!("description"in p)||void 0!==f().description)){var g={},m=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:l(arguments[0]),t=u(p,this)?new f(e):void 0===e?f():f(e);return""===e&&(g[t]=!0),t};d(m,f),m.prototype=p,p.constructor=m;var y="Symbol(test)"==String(f("test")),v=o(p.toString),b=o(p.valueOf),w=/^Symbol\((.*)\)[^)]+$/,_=o("".replace),I=o("".slice);h(p,"description",{configurable:!0,get:function(){var e=b(this),t=v(e);if(a(g,e))return"";var n=y?I(t,7,-1):_(t,w,"$1");return""===n?void 0:n}}),r({global:!0,constructor:!0,forced:!0},{Symbol:m})}},e163:function(e,t,n){var r=n("1a2d"),i=n("1626"),s=n("7b0b"),o=n("f772"),a=n("e177"),c=o("IE_PROTO"),u=Object,l=u.prototype;e.exports=a?u.getPrototypeOf:function(e){var t=s(e);if(r(t,c))return t[c];var n=t.constructor;return i(n)&&t instanceof n?n.prototype:t instanceof u?l:null}},e177:function(e,t,n){var r=n("d039");e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},e260:function(e,t,n){"use strict";var r=n("fc6a"),i=n("44d2"),s=n("3f8c"),o=n("69f3"),a=n("9bf2").f,c=n("7dd0"),u=n("c430"),l=n("83ab"),h="Array Iterator",d=o.set,f=o.getterFor(h);e.exports=c(Array,"Array",(function(e,t){d(this,{type:h,target:r(e),index:0,kind:t})}),(function(){var e=f(this),t=e.target,n=e.kind,r=e.index++;return!t||r>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:t[r],done:!1}:{value:[r,t[r]],done:!1}}),"values");var p=s.Arguments=s.Array;if(i("keys"),i("values"),i("entries"),!u&&l&&"values"!==p.name)try{a(p,"name",{value:"values"})}catch(g){}},e330:function(e,t,n){var r=n("40d5"),i=Function.prototype,s=i.bind,o=i.call,a=r&&s.bind(o,o);e.exports=r?function(e){return e&&a(e)}:function(e){return e&&function(){return o.apply(e,arguments)}}},e391:function(e,t,n){var r=n("577e");e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},e439:function(e,t,n){var r=n("23e7"),i=n("d039"),s=n("fc6a"),o=n("06cf").f,a=n("83ab"),c=i((function(){o(1)})),u=!a||c;r({target:"Object",stat:!0,forced:u,sham:!a},{getOwnPropertyDescriptor:function(e,t){return o(s(e),t)}})},e538:function(e,t,n){var r=n("b622");t.f=r},e5cb:function(e,t,n){"use strict";var r=n("d066"),i=n("1a2d"),s=n("9112"),o=n("3a9b"),a=n("d2bb"),c=n("e893"),u=n("aeb0"),l=n("7156"),h=n("e391"),d=n("ab36"),f=n("c770"),p=n("b980"),g=n("83ab"),m=n("c430");e.exports=function(e,t,n,y){var v="stackTraceLimit",b=y?2:1,w=e.split("."),_=w[w.length-1],I=r.apply(null,w);if(I){var T=I.prototype;if(!m&&i(T,"cause")&&delete T.cause,!n)return I;var E=r("Error"),S=t((function(e,t){var n=h(y?t:e,void 0),r=y?new I(e):new I;return void 0!==n&&s(r,"message",n),p&&s(r,"stack",f(r.stack,2)),this&&o(T,this)&&l(r,this,S),arguments.length>b&&d(r,arguments[b]),r}));if(S.prototype=T,"Error"!==_?a?a(S,E):c(S,E,{name:!0}):g&&v in I&&(u(S,I,v),u(S,I,"prepareStackTrace")),c(S,I),!m)try{T.name!==_&&s(T,"name",_),T.constructor=S}catch(O){}return S}}},e667:function(e,t){e.exports=function(e){try{return{error:!1,value:e()}}catch(t){return{error:!0,value:t}}}},e691:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return h}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function l(e){r.forEach(t=>{t.setLogLevel(e)})}function h(e,t){for(const n of r){let r=null;t&&t.level&&(r=s[t.level]),n.userLogHandler=null===e?null:(t,n,...s)=>{const o=s.map(e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}}).filter(e=>e).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:o,args:s,type:t.name})}}}},e6cf:function(e,t,n){n("5e7e"),n("14e5"),n("cc98"),n("3529"),n("f22b"),n("7149")},e893:function(e,t,n){var r=n("1a2d"),i=n("56ef"),s=n("06cf"),o=n("9bf2");e.exports=function(e,t,n){for(var a=i(t),c=o.f,u=s.f,l=0;l<a.length;l++){var h=a[l];r(e,h)||n&&r(n,h)||c(e,h,u(t,h))}}},e8b5:function(e,t,n){var r=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==r(e)}},e95a:function(e,t,n){var r=n("b622"),i=n("3f8c"),s=r("iterator"),o=Array.prototype;e.exports=function(e){return void 0!==e&&(i.Array===e||o[s]===e)}},e9c4:function(e,t,n){var r=n("23e7"),i=n("d066"),s=n("2ba4"),o=n("c65b"),a=n("e330"),c=n("d039"),u=n("e8b5"),l=n("1626"),h=n("861d"),d=n("d9b5"),f=n("f36a"),p=n("4930"),g=i("JSON","stringify"),m=a(/./.exec),y=a("".charAt),v=a("".charCodeAt),b=a("".replace),w=a(1..toString),_=/[\uD800-\uDFFF]/g,I=/^[\uD800-\uDBFF]$/,T=/^[\uDC00-\uDFFF]$/,E=!p||c((function(){var e=i("Symbol")();return"[null]"!=g([e])||"{}"!=g({a:e})||"{}"!=g(Object(e))})),S=c((function(){return'"\\udf06\\ud834"'!==g("\udf06\ud834")||'"\\udead"'!==g("\udead")})),O=function(e,t){var n=f(arguments),r=t;if((h(t)||void 0!==e)&&!d(e))return u(t)||(t=function(e,t){if(l(r)&&(t=o(r,this,e,t)),!d(t))return t}),n[1]=t,s(g,null,n)},k=function(e,t,n){var r=y(n,t-1),i=y(n,t+1);return m(I,e)&&!m(T,i)||m(T,e)&&!m(I,r)?"\\u"+w(v(e,0),16):e};g&&r({target:"JSON",stat:!0,arity:3,forced:E||S},{stringify:function(e,t,n){var r=f(arguments),i=s(E?O:g,null,r);return S&&"string"==typeof i?b(i,_,k):i}})},f069:function(e,t,n){"use strict";var r=n("59ed"),i=function(e){var t,n;this.promise=new e((function(e,r){if(void 0!==t||void 0!==n)throw TypeError("Bad Promise constructor");t=e,n=r})),this.resolve=r(t),this.reject=r(n)};e.exports.f=function(e){return new i(e)}},f22b:function(e,t,n){"use strict";var r=n("23e7"),i=n("c65b"),s=n("f069"),o=n("4738").CONSTRUCTOR;r({target:"Promise",stat:!0,forced:o},{reject:function(e){var t=s.f(this);return i(t.reject,void 0,e),t.promise}})},f36a:function(e,t,n){var r=n("e330");e.exports=r([].slice)},f5df:function(e,t,n){var r=n("00ee"),i=n("1626"),s=n("c6b6"),o=n("b622"),a=o("toStringTag"),c=Object,u="Arguments"==s(function(){return arguments}()),l=function(e,t){try{return e[t]}catch(n){}};e.exports=r?s:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=l(t=c(e),a))?n:u?s(t):"Object"==(r=s(t))&&i(t.callee)?"Arguments":r}},f772:function(e,t,n){var r=n("5692"),i=n("90e3"),s=r("keys");e.exports=function(e){return s[e]||(s[e]=i(e))}},fb6a:function(e,t,n){"use strict";var r=n("23e7"),i=n("e8b5"),s=n("68ee"),o=n("861d"),a=n("23cb"),c=n("07fa"),u=n("fc6a"),l=n("8418"),h=n("b622"),d=n("1dde"),f=n("f36a"),p=d("slice"),g=h("species"),m=Array,y=Math.max;r({target:"Array",proto:!0,forced:!p},{slice:function(e,t){var n,r,h,d=u(this),p=c(d),v=a(e,p),b=a(void 0===t?p:t,p);if(i(d)&&(n=d.constructor,s(n)&&(n===m||i(n.prototype))?n=void 0:o(n)&&(n=n[g],null===n&&(n=void 0)),n===m||void 0===n))return f(d,v,b);for(r=new(void 0===n?m:n)(y(b-v,0)),h=0;v<b;v++,h++)v in d&&l(r,h,d[v]);return r.length=h,r}})},fc6a:function(e,t,n){var r=n("44ad"),i=n("1d80");e.exports=function(e){return r(i(e))}},fce3:function(e,t,n){var r=n("d039"),i=n("da84"),s=i.RegExp;e.exports=r((function(){var e=s(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))},fdbc:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbf:function(e,t,n){var r=n("4930");e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator}}]);
//# sourceMappingURL=chunk-vendors.5ea727d3.js.map