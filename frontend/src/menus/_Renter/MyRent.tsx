namespace FlatApp {

    const {
        Tabs,
        Tab
    } = MaterialUi;

    namespace Internal {
        export class MyRent extends React.Component<any,any>{

            constructor(props){
                super(props);

                this.state = {
                    currentTab: "all"
                }

            }

            render(){
                return (
                    <Tabs value={this.state.currentTab} onChange={tab => this.setState({currentTab: tab})}>
                        <Tab label="Я арендовал" value={"all"}>
                            <AllTab renterLogin={this.props.ownerLogin}/>
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


    export const MyRent = ReactRedux.connect(mapStateToProps,mapDispatchToProps)(Internal.MyRent);
}