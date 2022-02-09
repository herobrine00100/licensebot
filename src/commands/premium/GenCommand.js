const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const voucher_codes = require('voucher-code-generator');
const ownerid = ['910523421652303963'];
const keys = require('../../../schemas/keys');

module.exports = class TestCommand extends BaseCommand {
    constructor() {
        super('gen', 'premium', []);
    }

    async run(client, message, args) {
        if (ownerid.includes(message.author.id)) {
            if (args[0] == 'lifetime') {
                const vouch = voucher_codes.generate({
                    pattern: '####-####-####',
                    prefix: 'LIFETIME-',
                    charset: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
                });

                const embed = new MessageEmbed()
                .setTitle(`Lifetime License`)
                .addField(`License:`, ` \`\`${vouch}\`\` `)
                .addField(`Expires In:`, `\`\`99999 Days\`\``)
                .setColor('#31ff51')
                     
                message.channel.send(embed);
                await keys.create({ key: `${vouch}` });
            } else if (args[0] == 'month') {
                const vouch = voucher_codes.generate({
                    pattern: '####-####-####',
                    prefix: 'MONTH-',
                    charset: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
                });

                const embed = new MessageEmbed()
                .setTitle(`Monthly License`)
                .addField(`License:`, ` \`\`${vouch}\`\` `)
                .addField(`Expires In:`, `\`\`30 Days\`\``)
                .setColor('#31ff51')
                     
                message.channel.send(embed);
                await keys.create({ key: `${vouch}` });
            } else if (args[0] == 'week') {
                const vouch = voucher_codes.generate({
                    pattern: '####-####-####',
                    prefix: 'WEEK-',
                    charset: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
                });

                const embed = new MessageEmbed()
                .setTitle(`Weekly License`)
                .addField(`License:`, ` \`\`${vouch}\`\` `)
                .addField(`Expires In:`, `\`\`7 Days\`\``)
                .setColor('#31ff51')
                     
                message.channel.send(embed);
                await keys.create({ key: `${vouch}` });
            } else if (args[0] == 'day') {
                const vouch = voucher_codes.generate({
                    pattern: '####-####-####',
                    prefix: 'DAY-',
                    charset: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
                });

                const embed = new MessageEmbed()
                .setTitle(`Daily License`)
                .addField(`License:`, ` \`\`${vouch}\`\` `)
                .addField(`Expires In:`, `\`\`1 Day\`\``)
                .setColor('#31ff51')
                     
     
                message.channel.send(embed);
                await keys.create({ key: `${vouch}` });
            }
        } else {
            const embed = new MessageEmbed()
                .setTitle(`❌  Insufficient Permission`)
                .setDescription(
                    `**You do not have permission to use this command.`
                )
                .setColor('RED')
 
                .setFooter(`${message.author.tag} if you think this is a error please create a ticket.`, message.author.displayAvatarURL())
            return message.channel.send(embed);
        }
    }
};
