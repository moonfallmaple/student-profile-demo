import React, {Component} from 'react';
import { connect } from 'react-redux';
import StudentsList from './components/StudentsList';
import {StoreIniData} from './actions';
import './App.css';
import axios from 'axios';



class App extends Component {
  
  state = {
      FormatData:{},
      isLoading: true,
      error: null,
      queryName:'',
      queryTag: '', 
      queryData:[],
  }

  handleQuerySearch=(event)=>{
    event.preventDefault()
    this.setState(
      {[event.target.name]:event.target.value}
    )
    const string=event.target.value

    let updatedList = this.props.initialData;

    if (event.target.name === 'queryName' && string !==0) {    
      console.log('event.target.value',string)
        updatedList = Object.values(updatedList).filter(       
          function(student){
            return (student.firstName.toLowerCase()).search(string.toLowerCase()) !== -1 || 
                 (student.lastName.toLowerCase()).search(string.toLowerCase()) !== -1                  
      })

      this.setState({queryData: updatedList});
      console.log('queryData',this.state.queryData)
    }

    if ( event.target.name === 'queryTag' && string !==0) {    
      updatedList = Object.values(updatedList).filter(
        function(student){
          return (student.tags.join().toLowerCase()).search(string.toLowerCase())!== -1                 
    })
    this.setState({queryData: updatedList});
  }
    
}
 
  componentDidMount(){
    axios.get("https://www.hatchways.io/api/assessment/students")
    .then(res => {
      const data=res.data['students']
      const addTagsToEach=data.map((each)=> Object.assign({}, each, { tags : []}))
      const objectData= this.formatData(addTagsToEach)   

      this.setState({
        FormatData:objectData,
        isLoading:false
      })
      return objectData
    })
    .then(objectData=>this.props.dispatch(StoreIniData(objectData)))
}

  formatData(arr){
    let obj={}
    for(let each of arr){
      obj[each.id]=each
    }
    return obj  
  }


  render(){
    
    const { error,queryTag,queryName,queryData} = this.state;
    const initialData=this.props.initialData

    if(error){
      return error.message
    }          
    if(!initialData){
      return (
        <h3>Loading...</h3> 
      ) 
    }else{
      return (
        <div>
          <div className="search-student">
            <div className="search-bar">
            <div className="search-input-wrapper">
                <input
                    type="text"
                    name="queryName"
                    placeholder="Search by name"
                    onChange={this.handleQuerySearch}
                    value={queryName}
                />
                </div>

                <div className="search-input-wrapper">
                <input
                    type="text"
                    name="queryTag"
                    placeholder="Search by Tag"
                    onChange={this.handleQuerySearch}
                    value={queryTag}
                />
              </div>  
            </div>
        </div>
          <div className="student-list">             
            {
              (queryName.length===0 && queryTag.length===0)?
                Object.values(initialData).map((student,index)=>
                  <StudentsList 
                    student={student} 
                    key={index}
                    />)
                    :
                  Object.values(queryData).map((student,index)=>
                  <StudentsList 
                    student={student} 
                    key={index}
                    />)
            }
          </div>         
      </div>
      ) 
    }  
  }  
}

const mapStateToProps = (state) => {
  return {
    initialData: state.students,  
  }
}


export default App=connect(mapStateToProps,null)(App)



