import React from 'react'
import { createForm } from '@formily/core'
import { Field } from '@formily/react'
import { Form, FormItem, Input, Password, Submit } from '@formily/antd'
import { Tabs, Card } from 'antd'
import { UserOutlined, LockOutlined, PhoneOutlined } from '@ant-design/icons'
import { VerifyCode } from './VerifyCode'
import './app.css'

const normalForm = createForm({
  validateFirst: true,
})

const phoneForm = createForm({
  validateFirst: true,
})

export default()=>{
  return (
    <div className='container' >
      <Card style={{ width: 400}}>
        <Tabs style={{ overflow: 'visible', marginTop: -10 }}>
          <Tabs.TabPane key="1" tab="账号密码">
            <Form
              form={normalForm}
              layout="vertical"
              size="large"
              onAutoSubmit={console.log}
            >
              <Field
                name="username"
                title="用户名"
                required
                decorator={[FormItem]}
                component={[
                  Input,
                  {
                    prefix: <UserOutlined />,
                  },
                ]}
              />
              <Field
                name="password"
                title="密码"
                required
                decorator={[FormItem]}
                component={[
                  Password,
                  {
                    prefix: <LockOutlined />,
                  },
                ]}
              />
              <Submit block size="large">
                Log in
              </Submit>
            </Form>
          </Tabs.TabPane>
          <Tabs.TabPane key="2" tab="手机验证码">
            <Form
              form={phoneForm}
              layout="vertical"
              size="large"
              onAutoSubmit={console.log}
            >
              <Field
                name="phone"
                title="手机号码"
                required
                validator="phone"
                decorator={[FormItem]}
                component={[
                  Input,
                  {
                    prefix: <PhoneOutlined />,
                  },
                ]}
              />
              <Field
                name="verifyCode"
                title="验证码"
                required
                reactions={(field) => {
                  const phone = field.query('.phone')
                  field.setComponentProps({
                    readyPost: phone.get('valid') && phone.get('value'),
                    phoneNumber: phone.get('value'),
                  })
                }}
                decorator={[FormItem]}
                component={[
                  VerifyCode,
                  {
                    prefix: <LockOutlined />,
                  },
                ]}
              />
              <Submit block size="large">
                Log in
              </Submit>
            </Form>
          </Tabs.TabPane>
        </Tabs>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <a href="#Sign up">注册</a>
          <a href="#Forgot password">忘记密码?</a>
        </div>
      </Card>
    </div>
  )
}