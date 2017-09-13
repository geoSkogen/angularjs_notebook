'use strict'

window.addEventListener("load", initIndex)

function initIndex() {

var app = document.getElementById("app")

var docs =[
"index.html",
"demo.html",
"css_ang.html",
"directive_custom.html",
"services.html",
"filters.html",
"filters2.html",
"filters3.html",
"filters4.html",
"filters5.html", 
"select.html",
"forms.html",
"form_valid.html",
"DOM_events.html", 
"DOM_events2.html",
"DOM_show_hide_disable.html",
"scope_rootvscntrl.html",    
"mod_cntrl.html",
"mod_cntrl_1.html",
"mod_cntrl_2.html",
"index.html"
]

  function buildNavBox() {
	var div = document.createElement("div")
	div.className = "navBox"
	return div
  }
  
  function buildLinkTree(urls) {
	var newdiv
	var newa
	var newtext
	var flexcont = document.createElement("div")
	flexcont.className = "flexOuterColumn"
	for (let i = 0; i < urls.length; i++) {
	  newdiv = document.createElement("div")
	  newa = document.createElement("a")
	  newtext = document.createTextNode(urls[i])
	  newdiv.className = "linkBranch"
	  newa.className = "linkLeaf"
	  newa.setAttribute("href", urls[i])
	  newa.appendChild(newtext)
	  newdiv.appendChild(newa)
	  flexcont.appendChild(newdiv)  
	}
	return flexcont
  }
  
  function initLinkTree() {
    var div1 = buildNavBox()
	var tree1 = buildLinkTree(docs)
	div1.appendChild(tree1)
	app.appendChild(div1)
  }
  
  initLinkTree().call(this)
}