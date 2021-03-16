import React from 'react'
import {Row, Col, Layout, Typography, Button} from 'antd'
import './Sections/Navbar.css'

function NavBar(props) {

    return (
        <nav className="menu" style={{ position: 'fixed', zIndex: 5, width: '100%' }}>

            <Row className="menu__container">
                <Col span={6} className="item">
                    <Button className="button"  href="/introduce">공모전 소개</Button>
                </Col>
                <Col span={6} className="item">
                    <Button className="button"  href="/member">팀원 구하기</Button>
                </Col>
                <Col span={6} className="item">
                    <Button className="button"  href="/team">팀 구하기</Button>
                </Col>
                <Col span={6} className="item">
                    <Button className="button"  >건의사항</Button>
                </Col>
            </Row>
        </nav>
    )
}

export default NavBar
