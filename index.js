let listWork = [];
let listWorkElement = document.querySelector('.list-work');
let addBtnElement = document.querySelector('.action-add a');
let deleteBtnElement = document.querySelector('.btn-delete');
document.addEventListener('DOMContentLoaded', () => {
    if(listWork.length == 0) {
        listWorkElement.innerText = "Chưa có công việc"
    }
    addBtnElement.addEventListener('click', () => {
        let valueInputElement = document.querySelector('.action-add input').value;
        if(valueInputElement != '') {
            listWork.push(valueInputElement);
            listWorkElement.innerHTML +=
                `<li>
                    <label>
                        <input type="checkbox">
                        <span>${valueInputElement}</span>
                    </label>
                    <a href="javascript:;" class="btn-delete" title="Xoá">Xoá</a>
                </li>`;
        console.log('Thêm thành công');
        }else {
            console.log('Chưa nhập công việc thì thêm làm sao được?');
        };
    });
});