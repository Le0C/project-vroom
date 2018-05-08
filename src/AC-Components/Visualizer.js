import React from 'react';

class Visualizer extends React.Component {
    render() {
        return (
            <canvas ref={node => this.props.setWaveform(node)} className="visualizer"></canvas>
        );
    }
}

export default Visualizer;