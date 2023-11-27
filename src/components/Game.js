import React, { Component } from 'react';
import { useEffect } from 'react';
const room1 = `url("https://wallpapercave.com/wp/wp7517920.jpg")`
const room3 = `url("https://i.etsystatic.com/42685745/r/il/f7c78c/4908711238/il_fullxfull.4908711238_ifxx.jpg")`
const room2 = `url("https://cdn1.epicgames.com/ue/product/Screenshot/Screenshot23-1920x1080-faad1d637e8cf81a9fcbc32994ce875b.jpg?resize=1&w=1920")`
let selector = room1
let room = 1
let key = 0

function KeyUp() {
    key = 1
    
    console.log("Key Up")
    
}

function  handleRoomChange (event) {
    
    switch (room){
        case 1: {
            
            selector = room2
            room =2
            break;
        }
        case 2: {
            selector = room3
            room = 3

            break;
        }
        case 3: {
            room = 1
            selector = room1
            break;
        }
    }
    
}

function  handleRoomChange2 () {
    switch (room){
        case 1: {
            
            selector = room3
            room =3
            break;
        }
        case 2: {
            selector = room1
            room = 1
            
            break;
        }
        case 3: {
            room = 2
            selector = room2
            break;
            }
        }
            } 
            
            
            class Game extends Component {
                
                state = {
                    x: 600,
                    y: 450,
                    
                    interactiveAreas: [
                            { x: 145, y: 100, width: 100, height:400,  action: () => handleRoomChange()},
                            { x: 950, y: 100, width: 100, height:400,  action: () => handleRoomChange2() }
                        ],
                        
                    };
                    
                    handleKeyDown = (event) => {
                        const { x, y, interactiveAreas } = this.state;
                        switch (event.key) {
                            case 'ArrowUp':
                                this.setState({ y: y - 15 });
                                break;
                                case 'spacebar':
                                    this.setState({ y: y + 15 });
                                    break;
                                    case 'a':
                                        this.setState({ x: x - 15 });
                                        break;
                                        case 'd':
                                            this.setState({ x: x + 15 });
                                            break;
                                            default:
                                                break;
                                            }
                                            for (let area of interactiveAreas) {
                                                if (x <= 155 && key >0 ) {
                                                    
                                                    this.setState({ x: (this.state.x + 800), y: (this.state.y) }, () => {
                                                        handleRoomChange();
                                                        
                                                    });
                                                }
                                                if (x >= 1000  ) {
                                                    this.setState({ x: (this.state.x - 800), y: (this.state.y) }, () => {
                                                        
                                                        handleRoomChange2();
                                                    })
                                                    
                                                }
                                                
                                                
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
            <div className="text-white  text-2xl  p-4 flex mx-auto w-96">
                <div className="flex bg-slate-800/90 rounded-xl p-1 border-2 border-slate-900 shadow-lg shadow-slate-900 ">
                {(key < 1) ? (
                    <div className= "items-center justify-center flex flex-col">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjX_JVBO4evpJkRdlt__82d9CzxfJ88MXh9Q&s"></img>
                <div className=" flex justify-center text-center items-center">

            Hello, Welcome to my Castle... Shall we begin?
                </div>
            <div className="flex items-center justify-around">
                <button className="bg-green-800 border-2 w-24 font-semibold border-green-900 rounded-xl p-1 shadow-lg shadow-green-900" onClick={()=>KeyUp()}>Yes</button>
                <button className="bg-green-800 border-2 w-24 font-semibold border-green-900 rounded-xl p-1 shadow-lg shadow-green-900" >No</button>
            </div>
                        </div>
                ) : ( <div>
                    </div>
                )}
              
                </div>
                </div>
                   </div>
        )}}
        class Projectile {
            constructor(x, y, direction, speed) {
                this.x = x;
                this.y = y;
                this.direction = direction;
                this.speed = speed;
            }
            
            update() {
                // Update the position based on the direction and speed
                this.x += Math.cos(this.direction) * this.speed;
                this.y += Math.sin(this.direction) * this.speed;
            }
            
            render(context) {
                // Draw the projectile on the given context
                context.beginPath();
                context.arc(this.x, this.y, 5, 0, Math.PI * 2);
                context.fill();
            }
        }
        
        // In your game code:
        
        let projectiles = [];
        
        function fireProjectile(x, y, direction) {
            projectiles.push(new Projectile(x, y, direction, 5));
        }
        
        function gameLoop(context) {
            // Update and render each projectile
            for (let projectile of projectiles) {
                        projectile.update();
                        projectile.render(context);
                    }
                
                    // Call gameLoop again on the next frame
                    requestAnimationFrame(() => gameLoop(context));
                }
                
                // Start the game loop
                gameLoop();
                
                export default Game;
                




                
            