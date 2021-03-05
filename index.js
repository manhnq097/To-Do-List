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
        notification('success', 'Thành công');
    }else {
        notification('error', 'Thất bại');
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