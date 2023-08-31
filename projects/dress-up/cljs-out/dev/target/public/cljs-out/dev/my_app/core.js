// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('my_app.core');
goog.require('cljs.core');
goog.require('cljsjs.pixi');
goog.require('cljsjs.howler');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('clothing.prompts');
if((typeof my_app !== 'undefined') && (typeof my_app.core !== 'undefined') && (typeof my_app.core.initial_state !== 'undefined')){
} else {
my_app.core.initial_state = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pixi","pixi",808009198),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"app","app",-560961707),(new PIXI.Application(({"width": (640), "height": (360), "backgroundColor": "0xA08D89"}))),new cljs.core.Keyword(null,"sprite","sprite",172516848),PIXI.Sprite.from("images/pants1.png")], null),new cljs.core.Keyword(null,"prompts","prompts",15471501),cljs.core.shuffle.call(null,clothing.prompts.prompts),new cljs.core.Keyword(null,"prompt-n","prompt-n",629247777),(0)], null);
}
if((typeof my_app !== 'undefined') && (typeof my_app.core !== 'undefined') && (typeof my_app.core.state_atom !== 'undefined')){
} else {
my_app.core.state_atom = cljs.core.atom.call(null,my_app.core.initial_state);
}
my_app.core.reset_state_atom_BANG_ = (function my_app$core$reset_state_atom_BANG_(){
return cljs.core.reset_BANG_.call(null,my_app.core.state_atom,my_app.core.initial_state);
});
my_app.core.add_pixi = (function my_app$core$add_pixi(p__20274){
var map__20275 = p__20274;
var map__20275__$1 = cljs.core.__destructure_map.call(null,map__20275);
var pixi_state = map__20275__$1;
var app = cljs.core.get.call(null,map__20275__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var app_holder = document.getElementById("app-holder");
return app_holder.appendChild(app.view);
});
my_app.core.add_sprite = (function my_app$core$add_sprite(p__20276){
var map__20277 = p__20276;
var map__20277__$1 = cljs.core.__destructure_map.call(null,map__20277);
var pixi_state = map__20277__$1;
var app = cljs.core.get.call(null,map__20277__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var sprite = cljs.core.get.call(null,map__20277__$1,new cljs.core.Keyword(null,"sprite","sprite",172516848));
(sprite.tint = ["0x","f7d9600"].join(''));

return app.stage.addChild(sprite);
});
my_app.core.setup_pixi = (function my_app$core$setup_pixi(pixi_state){
my_app.core.add_pixi.call(null,pixi_state);

return my_app.core.add_sprite.call(null,pixi_state);
});
my_app.core.setup_game_state = (function my_app$core$setup_game_state(){
return cljs.core.PersistentArrayMap.EMPTY;
});
my_app.core.ui = (function my_app$core$ui(){
var map__20278 = cljs.core.deref.call(null,my_app.core.state_atom);
var map__20278__$1 = cljs.core.__destructure_map.call(null,map__20278);
var prompts = cljs.core.get.call(null,map__20278__$1,new cljs.core.Keyword(null,"prompts","prompts",15471501));
var prompt_n = cljs.core.get.call(null,map__20278__$1,new cljs.core.Keyword(null,"prompt-n","prompt-n",629247777));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#ui","div#ui",1361076716),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"margin","margin",-995903681),(10),new cljs.core.Keyword(null,"width","width",-384071477),(640),new cljs.core.Keyword(null,"height","height",1025178622),(360)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"top","top",-1856271961),((360) - (35)),new cljs.core.Keyword(null,"transform","transform",1381301764),"translateX(85%)"], null)], null),cljs.core.nth.call(null,prompts,prompt_n)], null)], null);
});
my_app.core.mount_ui = (function my_app$core$mount_ui(){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_app.core.ui], null),document.getElementById("app-holder"));
});
my_app.core._ = cljs.core.doall.call(null,my_app.core.setup_pixi.call(null,new cljs.core.Keyword(null,"pixi","pixi",808009198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,my_app.core.state_atom))),my_app.core.mount_ui.call(null));
if((typeof my_app !== 'undefined') && (typeof my_app.core !== 'undefined') && (typeof my_app.core.elapsed !== 'undefined')){
} else {
my_app.core.elapsed = cljs.core.atom.call(null,0.0);
}
my_app.core.sound = (new Howl(({"src": "sounds/drop_001.ogg"})));

//# sourceMappingURL=core.js.map
