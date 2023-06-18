import React, { useState } from 'react';
import { Menu, Dropdown} from 'antd';
import {FaBars, FaNewspaper, FaMoneyBill, FaHeartbeat, FaRobot, FaGlobe, FaFutbol, FaFilm, FaPalette, FaCalendarAlt, FaSearch}
    from 'react-icons/fa';

import './header.css';

const MenuItem = ({ title, icon: Icon, subitems }) => {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    if (subitems) {
        const submenu = (
            <Menu className="submenu">
                {subitems.map((subitem) => (
                    <MenuItem key={subitem.id} title={subitem.title} icon={subitem.icon} subitems={subitem.subitems} />
                ))}
            </Menu>
        );

        return (
            <Menu.Item
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={hovered ? 'hovered-item' : ''}
            >
                <Dropdown overlay={submenu} placement="bottomLeft" arrow>
          <span className="dropdown-link">
            {Icon && <Icon />}
             <span>{title}</span>
          </span>
                </Dropdown>
            </Menu.Item>
        );
    }

    return (
        <Menu.Item>
            {Icon && <Icon />}
            {title}
        </Menu.Item>
    );
};

const Header = () => {
    const menuData = [
        {
            title: 'DANH MỤC',
            icon: FaBars,
            subitems: [
                {
                    title: 'Trang chủ 24h',
                },
                {
                    title: 'Tin tức trong ngày',
                    subitems: [
                        {
                            title: 'Chính trị - Xã hội',
                        },
                        {
                            title: 'Đời sống - Dân sinh',
                        },
                        {
                            title: 'Giao thông - Đô thị',
                        },
                    ],
                },
                // ...
            ],
        },
        {
            title: 'TIN TỨC',
            icon: FaNewspaper,
            subitems: [
                {
                    title: 'Tin tức trong ngày',
                },
                {
                    title: 'Tin nhanh',
                },
                {
                    title: 'Tin mới',
                },
                // Các mục con khác
            ],
        },
        {
            title: 'BÓNG ĐÁ',
            icon: FaFutbol,
            subitems: [
                {
                    title: 'Tin tức trong ngày',
                },
                {
                    title: 'Tin nhanh',
                },
                {
                    title: 'Tin mới',
                },
            ],
        },
        {
            title: 'KINH DOANH',
            icon: FaMoneyBill,
            subitems: []
        },
        {
            title: 'SỨC KHỎE',
            icon: FaHeartbeat,
            subitems: []
        },
        {
            title: 'HI-TECH',
            icon: FaRobot,
            subitems: []
        },
        {
            title: 'THẾ GIỚI',
            icon: FaGlobe,
            subitems: []
        },
        {
            title: 'THỂ THAO',
            icon: FaFutbol,
            subitems: []
        },
        {
            title: 'GIẢI TRÍ',
            icon: FaFilm,
            subitems: []
        },
        {
            title: 'PHÁI ĐẸP',
            icon: FaPalette,
            subitems: []
        },
        {
            title: 'XEM LỊCH',
            icon: FaCalendarAlt,
            subitems: []
        },
    ];

    return (
        <header className="headerContent">
            <div className="header">
                <div className="logo">
                    <img src="./images/logo.png" alt="Logo" />
                </div>
                <nav className="nav-container">
                    <Menu mode="horizontal" theme="dark" className="nav-menu">
                        {menuData.map((item) => (
                            <MenuItem key={item.title}  title={item.title} icon={item.icon} subitems={item.subitems} />
                        ))}

                    </Menu>
                    <div className="search-container">
                        <FaSearch className="search-icon" />
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
