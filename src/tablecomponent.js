import React from 'react'


class Test extends React.Component {
    constructor(props){
       super(props);
  
       this.state = {
           fields: {},
           errors: {}
       }
    }
render(){
    return (
         
<form name="data" onSubmit={this.contactSubmit.bind(this)}>
  <div className="col-md-6">
    <fieldset>
      <input ref="firstname" type="text" size="30" placeholder="firstname"/>
      <br/>
      <input refs="lastnamel" type="text" size="30" placeholder="lastname"/>
      <br/>
      <input refs="age" type="text" size="30" placeholder="age"/>
      <br/>
      <input refs="vists" type="number" size="30" placeholder="Address"/>
      <br/>
      <input refs="status" type="text" size="30" />
      <br/>
      <input refs="profileprogress" type="number"/>
      <br/>
    </fieldset>
  </div>
  <div className="col-md-6">
    <fieldset>
      <textarea refs="message" cols="40" rows="20"
                className="comments" placeholder="Message"/>
    </fieldset>
  </div>
  <div className="col-md-12">
    <fieldset>
      <button className="btn btn-lg pro" id="submit"
              value="Submit">Save</button>
    </fieldset>
  </div>
</form>
    )
}
}
export default  Test ;
    