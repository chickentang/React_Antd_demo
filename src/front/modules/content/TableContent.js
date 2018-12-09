import React from 'react';
import action from 'actions/content';//action中的Index.js是首先加载文件
import {connect} from 'react-redux';
import { Table, Icon } from 'antd';

let  data = [];

//表格组件
class TableContent extends React.Component {
    //构造函数
  constructor(props) {
      super(props);
      this.handleDelete = this.handleDelete.bind(this);
      this.handleModify = this.handleModify.bind(this);
  }
    //删除一条记录
  handleDelete(record){
     this.props.dispatch(action.doDelete({record,data}));
  }
    //修改一条记录
  handleModify (record) {
      record.title = "修改记录";
      record.modalType = "modify";
      let isVisible = true;
     this.props.dispatch(action.setVisible(isVisible));
      let current = record;
     this.props.dispatch(action.showModal({current,data}));
  }
 
  render() {
    const { doHeader } = this.props;
    if(doHeader&& doHeader.list){//填充数据
        for(let i=0;i<doHeader.list.length;i++){
            let bool = false;
            for(let j=0;j<data.length;j++){
                if(data[j].key == doHeader.list[i].key ){
                    bool = true;
                    break;
                }
            }
            if(!bool){
                data.push(doHeader.list[i]);
            }
        }
    }
    const columns = [{
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
          render: text => <a href="javascript:;">{text}</a>,
        }, {
          title: '邮箱',
          dataIndex: 'email',
          key: 'email',
        },  {
          title: '手机',
          dataIndex: 'phone',
          key: 'phone',
        },{
          title: '地址',
          dataIndex: 'address',
          key: 'address',
        }, {
          title: '操作',
          key: 'action',
          render: (text, record) => (
            <span>
              <a href="javascript:;" onClick={()=>this.handleModify(record)} >修改</a>
              <span className="ant-divider" />
              <a href="javascript:;" onClick={()=>this.handleDelete(record)} >删除</a>
            </span>
          ),
        }];
    return (
       <Table columns={columns} dataSource={data} />
    );
  }
}

//基于全局	state	，注入props
//从全局state中传一些参数到当前组件，这个参数在Reduce中定义。
const mapStateToProps = (state)=>{
    return {doHeader:state.doHeader};
}

export default connect(mapStateToProps)(TableContent);