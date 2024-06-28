import { useState } from 'react';
import Modal from './Modal';

function InputWord(){
    const [isModalOpen, setModalOpen] = useState(false);
    const [wordList , setWordList] = useState([]);

    const handleOpenModal = () => {
      setModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setModalOpen(false);
    };
  
    const handleSubmit = (input) => {
        console.log("input",input)
      
        const changedList = wordList.concat(input);
  
        setWordList(changedList);
    
    };

    console.log(wordList);
    const changedList = wordList.map(word => 
                                            <> 
                                                <span> {word}</span>
                                                <br/>
                                            </>
                                        )
  
    return (
      <div className="App">
        <button onClick={handleOpenModal}>단어 입력창</button>
        <br/>
        {changedList}
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSubmit={handleSubmit}
        />
      </div>
    );

}

export default InputWord;