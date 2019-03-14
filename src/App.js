import React, { Component } from 'react';
import './App.css';

class App extends Component {

constructor(props) {
  super(props)
  this.state={
    name:'',
    phone:'',
    inputsShow:false,
  }
  this.handleback=this.handleback.bind(this);
  this.showInputs=this.showInputs.bind(this);
  this.handleNameChange = this.handleNameChange.bind(this);
  this.handlePhoneChange = this.handlePhoneChange.bind(this);
  this.handleDelete = this.handleDelete.bind(this);
  this.handleAdd = this.handleAdd.bind(this);
}
componentDidMount() {
  // Add to the list   ............
    var arrHeader = [];
    arrHeader = ['NAME','PHONE'];

    var contactTable = document.createElement('table');
    contactTable.setAttribute('id','tableId');
    var tr = contactTable.insertRow(-1);

  for(var i=0;i<arrHeader.length;i++) {
    var th = document.createElement('th');
    th.innerHTML = arrHeader[i];
    tr.appendChild(th);
}
  var div = document.getElementById('contactsDiv');
    div.appendChild(contactTable);
}
handleback() {
  this.setState({inputsShow:false,name:'',phone:'',showContacts:true})
}
showInputs() {
this.setState({inputsShow:true,showContacts:false});

}
handleNameChange(event) {

this.setState({name:event.target.value});
}
handlePhoneChange(event) {
  this.setState({phone:event.target.value});
}

 handleDelete(event) {  
   var rowNum = event.target.parentNode.parentNode.rowIndex;
   document.getElementById("tableId").deleteRow(rowNum); //Where 0 is your row.
 
  }
handleAdd(event) {
  event.preventDefault();   // to prevent form submitition

  // get the form values and add to the list
  var x = document.getElementsByClassName('inputs');
  var name = x[0].value;
  var phone = x[1].value;
  if(name==='' || phone==='')
   return;

   // now add new row to the
var conTab = document.getElementById('tableId');
var rowCount = conTab.rows.length;
var tr = conTab.insertRow(rowCount);
  
    var td1 = document.createElement('td');
      td1.innerHTML=name;
      tr.appendChild(td1);

    var td2 = document.createElement('td');
      td2.innerHTML=phone;
      tr.appendChild(td2);

    var td3 = document.createElement('td');

// add button
var btn = document.createElement('input');
  btn.setAttribute('type','button');
  btn.setAttribute('value','DELETE');
  btn.setAttribute('className','myBtn');
  btn.addEventListener("click",this.handleDelete);

  // add style 
  btn.style.color='black';
  btn.style.backgroundColor='#ff4000';
  btn.style.padding='10px';
  btn.style.cursor='pointer';
  btn.style.fontFamily='ABeeZee';
  btn.style.fontSize=18;
  btn.fontWeight='bold';
  btn.style.border='none';
  btn.style.borderRadius='4px';

  td3.appendChild(btn);
  tr.appendChild(td3);

      this.setState({inputsShow:false,name:'',phone:''});
}

  render() {
    const showAdd1 = <button onClick={this.showInputs} className="myBtn" style={{color:'white',backgroundColor:'#4CAF50',marginLeft:'10px', padding:'10px',paddingLeft:20,paddingRight:20}}>
                        ADD 
                      </button>

    const inputs =  <div className='inputsDiv'>
                      <form>
                      <br />
                        <button className="backBtn" onClick={this.handleback}>
                          BACK
                        </button><br/><br/> 
                        <span >Name: </span><br/>
                          <input required onChange={this.handleNameChange} className = "inputs" type="text" name="name" /><br/><br/>
                        <span >Phone: </span><br/>
                          <input onChange={this.handlePhoneChange} className = "inputs" type="tel"  pattern="[1-9]{1}[0-9]{9}" required name="phone"/>

                          <div className="showStates">
                            <br/>
                              <span style={{fontWeight:'bold'}}>
                                Subscriber to be added:
                              </span><br/>
                            <span>Name:{this.state.name}</span><br/> 
                            <span>Phone:{this.state.phone}</span> 
                          </div>
                          <br />
                          <div >
                          <button type="submit" onClick={this.handleAdd} className="myBtn" style={{color:'white',backgroundColor:'#4CAF50',padding:'10px',paddingLeft:'15px',paddingRight:'15px'}}>
                            ADD
                          </button>
                          </div>
                        </form>
                    </div>
    return (
      <div className="App">
        <header className="appHeader">
           <p>
           PHONE DIRECTORY
          </p>
        </header>
                  {this.state.inputsShow?inputs:''}
              <div>
                <br />
                {!this.state.inputsShow?showAdd1:'' }            
              </div>
        <br/>  

            <div id='contactsDiv'>
          
            </div>

            <div className="footer">
              <p>  <span style={{opacity:0.7}}>Developed By  </span>Jayprakash Kumar , 
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/jayprakashkumar1"> GitHub Profile , </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jayprakash-kumar-82882b154/"> LinkedIn Profile  </a>
            </p>
        </div>

      </div>
    );
  }
}

export default App;
