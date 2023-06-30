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
var G__12856__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__12856 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12857__i = 0, G__12857__a = new Array(arguments.length -  0);
while (G__12857__i < G__12857__a.length) {G__12857__a[G__12857__i] = arguments[G__12857__i + 0]; ++G__12857__i;}
  args = new cljs.core.IndexedSeq(G__12857__a,0,null);
} 
return G__12856__delegate.call(this,args);};
G__12856.cljs$lang$maxFixedArity = 0;
G__12856.cljs$lang$applyTo = (function (arglist__12858){
var args = cljs.core.seq(arglist__12858);
return G__12856__delegate(args);
});
G__12856.cljs$core$IFn$_invoke$arity$variadic = G__12856__delegate;
return G__12856;
})()
);

(o.error = (function() { 
var G__12859__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__12859 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12860__i = 0, G__12860__a = new Array(arguments.length -  0);
while (G__12860__i < G__12860__a.length) {G__12860__a[G__12860__i] = arguments[G__12860__i + 0]; ++G__12860__i;}
  args = new cljs.core.IndexedSeq(G__12860__a,0,null);
} 
return G__12859__delegate.call(this,args);};
G__12859.cljs$lang$maxFixedArity = 0;
G__12859.cljs$lang$applyTo = (function (arglist__12861){
var args = cljs.core.seq(arglist__12861);
return G__12859__delegate(args);
});
G__12859.cljs$core$IFn$_invoke$arity$variadic = G__12859__delegate;
return G__12859;
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
