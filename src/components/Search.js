import React, {useContext, useState} from 'react';
import {AlertContext} from "../context/alert/alertContext";
import {GithubContext} from "../context/github/githubContext";

const Search = () => {
	const [value, setValue] = useState('');
	const alert = useContext(AlertContext);
	const github = useContext(GithubContext);

	const onSubmit = event => {
		if (event.key !== 'Enter') {
			return;
		}

		github.clearUsers();

		if (value) {
			alert.hide();
			github.search(value);
		} else {
			alert.show('Введите данные пользователя');
		}
	}

	return (
		<div className="form-group">
			<input
				type="text"
				className="form-control"
				value={value}
				placeholder="Введите имя пользователя..."
				onChange={event => setValue(event.target.value.trim())}
				onKeyPress={onSubmit}
			/>
		</div>
	);
};

export default Search;