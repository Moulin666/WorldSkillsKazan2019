var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var FlatApp;
(function (FlatApp) {
    var Dialog = MaterialUi.Dialog, FlatButton = MaterialUi.FlatButton, TextField = MaterialUi.TextField, RaisedButton = MaterialUi.RaisedButton;
    var Internal;
    (function (Internal) {
        var App = (function (_super) {
            __extends(App, _super);
            function App(props) {
                var _this = _super.call(this, props) || this;
                _this.state = {
                    login: "",
                    password: "",
                    isRegister: false
                };
                _this.drawLogin = _this.drawLogin.bind(_this);
                _this.loginHandler = _this.loginHandler.bind(_this);
                return _this;
            }
            App.prototype.componentDidMount = function () {
                this.setState({
                    login: this.props.login,
                    password: this.props.password
                });
            };
            App.prototype.loginHandler = function () {
                var _this = this;
                var _a = this.state, login = _a.login, password = _a.password;
                if (login == "") {
                    alert("Логин пустой.");
                    return;
                }
                if (password == "") {
                    alert("Пароль не указан");
                    return;
                }
                if (!FlatApp.validateLatinString(login)) {
                    alert("Логин включает символы не из латинского алфавита");
                    return;
                }
                if (!FlatApp.validateLatinString(password)) {
                    alert("Пароль включает символы не из латинского алфавита");
                    return;
                }
                FlatApp.Store.dispatch({ type: FlatApp.ActionType.BeginUpdate });
                FlatApp.RequestWithCallback({
                    method: "login",
                    login: login,
                    password: password
                }, function (obj) {
                    FlatApp.Store.dispatch({ type: FlatApp.ActionType.EndUpdate });
                    if (obj.success == false) {
                        alert("Неверный логин или пароль!");
                        return;
                    }
                    else if (obj.success == true) {
                        _this.props.loginDispatch(login, password, obj.balance, obj.address, obj.isAdmin);
                        FlatApp.UpdateEntryList();
                    }
                    else {
                        debugger;
                    }
                });
            };
            App.prototype.drawLogin = function () {
                var _this = this;
                var actions = [
                    React.createElement(FlatButton, { label: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F", primary: true, onClick: function () { return _this.setState({ isRegister: true }); } })
                ];
                return (React.createElement(Dialog, { title: "\u0412\u043E\u0439\u0442\u0438", actions: actions, modal: true, open: this.props.isAuth && !this.state.isRegister },
                    React.createElement(FlatApp.Centered, { style: { flexDirection: "column", alignItems: "initial" } },
                        React.createElement(TextField, { hintText: "user", fullWidth: true, defaultValue: this.props.login, onChange: function (e) { return _this.setState({ login: e.target.value }); }, floatingLabelText: "\u041B\u043E\u0433\u0438\u043D" }),
                        React.createElement(TextField, { hintText: "123", fullWidth: true, floatingLabelText: "\u041F\u0430\u0440\u043E\u043B\u044C", defaultValue: this.props.password, onChange: function (e) { return _this.setState({ password: e.target.value }); }, type: "password" }),
                        React.createElement(RaisedButton, { label: "\u0412\u043E\u0439\u0442\u0438", style: { maxWidth: "175px", marginTop: "10px" }, onClick: this.loginHandler, primary: true }))));
            };
            App.prototype.render = function () {
                var _this = this;
                return (React.createElement(React.Fragment, null,
                    React.createElement(FlatApp.CurrentEntity, null),
                    React.createElement(FlatApp.RegisterDialog, { isRegister: this.state.isRegister, onRegister: function () { return _this.setState({ isRegister: false }); } }),
                    this.drawLogin(),
                    React.createElement(FlatApp.Loading, { visible: this.props.isLoading }),
                    React.createElement(FlatApp.MainPage, null)));
            };
            return App;
        }(React.Component));
        Internal.App = App;
    })(Internal || (Internal = {}));
    function mapStateToProps(state) {
        return {
            isAuth: !(state.isModer || state.isOwner || state.isRenter),
            login: state.login,
            password: state.password,
            isLoading: state.isLoading
        };
    }
    function mapDispatchToProps(dispatch) {
        return {
            loginDispatch: function (login, password, amount, addres, isModer) { dispatch({ type: FlatApp.ActionType.Login, login: login, password: password, amount: amount, addres: addres, isModer: isModer }); }
        };
    }
    FlatApp.App = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Internal.App);
})(FlatApp || (FlatApp = {}));
var FlatApp;
(function (FlatApp) {
    function replace(s, from, to) {
        do {
            s = s.replace(from, to);
        } while (s.indexOf(from) != -1);
        return s;
    }
    function Request(obj) {
        console.log({ reg: obj });
        return new Promise(function (resolve) {
            var url = "http://10.50.192.251:80?";
            var names = Object.getOwnPropertyNames(obj).sort(function (a, b) {
                if (a == "method") {
                    return -1;
                }
                else if (b == "method") {
                    return 1;
                }
                else {
                    return 0;
                }
            });
            for (var i = 0; i != names.length; i++) {
                url += names[i] + "=" + obj[names[i]] + "&";
            }
            url = url.slice(0, url.length - 1);
            var request = new XMLHttpRequest();
            request.onerror = function () {
                console.log({ fail: url });
                resolve({ success: false });
            };
            request.onload = function () {
                if (request.status == 200) {
                    var text = request.responseText;
                    if (text.indexOf('AttributeDict') != -1) {
                        var parsed = JSON.parse(text);
                        var str = parsed.buildings;
                        str = str.replace(",AttributeDict(", '');
                        str = str.slice(0, str.length - 1);
                        var arr = str.split("}{");
                        for (var i = 0; i != arr.length; i++) {
                            arr[i] += "},";
                        }
                        arr[arr.length - 1] = arr[arr.length - 1].slice(0, arr.length - 3);
                        arr = arr.join('');
                        arr = replace(arr, "),AttributeDict(\")", ",");
                        arr = replace(arr, "),AttributeDict(", ",");
                        arr = replace(arr, "'", "\"");
                        arr = replace(arr, "\"false\"", "false");
                        arr = replace(arr, "\"true\"", "true");
                        arr = "{\"buildings\":[" + arr + "],\"success\": true}";
                        function fixbStatus(index) {
                            switch (index) {
                                case 0:
                                    return "free";
                                case 1:
                                    return "rental";
                                case 2:
                                    return "sell";
                                case 3:
                                    return "present";
                                case 4:
                                    return "inRental";
                            }
                        }
                        function enumBuildingTypeConvertorOut(index) {
                            if (index == 0) {
                                return "residental";
                            }
                            else {
                                return "notResidental";
                            }
                        }
                        var tmp = JSON.parse(arr);
                        for (var i = 0; i != tmp.buildings.length; i++) {
                            tmp.buildings[i].bStatus = fixbStatus(tmp.buildings[i].bStatus);
                            tmp.buildings[i].bType = enumBuildingTypeConvertorOut(tmp.buildings[i].bType);
                        }
                        console.log({ fix: tmp });
                        resolve(tmp);
                        return;
                    }
                    if (text.indexOf('buildings') != -1) {
                        text = replace(text, '\"[', "[");
                        text = replace(text, ']\"', "]");
                    }
                    text = replace(text, "}{", "},{");
                    text = replace(text, "} {", "},{");
                    text = replace(text, '\\' + "\"", "\"");
                    text = replace(text, "'", "\"");
                    text = replace(text, "\"false\"", "false");
                    text = replace(text, "\"true\"", "true");
                    text = replace(text, "%20", " ");
                    var res = JSON.parse(text);
                    var props = Object.getOwnPropertyNames(res);
                    for (var i = 0; i != props.length; i++) {
                        var value = res[props[i]];
                        if (value % 1000000000000000000 == 0) {
                            res[props[i]] = res[props[i]] / 1000000000000000000;
                        }
                    }
                    console.log({ res: res });
                    resolve(res);
                }
            };
            request.open("GET", url);
            request.send(null);
        });
    }
    FlatApp.Request = Request;
    function RequestWithCallback(obj, callback) {
        Request(obj).then(function (result) { return callback(result); });
    }
    FlatApp.RequestWithCallback = RequestWithCallback;
})(FlatApp || (FlatApp = {}));
var FlatApp;
(function (FlatApp) {
    var ActionType;
    (function (ActionType) {
        ActionType["Login"] = "login-action";
        ActionType["CloseEntity"] = "entity-close-action";
        ActionType["ShowEntity"] = "entity-show-action";
        ActionType["BeginUpdate"] = "begin-loading";
        ActionType["EndUpdate"] = "end-loading";
        ActionType["UpdateEntryList"] = "update-entries";
    })(ActionType = FlatApp.ActionType || (FlatApp.ActionType = {}));
    var initialState = {
        currentEntity: null,
        entityList: [
            { buildingId: 777, title: "Имя", square: 777, ownerLogin: "admin", renterLogin: "pahom", timeToAction: 10, status: "free", buildingType: "residental", useTime: 777, actionTime: 777, toRentalTime: 777, price: 777 }
        ],
        isModer: false,
        isRenter: false,
        isOwner: false,
        isLoading: false,
        login: "",
        password: "",
        addres: "",
        amount: 0
    };
    function UpdateEntryList() {
        FlatApp.Store.dispatch({ type: ActionType.BeginUpdate });
        var state = FlatApp.Store.getState();
        FlatApp.RequestWithCallback({
            method: "getBalance",
            address: state.addres
        }, function (obj) {
            var amount = obj.balance;
            FlatApp.RequestWithCallback({
                method: "getBuildings",
                login: state.login,
                password: state.password
            }, function (obj) {
                if (obj.success == true) {
                    var buildings = obj.buildings;
                    var entityList = [];
                    var currentEntity = null;
                    for (var i = 0; i != buildings.length; i++) {
                        var building = buildings[i];
                        var entity = {
                            buildingId: building.bId,
                            title: building.title,
                            square: building.square,
                            ownerLogin: building.ownerLogin,
                            renterLogin: building.currentOwnerLogin,
                            buildingType: building.bType,
                            status: building.bStatus,
                            timeToAction: building.timeToAction,
                            useTime: building.timeInUse,
                            actionTime: building.timeToAction,
                            toRentalTime: building.timeToRentalExpired,
                            price: building.price
                        };
                        if (entity.price % 1000000000000000000 == 0) {
                            entity.price = entity.price / 1000000000000000000;
                        }
                        entityList.push(entity);
                    }
                    if (state.currentEntity != null) {
                        currentEntity = entityList.filter(function (e) { return e.buildingId == state.currentEntity.buildingId; })[0];
                    }
                    FlatApp.Store.dispatch({
                        type: ActionType.UpdateEntryList,
                        currentEntity: currentEntity,
                        entityList: entityList,
                        amount: amount
                    });
                }
                else if (obj.success == false) {
                    FlatApp.Store.dispatch({
                        type: ActionType.UpdateEntryList,
                        currentEntity: null,
                        entityList: [],
                        amount: amount
                    });
                }
                else {
                    debugger;
                }
                FlatApp.Store.dispatch({ type: ActionType.EndUpdate });
            });
        });
        return;
    }
    FlatApp.UpdateEntryList = UpdateEntryList;
    function Reducer(state, action) {
        if (state === void 0) { state = initialState; }
        state = Object.assign({}, state);
        if (action.type.indexOf('@@redux') != -1) {
            state.login = localStorage.getItem('login');
            state.password = localStorage.getItem('password');
        }
        switch (action.type) {
            case ActionType.Login:
                state.isModer = action.isModer;
                state.isOwner = true;
                state.isRenter = true;
                state.login = action.login;
                state.password = action.password;
                state.addres = action.addres;
                state.amount = action.amount;
                localStorage.setItem('login', action.login);
                localStorage.setItem('password', action.password);
                break;
            case ActionType.ShowEntity:
                state.currentEntity = action.entity;
                break;
            case ActionType.CloseEntity:
                state.currentEntity = null;
                break;
            case ActionType.BeginUpdate:
                state.isLoading = true;
                break;
            case ActionType.EndUpdate:
                state.isLoading = false;
                break;
            case ActionType.UpdateEntryList:
                state.amount = action.amount;
                state.entityList = action.entityList;
                state.currentEntity = action.currentEntity;
                break;
        }
        return state;
    }
    function getDonationList() {
        return JSON.parse(localStorage.getItem('donationList'));
    }
    FlatApp.getDonationList = getDonationList;
    function pushDonationList(item) {
        var list = getDonationList();
        list.push(item);
        localStorage.setItem('donationList', JSON.stringify(list));
    }
    FlatApp.pushDonationList = pushDonationList;
    FlatApp.Store = Redux.createStore(Reducer);
})(FlatApp || (FlatApp = {}));
var FlatApp;
(function (FlatApp) {
    var MuiThemeProvider = MaterialUi.MuiThemeProvider;
    function Main() {
        function AppInternal() {
            return (React.createElement(MuiThemeProvider, null,
                React.createElement(ReactRedux.Provider, { store: FlatApp.Store },
                    React.createElement(FlatApp.App, null))));
        }
        ReactDOM.render(React.createElement(AppInternal, null), document.getElementById('mount-point'));
    }
    FlatApp.Main = Main;
})(FlatApp || (FlatApp = {}));
var FlatApp;
(function (FlatApp) {
    function validateLatinString(s) {
        var dict = "qwertyuiopasdfghjklzxcvbnm".split('');
        var arr = s.split('').filter(function (c) { return !dict.includes(c.toLowerCase()); });
        return arr.length == 0;
    }
    FlatApp.validateLatinString = validateLatinString;
})(FlatApp || (FlatApp = {}));
var FlatApp;
(function (FlatApp) {
    var Chip = MaterialUi.Chip, Dialog = MaterialUi.Dialog, FlatButton = MaterialUi.FlatButton, Toggle = MaterialUi.Toggle, Divider = MaterialUi.Divider, TextField = MaterialUi.TextField, Slider = MaterialUi.Slider;
    var Table = MaterialUi.Table, TableBody = MaterialUi.TableBody, TableHeader = MaterialUi.TableHeader, TableHeaderColumn = MaterialUi.TableHeaderColumn, TableRow = MaterialUi.TableRow, TableRowColumn = MaterialUi.TableRowColumn, RaisedButton = MaterialUi.RaisedButton;
    var Internal;
    (function (Internal) {
        var RentChip = (function (_super) {
            __extends(RentChip, _super);
            function RentChip(props) {
                var _this = _super.call(this, props) || this;
                _this.state = {
                    isActive: false,
                    loaded: false,
                    expired: 25,
                    price: 100,
                    time: 0,
                    list: []
                };
                _this.toggleDialog = _this.toggleDialog.bind(_this);
                _this.chooseSubject = _this.chooseSubject.bind(_this);
                _this.toggleRent = _this.toggleRent.bind(_this);
                _this.updateTime = _this.updateTime.bind(_this);
                return _this;
            }
            RentChip.prototype.componentDidMount = function () {
                if (this.props.currentEntity != null) {
                    var entity = this.props.currentEntity;
                    this.setState({
                        expired: entity.timeToAction
                    });
                }
            };
            RentChip.prototype.componentDidUpdate = function () {
                var _this = this;
                var store = FlatApp.Store.getState();
                var entity = this.props.currentEntity;
                if (this.props.currentEntity != null) {
                    if (this.state.isActive == true && this.state.loaded == false) {
                        FlatApp.Store.dispatch({ type: FlatApp.ActionType.BeginUpdate });
                        FlatApp.RequestWithCallback({
                            method: "getBuildingsRequests",
                            login: store.login,
                            password: store.password,
                            id: entity.buildingId
                        }, function (obj) {
                            FlatApp.Store.dispatch({ type: FlatApp.ActionType.EndUpdate });
                            if (obj.success == false) {
                                _this.setState({ list: [], loaded: true });
                            }
                            else if (obj.success == true) {
                                var list = [];
                                var buildingsRequests = obj.buildingsRequests;
                                for (var i = 0; i != buildingsRequests.length; i++) {
                                    var item = buildingsRequests[i];
                                    list.push({ login: item.user, key: item.buildingId });
                                }
                                _this.setState({ list: list, loaded: true });
                            }
                            else {
                                debugger;
                            }
                        });
                    }
                }
            };
            RentChip.prototype.chooseSubject = function (item) {
                var state = FlatApp.Store.getState();
                var entity = this.props.currentEntity;
                FlatApp.Store.dispatch({ type: FlatApp.ActionType.BeginUpdate });
                FlatApp.RequestWithCallback({
                    method: "acceptRentBuilding",
                    login: state.login,
                    password: state.password,
                    buildingId: entity.buildingId,
                    requestId: item.key
                }, function (obj) {
                    if (obj.success == true) {
                        alert("Операция выполнена успешно!");
                        setTimeout(function () { return FlatApp.Store.dispatch({ type: FlatApp.ActionType.CloseEntity }); }, 100);
                        setTimeout(function () { return FlatApp.UpdateEntryList(); }, 500);
                    }
                    else if (obj.success == false) {
                        alert("Не удалось выполнить операцию");
                    }
                    else {
                        debugger;
                    }
                    FlatApp.Store.dispatch({ type: FlatApp.ActionType.EndUpdate });
                });
            };
            RentChip.prototype.toggleRent = function () {
                var state = FlatApp.Store.getState();
                FlatApp.Store.dispatch({ type: FlatApp.ActionType.BeginUpdate });
                if (this.props.currentEntity.status == "free") {
                    FlatApp.RequestWithCallback({
                        method: "sendBuildingToRent",
                        login: state.login,
                        password: state.password,
                        buildingId: state.currentEntity.buildingId,
                        price: this.state.price,
                        rentTime: this.state.time,
                        rentToTime: this.state.expired
                    }, function (obj) {
                        if (obj.success == true) {
                            alert("Операция выполнена успешно!");
                            setTimeout(function () { return FlatApp.UpdateEntryList(); }, 500);
                            FlatApp.Store.dispatch({ type: FlatApp.ActionType.EndUpdate });
                        }
                        else if (obj.success == false) {
                            alert("Произошла ошибка.");
                            FlatApp.Store.dispatch({ type: FlatApp.ActionType.EndUpdate });
                        }
                        else {
                            debugger;
                        }
                    });
                }
                else if (this.props.currentEntity.status == "rental") {
                    FlatApp.RequestWithCallback({
                        method: "cancelBuildingRent",
                        login: state.login,
                        password: state.password,
                        buildingId: state.currentEntity.buildingId
                    }, function (obj) {
                        if (obj.success == true) {
                            alert("Операция выполнена успешно!");
                            setTimeout(function () { return FlatApp.UpdateEntryList(); }, 500);
                            FlatApp.Store.dispatch({ type: FlatApp.ActionType.EndUpdate });
                        }
                        else if (obj.success == false) {
                            alert("Произошла ошибка.");
                            FlatApp.Store.dispatch({ type: FlatApp.ActionType.EndUpdate });
                        }
                        else {
                            debugger;
                        }
                    });
                }
                else {
                    debugger;
                }
            };
            RentChip.prototype.toggleDialog = function () {
                var isActive = !this.state.isActive;
                if (isActive) {
                    this.setState({ isActive: true });
                }
                else {
                    this.setState({ isActive: false, loaded: false });
                }
            };
            RentChip.prototype.updatePrice = function (v) {
                if (v == "") {
                    this.setState({ price: 0 });
                }
                else if (parseInt(v) != NaN) {
                    this.setState({ price: parseInt(v) });
                }
                else {
                    debugger;
                }
            };
            RentChip.prototype.updateTime = function (v) {
                if (v == "") {
                    this.setState({ time: 0 });
                }
                else if (parseInt(v) != NaN) {
                    this.setState({ time: parseInt(v) });
                }
                else {
                    debugger;
                }
            };
            RentChip.prototype.render = function () {
                var _this = this;
                var entity = this.props.currentEntity;
                if (entity == null) {
                    entity = { status: "free" };
                }
                return (React.createElement(React.Fragment, null,
                    React.createElement(Dialog, { title: "\u0421\u0434\u0430\u0447\u0430 \u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430", actions: [React.createElement(FlatButton, { label: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C", primary: true, onClick: this.toggleDialog })], modal: true, open: this.state.isActive, autoScrollBodyContent: true },
                        React.createElement(Toggle, { label: "\u0412\u044B\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043E \u043D\u0430 \u0430\u0440\u0435\u043D\u0434\u0443", defaultToggled: entity.status == "rental", disabled: !(entity.status == "free" || entity.status == "rental"), onToggle: this.toggleRent, style: { paddingBottom: "10px" } }),
                        React.createElement(TextField, { floatingLabelText: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0430\u0440\u0435\u043D\u0434\u044B", defaultValue: this.state.price, value: this.state.price, disabled: entity.status != "free", onChange: function (e) { return _this.updatePrice(e.target.value); }, fullWidth: true }),
                        React.createElement(TextField, { floatingLabelText: "\u0412\u0440\u0435\u043C\u044F \u0430\u0440\u0435\u043D\u0434\u044B", defaultValue: this.state.time, value: this.state.time, disabled: entity.status != "free", onChange: function (e) { return _this.updateTime(e.target.value); }, fullWidth: true }),
                        React.createElement("div", { style: { display: "flex", alignItems: "stretch", alignContent: "stretch" } },
                            React.createElement(Slider, { min: 1, max: 50000, step: 1, value: this.state.expired, style: { "flex": "1" }, disabled: entity.status != "free", onChange: function (e, value) { return _this.setState({ expired: value }); } }),
                            React.createElement("div", { style: { textAlign: "center", minWidth: "45px", marginTop: "24px", paddingLeft: "9px" } }, this.state.expired)),
                        React.createElement(Table, { multiSelectable: false },
                            React.createElement(TableHeader, null,
                                React.createElement(TableRow, null,
                                    React.createElement(TableHeaderColumn, null, "\u041F\u043E\u0440\u044F\u0434\u043A\u043E\u0432\u044B\u0439 \u043D\u043E\u043C\u0435\u0440"),
                                    React.createElement(TableHeaderColumn, null, "\u041B\u043E\u0433\u0438\u043D"),
                                    React.createElement(TableHeaderColumn, null, "\u0412\u044B\u0431\u0440\u0430\u0442\u044C"))),
                            React.createElement(TableBody, null, this.state.list.map(function (item, i) {
                                return (React.createElement(TableRow, { key: i, selectable: false },
                                    React.createElement(TableRowColumn, null, (i + 1).toString()),
                                    React.createElement(TableRowColumn, null, item.login),
                                    React.createElement(TableRowColumn, null,
                                        React.createElement(FlatApp.Centered, null,
                                            React.createElement(RaisedButton, { disabled: !(entity.status == "free" || entity.status == "rental"), label: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C", onClick: function () { return _this.chooseSubject(item); } })))));
                            })))),
                    React.createElement(Chip, { style: { margin: "4px" }, onClick: this.toggleDialog }, "\u0421\u0434\u0430\u0447\u0430 \u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430")));
            };
            return RentChip;
        }(React.Component));
        Internal.RentChip = RentChip;
    })(Internal || (Internal = {}));
    function mapStateToProps(state) {
        return {
            currentEntity: state.currentEntity
        };
    }
    function mapDispatchToProps(dispatch) {
        return {};
    }
    FlatApp.RentChip = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Internal.RentChip);
})(FlatApp || (FlatApp = {}));
var FlatApp;
(function (FlatApp) {
    var Chip = MaterialUi.Chip, Dialog = MaterialUi.Dialog, FlatButton = MaterialUi.FlatButton, Toggle = MaterialUi.Toggle, Divider = MaterialUi.Divider, TextField = MaterialUi.TextField, Slider = MaterialUi.Slider;
    var Table = MaterialUi.Table, TableBody = MaterialUi.TableBody, TableHeader = MaterialUi.TableHeader, TableHeaderColumn = MaterialUi.TableHeaderColumn, TableRow = MaterialUi.TableRow, TableRowColumn = MaterialUi.TableRowColumn, RaisedButton = MaterialUi.RaisedButton;
    var Internal;
    (function (Internal) {
        var SellsChip = (function (_super) {
            __extends(SellsChip, _super);
            function SellsChip(props) {
                var _this = _super.call(this, props) || this;
                _this.state = {
                    isActive: false,
                    loaded: false,
                    expired: 25,
                    price: 100,
                    list: [
                        { login: "test" }
                    ]
                };
                _this.toggleDialog = _this.toggleDialog.bind(_this);
                _this.chooseSubject = _this.chooseSubject.bind(_this);
                _this.toggleSell = _this.toggleSell.bind(_this);
                return _this;
            }
            SellsChip.prototype.componentDidMount = function () {
                var store = FlatApp.Store.getState();
                if (this.props.currentEntity != null) {
                    var entity = this.props.currentEntity;
                    this.setState({
                        expired: entity.timeToAction,
                        price: entity.price
                    });
                }
            };
            SellsChip.prototype.componentDidUpdate = function () {
                var _this = this;
                var store = FlatApp.Store.getState();
                var entity = this.props.currentEntity;
                if (this.props.currentEntity != null) {
                    if (this.state.isActive == true && this.state.loaded == false) {
                        FlatApp.Store.dispatch({ type: FlatApp.ActionType.BeginUpdate });
                        FlatApp.RequestWithCallback({
                            method: "getBuildingsRequests",
                            login: store.login,
                            password: store.password,
                            id: entity.buildingId
                        }, function (obj) {
                            FlatApp.Store.dispatch({ type: FlatApp.ActionType.EndUpdate });
                            if (obj.success == false) {
                                _this.setState({ list: [], loaded: true });
                            }
                            else if (obj.success == true) {
                                var list = [];
                                var buildingsRequests = obj.buildingsRequests;
                                for (var i = 0; i != buildingsRequests.length; i++) {
                                    var item = buildingsRequests[i];
                                    list.push({ login: item.user, key: item.buildingId });
                                }
                                _this.setState({ list: list, loaded: true });
                            }
                            else {
                                debugger;
                            }
                        });
                    }
                }
            };
            SellsChip.prototype.chooseSubject = function (item) {
                var state = FlatApp.Store.getState();
                var entity = state.currentEntity;
                FlatApp.RequestWithCallback({
                    method: "acceptBuyBuilding",
                    login: state.login,
                    password: state.password,
                    buildingId: entity.buildingId,
                    requestId: item.key
                }, function (obj) {
                    if (obj.success == true) {
                        alert("Операция выполнена успешно!");
                        setTimeout(function () { return FlatApp.Store.dispatch({ type: FlatApp.ActionType.CloseEntity }); }, 100);
                        setTimeout(function () { return FlatApp.UpdateEntryList(); }, 500);
                    }
                    else if (obj.success == false) {
                        alert("Не удалось выполнить операцию");
                    }
                    else {
                        debugger;
                    }
                    FlatApp.Store.dispatch({ type: FlatApp.ActionType.EndUpdate });
                });
                FlatApp.UpdateEntryList();
            };
            SellsChip.prototype.toggleSell = function () {
                var state = FlatApp.Store.getState();
                var entity = this.props.currentEntity;
                FlatApp.Store.dispatch({ type: FlatApp.ActionType.BeginUpdate });
                if (this.props.currentEntity.status == "free") {
                    FlatApp.RequestWithCallback({
                        method: "sendBuildingToSell",
                        login: state.login,
                        password: state.password,
                        id: entity.buildingId,
                        price: this.state.price,
                        timeToSell: this.state.expired
                    }, function (obj) {
                        if (obj.success == true) {
                            alert("Операция выполнена успешно!");
                            setTimeout(function () { return FlatApp.UpdateEntryList(); }, 500);
                            FlatApp.Store.dispatch({ type: FlatApp.ActionType.EndUpdate });
                        }
                        else if (obj.success == false) {
                            alert("Произошла ошибка.");
                            FlatApp.Store.dispatch({ type: FlatApp.ActionType.EndUpdate });
                        }
                        else {
                            debugger;
                        }
                    });
                }
                else if (this.props.currentEntity.status == "sell") {
                    FlatApp.RequestWithCallback({
                        method: "cancelBuildingSell",
                        login: state.login,
                        password: state.password,
                        id: entity.buildingId
                    }, function (obj) {
                        if (obj.success == true) {
                            alert("Операция выполнена успешно!");
                            setTimeout(function () { return FlatApp.UpdateEntryList(); }, 500);
                            FlatApp.Store.dispatch({ type: FlatApp.ActionType.EndUpdate });
                        }
                        else if (obj.success == false) {
                            alert("Произошла ошибка.");
                            FlatApp.Store.dispatch({ type: FlatApp.ActionType.EndUpdate });
                        }
                        else {
                            debugger;
                        }
                    });
                }
                else {
                    debugger;
                }
            };
            SellsChip.prototype.updatePrice = function (v) {
                if (v == "") {
                    this.setState({ price: 0 });
                }
                else if (parseInt(v) != NaN) {
                    this.setState({ price: parseInt(v) });
                }
                else {
                    debugger;
                }
            };
            SellsChip.prototype.toggleDialog = function () {
                var isActive = !this.state.isActive;
                if (isActive) {
                    this.setState({ isActive: true });
                }
                else {
                    this.setState({ isActive: false, loaded: false });
                }
            };
            SellsChip.prototype.render = function () {
                var _this = this;
                var entity = this.props.currentEntity;
                if (entity == null) {
                    entity = { status: "free" };
                }
                return (React.createElement(React.Fragment, null,
                    React.createElement(Dialog, { title: "\u041F\u0440\u043E\u0434\u0430\u0436\u0430 \u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430", actions: [React.createElement(FlatButton, { label: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C", primary: true, onClick: this.toggleDialog })], modal: true, open: this.state.isActive, autoScrollBodyContent: true },
                        React.createElement(Toggle, { label: "\u0412\u044B\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043E \u043D\u0430 \u043F\u0440\u043E\u0434\u0430\u0436\u0443", defaultToggled: entity.status == "sell", disabled: !(entity.status == "free" || entity.status == "sell"), onToggle: this.toggleSell, style: { paddingBottom: "10px" } }),
                        React.createElement(TextField, { floatingLabelText: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043F\u0440\u043E\u0434\u0430\u0436\u0438", defaultValue: this.state.price, value: this.state.price, disabled: entity.status != "free", onChange: function (e) { return _this.updatePrice(e.target.value); }, fullWidth: true }),
                        React.createElement("div", { style: { display: "flex", alignItems: "stretch", alignContent: "stretch" } },
                            React.createElement(Slider, { min: 1, max: 50000, step: 1, value: this.state.expired, style: { "flex": "1" }, disabled: entity.status != "free", onChange: function (e, value) { return _this.setState({ expired: value }); } }),
                            React.createElement("div", { style: { textAlign: "center", minWidth: "45px", marginTop: "24px", paddingLeft: "9px" } }, this.state.expired)),
                        React.createElement(Table, { multiSelectable: false },
                            React.createElement(TableHeader, null,
                                React.createElement(TableRow, null,
                                    React.createElement(TableHeaderColumn, null, "\u041F\u043E\u0440\u044F\u0434\u043A\u043E\u0432\u044B\u0439 \u043D\u043E\u043C\u0435\u0440"),
                                    React.createElement(TableHeaderColumn, null, "\u041B\u043E\u0433\u0438\u043D"),
                                    React.createElement(TableHeaderColumn, null, "\u0412\u044B\u0431\u0440\u0430\u0442\u044C"))),
                            React.createElement(TableBody, null, this.state.list.map(function (item, i) {
                                return (React.createElement(TableRow, { key: i, selectable: false },
                                    React.createElement(TableRowColumn, null, (i + 1).toString()),
                                    React.createElement(TableRowColumn, null, item.login),
                                    React.createElement(TableRowColumn, null,
                                        React.createElement(FlatApp.Centered, null,
                                            React.createElement(RaisedButton, { disabled: !(entity.status == "free" || entity.status == "sell"), label: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C", onClick: function () { return _this.chooseSubject(item); } })))));
                            })))),
                    React.createElement(Chip, { style: { margin: "4px" }, onClick: this.toggleDialog }, "\u041F\u0440\u043E\u0434\u0430\u0436\u0430 \u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430")));
            };
            return SellsChip;
        }(React.Component));
        Internal.SellsChip = SellsChip;
    })(Internal || (Internal = {}));
    function mapStateToProps(state) {
        return {
            currentEntity: state.currentEntity
        };
    }
    function mapDispatchToProps(dispatch) {
        return {};
    }
    FlatApp.SellsChip = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Internal.SellsChip);
})(FlatApp || (FlatApp = {}));
var FlatApp;
(function (FlatApp) {
    function Centered(props) {
        if (props === void 0) { props = { style: {} }; }
        return (React.createElement("div", { style: Object.assign({ display: "flex", alignItems: "center", justifyContent: "center" }, props.style) }, props.children));
    }
    FlatApp.Centered = Centered;
})(FlatApp || (FlatApp = {}));
var FlatApp;
(function (FlatApp) {
    var CircularProgress = MaterialUi.CircularProgress;
    function Loading(props) {
        if (props === void 0) { props = { visible: true }; }
        return (React.createElement("div", { style: {
                position: "fixed",
                top: "0px",
                left: "0px",
                height: "100%",
                width: "100%",
                zIndex: 9999999999999,
                display: props.visible ? "flex" : "none",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(0, 0, 0, 0.8)"
            } },
            React.createElement(CircularProgress, { size: 80, thickness: 5 })));
    }
    FlatApp.Loading = Loading;
})(FlatApp || (FlatApp = {}));
var FlatApp;
(function (FlatApp) {
    function None() {
        return (React.createElement("div", { style: { display: "none" } }));
    }
    FlatApp.None = None;
})(FlatApp || (FlatApp = {}));
var FlatApp;
(function (FlatApp) {
    var Dialog = MaterialUi.Dialog, FlatButton = MaterialUi.FlatButton, TextField = MaterialUi.TextField, RaisedButton = MaterialUi.RaisedButton, Chip = MaterialUi.Chip;
    var Table = MaterialUi.Table, TableBody = MaterialUi.TableBody, TableHeader = MaterialUi.TableHeader, TableHeaderColumn = MaterialUi.TableHeaderColumn, TableRow = MaterialUi.TableRow, TableRowColumn = MaterialUi.TableRowColumn;
    function statusText(s) {
        switch (s) {
            case "free":
                return "У собственника";
            case "rental":
                return "Ищет арендатора";
            case "inRental":
                return "В аренде";
            case "sell":
                return "Выставлена на продажу";
            case "present":
                return "Ожидается дарение";
        }
    }
    FlatApp.statusText = statusText;
    function buildingTypetext(s) {
        switch (s) {
            case "residental":
                return "Жилая площадь";
            case "notResidental":
                return "Нежилая площадь";
        }
    }
    FlatApp.buildingTypetext = buildingTypetext;
    var Internal;
    (function (Internal) {
        var CurrentEntity = (function (_super) {
            __extends(CurrentEntity, _super);
            function CurrentEntity(props) {
                var _this = _super.call(this, props) || this;
                _this.donateEntry = _this.donateEntry.bind(_this);
                _this.buyEntry = _this.buyEntry.bind(_this);
                _this.rentEntry = _this.rentEntry.bind(_this);
                return _this;
            }
            CurrentEntity.prototype.componentWillReceiveProps = function () {
                setTimeout(function () {
                    var inputs = document.querySelectorAll(".readonly>input");
                    inputs.forEach(function (input) { return input.setAttribute('readonly', ''); });
                }, 750);
            };
            CurrentEntity.prototype.donateEntry = function () {
                var state = FlatApp.Store.getState();
                var login = prompt("Введите логин будущего владельца", "user");
                if (login == null)
                    return;
                FlatApp.Store.dispatch({ type: FlatApp.ActionType.BeginUpdate });
                FlatApp.RequestWithCallback({
                    method: "sendBuildingToPresent",
                    login: state.login,
                    password: state.password,
                    id: state.currentEntity.buildingId,
                    loginForPresent: login
                }, function (obj) {
                    if (obj.success == false) {
                        alert("Не удалось подарить");
                        FlatApp.Store.dispatch({ type: FlatApp.ActionType.EndUpdate });
                        return;
                    }
                    else if (obj.success == true) {
                        alert("Ожидание подтверждения");
                        FlatApp.Store.dispatch({ type: FlatApp.ActionType.EndUpdate });
                        setTimeout(function () {
                            FlatApp.Store.dispatch({ type: FlatApp.ActionType.CloseEntity });
                        }, 100);
                        setTimeout(function () { return FlatApp.UpdateEntryList(); }, 500);
                        return;
                    }
                    else {
                        debugger;
                    }
                });
            };
            CurrentEntity.prototype.rentEntry = function () {
                var state = FlatApp.Store.getState();
                var entity = this.props.currentEntity;
                if (confirm("Вы точно хотите снять имущество в аренду по цене " + this.props.currentEntity.price + "?")) {
                    FlatApp.Store.dispatch({ type: FlatApp.ActionType.BeginUpdate });
                    FlatApp.RequestWithCallback({
                        method: "rentBuilding",
                        login: state.login,
                        password: state.password,
                        buildingId: state.currentEntity.buildingId,
                        price: this.props.currentEntity.price
                    }, function (obj) {
                        if (obj.success == false) {
                            alert("Не удалось арендовать");
                            FlatApp.Store.dispatch({ type: FlatApp.ActionType.EndUpdate });
                            return;
                        }
                        else if (obj.success == true) {
                            alert("Ожидание подтверждения");
                            FlatApp.Store.dispatch({ type: FlatApp.ActionType.EndUpdate });
                            setTimeout(function () {
                                FlatApp.Store.dispatch({ type: FlatApp.ActionType.CloseEntity });
                            }, 100);
                            setTimeout(function () { return FlatApp.UpdateEntryList(); }, 500);
                            return;
                        }
                        else {
                            debugger;
                        }
                    });
                }
            };
            CurrentEntity.prototype.buyEntry = function () {
                var state = FlatApp.Store.getState();
                var entity = this.props.currentEntity;
                if (confirm("Вы точно хотите купить имущество по цене " + this.props.currentEntity.price + "?")) {
                    FlatApp.Store.dispatch({ type: FlatApp.ActionType.BeginUpdate });
                    FlatApp.RequestWithCallback({
                        method: "buyBuilding",
                        login: state.login,
                        password: state.password,
                        id: entity.buildingId,
                        price: entity.price
                    }, function (obj) {
                        if (obj.success == false) {
                            alert("Не удалось купить");
                            FlatApp.Store.dispatch({ type: FlatApp.ActionType.EndUpdate });
                            return;
                        }
                        else if (obj.success == true) {
                            alert("Ожидание подтверждения");
                            FlatApp.Store.dispatch({ type: FlatApp.ActionType.EndUpdate });
                            setTimeout(function () {
                                FlatApp.Store.dispatch({ type: FlatApp.ActionType.CloseEntity });
                            }, 100);
                            setTimeout(function () { return FlatApp.UpdateEntryList(); }, 500);
                            return;
                        }
                        else {
                            debugger;
                        }
                    });
                }
            };
            CurrentEntity.prototype.renderContent = function () {
                if (this.props.currentEntity) {
                    var _a = this.props.currentEntity, buildingId = _a.buildingId, title = _a.title, square = _a.square, ownerLogin = _a.ownerLogin, status_1 = _a.status, buildingType = _a.buildingType, useTime = _a.useTime, actionTime = _a.actionTime, toRentalTime = _a.toRentalTime, price = _a.price;
                    var chipContainer = {
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        paddingTop: "15px"
                    };
                    var entity_1 = this.props.currentEntity;
                    return (React.createElement(React.Fragment, null,
                        React.createElement(TextField, { className: "readonly", floatingLabelText: "\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 (title)", defaultValue: title, fullWidth: true }),
                        React.createElement(TextField, { className: "readonly", floatingLabelText: "\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 \u0432\u043B\u0430\u0434\u0435\u043D\u0438\u044F (buildingId)", defaultValue: buildingId, fullWidth: true }),
                        React.createElement(TextField, { className: "readonly", floatingLabelText: "\u0426\u0435\u043D\u0430 (price)", defaultValue: price, fullWidth: true }),
                        React.createElement(TextField, { className: "readonly", floatingLabelText: "\u0417\u0430\u044F\u0432\u043B\u0435\u043D\u043D\u0430\u044F \u043F\u043B\u043E\u0449\u0430\u0434\u044C (square)", defaultValue: square, fullWidth: true }),
                        React.createElement(TextField, { className: "readonly", floatingLabelText: "\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0432\u043B\u0430\u0434\u0435\u043B\u0435\u0446 (login)", defaultValue: ownerLogin, fullWidth: true }),
                        React.createElement(TextField, { className: "readonly", floatingLabelText: "\u0421\u0442\u0430\u0442\u0443\u0441 (status)", defaultValue: statusText(status_1) + " (" + status_1 + ")", fullWidth: true }),
                        React.createElement(TextField, { className: "readonly", floatingLabelText: "\u0422\u0438\u043F \u0441\u0442\u0440\u043E\u0435\u043D\u0438\u044F (buildingType)", defaultValue: buildingTypetext(buildingType) + " (" + buildingType + ")", fullWidth: true }),
                        React.createElement(TextField, { className: "readonly", floatingLabelText: "C \u043D\u0430\u0447\u0430\u043B\u0430 \u0432\u043B\u0435\u0434\u0435\u043D\u0438\u044F (useTime)", defaultValue: useTime, fullWidth: true }),
                        React.createElement(TextField, { className: "readonly", floatingLabelText: "\u0412\u0440\u0435\u043C\u044F \u043D\u0430 \u043F\u043E\u043A\u0443\u043F\u043A\u0443 (actionTime)", defaultValue: actionTime, fullWidth: true }),
                        React.createElement(TextField, { className: "readonly", floatingLabelText: "\u0421\u0440\u043E\u043A \u0430\u0440\u0435\u043D\u0434\u044B (toRentalTime)", defaultValue: toRentalTime, fullWidth: true }),
                        React.createElement("div", { style: chipContainer }, (function () {
                            if (entity_1.ownerLogin == this.props.login) {
                                return React.createElement(React.Fragment, null,
                                    React.createElement(FlatApp.SellsChip, null),
                                    React.createElement(FlatApp.RentChip, null),
                                    React.createElement(Chip, { style: { margin: "4px" }, onClick: this.donateEntry }, "\u041F\u043E\u0434\u0430\u0440\u0438\u0442\u044C \u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u043E"));
                            }
                            else if (entity_1.ownerLogin != this.props.login && entity_1.status == "sell") {
                                return React.createElement(React.Fragment, null,
                                    React.createElement(Chip, { style: { margin: "4px" }, onClick: this.buyEntry }, "\u041F\u0440\u0438\u043E\u0431\u0440\u0435\u0441\u0442\u0438 \u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u043E"));
                            }
                            else if (entity_1.renterLogin != this.props.login && entity_1.status == "rental") {
                                return React.createElement(React.Fragment, null,
                                    React.createElement(Chip, { style: { margin: "4px" }, onClick: this.rentEntry }, "\u0410\u0440\u0435\u043D\u0434\u043E\u0432\u0430\u0442\u044C \u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u043E"));
                            }
                            else {
                                console.log("ViewSells: Логин владельца не соответствует логину пользователя");
                                return React.createElement(React.Fragment, null);
                            }
                        }).bind(this)())));
                }
            };
            CurrentEntity.prototype.render = function () {
                var actions = [
                    React.createElement(FlatButton, { label: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C", primary: true, onClick: this.props.close })
                ];
                return (React.createElement(Dialog, { title: "\u0418\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u043E", actions: actions, modal: true, autoScrollBodyContent: true, open: this.props.isDisplayed }, this.renderContent()));
            };
            return CurrentEntity;
        }(React.Component));
        Internal.CurrentEntity = CurrentEntity;
    })(Internal || (Internal = {}));
    function mapStateToProps(state) {
        return {
            isDisplayed: state.currentEntity != null,
            currentEntity: state.currentEntity,
            isOwner: state.isOwner,
            isModer: state.isModer,
            isRenter: state.isRenter,
            login: state.login
        };
    }
    function mapDispatchToProps(dispatch) {
        return {
            close: function () { dispatch({ type: FlatApp.ActionType.CloseEntity }); }
        };
    }
    FlatApp.CurrentEntity = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Internal.CurrentEntity);
})(FlatApp || (FlatApp = {}));
var FlatApp;
(function (FlatApp) {
    var Dialog = MaterialUi.Dialog, FlatButton = MaterialUi.FlatButton, TextField = MaterialUi.TextField, RaisedButton = MaterialUi.RaisedButton;
    var RegisterDialog = (function (_super) {
        __extends(RegisterDialog, _super);
        function RegisterDialog(props) {
            var _this = _super.call(this, props) || this;
            _this.state = {
                login: "",
                password: ""
            };
            _this.register = _this.register.bind(_this);
            return _this;
        }
        RegisterDialog.prototype.register = function () {
            var _a = this.state, login = _a.login, password = _a.password;
            if (login == "") {
                alert("Логин пустой.");
                return;
            }
            if (password == "") {
                alert("Пароль не указан");
                return;
            }
            if (!FlatApp.validateLatinString(login)) {
                alert("Логин включает символы не из латинского алфавита");
                return;
            }
            if (!FlatApp.validateLatinString(password)) {
                alert("Пароль включает символы не из латинского алфавита");
                return;
            }
            FlatApp.Store.dispatch({ type: FlatApp.ActionType.BeginUpdate });
            FlatApp.RequestWithCallback({
                method: "register",
                login: this.state.login,
                password: this.state.password
            }, function (obj) {
                FlatApp.Store.dispatch({ type: FlatApp.ActionType.EndUpdate });
                if (obj.success == false) {
                    alert("Не удалось зарегистрироваться!");
                    return;
                }
                else if (obj.success == true) {
                    alert("Регистрация успешно завершена! Ваш адрес: " + obj.addres);
                    window.location.reload();
                    return;
                }
                else {
                    debugger;
                }
            });
        };
        RegisterDialog.prototype.render = function () {
            var _this = this;
            var actions = [
                React.createElement(FlatButton, { label: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C", primary: true, onClick: this.props.onRegister })
            ];
            return (React.createElement(Dialog, { title: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F", actions: actions, modal: true, open: this.props.isRegister },
                React.createElement(FlatApp.Centered, { style: { flexDirection: "column", alignItems: "initial" } },
                    React.createElement(TextField, { hintText: "user", fullWidth: true, onChange: function (e) { return _this.setState({ login: e.target.value }); }, floatingLabelText: "\u041B\u043E\u0433\u0438\u043D" }),
                    React.createElement(TextField, { hintText: "123", fullWidth: true, floatingLabelText: "\u041F\u0430\u0440\u043E\u043B\u044C", onChange: function (e) { return _this.setState({ password: e.target.value }); }, type: "password" }),
                    React.createElement(RaisedButton, { label: "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F", style: { maxWidth: "225px", marginTop: "10px" }, onClick: this.register, primary: true }))));
        };
        return RegisterDialog;
    }(React.Component));
    FlatApp.RegisterDialog = RegisterDialog;
})(FlatApp || (FlatApp = {}));
var FlatApp;
(function (FlatApp) {
    var AppMenu;
    (function (AppMenu) {
        AppMenu["Brief"] = "brief-menu";
        AppMenu["CreateFlat"] = "create-flat";
        AppMenu["MyFlat"] = "my-flat";
        AppMenu["DonationConfirm"] = "donation-confirm";
        AppMenu["MyRent"] = "my-rent";
    })(AppMenu = FlatApp.AppMenu || (FlatApp.AppMenu = {}));
})(FlatApp || (FlatApp = {}));
var FlatApp;
(function (FlatApp) {
    var AppBar = MaterialUi.AppBar, MuiThemeProvider = MaterialUi.MuiThemeProvider, Drawer = MaterialUi.Drawer, MenuItem = MaterialUi.MenuItem, Tabs = MaterialUi.Tabs, Tab = MaterialUi.Tab;
    var Internal;
    (function (Internal) {
        var Brief = (function (_super) {
            __extends(Brief, _super);
            function Brief(props) {
                var _this = _super.call(this, props) || this;
                _this.handleChange = function (tab) { _this.setState({ currentTab: tab }); };
                _this.state = {
                    currentTab: 'all'
                };
                _this.handleChange = _this.handleChange.bind(_this);
                return _this;
            }
            Brief.prototype.render = function () {
                return (React.createElement(Tabs, { value: this.state.currentTab, onChange: this.handleChange },
                    React.createElement(Tab, { label: "\u0412\u0441\u044F \u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u044C", value: "all" },
                        React.createElement(FlatApp.AllTab, null)),
                    React.createElement(Tab, { label: "\u0412\u0441\u0435 \u043F\u0440\u043E\u0434\u0430\u0436\u0438", value: "sell" },
                        React.createElement(FlatApp.SellTab, null)),
                    React.createElement(Tab, { label: "\u0412\u0441\u0435 \u0430\u0440\u0435\u0434\u043D\u044B", value: "rent" },
                        React.createElement(FlatApp.RentTab, null))));
            };
            return Brief;
        }(React.Component));
        Internal.Brief = Brief;
    })(Internal || (Internal = {}));
    FlatApp.Brief = Internal.Brief;
})(FlatApp || (FlatApp = {}));
var FlatApp;
(function (FlatApp) {
    var Table = MaterialUi.Table, TableBody = MaterialUi.TableBody, TableHeader = MaterialUi.TableHeader, TableHeaderColumn = MaterialUi.TableHeaderColumn, TableRow = MaterialUi.TableRow, TableRowColumn = MaterialUi.TableRowColumn, RaisedButton = MaterialUi.RaisedButton;
    var Internal;
    (function (Internal) {
        var AllTab = (function (_super) {
            __extends(AllTab, _super);
            function AllTab(props) {
                return _super.call(this, props) || this;
            }
            AllTab.prototype.render = function () {
                var _this = this;
                return (React.createElement(Table, { multiSelectable: false },
                    React.createElement(TableHeader, null,
                        React.createElement(TableRow, null,
                            React.createElement(TableHeaderColumn, null, "\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"),
                            React.createElement(TableHeaderColumn, null, "\u0412\u043B\u0430\u0434\u0435\u043B\u0435\u0446"),
                            React.createElement(TableHeaderColumn, null, "\u0410\u0440\u0435\u043D\u0434\u0430\u0442\u043E\u0440"),
                            React.createElement(TableHeaderColumn, null, "\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u0434\u0430\u043D\u043D\u044B\u0445"))),
                    React.createElement(TableBody, null, this.props.entityList.map(function (item, i) {
                        if (_this.props.ownerLogin && item.ownerLogin != _this.props.ownerLogin) {
                            return React.createElement(FlatApp.None, { key: i });
                        }
                        if (_this.props.renterLogin) {
                            if (item.renterLogin != _this.props.renterLogin) {
                                return React.createElement(FlatApp.None, { key: i });
                            }
                            if (item.ownerLogin == item.renterLogin) {
                                return React.createElement(FlatApp.None, { key: i });
                            }
                        }
                        if (_this.props.isFree && item.status != "free") {
                            return React.createElement(FlatApp.None, { key: i });
                        }
                        return (React.createElement(TableRow, { key: i, selectable: false },
                            React.createElement(TableRowColumn, null, item.title),
                            React.createElement(TableRowColumn, null, item.ownerLogin),
                            React.createElement(TableRowColumn, null, item.renterLogin == "" ? "-" : item.renterLogin),
                            React.createElement(TableRowColumn, null,
                                React.createElement(FlatApp.Centered, null,
                                    React.createElement(RaisedButton, { label: "\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440", onClick: function () { return _this.props.showEntity(item); } })))));
                    }))));
            };
            return AllTab;
        }(React.Component));
        Internal.AllTab = AllTab;
    })(Internal || (Internal = {}));
    function mapStateToProps(state) {
        return {
            entityList: state.entityList
        };
    }
    function mapDispatchToProps(dispatch) {
        return {
            close: function () { dispatch({ type: FlatApp.ActionType.CloseEntity }); },
            showEntity: function (entity) { dispatch({ type: FlatApp.ActionType.ShowEntity, entity: entity }); }
        };
    }
    FlatApp.AllTab = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Internal.AllTab);
})(FlatApp || (FlatApp = {}));
var FlatApp;
(function (FlatApp) {
    var Table = MaterialUi.Table, TableBody = MaterialUi.TableBody, TableHeader = MaterialUi.TableHeader, TableHeaderColumn = MaterialUi.TableHeaderColumn, TableRow = MaterialUi.TableRow, TableRowColumn = MaterialUi.TableRowColumn, RaisedButton = MaterialUi.RaisedButton;
    var Internal;
    (function (Internal) {
        var RentTab = (function (_super) {
            __extends(RentTab, _super);
            function RentTab(props) {
                return _super.call(this, props) || this;
            }
            RentTab.prototype.render = function () {
                var _this = this;
                return (React.createElement(Table, { multiSelectable: false },
                    React.createElement(TableHeader, null,
                        React.createElement(TableRow, null,
                            React.createElement(TableHeaderColumn, null, "\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"),
                            React.createElement(TableHeaderColumn, null, "\u0412\u043B\u0430\u0434\u0435\u043B\u0435\u0446"),
                            React.createElement(TableHeaderColumn, null, "\u0410\u0440\u0435\u043D\u0434\u0430\u0442\u043E\u0440"),
                            React.createElement(TableHeaderColumn, null, "\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u0434\u0430\u043D\u043D\u044B\u0445"))),
                    React.createElement(TableBody, null, this.props.entityList.filter(function (i) { return i.status == "inRental" || i.status == "rental"; }).map(function (item, i) {
                        if (_this.props.ownerLogin && item.ownerLogin != _this.props.ownerLogin) {
                            return React.createElement(FlatApp.None, { key: i });
                        }
                        if (_this.props.renterLogin) {
                            if (item.renterLogin != _this.props.renterLogin) {
                                return React.createElement(FlatApp.None, { key: i });
                            }
                            if (item.ownerLogin == item.renterLogin) {
                                return React.createElement(FlatApp.None, { key: i });
                            }
                        }
                        return (React.createElement(TableRow, { key: i, selectable: false },
                            React.createElement(TableRowColumn, null, item.title),
                            React.createElement(TableRowColumn, null, item.ownerLogin),
                            React.createElement(TableRowColumn, null, item.renterLogin == "" ? "-" : item.renterLogin),
                            React.createElement(TableRowColumn, null,
                                React.createElement(FlatApp.Centered, null,
                                    React.createElement(RaisedButton, { label: "\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440", onClick: function () { return _this.props.showEntity(item); } })))));
                    }))));
            };
            return RentTab;
        }(React.Component));
        Internal.RentTab = RentTab;
    })(Internal || (Internal = {}));
    function mapStateToProps(state) {
        return {
            entityList: state.entityList
        };
    }
    function mapDispatchToProps(dispatch) {
        return {
            close: function () { dispatch({ type: FlatApp.ActionType.CloseEntity }); },
            showEntity: function (entity) { dispatch({ type: FlatApp.ActionType.ShowEntity, entity: entity }); }
        };
    }
    FlatApp.RentTab = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Internal.RentTab);
})(FlatApp || (FlatApp = {}));
var FlatApp;
(function (FlatApp) {
    var Table = MaterialUi.Table, TableBody = MaterialUi.TableBody, TableHeader = MaterialUi.TableHeader, TableHeaderColumn = MaterialUi.TableHeaderColumn, TableRow = MaterialUi.TableRow, TableRowColumn = MaterialUi.TableRowColumn, RaisedButton = MaterialUi.RaisedButton;
    var Internal;
    (function (Internal) {
        var SellTab = (function (_super) {
            __extends(SellTab, _super);
            function SellTab(props) {
                return _super.call(this, props) || this;
            }
            SellTab.prototype.render = function () {
                var _this = this;
                return (React.createElement(Table, { multiSelectable: false },
                    React.createElement(TableHeader, null,
                        React.createElement(TableRow, null,
                            React.createElement(TableHeaderColumn, null, "\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"),
                            React.createElement(TableHeaderColumn, null, "\u0412\u043B\u0430\u0434\u0435\u043B\u0435\u0446"),
                            React.createElement(TableHeaderColumn, null, "\u0410\u0440\u0435\u043D\u0434\u0430\u0442\u043E\u0440"),
                            React.createElement(TableHeaderColumn, null, "\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u0434\u0430\u043D\u043D\u044B\u0445"))),
                    React.createElement(TableBody, null, this.props.entityList.filter(function (i) { return i.status == "sell"; }).map(function (item, i) {
                        if (_this.props.ownerLogin && item.ownerLogin != _this.props.ownerLogin) {
                            return React.createElement(FlatApp.None, { key: i });
                        }
                        if (_this.props.renterLogin && item.renterLogin != _this.props.renterLogin) {
                            return React.createElement(FlatApp.None, { key: i });
                        }
                        return (React.createElement(TableRow, { key: i, selectable: false },
                            React.createElement(TableRowColumn, null, item.title),
                            React.createElement(TableRowColumn, null, item.ownerLogin),
                            React.createElement(TableRowColumn, null, item.renterLogin == "" ? "-" : item.renterLogin),
                            React.createElement(TableRowColumn, null,
                                React.createElement(FlatApp.Centered, null,
                                    React.createElement(RaisedButton, { label: "\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440", onClick: function () { return _this.props.showEntity(item); } })))));
                    }))));
            };
            return SellTab;
        }(React.Component));
        Internal.SellTab = SellTab;
    })(Internal || (Internal = {}));
    function mapStateToProps(state) {
        return {
            entityList: state.entityList
        };
    }
    function mapDispatchToProps(dispatch) {
        return {
            close: function () { dispatch({ type: FlatApp.ActionType.CloseEntity }); },
            showEntity: function (entity) { dispatch({ type: FlatApp.ActionType.ShowEntity, entity: entity }); }
        };
    }
    FlatApp.SellTab = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Internal.SellTab);
})(FlatApp || (FlatApp = {}));
var FlatApp;
(function (FlatApp) {
    var Paper = MaterialUi.Paper, TextField = MaterialUi.TextField, Divider = MaterialUi.Divider, SelectField = MaterialUi.SelectField, MenuItem = MaterialUi.MenuItem;
    var Toolbar = MaterialUi.Toolbar, ToolbarGroup = MaterialUi.ToolbarGroup, ToolbarSeparator = MaterialUi.ToolbarSeparator, ToolbarTitle = MaterialUi.ToolbarTitle, RaisedButton = MaterialUi.RaisedButton;
    var CreateFlat = (function (_super) {
        __extends(CreateFlat, _super);
        function CreateFlat(props) {
            var _this = _super.call(this, props) || this;
            _this.state = {
                title: "",
                square: 0,
                login: "",
                buildingType: ""
            };
            _this.createFlat = _this.createFlat.bind(_this);
            return _this;
        }
        CreateFlat.prototype.updateSquare = function (v) {
            if (v == "") {
                this.setState({ square: 0 });
            }
            else if (parseInt(v) != NaN) {
                this.setState({ square: parseInt(v) });
            }
            else {
                debugger;
            }
        };
        CreateFlat.prototype.createFlat = function () {
            if (this.state.title == "") {
                alert("Не указано наименование!");
                return;
            }
            if (this.state.square == 0) {
                alert("Не указана площадь!");
                return;
            }
            if (this.state.login == "") {
                alert("Не указан логин владельца!");
                return;
            }
            if (this.state.buildingType == "") {
                alert("Не указан тип сооружения!");
                return;
            }
            if (!FlatApp.validateLatinString(this.state.title)) {
                alert("Наименование включает символы не из латинского алфавита");
                return;
            }
            if (!FlatApp.validateLatinString(this.state.login)) {
                alert("Логин владельца включает символы не из латинского алфавита");
                return;
            }
            var state = FlatApp.Store.getState();
            FlatApp.Store.dispatch({ type: FlatApp.ActionType.BeginUpdate });
            FlatApp.RequestWithCallback({
                method: "createBuilding",
                login: state.login,
                password: state.password,
                loginToBuild: this.state.login,
                title: this.state.title,
                square: this.state.square,
                buildingType: this.state.buildingType
            }, function (obj) {
                if (obj.success == true) {
                    alert("Имущество успешно создано!");
                    FlatApp.UpdateEntryList();
                }
                else if (obj.success == false) {
                    alert("Не удалось создать имущество");
                }
                else {
                    debugger;
                }
                FlatApp.Store.dispatch({ type: FlatApp.ActionType.EndUpdate });
            });
        };
        CreateFlat.prototype.render = function () {
            var _this = this;
            return (React.createElement(FlatApp.Centered, { style: { height: "calc(100% - 64px)", position: "fixed", left: "0px", top: "64px", width: "100%" } },
                React.createElement(Paper, { style: { margin: "5px", minWidth: "600px" }, zDepth: 2 },
                    React.createElement("div", { style: { padding: "10px" } },
                        React.createElement(TextField, { floatingLabelText: "\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 (title)", underlineShow: false, fullWidth: true, onChange: function (e) { return _this.setState({ title: e.target.value }); } }),
                        React.createElement(Divider, null),
                        React.createElement(TextField, { floatingLabelText: "\u0417\u0430\u044F\u0432\u043B\u0435\u043D\u043D\u0430\u044F \u043F\u043B\u043E\u0449\u0430\u0434\u044C (square)", underlineShow: false, fullWidth: true, defaultValue: this.state.square, value: this.state.square, onChange: function (e) { return _this.updateSquare(e.target.value); } }),
                        React.createElement(Divider, null),
                        React.createElement(TextField, { floatingLabelText: "\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0432\u043B\u0430\u0434\u0435\u043B\u0435\u0446 (login)", underlineShow: false, fullWidth: true, onChange: function (e) { return _this.setState({ login: e.target.value }); } }),
                        React.createElement(Divider, null),
                        React.createElement(SelectField, { style: { paddingBottom: "10px" }, floatingLabelText: "\u0422\u0438\u043F \u0441\u0442\u0440\u043E\u0435\u043D\u0438\u044F (buildingType)", fullWidth: true, value: this.state.buildingType, onChange: function (nu1, nu2, value) { return _this.setState({ buildingType: value }); } },
                            React.createElement(MenuItem, { value: "residental", primaryText: "\u0416\u0438\u043B\u043E\u0435" }),
                            React.createElement(MenuItem, { value: "notResidental", primaryText: "\u041D\u0435 \u0436\u0438\u043B\u043E\u0435" })),
                        React.createElement("div", { style: { backgroundColor: "transparent", minWidth: "25px" } })),
                    React.createElement(Toolbar, null,
                        React.createElement(ToolbarGroup, { firstChild: true },
                            React.createElement(ToolbarTitle, { style: { paddingLeft: "17px" }, text: "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430" })),
                        React.createElement(ToolbarGroup, null,
                            React.createElement(ToolbarSeparator, null),
                            React.createElement(RaisedButton, { label: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C", primary: true, onClick: this.createFlat }))))));
        };
        return CreateFlat;
    }(React.Component));
    FlatApp.CreateFlat = CreateFlat;
})(FlatApp || (FlatApp = {}));
var FlatApp;
(function (FlatApp) {
    var Tabs = MaterialUi.Tabs, Tab = MaterialUi.Tab;
    var Table = MaterialUi.Table, TableBody = MaterialUi.TableBody, TableHeader = MaterialUi.TableHeader, TableHeaderColumn = MaterialUi.TableHeaderColumn, TableRow = MaterialUi.TableRow, TableRowColumn = MaterialUi.TableRowColumn, RaisedButton = MaterialUi.RaisedButton;
    var DonationConfirm = (function (_super) {
        __extends(DonationConfirm, _super);
        function DonationConfirm(props) {
            var _this = _super.call(this, props) || this;
            _this.state = {
                list: [
                    { buildingId: 777, title: "Имя", square: 777, ownerLogin: "admin", renterLogin: "pahom", timeToAction: 10, status: "free", buildingType: "residental", useTime: 777, price: 777 }
                ]
            };
            _this.confirmEntity = _this.confirmEntity.bind(_this);
            _this.cancelEntity = _this.cancelEntity.bind(_this);
            return _this;
        }
        DonationConfirm.prototype.componentDidMount = function () {
            var state = FlatApp.Store.getState();
            FlatApp.RequestWithCallback({
                method: "getPresents",
                login: state.login,
                password: state.password
            }, function (obj) {
            });
        };
        DonationConfirm.prototype.confirmEntity = function (item) {
            console.log(item);
        };
        DonationConfirm.prototype.cancelEntity = function (item) {
            console.log(item);
        };
        DonationConfirm.prototype.render = function () {
            var _this = this;
            return (React.createElement(Tabs, { value: "all" },
                React.createElement(Tab, { label: "\u041F\u043E\u0434\u0430\u0440\u043A\u0438 \u0434\u043B\u044F \u0432\u0430\u0441", value: "all" },
                    React.createElement(Table, { multiSelectable: false },
                        React.createElement(TableHeader, null,
                            React.createElement(TableRow, null,
                                React.createElement(TableHeaderColumn, null, "\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"),
                                React.createElement(TableHeaderColumn, null, "\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0432\u043B\u0430\u0434\u0435\u043B\u0435\u0446"),
                                React.createElement(TableHeaderColumn, null, "\u041F\u0440\u0438\u043D\u044F\u0442\u044C"),
                                React.createElement(TableHeaderColumn, null, "\u041E\u0442\u043A\u0430\u0437\u0430\u0442\u044C\u0441\u044F"))),
                        React.createElement(TableBody, null, this.state.list.map(function (item, i) {
                            return (React.createElement(TableRow, { key: i, selectable: false },
                                React.createElement(TableRowColumn, null, item.title),
                                React.createElement(TableRowColumn, null, item.ownerLogin),
                                React.createElement(TableRowColumn, null,
                                    React.createElement(FlatApp.Centered, null,
                                        React.createElement(RaisedButton, { label: "\u041F\u0440\u0438\u043D\u044F\u0442\u044C", primary: true, onClick: function () { return _this.confirmEntity(item); } }))),
                                React.createElement(TableRowColumn, null,
                                    React.createElement(FlatApp.Centered, null,
                                        React.createElement(RaisedButton, { label: "\u041E\u0442\u043A\u0430\u0437\u0430\u0442\u044C\u0441\u044F", secondary: true, onClick: function () { return _this.cancelEntity(item); } })))));
                        }))))));
        };
        return DonationConfirm;
    }(React.Component));
    FlatApp.DonationConfirm = DonationConfirm;
})(FlatApp || (FlatApp = {}));
var FlatApp;
(function (FlatApp) {
    var Tabs = MaterialUi.Tabs, Tab = MaterialUi.Tab, BottomNavigation = MaterialUi.BottomNavigation, BottomNavigationItem = MaterialUi.BottomNavigationItem;
    var Table = MaterialUi.Table, TableBody = MaterialUi.TableBody, TableHeader = MaterialUi.TableHeader, TableHeaderColumn = MaterialUi.TableHeaderColumn, TableRow = MaterialUi.TableRow, TableRowColumn = MaterialUi.TableRowColumn, RaisedButton = MaterialUi.RaisedButton, Popover = MaterialUi.Popover, Menu = MaterialUi.Menu, MenuItem = MaterialUi.MenuItem;
    var Toolbar = MaterialUi.Toolbar, ToolbarGroup = MaterialUi.ToolbarGroup, ToolbarSeparator = MaterialUi.ToolbarSeparator, ToolbarTitle = MaterialUi.ToolbarTitle;
    var Internal;
    (function (Internal) {
        var OwnershipConfirm = (function (_super) {
            __extends(OwnershipConfirm, _super);
            function OwnershipConfirm(props) {
                var _this = _super.call(this, props) || this;
                _this.state = {
                    list: []
                };
                return _this;
            }
            OwnershipConfirm.prototype.componentDidMount = function () {
                var state = FlatApp.Store.getState();
                FlatApp.Store.dispatch({ type: FlatApp.ActionType.BeginUpdate });
                FlatApp.RequestWithCallback({
                    method: "getMyRequests",
                    login: state.login,
                    password: state.password
                }, function (obj) {
                    FlatApp.Store.dispatch({ type: FlatApp.ActionType.EndUpdate });
                });
            };
            OwnershipConfirm.prototype.render = function () {
                return (React.createElement(Table, { multiSelectable: false },
                    React.createElement(TableHeader, null,
                        React.createElement(TableRow, null,
                            React.createElement(TableHeaderColumn, null, "\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440"),
                            React.createElement(TableHeaderColumn, null, "\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435"))),
                    React.createElement(TableBody, null, this.state.list.map(function (item, i) {
                        return (React.createElement(TableRow, { key: i, selectable: false },
                            React.createElement(TableRowColumn, null, item.buildingId),
                            React.createElement(TableRowColumn, null, item.title)));
                    }))));
            };
            return OwnershipConfirm;
        }(React.Component));
        Internal.OwnershipConfirm = OwnershipConfirm;
        var MyFlat = (function (_super) {
            __extends(MyFlat, _super);
            function MyFlat(props) {
                var _this = _super.call(this, props) || this;
                _this.handleClick = function (event) {
                    event.preventDefault();
                    _this.setState({
                        open: true,
                        anchorEl: event.currentTarget
                    });
                };
                _this.handleRequestClose = function () {
                    _this.setState({
                        open: false
                    });
                };
                _this.state = {
                    currentTab: "all",
                    subTabIndex: 0,
                    open: false
                };
                return _this;
            }
            MyFlat.prototype.render = function () {
                var _this = this;
                return (React.createElement(Tabs, { value: this.state.currentTab, onChange: function (tab) { return _this.setState({ currentTab: tab }); } },
                    React.createElement(Tab, { label: "\u0412\u043B\u0430\u0434\u0435\u043D\u0438\u0435", value: "all" },
                        React.createElement(Toolbar, { style: { backgroundColor: "transparent", marginBottom: "20px", marginTop: "15px" } },
                            React.createElement(ToolbarGroup, { firstChild: true },
                                React.createElement(ToolbarTitle, { style: { marginLeft: "19px" }, text: "\u0412\u043B\u0430\u0434\u0435\u043D\u0438\u0435/\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435 \u0432\u043B\u0430\u0434\u0435\u043D\u0438\u044F" })),
                            React.createElement(ToolbarGroup, null,
                                React.createElement("div", null,
                                    React.createElement(RaisedButton, { onClick: this.handleClick, label: "\u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0438\u0442\u044C" }),
                                    React.createElement(Popover, { open: this.state.open, anchorEl: this.state.anchorEl, anchorOrigin: { horizontal: 'left', vertical: 'bottom' }, targetOrigin: { horizontal: 'left', vertical: 'top' }, onRequestClose: function () { return _this.setState({ open: false }); } },
                                        React.createElement(Menu, null,
                                            React.createElement(MenuItem, { primaryText: "\u041C\u043E\u0451 \u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u043E", onClick: function () { return _this.setState({ open: false, subTabIndex: 0 }); } }),
                                            React.createElement(MenuItem, { primaryText: "\u041E\u0436\u0438\u0434\u0430\u0435\u0442 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F", onClick: function () { return _this.setState({ open: false, subTabIndex: 1 }); } })))))),
                        (function () {
                            if (this.state.subTabIndex == 0) {
                                return React.createElement(FlatApp.AllTab, { isFree: true, ownerLogin: this.props.ownerLogin });
                            }
                            else if (this.state.subTabIndex == 1) {
                                return React.createElement(OwnershipConfirm, null);
                            }
                            else {
                                debugger;
                            }
                        }).bind(this)()),
                    React.createElement(Tab, { label: "\u0412 \u043F\u0440\u043E\u0434\u0430\u0436\u0435", value: "rent" },
                        React.createElement(FlatApp.SellTab, { ownerLogin: this.props.ownerLogin })),
                    React.createElement(Tab, { label: "\u0412 \u0430\u0440\u0435\u043D\u0434\u0435", value: "sell" },
                        React.createElement(FlatApp.RentTab, { ownerLogin: this.props.ownerLogin }))));
            };
            return MyFlat;
        }(React.Component));
        Internal.MyFlat = MyFlat;
    })(Internal || (Internal = {}));
    function mapStateToProps(state) {
        return {
            ownerLogin: state.login
        };
    }
    function mapDispatchToProps(dispatch) {
        return {};
    }
    FlatApp.MyFlat = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Internal.MyFlat);
})(FlatApp || (FlatApp = {}));
var FlatApp;
(function (FlatApp) {
    var Tabs = MaterialUi.Tabs, Tab = MaterialUi.Tab;
    var Internal;
    (function (Internal) {
        var MyRent = (function (_super) {
            __extends(MyRent, _super);
            function MyRent(props) {
                var _this = _super.call(this, props) || this;
                _this.state = {
                    currentTab: "all"
                };
                return _this;
            }
            MyRent.prototype.render = function () {
                var _this = this;
                return (React.createElement(Tabs, { value: this.state.currentTab, onChange: function (tab) { return _this.setState({ currentTab: tab }); } },
                    React.createElement(Tab, { label: "\u042F \u0430\u0440\u0435\u043D\u0434\u043E\u0432\u0430\u043B", value: "all" },
                        React.createElement(FlatApp.AllTab, { renterLogin: this.props.ownerLogin }))));
            };
            return MyRent;
        }(React.Component));
        Internal.MyRent = MyRent;
    })(Internal || (Internal = {}));
    function mapStateToProps(state) {
        return {
            ownerLogin: state.login
        };
    }
    function mapDispatchToProps(dispatch) {
        return {};
    }
    FlatApp.MyRent = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Internal.MyRent);
})(FlatApp || (FlatApp = {}));
var FlatApp;
(function (FlatApp) {
    var AppBar = MaterialUi.AppBar, MuiThemeProvider = MaterialUi.MuiThemeProvider, Drawer = MaterialUi.Drawer, MenuItem = MaterialUi.MenuItem, IconMenu = MaterialUi.IconMenu, TextField = MaterialUi.TextField, Tabs = MaterialUi.Tabs, Tab = MaterialUi.Tab, IconButton = MaterialUi.IconButton;
    var Card = MaterialUi.Card, CardHeader = MaterialUi.CardHeader, CardMedia = MaterialUi.CardMedia, CardTitle = MaterialUi.CardTitle, CardText = MaterialUi.CardText, CardActions = MaterialUi.CardActions, FlatButton = MaterialUi.FlatButton;
    var Internal;
    (function (Internal) {
        var MainPage = (function (_super) {
            __extends(MainPage, _super);
            function MainPage(props) {
                var _this = _super.call(this, props) || this;
                _this.toggleDrawer = function () { return _this.setState({ drawerOpen: !_this.state.drawerOpen }); };
                _this.state = {
                    drawerOpen: false,
                    currentMenu: FlatApp.AppMenu.Brief
                };
                _this.renderMenu = _this.renderMenu.bind(_this);
                _this.selectMenu = _this.selectMenu.bind(_this);
                return _this;
            }
            MainPage.prototype.renderMenu = function () {
                switch (this.state.currentMenu) {
                    case FlatApp.AppMenu.Brief:
                        return React.createElement(FlatApp.Brief, null);
                    case FlatApp.AppMenu.CreateFlat:
                        return React.createElement(FlatApp.CreateFlat, null);
                    case FlatApp.AppMenu.MyFlat:
                        return React.createElement(FlatApp.MyFlat, null);
                    case FlatApp.AppMenu.MyRent:
                        return React.createElement(FlatApp.MyRent, null);
                    case FlatApp.AppMenu.DonationConfirm:
                        return React.createElement(FlatApp.DonationConfirm, null);
                }
            };
            MainPage.prototype.selectMenu = function (menu) {
                this.setState({ currentMenu: menu });
                this.toggleDrawer();
            };
            MainPage.prototype.render = function () {
                var _this = this;
                var iconRight = React.createElement(FlatButton, { label: "Баланс: " + this.props.amount.toString() + " (обновить)", onClick: function () { return FlatApp.UpdateEntryList(); } });
                return (React.createElement(MuiThemeProvider, null,
                    React.createElement(Drawer, { docked: false, open: this.state.drawerOpen, onRequestChange: this.toggleDrawer },
                        React.createElement(MenuItem, { onClick: function () { return _this.selectMenu(FlatApp.AppMenu.Brief); } }, "\u0411\u0440\u0438\u0444\u0438\u043D\u0433 (\u043E\u0431\u0449\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E)"),
                        (function () {
                            var _this = this;
                            if (this.props.isModer == true) {
                                return (React.createElement(React.Fragment, null,
                                    React.createElement(MenuItem, { onClick: function () { return _this.selectMenu(FlatApp.AppMenu.CreateFlat); } }, "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430 (\u0430\u0434\u043C.)")));
                            }
                            return React.createElement(React.Fragment, null);
                        }).bind(this)(),
                        (function () {
                            var _this = this;
                            if (this.props.isOwner == true) {
                                return (React.createElement(React.Fragment, null,
                                    React.createElement(MenuItem, { onClick: function () { return _this.selectMenu(FlatApp.AppMenu.MyFlat); } }, "\u041C\u043E\u0451 \u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u043E\u043C (\u0432\u043B\u0430\u0434.)"),
                                    React.createElement(MenuItem, { onClick: function () { return _this.selectMenu(FlatApp.AppMenu.DonationConfirm); } }, "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435 \u0434\u0430\u0440\u0435\u043D\u0438\u044F (\u0432\u043B.)")));
                            }
                        }).bind(this)(),
                        (function () {
                            var _this = this;
                            if (this.props.isOwner == true) {
                                return (React.createElement(React.Fragment, null,
                                    React.createElement(MenuItem, { onClick: function () { return _this.selectMenu(FlatApp.AppMenu.MyRent); } }, "\u041C\u043E\u0438 \u0430\u0440\u0435\u043D\u0434\u044B (\u0430\u0440\u0435\u043D-\u0442\u043E\u0440.)")));
                            }
                        }).bind(this)()),
                    React.createElement(AppBar, { title: "FlatApp - учёт недвижимости", onLeftIconButtonClick: this.toggleDrawer, iconElementRight: iconRight }),
                    this.renderMenu()));
            };
            return MainPage;
        }(React.Component));
        Internal.MainPage = MainPage;
    })(Internal || (Internal = {}));
    function mapStateToProps(state) {
        return {
            isModer: state.isModer,
            isRenter: state.isRenter,
            isOwner: state.isOwner,
            amount: state.amount
        };
    }
    function mapDispatchToProps(dispatch) {
        return {};
    }
    FlatApp.MainPage = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Internal.MainPage);
})(FlatApp || (FlatApp = {}));
