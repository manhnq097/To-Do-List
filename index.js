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
        form.reset();
    });
});

const addItem = () => {
    let titleWork = document.querySelector('.action-add input').value;
    if(titleWork != '') {
        objectNew = {};
        objectNew.id = randomId();
        objectNew.title = titleWork;
        listWork.push(objectNew);
        mNotification.success('Thêm thành công');
    }else {
        mNotification.error('Bạn chưa nhập công việc');
    }
};

const removeItem = (id) => {
    const index = listWork.findIndex(item => item.id === id);
    listWork.splice(index, 1);
    renderItem();
    mNotification.success('Xoá thành công');
};

const clearAll = () => {
    listWork = [];
    renderItem();
    mNotification.success('Xoá tất cả thành công');
}

const renderItem = () => {
    if(listWork.length > 0) {
        listWorkElement.innerHTML = '';
        listWork.map(function(v) {
            listWorkElement.innerHTML +=
                `<tr id="${v.id}">
                    <td style="text-align: center;">
                        <input type="checkbox">
                    </td>
                    <td>
                        <span>${v.title}</span>
                    </td>
                    <td>
                        <span>${v.title}</span>
                    </td>
                    <td style="text-align: center;">
                        <a href="javascript:;" class="btn-delete" title="Xoá" onClick="removeItem('${v.id}')"><i class="fas fa-trash"></i></a>
                    </td>
                </tr>`;
        });
    }else {
        listWorkElement.innerHTML = `<tr style="text-align: center;"><td colspan="5">Chưa có công việc nào</td></tr>`
    }
    
};

const randomId = () => {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
};