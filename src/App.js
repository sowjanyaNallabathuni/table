
import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import DeleteIcon from '@material-ui/icons/Delete';
// import EditIcon from '@material-ui/icons/Edit';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
// import { MDBDataTable } from 'mdbreact';

 

class DynamicTableComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countries : [],
			states : [],
			cities : [],
			selectedCountry : 'select Country',
			selectedState : 'select State',
            hideTable: true,
            showTable: false,
            Employees_data : [
                { id: 101, firstname: "anusha", lastname: "A", mail: "anusha@gmail.com", phonenum: 8978909879, qualificarion: "Btech", gender: "female", designation: "developer" },
                { id: 245, firstname: "aruna", lastname: "N", mail: "aruna@gmail.com", phonenum: 1223455671, qualificarion: "Btech", gender: "female", designation: "developer" },
                { id: 533, firstname: "sowjanya", lastname: "K", mail: "sowjanya@gmail.com", phonenum: 8765432109, qualificarion: "Mtech", gender: "female", designation: "nerworking" },
                { id: 536, firstname: "pavan", lastname: "K", mail: "pavah@gmail.com", phonenum: 7654321098, qualificarion: "Btech", gender: "male", designation: "tester" },
                { id: 653, firstname: "ramya", lastname: "J", mail: "ramya@gmail.com", phonenum: 6543210987, qualificarion: "Mtech", gender: "female", designation: "developer" },
                { id: 236, firstname: "anu", lastname: "H", mail: "anu@gmail.com", phonenum: 5432109876, qualificarion: "mca", gender: "female", designation: "networking" },
                { id: 437, firstname: "rohith", lastname: "J", mail: "rohit@gmail.com", phonenum: 4321098765, qualificarion: "Degree", gender: "male", designation: "developer" },
                { id: 280,firstname: "swarna", lastname: "R", mail: "swarna@gmail.com", phonenum: 3210987654, qualificarion: "Degree", gender: "female", designation: "admin" },
            ],
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
                { label: " mca" }
            ],
            country: '',
            state: '',
            city: '',
            designation: '',

            topic: 'react'
        }
        this.changeCountry = this.changeCountry.bind(this);
		this.changeState = this.changeState.bind(this);
    }
    componentDidMount() {
		this.setState({
			countries : [
				{ name: 'Germany', states: [ {name: 'eschborn', cities: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn']} ] },
				{ name: 'Spain', states: [ {name: 'alicant', cities: ['Barcelona','malaga']} ] },
				{ name: 'USA', states: [ {name: 'california', cities: ['Downers Grove','']} ] },
				{ name: 'Mexico', states: [ {name: 'texas', cities: ['Puebla','florida']} ] },
				{ name: 'India', states: [ {name: 'Ap', cities: ['kadapa', 'tirupathi', 'anathapur', 'kurnool']} ] },
			]
		});
	}
  
	changeCountry(event) {
		this.setState({selectedCountry: event.target.value});
		this.setState({states : this.state.countries.find(cntry => cntry.name === event.target.value).states});
	}

	changeState(event) {
		this.setState({selectedState: event.target.value});
		const stats = this.state.countries.find(cntry => cntry.name === this.state.selectedCountry).states;
		this.setState({cities : stats.find(stat => stat.name === event.target.value).cities});
	}
	
    // logout() {
    //     this.props.history.push('/welcome');
    // }
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
        // <MDBDataTable Employees_dat={Employees_dat} striped searching={false}/>

        const { id,firstname, lastname, qualification, mail, phonenum, gender, designation } = this.state;
        return (
            <div className="App">
                {this.state.hideTable ?
                    <div className="col-sm-12" style={{ marginTop: '5px', marginLeft: '15%', width: '70%', height: '80px' }}>
                        <div className="container" style={{ marginTop: '5px' }}>
                            <div className="row">
                                {/* <div className="col-sm-10">
                                    <input type="button" value="Back" onClick={this.logout.bind(this)} />
                                </div> */}
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
                                                {/* <EditIcon  />
                                                <DeleteIcon /> */}
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
                                    <FormControlLabel value="mca" control={<Radio />} label="mca" onChange={this.handleQualificationChange} />
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
                            <select id = "designation">
                                          <option value="developer">developer</option>
                                             <option value="tester">tester</option>
                                            <option value="networking">networking</option>
                                                <option value="designing">designing</option>
                                                <option value="admin">admin</option>
                                     </select>
                              </div> 
                         </div>
                    
                    
            </form>
          </div>
          : null }
          </div>  
               <div>
					<label>Country</label>
					<select placeholder="Country" value={this.state.selectedCountry} onChange={this.changeCountry}>
						<option>select country</option>
						{this.state.countries.map((e, key) => {
							return <option key={key}>{e.name}</option>;
						})}
					</select>
				</div>

				<div>
					<label>State</label>
					<select placeholder="State" value={this.state.selectedState} onChange={this.changeState}>
						<option>select  State</option>
						{this.state.states.map((e, key) => {
							return <option key={key}>{e.name}</option>;
						})}
					</select>
				</div>
				
				<div>
					<label>City</label>
					<select placeholder="City">
						<option>select City</option>
						{this.state.cities.map((e, key) => {
							return <option key={key}>{e}</option>;
						})}
					</select>
				</div>
                <input type="submit" value="Submit" />
                    <input type="button" value="update"  onClick={this.handleUpdate.bind(this)}/>
			</div>
                
        )
    }
}
export default DynamicTableComponent;
