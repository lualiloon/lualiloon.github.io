(ns my-app.core
  (:require [cljsjs.pixi]
            [cljsjs.howler]
            [reagent.core :as r]
            [reagent.dom :as rd]
            [clothing.prompts :as p]))

;; --------------- PIXI ------------------

(defonce initial-state {:pixi
                        {:app
                         (js/PIXI.Application. #js{:width 640 :height 360
                                                   :backgroundColor "0xA08D89"})
                         :sprite (js/PIXI.Sprite.from "images/pants1.png")}
                        :prompts (shuffle p/prompts)
                        :prompt-n 0})


(defonce state-atom
  (atom initial-state))


(defn reset-state-atom!
  []
  (reset! state-atom initial-state))


(defn add-pixi
  [{:keys [app] :as pixi-state}]
  (let [app-holder (js/document.getElementById "app-holder")]    
    (.appendChild app-holder (.-view app))))


(defn add-sprite
  [{:keys [app sprite] :as pixi-state}]
  (set! (.-tint sprite) (str "0x" #_"3390b8"
                             #_"f7d9600"
                             #_"913c7f"))
  (.addChild (.-stage app) sprite))


(defn setup-pixi
  [pixi-state]
  (do (add-pixi pixi-state)
      (add-sprite pixi-state)))

(defn setup-game-state
  []
  {})



(defn ui
  []
  (let [{:keys [prompts prompt-n]} @state-atom]
    [:div#ui {:style {:position "fixed"
                      :top      0
                      :margin   10
                      :width 640 ; pixi canvas width
                      :height 360 ; pixi canvas height
                      }}
     [:p {:style {:position "fixed"
                  :top (- 360 ;; pixi canvas height
                          35)
                  ;; :right "50%"

                  ;; TODO: make sure this placement is centered for all prompts
                  :transform "translateX(85%)" 
                  }
          }
      (nth prompts prompt-n)]]))

(defn mount-ui
  []
  (rd/render [ui]
             (.getElementById js/document "app-holder")) 
  #_(when-not (:loaded? @game-state)
      (init-game!)))

(def _
  (doall (setup-pixi (:pixi @state-atom))
         (mount-ui)))

(defonce elapsed (atom 0.0))

#_(.add (.-ticker pixi-app)
      (fn [delta]
        (swap! elapsed + delta)
        (set! (.-x pixi-sprite) @elapsed)))


;; --------------- Howler ------------------

(def sound (js/Howl. #js{:src "sounds/drop_001.ogg"}))

;; eval this to play the sound
#_(.play sound)
