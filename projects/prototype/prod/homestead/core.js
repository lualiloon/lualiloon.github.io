// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('homestead.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
homestead.core.key_by = (function homestead$core$key_by(k,hashmaps){
return cljs.core.reduce.call(null,(function (acc,kvs){
return cljs.core.assoc.call(null,acc,cljs.core.get.call(null,kvs,k),kvs);
}),cljs.core.PersistentArrayMap.EMPTY,hashmaps);
});
homestead.core.init_game_map_BANG_ = (function homestead$core$init_game_map_BANG_(width,height){
var iter__5523__auto__ = (function homestead$core$init_game_map_BANG__$_iter__10384(s__10385){
return (new cljs.core.LazySeq(null,(function (){
var s__10385__$1 = s__10385;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__10385__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var y = cljs.core.first.call(null,xs__6360__auto__);
var iterys__5519__auto__ = ((function (s__10385__$1,y,xs__6360__auto__,temp__5804__auto__){
return (function homestead$core$init_game_map_BANG__$_iter__10384_$_iter__10386(s__10387){
return (new cljs.core.LazySeq(null,((function (s__10385__$1,y,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__10387__$1 = s__10387;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__10387__$1);
if(temp__5804__auto____$1){
var s__10387__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10387__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__10387__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__10389 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__10388 = (0);
while(true){
if((i__10388 < size__5522__auto__)){
var x = cljs.core._nth.call(null,c__5521__auto__,i__10388);
cljs.core.chunk_append.call(null,b__10389,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"xy","xy",-696978232),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"ground-type","ground-type",971548024),new cljs.core.Keyword(null,"grass","grass",1213050421),new cljs.core.Keyword(null,"sprite","sprite",172516848),PIXI.Sprite.from(cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["images/tile5.png","images/tile62.png"], null)))], null));

var G__10390 = (i__10388 + (1));
i__10388 = G__10390;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10389),homestead$core$init_game_map_BANG__$_iter__10384_$_iter__10386.call(null,cljs.core.chunk_rest.call(null,s__10387__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10389),null);
}
} else {
var x = cljs.core.first.call(null,s__10387__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"xy","xy",-696978232),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"ground-type","ground-type",971548024),new cljs.core.Keyword(null,"grass","grass",1213050421),new cljs.core.Keyword(null,"sprite","sprite",172516848),PIXI.Sprite.from(cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["images/tile5.png","images/tile62.png"], null)))], null),homestead$core$init_game_map_BANG__$_iter__10384_$_iter__10386.call(null,cljs.core.rest.call(null,s__10387__$2)));
}
} else {
return null;
}
break;
}
});})(s__10385__$1,y,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__10385__$1,y,xs__6360__auto__,temp__5804__auto__))
;
var fs__5520__auto__ = cljs.core.seq.call(null,iterys__5519__auto__.call(null,cljs.core.range.call(null,width)));
if(fs__5520__auto__){
return cljs.core.concat.call(null,fs__5520__auto__,homestead$core$init_game_map_BANG__$_iter__10384.call(null,cljs.core.rest.call(null,s__10385__$1)));
} else {
var G__10391 = cljs.core.rest.call(null,s__10385__$1);
s__10385__$1 = G__10391;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,cljs.core.range.call(null,height));
});
homestead.core.init_state_BANG_ = (function homestead$core$init_state_BANG_(){
var map_size = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(20),new cljs.core.Keyword(null,"height","height",1025178622),(10)], null);
var tile_size = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(16),new cljs.core.Keyword(null,"height","height",1025178622),(16)], null);
var tile_scale = (2);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"map-size","map-size",-683564558),map_size,new cljs.core.Keyword(null,"tile-size","tile-size",441420757),tile_size,new cljs.core.Keyword(null,"tile-scale","tile-scale",1476889797),tile_scale,new cljs.core.Keyword(null,"game-map","game-map",-1905642262),homestead.core.key_by.call(null,new cljs.core.Keyword(null,"xy","xy",-696978232),homestead.core.init_game_map_BANG_.call(null,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(map_size),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(map_size))),new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xy","xy",-696978232),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(5)], null),new cljs.core.Keyword(null,"sprite","sprite",172516848),PIXI.Sprite.from("images/tile271.png")], null),new cljs.core.Keyword(null,"pixi","pixi",808009198),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"app","app",-560961707),(new PIXI.Application(({"width": ((new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(map_size) * new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(tile_size)) * tile_scale), "height": ((new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(map_size) * new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(tile_size)) * tile_scale), "backgroundColor": "0xA08D89"})))], null)], null);
});
if((typeof homestead !== 'undefined') && (typeof homestead.core !== 'undefined') && (typeof homestead.core.game_state !== 'undefined')){
} else {
homestead.core.game_state = reagent.core.atom.call(null,homestead.core.init_state_BANG_.call(null));
}
homestead.core.reset_game_state_BANG_ = (function homestead$core$reset_game_state_BANG_(){
return cljs.core.reset_BANG_.call(null,homestead.core.game_state,homestead.core.init_state_BANG_.call(null));
});
homestead.core.set_sprite_position_BANG_ = (function homestead$core$set_sprite_position_BANG_(p__10392,sprite,p__10393){
var map__10394 = p__10392;
var map__10394__$1 = cljs.core.__destructure_map.call(null,map__10394);
var state = map__10394__$1;
var pixi = cljs.core.get.call(null,map__10394__$1,new cljs.core.Keyword(null,"pixi","pixi",808009198));
var tile_size = cljs.core.get.call(null,map__10394__$1,new cljs.core.Keyword(null,"tile-size","tile-size",441420757));
var tile_scale = cljs.core.get.call(null,map__10394__$1,new cljs.core.Keyword(null,"tile-scale","tile-scale",1476889797));
var vec__10395 = p__10393;
var x = cljs.core.nth.call(null,vec__10395,(0),null);
var y = cljs.core.nth.call(null,vec__10395,(1),null);
var tile_width = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(tile_size);
var tile_height = new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(tile_size);
var tile_x = ((x * tile_width) * tile_scale);
var tile_y = ((y * tile_height) * tile_scale);
(sprite.x = tile_x);

return (sprite.y = tile_y);
});
homestead.core.redraw_player_position_BANG_ = (function homestead$core$redraw_player_position_BANG_(){
var map__10398 = cljs.core.deref.call(null,homestead.core.game_state);
var map__10398__$1 = cljs.core.__destructure_map.call(null,map__10398);
var state = map__10398__$1;
var player = cljs.core.get.call(null,map__10398__$1,new cljs.core.Keyword(null,"player","player",-97687400));
return homestead.core.set_sprite_position_BANG_.call(null,state,new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"xy","xy",-696978232).cljs$core$IFn$_invoke$arity$1(player));
});
homestead.core.move_player_BANG_ = (function homestead$core$move_player_BANG_(dir_key){
var G__10399_10400 = dir_key;
var G__10399_10401__$1 = (((G__10399_10400 instanceof cljs.core.Keyword))?G__10399_10400.fqn:null);
switch (G__10399_10401__$1) {
case "up":
cljs.core.swap_BANG_.call(null,homestead.core.game_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"xy","xy",-696978232),(1)], null),cljs.core.dec);

break;
case "down":
cljs.core.swap_BANG_.call(null,homestead.core.game_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"xy","xy",-696978232),(1)], null),cljs.core.inc);

break;
case "right":
cljs.core.swap_BANG_.call(null,homestead.core.game_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"xy","xy",-696978232),(0)], null),cljs.core.inc);

break;
case "left":
cljs.core.swap_BANG_.call(null,homestead.core.game_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"xy","xy",-696978232),(0)], null),cljs.core.dec);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10399_10401__$1)].join('')));

}

return homestead.core.redraw_player_position_BANG_.call(null);
});
homestead.core.handle_keydown = (function homestead$core$handle_keydown(e){
var G__10403 = e.key;
switch (G__10403) {
case "w":
return homestead.core.move_player_BANG_.call(null,new cljs.core.Keyword(null,"up","up",-269712113));

break;
case "a":
return homestead.core.move_player_BANG_.call(null,new cljs.core.Keyword(null,"left","left",-399115937));

break;
case "s":
return homestead.core.move_player_BANG_.call(null,new cljs.core.Keyword(null,"down","down",1565245570));

break;
case "d":
return homestead.core.move_player_BANG_.call(null,new cljs.core.Keyword(null,"right","right",-452581833));

break;
case " ":
return cljs.core.println.call(null,"JUMP!");

break;
default:
return cljs.core.println.call(null,e.key);

}
});
homestead.core.init_keyhandlers_BANG_ = (function homestead$core$init_keyhandlers_BANG_(){
return document.addEventListener("keypress",homestead.core.handle_keydown);
});
homestead.core.add_pixi = (function homestead$core$add_pixi(p__10405){
var map__10406 = p__10405;
var map__10406__$1 = cljs.core.__destructure_map.call(null,map__10406);
var pixi_state = map__10406__$1;
var app = cljs.core.get.call(null,map__10406__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var app_holder = document.getElementById("app-holder");
return app_holder.appendChild(app.view);
});
homestead.core.add_sprite_BANG_ = (function homestead$core$add_sprite_BANG_(p__10407,sprite,p__10408){
var map__10409 = p__10407;
var map__10409__$1 = cljs.core.__destructure_map.call(null,map__10409);
var state = map__10409__$1;
var pixi = cljs.core.get.call(null,map__10409__$1,new cljs.core.Keyword(null,"pixi","pixi",808009198));
var tile_size = cljs.core.get.call(null,map__10409__$1,new cljs.core.Keyword(null,"tile-size","tile-size",441420757));
var tile_scale = cljs.core.get.call(null,map__10409__$1,new cljs.core.Keyword(null,"tile-scale","tile-scale",1476889797));
var vec__10410 = p__10408;
var x = cljs.core.nth.call(null,vec__10410,(0),null);
var y = cljs.core.nth.call(null,vec__10410,(1),null);
var tile_width = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(tile_size);
var tile_height = new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(tile_size);
var tile_x = ((x * tile_width) * tile_scale);
var tile_y = ((y * tile_height) * tile_scale);
(sprite.x = tile_x);

(sprite.y = tile_y);

(sprite.scale.x = tile_scale);

(sprite.scale.y = tile_scale);

return new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(pixi).stage.addChild(sprite);
});
homestead.core.add_all_ground_sprites_BANG_ = (function homestead$core$add_all_ground_sprites_BANG_(p__10413){
var map__10414 = p__10413;
var map__10414__$1 = cljs.core.__destructure_map.call(null,map__10414);
var state = map__10414__$1;
var pixi = cljs.core.get.call(null,map__10414__$1,new cljs.core.Keyword(null,"pixi","pixi",808009198));
var game_map = cljs.core.get.call(null,map__10414__$1,new cljs.core.Keyword(null,"game-map","game-map",-1905642262));
var tile_size = cljs.core.get.call(null,map__10414__$1,new cljs.core.Keyword(null,"tile-size","tile-size",441420757));
var tile_scale = cljs.core.get.call(null,map__10414__$1,new cljs.core.Keyword(null,"tile-scale","tile-scale",1476889797));
var tile_width = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(tile_size);
var tile_height = new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(tile_size);
var seq__10415 = cljs.core.seq.call(null,cljs.core.vals.call(null,game_map));
var chunk__10416 = null;
var count__10417 = (0);
var i__10418 = (0);
while(true){
if((i__10418 < count__10417)){
var map__10421 = cljs.core._nth.call(null,chunk__10416,i__10418);
var map__10421__$1 = cljs.core.__destructure_map.call(null,map__10421);
var xy = cljs.core.get.call(null,map__10421__$1,new cljs.core.Keyword(null,"xy","xy",-696978232));
var sprite = cljs.core.get.call(null,map__10421__$1,new cljs.core.Keyword(null,"sprite","sprite",172516848));
homestead.core.add_sprite_BANG_.call(null,state,sprite,xy);


var G__10423 = seq__10415;
var G__10424 = chunk__10416;
var G__10425 = count__10417;
var G__10426 = (i__10418 + (1));
seq__10415 = G__10423;
chunk__10416 = G__10424;
count__10417 = G__10425;
i__10418 = G__10426;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__10415);
if(temp__5804__auto__){
var seq__10415__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10415__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__10415__$1);
var G__10427 = cljs.core.chunk_rest.call(null,seq__10415__$1);
var G__10428 = c__5568__auto__;
var G__10429 = cljs.core.count.call(null,c__5568__auto__);
var G__10430 = (0);
seq__10415 = G__10427;
chunk__10416 = G__10428;
count__10417 = G__10429;
i__10418 = G__10430;
continue;
} else {
var map__10422 = cljs.core.first.call(null,seq__10415__$1);
var map__10422__$1 = cljs.core.__destructure_map.call(null,map__10422);
var xy = cljs.core.get.call(null,map__10422__$1,new cljs.core.Keyword(null,"xy","xy",-696978232));
var sprite = cljs.core.get.call(null,map__10422__$1,new cljs.core.Keyword(null,"sprite","sprite",172516848));
homestead.core.add_sprite_BANG_.call(null,state,sprite,xy);


var G__10431 = cljs.core.next.call(null,seq__10415__$1);
var G__10432 = null;
var G__10433 = (0);
var G__10434 = (0);
seq__10415 = G__10431;
chunk__10416 = G__10432;
count__10417 = G__10433;
i__10418 = G__10434;
continue;
}
} else {
return null;
}
}
break;
}
});
homestead.core.add_all_sprites_BANG_ = (function homestead$core$add_all_sprites_BANG_(p__10435){
var map__10436 = p__10435;
var map__10436__$1 = cljs.core.__destructure_map.call(null,map__10436);
var state = map__10436__$1;
var pixi = cljs.core.get.call(null,map__10436__$1,new cljs.core.Keyword(null,"pixi","pixi",808009198));
var tile_size = cljs.core.get.call(null,map__10436__$1,new cljs.core.Keyword(null,"tile-size","tile-size",441420757));
var tile_scale = cljs.core.get.call(null,map__10436__$1,new cljs.core.Keyword(null,"tile-scale","tile-scale",1476889797));
var player = cljs.core.get.call(null,map__10436__$1,new cljs.core.Keyword(null,"player","player",-97687400));
homestead.core.add_all_ground_sprites_BANG_.call(null,state);

return homestead.core.add_sprite_BANG_.call(null,state,new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"xy","xy",-696978232).cljs$core$IFn$_invoke$arity$1(player));
});
homestead.core.setup_pixi = (function homestead$core$setup_pixi(state){
homestead.core.add_pixi.call(null,new cljs.core.Keyword(null,"pixi","pixi",808009198).cljs$core$IFn$_invoke$arity$1(state));

return homestead.core.add_all_sprites_BANG_.call(null,state);
});
homestead.core.setup_game_BANG_ = (function homestead$core$setup_game_BANG_(state){
homestead.core.setup_pixi.call(null,state);

return homestead.core.init_keyhandlers_BANG_.call(null);
});
if((typeof homestead !== 'undefined') && (typeof homestead.core !== 'undefined') && (typeof homestead.core._ !== 'undefined')){
} else {
homestead.core._ = homestead.core.setup_game_BANG_.call(null,cljs.core.deref.call(null,homestead.core.game_state));
}
if((typeof homestead !== 'undefined') && (typeof homestead.core !== 'undefined') && (typeof homestead.core.elapsed !== 'undefined')){
} else {
homestead.core.elapsed = cljs.core.atom.call(null,0.0);
}
cljs.core.println.call(null,"hello");
homestead.core.sound = (new Howl(({"src": "sounds/drop_001.ogg"})));
