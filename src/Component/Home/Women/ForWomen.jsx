import React, { useState } from 'react';

const PaginationExample = () => {
    const items = [
        {
            image: "https://image.eva.vn/upload/1-2022/images/2022-01-06/large/gt0601-j01-ava1-1641487040-520-width640height480.jpg",
            title: "Siêu mẫu Minh Tú từng có quan hệ với những ai trước khi công khai bạn..."
        },
        {
            image: "https://image.eva.vn/upload/1-2022/images/2022-01-05/large/e2-1641376109-100-width640height480.jpg",
            title: "Người đàn ông dùng nước hoa kích dục, ai ngờ khiến người yêu phải 5 lần 7 lượt đi viện"
        },
        {
            image: "https://image.eva.vn/upload/1-2022/images/2022-01-06/large/a-1641463385-840-width640height480.jpg",
            title: "Con trai hỏi 'khi quan hệ thấy thế nào?' mẹ đáp vô cùng hài hước, truyền cho bé bài học cuộc sống"
        },
        // Thêm các mục khác nếu cần
    ];

    const [activePage, setActivePage] = useState(0);

    const handlePageClick = (pageIndex) => {
        setActivePage(pageIndex);
    };

    const handlePreviousPage = () => {
        if (activePage > 0) {
            setActivePage((prevPage) => prevPage - 1);
        }
    };

    const handleNextPage = () => {
        if (activePage < items.length - 1) {
            setActivePage((prevPage) => prevPage + 1);
        }
    };

    return (
        <div className="widget">
            <h2 className="widget-title" style={{color: 'palevioletred', borderColor: 'palevioletred'}}>
                <a href="/lam-dep">Dành riêng cho phái đẹp</a>
            </h2>
            <div className="post-content">
                <img src={items[activePage].image} alt="" />
                <a className="post-content-right" href="https://www.24h.com.vn/doanh-nghiep/manulife-viet-nam-dan-dau-danh-sach-noi-lam-viec-tot-nhat-trong-nganh-bao-hiem-nho-don-nhan-van-hoa-chuyen-doi-c849a1322343.html" title="Manulife Việt Nam đầu danh sách 'Nơi làm việc tốt nhất' trong ngành bảo hiểm nhờ đón nhận văn hóa chuyển đổi">
                    {items[activePage].title}
                </a>
            </div>

            <div id="widget-page0" style={{ display: activePage === 0 ? 'block' : 'none' }}>
                <ul className="pink-dot">
                    <li><a
                        href="https://eva.vn/suc-khoe/ban-trai-dung-nuoc-hoa-kich-thich-chuyen-ay-ai-ngo-khien-ban-gai-5-lan-7-luot-di-vien-c131a503336.html">Người
                        đàn ông dùng nước hoa kích dục, ai ngờ khiến người yêu phải 5 lần 7 lượt đi viện</a></li>
                    <li><a
                        href="https://eva.vn/suc-khoe/ban-trai-dung-nuoc-hoa-kich-thich-chuyen-ay-ai-ngo-khien-ban-gai-5-lan-7-luot-di-vien-c131a503336.html">Con
                        trai hỏi "khi quan hệ thấy thế nào", nữ DV nổi tiếng trả lời khiến nhiều người đỏ mặt</a></li>
                    <li><a
                        href="https://eva.vn/suc-khoe/ban-trai-dung-nuoc-hoa-kich-thich-chuyen-ay-ai-ngo-khien-ban-gai-5-lan-7-luot-di-vien-c131a503336.html">Nhận
                        danh hiệu “Đại mỹ nhân màn ảnh Việt”, Ninh Dương Lan Ngọc tiết lộ nguyên nhân được ưu ái</a>
                    </li>
                </ul>
            </div>
            <div id="widget-page1" style={{ display: activePage === 1 ? 'block' : 'none' }}>
                <ul className="pink-dot">
                    <li><a
                        href="https://eva.vn/suc-khoe/ban-trai-dung-nuoc-hoa-kich-thich-chuyen-ay-ai-ngo-khien-ban-gai-5-lan-7-luot-di-vien-c131a503336.html">Tin
                        tức 24h: Tin nhắn dứt tình của bố bé V.A khi mẹ ruột "xin gặp" con, CĐM phẫn nộ</a></li>
                    <li><a
                        href="https://eva.vn/suc-khoe/ban-trai-dung-nuoc-hoa-kich-thich-chuyen-ay-ai-ngo-khien-ban-gai-5-lan-7-luot-di-vien-c131a503336.html">Cô
                        gái trẻ Quảng Ninh giấu bố mẹ mua giống trai Tây, đẻ con gái lai quá mãn nguyện</a></li>
                    <li><a
                        href="https://eva.vn/suc-khoe/ban-trai-dung-nuoc-hoa-kich-thich-chuyen-ay-ai-ngo-khien-ban-gai-5-lan-7-luot-di-vien-c131a503336.html">Hậu
                        chia tay Jack, nữ diễn viên sau 8 tháng sinh con diện váy buông lơi gợi cảm</a></li>
                </ul>
            </div>
            <div id="widget-page2" style={{ display: activePage === 2 ? 'block' : 'none' }}>
                <ul className="pink-dot">
                    <li><a
                        href="https://eva.vn/suc-khoe/ban-trai-dung-nuoc-hoa-kich-thich-chuyen-ay-ai-ngo-khien-ban-gai-5-lan-7-luot-di-vien-c131a503336.html">Sở
                        hữu tài sản nghìn tỷ, "Công chúa Triệu Mẫn" vẫn mặc áo cũ 10 năm, khuôn mặt chiếm
                        "spotlight"</a></li>
                    <li><a
                        href="https://eva.vn/suc-khoe/ban-trai-dung-nuoc-hoa-kich-thich-chuyen-ay-ai-ngo-khien-ban-gai-5-lan-7-luot-di-vien-c131a503336.html">Cô
                        dâu 14 tuổi bị ép kết hôn với người lạ, bố mẹ nhận được tiền sính lễ 890 triệu</a></li>
                    <li><a
                        href="https://eva.vn/suc-khoe/ban-trai-dung-nuoc-hoa-kich-thich-chuyen-ay-ai-ngo-khien-ban-gai-5-lan-7-luot-di-vien-c131a503336.html">Con
                        gái Huy Khánh "trổ giò" cao vọt cạnh bố 1m8, nhăn nhó khi chụp ảnh với phụ huynh</a></li>
                </ul>
            </div>
        <div id="widget-pagination">
            <button
                id="pag<"
                style={{ display: activePage === 0 ? 'none' : 'initial' }}
                onClick={handlePreviousPage}
            >
        {'<'}
      </button>
            {[0, 1, 2].map((pageIndex) => (
                <button
                    key={pageIndex}
                    id={`pag${pageIndex}`}
                    className={activePage === pageIndex ? 'pag-active' : ''}
                    onClick={() => handlePageClick(pageIndex)}
                >
          {pageIndex + 1}
        </button>
            ))}
            <button
                id="pag>"
                style={{ display: activePage === items.length - 1 ? 'none' : 'initial' }}
                onClick={handleNextPage}
            >
        {'>'}
      </button>
            </div>
        </div>
    );
};

export default PaginationExample;
