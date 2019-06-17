namespace FlatApp {

    const {
        CircularProgress
    } = MaterialUi;

    export function Loading(props:any = {visible:true}){
        return (
            <div style={{
                position:"fixed",
                top:"0px",
                left:"0px", 
                height:"100%", 
                width:"100%",
                zIndex:9999999999999, 
                display: props.visible?"flex":"none",
                alignItems:"center",
                justifyContent:"center",
                backgroundColor: "rgba(0, 0, 0, 0.8)"}}>
                    <CircularProgress size={80} thickness={5} />
            </div>
        );
    }
}