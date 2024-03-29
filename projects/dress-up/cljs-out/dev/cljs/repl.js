// Compiled by ClojureScript 1.11.60 {:target :nodejs, :nodejs-rt false, :optimizations :none}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__10500){
var map__10501 = p__10500;
var map__10501__$1 = cljs.core.__destructure_map.call(null,map__10501);
var m = map__10501__$1;
var n = cljs.core.get.call(null,map__10501__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__10501__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__10502_10530 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__10503_10531 = null;
var count__10504_10532 = (0);
var i__10505_10533 = (0);
while(true){
if((i__10505_10533 < count__10504_10532)){
var f_10534 = cljs.core._nth.call(null,chunk__10503_10531,i__10505_10533);
cljs.core.println.call(null,"  ",f_10534);


var G__10535 = seq__10502_10530;
var G__10536 = chunk__10503_10531;
var G__10537 = count__10504_10532;
var G__10538 = (i__10505_10533 + (1));
seq__10502_10530 = G__10535;
chunk__10503_10531 = G__10536;
count__10504_10532 = G__10537;
i__10505_10533 = G__10538;
continue;
} else {
var temp__5804__auto___10539 = cljs.core.seq.call(null,seq__10502_10530);
if(temp__5804__auto___10539){
var seq__10502_10540__$1 = temp__5804__auto___10539;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10502_10540__$1)){
var c__5568__auto___10541 = cljs.core.chunk_first.call(null,seq__10502_10540__$1);
var G__10542 = cljs.core.chunk_rest.call(null,seq__10502_10540__$1);
var G__10543 = c__5568__auto___10541;
var G__10544 = cljs.core.count.call(null,c__5568__auto___10541);
var G__10545 = (0);
seq__10502_10530 = G__10542;
chunk__10503_10531 = G__10543;
count__10504_10532 = G__10544;
i__10505_10533 = G__10545;
continue;
} else {
var f_10546 = cljs.core.first.call(null,seq__10502_10540__$1);
cljs.core.println.call(null,"  ",f_10546);


var G__10547 = cljs.core.next.call(null,seq__10502_10540__$1);
var G__10548 = null;
var G__10549 = (0);
var G__10550 = (0);
seq__10502_10530 = G__10547;
chunk__10503_10531 = G__10548;
count__10504_10532 = G__10549;
i__10505_10533 = G__10550;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_10551 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_10551);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_10551)))?cljs.core.second.call(null,arglists_10551):arglists_10551));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__10506_10552 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__10507_10553 = null;
var count__10508_10554 = (0);
var i__10509_10555 = (0);
while(true){
if((i__10509_10555 < count__10508_10554)){
var vec__10518_10556 = cljs.core._nth.call(null,chunk__10507_10553,i__10509_10555);
var name_10557 = cljs.core.nth.call(null,vec__10518_10556,(0),null);
var map__10521_10558 = cljs.core.nth.call(null,vec__10518_10556,(1),null);
var map__10521_10559__$1 = cljs.core.__destructure_map.call(null,map__10521_10558);
var doc_10560 = cljs.core.get.call(null,map__10521_10559__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_10561 = cljs.core.get.call(null,map__10521_10559__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_10557);

cljs.core.println.call(null," ",arglists_10561);

if(cljs.core.truth_(doc_10560)){
cljs.core.println.call(null," ",doc_10560);
} else {
}


var G__10562 = seq__10506_10552;
var G__10563 = chunk__10507_10553;
var G__10564 = count__10508_10554;
var G__10565 = (i__10509_10555 + (1));
seq__10506_10552 = G__10562;
chunk__10507_10553 = G__10563;
count__10508_10554 = G__10564;
i__10509_10555 = G__10565;
continue;
} else {
var temp__5804__auto___10566 = cljs.core.seq.call(null,seq__10506_10552);
if(temp__5804__auto___10566){
var seq__10506_10567__$1 = temp__5804__auto___10566;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10506_10567__$1)){
var c__5568__auto___10568 = cljs.core.chunk_first.call(null,seq__10506_10567__$1);
var G__10569 = cljs.core.chunk_rest.call(null,seq__10506_10567__$1);
var G__10570 = c__5568__auto___10568;
var G__10571 = cljs.core.count.call(null,c__5568__auto___10568);
var G__10572 = (0);
seq__10506_10552 = G__10569;
chunk__10507_10553 = G__10570;
count__10508_10554 = G__10571;
i__10509_10555 = G__10572;
continue;
} else {
var vec__10522_10573 = cljs.core.first.call(null,seq__10506_10567__$1);
var name_10574 = cljs.core.nth.call(null,vec__10522_10573,(0),null);
var map__10525_10575 = cljs.core.nth.call(null,vec__10522_10573,(1),null);
var map__10525_10576__$1 = cljs.core.__destructure_map.call(null,map__10525_10575);
var doc_10577 = cljs.core.get.call(null,map__10525_10576__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_10578 = cljs.core.get.call(null,map__10525_10576__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_10574);

cljs.core.println.call(null," ",arglists_10578);

if(cljs.core.truth_(doc_10577)){
cljs.core.println.call(null," ",doc_10577);
} else {
}


var G__10579 = cljs.core.next.call(null,seq__10506_10567__$1);
var G__10580 = null;
var G__10581 = (0);
var G__10582 = (0);
seq__10506_10552 = G__10579;
chunk__10507_10553 = G__10580;
count__10508_10554 = G__10581;
i__10509_10555 = G__10582;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.call(null,"Spec");

var seq__10526 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__10527 = null;
var count__10528 = (0);
var i__10529 = (0);
while(true){
if((i__10529 < count__10528)){
var role = cljs.core._nth.call(null,chunk__10527,i__10529);
var temp__5804__auto___10583__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5804__auto___10583__$1)){
var spec_10584 = temp__5804__auto___10583__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_10584));
} else {
}


var G__10585 = seq__10526;
var G__10586 = chunk__10527;
var G__10587 = count__10528;
var G__10588 = (i__10529 + (1));
seq__10526 = G__10585;
chunk__10527 = G__10586;
count__10528 = G__10587;
i__10529 = G__10588;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq.call(null,seq__10526);
if(temp__5804__auto____$1){
var seq__10526__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10526__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__10526__$1);
var G__10589 = cljs.core.chunk_rest.call(null,seq__10526__$1);
var G__10590 = c__5568__auto__;
var G__10591 = cljs.core.count.call(null,c__5568__auto__);
var G__10592 = (0);
seq__10526 = G__10589;
chunk__10527 = G__10590;
count__10528 = G__10591;
i__10529 = G__10592;
continue;
} else {
var role = cljs.core.first.call(null,seq__10526__$1);
var temp__5804__auto___10593__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5804__auto___10593__$2)){
var spec_10594 = temp__5804__auto___10593__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_10594));
} else {
}


var G__10595 = cljs.core.next.call(null,seq__10526__$1);
var G__10596 = null;
var G__10597 = (0);
var G__10598 = (0);
seq__10526 = G__10595;
chunk__10527 = G__10596;
count__10528 = G__10597;
i__10529 = G__10598;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__10599 = cljs.core.conj.call(null,via,t);
var G__10600 = cljs.core.ex_cause.call(null,t);
via = G__10599;
t = G__10600;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__10603 = datafied_throwable;
var map__10603__$1 = cljs.core.__destructure_map.call(null,map__10603);
var via = cljs.core.get.call(null,map__10603__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__10603__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__10603__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__10604 = cljs.core.last.call(null,via);
var map__10604__$1 = cljs.core.__destructure_map.call(null,map__10604);
var type = cljs.core.get.call(null,map__10604__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__10604__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__10604__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__10605 = data;
var map__10605__$1 = cljs.core.__destructure_map.call(null,map__10605);
var problems = cljs.core.get.call(null,map__10605__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__10605__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__10605__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__10606 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__10606__$1 = cljs.core.__destructure_map.call(null,map__10606);
var top_data = map__10606__$1;
var source = cljs.core.get.call(null,map__10606__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__10607 = phase;
var G__10607__$1 = (((G__10607 instanceof cljs.core.Keyword))?G__10607.fqn:null);
switch (G__10607__$1) {
case "read-source":
var map__10608 = data;
var map__10608__$1 = cljs.core.__destructure_map.call(null,map__10608);
var line = cljs.core.get.call(null,map__10608__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__10608__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__10609 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__10609__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__10609,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__10609);
var G__10609__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__10609__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__10609__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__10609__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__10609__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__10610 = top_data;
var G__10610__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__10610,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__10610);
var G__10610__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__10610__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__10610__$1);
var G__10610__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__10610__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__10610__$2);
var G__10610__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__10610__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__10610__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__10610__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__10610__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__10611 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__10611,(0),null);
var method = cljs.core.nth.call(null,vec__10611,(1),null);
var file = cljs.core.nth.call(null,vec__10611,(2),null);
var line = cljs.core.nth.call(null,vec__10611,(3),null);
var G__10614 = top_data;
var G__10614__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__10614,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__10614);
var G__10614__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__10614__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__10614__$1);
var G__10614__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.call(null,G__10614__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__10614__$2);
var G__10614__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__10614__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__10614__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__10614__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__10614__$4;
}

break;
case "execution":
var vec__10615 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__10615,(0),null);
var method = cljs.core.nth.call(null,vec__10615,(1),null);
var file = cljs.core.nth.call(null,vec__10615,(2),null);
var line = cljs.core.nth.call(null,vec__10615,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__10602_SHARP_){
var or__5045__auto__ = (p1__10602_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__10602_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__10618 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__10618__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__10618,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__10618);
var G__10618__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__10618__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__10618__$1);
var G__10618__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.call(null,G__10618__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__10618__$2);
var G__10618__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__10618__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__10618__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__10618__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__10618__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10607__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__10622){
var map__10623 = p__10622;
var map__10623__$1 = cljs.core.__destructure_map.call(null,map__10623);
var triage_data = map__10623__$1;
var phase = cljs.core.get.call(null,map__10623__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__10623__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__10623__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__10623__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__10623__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__10623__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__10623__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__10623__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__10624 = phase;
var G__10624__$1 = (((G__10624 instanceof cljs.core.Keyword))?G__10624.fqn:null);
switch (G__10624__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__10625_10634 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__10626_10635 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__10627_10636 = true;
var _STAR_print_fn_STAR__temp_val__10628_10637 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__10627_10636);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__10628_10637);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__10620_SHARP_){
return cljs.core.dissoc.call(null,p1__10620_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__10626_10635);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__10625_10634);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__10629_10638 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__10630_10639 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__10631_10640 = true;
var _STAR_print_fn_STAR__temp_val__10632_10641 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__10631_10640);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__10632_10641);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__10621_SHARP_){
return cljs.core.dissoc.call(null,p1__10621_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__10630_10639);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__10629_10638);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10624__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
