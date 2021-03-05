let listWork = [
    {
        id: "7b58a59d-eb47-24a4-63a9-bb8596fa7260",
        title: "Code"
    },
    {
        id: "7b58a59d-eb47-24a4-63a9-b345",
        title: "Code and code"
    },
    ];
let objectNew = {};
let listWorkElement = document.querySelector('.list-work');
let addBtnElement = document.querySelector('.action-add a');
let deleteBtnElement = document.querySelector('.btn-delete');

document.addEventListener('DOMContentLoaded', () => {
    renderItem();
    addBtnElement.addEventListener('click', () => {
        addItem();
        renderItem();
        console.clear();
        console.log(listWork);
    });
    showPopup();
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

function removeItem() {
    const itemRemove = listWork.find(item => item.id === id);
    const indexRemove = listWork.findIndex(item => item.id === id)
    console.log(indexRemove);
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