namespace FlatApp {

    const {
        Tabs,
        Tab,
        BottomNavigation,
        BottomNavigationItem
    } = MaterialUi;

    const {
        Table,
        TableBody,
        TableHeader,
        TableHeaderColumn,
        TableRow,
        TableRowColumn,
        RaisedButton,
        Popover,
        Menu,
        MenuItem
    } = MaterialUi;


    const {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} = MaterialUi;

    namespace Internal {

        interface LiteEntity {
            title: string;
            buildingId: number;
        }

        export class OwnershipConfirm extends React.Component<any,any>{
            constructor(props){
                super(props);
                this.state={
                    list:[]
                }
            }
            componentDidMount(){
                
                const state = Store.getState();
                
                Store.dispatch({type:ActionType.BeginUpdate});

                RequestWithCallback({
                    method: "getMyRequests",
                    login: state.login,
                    password: state.password
                },obj=>{
                    Store.dispatch({type:ActionType.EndUpdate});
                });

                //10.50.192.251/?method=getMyRequests&login=user1&password=test
            }
            render(){
                return (
                    <Table multiSelectable={false} >
                        <TableHeader>
                            <TableRow>
                                <TableHeaderColumn>Идентификатор</TableHeaderColumn>
                                <TableHeaderColumn>Наименование</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                        {
                            this.state.list.map((item : LiteEntity, i) => {
                                return (
                                    <TableRow key={i} selectable={false}>
                                        <TableRowColumn>{item.buildingId}</TableRowColumn>
                                        <TableRowColumn>{item.title}</TableRowColumn>
                                    </TableRow>
                                );
                            })
                        }
                        </TableBody>
                    </Table>
                );
            }
        }

        export class MyFlat extends React.Component<any,any>{

            constructor(props){
                super(props);

                this.state = {
                    currentTab: "all",
                    subTabIndex: 0,
                    open: false,
                }

            }
            handleClick = (event) => {
                // This prevents ghost click.
                event.preventDefault();
            
                this.setState({
                  open: true,
                  anchorEl: event.currentTarget,
                });
              };
            
              handleRequestClose = () => {
                this.setState({
                  open: false,
                });
            };

            render(){
                return (
                    <Tabs value={this.state.currentTab} onChange={tab => this.setState({currentTab: tab})}>
                        <Tab label="Владение" value={"all"}>
                        <Toolbar style={{backgroundColor: "transparent",marginBottom: "20px", marginTop:"15px"}}>
                                <ToolbarGroup firstChild={true}>
                                    <ToolbarTitle style={{marginLeft: "19px"}} text="Владение/Подтверждение владения" />
                                </ToolbarGroup>
                                <ToolbarGroup>
                                    <div>
                                        <RaisedButton
                                            onClick={this.handleClick}
                                            label="Переключить"/>
                                        <Popover
                                            open={this.state.open}
                                            anchorEl={this.state.anchorEl}
                                            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                                            targetOrigin={{horizontal: 'left', vertical: 'top'}}
                                            onRequestClose={()=>this.setState({open: false,})}>
                                            <Menu>
                                                <MenuItem primaryText="Моё имущество" onClick={()=>this.setState({open: false, subTabIndex:0})}/>
                                                <MenuItem primaryText="Ожидает подтверждения" onClick={()=>this.setState({open: false, subTabIndex:1})}/>
                                            </Menu>
                                        </Popover>
                                    </div>

                                </ToolbarGroup>
                            </Toolbar>
                            {
                                (function(){
                                    if(this.state.subTabIndex==0){
                                        return <AllTab isFree={true} ownerLogin={this.props.ownerLogin}/>
                                    } else if (this.state.subTabIndex==1){
                                        return <OwnershipConfirm/>
                                    } else {
                                        debugger;
                                    }
                                }).bind(this)()
                            }
                        </Tab>
                        <Tab label="В продаже" value={"rent"}>
                            <SellTab ownerLogin={this.props.ownerLogin}/>
                        </Tab>
                        <Tab label="В аренде" value={"sell"}>
                            <RentTab ownerLogin={this.props.ownerLogin}/>
                        </Tab>
                    </Tabs>
                );
            }
        }
    }

    function mapStateToProps (state: FlatState) {
        return {
            ownerLogin: state.login
        }
    }

    function mapDispatchToProps(dispatch:Redux.Dispatch)
    {
        return {
            //increment: () => { dispatch({type:ActionType.Increment}) }
        }
    }


    export const MyFlat = ReactRedux.connect(mapStateToProps,mapDispatchToProps)(Internal.MyFlat);
}