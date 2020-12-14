import 'bootstrap/dist/css/bootstrap.min.css';
import "./login.css";
import Radium from "radium";



const Login = (props) => {
    const style = {
        ':hover': {
            backgroundColor: "green",
            color: 'black'
        }
    }

     return ( 
   <div>
            <form>
                 <div className="form-group">
                     <label for="exampleInputEmail1">Email address</label>
                     <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                 </div>
                 <div className="form-group">
                     <label for="exampleInputPassword1">Password</label>
                     <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                 </div>
                 <button type="button" onClick={props.login} className="btn btn-primary" style={style}>Submit</button>
             </form>
</div>
       
     );
 
}
 
export default Radium(Login);

