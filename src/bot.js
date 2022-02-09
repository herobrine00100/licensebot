 ///////////////////////////////////////////////////////////////////////////////
 //          _____         _                                                 //                     
 //         |  ___|       | |                                               //                            
 //         | |__  ___ ___| |_ __ _ ___ _   _                              //                            
 //         |  __|/ __/ __| __/ _` / __| | | |                            //                              
 //         | |__| (__\__ \ || (_| \__ \ |_| |                           //                               
 //         \____/\___|___/\__\__,_|___/\__, |                          //                                
 //                                     __/ |                          //                                 
 //                                    |___/                          //                                  
 //                                                                  //                                   
 //      Discord: Ecstasy#8758                                      //                                   
 //      Delete credits = ur trash skidder go cry                  //                                     
 ///////////////////////////////////////////////////////////////////
const { Client } = require('discord.js');
const { registerCommands, registerEvents } = require('./utils/registry');
const config = require('../slappey.json');
const client = new Client();

const chalk = require('chalk');
const color = '#31ff51';
const { MessageEmbed } = require('discord.js');
let ticketeasy = require('ticket.easy');
const ticket = new ticketeasy();


(async () => {
    client.commands = new Map();
    client.events = new Map();
    client.prefix = config.prefix;
    client.ticket = ticket;
    console.log(chalk.blue('[License Bot]') + ' Turning On');
    await registerCommands(client, '../commands');
    await registerEvents(client, '../events');
    console.log(chalk.blue('[License Bot]') + ` Commands Loaded: 8`);
    await client.login(config.token);

    client.user.setActivity("Coded by Ecstasy#8758", {
        type: "STREAMING",
        url: "https://www.twitch.tv/amouranth",
    });


})();

module.exports.client = client;