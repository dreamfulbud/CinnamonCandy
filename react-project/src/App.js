import { useEffect, useState } from "react";
import { Form } from "./components/Form";
import { Lists } from "./components/Lists";
import { TimeCheck } from "./components/TimeCheck";
import "./style/global.scss";

const initialTodoData = localStorage.getItem("todoData") ? JSON.parse(localStorage.getItem("todoData")) : [];
function App() {
	/* 데이터 형식
		{	id: "1", content: "공부하기",	completed: true },
	*/
	const [todoData, setTodoData] = useState(initialTodoData);

	//로컬스토리지에 저장하기
	useEffect(() => {
		localStorage.setItem("todoData", JSON.stringify(todoData));
	}, [todoData]);

	// 모두지우기!
	const handleAllRemove = () => {
		setTodoData([]);
	};

	return (
		<div className="wrap">
			<TimeCheck />
			<section className="todo_wrap">
				<h2>오늘의 할일 목록</h2>
				<button type="button" className="all-delete" onClick={handleAllRemove}>
					모두지우기
				</button>

				<Lists todoData={todoData} setTodoData={setTodoData} />
				<Form todoData={todoData} setTodoData={setTodoData} />
			</section>
		</div>
	);
}

export default App;
