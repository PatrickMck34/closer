import React, { Component } from 'react';
const room1 = `url("https://wallpapercave.com/wp/wp7517920.jpg")`
const room2 = `url("https://i.etsystatic.com/42685745/r/il/f7c78c/4908711238/il_fullxfull.4908711238_ifxx.jpg")`
const room3 = `url("https://cdn1.epicgames.com/ue/product/Screenshot/Screenshot23-1920x1080-faad1d637e8cf81a9fcbc32994ce875b.jpg?resize=1&w=1920")`
let selector = room1
const map = [4,4]
function  handleRoomChange (event) {
     if(selector = room1){
         selector = room2
        
 
 }  if(selector = room2){
     selector = room3

 } 
 
 else { selector = room3}
 }
 function  handleRoomChange2 () {
//     if(selector = room3){
//         selector = room2

// }  if(selector = room2){
//     selector = room1

} 
// if(map === ([4,4])){
   
// }
//  }
class Game extends Component {
    
    state = {
        x: 160,
        y: 350,
       
        interactiveAreas: [
            { x: 100, y: 100, width: 100, height:400,  action: () => handleRoomChange()},
            { x: 950, y: 100, width: 100, height:400,  action: () => handleRoomChange2() }
        ],
    };
    handleKeyDown = (event) => {
        const { x, y, interactiveAreas } = this.state;
        switch (event.key) {
            case 'ArrowUp':
                this.setState({ y: y - 15 });
                break;
            case 'ArrowDown':
                this.setState({ y: y + 15 });
                break;
            case 'ArrowLeft':
                this.setState({ x: x - 15 });
                break;
            case 'ArrowRight':
                this.setState({ x: x + 15 });
                break;
            default:
                break;
        }
         for (let area of interactiveAreas) {
      if (x <= 155 ) {
        area.action();
        this.setState({ x: (this.state.x + 800), y: (this.state.y) });
      }
    //   if (x >= 1000  ) {
    //     area.action();
    //     this.setState({ x: (this.state.x - 800), y: (this.state.y),  });
       
    //   }
    

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
            <div style={{ backgroundImage: selector ,position: 'relative', height: '100vh', width: '100vw', backgroundSize: 'cover' }}>
                <div style={{ position: 'absolute', top: y, left: x }}><img src="https://lh3.googleusercontent.com/a/ACg8ocKw1_fT-luZQq61YLYr9o7tjRVsONoRRHdOU--V6hqVCQ=s288-c-no" className="h-24 rounded-xl p-1" /></div>
            </div>
        );
    }
}

export default Game;