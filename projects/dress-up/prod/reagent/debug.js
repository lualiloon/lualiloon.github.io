// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__10067__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__10067 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10068__i = 0, G__10068__a = new Array(arguments.length -  0);
while (G__10068__i < G__10068__a.length) {G__10068__a[G__10068__i] = arguments[G__10068__i + 0]; ++G__10068__i;}
  args = new cljs.core.IndexedSeq(G__10068__a,0,null);
} 
return G__10067__delegate.call(this,args);};
G__10067.cljs$lang$maxFixedArity = 0;
G__10067.cljs$lang$applyTo = (function (arglist__10069){
var args = cljs.core.seq(arglist__10069);
return G__10067__delegate(args);
});
G__10067.cljs$core$IFn$_invoke$arity$variadic = G__10067__delegate;
return G__10067;
})()
);

(o.error = (function() { 
var G__10070__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__10070 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10071__i = 0, G__10071__a = new Array(arguments.length -  0);
while (G__10071__i < G__10071__a.length) {G__10071__a[G__10071__i] = arguments[G__10071__i + 0]; ++G__10071__i;}
  args = new cljs.core.IndexedSeq(G__10071__a,0,null);
} 
return G__10070__delegate.call(this,args);};
G__10070.cljs$lang$maxFixedArity = 0;
G__10070.cljs$lang$applyTo = (function (arglist__10072){
var args = cljs.core.seq(arglist__10072);
return G__10070__delegate(args);
});
G__10070.cljs$core$IFn$_invoke$arity$variadic = G__10070__delegate;
return G__10070;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});
