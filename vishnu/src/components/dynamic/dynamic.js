import {useParams} from 'react-router-dom';
function Dynamic(){
    const {pname,pid} = useParams();
    return (<div>Dynamic - url --- {pname} == {pid}</div>)
}
export default Dynamic;