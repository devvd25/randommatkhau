const chuThuong = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const kyTuDacBiet = "!@#$%^&*()";

const btnTao = document.getElementById("btnTao");
const btnSaoChep = document.getElementById("btnSaoChep");
const matKhauInput = document.getElementById("matKhau");

btnTao.addEventListener("click", taoMatKhau);
btnSaoChep.addEventListener("click", saoChepMatKhau);

function taoMatKhau() {
    let matKhau = "";

    for (let i = 0; i < 6; i++) {
        matKhau += chuThuong[Math.floor(Math.random() * chuThuong.length)];
    }

    matKhau += kyTuDacBiet[Math.floor(Math.random() * kyTuDacBiet.length)];

    matKhauInput.value = matKhau;
}

function saoChepMatKhau() {
    matKhauInput.select();
    navigator.clipboard.writeText(matKhauInput.value);
    alert("Mật khẩu đã được sao chép!");
}
