$(document).ready(function() {
    var weapons = [
        {
            "name": "pistol",
            "damage": 48,
            "ammo": ".44 round",
            "fire_rate": 6,
            "range": 119,
            "accuracy": 66,
            "weight": 4.2,
            "value": 99,
            "image": "images/44_pistol.png",
        },
        {
            "name": "deliverer",
            "damage": 25,
            "ammo": "10mm",
            "fire_rate": 66,
            "range": 60,
            "accuracy": 67,
            "weight": 4.4,
            "value": 774,
            "image": "images/the_deliverer.png",
        },
        {
            "name": "eddies_peace",
            "damage": 48,
            "ammo": ".44 round",
            "fire_rate": 6,
            "range": 125,
            "accuracy": 81,
            "weight": 5,
            "value": 454,
            "image": "images/eddies_peace.png",
        },
        {
            "name": "the_gainer",
            "damage": 48,
            "ammo": ".44 round",
            "fire_rate": 6,
            "range": 119,
            "accuracy": 74,
            "weight": 4.6,
            "value": 468,
            "image": "images/the_gainer.png",
        },
    ];
    
    $('.item-list a').on('mouseenter', function(e) {
        var current_item = $(e.currentTarget).attr('class');

        for (item in weapons) {
            if(weapons[item].name == current_item) {
                console.log(weapons[item].image);

                var container = $('.item-stats'),
                    weapons_container = $('.weapons-container');
                container.find('.damage').text(weapons[item].damage);
                container.find('.ammo').text(weapons[item].ammo);
                container.find('.fire_rate').text(weapons[item].fire_rate);
                container.find('.range').text(weapons[item].range);
                container.find('.accuracy').text(weapons[item].accuracy);
                container.find('.weight').text(weapons[item].weight);
                container.find('.value').text(weapons[item].value);
                weapons_container.find('.weapon-img').attr('src', weapons[item].image);
            }
        }
    });
    var pipboySpecial = [
        {
            "name":"strength",
            "info":"Strength is a measure of of your raw physical power. It affects how much you carry, and the damage of all melee attacks.",
            "image":"images/strength.png",
        },
        {
            "name":"perception",
            "info":"Perception is your environmental awareness and sixth sense, and affects weapon accuracy in V.A.T.S.",
            "image":"images/perception.png",
        },
        {
            "name":"endurance",
            "info":"Endurance is a measure of your overall physical fitness. It affects your total Health and and the Action Point drain from sprinting.",
            "image":"images/endurance.png",
        },
        {
            "name":"charisma",
            "info":"Charisma is your ability to charm and convince others. It affects your success to persuade in dialogue and prices when you barter.",
            "image":"images/charisma.png",
        },
        {
            "name":"intelligence",
            "info":"Luck is a measure of your general good fortune, and affects the recharge rate of Critical Hits.",
            "image":"images/intelligence.png",
        },
        {
            "name":"agility",
            "info":"Agility is a measure of your overall finesse and reflexes. It affects the number of Action Points in V.A.T.S. and your ability to sneak.",
            "image":"images/agility.png",
        },
        {
            "name":"luck",
            "info":"Luck is a measure of your general good fortune, and affects the recharge rate of Critical Hits.",
            "image":"images/luck.png",
        },
    ];
    $('.characteristics li').on('click', function(e){
        $('.characteristics li').removeClass('active');
        $(e.currentTarget).addClass('active');
    })
/* 
So far so good.
*/
    $('.characteristics li').on('mouseenter', function(e) {
        var current_item = $(e.currentTarget).attr('class');

        for (item in pipboySpecial) {
            if(pipboySpecial[item].name == current_item) {
                console.log(pipboySpecial[item].image);
/* 
So far so good.x2
*/
        var container = $('.character-info');
            container.find('.special-description').text(pipboySpecial[item].info);
            console.log(pipboySpecial[item].info);
            container.find('.special-img-position').attr('src', pipboySpecial[item].image);
/* 
Aca ya la cague.Me devuelve la info pero no me cambia el cuadradito.
*/
            }
        }
    });
});

