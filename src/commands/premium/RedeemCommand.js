const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const day = require('../../../schemas/day');
const keys = require('../../../schemas/keys');
const lifetime = require('../../../schemas/lifetime');
const month = require('../../../schemas/month');
const week = require('../../../schemas/week');

module.exports = class RedeemCommand extends BaseCommand {
    constructor() {
        super('redeem', 'premium', []);
    }

    async run(client, message, args) {
        const code = args[0];

        if (!code) {
            const embed = new Discord.MessageEmbed()
                .setTitle(`License Required`)
                .setDescription(
                    `You need to enter a license.`
                )
                .setColor('#31ff51')
            return message.channel.send(embed);
        }

        const keyfind = await keys.findOne({ key: `${code}` });
        if (keyfind) {
            if (code.includes('LIFETIME-')) {
                await lifetime
                    .create({ id: `${message.author.id}` })
                    .then(keyfind.delete());
                const category = client.channels.cache.get('889043614540378134');
                message.guild.channels.create(`${message.author.username}`, {
                    permissionOverwrites: [
                        {
                            id: message.author.id,
                            allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
                        },
                        {
                            id: message.guild.roles.everyone,
                            deny: ['VIEW_CHANNEL'],
                        },
                    ],
                    type: 'text',
                    parent: category,
                });
                const embed = new Discord.MessageEmbed()
                    .setTitle(`Redeemed License`)
                    .addField(`License`, ` \`\`${code}\`\` `)
                    .addField(`Expires In:`, `\`\`99999 Days\`\``)
                    .setColor('#31ff51')
                    .setThumbnail('https://cdn.discordapp.com/icons/908452477463064648/4534c03399549cf5c37c8f49c6b201f3.png')
 
                    .setFooter(`License redeemed by ${message.author.tag}`, message.author.displayAvatarURL())
                return message.channel.send(embed);
            } else if (code.includes('MONTH-')) {
                await month
                    .create({ id: `${message.author.id}` })
                    .then(keyfind.delete());
                const category = client.channels.cache.get('889043614540378134');
                message.guild.channels.create(`${message.author.username}`, {
                    permissionOverwrites: [
                        {
                            id: message.author.id,
                            allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
                        },
                        {
                            id: message.guild.roles.everyone,
                            deny: ['VIEW_CHANNEL'],
                        },
                    ],
                    type: 'text',
                    parent: category,
                });
                const embed = new Discord.MessageEmbed()
                .setTitle(`Redeemed License`)
                .addField(`License`, ` \`\`${code}\`\` `)
                .addField(`Expires In:`, `\`\`30 Days\`\``)
                    .setColor('#31ff51')
                    .setFooter(`License redeemed by ${message.author.tag}`, message.author.displayAvatarURL())
                return message.channel.send(embed);
            } else if (code.includes('WEEK-')) {
                await week
                    .create({ id: `${message.author.id}` })
                    .then(keyfind.delete());
                const category = client.channels.cache.get('889043614540378134');
                message.guild.channels.create(`${message.author.username}`, {
                    permissionOverwrites: [
                        {
                            id: message.author.id,
                            allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
                        },
                        {
                            id: message.guild.roles.everyone,
                            deny: ['VIEW_CHANNEL'],
                        },
                    ],
                    type: 'text',
                    parent: category,
                });
                const embed = new Discord.MessageEmbed()
                .setTitle(`Redeemed License`)
                .addField(`License`, ` \`\`${code}\`\` `)
                .addField(`Expires In:`, `\`\`7 Days\`\``)
                    .setColor('#31ff51')

 
                    .setFooter(`License redeemed by ${message.author.tag}`, message.author.displayAvatarURL())
                return message.channel.send(embed);
            } else if (code.includes('DAY-')) {
                await day
                    .create({ id: `${message.author.id}` })
                    .then(keyfind.delete());
                const category = client.channels.cache.get('889043614540378134');
                message.guild.channels.create(`${message.author.username}`, {
                    permissionOverwrites: [
                        {
                            id: message.author.id,
                            allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
                        },
                        {
                            id: message.guild.roles.everyone,
                            deny: ['VIEW_CHANNEL'],
                        },
                    ],
                    type: 'text',
                    parent: category,
                });
                const embed = new Discord.MessageEmbed()
                .setTitle(`Redeemed License`)
                .addField(`License`, ` \`\`${code}\`\` `)
                .addField(`Expires In:`, `\`\`1 Day\`\``)
                    .setColor('#31ff51')

 
                    .setFooter(`Redeemed by ${message.author.tag}`, message.author.displayAvatarURL())
                return message.channel.send(embed);
            }
        } else {
            const embed = new Discord.MessageEmbed()
                .setTitle(`Invalid License`)
                .setDescription(
                    `Please redeem a valid license.`
                )
                .setColor('#31ff51')
            return message.channel.send(embed);
        }
    }
};
