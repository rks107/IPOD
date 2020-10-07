import React from 'react';

class Wheel extends React.Component {
    
    render(){
        const {handleRotate, hanldeMenuClick, handleInnerCirlceClick} = this.props;
        return(
            <div id="outer_circle" style={style.outer_circle} onClick={handleRotate}>
                <div style={style.col1} onClick={hanldeMenuClick}>menu</div>
                <div style={style.col2}>
                    <div style={style.backPlay}>
                        <img src="https://t3.ftcdn.net/jpg/03/68/30/32/240_F_368303256_CV9COxK7JUq6tiihAoLNzH2eqzfma4qd.jpg" style={{height:'50px', borderRadius:'50%'}}/>
                    </div>
                    <div style={style.inner_circle} onClick={handleInnerCirlceClick}></div>
                    <div style={style.frontPlay}>
                        <img src="https://t3.ftcdn.net/jpg/03/68/30/32/240_F_368303231_hYhKvPEgdgbrlzGjLkhuEOLelamXMMEu.jpg" style={{height:'50px', borderRadius:'50%'}} />
                    </div>
                </div>
                <div style={style.col3}>
                    <img src="https://t3.ftcdn.net/jpg/03/68/30/32/240_F_368303242_nSlSHKWJsgl5WjGnhjGyMDLyqmwcae4D.jpg" style={{height:'50px', borderRadius:'50%'}} />
                </div>
            </div>
        )
    }
}


const style = {
    outer_circle : {
       height: '200px',
       width: '200px',
       border: '1px solid black',
       margin: '20px auto',
       borderRadius: '50%',
       background: 'white',
       display: 'flex',
       flexDirection: 'column',
       justifyContent: 'space-between',
       position: 'relative'
   },
   inner_circle: {
       height: '100px',
       width: '100px',
       border: '1px solid black',
       borderRadius: '50%',
       background: 'rgba(85, 83, 85, 0.5)'
   },
   col1: {
        height: '50px',
        textAlign: 'center',
        paddingTop: '13px'
   },
   col2: {
        display: 'flex'
   },
   backPlay: {
        width: '50px',
        padding: '22px 0px 0px 3px'
   },
   frontPlay: {
    width: '50px',
    padding: '22px 0px 0px 0px'
   },
   col3: {
        height: '50px',
        textAlign: 'center'
   }
}

export default Wheel;