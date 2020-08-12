import React, {Component} from 'react';
import './myProfile.less';

class MyProfile extends Component {
  constructor(props){
    super(props);
    this.state={
        name:"",
        description:"",
        gender: "",
        chosen: ['Agender', 'Male', 'Female', 'Other'],
        check: false
    } 
  }

  handleDescriptionChange = event =>{
    this.setState({
      description: event.target.value,
    })
  }

  handleNameChange = event =>{
      this.setState({
          name: event.target.value
      })
  }

  handleGenderChange = event =>{
    this.setState({
      gender: event.target.value
    })
  }

  handleCheckChange = event =>{
    this.setState({
      check: !this.state.check
    })
  }

  checkin = ()=>{
    return this.state.check && this.state.name.length !==0 && this.state.description.length !== 0
  }

  getButtonCss(){
    return this.checkin() ? "submitbtn" : "btndisabled"
  }


  render() {
    return (
      <form onSubmit={this.checkDefault}>
        <h1>My Profile</h1>
        <div>
            <p>Name</p>
            <input type="text" value={this.state.name} onChange={this.handleNameChange} placeholder="Your name" />
        </div>
        <div>
            <p>Gender</p>
            <select  name="gender" value={this.state.gender} onChange={this.handleGenderChange} >
              {
                this.state.chosen.map(genger=>{
                  return <option key={genger}>{genger}</option>
                })
              }
            </select>
        </div>
        <div>
            <p>Description</p>
            <textarea value={this.state.description} onChange={this.handleDescriptionChange} rows="5" />
        </div>
        <div>
          <p className="info"><input type="checkbox"  className="checktrem" onChange={this.handleCheckChange}/> I have read the terms of conduct</p>
        </div>
        <div>
          <input type="button" value="Submit" className={this.getButtonCss()} disabled={!this.checkin() === true}/>  
        </div>
      </form>
    );
  }
}

export default MyProfile;


