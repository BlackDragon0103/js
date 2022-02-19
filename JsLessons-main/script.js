
// function changeColor(){
//     let button = document.querySelector('.btn')
//     button.style.color = 'red'
// }

// function changeColor(){

//     document.querySelector('.btn').style.color = '#cccccc'
   
// }
    

function changeColor(){

    let colorInput = document.querySelector('.color_input')
    let color = colorInput.value


    let text = document.querySelector('.text')
    text.style.color = color
   

}

function changeFontSize(){

    let text = document.querySelector('.changed_text')
    let input = document.querySelector('.text_input')

    let textSize = input.value
    
    text.style.fontSize = textSize + 'px'

}

function doubleNumber(){

    let num = document.querySelector('.number_input').value
    //console.log(num*2)
    let output = document.querySelector('.output')
    output.innerHTML = num*2

}

function forNumber(){

    let num1 = document.querySelector('.number1_input').value
    let num2 = document.querySelector('.number2_input').value


    for(; +num1 <= +num2; num1++){
        console.log(num1)
    }

}

//============================================ lesson 2

let isBlock = false
let blockTop = 0;
let blockLevo = 0;
let size;
let circ=0

let btnDown = document.querySelector('.down')
let btnUp = document.querySelector('.up')
let btnLeft = document.querySelector('.left')
let btnRight = document.querySelector('.right')
let btnAdd = document.querySelector('.add_button')
let btnChange = document.querySelector('.color_input')
let btnCirc = document.querySelector('.circle_input')


btnDown.addEventListener('click',blockDown)
btnUp.addEventListener('click',blockUp)
btnLeft.addEventListener('click',blockLeft)
btnRight.addEventListener('click',blockRight)
btnAdd.addEventListener('click',addBlock)
btnChange.addEventListener('change',changeCol)
    if(circ==0){
        btnCirc.addEventListener('click',btnCircle)
        circ=1
    }
    if(circ==1){
        btnCirc.addEventListener('click',btnNonCircle)
        circ=0        
    }

function btnCircle(){
    let block = document.querySelector('.block')
    block.style.borderRadius = 100+'%'
}

function btnNonCircle(){
    let block = document.querySelector('.block')
    block.style.borderRadius = 0
}

function blockRemove(){
    let block = document.querySelector('.block')
    block.remove()
    isBlock = false
}

function changeCol(){
    let color = document.querySelector('.color_input').value
    let change = document.querySelector('.block')
    change.style.backgroundColor = color
}

function addBlock(){

    if(isBlock == true) return

    size = document.querySelector('.size_input').value
    let wrapper = document.querySelector('.wrapper_block')

    size = +size

    if(size <= 50 || size>=500) return 

    let block = document.createElement('div')
    block.classList.add('block')
    
    block.style.width = size + 'px'
    block.style.height = size + 'px'
    
    wrapper.insertAdjacentElement('afterbegin', block)
    isBlock = true

    let btnRemove = document.querySelector('.block')
    btnRemove.addEventListener('click', blockRemove)

}



function blockDown(){

    let block = document.querySelector('.block')
    
    if(size + blockTop + 10 > 500) return
    
    blockTop += 10

    block.style.marginTop = blockTop + 'px'
}

function blockUp(){

    let block = document.querySelector('.block')
    
    if(blockTop <= 0) return
    
    blockTop -= 10

    block.style.marginTop = blockTop + 'px'

}

function blockRight(){

    let block = document.querySelector('.block')
    
    if(size + blockLevo + 10 > 500) return
    
    blockLevo += 10

    block.style.marginLeft = blockLevo + 'px'
}

function blockLeft(){

    let block = document.querySelector('.block')
    
    if(blockLevo <= 0) return
    
    blockLevo -= 10

    block.style.marginLeft = blockLevo + 'px'

}




// function addError(){
//     let i = addBlock()
//     let errorBlock = document.querySelector('.error')
//     errorBlock.innerHTML = 'Вы указали неверные размеры:' + i
// }