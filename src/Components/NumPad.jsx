import Button from './Button'
const NumberPad = ({displayValue ,setDisplayValue}) => {


    const buttons = ["1","2","3","4","5","6","7","8","9","0","."]
    const operations =["+","-","*","/",]; 
    
    const addToDisplay = (text) => {
        setDisplayValue(displayValue + text);
    }

    const evalExprssion = () => {
       const result = eval(displayValue);
       setDisplayValue(result);
    }

    return <>
       <Button onClickHandler={() => setDisplayValue('')} text= "C"/><br/>

       {buttons.map(text => <Button key={text} onClickHandler={() => addToDisplay(text)} text= {text}/> )}<br/>

       {operations.map(text => <Button key={text} onClickHandler={() => addToDisplay(text)} text= {text}/> )}<br/>
    
       <Button onClickHandler={evalExprssion} text="="/>

   
    
     </>
}

export default NumberPad;
