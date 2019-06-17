namespace FlatApp{

    const {
        Dialog,
        FlatButton,
        TextField,
        RaisedButton
    } = MaterialUi;

    export class RegisterDialog extends React.Component<any,any>{

        constructor(props){
            super(props);
            this.state={
                login:"",
                password:""
            }
            this.register = this.register.bind(this);
        }

        register(){
            const {login, password} = this.state;

            if(login == ""){
                alert("Логин пустой.")
                return;
            }

            if(password == ""){
                alert("Пароль не указан")
                return;
            }

            if(!validateLatinString(login)){
                alert("Логин включает символы не из латинского алфавита");
                return;
            }

            if(!validateLatinString(password)){
                alert("Пароль включает символы не из латинского алфавита");
                return;
            }

            Store.dispatch({type:ActionType.BeginUpdate});

            FlatApp.RequestWithCallback({
                method:"register",
                login:this.state.login,
                password:this.state.password
            }, (obj)=>{

                Store.dispatch({type:ActionType.EndUpdate});

                if(obj.success==false){
                    alert("Не удалось зарегистрироваться!")
                    return;
                } else if(obj.success==true){
                    alert("Регистрация успешно завершена! Ваш адрес: "+obj.addres);
                    window.location.reload();
                    return;
                } else {
                    debugger;
                }

            });
        }

        render(){

            const actions = [
                <FlatButton
                    label="Закрыть"
                    primary={true}
                    onClick={this.props.onRegister}/>
            ];

            return (
                <Dialog
                    title="Регистрация"
                    actions={actions}
                    modal={true}
                    open={this.props.isRegister}>
                    <Centered style={{flexDirection:"column",alignItems:"initial"}}>
                        <TextField
                            hintText="user"
                            fullWidth={true}
                            onChange={e=>this.setState({login:(e as any).target.value})}
                            floatingLabelText="Логин"/>
                        <TextField
                            hintText="123"
                            fullWidth={true}
                            floatingLabelText="Пароль"
                            onChange={e=>this.setState({password:(e as any).target.value})}
                            type="password"/>
                        <RaisedButton 
                            label="Зарегистрироваться" 
                            style={{maxWidth:"225px", marginTop: "10px"}}
                            onClick={this.register}
                            primary={true}/>
                    </Centered>
                </Dialog>
            );
        }
    }
}