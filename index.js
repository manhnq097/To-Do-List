let listWork = [];
let listWorkElement = document.querySelector('.list-work');
let addBtnElement = document.querySelector('.action-add a');
let deleteBtnElement = document.querySelector('.btn-delete');
let alertSection = document.querySelector('#alert');
let status;
document.addEventListener('DOMContentLoaded', () => {
    addBtnElement.addEventListener('click', () => {
        let valueInputElement = document.querySelector('.action-add input').value;
        listWork.push(valueInputElement);
        listWork.map(function(value, index) {
            listWorkElement.innerHTML +=
                `<li>
                    <label>
                        <input type="checkbox">
                        <span>${value}</span>
                    </label>
                    <a href="javascript:;" class="btn-delete" title="Xoá"><i class="far fa-times-circle"></i></a>
                </li>`;
        });
    });
});

const alertFunction = () => {
    alertSection.classList.add('active');
    if (status == 1) {
        alertSection.innerText = 'Thêm thành công!';
        alertSection.classList.add('success');
        setTimeout(function() {
            alertSection.classList.remove('success');
        }, 1000)
    }else {
        alertSection.innerText = 'Thêm thất bại!';
        alertSection.classList.add('fail');
        setTimeout(function() {
            alertSection.classList.remove('fail');
        }, 1000)
    }
    setTimeout(function() {
        alertSection.classList.remove('active');
    }, 1000)
}
