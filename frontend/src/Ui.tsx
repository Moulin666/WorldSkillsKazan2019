namespace FlatApp
{
    const {
        MuiThemeProvider
    } = MaterialUi;

    export function Main(){

        function AppInternal(){
            return (
                <MuiThemeProvider>
                    <ReactRedux.Provider store={Store}>
                        <App/>
                    </ReactRedux.Provider>
                </MuiThemeProvider>
            );
        }

        ReactDOM.render(<AppInternal/>, document.getElementById('mount-point'));
    }
}