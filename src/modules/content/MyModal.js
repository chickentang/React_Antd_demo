import React from 'react';
import action from '../../actions/content';//action中的Index.js是首先加载文件
import {connect} from 'react-redux';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button,Modal } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const residences = [{
  value: '浙江',
  label: '浙江',
  children: [{
    value: '杭州',
    label: '杭州',
    children: [{
      value: '西湖',
      label: '西湖',
    }],
  }],
}, {
  value: '江西',
  label: '江西',
  children: [{
    value: '九江',
    label: '九江',
    children: [{
      value: '庐山',
      label: '庐山',
    }],
  }],
}];
class RegistrationForm extends React.Component {
  //构造函数
  constructor(props) {
      super(props);
      this.handleCancel = this.handleCancel.bind(this);
      this.handleOk = this.handleOk.bind(this);
      this.state = {confirmDirty: false};
      
  }
  //弹窗的确定事件
  handleOk(e) {
      const {dispatch} = this.props;
      e.preventDefault();
      this.props.form.validateFields((errors) => {
          if (errors) {return false;}
          let current = (this.props.form.getFieldsValue());
          let data = this.props.thisModal.data;
          if (this.props.thisModal.current.modalType == "add") {
              dispatch(action.doAdd({current, data}));
          } else if (this.props.thisModal.current.modalType == "modify") {
              current.key = this.props.thisModal.current.key;
              dispatch(action.doModify({current, data}));
          }
          
          dispatch(action.setVisible(false));
          /*dispatch(action.setLoading(true));
          setTimeout(() => {
              dispatch(action.setLoading(false));
              return dispatch(action.setVisible(false));
          }, 1000);*/
      });

  }
  //取消
  handleCancel(e){
    this.props.dispatch(action.setVisible(false));
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    const tailFormItemLayout = {
      wrapperCol: {xs: {span: 14,offset: 0,},sm: {span: 14,offset: 6}}
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select className="icp-selector">
        <Option value="86">+86</Option>
      </Select>
    );
    return (
        <div> <Modal title={this.props.thisModal.current.title}
          visible={this.props.isVisible}
          onOk={this.handleOk}
          confirmLoading={this.props.isLoading}
          onCancel={this.handleCancel}
        >
      <Form className="form-component" >
        
        <FormItem
          {...formItemLayout}
          label="姓名"
          hasFeedback
        >
          {getFieldDecorator('name', {
            initialValue:this.props.thisModal.current.name || "",
            rules: [{ required: true, message: '请输入姓名!' }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="邮箱"
          hasFeedback
        >
          {getFieldDecorator('email', {
            initialValue:this.props.thisModal.current.email || "",
            rules: [{
              type: 'email', message: '邮件格式不正确!',
            }, {
              required: true, message: '请输入邮箱地址!',
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="手机"
        >
          {getFieldDecorator('phone', {
            initialValue:this.props.thisModal.current.phone || "",
            rules: [{ required: true, message: '请输入手机号!' }],
          })(
            <Input addonBefore={prefixSelector} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="地址"
        >
          {getFieldDecorator('residence', {
            initialValue: this.props.thisModal.current.residence || [],
            rules: [{ type: 'array', required: true, message: '请选择!' }],
          })(
            <Cascader options={residences} />
          )}
        </FormItem>
        
      </Form>
      </Modal>
    </div>
    );
  }
}
//创建Form组件并绑定表单元素
const MyModal = Form.create({
      onFieldsChange(props, field) {
      },
      mapPropsToFields(props) {
        return {thisModal:props.thisModal,isVisible:props.isVisible,isLoading:props.isLoading};
      }
    })(RegistrationForm);
//把State转换成当前的Props
const mapStateToProps = (state)=>{
    return {thisModal:state.thisModal,isVisible:state.isVisible,isLoading:state.isLoading};
}
//Render当前脚本组件
export default connect(mapStateToProps)(MyModal);