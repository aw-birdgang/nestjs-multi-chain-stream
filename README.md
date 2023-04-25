## add stream response
````bash
{
"id": "b4066622-b58b-4780-b616-e1a678d6972d",
"amountOfAddresses": 0,
"webhookUrl": "http://3.36.90.220:3000/v1/stream/hook",
"description": "webhook",
"tag": "webhook",
"includeNativeTxs": true,
"includeContractLogs": true,
"includeInternalTxs": true,
"includeAllTxLogs": true,
"chainIds": [
"0x1",
"0x89",
"0xaa36a7"
],
"demo": false,
"topic0": null,
"advancedOptions": null,
"abi": null,
"allAddresses": false,
"triggers": [],
"getNativeBalances": [],
"projectId": "0x07daad37df21a552e9b0e5b760993ce77660ced19eea7b2492100fde32491ce3",
"orgId": "240686",
"status": "active",
"statusMessage": "Stream is active",
"updatedAt": "2023-04-25T04:37:17.065Z",
"createdAt": "2023-04-25T04:37:17.065Z",
"isErrorSince": null
}

````


## add address in stream
````bash

{
  "jsonResponse": {
    "streamId": "b4066622-b58b-4780-b616-e1a678d6972d",
    "address": "0x6A1375E47E402cd71EB5C7Db807c152886fe9045"
  },
  "getResponse": {
    "streamId": "b4066622-b58b-4780-b616-e1a678d6972d",
    "address": {
      "config": {
        "items": {
          "logLevel": {
            "key": {
              "name": "logLevel",
              "defaultValue": "info"
            },
            "value": "info"
          },
          "buidEnvironment": {
            "key": {
              "name": "buidEnvironment",
              "defaultValue": "browser"
            },
            "value": "browser"
          },
          "defaultNetwork": {
            "key": {
              "name": "defaultNetwork",
              "defaultValue": "Evm"
            },
            "value": "Evm"
          },
          "product": {
            "key": {
              "name": "product"
            }
          },
          "maxRetries": {
            "key": {
              "name": "maxRetries",
              "defaultValue": 2
            },
            "value": 2
          },
          "formatEvmAddress": {
            "key": {
              "name": "formatEvmAddress",
              "defaultValue": "lowercase"
            },
            "value": "lowercase"
          },
          "formatEvmChainId": {
            "key": {
              "name": "formatEvmChainId",
              "defaultValue": "hex"
            },
            "value": "hex"
          },
          "defaultSolNetwork": {
            "key": {
              "name": "defaultSolNetwork",
              "defaultValue": "mainnet"
            },
            "value": "mainnet"
          },
          "apiKey": {
            "key": {
              "name": "apiKey",
              "defaultValue": null
            },
            "value": "H64TtHG94CZt3IkJTqYA80x41jExCgRoSqGkdNDWhollJXJK96uWkmunJnDSdmJ4"
          },
          "defaultEvmApiChain": {
            "key": {
              "name": "defaultEvmApiChain",
              "defaultValue": "0x1"
            },
            "value": "0x1"
          }
        }
      },
      "_value": "0x6A1375E47E402cd71EB5C7Db807c152886fe9045"
    }
  }
}
````





## token transation response
````bash

{
"confirmed": false,
"chainId": "0xaa36a7",
"abi": [],
"streamId": "b4066622-b58b-4780-b616-e1a678d6972d",
"tag": "webhook",
"retries": 0,
"block": {
"number": "3356084",
"hash": "0x9d5f9aa58a13d9dacb0dbdf8ad7bfb64176b556dcad9b876ee8c041b6b4cb736",
"timestamp": "1682399988"
},
"logs": [
{
"logIndex": "6",
"transactionHash": "0x8d9e711aa90a48adc437b295b065054b6b477c7f91412415d33a509f40715b8a",
"address": "0x87c6775b40a4a6f10aebbaf3adea443de091b361",
"data": "0x00000000000000000000000000000000000000000000021e19e0c9bab2400000",
"topic0": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
"topic1": "0x0000000000000000000000006a1375e47e402cd71eb5c7db807c152886fe9045",
"topic2": "0x0000000000000000000000002b4e2a3d3b20eff91a40c1759fa50a0e2250314f",
"topic3": null
}
],
"txs": [
{
"hash": "0x8d9e711aa90a48adc437b295b065054b6b477c7f91412415d33a509f40715b8a",
"gas": "74842",
"gasPrice": "1500000007",
"nonce": "27",
"input": "0xa9059cbb0000000000000000000000002b4e2a3d3b20eff91a40c1759fa50a0e2250314f00000000000000000000000000000000000000000000021e19e0c9bab2400000",
"transactionIndex": "8",
"fromAddress": "0x6a1375e47e402cd71eb5c7db807c152886fe9045",
"toAddress": "0x87c6775b40a4a6f10aebbaf3adea443de091b361",
"value": "0",
"type": "2",
"v": "1",
"r": "19062603097674669541651491048432822295931519276316361322167032198987158592291",
"s": "41858527879658897627443946254634905618355678143320873459948084792396977466566",
"receiptCumulativeGasUsed": "401833",
"receiptGasUsed": "49895",
"receiptContractAddress": null,
"receiptRoot": null,
"receiptStatus": "1"
}
],
"txsInternal": [],
"erc20Transfers": [
{
"transactionHash": "0x8d9e711aa90a48adc437b295b065054b6b477c7f91412415d33a509f40715b8a",
"logIndex": "6",
"contract": "0x87c6775b40a4a6f10aebbaf3adea443de091b361",
"from": "0x6a1375e47e402cd71eb5c7db807c152886fe9045",
"to": "0x2b4e2a3d3b20eff91a40c1759fa50a0e2250314f",
"value": "10000000000000000000000",
"tokenName": "BirdgangToken",
"tokenSymbol": "BGT",
"tokenDecimals": "18",
"valueWithDecimals": "10000",
"possibleSpam": true
}
],
"erc20Approvals": [],
"nftTokenApprovals": [],
"nftApprovals": {
"ERC721": [],
"ERC1155": []
},
"nftTransfers": [],
"nativeBalances": []
}

````


## coin transation response
````bash
{
  "confirmed": false,
  "chainId": "0xaa36a7",
  "abi": [],
  "streamId": "b4066622-b58b-4780-b616-e1a678d6972d",
  "tag": "webhook",
  "retries": 0,
  "block": {
    "number": "3356090",
    "hash": "0x9a9c6aeb244eb50be3faa3929af08134be06f4a67dfad60e0b770db834e9e7a2",
    "timestamp": "1682400108"
  },
  "logs": [],
  "txs": [
    {
      "hash": "0x099a952ade0a08efc9f8d89563395c20abc9526c156f047725a55d64695d44d4",
      "gas": "21000",
      "gasPrice": "1500000007",
      "nonce": "28",
      "input": "0x",
      "transactionIndex": "15",
      "fromAddress": "0x6a1375e47e402cd71eb5c7db807c152886fe9045",
      "toAddress": "0x2b4e2a3d3b20eff91a40c1759fa50a0e2250314f",
      "value": "1000000000000000000",
      "type": "2",
      "v": "1",
      "r": "81344136504479526212811998368711960442296619769232304204741484055103019892912",
      "s": "35440007095660878331699751330256687888693860112685347954722005327359455228185",
      "receiptCumulativeGasUsed": "1939198",
      "receiptGasUsed": "21000",
      "receiptContractAddress": null,
      "receiptRoot": null,
      "receiptStatus": "1"
    }
  ],
  "txsInternal": [],
  "erc20Transfers": [],
  "erc20Approvals": [],
  "nftTokenApprovals": [],
  "nftApprovals": {
    "ERC721": [],
    "ERC1155": []
  },
  "nftTransfers": [],
  "nativeBalances": []
}


````
