import React from 'react';
import {Link, Route} from 'react-router-dom'
import Login from 'containers/login'
import News from 'containers/news'
import Profile from 'containers/profile'
import Home from 'containers/home'

const App = () =>{

    const checkButton =()=>{
        if(localStorage.getItem('login')!=='true')
            return 'Войти'
        else return 'Выйти'

    }

    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className="navbar-brand nav-link">Home</Link>
                <Link to="/news" className="navbar-brand nav-link">News</Link>
                {/*<Link to="/login" className="navbar-brand nav-link">Login</Link>*/}
                <Link to="/profile" className="navbar-brand nav-link">Profile</Link>
                <button>{checkButton()}</button>

            </nav>

            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/news" component={News}/>
            </div>

        </div>
    );
}

export default App;
