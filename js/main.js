

const keys = document.querySelector('.calculatorBtns').addEventListener('click', event =>{
    const {target} =event
    const {value} = target

    if(!target.matches('button')){
        return;
    }else{

        calculator.calculation(value)
        
        
    }
})





    const calculator = {

        displayText: '0',

        prevTotal: null, 

        currentTotal: null,

        calculation(value){
            
            switch(value){
                case 'AC':
                    //clears console

                    this.clearScreen()
                    break;
                case '=':
                    //does calculation
                    if (this.prevTotal === null){
                        this.performCalculation()
                        
                    }
                    this.displayText = document.querySelector('input').value
                    this.performCalculation(this.prevTotal)
                    
                    
                    break;
                case 'DEL':
                    //removes previous value
                    this.removePrveValue()
                    break;
                case '.':
                    //add a . at the end
                    break;
                case '%':
                    //calculate % of number 

                    this.displayText  += '%'
                    break;
                default:
                    this.displayValues(value)
            }
            
        },

        displayValues(value){

        

            if (!Number(value) && value.match(/[A-WY-Z]/gi)){
                this.displayText = '0'
            }else if (value === '%'){
                
                
            }else{
                
                this.displayText += value; 
                this.displayText =  this.displayText.replace(/^0+/, '')
            }


            this.showText(this.displayText)

        },

        showText(text){

            
            document.querySelector('input').value = text
        },

        clearScreen(){

            this.displayText = '0'
            document.querySelector('input').value = this.displayText
            
        },

        performCalculation(previous){

            let equation = document.querySelector('input').value
            let result = Function('return ' + equation)()
            
            this.displayText =result;
            this.showText(result)
            
        },

        removePrveValue(){

            let equation = document.querySelector('input').value;
            equation = equation.replace(/[1-9]$|[/+*-]$/, '')

            this.showText(equation)
            this.displayText= equation


        },

        calculatePercentage(){
            this.displayText += '/100'

        }
    }

