import React, { Component } from 'react';
//import { connect } from 'react-redux';

class CreatePlayer extends Component {
    state = { 
            prenom: '',
            nom: '',
            email: '',
            tel: ''  
     }

      inputChangeHandler = (event) => {
        let ident = event.target.id;
        
        
        
         this.setState({[ident]: event.target.value})
         console.log(this.state)
      }
    render() { 
        return ( 
            <form>
                 <div className="form-group">
                     <label for="prenom">Prenom</label>
                     <input type="text" className="form-control" id="prenom" aria-describedby="prenomlHelp" placeholder="Prenom" onChange={(event)=>this.inputChangeHandler(event)}></input>
                 </div>
                 <div className="form-group">
                     <label for="nom">Nom</label>
                     <input type="text" className="form-control" id="nom" aria-describedby="nomlHelp" placeholder="Nom" onChange={this.inputChangeHandler}></input>
                 </div>
                 <div className="form-group">
                         <label for="email1">Email address</label>
                         <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.inputChangeHandler}></input>
                     </div>
                     <div className="form-group">
                         <label for="tel">Numéro de téléphone</label>
                         <input type="text" className="form-control" id="tel" aria-describedby="telHelp" placeholder="Enter numéro de téléphone" onChange={this.inputChangeHandler}></input>
                     </div>
                 <button type="button" onClick={this.props.login} className="btn btn-primary" >Submit</button>
             </form>
     );
    }
}
 
// const mapStateToProps = (state) => {
//     return {
//       name: state.name,
//       modal: state.modal,
//       players: state.players,
//       dts: state.dts,
//     };
//   };
  
//   const maspDispatchToProps = (dispatch) => {
//     return {
//       inputchange: (ident) =>
//         dispatch(actionCreators.inputChange(ident)),
//     };
//   };
export default CreatePlayer;