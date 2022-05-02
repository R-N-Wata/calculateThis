

const keys = document.querySelector('.calculatorBtns').addEventListener('click', event =>{
    const {target} =event
    const {value} = target

    if(!target.matches('button')){
        return;
    }else{
        console.log(value)
    }
})
