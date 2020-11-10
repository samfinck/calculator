import React from 'react';
import { useRef } from 'react';

export default function CalculatorComponent(){
    

    const entryDiv = useRef(null);

    const clearButton = useRef(null);

    const clearLastButton = useRef(null);

    const equalsButton = useRef(null);

    const addButton = useRef(null);

    const subtractButton = useRef(null);

    const multiplyButton = useRef(null);

    const divideButton = useRef(null);

    const pointButton = useRef(null);

    const zeroButton = useRef(null);

    const oneButton = useRef(null);

    const twoButton = useRef(null);

    const threeButton = useRef(null);

    const fourButton = useRef(null);

    const fiveButton = useRef(null);

    const sixButton = useRef(null);

    const sevenButton = useRef(null);

    const eightButton = useRef(null);

    const nineButton = useRef(null);


    //const onAddNumber = () => {
    //    console.log(numberButton.current.innerHTML);
    //}

    const onAddNumber = () => {
        document.getElementById('entry-div').innerHTML = document.getElementById('entry-div').innerHTML + document.getElementById('point-div').innerHTML;
    }

    return(
        <div className="calculator-container">
            <div 
                className="entry-div"
                id='entry-div'
                ref={entryDiv}
                contentEditable={true} 
                data-text="0"
            >
            </div>
            
            <div 
                className="clear-div"
                ref={clearButton}
            >
                Clear Entry
            </div>
            
            <div 
                className="last-value-clear-div"
                ref={clearLastButton}
            >
                AC
            </div>
            
            <div 
                className="equals-div"
                ref={equalsButton}
            >
                =
            </div>
            
            <div 
                className="add-div"
                ref={addButton}
            >
                +
            </div>
            
            <div 
                className="subtract-div"
                ref={subtractButton}
            >
                -
            </div>
            
            <div 
                className="multiply-div"
                ref={multiplyButton}
            >
                ×
            </div>
            
            <div 
                className="divide-div"
                ref={divideButton}
            >
                ÷
            </div>
            
            <div 
                className="point-div"
                ref={pointButton}
                onClick={onAddNumber}
                id="point-div"
                
            >
                .
            </div>
            
            <div 
                className="zero-div"
                ref={zeroButton}
                onClick={onAddNumber}
            >
                0
            </div>
            
            <div 
                className="one-div"
                ref={oneButton}
                onClick={onAddNumber}
            >
                1
            </div>
            
            <div 
                className="two-div"
                ref={twoButton}
                onClick={onAddNumber}
            >   
                2
            </div>
            
            <div 
                className="three-div"
                ref={threeButton}
                onClick={onAddNumber}
            >
                3
            </div>
            
            <div 
                className="four-div"
                ref={fourButton}
                onClick={onAddNumber}
            >   
                4
            </div>
            
            <div 
                className="five-div"
                ref={fiveButton}
                onClick={onAddNumber}
            >
                5
            </div>
            
            <div 
                className="six-div"
                ref={sixButton}
                onClick={onAddNumber}
            >   
                6
            </div>
            
            <div 
                className="seven-div"
                ref={sevenButton}
                onClick={onAddNumber}
            >
                7
            </div>
            
            <div 
                className="eight-div"
                ref={eightButton}
                onClick={onAddNumber}
            >
                8
            </div>
            
            <div 
                className="nine-div"
                ref={nineButton}
                onClick={onAddNumber}
            >
                9
            </div>
        </div>
    )
}