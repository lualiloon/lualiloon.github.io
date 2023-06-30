// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('garden.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('clojure.string');
garden.core.tile_size = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),(64),new cljs.core.Keyword(null,"h","h",1109658740),(32)], null);
garden.core.mouse__GT_tile = (function garden$core$mouse__GT_tile(mouse_x,mouse_y){
var half_tile_width = (new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(garden.core.tile_size) / (2));
var half_tile_height = (new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(garden.core.tile_size) / (2));
var tile_x = (((((mouse_x / half_tile_width) + (mouse_y / half_tile_height)) / (2)) - 0.7) | (0));
var tile_y = ((((mouse_y / half_tile_height) - (mouse_x / half_tile_width)) / (2)) + 0.4);
var adjusted_tile_y = (((tile_y < (0)))?((tile_y - (1)) | (0)):(tile_y | (0)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tile_x,adjusted_tile_y], null);
});
garden.core.tile__GT_screen = (function garden$core$tile__GT_screen(tile_x,tile_y){
var half_tile_width = (new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(garden.core.tile_size) / (2));
var half_tile_height = (new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(garden.core.tile_size) / (2));
var screen_x = ((tile_x - tile_y) * half_tile_width);
var screen_y = ((tile_x + tile_y) * half_tile_height);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [screen_x,screen_y], null);
});
garden.core.create_sprite = (function garden$core$create_sprite(file_name){
var sprite = PIXI.Sprite.from(file_name);
(sprite.scale.x = 0.5);

(sprite.scale.y = 0.5);

return sprite;
});
if((typeof garden !== 'undefined') && (typeof garden.core !== 'undefined') && (typeof garden.core.initial_state !== 'undefined')){
} else {
garden.core.initial_state = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pixi","pixi",808009198),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"app","app",-560961707),(new PIXI.Application(({"width": window.innerWidth, "height": window.innerHeight, "backgroundColor": "0x8B7355"}))),new cljs.core.Keyword(null,"sprites","sprites",-1835833922),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"objects","objects",2099713734),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"overlays","overlays",-1346586303),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"grid","grid",402978600),garden.core.create_sprite.call(null,"images/Grid Style B - 2048x2048 - 128x64 - blue.png")], null)], null),new cljs.core.Keyword(null,"containers","containers",-2127048083),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"objects","objects",2099713734),(new PIXI.Container())], null)], null)], null);
}
if((typeof garden !== 'undefined') && (typeof garden.core !== 'undefined') && (typeof garden.core.app_state !== 'undefined')){
} else {
garden.core.app_state = cljs.core.atom.call(null,garden.core.initial_state);
}
garden.core.reset_app_state_BANG_ = (function garden$core$reset_app_state_BANG_(){
return cljs.core.reset_BANG_.call(null,garden.core.app_state,garden.core.initial_state);
});
garden.core.create_herb_sprite = (function garden$core$create_herb_sprite(herb_key,herb_id){
var file_name = (function (){var G__13446 = herb_key;
var G__13446__$1 = (((G__13446 instanceof cljs.core.Keyword))?G__13446.fqn:null);
switch (G__13446__$1) {
case "basil":
return "images/basil.png";

break;
case "sage":
return "images/sage.png";

break;
case "parsley":
return "images/parsley.png";

break;
case "thyme":
return "images/thyme.png";

break;
case "oregano":
return "images/oregano.png";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13446__$1)].join('')));

}
})();
var herb_sprite = garden.core.create_sprite.call(null,file_name);
return cljs.core.swap_BANG_.call(null,garden.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pixi","pixi",808009198),new cljs.core.Keyword(null,"sprites","sprites",-1835833922),new cljs.core.Keyword(null,"objects","objects",2099713734),herb_id], null),herb_sprite);
});
garden.core.add_herb_sprite_BANG_ = (function garden$core$add_herb_sprite_BANG_(herb_key){
return new cljs.core.Keyword(null,"TODO","TODO",-523795145);
});
garden.core.herb_templates = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"basil","basil",-938654055),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-6),(-4)], null)], null),new cljs.core.Keyword(null,"oregano","oregano",1342635560),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-7),(-4)], null)], null),new cljs.core.Keyword(null,"parsley","parsley",386272363),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-7),(-4)], null)], null),new cljs.core.Keyword(null,"sage","sage",-2121201294),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-9),(-6)], null)], null),new cljs.core.Keyword(null,"thyme","thyme",-289410474),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-6),(-2)], null)], null)], null);
/**
 * access-key is :objects, :background, or :overlay
 */
garden.core.add_sprite_BANG_ = (function garden$core$add_sprite_BANG_(p__13448,access_key,sprite_id){
var map__13449 = p__13448;
var map__13449__$1 = cljs.core.__destructure_map.call(null,map__13449);
var pixi_state = map__13449__$1;
var app = cljs.core.get.call(null,map__13449__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var sprites = cljs.core.get.call(null,map__13449__$1,new cljs.core.Keyword(null,"sprites","sprites",-1835833922));
var containers = cljs.core.get.call(null,map__13449__$1,new cljs.core.Keyword(null,"containers","containers",-2127048083));
var temp__5802__auto__ = cljs.core.get.call(null,containers,access_key);
if(cljs.core.truth_(temp__5802__auto__)){
var container = temp__5802__auto__;
return container.addChild(cljs.core.get_in.call(null,sprites,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [access_key,sprite_id], null)));
} else {
return app.stage.addChild(cljs.core.get_in.call(null,sprites,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [access_key,sprite_id], null)));
}
});
/**
 * herb-key is any of #{:basil :thyme :oregano :sage :parsley}
 */
garden.core.create_herb = (function garden$core$create_herb(herb_key){
var herb_id = cljs.core.keyword.call(null,cljs.core.gensym.call(null,cljs.core.name.call(null,herb_key)));
var herb_sprite = garden.core.create_herb_sprite.call(null,herb_key,herb_id);
cljs.core.swap_BANG_.call(null,garden.core.app_state,(function (p1__13450_SHARP_){
return cljs.core.assoc.call(null,cljs.core.assoc_in.call(null,p1__13450_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"herbs","herbs",-1160515312),herb_id], null),cljs.core.get.call(null,garden.core.herb_templates,herb_key)),new cljs.core.Keyword(null,"transplanting","transplanting",1284957235),herb_id);
}));

return garden.core.add_sprite_BANG_.call(null,new cljs.core.Keyword(null,"pixi","pixi",808009198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,garden.core.app_state)),new cljs.core.Keyword(null,"objects","objects",2099713734),herb_id);
});
garden.core.add_pixi = (function garden$core$add_pixi(p__13451){
var map__13452 = p__13451;
var map__13452__$1 = cljs.core.__destructure_map.call(null,map__13452);
var pixi_state = map__13452__$1;
var app = cljs.core.get.call(null,map__13452__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var app_holder = document.getElementById("app-holder");
return app_holder.appendChild(app.view);
});
garden.core.add_all_sprites = (function garden$core$add_all_sprites(app,p__13453){
var map__13454 = p__13453;
var map__13454__$1 = cljs.core.__destructure_map.call(null,map__13454);
var all_sprites = map__13454__$1;
var background = cljs.core.get.call(null,map__13454__$1,new cljs.core.Keyword(null,"background","background",-863952629));
var objects = cljs.core.get.call(null,map__13454__$1,new cljs.core.Keyword(null,"objects","objects",2099713734));
var overlays = cljs.core.get.call(null,map__13454__$1,new cljs.core.Keyword(null,"overlays","overlays",-1346586303));
var seq__13455 = cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.vals.call(null,background),cljs.core.vals.call(null,objects),cljs.core.vals.call(null,overlays)));
var chunk__13456 = null;
var count__13457 = (0);
var i__13458 = (0);
while(true){
if((i__13458 < count__13457)){
var sprite = cljs.core._nth.call(null,chunk__13456,i__13458);
app.stage.addChild(sprite);


var G__13459 = seq__13455;
var G__13460 = chunk__13456;
var G__13461 = count__13457;
var G__13462 = (i__13458 + (1));
seq__13455 = G__13459;
chunk__13456 = G__13460;
count__13457 = G__13461;
i__13458 = G__13462;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__13455);
if(temp__5804__auto__){
var seq__13455__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13455__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__13455__$1);
var G__13463 = cljs.core.chunk_rest.call(null,seq__13455__$1);
var G__13464 = c__5568__auto__;
var G__13465 = cljs.core.count.call(null,c__5568__auto__);
var G__13466 = (0);
seq__13455 = G__13463;
chunk__13456 = G__13464;
count__13457 = G__13465;
i__13458 = G__13466;
continue;
} else {
var sprite = cljs.core.first.call(null,seq__13455__$1);
app.stage.addChild(sprite);


var G__13467 = cljs.core.next.call(null,seq__13455__$1);
var G__13468 = null;
var G__13469 = (0);
var G__13470 = (0);
seq__13455 = G__13467;
chunk__13456 = G__13468;
count__13457 = G__13469;
i__13458 = G__13470;
continue;
}
} else {
return null;
}
}
break;
}
});
garden.core.add_all_containers = (function garden$core$add_all_containers(app,p__13471){
var map__13472 = p__13471;
var map__13472__$1 = cljs.core.__destructure_map.call(null,map__13472);
var all_containers = map__13472__$1;
var objects = cljs.core.get.call(null,map__13472__$1,new cljs.core.Keyword(null,"objects","objects",2099713734));
return app.stage.addChild(objects);
});
garden.core.setup_pixi = (function garden$core$setup_pixi(p__13473){
var map__13474 = p__13473;
var map__13474__$1 = cljs.core.__destructure_map.call(null,map__13474);
var pixi_state = map__13474__$1;
var app = cljs.core.get.call(null,map__13474__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var sprites = cljs.core.get.call(null,map__13474__$1,new cljs.core.Keyword(null,"sprites","sprites",-1835833922));
var containers = cljs.core.get.call(null,map__13474__$1,new cljs.core.Keyword(null,"containers","containers",-2127048083));
garden.core.add_pixi.call(null,pixi_state);

(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(containers).sortableChildren = true);

garden.core.add_all_sprites.call(null,app,sprites);

return garden.core.add_all_containers.call(null,app,containers);
});
garden.core.dispatch_click = (function garden$core$dispatch_click(event){
var is_touch_QMARK_ = (!(((event["touches"]) == null)));
var coords = ((is_touch_QMARK_)?(event.touches[(0)]):event);
var scroll_left = document.documentElement.scrollLeft;
var scroll_top = document.documentElement.scrollTop;
var x = (cljs.core.truth_((function (){var and__5043__auto__ = is_touch_QMARK_;
if(and__5043__auto__){
return coords;
} else {
return and__5043__auto__;
}
})())?(coords.clientX + scroll_left):event.pageX);
var y = (cljs.core.truth_((function (){var and__5043__auto__ = is_touch_QMARK_;
if(and__5043__auto__){
return coords;
} else {
return and__5043__auto__;
}
})())?(coords.clientY + scroll_top):event.pageY);
var temp__5804__auto__ = new cljs.core.Keyword(null,"transplanting","transplanting",1284957235).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,garden.core.app_state));
if(cljs.core.truth_(temp__5804__auto__)){
var herb_id = temp__5804__auto__;
return cljs.core.swap_BANG_.call(null,garden.core.app_state,cljs.core.dissoc,new cljs.core.Keyword(null,"transplanting","transplanting",1284957235));
} else {
return null;
}
});
garden.core.dispatch_move = (function garden$core$dispatch_move(event){
var is_touch_QMARK_ = (!(((event["touches"]) == null)));
var coords = ((is_touch_QMARK_)?(event.touches[(0)]):event);
var scroll_left = document.documentElement.scrollLeft;
var scroll_top = document.documentElement.scrollTop;
var x = (cljs.core.truth_((function (){var and__5043__auto__ = is_touch_QMARK_;
if(and__5043__auto__){
return coords;
} else {
return and__5043__auto__;
}
})())?(coords.clientX + scroll_left):event.pageX);
var y = (cljs.core.truth_((function (){var and__5043__auto__ = is_touch_QMARK_;
if(and__5043__auto__){
return coords;
} else {
return and__5043__auto__;
}
})())?(coords.clientY + scroll_top):event.pageY);
var vec__13475 = garden.core.mouse__GT_tile.call(null,x,y);
var tile_x = cljs.core.nth.call(null,vec__13475,(0),null);
var tile_y = cljs.core.nth.call(null,vec__13475,(1),null);
var tile_xy = vec__13475;
var former_xy = new cljs.core.Keyword(null,"mouse-xy","mouse-xy",-54406259).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,garden.core.app_state));
if(cljs.core.not_EQ_.call(null,tile_xy,former_xy)){
cljs.core.swap_BANG_.call(null,garden.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"mouse-xy","mouse-xy",-54406259),tile_xy);

var temp__5804__auto__ = new cljs.core.Keyword(null,"transplanting","transplanting",1284957235).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,garden.core.app_state));
if(cljs.core.truth_(temp__5804__auto__)){
var herb_id = temp__5804__auto__;
var herb_sprite = cljs.core.get_in.call(null,cljs.core.deref.call(null,garden.core.app_state),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pixi","pixi",808009198),new cljs.core.Keyword(null,"sprites","sprites",-1835833922),new cljs.core.Keyword(null,"objects","objects",2099713734),herb_id], null));
var vec__13478 = cljs.core.get_in.call(null,cljs.core.deref.call(null,garden.core.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"herbs","herbs",-1160515312),herb_id,new cljs.core.Keyword(null,"offset","offset",296498311)], null));
var offset_x = cljs.core.nth.call(null,vec__13478,(0),null);
var offset_y = cljs.core.nth.call(null,vec__13478,(1),null);
var adjusted_x = (tile_x + offset_x);
var adjusted_y = (tile_y + offset_y);
var vec__13481 = garden.core.tile__GT_screen.call(null,adjusted_x,adjusted_y);
var screen_x = cljs.core.nth.call(null,vec__13481,(0),null);
var screen_y = cljs.core.nth.call(null,vec__13481,(1),null);
(herb_sprite.x = screen_x);

(herb_sprite.y = screen_y);

return (herb_sprite.zIndex = (tile_x + tile_y));
} else {
return null;
}
} else {
return null;
}
});
garden.core.setup_inputs_BANG_ = (function garden$core$setup_inputs_BANG_(p__13488){
var map__13489 = p__13488;
var map__13489__$1 = cljs.core.__destructure_map.call(null,map__13489);
var pixi_state = map__13489__$1;
var app = cljs.core.get.call(null,map__13489__$1,new cljs.core.Keyword(null,"app","app",-560961707));
app.renderer.view.addEventListener("click",(function (p1__13484_SHARP_){
return garden.core.dispatch_click.call(null,p1__13484_SHARP_);
}));

app.renderer.view.addEventListener("mousemove",(function (p1__13485_SHARP_){
return garden.core.dispatch_move.call(null,p1__13485_SHARP_);
}));

app.renderer.view.addEventListener("touchend",(function (p1__13486_SHARP_){
return garden.core.dispatch_click.call(null,p1__13486_SHARP_);
}));

return app.renderer.view.addEventListener("touchmove",(function (p1__13487_SHARP_){
return garden.core.dispatch_move.call(null,p1__13487_SHARP_);
}));
});
garden.core.ui = (function garden$core$ui(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#ui","div#ui",1361076716),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"margin","margin",-995903681),(10)], null)], null),(function (){var iter__5523__auto__ = (function garden$core$ui_$_iter__13490(s__13491){
return (new cljs.core.LazySeq(null,(function (){
var s__13491__$1 = s__13491;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__13491__$1);
if(temp__5804__auto__){
var s__13491__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13491__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__13491__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__13493 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__13492 = (0);
while(true){
if((i__13492 < size__5522__auto__)){
var herb_key = cljs.core._nth.call(null,c__5521__auto__,i__13492);
cljs.core.chunk_append.call(null,b__13493,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),(20),new cljs.core.Keyword(null,"margin","margin",-995903681),(10)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__13492,herb_key,c__5521__auto__,size__5522__auto__,b__13493,s__13491__$2,temp__5804__auto__){
return (function (){
return garden.core.create_herb.call(null,herb_key);
});})(i__13492,herb_key,c__5521__auto__,size__5522__auto__,b__13493,s__13491__$2,temp__5804__auto__))
], null),["Add ",clojure.string.capitalize.call(null,cljs.core.name.call(null,herb_key))].join('')], null));

var G__13494 = (i__13492 + (1));
i__13492 = G__13494;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13493),garden$core$ui_$_iter__13490.call(null,cljs.core.chunk_rest.call(null,s__13491__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13493),null);
}
} else {
var herb_key = cljs.core.first.call(null,s__13491__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),(20),new cljs.core.Keyword(null,"margin","margin",-995903681),(10)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (herb_key,s__13491__$2,temp__5804__auto__){
return (function (){
return garden.core.create_herb.call(null,herb_key);
});})(herb_key,s__13491__$2,temp__5804__auto__))
], null),["Add ",clojure.string.capitalize.call(null,cljs.core.name.call(null,herb_key))].join('')], null),garden$core$ui_$_iter__13490.call(null,cljs.core.rest.call(null,s__13491__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,cljs.core.keys.call(null,garden.core.herb_templates));
})()], null);
});
garden.core.mount_ui = (function garden$core$mount_ui(){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.core.ui], null),document.getElementById("ui-holder"));
});
garden.core.setup_and_go_BANG_ = (function garden$core$setup_and_go_BANG_(){
garden.core.setup_pixi.call(null,new cljs.core.Keyword(null,"pixi","pixi",808009198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,garden.core.app_state)));

garden.core.setup_inputs_BANG_.call(null,new cljs.core.Keyword(null,"pixi","pixi",808009198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,garden.core.app_state)));

return garden.core.mount_ui.call(null);
});
if((typeof garden !== 'undefined') && (typeof garden.core !== 'undefined') && (typeof garden.core._ !== 'undefined')){
} else {
garden.core._ = garden.core.setup_and_go_BANG_.call(null);
}
if((typeof garden !== 'undefined') && (typeof garden.core !== 'undefined') && (typeof garden.core.elapsed !== 'undefined')){
} else {
garden.core.elapsed = cljs.core.atom.call(null,0.0);
}
