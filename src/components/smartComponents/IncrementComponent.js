import {incrementNumber} from './../../actions/actionNumber';
import {connect} from 'react-redux';

const IncrementComponent = function (props){
    const {incrementProps} = props;
    const increment=function(){
        incrementProps(10);
    }
    return (<div onClick={increment.bind(this)}>Tăng</div>)
}

const mapDispatchToProps = dispatch => ({
    dispatch,
    incrementProps: (step)=>dispatch(incrementNumber(step))
})

export default connect(
    null,
    mapDispatchToProps
)(IncrementComponent);

/*
function total(a,b){
   let total = a+b;
   const test = function(step){
     return total + step;
   }
   return test;
}

const a = total(10,2)(5);
console.log(a);
*/