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
        status = 1;
        alertFunction();
    }else {
        status = 2;
        alertFunction();
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

function alertFunction() {
    alertSection.classList.add('active');
    if (status == 1) {
        alertSection.innerText = 'Success!';
        alertSection.classList.add('success');
        setTimeout(function() {
            alertSection.classList.remove('success');
        }, 1000)
    }else {
        alertSection.innerText = 'Fail!';
        alertSection.classList.add('fail');
        setTimeout(function() {
            alertSection.classList.remove('fail');
        }, 1000)
    }
    setTimeout(function() {
        alertSection.classList.remove('active');
    }, 1000)
};
