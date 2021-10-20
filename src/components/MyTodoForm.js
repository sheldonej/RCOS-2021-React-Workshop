import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';

const AddTodoForm = () => {
	const [value, setValue] = useState('');
	const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();
		if (value) {
			dispatch(
				addTodo({
					title: value,
				})
			);
		}
	};

	return (
		<form onSubmit={onSubmit} className='form-inline mt-3 mb-3'>
			<input type='text' className='form-control mr-sm-2'
				placeholder='Add todo...' value={value} onChange={(event) => setValue(event.target.value)}
			></input>
			<button type='submit' className='circle-submit'>
				Add
			</button>
		</form>
	);
};

export default AddTodoForm;
