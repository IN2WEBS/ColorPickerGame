const initialState=[
  {
    name:'Emails',
    category:'free',
    price:0
  },
  {
    name:'Advertisement',
    category:'paid',
    price:10
  },
  {
    name:'Support',
    category:'free',
    price:0
  },
  {
    name:'Delivery',
    category:'paid',
    price:5
  },
];

const services = (state=initialState, action)=>{
  return state;
};

export default services