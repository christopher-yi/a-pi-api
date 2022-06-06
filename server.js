const express = require('express');
const app = express();
const cors = require('cors')
const PORT = 8000;

app.use(cors());

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html');
});

app.get('/api/:pie', (request, response) => {
    const pieName = request.params.pie.toLowerCase();
    if(pie[pieName]) {
        response.json(pie[pieName])
    }else{
        response.json('unknown');
    }
});

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT} better go catch it! xDDDD`);
});

const pie = {
    'apple': {
        'type': 'pie',
        'taste': 'sweet',
        'filling': 'apples',
        'topping': 'pastry',
        'crust': 'pastry',
        'origin': 'England'
    },
    'boston cream': {
        'type': 'cake',
        'taste': 'sweet',
        'filling': 'cream, custard',
        'topping': 'chocolate',
        'crust': 'n/a',
        'origin': 'Boston, Massachuesetts',
        'controversial': 'yes'
    },
    'key lime': {
        'type': 'pie',
        'taste': 'sweet',
        'filling': 'sweetened condensed milk',
        'topping': 'meringue',
        'crust': 'graham cracker',
        'origin': 'Key West, Florida'
    },
    'shepherd\'s': {
        'type': 'pie',
        'taste': 'savory',
        'filling': 'minced lamb',
        'topping': 'mashed potato',
        'crust': 'n/a',
        'origin': 'United Kingdom'
    },
    'empanada': {
        'type': 'hand pie',
        'taste': 'savory',
        'filling': 'ground beef, veg',
        'topping': 'n/a',
        'crust': 'pastry',
        'origin': 'Spain'
    },
    'lemon meringue': {
        'type': 'pie',
        'taste': 'sweet',
        'filling': 'lemon curd',
        'topping': 'meringue',
        'crust': 'pastry',
        'origin': 'Philadelphia, Pennsylvania'
    },
    'blueberry': {
        'type': 'pie',
        'taste': 'sweet',
        'filling': 'blueberries',
        'topping': 'pastry',
        'crust': 'pastry',
        'origin': 'Northern United States'
    },
    'sweet potato': {
        'type': 'pie',
        'taste': 'sweet',
        'filling': 'mashed sweet potatoes',
        'topping': 'marshmallow, meringue, whipped cream',
        'crust': 'pastry',
        'origin': 'Southern United States'
    },
    'pumpkin': {
        'type': 'pie',
        'taste': 'sweet',
        'filling': 'pumpkin-based custard',
        'topping': 'n/a',
        'crust': 'pastry',
        'origin': 'United Kingdom'
    },
    'pecan': {
        'type': 'pie',
        'taste': 'sweet',
        'filling': 'pecans, sugar-syrup',
        'topping': 'n/a',
        'crust': 'pastry',
        'origin': 'Southern United States'
    },
    'egg tart': {
        'type': 'tart',
        'taste': 'sweet',
        'filling': 'egg custard',
        'topping': 'n/a',
        'crust': 'puff pastry or shortcrust pastry',
        'origin': 'Guangzhou, China'
    },
    'dan tat': {
        'type': 'tart',
        'taste': 'sweet',
        'filling': 'egg custard',
        'topping': 'n/a',
        'crust': 'puff pastry or shortcrust pastry',
        'origin': 'Guangzhou, China'
    },
    'quiche': {
        'type': 'tart',
        'taste': 'savory',
        'filling': 'egg, cheese, meat, seafood, veg, various',
        'topping': 'n/a',
        'crust': 'shortcrust pastry or pastry',
        'origin': 'France'
    },
    'pizza': {
        'type': 'pie',
        'taste': 'savory',
        'filling': 'sauce, cheese',
        'topping': 'various',
        'crust': 'leavened dough',
        'origin': 'Naples, Italy'
    },
    'calzone': {
        'type': 'hand pie',
        'taste': 'savory',
        'filling': 'sauce, cheese, various',
        'topping': 'n/a',
        'crust': 'leavened dough',
        'origin': 'Naples, Italy'
    },
    'pot': {
        'type': 'pie',
        'taste': 'savory',
        'filling': 'poultry, beef, seafood, gravy, veg, various',
        'topping': 'pastry',
        'crust': 'pastry',
        'origin': 'Greece'
    },
    'chicken pot': {
        'type': 'pie',
        'taste': 'savory',
        'filling': 'poultry, beef, seafood, gravy, veg, various',
        'topping': 'pastry',
        'crust': 'pastry',
        'origin': 'Greece'
    },
    'coconut cream': {
        'type': 'pie',
        'taste': 'sweet',
        'filling': 'custard, pudding',
        'topping': 'whipped cream',
        'crust': 'pastry',
        'origin': 'United States or Germany'
    },
    'bumbleberry': {
        'type': 'pie',
        'taste': 'sweet',
        'filling': 'mixed berries, fruits',
        'topping': 'pastry',
        'crust': 'pastry',
        'origin': 'The Maritimes, Canada'
    },
    'french silk':{
        'type': 'pie',
        'taste': 'sweet',
        'filling': 'mousse',
        'topping': 'whipped cream, chocolate shavings',
        'crust': 'pastry',
        'origin': 'Maryland, United States'
    },
    'chiffon': {
        'type': 'pie',
        'taste': 'sweet',
        'filling': 'custard or curd set with gelatin',
        'topping': 'whipped cream',
        'crust': 'pastry',
        'origin': 'United States'
    },
    'fish': {
        'type': 'pie',
        'taste': 'savory',
        'filling': 'white fish, cheddar sauce, shellfish, hard-boiled eggs',
        'topping': 'mashed potatoes',
        'crust': 'n/a',
        'origin': 'Britain'
    },
    'fisherman\'s': {
        'type': 'pie',
        'taste': 'savory',
        'filling': 'white fish, cheddar sauce, shellfish, hard-boiled eggs',
        'topping': 'mashed potatoes',
        'crust': 'n/a',
        'origin': 'Britain'
    },
    'steak': {
        'type': 'pie',
        'taste': 'savory',
        'filling': 'steak, beef gravy',
        'topping': 'pastry',
        'crust': 'pastry',
        'origin': 'United Kingdom'
    },
    'steak and ale': {
        'type': 'pie',
        'taste': 'savory',
        'filling': 'steak, beef gravy',
        'topping': 'pastry',
        'crust': 'pastry',
        'origin': 'United Kingdom'
    },
    'galette': {
        'type': 'hand pie',
        'taste': 'sweet or savory',
        'filling': 'various',
        'topping': 'various',
        'crust': 'pastry',
        'origin': 'Brittany, France'
    },
    'crostata': {
        'type': 'hand pie',
        'taste': 'sweet or savory',
        'filling': 'various',
        'topping': 'various',
        'crust': 'pastry',
        'origin': 'Italy'
    },
    'mince': {
        'type': 'hand pie',
        'taste': 'sweet',
        'filling': 'mixed fruits and spices',
        'topping': 'pastry',
        'crust': 'pastry',
        'origin': 'England'
    },
    'mincemeat': {
        'type': 'hand pie',
        'taste': 'sweet',
        'filling': 'mixed fruits and spices',
        'topping': 'pastry',
        'crust': 'pastry',
        'origin': 'England'
    },
    'rhubarb': {
        'type': 'pie',
        'taste': 'sweet',
        'filling': 'strawberries, rhubarb',
        'topping': 'pastry',
        'crust': 'pastry',
        'origin': 'Germany or United Kingdom'
    },
    'tarte tatin': {
        'type': 'tart',
        'taste': 'sweet',
        'filling': 'apples or other fruit',
        'topping': 'n/a',
        'crust': 'puff pastry or shortcrust pastry',
        'origin': 'France'
    },
    'cherry': {
        'type': 'pie',
        'taste': 'sweet',
        'filling': 'cherries',
        'topping': 'pastry',
        'crust': 'pastry',
        'origin': 'England'
    },
    'cheesecake': {
        'type': 'technically pie??? idk i don\'t make the rules...',
        'taste': 'sweet',
        'filling': 'cream cheese',
        'topping': 'various',
        'crust': 'graham crackers, crushed cookies',
        'origin': 'Ancient Greece',
        'controversial': 'absolutely'
    },
    'peach': {
        'type': 'pie',
        'taste': 'sweet',
        'filling': 'peaches',
        'topping': 'various',
        'crust': 'pastry',
        'origin': 'United States'
    },
    'blackberry': {
        'type': 'pie',
        'taste': 'sweet',
        'filling': 'blackberries',
        'topping': 'pastry',
        'crust': 'pastry',
        'origin': 'United States, Germany, or United Kingdom'
    },
    'banoffee': {
        'type': 'pie',
        'taste': 'sweet',
        'filling': 'bananas, cream',
        'topping': 'toffee',
        'crust': 'pastry',
        'origin': 'Jevington, England'
    },
    'apple crumble': {
        'type': 'pie',
        'taste': 'savory',
        'filling': 'apples',
        'topping': 'streusel',
        'crust': 'n/a',
        'origin': 'Great Britain'
    },
    'mississippi mud': {
        'type': 'pie',
        'taste': 'sweet',
        'filling': 'brownie cake, chocolate custard',
        'topping': 'whipped cream, chocolate sauce',
        'crust': 'crumbly chocolate',
        'origin': 'Mississippi, United States'
    },
    'buko': {
        'type': 'pie',
        'taste': 'sweet',
        'filling': 'young coconut custard',
        'topping': 'pastry',
        'crust': 'pastry',
        'origin': 'Luzon, Philippines'
    },
    'pastilla': {
        'type': 'pie',
        'taste': 'savory',
        'filling': 'meat, seafood',
        'topping': 'warka',
        'crust': 'warka',
        'origin': 'North Africa'
    },
    'zwetschgenkuchen': {
        'type': 'pie',
        'taste': 'sweet',
        'filling': 'plums',
        'topping': 'streusel',
        'crust': 'yeasted or shortcrust dough',
        'origin': 'Augsburg, Germany'
    },
    'spanakopita': {
        'type': 'pie',
        'taste': 'savory',
        'filling': 'spinach, feta',
        'topping': 'phyllo',
        'crust': 'phyllo',
        'origin': 'Greece'
    },
    'salteña': {
        'type': 'hand pie',
        'taste': 'savory',
        'filling': 'beef, pork, chicken',
        'topping': 'n/a',
        'crust': 'pastry',
        'origin': 'Bolivia'
    },
    'coulibiac': {
        'type': 'pie',
        'taste': 'savory',
        'filling': 'salmon or sturgeon, rice or buckwheat, hard-boiled eggs, mushrooms, onion, dill',
        'topping': 'brioche or puff pastry',
        'crust': 'brioche or puff pastry',
        'origin': 'Russia'
    },
    'bündner nusstorte': {
        'type': 'pie',
        'taste': 'sweet',
        'filling': 'caramelized walnuts',
        'topping': 'shortcrust pastry',
        'crust': 'shortcrust pastry',
        'origin': 'Switzerland'
    },
    'bundner nusstorte': {
        'type': 'pie',
        'taste': 'sweet',
        'filling': 'caramelized walnuts',
        'topping': 'shortcrust pastry',
        'crust': 'shortcrust pastry',
        'origin': 'Switzerland'
    },
    'cornish pasty': {
        'type': 'pie',
        'taste': 'savory',
        'filling': 'beef, potato, swede, onion',
        'topping': 'n/a',
        'crust': 'shortcrust pastry',
        'origin': 'Cornwall, England'
    },
    'pasty': {
        'type': 'pie',
        'taste': 'savory',
        'filling': 'beef, potato, swede, onion',
        'topping': 'n/a',
        'crust': 'shortcrust pastry',
        'origin': 'Cornwall, England'
    },
    'icebox': {
        'type': 'pie',
        'taste': 'sweet',
        'filling': 'various',
        'topping': 'various',
        'crust': 'crumb or pastry',
        'origin': 'Southern United States'
    },
    'tourtiere': {
        'type': 'pie',
        'taste': 'savory',
        'filling': 'pork, veal, beef, fish, wild game, potatoes',
        'topping': 'pastry',
        'crust': 'pastry',
        'origin': 'Quebec, Canada'
    },
    'tourtière': {
        'type': 'pie',
        'taste': 'savory',
        'filling': 'pork, veal, beef, fish, wild game, potatoes',
        'topping': 'pastry',
        'crust': 'pastry',
        'origin': 'Quebec, Canada'
    },
    'chicken and mushroom': {
        'type': 'pie',
        'taste': 'savory',
        'filling': 'chicken, mushrooms, cream sauce',
        'topping': 'pastry or puff pastry',
        'crust': 'pastry or puff pastry',
        'origin': 'Great Britain'
    },
    'cottage': {
        'type': 'pie',
        'taste': 'savory',
        'filling': 'minced beef',
        'topping': 'mashed potatoes',
        'crust': 'pastry',
        'origin': 'United Kingdom'
    },
    'steak and kidney': {
        'type': 'pie',
        'taste': 'savory',
        'filling': 'diced beef, diced kidney, onion, brown gravy',
        'topping': 'pastry',
        'crust': 'pastry',
        'origin': 'Britain'
    },
    'cheese and onion': {
        'type': 'pie',
        'taste': 'savory',
        'filling': 'cheese and onion mixture',
        'topping': 'n/a',
        'crust': 'pastry',
        'origin': 'Northern England'
    },
    'homity': {
        'type': 'pie',
        'taste': 'savory',
        'filling': 'potato, onion, leek mixture',
        'topping': 'cheese',
        'crust': 'pastry',
        'origin': 'Great Britain'
    },
    'aloo': {
        'type': 'hand pie',
        'taste': 'savory',
        'filling': 'spiced mashed potatoes, green peas',
        'topping': 'n/a',
        'crust': 'pastry',
        'origin': 'Trinidad and Tobago'
    },
    'apple crisp': {
        'type': 'pie',
        'taste': 'sweet',
        'filling': 'apples',
        'topping': 'streusel',
        'crust': 'pastry',
        'origin': 'United States'
    },
    'meat': {
        'type': 'hand pie',
        'taste': 'savory',
        'filling': 'minced meat, gravy',
        'topping': 'pastry',
        'crust': 'pastry',
        'origin': 'Australia and New Zealand'
    },
    'australian meat': {
        'type': 'hand pie',
        'taste': 'savory',
        'filling': 'minced meat, gravy',
        'topping': 'pastry',
        'crust': 'pastry',
        'origin': 'Australia and New Zealand'
    },
    'new zealand meat': {
        'type': 'hand pie',
        'taste': 'savory',
        'filling': 'minced meat, gravy',
        'topping': 'pastry',
        'crust': 'pastry',
        'origin': 'Australia and New Zealand'
    },
    'bacon and egg': {
        'type': 'pie',
        'taste': 'savory',
        'filling': 'bacon, eggs, peas',
        'topping': 'pastry',
        'crust': 'pastry or shortcrust pastry',
        'origin': 'Australia and New Zealand'
    },
    'bakewell tart': {
        'type': 'tart',
        'taste': 'sweet',
        'filling': 'jam, frangipane',
        'topping': 'flaked almonds',
        'crust': 'shortcrust pastry',
        'origin': 'Derbyshire, England'
    },
    'bay tat': {
        'type': 'pie or tart',
        'taste': 'sweet',
        'filling': 'coconut milk, pineapple jam, coconut jam',
        'topping': 'pastry',
        'crust': 'pastry',
        'origin': 'Benkulu, Indonesia'
    },
    'unknown': {
        'type': 'unknown',
        'taste': 'unknown',
        'filling': 'unknown',
        'topping': 'unknown',
        'crust': 'unknown',
        'origin': 'unknown'
    }
}