import React, { useState } from "react";
import "./form.scss";
export const Form = ({ setTodoData }) => {
	const [value, setValue] = useState("");

	//할 일 입력중
	const handleChange = (e) => {
		setValue(e.target.value);
	};

	// 할일 입력 버튼
	const handleSubmit = (e) => {
		e.preventDefault();
		if (value !== "") {
			let newTodo = {
				id: Date.now(), //Date.now() 메소드는 UTC 기준으로 1970년 1월 1일 0시 0분 0초부터 현재까지 경과된 밀리 초를 반환
				content: value,
				completed: false,
			};
			setTodoData((prev) => [...prev, newTodo]);
			setValue("");
		} else {
			alert("할 일을 입력해 주세요");
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="todo-input" className="a11y-hidden">
				오늘의 할일
			</label>
			<input type="text" id="todo-input" className="todo-input" placeholder="오늘의 할 일을 입력하세요" value={value} onChange={handleChange} />
			<button type="submit">입력</button>
		</form>
	);
};
