import {connect} from 'react-redux';
const ShowNumberComponent = function(props){
    const {counter} = props;
    return (<div>{counter}</div>)
}

const mapStateToProps = state=>{
    return {
       counter: state.number
    }
}
export default connect(
    mapStateToProps,
    null
)(ShowNumberComponent);