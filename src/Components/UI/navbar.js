import React from "react";
import './navbar.css'

const Navbar = () => {
    return (
        <div class="nav">
            <input type="checkbox" id="nav-check" />
            <div class="nav-header">
            <img alt="wallet" className="icon" src="https://cdn3d.iconscout.com/3d/premium/thumb/wallet-4585816-3811094.png"/>
                <div class="nav-title">
                    Expenses Tracker
                </div>
            </div>
            <div class="nav-btn">
                <label for="nav-check">
                <span></span>
                <span></span>
                <span></span>
                </label>
            </div>
            
            <div class="nav-links">
                <li>Github</li>
            </div>
        </div>
    );
}

export default Navbar;