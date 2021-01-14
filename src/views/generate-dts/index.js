import React, { useEffect, useState } from 'react'
import { Form, Button, Input, PageHeader, Row, Col } from 'antd'
import './index.scss'
import { getDTS } from '../../http/api'
const { TextArea } = Input;


const goBack = (props) => {
	const { history } = props
	history.goBack()
}

const GenerateDTS = (props) => {
	const [dts, setDts] = useState('')
	const onFinish = (values) => {
		const { url } = values
		const params = { url }
		getDTS(params).then(res => {
			if(res.code == 1) {
				const resData = res.data
				const dts = resData.dts
			    setDts(dts)
			}
		})
	}
	return (
		<div className='generate-page'>
			<PageHeader
				onBack={() => goBack(props)}
				title="返回列表"
				subTitle=""
			/>
			<Row >
				<Col span={12} offset={6}>
					<Form
						layout="inline"
						onFinish={(values) => onFinish(values)}
					>
						<Form.Item name="url" label="api地址" rules={[{ required: true, message: '请输入api地址' }]}>
							<Input className='input-in' />
						</Form.Item>
						<Form.Item>
							<Button type="primary" htmlType="submit">生成</Button>
						</Form.Item>
					</Form>
					<TextArea
						className='text-box'
						placeholder="请先输入api地址，然后点击生成..."
						autoSize={{ minRows: 2, maxRows: 6 }}
						value={dts}
					/>
				</Col>
			</Row>
		</div>
	)
}

export default GenerateDTS