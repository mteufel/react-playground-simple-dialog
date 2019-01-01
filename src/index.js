import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Dialog from "./components/Dialog";

class App extends React.Component {

    state = {
        isOpen: false
    }

    render() {
        return(
            <div>

                <button onClick={  (e) => this.setState( { isOpen: true } ) } >Open Dialog</button>


                <Dialog isOpen={this.state.isOpen} onClose={(e) => this.setState( { isOpen: false } ) }>
                    Ich bin ein menschlicher Mensch!!!
                </Dialog>


            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
