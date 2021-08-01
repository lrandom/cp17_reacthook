import {connect} from 'react-redux';
import remoteData from './../../actions/actionData';
const List = function(props) {
    const {loading,list,getDataSuccess,getData} = props;
    return (
        <div>
            <h4>danh sách dữ liệu</h4>
            <ul>
               {
                   list.map((item,index)=>{
                           return (<li key={index}>{item}</li>);
                   })
               } 
            </ul>
            {
                loading && <div>Đang tải dữ liệu</div>
            }
            <button onClick={()=>{getData()}}>Get Data</button>
        </div>
    )
}

const mapAction = (dispatch)=>(
    {
        getData: ()=>dispatch(remoteData())
    }
)

const mapStateToProps = (state)=>({
    loading: state.data.loading,
    list: state.data.list,
    getDataSuccess: state.data.getDataSuccess
})
export default connect(
   mapStateToProps,
   mapAction
)(List)