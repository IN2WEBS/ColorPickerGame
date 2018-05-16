import React from 'react';
import {connect} from 'react-redux';

class Services extends React.Component {
  state = {
    cat: ['all', 'free', 'paid'],
    active: 'all'
  };
  // componentDidMount(){
  //   setTimeout(()=>{
  //       this.props.history.push('/workers')
  //   },2000)
  // }

  switchCategory = active => this.setState({active});

  render() {
    const services = this.props.services.filter(service => {
      if(service.category === this.state.active){
        return service
      }else if(this.state.active === 'all'){
        return service
      }
      return null
    }).map((service, i) => {
      return <li key={i}>{service.name} - {service.price}€</li>
    });
    // su filter isfiltruojam ir prijungiam map kurio metu sugeneruojam li el.

    const categories = this.state.cat.map(cat => {
      return <div onClick={() => this.switchCategory(cat)} key={cat}>{cat}</div>
    });


    return (
        <div>
          <h1>Services</h1>
          <nav>
            {categories}
          </nav>
          <ul>
            {services}
          </ul>
          <h2 onClick={()=>this.props.history.push('/')}>go back to home page</h2>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    services: state.services
  }
};
export default connect(mapStateToProps)(Services)