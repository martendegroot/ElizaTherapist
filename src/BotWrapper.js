import React, { Component } from 'react';
import ScriptTag from 'react-script-tag';
 
export class Demo extends Component {
 
    render() {
        return (<ScriptTag isHydrating={true} type="text/javascript" src="Bot.js" />);
    }
}
