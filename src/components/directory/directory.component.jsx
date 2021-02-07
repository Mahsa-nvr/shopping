import React from 'react';
import MenuItem from '../menu-item/menu-item.component.jsx';

import hat from './../../../src/assets/img/hat.png';
import sneakers from './../../../src/assets/img/sneakers.png';
import jackets from './../../../src/assets/img/jacket.jpg';
import womens from './../../../src/assets/img/women.png';
import mens from './../../../src/assets/img/men.jpg';

import './directory.style.scss'; 


class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [{
                title: 'hats',
                imageUrl: `${hat}`,
                id:1
            },{
                title: 'jackets',
                imageUrl: `${jackets}`,
                id:2
            },{
                title: 'sneakers',
                imageUrl: `${sneakers}` ,
                id:3
            },{
                title: 'womens',
                imageUrl: `${womens}`,
                size:'large',
                id:4
            },{
                title: 'mens',
                imageUrl: `${mens}`,
                size:'large',
                id:5
            }]
        }
    }

    render() {
        return (
            <>       
            <div className="directory-menu">
                
              {
                  this.state.sections.map(( {title, imageUrl , id , size } ) => (
                      <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                  ))
              }
            </div>
            </>
        )
    }
}

export default Directory;