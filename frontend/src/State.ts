namespace FlatApp
{
    export enum ActionType {
        Login = "login-action",
        CloseEntity = "entity-close-action",
        ShowEntity = "entity-show-action",
        BeginUpdate = "begin-loading",
        EndUpdate = "end-loading",
        UpdateEntryList = "update-entries"
    }

    export interface FlatState {

        currentEntity: Entity | null
        entityList: Entity[]

        isModer: boolean;
        isRenter: boolean;
        isOwner: boolean;

        isLoading: boolean;

        login: string;
        password: string;
        addres: string;
        amount: number
    }

    export interface Entity{
        title: string,
        buildingId: number,
        square: number,
        ownerLogin: string,
        renterLogin: string,
        status: "free" | "rental" | "sell" | "present" | "inRental",
        timeToAction: number,
        buildingType: "residental"|"notResidental",
        useTime: number,
        actionTime: number,
        toRentalTime: number,
        price: number
    }

    export interface Subject{
        addres?: string;
        key: number;
        login: string;
    }

    const initialState : FlatState = {

        currentEntity: null,
        entityList: [
            {buildingId:777, title: "Имя",square: 777, ownerLogin: "admin",renterLogin:"pahom", timeToAction: 10, status:"free",buildingType:"residental",useTime:777,actionTime:777,toRentalTime:777, price:777}
        ],

        isModer: false,
        isRenter: false,
        isOwner: false,

        isLoading: false,

        login:"",
        password:"",
        addres: "",
        amount: 0
    }

    export function UpdateEntryList(){

        Store.dispatch({type: ActionType.BeginUpdate});

        const state = Store.getState();

        RequestWithCallback({
            method:"getBalance", 
            address: state.addres
        },obj => {
         
            const amount = obj.balance;

            RequestWithCallback({
                method:"getBuildings", 
                login: state.login,
                password: state.password
            },obj => {

                if(obj.success == true){
                
                    const buildings: Array<any> = obj.buildings;
                    const entityList: Entity[] = [];

                    let currentEntity = null;

                    for(let i=0;i!=buildings.length;i++){
                        const building = buildings[i];
                        let entity : Entity = {
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
                        }

                        if(entity.price%1000000000000000000==0){
                            entity.price = entity.price / 1000000000000000000;
                        }

                        entityList.push(entity);
                    }

                    if(state.currentEntity != null){
                        currentEntity = entityList.filter(e=>e.buildingId==state.currentEntity.buildingId)[0];
                    }

                    Store.dispatch({
                        type: ActionType.UpdateEntryList,
                        currentEntity: currentEntity,
                        entityList: entityList,
                        amount: amount
                    })
                } else if(obj.success == false){
                    Store.dispatch({
                        type: ActionType.UpdateEntryList,
                        currentEntity: null,
                        entityList: [],
                        amount: amount
                    })
                } else {
                    debugger;
                }

                Store.dispatch({type: ActionType.EndUpdate});
            });
            //10.50.192.251/?method=getBuildings&login=admin&password=admin   
        });
        return;


    }

    function Reducer(state = initialState, action:Redux.Action<ActionType>&any) 
    {
        state = Object.assign({},state);

        if(action.type.indexOf('@@redux')!=-1){
            state.login=localStorage.getItem('login');
            state.password=localStorage.getItem('password');
        }

        switch (action.type) 
        {
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


    export interface DonationItem{
        buildingId: number;
        oldOwnerLogin: number;
    }

    export function getDonationList() : DonationItem[]{
        return JSON.parse(localStorage.getItem('donationList'))
    }

    export function pushDonationList(item: DonationItem){
        const list = getDonationList();
        list.push(item);
        localStorage.setItem('donationList',JSON.stringify(list));
    }


    export const Store = Redux.createStore(Reducer);
}