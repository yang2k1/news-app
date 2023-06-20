import React, { useState } from 'react';
import './forWoman.css'
function ForWoman() {
    const [activePage, setActivePage] = useState(0);

    const handlePageClick = (pageIndex) => {
        setActivePage(pageIndex);
    };

    const handlePreviousPage = () => {
        setActivePage((prevPage) => prevPage - 1);
    };

    const handleNextPage = () => {
        setActivePage((prevPage) => prevPage + 1);
    };

    return (
        <div className="danh-cho-phai-dep">
            <div className="widget">
                <h2 id="chungkhoan-title" className="widget-title" style={{ color: 'palevioletred', borderColor: 'palevioletred' }}>
                    <img src="//cdn.24h.com.vn/images/icon_topck.png" alt="" />
                    <a href="/tin-chung-khoan-c566.html" title="" className="title bld">Dành riêng cho phái đẹp</a>
                </h2>
                <div id="widget-page0" style={{ display: activePage === 0 ? 'block' : 'none' }}>
                    <li className="post-content">
                        <img src="https://image.eva.vn/upload/1-2022/images/2022-01-06/large/gt0601-j01-ava1-1641487040-520-width640height480.jpg" alt="" />
                        <a className="post-content-right" href="https://www.24h.com.vn/doanh-nghiep/manulife-viet-nam-dan-dau-danh-sach-noi-lam-viec-tot-nhat-trong-nganh-bao-hiem-nho-don-nhan-van-hoa-chuyen-doi-c849a1322343.html" title="Manulife Việt Nam dẫn đầu danh sách 'Nơi làm việc tốt nhất' trong ngành bảo hiểm nhờ đón nhận văn hóa chuyển đổi">
                            Siêu mẫu Minh Tú từng có quan hệ với những ai trước khi công khai bạn...
                        </a>
                    </li>
                    <ul className="pink-dot">
                        <li>
                            <a href="https://eva.vn/suc-khoe/ban-trai-dung-nuoc-hoa-kich-thich-chuyen-ay-ai-ngo-khien-ban-gai-5-lan-7-luot-di-vien-c131a503336.html">
                                Người đàn ông dùng nước hoa kích dục, ai ngờ khiến người yêu phải 5 lần 7 lượt đi viện
                            </a>
                        </li>
                        <li>
                            <a href="https://eva.vn/suc-khoe/ban-trai-dung-nuoc-hoa-kich-thich-chuyen-ay-ai-ngo-khien-ban-gai-5-lan-7-luot-di-vien-c131a503336.html">
                                Con trai hỏi "khi quan hệ thấy thế nào?" mẹ đáp vô cùng hài hước, truyền cho bé bài học cuộc sống
                            </a>
                        </li>
                        <li>
                            <a href="https://eva.vn/suc-khoe/khi-quan-he-thay-the-nao-me-dap-con-trai-cao-ni-o-cuoi-mua-thu-nam-chu-4-c131a503324.html">
                                Khi quan hệ thấy thế nào? Mẹ đáp con trai cảo ni ố cười, mùa thu năm chú 4
                            </a>
                        </li>
                    </ul>
                </div>
                <div id="widget-page1" style={{ display: activePage === 1 ? 'block' : 'none' }}>
                    <li className="post-content">
                        <img src="https://image.eva.vn/upload/1-2022/images/2022-01-06/large/gt0601-j01-ava1-1641487040-520-width640height480.jpg" alt="" />
                        <a className="post-content-right" href="https://www.24h.com.vn/doanh-nghiep/manulife-viet-nam-dan-dau-danh-sach-noi-lam-viec-tot-nhat-trong-nganh-bao-hiem-nho-don-nhan-van-hoa-chuyen-doi-c849a1322343.html" title="Manulife Việt Nam dẫn đầu danh sách 'Nơi làm việc tốt nhất' trong ngành bảo hiểm nhờ đón nhận văn hóa chuyển đổi">
                            Siêu mẫu Minh Tú từng có quan hệ với những ai trước khi công khai bạn...
                        </a>
                    </li>
                    <ul className="pink-dot">
                        <li>
                            <a href="https://eva.vn/suc-khoe/ban-trai-dung-nuoc-hoa-kich-thich-chuyen-ay-ai-ngo-khien-ban-gai-5-lan-7-luot-di-vien-c131a503336.html">
                                Người đàn ông dùng nước hoa kích dục, ai ngờ khiến người yêu phải 5 lần 7 lượt đi viện
                            </a>
                        </li>
                        <li>
                            <a href="https://eva.vn/suc-khoe/ban-trai-dung-nuoc-hoa-kich-thich-chuyen-ay-ai-ngo-khien-ban-gai-5-lan-7-luot-di-vien-c131a503336.html">
                                Con trai hỏi "khi quan hệ thấy thế nào?" mẹ đáp vô cùng hài hước, truyền cho bé bài học cuộc sống
                            </a>
                        </li>
                        <li>
                            <a href="https://eva.vn/suc-khoe/khi-quan-he-thay-the-nao-me-dap-con-trai-cao-ni-o-cuoi-mua-thu-nam-chu-4-c131a503324.html">
                                Khi quan hệ thấy thế nào? Mẹ đáp con trai cảo ni ố cười, mùa thu năm chú 4
                            </a>
                        </li>
                    </ul>
                </div>
                <div id="widget-page2" style={{ display: activePage === 2 ? 'block' : 'none' }}>
                    <li className="post-content">
                        <img src="https://image.eva.vn/upload/1-2022/images/2022-01-06/large/gt0601-j01-ava1-1641487040-520-width640height480.jpg" alt="" />
                        <a className="post-content-right" href="https://www.24h.com.vn/doanh-nghiep/manulife-viet-nam-dan-dau-danh-sach-noi-lam-viec-tot-nhat-trong-nganh-bao-hiem-nho-don-nhan-van-hoa-chuyen-doi-c849a1322343.html" title="Manulife Việt Nam dẫn đầu danh sách 'Nơi làm việc tốt nhất' trong ngành bảo hiểm nhờ đón nhận văn hóa chuyển đổi">
                            Siêu mẫu Minh Tú từng có quan hệ với những ai trước khi công khai bạn...
                        </a>
                    </li>
                    <ul className="pink-dot">
                        <li>
                            <a href="https://eva.vn/suc-khoe/ban-trai-dung-nuoc-hoa-kich-thich-chuyen-ay-ai-ngo-khien-ban-gai-5-lan-7-luot-di-vien-c131a503336.html">
                                Người đàn ông dùng nước hoa kích dục, ai ngờ khiến người yêu phải 5 lần 7 lượt đi viện
                            </a>
                        </li>
                        <li>
                            <a href="https://eva.vn/suc-khoe/ban-trai-dung-nuoc-hoa-kich-thich-chuyen-ay-ai-ngo-khien-ban-gai-5-lan-7-luot-di-vien-c131a503336.html">
                                Con trai hỏi "khi quan hệ thấy thế nào?" mẹ đáp vô cùng hài hước, truyền cho bé bài học cuộc sống
                            </a>
                        </li>
                        <li>
                            <a href="https://eva.vn/suc-khoe/khi-quan-he-thay-the-nao-me-dap-con-trai-cao-ni-o-cuoi-mua-thu-nam-chu-4-c131a503324.html">
                                Khi quan hệ thấy thế nào? Mẹ đáp con trai cảo ni ố cười, mùa thu năm chú 4
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="pagination">
          <span
              id="pag<"
              style={{ display: activePage === 0 ? 'none' : 'initial' }}
              onClick={handlePreviousPage}
          >
            {'<'}
          </span>
                    {[0, 1, 2].map((pageIndex) => (
                        <span
                            key={pageIndex}
                            id={`pag${pageIndex}`}
                            className={activePage === pageIndex ? 'pag-active' : ''}
                            onClick={() => handlePageClick(pageIndex)}
                        >
              {pageIndex + 1}
            </span>
                    ))}
                    <span
                        id="pag>"
                        style={{ display: activePage === 2 ? 'none' : 'initial' }}
                        onClick={handleNextPage}
                    >
            {'>'}
          </span>
                </div>
            </div>
        </div>
    );
}

export default ForWoman;
