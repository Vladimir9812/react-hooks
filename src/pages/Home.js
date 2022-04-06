import React, {Fragment, useContext, useEffect} from 'react';
import Search from "../components/Search";
import Card from "../components/Card";
import {GithubContext} from "../context/github/githubContext";

const Home = () => {
	const {loading, users, clearUsers} = useContext(GithubContext);

	useEffect(() => {
		clearUsers();
		// eslint-disable-next-line
	}, [])

	return (
		<Fragment>
			<Search />

			<div className="row">

				{
					loading
						? <p className="text-center">Загрузка...</p>
						:	users.map((user) => (
								<div key={user.id} className="col-sm-4 mb-4">
									<Card user={user}/>
								</div>
							))
				}
			</div>
		</Fragment>
	);
};

export default Home;