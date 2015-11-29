chrome.runtime.onMessage.addListener(function(response, sender, sendResponse) {

	// Split
	var split = response.split('___');
	var workTime = split[0];
	var breakTime = split[1];

	var alarmTime = (1/60) * workTime;

	clearTimeout(window.sto);
	window.sto = setTimeout(function () {
		chrome.notifications.create({
			type : 'basic',
			title : 'BREAK!',
			message : 'Please just take a break for a moment!',
			iconUrl : 'icon.png'
		}, function() {
			//
		});
	}, workTime * 1000)

	// Apakah alarm nya sudah ada sebelumnya?
	/*chrome.alarms.clear('userAlarm')
	chrome.alarms.create('userAlarm', {
		delayInMinutes : alarmTime
	})

	chrome.alarms.onAlarm.addListener(function onAlarmCreated(alarm) {
		chrome.notifications.create({
			type : 'basic',
			title : 'BREAK!',
			message : 'Please just take a break for a moment!',
			iconUrl : 'icon.png'
		}, function() {
			//
		});
	});*/

})