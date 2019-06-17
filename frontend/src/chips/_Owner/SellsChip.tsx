namespace FlatApp {

    const {
        Chip,
        Dialog,
        FlatButton,
        Toggle,
        Divider,
        TextField,
        Slider
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

    namespace Internal{
        export class SellsChip extends React.Component<any, any>{
            constructor(props){
                super(props);
                this.state = {
                    isActive: false,
                    loaded: false,
                    expired: 25,
                    price: 100,
                    list: [
                        {login: "test"}
                    ]
                }
                this.toggleDialog = this.toggleDialog.bind(this);
                this.chooseSubject = this.chooseSubject.bind(this);
                this.toggleSell = this.toggleSell.bind(this);
            }

            componentDidMount(){
                const store = Store.getState();
                if(this.props.currentEntity != null){
                    const entity : Entity = this.props.currentEntity;
                    this.setState({
                        expired: entity.timeToAction,
                        price: entity.price
                    })
                }
            }

            componentDidUpdate(){
                const store = Store.getState();
                const entity : Entity = this.props.currentEntity;

                if(this.props.currentEntity != null){
                    if(this.state.isActive == true && this.state.loaded == false){
                        Store.dispatch({type: ActionType.BeginUpdate});
                        RequestWithCallback({
                            method: "getBuildingsRequests",
                            login: store.login,
                            password: store.password,
                            id: entity.buildingId
                        },obj=>{
                            Store.dispatch({type: ActionType.EndUpdate});

                            if(obj.success == false){
                                this.setState({list:[], loaded: true})
                            } else if (obj.success == true){
                                let list : Subject[] = [];
                                const buildingsRequests : Array<any> = obj.buildingsRequests;
                                for(let i=0;i!=buildingsRequests.length;i++){
                                    const item = buildingsRequests[i];
                                    list.push({login:item.user, key: item.buildingId});
                                }
                                this.setState({list:list, loaded: true})
                            } else {
                                debugger;
                            }
                            
                        });
                        //10.50.192.251/?method=getBuildingsRequests&login=test100&password=admin&id=1
                    }
                }
            }

            chooseSubject(item: Subject) {

                const state = Store.getState();
                const entity = state.currentEntity;

                RequestWithCallback({
                    method: "acceptBuyBuilding",
                    login: state.login,
                    password: state.password,
                    buildingId: entity.buildingId,
                    requestId: item.key
                },obj=>{
                    if(obj.success == true){
                        alert("Операция выполнена успешно!");
                        setTimeout(()=>Store.dispatch({type:ActionType.CloseEntity}),100);
                        setTimeout(()=>UpdateEntryList(),500);
                    } else if (obj.success == false) {
                        alert("Не удалось выполнить операцию");
                    } else {
                        debugger;
                    }
                    Store.dispatch({type:ActionType.EndUpdate});
                });

                //10.50.192.251/?method=acceptBuyBuilding&login=admin&password=admin&buildingId=1&requestId=1
                UpdateEntryList();
            }

            toggleSell(){

                const state = Store.getState();
                const entity : Entity = this.props.currentEntity;

                Store.dispatch({type:ActionType.BeginUpdate});
                if (this.props.currentEntity.status=="free") {

                    RequestWithCallback({
                        method: "sendBuildingToSell",
                        login: state.login,
                        password: state.password,
                        id: entity.buildingId,
                        price: this.state.price,
                        timeToSell: this.state.expired
                    }, obj=>{
                        if(obj.success == true){
                            alert("Операция выполнена успешно!");
                            setTimeout(()=>UpdateEntryList(),500);
                            Store.dispatch({type:ActionType.EndUpdate});
                        } else if (obj.success == false) {
                            alert("Произошла ошибка.");
                            Store.dispatch({type:ActionType.EndUpdate});
                        } else {
                            debugger;
                        } 
                    });

                    //10.50.192.251/?method=sendBuildingToSell&login=user1&password=test&id=1&price=1000&timeToSell=500

                } else if (this.props.currentEntity.status=="sell") {

                    RequestWithCallback({
                        method: "cancelBuildingSell",
                        login: state.login,
                        password: state.password,
                        id: entity.buildingId
                    }, obj=>{
                        if(obj.success == true){
                            alert("Операция выполнена успешно!");
                            setTimeout(()=>UpdateEntryList(),500);
                            Store.dispatch({type:ActionType.EndUpdate});
                        } else if (obj.success == false) {
                            alert("Произошла ошибка.");
                            Store.dispatch({type:ActionType.EndUpdate});
                        } else {
                            debugger;
                        } 
                    });

                    //10.50.192.251/?method=cancelBuildingSell&login=user1&password=test&id=1
                    
                } else {
                    debugger;
                }
            }

            updatePrice(v: string){
                if(v==""){
                    this.setState({price: 0});
                } else if(parseInt(v)!=NaN) {
                    this.setState({price: parseInt(v)})
                } else {
                    debugger;
                }
            }

            toggleDialog() {
                const isActive: boolean = !this.state.isActive;
                if (isActive) {
                    this.setState({isActive: true});
                } else {
                    this.setState({isActive:false,loaded: false});
                }
            }

            render(){

                let entity : Entity | {status: "free" | "sell"} = this.props.currentEntity;
                if(entity==null){
                    entity = {status:"free"}
                }

                return (
                    <>
                        <Dialog
                            title="Продажа имущества"
                            actions={[<FlatButton
                                label="Закрыть"
                                primary={true}
                                onClick={this.toggleDialog}/>]}
                            modal={true}
                            open={this.state.isActive}
                            autoScrollBodyContent={true}>
                            <Toggle
                                label="Выставлено на продажу"
                                defaultToggled={entity.status=="sell"}
                                disabled={!(entity.status=="free"||entity.status=="sell")}
                                onToggle={this.toggleSell}
                                style={{paddingBottom:"10px"}}/>
                            <TextField
                                floatingLabelText="Стоимость продажи"
                                defaultValue={this.state.price}
                                value={this.state.price}
                                disabled={entity.status!="free"}
                                onChange={e=>this.updatePrice((e as any).target.value)}
                                fullWidth={true}/>

                            <div style={{display:"flex", alignItems:"stretch", alignContent:"stretch"}}>
                                <Slider
                                    min={1}
                                    max={50000}
                                    step={1}
                                    value={this.state.expired}
                                    style={{"flex":"1"}}
                                    disabled={entity.status!="free"}
                                    onChange={(e,value)=>this.setState({expired: value})}/>
                                    <div style={{textAlign:"center", minWidth: "45px", marginTop: "24px", paddingLeft:"9px"}}>{this.state.expired}</div>   
                            </div>
                            <Table multiSelectable={false} >
                                <TableHeader>
                                    <TableRow>
                                        <TableHeaderColumn>Порядковый номер</TableHeaderColumn>
                                        <TableHeaderColumn>Логин</TableHeaderColumn>
                                        <TableHeaderColumn>Выбрать</TableHeaderColumn>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                {
                                    this.state.list.map((item : Subject, i) => {
                                        return (
                                            <TableRow key={i} selectable={false}>
                                                <TableRowColumn>{(i+1).toString()}</TableRowColumn>
                                                <TableRowColumn>{item.login}</TableRowColumn>
                                                <TableRowColumn>
                                                    <Centered>
                                                        <RaisedButton disabled={!(entity.status=="free"||entity.status=="sell")} label="Выбрать" onClick={()=>this.chooseSubject(item)} />
                                                    </Centered>
                                                </TableRowColumn>
                                            </TableRow>
                                        );
                                    })
                                }
                                </TableBody>
                            </Table>
                        </Dialog>
                        <Chip style={{margin: "4px"}} onClick={this.toggleDialog}>Продажа имущества</Chip>
                    </>
                );
            }
        }
    }

    function mapStateToProps (state: FlatState) {
        return {
            currentEntity: state.currentEntity,
        }
    }

    function mapDispatchToProps(dispatch:Redux.Dispatch)
    {
        return {
            //increment: () => { dispatch({type:ActionType.Increment}) }
        }
    }

    export const SellsChip = ReactRedux.connect(mapStateToProps,mapDispatchToProps)(Internal.SellsChip);
}