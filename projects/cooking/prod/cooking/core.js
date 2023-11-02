// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('cooking.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
if((typeof cooking !== 'undefined') && (typeof cooking.core !== 'undefined') && (typeof cooking.core.initial_state !== 'undefined')){
} else {
cooking.core.initial_state = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pixi","pixi",808009198),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"app","app",-560961707),(new PIXI.Application(({"width": (640), "height": (360), "backgroundColor": "0xA08D89"}))),new cljs.core.Keyword(null,"sprite","sprite",172516848),PIXI.Sprite.from("images/beet.png")], null),new cljs.core.Keyword(null,"pantry","pantry",-1428428997),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Flour",null,"Water",null], null), null),new cljs.core.Keyword(null,"mixing-station","mixing-station",1186541546),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"boiling-station","boiling-station",1025777653),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"grilling-station","grilling-station",-653144392),cljs.core.PersistentHashSet.EMPTY], null);
}
if((typeof cooking !== 'undefined') && (typeof cooking.core !== 'undefined') && (typeof cooking.core.app_state !== 'undefined')){
} else {
cooking.core.app_state = reagent.core.atom.call(null,cooking.core.initial_state);
}
cooking.core.reset_app_state_BANG_ = (function cooking$core$reset_app_state_BANG_(){
return cljs.core.reset_BANG_.call(null,cooking.core.app_state,cooking.core.initial_state);
});
cooking.core.add_pixi = (function cooking$core$add_pixi(p__13446){
var map__13447 = p__13446;
var map__13447__$1 = cljs.core.__destructure_map.call(null,map__13447);
var pixi_state = map__13447__$1;
var app = cljs.core.get.call(null,map__13447__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var app_holder = document.getElementById("app-holder");
return app_holder.appendChild(app.view);
});
cooking.core.add_sprite = (function cooking$core$add_sprite(p__13448){
var map__13449 = p__13448;
var map__13449__$1 = cljs.core.__destructure_map.call(null,map__13449);
var pixi_state = map__13449__$1;
var app = cljs.core.get.call(null,map__13449__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var sprite = cljs.core.get.call(null,map__13449__$1,new cljs.core.Keyword(null,"sprite","sprite",172516848));
return app.stage.addChild(sprite);
});
cooking.core.setup_pixi = (function cooking$core$setup_pixi(pixi_state){
cooking.core.add_pixi.call(null,pixi_state);

return cooking.core.add_sprite.call(null,pixi_state);
});
cooking.core.mix_ingredients_BANG_ = (function cooking$core$mix_ingredients_BANG_(ingredients){
var output = (function (){var pred__13451 = cljs.core._EQ_;
var expr__13452 = ingredients;
if(cljs.core.truth_(pred__13451.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Flour",null,"Water",null], null), null),expr__13452))){
return "Dough";
} else {
if(cljs.core.truth_(pred__13451.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Water",null,"Flatbread",null], null), null),expr__13452))){
return "Soggy Flatbread";
} else {
if(cljs.core.truth_(pred__13451.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Water",null,"Toasted Flatbread",null], null), null),expr__13452))){
return "Soggy Toast";
} else {
return null;
}
}
}
})();
if(cljs.core.truth_(output)){
return cljs.core.swap_BANG_.call(null,cooking.core.app_state,(function (p1__13450_SHARP_){
return cljs.core.update.call(null,cljs.core.assoc.call(null,p1__13450_SHARP_,new cljs.core.Keyword(null,"mixing-station","mixing-station",1186541546),cljs.core.PersistentHashSet.createAsIfByAssoc([output])),new cljs.core.Keyword(null,"pantry","pantry",-1428428997),cljs.core.conj,output);
}));
} else {
return null;
}
});
cooking.core.boil_ingredients_BANG_ = (function cooking$core$boil_ingredients_BANG_(ingredients){
var output = (function (){var pred__13455 = cljs.core._EQ_;
var expr__13456 = ingredients;
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Dough",null], null), null),expr__13456))){
return "Dumplings";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Water Dough",null], null), null),expr__13456))){
return "Dumplings";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Dumplings",null], null), null),expr__13456))){
return "Toasty Dumplings";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Flatbread",null], null), null),expr__13456))){
return "Bread Soup";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Water",null,"Flatbread",null], null), null),expr__13456))){
return "Bread Soup";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Soggy Flatbread",null], null), null),expr__13456))){
return "Bread Soup";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Soggy Flatbread",null,"Water",null], null), null),expr__13456))){
return "Bread Soup";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Bread Soup",null,"Water",null], null), null),expr__13456))){
return "Bread Soup";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Dumplings",null,"Flatbread",null], null), null),expr__13456))){
return "Bread Soup with Dumplings";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Crispy Dumplings",null,"Flatbread",null], null), null),expr__13456))){
return "Bread Soup with Toasty Dumplings";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Toasty Dumplings",null,"Flatbread",null], null), null),expr__13456))){
return "Bread Soup with Toasty Dumplings";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Soggy Flatbread",null,"Dumplings",null], null), null),expr__13456))){
return "Bread Soup with Dumplings";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Soggy Flatbread",null,"Crispy Dumplings",null], null), null),expr__13456))){
return "Bread Soup with Toasty Dumplings";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Soggy Flatbread",null,"Toasty Dumplings",null], null), null),expr__13456))){
return "Bread Soup with Toasty Dumplings";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Dough",null,"Flatbread",null], null), null),expr__13456))){
return "Bread Soup with Dumplings";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Soggy Flatbread",null,"Dough",null], null), null),expr__13456))){
return "Bread Soup with Dumplings";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Bread Soup",null,"Dumplings",null], null), null),expr__13456))){
return "Bread Soup with Dumplings";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Bread Soup",null,"Crispy Dumplings",null], null), null),expr__13456))){
return "Bread Soup with Toasty Dumplings";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Toasty Dumplings",null,"Bread Soup",null], null), null),expr__13456))){
return "Bread Soup with Toasty Dumplings";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Bread Soup",null,"Dough",null], null), null),expr__13456))){
return "Bread Soup with Dumplings";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Bread Soup with Dumplings",null,"Water",null], null), null),expr__13456))){
return "Bread Soup with Dumplings";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Water",null,"Bread Soup with Toasty Dumplings",null], null), null),expr__13456))){
return "Bread Soup with Toasty Dumplings";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Flour",null,"Flatbread",null], null), null),expr__13456))){
return "Bread Stew";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Flour",null,"Soggy Flatbread",null], null), null),expr__13456))){
return "Bread Stew";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Bread Soup",null,"Flatbread",null], null), null),expr__13456))){
return "Bread Stew";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Soggy Flatbread",null,"Bread Soup",null], null), null),expr__13456))){
return "Bread Stew";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["Flour",null,"Dumplings",null,"Flatbread",null], null), null),expr__13456))){
return "Bread Stew with Dumplings";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["Flour",null,"Soggy Flatbread",null,"Dumplings",null], null), null),expr__13456))){
return "Bread Stew with Dumplings";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["Flour",null,"Dough",null,"Flatbread",null], null), null),expr__13456))){
return "Bread Stew with Dumplings";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["Flour",null,"Soggy Flatbread",null,"Dough",null], null), null),expr__13456))){
return "Bread Stew with Dumplings";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["Flour",null,"Bread Soup",null,"Dumplings",null], null), null),expr__13456))){
return "Bread Stew with Dumplings";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["Flour",null,"Bread Soup",null,"Crispy Dumplings",null], null), null),expr__13456))){
return "Bread Stew with Toasty Dumplings";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["Flour",null,"Toasty Dumplings",null,"Bread Soup",null], null), null),expr__13456))){
return "Bread Stew with Toasty Dumplings";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Dumplings",null,"Bread Stew",null], null), null),expr__13456))){
return "Bread Stew with Dumplings";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Crispy Dumplings",null,"Bread Stew",null], null), null),expr__13456))){
return "Bread Stew with Toasty Dumplings";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Toasty Dumplings",null,"Bread Stew",null], null), null),expr__13456))){
return "Bread Stew with Toasty Dumplings";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Flour",null,"Bread Soup with Dumplings",null], null), null),expr__13456))){
return "Bread Stew with Dumplings";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Bread Soup with Dumplings",null,"Flatbread",null], null), null),expr__13456))){
return "Bread Stew with Dumplings";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Toasted Flatbread",null], null), null),expr__13456))){
return "Toast Soup";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Water",null,"Toasted Flatbread",null], null), null),expr__13456))){
return "Toast Soup";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Soggy Toast",null], null), null),expr__13456))){
return "Toast Soup";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Water",null,"Soggy Toast",null], null), null),expr__13456))){
return "Toast Soup";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Dumplings",null,"Toasted Flatbread",null], null), null),expr__13456))){
return "Toast Soup with Dumplings";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Crispy Dumplings",null,"Toasted Flatbread",null], null), null),expr__13456))){
return "Toast Soup with Toasty Dumplings";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Toasty Dumplings",null,"Toasted Flatbread",null], null), null),expr__13456))){
return "Toast Soup with Toasty Dumplings";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["Water",null,"Dumplings",null,"Toasted Flatbread",null], null), null),expr__13456))){
return "Toast Soup with Dumplings";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["Water",null,"Crispy Dumplings",null,"Toasted Flatbread",null], null), null),expr__13456))){
return "Toast Soup with Toasty Dumplings";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["Toasty Dumplings",null,"Water",null,"Toasted Flatbread",null], null), null),expr__13456))){
return "Toast Soup with Toasty Dumplings";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Dumplings",null,"Soggy Toast",null], null), null),expr__13456))){
return "Toast Soup with Dumplings";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Soggy Toast",null,"Crispy Dumplings",null], null), null),expr__13456))){
return "Toast Soup with Toasty Dumplings";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Toasty Dumplings",null,"Soggy Toast",null], null), null),expr__13456))){
return "Toast Soup with Toasty Dumplings";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["Water",null,"Dumplings",null,"Soggy Toast",null], null), null),expr__13456))){
return "Toast Soup with Dumplings";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["Water",null,"Soggy Toast",null,"Crispy Dumplings",null], null), null),expr__13456))){
return "Toast Soup with Toasty Dumplings";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["Toasty Dumplings",null,"Water",null,"Soggy Toast",null], null), null),expr__13456))){
return "Toast Soup with Toasty Dumplings";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Dough",null,"Toasted Flatbread",null], null), null),expr__13456))){
return "Toast Soup with Dumplings";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["Water",null,"Dough",null,"Toasted Flatbread",null], null), null),expr__13456))){
return "Toast Soup with Dumplings";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Dough",null,"Soggy Toast",null], null), null),expr__13456))){
return "Toast Soup with Dumplings";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["Water",null,"Dough",null,"Soggy Toast",null], null), null),expr__13456))){
return "Toast Soup with Dumplings";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Flour",null,"Toasted Flatbread",null], null), null),expr__13456))){
return "Toast Stew";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Flour",null,"Soggy Toast",null], null), null),expr__13456))){
return "Toast Stew";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Flour",null,"Toast Soup",null], null), null),expr__13456))){
return "Toast Stew";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Toast Soup",null,"Flatbread",null], null), null),expr__13456))){
return "Toast Stew";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Toast Soup",null,"Toasted Flatbread",null], null), null),expr__13456))){
return "Toast Stew";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Soggy Flatbread",null,"Toast Soup",null], null), null),expr__13456))){
return "Toast Stew";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["Flour",null,"Water",null,"Toasted Flatbread",null], null), null),expr__13456))){
return "Toast Soup";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["Flour",null,"Water",null,"Soggy Toast",null], null), null),expr__13456))){
return "Toast Soup";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["Flour",null,"Water",null,"Toast Soup",null], null), null),expr__13456))){
return "Toast Soup";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["Water",null,"Toast Soup",null,"Flatbread",null], null), null),expr__13456))){
return "Toast Soup";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["Water",null,"Toast Soup",null,"Toasted Flatbread",null], null), null),expr__13456))){
return "Toast Soup";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["Soggy Flatbread",null,"Water",null,"Toast Soup",null], null), null),expr__13456))){
return "Toast Soup";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["Flour",null,"Dumplings",null,"Toasted Flatbread",null], null), null),expr__13456))){
return "Toast Stew with Dumplings";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["Flour",null,"Crispy Dumplings",null,"Toasted Flatbread",null], null), null),expr__13456))){
return "Toast Stew with Toasty Dumplings";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["Flour",null,"Toasty Dumplings",null,"Toasted Flatbread",null], null), null),expr__13456))){
return "Toast Stew with Toasty Dumplings";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["Flour",null,"Dumplings",null,"Soggy Toast",null], null), null),expr__13456))){
return "Toast Stew with Dumplings";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["Flour",null,"Soggy Toast",null,"Crispy Dumplings",null], null), null),expr__13456))){
return "Toast Stew with Toasty Dumplings";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["Flour",null,"Toasty Dumplings",null,"Soggy Toast",null], null), null),expr__13456))){
return "Toast Stew with Toasty Dumplings";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["Flour",null,"Dough",null,"Toasted Flatbread",null], null), null),expr__13456))){
return "Toast Stew with Dumplings";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["Flour",null,"Dough",null,"Soggy Toast",null], null), null),expr__13456))){
return "Toast Stew with Dumplings";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Toast Stew",null,"Dumplings",null], null), null),expr__13456))){
return "Toast Stew with Dumplings";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Toast Stew",null,"Crispy Dumplings",null], null), null),expr__13456))){
return "Toast Stew with Toasty Dumplings";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Toasty Dumplings",null,"Toast Stew",null], null), null),expr__13456))){
return "Toast Stew with Toasty Dumplings";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["Flour",null,"Water",null,"Dumplings",null,"Toasted Flatbread",null], null), null),expr__13456))){
return "Toast Soup with Dumplings";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["Flour",null,"Water",null,"Crispy Dumplings",null,"Toasted Flatbread",null], null), null),expr__13456))){
return "Toast Soup with Toasty Dumplings";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["Flour",null,"Toasty Dumplings",null,"Water",null,"Toasted Flatbread",null], null), null),expr__13456))){
return "Toast Soup with Toasty Dumplings";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["Flour",null,"Water",null,"Dumplings",null,"Soggy Toast",null], null), null),expr__13456))){
return "Toast Soup with Dumplings";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["Flour",null,"Water",null,"Soggy Toast",null,"Crispy Dumplings",null], null), null),expr__13456))){
return "Toast Soup with Toasty Dumplings";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["Flour",null,"Toasty Dumplings",null,"Water",null,"Soggy Toast",null], null), null),expr__13456))){
return "Toast Soup with Toasty Dumplings";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["Flour",null,"Water",null,"Dough",null,"Toasted Flatbread",null], null), null),expr__13456))){
return "Toast Soup with Dumplings";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["Flour",null,"Water",null,"Dough",null,"Soggy Toast",null], null), null),expr__13456))){
return "Toast Soup with Dumplings";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["Toast Stew",null,"Water",null,"Dumplings",null], null), null),expr__13456))){
return "Toast Soup with Dumplings";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["Toast Stew",null,"Water",null,"Crispy Dumplings",null], null), null),expr__13456))){
return "Toast Soup with Toasty Dumplings";
} else {
if(cljs.core.truth_(pred__13455.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["Toasty Dumplings",null,"Toast Stew",null,"Water",null], null), null),expr__13456))){
return "Toast Soup with Toasty Dumplings";
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
})();
if(cljs.core.truth_(output)){
return cljs.core.swap_BANG_.call(null,cooking.core.app_state,(function (p1__13454_SHARP_){
return cljs.core.update.call(null,cljs.core.assoc.call(null,p1__13454_SHARP_,new cljs.core.Keyword(null,"boiling-station","boiling-station",1025777653),cljs.core.PersistentHashSet.createAsIfByAssoc([output])),new cljs.core.Keyword(null,"pantry","pantry",-1428428997),cljs.core.conj,output);
}));
} else {
return null;
}
});
cooking.core.grill_ingredients_BANG_ = (function cooking$core$grill_ingredients_BANG_(ingredients){
var output = (function (){var pred__13459 = cljs.core._EQ_;
var expr__13460 = ingredients;
if(cljs.core.truth_(pred__13459.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Dough",null], null), null),expr__13460))){
return "Flatbread";
} else {
if(cljs.core.truth_(pred__13459.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Dumplings",null], null), null),expr__13460))){
return "Crispy Dumplings";
} else {
if(cljs.core.truth_(pred__13459.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Flatbread",null], null), null),expr__13460))){
return "Toasted Flatbread";
} else {
if(cljs.core.truth_(pred__13459.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Soggy Flatbread",null], null), null),expr__13460))){
return "Flatbread";
} else {
return null;
}
}
}
}
})();
if(cljs.core.truth_(output)){
return cljs.core.swap_BANG_.call(null,cooking.core.app_state,(function (p1__13458_SHARP_){
return cljs.core.update.call(null,cljs.core.assoc.call(null,p1__13458_SHARP_,new cljs.core.Keyword(null,"grilling-station","grilling-station",-653144392),cljs.core.PersistentHashSet.createAsIfByAssoc([output])),new cljs.core.Keyword(null,"pantry","pantry",-1428428997),cljs.core.conj,output);
}));
} else {
return null;
}
});
cooking.core.ingredient = (function cooking$core$ingredient(name_string){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ingredient.bordered","div.ingredient.bordered",1280827567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (){
return cljs.core.swap_BANG_.call(null,cooking.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"holding","holding",1269510599),name_string);
})], null),name_string], null);
});
cooking.core.page = (function cooking$core$page(){
var map__13470 = cljs.core.deref.call(null,cooking.core.app_state);
var map__13470__$1 = cljs.core.__destructure_map.call(null,map__13470);
var holding = cljs.core.get.call(null,map__13470__$1,new cljs.core.Keyword(null,"holding","holding",1269510599));
var mouse_coords = cljs.core.get.call(null,map__13470__$1,new cljs.core.Keyword(null,"mouse-coords","mouse-coords",-600181821));
var pantry = cljs.core.get.call(null,map__13470__$1,new cljs.core.Keyword(null,"pantry","pantry",-1428428997));
var mixing_station = cljs.core.get.call(null,map__13470__$1,new cljs.core.Keyword(null,"mixing-station","mixing-station",1186541546));
var boiling_station = cljs.core.get.call(null,map__13470__$1,new cljs.core.Keyword(null,"boiling-station","boiling-station",1025777653));
var grilling_station = cljs.core.get.call(null,map__13470__$1,new cljs.core.Keyword(null,"grilling-station","grilling-station",-653144392));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#page","div#page",302671848),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874),(function (p1__13462_SHARP_){
return cljs.core.swap_BANG_.call(null,cooking.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"mouse-coords","mouse-coords",-600181821),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),p1__13462_SHARP_.clientX,new cljs.core.Keyword(null,"y","y",-1757859776),p1__13462_SHARP_.clientY], null));
})], null),(cljs.core.truth_(holding)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cooking-item","div.cooking-item",1130164434),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(mouse_coords),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(mouse_coords)], null)], null),holding], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#ingredients","div#ingredients",108967600),(function (){var iter__5523__auto__ = (function cooking$core$page_$_iter__13471(s__13472){
return (new cljs.core.LazySeq(null,(function (){
var s__13472__$1 = s__13472;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__13472__$1);
if(temp__5804__auto__){
var s__13472__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13472__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__13472__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__13474 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__13473 = (0);
while(true){
if((i__13473 < size__5522__auto__)){
var item = cljs.core._nth.call(null,c__5521__auto__,i__13473);
cljs.core.chunk_append.call(null,b__13474,cooking.core.ingredient.call(null,item));

var G__13487 = (i__13473 + (1));
i__13473 = G__13487;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13474),cooking$core$page_$_iter__13471.call(null,cljs.core.chunk_rest.call(null,s__13472__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13474),null);
}
} else {
var item = cljs.core.first.call(null,s__13472__$2);
return cljs.core.cons.call(null,cooking.core.ingredient.call(null,item),cooking$core$page_$_iter__13471.call(null,cljs.core.rest.call(null,s__13472__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,pantry);
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#worktop","div#worktop",-1340085151),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#prep-space","div#prep-space",258669297),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"cursor","cursor",1011937484),(cljs.core.truth_(holding)?"pointer":"default")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_){
if(cljs.core.truth_(holding)){
return cljs.core.swap_BANG_.call(null,cooking.core.app_state,(function (p1__13463_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.update.call(null,p1__13463_SHARP_,new cljs.core.Keyword(null,"mixing-station","mixing-station",1186541546),cljs.core.conj,holding),new cljs.core.Keyword(null,"holding","holding",1269510599));
}));
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.prep.bordered","div.prep.bordered",1246691352),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),((cljs.core.seq.call(null,mixing_station))?"pointer":"default")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_){
if(cljs.core.truth_(holding)){
return cljs.core.swap_BANG_.call(null,cooking.core.app_state,(function (p1__13464_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.update.call(null,p1__13464_SHARP_,new cljs.core.Keyword(null,"mixing-station","mixing-station",1186541546),cljs.core.conj,holding),new cljs.core.Keyword(null,"holding","holding",1269510599));
}));
} else {
if(cljs.core.seq.call(null,mixing_station)){
return cooking.core.mix_ingredients_BANG_.call(null,mixing_station);
} else {
return null;
}
}
})], null),"Mix"], null),(function (){var iter__5523__auto__ = (function cooking$core$page_$_iter__13475(s__13476){
return (new cljs.core.LazySeq(null,(function (){
var s__13476__$1 = s__13476;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__13476__$1);
if(temp__5804__auto__){
var s__13476__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13476__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__13476__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__13478 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__13477 = (0);
while(true){
if((i__13477 < size__5522__auto__)){
var item = cljs.core._nth.call(null,c__5521__auto__,i__13477);
cljs.core.chunk_append.call(null,b__13478,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cooking-item","div.cooking-item",1130164434),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__13477,item,c__5521__auto__,size__5522__auto__,b__13478,s__13476__$2,temp__5804__auto__,map__13470,map__13470__$1,holding,mouse_coords,pantry,mixing_station,boiling_station,grilling_station){
return (function (p1__13465_SHARP_){
var item_name = p1__13465_SHARP_.target.textContent;
return cljs.core.swap_BANG_.call(null,cooking.core.app_state,cljs.core.update,new cljs.core.Keyword(null,"mixing-station","mixing-station",1186541546),cljs.core.disj,item_name);
});})(i__13477,item,c__5521__auto__,size__5522__auto__,b__13478,s__13476__$2,temp__5804__auto__,map__13470,map__13470__$1,holding,mouse_coords,pantry,mixing_station,boiling_station,grilling_station))
], null),item], null));

var G__13488 = (i__13477 + (1));
i__13477 = G__13488;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13478),cooking$core$page_$_iter__13475.call(null,cljs.core.chunk_rest.call(null,s__13476__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13478),null);
}
} else {
var item = cljs.core.first.call(null,s__13476__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cooking-item","div.cooking-item",1130164434),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (item,s__13476__$2,temp__5804__auto__,map__13470,map__13470__$1,holding,mouse_coords,pantry,mixing_station,boiling_station,grilling_station){
return (function (p1__13465_SHARP_){
var item_name = p1__13465_SHARP_.target.textContent;
return cljs.core.swap_BANG_.call(null,cooking.core.app_state,cljs.core.update,new cljs.core.Keyword(null,"mixing-station","mixing-station",1186541546),cljs.core.disj,item_name);
});})(item,s__13476__$2,temp__5804__auto__,map__13470,map__13470__$1,holding,mouse_coords,pantry,mixing_station,boiling_station,grilling_station))
], null),item], null),cooking$core$page_$_iter__13475.call(null,cljs.core.rest.call(null,s__13476__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,cljs.core.set.call(null,mixing_station));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#cooktop","div#cooktop",1972125747),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#boiling-station","div#boiling-station",-1005248244),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"cursor","cursor",1011937484),(cljs.core.truth_(holding)?"pointer":"default")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_){
if(cljs.core.truth_(holding)){
return cljs.core.swap_BANG_.call(null,cooking.core.app_state,(function (p1__13466_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.update.call(null,p1__13466_SHARP_,new cljs.core.Keyword(null,"boiling-station","boiling-station",1025777653),cljs.core.conj,holding),new cljs.core.Keyword(null,"holding","holding",1269510599));
}));
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#big-pot.cooking.bordered","div#big-pot.cooking.bordered",-1611418179),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),((cljs.core.seq.call(null,boiling_station))?"pointer":"default")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_){
if(cljs.core.seq.call(null,boiling_station)){
return cooking.core.boil_ingredients_BANG_.call(null,boiling_station);
} else {
return null;
}
})], null),"Boil"], null),(function (){var iter__5523__auto__ = (function cooking$core$page_$_iter__13479(s__13480){
return (new cljs.core.LazySeq(null,(function (){
var s__13480__$1 = s__13480;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__13480__$1);
if(temp__5804__auto__){
var s__13480__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13480__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__13480__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__13482 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__13481 = (0);
while(true){
if((i__13481 < size__5522__auto__)){
var item = cljs.core._nth.call(null,c__5521__auto__,i__13481);
cljs.core.chunk_append.call(null,b__13482,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cooking-item","div.cooking-item",1130164434),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__13481,item,c__5521__auto__,size__5522__auto__,b__13482,s__13480__$2,temp__5804__auto__,map__13470,map__13470__$1,holding,mouse_coords,pantry,mixing_station,boiling_station,grilling_station){
return (function (p1__13467_SHARP_){
var item_name = p1__13467_SHARP_.target.textContent;
return cljs.core.swap_BANG_.call(null,cooking.core.app_state,cljs.core.update,new cljs.core.Keyword(null,"boiling-station","boiling-station",1025777653),cljs.core.disj,item_name);
});})(i__13481,item,c__5521__auto__,size__5522__auto__,b__13482,s__13480__$2,temp__5804__auto__,map__13470,map__13470__$1,holding,mouse_coords,pantry,mixing_station,boiling_station,grilling_station))
], null),item], null));

var G__13489 = (i__13481 + (1));
i__13481 = G__13489;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13482),cooking$core$page_$_iter__13479.call(null,cljs.core.chunk_rest.call(null,s__13480__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13482),null);
}
} else {
var item = cljs.core.first.call(null,s__13480__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cooking-item","div.cooking-item",1130164434),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (item,s__13480__$2,temp__5804__auto__,map__13470,map__13470__$1,holding,mouse_coords,pantry,mixing_station,boiling_station,grilling_station){
return (function (p1__13467_SHARP_){
var item_name = p1__13467_SHARP_.target.textContent;
return cljs.core.swap_BANG_.call(null,cooking.core.app_state,cljs.core.update,new cljs.core.Keyword(null,"boiling-station","boiling-station",1025777653),cljs.core.disj,item_name);
});})(item,s__13480__$2,temp__5804__auto__,map__13470,map__13470__$1,holding,mouse_coords,pantry,mixing_station,boiling_station,grilling_station))
], null),item], null),cooking$core$page_$_iter__13479.call(null,cljs.core.rest.call(null,s__13480__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,boiling_station);
})()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#grilling-station","div#grilling-station",1614723025),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"cursor","cursor",1011937484),(cljs.core.truth_(holding)?"pointer":"default")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_){
if(cljs.core.truth_(holding)){
return cljs.core.swap_BANG_.call(null,cooking.core.app_state,(function (p1__13468_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.update.call(null,p1__13468_SHARP_,new cljs.core.Keyword(null,"grilling-station","grilling-station",-653144392),cljs.core.conj,holding),new cljs.core.Keyword(null,"holding","holding",1269510599));
}));
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#frying-pan.cooking.bordered","div#frying-pan.cooking.bordered",1457648577),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),((cljs.core.seq.call(null,grilling_station))?"pointer":"default")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_){
if(cljs.core.seq.call(null,grilling_station)){
return cooking.core.grill_ingredients_BANG_.call(null,grilling_station);
} else {
return null;
}
})], null),"Grill"], null),(function (){var iter__5523__auto__ = (function cooking$core$page_$_iter__13483(s__13484){
return (new cljs.core.LazySeq(null,(function (){
var s__13484__$1 = s__13484;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__13484__$1);
if(temp__5804__auto__){
var s__13484__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13484__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__13484__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__13486 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__13485 = (0);
while(true){
if((i__13485 < size__5522__auto__)){
var item = cljs.core._nth.call(null,c__5521__auto__,i__13485);
cljs.core.chunk_append.call(null,b__13486,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cooking-item","div.cooking-item",1130164434),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__13485,item,c__5521__auto__,size__5522__auto__,b__13486,s__13484__$2,temp__5804__auto__,map__13470,map__13470__$1,holding,mouse_coords,pantry,mixing_station,boiling_station,grilling_station){
return (function (p1__13469_SHARP_){
var item_name = p1__13469_SHARP_.target.textContent;
return cljs.core.swap_BANG_.call(null,cooking.core.app_state,cljs.core.update,new cljs.core.Keyword(null,"grilling-station","grilling-station",-653144392),cljs.core.disj,item_name);
});})(i__13485,item,c__5521__auto__,size__5522__auto__,b__13486,s__13484__$2,temp__5804__auto__,map__13470,map__13470__$1,holding,mouse_coords,pantry,mixing_station,boiling_station,grilling_station))
], null),item], null));

var G__13490 = (i__13485 + (1));
i__13485 = G__13490;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13486),cooking$core$page_$_iter__13483.call(null,cljs.core.chunk_rest.call(null,s__13484__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13486),null);
}
} else {
var item = cljs.core.first.call(null,s__13484__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cooking-item","div.cooking-item",1130164434),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (item,s__13484__$2,temp__5804__auto__,map__13470,map__13470__$1,holding,mouse_coords,pantry,mixing_station,boiling_station,grilling_station){
return (function (p1__13469_SHARP_){
var item_name = p1__13469_SHARP_.target.textContent;
return cljs.core.swap_BANG_.call(null,cooking.core.app_state,cljs.core.update,new cljs.core.Keyword(null,"grilling-station","grilling-station",-653144392),cljs.core.disj,item_name);
});})(item,s__13484__$2,temp__5804__auto__,map__13470,map__13470__$1,holding,mouse_coords,pantry,mixing_station,boiling_station,grilling_station))
], null),item], null),cooking$core$page_$_iter__13483.call(null,cljs.core.rest.call(null,s__13484__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,grilling_station);
})()], null)], null)], null)], null);
});
cooking.core.setup_page = (function cooking$core$setup_page(){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cooking.core.page], null),document.getElementById("app-holder"));
});
cooking.core._ = cooking.core.setup_page.call(null);
if((typeof cooking !== 'undefined') && (typeof cooking.core !== 'undefined') && (typeof cooking.core.elapsed !== 'undefined')){
} else {
cooking.core.elapsed = cljs.core.atom.call(null,0.0);
}
cooking.core.sound = (new Howl(({"src": "sounds/drop_001.ogg"})));
