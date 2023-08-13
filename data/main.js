const content = JSON.parse(data).data;
// add event listener
const showSubtitle =document.querySelector('#radio-input')
const showDate = document.querySelector('.footerh6')
const mediaQuery = window.matchMedia('(max-width: 767px)')
let mq;
if(mediaQuery.matches){
    mq='block'
}
else{
    mq='none'
}

// show date
const date= new Date().getFullYear();
showDate.innerText=`©${date} Convay. All Rights Reserved.`
// load json data
function loadTitles() {
    const titleContainer = document.querySelector('.title');

    titleContainer.innerHTML = `${content.map((title, index) => {
        const isChecked = index === 0 ? 'checked' : ''; // Add checked attribute for the first item
        const showClass = index === 0 ? 'show' : '';
        const activeClass = index === 0 ? 'active' : '';

        
        return `
            <div class="title border-b">
                <div class="flex">
                    <div class="listbar ${activeClass}">
                        <input id="radio-input-${title._id}" type="radio" name="list" ${isChecked} onclick="showDetails(this, ${title._id})">
                        <label for="radio-input-${title._id}">${title.title}</label>
                    </div>
                </div>
                <div class="hidden-panel ${showClass}">
                    <div class="subtitle border-b">
                        <p>
                            ${title.subtitle}
                        </p>
                        <img class='img-fluid'src="${title.image}" style="display:${mq}"/>
                    </div>
                </div>
            </div>

        `;
    }).join("")}`;
}

// show hidden items
function showDetails(element, id){
    const current= element.parentNode.parentNode.nextElementSibling
    const shownPanel = document.querySelector('.show');
    const activePanel = document.querySelector('.active')

    if(activePanel && !element.parentNode.classList.contains('active'))
        activePanel.classList.remove('active')
    element.parentNode.classList.toggle("active")

    if(!current.classList.contains("show") && shownPanel)
        shownPanel.classList.remove('show')
    current.classList.toggle('show');

    if (!mediaQuery.matches){
        showImage(id);
    }
}

// load image when button selected

function showImage(id){
    const convayImage = document.querySelector('.convay');

    convayImage.innerHTML=`<img class="convay-image img-fluid" src="${content[id].image}" alt="">`
}
loadTitles()

