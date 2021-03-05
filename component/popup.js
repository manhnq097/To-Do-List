function showPopup() {
    let bodyElement = document.querySelector('body');
    let iPopupElement = document.createElement('div');
    iPopupElement.classList.add('i-popup');
    iPopupElement.style.padding = '10px';
    iPopupElement.style.minWidth = '300px';
    iPopupElement.style.minHeight = '400px';
    iPopupElement.style.backgroundColor = '#FFFFFF';
    iPopupElement.style.position = 'fixed';
    iPopupElement.style.top = '50%';
    iPopupElement.style.left = '50%';
    iPopupElement.style.transform = 'translate(-50%, -50%)';
    iPopupElement.style.boxShadow = 'rgb(0 0 0 / 60%) 2px 2px 8px';
    iPopupElement.style.maxWidth = 'calc(100% - 40px)';
    bodyElement.appendChild(iPopupElement);
}