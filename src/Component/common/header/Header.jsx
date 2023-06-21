import React, {useEffect} from 'react';

const Header = () => {
    useEffect(() => {
        window.addEventListener("load", function() {
            const menuList = document.querySelectorAll("#header-menu > li");
            for (let i = 0; i < menuList.length; i++) {
                menuList[i].addEventListener('mouseover', function() {
                    let menushow = document.getElementById('menu-'+i);
                    if (menushow) {
                        menushow.style.display = 'block';
                    }
                });
                menuList[i].addEventListener('mouseout', function() {
                    let menushow = document.getElementById('menu-'+i);
                    if (menushow) {
                        menushow.style.display = 'none';
                    }
                })
            }
            const menuChild = document.querySelectorAll('.menu-child');
            for (let i =0; i< menuChild.length; i++) {
                menuChild[i].parentElement.addEventListener('mouseover', function(){
                    let menushow = document.getElementById('menu-child-'+i);
                    console.log('menu-child-'+i);
                    menushow.style.display = 'block';
                })
                menuChild[i].parentElement.addEventListener('mouseout', function() {
                    let menushow = document.getElementById('menu-child-'+i);
                    menushow.style.display = 'none';
                })
            }
            const menuButton = document.getElementById('menu-button');
            const menuLeft = document.getElementById('menu-left');
            console.log(menuLeft);
            menuButton.addEventListener('mouseover', function() {menuLeft.style.display = 'block'});
            menuButton.addEventListener('mouseout', function() {menuLeft.style.display = 'none'})
            menuLeft.addEventListener('mouseover', function() {menuLeft.style.display = 'block'});
            menuLeft.addEventListener('mouseout', function() {menuLeft.style.display = 'none'})
            const menuVertical = document.querySelectorAll('.menu-vertical > li > a');
            for (let i = 0; i < menuVertical.length; i++) {
                let menuDot = document.createElement('img');
                menuDot.setAttribute('src', './images/menuDot.gif');
                menuVertical[i].prepend(menuDot);
            }
            const searchButton = document.querySelector('#search-button');
            const searchInput = document.getElementById('search-input');
            searchButton.addEventListener('mouseover', function() {
                searchInput.style.opacity = '1';
                searchInput.style.width = 'calc(100% - 225px)';
                console.log(searchInput.style.width)
            });
            searchButton.addEventListener('mouseout', function() {
                searchInput.style.opacity = '0';
                searchInput.style.width = '0px';
            })
            searchInput.addEventListener('mouseover', function() {
                searchInput.style.opacity = '1';
                searchInput.style.width = 'calc(100% - 225px)';
                console.log(searchInput.style.width)
            });
            searchInput.addEventListener('mouseout', function() {
                searchInput.style.opacity = '0';
                searchInput.style.width = '0px';
            })
            const submitButton = document.querySelector('#search-button > a')
            searchInput.addEventListener('keyup', function(event){
                if (event.keyCode == 13) {submitButton.click()};
            })
            submitButton.onclick = function () {
                if (searchInput.value == "") {window.alert('Hãy nhập tin tức muốn tìm')} else {
                    window.open('https://www.google.com/search?q='+searchInput.value+'&as_sitesearch=24h.com.vn','_blank');
                    searchInput.value = "";
                }
            }
        });
    }, []);
    return (
        <header>
            <div className="container header">
                <div id="logo">
                    <a href="/"><img src="./images/24h_logo_trang_chu_2015.png" alt=""/></a>
                    <div className="vertical-container menu-left">
                        <ul id="menu-left" className="menu-vertical">
                            <li><a href="/">Trang chủ 24H</a></li>
                            <li>
                                <a href="/tin-tuc-trong-ngay">Tin tức trong
                                    ngày</a>
                                <div className="vertical-container menu-child">
                                    <ul id="menu-child-0" className="menu-vertical">
                                        <li><a href="/">Chính trị - Xã hội</a></li>
                                        <li><a className="stick-category" href="/suc-khoe-doi-song">Đời sống - Dân sinh</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li><a href="/bong-da">Bóng đá</a></li>
                            <li><a href="/the-gioi">Thế giới</a></li>
                            <li><a href="/thoi-trang-hitech">Thời trang</a></li>
                            <li><a href="/phap-luat">Pháp luật</a></li>
                            <li><a href="/thoi-trang-hitech">Thời trang Hi-tech</a></li>
                            <li><a href="/kinh-doanh">Kinh doanh</a></li>
                            <li><a href="/bong-da">Clip 1 phút bóng đá</a></li>
                            <li><a href="/am-thuc">Ẩm thực</a></li>
                            <li><a href="/ket-qua-bong-da-c140.html">Đàn ông</a></li>
                            <li><a href="/lam-dep">Làm đẹp</a></li>
                            <li><a href="/suc-khoe-doi-song">Đời sống Showbiz</a></li>
                            <li><a href="/giai-tri">Giải trí</a></li>
                            <li><a href="/ban-tre-cuoc-song">Bạn trẻ - Cuộc sống</a></li>
                            <li><a href="/giao-duc-du-hoc">Giáo dục - Du học</a></li>
                            <li><a href="/trac-nghiem">Trắc nghiệm</a></li>
                            <li><a href="/the-thao">Thể thao</a></li>
                            <li><a href="/phi-truong-ky-quac">Phi trường - Kỳ quặc</a></li>
                            <li><a href="/cong-nghe-thong-tin">Công nghệ thông tin</a></li>
                            <li><a href="/o-to">Ô tô</a></li>
                            <li><a href="/cup-c1-champions-league-c153.html">Xe máy - Xe đạp</a></li>
                            <li><a href="/thi-truong-tieu-dung">Thị trường tiêu dùng</a></li>
                            <li><a href="/du-lich">Du lịch</a></li>
                            <li><a href="/suc-khoe-doi-song">Sức khỏe đời sống</a></li>
                            <li><a href="/cuoi-24h">Cười 24h</a></li>
                        </ul>
                    </div>
                </div>
                <div id="menu-button">
                    <a href="#"><img src="./images/menu-top-xem-danh-muc.gif" alt=""/><br/>Danh mục</a>

                </div>
                <ul id="header-menu">
                    <li>
                        <a href=""><img src="https://cdn.24h.com.vn/upload/2-2023/images/2023-06-06/tintuc-1686041577-745-width20height18.png"
                                        alt=""/><br/>Tin tức</a>
                        <div className="vertical-container">
                            <ul id="menu-0" className="menu-vertical">
                                <li><a href="/lich-thi-dau-bong-da-c287.html">Chính trị - Xã hội</a></li>
                                <li><a href="/video-ban-thang-c297.html">Đời sống - Dân sinh</a></li>
                                <li><a href="/bong-da/lich-thi-dau-bong-da-hom-nay-moi-nhat-c48a364371.html">Giao thông - Đô thị</a></li>
                                <li><a href="/bong-da-duc-c152.html">Nóng trên mạng</a></li>
                                <li><a href="/bang-xep-hang-bong-da-c295.html">Dự báo thời tiết</a></li>
                                <li><a href="/video-highlight-c953.html">Lịch vạn niên</a></li>
                                <li><a href="/tuong-thuat-truc-tiep-c954.html">Tin Hà Nội</a></li>
                                <li><a href="/bong-da-ngoai-hang-anh-c149.html">Vắn xin Covid 19</a></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a href="/bong-da"><img src="./images/icons8-soccer-ball-96-copy-1541383138-270-width20height20.png"
                                        alt=""/><br/>Bóng đá</a>
                        <div className="vertical-container">
                            <ul id="menu-1" className="menu-vertical">
                                <li><a href="/lich-thi-dau-bong-da-c287.html">Lịch thi đấu</a></li>
                                <li><a href="/video-ban-thang-c297.html">Video</a></li>
                                <li><a href="/bong-da/lich-thi-dau-bong-da-hom-nay-moi-nhat-c48a364371.html">Lịch thi
                                    đấu hôm nay</a></li>
                                <li><a href="/bong-da-duc-c152.html">Bóng đá Đức - Bundesliga</a></li>
                                <li><a href="/bang-xep-hang-bong-da-c295.html">Bảng xếp hạng bóng đá</a></li>
                                <li><a href="/video-highlight-c953.html">Video highlight</a></li>
                                <li><a href="/tuong-thuat-truc-tiep-c954.html">Tường thuật trực tiếp</a></li>
                                <li><a href="/bong-da-ngoai-hang-anh-c149.html">Ngoại hạng Anh</a></li>
                                <li><a href="/vong-loai-world-cup-2022-c860.html">Vòng loại World Cup 2022</a></li>
                                <li><a href="/su-kien-binh-luan-c447.html">Sự kiện - Bình luận</a></li>
                                <li><a href="/bong-da/ket-qua-bong-da-truc-tuyen-c48a737956.html">Livescore</a></li>
                                <li><a href="/ket-qua-bong-da-c140.html">Kết quả bóng đá</a></li>
                                <li><a href="/clip-1-phut-bong-da-24h-c48e6106.html">Clip 1 phút Bóng đá</a></li>
                                <li><a href="/bong-da-phap-c344.html">Bóng đá Pháp - Ligue 1</a></li>
                                <li><a href="/talkshow-bong-da-c882.html">Talkshow bóng đá</a></li>
                                <li><a href="/xem-video-highlight-tren-24hcomvn-c48e5940.html">Xem video highlight
                                    trên...</a></li>
                                <li><a href="/bong-da-viet-nam-c182.html">Bóng đá Việt Nam</a></li>
                                <li><a href="/tin-van-bong-da-c409.html">Tin vắn bóng đá</a></li>
                                <li><a href="/lich-bong-da-tv-c303.html">Lịch bóng đá TV</a></li>
                                <li><a href="/bong-da-y-c150.html">Bóng đá Ý</a></li>
                                <li><a href="/bong-da-tay-ban-nha-c151.html">Bóng đá Tây Ban Nha</a></li>
                                <li><a href="/top-ghi-ban-c288.html">Top ghi bàn</a></li>
                                <li><a href="/cup-c1-champions-league-c153.html">Cup C1 - Champions League</a></li>
                                <li><a href="/cac-giai-bong-da-khac-c315.html">Các giải bóng đá khác</a></li>
                                <li><a href="/tin-ben-le-bong-da-c122.html">Tin bên lề bóng đá</a></li>
                                <li><a href="/video-highlight-ngoai-hang-anh-c149e5903.html">Video highlight Ngoại hạng
                                    Anh</a></li>
                                <li><a href="/tin-chuyen-nhuong-c53.html">Tin chuyển nhượng</a></li>
                                <li><a href="/anh-bong-da-nguoi-dep-c507.html">Ảnh bóng đá - người đẹp</a></li>
                                <li><a href="/ngoi-sao-bong-da-c123.html">Ngôi sao bóng đá</a></li>
                                <li><a href="/video-bong-da-hot-c508.html">Video bóng đá hot</a></li>
                                <li><a href="/top-10-c505.html">Tốp 10 +</a></li>
                                <li><a href="/xep-hang-fifa-c271.html">Xếp hạng FIFA</a></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a href="/kinh-doanh"><img src="./images/icons8-increase-96-copy-1541383138-358-width19height19.png" alt=""/><br/>Kinh
                            doanh</a>
                        <div className="vertical-container">
                            <ul id="menu-2" className="menu-vertical">
                                <li><a href="/doanh-nhan-c606.html">Doanh nhân</a></li>
                                <li><a href="/tai-chinh-bat-dong-san">Tài chính</a></li>
                                <li><a href="/tai-chinh-bat-dong-san">Bất động sản</a></li>
                                <li><a href="/khoi-nghiep-c826.html">Khởi nghiệp</a></li>
                                <li><a href="/doanh-nghiep-c849.html">Doanh nghiệp</a></li>
                                <li><a href="/ngan-hang-c850.html">Ngân hàng</a></li>
                                <li><a href="/tin-chung-khoan-c566.html">Chứng khoán</a></li>
                                <li><a href="/ty-gia-ngoai-te-ttcb-c426.html">Tỷ giá</a></li>
                                <li><a href="/gia-vang-hom-nay-c425.html">Giá vàng</a></li>
                                <li><a href="/toi-tieu-tien-c851.html">Tiền tiền tiền</a></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a href=""><img src="./images/heartbeat1-1541383138-349-width20height18.png" alt=""/><br/>Sức khỏe</a>
                        <div className="vertical-container">
                            <ul id="menu-3" className="menu-vertical">
                                <li><a href="/vac-xin-covid-19-c46e6432.html">Vắc xin Covid-19</a></li>
                                <li><a href="/benh-dan-ong-c778.html">Bệnh đàn ông</a></li>
                                <li><a href="/benh-phu-nu-c779.html">Bệnh phụ nữ</a></li>
                                <li><a href="/dinh-duong-c780.html">Sức khỏe dinh dưỡng</a></li>
                                <li><a href="/suc-khoe-tinh-duc-c62e5286.html">Sức khỏe tình dục</a></li>
                                <li><a href="/ung-thu-c62e3457.html">Ung thư</a></li>
                                <li><a href="/tong-hop-so-lieu-dich-covid-19-c972.html">Số liệu COVID-19</a></li>
                                <li><a href="/bai-thuoc-dan-gian-c67.html">Bài thuốc dân gian</a></li>
                                <li><a href="/tin-tuc-suc-khoe-c683.html">Tin tức sức khỏe</a></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a href="/thoi-trang-hitech"><img src="./images/icons8-smartphone-tablet-52-copy-1541383138-560-width20height20.png"
                                        alt=""/><br/>Hi-tech</a>
                        <div className="vertical-container">
                            <ul id="menu-4" className="menu-vertical">
                                <li><a href="/dien-thoai-c419.html">Điện thoại</a></li>
                                <li><a href="/danh-gia-san-pham-c781.html">Đánh giá sản phẩm</a></li>
                                <li><a href="/laptop-gia-re-c451.html">Laptop</a></li>
                                <li><a href="/tin-tuc-cong-nghe-c453.html">Tin tức công nghệ</a></li>
                                <li><a href="/dien-tu-gia-dung-c786.html">Điện tử gia dụng</a></li>
                                <li><a href="/may-tinh-bang-c699.html">Máy tính bảng</a></li>
                                <li><a href="/bang-gia-dien-thoai-c951.html">Bảng giá</a></li>
                                <li><a href="/may-anh-va-camera-so-c422.html">Máy ảnh và camera số</a>
                                </li>
                                <li><a href="/cac-san-pham-khac-c423.html">Phụ kiện Hi-tech</a></li>
                                <li><a href="/may-tinh-de-ban-c290.html">Máy tính để bàn</a></li>
                                <li><a href="/the-gioi-cong-nghe-c674.html">Thế giới công nghệ</a></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a href=""><img src="./images/icons8-globe-962-1541383138-743-width20height20.png" alt=""/><br/>Thế giới</a>
                        <div className="vertical-container">
                            <ul id="menu-5" className="menu-vertical">
                                <li><a href="/diem-nong-c704.html">Điểm nóng</a></li>
                                <li><a href="/quan-su-c705.html">Quân sự</a></li>
                                <li><a href="/the-gioi-dong-vat-c415e3793.html">Thế giới động vật</a></li>
                                <li><a href="/ho-so-c706.html">Hồ sơ</a></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a href="/the-thao"><img src="./images/thethao-1579244755-985-width20height22.png" alt=""/><br/>Thể thao</a>
                    </li>
                    <li>
                        <a href="/bong-da"><img src="./images/nha_icon-1629109485-345-width23height23.png" alt=""/><br/>Ngoại hạng
                            Anh</a>
                    </li>
                    <li>
                        <a href="/giai-tri"><img src="https://cdn.24h.com.vn/upload/1-2022/images/2022-02-14/giaitri-1541403843-696-width20height20-1644810348-714-width20height20.png" alt=""/><br/>Giải trí</a>
                    </li>
                    <li>
                        <a href="/lam-dep"><img src="https://cdn.24h.com.vn/upload/3-2022/images/2022-08-29/eva-1541387818-110-width16height20-1661765408-531-width16height20.png" alt=""/><br/>Phái đẹp</a>
                    </li>
                    <li>
                        <a href=""><img src="./images/xem-lich-1613962271-733-width25height25.png" alt=""/><br/>Xem lịch</a>
                    </li>
                </ul>
                <div id="search-button">
                    <a href="#"><img src="./images/search.svg" alt=""/></a>
                </div>
                <input type="text" name="" id="search-input" placeholder="Nhập tin tức cần tìm"/>
            </div>
        </header>
    );
};

export default Header;
