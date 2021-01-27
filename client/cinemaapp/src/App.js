import { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';
import PrivateRoute from './components/PrivateRoute';
import LoginPage from './containers/LoginPage'
import MoviesPage from './containers/MoviesPage';
import RegisterPage from './containers/RegisterPage'
import SubscriptionsPage from './containers/SubscriptionsPage';
import UsersManagmentPage from './containers/UsersManagmentPage';
// import membersUtils from './utils/membersUtils'
// import moviesUtils from './utils/moviesUtils'
// import permissionsUtils from './utils/permissionsUtils'
// import subsUtils from './utils/subscriptionsUtils'
// import watchedSubsUtils from './utils/watchedSubsUtils'
// import usersUtils from './utils/usersUtils'
// import authUtils from './utils/authUtils'

function App() {

  useEffect(() => {
    async function fetchData() {
    }

    fetchData()

  }, [])

  return (
    <div className="App">
      <Router>
        <PrivateRoute path='/' exact component={MoviesPage} />
        <PrivateRoute path='/movies' component={MoviesPage} />
        <PrivateRoute path='/subscriptions' component={SubscriptionsPage} />
        <PrivateRoute path='/usersmanagment' component={UsersManagmentPage} />

        <Route path='/login' component={LoginPage} />
        <Route path='/signup' component={RegisterPage} />
      </Router>
    </div>
  );
}

export default App;
