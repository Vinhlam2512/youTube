const content = document.querySelector(".content");

const app = {
  songs: [
    {
      name: "SƠN TÙNG M-TP | MUỘN RỒI MÀ SAO CÒN | OFFICIAL MUSIC VIDEO",
      singer: "Sơn Tùng MTP",
      thumbail: "./assets/img/MRMSC.jpg",
      avt: "./assets/img/ST.jpg",
      view: "122 Tr lượt xem. 3 tháng trước",
    },
    {
        name:'JustaTee - Đã Lỡ Yêu Em Nhiều (Official MV)',
        singer: "JustaTee",
        thumbail: "./assets/img/video1.jpg",
        avt: './assets/img/1.jpg',
        view: "100 Tr lượt xem. 2 năm trước"
    },
    {
        name:'Mặt Trời Của Em - Official MV | Phương Ly ft JustaTee',
        singer: "Phuong Ly Official",
        thumbail: "./assets/img/MTCE.jpg",
        avt: './assets/img/PL.jpg',
        view: "100 Tr lượt xem. 4 năm trước"
    },
    {
        name:'Lời Yêu Ngây Dại - Kha',
        singer: "Kha",
        thumbail: "./assets/img/BHCTVT.jpg",
        avt: './assets/img/NV.jpg',
        view: "40 Tr lượt xem. 3 năm trước"
    },
    {
        name:'BÔNG HOA CHẲNG THUỘC VỀ TA - NHƯ VIỆT | OFFICIAL MUSIC VIDEO',
        singer: "Như Việt ",
        thumbail: "./assets/img/LYND.jpg",
        avt: './assets/img/KHA.jpg',
        view: "70 Tr lượt xem. 3 năm trước"
    },
    {
        name:'Chọn ngành IT có sai lầm? Những trải nghiệm thực tế sau 2 tháng làm việc tại doanh nghiệp?',
        singer: "F8 Official",
        thumbail: "./assets/img/F8(1).jpg",
        avt: './assets/img/F8.jpg',
        view: "700 Tr lượt xem. 1 tuần trước"
    },
    {
        name:'F8 SẬP? MÌNH ĐÃ FIX NHƯ THẾ NÀO? - FIX BUGS IN THE HOSPITAL',
        singer: "F8 Official",
        thumbail: "./assets/img/F8(2).jpg",
        avt: './assets/img/F8.jpg',
        view: "700 Tr lượt xem. 1 tháng trước"
    },
    {
        name:'"Code Thiếu Nhi Battle" Tranh Giành Trà Sữa Size L',
        singer: "F8 Official",
        thumbail: "./assets/img/F8(3).jpg",
        avt: './assets/img/F8.jpg',
        view: "700 Tr lượt xem. 1 tháng trước"
    },
    {
        name:'"Học Xong" Javascript Có Giải Được "Code Thiếu Nhi"?',
        singer: "F8 Official",
        thumbail: "./assets/img/F8(4).jpg",
        avt: './assets/img/F8.jpg',
        view: "700 Tr lượt xem. 6 tháng trước"
    },
    {
        name:'Ai có thu nhập cao và đi xa trong ngành IT? | Làm IT có thật sự kiếm nhiều kiền?',
        singer: "F8 Official",
        thumbail: "./assets/img/F8(5).jpg",
        avt: './assets/img/F8.jpg',
        view: "700 Tr lượt xem. 7 tháng trước"
    },
    {
        name:'Mở hộp đánh giá nhanh Huawei P50 Pro tại Việt Nam: chụp ảnh tốt nhất thế giới?',
        singer: "Vật Vờ Studio",
        thumbail: "./assets/img/VV1.jpg",
        avt: './assets/img/VV.jpg',
        view: "40 N lượt xem. 1 ngày trước"
    },
    {
        name:'Rút ra điều gì sau sự kiện của Samsung? Dòng Note bị khai tử?',
        singer: "Vật Vờ Studio",
        thumbail: "./assets/img/VV2.jpg",
        avt: './assets/img/VV.jpg',
        view: "70 N lượt xem. 6 ngày trước"
    },
    {
        name:'Đánh giá iPad Air 4: Chấp nhận màn hình 60Hz đi!',
        singer: "Vật Vờ Studio",
        thumbail: "./assets/img/VV3.jpg",
        avt: './assets/img/VV.jpg',
        view: "90 N lượt xem. 6 ngày trước"
    },
    {
        name:'Mở hộp Galaxy Z Fold 3 5G chính hãng: Củ sạc đâu rồi?',
        singer: "Vật Vờ Studio",
        thumbail: "./assets/img/VV4.jpg",
        avt: './assets/img/VV.jpg',
        view: "90 N lượt xem. 5 ngày trước"
    },
    {
        name:'Lý do tôi không bỏ được hệ sinh thái Samsung',
        singer: "Vật Vờ Studio",
        thumbail: "./assets/img/VV5.jpg",
        avt: './assets/img/VV.jpg',
        view: "50 N lượt xem. 2 ngày trước"
    },
    {
        name:'TIN NÓNG 561: BLV Văn Tùng nhận định đường đến CKTG của T1 - Doinb tập bài dị cho vòng playoffs LPL',
        singer: "Văn Tùng",
        thumbail: "./assets/img/VT1.jpg",
        avt: './assets/img/VT.jpg',
        view: "40 N lượt xem. 2 ngày trước"
    },
    {
        name:'BÌNH LOẠN RANK BẠC: HÀNH TRÌNH LEO RANK CỦA F4T4NT VỚI GIÁO ÁN TRUNDLE ĐI...TOP | BLV VĂN TÙNG',
        singer: "Văn Tùng",
        thumbail: "./assets/img/VT2.jpg",
        avt: './assets/img/VT.jpg',
        view: "32 N lượt xem. 4 ngày trước"
    },
    {
        name:'BÌNH LUẬN RANK HÀN: CUỘC ĐỌ SÚNG CỦA HAI SIÊU XẠ THỦ VIPER VÀ GUMAYUSI CÙNG GAME ĐẤU CỰC KỲ MÃN NHÃN',
        singer: "Văn Tùng",
        thumbail: "./assets/img/VT3.jpg",
        avt: './assets/img/VT.jpg',
        view: "37 N lượt xem. 4 ngày trước"
    },
    {
        name:'PHÂN TÍCH TRẬN ĐẤU T1 vs DRX: FAKER BẮT PYOSIK QUÁ GẮT VÀ NHỮNG ĐIỂM YẾU T1 CẦN KHẮC PHỤC | VĂN TÙNG',
        singer: "Văn Tùng",
        thumbail: "./assets/img/VT5.jpg",
        avt: './assets/img/VT.jpg',
        view: "72 N lượt xem. 2 tuần trước"
    },
    {
        name:'BÌNH LUẬN RANK HÀN: TRẬN ĐẤU MÀ FAKER ĐÁNH SYNDRA ẤN TƯỢNG NHẤT TỪ TRƯỚC ĐẾN NAY | BLV VĂN TÙNG',
        singer: "Văn Tùng",
        thumbail: "./assets/img/VT4.jpg",
        avt: './assets/img/VT.jpg',
        view: "50 N lượt xem. 2 tuần trước"
    },

  ],

  render: function () {
    const htmls = this.songs.map(function (song,index) {
      return `
              <div class="vid">
              <div class="thumbail">
                <img src="${song.thumbail}" alt="">
              </div>
              <a href="#" class="avt">
                <img src="${song.avt}" alt="">
              </a>
              <div class="detail">
                <div class="name">
                  <h3>
                    <a href="" class="title">${song.name}</a>
                  </h3>
                  <div class="des-song">
                    <span class="singer">${song.singer}</span>
                    <span class="view">${song.view}</span>
                  </div>
                </div>
              </div>
            </div>
              `;
    });
    content.innerHTML = htmls.join('');
  },
};

app.render();
