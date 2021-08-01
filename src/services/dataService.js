import Axios from 'axios';
export function getData(){
   return Axios.get('http://localhost/data.php');
};

