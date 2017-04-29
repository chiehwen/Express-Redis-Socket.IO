# Express-Redis-Socket.IO
Build a chat application using Express, Redis and Socket.IO.

# Deploy App to Azure App Service
```bash
# Log in to Azure
$ az login

# Configure a Deployment User
$ az appservice web deployment user set --user-name chiehwenyang
Password:
Confirm Password:
{
  "id": null,
  "kind": null,
  "location": null,
  "name": "web",
  "publishingPassword": null,
  "publishingPasswordHash": null,
  "publishingPasswordHashSalt": null,
  "publishingUserName": "chiehwenyang",
  "tags": null,
  "type": "Microsoft.Web/publishingUsers/web",
  "userName": null
}

# Create a resource group
$ az group create --name TestResourceGroup --location EastAsia
{
  "id": "/subscriptions/32376087-83f9-4298-8ab7-427e1ca359a7/resourceGroups/TestResourceGroup",
  "location": "eastasia",
  "managedBy": null,
  "name": "TestResourceGroup",
  "properties": {
    "provisioningState": "Succeeded"
  },
  "tags": null
}

# Create an Azure App Service
$ az appservice plan create --name FreePlan --resource-group TestResourceGroup --sku FREE
{
  "adminSiteName": null,
  "appServicePlanName": "FreePlan",
  "geoRegion": "East Asia",
  "hostingEnvironmentProfile": null,
  "id": "/subscriptions/32376087-83f9-4298-8ab7-427e1ca359a7/resourceGroups/TestResourceGroup/providers/Microsoft.Web/serverfarms/FreePlan",
  "kind": "app",
  "location": "East Asia",
  "maximumNumberOfWorkers": 1,
  "name": "FreePlan",
  "numberOfSites": 0,
  "perSiteScaling": false,
  "provisioningState": "Succeeded",
  "reserved": false,
  "resourceGroup": "TestResourceGroup",
  "sku": {
    "capabilities": null,
    "capacity": 0,
    "family": "F",
    "locations": null,
    "name": "F1",
    "size": "F1",
    "skuCapacity": null,
    "tier": "Free"
  },
  "status": "Ready",
  "subscription": "32376087-83f9-4298-8ab7-427e1ca359a7",
  "tags": null,
  "targetWorkerCount": 0,
  "targetWorkerSizeId": 0,
  "type": "Microsoft.Web/serverfarms",
  "workerTierName": null
}

# Create a web app
$ az appservice web create --name socketIOApp --resource-group TestResourceGroup --plan FreePlan
{
  "availabilityState": "Normal",
  "clientAffinityEnabled": true,
  "clientCertEnabled": false,
  "cloningInfo": null,
  "containerSize": 0,
  "dailyMemoryTimeQuota": 0,
  "defaultHostName": "socketioapp.azurewebsites.net",
  "enabled": true,
  "enabledHostNames": [
    "socketioapp.azurewebsites.net",
    "socketioapp.scm.azurewebsites.net"
  ],
  "gatewaySiteName": null,
  "hostNameSslStates": [
    {
      "hostType": "Standard",
      "name": "socketioapp.azurewebsites.net",
      "sslState": "Disabled",
      "thumbprint": null,
      "toUpdate": null,
      "virtualIp": null
    },
    {
      "hostType": "Repository",
      "name": "socketioapp.scm.azurewebsites.net",
      "sslState": "Disabled",
      "thumbprint": null,
      "toUpdate": null,
      "virtualIp": null
    }
  ],
  "hostNames": [
    "socketioapp.azurewebsites.net"
  ],
  "hostNamesDisabled": false,
  "hostingEnvironmentProfile": null,
  "id": "/subscriptions/32376087-83f9-4298-8ab7-427e1ca359a7/resourceGroups/TestResourceGroup/providers/Microsoft.Web/sites/socketIOApp",
  "isDefaultContainer": null,
  "kind": "app",
  "lastModifiedTimeUtc": "2017-04-29T06:36:03.970000",
  "location": "East Asia",
  "maxNumberOfWorkers": null,
  "microService": "false",
  "name": "socketIOApp",
  "outboundIpAddresses": "13.75.93.29,13.75.88.213,13.75.93.153,13.75.89.24",
  "premiumAppDeployed": null,
  "repositorySiteName": "socketIOApp",
  "reserved": false,
  "resourceGroup": "TestResourceGroup",
  "scmSiteAlsoStopped": false,
  "serverFarmId": "/subscriptions/32376087-83f9-4298-8ab7-427e1ca359a7/resourceGroups/TestResourceGroup/providers/Microsoft.Web/serverfarms/FreePlan",
  "siteConfig": null,
  "slotSwapStatus": null,
  "state": "Running",
  "suspendedTill": null,
  "tags": null,
  "targetSwapSlot": null,
  "trafficManagerHostNames": null,
  "type": "Microsoft.Web/sites",
  "usageState": "Normal"
}

# Configure to use Node.js
$ az appservice web config update --linux-fx-version "NODE|7.9.0" --startup-file process.json --name socketIOApp --resource-group TestResourceGroup
    "triggers": null
  },
  "autoSwapSlotName": null,
  "connectionStrings": null,
  "cors": null,
  "defaultDocuments": [
    "Default.htm",
    "Default.html",
    "Default.asp",
    "index.htm",
    "index.html",
    "iisstart.htm",
    "default.aspx",
    "index.php",
    "hostingstart.html"
  ],
  "detailedErrorLoggingEnabled": false,
  "documentRoot": null,
  "experiments": {
    "rampUpRules": []
  },
  "handlerMappings": null,
  "httpLoggingEnabled": false,
  "id": "/subscriptions/32376087-83f9-4298-8ab7-427e1ca359a7/resourceGroups/TestResourceGroup/providers/Microsoft.Web/sites/socketIOApp",
  "ipSecurityRestrictions": null,
  "javaContainer": null,
  "javaContainerVersion": null,
  "javaVersion": null,
  "kind": null,
  "limits": null,
  "linuxFxVersion": "",
  "loadBalancing": "LeastRequests",
  "localMySqlEnabled": false,
  "location": "East Asia",
  "logsDirectorySizeLimit": 35,
  "machineKey": null,
  "managedPipelineMode": "Integrated",
  "name": "socketIOApp",
  "netFrameworkVersion": "v4.0",
  "nodeVersion": "",
  "numberOfWorkers": 1,
  "phpVersion": "5.6",
  "publishingUsername": "$socketIOApp",
  "push": null,
  "pythonVersion": "",
  "remoteDebuggingEnabled": false,
  "remoteDebuggingVersion": "VS2012",
  "requestTracingEnabled": false,
  "requestTracingExpirationTime": null,
  "resourceGroup": "TestResourceGroup",
  "scmType": "None",
  "tags": null,
  "tracingOptions": null,
  "type": "Microsoft.Web/sites",
  "use32BitWorkerProcess": true,
  "virtualApplications": [
    {
      "physicalPath": "site\\wwwroot",
      "preloadEnabled": false,
      "virtualDirectories": null,
      "virtualPath": "/"
    }
  ],
  "vnetName": "",
  "webSocketsEnabled": false
}

# Configure local git deployment
$ az appservice web source-control config-local-git --name socketIOApp --resource-group TestResourceGroup --query url --output tsv
https://chiehwenyang@socketioapp.scm.azurewebsites.net/socketIOApp.git

# Push to Azure from Git
$ git remote add azure https://chiehwenyang@socketioapp.scm.azurewebsites.net/socketIOApp.git
$ git push azure master
```

http://socketioapp.azurewebsites.net/