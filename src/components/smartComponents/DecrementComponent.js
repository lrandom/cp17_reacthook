import {decrementNumber} from './../../actions/actionNumber';
import {connect} from 'react-redux';

const DecrementComponent = function (props){
    const {decrementProps} = props;
    const decrement=function(){
        decrementProps(10);
    }
    return (<div onClick={decrement.bind(this)}>Giảm</div>)
}

const mapDispatchToProps = dispatch => ({
    dispatch,
    decrementProps: (step)=>dispatch(decrementNumber(step))
})

export default connect(
    null,
    mapDispatchToProps
)(DecrementComponent);

