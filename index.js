let listWork = [];
let objectNew = {};
let listWorkElement = document.querySelector('.list-work');
let deleteBtnElement = document.querySelector('.btn-delete');
const form = document.forms["formWork"];

const getDate = () => {
    let dateObj = new Date();
    var month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
    var date = ('0' + dateObj.getDate()).slice(-2);
    var year = dateObj.getFullYear();
    return `Ngày ${date} tháng ${month} năm ${year}`;
}
document.addEventListener('DOMContentLoaded', () => {
    let heading = document.querySelector('#app .heading h1');
    heading.innerText = getDate();
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
    let title = document.querySelector('form input[name="title"]').value;
    let brief = document.querySelector('form input[name="brief"]').value;
    let startTime = document.querySelector('form input[name="startTime"]').value;
    let endTime = document.querySelector('form input[name="endTime"]').value;
    if(title != '') {
        objectNew = {};
        objectNew.id = randomId();
        objectNew.title = title;
        objectNew.brief = brief;
        objectNew.startTime = startTime;
        objectNew.endTime = endTime;
        listWork.push(objectNew);
        mNotification.success('Thêm thành công');
        form.reset();
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

const renderItem = () => {
    if(listWork.length > 0) {
        listWorkElement.innerHTML = '';
        listWork.map(function(v, i) {
            listWorkElement.innerHTML +=
                `<li id="${v.id}" class="item">
                    <div class="time"><span class="item-title">Từ:&nbsp;</span><span class="item-content">${v.startTime}</span>&nbsp;-&nbsp;<span class="item-title">đến:&nbsp;</span><span class="item-content">${v.endTime}</span></div>
                    <div><span class="item-title">Công việc:&nbsp;</span><span class="item-content">${v.title}</span></div>
                    <div><span class="item-title">Mô tả công việc:&nbsp;</span><span class="item-content">${v.brief}</span></div>
                    <div>
                        <a href="javascript:;" class="btn btn-sm btn-success" title="Đã xong"><i class="fas fa-check"></i></a>
                        <a href="javascript:;" class="btn btn-sm btn-danger" title="Xoá" onClick="removeItem('${v.id}')"><i class="fas fa-trash"></i></a>
                    </div>
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