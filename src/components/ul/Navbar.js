import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink} from "react-router-dom";
import { startLogout } from '../actions/auth';
import "../../styles/style.css"

//import "../../styles/style.css"


export const Navbar = () => {







const dispatch = useDispatch()
const {name} = useSelector(state => state.authReducer)



const handleLogout = () => {
    dispatch(startLogout())
}

    return(

    <div className='container countainer-Navbar'>
   
      <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark small">

      <div className="navbar-collapse collapse w-100 order-3 logoutName">
              <ul className="navbar-nav logout-row">

                <span
                className="nav-item nav-link text-info nav-right collapse nameBar "
                >
                {name}
                </span>
                  <button
                      className="nav-item nav-link btn nav-right collapse btn btn-outline-dark logout-button"
                      onClick = {handleLogout} 
                  >
                      Logout
                  </button>
              </ul>

              
              
        </div>
          
          <Link 
              className="navbar-brand" 
              to="/"
          >
              My Portafolio
          </Link>

          
          


          <div className="navbar-collapse selection-screen">
              <div className="navbar-nav itemsBar">
    
                  <NavLink 
                      
                      className={ ({isActive}) => `nav-item nav-link` + (isActive? "nav-item nav-link active" : "") } 
                      to="/business"
                      
                      
                  >
                      Business
                  </NavLink>
    
                  <NavLink 
                      
                      className={ ({isActive}) => `nav-item nav-link` + (isActive? "nav-item nav-link active" : "") }  
                      to="/technology"
                  >
                      Technology
                  </NavLink>
    
                  <NavLink 
                      
                      className={ ({isActive}) => `nav-item nav-link` + (isActive? "nav-item nav-link active" : "") } 
                      to="/sports"
                  >
                        Sports
                  </NavLink>
                  <NavLink 
                      
                      className={ ({isActive}) => `nav-item nav-link` + (isActive? "nav-item nav-link active" : "") } 
                      to="/health"
                  >
                        Health
                  </NavLink>
    
              </div>
          </div>
    
      </nav>

      </div>
    )
}





// return (
//   <div>
//    <nav className="navbar navbar-expand-lg  brandText" >
//   <div className="col-lg-6 col-md-6 col-sm-12">
//     <Link className="navbar-brand " to="/">My Portafolio</Link>
//     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"> sads</span>
//     </button>
//     </div>

//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav mr-auto">
    
//                   <li className="nav-item">
//                   <NavLink className="active"  to="/films" className= "nav-item nav-link">Films</NavLink> 
//                   </li>
//                   <li className="nav-item">
//                   <NavLink className="active" to="/series" className= "nav-item nav-link">Series</NavLink>
//                   </li>
//                   <li className="nav-item">
//                   <NavLink className="active" to="/music" className= "nav-item nav-link">Music</NavLink>
//                   </li>
//       </ul>
    
//     </div>
// </nav>
      
//   </div>
// )