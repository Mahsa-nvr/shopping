import React from 'react';
import MenuItem from '../menu-item/menu-item.component.jsx';

import './directory.style.scss'; 


class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [{
                title: 'hats',
                imageUrl: 'https://i.ibb.co/cvpntl1/hats.png',
                id:1
            },{
                title: 'jackets',
                imageUrl: 'https://i.ibb.co/cvpntl1/hats.png',
                id:2
            },{
                title: 'womens',
                imageUrl: 'https://i.ibb.co/cvpntl1/hats.png',
                id:3
            }]
        }
    }

    render() {
        return (
            <div className="directory-menu">
              {
                  this.state.sections.map(( {title, imageUrl , id }) => (
                      <MenuItem key={id} title={title} />
                  ))
              }
            </div>
        )
    }
}

export default Directory;