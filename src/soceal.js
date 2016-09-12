import React, { Component } from 'react';

var Soceal = React.createClass({
    render: function () {
        return (
            <div className="body center non-copy cursdefault">
                <div className="contact textint warn">Social pages:</div>
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12"></div>
                    <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                        <img src="src/img/facebook.svg" className="imgsk circle"/>
                        <div className="textsoc">Vladislav Sinitsa</div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                        <img src="src/img/vk.svg" className="imgsk circle"/>
                        <div className="textsoc">Vladislav Tomashevskiy</div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                        <img src="src/img/skype.svg" className="imgsk circle"/>
                        <div className="textsoc">dsinitsa_11</div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12"></div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12"></div>
                    <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                        <img src="src/img/google.svg" className="imgsk circle"/>
                        <div className="textsoc">salinovsciy@gmail.com</div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                        <img src="src/img/github.svg" className="imgsk circle"/>
                        <div className="textsoc">Sallinov</div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                        <img src="src/img/mail.svg" className="imgsk circle"/>
                        <div className="textsoc">vladislavlad_11@mail.ru</div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12"></div>
                </div>
            </div>
        );
    }
});
export default Soceal;