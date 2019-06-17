import json
import web3

from web3 import Web3, HTTPProvider
from solc import compile_source
from web3.contract import ConciseContract
from enum import Enum

class buildingType(Enum):
    residental = "residental"
    notResidental = "notResidental"

# Solidity source code
def getSourceCode(path):
    with open(path, encoding='utf8') as file:
        return file.read().strip()

contract_source_code = getSourceCode('GreenElephantContract.sol')
compiled_sol = compile_source(contract_source_code) # Compiled source code
contract_interface = compiled_sol['<stdin>:GreenElephantContract']

# web3.py instance
w3 = Web3(HTTPProvider("http://127.0.0.1:8545"))

w3.personal.unlockAccount(w3.eth.accounts[0], 'password')

# set pre-funded account as sender
w3.eth.defaultAccount = w3.eth.accounts[0]

# Instantiate and deploy contract
GreenElephantContract = w3.eth.contract(abi=contract_interface['abi'], bytecode=contract_interface['bin'])

# Submit the transaction that deploys the contract
tx_hash = GreenElephantContract.constructor().transact()
tx_receipt = w3.eth.waitForTransactionReceipt(tx_hash)

# Create the contract instance with the newly-deployed address
greenElephantContract = w3.eth.contract(
    address=tx_receipt.contractAddress,
    abi=contract_interface['abi'],
)

def setDefaultAccount():
    w3.personal.unlockAccount(w3.eth.accounts[0], 'password')
    w3.eth.defaultAccount = w3.eth.accounts[0]

def getAddrByLogin(login):
    addr = greenElephantContract.functions.getAddrByLogin(login).call()
    
    if ((w3.isAddress(addr)) & (addr != '0x0000000000000000000000000000000000000000')):
        return addr
    return False

def login(login, password):
    addr = getAddrByLogin(login)
    
    if (addr != False):
        if (w3.personal.unlockAccount(addr, password) == False):
            return False

        w3.eth.defaultAccount = addr
        result = greenElephantContract.functions.loginToAccount(login).call()
        w3.personal.lockAccount(addr)
        setDefaultAccount()
        return result
    return False

def register(login, password):
    addr = getAddrByLogin(login)
    
    if (addr != False):
        return False

    addr = w3.personal.newAccount(password)

    transaction = {
        'from': w3.eth.defaultAccount,
        'to': addr,
        'value': w3.toWei(100, 'ether')
    }
    tx_hash = w3.eth.sendTransaction(transaction)
    w3.eth.waitForTransactionReceipt(tx_hash)

    if (w3.personal.unlockAccount(addr, password) == False):
        return False

    w3.eth.defaultAccount = addr

    tx_hash = greenElephantContract.functions.register(login).transact()
    receipt = w3.eth.waitForTransactionReceipt(tx_hash)

    w3.personal.lockAccount(addr)
    setDefaultAccount()
    return greenElephantContract.events.registered().processReceipt(receipt)[0]['args']

def giveAdmin(login):
    tx_hash = greenElephantContract.functions.giveAdmin(login).transact()
    try:
        w3.eth.waitForTransactionReceipt(tx_hash)
        return True
    except:
        return False

def createBuilding(login, password, loginToBuild, title, square, buildingType):
    addr = getAddrByLogin(login)
    
    if (addr == False):
        return False

    if (w3.personal.unlockAccount(addr, password) == False):
        return False

    w3.eth.defaultAccount = addr

    bType = 1
    if (buildingType == 'residental'):
        bType = 0

    tx_hash = greenElephantContract.functions.createBuilding(loginToBuild, title, square, bType).transact()
    receipt = w3.eth.waitForTransactionReceipt(tx_hash)

    w3.personal.lockAccount(addr)
    setDefaultAccount()
    return greenElephantContract.events.buildingCreated().processReceipt(receipt)[0]['args']

def getBuildings(login, password):
    addr = getAddrByLogin(login)
    
    if (addr == False):
        return False

    if (w3.personal.unlockAccount(addr, password) == False):
        return False

    w3.eth.defaultAccount = addr

    buidlingCount = greenElephantContract.functions.getBuildingCount().call()

    result = []
    i = 1
    while i <= buidlingCount:
        tx_hash = greenElephantContract.functions.getBuilding(i).transact()
        receipt = w3.eth.waitForTransactionReceipt(tx_hash)

        res = greenElephantContract.events.gettedBuilding().processReceipt(receipt)[0]['args']
        print (res['timeToRentalExpired'])
        result.append(greenElephantContract.events.gettedBuilding().processReceipt(receipt)[0]['args'])
        i += 1

    w3.personal.lockAccount(addr)
    setDefaultAccount()
    return result, str(res['timeToRentalExpired'])

def getBuildingsRequests(login, password, id):
    addr = getAddrByLogin(login)
    
    if (addr == False):
        return False

    if (w3.personal.unlockAccount(addr, password) == False):
        return False

    w3.eth.defaultAccount = addr

    requestsCount = greenElephantContract.functions.getBuildingRequestCount(id).call()

    result = []
    i = 1
    while i <= requestsCount:
        login = greenElephantContract.functions.getBuildingRequestLogin(id, i).call()
        result.append(login)
        i += 1

    w3.personal.lockAccount(addr)
    setDefaultAccount()
    return result

def sendBuildingToSell(login, password, id, price, timeToSell):
    addr = getAddrByLogin(login)
    
    if (addr == False):
        return False

    if (w3.personal.unlockAccount(addr, password) == False):
        return False

    w3.eth.defaultAccount = addr

    tx_hash = greenElephantContract.functions.sendBuildingToSell(id, w3.toWei(price, 'ether'), timeToSell).transact()
    receipt = w3.eth.waitForTransactionReceipt(tx_hash)

    w3.personal.lockAccount(addr)
    setDefaultAccount()
    return greenElephantContract.events.sendedBuildingToSell().processReceipt(receipt)[0]['args']

def cancelBuildingSell(login, password, id):
    addr = getAddrByLogin(login)
    
    if (addr == False):
        return False

    if (w3.personal.unlockAccount(addr, password) == False):
        return False

    w3.eth.defaultAccount = addr

    tx_hash = greenElephantContract.functions.cancelBuildingSell(id).transact()
    receipt = w3.eth.waitForTransactionReceipt(tx_hash)

    w3.personal.lockAccount(addr)
    setDefaultAccount()
    return greenElephantContract.events.cancelledBuildingToSell().processReceipt(receipt)[0]['args']

def buyBuilding(login, password, id, price):
    addr = getAddrByLogin(login)
    
    if (addr == False):
        return False

    if (w3.personal.unlockAccount(addr, password) == False):
        return False

    w3.eth.defaultAccount = addr

    tx_hash = greenElephantContract.functions.buyBuilding(id).transact({'from': addr, 'value': w3.toWei(price, 'ether')})
    receipt = w3.eth.waitForTransactionReceipt(tx_hash)

    w3.personal.lockAccount(addr)
    setDefaultAccount()
    return greenElephantContract.events.buyedBuilding().processReceipt(receipt)[0]['args']

def acceptBuyBuilding(login, password, buildingId, requestId):
    addr = getAddrByLogin(login)
    
    if (addr == False):
        return False

    if (w3.personal.unlockAccount(addr, password) == False):
        return False

    w3.eth.defaultAccount = addr

    tx_hash = greenElephantContract.functions.acceptBuyBuilding(buildingId, requestId).transact()
    receipt = w3.eth.waitForTransactionReceipt(tx_hash)

    w3.personal.lockAccount(addr)
    setDefaultAccount()
    return greenElephantContract.events.acceptedBuilding().processReceipt(receipt)[0]['args']

def declineBuyBuilding(login, password, buildingId, requestId):
    addr = getAddrByLogin(login)
    
    if (addr == False):
        return False

    if (w3.personal.unlockAccount(addr, password) == False):
        return False

    w3.eth.defaultAccount = addr

    tx_hash = greenElephantContract.functions.declineBuyBuilding(buildingId, requestId).transact()
    receipt = w3.eth.waitForTransactionReceipt(tx_hash)

    w3.personal.lockAccount(addr)
    setDefaultAccount()
    return greenElephantContract.events.declinedBuilding().processReceipt(receipt)[0]['args']

def getPresents(login, password):
    addr = getAddrByLogin(login)
    
    if (addr == False):
        return False

    if (w3.personal.unlockAccount(addr, password) == False):
        return False

    w3.eth.defaultAccount = addr

    buidlingCount = greenElephantContract.functions.getPresentCount().call()

    result = []
    i = 1
    while i <= buidlingCount:
        buildingId = greenElephantContract.functions.getPresent(i).call()
        tx_hash = greenElephantContract.functions.getBuilding(buildingId[0]).transact()
        receipt = w3.eth.waitForTransactionReceipt(tx_hash)

        result.append(greenElephantContract.events.gettedBuilding().processReceipt(receipt)[0]['args'])
        i += 1

    w3.personal.lockAccount(addr)
    setDefaultAccount()
    return result

def sendBuildingToPresent(login, password, id, loginForPresent):
    addr = getAddrByLogin(login)
    
    if (addr == False):
        return False

    if (w3.personal.unlockAccount(addr, password) == False):
        return False

    w3.eth.defaultAccount = addr

    tx_hash = greenElephantContract.functions.sendBuildingToPresent(id, loginForPresent).transact()
    receipt = w3.eth.waitForTransactionReceipt(tx_hash)

    w3.personal.lockAccount(addr)
    setDefaultAccount()
    return greenElephantContract.events.sendedBuildingToPresent().processReceipt(receipt)[0]['args']

def cancelBuildingPresent(login, password, buildingId, requestId):
    addr = getAddrByLogin(login)
    
    if (addr == False):
        return False

    if (w3.personal.unlockAccount(addr, password) == False):
        return False

    w3.eth.defaultAccount = addr

    tx_hash = greenElephantContract.functions.cancelBuildingPresent(buildingId, requestId).transact()
    receipt = w3.eth.waitForTransactionReceipt(tx_hash)

    w3.personal.lockAccount(addr)
    setDefaultAccount()
    return greenElephantContract.events.cancelledPresentBuilding().processReceipt(receipt)[0]['args']

def acceptBuildingPresent(login, password, buildingId, requestId):
    addr = getAddrByLogin(login)
    
    if (addr == False):
        return False

    if (w3.personal.unlockAccount(addr, password) == False):
        return False

    w3.eth.defaultAccount = addr

    tx_hash = greenElephantContract.functions.acceptBuildingPresent(buildingId, requestId).transact()
    receipt = w3.eth.waitForTransactionReceipt(tx_hash)

    w3.personal.lockAccount(addr)
    setDefaultAccount()
    return greenElephantContract.events.acceptedBuildingPresent().processReceipt(receipt)[0]['args']

def declineBuildingPresent(login, password, requestId):
    addr = getAddrByLogin(login)
    
    if (addr == False):
        return False

    if (w3.personal.unlockAccount(addr, password) == False):
        return False

    w3.eth.defaultAccount = addr

    tx_hash = greenElephantContract.functions.declineBuildingPresent(requestId).transact()
    receipt = w3.eth.waitForTransactionReceipt(tx_hash)

    w3.personal.lockAccount(addr)
    setDefaultAccount()
    return greenElephantContract.events.declinedPresentBuilding().processReceipt(receipt)[0]['args']

def presentBuildingBack(login, password, buildingId, loginToReturn):
    addr = getAddrByLogin(login)
    
    if (addr == False):
        return False

    if (w3.personal.unlockAccount(addr, password) == False):
        return False

    w3.eth.defaultAccount = addr

    tx_hash = greenElephantContract.functions.presentBuildingBack(buildingId, loginToReturn).transact()
    receipt = w3.eth.waitForTransactionReceipt(tx_hash)

    w3.personal.lockAccount(addr)
    setDefaultAccount()
    return greenElephantContract.events.presentedBuildingBack().processReceipt(receipt)[0]['args']

def getPresentByMe(login, password):
    addr = getAddrByLogin(login)
    
    if (addr == False):
        return False

    if (w3.personal.unlockAccount(addr, password) == False):
        return False

    w3.eth.defaultAccount = addr

    buidlingCount = greenElephantContract.functions.getMyPresentCount().call()

    result = []
    i = 1
    while i <= buidlingCount:
        buildingId = greenElephantContract.functions.getMyPresent(i).call()
        tx_hash = greenElephantContract.functions.getBuilding(buildingId[0]).transact()
        receipt = w3.eth.waitForTransactionReceipt(tx_hash)

        result.append(greenElephantContract.events.gettedBuilding().processReceipt(receipt)[0]['args'])
        i += 1

    w3.personal.lockAccount(addr)
    setDefaultAccount()
    return result

def sendBuildingToRent(login, password, buildingId, price, rentTime, rentToTime):
    addr = getAddrByLogin(login)
    
    if (addr == False):
        return False

    if (w3.personal.unlockAccount(addr, password) == False):
        return False

    w3.eth.defaultAccount = addr

    tx_hash = greenElephantContract.functions.sendBuildingToRent(buildingId, w3.toWei(price, 'ether'), rentTime, rentToTime).transact()
    receipt = w3.eth.waitForTransactionReceipt(tx_hash)

    w3.personal.lockAccount(addr)
    setDefaultAccount()
    return greenElephantContract.events.sendedBuildingToRent().processReceipt(receipt)[0]['args']

def cancelBuildingRent(login, password, buildingId):
    addr = getAddrByLogin(login)
    
    if (addr == False):
        return False

    if (w3.personal.unlockAccount(addr, password) == False):
        return False

    w3.eth.defaultAccount = addr

    tx_hash = greenElephantContract.functions.cancelBuildingRent(buildingId).transact()
    receipt = w3.eth.waitForTransactionReceipt(tx_hash)

    w3.personal.lockAccount(addr)
    setDefaultAccount()
    return greenElephantContract.events.cancelledBuildingToRent().processReceipt(receipt)[0]['args']

def rentBuilding(login, password, buildingId, price):
    addr = getAddrByLogin(login)
    
    if (addr == False):
        return False

    if (w3.personal.unlockAccount(addr, password) == False):
        return False

    w3.eth.defaultAccount = addr

    tx_hash = greenElephantContract.functions.rentBuilding(buildingId).transact({'from': addr, 'value': w3.toWei(price, 'ether')})
    receipt = w3.eth.waitForTransactionReceipt(tx_hash)

    w3.personal.lockAccount(addr)
    setDefaultAccount()
    return greenElephantContract.events.rentedBuilding().processReceipt(receipt)[0]['args']

def backRentBuilding(login, password, buildingId, requestId):
    addr = getAddrByLogin(login)
    
    if (addr == False):
        return False

    if (w3.personal.unlockAccount(addr, password) == False):
        return False

    w3.eth.defaultAccount = addr

    tx_hash = greenElephantContract.functions.backRentBuilding(buildingId, requestId).transact()
    receipt = w3.eth.waitForTransactionReceipt(tx_hash)

    w3.personal.lockAccount(addr)
    setDefaultAccount()
    return greenElephantContract.events.rentBuildingBack().processReceipt(receipt)[0]['args']

def acceptRentBuilding(login, password, buildingId, requestId):
    addr = getAddrByLogin(login)
    
    if (addr == False):
        return False

    if (w3.personal.unlockAccount(addr, password) == False):
        return False

    w3.eth.defaultAccount = addr

    tx_hash = greenElephantContract.functions.acceptRentBuilding(buildingId, requestId).transact()
    receipt = w3.eth.waitForTransactionReceipt(tx_hash)

    w3.personal.lockAccount(addr)
    setDefaultAccount()
    return greenElephantContract.events.acceptedRentBuilding().processReceipt(receipt)[0]['args']

def declineRentBuilding(login, password, buildingId, requestId):
    addr = getAddrByLogin(login)
    
    if (addr == False):
        return False

    if (w3.personal.unlockAccount(addr, password) == False):
        return False

    w3.eth.defaultAccount = addr

    tx_hash = greenElephantContract.functions.declineRentBuilding(buildingId, requestId).transact()
    receipt = w3.eth.waitForTransactionReceipt(tx_hash)

    w3.personal.lockAccount(addr)
    setDefaultAccount()
    return greenElephantContract.events.declinedRentBuilding().processReceipt(receipt)[0]['args']

def getMyRequests(login, password):
    addr = getAddrByLogin(login)
    
    if (addr == False):
        return False

    if (w3.personal.unlockAccount(addr, password) == False):
        return False

    w3.eth.defaultAccount = addr

    reqCount = greenElephantContract.functions.getMyRequestsCount().call()

    result = []
    i = 1
    while i <= reqCount:
        tx_hash = greenElephantContract.functions.getMyRequests(i).transact()
        receipt = w3.eth.waitForTransactionReceipt(tx_hash)

        req = greenElephantContract.events.gettedRequests().processReceipt(receipt)[0]['args']

        if (req['success'] == True):
            result.append(req)

        i += 1

    w3.personal.lockAccount(addr)
    setDefaultAccount()
    return result

print ('registering users...')
register('admin', 'admin')
register('user1', 'user1')
print("created (admin, user1) accounts")
print("Set admin account to admin:", giveAdmin('admin'))

print ('creating buildings...')
createBuilding('admin', 'admin', 'user1', 'this is a building', 10, 0)
print('Buildings created', getBuildings('user1', 'user1'))


# print (sendBuildingToSell('user1', 'user1', 1, 10, 500))
# print (buyBuilding('user2', 'user2', 1, 10))
# print (buyBuilding('user3', 'user3', 1, 10))
# print (getMyRequests('user2', 'user2'))
# print (acceptBuyBuilding('user1', 'user1', 1, 1))
# print (getMyRequests('user2', 'user2'))
# print (getMyRequests('user3', 'user3'))

# print()
# print ('present->getByMe->getPresent->cancel')
# print(sendBuildingToPresent('user1', 'user1', 1, 'user2'))
# print('getPresentByMe')
# print(getPresentByMe('user1', 'user1'))
# print('getPresents')
# print(getPresents('user2', 'user2'))
# print(cancelBuildingPresent('user1', 'user1', 1, 1))
# print('getPresents')
# print(getPresents('user2', 'user2'))
# print('getPresentByMe')
# print(getPresentByMe('user1', 'user1'))

# print()
# print ('present->get->decline')
# print(sendBuildingToPresent('user1', 'user1', 1, 'user2'))
# print('getPresents')
# print(getPresents('user2', 'user2'))
# print(declineBuildingPresent('user2', 'user2', 1))
# print('getPresents')
# print(getPresents('user2', 'user2'))
# print('getPresentByMe []')
# print(getPresentByMe('user1', 'user1'))

# print()
# print ('present->get->accept')
# print(sendBuildingToPresent('user1', 'user1', 1, 'user2'))
# print(getPresents('user2', 'user2'))
# print(acceptBuildingPresent('user2', 'user2', 1, 1))

# print()
# print ('get->back->get')
# print(getBuildings('user1', 'user1'))
# print(presentBuildingBack('user2', 'user2', 1, 'user1'))
# print(getBuildings('user1', 'user1'))
print(getBuildings('user1', 'user1'))
print()
print('send->rent->getRequests->back-----------------')
print(sendBuildingToRent('user1', 'user1', 1, 10, 500, 500))
print(rentBuilding('user2', 'user2', 1, 10))
# print(getBuildingsRequests('user1', 'user1', 1))
# print(backRentBuilding('user1', 'user1', 1, 1))

# print()
# print('rent->decline->getRequests-----------------')
# print(rentBuilding('user2', 'user2', 1, 10))
# print(declineRentBuilding('user1', 'user1', 1, 1))
# print(getBuildingsRequests('user1', 'user1', 1))

# print()
# print('rent->getRequests->acceptRent-----')
# print(rentBuilding('user2', 'user2', 1, 10))
# print(getBuildingsRequests('user1', 'user1', 1))
print(acceptRentBuilding('user1', 'user1', 1, 1))

# print()
# print('get buldings-----')
print(getBuildings('user1', 'user1'))

# print()
# print('send->buy->get-----------------')
# print(sendBuildingToSell('user1', 'user1', 1, 10, 500))
# print(buyBuilding('user2', 'user2', 1, 10))
# print(getBuildingsRequests('user1', 'user1', 1))

# print()
# print('buy->decline->get-----------------')
# print(buyBuilding('user2', 'user2', 1, 10))
# print(declineBuyBuilding('user1', 'user1', 1, 1))
# print(getBuildingsRequests('user1', 'user1', 1))

# print()
# print('buy->get->accept-----')
# print(buyBuilding('user2', 'user2', 1, 10))
# print(getBuildingsRequests('user1', 'user1', 1))
# print(acceptBuyBuilding('user1', 'user1', 1, 1))

# print()
# print('get buldings-----')
# print(getBuildings('user1', 'user1'))

# print(createBuilding('admin', 'admin', 'user1', 'this is a building', 10, 0))
# print(createBuilding('admin', 'admin', 'user1', 'this is a new building', 15, 1))
# print(getBuildings('user1', 'user1'))

# print(sendBuildingToSell('user1', 'user1', 1, 100, 5))
# print(getBuildings('user1', 'user1'))

# print(cancelBuildingSell('user1', 'user1', 1))
# print(getBuildings('user1', 'user1'))

# def testEvent():
#     tx_hash = greenElephantContract.functions.testEvent('tst').transact()
#     receipt = w3.eth.waitForTransactionReceipt(tx_hash)
#     print(greenElephantContract.events.test().processReceipt(receipt)[0]['args']['name'])


# transaction = {
#         'from': w3.eth.defaultAccount,
#         'to': w3.eth.accounts[1],
#         'value': w3.toWei(1, 'ether')
#     }
# tx_hash = w3.eth.sendTransaction(transaction)
# w3.eth.waitForTransactionReceipt(tx_hash)

# print(w3.fromWei(w3.eth.getBalance(w3.eth.accounts[1]), 'ether'))

# # Display the default greeting from the contract
# print('Default contract greeting: {}'.format(
#     greenElephantContract.functions.greet().call()
# ))

# print('Setting the greeting to Nihao...')
# tx_hash = greenElephantContract.functions.setGreeting('Nihao').transact()

# # Wait for transaction to be mined...
# w3.eth.waitForTransactionReceipt(tx_hash)

# # Display the new greeting value
# print('Updated contract greeting: {}'.format(
#     greenElephantContract.functions.greet().call()
# ))

# # When issuing a lot of reads, try this more concise reader:
# #reader = ConciseContract(greeter)
# #assert reader.greet() == "Nihao"
