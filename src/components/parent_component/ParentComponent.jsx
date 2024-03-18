import ChildComponent from "../child_component/ChildComponent";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
let ParentComponent = ({RenderProp}) => {
    let message = 'I am from Parent component';
    return (
        <>
            <Header />
            <Sidebar /> 
            {RenderProp || <ChildComponent message={message} />}
            {RenderProp && <RenderProp count={5} />}
        </>
    )
}
 export default ParentComponent;