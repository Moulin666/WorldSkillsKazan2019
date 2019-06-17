
// <reference path="../classes/ItemParser.ts" />

namespace FlatApp
{
    const {
        AppBar,
        MuiThemeProvider,
        Drawer,
        MenuItem,
        IconMenu,
        TextField,
        Tabs,
        Tab,
        IconButton
    } = MaterialUi;

    const {
        Card,
        CardHeader,
        CardMedia,
        CardTitle,
        CardText,
        CardActions,
        FlatButton
    } = MaterialUi;

    namespace Internal
    {
        export class MainPage extends React.Component<any,any>
        {
        
            constructor(props: any)
            {
                super(props);

                this.state = {
                    drawerOpen: false,
                    currentMenu: AppMenu.Brief
                };

                this.renderMenu = this.renderMenu.bind(this);
                this.selectMenu = this.selectMenu.bind(this);
            }

            toggleDrawer = () => this.setState({drawerOpen: !this.state.drawerOpen});

            renderMenu(){
                switch(this.state.currentMenu){
                    case AppMenu.Brief:
                        return <Brief/>
                    case AppMenu.CreateFlat:
                        return <CreateFlat/>
                    case AppMenu.MyFlat:
                        return <MyFlat/>
                    case AppMenu.MyRent:
                        return <MyRent/>
                    case AppMenu.DonationConfirm:
                        return <DonationConfirm/>
                }
            }

            selectMenu(menu: AppMenu){
                this.setState({currentMenu: menu});
                this.toggleDrawer();
            }

            render()
            {

                const iconRight = <FlatButton label={"Баланс: "+this.props.amount.toString()+" (обновить)"} onClick={()=>UpdateEntryList()}/>
                
                return (          
                    <MuiThemeProvider>
                        <Drawer docked={false} open={this.state.drawerOpen} onRequestChange={this.toggleDrawer}>
                            <MenuItem onClick={()=>this.selectMenu(AppMenu.Brief)}>Брифинг (общедоступно)</MenuItem>

                            { 
                                (function(){

                                    if(this.props.isModer == true){
                                        return (
                                            <>
                                                <MenuItem onClick={()=>this.selectMenu(AppMenu.CreateFlat)}>Создание имущества (адм.)</MenuItem>
                                            </>
                                        );
                                    }

                                    return <></>;

                                }).bind(this)()
                            }

                            {
                                (function(){
                                    if(this.props.isOwner == true){
                                        return (
                                            <>
                                                <MenuItem onClick={()=>this.selectMenu(AppMenu.MyFlat)}>Моё имуществом (влад.)</MenuItem>
                                                <MenuItem onClick={()=>this.selectMenu(AppMenu.DonationConfirm)}>Подтверждение дарения (вл.)</MenuItem>
                                            </>
                                        );
                                    }
                                }).bind(this)()
                            }

                            {
                                (function(){
                                    if(this.props.isOwner == true){
                                        return (
                                            <>
                                                <MenuItem onClick={()=>this.selectMenu(AppMenu.MyRent)}>Мои аренды (арен-тор.)</MenuItem>
                                            </>
                                        );
                                    }
                                }).bind(this)()
                            }
                        </Drawer>
                        <AppBar title={"FlatApp - учёт недвижимости"} onLeftIconButtonClick={this.toggleDrawer} iconElementRight={iconRight}></AppBar>
                        {this.renderMenu()}
                    </MuiThemeProvider>
                );
            } 
        }
    }

    function mapStateToProps (state: FlatState) {
        return {
            isModer: state.isModer,
            isRenter: state.isRenter,
            isOwner: state.isOwner,
            amount: state.amount
        }
    }

    function mapDispatchToProps(dispatch:Redux.Dispatch)
    {
        return {
            //increment: () => { dispatch({type:ActionType.Increment}) }
        }
    }


    export const MainPage = ReactRedux.connect(mapStateToProps,mapDispatchToProps)(Internal.MainPage);
}