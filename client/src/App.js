import React , {Suspense} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Auth from './hoc/auth'
import './App.css'
//pages
import LandingPage from './components/views/LandingPage/LandingPage'
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import Navbar from './components/views/NavBar/NavBar';
import FooterPage from './components/views/Footer/Footer';
import HeaderPage from './components/views/Header/Header';
import IntroducePage from './components/views/IntroducePage/IntroducePage';
import RecruitMemberPage from './components/views/RecruitMemberPage/RecruitMemberPage';
import RecruitTeamPage from './components/views/RecruitTeamPage/RecruitTeamPage';
import SuggestionPage from './components/views/SuggestionsPage/SuggestionPage';
import SiderPage from './components/views/Sider/Sider';
import { Layout } from 'antd';
import Column from 'antd/lib/table/Column';

function App() {

  const { Header, Footer, Sider, Content } = Layout;

  return (
    //fallback={(<div>Loading...</div>)}
    <div className="App">
        <div className="header"> <HeaderPage/> </div>
        <div className="nav"> <Navbar/> </div>


        <div className="left"/>
        <div className="main">
          <BrowserRouter>
            <Switch>
              //todo 로그인이 필요한 경우: true, 로그인을 안해야 하는경우: false, 상관없는 경우: null
              <Route exact path="/" component={Auth(LandingPage, null)} />
              <Route exact path="/login" component={Auth(LoginPage, false)} />
                <Route exact path="/register" component={Auth(RegisterPage, false)} />
                <Route exact path="/introduce" component={Auth(IntroducePage, null)} />
                <Route exact path="/member" component={Auth(RecruitMemberPage, null)} />
                <Route exact path="/team" component={Auth(RecruitTeamPage, null)} />
                <Route exact path="/suggestion" component={Auth(SuggestionPage, true)} />
            </Switch>
          </BrowserRouter>
        </div>
          
        <div className="side">
              <SiderPage/>
        </div>      

        <div className="footer"><FooterPage/></div>
    </div>
  );
}

export default App;

