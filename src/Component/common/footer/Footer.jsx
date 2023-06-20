import React from 'react';
import { Row, Col } from 'antd';
import './footer.css'
const Footer = () => {
    return (
        <footer className="footer">
            <Row gutter={16}>
                <Col span={6}>
                    <div className="footer-column">
                        <h4 className="footer-column-title">Tin tức</h4>
                        <ul className="footer-column-list">
                            <li className="footer-column-item">Chính trị - Xã hội</li>
                            <li className="footer-column-item">Tin TP Hồ Chí Minh</li>
                            <li className="footer-column-item">Bóng đá</li>
                            <li className="footer-column-item">Thời trang</li>
                            <li className="footer-column-item">Pháp luật</li>
                            <li className="footer-column-item">Hi-tech</li>
                            <li className="footer-column-item">Kinh doanh</li>
                            <li className="footer-column-item">Sức khỏe</li>
                        </ul>
                    </div>
                </Col>
                <Col span={4}>
                    <div className="footer-column">
                        <h4 className="footer-column-title">Giới thiệu</h4>
                        <ul className="footer-column-list">
                            <li className="footer-column-item">Về chúng tôi</li>
                            <li className="footer-column-item">Góp ý</li>
                            <li className="footer-column-item">Đầu trang</li>
                            <li className="footer-column-item">Liên hệ</li>
                        </ul>
                    </div>
                </Col>
                <Col span={4}>
                    <div className="footer-column">
                        <h4 className="footer-column-title">Quảng cáo</h4>
                        <ul className="footer-column-list">
                            <li className="footer-column-item">LIÊN HỆ QUẢNG CÁO</li>
                        </ul>
                    </div>
                </Col>
                <Col span={9}>
                    <div className="footer-column">
                        <h4 className="footer-column-title">Cơ quan chủ quản</h4>
                        <ul className="footer-column-list">
                            <li className="footer-column-item">Công ty Cổ phần Quảng cáo Trực tuyến 24H</li>
                            <li className="footer-column-item">Trụ sở: Tầng 12, Tòa nhà Geleximco, 36 Hoàng Cầu, Phường Ô Chợ Dừa, Quận Đống Đa, TP Hà Nội</li>
                            <li className="footer-column-item">Tel: (84-24) 73 00 24 24 hoặc (84-24) 3512 1806</li>
                            <li className="footer-column-item">Fax: (84-24) 3512 1804</li>
                            <li className="footer-column-item">Chi nhánh: Tầng 7, Tòa nhà Việt Úc, 402 Nguyễn Thị Minh Khai, Phường 5, Quận 3, TP. Hồ Chí Minh</li>
                            <li className="footer-column-item">Tel: (84-28) 7300 2424</li>
                        </ul>
                    </div>
                </Col>
            </Row>
            <div className="footer-bottom">
                <p className="footer-bottom-text">Giấy phép số 332/GP – TT ĐT ngày cấp 22/01/2018 SỞ THÔNG TIN VÀ TRUYỀN THÔNG HÀ NỘI</p>
                <p className="footer-bottom-text">Chịu trách nhiệm quản lý nội dung: Phan Minh Tâm</p>
                <p className="footer-bottom-text">HOTLINE: 0965 08 24 24</p>
            </div>
        </footer>
    );
};

export default Footer;
