// Compiled by ClojureScript 1.11.60 {:target :nodejs, :nodejs-rt false, :optimizations :none}
goog.provide('clothing.core');
goog.require('cljs.core');
goog.require('cljsjs.pixi');
goog.require('cljsjs.howler');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('clothing.data');
clothing.core.node$module$_CIRCA_pixi$ui = require('@pixi/ui');
clothing.core.gen_one_clothing = (function clothing$core$gen_one_clothing(item_key){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),item_key,new cljs.core.Keyword(null,"sprite","sprite",172516848),PIXI.Sprite.from(cljs.core.rand_nth.call(null,(function (){var G__39603 = item_key;
var G__39603__$1 = (((G__39603 instanceof cljs.core.Keyword))?G__39603.fqn:null);
switch (G__39603__$1) {
case "top":
return clothing.data.tops;

break;
case "bottom":
return clothing.data.bottoms;

break;
case "hair":
return clothing.data.hair;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39603__$1)].join('')));

}
})())),new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.rand_nth.call(null,clothing.data.clothing_palette),new cljs.core.Keyword(null,"starting-z","starting-z",180732104),(function (){var G__39604 = item_key;
var G__39604__$1 = (((G__39604 instanceof cljs.core.Keyword))?G__39604.fqn:null);
switch (G__39604__$1) {
case "bottom":
return (1);

break;
case "top":
return (2);

break;
case "hair":
return (3);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39604__$1)].join('')));

}
})()], null);
});
clothing.core.gen_starting_closet = (function clothing$core$gen_starting_closet(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tops","tops",728700889),cljs.core.vec.call(null,cljs.core.repeatedly.call(null,(10),(function (){
return clothing.core.gen_one_clothing.call(null,new cljs.core.Keyword(null,"top","top",-1856271961));
}))),new cljs.core.Keyword(null,"bottoms","bottoms",-116131497),cljs.core.vec.call(null,cljs.core.repeatedly.call(null,(10),(function (){
return clothing.core.gen_one_clothing.call(null,new cljs.core.Keyword(null,"bottom","bottom",-1550509018));
}))),new cljs.core.Keyword(null,"hair","hair",-346317128),cljs.core.vec.call(null,cljs.core.repeatedly.call(null,(7),(function (){
return clothing.core.gen_one_clothing.call(null,new cljs.core.Keyword(null,"hair","hair",-346317128));
})))], null);
});
clothing.core.container_accessor = (function clothing$core$container_accessor(item_key){
var G__39607 = item_key;
var G__39607__$1 = (((G__39607 instanceof cljs.core.Keyword))?G__39607.fqn:null);
switch (G__39607__$1) {
case "top":
return new cljs.core.Keyword(null,"tops","tops",728700889);

break;
case "bottom":
return new cljs.core.Keyword(null,"bottoms","bottoms",-116131497);

break;
case "hair":
return new cljs.core.Keyword(null,"hair","hair",-346317128);

break;
case "wig":
return new cljs.core.Keyword(null,"hair","hair",-346317128);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39607__$1)].join('')));

}
});
if((typeof clothing !== 'undefined') && (typeof clothing.core !== 'undefined') && (typeof clothing.core.initial_state !== 'undefined')){
} else {
clothing.core.initial_state = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"pixi","pixi",808009198),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"app","app",-560961707),(new PIXI.Application(({"width": window.innerWidth, "height": window.innerHeight, "backgroundColor": "0xfdecb2"}))),new cljs.core.Keyword(null,"sprites","sprites",-1835833922),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"body","body",-2049205669),PIXI.Sprite.from("images/body.png"),new cljs.core.Keyword(null,"clothing","clothing",616937133),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),clothing.core.gen_one_clothing.call(null,new cljs.core.Keyword(null,"top","top",-1856271961)),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),clothing.core.gen_one_clothing.call(null,new cljs.core.Keyword(null,"bottom","bottom",-1550509018))], null),new cljs.core.Keyword(null,"closet","closet",1306153736),clothing.core.gen_starting_closet.call(null)], null),new cljs.core.Keyword(null,"containers","containers",-2127048083),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tops","tops",728700889),(new PIXI.Container()),new cljs.core.Keyword(null,"bottoms","bottoms",-116131497),(new PIXI.Container()),new cljs.core.Keyword(null,"hair","hair",-346317128),(new PIXI.Container())], null)], null),new cljs.core.Keyword(null,"prompts","prompts",15471501),cljs.core.shuffle.call(null,clothing.data.prompts),new cljs.core.Keyword(null,"prompt-n","prompt-n",629247777),(0),new cljs.core.Keyword(null,"day","day",-274800446),(1),new cljs.core.Keyword(null,"tucked?","tucked?",1852513561),false,new cljs.core.Keyword(null,"closet-tab","closet-tab",195971997),new cljs.core.Keyword(null,"tops","tops",728700889)], null);
}
if((typeof clothing !== 'undefined') && (typeof clothing.core !== 'undefined') && (typeof clothing.core.app_state !== 'undefined')){
} else {
clothing.core.app_state = reagent.core.atom.call(null,clothing.core.initial_state);
}
clothing.core.reset_app_state_BANG_ = (function clothing$core$reset_app_state_BANG_(){
return cljs.core.reset_BANG_.call(null,clothing.core.app_state,clothing.core.initial_state);
});
clothing.core.add_pixi = (function clothing$core$add_pixi(p__39609){
var map__39610 = p__39609;
var map__39610__$1 = cljs.core.__destructure_map.call(null,map__39610);
var pixi_state = map__39610__$1;
var app = cljs.core.get.call(null,map__39610__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var app_holder = document.getElementById("app-holder");
return app_holder.appendChild(app.view);
});
clothing.core.center_sprite_BANG_ = (function clothing$core$center_sprite_BANG_(sprite){
var half_sprite_width = (sprite.width / (2));
var half_window_width = (window.innerWidth / (2));
var half_sprite_height = (sprite.height / (2));
var half_window_height = (window.innerHeight / (2));
(sprite.x = (half_window_width - half_sprite_width));

return (sprite.y = (half_window_height - half_sprite_height));
});
clothing.core.center_sprite_x_BANG_ = (function clothing$core$center_sprite_x_BANG_(sprite){
var half_window_width = (window.innerWidth / (2));
return (sprite.x = half_window_width);
});
clothing.core.place_figure_BANG_ = (function clothing$core$place_figure_BANG_(sprite){
var top_margin = (15);
clothing.core.center_sprite_x_BANG_.call(null,sprite);

(sprite.anchor.x = 0.5);

return (sprite.y = top_margin);
});
clothing.core.swap_figure_layout_BANG_ = (function clothing$core$swap_figure_layout_BANG_(body_sprite){
var top_margin = (15);
var sprite_width = body_sprite.width;
var half_width = (sprite_width / (2));
var sprite_height = body_sprite.height;
var sprite_origin_x = body_sprite.x;
return cljs.core.swap_BANG_.call(null,clothing.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"figure","figure",-561394079)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),top_margin,new cljs.core.Keyword(null,"left","left",-399115937),(sprite_origin_x - half_width),new cljs.core.Keyword(null,"right","right",-452581833),(sprite_origin_x + half_width),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(top_margin + sprite_height)], null));
});

clothing.core.body_click_BANG_ = (function clothing$core$body_click_BANG_(event){
var is_touch_QMARK_ = (!(((event["touch"]) == null)));
var coords = ((is_touch_QMARK_)?(event.touches[(0)]):event);
var x = coords.pageX;
var y = coords.pageY;
var clothing_key = (((y > (195)))?new cljs.core.Keyword(null,"bottom","bottom",-1550509018):(((y > (120)))?new cljs.core.Keyword(null,"top","top",-1856271961):new cljs.core.Keyword(null,"hair","hair",-346317128)
));
var clothing_sprite = cljs.core.get_in.call(null,cljs.core.deref.call(null,clothing.core.app_state),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pixi","pixi",808009198),new cljs.core.Keyword(null,"sprites","sprites",-1835833922),new cljs.core.Keyword(null,"clothing","clothing",616937133),clothing_key], null));
cljs.core.swap_BANG_.call(null,clothing.core.app_state,(function (state){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pixi","pixi",808009198),new cljs.core.Keyword(null,"sprites","sprites",-1835833922),new cljs.core.Keyword(null,"clothing","clothing",616937133)], null),cljs.core.dissoc,clothing_key);
}));

return clothing.core.setup_closet_item_BANG_.call(null,clothing_sprite);
});
clothing.core.setup_body_sprite_BANG_ = (function clothing$core$setup_body_sprite_BANG_(body_sprite){
clothing.core.place_figure_BANG_.call(null,body_sprite);

clothing.core.swap_figure_layout_BANG_.call(null,body_sprite);

(body_sprite.interactive = true);

body_sprite.on("mousedown",clothing.core.body_click_BANG_);

return body_sprite.on("touchstart",clothing.core.body_click_BANG_);
});
clothing.core.configure_clothing_sprites_BANG_ = (function clothing$core$configure_clothing_sprites_BANG_(p__39611){
var map__39612 = p__39611;
var map__39612__$1 = cljs.core.__destructure_map.call(null,map__39612);
var pixi_state = map__39612__$1;
var app = cljs.core.get.call(null,map__39612__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var sprites = cljs.core.get.call(null,map__39612__$1,new cljs.core.Keyword(null,"sprites","sprites",-1835833922));
var map__39613 = sprites;
var map__39613__$1 = cljs.core.__destructure_map.call(null,map__39613);
var clothing__$1 = cljs.core.get.call(null,map__39613__$1,new cljs.core.Keyword(null,"clothing","clothing",616937133));
var seq__39614 = cljs.core.seq.call(null,cljs.core.vals.call(null,clothing__$1));
var chunk__39615 = null;
var count__39616 = (0);
var i__39617 = (0);
while(true){
if((i__39617 < count__39616)){
var map__39620 = cljs.core._nth.call(null,chunk__39615,i__39617);
var map__39620__$1 = cljs.core.__destructure_map.call(null,map__39620);
var sprite = cljs.core.get.call(null,map__39620__$1,new cljs.core.Keyword(null,"sprite","sprite",172516848));
var color = cljs.core.get.call(null,map__39620__$1,new cljs.core.Keyword(null,"color","color",1011675173));
clothing.core.place_figure_BANG_.call(null,sprite);

(sprite.tint = color);

(sprite.scale.x = (1));

(sprite.scale.y = (1));

(sprite.interactive = false);


var G__39622 = seq__39614;
var G__39623 = chunk__39615;
var G__39624 = count__39616;
var G__39625 = (i__39617 + (1));
seq__39614 = G__39622;
chunk__39615 = G__39623;
count__39616 = G__39624;
i__39617 = G__39625;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__39614);
if(temp__5804__auto__){
var seq__39614__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39614__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__39614__$1);
var G__39626 = cljs.core.chunk_rest.call(null,seq__39614__$1);
var G__39627 = c__5568__auto__;
var G__39628 = cljs.core.count.call(null,c__5568__auto__);
var G__39629 = (0);
seq__39614 = G__39626;
chunk__39615 = G__39627;
count__39616 = G__39628;
i__39617 = G__39629;
continue;
} else {
var map__39621 = cljs.core.first.call(null,seq__39614__$1);
var map__39621__$1 = cljs.core.__destructure_map.call(null,map__39621);
var sprite = cljs.core.get.call(null,map__39621__$1,new cljs.core.Keyword(null,"sprite","sprite",172516848));
var color = cljs.core.get.call(null,map__39621__$1,new cljs.core.Keyword(null,"color","color",1011675173));
clothing.core.place_figure_BANG_.call(null,sprite);

(sprite.tint = color);

(sprite.scale.x = (1));

(sprite.scale.y = (1));

(sprite.interactive = false);


var G__39630 = cljs.core.next.call(null,seq__39614__$1);
var G__39631 = null;
var G__39632 = (0);
var G__39633 = (0);
seq__39614 = G__39630;
chunk__39615 = G__39631;
count__39616 = G__39632;
i__39617 = G__39633;
continue;
}
} else {
return null;
}
}
break;
}
});
clothing.core.configure_body_and_clothes_BANG_ = (function clothing$core$configure_body_and_clothes_BANG_(p__39634){
var map__39635 = p__39634;
var map__39635__$1 = cljs.core.__destructure_map.call(null,map__39635);
var pixi_state = map__39635__$1;
var app = cljs.core.get.call(null,map__39635__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var sprites = cljs.core.get.call(null,map__39635__$1,new cljs.core.Keyword(null,"sprites","sprites",-1835833922));
var map__39636 = sprites;
var map__39636__$1 = cljs.core.__destructure_map.call(null,map__39636);
var body = cljs.core.get.call(null,map__39636__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var clothing__$1 = cljs.core.get.call(null,map__39636__$1,new cljs.core.Keyword(null,"clothing","clothing",616937133));
clothing.core.setup_body_sprite_BANG_.call(null,body);

return clothing.core.configure_clothing_sprites_BANG_.call(null,pixi_state);
});
clothing.core.add_sprites_to_container_BANG_ = (function clothing$core$add_sprites_to_container_BANG_(container,sprites){
var seq__39637 = cljs.core.seq.call(null,sprites);
var chunk__39638 = null;
var count__39639 = (0);
var i__39640 = (0);
while(true){
if((i__39640 < count__39639)){
var sprite = cljs.core._nth.call(null,chunk__39638,i__39640);
container.addChild(sprite);


var G__39641 = seq__39637;
var G__39642 = chunk__39638;
var G__39643 = count__39639;
var G__39644 = (i__39640 + (1));
seq__39637 = G__39641;
chunk__39638 = G__39642;
count__39639 = G__39643;
i__39640 = G__39644;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__39637);
if(temp__5804__auto__){
var seq__39637__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39637__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__39637__$1);
var G__39645 = cljs.core.chunk_rest.call(null,seq__39637__$1);
var G__39646 = c__5568__auto__;
var G__39647 = cljs.core.count.call(null,c__5568__auto__);
var G__39648 = (0);
seq__39637 = G__39645;
chunk__39638 = G__39646;
count__39639 = G__39647;
i__39640 = G__39648;
continue;
} else {
var sprite = cljs.core.first.call(null,seq__39637__$1);
container.addChild(sprite);


var G__39649 = cljs.core.next.call(null,seq__39637__$1);
var G__39650 = null;
var G__39651 = (0);
var G__39652 = (0);
seq__39637 = G__39649;
chunk__39638 = G__39650;
count__39639 = G__39651;
i__39640 = G__39652;
continue;
}
} else {
return null;
}
}
break;
}
});
clothing.core.add_closet_sprites_BANG_ = (function clothing$core$add_closet_sprites_BANG_(p__39653){
var map__39654 = p__39653;
var map__39654__$1 = cljs.core.__destructure_map.call(null,map__39654);
var pixi_state = map__39654__$1;
var sprites = cljs.core.get.call(null,map__39654__$1,new cljs.core.Keyword(null,"sprites","sprites",-1835833922));
var containers = cljs.core.get.call(null,map__39654__$1,new cljs.core.Keyword(null,"containers","containers",-2127048083));
var map__39655 = new cljs.core.Keyword(null,"closet","closet",1306153736).cljs$core$IFn$_invoke$arity$1(sprites);
var map__39655__$1 = cljs.core.__destructure_map.call(null,map__39655);
var tops = cljs.core.get.call(null,map__39655__$1,new cljs.core.Keyword(null,"tops","tops",728700889));
var bottoms = cljs.core.get.call(null,map__39655__$1,new cljs.core.Keyword(null,"bottoms","bottoms",-116131497));
var hair = cljs.core.get.call(null,map__39655__$1,new cljs.core.Keyword(null,"hair","hair",-346317128));
clothing.core.add_sprites_to_container_BANG_.call(null,new cljs.core.Keyword(null,"tops","tops",728700889).cljs$core$IFn$_invoke$arity$1(containers),cljs.core.map.call(null,new cljs.core.Keyword(null,"sprite","sprite",172516848),tops));

clothing.core.add_sprites_to_container_BANG_.call(null,new cljs.core.Keyword(null,"bottoms","bottoms",-116131497).cljs$core$IFn$_invoke$arity$1(containers),cljs.core.map.call(null,new cljs.core.Keyword(null,"sprite","sprite",172516848),bottoms));

return clothing.core.add_sprites_to_container_BANG_.call(null,new cljs.core.Keyword(null,"hair","hair",-346317128).cljs$core$IFn$_invoke$arity$1(containers),cljs.core.map.call(null,new cljs.core.Keyword(null,"sprite","sprite",172516848),hair));
});
clothing.core.add_all_sprites_BANG_ = (function clothing$core$add_all_sprites_BANG_(p__39656){
var map__39657 = p__39656;
var map__39657__$1 = cljs.core.__destructure_map.call(null,map__39657);
var pixi_state = map__39657__$1;
var app = cljs.core.get.call(null,map__39657__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var sprites = cljs.core.get.call(null,map__39657__$1,new cljs.core.Keyword(null,"sprites","sprites",-1835833922));
var containers = cljs.core.get.call(null,map__39657__$1,new cljs.core.Keyword(null,"containers","containers",-2127048083));
var map__39658 = sprites;
var map__39658__$1 = cljs.core.__destructure_map.call(null,map__39658);
var body = cljs.core.get.call(null,map__39658__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var clothing__$1 = cljs.core.get.call(null,map__39658__$1,new cljs.core.Keyword(null,"clothing","clothing",616937133));
var closet = cljs.core.get.call(null,map__39658__$1,new cljs.core.Keyword(null,"closet","closet",1306153736));
var clothing_sprites = cljs.core.map.call(null,new cljs.core.Keyword(null,"sprite","sprite",172516848),cljs.core.vals.call(null,clothing__$1));
var closet_sprites = cljs.core.map.call(null,new cljs.core.Keyword(null,"sprite","sprite",172516848),closet);
app.stage.addChild(body);

return clothing.core.add_closet_sprites_BANG_.call(null,pixi_state);
});
clothing.core.closet_clothes_sprites = (function clothing$core$closet_clothes_sprites(p__39659){
var map__39660 = p__39659;
var map__39660__$1 = cljs.core.__destructure_map.call(null,map__39660);
var pixi_state = map__39660__$1;
var sprites = cljs.core.get.call(null,map__39660__$1,new cljs.core.Keyword(null,"sprites","sprites",-1835833922));
var app = cljs.core.get.call(null,map__39660__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var closet = new cljs.core.Keyword(null,"closet","closet",1306153736).cljs$core$IFn$_invoke$arity$1(sprites);
var iter__5523__auto__ = (function clothing$core$closet_clothes_sprites_$_iter__39661(s__39662){
return (new cljs.core.LazySeq(null,(function (){
var s__39662__$1 = s__39662;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__39662__$1);
if(temp__5804__auto__){
var s__39662__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39662__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__39662__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__39664 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__39663 = (0);
while(true){
if((i__39663 < size__5522__auto__)){
var map__39665 = cljs.core._nth.call(null,c__5521__auto__,i__39663);
var map__39665__$1 = cljs.core.__destructure_map.call(null,map__39665);
var sprite = cljs.core.get.call(null,map__39665__$1,new cljs.core.Keyword(null,"sprite","sprite",172516848));
var color = cljs.core.get.call(null,map__39665__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var _ = (function (){
(sprite.scale.x = 0.5);

(sprite.scale.y = 0.5);

return (sprite.tint = color);
})()
;
cljs.core.chunk_append.call(null,b__39664,sprite);

var G__39667 = (i__39663 + (1));
i__39663 = G__39667;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39664),clothing$core$closet_clothes_sprites_$_iter__39661.call(null,cljs.core.chunk_rest.call(null,s__39662__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39664),null);
}
} else {
var map__39666 = cljs.core.first.call(null,s__39662__$2);
var map__39666__$1 = cljs.core.__destructure_map.call(null,map__39666);
var sprite = cljs.core.get.call(null,map__39666__$1,new cljs.core.Keyword(null,"sprite","sprite",172516848));
var color = cljs.core.get.call(null,map__39666__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var _ = (function (){
(sprite.scale.x = 0.5);

(sprite.scale.y = 0.5);

return (sprite.tint = color);
})()
;
return cljs.core.cons.call(null,sprite,clothing$core$closet_clothes_sprites_$_iter__39661.call(null,cljs.core.rest.call(null,s__39662__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,closet);
});
clothing.core.setup_closet_BANG_ = (function clothing$core$setup_closet_BANG_(p__39668){
var map__39669 = p__39668;
var map__39669__$1 = cljs.core.__destructure_map.call(null,map__39669);
var pixi_state = map__39669__$1;
var app = cljs.core.get.call(null,map__39669__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var containers = cljs.core.get.call(null,map__39669__$1,new cljs.core.Keyword(null,"containers","containers",-2127048083));
var closet_base = (new PIXI.Graphics());
var body_sprite = cljs.core.get_in.call(null,cljs.core.deref.call(null,clothing.core.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pixi","pixi",808009198),new cljs.core.Keyword(null,"sprites","sprites",-1835833922),new cljs.core.Keyword(null,"body","body",-2049205669)], null));
closet_base.beginFill(clothing.data.closet_background);

closet_base.drawRect((10),(((256) + (15)) + (50)),(window.innerWidth - (30)),(window.innerHeight / (2)));

app.stage.addChild(closet_base);

cljs.core.swap_BANG_.call(null,clothing.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pixi","pixi",808009198),new cljs.core.Keyword(null,"graphics","graphics",-2079995979),new cljs.core.Keyword(null,"closet","closet",1306153736)], null),closet_base);

return app.stage.addChild(new cljs.core.Keyword(null,"tops","tops",728700889).cljs$core$IFn$_invoke$arity$1(containers));
});
clothing.core.pixi_swap_parent_BANG_ = (function clothing$core$pixi_swap_parent_BANG_(sprite,old_parent,new_parent){
old_parent.removeChild(sprite);

return new_parent.addChild(sprite);
});
clothing.core.pixi_swap_clothes_BANG_ = (function clothing$core$pixi_swap_clothes_BANG_(current,new$){
var map__39670 = new cljs.core.Keyword(null,"pixi","pixi",808009198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clothing.core.app_state));
var map__39670__$1 = cljs.core.__destructure_map.call(null,map__39670);
var app = cljs.core.get.call(null,map__39670__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var containers = cljs.core.get.call(null,map__39670__$1,new cljs.core.Keyword(null,"containers","containers",-2127048083));
if(cljs.core.truth_(current)){
clothing.core.pixi_swap_parent_BANG_.call(null,new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(current),app.stage,cljs.core.get.call(null,containers,clothing.core.container_accessor.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(current))));
} else {
}

if(cljs.core.truth_(new$)){
return clothing.core.pixi_swap_parent_BANG_.call(null,new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(new$),app.stage,cljs.core.get.call(null,containers,clothing.core.container_accessor.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(new$))));
} else {
return null;
}
});
clothing.core.closet_click_BANG_ = (function clothing$core$closet_click_BANG_(event,p__39671){
var map__39672 = p__39671;
var map__39672__$1 = cljs.core.__destructure_map.call(null,map__39672);
var item = map__39672__$1;
var type = cljs.core.get.call(null,map__39672__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var color = cljs.core.get.call(null,map__39672__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var is_touch_QMARK_ = (!(((event["touch"]) == null)));
var coords = ((is_touch_QMARK_)?(event.touches[(0)]):event);
var x = coords.pageX;
var y = coords.pageY;
var current_clothing = cljs.core.get_in.call(null,cljs.core.deref.call(null,clothing.core.app_state),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pixi","pixi",808009198),new cljs.core.Keyword(null,"sprites","sprites",-1835833922),new cljs.core.Keyword(null,"clothing","clothing",616937133),type], null));
var containers = cljs.core.get_in.call(null,cljs.core.deref.call(null,clothing.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pixi","pixi",808009198),new cljs.core.Keyword(null,"containers","containers",-2127048083)], null));
cljs.core.swap_BANG_.call(null,clothing.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pixi","pixi",808009198),new cljs.core.Keyword(null,"sprites","sprites",-1835833922),new cljs.core.Keyword(null,"clothing","clothing",616937133),type], null),item);

cljs.core.swap_BANG_.call(null,clothing.core.app_state,(function (state){
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pixi","pixi",808009198),new cljs.core.Keyword(null,"sprites","sprites",-1835833922),new cljs.core.Keyword(null,"clothing","clothing",616937133),type], null),item);
}));

clothing.core.pixi_swap_clothes_BANG_.call(null,current_clothing,item);

if(cljs.core.truth_(current_clothing)){
clothing.core.setup_closet_item_BANG_.call(null,current_clothing);
} else {
}

return clothing.core.configure_clothing_sprites_BANG_.call(null,new cljs.core.Keyword(null,"pixi","pixi",808009198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clothing.core.app_state)));
});
clothing.core.init_closet_layout_BANG_ = (function clothing$core$init_closet_layout_BANG_(p__39681){
var map__39682 = p__39681;
var map__39682__$1 = cljs.core.__destructure_map.call(null,map__39682);
var pixi_state = map__39682__$1;
var sprites = cljs.core.get.call(null,map__39682__$1,new cljs.core.Keyword(null,"sprites","sprites",-1835833922));
var graphics = cljs.core.get.call(null,map__39682__$1,new cljs.core.Keyword(null,"graphics","graphics",-2079995979));
var app = cljs.core.get.call(null,map__39682__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var map__39683 = new cljs.core.Keyword(null,"closet","closet",1306153736).cljs$core$IFn$_invoke$arity$1(sprites);
var map__39683__$1 = cljs.core.__destructure_map.call(null,map__39683);
var tops = cljs.core.get.call(null,map__39683__$1,new cljs.core.Keyword(null,"tops","tops",728700889));
var bottoms = cljs.core.get.call(null,map__39683__$1,new cljs.core.Keyword(null,"bottoms","bottoms",-116131497));
var hair = cljs.core.get.call(null,map__39683__$1,new cljs.core.Keyword(null,"hair","hair",-346317128));
var clothing_sprite_width = (128);
var clothing_sprite_height = (128);
var clothes_per_row = ((window.innerWidth - (100)) / (clothing_sprite_width / (2)));
var closet_base_top = ((((256) + (15)) + (50)) + (40));
var max_n_clothing = (function (){var x__5130__auto__ = (function (){var x__5130__auto__ = cljs.core.count.call(null,tops);
var y__5131__auto__ = cljs.core.count.call(null,bottoms);
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})();
var y__5131__auto__ = cljs.core.count.call(null,hair);
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})();
var nested_n = cljs.core.mapv.call(null,cljs.core.vec,cljs.core.partition_all.call(null,clothes_per_row,cljs.core.range.call(null,max_n_clothing)));
var closet_coords = (function (){var iter__5523__auto__ = (function clothing$core$init_closet_layout_BANG__$_iter__39684(s__39685){
return (new cljs.core.LazySeq(null,(function (){
var s__39685__$1 = s__39685;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__39685__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var y = cljs.core.first.call(null,xs__6360__auto__);
var iterys__5519__auto__ = ((function (s__39685__$1,y,xs__6360__auto__,temp__5804__auto__,map__39683,map__39683__$1,tops,bottoms,hair,clothing_sprite_width,clothing_sprite_height,clothes_per_row,closet_base_top,max_n_clothing,nested_n,map__39682,map__39682__$1,pixi_state,sprites,graphics,app){
return (function clothing$core$init_closet_layout_BANG__$_iter__39684_$_iter__39686(s__39687){
return (new cljs.core.LazySeq(null,((function (s__39685__$1,y,xs__6360__auto__,temp__5804__auto__,map__39683,map__39683__$1,tops,bottoms,hair,clothing_sprite_width,clothing_sprite_height,clothes_per_row,closet_base_top,max_n_clothing,nested_n,map__39682,map__39682__$1,pixi_state,sprites,graphics,app){
return (function (){
var s__39687__$1 = s__39687;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__39687__$1);
if(temp__5804__auto____$1){
var s__39687__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39687__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__39687__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__39689 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__39688 = (0);
while(true){
if((i__39688 < size__5522__auto__)){
var x = cljs.core._nth.call(null,c__5521__auto__,i__39688);
cljs.core.chunk_append.call(null,b__39689,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x * (clothing_sprite_width / (2))) + (clothing_sprite_width / (4))),(closet_base_top + (y * (clothing_sprite_height / (1))))], null));

var G__39692 = (i__39688 + (1));
i__39688 = G__39692;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39689),clothing$core$init_closet_layout_BANG__$_iter__39684_$_iter__39686.call(null,cljs.core.chunk_rest.call(null,s__39687__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39689),null);
}
} else {
var x = cljs.core.first.call(null,s__39687__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x * (clothing_sprite_width / (2))) + (clothing_sprite_width / (4))),(closet_base_top + (y * (clothing_sprite_height / (1))))], null),clothing$core$init_closet_layout_BANG__$_iter__39684_$_iter__39686.call(null,cljs.core.rest.call(null,s__39687__$2)));
}
} else {
return null;
}
break;
}
});})(s__39685__$1,y,xs__6360__auto__,temp__5804__auto__,map__39683,map__39683__$1,tops,bottoms,hair,clothing_sprite_width,clothing_sprite_height,clothes_per_row,closet_base_top,max_n_clothing,nested_n,map__39682,map__39682__$1,pixi_state,sprites,graphics,app))
,null,null));
});})(s__39685__$1,y,xs__6360__auto__,temp__5804__auto__,map__39683,map__39683__$1,tops,bottoms,hair,clothing_sprite_width,clothing_sprite_height,clothes_per_row,closet_base_top,max_n_clothing,nested_n,map__39682,map__39682__$1,pixi_state,sprites,graphics,app))
;
var fs__5520__auto__ = cljs.core.seq.call(null,iterys__5519__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.nth.call(null,nested_n,y)))));
if(fs__5520__auto__){
return cljs.core.concat.call(null,fs__5520__auto__,clothing$core$init_closet_layout_BANG__$_iter__39684.call(null,cljs.core.rest.call(null,s__39685__$1)));
} else {
var G__39693 = cljs.core.rest.call(null,s__39685__$1);
s__39685__$1 = G__39693;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,nested_n)));
})();
return cljs.core.swap_BANG_.call(null,clothing.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pixi","pixi",808009198),new cljs.core.Keyword(null,"sprites","sprites",-1835833922),new cljs.core.Keyword(null,"closet","closet",1306153736)], null),(function (p__39690){
var map__39691 = p__39690;
var map__39691__$1 = cljs.core.__destructure_map.call(null,map__39691);
var tops__$1 = cljs.core.get.call(null,map__39691__$1,new cljs.core.Keyword(null,"tops","tops",728700889));
var bottoms__$1 = cljs.core.get.call(null,map__39691__$1,new cljs.core.Keyword(null,"bottoms","bottoms",-116131497));
var hair__$1 = cljs.core.get.call(null,map__39691__$1,new cljs.core.Keyword(null,"hair","hair",-346317128));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tops","tops",728700889),cljs.core.mapv.call(null,(function (p1__39673_SHARP_,p2__39674_SHARP_){
return cljs.core.assoc.call(null,p1__39673_SHARP_,new cljs.core.Keyword(null,"closet-coords","closet-coords",-675071055),p2__39674_SHARP_);
}),tops__$1,closet_coords),new cljs.core.Keyword(null,"bottoms","bottoms",-116131497),cljs.core.mapv.call(null,(function (p1__39675_SHARP_,p2__39676_SHARP_){
return cljs.core.assoc.call(null,p1__39675_SHARP_,new cljs.core.Keyword(null,"closet-coords","closet-coords",-675071055),p2__39676_SHARP_);
}),bottoms__$1,closet_coords),new cljs.core.Keyword(null,"hair","hair",-346317128),cljs.core.mapv.call(null,(function (p1__39677_SHARP_,p2__39678_SHARP_){
return cljs.core.assoc.call(null,p1__39677_SHARP_,new cljs.core.Keyword(null,"closet-coords","closet-coords",-675071055),p2__39678_SHARP_);
}),hair__$1,closet_coords)], null);
}));
});
clothing.core.setup_closet_item_BANG_ = (function clothing$core$setup_closet_item_BANG_(p__39696){
var map__39697 = p__39696;
var map__39697__$1 = cljs.core.__destructure_map.call(null,map__39697);
var closet_item = map__39697__$1;
var sprite = cljs.core.get.call(null,map__39697__$1,new cljs.core.Keyword(null,"sprite","sprite",172516848));
var color = cljs.core.get.call(null,map__39697__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var closet_coords = cljs.core.get.call(null,map__39697__$1,new cljs.core.Keyword(null,"closet-coords","closet-coords",-675071055));
var starting_z = cljs.core.get.call(null,map__39697__$1,new cljs.core.Keyword(null,"starting-z","starting-z",180732104));
var vec__39698 = closet_coords;
var closet_x = cljs.core.nth.call(null,vec__39698,(0),null);
var closet_y = cljs.core.nth.call(null,vec__39698,(1),null);
(sprite.anchor.x = (0));

(sprite.scale.x = 0.5);

(sprite.scale.y = 0.5);

(sprite.x = closet_x);

(sprite.y = closet_y);

(sprite.zIndex = starting_z);

(sprite.tint = color);

(sprite.interactive = true);

(sprite.buttonMode = true);

sprite.on("mousedown",(function (p1__39694_SHARP_){
return clothing.core.closet_click_BANG_.call(null,p1__39694_SHARP_,closet_item);
}));

return sprite.on("touchstart",(function (p1__39695_SHARP_){
return clothing.core.closet_click_BANG_.call(null,p1__39695_SHARP_,closet_item);
}));
});
clothing.core.setup_closet_clothes_BANG_ = (function clothing$core$setup_closet_clothes_BANG_(p__39701){
var map__39702 = p__39701;
var map__39702__$1 = cljs.core.__destructure_map.call(null,map__39702);
var pixi_state = map__39702__$1;
var sprites = cljs.core.get.call(null,map__39702__$1,new cljs.core.Keyword(null,"sprites","sprites",-1835833922));
var graphics = cljs.core.get.call(null,map__39702__$1,new cljs.core.Keyword(null,"graphics","graphics",-2079995979));
var app = cljs.core.get.call(null,map__39702__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var all_clothes = cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY,cljs.core.vals.call(null,new cljs.core.Keyword(null,"closet","closet",1306153736).cljs$core$IFn$_invoke$arity$1(sprites)));
var seq__39703 = cljs.core.seq.call(null,all_clothes);
var chunk__39704 = null;
var count__39705 = (0);
var i__39706 = (0);
while(true){
if((i__39706 < count__39705)){
var item = cljs.core._nth.call(null,chunk__39704,i__39706);
clothing.core.setup_closet_item_BANG_.call(null,item);


var G__39707 = seq__39703;
var G__39708 = chunk__39704;
var G__39709 = count__39705;
var G__39710 = (i__39706 + (1));
seq__39703 = G__39707;
chunk__39704 = G__39708;
count__39705 = G__39709;
i__39706 = G__39710;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__39703);
if(temp__5804__auto__){
var seq__39703__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39703__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__39703__$1);
var G__39711 = cljs.core.chunk_rest.call(null,seq__39703__$1);
var G__39712 = c__5568__auto__;
var G__39713 = cljs.core.count.call(null,c__5568__auto__);
var G__39714 = (0);
seq__39703 = G__39711;
chunk__39704 = G__39712;
count__39705 = G__39713;
i__39706 = G__39714;
continue;
} else {
var item = cljs.core.first.call(null,seq__39703__$1);
clothing.core.setup_closet_item_BANG_.call(null,item);


var G__39715 = cljs.core.next.call(null,seq__39703__$1);
var G__39716 = null;
var G__39717 = (0);
var G__39718 = (0);
seq__39703 = G__39715;
chunk__39704 = G__39716;
count__39705 = G__39717;
i__39706 = G__39718;
continue;
}
} else {
return null;
}
}
break;
}
});
clothing.core.setup_pixi = (function clothing$core$setup_pixi(pixi_state){
clothing.core.add_pixi.call(null,pixi_state);

(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(pixi_state).stage.sortableChildren = true);

clothing.core.setup_closet_BANG_.call(null,pixi_state);

clothing.core.add_all_sprites_BANG_.call(null,pixi_state);

clothing.core.configure_body_and_clothes_BANG_.call(null,pixi_state);

clothing.core.init_closet_layout_BANG_.call(null,pixi_state);

return clothing.core.setup_closet_clothes_BANG_.call(null,new cljs.core.Keyword(null,"pixi","pixi",808009198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clothing.core.app_state)));
});
clothing.core.setup_game_state = (function clothing$core$setup_game_state(){
return cljs.core.PersistentArrayMap.EMPTY;
});
clothing.core.calculate_layout = (function clothing$core$calculate_layout(){
var margin = (35);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),margin], null);
});
clothing.core.setup_layout_BANG_ = (function clothing$core$setup_layout_BANG_(){
var window_width = window.innerWidth;
var window_height = window.innerHeight;
var margin = (35);
return new cljs.core.Keyword(null,"TODO","TODO",-523795145);
});
clothing.core.show_closet_tab_BANG_ = (function clothing$core$show_closet_tab_BANG_(new_tab){
var map__39719 = cljs.core.deref.call(null,clothing.core.app_state);
var map__39719__$1 = cljs.core.__destructure_map.call(null,map__39719);
var closet_tab = cljs.core.get.call(null,map__39719__$1,new cljs.core.Keyword(null,"closet-tab","closet-tab",195971997));
var pixi = cljs.core.get.call(null,map__39719__$1,new cljs.core.Keyword(null,"pixi","pixi",808009198));
var map__39720 = pixi;
var map__39720__$1 = cljs.core.__destructure_map.call(null,map__39720);
var app = cljs.core.get.call(null,map__39720__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var containers = cljs.core.get.call(null,map__39720__$1,new cljs.core.Keyword(null,"containers","containers",-2127048083));
app.stage.removeChild(cljs.core.get.call(null,containers,closet_tab));

app.stage.addChild(cljs.core.get.call(null,containers,new_tab));

return cljs.core.swap_BANG_.call(null,clothing.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"closet-tab","closet-tab",195971997),new_tab);
});
clothing.core.toggle_tucked_shirt_BANG_ = (function clothing$core$toggle_tucked_shirt_BANG_(){
var clothing__$1 = cljs.core.get_in.call(null,cljs.core.deref.call(null,clothing.core.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pixi","pixi",808009198),new cljs.core.Keyword(null,"sprites","sprites",-1835833922),new cljs.core.Keyword(null,"clothing","clothing",616937133)], null));
var bottom_sprite = cljs.core.get_in.call(null,clothing__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"sprite","sprite",172516848)], null));
var bottom_z = bottom_sprite.zIndex;
var top_sprite = cljs.core.get_in.call(null,clothing__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"sprite","sprite",172516848)], null));
var top_z = ((cljs.core._EQ_.call(null,bottom_z,top_sprite.zIndex))?((cljs.core._EQ_.call(null,bottom_z,(2)))?(1):(2)):top_sprite.zIndex);
(bottom_sprite.zIndex = top_z);

(top_sprite.zIndex = bottom_z);

return cljs.core.swap_BANG_.call(null,clothing.core.app_state,cljs.core.update,new cljs.core.Keyword(null,"tucked?","tucked?",1852513561),cljs.core.not);
});
clothing.core.next_day_BANG_ = (function clothing$core$next_day_BANG_(){
var seq__39722_39726 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,clothing.core.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pixi","pixi",808009198),new cljs.core.Keyword(null,"sprites","sprites",-1835833922),new cljs.core.Keyword(null,"clothing","clothing",616937133)], null))));
var chunk__39723_39727 = null;
var count__39724_39728 = (0);
var i__39725_39729 = (0);
while(true){
if((i__39725_39729 < count__39724_39728)){
var item_39730 = cljs.core._nth.call(null,chunk__39723_39727,i__39725_39729);
clothing.core.setup_closet_item_BANG_.call(null,item_39730);


var G__39731 = seq__39722_39726;
var G__39732 = chunk__39723_39727;
var G__39733 = count__39724_39728;
var G__39734 = (i__39725_39729 + (1));
seq__39722_39726 = G__39731;
chunk__39723_39727 = G__39732;
count__39724_39728 = G__39733;
i__39725_39729 = G__39734;
continue;
} else {
var temp__5804__auto___39735 = cljs.core.seq.call(null,seq__39722_39726);
if(temp__5804__auto___39735){
var seq__39722_39736__$1 = temp__5804__auto___39735;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39722_39736__$1)){
var c__5568__auto___39737 = cljs.core.chunk_first.call(null,seq__39722_39736__$1);
var G__39738 = cljs.core.chunk_rest.call(null,seq__39722_39736__$1);
var G__39739 = c__5568__auto___39737;
var G__39740 = cljs.core.count.call(null,c__5568__auto___39737);
var G__39741 = (0);
seq__39722_39726 = G__39738;
chunk__39723_39727 = G__39739;
count__39724_39728 = G__39740;
i__39725_39729 = G__39741;
continue;
} else {
var item_39742 = cljs.core.first.call(null,seq__39722_39736__$1);
clothing.core.setup_closet_item_BANG_.call(null,item_39742);


var G__39743 = cljs.core.next.call(null,seq__39722_39736__$1);
var G__39744 = null;
var G__39745 = (0);
var G__39746 = (0);
seq__39722_39726 = G__39743;
chunk__39723_39727 = G__39744;
count__39724_39728 = G__39745;
i__39725_39729 = G__39746;
continue;
}
} else {
}
}
break;
}

return cljs.core.swap_BANG_.call(null,clothing.core.app_state,(function (p1__39721_SHARP_){
return cljs.core.assoc.call(null,cljs.core.assoc_in.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,p1__39721_SHARP_,new cljs.core.Keyword(null,"day","day",-274800446),cljs.core.inc),new cljs.core.Keyword(null,"prompt-n","prompt-n",629247777),cljs.core.inc),new cljs.core.Keyword(null,"prompt-n","prompt-n",629247777),cljs.core.mod,cljs.core.count.call(null,new cljs.core.Keyword(null,"prompts","prompts",15471501).cljs$core$IFn$_invoke$arity$1(p1__39721_SHARP_))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pixi","pixi",808009198),new cljs.core.Keyword(null,"sprites","sprites",-1835833922),new cljs.core.Keyword(null,"clothing","clothing",616937133)], null),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"tucked?","tucked?",1852513561),false);
}));
});
clothing.core.ui = (function clothing$core$ui(){
var map__39747 = cljs.core.deref.call(null,clothing.core.app_state);
var map__39747__$1 = cljs.core.__destructure_map.call(null,map__39747);
var prompts = cljs.core.get.call(null,map__39747__$1,new cljs.core.Keyword(null,"prompts","prompts",15471501));
var prompt_n = cljs.core.get.call(null,map__39747__$1,new cljs.core.Keyword(null,"prompt-n","prompt-n",629247777));
var day = cljs.core.get.call(null,map__39747__$1,new cljs.core.Keyword(null,"day","day",-274800446));
var tucked_QMARK_ = cljs.core.get.call(null,map__39747__$1,new cljs.core.Keyword(null,"tucked?","tucked?",1852513561));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#ui","div#ui",1361076716),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"margin","margin",-995903681),(10),new cljs.core.Keyword(null,"width","width",-384071477),(window.innerWidth - (50)),new cljs.core.Keyword(null,"height","height",1025178622),(window.innerHeight - (50)),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),(125),new cljs.core.Keyword(null,"left","left",-399115937),"15%",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"transform","transform",1381301764),"translateX(-50%)"], null)], null),["Day ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),(200),new cljs.core.Keyword(null,"left","left",-399115937),"15%",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"transform","transform",1381301764),"translateX(-50%)",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"auto"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),clothing.core.toggle_tucked_shirt_BANG_], null),((cljs.core.not.call(null,tucked_QMARK_))?"Tuck Shirt":"Untuck Shirt")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p#prompt","p#prompt",-1087711960),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),(255),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"width","width",-384071477),window.innerWidth,new cljs.core.Keyword(null,"left","left",-399115937),"50%",new cljs.core.Keyword(null,"color","color",1011675173),"#2c3e50",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"transform","transform",1381301764),"translateX(-50%)"], null)], null),["Today: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,prompts,prompt_n))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),"75%",new cljs.core.Keyword(null,"top","top",-1856271961),(150),new cljs.core.Keyword(null,"height","height",1025178622),"3em",new cljs.core.Keyword(null,"width","width",-384071477),"8em",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"auto"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),clothing.core.next_day_BANG_], null),"All dressed!"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#closet-sorter","div#closet-sorter",1926124402),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),(((256) + (15)) + (50))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"8em",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"auto"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return clothing.core.show_closet_tab_BANG_.call(null,new cljs.core.Keyword(null,"tops","tops",728700889));
})], null),"Tops"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"8em",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"auto"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return clothing.core.show_closet_tab_BANG_.call(null,new cljs.core.Keyword(null,"bottoms","bottoms",-116131497));
})], null),"Bottoms"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"8em",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"auto"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return clothing.core.show_closet_tab_BANG_.call(null,new cljs.core.Keyword(null,"hair","hair",-346317128));
})], null),"Wigs"], null)], null)], null);
});
clothing.core.mount_ui = (function clothing$core$mount_ui(){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clothing.core.ui], null),document.getElementById("ui-holder"));
});
clothing.core.dispatch_select_BANG_ = (function clothing$core$dispatch_select_BANG_(event){
var is_touch_QMARK_ = (!(((event["touch"]) == null)));
var coords = ((is_touch_QMARK_)?(event.touches[(0)]):event);
var x = coords.pageX;
var y = coords.pageY;
return null;
});
clothing.core.setup_inputs_BANG_ = (function clothing$core$setup_inputs_BANG_(p__39752){
var map__39753 = p__39752;
var map__39753__$1 = cljs.core.__destructure_map.call(null,map__39753);
var pixi_state = map__39753__$1;
var app = cljs.core.get.call(null,map__39753__$1,new cljs.core.Keyword(null,"app","app",-560961707));
return app.renderer.view.addEventListener("click",(function (p1__39748_SHARP_){
return clothing.core.dispatch_select_BANG_.call(null,p1__39748_SHARP_);
}));
});
clothing.core.setup_and_go_BANG_ = (function clothing$core$setup_and_go_BANG_(){
clothing.core.setup_pixi.call(null,new cljs.core.Keyword(null,"pixi","pixi",808009198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clothing.core.app_state)));

clothing.core.setup_inputs_BANG_.call(null,new cljs.core.Keyword(null,"pixi","pixi",808009198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clothing.core.app_state)));

return clothing.core.mount_ui.call(null);
});
clothing.core._ = clothing.core.setup_and_go_BANG_.call(null);
if((typeof clothing !== 'undefined') && (typeof clothing.core !== 'undefined') && (typeof clothing.core.elapsed !== 'undefined')){
} else {
clothing.core.elapsed = cljs.core.atom.call(null,0.0);
}

//# sourceMappingURL=core.js.map
