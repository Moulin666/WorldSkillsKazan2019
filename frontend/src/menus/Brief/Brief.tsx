namespace FlatApp {

    const {
        AppBar,
        MuiThemeProvider,
        Drawer,
        MenuItem,
        Tabs,
        Tab,
    } = MaterialUi;

    namespace Internal {
        export class Brief extends React.Component<any,any>{
            
            constructor(props){
                super(props);

                this.state = {
                    currentTab: 'all'
                };

                this.handleChange = this.handleChange.bind(this);
            }

            handleChange = (tab) => {this.setState({currentTab: tab});};

            render(){
                return (
                    <Tabs value={this.state.currentTab} onChange={this.handleChange}>
                        <Tab label="Вся недвижимость" value={"all"}>
                            <AllTab/>
                        </Tab>
                        <Tab label="Все продажи" value={"sell"}>
                            <SellTab/>
                        </Tab>
                        <Tab label="Все аредны" value={"rent"}>
                            <RentTab/>
                        </Tab>
                    </Tabs>
                );
            }

        }
    }

    export const Brief = Internal.Brief;
}