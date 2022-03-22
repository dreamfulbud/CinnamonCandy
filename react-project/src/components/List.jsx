import React, { useState } from "react";

export const List = ({ id, content, completed, todoData, setTodoData }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [editedContent, setEditedContent] = useState(content);

	const handleDelete = () => {
		let newTododata = todoData.filter((data) => data.id !== id);
		setTodoData(newTododata);
	};

	//수정
	const handleEdidtChange = (event) => {
		setEditedContent(event.target.value);
	};

	//저장
	const handleSubmit = (event) => {
		event.preventDefault();
		let newTodoData = todoData.map((data) => {
			if (data.id === id) {
				data.content = editedContent;
			}
			return data;
		});
		setTodoData(newTodoData);
		setIsEditing(false);
	};

	const handleCompleChange = (e, id) => {
		let newTodoData = todoData.map((data) => {
			if (data.id === id) {
				data.completed = !data.completed;
			}
			return data;
		});
		setTodoData(newTodoData);
	};
	return (
		<>
			<li key={id}>
				{isEditing ? (
					//수정
					<>
						<form onSubmit={handleSubmit}>
							<input type="text" value={editedContent} onChange={handleEdidtChange} />
							<button type="submit" className="apply" onClick={handleSubmit}>
								<span className="a11y-hidden">저장</span>
							</button>
						</form>
					</>
				) : (
					<>
						<input type="checkbox" id={"inptut" + id} defaultChecked={completed} onChange={(e) => handleCompleChange(e, id)} className={completed ? "check-true" : ""} />
						<label htmlFor={"inptut" + id}>{content}</label>
						<button type="button" className="modify" onClick={() => setIsEditing(true)}>
							<span className="a11y-hidden">수정</span>
						</button>
					</>
				)}

				<button type="button" className="delete" onClick={handleDelete}>
					<span className="a11y-hidden">삭제</span>
				</button>
			</li>
		</>
	);
};
