import React from 'react';
import './App.css';

const User = (props) => {
  return (
    <div className='card'>
      <img alt="" src={props.pic}/>
      <div className='card__content'>
        <div className='card__title'>{props.name}</div>
        <p class="card__text">{props.description}</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="listOfCards">
      <User pic = 'https://unsplash.it/800/600?image=82'
            name = 'Purple Flowers'
            description = 'This is the shorthand for flex-grow, flex-shrink and flex-basis combined. The second and third parameters (flex-shrink and flex-basis) are optional. Default is 0 1 auto.'/>
      <User pic = 'https://unsplash.it/800/600?image=11'
            name = 'River'
            description = 'This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.'/>
      <User pic = 'https://unsplash.it/800/600?image=39'
            name = 'Record'
            description = 'This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.'/>
    </div>
  )
}

export default App;
