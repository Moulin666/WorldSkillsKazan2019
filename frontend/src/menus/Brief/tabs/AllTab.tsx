namespace FlatApp{

    const {
        Table,
        TableBody,
        TableHeader,
        TableHeaderColumn,
        TableRow,
        TableRowColumn,
        RaisedButton
    } = MaterialUi;

    namespace Internal{
        export class AllTab extends React.Component<any,any>{
            constructor(props){
                super(props);
            }

            render(){
                return (
                    <Table multiSelectable={false} >
                        <TableHeader>
                            <TableRow>
                                <TableHeaderColumn>Наименование</TableHeaderColumn>
                                <TableHeaderColumn>Владелец</TableHeaderColumn>
                                <TableHeaderColumn>Арендатор</TableHeaderColumn>
                                <TableHeaderColumn>Просмотр данных</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                        {
                            this.props.entityList.map((item : Entity, i) => {

                                if(this.props.ownerLogin && item.ownerLogin != this.props.ownerLogin){
                                    return <None key={i}/>
                                }

                                if(this.props.renterLogin){
                                    if(item.renterLogin != this.props.renterLogin){
                                        return <None key={i}/>
                                    }
                                    if(item.ownerLogin == item.renterLogin){
                                        return <None key={i}/>
                                    }
                                }

                                if(this.props.isFree && item.status != "free"){
                                    return <None key={i}/>
                                }

                                return (
                                    <TableRow key={i} selectable={false}>
                                        <TableRowColumn>{item.title}</TableRowColumn>
                                        <TableRowColumn>{item.ownerLogin}</TableRowColumn>
                                        <TableRowColumn>{item.renterLogin==""?"-":item.renterLogin}</TableRowColumn>
                                        <TableRowColumn>
                                            <Centered>
                                                <RaisedButton label="Просмотр" onClick={()=>this.props.showEntity(item)} />
                                            </Centered>
                                        </TableRowColumn>
                                    </TableRow>
                                );
                            })
                        }
                        </TableBody>
                    </Table>
                );
            }
        }
    }

    function mapStateToProps (state:FlatState) {
        return {
            entityList: state.entityList
        }
    }

    function mapDispatchToProps(dispatch:Redux.Dispatch)
    {
        return {
            close: () => { dispatch({type:ActionType.CloseEntity}) },
            showEntity: (entity) => {dispatch({type:ActionType.ShowEntity,entity:entity}) }
        }
    }


    export const AllTab = ReactRedux.connect(mapStateToProps,mapDispatchToProps)(Internal.AllTab);
}