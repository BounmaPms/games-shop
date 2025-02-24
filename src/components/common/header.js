import React from "react";

import { Menu } from 'antd';

function AppHeader() {
    return (
        <div className="container-fluid">
            <div className="header">
                <div className="logo">
                </div>

                <Menu mode="horizontal" defaultSelectedKeys={['home']}>
                <Menu.Item key="home">ໜ້າຫຼັກ</Menu.Item>
                <Menu.Item key="explore">ສຳຫຼວດ</Menu.Item>
                <Menu.Item key="about">ກ່ຽວກັບ</Menu.Item>
                </Menu>
            </div>
        </div>

    );
}
export default AppHeader;