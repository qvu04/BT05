// Modal bài Tập 1
var clickModal1 = document.getElementById('btnModal1');
var frame1 = document.getElementById('frame1');
var clickClose1 = document.getElementById('close1');
var overlay1 = document.getElementById('overlay1');

clickModal1.onclick = function () {
    overlay1.classList.add('state-show');

    frame1.classList.add('state-appear');
}

clickClose1.onclick = function(){
    overlay1.classList.remove('state-show');
    frame1.classList.remove('state-appear')
  
}
//Modal bài tập 2
var clickModal2 = document.getElementById('btnModal2');
var frame2 = document.getElementById('frame2');
var clickClose2 = document.getElementById('close2');
var overlay2 = document.getElementById('overlay2');

clickModal2.onclick = function () {
    overlay2.classList.add('state-show');

    frame2.classList.add('state-appear');
}

clickClose2.onclick = function(){
    overlay2.classList.remove('state-show');
    frame2.classList.remove('state-appear')
  
}

// Modal bài tập 3
var clickModal3 = document.getElementById('btnModal3');
var frame3 = document.getElementById('frame3');
var clickClose3 = document.getElementById('close3');
var overlay3 = document.getElementById('overlay3');

clickModal3.onclick = function () {
    overlay3.classList.add('state-show');

    frame3.classList.add('state-appear');
}

clickClose3.onclick = function(){
    overlay3.classList.remove('state-show');
    frame3.classList.remove('state-appear')
  
}
// Modal bài tập 4
var clickModal4 = document.getElementById('btnModal4');
var frame4 = document.getElementById('frame4');
var clickClose4 = document.getElementById('close4');
var overlay4 = document.getElementById('overlay4');

clickModal4.onclick = function () {
    overlay4.classList.add('state-show');

    frame4.classList.add('state-appear');
}

clickClose4.onclick = function(){
    overlay4.classList.remove('state-show');
    frame4.classList.remove('state-appear')
}
// Bài tập 1
document.getElementById("btn-ketqua").onclick = function () {
    diem1 = parseFloat(document.getElementById("diemMonThuNhat").value);
    diem2 = parseFloat(document.getElementById("diemMonThuHai").value);
    diem3 = parseFloat(document.getElementById("diemMonThuBa").value);
    let diemChuan = parseFloat(document.getElementById("diemChuan").value);
    let result_1 = document.getElementById("result_1");
    let khuVuc = parseFloat(document.getElementById("khuVuc").value);
    let doiTuong = parseFloat(document.getElementById("doiTuong").value);
    let tongDiemBaMon = diem1 + diem2 + diem3 + khuVuc + doiTuong;
    if (diem1 == 0 && diem2 == 0 && diem3 == 0) {
        result_1.innerHTML = "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0!";
        return;
    }

    if (tongDiemBaMon >= diemChuan) {
        result_1.innerHTML = `Bạn đã đậu. Tổng điểm là ${tongDiemBaMon}`;
    } else {
        result_1.innerHTML = `Bạn đã rớt. Tổng điểm là ${tongDiemBaMon}`;
    }
};

// Bài Tập 2
document.getElementById("btn-ketqua-2").onclick = function () {
    let soKW = document.getElementById("soKW").value * 1;
    let tienDien = 0;
    let tenCuaBan = document.getElementById("hoten").value;
    let result_2 = document.getElementById("result_2");
    if (soKW <= 50) {
        tienDien = soKW * 500;
    } else if (soKW > 50 && soKW <= 100) {
        tienDien = (soKW * 500) + (soKW * 650);
    } else if (soKW > 100 && soKW <= 200) {
        tienDien = (soKW * 500) + (soKW * 650) + (soKW * 850);
    } else if (soKW > 200 && soKW <= 350) {
        tienDien = (soKW * 500) + (soKW * 650) + (soKW * 850) + (soKW * 1100);
    } else {
        tienDien = (soKW * 500) + (soKW * 650) + (soKW * 850) + (soKW * 1100) + (soKW * 1300);
    }
    result_2.innerHTML = `Tên của bạn là: ${tenCuaBan}, Tiền Điện: ${tienDien.toLocaleString()}`;
}

// Bài Tập 3
document.getElementById("btn-ketqua-3").onclick = function () {
    let tenCuaBan = document.getElementById("hoten1").value;
    let tongThuNhapNam = parseFloat(document.getElementById("thuNhapNam").value);
    let soNguoiPhuThuoc = document.getElementById("nguoiPhuThuoc").value * 1;
    let result_3 = document.getElementById("result_3");

    let giamTruBanThan = 4000000;
    let giamTruNguoiPhuThuoc = 1600000;
    let thuNhapChiuThue = tongThuNhapNam - giamTruBanThan - (soNguoiPhuThuoc * giamTruNguoiPhuThuoc);

    if (thuNhapChiuThue <= 0) {
        alert("Số tiền thu nhập không hợp lệ");
        return;
    }


    let thue = 0;

    if (thuNhapChiuThue <= 60000000) {
        thue = thuNhapChiuThue * 0.05;
    } else if (thuNhapChiuThue > 60000000 && thuNhapChiuThue <= 120000000) {
        thue = 60000000 * 0.05 + (thuNhapChiuThue - 60000000) * 0.1;
    } else if (thuNhapChiuThue > 120000000 && thuNhapChiuThue <= 210000000) {
        thue = 60000000 * 0.05 + 60000000 * 0.1 + (thuNhapChiuThue - 120000000) * 0.15;
    } else if (thuNhapChiuThue > 210000000 && thuNhapChiuThue <= 384000000) {
        thue = 60000000 * 0.05 + 60000000 * 0.1 + 90000000 * 0.15 + (thuNhapChiuThue - 210000000) * 0.2;
    } else if (thuNhapChiuThue > 384000000 && thuNhapChiuThue <= 624000000) {
        thue = 60000000 * 0.05 + 60000000 * 0.1 + 90000000 * 0.15 + 174000000 * 0.2 + (thuNhapChiuThue - 384000000) + 0.25;
    } else if (thuNhapChiuThue > 624000000 && thuNhapChiuThue <= 960000000) {
        thue = 60000000 * 0.05 + 60000000 * 0.1 + 90000000 * 0.15 + 174000000 * 0.2 + 240000000 * 0.25 + (thuNhapChiuThue - 624000000) * 0.3;
    } else {
        thue = 60000000 * 0.05 + 60000000 * 0.1 + 90000000 * 0.15 + 174000000 * 0.2 + 240000000 * 0.25 + 320000000 * 0.3 + (thuNhapChiuThue - 960000000) * 0.35;
    }

    result_3.innerHTML = `Tên của bạn là: ${tenCuaBan}, Tiền thuế thu nhập cá nhân: ${thue.toLocaleString()}`;
}

// Bài Tập 4
let LoaiKhachHang = () => {
    let loaiKhacHang = document.getElementById("loaiKhachHang").value;
    return loaiKhacHang;
}
document.getElementById("btn-ketqua-4").onclick = function() {
    let loaiKhacHang = LoaiKhachHang();
    let maKhacHang = document.getElementById("maKhachHang").value*1;
    let soKenh = document.getElementById("soKenh").value*1;
    let soKetNoi = document.getElementById("soKetNoi").value*1;
    let tienCap = 0;
    switch (loaiKhacHang) {
        case "personal": {
            let phiHoaDonNhaDan = 4.5;
            let phiDichVuCoBan = 20.5;
            let thueKenhCaoCap = 7.5;
            tienCap = phiHoaDonNhaDan + phiDichVuCoBan + soKenh * thueKenhCaoCap;
            break;
        }
        case "group": {
            let phiHoaDonDoanhNghiep = 15;
            let phiDichVuCoBan = 7.5;
            let phiKetNoiTren10 = 5;
            let thueKenhCaoCap = 50;
            let tienKetNoi = soKetNoi <= 10 ? soKetNoi * phiDichVuCoBan : phiDichVuCoBan * 10 + (soKetNoi - 10) * phiKetNoiTren10;
            tienCap = phiHoaDonDoanhNghiep + tienKetNoi + soKenh * thueKenhCaoCap;
            break;
        }
        default: {
            alert("Vui lòng chọn loại khách hàng!");
            return;
        }
    }
    document.getElementById("result_4").innerHTML = `Mã Khách Hàng: ${maKhacHang}, Tiền cáp: ${tienCap}`;
}



    










