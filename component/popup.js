function showPopup(file) {
    let iPopupElement = document.createElement('div');
    iPopupElement.classList.add('i-popup');
    iPopupElement.style.padding = '20px';
    iPopupElement.style.minWidth = '300px';
    iPopupElement.style.minHeight = '400px';
    iPopupElement.style.backgroundColor = '#FFFFFF';
    iPopupElement.style.position = 'fixed';
    iPopupElement.style.top = '50%';
    iPopupElement.style.left = '50%';
    iPopupElement.style.zIndex = '9999';
    iPopupElement.style.transform = 'translate(-50%, -50%)';
    iPopupElement.style.boxShadow = 'rgb(0 0 0 / 60%) 2px 2px 8px';
    iPopupElement.style.maxWidth = 'calc(100% - 40px)';
    iPopupElement.style.borderRadius = '6px';
    
    let iPopupPseudoElement = document.createElement('div');
    iPopupPseudoElement.classList.add('i-popup-pseudo');
    iPopupPseudoElement.style.position = 'fixed';
    iPopupPseudoElement.style.inset = '0';
    iPopupPseudoElement.style.backgroundColor = 'rgba(0, 0, 0, .2)';

    let iPopupElementClose = document.createElement('a');
    iPopupElementClose.setAttribute('href', 'javascript:;');
    iPopupElementClose.innerHTML = '<i class="fas fa-times"></i>';
    iPopupElementClose.style.float = 'right';
    
    iPopupElement.appendChild(iPopupElementClose);

    let bodyElement = document.querySelector('body');
    bodyElement.appendChild(iPopupElement);
    bodyElement.appendChild(iPopupPseudoElement);

    iPopupElementClose.addEventListener('click', () => {
        bodyElement.removeChild(iPopupElement);
        bodyElement.removeChild(iPopupPseudoElement);
    })

    iPopupElement.innerHTML = `<iframe src="${file}"></iframe>`;
}