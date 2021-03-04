let listWork = [];
let objectNew = {};
let listWorkElement = document.querySelector('.list-work');
let addBtnElement = document.querySelector('.action-add a');
let deleteBtnElement = document.querySelector('.btn-delete');
let alertSection = document.querySelector('#alert');
let status;

document.addEventListener('DOMContentLoaded', () => {
    addBtnElement.addEventListener('click', () => {
        addItem();
        renderItem();
        console.clear();
        console.log(listWork);
    });
});

function addItem() {
    let valueInputElement = document.querySelector('.action-add input').value;
    if(valueInputElement != '') {
        objectNew = {};
        objectNew.id = randomId();
        objectNew.title = valueInputElement;
        listWork.push(objectNew);
    }else {
    }
};

function removeItem(id) {
    const index = listWork.indexOf(id);
    listWork.splice(index, 1);
    renderItem();
};

function renderItem() {
    listWorkElement.innerHTML = '';
    listWork.map(function(v) {
        listWorkElement.innerHTML +=
            `<li id="${v.id}">
                <label>
                    <input type="checkbox">
                    <span>${v.title}</span>
                </label>
                <a href="javascript:;" class="btn-delete" title="Xoá" onClick="removeItem('${v.id}')"><i class="fas fa-trash"></i></a>
            </li>`;
    });
};

function randomId() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
};



let bodyElement = document.querySelector('body');
let notificationPlace = document.createElement('ul');
notificationPlace.classList.add('notificaton-place');
bodyElement.appendChild(notificationPlace);
notificationPlace.style.position = 'fixed';
notificationPlace.style.top = '20px';
notificationPlace.style.right = '20px';
notificationPlace.style.zIndex = '9999';

successNotiFun = (notiText) => {
    let status = 1;
    let liElement = document.createElement('li');
    liElement.style.boxSizing = 'border-box';
    liElement.style.padding = '12px 20px';
    liElement.style.marginBottom = '5px';
    liElement.style.borderRadius = '4px';
    liElement.style.minHeight = '60px';
    liElement.style.color = '#FFFFFF';
    liElement.style.width = '300px';
    liElement.style.boxShadow = 'rgb(0 0 0 / 40%) 2px 2px 4px';
    if(status = 1) {
        liElement.style.background = '#60d691';
    }
    notificationPlace.appendChild(liElement);
    let divElementTop = document.createElement('div');
    divElementTop.classList.add('alert-heading');
    divElementTop.style.paddingBottom = '10px';
    liElement.appendChild(divElementTop);
    divElementTop.innerText = "Success Notification";
    let divElementBottom = document.createElement('div');
    divElementBottom.classList.add('alert-content');
    liElement.appendChild(divElementBottom);
    if(!notiText || notiText.length == 0) {
        divElementBottom.innerText = 'This is a success notification';
    }else {
        divElementBottom.innerText = notiText;
    }
}

errorNotiFun = (notiText) => {
    let status = 1;
    let liElement = document.createElement('li');
    liElement.style.boxSizing = 'border-box';
    liElement.style.padding = '12px 20px';
    liElement.style.marginBottom = '5px';
    liElement.style.borderRadius = '4px';
    liElement.style.minHeight = '60px';
    liElement.style.color = '#FFFFFF';
    liElement.style.width = '300px';
    liElement.style.boxShadow = 'rgb(0 0 0 / 40%) 2px 2px 4px';
    if(status = 1) {
        liElement.style.background = '#EA6E62';
    }
    notificationPlace.appendChild(liElement);
    let divElementTop = document.createElement('div');
    divElementTop.classList.add('alert-heading');
    divElementTop.style.paddingBottom = '10px';
    liElement.appendChild(divElementTop);
    divElementTop.innerText = "Success Notification";
    let divElementBottom = document.createElement('div');
    divElementBottom.classList.add('alert-content');
    liElement.appendChild(divElementBottom);
    if(!notiText || notiText.length == 0) {
        divElementBottom.innerText = 'This is an error notification';
    }else {
        divElementBottom.innerText = notiText;
    }
}

notiFyNotiFun = (notiText) => {
    let status = 1;
    let liElement = document.createElement('li');
    liElement.style.boxSizing = 'border-box';
    liElement.style.padding = '12px 20px';
    liElement.style.marginBottom = '5px';
    liElement.style.borderRadius = '4px';
    liElement.style.minHeight = '60px';
    liElement.style.color = '#FFFFFF';
    liElement.style.width = '300px';
    liElement.style.boxShadow = 'rgb(0 0 0 / 40%) 2px 2px 4px';
    if(status = 1) {
        liElement.style.background = '#5A5A5A';
    }
    notificationPlace.appendChild(liElement);
    let divElementTop = document.createElement('div');
    divElementTop.classList.add('alert-heading');
    divElementTop.style.paddingBottom = '10px';
    liElement.appendChild(divElementTop);
    divElementTop.innerText = "Success Notification";
    let divElementBottom = document.createElement('div');
    divElementBottom.classList.add('alert-content');
    liElement.appendChild(divElementBottom);
    if(!notiText || notiText.length == 0) {
        divElementBottom.innerText = 'This is an error notification';
    }else {
        divElementBottom.innerText = notiText;
    }
}

successNotiFun();
errorNotiFun();
notiFyNotiFun();
