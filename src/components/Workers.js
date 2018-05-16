import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const Workers = (props)=>{
  const workers = props.workers.map((worker,i)=>{
      return (
          <Link key={i} to={`workers/${worker.name}`} >
            <li>{worker.name} - {worker.status}</li>
          </Link>
      )
  });
  return (
      <div>
        <h1>Workers</h1>
        <ul>
          {workers}
        </ul>
      </div>
  );
};

const mapStateToProps = (state)=>{
    return{
      workers:state.workers
    }
};

export default connect(mapStateToProps)(Workers)