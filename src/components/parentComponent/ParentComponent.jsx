import ChildComponent from "../childComponent/ChildComponent";
let ParentComponent = ({RenderProp}) => {
    let message = 'I am from Parent component';
    return (
        <>
            <ChildComponent message={message} />
            <RenderProp count={5} />
        </>
    )
}
 export default ParentComponent;