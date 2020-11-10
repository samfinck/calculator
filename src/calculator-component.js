import { useRef, useState } from 'react';

export default function CalculatorComponent({ entryDivInitial }){

    const [calculationEntry, setCalculationEntry] = useState(entryDivInitial);

    const [lastButtonClick, setLastButtonClick] = useState('0')

    const [additionCapture, setAdditionCapture] = useState(0);

    const [subtractionCapture, setSubtractionCapture] = useState(0);

    const [multiplicationCapture, setMultiplicationCapture] = useState(0);

    const [divisionCapture, setDivisionCapture] = useState(0);

    const entryDiv = useRef(null);

    const clearButton = useRef(null);

    const allClearButton = useRef(null);

    const equalsButton = useRef(null);

    const additionButton = useRef(null);

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

    const onClearButton = () => {
        setCalculationEntry(prev=> prev - lastButtonClick)
    }

    const onAllClearButton = () => {
        setCalculationEntry(prev => '')
    }

    const onAdditionButton = () => {
        setAdditionCapture(prev => entryDiv.current.innerHTML);
        setCalculationEntry(prev => '');
    }

    const onSubtractionButton = () => {
        setSubtractionCapture(prev => entryDiv.current.innerHTML);
        setCalculationEntry(prev => '');
    }

    const onMultiplicationButton = () => {
        setMultiplicationCapture(prev => entryDiv.current.innerHTML);
        setCalculationEntry(prev => '');
    }

    const onDivisionButton = () => {
        setDivisionCapture(prev => entryDiv.current.innerHTML);
        setCalculationEntry(prev => '');
    }

    const onEqualsButton = () => {
        if (additionCapture !== 0){
            setCalculationEntry(+additionCapture + +entryDiv.current.innerHTML);
            setAdditionCapture(prev => 0)
        }
        if (subtractionCapture !== 0){
            setCalculationEntry(+subtractionCapture - +entryDiv.current.innerHTML);
            setSubtractionCapture(prev => 0)
        }
        if (multiplicationCapture !== 0){
            setCalculationEntry(+multiplicationCapture * +entryDiv.current.innerHTML);
            setMultiplicationCapture(prev => 0)
        }
        if (divisionCapture !== 0){
            setCalculationEntry(+divisionCapture / +entryDiv.current.innerHTML);
            setDivisionCapture(prev => 0)
        }
    }


    const onAddPoint = () => {
        setCalculationEntry(prev => entryDiv.current.innerHTML + pointButton.current.innerHTML)
        setLastButtonClick('.')
    }

    const onAddZero = () => {
        setCalculationEntry(prev => entryDiv.current.innerHTML + zeroButton.current.innerHTML);
        setLastButtonClick("0");
    }

    const onAddOne = () => {
        setCalculationEntry(prev => entryDiv.current.innerHTML + oneButton.current.innerHTML)
        setLastButtonClick(oneButton.current.innerHTML)
    }

    const onAddTwo = () => {
        setCalculationEntry(prev => entryDiv.current.innerHTML + twoButton.current.innerHTML)
        setLastButtonClick('2')
    }

    const onAddThree = () => {
        setCalculationEntry(prev => entryDiv.current.innerHTML + threeButton.current.innerHTML)
        setLastButtonClick('3')
    }
    const onAddFour = () => {
        setCalculationEntry(prev => entryDiv.current.innerHTML + fourButton.current.innerHTML)
        setLastButtonClick('4')
    }

    const onAddFive = () => {
        setCalculationEntry(prev => entryDiv.current.innerHTML + fiveButton.current.innerHTML)
        setLastButtonClick('5')
    }

    const onAddSix = () => {
        setCalculationEntry(prev => entryDiv.current.innerHTML + sixButton.current.innerHTML)
        setLastButtonClick('6')
    }

    const onAddSeven = () => {
        setCalculationEntry(prev => entryDiv.current.innerHTML + sevenButton.current.innerHTML)
        setLastButtonClick('7')
    }

    const onAddEight = () => {
        setCalculationEntry(prev => entryDiv.current.innerHTML + eightButton.current.innerHTML)
        setLastButtonClick('8')
    }

    const onAddNine = () => {
        setCalculationEntry(prev => entryDiv.current.innerHTML + nineButton.current.innerHTML)
        setLastButtonClick('9')
    }

    return(
        <div 
            className="calculator-container"
        >
            <div 
                className="entry-div"
                id='entry-div'
                ref={entryDiv}
                contentEditable={true} 
                data-text='0'
            >
                {calculationEntry}
            </div>
            
            <div 
                className="clear-div"
                ref={clearButton}
                onClick={onClearButton}
            >
                Clear Entry
            </div>
            
            <div 
                className="last-value-clear-div"
                ref={allClearButton}
                onClick={onAllClearButton}
            >
                AC
            </div>
            
            <div 
                className="equals-div"
                ref={equalsButton}
                onClick={onEqualsButton}
            >
                =
            </div>
            
            <div 
                className="add-div"
                ref={additionButton}
                onClick={onAdditionButton}
            >
                +
            </div>
            
            <div 
                className="subtract-div"
                ref={subtractButton}
                onClick={onSubtractionButton}
            >
                -
            </div>
            
            <div 
                className="multiply-div"
                ref={multiplyButton}
                onClick={onMultiplicationButton}
            >
                ×
            </div>
            
            <div 
                className="divide-div"
                ref={divideButton}
                onClick={onDivisionButton}
            >
                ÷
            </div>
            
            <div 
                className="point-div"
                ref={pointButton}
                onClick={onAddPoint}
                id="point-div"
                
            >
                .
            </div>
            
            <div 
                className="zero-div"
                ref={zeroButton}
                onClick={onAddZero}
            >
                0
            </div>
            
            <div 
                className="one-div"
                ref={oneButton}
                onClick={onAddOne}
            >
                1
            </div>
            
            <div 
                className="two-div"
                ref={twoButton}
                onClick={onAddTwo}
            >   
                2
            </div>
            
            <div 
                className="three-div"
                ref={threeButton}
                onClick={onAddThree}
            >
                3
            </div>
            
            <div 
                className="four-div"
                ref={fourButton}
                onClick={onAddFour}
            >   
                4
            </div>
            
            <div 
                className="five-div"
                ref={fiveButton}
                onClick={onAddFive}
            >
                5
            </div>
            
            <div 
                className="six-div"
                ref={sixButton}
                onClick={onAddSix}
            >   
                6
            </div>
            
            <div 
                className="seven-div"
                ref={sevenButton}
                onClick={onAddSeven}
            >
                7
            </div>
            
            <div 
                className="eight-div"
                ref={eightButton}
                onClick={onAddEight}
            >
                8
            </div>
            
            <div 
                className="nine-div"
                ref={nineButton}
                onClick={onAddNine}
            >
                9
            </div>
        </div>
    )
}