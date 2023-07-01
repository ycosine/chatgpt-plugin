import { AbstractTool } from './AbstractTool.js'

export class EditCardTool extends AbstractTool {
  name = 'editCard'

  parameters = {
    properties: {
      qq: {
        type: 'string',
        description: '你想改名片的那个人的qq号，默认为聊天对象'
      },
      card: {
        type: 'string',
        description: 'the new card'
      },
      groupId: {
        type: 'string',
        description: 'group number'
      }
    },
    required: ['card', 'groupId']
  }

  description = 'Useful when you want to edit someone\'s card in the group(群名片)'

  func = async function (opts) {
    let { qq, card, groupId } = opts
    groupId = parseInt(groupId.trim())
    qq = parseInt(qq.trim())
    logger.info('edit card: ', groupId, qq)
    let group = await Bot.pickGroup(groupId)
    await group.setCard(qq, card)
    return `the user ${qq}'s card has been changed into ${card}`
  }
}
