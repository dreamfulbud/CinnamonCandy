import React, { useEffect, useState } from "react";
import "./timeCheck.scss";

export const TimeCheck = () => {
	const [today, setToday] = useState("0000");
	const [time, setTime] = useState("0000");
	let intervalTime;
	let saveTime = localStorage.getItem("wakeTime");
	let saveToday = localStorage.getItem("wakeToday");

	useEffect(() => {
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

		const nowTime = `${hour}:${minute}:${second}`;
		const nowToday = `${year}.${month}.${date} ${todayLabel}`;

		//저장된 날짜가 오늘이랑 같으면
		if (saveTime && saveToday === nowToday) {
			setTime(saveTime);
			setToday(saveToday);
		} else {
			setTime(nowTime);
			setToday(nowToday);
		}
	});

	// if (!intervalTime) {
	// 	intervalTime = setInterval(getToday, 1000);
	// }

	const handleCheckWakeTime = () => {
		// clearInterval(intervalTime);
		// localStorage.setItem("wakeToday", today.textContent);
		// localStorage.setItem("wakeTime", time.textContent);
		// intervalTime = null;
	};
	return (
		<section className="time_wrap">
			<h2>기상시간</h2>
			<div className="waketime">
				<p className="today">{today}</p>
				<p className="time">{time}</p>
			</div>
			<button className="btn-check" onClick={handleCheckWakeTime}>
				<span className="a11y-hidden">기상시간체크</span>
			</button>
		</section>
	);
};
