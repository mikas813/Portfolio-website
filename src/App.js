import {Header} from './components/Header/Header';
import {Footer} from './components/Footer/Footer';
import {Navigation} from './components/Navigation/Navigation';
import {SocLinks} from './components/SocLinks/SocLinks';
import {Border} from './components/Border/Border';
import {Content} from './components/Content';
import {Cube} from './components/Cube/Cube';
import React, {useEffect} from 'react';
import ReactGA from 'react-ga';

export const App = () => {
    useEffect(() => {
        ReactGA.initialize(process.env.REACT_APP_GA_TRAKING);
    }, []);
    return (
        <div className="App">
            <Border>
                <Header/>
                <Navigation/>
                <Content>
                    <Cube/>
                </Content>
                <SocLinks/>
                <Footer/>
            </Border>
        </div>
    );
};

