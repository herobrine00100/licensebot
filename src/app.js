const express = require('express');
const urlencoded = require('body-parser').urlencoded;
const mongoose = require('mongoose');
const calls = require('../schemas/calls');
const { MessageEmbed } = require('discord.js');
const color = '#3895d3';
const Discord = require('discord.js');
const client = require("./bot").client


mongoose.connect('', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then((m) => {
    console.log('[License Database] Connected');
});
