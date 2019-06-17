namespace FlatApp {

    const {
        Tabs,
        Tab
    } = MaterialUi;

    const {
        Table,
        TableBody,
        TableHeader,
        TableHeaderColumn,
        TableRow,
        TableRowColumn,
        RaisedButton
    } = MaterialUi;

    export class DonationConfirm extends React.Component<any, any> {
        constructor(props){
            super(props);
            this.state = {
                list: [
                    {buildingId:777, title: "Имя",square: 777, ownerLogin: "admin",renterLogin:"pahom", timeToAction: 10, status:"free",buildingType:"residental",useTime:777, price:777}
                ]
            }
            this.confirmEntity = this.confirmEntity.bind(this);
            this.cancelEntity = this.cancelEntity.bind(this);
        }

        componentDidMount(){
            const state = Store.getState();
            RequestWithCallback({
                method:"getPresents",
                login: state.login,
                password: state.password
            },obj=>{

            })
            //10.50.192.251/?method=getPresents&login=user1&password=test
        }

        confirmEntity(item: Entity){
            console.log(item);
        }

        cancelEntity(item: Entity){
            console.log(item);
        }

        render(){
            return (
                <Tabs value={"all"}>
                    <Tab label="Подарки для вас" value={"all"}>
                        <Table multiSelectable={false} >
                            <TableHeader>
                                <TableRow>
                                    <TableHeaderColumn>Наименование</TableHeaderColumn>
                                    <TableHeaderColumn>Текущий владелец</TableHeaderColumn>
                                    <TableHeaderColumn>Принять</TableHeaderColumn>
                                    <TableHeaderColumn>Отказаться</TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                            {
                                this.state.list.map((item : Entity, i) => {
                                    return (
                                        <TableRow key={i} selectable={false}>
                                            <TableRowColumn>{item.title}</TableRowColumn>
                                            <TableRowColumn>{item.ownerLogin}</TableRowColumn>
                                            <TableRowColumn>
                                                <Centered>
                                                    <RaisedButton label="Принять" primary={true} onClick={()=>this.confirmEntity(item)} />
                                                </Centered>
                                            </TableRowColumn>
                                            <TableRowColumn>
                                                <Centered>
                                                    <RaisedButton label="Отказаться" secondary={true} onClick={()=>this.cancelEntity(item)} />
                                                </Centered>
                                            </TableRowColumn>
                                        </TableRow>
                                    );
                                })
                            }
                            </TableBody>
                        </Table>
                    </Tab>
                </Tabs>
            );
        }
    }
}