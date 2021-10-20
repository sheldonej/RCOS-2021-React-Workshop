import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddNewTodoForm from './components/MyTodoForm';
import TodoList from './components/MyTodoList';
import TotalCompleteItems from './components/TotalCompleteItems';

const App = () => {
	return (
		<div className="page-wrapper">
			<div className='main-container'>
				<div className='content-header'>
					<h1>My First Todo List</h1>
				</div>
				<AddNewTodoForm />
				<TodoList />
				<TotalCompleteItems />
			</div>
		</div>
	);
};

export default App;
