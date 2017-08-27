import React, { Component } from 'react'
import { Link } from 'react-router'

import {
     Form, message ,Input, Button, Card,  
} from 'antd'

const FormItem = Form.Item

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }

    regist(user){
        const { router } = this.props
        /*Api.checkCode(user).then((res) => {
            if(res.code === 200){
                router.push('/registSecond')
            }else {
                message.error(res.msg)
            }
        })*/
    }

    sendEmail(){
        const email = this.props.form.getFieldValue("email")
        console.log(email)
        /*Api.sendmail(email).then((res) => {
            if(res.code === 200){
               console.log(res)
            }
        })*/
    }

    submit(e){
        e.preventDefault()
        const { router } = this.props
        const data = this.props.form.getFieldsValue()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                /*Api.checkCode(data).then((res) => {
                    if(res.code === 200){
                        router.push('/registSecond')
                    }else {
                        message.error(res.msg)
                    }
                })*/
            }
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form
        console.log("this",this.props.form)
        return(
                <div key="1" className="absolute-middle" style={{ width: 400, height: 400 }}>
                    <div style={{fontSize:"20px",textAlign:"center",paddingBottom:"10px"}}>
                    斑马私募基金管理
                    </div>
                    <Card title="注册">
                        <Form className="login-form" onSubmit={this.submit.bind(this)}>
                            <FormItem label="请输入您的邮箱账号">
                                {getFieldDecorator('email', {
                                    rules: [{ required: true, message: '请输入您的邮箱账号!' }],
                                })(
                                    <Input placeholder="请输入您的邮箱账号"/>
                                )}
                                <Button style={{position:"absolute",right:"4px",top:"4px",height:"28px",padding:"0 4px"}} onClick={this.sendEmail.bind(this)}>发送邮件</Button>
                            </FormItem>
                            <FormItem label="请输入邮箱里的验证码">
                                {getFieldDecorator('code', {
                                    rules: [{ required: true, message: '请输入邮箱里的验证码!' }],
                                })(
                                    <Input type="code" placeholder="请输入邮箱里的验证码"/>
                                )}
                            </FormItem>
                            <FormItem>
                                <Button style={{width: '100%'}} type="primary" htmlType="submit" className="login-form-button">
                                下一步
                                </Button>
                            </FormItem>
                        </Form>
                    </Card>
                    <div style={{textAlign:"center"}}>
                        <Link to="login">登录</Link>
                    </div>
                </div>
            )
    }
}
App = Form.create()(App)
export default App;