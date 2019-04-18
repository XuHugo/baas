/*
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';

const Controller = require('egg').Controller;

class ChannelController extends Controller {
  async getChannels() {
    const { ctx } = this;

    const result = await ctx.service.channel.getChannels();
    ctx.status = result.success ? 200 : 400;
    ctx.body = result;
  }

  async getChannel() {
    const { ctx } = this;

    const result = await ctx.service.channel.getChannel();
    ctx.status = result.success ? 200 : 400;
    ctx.body = result;
  }

  async getPeers() {
    const { ctx } = this;

    ctx.body = await ctx.service.channel.getPeers();
  }

  async create() {
    const { ctx } = this;

    if ((typeof (ctx.req.body.channel.name) !== 'string') || (typeof (ctx.req.body.channel.description) !== 'string') ||
        (typeof (ctx.req.body.channel.orderer_url) !== 'string') || ((Array.isArray(ctx.req.body.channel.peer_orgs)) === false)) {
      throw new Error("channel inputdates' type validate failed");
    }

    const channel = await ctx.service.channel.create();
    ctx.status = channel.success ? 200 : 400;
    ctx.body = {
      channel,
    };
  }

  async join() {
    const { ctx } = this;
    const joinPeers = await ctx.service.channel.join();

    ctx.status = joinPeers.success ? 200 : 400;
    ctx.body = {
      joinPeers,
    };
  }

  async inviteOrg() {
      const { ctx } = this;
      const inviteOrg = await ctx.service.channel.inviteOrg();


      ctx.status = inviteOrg.success ? 200 : 400;
      ctx.body = {
          inviteOrg,
      };
  }
  async signOrg() {
      const { ctx } = this;
      const signOrg = await ctx.service.channel.signOrg();

      ctx.status = signOrg.success ? 200 : 400;
      ctx.body = {
          signOrg,
      };
  }
  async getsignifo() {
      const { ctx } = this;

      ctx.body = await ctx.service.channel.getsigners();
  }
  async chainCodeOperation() {
    const { ctx } = this;
    // const operationResult = await ctx.service.channel.chainCodeOperation();

    const channelId = ctx.params.channel_id;
    const { operation, functionName, args, chaincodeId } = ctx.request.body.chaincode_operation;
    const argsArr = args.split(',');
    switch (operation) {
      case 'invoke':
        ctx.body = await ctx.service.channel.invoke(functionName, argsArr, channelId, chaincodeId);
        break;
      case 'query':
        ctx.body = await ctx.service.channel.queryChainCode(functionName, argsArr, channelId, chaincodeId);
        break;
      default:
        ctx.body = {
          success: false,
          message: 'Must input valid operation',
        };
        break;
    }

  }

}

module.exports = ChannelController;
