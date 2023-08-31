// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.object');
goog.scope(function(){
cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection.goog$module$goog$object = goog.module.get('goog.object');
});
cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection.own_property_descriptors = (cljs.core.truth_("getOwnPropertyDescriptors" in Object)?(function (obj){
return Object.getOwnPropertyDescriptors(obj);
}):(function (obj){
return cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (key){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,Object.getOwnPropertyDescriptor(obj,key)], null);
}),Object.getOwnPropertyNames(obj))));
}));
/**
 * 
 */
cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection.properties_by_prototype = (function cider$nrepl$inlined$deps$suitable$v0v4v1$suitable$js_introspection$properties_by_prototype(obj){
var obj__$1 = obj;
var protos = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(obj__$1)){
var G__19102 = Object.getPrototypeOf(obj__$1);
var G__19103 = cljs.core.conj.call(null,protos,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"props","props",453281727),cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection.own_property_descriptors.call(null,obj__$1)], null));
obj__$1 = G__19102;
protos = G__19103;
continue;
} else {
return protos;
}
break;
}
});
cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection.property_names_and_types = (function cider$nrepl$inlined$deps$suitable$v0v4v1$suitable$js_introspection$property_names_and_types(var_args){
var G__19105 = arguments.length;
switch (G__19105) {
case 1:
return cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$1 = (function (js_obj){
return cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection.property_names_and_types.call(null,js_obj,null);
}));

(cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$2 = (function (js_obj,prefix){
var seen = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
var iter__5523__auto__ = (function cider$nrepl$inlined$deps$suitable$v0v4v1$suitable$js_introspection$iter__19106(s__19107){
return (new cljs.core.LazySeq(null,(function (){
var s__19107__$1 = s__19107;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__19107__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var vec__19112 = cljs.core.first.call(null,xs__6360__auto__);
var i = cljs.core.nth.call(null,vec__19112,(0),null);
var map__19115 = cljs.core.nth.call(null,vec__19112,(1),null);
var map__19115__$1 = cljs.core.__destructure_map.call(null,map__19115);
var _obj = cljs.core.get.call(null,map__19115__$1,new cljs.core.Keyword(null,"_obj","_obj",-592966725));
var props = cljs.core.get.call(null,map__19115__$1,new cljs.core.Keyword(null,"props","props",453281727));
var iterys__5519__auto__ = ((function (s__19107__$1,vec__19112,i,map__19115,map__19115__$1,_obj,props,xs__6360__auto__,temp__5804__auto__,seen){
return (function cider$nrepl$inlined$deps$suitable$v0v4v1$suitable$js_introspection$iter__19106_$_iter__19108(s__19109){
return (new cljs.core.LazySeq(null,((function (s__19107__$1,vec__19112,i,map__19115,map__19115__$1,_obj,props,xs__6360__auto__,temp__5804__auto__,seen){
return (function (){
var s__19109__$1 = s__19109;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__19109__$1);
if(temp__5804__auto____$1){
var s__19109__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19109__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__19109__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__19111 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__19110 = (0);
while(true){
if((i__19110 < size__5522__auto__)){
var key = cljs.core._nth.call(null,c__5521__auto__,i__19110);
if(((cljs.core.not.call(null,cljs.core.get.call(null,seen,key))) && (((cljs.core.empty_QMARK_.call(null,prefix)) || (clojure.string.starts_with_QMARK_.call(null,key,prefix)))))){
cljs.core.chunk_append.call(null,b__19111,(function (){var prop = cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection.goog$module$goog$object.get.call(null,props,key);
cljs.core.conj_BANG_.call(null,seen,key);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),key,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),i,new cljs.core.Keyword(null,"type","type",1174270348),(function (){try{var temp__5802__auto__ = (function (){var or__5045__auto__ = cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection.goog$module$goog$object.get.call(null,prop,"value");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.apply.call(null,cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection.goog$module$goog$object.get.call(null,prop,"get"),cljs.core.PersistentVector.EMPTY);
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
}catch (e19116){if((e19116 instanceof Error)){
var _e = e19116;
return "var";
} else {
throw e19116;

}
}})()], null);
})());

var G__19119 = (i__19110 + (1));
i__19110 = G__19119;
continue;
} else {
var G__19120 = (i__19110 + (1));
i__19110 = G__19120;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19111),cider$nrepl$inlined$deps$suitable$v0v4v1$suitable$js_introspection$iter__19106_$_iter__19108.call(null,cljs.core.chunk_rest.call(null,s__19109__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19111),null);
}
} else {
var key = cljs.core.first.call(null,s__19109__$2);
if(((cljs.core.not.call(null,cljs.core.get.call(null,seen,key))) && (((cljs.core.empty_QMARK_.call(null,prefix)) || (clojure.string.starts_with_QMARK_.call(null,key,prefix)))))){
return cljs.core.cons.call(null,(function (){var prop = cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection.goog$module$goog$object.get.call(null,props,key);
cljs.core.conj_BANG_.call(null,seen,key);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),key,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),i,new cljs.core.Keyword(null,"type","type",1174270348),(function (){try{var temp__5802__auto__ = (function (){var or__5045__auto__ = cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection.goog$module$goog$object.get.call(null,prop,"value");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.apply.call(null,cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection.goog$module$goog$object.get.call(null,prop,"get"),cljs.core.PersistentVector.EMPTY);
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
}catch (e19117){if((e19117 instanceof Error)){
var _e = e19117;
return "var";
} else {
throw e19117;

}
}})()], null);
})(),cider$nrepl$inlined$deps$suitable$v0v4v1$suitable$js_introspection$iter__19106_$_iter__19108.call(null,cljs.core.rest.call(null,s__19109__$2)));
} else {
var G__19121 = cljs.core.rest.call(null,s__19109__$2);
s__19109__$1 = G__19121;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__19107__$1,vec__19112,i,map__19115,map__19115__$1,_obj,props,xs__6360__auto__,temp__5804__auto__,seen))
,null,null));
});})(s__19107__$1,vec__19112,i,map__19115,map__19115__$1,_obj,props,xs__6360__auto__,temp__5804__auto__,seen))
;
var fs__5520__auto__ = cljs.core.seq.call(null,iterys__5519__auto__.call(null,cljs.core.js_keys.call(null,props)));
if(fs__5520__auto__){
return cljs.core.concat.call(null,fs__5520__auto__,cider$nrepl$inlined$deps$suitable$v0v4v1$suitable$js_introspection$iter__19106.call(null,cljs.core.rest.call(null,s__19107__$1)));
} else {
var G__19122 = cljs.core.rest.call(null,s__19107__$1);
s__19107__$1 = G__19122;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection.properties_by_prototype.call(null,js_obj)));
}));

(cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection.property_names_and_types.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=js_introspection.js.map
