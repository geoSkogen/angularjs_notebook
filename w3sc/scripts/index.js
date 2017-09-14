'use strict'

window.addEventListener("load", initIndex)

function initIndex() {

var app = document.getElementById("app")

var docs =[
"demo.html",
"css_ang.html",
"directive_custom.html",
"directive_students.html",
"services.html",
"services_math.html",
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
"mod_cntrl_1.html",
"mod_cntrl_2.html"
]

  function buildNavBox() {
	var flexcont = document.createElement("div")
	var div = document.createElement("div")
	div.className = "navBoxOuter"
	flexcont.className = "flexOuterCenter"
	flexcont.appendChild(div)
	return flexcont
  }
  
  function buildLinkTree(urls) {
	var newdiv
	var newa
	var newtext
	var navbox = document.createElement("div")
	var flexcont = document.createElement("div")
	flexcont.className = "flexOuterColumn"
	navbox.className = "navBoxInner"
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
	  navbox.appendChild(flexcont)
	}
	return navbox
  }
  
  function initLinkTree() {
    var div1 = buildNavBox()
	var tree1 = buildLinkTree(docs)
	div1.appendChild(tree1)
	app.appendChild(div1)
  }
  
  initLinkTree().call(this)
}