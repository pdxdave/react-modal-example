import React, {useState} from 'react';
import Modal from 'react-modal'
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="App">
      <button onClick={() => setIsOpen(true)}>Open</button>
        <Modal isOpen={isOpen}>
          <h2>Big Dogs</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae provident, repellat voluptas distinctio officia odit.</p>
        </Modal>
    </div>
  );
}

export default App;
