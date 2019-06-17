namespace FlatApp{
    export function Centered(props:any={style:{}}){
        return (
            <div style={Object.assign({display: "flex", alignItems: "center", justifyContent: "center"},props.style)}>
                {props.children}
            </div>
        );
    }
}