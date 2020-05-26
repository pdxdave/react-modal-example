import React, {useState} from 'react';
import Modal from 'react-modal'
import './App.css';

// onRequestClose is part of the react-modal. It will close 
// the modal when one clicks outside of the modal box.

// To allow react-modal to keep the other content page hidden, you should call 
// Modal.setAppElement with a query selector identifying the root of your app.

// styling is covered here https://reactcommunity.org/react-modal/styles/

Modal.setAppElement('#root')

function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="App">
      <button onClick={() => setIsOpen(true)}>Open</button>
        <Modal isOpen={isOpen} 
                onRequestClose={() => setIsOpen(false)}
                style={
                  {
                    overlay: {
                      backgroundColor: 'lightgrey'
                    },
                    content: {
                      backgroundColor: 'lightblue'
                    }
                  }
                }
            >
          <h2>Big Dogs</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae provident, repellat voluptas distinctio officia odit.</p>
          <button onClick={() => setIsOpen(false)}>Close</button>
        </Modal>
    </div>
  );
}

export default App;
