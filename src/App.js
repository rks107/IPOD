import React from 'react';
import Wheel from './Wheel';
import Screen from './Screen';
import ZingTouch from 'zingtouch';

class App extends React.Component {

    constructor(){
      super();

      this.state = {
        menu: false,
        music: false,
        game: false,
        fm: false,
        setting: false,
        submenu: false,
        allsong: false,
        album: false,
        artist: false
      }
      // this.handleRotate = this.handleRotate.bind(this);
    }

    // Handling menu button click
    hanldeMenuClick = () => {
      const {menu} = this.state;
      console.log("menu clicked", menu);
        this.setState({
          menu: !menu,
          submenu:false
        });
    }


    //Handling rotate by ZingTouch rotating event
    handleRotate = () =>{
      
      const {menu, submenu} = this.state;
      const target = document.getElementById('outer_circle');
      var region = new ZingTouch.Region(target);
      var currentAngle = 0;

      var val = this;
      region.bind(target, 'rotate', function(e) {
      
        currentAngle += e.detail.distanceFromLast;

        // console.log(currentAngle);

        //IF MENU BUTTON AND SUM-MENU BUTTON NOT SELECTED
        if(!menu && !submenu) {
          return;
        }

        console.log("Menu:",menu);
        console.log("subMenu:",submenu);
        // If menu button is selected
        if(menu && !submenu) {

          // Selecting music Event
          if((currentAngle >= 0 && currentAngle < 30) || (currentAngle >= 120 && currentAngle < 150) || (currentAngle > -30 && currentAngle < 0)){
      
            // Chaging the state
            val.setState({
              music : true,
              game : false,
              fm : false,
              setting : false,
              submenu : false
            });
          } else if ((currentAngle >= 30 && currentAngle < 60) || (currentAngle >= 150 && currentAngle < 180) || (currentAngle > -60 && currentAngle < -30)){
          
            // Chaging the state
            val.setState({
              music : false,
              game : true,
              fm : false,
              setting : false,
              submenu : false
            });
          } else if ((currentAngle >= 60 && currentAngle < 90) || (currentAngle >= 180 && currentAngle < 210) || (currentAngle > -90 && currentAngle < -60)){
          
            // Chaging the state
            val.setState({
              music : false,
              game : false,
              fm : true,
              setting : false,
              submenu : false
            });
          } else if ((currentAngle >= 90 && currentAngle < 120) || (currentAngle >= 210 && currentAngle < 240) || (currentAngle > -120 && currentAngle <= -90)) {
          
            // Chaging the state
            val.setState({
              music : false,
              game : false,
              fm : false,
              setting : true,
              submenu : false
            });
          
          }
        } 

        // For selecting Sub-menu
        if(submenu) {

          if((currentAngle < 30 && currentAngle >= 0)|| (currentAngle < 120 && currentAngle >= 90)|| (currentAngle < 0 && currentAngle >= -30)){

              val.setState({
                allsong: true,
                album: false,
                artist: false
              });

          } else if((currentAngle < 60 && currentAngle >= 30)|| (currentAngle < 150 && currentAngle >= 120) || (currentAngle <= -30 && currentAngle > -60)){

            val.setState({
              allsong: false,
              album: true,
              artist: false
            });

          } else if((currentAngle < 90 && currentAngle >= 60)|| (currentAngle < 180 && currentAngle >= 150) || (currentAngle <= -60 && currentAngle > -90)){

            val.setState({
              allsong: false,
              album: false,
              artist: true
            });

          } 
        }
        

      });
      
    }

      //---- to hide menu when select the particular list item
  handlechangestate = () =>{
    const { menu } = this.state;
    console.log("handlechangestate",menu);
    this.setState({
      menu : !menu
    })
  }

  //---- handle state of submenu 
  handleSubMenuState = () => {
    this.setState({
      submenu: false
    })
  }


  //---- handle click on inner circle (selecting list items)
  handleInnerCirlceClick = (props) =>{
    
    //--- stop propagation to outer div
    props.stopPropagation(onclick);
    
    const { menu, music, game, setting, fm, submenu, allsong, album, artist } = this.state;
    console.log(this.state);


    let display = document.getElementById('ipodScreen');

    //MENU
    if(menu){
      if(music){
        display.style.backgroundImage="url('https://media.idownloadblog.com/wp-content/uploads/2018/03/Apple-Music-icon-002.jpg')";
        this.handlechangestate();
        this.setState({
          submenu : true
        })
      }
      else if(game){
        display.style.backgroundImage="url('data:image/png;base64,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')";
        this.handlechangestate();
      }
      else if(setting){
        display.style.backgroundImage="url('data:image/png;base64,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')";
        this.handlechangestate();
      }
      else if(fm){
        display.style.backgroundImage="url('data:image/jpeg;base64,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')";
        this.handlechangestate();
      }
    }

    //SUBMENU 
    if(submenu){
      if(allsong){
        display.style.backgroundImage="url('https://lh3.googleusercontent.com/GMpK_XSbZyr8pM-XDrYJ7IzS1MkXOab9JWMEasyWYX5CFjHTngoja9eYqwwPhmN5mzY=w412-h220-rw')";
        this.handleSubMenuState();
      }
      if(album){
        display.style.backgroundImage="url('https://community.spotify.com/t5/image/serverpage/image-id/80164iEB9345FE9C8A7BA1/image-size/large?v=1.0&px=999')";
        this.handleSubMenuState();
      }
      if(artist){
        display.style.backgroundImage="url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuc4y1apA4AW0UextASCaauYG39XBQXQaLPr5s&s=0')";
        this.handleSubMenuState();
      }
    }
  
  }

  render(){
    const {menu, submenu, music, game, fm, setting, allsong, album, artist} = this.state;
    return (
      <div className="App">
        <div className="screen">
          <Screen 
            menu={menu}
            submenu={submenu}
            music={music}
            game={game}
            fm={fm}
            setting={setting}
            allsong={allsong}
            album={album}
            artist={artist}
          />
        </div>
        <div className="wheel">
          <Wheel 
            handleRotate={this.handleRotate}
            hanldeMenuClick={this.hanldeMenuClick}
            handleInnerCirlceClick={this.handleInnerCirlceClick}
          />
        </div>
      </div>
    );
  }
  
}

export default App;
