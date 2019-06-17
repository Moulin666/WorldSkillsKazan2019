pragma solidity >= 0.4.25;

contract GreenElephantContract {

    address owner;

    // enums:
    enum userRole {
        user,
        admin
    }

    enum buildingStatus {
        free,
        rental,
        sell,
        present,
        inRental
    }

    enum buildingType {
        residental,
        notResidental
    }

    // structs:
    struct userStruct {
        bool isExist;

        address addr;
        string login;
        userRole role;

        bool isOwner;
        bool isRental;

        uint presentCount;
        uint myPresentCount;

        uint myBuildingsCount;

        uint myRequestsCount;

        mapping (uint=>presentStruct) presentsBuilding;
        mapping (uint=>presentStruct) myPresent;
        mapping (uint=>requestStruct) myRequests;
    }

    struct buildingStruct {
        bool isExist;

        address owner;
        address currentOwner;
        string title;
        uint square;
        buildingStatus bStatus;
        buildingType bType;
        uint creationTime;
        uint price;
        uint timeToAction;
        uint timeToRentalExpired;
        uint buildingRequestCount;
        uint buildingPresentRequestId;
        uint oldCreationTime;

        mapping (uint=>buildingRequest) buildingRequests;
    }

    struct presentStruct {
        uint id;
        string login;
        uint participantRequestId;
        address participantAddr;
        uint oldCreationTime;
    }

    struct requestStruct {
        uint buildingId;
        string title;
        bool isAccepted;
    }

    struct buildingRequest {
        address addr;
        uint id;
    }

    // variables:
    mapping (address=>userStruct) users;
    mapping (string=>address) userAddresses;

    uint public buildingsCount = 0;
    mapping (uint=>buildingStruct) buildings;

    // modifiers:
    modifier onlyForAdmin() {
        userStruct storage user = users[msg.sender];
        require(user.role == userRole.admin, "invoker is not a admin");
        _;
    }

    // events:
    event registered(bool success, address addr, string login);
    event buildingCreated(
        bool success,
        uint buildingCount,
        string login,
        address addr,
        uint square,
        buildingType bType,
        uint creationTime
    );
    event sendedBuildingToSell(bool success, uint id, uint price, uint timeToSell);
    event cancelledBuildingToSell(bool success, uint id);
    event gettedBuilding(
        uint bId,
        string title,
        uint square,
        string ownerLogin,
        string currentOwnerLogin,
        buildingStatus bStatus,
        buildingType bType,
        uint timeInUse,
        uint price,
        uint timeToAction,
        uint timeToRentalExpired
    );
    event buyedBuilding(bool success);
    event cancelledBuyBuilding(bool success);
    event acceptedBuilding(bool success);
    event declinedBuilding(bool success);
    event sendedBuildingToPresent(bool success, uint id, string login);
    event cancelledPresentBuilding(bool success, string login);
    event declinedPresentBuilding(bool success);
    event acceptedBuildingPresent(bool success);
    event presentedBuildingBack(bool success, uint creationTime, uint old);
    event sendedBuildingToRent(bool success, uint id, uint price, uint rentTime);
    event rentedBuilding(bool success);
    event acceptedRentBuilding(bool success);
    event cancelledBuildingToRent(bool success, uint id);
    event declinedRentBuilding(bool success);
    event rentBuildingBack(bool success);
    event gettedRequests(bool success, uint buildingId, string title);

    // constructor
    constructor () public {
        owner = msg.sender;
    }

    // functions:
    function giveAdmin(string memory login) public {
        userStruct storage user = users[msg.sender];
        require((user.role == userRole.admin || msg.sender == owner), "invoker is not a admin");
        address addr = userAddresses[login];
        user = users[addr];
        user.role = userRole.admin;
    }

    function loginToAccount(string memory login) public
        view returns (
                address addr,
                userRole role,
                bool isOwner,
                bool isRental
            ) {
        address userAddress = userAddresses[login];
        userStruct storage user = users[userAddress];
        require(user.isExist, "user not exist");
        require(user.addr == msg.sender, "invoker not a sender");
        return(user.addr, user.role, user.isOwner, user.isRental);
    }

    function getAddrByLogin(string memory login) public
            view returns (address addr) {
        addr = userAddresses[login];
        return(addr);
    }

    function register(string memory login) public {
        userStruct storage user = users[msg.sender];
        require(!user.isExist, "user already exist");

        users[msg.sender] = userStruct(
            true,
            msg.sender,
            login,
            userRole.user,
            false,
            false,
            0, 0, 0, 0); // present count & my present count / my buildings count
        userAddresses[login] = msg.sender;

        emit registered(true, user.addr, login);
    }

    function createBuilding (
            string memory login,
            string memory title,
            uint square,
            buildingType bType) public onlyForAdmin() {
        address addr = userAddresses[login];
        userStruct storage user = users[addr];
        require(user.isExist, "user is not exist");

        uint creationTime = block.number;

        buildingsCount = buildingsCount + 1;
        buildings[buildingsCount] = buildingStruct(
            true,
            addr,
            addr,
            title,
            square,
            buildingStatus.free,
            bType,
            creationTime,
            0, 0, 0, 0, 0, 0); // default variables / buildingPresentRequestId

        user.isOwner = true;
        user.myBuildingsCount = user.myBuildingsCount + 1;

        emit buildingCreated(true, buildingsCount, login, addr, square, bType, creationTime);
    }

    function getBuildingCount() public view returns (uint count) {
        return buildingsCount;
    }

    function getBuilding(uint id) public {
        uint bId = id;
        buildingStruct storage b = buildings[id];
        string storage title = b.title;
        uint square = b.square;
        string storage ownerLogin = users[b.owner].login;
        string storage currentOwnerLogin = users[b.currentOwner].login;
        buildingStatus bStatus = b.bStatus;
        buildingType bType = b.bType;
        uint timeInUse = (block.number - b.creationTime);
        uint price = b.price;
        uint timeToAction = b.timeToAction;
        uint timeToRentalExpired = b.timeToRentalExpired;

        if (bStatus == buildingStatus.sell || bStatus == buildingStatus.rental)
        {
            if (timeToAction < block.number)
            {
                bStatus = buildingStatus.free;
                price = 0;
                timeToAction = 0;
                timeToRentalExpired = 0;
                b.buildingRequestCount = 0;

                uint i = 1;
                while (i <= b.buildingRequestCount)
                {
                    b.buildingRequests[i].addr.transfer(b.price);
                    i = i + 1;
                }
            }
        }
        else if (bStatus == buildingStatus.inRental)
        {
            if (timeToRentalExpired < block.number)
            {
                bStatus = buildingStatus.free;
                timeToRentalExpired = 0;
                b.owner = b.currentOwner;
                ownerLogin = currentOwnerLogin;
            }
        }

        emit gettedBuilding(
            bId,
            title,
            square,
            ownerLogin,
            currentOwnerLogin,
            bStatus,
            bType,
            timeInUse,
            price,
            timeToAction,
            timeToRentalExpired
        );
    }

    function getBuildingRequestCount(uint buildingId) public view
            returns(uint count) {
        buildingStruct storage b = buildings[buildingId];
        return b.buildingRequestCount;
    }

    function getBuildingRequestLogin(uint buildingId, uint requestId) public view
            returns (uint id, string memory login) {
        buildingStruct storage b = buildings[buildingId];

        address addr = b.buildingRequests[requestId].addr;
        login = users[addr].login;
        id = requestId;
    }

    function getMyRequestsCount() public view
            returns(uint count) {
        userStruct storage user = users[msg.sender];
        require(user.isExist, "user not exists");
        count = user.myRequestsCount;
    }

    function getMyRequests(uint requestId) public
            returns (bool success, uint buildingId, string memory title) {
        requestStruct storage r = users[msg.sender].myRequests[requestId];
        if (r.isAccepted)
        {
            emit gettedRequests(false, 0, "");
            return (false, 0, "");
        }

        emit gettedRequests(true, r.buildingId, r.title);
        return (true, r.buildingId, r.title);
    }

    // buying
    function sendBuildingToSell(uint id, uint price, uint timeToSell) public
            returns (bool success) {
        buildingStruct storage b = buildings[id];
        require(b.owner == msg.sender, 'invoker not a owner');
        if (b.bStatus != buildingStatus.free)
        {
            emit sendedBuildingToSell(false, 0, 0, 0);
            return (false);
        }

        b.bStatus = buildingStatus.sell;
        b.price = price;
        b.timeToAction = timeToSell + block.number;
        b.buildingRequestCount = 0;

        emit sendedBuildingToSell(true, id, price, timeToSell);
        return (true);
    }

    function cancelBuildingSell(uint id) public payable returns (bool success) {
        buildingStruct storage b = buildings[id];
        require(b.owner == msg.sender, 'invoker not a owner');

        uint i = id;
        while (i <= b.buildingRequestCount)
        {
            b.buildingRequests[i].addr.transfer(b.price);
            userStruct storage user = users[b.buildingRequests[i].addr];
            user.myRequests[b.buildingRequests[i].id].isAccepted = true;
            i = i + 1;
        }

        b.bStatus = buildingStatus.free;
        b.price = 0;
        b.timeToAction = 0;
        b.buildingRequestCount = 0;

        emit cancelledBuildingToSell(true, id);
        return (true);
    }

    function buyBuilding(uint id) public payable
            returns (bool success) {
        buildingStruct storage b = buildings[id];
        if (b.timeToAction < block.number)
        {
            b.bStatus = buildingStatus.free;
            b.price = 0;
            b.timeToAction = 0;
            b.buildingRequestCount = 0;

            msg.sender.transfer(msg.value);
            emit buyedBuilding(false);
            return(false);
        }

        if (b.price > msg.value || b.owner == msg.sender || b.bStatus != buildingStatus.sell)
        {
            msg.sender.transfer(msg.value);
            emit buyedBuilding(false);
            return(false);
        }

        userStruct storage user = users[msg.sender];
        user.myRequestsCount = user.myRequestsCount + 1;
        user.myRequests[user.myRequestsCount] = requestStruct(id, b.title, false);
        b.buildingRequestCount = b.buildingRequestCount + 1;
        b.buildingRequests[b.buildingRequestCount] = buildingRequest(user.addr, user.myRequestsCount);

        emit buyedBuilding(true);
        return(true);
    }

    function acceptBuyBuilding(uint buildingId, uint requestId) public payable
            returns (bool success) {
        buildingStruct storage b = buildings[buildingId];
        require(b.owner == msg.sender, 'invoker not a owner');
        userStruct storage user = users[msg.sender];
        uint i = requestId;
        if (b.timeToAction < block.number)
        {
            while (i <= b.buildingRequestCount)
            {
                b.buildingRequests[i].addr.transfer(b.price);
                user = users[b.buildingRequests[i].addr];
                user.myRequests[b.buildingRequests[i].id].isAccepted = true;
                i = i + 1;
            }

            msg.sender.transfer(msg.value);
            b.bStatus = buildingStatus.free;
            b.price = 0;
            b.timeToAction = 0;
            b.buildingRequestCount = 0;

            emit acceptedBuilding(false);
            return (false);
        }

        msg.sender.transfer(b.price);
        i = 1;
        while (i <= b.buildingRequestCount)
        {
            user = users[b.buildingRequests[i].addr];
            user.myRequests[b.buildingRequests[i].id].isAccepted = true;
            if (i != requestId)
                b.buildingRequests[i].addr.transfer(b.price);

            i = i + 1;
        }

        userStruct storage oldOwner = users[b.owner];
        oldOwner.myBuildingsCount = oldOwner.myBuildingsCount - 1;
        if (oldOwner.myBuildingsCount <= 0)
        {
            oldOwner.myBuildingsCount = 0;
            oldOwner.isOwner = false;
        }

        userStruct storage newOwner = users[addr];
        newOwner.myBuildingsCount = newOwner.myBuildingsCount + 1;

        address addr = b.buildingRequests[requestId].addr;
        b.buildingRequests[requestId].addr = 0;
        b.buildingRequests[requestId].id = 0;
        b.owner = addr;
        b.currentOwner = addr;
        b.bStatus = buildingStatus.free;
        b.price = 0;
        b.timeToAction = 0;

        b.buildingRequestCount = 0;

        emit acceptedBuilding(true);
        return (true);
    }

    function declineBuyBuilding(uint buildingId, uint requestId) public payable
            returns (bool success) {
        buildingStruct storage b = buildings[buildingId];
        require(b.owner == msg.sender, 'invoker not a owner');

        address addr = b.buildingRequests[requestId].addr;
        userStruct storage user = users[addr];
        require(user.isExist, "user is not exist");
        addr.transfer(b.price);

        uint i = requestId;
        while (i != b.buildingRequestCount)
        {
            b.buildingRequests[i].addr = b.buildingRequests[i + 1].addr;
            b.buildingRequests[i].id = b.buildingRequests[i + 1].id;
            i = i + 1;
        }
        b.buildingRequestCount = b.buildingRequestCount - 1;

        emit declinedBuilding(true);
        return(true);
    }

    // present
    function getPresentCount() public view returns (uint count) {
        userStruct storage user = users[msg.sender];
        require(user.isExist, "user is not exist");
        return (user.presentCount);
    }

    function getPresent(uint id) public view returns (uint buildingId, string memory login) {
        userStruct storage user = users[msg.sender];
        require(user.isExist, "user is not exist");

        buildingId = user.presentsBuilding[id].id;
        login = user.presentsBuilding[id].login;
    }

    function getMyPresentCount() public view returns (uint count) {
        userStruct storage user = users[msg.sender];
        require(user.isExist, "user is not exist");
        return (user.myPresentCount);
    }

    function getMyPresent(uint id) public view returns (uint buildingId, string memory login) {
        userStruct storage user = users[msg.sender];
        require(user.isExist, "user is not exist");

        buildingId = user.myPresent[id].id;
        login = user.myPresent[id].login;
    }

    // logic for present
    function sendBuildingToPresent(uint id, string memory login) public returns (bool success) {
        buildingStruct storage b = buildings[id];
        require(b.owner == msg.sender, 'invoker not a owner');
        userStruct storage user = users[userAddresses[login]];
        userStruct storage ownerUser = users[b.owner];
        require(user.isExist, 'user not exist');
        if (b.bStatus != buildingStatus.free)
        {
            emit sendedBuildingToPresent(false, 0, login);
            return (false);
        }

        b.bStatus = buildingStatus.present;
        b.price = 0;
        b.buildingRequestCount = 0;

        user.presentCount = user.presentCount + 1;
        user.presentsBuilding[user.presentCount].id = id;
        user.presentsBuilding[user.presentCount].login = ownerUser.login;
        ownerUser.myPresentCount = ownerUser.myPresentCount + 1;
        ownerUser.myPresent[ownerUser.myPresentCount].id = id;
        ownerUser.myPresent[ownerUser.myPresentCount].login = login;

        user.presentsBuilding[user.presentCount].participantRequestId = ownerUser.myPresentCount;
        user.presentsBuilding[user.presentCount].participantAddr = ownerUser.addr;

        ownerUser.presentsBuilding[ownerUser.myPresentCount].participantRequestId = user.presentCount;
        ownerUser.presentsBuilding[ownerUser.myPresentCount].participantAddr = user.addr;

        emit sendedBuildingToPresent(true, id, login);
        return (true);
    }

    function cancelBuildingPresent(uint buidlingId, uint requestId) public
            returns (bool success) {
        buildingStruct storage b = buildings[buidlingId];
        require(b.owner == msg.sender, 'invoker not a owner');
        userStruct storage user = users[msg.sender];
        require(user.isExist, 'user not exist');
        if (b.bStatus != buildingStatus.present)
        {
            emit cancelledPresentBuilding(false, "");
            return (false);
        }

        string storage participantLogin = user.myPresent[requestId].login;
        userStruct storage presentUser = users[userAddresses[participantLogin]];

        uint i = requestId;
        while (i != user.myPresentCount)
        {
            user.myPresent[i] = user.myPresent[i + 1];
            i = i + 1;
        }
        user.myPresentCount = user.myPresentCount - 1;

        i = user.myPresent[requestId].participantRequestId;
        while (i != presentUser.presentCount)
        {
            presentUser.presentsBuilding[i] = presentUser.presentsBuilding[i + 1];
            i = i + 1;
        }
        presentUser.presentCount = presentUser.presentCount - 1;

        b.bStatus = buildingStatus.free;
        emit cancelledPresentBuilding(true, participantLogin);
        return(true);
    }

    function acceptBuildingPresent(uint buidlingId, uint requestId) public returns (bool success) {
        userStruct storage presentUser = users[msg.sender];
        userStruct storage ownerUser = users[presentUser.presentsBuilding[requestId].participantAddr];
        require(presentUser.isExist && ownerUser.isExist, 'users not exist');

        buildingStruct storage b = buildings[buidlingId];
        userStruct storage oldOwner = users[b.owner];
        oldOwner.myBuildingsCount = oldOwner.myBuildingsCount - 1;
        if (oldOwner.myBuildingsCount <= 0)
        {
            oldOwner.myBuildingsCount = 0;
            oldOwner.isOwner = false;
        }

        userStruct storage newOwner = users[presentUser.addr];
        newOwner.myBuildingsCount = newOwner.myBuildingsCount + 1;

        b.owner = presentUser.addr;
        b.currentOwner = presentUser.addr;
        b.buildingPresentRequestId = requestId;
        b.oldCreationTime = block.number;

        emit acceptedBuildingPresent(true);
        return(true);
    }

    function declineBuildingPresent(uint requestId) public returns (bool success) {
        userStruct storage presentUser = users[msg.sender];
        require(presentUser.isExist, 'presentUser not exist');
        userStruct storage ownerUser = users[presentUser.presentsBuilding[requestId].participantAddr];
        require(ownerUser.isExist, 'ownerUser not exist');

        buildingStruct storage b = buildings[presentUser.presentsBuilding[requestId].id];
        b.bStatus = buildingStatus.free;

        uint i = requestId;
        while (i != presentUser.presentCount)
        {
            presentUser.presentsBuilding[i] = presentUser.presentsBuilding[i + 1];
            i = i + 1;
        }
        presentUser.presentCount = presentUser.presentCount - 1;

        i = presentUser.myPresent[requestId].participantRequestId;
        while (i != ownerUser.myPresentCount)
        {
            ownerUser.myPresent[i] = presentUser.myPresent[i + 1];
            i = i + 1;
        }
        ownerUser.myPresentCount = ownerUser.myPresentCount - 1;

        emit declinedPresentBuilding(true);
        return(true);
    }

    function presentBuildingBack(uint buildingId, string memory login) public returns (bool success) {
        userStruct storage presentUser = users[msg.sender];
        buildingStruct storage b = buildings[buildingId];

        userStruct storage oldOwner = users[userAddresses[login]];
        presentUser.myBuildingsCount = presentUser.myBuildingsCount - 1;
        if (presentUser.myBuildingsCount <= 0)
        {
            presentUser.myBuildingsCount = 0;
            presentUser.isOwner = false;
        }

        b.owner = oldOwner.addr;
        oldOwner.myBuildingsCount = oldOwner.myBuildingsCount + 1;
        emit presentedBuildingBack(true, b.creationTime, b.oldCreationTime);
        b.currentOwner = oldOwner.addr;
        b.creationTime = b.oldCreationTime;
        b.oldCreationTime = 0;
        b.buildingPresentRequestId = 0;

        return(true);
    }

    // rented
    function sendBuildingToRent(uint id, uint price, uint rentTime, uint rentToTime) public returns (bool success) {
        buildingStruct storage b = buildings[id];
        require(b.owner == msg.sender, 'invoker not a owner');
        if (b.bStatus != buildingStatus.free)
        {
            emit sendedBuildingToRent(false, 0, 0, 0);
            return (false);
        }

        b.bStatus = buildingStatus.rental;
        b.price = price;
        b.timeToAction = rentToTime + block.number;
        b.timeToRentalExpired = rentTime + block.number;
        b.buildingRequestCount = 0;

        emit sendedBuildingToRent(true, id, price, rentTime);
        return (true);
    }

    function cancelBuildingRent(uint id) public payable returns (bool success) {
        buildingStruct storage b = buildings[id];
        require(b.owner == msg.sender, 'invoker not a owner');

        uint i = id;
        while (i <= b.buildingRequestCount)
        {
            b.buildingRequests[i].addr.transfer(b.price);
            userStruct storage user = users[b.buildingRequests[i].addr];
            user.myRequests[b.buildingRequests[i].id].isAccepted = true;
            i = i + 1;
        }

        b.bStatus = buildingStatus.free;
        b.price = 0;
        b.timeToRentalExpired = 0;
        b.buildingRequestCount = 0;

        emit cancelledBuildingToRent(true, id);
        return (true);
    }

    function rentBuilding(uint id) public payable returns (bool success) {
        buildingStruct storage b = buildings[id];

        if (b.price > msg.value || b.owner == msg.sender || b.bStatus != buildingStatus.rental)
        {
            msg.sender.transfer(msg.value);
            emit rentedBuilding(false);
            return(false);
        }
        userStruct storage user = users[msg.sender];
        user.myRequestsCount = user.myRequestsCount + 1;
        user.myRequests[user.myRequestsCount] = requestStruct(id, b.title, false);
        b.buildingRequestCount = b.buildingRequestCount + 1;
        b.buildingRequests[b.buildingRequestCount] = buildingRequest(user.addr, user.myRequestsCount);

        emit rentedBuilding(true);
        return(true);
    }

    function backRentBuilding(uint id, uint requestId) public payable returns (bool success) {
        buildingStruct storage b = buildings[id];

        if (b.bStatus != buildingStatus.rental)
        {
            emit rentBuildingBack(false);
            return(false);
        }
        uint i = requestId;
        while (i != b.buildingRequestCount)
        {
            b.buildingRequests[i].addr = b.buildingRequests[i + 1].addr;
            b.buildingRequests[i].id = b.buildingRequests[i + 1].id;
            i = i + 1;
        }
        b.buildingRequestCount = b.buildingRequestCount - 1;

        msg.sender.transfer(b.price);

        emit rentBuildingBack(true);
        return(true);
    }

    function acceptRentBuilding(uint buildingId, uint requestId) public payable
            returns (bool success) {
        buildingStruct storage b = buildings[buildingId];
        require(b.owner == msg.sender, 'invoker not a owner');

        msg.sender.transfer(b.price);

        uint i = requestId;
        if (b.timeToAction < block.number)
        {
            while (i <= b.buildingRequestCount)
            {
                b.buildingRequests[i].addr.transfer(b.price);
                userStruct storage user = users[b.buildingRequests[i].addr];
                user.myRequests[b.buildingRequests[i].id].isAccepted = true;
                i = i + 1;
            }

            msg.sender.transfer(msg.value);
            b.bStatus = buildingStatus.free;
            b.price = 0;
            b.timeToAction = 0;
            b.buildingRequestCount = 0;

            emit acceptedBuilding(false);
            return (false);
        }

        i = requestId;
        while (i <= b.buildingRequestCount)
        {
            userStruct storage usr = users[b.buildingRequests[i].addr];
            usr.myRequests[b.buildingRequests[i].id].isAccepted = true;
            if (i != requestId)
                b.buildingRequests[i].addr.transfer(b.price);
            i = i + 1;
        }

        address addr = b.buildingRequests[requestId].addr;
        b.buildingRequests[requestId].addr = 0;
        b.buildingRequests[requestId].id = 0;
        b.currentOwner = addr;
        b.bStatus = buildingStatus.inRental;
        b.price = 0;
        b.timeToRentalExpired = b.timeToRentalExpired + block.number;

        b.buildingRequestCount = 0;

        emit acceptedRentBuilding(true);
        return (true);
    }

    function declineRentBuilding(uint buildingId, uint requestId) public payable
            returns (bool success) {
        buildingStruct storage b = buildings[buildingId];
        require(b.owner == msg.sender, 'invoker not a owner');

        address addr = b.buildingRequests[requestId].addr;
        userStruct storage user = users[addr];
        require(user.isExist, "user is not exist");
        addr.transfer(b.price);

        uint i = requestId;
        while (i != b.buildingRequestCount)
        {
            b.buildingRequests[i].addr = b.buildingRequests[i + 1].addr;
            b.buildingRequests[i].id = b.buildingRequests[i + 1].id;
            i = i + 1;
        }

        b.buildingRequestCount = b.buildingRequestCount - 1;

        emit declinedRentBuilding(true);
        return(true);
    }
}
