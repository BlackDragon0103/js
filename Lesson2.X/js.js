let cardArr = []
let btnDate = document.querySelector('.btn_create')
btnDate.addEventListener('click', addCard)
function addCard(){

    let title = document.querySelector('.card_title').value
    let text = document.querySelector('.card_text').value

    let currentDate = new Date()

    let date = currentDate.getFullYear()+'.'+(Number(currentDate.getMonth())+1)+'.'+currentDate.getDate()
    console.log(date)

    const card = {
        'title': title,
        'text': text,
        'date': date,
    }

    cardArr.push(card)

    let cardBlock = document.createElement('div')
    cardBlock.classList.add('card')
    cardBlock.insertAdjacentHTML('beforeend', `
    <div class="card">
    <div class="card_number"></div>
    <div class="card_info">
        <div class="card_nazva">${card.title}</div>
        <div class="card_vnutr">${card.text}</div>
        <div class="card_date">${card.date}</div>
    </div>
    `)

    let wrapper = document.querySelector('.wrapper')
    wrapper.insertAdjacentElement('beforeend', cardBlock)




}