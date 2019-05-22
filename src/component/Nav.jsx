import React from "react";
// import { Tabs, Tab} from "react-bootstrap";
// import Dashboard from "../navs/Dashboard";
// import Account from "../navs/Account";
// import Billing from "../navs/Billing";
// import Tools from "../navs/Tools";
// import Ordering from "../navs/Ordering";


class Nav extends React.Component{

    // constructor(props, context){
    //     super(props, context);
    //     this.state = {
    //         key: 'Ordering',
    //     };
    // }

    render (){
        return(
            <div className="navigate">
               <div className="navin">
               <button>
               <span class="fa fa-search">&nbsp;Search</span>
               </button>
               <h4>No account selected</h4>
               </div>
               {/* <Tabs id="navTabs" activeKey={this.state.key} onSelect={key => this.setState({ key })}>
                    <Tab eventkey="Dashboard" title="Dashboard">
                        <Dashboard />
                    </Tab>
                    <Tab eventKey="Billing" title="Billing">
                        <Billing />
                    </Tab>
                    <Tab eventKey="Account" title="Account">
                        <Account />
                    </Tab>
                    <Tab eventkey="Ordering" title="Ordering">
                        <Ordering />
                    </Tab>
                    <Tab eventKey="Tools" title='Tools'>
                        <Tools />
                    </Tab>
                    
               </Tabs>  */}






                <nav>
                    <ul>
                        <li> <a href="#">Dashboard</a></li>
                   
                       
                        <li><a href="#">Account</a></li>
                        <li><a href="#">Billing</a></li>
                        
                        <li><a href="#">Ordering</a></li>
                      
                      
                        <li><a href="#">Tools</a></li>
                    </ul>
                </nav>
            </div>

        );
    }


}
export default Nav;