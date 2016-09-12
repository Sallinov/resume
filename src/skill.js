import React, { Component } from 'react';

var Skill = React.createClass({
    render: function () {
        return (
            <div className="body center non-copy cursdefault">
                <div className="row">
                    <div className="textint">
                        <div className="warn txtskill">Web:</div>
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12"></div>
                            <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                                <img src="src/img/html.svg" className="imgsk"/>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                                <img src="src/img/css.svg" className="imgsk"/>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                                <img src="src/img/js.svg" className="imgsk"/>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12"></div>
                        </div>
                    </div>
                </div>
                <div className="row center">
                    <div className ="textint">
                        <div className="warn txtskill">Windows Form Application:</div>
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12"></div>
                            <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                                <img src="src/img/c.svg" className="imgsk"/>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                                <img src="src/img/delphi.svg" className="imgsk"/>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
export default Skill;