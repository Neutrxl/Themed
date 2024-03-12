// ==UserScript==

// @name			CSS Player Context Menu
// @version			1.0.5
// @description		Injects CSS code into the page
// @author			OrakomoRi

// @icon			https://i.imgur.com/kazYkHx.png

// @match			https://*.tankionline.com/*

// @connect			raw.githubusercontent.com
// @connect			cdn.jsdelivr.net

// @require			https://raw.githubusercontent.com/Neutrxl/Themed/main/General/PlayerContextMenu/PlayerContextMenu.min.js

// @run-at			document-start
// @grant			GM_xmlhttpRequest
// @grant			unsafeWindow

// ==/UserScript==

(function() {
	'use strict';

	// Link to raw CSS file
	const link = 'https://raw.githubusercontent.com/Neutrxl/Themed/main/General/PlayerContextMenu/PlayerContextMenu.min.css';

	// Make an AJAX request to fetch the CSS file
	GM_xmlhttpRequest({
		method: 'GET',
		url: link,
		onload: function(response) {
			// Inject CSS into the page
			// Create a <style> element
			var styleElement = document.createElement('style');
			// Set the CSS text to styles
			styleElement.textContent = response.responseText;
			// Apply styles to body end (to override initial styles)
			document.body.appendChild(styleElement);
		},
		onerror: function(error) {
			console.error('Failed to load CSS file:', error);
		}
	});
})();