namespace FlatApp {
    const {
        Dialog,
        FlatButton,
        TextField,
        RaisedButton
    } = MaterialUi;

    namespace Internal {

        export class App extends React.Component<any, any> {

            constructor(props){
                super(props);

                this.state = {
                    login: "",
                    password: "",
                    isRegister: false
                }

                this.drawLogin = this.drawLogin.bind(this);
                this.loginHandler = this.loginHandler.bind(this);
            }
            
            componentDidMount(){
                this.setState({
                    login: this.props.login,
                    password: this.props.password
                })
            }

            loginHandler(){

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
                    method:"login",
                    login:login,
                    password:password
                }, (obj)=>{

                    Store.dispatch({type:ActionType.EndUpdate});

                    if (obj.success == false) {
                        alert("Неверный логин или пароль!")
                        return;
                    } else if(obj.success == true){
                        this.props.loginDispatch(login, password,obj.balance,obj.address,obj.isAdmin);
                        UpdateEntryList();
                    } else {
                        debugger;
                    }
                });

                /*Store.dispatch({type:ActionType.EndUpdate});
                this.props.loginDispatch(login, password,777,"0x777", true);*/
            }

            drawLogin() {

                const actions = [
                    <FlatButton
                        label="Регистрация"
                        primary={true}
                        onClick={()=>this.setState({isRegister:true})}/>
                ];

                return (
                    <Dialog
                        title="Войти"
                        actions={actions}
                        modal={true}
                        open={this.props.isAuth&&!this.state.isRegister}>
                        <Centered style={{flexDirection:"column",alignItems:"initial"}}>
                            <TextField
                                hintText="user"
                                fullWidth={true}
                                defaultValue={this.props.login}
                                onChange={e=>this.setState({login:(e as any).target.value})}
                                floatingLabelText="Логин"/>
                            <TextField
                                hintText="123"
                                fullWidth={true}
                                floatingLabelText="Пароль"
                                defaultValue={this.props.password}
                                onChange={e=>this.setState({password:(e as any).target.value})}
                                type="password"/>
                            <RaisedButton 
                                label="Войти" 
                                style={{maxWidth:"175px", marginTop: "10px"}}
                                onClick={this.loginHandler}
                                primary={true}/>
                        </Centered>
                    </Dialog>
                );
            }

            render() {
                return (
                    <>
                        <CurrentEntity/>
                        <RegisterDialog isRegister={this.state.isRegister} onRegister={()=>this.setState({isRegister:false})}/>
                        {this.drawLogin()}
                        <Loading visible={this.props.isLoading}/>
                        <MainPage/>
                    </>
                );
            }
        }
    }


    function mapStateToProps (state:FlatState) {
        return {
            isAuth: !(state.isModer||state.isOwner||state.isRenter),
            login: state.login,
            password: state.password,
            isLoading: state.isLoading
        }
    }

    function mapDispatchToProps(dispatch:Redux.Dispatch)
    {
        return {
            loginDispatch: (login: string, password: string, amount: number, addres: string, isModer: boolean) => { dispatch({type:ActionType.Login,login:login,password: password, amount: amount, addres: addres,isModer: isModer}) }
        }
    }

    export const App = ReactRedux.connect(mapStateToProps,mapDispatchToProps)(Internal.App);
}