let listWork = [];
let objectNew = {};
let listWorkElement = document.querySelector('.list-work');
let deleteBtnElement = document.querySelector('.btn-delete');


document.addEventListener('DOMContentLoaded', () => {
    const form = document.forms["formWork"];
    renderItem();
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        addItem();
        renderItem();
        console.clear();
        console.log(listWork);
    });
});


const addItem = () => {
    let valueInputElement = document.querySelector('.action-add input').value;
    if(valueInputElement != '') {
        objectNew = {};
        objectNew.id = randomId();
        objectNew.title = valueInputElement;
        listWork.push(objectNew);
        iNotification('success', 'Thêm thành công');
    }else {
        iNotification('error', 'Bạn chưa nhập công việc');
    }
};

const removeItem = (id) => {
    const index = listWork.findIndex(item => item.id === id);
    listWork.splice(index, 1);
    renderItem();
    iNotification('success', 'Xoá thành công');
};

const clearAll = () => {
    listWork = [];
    renderItem();
    iNotification('success', 'Xoá tất cả thành công');
}

const renderItem = () => {
    if(listWork.length > 0) {
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
    }else {
        listWorkElement.innerHTML = `<div style="text-align: center;">Chưa có công việc nào</div>`
    }
    
};

const randomId = () => {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
};