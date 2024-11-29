const container = document.querySelector("#contacts");

data.forEach(section => {
    let sectionHTML = '';
    if (section.title != null) {
        sectionHTML += `<div class="title"><h2>${section.title}</h2></div>`
    }
    sectionHTML += '  <div class="threeColumnContainer">'
    section.blocks.forEach(block => {
        sectionHTML += `
          
                <div class="smallBlueBlock">
                    <div class="innerBlock">
                        <div class="front">
                                <img alt="Herb" src="${section.img}">
                            <h3>${block.front}</h3>
                        </div>
                        <div class="back">
                            ${block.back}
                        </div>
                    </div>
                </div>
           
        `;
    });
    sectionHTML += ' </div>'
    container.innerHTML += sectionHTML;
});
