import React from "react";

export const List = ({ id, content, completed, todoData, setTodoData }) => {
	return (
		<>
			<li key={id}>
				<input type="checkbox" id={"inptut" + id} defaultChecked={completed} />
				{/* checked React : defaultChecked */}
				<label htmlFor={"inptut" + id}>{content}</label>

				<button type="button" className="modify">
					<span className="a11y-hidden">수정</span>
				</button>
				<button type="button" className="apply">
					<span className="a11y-hidden">적용</span>
				</button>
				<button type="button" className="delete">
					<span className="a11y-hidden">삭제</span>
				</button>
			</li>
		</>
	);
};
