import React, { PureComponent } from 'react';

class RandomButton extends PureComponent {

    render() {
        console.log('render ' + this.props.btnName);
        return (
            <input type="button" onClick={this.props.handleRandom} value={this.props.btnName}/>
        );
    }

}

export default RandomButton;
