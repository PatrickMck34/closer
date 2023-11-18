import React, { Component } from 'react';

class Game extends Component {
    state = {
        x: 0,
        y: 0
    };

    handleKeyDown = (event) => {
        const { x, y } = this.state;
        switch (event.key) {
            case 'ArrowUp':
                this.setState({ y: y - 5 });
                break;
            case 'ArrowDown':
                this.setState({ y: y + 5 });
                break;
            case 'ArrowLeft':
                this.setState({ x: x - 5 });
                break;
            case 'ArrowRight':
                this.setState({ x: x + 5 });
                break;
            default:
                break;
        }
    };

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    render() {
        const { x, y } = this.state;
        return (
            <div style={{ position: 'relative', height: '100vh', width: '100vw' }}>
                <div style={{ position: 'absolute', top: y, left: x }}>Sprite</div>
            </div>
        );
    }
}

export default Game;