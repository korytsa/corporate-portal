let add_news = document.querySelector('.main_cards_title')

let form = document.querySelector('.form')

let submit = document.querySelector('#submit')
let name_form = document.querySelector('#name')
let photo_form = document.querySelector('#photo')
let about_form = document.querySelector('#about')

let center = document.querySelector('.main_cards')

add_news.onclick = function(){
    if (form.style.display=='none'){
        form.style.display='block'
        add_news.innerHTML="отмена"
    }else{
        form.style.display='none'
        add_news.innerHTML="Добавить новость"
    }
}

submit.onclick=function(){
    center.insertAdjacentHTML('beforeend', `
        <hr class="main_cards_hr">    
        <div class="main_cards_item">
        <img class="photo_news" src="${photo_form.value}">
        <div class="main_cards_item_text">
        <p class="main_cards_item_title">${name_form.value}</p>
        <p class="main_cards_item_subtitle">${about_form.value}</p>
        </div>
        </div>
    `)
}
