import React, { Component } from 'react';

class FooterComponent extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <div>
                <footer className = "footer">
                    <span className="text-muted">All rights reserved 2021 @dadx</span>
                </footer>
            </div>
        );
    }
}

export default FooterComponent;