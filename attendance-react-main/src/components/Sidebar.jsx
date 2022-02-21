// Library link : https://www.npmjs.com/package/react-pro-sidebar
import React from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';

class SidebarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <ProSidebar>
                <Menu iconShape="square" style={{ backgroundColor: "#ecf0f1", height: "100vh" }}>
                    <div style={{textAlign:"center"}}>
                        <img src='https://i.pinimg.com/474x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg' alt='...' style={{ width: "200px", borderRadius: 100 }} />
                        
                    </div>
                    <MenuItem>
                        <Link to="/">Dashboard</Link>
                    </MenuItem>
                    <MenuItem>Attendance List</MenuItem>
                    <MenuItem>My Profile</MenuItem>
                    <MenuItem>Students Attendance</MenuItem>
                    <MenuItem>
                        <Link to="/register">Regis Student</Link>
                    </MenuItem>

                </Menu>
            </ProSidebar>
        );
    }
}

export default SidebarComponent;