import React, {Component} from 'react';



class Header extends Component {
    constructor(){
        super()
        this.state ={
            toggleMenuBtn: false
        }
    }


    toggleMenubtn=()=>{
        this.setState( (prevState)=> {
            return {
                toggleMenuBtn: !prevState.toggleMenuBtn
            } 

        })
    }

    render(){

        return (

            <div className="headerContainer">
                <div id="sbHeader"><h1>Start Bootstrap</h1></div>
               
               <nav className="navBar">
               
                    <li>Services</li>
                    <li>Portfolio</li>
                    <li>Team</li>
                    <li>About</li>
                    <li>Contact</li>
            
                </nav>
                <nav className="navBar2">
                    <button>Home</button>
                    <button>About</button>
                    <button>Portfolio</button>
                </nav>


                <button className={`menuToggleBtn ${this.state.toggleMenuBtn ? `.menuTBNotDisplayed` : `menuToggleBtn`}`}>Menu</button>

            </div>
        )
      




    }


}
export default Header;

/**
 * <button className="" 
 * onClick={()=> this.setState(toggleMenubtn: !this.state.toggleMenubtn)} */