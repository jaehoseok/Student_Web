import React from 'react'
import {Row, Col, Layout, Typography, Button} from 'antd'
import './Sections/Navbar.css'

function NavBar(props) {

    return (
        <nav className="menu" style={{ height: "128px" }}>
            <Row className="menu__container">
                <Col span={6} className="item">
                    <a className="button"  href="/introduce">공모전 소개</a>
                </Col>
                <Col span={6} className="item">
                    <a className="button"  href="/member">팀원 구하기</a>
                </Col>
                <Col span={6} className="item">
                    <a className="button"  href="/team">팀 구하기</a>
                </Col>
                <Col span={6} className="item">
                    <a className="button"  href="/team">건의사항</a>
                </Col>
            </Row>
        </nav>
    )
}

export default NavBar
