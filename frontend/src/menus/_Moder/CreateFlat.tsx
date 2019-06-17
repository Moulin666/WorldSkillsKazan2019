
/// <reference path="../../dialogs/CurrentEntity.tsx"/>

namespace FlatApp {

    const {
        Paper,
        TextField,
        Divider,
        SelectField,
        MenuItem
    } = MaterialUi;

    const {
        Toolbar, 
        ToolbarGroup, 
        ToolbarSeparator, 
        ToolbarTitle,
        RaisedButton
    } = MaterialUi;



    export class CreateFlat extends React.Component<any,any>{

        constructor(props){
            super(props);

            this.state = {
                title: "",
                square: 0,
                login: "",
                buildingType: "",
            }

            this.createFlat = this.createFlat.bind(this);
        }

        updateSquare(v: string){
            if(v==""){
                this.setState({square: 0});
            } else if(parseInt(v)!=NaN) {
                this.setState({square: parseInt(v)})
            } else {
                debugger;
            }
        }

        createFlat() {
            if(this.state.title == ""){
                alert("Не указано наименование!");
                return;
            }
            if(this.state.square == 0){
                alert("Не указана площадь!");
                return;
            }
            if(this.state.login == ""){
                alert("Не указан логин владельца!");
                return;
            }
            if(this.state.buildingType == ""){
                alert("Не указан тип сооружения!");
                return;
            }
            if(!validateLatinString(this.state.title)){
                alert("Наименование включает символы не из латинского алфавита");
                return;
            }

            if(!validateLatinString(this.state.login)){
                alert("Логин владельца включает символы не из латинского алфавита");
                return;
            }

            const state = Store.getState();

            Store.dispatch({type:ActionType.BeginUpdate});
            RequestWithCallback({
                method: "createBuilding", 
                login: state.login, 
                password: state.password,
                loginToBuild: this.state.login,
                title: this.state.title,
                square: this.state.square,
                buildingType: this.state.buildingType
            }, obj=>{
                if(obj.success == true){
                    alert("Имущество успешно создано!");
                    UpdateEntryList();
                } else if (obj.success == false) {
                    alert("Не удалось создать имущество");
                } else {
                    debugger;
                }
                Store.dispatch({type:ActionType.EndUpdate});
            });
            //10.50.192.251/?method=createBuilding&login=admin&password=admin&loginToBuild=user1&title=Some House&square=100&buildingType=residental
        }

        render(){
            return (
                <Centered style={{height: "calc(100% - 64px)", position: "fixed", left: "0px", top: "64px", width: "100%"}}>
                    <Paper style={{margin:"5px", minWidth: "600px"}} zDepth={2}>
                        <div style={{padding: "10px"}}>
                            <TextField
                                floatingLabelText="Наименование (title)"
                                underlineShow={false}
                                fullWidth={true}
                                onChange={e=>this.setState({title:(e as any).target.value})}/>
                            <Divider />
                            <TextField
                                floatingLabelText="Заявленная площадь (square)"
                                underlineShow={false}
                                fullWidth={true}
                                defaultValue={this.state.square}
                                value={this.state.square}
                                onChange={e=>this.updateSquare((e as any).target.value)}/>
                            <Divider />
                            <TextField
                                floatingLabelText="Текущий владелец (login)"
                                underlineShow={false}
                                fullWidth={true}
                                onChange={e=>this.setState({login:(e as any).target.value})}/>
                            <Divider />
                            <SelectField
                                style={{paddingBottom:"10px"}}
                                floatingLabelText="Тип строения (buildingType)"
                                fullWidth={true}
                                value={this.state.buildingType}
                                onChange={(nu1, nu2, value)=>this.setState({buildingType:value})}>
                                <MenuItem value={"residental"} primaryText="Жилое" />
                                <MenuItem value={"notResidental"} primaryText="Не жилое" />
                                </SelectField>
                            <div style={{backgroundColor: "transparent", minWidth:"25px"}}/>
                        </div>

                        <Toolbar>
                            <ToolbarGroup firstChild={true}>
                                <ToolbarTitle style={{paddingLeft:"17px"}} text="Создание имущества" />
                            </ToolbarGroup>
                            <ToolbarGroup>
                                <ToolbarSeparator />
                                <RaisedButton label="Создать" primary={true} onClick={this.createFlat} />
                            </ToolbarGroup>
                        </Toolbar>
                    </Paper>
                </Centered>
            );
        }
    }
}