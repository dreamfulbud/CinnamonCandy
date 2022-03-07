(function () {
	const btn = document.querySelector(".btn-check");
	const wakeup = document.querySelector(".waketime");
	const today = wakeup.querySelector(".today");
	const time = wakeup.querySelector(".time");

	let intervalTime;
	let saveTime = localStorage.getItem("wakeTime");
	let saveToday = localStorage.getItem("wakeToday");

	function getToday() {
		const now = new Date();
		const year = now.getFullYear();
		const month = String(now.getMonth() + 1).padStart(2, "0");
		const date = String(now.getDate()).padStart(2, "0");

		const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fir", "Sat"];
		const day = now.getDay();
		let todayLabel = week[day];

		const hour = String(now.getHours()).padStart(2, "0");
		const minute = String(now.getMinutes()).padStart(2, "0");
		const second = String(now.getSeconds()).padStart(2, "0");

		//저장된 날짜가 오늘이랑 같으면
		if (saveTime && saveToday === `${year}.${month}.${date} ${todayLabel}`) {
			time.textContent = saveTime;
			today.textContent = saveToday;
		} else {
			time.textContent = `${hour}:${minute}:${second}`;
			today.textContent = `${year}.${month}.${date} ${todayLabel}`;
		}
	}

	getToday();
	if (!intervalTime) {
		intervalTime = setInterval(getToday, 1000);
	}

	function stopTime() {
		clearInterval(intervalTime);
		localStorage.setItem("wakeToday", today.textContent);
		localStorage.setItem("wakeTime", time.textContent);
		intervalTime = null;
	}

	//이미지 캡처하기
	/*
	function captureImage(e) {
		html2canvas(wakeup).then(function (canvas) {
			const img = document.createElement("img");
			img.setAttribute("src", canvas.toDataURL("image/jpeg"));
			wakeup.appendChild(img);
		});
	}
	*/

	btn.addEventListener("click", stopTime);
})();
