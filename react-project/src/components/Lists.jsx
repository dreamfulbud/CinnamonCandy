import React from "react";
import { List } from "./List";
import "./lists.scss";

export const Lists = ({ todoData, setTodoData }) => {
	return (
		<>
			<ul className="todo-list">
				{todoData.length !== 0 ? (
					todoData.map((data) => <List key={data.id} id={data.id} content={data.content} completed={data.completed} todoData={todoData} setTodoData={setTodoData} />)
				) : (
					<p className="no-list">오늘의 할 일을 입력해주세요!</p>
				)}
			</ul>
		</>
	);
};
