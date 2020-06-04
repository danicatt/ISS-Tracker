import React from "react";
import "./Button.css"


class Button extends React.Component {
    render() {
        return (
            <div className="button">
                <button onClick={this.props.refresh}>Refresh</button>
            </div>
        )
    }
}

export default Button;