const timkiemDialog = document.getElementById('timkiem-dialog');
const completionDialog = document.getElementById('completion-dialog');

// const chidanchuong1 = document.getElementById('chuong1');
// const suachuong2 = document.getElementById('suachuong2');
// const xemchuong2 = document.getElementById('xemchuong2');
// const suachuong3 = document.getElementById('suachuong3');
// const xemchuong3 = document.getElementById('xemchuong3');
// const chinhsuabieumaumoithau = document.getElementById('suabieumaumoithau');
// const bieumaumoithau = document.getElementById('bieumaumoithau');
// const xemchuong5 = document.getElementById('xemchuong5');
// const xemchuong6 = document.getElementById('xemchuong6');
// const suachuong7 = document.getElementById('suachuong7');
// const xemchuong7 = document.getElementById('xemchuong7');
// const suachuong8 = document.getElementById('suachuong8');
// const xemchuong8 = document.getElementById('xemchuong8');

// const mucso1 = document.getElementById('muc1');
// const mucso21 = document.getElementById('muc21');
// const mucso22a = document.getElementById('muc22a');
// const mucso22b = document.getElementById('muc22b');
// const mucso3 = document.getElementById('muc3');
// const mucso4 = document.getElementById('muc4');

// const suamuc1 = document.getElementById('suamuc1');
// const suamuc21 = document.getElementById('suamuc21');
// const suamuc22a = document.getElementById('suamuc22a');
// const suamuc22b = document.getElementById('suamuc22b');
// const suamuc3 = document.getElementById('suamuc3');
// const suamuc4 = document.getElementById('suamuc4');

// const suamuc1A = document.getElementById('suamuc1A');
// const suamuc1B = document.getElementById('suamuc1B');
// const muc1A = document.getElementById('muc1A');
// const muc1B = document.getElementById('muc1B');

// const mau12 = document.getElementById('mauso12');
// const mau13 = document.getElementById('mauso13');
// const mau14 = document.getElementById('mauso14');
// const mau15 = document.getElementById('mauso15');

// const bangsomot = document.getElementById('bangsomot');
// const bangsohai = document.getElementById('bangsohai');

const sogoithau = document.getElementById('sogoithau');
const danhmucgoithau = document.getElementById('danhmucgoithau');

const makhlcnt = document.getElementById("maKHLCNT");
const matbmt = document.getElementById("maTBMT");
const phienban = document.getElementById("phienban");
const trangthai = document.getElementById("trangthai");
const benmoithau = document.getElementById("benmoithau");
const linhvuc = document.getElementById("linhvuc");
const tengoithau = document.getElementById("tengoithau");
const nguonvon = document.getElementsByClassName("nguonvon");
const loaihopdong = document.getElementById("loaihopdong");
const hinhthuclcnt = document.getElementById("hinhthuclcnt");
const phuongthuclcnt = document.getElementById("phuongthuclcnt");
const trongnuoc = document.getElementById("trongnuoc");
const quocte = document.getElementById("quocte");
const tgthuchien = document.getElementById("tgthuchien");
const tgthuchienngay = document.getElementById("tgthuchienngay");
const quamang = document.getElementById("quamang");
const diadiemphathanh = document.getElementById("diadiemphathanh");
const diadiemnhan = document.getElementById("diadiemnhan");
const diadiemthuchien = document.getElementById("diadiemthuchien");
const mienphi = document.getElementById("mienphi");
const cophi = document.getElementById("cophi");
const giaban = document.getElementById("giaban");
const dongthau1 = document.getElementById("dongthau1");
const dongthau2 = document.getElementById("dongthau2");
const mothau1 = document.getElementById("mothau1");
const mothau2 = document.getElementById("mothau2");
const diadiemmothau = document.getElementById("diadiemmothau");
const sotienbangchu = document.getElementById("sotienbangchu");
const giagoithau = document.getElementById("giagoithau");
const hieulucEHSMT = document.getElementById("hieulucEHSMT");
const sotienBDDT = document.getElementById("sotienBDDT");
const sotienBDDTbangchu = document.getElementById("sotienBDDTbangchu");
const hinhthucBDDT = document.getElementById('hinhthucBDDT');
const thoathuankhung = document.getElementById("thoathuanyes");
const chidinh = document.getElementById('chidinhyes');
const phanloaigoi = document.getElementById('phanloaigoi');


const cir1 = document.getElementById("circle1");
const cir2 = document.getElementById("circle2");
const cir3 = document.getElementById("circle3");
const nut1 = document.getElementById("nut1");
const nut2 = document.getElementById("nut2");
const nut3 = document.getElementById("nut3");
const leftButton = document.getElementById("backbutton");
const rightButton = document.getElementById("continuebutton");
const saveButton = document.getElementById("savebutton");
const xemtruocBtn = document.getElementById('xemtruoc');
const kiemtraBtn = document.getElementById('kiemtra');
const taifileBtn = document.getElementById('taifile');
const saochepBtn = document.getElementById('saochep');
const tieptucBtn = document.getElementById('tieptuc');
const luuphathanhBtn = document.getElementById('luuphathanhbtn');
const dangtaiBtn = document.getElementById('dangtaibtn');

const appbody1 = document.getElementById("app-body-1");
const appbody21 = document.getElementById("app-body-21");
const appbody22 = document.getElementById("app-body-22");

var appbody2 = appbody21;
const appbody3 = document.getElementById("app-body-3");

const matbmt2 = document.getElementById('maTBMT2');
const tengoithau2 = document.getElementById('tengoithau2');
const benmoithau2 = document.getElementById('benmoithau2');
const trangthai2 = document.getElementById('trangthai2');
const ngaypheduyet2 = document.getElementById('ngaypheduyet2');
const soquyetdinh2 = document.getElementById('soquyetdinh2');
const coquanquyetdinh2 = document.getElementById('coquanquyetdinh2');
const filequyetdinh2 = document.getElementById('filequyetdinh2');
const filesuadoi2 = document.getElementById('filesuadoi2');


//app body 2



var regStatus = 1;
var saveStatus;
var chaseStatus;
var dangStatus;

var goithau = [];
var kehoachlcnt = [];
var magoithau = '';
var goithauid = 0;

var defaults = {
    showClear: true,
    showClose: true,
    allowInputToggle: true,
    useCurrent: true,
    ignoreReadonly: true,
    toolbarPlacement: 'bottom',
    locale: 'en',

    icons: {
        time: 'fa fa-clock-o',
        date: 'fa fa-calendar',
        up: 'fa fa-angle-up',
        down: 'fa fa-angle-down',
        previous: 'fa fa-angle-left',
        next: 'fa fa-angle-right',
        today: 'fa fa-dot-circle-o',
        clear: 'fa fa-trash',
        close: 'fa fa-times'
    }
};

$(function () {
    //var optionsDatetime = $.extend({}, defaults, { format: 'DD-MM-YYYY' });
    //$('.datetimepicker').datetimepicker(optionsDatetime);

    $('.dongthau1').datetimepicker({
        format: 'DD-MM-YYYY'
    });
    $('.dongthau2').datetimepicker({
        format: 'HH:mm:ss'
    });
    $('.mothau1').datetimepicker({
        format: 'DD-MM-YYYY'
    });
    $('.mothau2').datetimepicker({
        format: 'HH:mm:ss'
    });


});

// document.addEventListener("DOMContentLoaded", () => {
    
    
    
//     startPage();
// });

function timkiemgoithau() {
    timkiemdlg()
    timkiemDialog.showModal();
}

function dongtimkiem() {
    timkiemDialog.close();
} 

// function xemchidan() {
//     chidanchuong1.showModal();
// }
// function dongchidan() {
//     chidanchuong1.close();
// }

// function suadulieu() {
//     suachuong2.showModal();
// }
// function dongsuadulieu() {
//     suachuong2.close();
// }
// function xemdulieu() {
//     xemchuong2.showModal();
// }
// function dongxemdulieu() {
//     xemchuong2.close();
// }

// function suatieuchuan() {
//     suachuong3.showModal();
// }
// function dongsuatieuchuan() {
//     suachuong3.close();
// }
// function xemtieuchuan() {
//     xemchuong3.showModal();
// }
// function dongxemtieuchuan() {
//     xemchuong3.close();
// }
// function suabieumaumoithau() {
//     chinhsuabieumaumoithau.showModal();
// }
// function dongsuabieumaumoithau() {
//     chinhsuabieumaumoithau.close();
// }
// function xembieumaumoithau() {
//     bieumaumoithau.showModal();
// }
// function dongxembieumaumoithau() {
//     bieumaumoithau.close();
// }
// function yeucaukythuat() {
//     xemchuong5.showModal()
// }
// function dongxemchuong5() {
//     xemchuong5.close();
// }
// function xemdieukienchung() {
//     xemchuong6.showModal();
// }
// function dongxemchuong6() {
//     xemchuong6.close();
// }
// function suadieukiencuthe() {
//     suachuong7.showModal();
// }
// function dongsuachuong7() {
//     suachuong7.close();
// }
// function xemdieukiencuthe() {
//     xemchuong7.showModal();
// }
// function dongxemchuong7() {
//     xemchuong7.close();
// }
// function suabieumauhopdong() {
//     suachuong8.showModal();
// }
// function dongsuabieumauhopdong() {
//     suachuong8.close();
// }
// function xembieumauhopdong() {
//     xemchuong8.showModal();
// }
// function dongbieumauhopdong() {
//     xemchuong8.close();
// }
// function bangone() {
//     //alert('abc');
//     bangsomot.style.display = 'block';
//     bangsohai.style.display = 'none';
//     document.getElementById('nutso1').style.color = 'white';
//     document.getElementById('nutso1').style.backgroundColor = '#064d69';
//     document.getElementById('nutso2').style.backgroundColor = 'white';
//     document.getElementById('nutso2').style.color = 'grey';
// }
// function bangtwo() {
//     bangsomot.style.display = 'none';
//     bangsohai.style.display = 'block';
//     document.getElementById('nutso1').style.color = 'grey';
//     document.getElementById('nutso2').style.backgroundColor = '#064d69';
//     document.getElementById('nutso1').style.backgroundColor = 'white';
//     document.getElementById('nutso2').style.color = 'white';
// }

// function downghichu() {
//     document.getElementById('ghichumuc3').style.display = 'block'
    
// }

// function hienmuc1() {
//     mucso1.style.display = 'block';
//     mucso21.style.display = 'none';
//     mucso22a.style.display = 'none';
//     mucso22b.style.display = 'none';
//     mucso3.style.display = 'none';
//     mucso4.style.display = 'none';
// }
// function hienmuc21() {
//     mucso1.style.display = 'none';
//     mucso21.style.display = 'block';
//     mucso22a.style.display = 'none';
//     mucso22b.style.display = 'none';
//     mucso3.style.display = 'none';
//     mucso4.style.display = 'none';
// }
// function hienmuc22a() {
//     mucso1.style.display = 'none';
//     mucso21.style.display = 'none';
//     mucso22a.style.display = 'block';
//     mucso22b.style.display = 'none';
//     mucso3.style.display = 'none';
//     mucso4.style.display = 'none';
// }
// function hienmuc22b() {
//     mucso1.style.display = 'none';
//     mucso21.style.display = 'none';
//     mucso22a.style.display = 'none';
//     mucso22b.style.display = 'block';
//     mucso3.style.display = 'none';
//     mucso4.style.display = 'none';
// }
// function hienmuc3() {
//     mucso1.style.display = 'none';
//     mucso21.style.display = 'none';
//     mucso22a.style.display = 'none';
//     mucso22b.style.display = 'none';
//     mucso3.style.display = 'block';
//     mucso4.style.display = 'none';
// }
// function hienmuc4() {
//     mucso1.style.display = 'none';
//     mucso21.style.display = 'none';
//     mucso22a.style.display = 'none';
//     mucso22b.style.display = 'none';
//     mucso3.style.display = 'none';
//     mucso4.style.display = 'block';
// }

// function hiensuamuc1() {
//     suamuc1.style.display = 'block';
//     suamuc21.style.display = 'none';
//     suamuc22a.style.display = 'none';
//     suamuc22b.style.display = 'none';
//     suamuc3.style.display = 'none';
//     suamuc4.style.display = 'none';
// }
// function hiensuamuc21() {
//     suamuc1.style.display = 'none';
//     suamuc21.style.display = 'block';
//     suamuc22a.style.display = 'none';
//     suamuc22b.style.display = 'none';
//     suamuc3.style.display = 'none';
//     suamuc4.style.display = 'none';
// }
// function hiensuamuc22a() {
//     suamuc1.style.display = 'none';
//     suamuc21.style.display = 'none';
//     suamuc22a.style.display = 'block';
//     suamuc22b.style.display = 'none';
//     suamuc3.style.display = 'none';
//     suamuc4.style.display = 'none';
// }
// function hiensuamuc22b() {
//     suamuc1.style.display = 'none';
//     suamuc21.style.display = 'none';
//     suamuc22a.style.display = 'none';
//     suamuc22b.style.display = 'block';
//     suamuc3.style.display = 'none';
//     suamuc4.style.display = 'none';
// }
// function hiensuamuc3() {
//     suamuc1.style.display = 'none';
//     suamuc21.style.display = 'none';
//     suamuc22a.style.display = 'none';
//     suamuc22b.style.display = 'none';
//     suamuc3.style.display = 'block';
//     suamuc4.style.display = 'none';
// }
// function hiensuamuc4() {
//     suamuc1.style.display = 'none';
//     suamuc21.style.display = 'none';
//     suamuc22a.style.display = 'none';
//     suamuc22b.style.display = 'none';
//     suamuc3.style.display = 'none';
//     suamuc4.style.display = 'block';
// }

// function mauso01A() {
//     muc1A.style.display = 'block';
//     muc1B.style.display = 'none';
// }
// function mauso01B() {
//     muc1A.style.display = 'none';
//     muc1B.style.display = 'block';
// }

// function suamauso01A() {
//     suamuc1A.style.display = 'block';
//     suamuc1B.style.display = 'none';
// }
// function suamauso01B() {
//     suamuc1A.style.display = 'none';
//     suamuc1B.style.display = 'block';
// }

// function mauso12() {
//     mau12.style.display = 'block';
//     mau13.style.display = 'none';
//     mau14.style.display = 'none';
//     mau15.style.display = 'none';
// }
// function mauso13() {
//     mau12.style.display = 'none';
//     mau13.style.display = 'block';
//     mau14.style.display = 'none';
//     mau15.style.display = 'none';
// }
// function mauso14() {
//     mau12.style.display = 'none';
//     mau13.style.display = 'none';
//     mau14.style.display = 'block';
//     mau15.style.display = 'none';
// }
// function mauso15() {
//     mau12.style.display = 'none';
//     mau13.style.display = 'none';
//     mau14.style.display = 'none';
//     mau15.style.display = 'block';
// }

function timkiemdlg() {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/api/findgoithau', true);
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
        let recv = this.responseText;
        let data = JSON.parse(recv);
        goithau = data[0];
        kehoachlcnt = data[1];
        //alert(goithau[0][0]);
        //alert(duan);
        var st = '';
        for(let i=0; i < goithau.length; i++) {
            st = st + '<div class="card-khlcnt"> \
            <div class="card-khlcnt1">' + String(i+1) + '. ' + goithau[i][3] + '</div> \
            <div class="card-khlcnt2">Mã KHLCNT: ' + kehoachlcnt[i][3] + '</div> \
            <div class="card-khlcnt2">Tên KHLCNT: ' + kehoachlcnt[i][8] + '</div> \
            <div class="card-khlcnt2">Ngày đăng tải: ' + kehoachlcnt[i][19] + '</div> \
            <div class="card-khlcnt3"> \
                <button onclick="chongoithau(' + i +')" class="btn btn-primary" style="margin-right: 20px;">Chọn</button> \
            </div> \
            </div> '
        }
        sogoithau.innerHTML = 'Có ' + String(goithau.length) + ' gói thầu được tìm thấy!';
        danhmucgoithau.innerHTML = st;
        //alert(recv);
        
        }
    };
    xhr.send();    
}

function chongoithau(id) {
    goithauid = id;
    magoithau = goithau[id][2];
    makhlcnt.value = kehoachlcnt[id][3];
    benmoithau.value = kehoachlcnt[id][9];
    linhvuc.value = goithau[id][12];
    tengoithau.value = goithau[id][3];
    nguonvon.value = goithau[id][17];
    loaihopdong.value = goithau[id][16];
    hinhthuclcnt.value = goithau[id][14];
    phuongthuclcnt.value = goithau[id][15];
    if (goithau[id][9] == 'Trong nước') {
        trongnuoc.checked = true;
        quocte.checked = false;
    } else {
        trongnuoc.checked = false;
        quocte.checked = true;
    }
    var tg = JSON.parse(goithau[id][22]);
    tgthuchien.value = tg[0];
    tgthuchienngay.value = tg[1];
    quamang.value = goithau[id][8];
    diadiemthuchien.value = goithau[id][23];
    sotienbangchu.value = goithau[id][11];
    giagoithau.value = goithau[id][10];


    timkiemDialog.close();

}

function setRegStatus(regis) {
  //alert(reg);
  regStatus = regis;
  if (regis == 1) {
      appbody1.style.display = "grid";
      appbody2.style.display = "none";
      appbody3.style.display = "none";
      rightButton.style.display = 'block';
      saveButton.style.display = 'block';
      xemtruocBtn.style.display = 'none';
      kiemtraBtn.style.display = 'none';
      taifileBtn.style.display = 'none';
      saochepBtn.style.display = 'none';
      tieptucBtn.style.display = 'none';
      luuphathanhBtn.style.display = 'none';
      dangtaiBtn.style.display = 'none';

      cir1.style.backgroundColor = "#064d69";
      cir1.style.color = "white";
      if (chaseStatus == 8) {
          cir2.style.backgroundColor = '#2eb553';
          cir3.style.backgroundColor = '#2eb553';
          cir4.style.backgroundColor = '#2eb553';
      }
      if (chaseStatus == 4) {
          cir2.style.backgroundColor = '#2eb553';
          cir3.style.backgroundColor = '#2eb553';
      }
      if (chaseStatus == 2) {
          cir2.style.backgroundColor = '#2eb553';
      }

  }
  if (regis == 2) {
      appbody1.style.display = "none";
      appbody2.style.display = "block";
      appbody3.style.display = "none";
      
      rightButton.style.display = 'none';
      saveButton.style.display = 'none';
      xemtruocBtn.style.display = 'block';
      kiemtraBtn.style.display = 'block';
      taifileBtn.style.display = 'block';
      saochepBtn.style.display = 'block';
      tieptucBtn.style.display = 'block';

      luuphathanhBtn.style.display = 'none';
      dangtaiBtn.style.display = 'none';


      cir1.style.backgroundColor = '#2eb553';
      cir2.style.backgroundColor = "#064d69";
      cir2.style.color = "white";
      // if (saveStatus == false) {
      //     rightButton.innerHTML = 'Lưu <i class="fa fa-floppy-o" aria-hidden="true"></i>';
      // }
      if (chaseStatus == 8) {
          cir1.style.backgroundColor = '#2eb553';
          cir3.style.backgroundColor = '#2eb553';
          cir4.style.backgroundColor = '#2eb553';
      }
      if (chaseStatus == 4) {
          cir1.style.backgroundColor = '#2eb553';
          cir3.style.backgroundColor = '#2eb553';
      }
      if (chaseStatus == 2) {
          cir1.style.backgroundColor = '#2eb553';
      }
  }

  if (regis == 3) {
      appbody1.style.display = "none";
      appbody2.style.display = "none";
      appbody3.style.display = "block";
      leftButton.removeAttribute('disabled');

      rightButton.style.display = 'none';
      saveButton.style.display = 'none';
      xemtruocBtn.style.display = 'none';
      kiemtraBtn.style.display = 'none';
      taifileBtn.style.display = 'none';
      saochepBtn.style.display = 'none';
      tieptucBtn.style.display = 'none';
      luuphathanhBtn.style.display = 'block';
      dangtaiBtn.style.display = 'block';
      matbmt2.innerHTML = matbmt.value;
      tengoithau2.value = tengoithau.value;
      benmoithau2.value = benmoithau.value;
      trangthai2.value = trangthai.value;
    
      cir2.style.backgroundColor = '#2eb553';
      cir3.style.backgroundColor = "#064d69";
      cir3.style.color = "white";
      

      if (chaseStatus == 8) {
          cir1.style.backgroundColor = '#2eb553';
          cir2.style.backgroundColor = '#2eb553';
          cir4.style.backgroundColor = '#2eb553';
      }
      if (chaseStatus == 4) {
          cir1.style.backgroundColor = '#2eb553';
          cir2.style.backgroundColor = '#2eb553';
      }
      //Hien thi thong tin dang ky

      

  }

}  

function lapEHSMT() {
    regStatus = 2;
    document.getElementById('benmoithau1').innerHTML = benmoithau.value;
    document.getElementById('tengoithau1').innerHTML = tengoithau.value;

    setRegStatus(regStatus);  

  }

function prevClick() {
    if (regStatus == 1) {
        if (confirm('Bạn muốn quay lại trang trước ?')) {
            window.location.href = "/cblcnt/tbmt";
        }
    } else {
        regStatus = regStatus - 1;
        if (regStatus == 0) {
            regStatus = 1;
        } 
        setRegStatus(regStatus);      
    }
}

function tieptuc() {
        regStatus = regStatus + 1;
        if (regStatus == 4) {
            regStatus = 3;
        } 
        setRegStatus(regStatus);      

}

function startPage() {
  regStatus = 1;
  saveStatus = false;
  chaseStatus = 1;
  dangStatus = 'None';
  nut1.style.pointerEvents = "auto";
  nut2.style.pointerEvents = "none";
  nut3.style.pointerEvents = "none";

  setRegStatus(1);
}


function savetbmt() {
    var reg = {};
    reg['makhlcnt'] = makhlcnt.value;
    reg['phienban'] = phienban.value;
    reg['trangthai'] = trangthai.value;
    reg['magoithau'] = magoithau;
    reg['diadiemphathanh'] = diadiemphathanh.value;
    reg['diadiemnhan'] = diadiemnhan.value;
    if (mienphi.checked == true) {
        reg['chiphi'] = 'Miễn phí';
    } else {
        reg['chiphi'] = 'Có phí';
    }
    reg['giaban'] = giaban.value;
    reg['dongthau1'] = dongthau1.value;
    reg['dongthau2'] = dongthau2.value;
    reg['mothau1'] = mothau1.value;
    reg['mothau2'] = mothau2.value;
    reg['diadiemmothau'] = diadiemmothau.value;
    reg['sotienbangchu'] = sotienbangchu.value;
    reg['hieulucehsmt'] = hieulucEHSMT.value;
    reg['sotienbddt'] = sotienBDDT.value;
    reg['sotienbddtbangchu'] = sotienBDDTbangchu.value;
    reg['hinhthucbddt'] = hinhthucBDDT.value;
    if (thoathuankhung.checked == true) {
        reg['thoathuankhung'] = 'Có';
    } else {
        reg['thoathuankhung'] = 'Không';
    }

    if (chidinh.checked == true) {
        reg['chidinh'] = 'Có';
    } else {
        reg['chidinh'] = 'Không';
    }

    reg['phanloaigoi'] = phanloaigoi.value;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/api/savetbmt', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                alert('Lưu thông báo mời thầu thành công!');
                let rt = this.responseText;
                matbmt.value = rt;
                document.getElementById('maTBMT1').innerHTML = rt;

                rightButton.disabled = false;
            } else {
                alert('Lỗi lưu thông báo mời thầu');
                saveButton.disabled = false;
            }
        }
    };
    let st = JSON.stringify(reg);
    xhr.send(st);
    saveButton.disabled = true;
    
}

function sotienchange() {
    let sotien = parseInt(sotienBDDT.value);
    let chu = chuyensosangchu(sotien) + ' đồng';
    // if (selectcurrency.value == "VND") {
    //     chu = chu + " đồng";
    // }
    // if (selectcurrency.value == "USD") {
    //     chu = chu + " đô la Mỹ";
    // }
    // if (selectcurrency.value == "EUR") {
    //     chu = chu + " Euro";
    // }
    //alert(chu);
    sotienBDDTbangchu.value = chu;
    //alert(tongmucdautu.value);
}

function luuphathanh() {
    var reg = {};
    reg['matbmt'] = matbmt.value;
    reg['ngaypheduyet'] = ngaypheduyet2.value;
    reg['soquyetdinh'] = soquyetdinh2.value;
    reg['coquanquyetdinh'] = coquanquyetdinh2.value;


    if (filequyetdinh2.files.length > 0) {
        reg['filequyetdinh'] = filequyetdinh2.files[0].name;
    } else {
        reg['filequyetdinh'] = 'None';
    }
    if (filesuadoi2.files.length > 0) {
        reg['filesuadoi'] = filesuadoi2.files[0].name;
    } else {
        reg['filesuadoi'] = 'None';
    }
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/api/savetbmtphathanh', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                alert('Lưu thông tin phát hành thành công!');

                luuphathanhBtn.disabled = true;
            } else {
                alert('Lỗi lưu thông tin phát hành');
                luuphathanhBtn.disabled = false;
            }
        }
    };
    let st = JSON.stringify(reg);
    xhr.send(st);
    
}

function dangtai() {
    var reg = {};
    reg['ma'] = matbmt.value;
    reg['trangthai'] = 'Đã đăng tải';
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/api/dangtbmt', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                alert('Đăng thông báo mời thầu thành công!');
                trangthai2.innerHTML = 'Đã đăng tải';
                dangtaiBtn.disabled = true;

            } else {
                alert('Đăng lỗi');
                dangtaiBtn.disabled = false;
            }
        }
    };
    let st = JSON.stringify(reg);
    xhr.send(st);
    
}






