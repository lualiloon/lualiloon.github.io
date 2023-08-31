// Compiled by ClojureScript 1.11.60 {:target :nodejs, :nodejs-rt false, :optimizations :simple}
goog.provide('clothing.data');
goog.require('cljs.core');
clothing.data.prompts = cljs.core.PersistentVector.fromArray(["Feeling like a disco ball.","Embracing your inner cactus.","Radioactive unicorn.","Just escaped from a 90's music video.","Dressed by aliens... again.","\"Oops! I spilled magic.\"","Channeling my inner potato.","Attending a yeti's summer party.","If Picasso painted an outfit.","Fresh out of a fairy tale.","Woke up in the Matrix.","Wizard on a coffee break.","Ninja, but make it fashion.","Serving \"lost in a board game\" vibes.","Part-time mermaid.","Undercover superhero day-off.","Bedhead ambassador.","Dressed by spaghetti.","Astronaut's beach day.","Dinosaur's first date.","Pirate's pajama party.","If Monday was an outfit.","Retro-futuristic cowpoke.","Midsummer night's dreamer.","Woke up as a cartoon character.","Styled by my pet cat.","Moonlit werewolf chic.","Dragon's casual Friday.","Lost in a time machine.","Mummy's spa retreat.","Steampunk scuba diving.","Ready for the robot uprising.","Elegant garden gnome soir\u00E9e.","Ghost's neon rave.","Post-apocalyptic picnic.","Penguin's masquerade ball.","Medieval karaoke night.","Caveman couture.","Mystical library tour.","Glow-in-the-dark juggling contest.","Floating in a soda pop.","Rainbow slide adventure.","Yeti yoga.","Alien's first music festival.","Salsa dancing on frozen tundra.","Circus ringmaster's silent retreat.","Giant tea party.","Vampire's veggie market spree.","Haunted roller derby.","Dinosaur DJ battle."], true);
clothing.data.clothing_palette = new cljs.core.PersistentVector(null, 31, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0xe74c3c","0xd62b1f","0xe67e22","0xff8c00","0xf1c40f","0xffd700","0x2ecc71","0x32cd32","0x7cfc00","0x3498db","0x1e90ff","0x87cefa","0x9b59b6","0x800080","0x9370db","0xe84393","0xff69b4","0xffb6c1","0x8e5e40","0xa0522d","0xcd853f","0x7f8c8d","0x696969","0x778899","0xf0e68c","0xbdb76b","0xd2b48c","0x20b2aa","0x48d1cc","0xffd700","0xdaa520"], null);
clothing.data.background_color = "0xfdecb2";
clothing.data.closet_background = "0xc2b49a";
clothing.data.bottoms = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["images/pants1.png","images/pants2.png","images/pants3.png","images/pants4.png","images/pants5.png","images/skirt1.png"], null);
clothing.data.tops = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["images/shirt1.png","images/shirt2.png","images/shirt3.png","images/shirt4.png","images/shirt5.png","images/shirt6.png"], null);
clothing.data.hair = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, ["images/hair1.png","images/hair2.png","images/hair3.png","images/hair4.png","images/hair5.png","images/hair6.png","images/hair7.png","images/hair8.png","images/hair9.png","images/hair10.png","images/hair11.png"], null);
clothing.data.all_clothing = cljs.core.into.call(null,clothing.data.tops,clothing.data.bottoms);