//add image of self and picture

//what do i need here?
// name and picture

import "../assets/styles/Header.css"

export default function Header()
{
    return (
        <header className=''>
            <div className=''>
                <p>Header</p>
                <h1>Tristan Lea</h1>
                
                <img className="img1" src={require('../assets/images/tristan_lea_paint_logo.png')} />
                <img className="img2" src={require('../assets/images/me.png')} />
            </div>
        </header>
    );
}