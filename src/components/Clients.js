import React from 'react';
import {connect} from 'react-redux';

const Clients = (props)=>{
    console.log(props);
    const clients = props.clients.map((client,i)=>{
        return <li key={i}>{client}</li>
    });
    return (
        <div>
          <h1>Clients</h1>
          <ul>
            {clients}
          </ul>
        </div>
    );
};

const mapStateToProps = (state)=>{
    return {
      clients:state.clients
    }
}

export default connect(mapStateToProps)(Clients)