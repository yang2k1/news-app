import React from 'react';
import './stockInfor.css'

function StockInfor() {
    return (
        <div className="widget">
            <h2 id="chungkhoan-title" className="widget-title">
                <img src="//cdn.24h.com.vn/images/icon_topck.png" alt="" />
                <a href="/tin-chung-khoan-c566.html" title="" className="title bld">
                    THÔNG TIN CHỨNG KHOÁN
                </a>
            </h2>
            <table className="chungkhoan-table">
                <tr>
                    <th>
                        <a href="https://www.24h.com.vn/tin-chung-khoan-c566.html?id_san_ck=10">
                            VN-INDEX
                        </a>
                    </th>
                    <td>
                        <a href="https://www.24h.com.vn/tin-chung-khoan-c566.html?id_san_ck=10">
                            1528.57
                        </a>
                    </td>
                    <td>
                        <a
                            className="ck-increase"
                            href="https://www.24h.com.vn/tin-chung-khoan-c566.html?id_san_ck=10"
                        >
                            +6.07
                        </a>
                    </td>
                    <td>
                        <a
                            style={{ color: 'green' }}
                            href="https://www.24h.com.vn/tin-chung-khoan-c566.html?id_san_ck=10"
                        >
                            +0.4%
                        </a>
                    </td>
                </tr>
                <tr>
                    <th>
                        <a href="https://www.24h.com.vn/tin-chung-khoan-c566.html?id_san_ck=11">
                            VN30-INDEX
                        </a>
                    </th>
                    <td>
                        <a href="https://www.24h.com.vn/tin-chung-khoan-c566.html?id_san_ck=11">
                            1544.95
                        </a>
                    </td>
                    <td>
                        <a
                            className="ck-decrease"
                            href="https://www.24h.com.vn/tin-chung-khoan-c566.html?id_san_ck=11"
                        >
                            -1.06
                        </a>
                    </td>
                    <td>
                        <a
                            style={{ color: 'red' }}
                            href="https://www.24h.com.vn/tin-chung-khoan-c566.html?id_san_ck=11"
                        >
                            -0.07%
                        </a>
                    </td>
                </tr>
                <tr>
                    <th>
                        <a href="https://www.24h.com.vn/tin-chung-khoan-c566.html?id_san_ck=12">
                            HNX-INDEX
                        </a>
                    </th>
                    <td>
                        <a href="https://www.24h.com.vn/tin-chung-khoan-c566.html?id_san_ck=12">
                            484.89
                        </a>
                    </td>
                    <td>
                        <a
                            className="ck-increase"
                            href="https://www.24h.com.vn/tin-chung-khoan-c566.html?id_san_ck=12"
                        >
                            +4.53
                        </a>
                    </td>
                    <td>
                        <a
                            style={{ color: 'green' }}
                            href="https://www.24h.com.vn/tin-chung-khoan-c566.html?id_san_ck=12"
                        >
                            +0.94%
                        </a>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default StockInfor;
