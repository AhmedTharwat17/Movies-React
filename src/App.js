import React from 'react';
import'../node_modules/bootstrap/dist/css/bootstrap.min.css'
import'../node_modules/bootstrap/dist/js/bootstrap.min'
import HeaderComponant from './Header/header';
import AboutComponant from './About-Us/about';
import SkillComponant from './Skills/skills';
import PortoflioComponant from './portofolio/portofolio';
import FooterComponant from './Footer/footer';
import Login from './Login/login'
import Registration from './Register/register'
import ToDo from './TODO/to-do-list';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavComponant from './Navbar/nav';
import MoviesComponant from './Movies/movie';
import MoviesDetialsComponant from './Movies/movieDetials';
import favoriteMovies from './favoriteMov/favMov';
import ChangeLoader from './Loading/loading';
import { useSelector } from 'react-redux';

function App() {

  const isLoading = useSelector((state) => state.loader.isLoader )
  return (
    <BrowserRouter>
      <NavComponant />
        <Switch>
          <Route path= "/" exact component={HeaderComponant} />
          <Route path= "/about" exact component={AboutComponant} />
          <Route path= "/skills" exact component={SkillComponant} />
          <Route path= "/portoflio" exact component={PortoflioComponant} />
          <Route path= "/login" exact component={Login} />
          <Route path= "/registration" exact component={Registration} />
          <Route path= "/ToDo" exact component={ToDo} />
          <Route path= "/movies" exact component={MoviesComponant} />
          <Route path= "/moviedetails/:id" exact component={MoviesDetialsComponant} />
          <Route path= "/favorite" exact component={favoriteMovies} />
        </Switch>
        {isLoading && <ChangeLoader />}
      <FooterComponant />
    </BrowserRouter>
    
  );
}

export default App;
