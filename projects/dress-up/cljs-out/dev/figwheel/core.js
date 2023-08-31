// Compiled by ClojureScript 1.11.60 {:target :nodejs, :nodejs-rt false, :optimizations :none}
goog.provide('figwheel.core');
goog.require('cljs.core');
goog.require('figwheel.tools.heads_up');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('goog.log');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('goog.debug.Console');
goog.require('goog.async.Deferred');
goog.require('goog.Promise');
goog.require('goog.events.EventTarget');
goog.require('goog.events.Event');
goog.require('goog.object');
goog.scope(function(){
figwheel.core.goog$module$goog$object = goog.module.get('goog.object');
});
figwheel.core.distinct_by = (function figwheel$core$distinct_by(f,coll){
var seen = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.filter.call(null,(function (p1__23180_SHARP_){
var k = f.call(null,p1__23180_SHARP_);
var res = cljs.core.not.call(null,cljs.core.deref.call(null,seen).call(null,k));
cljs.core._vreset_BANG_.call(null,seen,cljs.core.conj.call(null,cljs.core._deref.call(null,seen),k));

return res;
}),coll);
});
figwheel.core.map_keys = (function figwheel$core$map_keys(f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__23181){
var vec__23182 = p__23181;
var k = cljs.core.nth.call(null,vec__23182,(0),null);
var v = cljs.core.nth.call(null,vec__23182,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,k),v], null);
})),coll);
});
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (80);
figwheel.core.wrap_line = (function figwheel$core$wrap_line(text,size){
return cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,[".{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}\\s|.{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}"].join('')),[clojure.string.replace.call(null,text,/\n/," ")," "].join(''));
});
figwheel.core.cross_format = (function figwheel$core$cross_format(var_args){
var args__5775__auto__ = [];
var len__5769__auto___23186 = arguments.length;
var i__5770__auto___23187 = (0);
while(true){
if((i__5770__auto___23187 < len__5769__auto___23186)){
args__5775__auto__.push((arguments[i__5770__auto___23187]));

var G__23188 = (i__5770__auto___23187 + (1));
i__5770__auto___23187 = G__23188;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,goog.string.format,args);
}));

(figwheel.core.cross_format.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.core.cross_format.cljs$lang$applyTo = (function (seq23185){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23185));
}));

figwheel.core.pointer_message_lines = (function figwheel$core$pointer_message_lines(p__23191){
var map__23192 = p__23191;
var map__23192__$1 = cljs.core.__destructure_map.call(null,map__23192);
var message = cljs.core.get.call(null,map__23192__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var column = cljs.core.get.call(null,map__23192__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(((column + cljs.core.count.call(null,message)) > figwheel.core._STAR_inline_code_message_max_column_STAR_)){
return cljs.core.mapv.call(null,(function (p1__23190_SHARP_){
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23190_SHARP_], null)));
}),cljs.core.cons.call(null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s"].join('');
})(),"","^---"),cljs.core.map.call(null,(function (p1__23189_SHARP_){
return figwheel.core.cross_format.call(null,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core._STAR_inline_code_message_max_column_STAR_),"s"].join(''),p1__23189_SHARP_);
}),figwheel.core.wrap_line.call(null,message,(figwheel.core._STAR_inline_code_message_max_column_STAR_ - (10))))));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s %s"].join('');
})(),"","^---",message)], null)], null);
}
});
figwheel.core.inline_message_display_data = (function figwheel$core$inline_message_display_data(p__23194){
var map__23195 = p__23194;
var map__23195__$1 = cljs.core.__destructure_map.call(null,map__23195);
var message_data = map__23195__$1;
var message = cljs.core.get.call(null,map__23195__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var line = cljs.core.get.call(null,map__23195__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__23195__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var file_excerpt = cljs.core.get.call(null,map__23195__$1,new cljs.core.Keyword(null,"file-excerpt","file-excerpt",-1132330744));
if(cljs.core.truth_(file_excerpt)){
var map__23196 = file_excerpt;
var map__23196__$1 = cljs.core.__destructure_map.call(null,map__23196);
var start_line = cljs.core.get.call(null,map__23196__$1,new cljs.core.Keyword(null,"start-line","start-line",-41746654));
var path = cljs.core.get.call(null,map__23196__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var excerpt = cljs.core.get.call(null,map__23196__$1,new cljs.core.Keyword(null,"excerpt","excerpt",219850763));
var lines = cljs.core.map_indexed.call(null,(function (i,l){
var ln = (i + start_line);
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[((cljs.core._EQ_.call(null,line,ln))?new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357):new cljs.core.Keyword(null,"code-line","code-line",-2138627853)),ln,l],null));
}),clojure.string.split_lines.call(null,excerpt));
var vec__23197 = cljs.core.split_with.call(null,(function (p1__23193_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),cljs.core.first.call(null,p1__23193_SHARP_));
}),lines);
var begin = cljs.core.nth.call(null,vec__23197,(0),null);
var end = cljs.core.nth.call(null,vec__23197,(1),null);
return cljs.core.concat.call(null,cljs.core.take_last.call(null,(5),begin),cljs.core.take.call(null,(1),end),figwheel.core.pointer_message_lines.call(null,message_data),cljs.core.take.call(null,(5),cljs.core.rest.call(null,end)));
} else {
return null;
}
});
figwheel.core.file_line_column = (function figwheel$core$file_line_column(p__23200){
var map__23201 = p__23200;
var map__23201__$1 = cljs.core.__destructure_map.call(null,map__23201);
var file = cljs.core.get.call(null,map__23201__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__23201__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__23201__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__23202 = "";
var G__23202__$1 = (cljs.core.truth_(file)?[G__23202,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__23202);
var G__23202__$2 = (cljs.core.truth_(line)?[G__23202__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__23202__$1);
if(cljs.core.truth_((function (){var and__5043__auto__ = line;
if(cljs.core.truth_(and__5043__auto__)){
return column;
} else {
return and__5043__auto__;
}
})())){
return [G__23202__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__23202__$2;
}
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.logger !== 'undefined')){
} else {
figwheel.core.logger = goog.log.getLogger.call(null,"Figwheel");
}

figwheel.core.glog_info = (function figwheel$core$glog_info(log,msg){
return goog.log.info.call(null,log,msg);
});

figwheel.core.glog_warning = (function figwheel$core$glog_warning(log,msg){
return goog.log.warning.call(null,log,msg);
});

figwheel.core.glog_error = (function figwheel$core$glog_error(log,msg){
return goog.log.error.call(null,log,msg);
});

figwheel.core.console_logging = (function figwheel$core$console_logging(){
if(cljs.core.truth_(figwheel.core.goog$module$goog$object.get.call(null,goog.debug.Console,"instance"))){
} else {
var c_23260 = (new goog.debug.Console());
var G__23209_23261 = c_23260.getFormatter();
figwheel.core.goog$module$goog$object.set.call(null,G__23209_23261,"showAbsoluteTime",false);

figwheel.core.goog$module$goog$object.set.call(null,G__23209_23261,"showRelativeTime",false);


figwheel.core.goog$module$goog$object.set.call(null,goog.debug.Console,"instance",c_23260);

}

var temp__5804__auto__ = figwheel.core.goog$module$goog$object.get.call(null,goog.debug.Console,"instance");
if(cljs.core.truth_(temp__5804__auto__)){
var console_instance = temp__5804__auto__;
console_instance.setCapturing(true);

return true;
} else {
return null;
}
});
goog.exportSymbol('figwheel.core.console_logging', figwheel.core.console_logging);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.log_console !== 'undefined')){
} else {
figwheel.core.log_console = figwheel.core.console_logging.call(null);
}

figwheel.core.event_target = (((typeof document !== 'undefined'))?document:(new goog.events.EventTarget()));
goog.exportSymbol('figwheel.core.event_target', figwheel.core.event_target);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.listener_key_map !== 'undefined')){
} else {
figwheel.core.listener_key_map = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}

figwheel.core.unlisten = (function figwheel$core$unlisten(ky,event_name){
var temp__5804__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.core.listener_key_map),ky);
if(cljs.core.truth_(temp__5804__auto__)){
var f = temp__5804__auto__;
return figwheel.core.event_target.removeEventListener(cljs.core.name.call(null,event_name),f);
} else {
return null;
}
});

figwheel.core.listen = (function figwheel$core$listen(ky,event_name,f){
figwheel.core.unlisten.call(null,ky,event_name);

figwheel.core.event_target.addEventListener(cljs.core.name.call(null,event_name),f);

return cljs.core.swap_BANG_.call(null,figwheel.core.listener_key_map,cljs.core.assoc,ky,f);
});

figwheel.core.dispatch_event = (function figwheel$core$dispatch_event(event_name,data){
return figwheel.core.event_target.dispatchEvent((function (){var G__23210 = (((figwheel.core.event_target instanceof goog.events.EventTarget))?(new goog.events.Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)):(new Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)));
figwheel.core.goog$module$goog$object.add.call(null,G__23210,"data",(function (){var or__5045__auto__ = data;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

return G__23210;
})());
});

figwheel.core.event_data = (function figwheel$core$event_data(e){
return figwheel.core.goog$module$goog$object.get.call(null,(function (){var temp__5802__auto__ = e.event_;
if(cljs.core.truth_(temp__5802__auto__)){
var e__$1 = temp__5802__auto__;
return e__$1;
} else {
return e;
}
})(),"data");
});


/**
 * @define {boolean}
 */
figwheel.core.load_warninged_code = goog.define("figwheel.core.load_warninged_code",false);


/**
 * @define {boolean}
 */
figwheel.core.heads_up_display = goog.define("figwheel.core.heads_up_display",true);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.state !== 'undefined')){
} else {
figwheel.core.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY], null));
}

figwheel.core.heads_up_display_QMARK_ = (function figwheel$core$heads_up_display_QMARK_(){
var and__5043__auto__ = figwheel.core.heads_up_display;
if(cljs.core.truth_(and__5043__auto__)){
return (!((goog.global.document == null)));
} else {
return and__5043__auto__;
}
});

var last_reload_timestamp_23262 = cljs.core.atom.call(null,(0));
var promise_chain_23263 = (new goog.Promise((function (r,_){
return r.call(null,true);
})));
figwheel.core.render_watcher = (function figwheel$core$render_watcher(_,___$1,o,n){
if(cljs.core.truth_(figwheel.core.heads_up_display_QMARK_.call(null))){
var temp__5802__auto__ = (function (){var temp__5804__auto__ = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null));
if(cljs.core.truth_(temp__5804__auto__)){
var ts = temp__5804__auto__;
var and__5043__auto__ = (cljs.core.deref.call(null,last_reload_timestamp_23262) < ts);
if(and__5043__auto__){
return ts;
} else {
return and__5043__auto__;
}
} else {
return null;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var ts = temp__5802__auto__;
var warnings = cljs.core.not_empty.call(null,cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
var exception = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null));
cljs.core.reset_BANG_.call(null,last_reload_timestamp_23262,ts);

if(cljs.core.truth_(warnings)){
return promise_chain_23263.then((function (){
var warn = cljs.core.first.call(null,warnings);
var _STAR_inline_code_message_max_column_STAR__orig_val__23211 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__23212 = (132);
(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__23212);

try{return figwheel.tools.heads_up.display_warning.call(null,cljs.core.assoc.call(null,warn,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,warn))).then((function (){
var seq__23213 = cljs.core.seq.call(null,cljs.core.rest.call(null,warnings));
var chunk__23214 = null;
var count__23215 = (0);
var i__23216 = (0);
while(true){
if((i__23216 < count__23215)){
var w = cljs.core._nth.call(null,chunk__23214,i__23216);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__23264 = seq__23213;
var G__23265 = chunk__23214;
var G__23266 = count__23215;
var G__23267 = (i__23216 + (1));
seq__23213 = G__23264;
chunk__23214 = G__23265;
count__23215 = G__23266;
i__23216 = G__23267;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__23213);
if(temp__5804__auto__){
var seq__23213__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23213__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__23213__$1);
var G__23268 = cljs.core.chunk_rest.call(null,seq__23213__$1);
var G__23269 = c__5568__auto__;
var G__23270 = cljs.core.count.call(null,c__5568__auto__);
var G__23271 = (0);
seq__23213 = G__23268;
chunk__23214 = G__23269;
count__23215 = G__23270;
i__23216 = G__23271;
continue;
} else {
var w = cljs.core.first.call(null,seq__23213__$1);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__23272 = cljs.core.next.call(null,seq__23213__$1);
var G__23273 = null;
var G__23274 = (0);
var G__23275 = (0);
seq__23213 = G__23272;
chunk__23214 = G__23273;
count__23215 = G__23274;
i__23216 = G__23275;
continue;
}
} else {
return null;
}
}
break;
}
}));
}finally {(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__23211);
}}));
} else {
if(cljs.core.truth_(exception)){
return promise_chain_23263.then((function (){
var _STAR_inline_code_message_max_column_STAR__orig_val__23217 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__23218 = (132);
(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__23218);

try{return figwheel.tools.heads_up.display_exception.call(null,cljs.core.assoc.call(null,exception,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,exception)));
}finally {(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__23217);
}}));
} else {
return promise_chain_23263.then((function (){
return figwheel.tools.heads_up.flash_loaded.call(null);
}));

}
}
} else {
return null;
}
} else {
return null;
}
});

cljs.core.add_watch.call(null,figwheel.core.state,new cljs.core.Keyword("figwheel.core","render-watcher","figwheel.core/render-watcher",2046135910),figwheel.core.render_watcher);

figwheel.core.immutable_ns_QMARK_ = (function figwheel$core$immutable_ns_QMARK_(ns){
var ns__$1 = cljs.core.name.call(null,ns);
var or__5045__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["cljs.nodejs",null,"goog",null,"figwheel.connect",null,"cljs.core",null,"figwheel.preload",null], null), null).call(null,ns__$1);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return ((goog.string.startsWith("clojure.",ns__$1)) || (goog.string.startsWith("goog.",ns__$1)));
}
});

figwheel.core.ns_exists_QMARK_ = (function figwheel$core$ns_exists_QMARK_(ns){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,figwheel.core.goog$module$goog$object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,ns),".")) == null)));
});

figwheel.core.reload_ns_QMARK_ = (function figwheel$core$reload_ns_QMARK_(namespace){
var meta_data = cljs.core.meta.call(null,namespace);
var and__5043__auto__ = cljs.core.not.call(null,figwheel.core.immutable_ns_QMARK_.call(null,namespace));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data));
if(and__5043__auto____$1){
var or__5045__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return figwheel.core.ns_exists_QMARK_.call(null,namespace);
}
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
});

figwheel.core.call_hooks = (function figwheel$core$call_hooks(var_args){
var args__5775__auto__ = [];
var len__5769__auto___23276 = arguments.length;
var i__5770__auto___23277 = (0);
while(true){
if((i__5770__auto___23277 < len__5769__auto___23276)){
args__5775__auto__.push((arguments[i__5770__auto___23277]));

var G__23278 = (i__5770__auto___23277 + (1));
i__5770__auto___23277 = G__23278;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic = (function (hook_key,args){
var hooks = cljs.core.keep.call(null,(function (p__23221){
var vec__23222 = p__23221;
var n = cljs.core.nth.call(null,vec__23222,(0),null);
var mdata = cljs.core.nth.call(null,vec__23222,(1),null);
var temp__5804__auto__ = cljs.core.get_in.call(null,mdata,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),hook_key], null));
if(cljs.core.truth_(temp__5804__auto__)){
var f = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,f], null);
} else {
return null;
}
}),new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,figwheel.core.state)));
var seq__23225 = cljs.core.seq.call(null,hooks);
var chunk__23226 = null;
var count__23227 = (0);
var i__23228 = (0);
while(true){
if((i__23228 < count__23227)){
var vec__23237 = cljs.core._nth.call(null,chunk__23226,i__23228);
var n = cljs.core.nth.call(null,vec__23237,(0),null);
var f = cljs.core.nth.call(null,vec__23237,(1),null);
var temp__5802__auto___23279 = cljs.core.reduce.call(null,((function (seq__23225,chunk__23226,count__23227,i__23228,vec__23237,n,f,hooks){
return (function (p1__23203_SHARP_,p2__23204_SHARP_){
if(cljs.core.truth_(p1__23203_SHARP_)){
return figwheel.core.goog$module$goog$object.get.call(null,p1__23203_SHARP_,p2__23204_SHARP_);
} else {
return null;
}
});})(seq__23225,chunk__23226,count__23227,i__23228,vec__23237,n,f,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5802__auto___23279)){
var hook_23280 = temp__5802__auto___23279;
figwheel.core.glog_info.call(null,figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

try{cljs.core.apply.call(null,hook_23280,args);
}catch (e23240){if((e23240 instanceof Error)){
var e_23281 = e23240;
figwheel.core.glog_error.call(null,figwheel.core.logger,e_23281);
} else {
throw e23240;

}
}} else {
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__23282 = seq__23225;
var G__23283 = chunk__23226;
var G__23284 = count__23227;
var G__23285 = (i__23228 + (1));
seq__23225 = G__23282;
chunk__23226 = G__23283;
count__23227 = G__23284;
i__23228 = G__23285;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__23225);
if(temp__5804__auto__){
var seq__23225__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23225__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__23225__$1);
var G__23286 = cljs.core.chunk_rest.call(null,seq__23225__$1);
var G__23287 = c__5568__auto__;
var G__23288 = cljs.core.count.call(null,c__5568__auto__);
var G__23289 = (0);
seq__23225 = G__23286;
chunk__23226 = G__23287;
count__23227 = G__23288;
i__23228 = G__23289;
continue;
} else {
var vec__23241 = cljs.core.first.call(null,seq__23225__$1);
var n = cljs.core.nth.call(null,vec__23241,(0),null);
var f = cljs.core.nth.call(null,vec__23241,(1),null);
var temp__5802__auto___23290 = cljs.core.reduce.call(null,((function (seq__23225,chunk__23226,count__23227,i__23228,vec__23241,n,f,seq__23225__$1,temp__5804__auto__,hooks){
return (function (p1__23203_SHARP_,p2__23204_SHARP_){
if(cljs.core.truth_(p1__23203_SHARP_)){
return figwheel.core.goog$module$goog$object.get.call(null,p1__23203_SHARP_,p2__23204_SHARP_);
} else {
return null;
}
});})(seq__23225,chunk__23226,count__23227,i__23228,vec__23241,n,f,seq__23225__$1,temp__5804__auto__,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5802__auto___23290)){
var hook_23291 = temp__5802__auto___23290;
figwheel.core.glog_info.call(null,figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

try{cljs.core.apply.call(null,hook_23291,args);
}catch (e23244){if((e23244 instanceof Error)){
var e_23292 = e23244;
figwheel.core.glog_error.call(null,figwheel.core.logger,e_23292);
} else {
throw e23244;

}
}} else {
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__23293 = cljs.core.next.call(null,seq__23225__$1);
var G__23294 = null;
var G__23295 = (0);
var G__23296 = (0);
seq__23225 = G__23293;
chunk__23226 = G__23294;
count__23227 = G__23295;
i__23228 = G__23296;
continue;
}
} else {
return null;
}
}
break;
}
}));

(figwheel.core.call_hooks.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(figwheel.core.call_hooks.cljs$lang$applyTo = (function (seq23219){
var G__23220 = cljs.core.first.call(null,seq23219);
var seq23219__$1 = cljs.core.next.call(null,seq23219);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23220,seq23219__$1);
}));


figwheel.core.reload_namespaces = (function figwheel$core$reload_namespaces(namespaces,figwheel_meta){
var figwheel_meta__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__23245){
var vec__23246 = p__23245;
var k = cljs.core.nth.call(null,vec__23246,(0),null);
var v = cljs.core.nth.call(null,vec__23246,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null);
})),cljs.core.js__GT_clj.call(null,figwheel_meta,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
var namespaces__$1 = cljs.core.map.call(null,(function (p1__23205_SHARP_){
return cljs.core.with_meta.call(null,cljs.core.symbol.call(null,p1__23205_SHARP_),cljs.core.get.call(null,figwheel_meta__$1,p1__23205_SHARP_));
}),namespaces);
cljs.core.swap_BANG_.call(null,figwheel.core.state,(function (p1__23206_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,p1__23206_SHARP_,new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885),figwheel_meta__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime());
}));

var to_reload = (cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.not.call(null,figwheel.core.load_warninged_code);
if(and__5043__auto__){
return cljs.core.not_empty.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
} else {
return and__5043__auto__;
}
})())?null:cljs.core.filter.call(null,(function (p1__23207_SHARP_){
return figwheel.core.reload_ns_QMARK_.call(null,p1__23207_SHARP_);
}),namespaces__$1));
if(cljs.core.empty_QMARK_.call(null,to_reload)){
} else {
figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"before-load","before-load",-2060117064),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));

setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.before-load","figwheel.before-load",58978771),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));
}),(0));
}

var seq__23249_23297 = cljs.core.seq.call(null,to_reload);
var chunk__23250_23298 = null;
var count__23251_23299 = (0);
var i__23252_23300 = (0);
while(true){
if((i__23252_23300 < count__23251_23299)){
var ns_23301 = cljs.core._nth.call(null,chunk__23250_23298,i__23252_23300);
goog.require(cljs.core.name.call(null,ns_23301),true);


var G__23302 = seq__23249_23297;
var G__23303 = chunk__23250_23298;
var G__23304 = count__23251_23299;
var G__23305 = (i__23252_23300 + (1));
seq__23249_23297 = G__23302;
chunk__23250_23298 = G__23303;
count__23251_23299 = G__23304;
i__23252_23300 = G__23305;
continue;
} else {
var temp__5804__auto___23306 = cljs.core.seq.call(null,seq__23249_23297);
if(temp__5804__auto___23306){
var seq__23249_23307__$1 = temp__5804__auto___23306;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23249_23307__$1)){
var c__5568__auto___23308 = cljs.core.chunk_first.call(null,seq__23249_23307__$1);
var G__23309 = cljs.core.chunk_rest.call(null,seq__23249_23307__$1);
var G__23310 = c__5568__auto___23308;
var G__23311 = cljs.core.count.call(null,c__5568__auto___23308);
var G__23312 = (0);
seq__23249_23297 = G__23309;
chunk__23250_23298 = G__23310;
count__23251_23299 = G__23311;
i__23252_23300 = G__23312;
continue;
} else {
var ns_23313 = cljs.core.first.call(null,seq__23249_23307__$1);
goog.require(cljs.core.name.call(null,ns_23313),true);


var G__23314 = cljs.core.next.call(null,seq__23249_23307__$1);
var G__23315 = null;
var G__23316 = (0);
var G__23317 = (0);
seq__23249_23297 = G__23314;
chunk__23250_23298 = G__23315;
count__23251_23299 = G__23316;
i__23252_23300 = G__23317;
continue;
}
} else {
}
}
break;
}

var after_reload_fn_23318 = (function (){
try{if(cljs.core.truth_(cljs.core.not_empty.call(null,to_reload))){
figwheel.core.glog_info.call(null,figwheel.core.logger,["loaded ",cljs.core.pr_str.call(null,to_reload)].join(''));

figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"after-load","after-load",-1278503285),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));

figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.after-load","figwheel.after-load",-1913099389),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));
} else {
}

var temp__5804__auto__ = cljs.core.not_empty.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.set.call(null,to_reload)),namespaces__$1));
if(cljs.core.truth_(temp__5804__auto__)){
var not_loaded = temp__5804__auto__;
return figwheel.core.glog_info.call(null,figwheel.core.logger,["did not load ",cljs.core.pr_str.call(null,not_loaded)].join(''));
} else {
return null;
}
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc,new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY);
}});
if((((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined')) && ((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.after_reloads !== 'undefined')))){
figwheel.repl.after_reloads(after_reload_fn_23318);
} else {
setTimeout(after_reload_fn_23318,(100));
}

return null;
});
goog.exportSymbol('figwheel.core.reload_namespaces', figwheel.core.reload_namespaces);

figwheel.core.compile_warnings = (function figwheel$core$compile_warnings(warnings){
if(cljs.core.empty_QMARK_.call(null,warnings)){
} else {
setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-warnings","figwheel.compile-warnings",-2015032448),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"warnings","warnings",-735437651),warnings], null));
}),(0));
}

cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null),cljs.core.concat,warnings);

var seq__23253 = cljs.core.seq.call(null,warnings);
var chunk__23254 = null;
var count__23255 = (0);
var i__23256 = (0);
while(true){
if((i__23256 < count__23255)){
var warning = cljs.core._nth.call(null,chunk__23254,i__23256);
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__23319 = seq__23253;
var G__23320 = chunk__23254;
var G__23321 = count__23255;
var G__23322 = (i__23256 + (1));
seq__23253 = G__23319;
chunk__23254 = G__23320;
count__23255 = G__23321;
i__23256 = G__23322;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__23253);
if(temp__5804__auto__){
var seq__23253__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23253__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__23253__$1);
var G__23323 = cljs.core.chunk_rest.call(null,seq__23253__$1);
var G__23324 = c__5568__auto__;
var G__23325 = cljs.core.count.call(null,c__5568__auto__);
var G__23326 = (0);
seq__23253 = G__23323;
chunk__23254 = G__23324;
count__23255 = G__23325;
i__23256 = G__23326;
continue;
} else {
var warning = cljs.core.first.call(null,seq__23253__$1);
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__23327 = cljs.core.next.call(null,seq__23253__$1);
var G__23328 = null;
var G__23329 = (0);
var G__23330 = (0);
seq__23253 = G__23327;
chunk__23254 = G__23328;
count__23255 = G__23329;
i__23256 = G__23330;
continue;
}
} else {
return null;
}
}
break;
}
});
goog.exportSymbol('figwheel.core.compile_warnings', figwheel.core.compile_warnings);

figwheel.core.compile_warnings_remote = (function figwheel$core$compile_warnings_remote(warnings_json){
return figwheel.core.compile_warnings.call(null,cljs.core.js__GT_clj.call(null,warnings_json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.compile_warnings_remote', figwheel.core.compile_warnings_remote);

figwheel.core.handle_exception = (function figwheel$core$handle_exception(p__23257){
var map__23258 = p__23257;
var map__23258__$1 = cljs.core.__destructure_map.call(null,map__23258);
var exception_data = map__23258__$1;
var file = cljs.core.get.call(null,map__23258__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var type = cljs.core.get.call(null,map__23258__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__23258__$1,new cljs.core.Keyword(null,"message","message",-406056002));
try{setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-exception","figwheel.compile-exception",1092880746),exception_data);
}),(0));

cljs.core.swap_BANG_.call(null,figwheel.core.state,(function (p1__23208_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,p1__23208_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),exception_data);
}));

return figwheel.core.glog_warning.call(null,figwheel.core.logger,(function (){var G__23259 = "Compile Exception - ";
var G__23259__$1 = (cljs.core.truth_((function (){var or__5045__auto__ = type;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return message;
}
})())?[G__23259,clojure.string.join.call(null," : ",cljs.core.filter.call(null,cljs.core.some_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,message], null)))].join(''):G__23259);
if(cljs.core.truth_(file)){
return [G__23259__$1," in ",figwheel.core.file_line_column.call(null,exception_data)].join('');
} else {
return G__23259__$1;
}
})());
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715)], null),cljs.core.PersistentArrayMap.EMPTY);
}});
goog.exportSymbol('figwheel.core.handle_exception', figwheel.core.handle_exception);

figwheel.core.handle_exception_remote = (function figwheel$core$handle_exception_remote(exception_data){
return figwheel.core.handle_exception.call(null,cljs.core.js__GT_clj.call(null,exception_data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.handle_exception_remote', figwheel.core.handle_exception_remote);

//# sourceMappingURL=core.js.map
