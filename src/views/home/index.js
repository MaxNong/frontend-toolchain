import React from 'react'
import { Row, Col, Card } from 'antd';
import './index.scss'
import { Typography } from 'antd';
import { Link } from 'react-router-dom'

const { Title } = Typography;

const Home = () => {
	return (
		<div className='home-page'>
			<Row gutter={16} className='tp-title'>
				<Col span={11} offset={1}>
					<Title>前端工具链</Title>
				</Col>
			</Row>
			<Row gutter={16}>
				<Col span={11} offset={1}>
					<Link to='/generateDts'>
						<Card title="生成DTS" className='card-bg' bordered={true}>通过mock系统的api地址，生成接口数据的DTS的定义</Card>
					</Link>
				</Col>
			</Row>
		</div>
	)
}

export default Home