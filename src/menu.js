import React, { Component } from 'react';
import { Link } from 'react-router'

var Menu = React.createClass({
    render: function () {
        return (
            <div className="content">
                <div className="menu flex">
                    <div className="menu-logo non-copy cursdefault">
                        US
                    </div>
                    <div className="flex">
                        <Link className="cursdefault" to='/'>
                            <div className="menu-btn non-copy">contacts</div>
                        </Link>
                        <Link className="cursdefault" to='/educetion'>
                            <div className="menu-btn non-copy">education</div>
                        </Link>
                        <Link className="cursdefault" to='/interest'>
                            <div className="menu-btn non-copy">interests</div>
                        </Link>
                        <Link className="cursdefault" to='/skill'>
                            <div className="menu-btn non-copy">skills</div>
                        </Link>
                        <Link className="cursdefault" to='/soceal'>
                            <div className="menu-btn non-copy">social pages</div>
                        </Link>
                    </div>
                </div>
                    {this.props.children}
                <div className="footer">
                    <div className="team non-copy cursdefault">©SoloTeam</div>
                </div>
            </div>
        );
    }
});
export default Menu;