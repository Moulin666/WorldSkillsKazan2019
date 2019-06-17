import sys, string,  cgi, time, datetime, json, time, web3
from os import curdir, sep
from http.server import BaseHTTPRequestHandler, HTTPServer
from urllib.parse import urlparse
from web3 import Web3, HTTPProvider
from solc import compile_source
from web3.contract import ConciseContract
from web3.middleware import geth_poa_middleware


HOST_NAME = '10.50.192.251'
PORT_NUMBER = 80
w3 = None
greenElephantContract = None

class apiHandler():

    def enumUserRoleConvertorOut(self, number):
        if (number == 0):
            return "user"
        if (number == 1):
            return "admin"

    def enumBuildingStatusConvertorOut(self, number):
        if (number == 0):
            return "free"
        if (number == 1):
            return "rental"
        if (number == 2):
            return "sell"
        if (number == 3):
            return "present"
        if (number == 3):
            return "inRental"

    def enumBuildingTypeConvertorOut(self, number):
        if (number == 0):
            return "residental"
        if (number == 1):
            return "notResidental"

    def enumUserRoleConvertorIn(self, number):
        if (number == "user"):
            return 0
        if (number == "admin"):
            return 1

    def enumBuildingStatusConvertorIn(self, number):
        if (number == "free"):
            return 0
        if (number == "rental"):
            return 1
        if (number == "sell"):
            return 2
        if (number == "present"):
            return 3
        if (number == "inRental"):
            return 4

    def enumBuildingTypeConvertorIn(self, number):
        if (number == "residental"):
            return 0
        if (number == "notResidental"):
            return 1

    def main(self, data):
        #print("Query Request: " + str(data))
        if (data['method'] == "login"):
            return self.login(data['login'],data['password'])
        if (data['method'] == "register"):
            # return self.register(data['login'],data['password'])
            try:
                return self.register(data['login'],data['password'])
            except:
                self.setDefaultAccount()
                return{
                    "success" : False
                }
        if (data['method'] == "createBuilding"):
            return self.createBuilding(data['login'], data['password'], data['loginToBuild'], data['title'], int(data['square']), self.enumBuildingTypeConvertorIn(data['buildingType']))

        if (data['method'] == "getBuildings"):
            return self.getBuildings(data['login'], data['password'])

        if (data['method'] == "sendBuildingToSell"):
            return self.sendBuildingToSell(data['login'], data['password'], int(data['id']), int(data['price']), int(data['timeToSell']))

        if (data['method'] == "cancelBuildingSell"):
            return self.cancelBuildingSell(data['login'], data['password'], int(data['id']))

        if (data['method'] == "cancelBuildingSell"):
            return self.cancelBuildingSell(data['login'], data['password'], int(data['id']))

        if (data['method'] == "acceptBuyBuilding"):
            return self.acceptBuyBuilding(data['login'], data['password'], int(data['buildingId']), int(data['requestId']))

        if (data['method'] == "buyBuilding"):
            return self.buyBuilding(data['login'], data['password'], int(data['id']), int(data['price']))
        
        if (data['method'] == "getBuildingsRequests"):
            return self.getBuildingsRequests(data['login'], data['password'], int(data['id']))

        if (data['method'] == "getBalance"):
            return self.getBalance(data['address'])

        if (data['method'] == "sendBuildingToRent"):
            return self.sendBuildingToRent(data['login'], data['password'], int(data['buildingId']), int(data['price']), int(data['rentTime']), int(data['rentToTime']))

        if (data['method'] == "rentBuilding"):
            return self.rentBuilding(data['login'], data['password'], int(data['buildingId']), int(data['price']))
        
        if (data['method'] == "backRentBuilding"):
            return self.backRentBuilding(data['login'], data['password'], int(data['buildingId']), int(data['requestId']))
        
        if (data['method'] == "declineRentBuilding"):
            return self.declineRentBuilding(data['login'], data['password'], int(data['buildingId']), int(data['requestId']))
        
        if (data['method'] == "acceptRentBuilding"):
            return self.acceptRentBuilding(data['login'], data['password'], int(data['buildingId']), int(data['requestId']))

        if (data['method'] == "getPresents"):
            return self.getPresents(data['login'], data['password'])

        if (data['method'] == "sendBuildingToPresent"):
            return self.sendBuildingToPresent(data['login'], data['password'], int(data['id']), data['loginForPresent'])

        if (data['method'] == "getPresentByMe"):
                    return self.getPresentByMe(data['login'], data['password'])

        if (data['method'] == "getPresents"):
                    return self.getPresents(data['login'], data['password'])

        if (data['method'] == "cancelBuildingPresent"):
                    return self.cancelBuildingPresent(data['login'], data['password'], int(data['buildingId']), int(data['requestId']))

        if (data['method'] == "declineBuildingPresent"):
                    return self.declineBuildingPresent(data['login'], data['password'], int(data['requestId']))

        if (data['method'] == "acceptBuildingPresent"):
                    return self.acceptBuildingPresent(data['login'], data['password'], int(data['buildingId']), int(data['requestId']))

        if (data['method'] == "presentBuildingBack"):
                    return self.presentBuildingBack(data['login'], data['password'], int(data['buildingId']), data['loginToReturn'])
       
        if (data['method'] == "getMyRequests"):
            return self.getMyRequests(data['login'], data['password'])

        else:
            return{
                "success" : False,
                "message" : "method not found"
                }

    def setDefaultAccount(self):
        self.w3.personal.unlockAccount(self.w3.eth.accounts[0], 'password')
        self.w3.eth.defaultAccount = self.w3.eth.accounts[0]

    def getAddrByLogin(self, login):
        addr = self.greenElephantContract.functions.getAddrByLogin(login).call()
        
        if ((self.w3.isAddress(addr)) & (addr != '0x0000000000000000000000000000000000000000')):
            return addr
        return False 

    def getSourceCode(self, path):
        with open(path, encoding='utf8') as file:
            return file.read().strip()
    def initHandler(self):
        contract_source_code = self.getSourceCode('GreenElephantContract.sol')
        compiled_sol = compile_source(contract_source_code) # Compiled source code
        contract_interface = compiled_sol['<stdin>:GreenElephantContract']

        self.w3 = Web3(HTTPProvider("http://127.0.0.1:8545"))
        DefaultAddres = self.w3.eth.accounts[0]
        print(DefaultAddres)
        print("Eth value: " + str(int(self.w3.fromWei(self.w3.eth.getBalance('0x12890D2cce102216644c59daE5baed380d84830c'),'ether'))))
        self.w3.personal.unlockAccount(self.w3.eth.accounts[0], 'password')
        self.w3.eth.defaultAccount = self.w3.eth.accounts[0]

        GreenElephantContract = self.w3.eth.contract(abi=contract_interface['abi'], bytecode=contract_interface['bin'])

        # Submit the transaction that deploys the contract
        tx_hash = GreenElephantContract.constructor().transact()
        tx_receipt = self.w3.eth.waitForTransactionReceipt(tx_hash)

        # Create the contract instance with the newly-deployed address
        self.greenElephantContract = self.w3.eth.contract(
            address=tx_receipt.contractAddress,
            abi=contract_interface['abi'],
        )
        self.register('admin','admin')
        self.giveAdmin('admin')
        self.setDefaultAccount()
        return 

    def login(self, login, password):
        addr = self.getAddrByLogin(login)
        print("Login address: " + str(addr))
        if (addr == False):
            return {
                "success" : False
            }
        if(self.w3.personal.unlockAccount(addr, password) == False):
            return{
                "success" : False
            }
        #print("IsAccountUnlock " + str(self.w3.personal.unlockAccount(addr, password)))
        self.w3.eth.defaultAccount = addr
        response = self.greenElephantContract.functions.loginToAccount(login).call()
        self.w3.personal.lockAccount(addr)
        self.setDefaultAccount()

        isAdmin = None
        if(response[1] == 0):
            isAdmin = False
        else:
            isAdmin = True
        return {
            "isAdmin" : isAdmin,
            "success" : True,
            "address" : addr,
            "balance" : str(int(self.w3.fromWei(self.w3.eth.getBalance(addr),'ether')))
            }

    def getBalance(self, address):
        try:
            balance = int(self.w3.fromWei(self.w3.eth.getBalance(address),'ether'))
            return {
                "success" : True,
                "balance" : balance,
                "reload" : True

            }
        except:
            self.setDefaultAccount()
            return {
                "success" : False
            }

    def register(self, login, password):
        addr = self.getAddrByLogin(login)
    
        if (addr != False):
            return {
                "success" : False
            }
        addr = self.w3.personal.newAccount(password)
        transaction = {
            'from': self.w3.eth.defaultAccount,
            'to': addr,
            'value': self.w3.toWei(100, 'ether')
        }
        tx_hash = self.w3.eth.sendTransaction(transaction)
        self.w3.eth.waitForTransactionReceipt(tx_hash)

        self.w3.personal.unlockAccount(addr, password)
        self.w3.eth.defaultAccount = addr

        tx_hash = self.greenElephantContract.functions.register(login).transact()
        receipt = self.w3.eth.waitForTransactionReceipt(tx_hash)
        
        temp = self.greenElephantContract.events.registered().processReceipt(receipt)[0]['args']
        self.w3.personal.lockAccount(addr)
        self.setDefaultAccount()
        return {
                "success" : temp['success'],
                 "addres" : temp['addr']
            }
    def giveAdmin(self, login):
        tx_hash = self.greenElephantContract.functions.giveAdmin(login).transact()
        try:
            self.w3.eth.waitForTransactionReceipt(tx_hash)
            return {
                "success" : True
            }
        except:
            self.setDefaultAccount()
            return {
                "success" : False
            }
    def createBuilding(self, login, password, loginToBuild, title, square, buildingType):
        try:
            addr = self.getAddrByLogin(login)
            
            if (addr == False):
                self.setDefaultAccount()
                return {
                "success" : False
            }


            if (self.w3.personal.unlockAccount(addr, password) == False):
                self.setDefaultAccount()
                return {
                "success" : False
            }


            self.w3.eth.defaultAccount = addr
            print("Invoker Addres: " + str(addr))
            print("Default Address: " + str(self.w3.eth.defaultAccount)) 
            print("Default balance: " + str(int(self.w3.fromWei(self.w3.eth.getBalance(addr),'ether'))) )
            print(1)
            bType = buildingType
            tx_hash = self.greenElephantContract.functions.createBuilding(loginToBuild, title, square, bType).transact()
            receipt = self.w3.eth.waitForTransactionReceipt(tx_hash)
            print(2)
            self.w3.personal.lockAccount(addr)
            print(3)
            print(4)
            output = self.greenElephantContract.events.buildingCreated().processReceipt(receipt)[0]['args']
            self.setDefaultAccount()
            return {
                "success": output['success'],
                "buildingCount": output['buildingCount'],
                "login": output['login'],
                "addr": output['addr'],
                "bType": self.enumBuildingTypeConvertorOut(output['bType']),
                "creationTime": output['creationTime'],
                "reload" : True
                }
        except:
            self.setDefaultAccount()
            return{
                "success" : False
            }



    def getBuildings(self, login, password):
        addr = self.getAddrByLogin(login)
    
        if (addr == False):
            return {
                "success" : False
            }
        print(1)
        if (addr == False):
            self.setDefaultAccount()
            return{
                "success" : False
            }
        print(2)
        if (self.w3.personal.unlockAccount(addr, password) == False):
            self.setDefaultAccount()
            return {
                "success" : False
            }
        print(3)

        self.w3.eth.defaultAccount = addr
        print(4)
        buidlingCount = self.greenElephantContract.functions.getBuildingCount().call()
        print(5)
        if (buidlingCount == 0):
            self.setDefaultAccount()
            return{
                "success" : False
            }
        print(6)
        i = 1
        temp = ""
        while i <= buidlingCount:
            tx_hash = self.greenElephantContract.functions.getBuilding(i).transact()
            receipt = self.w3.eth.waitForTransactionReceipt(tx_hash)
            output = self.greenElephantContract.events.gettedBuilding().processReceipt(receipt)[0]['args']
            # tempstr = '{' + '"bId":' + str(output['bId']) + ',' + '"title":' +'"'+ output['title']+'"'+ ','+ '"square":' + str(output['square']) + ','+ '"ownerLogin":' +'"'+output['ownerLogin']+'"'+ ','+ '"currentOwnerLogin":' +'"'+output['currentOwnerLogin']+'"'+ ','+ '"bStatus":' +'"'+ self.enumBuildingStatusConvertorOut(output['bStatus']) +'"'+ ','+ '"bType":' +'"'+ self.enumBuildingTypeConvertorOut(output['bType']) +'"'+ ','+ '"timeInUse":' + str(output['timeInUse']) + ','+ '"price":' + str(int(output['price'])) + ','+ '"timeToAction":' + str(output['timeToAction']) + ','+ '"timeToRentalExpired":' + str(output['timeToRentalExpired']) 
            # if (buidlingCount == i):
            #     tempstr = tempstr + '}'
            # else:
            #     tempstr = tempstr + '},'
            # result = result + tempstr
            temp = temp +","+ str(output) 

            i += 1

        self.w3.personal.lockAccount(addr)
        self.setDefaultAccount()
        return {
                "success" : True,
                "buildings" : temp
            }

    def sendBuildingToSell(self, login, password, id, price, timeToSell):
        try:
            addr = self.getAddrByLogin(login)
            print(1)
            if (addr == False):
                return {
                    "success" : False
                }
            print(2)
            if (addr == False):
                    self.setDefaultAccount()
                    return{
                        "success" : False
                    }
            print(3)
            if (self.w3.personal.unlockAccount(addr, password) == False):
                    self.setDefaultAccount()
                    return{
                        "success" : False
                    }
            print(3)
            self.w3.eth.defaultAccount = addr
            print(4)
            tx_hash = self.greenElephantContract.functions.sendBuildingToSell(id, price, timeToSell).transact()
            receipt = self.w3.eth.waitForTransactionReceipt(tx_hash)
            print(4)
            self.w3.personal.lockAccount(addr)
            self.setDefaultAccount()   
            output = self.greenElephantContract.events.sendedBuildingToSell().processReceipt(receipt)[0]['args']
            return {
                    "success" : output['success'],
                    "id" : output['id'],
                    "price" : output['price'],
                    "timeToSell" : output['timeToSell'],
                    "reload" : True
                    }               
        except:
            self.setDefaultAccount()
            return{
                "success" : False
            }
            



    def cancelBuildingSell(self, login, password, id):
        try:
            addr = self.getAddrByLogin(login)
    
            if (addr == False):
                return {
                    "success" : False
                }
                
            if (addr == False):
                return {
                        "success" : False
                    }

            if (self.w3.personal.unlockAccount(addr, password) == False):
                return {
                        "success" : False
                    }
            self.w3.eth.defaultAccount = addr

            tx_hash = self.greenElephantContract.functions.cancelBuildingSell(id).transact()
            receipt = self.w3.eth.waitForTransactionReceipt(tx_hash)

            self.w3.personal.lockAccount(addr)
            self.setDefaultAccount()
            output = self.greenElephantContract.events.cancelledBuildingToSell().processReceipt(receipt)[0]['args']
            return  {
                    "success" : output['success'],
                    "id" : output['id'],
                    "reload" : True
                } 
        except:
            self.setDefaultAccount()
            return{
                "success" : False
            }

    def sendedBuildingToPresent(self, login, password, id, loginForPresent):
        addr = self.getAddrByLogin(login)
        
        if (addr == False):
            return {
                        "success" : False
                    }

        if (self.w3.personal.unlockAccount(addr, password) == False):
            return {
                        "success" : False
                    }

        self.w3.eth.defaultAccount = addr

        tx_hash = self.greenElephantContract.functions.sendBuildingToPresent(id, loginForPresent).transact()
        receipt = self.w3.eth.waitForTransactionReceipt(tx_hash)

        self.w3.personal.lockAccount(addr)
        self.setDefaultAccount()  
        output = self.greenElephantContract.events.sendedBuildingToPresent().processReceipt(receipt)[0]['args']
        return{
            "success" : output['success'],
            "id" : output['id'],
            "login" : output['login'], 
            "reload" : True
        }
        
    def buyBuilding(self, login, password, id, price):
        # try:
        addr = self.getAddrByLogin(login)
        print(1)
        if (addr == False):
            self.setDefaultAccount()
            return {
                        "success" : False
                    }
        print(2)
        if (self.w3.personal.unlockAccount(addr, password) == False):
            self.setDefaultAccount()
            return {
                        "success" : False
                    }
        print(3)
        self.w3.eth.defaultAccount = addr
        print(4)
        tx_hash = self.greenElephantContract.functions.buyBuilding(id).transact({'from': addr, 'value': self.w3.toWei(price, 'ether')})
        receipt = self.w3.eth.waitForTransactionReceipt(tx_hash)
        print(5)
        self.w3.personal.lockAccount(addr)
        self.setDefaultAccount()
        output = self.greenElephantContract.events.buyedBuilding().processReceipt(receipt)[0]['args']
        print("Output: " + str(output))
        return{
            "success" : output['success']
            }   
        # except:
        #     self.setDefaultAccount()
        #     return{
        #         "success" : False
        #     }
    
    def getBuildingsRequests(self, login, password, id):
        addr = self.getAddrByLogin(login)
        
        if (addr == False):
            return False

        if (self.w3.personal.unlockAccount(addr, password) == False):
            return False

        self.w3.eth.defaultAccount = addr

        requestsCount = self.greenElephantContract.functions.getBuildingRequestCount(id).call()

        if (requestsCount == 0):
            self.setDefaultAccount()
            return{
                "success" : False
            }
        result = '['
        i = 1
        while i <= requestsCount:
            login = self.greenElephantContract.functions.getBuildingRequestLogin(id, i).call()
            tempstr = '{' + '"buildingId":' + str(login[0]) + ',' + '"user":' +'"'+ login[1]+'"'+ '}'
            result = result + tempstr
            if (requestsCount == i):
                tempstr = tempstr + '}'
            else:
                tempstr = tempstr + '},'
            i += 1
        result = result + ']'

        self.w3.personal.lockAccount(addr)
        self.setDefaultAccount()
        return {
                "success" : True,
                "buildingsRequests" : result
            }

    def acceptBuyBuilding(self, login, password, buildingId, requestId):
        addr = self.getAddrByLogin(login)
        
        if (addr == False):
            self.setDefaultAccount()
            return{
                "success" : False
            }

        if (self.w3.personal.unlockAccount(addr, password) == False):
            self.setDefaultAccount()
            return{
                "success" : False
            }

        self.w3.eth.defaultAccount = addr

        tx_hash = self.greenElephantContract.functions.acceptBuyBuilding(buildingId, requestId).transact()
        receipt = self.w3.eth.waitForTransactionReceipt(tx_hash)

        self.w3.personal.lockAccount(addr)
        self.setDefaultAccount()
        output = self.greenElephantContract.events.acceptedBuilding().processReceipt(receipt)[0]['args']
        return{
            "success" : output['success']
        }

    def sendBuildingToRent(self, login, password, buildingId, price, rentTime, rentToTime):
        addr = self.getAddrByLogin(login)
        
        if (addr == False):
            return {
                "success" : False
            }

        if (self.w3.personal.unlockAccount(addr, password) == False):
            return {
                "success" : False
            }

        self.w3.eth.defaultAccount = addr

        tx_hash = self.greenElephantContract.functions.sendBuildingToRent(buildingId, self.w3.toWei(price, 'ether'), rentTime, rentToTime).transact()
        receipt = self.w3.eth.waitForTransactionReceipt(tx_hash)

        self.w3.personal.lockAccount(addr)
        self.setDefaultAccount()
        print("Send Building Recipt: "+str(self.greenElephantContract.events.sendedBuildingToRent().processReceipt(receipt)))
        output = self.greenElephantContract.events.sendedBuildingToRent().processReceipt(receipt)[0]['args']
        return{
            "success" : output['success'],
            "id" : output['id'],
            "price" : int(self.w3.fromWei(int(output['price']), 'ether')), 
            "rentTime" : output['rentTime']
        }

    def rentBuilding(self, login, password, buildingId, price):
        addr = self.getAddrByLogin(login)
        
        if (addr == False):
            return False

        if (self.w3.personal.unlockAccount(addr, password) == False):
            return False

        self.w3.eth.defaultAccount = addr

        tx_hash = self.greenElephantContract.functions.rentBuilding(buildingId).transact({'from': addr, 'value': self.w3.toWei(price, 'ether')})
        receipt = self.w3.eth.waitForTransactionReceipt(tx_hash)

        self.w3.personal.lockAccount(addr)
        self.setDefaultAccount()
        output = self.greenElephantContract.events.rentedBuilding().processReceipt(receipt)[0]['args']
        return{
            "success" : output['success']
            }

    def backRentBuilding(self, login, password, buildingId, requestId):
        addr = self.getAddrByLogin(login)
        
        if (addr == False):
            return False

        if (self.w3.personal.unlockAccount(addr, password) == False):
            return False

        self.w3.eth.defaultAccount = addr

        tx_hash = self.greenElephantContract.functions.backRentBuilding(buildingId, requestId).transact()
        receipt = self.w3.eth.waitForTransactionReceipt(tx_hash)

        self.w3.personal.lockAccount(addr)
        self.setDefaultAccount()
        output = greenElephantContract.events.rentBuildingBack().processReceipt(receipt)[0]['args']
        return{
            "success" : output['success']
            }
    
    def declineRentBuilding(self, login, password, buildingId, requestId):
        addr = self.getAddrByLogin(login)
        
        if (addr == False):
            return False

        if (self.w3.personal.unlockAccount(addr, password) == False):
            return False

        self.w3.eth.defaultAccount = addr

        tx_hash = self.greenElephantContract.functions.declineRentBuilding(buildingId, requestId).transact()
        receipt = self.w3.eth.waitForTransactionReceipt(tx_hash)

        self.w3.personal.lockAccount(addr)
        self.setDefaultAccount()
        output = self.greenElephantContract.events.declinedRentBuilding().processReceipt(receipt)[0]['args']
        return{
            "success" : output['success']
            }
    def acceptRentBuilding(self, login, password, buildingId, requestId):
        addr = self.getAddrByLogin(login)
        
        if (addr == False):
            return False

        if (self.w3.personal.unlockAccount(addr, password) == False):
            return False

        self.w3.eth.defaultAccount = addr

        tx_hash = self.greenElephantContract.functions.acceptRentBuilding(buildingId, requestId).transact()
        receipt = self.w3.eth.waitForTransactionReceipt(tx_hash)

        self.w3.personal.lockAccount(addr)
        self.setDefaultAccount()
        output = self.greenElephantContract.events.acceptedRentBuilding().processReceipt(receipt)[0]['args']
        return{
            "success" : output['success']
            }
    
    def sendBuildingToPresent(self, login, password, id, loginForPresent):
        addr = self.getAddrByLogin(login)
        
        if (addr == False):
            return False

        if (self.w3.personal.unlockAccount(addr, password) == False):
            return False

        self.w3.eth.defaultAccount = addr

        tx_hash = self.greenElephantContract.functions.sendBuildingToPresent(id, loginForPresent).transact()
        receipt = self.w3.eth.waitForTransactionReceipt(tx_hash)

        self.w3.personal.lockAccount(addr)
        self.setDefaultAccount()
        output = self.greenElephantContract.events.sendedBuildingToPresent().processReceipt(receipt)[0]['args']
        return {
            "success" : output['success'],
            "id" : output['id'],
            "login" : output['login']
        }

    def getPresentByMe(self, login, password):
        addr = self.getAddrByLogin(login)
        
        if (addr == False):
            return False

        if (self.w3.personal.unlockAccount(addr, password) == False):
            return False

        self.w3.eth.defaultAccount = addr

        buidlingCount = self.greenElephantContract.functions.getMyPresentCount().call()

        if (buidlingCount == 0):
            self.setDefaultAccount()
            return{
                "success" : False
            }
        print(6)
        result = '['
        i = 1
        while i <= buidlingCount:
            tx_hash = self.greenElephantContract.functions.getBuilding(i).transact()
            receipt = self.w3.eth.waitForTransactionReceipt(tx_hash)
            output = self.greenElephantContract.events.gettedBuilding().processReceipt(receipt)[0]['args']
            tempstr = '{' + '"bId":' + str(output['bId']) + ',' + '"title":' +'"'+ output['title']+'"'+ ','+ '"square":' + str(output['square']) + ','+ '"ownerLogin":' +'"'+output['ownerLogin']+'"'+ ','+ '"currentOwnerLogin":' +'"'+output['currentOwnerLogin']+'"'+ ','+ '"bStatus":' +'"'+ self.enumBuildingStatusConvertorOut(output['bStatus']) +'"'+ ','+ '"bType":' +'"'+ self.enumBuildingTypeConvertorOut(output['bType']) +'"'+ ','+ '"timeInUse":' + str(output['timeInUse']) + ','+ '"price":' + str(output['price']) + ','+ '"timeToAction":' + str(output['timeToAction']) + ','+ '"timeToRentalExpired":' + str(output['timeToRentalExpired']) 
            if (buidlingCount == i):
                tempstr = tempstr + '}'
            else:
                tempstr = tempstr + '},'
            result = result + tempstr
            i += 1
        result = result + ']'
        self.w3.personal.lockAccount(addr)
        self.setDefaultAccount()
        return {
                "success" : True,
                "presents" : result
            }
    
    def getPresents(self, login, password):
        addr = self.getAddrByLogin(login)
        
        if (addr == False):
            return {
                        "success" : False
                    }

        if (w3.personal.unlockAccount(addr, password) == False):
            return {
                        "success" : False
                    }

        w3.eth.defaultAccount = addr

        buidlingCount = self.greenElephantContract.functions.getPresentCount().call()

        if (buidlingCount == 0):
            self.setDefaultAccount()
            return{
                "success" : False
            }
        print(6)
        result = '['
        i = 1
        while i <= buidlingCount:
            tx_hash = self.greenElephantContract.functions.getBuilding(i).transact()
            receipt = self.w3.eth.waitForTransactionReceipt(tx_hash)
            output = self.greenElephantContract.events.gettedBuilding().processReceipt(receipt)[0]['args']
            tempstr = '{' + '"bId":' + str(output['bId']) + ',' + '"title":' +'"'+ output['title']+'"'+ ','+ '"square":' + str(output['square']) + ','+ '"ownerLogin":' +'"'+output['ownerLogin']+'"'+ ','+ '"currentOwnerLogin":' +'"'+output['currentOwnerLogin']+'"'+ ','+ '"bStatus":' +'"'+ self.enumBuildingStatusConvertorOut(output['bStatus']) +'"'+ ','+ '"bType":' +'"'+ self.enumBuildingTypeConvertorOut(output['bType']) +'"'+ ','+ '"timeInUse":' + str(output['timeInUse']) + ','+ '"price":' + str(output['price']) + ','+ '"timeToAction":' + str(output['timeToAction']) + ','+ '"timeToRentalExpired":' + str(output['timeToRentalExpired']) 
            if (buidlingCount == i):
                tempstr = tempstr + '}'
            else:
                tempstr = tempstr + '},'
            result = result + tempstr
            i += 1
        result = result + ']'
        self.w3.personal.lockAccount(addr)
        self.setDefaultAccount()
        return {
                "success" : True,
                "buildings" : result
            }
    
    def cancelBuildingPresent(self, login, password, buildingId, requestId):
        addr = self.getAddrByLogin(login)
        
        if (addr == False):
            return False

        if (self.w3.personal.unlockAccount(addr, password) == False):
            return False

        self.w3.eth.defaultAccount = addr

        tx_hash = self.greenElephantContract.functions.cancelBuildingPresent(buildingId, requestId).transact()
        receipt = self.w3.eth.waitForTransactionReceipt(tx_hash)

        self.w3.personal.lockAccount(addr)
        self.setDefaultAccount()
        output = greenElephantContract.events.cancelledPresentBuilding().processReceipt(receipt)[0]['args']
        return {
            "success" : output['success'],
            "login" : output['login']
        }
    
    def declineBuildingPresent(self, login, password, requestId):
        addr = self.getAddrByLogin(login)
        
        if (addr == False):
            return False

        if (self.w3.personal.unlockAccount(addr, password) == False):
            return False

        self.w3.eth.defaultAccount = addr

        tx_hash = self.greenElephantContract.functions.declineBuildingPresent(requestId).transact()
        receipt = self.w3.eth.waitForTransactionReceipt(tx_hash)

        self.w3.personal.lockAccount(addr)
        self.setDefaultAccount()
        output = self.greenElephantContract.events.declinedPresentBuilding().processReceipt(receipt)[0]['args']
        return {
            "success" : output['success']
            }

    def acceptBuildingPresent(self, login, password, buildingId, requestId):
        addr = self.getAddrByLogin(login)
        
        if (addr == False):
            return False

        if (self.w3.personal.unlockAccount(addr, password) == False):
            return False

        self.w3.eth.defaultAccount = addr

        tx_hash = self.greenElephantContract.functions.acceptBuildingPresent(buildingId, requestId).transact()
        receipt = self.w3.eth.waitForTransactionReceipt(tx_hash)

        self.w3.personal.lockAccount(addr)
        self.setDefaultAccount()
        output =  self.greenElephantContract.events.acceptedBuildingPresent().processReceipt(receipt)[0]['args']
        return {
            "success" : output['success']
            }
    def presentBuildingBack(self,login, password, buildingId, loginToReturn):
        addr = self.getAddrByLogin(login)
        
        if (addr == False):
            return False

        if (self.w3.personal.unlockAccount(addr, password) == False):
            return False

        self.w3.eth.defaultAccount = addr

        tx_hash = self.greenElephantContract.functions.presentBuildingBack(buildingId, loginToReturn).transact()
        receipt = self.w3.eth.waitForTransactionReceipt(tx_hash)

        self.w3.personal.lockAccount(addr)
        self.setDefaultAccount()
        output =  greenElephantContract.events.presentedBuildingBack().processReceipt(receipt)[0]['args']
        return {
            "success" : output['success'],
            "creationTime" : output['creationTime'],
            "old" : output['old']
            }
    
    def getMyRequests(self, login, password):
        addr = self.getAddrByLogin(login)
        
        if (addr == False):
            return False

        if (self.w3.personal.unlockAccount(addr, password) == False):
            return False

        self.w3.eth.defaultAccount = addr

        buidlingCount = self.greenElephantContract.functions.getMyRequestsCount().call()

        result = '['
        i = 1
        while i <= buidlingCount:
            tx_hash = self.greenElephantContract.functions.getMyRequests(i).transact()
            receipt = self.w3.eth.waitForTransactionReceipt(tx_hash)

            output = self.greenElephantContract.events.gettedRequests().processReceipt(receipt)[0]['args']

            tempstr = '{' + '"success":' + str(output['success']) + ',' + '"buildingId":' + str(output['buildingId'])+ ','+ '"title":' +'"'+ output['title'] 
            if (buidlingCount == i):
                tempstr = tempstr + '}'
            else:
                tempstr = tempstr + '},'
            result = result + tempstr
            i += 1
            result = result + ']'
            self.w3.personal.lockAccount(addr)
            self.setDefaultAccount()
            return {
                    "success" : True,
                    "presents" : result
                }

        self.w3.personal.lockAccount(addr)
        self.setDefaultAccount()
        return result

class MyHandler(BaseHTTPRequestHandler):
    api = apiHandler()
    api.initHandler()
    def do_GET(self):
        try:
            if self.path.endswith(".html"):
                #self.path has /index.htm
                f = open(curdir + sep + self.path)
                self.send_response(200)
                self.send_header('Content-type','text/html')
                self.end_headers()
                self.wfile.write("<h1>Device Static Content</h1>")
                self.wfile.write(f.read())
                f.close()
                return
            if self.path.endswith(".esp"):   #our dynamic content
                self.send_response(200)
                self.send_header('Content-type','text/html')
                self.end_headers()
                self.wfile.write("<h1>Dynamic Dynamic Content</h1>")
                self.wfile.write("Today is the " + str(time.localtime()[7]))
                self.wfile.write(" day in the year " + str(time.localtime()[0]))
                return

            query = urlparse(self.path).query
            query_components = dict(qc.split("=") for qc in query.split("&"))
            result = self.api.main(query_components)
            app_json = json.dumps(result, sort_keys=True)
            print(str(app_json))
            self.send_response(200)
            self.send_header('Content-type','application/json')
            self.send_header('Access-Control-Allow-Origin','*')
            self.end_headers()
            self.wfile.write(app_json.encode('utf-8'))
            return

            

        except IOError:
            self.send_error(404,'Some Error on server: %s' % self.path)

if __name__ == '__main__':
        server_class = HTTPServer
        httpd = server_class((HOST_NAME, PORT_NUMBER), MyHandler)
        print(time.asctime(), 'Server Starts - %s:%s' % (HOST_NAME, PORT_NUMBER))
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            pass
        httpd.server_close()
        print(time.asctime(), 'Server Stops - %s:%s' % (HOST_NAME, PORT_NUMBER))
