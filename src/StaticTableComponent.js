

import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
 

class DynamicTableComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hideTable: true,
            showTable: false,
            // Employees_data : [
            //     { id: 1, firstname: "manoj", lastname: "v", mail: "manoj@gmail.com", phonenum: 8978909879, qualificarion: "Btech", gender: "male", designation: "developer" },
            //     { id: 2, firstname: "mukesh", lastname: "b", mail: "mukesh@gmail.com", phonenum: 1223455671, qualificarion: "Btech", gender: "male", designation: "developer" },
            //     { id: 3, firstname: "murali", lastname: "w", mail: "murali@gmail.com", phonenum: 1278765322, qualificarion: "Mtech", gender: "male", designation: "tester" },
            //     { id: 4, firstname: "baburao", lastname: "q", mail: "baburao@gmail.com", phonenum: 2345678901, qualificarion: "Btech", gender: "male", designation: "developer" },
            //     { id: 5, firstname: "sowjanya", lastname: "q", mail: "sowjanya@gmail.com", phonenum: 8765432109, qualificarion: "Mtech", gender: "female", designation: "tester" },
            //     { id: 6, firstname: "venkatesh", lastname: "f", mail: "venkatesh@gmail.com", phonenum: 7654321098, qualificarion: "Btech", gender: "male", designation: "tester" },
            //     { id: 7, firstname: "ramya", lastname: "h", mail: "ramya@gmail.com", phonenum: 6543210987, qualificarion: "Mtech", gender: "female", designation: "developer" },
            //     { id: 8, firstname: "chandu", lastname: "h", mail: "chandu@gmail.com", phonenum: 5432109876, qualificarion: "Degree", gender: "male", designation: "tester" },
            //     { id: 9, firstname: "rakesh", lastname: "a", mail: "rakesh@gmail.com", phonenum: 4321098765, qualificarion: "Degree", gender: "male", designation: "developer" },
            //     { id: 10,firstname: "sushank", lastname: "z", mail: "sushank@gmail.com", phonenum: 3210987654, qualificarion: "Degree", gender: "male", designation: "developer" },
            // ],
            id:'',
            firstname: '',
            lastname: '',
            mail: '',
            qualification: '',
            phonenum: '',
            gender: { male: '', female: '', other: '' },
            actions: [
                { label: "Btech" },
                { label: "Mtech" },
                { label: "Degree" }
            ],
            country: '',
            state: '',
            city: '',
            designation: '',

            topic: 'react'
        }
    }
    logout() {
        this.props.history.push('/welcome');
    }
    hideTable() {
        this.setState({ hideTable: false, showTable: true ,
        id:'',
        firstname: '',
        lastname: '',
        mail: '',
        qualification: '',
        phonenum: '',
        gender: '',
        designation: ''});

    }
    showTable() {
        this.setState({ hideTable: true, showTable: false });
    }
    handleIdChange = event => {
        this.setState({
            id: event.target.value
        })
    }

    handleFirstnameChange = event => {
        this.setState({
            firstname: event.target.value
        })
    }

    handleLastnameChange = event => {
        this.setState({
            lastname: event.target.value
        })
    }
    handleEmailChange = event => {
        this.setState({
            mail: event.target.value
        })
    }
    handlePhoneChange = event => {
        
        this.setState({
            phonenum: event.target.value
        })
    }
    handleQualificationChange = event => {
        this.setState({
            qualification: event.target.value
        })
    }
    handleDesignationChange = event => {
        this.setState({
            designation: event.target.value
        })
    }
    handleGenderChange = event => {
        this.setState({
            gender: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        
        // alert(`${this.state.firstname} ${this.state.lastname} ${this.state.phonenum} ${this.state.email} ${this.state.qualification} ${this.state.gender} ${this.state.designation}`)
        const item = {
            id:this.state.id,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            mail: this.state.mail,
            qualification: this.state.qualification,
            phonenum: this.state.phonenum,
            gender: this.state.gender,
            designation: this.state.designation,
          };
          this.setState({
            Employees_data: [...this.state.Employees_data, item], hideTable: true, showTable: false 
          });       
    }
    handleUpdate = event => {
        event.preventDefault()
        const updatearr = {
            id : this.state.id,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            mail: this.state.mail,
            qualification: this.state.qualification,
            phonenum: this.state.phonenum,
            gender: this.state.gender,
            designation: this.state.designation,
          };
          this.setState({
            Employees_data: [...this.state.Employees_data, updatearr], hideTable: true, showTable: false 
          });       
    }
    
    render() {
        
        const { id,firstname, lastname, qualification, mail, phonenum, gender, designation } = this.state;
        return (
            <div className="App">
                {this.state.hideTable ?
                    <div className="col-sm-12" style={{ marginTop: '5px', marginLeft: '15%', width: '70%', height: '80px' }}>
                        <div className="container" style={{ marginTop: '5px' }}>
                            <div className="row">
                                <div className="col-sm-10">
                                    <input type="button" value="Back" onClick={this.logout.bind(this)} />
                                </div>
                                <div className="col-sm-2">
                                    <input type="button" value="Add Employee" onClick={this.hideTable.bind(this)} />
                                </div>
                            </div>
                        </div> <br />
                        <TableContainer component={Paper}>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow >
                                        <TableCell>Employee Id</TableCell>
                                        <TableCell align="right">Name</TableCell>
                                        <TableCell align="right">mail</TableCell>
                                        <TableCell align="right">phonenum</TableCell>
                                        <TableCell align="right">Gender</TableCell>
                                        <TableCell align="right">designation</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody >
                                    {this.state.Employees_data.map((item) => (
                                        <TableRow key={item.id}>
                                            <TableCell component="th" scope="row">
                                                {item.id}
                                            </TableCell>
                                            <TableCell align="right">{item.firstname +' '+ item.lastname}</TableCell>
                                            <TableCell align="right">{item.mail}</TableCell>
                                            <TableCell align="right">{item.phonenum}</TableCell>
                                            <TableCell align="right">{item.gender}</TableCell>
                                            <TableCell align="right">{item.designation}</TableCell>
                                               
                                            <div style={{ marginLeft: '20%', marginTop: '15px' }}>
                                                <EditIcon  />
                                                <DeleteIcon />
                                            </div>
                                        </TableRow>
                                    ))}
                                    
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>: null }
                    <div>
          { this.state.showTable ?
          <div>
            <input type="button" value="Back" onClick={this.showTable.bind(this)}/>
            <form onSubmit={this.handleSubmit}>
                    <h3 >Employee Details</h3><br />
                     <div className="wrapper"> 
                        <div className="row">
                        <div className="col-sm-3">
                              <label>Employee ID</label>
					                        <input type="text" value={id} 	onChange={this.handleIdChange}	required/>
                              </div>
                              <div className="col-sm-3">
                              <label>firstname </label>
					                        <input type="text" value={firstname} 	onChange={this.handleFirstnameChange}	required/>
                              </div>
                              <div className="col-sm-4">
                                <label>lastname</label>
					                      <input type="text" value={lastname}	onChange={this.handleLastnameChange}    required	/>
                              </div>
                        </div><br/><br/>
                        <div className="row">
                              <div className="col-sm-3">
                              <label>Email </label>
					                        <input type="email" value={mail}	onChange={this.handleEmailChange}	required/>
                              </div>
                              <div className="col-sm-3">
                                <label>Phone Number</label>
					                      <input type="number" value={phonenum} 	onChange={this.handlePhoneChange}	required/>
                              </div>
                              <div className="col-sm-3">
                                <label>designation</label>
					                      <input type="text" value={designation}	onChange={this.handleDesignationChange}	required/>
                                          
                              </div>
                        </div><br/><br/>
                        <div className="row">
                        <div className="col-sm-4">
                        <FormControl component="fieldset">
                                <FormLabel component="legend"><b>Qualification</b></FormLabel>
                                <RadioGroup value={qualification}  aria-label="Qualification" name="Qualification" >
                                    <FormControlLabel value="Mtech" control={<Radio />} label="Mtech" onChange={this.handleQualificationChange}/>
                                    <FormControlLabel value="Btech" control={<Radio />} label="Btech" onChange={this.handleQualificationChange}/>
                                    <FormControlLabel value="Degree" control={<Radio />} label="Degree" onChange={this.handleQualificationChange} />
                                </RadioGroup>
                            </FormControl>
                              {/* <Select  options={actions}  onChange={this.handleQualificationChange} /> */}
                              </div>
                              
                              <div className="col-sm-4">
					            <FormControl component="fieldset" >
                                <FormLabel component="legend"><b>Gender</b></FormLabel>
                                <RadioGroup value={gender} aria-label="gender" name="gender" >
                                    <FormControlLabel value="female" control={<Radio />} label="Female" onChange={this.handleGenderChange}/>
                                    <FormControlLabel value="male" control={<Radio />} label="Male" onChange={this.handleGenderChange}/>
                                    <FormControlLabel value="other" control={<Radio />} label="Other" onChange={this.handleGenderChange} />
                                </RadioGroup>
                            </FormControl>
                            </div>
                            
                        </div>      
                      </div>
                    <input type="submit" value="Submit" />
                    <input type="button" value="update"  onClick={this.handleUpdate.bind(this)}/>
                    
            </form>
          </div>
          : null }
          </div>  
                </div>
        )
    }
}
export default DynamicTableComponent;
