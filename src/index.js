import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar'
import MainText from './components/MainText'
import ImageLarge from './components/ImageLarge';
import MainButton from './components/MainButton'

class App extends React.Component {

    render() {
        const largeMessage = "Adventure is waiting"
        const mediumMessage = "Just follow a few simple steps to find your next big adventure!"
        const signIn = "sign in"
        const signUp = "sign up"
        
        return (
            <div>
                <Navbar message="'this is a test message'"/>
                <div style={{width: "50%", float: "left"}}>
                    <MainText largeMessage={largeMessage} mediumMessage={mediumMessage} />
                    <MainButton text={signIn} />
                    <MainButton text={signUp} />
                </div>
                <div style={{width: "50%", float: "right"}}>
                    <ImageLarge />
                </div>
            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
)