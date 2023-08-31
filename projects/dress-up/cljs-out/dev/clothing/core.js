// Compiled by ClojureScript 1.11.60 {:target :nodejs, :nodejs-rt false, :optimizations :simple}
goog.provide('clothing.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('clothing.data');
clothing.core.gen_one_clothing = (function clothing$core$gen_one_clothing(item_key){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),item_key,new cljs.core.Keyword(null,"sprite","sprite",172516848),PIXI.Sprite.from(cljs.core.rand_nth.call(null,(function (){var G__11066 = item_key;
var G__11066__$1 = (((G__11066 instanceof cljs.core.Keyword))?G__11066.fqn:null);
switch (G__11066__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11066__$1)].join('')));

}
})())),new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.rand_nth.call(null,clothing.data.clothing_palette),new cljs.core.Keyword(null,"starting-z","starting-z",180732104),(function (){var G__11067 = item_key;
var G__11067__$1 = (((G__11067 instanceof cljs.core.Keyword))?G__11067.fqn:null);
switch (G__11067__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11067__$1)].join('')));

}
})()], null);
});
clothing.core.gen_starting_closet = (function clothing$core$gen_starting_closet(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tops","tops",728700889),cljs.core.vec.call(null,cljs.core.repeatedly.call(null,(10),(function (){
return clothing.core.gen_one_clothing.call(null,new cljs.core.Keyword(null,"top","top",-1856271961));
}))),new cljs.core.Keyword(null,"bottoms","bottoms",-116131497),cljs.core.vec.call(null,cljs.core.repeatedly.call(null,(10),(function (){
return clothing.core.gen_one_clothing.call(null,new cljs.core.Keyword(null,"bottom","bottom",-1550509018));
}))),new cljs.core.Keyword(null,"hair","hair",-346317128),cljs.core.vec.call(null,cljs.core.repeatedly.call(null,(10),(function (){
return clothing.core.gen_one_clothing.call(null,new cljs.core.Keyword(null,"hair","hair",-346317128));
})))], null);
});
clothing.core.container_accessor = (function clothing$core$container_accessor(item_key){
var G__11070 = item_key;
var G__11070__$1 = (((G__11070 instanceof cljs.core.Keyword))?G__11070.fqn:null);
switch (G__11070__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11070__$1)].join('')));

}
});
if((typeof clothing !== 'undefined') && (typeof clothing.core !== 'undefined') && (typeof clothing.core.initial_state !== 'undefined')){
} else {
clothing.core.initial_state = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"pixi","pixi",808009198),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"app","app",-560961707),(new PIXI.Application(({"width": window.innerWidth, "height": window.innerHeight, "backgroundColor": "0xfdecb2"}))),new cljs.core.Keyword(null,"sprites","sprites",-1835833922),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"body","body",-2049205669),PIXI.Sprite.from("images/body.png"),new cljs.core.Keyword(null,"clothing","clothing",616937133),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"closet","closet",1306153736),clothing.core.gen_starting_closet.call(null)], null),new cljs.core.Keyword(null,"containers","containers",-2127048083),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tops","tops",728700889),(new PIXI.Container()),new cljs.core.Keyword(null,"bottoms","bottoms",-116131497),(new PIXI.Container()),new cljs.core.Keyword(null,"hair","hair",-346317128),(new PIXI.Container())], null)], null),new cljs.core.Keyword(null,"prompts","prompts",15471501),cljs.core.shuffle.call(null,clothing.data.prompts),new cljs.core.Keyword(null,"prompt-n","prompt-n",629247777),(0),new cljs.core.Keyword(null,"day","day",-274800446),(1),new cljs.core.Keyword(null,"tucked?","tucked?",1852513561),false,new cljs.core.Keyword(null,"closet-tab","closet-tab",195971997),new cljs.core.Keyword(null,"tops","tops",728700889)], null);
}
if((typeof clothing !== 'undefined') && (typeof clothing.core !== 'undefined') && (typeof clothing.core.app_state !== 'undefined')){
} else {
clothing.core.app_state = reagent.core.atom.call(null,clothing.core.initial_state);
}
clothing.core.reset_app_state_BANG_ = (function clothing$core$reset_app_state_BANG_(){
return cljs.core.reset_BANG_.call(null,clothing.core.app_state,clothing.core.initial_state);
});
clothing.core.add_pixi = (function clothing$core$add_pixi(p__11072){
var map__11073 = p__11072;
var map__11073__$1 = cljs.core.__destructure_map.call(null,map__11073);
var pixi_state = map__11073__$1;
var app = cljs.core.get.call(null,map__11073__$1,new cljs.core.Keyword(null,"app","app",-560961707));
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

clothing.core.pixi_swap_clothes_BANG_.call(null,clothing_sprite,null);

return clothing.core.setup_closet_item_BANG_.call(null,clothing_sprite);
});
clothing.core.setup_body_sprite_BANG_ = (function clothing$core$setup_body_sprite_BANG_(body_sprite){
clothing.core.place_figure_BANG_.call(null,body_sprite);

clothing.core.swap_figure_layout_BANG_.call(null,body_sprite);

(body_sprite.interactive = true);

body_sprite.on("mousedown",clothing.core.body_click_BANG_);

return body_sprite.on("touchstart",clothing.core.body_click_BANG_);
});
clothing.core.configure_clothing_sprites_BANG_ = (function clothing$core$configure_clothing_sprites_BANG_(p__11074){
var map__11075 = p__11074;
var map__11075__$1 = cljs.core.__destructure_map.call(null,map__11075);
var pixi_state = map__11075__$1;
var app = cljs.core.get.call(null,map__11075__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var sprites = cljs.core.get.call(null,map__11075__$1,new cljs.core.Keyword(null,"sprites","sprites",-1835833922));
var map__11076 = sprites;
var map__11076__$1 = cljs.core.__destructure_map.call(null,map__11076);
var clothing__$1 = cljs.core.get.call(null,map__11076__$1,new cljs.core.Keyword(null,"clothing","clothing",616937133));
var seq__11077 = cljs.core.seq.call(null,cljs.core.vals.call(null,clothing__$1));
var chunk__11078 = null;
var count__11079 = (0);
var i__11080 = (0);
while(true){
if((i__11080 < count__11079)){
var map__11083 = cljs.core._nth.call(null,chunk__11078,i__11080);
var map__11083__$1 = cljs.core.__destructure_map.call(null,map__11083);
var sprite = cljs.core.get.call(null,map__11083__$1,new cljs.core.Keyword(null,"sprite","sprite",172516848));
var color = cljs.core.get.call(null,map__11083__$1,new cljs.core.Keyword(null,"color","color",1011675173));
clothing.core.place_figure_BANG_.call(null,sprite);

(sprite.tint = color);

(sprite.scale.x = (1));

(sprite.scale.y = (1));

(sprite.interactive = false);


var G__11085 = seq__11077;
var G__11086 = chunk__11078;
var G__11087 = count__11079;
var G__11088 = (i__11080 + (1));
seq__11077 = G__11085;
chunk__11078 = G__11086;
count__11079 = G__11087;
i__11080 = G__11088;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__11077);
if(temp__5804__auto__){
var seq__11077__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11077__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__11077__$1);
var G__11089 = cljs.core.chunk_rest.call(null,seq__11077__$1);
var G__11090 = c__5568__auto__;
var G__11091 = cljs.core.count.call(null,c__5568__auto__);
var G__11092 = (0);
seq__11077 = G__11089;
chunk__11078 = G__11090;
count__11079 = G__11091;
i__11080 = G__11092;
continue;
} else {
var map__11084 = cljs.core.first.call(null,seq__11077__$1);
var map__11084__$1 = cljs.core.__destructure_map.call(null,map__11084);
var sprite = cljs.core.get.call(null,map__11084__$1,new cljs.core.Keyword(null,"sprite","sprite",172516848));
var color = cljs.core.get.call(null,map__11084__$1,new cljs.core.Keyword(null,"color","color",1011675173));
clothing.core.place_figure_BANG_.call(null,sprite);

(sprite.tint = color);

(sprite.scale.x = (1));

(sprite.scale.y = (1));

(sprite.interactive = false);


var G__11093 = cljs.core.next.call(null,seq__11077__$1);
var G__11094 = null;
var G__11095 = (0);
var G__11096 = (0);
seq__11077 = G__11093;
chunk__11078 = G__11094;
count__11079 = G__11095;
i__11080 = G__11096;
continue;
}
} else {
return null;
}
}
break;
}
});
clothing.core.configure_body_and_clothes_BANG_ = (function clothing$core$configure_body_and_clothes_BANG_(p__11097){
var map__11098 = p__11097;
var map__11098__$1 = cljs.core.__destructure_map.call(null,map__11098);
var pixi_state = map__11098__$1;
var app = cljs.core.get.call(null,map__11098__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var sprites = cljs.core.get.call(null,map__11098__$1,new cljs.core.Keyword(null,"sprites","sprites",-1835833922));
var map__11099 = sprites;
var map__11099__$1 = cljs.core.__destructure_map.call(null,map__11099);
var body = cljs.core.get.call(null,map__11099__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var clothing__$1 = cljs.core.get.call(null,map__11099__$1,new cljs.core.Keyword(null,"clothing","clothing",616937133));
clothing.core.setup_body_sprite_BANG_.call(null,body);

return clothing.core.configure_clothing_sprites_BANG_.call(null,pixi_state);
});
clothing.core.add_sprites_to_container_BANG_ = (function clothing$core$add_sprites_to_container_BANG_(container,sprites){
var seq__11100 = cljs.core.seq.call(null,sprites);
var chunk__11101 = null;
var count__11102 = (0);
var i__11103 = (0);
while(true){
if((i__11103 < count__11102)){
var sprite = cljs.core._nth.call(null,chunk__11101,i__11103);
container.addChild(sprite);


var G__11104 = seq__11100;
var G__11105 = chunk__11101;
var G__11106 = count__11102;
var G__11107 = (i__11103 + (1));
seq__11100 = G__11104;
chunk__11101 = G__11105;
count__11102 = G__11106;
i__11103 = G__11107;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__11100);
if(temp__5804__auto__){
var seq__11100__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11100__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__11100__$1);
var G__11108 = cljs.core.chunk_rest.call(null,seq__11100__$1);
var G__11109 = c__5568__auto__;
var G__11110 = cljs.core.count.call(null,c__5568__auto__);
var G__11111 = (0);
seq__11100 = G__11108;
chunk__11101 = G__11109;
count__11102 = G__11110;
i__11103 = G__11111;
continue;
} else {
var sprite = cljs.core.first.call(null,seq__11100__$1);
container.addChild(sprite);


var G__11112 = cljs.core.next.call(null,seq__11100__$1);
var G__11113 = null;
var G__11114 = (0);
var G__11115 = (0);
seq__11100 = G__11112;
chunk__11101 = G__11113;
count__11102 = G__11114;
i__11103 = G__11115;
continue;
}
} else {
return null;
}
}
break;
}
});
clothing.core.add_closet_sprites_BANG_ = (function clothing$core$add_closet_sprites_BANG_(p__11116){
var map__11117 = p__11116;
var map__11117__$1 = cljs.core.__destructure_map.call(null,map__11117);
var pixi_state = map__11117__$1;
var sprites = cljs.core.get.call(null,map__11117__$1,new cljs.core.Keyword(null,"sprites","sprites",-1835833922));
var containers = cljs.core.get.call(null,map__11117__$1,new cljs.core.Keyword(null,"containers","containers",-2127048083));
var map__11118 = new cljs.core.Keyword(null,"closet","closet",1306153736).cljs$core$IFn$_invoke$arity$1(sprites);
var map__11118__$1 = cljs.core.__destructure_map.call(null,map__11118);
var tops = cljs.core.get.call(null,map__11118__$1,new cljs.core.Keyword(null,"tops","tops",728700889));
var bottoms = cljs.core.get.call(null,map__11118__$1,new cljs.core.Keyword(null,"bottoms","bottoms",-116131497));
var hair = cljs.core.get.call(null,map__11118__$1,new cljs.core.Keyword(null,"hair","hair",-346317128));
clothing.core.add_sprites_to_container_BANG_.call(null,new cljs.core.Keyword(null,"tops","tops",728700889).cljs$core$IFn$_invoke$arity$1(containers),cljs.core.map.call(null,new cljs.core.Keyword(null,"sprite","sprite",172516848),tops));

clothing.core.add_sprites_to_container_BANG_.call(null,new cljs.core.Keyword(null,"bottoms","bottoms",-116131497).cljs$core$IFn$_invoke$arity$1(containers),cljs.core.map.call(null,new cljs.core.Keyword(null,"sprite","sprite",172516848),bottoms));

return clothing.core.add_sprites_to_container_BANG_.call(null,new cljs.core.Keyword(null,"hair","hair",-346317128).cljs$core$IFn$_invoke$arity$1(containers),cljs.core.map.call(null,new cljs.core.Keyword(null,"sprite","sprite",172516848),hair));
});
clothing.core.add_all_sprites_BANG_ = (function clothing$core$add_all_sprites_BANG_(p__11119){
var map__11120 = p__11119;
var map__11120__$1 = cljs.core.__destructure_map.call(null,map__11120);
var pixi_state = map__11120__$1;
var app = cljs.core.get.call(null,map__11120__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var sprites = cljs.core.get.call(null,map__11120__$1,new cljs.core.Keyword(null,"sprites","sprites",-1835833922));
var containers = cljs.core.get.call(null,map__11120__$1,new cljs.core.Keyword(null,"containers","containers",-2127048083));
var map__11121 = sprites;
var map__11121__$1 = cljs.core.__destructure_map.call(null,map__11121);
var body = cljs.core.get.call(null,map__11121__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var clothing__$1 = cljs.core.get.call(null,map__11121__$1,new cljs.core.Keyword(null,"clothing","clothing",616937133));
var closet = cljs.core.get.call(null,map__11121__$1,new cljs.core.Keyword(null,"closet","closet",1306153736));
var clothing_sprites = cljs.core.map.call(null,new cljs.core.Keyword(null,"sprite","sprite",172516848),cljs.core.vals.call(null,clothing__$1));
var closet_sprites = cljs.core.map.call(null,new cljs.core.Keyword(null,"sprite","sprite",172516848),closet);
app.stage.addChild(body);

return clothing.core.add_closet_sprites_BANG_.call(null,pixi_state);
});
clothing.core.closet_clothes_sprites = (function clothing$core$closet_clothes_sprites(p__11122){
var map__11123 = p__11122;
var map__11123__$1 = cljs.core.__destructure_map.call(null,map__11123);
var pixi_state = map__11123__$1;
var sprites = cljs.core.get.call(null,map__11123__$1,new cljs.core.Keyword(null,"sprites","sprites",-1835833922));
var app = cljs.core.get.call(null,map__11123__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var closet = new cljs.core.Keyword(null,"closet","closet",1306153736).cljs$core$IFn$_invoke$arity$1(sprites);
var iter__5523__auto__ = (function clothing$core$closet_clothes_sprites_$_iter__11124(s__11125){
return (new cljs.core.LazySeq(null,(function (){
var s__11125__$1 = s__11125;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__11125__$1);
if(temp__5804__auto__){
var s__11125__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11125__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__11125__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__11127 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__11126 = (0);
while(true){
if((i__11126 < size__5522__auto__)){
var map__11128 = cljs.core._nth.call(null,c__5521__auto__,i__11126);
var map__11128__$1 = cljs.core.__destructure_map.call(null,map__11128);
var sprite = cljs.core.get.call(null,map__11128__$1,new cljs.core.Keyword(null,"sprite","sprite",172516848));
var color = cljs.core.get.call(null,map__11128__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var _ = (function (){
(sprite.scale.x = 0.5);

(sprite.scale.y = 0.5);

return (sprite.tint = color);
})()
;
cljs.core.chunk_append.call(null,b__11127,sprite);

var G__11130 = (i__11126 + (1));
i__11126 = G__11130;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11127),clothing$core$closet_clothes_sprites_$_iter__11124.call(null,cljs.core.chunk_rest.call(null,s__11125__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11127),null);
}
} else {
var map__11129 = cljs.core.first.call(null,s__11125__$2);
var map__11129__$1 = cljs.core.__destructure_map.call(null,map__11129);
var sprite = cljs.core.get.call(null,map__11129__$1,new cljs.core.Keyword(null,"sprite","sprite",172516848));
var color = cljs.core.get.call(null,map__11129__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var _ = (function (){
(sprite.scale.x = 0.5);

(sprite.scale.y = 0.5);

return (sprite.tint = color);
})()
;
return cljs.core.cons.call(null,sprite,clothing$core$closet_clothes_sprites_$_iter__11124.call(null,cljs.core.rest.call(null,s__11125__$2)));
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
clothing.core.setup_closet_BANG_ = (function clothing$core$setup_closet_BANG_(p__11131){
var map__11132 = p__11131;
var map__11132__$1 = cljs.core.__destructure_map.call(null,map__11132);
var pixi_state = map__11132__$1;
var app = cljs.core.get.call(null,map__11132__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var containers = cljs.core.get.call(null,map__11132__$1,new cljs.core.Keyword(null,"containers","containers",-2127048083));
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
var map__11133 = new cljs.core.Keyword(null,"pixi","pixi",808009198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clothing.core.app_state));
var map__11133__$1 = cljs.core.__destructure_map.call(null,map__11133);
var app = cljs.core.get.call(null,map__11133__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var containers = cljs.core.get.call(null,map__11133__$1,new cljs.core.Keyword(null,"containers","containers",-2127048083));
if(cljs.core.truth_(current)){
clothing.core.pixi_swap_parent_BANG_.call(null,new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(current),app.stage,cljs.core.get.call(null,containers,clothing.core.container_accessor.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(current))));
} else {
}

if(cljs.core.truth_(new$)){
return clothing.core.pixi_swap_parent_BANG_.call(null,new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(new$),cljs.core.get.call(null,containers,clothing.core.container_accessor.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(new$))),app.stage);
} else {
return null;
}
});
clothing.core.closet_click_BANG_ = (function clothing$core$closet_click_BANG_(event,p__11134){
var map__11135 = p__11134;
var map__11135__$1 = cljs.core.__destructure_map.call(null,map__11135);
var item = map__11135__$1;
var type = cljs.core.get.call(null,map__11135__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var color = cljs.core.get.call(null,map__11135__$1,new cljs.core.Keyword(null,"color","color",1011675173));
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
clothing.core.init_closet_layout_BANG_ = (function clothing$core$init_closet_layout_BANG_(p__11144){
var map__11145 = p__11144;
var map__11145__$1 = cljs.core.__destructure_map.call(null,map__11145);
var pixi_state = map__11145__$1;
var sprites = cljs.core.get.call(null,map__11145__$1,new cljs.core.Keyword(null,"sprites","sprites",-1835833922));
var graphics = cljs.core.get.call(null,map__11145__$1,new cljs.core.Keyword(null,"graphics","graphics",-2079995979));
var app = cljs.core.get.call(null,map__11145__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var map__11146 = new cljs.core.Keyword(null,"closet","closet",1306153736).cljs$core$IFn$_invoke$arity$1(sprites);
var map__11146__$1 = cljs.core.__destructure_map.call(null,map__11146);
var tops = cljs.core.get.call(null,map__11146__$1,new cljs.core.Keyword(null,"tops","tops",728700889));
var bottoms = cljs.core.get.call(null,map__11146__$1,new cljs.core.Keyword(null,"bottoms","bottoms",-116131497));
var hair = cljs.core.get.call(null,map__11146__$1,new cljs.core.Keyword(null,"hair","hair",-346317128));
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
var closet_coords = (function (){var iter__5523__auto__ = (function clothing$core$init_closet_layout_BANG__$_iter__11147(s__11148){
return (new cljs.core.LazySeq(null,(function (){
var s__11148__$1 = s__11148;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__11148__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var y = cljs.core.first.call(null,xs__6360__auto__);
var iterys__5519__auto__ = ((function (s__11148__$1,y,xs__6360__auto__,temp__5804__auto__,map__11146,map__11146__$1,tops,bottoms,hair,clothing_sprite_width,clothing_sprite_height,clothes_per_row,closet_base_top,max_n_clothing,nested_n,map__11145,map__11145__$1,pixi_state,sprites,graphics,app){
return (function clothing$core$init_closet_layout_BANG__$_iter__11147_$_iter__11149(s__11150){
return (new cljs.core.LazySeq(null,((function (s__11148__$1,y,xs__6360__auto__,temp__5804__auto__,map__11146,map__11146__$1,tops,bottoms,hair,clothing_sprite_width,clothing_sprite_height,clothes_per_row,closet_base_top,max_n_clothing,nested_n,map__11145,map__11145__$1,pixi_state,sprites,graphics,app){
return (function (){
var s__11150__$1 = s__11150;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__11150__$1);
if(temp__5804__auto____$1){
var s__11150__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11150__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__11150__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__11152 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__11151 = (0);
while(true){
if((i__11151 < size__5522__auto__)){
var x = cljs.core._nth.call(null,c__5521__auto__,i__11151);
cljs.core.chunk_append.call(null,b__11152,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x * (clothing_sprite_width / (2))) + (clothing_sprite_width / (4))),(closet_base_top + (y * (clothing_sprite_height / (1))))], null));

var G__11155 = (i__11151 + (1));
i__11151 = G__11155;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11152),clothing$core$init_closet_layout_BANG__$_iter__11147_$_iter__11149.call(null,cljs.core.chunk_rest.call(null,s__11150__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11152),null);
}
} else {
var x = cljs.core.first.call(null,s__11150__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x * (clothing_sprite_width / (2))) + (clothing_sprite_width / (4))),(closet_base_top + (y * (clothing_sprite_height / (1))))], null),clothing$core$init_closet_layout_BANG__$_iter__11147_$_iter__11149.call(null,cljs.core.rest.call(null,s__11150__$2)));
}
} else {
return null;
}
break;
}
});})(s__11148__$1,y,xs__6360__auto__,temp__5804__auto__,map__11146,map__11146__$1,tops,bottoms,hair,clothing_sprite_width,clothing_sprite_height,clothes_per_row,closet_base_top,max_n_clothing,nested_n,map__11145,map__11145__$1,pixi_state,sprites,graphics,app))
,null,null));
});})(s__11148__$1,y,xs__6360__auto__,temp__5804__auto__,map__11146,map__11146__$1,tops,bottoms,hair,clothing_sprite_width,clothing_sprite_height,clothes_per_row,closet_base_top,max_n_clothing,nested_n,map__11145,map__11145__$1,pixi_state,sprites,graphics,app))
;
var fs__5520__auto__ = cljs.core.seq.call(null,iterys__5519__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.nth.call(null,nested_n,y)))));
if(fs__5520__auto__){
return cljs.core.concat.call(null,fs__5520__auto__,clothing$core$init_closet_layout_BANG__$_iter__11147.call(null,cljs.core.rest.call(null,s__11148__$1)));
} else {
var G__11156 = cljs.core.rest.call(null,s__11148__$1);
s__11148__$1 = G__11156;
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
return cljs.core.swap_BANG_.call(null,clothing.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pixi","pixi",808009198),new cljs.core.Keyword(null,"sprites","sprites",-1835833922),new cljs.core.Keyword(null,"closet","closet",1306153736)], null),(function (p__11153){
var map__11154 = p__11153;
var map__11154__$1 = cljs.core.__destructure_map.call(null,map__11154);
var tops__$1 = cljs.core.get.call(null,map__11154__$1,new cljs.core.Keyword(null,"tops","tops",728700889));
var bottoms__$1 = cljs.core.get.call(null,map__11154__$1,new cljs.core.Keyword(null,"bottoms","bottoms",-116131497));
var hair__$1 = cljs.core.get.call(null,map__11154__$1,new cljs.core.Keyword(null,"hair","hair",-346317128));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tops","tops",728700889),cljs.core.mapv.call(null,(function (p1__11136_SHARP_,p2__11137_SHARP_){
return cljs.core.assoc.call(null,p1__11136_SHARP_,new cljs.core.Keyword(null,"closet-coords","closet-coords",-675071055),p2__11137_SHARP_);
}),tops__$1,closet_coords),new cljs.core.Keyword(null,"bottoms","bottoms",-116131497),cljs.core.mapv.call(null,(function (p1__11138_SHARP_,p2__11139_SHARP_){
return cljs.core.assoc.call(null,p1__11138_SHARP_,new cljs.core.Keyword(null,"closet-coords","closet-coords",-675071055),p2__11139_SHARP_);
}),bottoms__$1,closet_coords),new cljs.core.Keyword(null,"hair","hair",-346317128),cljs.core.mapv.call(null,(function (p1__11140_SHARP_,p2__11141_SHARP_){
return cljs.core.assoc.call(null,p1__11140_SHARP_,new cljs.core.Keyword(null,"closet-coords","closet-coords",-675071055),p2__11141_SHARP_);
}),hair__$1,closet_coords)], null);
}));
});
clothing.core.setup_closet_item_BANG_ = (function clothing$core$setup_closet_item_BANG_(p__11159){
var map__11160 = p__11159;
var map__11160__$1 = cljs.core.__destructure_map.call(null,map__11160);
var closet_item = map__11160__$1;
var sprite = cljs.core.get.call(null,map__11160__$1,new cljs.core.Keyword(null,"sprite","sprite",172516848));
var color = cljs.core.get.call(null,map__11160__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var closet_coords = cljs.core.get.call(null,map__11160__$1,new cljs.core.Keyword(null,"closet-coords","closet-coords",-675071055));
var starting_z = cljs.core.get.call(null,map__11160__$1,new cljs.core.Keyword(null,"starting-z","starting-z",180732104));
var vec__11161 = closet_coords;
var closet_x = cljs.core.nth.call(null,vec__11161,(0),null);
var closet_y = cljs.core.nth.call(null,vec__11161,(1),null);
(sprite.anchor.x = (0));

(sprite.scale.x = 0.5);

(sprite.scale.y = 0.5);

(sprite.x = closet_x);

(sprite.y = closet_y);

(sprite.zIndex = starting_z);

(sprite.tint = color);

(sprite.interactive = true);

(sprite.buttonMode = true);

sprite.on("mousedown",(function (p1__11157_SHARP_){
return clothing.core.closet_click_BANG_.call(null,p1__11157_SHARP_,closet_item);
}));

return sprite.on("touchstart",(function (p1__11158_SHARP_){
return clothing.core.closet_click_BANG_.call(null,p1__11158_SHARP_,closet_item);
}));
});
clothing.core.setup_closet_clothes_BANG_ = (function clothing$core$setup_closet_clothes_BANG_(p__11164){
var map__11165 = p__11164;
var map__11165__$1 = cljs.core.__destructure_map.call(null,map__11165);
var pixi_state = map__11165__$1;
var sprites = cljs.core.get.call(null,map__11165__$1,new cljs.core.Keyword(null,"sprites","sprites",-1835833922));
var graphics = cljs.core.get.call(null,map__11165__$1,new cljs.core.Keyword(null,"graphics","graphics",-2079995979));
var app = cljs.core.get.call(null,map__11165__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var all_clothes = cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY,cljs.core.vals.call(null,new cljs.core.Keyword(null,"closet","closet",1306153736).cljs$core$IFn$_invoke$arity$1(sprites)));
var seq__11166 = cljs.core.seq.call(null,all_clothes);
var chunk__11167 = null;
var count__11168 = (0);
var i__11169 = (0);
while(true){
if((i__11169 < count__11168)){
var item = cljs.core._nth.call(null,chunk__11167,i__11169);
clothing.core.setup_closet_item_BANG_.call(null,item);


var G__11170 = seq__11166;
var G__11171 = chunk__11167;
var G__11172 = count__11168;
var G__11173 = (i__11169 + (1));
seq__11166 = G__11170;
chunk__11167 = G__11171;
count__11168 = G__11172;
i__11169 = G__11173;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__11166);
if(temp__5804__auto__){
var seq__11166__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11166__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__11166__$1);
var G__11174 = cljs.core.chunk_rest.call(null,seq__11166__$1);
var G__11175 = c__5568__auto__;
var G__11176 = cljs.core.count.call(null,c__5568__auto__);
var G__11177 = (0);
seq__11166 = G__11174;
chunk__11167 = G__11175;
count__11168 = G__11176;
i__11169 = G__11177;
continue;
} else {
var item = cljs.core.first.call(null,seq__11166__$1);
clothing.core.setup_closet_item_BANG_.call(null,item);


var G__11178 = cljs.core.next.call(null,seq__11166__$1);
var G__11179 = null;
var G__11180 = (0);
var G__11181 = (0);
seq__11166 = G__11178;
chunk__11167 = G__11179;
count__11168 = G__11180;
i__11169 = G__11181;
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
var map__11182 = cljs.core.deref.call(null,clothing.core.app_state);
var map__11182__$1 = cljs.core.__destructure_map.call(null,map__11182);
var closet_tab = cljs.core.get.call(null,map__11182__$1,new cljs.core.Keyword(null,"closet-tab","closet-tab",195971997));
var pixi = cljs.core.get.call(null,map__11182__$1,new cljs.core.Keyword(null,"pixi","pixi",808009198));
var map__11183 = pixi;
var map__11183__$1 = cljs.core.__destructure_map.call(null,map__11183);
var app = cljs.core.get.call(null,map__11183__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var containers = cljs.core.get.call(null,map__11183__$1,new cljs.core.Keyword(null,"containers","containers",-2127048083));
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
var seq__11185_11189 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,clothing.core.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pixi","pixi",808009198),new cljs.core.Keyword(null,"sprites","sprites",-1835833922),new cljs.core.Keyword(null,"clothing","clothing",616937133)], null))));
var chunk__11186_11190 = null;
var count__11187_11191 = (0);
var i__11188_11192 = (0);
while(true){
if((i__11188_11192 < count__11187_11191)){
var item_11193 = cljs.core._nth.call(null,chunk__11186_11190,i__11188_11192);
clothing.core.pixi_swap_clothes_BANG_.call(null,item_11193,null);

clothing.core.setup_closet_item_BANG_.call(null,item_11193);


var G__11194 = seq__11185_11189;
var G__11195 = chunk__11186_11190;
var G__11196 = count__11187_11191;
var G__11197 = (i__11188_11192 + (1));
seq__11185_11189 = G__11194;
chunk__11186_11190 = G__11195;
count__11187_11191 = G__11196;
i__11188_11192 = G__11197;
continue;
} else {
var temp__5804__auto___11198 = cljs.core.seq.call(null,seq__11185_11189);
if(temp__5804__auto___11198){
var seq__11185_11199__$1 = temp__5804__auto___11198;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11185_11199__$1)){
var c__5568__auto___11200 = cljs.core.chunk_first.call(null,seq__11185_11199__$1);
var G__11201 = cljs.core.chunk_rest.call(null,seq__11185_11199__$1);
var G__11202 = c__5568__auto___11200;
var G__11203 = cljs.core.count.call(null,c__5568__auto___11200);
var G__11204 = (0);
seq__11185_11189 = G__11201;
chunk__11186_11190 = G__11202;
count__11187_11191 = G__11203;
i__11188_11192 = G__11204;
continue;
} else {
var item_11205 = cljs.core.first.call(null,seq__11185_11199__$1);
clothing.core.pixi_swap_clothes_BANG_.call(null,item_11205,null);

clothing.core.setup_closet_item_BANG_.call(null,item_11205);


var G__11206 = cljs.core.next.call(null,seq__11185_11199__$1);
var G__11207 = null;
var G__11208 = (0);
var G__11209 = (0);
seq__11185_11189 = G__11206;
chunk__11186_11190 = G__11207;
count__11187_11191 = G__11208;
i__11188_11192 = G__11209;
continue;
}
} else {
}
}
break;
}

return cljs.core.swap_BANG_.call(null,clothing.core.app_state,(function (p1__11184_SHARP_){
return cljs.core.assoc.call(null,cljs.core.assoc_in.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,p1__11184_SHARP_,new cljs.core.Keyword(null,"day","day",-274800446),cljs.core.inc),new cljs.core.Keyword(null,"prompt-n","prompt-n",629247777),cljs.core.inc),new cljs.core.Keyword(null,"prompt-n","prompt-n",629247777),cljs.core.mod,cljs.core.count.call(null,new cljs.core.Keyword(null,"prompts","prompts",15471501).cljs$core$IFn$_invoke$arity$1(p1__11184_SHARP_))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pixi","pixi",808009198),new cljs.core.Keyword(null,"sprites","sprites",-1835833922),new cljs.core.Keyword(null,"clothing","clothing",616937133)], null),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"tucked?","tucked?",1852513561),false);
}));
});
clothing.core.ui = (function clothing$core$ui(){
var map__11210 = cljs.core.deref.call(null,clothing.core.app_state);
var map__11210__$1 = cljs.core.__destructure_map.call(null,map__11210);
var prompts = cljs.core.get.call(null,map__11210__$1,new cljs.core.Keyword(null,"prompts","prompts",15471501));
var prompt_n = cljs.core.get.call(null,map__11210__$1,new cljs.core.Keyword(null,"prompt-n","prompt-n",629247777));
var day = cljs.core.get.call(null,map__11210__$1,new cljs.core.Keyword(null,"day","day",-274800446));
var tucked_QMARK_ = cljs.core.get.call(null,map__11210__$1,new cljs.core.Keyword(null,"tucked?","tucked?",1852513561));
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
clothing.core.setup_inputs_BANG_ = (function clothing$core$setup_inputs_BANG_(p__11215){
var map__11216 = p__11215;
var map__11216__$1 = cljs.core.__destructure_map.call(null,map__11216);
var pixi_state = map__11216__$1;
var app = cljs.core.get.call(null,map__11216__$1,new cljs.core.Keyword(null,"app","app",-560961707));
return app.renderer.view.addEventListener("click",(function (p1__11211_SHARP_){
return clothing.core.dispatch_select_BANG_.call(null,p1__11211_SHARP_);
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
