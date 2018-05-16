import React from 'react';
// 1# state prijungimas
// 2# randat ta darbuotoja kurio vardas == url pabaigai
// 3# atvaizduojat to darbuotojo aprasymus
import {connect} from 'react-redux';

const SingleWorker = (props) => {
  console.log(props);
  const url = props.match.params.worker;

  let worker = props.workers.filter(w=>w.name===url);
  worker=worker[0];
  return (
      <div>
        {worker ?
            <div>
              <h1>{worker.name}</h1>
              <h2>{worker.status}</h2>
              <p>{worker.description}</p>
            </div>:
            <h1>Worker not found</h1>
        }
      </div>
  );
};
const mapStateToProps = (state)=>{
    return{
      workers:state.workers
    }
};
export default connect(mapStateToProps)(SingleWorker)