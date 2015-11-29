( function() {

	var form = document.getElementById('form')
	var workDOM = document.getElementById('work')
	var breakDOM = document.getElementById('break')

	chrome.storage.sync.get(['workTime','breakTime'], function(data) {
		console.log(data);
		workDOM.value = data.workTime || '';
		breakDOM.value = data.breakTime || '';
	})

	form.addEventListener('submit', function(e) {
		e.preventDefault()

		var workTime = workDOM.value
		var breakTime = breakDOM.value

		if (! workTime && ! breakTime) {
			//message('Error: No value speciifed')
			return;
		}

		chrome.storage.sync.set({
			workTime : workTime,
			breakTime : breakTime
		}, function() {
			// Do nothing
		})

		// Kirim ke background.js
		chrome.runtime.sendMessage(workTime + '___' + breakTime)
	})

})();