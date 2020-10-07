import React from 'react';


const Screen = (props) => {

    const {menu, submenu, music, game, fm, setting, allsong, album, artist} = props;

    return(
        <div style={style.ipodScreen} id="ipodScreen">
            {/* If Menu Button is clicked it makes menu true */}
            {menu ?
                <div className="menu_container">
                    <h3>Menu</h3>
                    <ul className="menu_list">
                        <li className={` ${music ? "select":"unselect"}`}>Music</li>
                        <li className={` ${game ? "select":"unselect"}`}>Game</li>
                        <li className={` ${fm ? "select":"unselect"}`}>FM Radio</li>
                        <li className={` ${setting ? "select":"unselect"}`}>Setting</li>
                    </ul>

                </div>
            
               : null
            }
            {/* If Menu Button is clicked it makes menu true */}
            { (submenu ) ?
                <div className="menu_container">
                    <h3>Menu</h3>
                    <ul className="menu_list">
                        <li className={` ${allsong ? "select":"unselect"}`}>All Songs</li>
                        <li className={` ${album ? "select":"unselect"}`}>Album</li>
                        <li className={` ${artist ? "select":"unselect"}`}>Artist</li>
                    </ul>
                </div>
            
               : null
            }
        </div>
    )
}


const style = {
    ipodScreen: {
        border: '1px solid black',
        width: '280px',
        height: '190px',
        margin: '10px auto',
        background: 'white',
        backgroundImage: 'url("data:image/jpeg;base64,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")',
        backgroundColor: '#cccccc',
        backgroundPosition: 'center'
    }
}

export default Screen;