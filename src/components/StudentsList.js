import React, { Component } from 'react';
import Tags from './Tags';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import '../App.css';
import { Collapse, Icon } from 'antd';
import { Card,Avatar,Row,Col } from 'antd';

const { Panel } = Collapse;


function callback(key) {
  // console.log(key);
}


class StudentsList extends Component {
  state = {
    expandIconPosition: 'right',
 
  };

  onPositionChange = expandIconPosition => {
    this.setState({ expandIconPosition });
  };
  
  render(){
    const { 
      id,
      pic,
      firstName,
      lastName,       
      email,
      company,
      skill,
      grades,
      }=this.props.student 

    const averageGrade =grades.reduce((a,b) => parseInt(a,10) + parseInt(b,10), 0) / grades.length

      return(
        <div style={{ background: '#ECECEC' }} key={id}>
          <Card bordered={true}> 
            <Row>
              <Col span={4}>
                <div className='student-avatar'>
                  <Avatar size={70} src={pic}/> 
                </div>
              </Col>
              <Col span={18}>
                <div  className='student-details'>
                    <p className='student-name'>{firstName} {lastName}</p>
                    <p>Email: {email}</p>
                    <p>Company: {company}</p>
                    <p>Skill: {skill}</p>
                    <p>Average: {averageGrade}%</p> 
                  <Collapse
                    onChange={callback}
                    expandIconPosition={this.state.expandIconPosition}
                    expandIcon={({ isActive }) => <Icon type="plus" rotate={isActive ? 90 : 0} />}
                    >
                    <Panel>
                      {grades.map((grade,i)=>(
                          <p>Test{i+1}:  {grade}</p>
                        ))}
                      <Tags 
                        studentId={id}
                      />
                    </Panel>
                  </Collapse>
                </div>
                 
              </Col>
            </Row>                   
        </Card>
      </div>  
      )
    }
   
  }  

  const mapStateToProps = (state) => {
    return {
      initialData: state.students,      
    } 
  }

  export default StudentsList=connect(mapStateToProps,null)(StudentsList)

