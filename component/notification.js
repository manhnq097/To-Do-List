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