(ns clothing.core
  (:require [cljsjs.pixi]
            #_["pixi.js"]
            [cljsjs.howler]
            ["@pixi/ui" :as pui]
            [reagent.core :as r]
            [reagent.dom :as rd]
            [clothing.data :as d]))



(defn gen-one-clothing
  [item-key]
  {:type item-key
   :sprite (js/PIXI.Sprite.from (rand-nth (case item-key
                                            :top    d/tops
                                            :bottom d/bottoms
                                            :hair d/hair)))
   :color (rand-nth d/clothing-palette)
   :starting-z (case item-key
                 :bottom 1
                 :top    2
                 :hair   3)})

(defn gen-starting-closet
  []
  {:tops (vec (repeatedly 10 #(gen-one-clothing :top)))
   :bottoms (vec (repeatedly 10 #(gen-one-clothing :bottom)))
   :hair (vec (repeatedly 10 #(gen-one-clothing :hair)))}
  #_(reduce into
            []
            [(repeatedly 10 #(gen-one-clothing :top))
             (repeatedly 10 #(gen-one-clothing :bottom))
             (repeatedly 7 #(gen-one-clothing :hair))]))


(defn container-accessor
  [item-key]
  (case item-key
    :top :tops
    :bottom :bottoms
    :hair :hair
    :wig :hair))

;; --------------- PIXI ------------------

(defonce initial-state {:pixi
                        {:app
                         (js/PIXI.Application. #js{:width js/window.innerWidth
                                                   :height js/window.innerHeight
                                                   :backgroundColor "0xfdecb2"
                                                   #_"0xA08D89"})
                         :sprites {:body (js/PIXI.Sprite.from "images/body.png")
                                   #_:body-container #_(js/PIXI.Container.)
                                   :clothing {}
                                   :closet (gen-starting-closet)}
                         :containers {:tops (js/PIXI.Container.)
                                      :bottoms (js/PIXI.Container.)
                                      :hair (js/PIXI.Container.)}}
                        :prompts (shuffle d/prompts)
                        :prompt-n 0
                        :day 1
                        :tucked? false
                        :closet-tab :tops})


(defonce app-state
  (r/atom initial-state))


(defn reset-app-state!
  []
  (reset! app-state initial-state))


(defn add-pixi
  [{:keys [app] :as pixi-state}]
  (let [app-holder (js/document.getElementById "app-holder")]
    (.appendChild app-holder (.-view app))))


(defn center-sprite!
  [sprite]
  (let [half-sprite-width (/ (.-width sprite)
                             2)
        half-window-width (/ js/window.innerWidth
                             2)

        half-sprite-height (/ (.-height sprite)
                              2)
        half-window-height (/ js/window.innerHeight
                              2)]
    (set! (.-x sprite) (-  half-window-width half-sprite-width))
    (set! (.-y sprite) (-  half-window-height half-sprite-height))))


(defn center-sprite-x!
  [sprite]
  (let [half-window-width (/ js/window.innerWidth
                             2)]
    (set! (.-x sprite) half-window-width)))

(defn place-figure!
  [sprite]
  (let [top-margin 15]    
    (center-sprite-x! sprite)
    (set! (.. sprite -anchor -x) 0.5)
    (set! (.-y sprite) top-margin)))

(defn swap-figure-layout!
  [body-sprite]
  (let [top-margin 15
        sprite-width (.-width body-sprite)
        half-width (/ sprite-width 2)
        sprite-height (.-height body-sprite)
        sprite-origin-x (.-x body-sprite)]
    (swap! app-state assoc-in [:layout :figure] {:top  top-margin
                                                  :left (- sprite-origin-x
                                                           half-width)
                                                  :right (+ sprite-origin-x
                                                           half-width)
                                                  :bottom (+ top-margin
                                                             sprite-height)})))

(declare setup-closet-clothes! setup-closet-item! pixi-swap-clothes!)

(defn body-click!
  [event]
  (let [is-touch? (some? (aget event "touch"))
        coords    (if is-touch? 
                    (aget (.-touches event) 0)
                    event)
        x         (.-pageX coords)
        y         (.-pageY coords)

        clothing-key (cond
                       (> y 195) :bottom
                       (> y 120) :top
                       :else     :hair)
        clothing-sprite (get-in @app-state
                                [:pixi :sprites :clothing clothing-key])]

    #_(println clothing-key)
    #_(.removeChild (.-stage (get-in @app-state [:pixi :app])) clothing-sprite)
    
    (swap! app-state (fn [state]
                        (-> state
                            (update-in [:pixi :sprites :clothing]
                                       dissoc clothing-key)
                            #_(update-in [:pixi :sprites :closet]
                                       conj clothing-sprite))))
    (pixi-swap-clothes! clothing-sprite nil)
    (setup-closet-item! clothing-sprite)
    #_(setup-closet-clothes! (:pixi @app-state)))

  
  ;; (> y 195) => :pants
  ;; (> y 120) => :shirt
  ;; :else => :hair
  )

(defn setup-body-sprite!
  [body-sprite]
  (place-figure! body-sprite)
  (swap-figure-layout! body-sprite)

  (set! (.-interactive body-sprite) true)

  (.on body-sprite "mousedown" body-click!)
  (.on body-sprite "touchstart" body-click!))


(defn configure-clothing-sprites!
  [{:keys [app sprites] :as pixi-state}]
  (let [{:keys [clothing]} sprites]
    (doseq [{:keys [sprite color]} (vals clothing)]
      (place-figure! sprite)
      (set! (.-tint sprite) color)
      (set! (.. sprite -scale -x) 1)
      (set! (.. sprite -scale -y) 1)

      (set! (.-interactive sprite) false)

      #_(.on sprite "mousedown" body-click!)
      #_(.on sprite "touchstart" body-click!))))


(defn configure-body-and-clothes!
  [{:keys [app sprites] :as pixi-state}]
  (let [{:keys [body clothing]} sprites]
    (setup-body-sprite! body)
    (configure-clothing-sprites! pixi-state)))


(defn add-sprites-to-container!
  [container sprites]
  (doseq [sprite sprites]
    (.addChild container sprite)))


(defn add-closet-sprites!
  [{:keys [sprites containers] :as pixi-state}]
  (let [{:keys [tops bottoms hair]} (:closet sprites)]
    (add-sprites-to-container! (:tops containers) (map :sprite tops))
    (add-sprites-to-container! (:bottoms containers) (map :sprite bottoms))
    (add-sprites-to-container! (:hair containers) (map :sprite hair))))


(defn add-all-sprites!
  [{:keys [app sprites containers] :as pixi-state}]
  (let [{:keys [body clothing closet]} sprites
        clothing-sprites (map :sprite (vals clothing))
        closet-sprites (map :sprite closet)
        ;;all-sprites (reduce into [body] [closet-sprites])
        ]
    
    #_(doseq [sprite all-sprites]
      (.addChild (.-stage app) sprite))

    (.addChild (.-stage app) body)

    (add-closet-sprites! pixi-state)))


#_(defn add-sprite
    [{:keys [app sprite] :as pixi-state}]
    (set! (.-tint sprite) (str "0x" (rand-nth d/colors)
                               #_"3390b8"
                               #_"f7d9600"
                               #_"913c7f"))
    (.addChild (.-stage app) sprite))

;; add initial sprites (body, closet clothing)

(defn closet-clothes-sprites
  [{:keys [sprites app] :as pixi-state}]
  (let [closet (:closet sprites)]
    (for [{:keys [sprite color]} closet
          :let [_ (do (set! (.. sprite -scale -x) 0.5)
                      (set! (.. sprite -scale -y) 0.5)
                      #_(set! (.-x sprite) (* i (/ (.-width sprite) 2)))
                      #_(set! (.-y sprite) (/ js/window.innerHeight 3.25))
                      
                      (set! (.-tint sprite) color)
                      
                      #_(set! (.-interactive sprite) true)
                      #_(set! (.-buttonMode sprite) true))]]
      sprite

      #_(.addChild (.-stage app) sprite))))


(defn setup-closet!
  [{:keys [app containers] :as pixi-state}]
  #_(let [scrollbox (pui/ScrollBox.)
        clothes (closet-clothes-sprites pixi-state)]
    (doseq [item clothes]
      (.addChild scrollbox item))

    (set! (.-width scrollbox) js/window.innerWidth)
    (set! (.-height scrollbox) js/window.innerHeight)

    (.addChild (.-stage app) scrollbox))
  
  #_(let [button-graphics (js/PIXI.Graphics.)
          text (js/PIXI.Text.)
          _ (do (.beginFill button-graphics d/closet-background)
                (.drawRoundedRect button-graphics 0 0 100 50 15))
          button (pui/Button.)]
    
      (.addChild (.-stage app) button))
  
  #_(let [closet (pui/ScrollBox.)]
      (set! (.-background closet) d/closet-background)
      (set! (.-width closet) js/window.innerWidth)
      (set! (.-height closet) (/ js/window.innerHeight 3))
      #_(set! (.-items closet) (clj->js (closet-clothes-sprites pixi-state)))

      (.addChild (.-stage app) closet))

  #_(let [scrollbox (pui.ScrollBox.)]

    (set! (.-interactive scrollbox) false)
    (set! (.-background scrollbox) d/closet-background)
    (set! (.-width scrollbox) (- js/window.innerWidth 30))
    (set! (.-height scrollbox) (/ js/window.innerHeight

                                  2))
    (set! (.-x scrollbox) 10)
    (set! (.-y scrollbox) (+ 256 15 50))
    
    (.addChild (.-stage app) scrollbox))
  
  
  (let [closet-base (js/PIXI.Graphics.)
        body-sprite (get-in @app-state [:pixi :sprites :body])]
    (.beginFill closet-base d/closet-background)
    (.drawRect closet-base
               10
               (+ 256 15 50)
               #_(/ js/window.innerHeight
                    3)
               (- js/window.innerWidth 30)
               (/ js/window.innerHeight
                  2))

    (.addChild (.-stage app) closet-base)
    (swap! app-state assoc-in [:pixi :graphics :closet] closet-base)

    (.addChild (.-stage app) (:tops containers))))


(defn pixi-swap-parent!
  [sprite old-parent new-parent]
  (.removeChild old-parent sprite)
  (.addChild new-parent sprite))


(defn pixi-swap-clothes!
  [current new]
  (let [{:keys [app containers]} (:pixi @app-state)]

    
    ;; remove current from stage, add to container
    (when current
      (pixi-swap-parent! (:sprite current)
                         (.-stage app)
                         (get containers (container-accessor (:type current)))))
    
    (when new
      (pixi-swap-parent! (:sprite new)
                         (get containers (container-accessor (:type new)))
                         (.-stage app)))))


(defn closet-click!
  [event {:keys [type color] :as item}]
  (let [is-touch? (some? (aget event "touch"))
        coords    (if is-touch? 
                    (aget (.-touches event) 0)
                    event)
        x         (.-pageX coords)
        y         (.-pageY coords)

        current-clothing (get-in @app-state [:pixi :sprites :clothing type])
        containers (get-in @app-state [:pixi :containers])]

    (swap! app-state assoc-in [:pixi :sprites :clothing type] item)
    (swap! app-state (fn [state]
                       (-> state
                           (assoc-in [:pixi :sprites :clothing type]
                                     item)
                           #_(update-in [:pixi :sprites :closet]
                                        conj current-clothing))))

    (pixi-swap-clothes! current-clothing item)
    
    (when current-clothing
      (setup-closet-item! current-clothing))
    (configure-clothing-sprites! (:pixi @app-state))))



(defn init-closet-layout!
  [{:keys [sprites graphics app] :as pixi-state}]
  (let [{:keys [tops bottoms hair]} (:closet sprites)
        clothing-sprite-width 128 #_140
        clothing-sprite-height 128
        clothes-per-row (/ (- js/window.innerWidth 100)
                           (/ clothing-sprite-width 2))
        closet-base-top (+ 256 15 50 40)

        max-n-clothing (max (count tops) (count bottoms) (count hair))

        nested-n (mapv vec
                       (partition-all clothes-per-row (range max-n-clothing)))

        closet-coords (for [y    (range (count nested-n))
                            x    (range (count (nth nested-n y)))]
                        [(+ (* x (/ clothing-sprite-width 2))
                            (/ clothing-sprite-width 4))
                         (+ closet-base-top
                            (* y (/ clothing-sprite-height 1 #_2)))])]
    
    (swap! app-state update-in [:pixi :sprites :closet]
           (fn [{:keys [tops bottoms hair]}]
             {:tops (mapv #(assoc %1 :closet-coords %2)
                          tops
                          closet-coords)
              :bottoms (mapv #(assoc %1 :closet-coords %2)
                             bottoms
                             closet-coords)
              :hair (mapv #(assoc %1 :closet-coords %2)
                          hair
                          closet-coords)})))
    
  #_(let [clothing-sprites (:closet sprites)
          clothing-sprite-width 128 #_140
          clothing-sprite-height 128
          clothes-per-row (/ (- js/window.innerWidth 100)
                             (/ clothing-sprite-width 2))
          clothing-nested (mapv vec
                                (partition-all clothes-per-row clothing-sprites))

          closet-base-top (+ 256 15 50)

          closet-coords (for [y    (range (count clothing-nested))
                              x    (range (count (nth clothing-nested y)))
                              :let [{:keys [sprite color] :as item}
                                    (get-in clothing-nested [y x])]]
                          [(+ (* x (/ clothing-sprite-width 2))
                              (/ clothing-sprite-width 4))
                           (+ closet-base-top
                              (* y (/ clothing-sprite-height 1 #_2)))])]
    
      (swap! app-state update-in [:pixi :sprites :closet]
             (fn [clothing]
               (mapv #(assoc %1 :closet-coords %2)
                     clothing
                     closet-coords)))))


(defn setup-closet-item!
  [{:keys [sprite color closet-coords starting-z] :as closet-item}]
  (let [[closet-x closet-y] closet-coords]
    
    ;; layout
    (set! (.. sprite -anchor -x) 0)
    (set! (.. sprite -scale -x) 0.5)
    (set! (.. sprite -scale -y) 0.5)
    (set! (.-x sprite) closet-x)
    (set! (.-y sprite) closet-y)
    (set! (.-zIndex sprite) starting-z)

    ;; color
    (set! (.-tint sprite) color)

    ;; interactivity
    (set! (.-interactive sprite) true)
    (set! (.-buttonMode sprite) true)
    
    (.on sprite "mousedown" #(closet-click! % closet-item))
    (.on sprite "touchstart" #(closet-click! % closet-item))))


(defn setup-closet-clothes!
  [{:keys [sprites graphics app] :as pixi-state}]
  (let [all-clothes (reduce into [] (vals (:closet sprites)))]
    (doseq [item all-clothes]
      (setup-closet-item! item)))
  
  
  #_(let [clothing-sprites (:closet sprites)
          closet-base (:closet graphics)
          clothing-sprite-width 128
          clothing-sprite-height 128
          clothes-per-row (/ (- js/window.innerWidth 100)
                             (/ clothing-sprite-width 2))
          clothing-nested (mapv vec
                                (partition-all clothes-per-row clothing-sprites))

          closet-base-top (+ 256 15 50)]

      (doseq [item (:closet sprites)]
        (setup-closet-item! item))))


(defn setup-pixi
  [pixi-state]
  (add-pixi pixi-state)

  (set! (.-sortableChildren (.-stage (:app pixi-state))) true)

  ;; do this here so it's layered under all the sprites
  (setup-closet! pixi-state)
  
  (add-all-sprites! pixi-state)
  (configure-body-and-clothes! pixi-state)
  (init-closet-layout! pixi-state)
  (setup-closet-clothes! (:pixi @app-state)))

(defn setup-game-state
  []
  {})


(defn calculate-layout
  []
  (let [margin 35]
    {:margin margin}))

(defn setup-layout!
  []
  (let [window-width js/window.innerWidth
        window-height js/window.innerHeight
        margin 35]
    :TODO))


(defn show-closet-tab!
  [new-tab]
  (let [{:keys [closet-tab pixi]} @app-state
        {:keys [app containers]} pixi]
    
    (.removeChild (.-stage app) (get containers closet-tab))

    (.addChild (.-stage app) (get containers new-tab))

    (swap! app-state assoc :closet-tab new-tab)))


(defn toggle-tucked-shirt!
  []
  (let [clothing (get-in @app-state [:pixi :sprites :clothing])
        bottom-sprite (get-in clothing [:bottom :sprite])
        bottom-z (.-zIndex bottom-sprite)
        top-sprite (get-in clothing [:top :sprite])

        ;; REWRITE ME!!!
        top-z (if (= bottom-z (.-zIndex top-sprite))
                (if (= bottom-z 2)
                  1
                  2)
                (.-zIndex top-sprite))]

    #_(println "tucked " bottom-z top-z)
    
    #_(if (and bottom-sprite
               (:tucked? @app-state))
        (do (set! (.-zIndex bottom-sprite) 2)
            (set! (.-zIndex top-sprite) 1))
        (do (set! (.-zIndex bottom-sprite) 1)
            (set! (.-zIndex top-sprite) 2)))


    (do (set! (.-zIndex bottom-sprite) top-z)
        (set! (.-zIndex top-sprite) bottom-z))
    
    (swap! app-state update :tucked? not)))


(defn next-day!
  []
  (doseq [item (vals (get-in @app-state [:pixi :sprites :clothing]))]
    (pixi-swap-clothes! item nil)
    (setup-closet-item! item))

  
  (swap! app-state #(-> %
                        (update :day inc)
                        (update :prompt-n inc)
                        (update :prompt-n mod (count (:prompts %)))
                        (assoc-in [:pixi :sprites :clothing] {})
                        (assoc :tucked? false))))

(defn ui
  []
  (let [{:keys [prompts prompt-n day tucked?]} @app-state]
    [:div#ui {:style {:position "absolute"
                      :top      0
                      :margin   10
                      :width (- js/window.innerWidth 50)   ; pixi canvas width
                      :height (- js/window.innerHeight 50) ; pixi canvas height
                      :pointer-events "none"}}

     [:h1 {:style {:position   "absolute"
                   :top        125
                   :left       "15%"
                   :text-align "center"
                   :transform  "translateX(-50%)"}}
      (str "Day " day)]

     [:button {:style {:position   "absolute"
                       :top        200
                       :left       "15%"
                       :text-align "center"
                       :transform  "translateX(-50%)"
                       :pointer-events "auto"}
               :on-click toggle-tucked-shirt!}
      (if-not tucked?
        "Tuck Shirt"
        "Untuck Shirt")]
     
     [:p#prompt {:style {:position  "absolute"
                         :top       255 #_275
                         :font-weight "bold"
                         :width js/window.innerWidth
                         :left      "50%"
                         :color     "#2c3e50"
                         :text-align "center"
                         :transform "translateX(-50%)"}}

      (str "Today: "
           #_(rand-nth prompts)
           (nth prompts prompt-n))]

     [:button {:style {:position "absolute"
                       :left "75%"
                       :top 150
                       :height "3em"
                       :width "8em"
                       :pointer-events "auto"}
               :on-click next-day!}
      "All dressed!"]

     [:div#closet-sorter {:style {:position "absolute"
                                  :top      (+ 256 15 50) ; closet-base-top
                                  }}
      [:button {:style    { ;;:position "absolute"
                           ;;:left "10%"
                           ;;:top (+ 256 15 50)
                           ;;:height "3em"
                           :width          "8em"
                           :pointer-events "auto"}
                :on-click #(show-closet-tab! :tops)}
       "Tops"]

      [:button {:style    { ;;:position "absolute"
                           ;;:left "11%"
                           ;;:top (+ 256 15 50)
                           ;;:height "3em"
                           :width          "8em"
                           :pointer-events "auto"}
                :on-click #(show-closet-tab! :bottoms)}
       "Bottoms"]

      [:button {:style    { ;;:position "absolute"
                           ;;:left "22%"
                           ;;:top (+ 256 15 50)
                           ;;:height "3em"
                           :width          "8em"
                           :pointer-events "auto"}
                :on-click #(show-closet-tab! :hair)}
       "Wigs"]]]))


(defn mount-ui
  []
  (rd/render [ui]
             (.getElementById js/document "ui-holder")) 
  #_(when-not (:loaded? @game-state)
      (init-game!)))

;;------------------- inputs ---------------------

(defn dispatch-select!
  [event]
  (let [is-touch? (some? (aget event "touch"))
        coords    (if is-touch? 
                    (aget (.-touches event) 0)
                    event)
        x         (.-pageX coords)
        y         (.-pageY coords)]
    
    #_(println "clicked: " x y)))

(defn setup-inputs!
  [{:keys [app] :as pixi-state}]
  (.addEventListener (.. app -renderer -view)
                     "click"
                     #(dispatch-select! %))
  #_(.addEventListener (.. app -renderer -view)
                       "mousemove"
                       #(dispatch-move %))

  #_(.addEventListener (.. app -renderer -view)
                       "touchend"
                       #(dispatch-click %))
  #_(.addEventListener (.. app -renderer -view)
                       "touchmove"
                       #(dispatch-move %)))

;;------------------------------------------------

(defn setup-and-go!
  []
  #_(setup-layout!) ;; maybe not needed?
  (setup-pixi (:pixi @app-state))
  (setup-inputs! (:pixi @app-state))
  (mount-ui))


(def _ (setup-and-go!))

(defonce elapsed (atom 0.0))

#_(.add (.-ticker pixi-app)
        (fn [delta]
          (swap! elapsed + delta)
          (set! (.-x pixi-sprite) @elapsed)))


;; --------------- Howler ------------------

#_(def sound (js/Howl. #js{:src "sounds/drop_001.ogg"}))

;; eval this to play the sound
#_(.play sound)
