import React, { Component } from 'react';

var Home = React.createClass({
    render: function () {
        return (
            <div className="body center">
                <div className="container flex">
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 cursdefault">
                        <img src="src/img/photo.png" className="circle responsive imghome"/>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 cursdefault">
                        <div className="name non-copy">Uladzislau</div>
                        <div className="name non-copy">Sinitsa</div>
                    </div>
                </div>
                <div className="container col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="contact"><span className="non-copy cursdefault">Day of birth : <span className="warn">11.07.1997y.</span></span></div>
                    <div className="contact"><span className="non-copy cursdefault">Telephone : </span><span className="warn">+375292297034</span></div>
                    <div className="contact"><span className="non-copy cursdefault">E-mail : </span><span className="warn">salinovsciy@gmail.com</span></div>
                </div>
            </div>
        );
    }
});
export default Home;