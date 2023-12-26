const URL = "https://recipes-goodness-elevation.herokuapp.com/recipes/ingredient/"
const ID_URL = "https://recipes-goodness-elevation.herokuapp.com/recipes/id/"
const RESULT = "results"
const DAIRY_INGREDIENTS = ["Cream","Cheese","Milk","Butter","Creme","Ricotta","Mozzarella","Custard","Cream Cheese"]
const GLUTEN_INGREDIENT = ["Flour","Bread","spaghetti","Biscuits","Beer"]
const AREATOCOUNTRY = {
    'italian': 'Italy',
    'jamaican': 'Jamaica',
    'french': 'France',
    'british': 'United Kingdom',
    'american': 'United States',
    'thai': 'Thailand',
    'irish': 'Ireland',
    'chinese': 'China',
    'mexican': 'Mexico',
    'canadian': 'Canada',
    'indian': 'India',
};
const COUNTRYCODES = {
    'italian': 'it',
    'jamaican': 'jm',
    'french': 'fr',
    'british': 'gb',
    'american': 'us',
    'thai': 'th',
    'irish': 'ie',
    'chinese': 'cn',
    'mexican': 'mx',
    'canadian': 'ca',
    'indian': 'in',
};


module.exports = {
    URL,
    ID_URL,
    RESULT,
    DAIRY_INGREDIENTS,
    GLUTEN_INGREDIENT,
    AREATOCOUNTRY,
    COUNTRYCODES
}