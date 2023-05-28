---
layout: default
styles1: "/assets/css/styles.css"
styles2: "/assets/css/alternative-styles.css"
styles3: "/assets/css/ai-colors.css"
styles4: "/assets/css/ai-colors-2.css"
styles5: "/assets/css/ai-styles.css"
swap1: "swapStyleSheets('/assets/css/styles.css')"
---

<script>
function removeStyleSheet(sheet) {
  sheet.ownerNode.parentNode.removeChild(sheet.ownerNode);
}

function removeAllSheets() {
  while (document.styleSheets.length > 0) {
    removeStyleSheet(document.styleSheets[0]);
  }
}

function addStyleSheet(sheet) {
  var link = document.createElement('link');
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = sheet;
  document.head.appendChild(link);
}

function swapStyleSheets(newSheet) {
  removeAllSheets();
  addStyleSheet(newSheet);
}
</script>

<button onclick="swapStyleSheets('/assets/css/styles.css')">First Style</button>

<button onclick="swapStyleSheets('/assets/css/alternative-styles.css')">Second Style</button>
