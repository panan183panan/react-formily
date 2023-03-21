import React from 'react';
import { createForm } from '@formily/core';
import { Field } from '@formily/react';
import {
  Form,
  FormItem,
  Input,
  Password,
  Submit,
  FormButtonGroup,
} from '@formily/antd';
import { Card } from 'antd';
import './app.css';

const form = createForm({
  validateFirst: true,
});

const getForm = (e: any) => {
  let { username, email, password } = e;
  console.log(username, email, password);
};

export default () => {
  return (
    <div className="container" >
      <Card className="card">
        <Form
          form={form}
          labelCol={5}
          wrapperCol={16}
          onAutoSubmit={getForm}
        >
          <Field
            name="username"
            title=" 用户名"
            required
            decorator={[FormItem]}
            component={[Input]}
          />
          <Field
            name="email"
            title="邮箱"
            required
            validator="email"
            decorator={[FormItem]}
            component={[Input]}
          />
          <Field
            name="password"
            title="新密码"
            required
            decorator={[FormItem]}
            component={[
              Password,
              {
                checkStrength: true,
              },
            ]}
            reactions={(field: any) => {
              const confirm = field.query('.confirm_password');
              field.selfErrors =
                confirm.get('value') &&
                  field.value &&
                  field.value !== confirm.get('value')
                  ? 'Confirm that the password does not match'
                  : '';
            }}
          />
          <Field
            name="confirm_password"
            title="确认密码"
            required
            decorator={[FormItem]}
            component={[
              Password,
              {
                checkStrength: true,
              },
            ]}
            reactions={(field: any) => {
              const confirm = field.query('.password');
              field.selfErrors =
                confirm.get('value') &&
                  field.value &&
                  field.value !== confirm.get('value')
                  ? 'Confirm that the password does not match'
                  : '';
            }}
          />
          <FormButtonGroup.FormItem>
            <Submit block size="large">
              Register
            </Submit>
          </FormButtonGroup.FormItem>
        </Form>
      </Card>
    </div>
  );
};