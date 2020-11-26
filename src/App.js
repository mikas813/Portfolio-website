import {Header} from './components/Header/Header';
import {Footer} from './components/Footer/Footer';
import {Navigation} from './components/Navigation/Navigation';
import {SocLinks} from './components/SocLinks/SocLinks';
import {Border} from './components/Border/Border';
import {Content} from './components/Content';
import {Cube} from './components/Cube/Cube';
import ReactGA from 'react-ga';
import React, {useEffect} from 'react';

export const App = () => {

    useEffect(() => {
        ReactGA.initialize('G-03EE6RX9B4');
        ReactGA.pageview('/')
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

