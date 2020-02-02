import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import Header from './components/header.jsx';
import Movies from './components/movies.jsx';
import Customers from './components/customers.jsx';
import Rentals from './components/rentals.jsx';
import NotFound from './components/notFound.jsx';
import MovieDetail from './components/movieDetail.jsx';
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/movies" component={Movies} />
        <Route path="/movies" render={(props) => <MovieDetail {...props} />} />
        <Redirect exact from="/" to="/movies" />
        <Route path="/customers" component={Customers} />
        <Route path="/rentals" component={Rentals} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>

    </div>
  );
}

export default App;
