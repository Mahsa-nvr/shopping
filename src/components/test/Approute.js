import React from 'react';
import { Route , Link } from 'react-router-dom';

const HomePage = (props) => {
    console.log(props)
    return (
        <div>
            <Link to="/topics">topics</Link>
            <button onClick={() => props.history.push('/topics')}>topic</button>
            <h1>home page</h1>
        </div>
    )
}

const TopicList = (props) => {
    let a = 33
    console.log(props, 'test')
    return (
        <div> 
            <h1>topic list page</h1>
            <Link to={`${props.match.url}/${a}`}>to topic {a}</Link>
            <Link to={`${props.match.url}/17`}>to topic 17</Link>
            <Link to={`${props.match.url}/19`}>to topic 19</Link>
        </div>
    )
}

const TopicDetail = (props) => {
    console.log(props)
    return (
        <div> 
            <h1>topic detail : {props.match.params.topicId} </h1>
        </div>
    )
}


function Approute() {
    return (
        <div>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/topics" component={TopicList}/>
          <Route path="/topics/:topicId" component={TopicDetail}/>
          
        </div>
    )
}

export default Approute;