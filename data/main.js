const content = JSON.parse(data).data;
// add event listener
const showSubtitle =document.querySelector('#radio-input')


// load json data
function loadTitles() {
    const title = document.querySelector('.title');

    title.innerHTML=`${content.map((title)=>{
        return `
    <div class="title border-b">
        <div class="flex">
            <div class="listbar">
                <input id='radio-input' type="radio" name="list" onclick="showDetails(this)">
                <label>${title.title}</label>
            </div>
        </div>
        <div class="hidden-panel">
            <div class="subtitle border-b">
                <p>
                    ${title.subtitle}
                </p>
            </div>
        </div>
    </div>
    `
    }).join("")}`
}

// show hidden items
function showDetails(element){
    const current= element.parentNode.parentNode.nextElementSibling
    const shownPanel = document.querySelector('.show');
    const activePanel = document.querySelector('.active')

    if(activePanel && !element.parentNode.classList.contains('active'))
        activePanel.classList.remove('active')
    element.parentNode.classList.toggle("active")

    if(!current.classList.contains("show") && shownPanel)
        shownPanel.classList.remove('show')

    current.classList.toggle('show');


}
loadTitles()