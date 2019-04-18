/*
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';

module.exports = app => {
  app.router.get('/api/currentUser', app.controller.user.currentUser);
  app.router.get('/api/chain', app.controller.chain.list);
  app.router.post('/api/chain', app.controller.chain.apply);
  app.router.get('/api/chain/:id', app.controller.chain.query);
  app.router.get('/api/chain/network-config/:id', app.controller.chain.downloadNetworkConfig);
  app.router.delete('/api/chain/:id', app.controller.chain.release);
  app.router.get('/api/smart-contract', app.controller.smartContract.list);
  app.router.delete('/api/smart-contract/code/:id', app.controller.smartContract.removeSmartContractCode);
  app.router.put('/api/smart-contract/code/:id', app.controller.smartContract.updateSmartContractCode);
  app.router.delete('/api/smart-contract/:id', app.controller.smartContract.deleteSmartContract);
  app.router.get('/api/smart-contract/:id', app.controller.smartContract.querySmartContract);
  app.router.post('/api/smart-contract/deploy-code/:id', app.controller.smartContract.deploySmartContractCode);
  app.router.get('/api/deploy', app.controller.deploy.list);
  app.router.get('/api/deploy/:id', app.controller.deploy.query);
  app.router.post('/api/deploy/operate/:id', app.controller.deploy.operate);
  app.router.get('/v2/channels', app.controller.channel.getChannels);
  app.router.get('/v2/channels/:channel_id', app.controller.channel.getChannel);
  app.router.post('/v2/channels',app.controller.channel.create);
  app.router.get('/v2/peers',app.controller.channel.getPeers);
  app.router.post('/v2/channels/:channel_id/peerJoin',app.controller.channel.join);
  app.router.post('/v2/channels/:channel_id/inviteOrg',app.controller.channel.inviteOrg);
  app.router.post('/v2/channels/:channel_id/signOrg',app.controller.channel.signOrg);
  app.router.get('/v2/channels/:channel_id/getsignifo',app.controller.channel.getsignifo);
  app.router.post('/v2/channels/:channel_id/chaincodeOperation', app.controller.channel.chainCodeOperation);
  app.router.post('/v2/chaincodes', app.controller.chainCode.upload);
  app.router.get('/v2/chaincodes', app.controller.chainCode.getChainCodes);
  app.router.get('/v2/chaincodes/:chaincode_id', app.controller.chainCode.getChainCodeById);
  app.router.post('/v2/chaincodes/:chaincode_id/install', app.controller.chainCode.installChainCode);
  app.router.post('/v2/chaincodes/:chaincode_id/instantiate', app.controller.chainCode.instantiateChainCode);
  app.router.delete('/v2/chaincodes/:chaincode_id', app.controller.chainCode.deleteChainCodeById);
  app.router.post('/v2/orgusers', app.controller.user.createOrgUser);
  app.router.get('/v2/orgusers', app.controller.user.getOrgUserList);
  app.router.get('/v2/orgusers/:name', app.controller.user.getOrgUser);
  app.router.delete('/v2/orgusers', app.controller.user.deleteOrgUser);
  app.router.put('/v2/orgusers/:name', app.controller.user.updateOrguserState);
  app.router.put('/v2/orgusers', app.controller.user.updateOrguserPassword);
  app.router.post('/v2/orgusers/:name', app.controller.user.reenrollOrgUser);
  app.router.post('/v2/affiliation', app.controller.user.createAffiliation);
  app.router.get('/v2/affiliation', app.controller.user.getAffiliations);
  app.router.delete('/v2/affiliation/:affiliation', app.controller.user.delAffiliation);
  app.router.put('/v2/affiliation', app.controller.user.updateAffiliation);
  app.router.get('/v2/blocks/:channel_id/', app.controller.explorer.getBlock);
  app.router.get('/v2/txrealtime/:channel_id/:minutes', app.controller.explorer.getTransactionForRealtime);
  // app.router.get('/v2/blocks/:channel_id/:times_begin/:times_end', app.controller.explorer.getTransactionsByTime);
  app.router.post('/v2/operator_logs', app.controller.log.deposit);
  app.router.get('/v2/operator_logs', app.controller.log.fetch);
};
