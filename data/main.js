const content = JSON.parse(data).data;
let shownPanel;
let activePanel;
// add event listener
const showSubtitle =document.querySelector('#radio-input')
const showDate = document.querySelector('.footerh6')
const mediaQuery = window.matchMedia('(max-width: 768px)')

let mq;
if(mediaQuery.matches){
    mq= 'block';
}
else{
    mq= 'none';
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
        const showMqImage = mediaQuery.matches? `<img class='img-fluid'src="${title.image}"/>`:''

        
        return `
            <div class="title border-b">
                <div class="flex">
                    <div class="listbar ${activeClass}">
                        <input id="radio-input-${title._id}" type="radio" name="list" ${isChecked} onclick="showDetails(this, ${title._id})">
                        <label for="radio-input-${title._id}">${title.title}</label>
                    </div>
                </div>
                <div class="hidden-panel">
                    <div class="subtitle border-b">
                        <p>
                            ${title.subtitle}
                        </p>
                        ${mediaQuery.matches? showMqImage:''}
                    </div>
                </div>
            </div>

        `;
    }).join("")}`;
    
}

// show hidden items
function showDetails(element, id){
    const current= element.parentNode.parentNode.nextElementSibling
    shownPanel = document.querySelector('.show');
    activePanel = document.querySelector('.active')
    console.log(activePanel)

    if(activePanel && !element.parentNode.classList.contains('active'))
        activePanel.classList.remove('active')
    element.parentNode.classList.toggle("active")

    if(!current.classList.contains("show") && shownPanel)
        shownPanel.classList.remove('show')
    current.classList.toggle('show');

    if(!mediaQuery.matches)       
        showImage(id)
}

// load image when button selected

function showImage(id){
    const convayImage = document.querySelector('.convay');

    convayImage.innerHTML=`<img class="convay-image img-fluid" src="${content[id].image}" alt="" style="display:block">`
}
window.onload = function() {
    loadTitles();
    document.getElementById(`radio-input-${content[0]._id}`).parentElement.classList.toggle('active')
    
    showDetails(document.getElementById(`radio-input-${content[0]._id}`), content[0]._id)
};

window.addEventListener('resize', function(event) {
    if(window.matchMedia('(max-width:768px'))
        console.log(shownPanel)
}, true);

