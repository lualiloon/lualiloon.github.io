// Compiled by ClojureScript 1.11.60 {:target :nodejs, :nodejs-rt false, :optimizations :none}
goog.provide('cider.nrepl.inlined.deps.suitable.v0v5v0.suitable.js_introspection');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.object');
goog.scope(function(){
cider.nrepl.inlined.deps.suitable.v0v5v0.suitable.js_introspection.goog$module$goog$object = goog.module.get('goog.object');
});
cider.nrepl.inlined.deps.suitable.v0v5v0.suitable.js_introspection.own_property_descriptors = (cljs.core.truth_("getOwnPropertyDescriptors" in Object)?(function (obj){
return Object.getOwnPropertyDescriptors(obj);
}):(function (obj){
return cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (key){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,Object.getOwnPropertyDescriptor(obj,key)], null);
}),Object.getOwnPropertyNames(obj))));
}));
cider.nrepl.inlined.deps.suitable.v0v5v0.suitable.js_introspection.properties_by_prototype = (function cider$nrepl$inlined$deps$suitable$v0v5v0$suitable$js_introspection$properties_by_prototype(obj){
var obj__$1 = obj;
var protos = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(obj__$1)){
var G__19401 = Object.getPrototypeOf(obj__$1);
var G__19402 = cljs.core.conj.call(null,protos,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"props","props",453281727),cider.nrepl.inlined.deps.suitable.v0v5v0.suitable.js_introspection.own_property_descriptors.call(null,obj__$1)], null));
obj__$1 = G__19401;
protos = G__19402;
continue;
} else {
return protos;
}
break;
}
});
cider.nrepl.inlined.deps.suitable.v0v5v0.suitable.js_introspection.property_names_and_types = (function cider$nrepl$inlined$deps$suitable$v0v5v0$suitable$js_introspection$property_names_and_types(var_args){
var G__19404 = arguments.length;
switch (G__19404) {
case 1:
return cider.nrepl.inlined.deps.suitable.v0v5v0.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cider.nrepl.inlined.deps.suitable.v0v5v0.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cider.nrepl.inlined.deps.suitable.v0v5v0.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$1 = (function (js_obj){
return cider.nrepl.inlined.deps.suitable.v0v5v0.suitable.js_introspection.property_names_and_types.call(null,js_obj,null);
}));

(cider.nrepl.inlined.deps.suitable.v0v5v0.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$2 = (function (js_obj,prefix){
var seen = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
var iter__5523__auto__ = (function cider$nrepl$inlined$deps$suitable$v0v5v0$suitable$js_introspection$iter__19405(s__19406){
return (new cljs.core.LazySeq(null,(function (){
var s__19406__$1 = s__19406;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__19406__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var vec__19411 = cljs.core.first.call(null,xs__6360__auto__);
var i = cljs.core.nth.call(null,vec__19411,(0),null);
var map__19414 = cljs.core.nth.call(null,vec__19411,(1),null);
var map__19414__$1 = cljs.core.__destructure_map.call(null,map__19414);
var _obj = cljs.core.get.call(null,map__19414__$1,new cljs.core.Keyword(null,"_obj","_obj",-592966725));
var props = cljs.core.get.call(null,map__19414__$1,new cljs.core.Keyword(null,"props","props",453281727));
var iterys__5519__auto__ = ((function (s__19406__$1,vec__19411,i,map__19414,map__19414__$1,_obj,props,xs__6360__auto__,temp__5804__auto__,seen){
return (function cider$nrepl$inlined$deps$suitable$v0v5v0$suitable$js_introspection$iter__19405_$_iter__19407(s__19408){
return (new cljs.core.LazySeq(null,((function (s__19406__$1,vec__19411,i,map__19414,map__19414__$1,_obj,props,xs__6360__auto__,temp__5804__auto__,seen){
return (function (){
var s__19408__$1 = s__19408;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__19408__$1);
if(temp__5804__auto____$1){
var s__19408__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19408__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__19408__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__19410 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__19409 = (0);
while(true){
if((i__19409 < size__5522__auto__)){
var key = cljs.core._nth.call(null,c__5521__auto__,i__19409);
if(((cljs.core.not.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,seen),key))) && (((cljs.core.empty_QMARK_.call(null,prefix)) || (clojure.string.starts_with_QMARK_.call(null,key,prefix)))))){
cljs.core.chunk_append.call(null,b__19410,(function (){var prop = cider.nrepl.inlined.deps.suitable.v0v5v0.suitable.js_introspection.goog$module$goog$object.get.call(null,props,key);
cljs.core._vreset_BANG_.call(null,seen,cljs.core.conj.call(null,cljs.core._deref.call(null,seen),key));

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),key,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),i,new cljs.core.Keyword(null,"type","type",1174270348),(function (){try{var temp__5802__auto__ = (function (){var or__5045__auto__ = cider.nrepl.inlined.deps.suitable.v0v5v0.suitable.js_introspection.goog$module$goog$object.get.call(null,prop,"value");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.apply.call(null,cider.nrepl.inlined.deps.suitable.v0v5v0.suitable.js_introspection.goog$module$goog$object.get.call(null,prop,"get"),cljs.core.PersistentVector.EMPTY);
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var value = temp__5802__auto__;
if(cljs.core.fn_QMARK_.call(null,value)){
return "function";
} else {
return "var";
}
} else {
return "var";
}
}catch (e19415){if((e19415 instanceof Error)){
var _e = e19415;
return "var";
} else {
throw e19415;

}
}})()], null);
})());

var G__19418 = (i__19409 + (1));
i__19409 = G__19418;
continue;
} else {
var G__19419 = (i__19409 + (1));
i__19409 = G__19419;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19410),cider$nrepl$inlined$deps$suitable$v0v5v0$suitable$js_introspection$iter__19405_$_iter__19407.call(null,cljs.core.chunk_rest.call(null,s__19408__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19410),null);
}
} else {
var key = cljs.core.first.call(null,s__19408__$2);
if(((cljs.core.not.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,seen),key))) && (((cljs.core.empty_QMARK_.call(null,prefix)) || (clojure.string.starts_with_QMARK_.call(null,key,prefix)))))){
return cljs.core.cons.call(null,(function (){var prop = cider.nrepl.inlined.deps.suitable.v0v5v0.suitable.js_introspection.goog$module$goog$object.get.call(null,props,key);
cljs.core._vreset_BANG_.call(null,seen,cljs.core.conj.call(null,cljs.core._deref.call(null,seen),key));

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),key,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),i,new cljs.core.Keyword(null,"type","type",1174270348),(function (){try{var temp__5802__auto__ = (function (){var or__5045__auto__ = cider.nrepl.inlined.deps.suitable.v0v5v0.suitable.js_introspection.goog$module$goog$object.get.call(null,prop,"value");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.apply.call(null,cider.nrepl.inlined.deps.suitable.v0v5v0.suitable.js_introspection.goog$module$goog$object.get.call(null,prop,"get"),cljs.core.PersistentVector.EMPTY);
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var value = temp__5802__auto__;
if(cljs.core.fn_QMARK_.call(null,value)){
return "function";
} else {
return "var";
}
} else {
return "var";
}
}catch (e19416){if((e19416 instanceof Error)){
var _e = e19416;
return "var";
} else {
throw e19416;

}
}})()], null);
})(),cider$nrepl$inlined$deps$suitable$v0v5v0$suitable$js_introspection$iter__19405_$_iter__19407.call(null,cljs.core.rest.call(null,s__19408__$2)));
} else {
var G__19420 = cljs.core.rest.call(null,s__19408__$2);
s__19408__$1 = G__19420;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__19406__$1,vec__19411,i,map__19414,map__19414__$1,_obj,props,xs__6360__auto__,temp__5804__auto__,seen))
,null,null));
});})(s__19406__$1,vec__19411,i,map__19414,map__19414__$1,_obj,props,xs__6360__auto__,temp__5804__auto__,seen))
;
var fs__5520__auto__ = cljs.core.seq.call(null,iterys__5519__auto__.call(null,cljs.core.js_keys.call(null,props)));
if(fs__5520__auto__){
return cljs.core.concat.call(null,fs__5520__auto__,cider$nrepl$inlined$deps$suitable$v0v5v0$suitable$js_introspection$iter__19405.call(null,cljs.core.rest.call(null,s__19406__$1)));
} else {
var G__19421 = cljs.core.rest.call(null,s__19406__$1);
s__19406__$1 = G__19421;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cider.nrepl.inlined.deps.suitable.v0v5v0.suitable.js_introspection.properties_by_prototype.call(null,js_obj)));
}));

(cider.nrepl.inlined.deps.suitable.v0v5v0.suitable.js_introspection.property_names_and_types.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=js_introspection.js.map
