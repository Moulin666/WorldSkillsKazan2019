namespace FlatApp{

    const {
        Dialog,
        FlatButton,
        TextField,
        RaisedButton,
        Chip
    } = MaterialUi;

    const {
        Table,
        TableBody,
        TableHeader,
        TableHeaderColumn,
        TableRow,
        TableRowColumn,
    } = MaterialUi;

    export function statusText(s){
        switch(s){
            case "free":
                return "У собственника"
            case "rental":
                return "Ищет арендатора"
            case "inRental":
                    return "В аренде"
            case "sell":
                return "Выставлена на продажу"
            case "present":
                return "Ожидается дарение"
        }
    }

    export function buildingTypetext(s){
        switch(s){
            case "residental":
                return "Жилая площадь"
            case "notResidental":
                return "Нежилая площадь"
        }
    }

    namespace Internal{

        export class CurrentEntity extends React.Component<any,any>{
            constructor(props){
                super(props);
                this.donateEntry = this.donateEntry.bind(this);
                this.buyEntry = this.buyEntry.bind(this);
                this.rentEntry = this.rentEntry.bind(this);
            }

            componentWillReceiveProps(){
                setTimeout(function(){
                    const inputs = document.querySelectorAll(".readonly>input");
                    inputs.forEach(input=>input.setAttribute('readonly',''));
                },750);
            }

            donateEntry(){
                const state = Store.getState();
                const login = prompt("Введите логин будущего владельца", "user");
                if(login==null) return;
                Store.dispatch({type:ActionType.BeginUpdate});
                RequestWithCallback({
                    method: "sendBuildingToPresent",
                    login: state.login,
                    password: state.password,
                    id: state.currentEntity.buildingId,
                    loginForPresent: login
                },obj=>{
                    if(obj.success==false){
                        alert("Не удалось подарить");
                        Store.dispatch({type:ActionType.EndUpdate});
                        return;
                    } else if(obj.success==true){
                        alert("Ожидание подтверждения");
                        Store.dispatch({type:ActionType.EndUpdate});
                        setTimeout(()=>{
                            Store.dispatch({type:ActionType.CloseEntity});
                        },100);
                        setTimeout(()=>UpdateEntryList(),500);
                        return;
                    } else {
                        debugger;
                    }
                });
                //10.50.192.251/?method=sendBuildingToPresent&login=user1&password=test&id=1&loginForPresent=admin
            }

            rentEntry(){
                const state = Store.getState();
                const entity : Entity = this.props.currentEntity;

                if(confirm("Вы точно хотите снять имущество в аренду по цене "+this.props.currentEntity.price+"?")){
                    Store.dispatch({type:ActionType.BeginUpdate});
                    RequestWithCallback({
                        method:"rentBuilding",
                        login: state.login,
                        password: state.password,
                        buildingId: state.currentEntity.buildingId,
                        price: this.props.currentEntity.price
                    },obj=>{
                        if(obj.success==false){
                            alert("Не удалось арендовать");
                            Store.dispatch({type:ActionType.EndUpdate});
                            return;
                        } else if(obj.success==true){
                            alert("Ожидание подтверждения");
                            Store.dispatch({type:ActionType.EndUpdate});
                            setTimeout(()=>{
                                Store.dispatch({type:ActionType.CloseEntity});
                            },100);
                            setTimeout(()=>UpdateEntryList(),500);
                            return;
                        } else {
                            debugger;
                        }
                    });

                    //10.50.192.251/?method=rentBuilding&login=admin&password=admin&buildingId=1&price=10
                }
            }

            buyEntry(){

                const state = Store.getState();
                const entity : Entity = this.props.currentEntity;

                if(confirm("Вы точно хотите купить имущество по цене "+this.props.currentEntity.price+"?")){
                    Store.dispatch({type:ActionType.BeginUpdate})
                    RequestWithCallback({
                        method: "buyBuilding",
                        login: state.login,
                        password: state.password,
                        id: entity.buildingId,
                        price: entity.price
                    },obj=>{
                        if(obj.success==false){
                            alert("Не удалось купить");
                            Store.dispatch({type:ActionType.EndUpdate});
                            return;
                        } else if(obj.success==true){
                            alert("Ожидание подтверждения");
                            Store.dispatch({type:ActionType.EndUpdate});
                            setTimeout(()=>{
                                Store.dispatch({type:ActionType.CloseEntity});
                            },100);
                            setTimeout(()=>UpdateEntryList(),500);
                            return;
                        } else {
                            debugger;
                        }
                    });
                    //10.50.192.251/?method=buyBuilding&login=user1&password=test&id=1&price=100
                }
            }

            renderContent(){

                if(this.props.currentEntity){

                    const {
                        buildingId,
                        title,
                        square,
                        ownerLogin,
                        status,
                        buildingType,
                        useTime,
                        actionTime,
                        toRentalTime,
                        price
                    } = this.props.currentEntity;

                    const chipContainer : React.CSSProperties = {
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        paddingTop: "15px"
                    }

                    const entity : Entity = this.props.currentEntity;

                    return (
                        <>
                            <TextField
                                className="readonly"
                                floatingLabelText="Наименование (title)"
                                defaultValue={title}
                                fullWidth={true}/>
                            <TextField
                                className="readonly"
                                floatingLabelText="Идентификатор владения (buildingId)"
                                defaultValue={buildingId}
                                fullWidth={true}/>
                            <TextField
                                className="readonly"
                                floatingLabelText="Цена (price)"
                                defaultValue={price}
                                fullWidth={true}/>
                            <TextField
                                className="readonly"
                                floatingLabelText="Заявленная площадь (square)"
                                defaultValue={square}
                                fullWidth={true}/>
                            <TextField
                                className="readonly"
                                floatingLabelText="Текущий владелец (login)"
                                defaultValue={ownerLogin}
                                fullWidth={true}/>
                            <TextField
                                className="readonly"
                                floatingLabelText="Статус (status)"
                                defaultValue={statusText(status)+" ("+status+")"}
                                fullWidth={true}/>
                            <TextField
                                className="readonly"
                                floatingLabelText="Тип строения (buildingType)"
                                defaultValue={buildingTypetext(buildingType)+" ("+buildingType+")"}
                                fullWidth={true}/>
                            <TextField
                                className="readonly"
                                floatingLabelText="C начала вледения (useTime)"
                                defaultValue={useTime}
                                fullWidth={true}/>
                            <TextField
                                className="readonly"
                                floatingLabelText="Время на покупку (actionTime)"
                                defaultValue={actionTime}
                                fullWidth={true}/>
                            <TextField
                                className="readonly"
                                floatingLabelText="Срок аренды (toRentalTime)"
                                defaultValue={toRentalTime}
                                fullWidth={true}/>
                            <div style={chipContainer}>
                                {
                                    (function(){
                                        if(entity.ownerLogin==this.props.login){
                                            return <>
                                                <SellsChip/>
                                                <RentChip/>
                                                <Chip style={{margin: "4px"}} onClick={this.donateEntry}>Подарить имущество</Chip>
                                            </>
                                        } else if(entity.ownerLogin!=this.props.login&&entity.status=="sell"){
                                            return <>
                                                <Chip style={{margin: "4px"}} onClick={this.buyEntry}>Приобрести имущество</Chip>
                                            </>
                                        } else if(entity.renterLogin!=this.props.login&&entity.status=="rental"){
                                            return <>
                                                <Chip style={{margin: "4px"}} onClick={this.rentEntry}>Арендовать имущество</Chip>
                                            </>
                                        } else {
                                            console.log("ViewSells: Логин владельца не соответствует логину пользователя")
                                            return <></>
                                        }
                                    }).bind(this)()
                                }
                            </div>
                        </>
                    );

                }
            }

            render(){

                const actions = [
                    <FlatButton
                        label="Закрыть"
                        primary={true}
                        onClick={this.props.close}/>
                ];    

                return (
                    <Dialog
                        title="Имущество"
                        actions={actions}
                        modal={true}
                        autoScrollBodyContent={true}
                        open={this.props.isDisplayed}>
                            {
                                this.renderContent()
                            }
                        </Dialog>
                );
            }
        }
    }

    function mapStateToProps (state:FlatState) {
        return {
            isDisplayed: state.currentEntity != null,
            currentEntity: state.currentEntity,
            isOwner: state.isOwner,
            isModer: state.isModer,
            isRenter: state.isRenter,
            login: state.login
        }
    }

    function mapDispatchToProps(dispatch:Redux.Dispatch)
    {
        return {
            close: () => { dispatch({type:ActionType.CloseEntity}) }
        }
    }


    export const CurrentEntity = ReactRedux.connect(mapStateToProps,mapDispatchToProps)(Internal.CurrentEntity);
}