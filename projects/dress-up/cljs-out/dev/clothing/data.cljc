(ns clothing.data)

(def prompts
  ["Feeling like a disco ball."
   "Embracing your inner cactus."
   "Radioactive unicorn."
   "Just escaped from a 90's music video."
   "Dressed by aliens... again."
   "\"Oops! I spilled magic.\""
   "Channeling my inner potato."
   "Attending a yeti's summer party."
   "If Picasso painted an outfit."
   "Fresh out of a fairy tale."
   "Woke up in the Matrix."
   "Wizard on a coffee break."
   "Ninja, but make it fashion."
   "Serving \"lost in a board game\" vibes."
   "Part-time mermaid."
   "Undercover superhero day-off."
   "Bedhead ambassador."
   "Dressed by spaghetti."
   "Astronaut's beach day."
   "Dinosaur's first date."
   "Pirate's pajama party."
   "If Monday was an outfit."
   "Retro-futuristic cowpoke."
   "Midsummer night's dreamer."
   "Woke up as a cartoon character."
   "Styled by my pet cat."
   "Moonlit werewolf chic."
   "Dragon's casual Friday."
   "Lost in a time machine."
   "Mummy's spa retreat."
   "Steampunk scuba diving."
   "Ready for the robot uprising."
   "Elegant garden gnome soirée."
   "Ghost's neon rave."
   "Post-apocalyptic picnic."
   "Penguin's masquerade ball."
   "Medieval karaoke night."
   "Caveman couture."
   "Mystical library tour."
   "Glow-in-the-dark juggling contest."
   "Floating in a soda pop."
   "Rainbow slide adventure."
   "Yeti yoga."
   "Alien's first music festival."
   "Salsa dancing on frozen tundra."
   "Circus ringmaster's silent retreat."
   "Giant tea party."
   "Vampire's veggie market spree."
   "Haunted roller derby."
   "Dinosaur DJ battle."])


;; colors are from the pallete LOSPEC500 on lospec.com
#_(def colors ["10121c"
             "2c1e31"
             "6b2643"
             "ac2847"
             "ec273f"
             "94493a"
             "de5d3a"
             "e98537"
             "f3a833"
             "4d3533"
             "6e4c30"
             "a26d3f"
             "ce9248"
             "dab163"
             "e8d282"
             "f7f3b7"
             "1e4044"
             "006554"
             "26854c"
             "5ab552"
             "9de64e"
             "008b8b"
             "62a477"
             "a6cb96"
             "d3eed3"
             "3e3b65"
             "3859b3"
             "3388de"
             "36c5f4"
             "6dead6"
             "5e5b8c"
             "8c78a5"
             "b0a7b8"
             "deceed"
             "9a4d76"
             "c878af"
             "cc99ff"
             "fa6e79"
             "ffa2ac"
             "ffd1d5"
             "f6e8e0"
             "ffffff"])

(def clothing-palette
  [
   ;; Reds
   "0xe74c3c"
   "0xd62b1f"
   
   ;; Oranges
   "0xe67e22"
   "0xff8c00"
   
   ;; Yellows
   "0xf1c40f"
   "0xffd700"
   
   ;; Greens
   "0x2ecc71"
   "0x32cd32"
   "0x7cfc00"
   
   ;; Blues
   "0x3498db"
   "0x1e90ff"
   "0x87cefa"
   
   ;; Purples
   "0x9b59b6"
   "0x800080"
   "0x9370db"
   
   ;; Pinks
   "0xe84393"
   "0xff69b4"
   "0xffb6c1"
   
   ;; Browns
   "0x8e5e40"
   "0xa0522d"
   "0xcd853f"
   
   ;; Grays
   "0x7f8c8d"
   "0x696969"
   "0x778899"
   
   ;; Neutrals
   "0xf0e68c"
   "0xbdb76b"
   "0xd2b48c"
   
   ;; Teals
   "0x20b2aa"
   "0x48d1cc"
   
   ;; Gold
   "0xffd700"
   "0xdaa520"
  ])


(def background-color
  ;; Background for a bright and sunny room
  "0xfdecb2")

(def closet-background
  ;; Background for the closet area
  "0xc2b49a"
)


;;;; Clothing 
(def bottoms
  ["images/pants1.png"
   "images/pants2.png"
   "images/pants3.png"
   "images/pants4.png"
   "images/pants5.png"
   ;;"images/pants6.png"
   "images/skirt1.png"])

(def tops
  ["images/shirt1.png"
   "images/shirt2.png"
   "images/shirt3.png"
   "images/shirt4.png"
   "images/shirt5.png"
   "images/shirt6.png"])

(def hair
  ["images/hair1.png"
   "images/hair2.png"
   "images/hair3.png"
   "images/hair4.png"
   "images/hair5.png"
   "images/hair6.png"
   "images/hair7.png"
   "images/hair8.png"
   "images/hair9.png"
   "images/hair10.png"
   "images/hair11.png"])

(def all-clothing
  (into tops bottoms))

;;;; For Reference
;; body colors:
;;  #c0cbdc
;;  #adb8d0
;;  #193c3e
