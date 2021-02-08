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
                id:1,
                linkUrl:'hats'
            },{
                title: 'jackets',
                imageUrl: `${jackets}`,
                id:2,
                linkUrl:'jackets'
            },{
                title: 'sneakers',
                imageUrl: `${sneakers}` ,
                id:3,
                linkUrl:'sneakers'
            },{
                title: 'womens',
                imageUrl: `${womens}`,
                size:'large',
                id:4,
                linkUrl:'womens'
            }
            ,{
                title: 'mens',
                imageUrl: `${mens}`,
                size:'large',
                id:5,
                linkUrl:'mens'
            }]
        }
    }

    render() {
        return (
            <>       
            <div className="directory-menu">
                
              {
                  this.state.sections.map(( { id , ...otherSectionProps} ) => (
                      <MenuItem key={id} {...otherSectionProps} />
                  ))
              }
            </div>
            </>
        )
    }
}

export default Directory;