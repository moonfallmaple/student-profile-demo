import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTags, removeTags } from '../actions';
import { Tag, Input, Icon } from 'antd';
import 'antd/dist/antd.css';
import '../App.css';


class Tags extends Component {
  state = {
    tags:[],
    inputVisible: false,
    inputValue: '',
  };
  handleInputChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleInputConfirm = () => {

    const { inputValue,tags } = this.state;
    const id=this.props.studentId

    if (inputValue && tags.indexOf(inputValue) === -1) {

      this.props.dispatch(addTags({
        inputValue,
        id
       }))

      this.setState({
        tags:[...tags,inputValue],
        inputVisible: false,
        inputValue: '',
      });  
    }
  };

  handleClose = removedTag => {
    const tags = this.state.tags.filter(tag => tag !== removedTag);
    const id=this.props.studentId
    this.setState({ 
      tags 
    });
    this.props.dispatch(removeTags(removedTag,id))
  };

  showInput = () => {
    this.setState({ inputVisible: true }, () => this.input.focus());
  };

  saveInputRef = input => (this.input = input);

  render() {
    const { inputVisible, inputValue}=this.state
    const tags=this.props.tags
    const id=this.props.studentId
    const tagChild = tags.map(tag=>
                    (<span key={tag} style={{ display: 'inline-block' }}>
                      <Tag
                          closable
                          onClose={e => {
                            e.preventDefault();
                            this.handleClose(tag);
                          }}
                        >
                        {tag}
                      </Tag>
                      </span>)
                    )
  
    return (
      <div key={ id }>
        <div style={{ marginBottom: 16 }}>        
            {tagChild}
        </div>
        {inputVisible && (
          <Input
            ref={this.saveInputRef}
            type="text"
            size="small"
            style={{ width: 100 }}
            value={inputValue}
            onChange={this.handleInputChange}
            onBlur={this.handleInputConfirm}
            onPressEnter={this.handleInputConfirm}
          />
        )}
        {!inputVisible && (
          <div onClick={this.showInput} style={{ background: '#fff', width: 100 , borderBlockEnd: 'solid' }}>
            <Icon type="plus" /> Add Tag
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state,ownProps) => {
  // console.log('props info',state.students['1'])
  // console.log('id info',ownProps.studentId)
  return {
    tags:state.students[ownProps.studentId].tags  
  } 
}


export default Tags=connect(mapStateToProps,null)(Tags)


