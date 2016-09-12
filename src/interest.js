import React, { Component } from 'react';

var Interest = React.createClass({
    render: function () {
        return (
            <div className="body center non-copy cursdefault">
                <div className="contact textint warn">Interests:</div>
                <div className="container edtxt">
                    <div>
                        <img src="src/img/guitar.svg" className="iconint"/>
                        I like play for guitar in garage with my group.
                    </div>
                    <div>
                        Sometime I play in games or watch youtube.
                        <img src="src/img/youtube.svg" className="iconint"/>
                    </div>
                    <div>
                        <img src="src/img/friend.svg" className="iconint"/>
                        I like listen to music and talk with people.
                    </div>
                    <div>
                        Yet I love my guitar and play in group,
                        <img src="src/img/music.svg" className="iconint"/>
                    </div>
                    <div>
                        <img src="src/img/interest.svg" className="iconint"/>
                        but and sit in computer I like too.
                    </div>
                </div>
            </div>
        );
    }
});
export default Interest;
