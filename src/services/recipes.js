
import Config from "./config"


export async function getRecipes(query) {

    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${Config.appId}&app_key=${Config.appKey}`);
    
    if (!response) return null
    
    return response.json();
}

export async function getMockRecipes(query) {

    return {
        "q": "carne de porco",
        "from": 0,
        "to": 10,
        "more": false,
        "count": 4,
        "hits": [
            {
                "recipe": {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_504e4249ad120dda88453277cdd33f7e",
                    "label": "Carne de Porco à Alentejana",
                    "image": "https://picsum.photos/800/600",
                    "source": "Honest Cooking",
                    "url": "http://honestcooking.com/carne-de-porco-a-alentejana/",
                    "shareAs": "http://www.edamam.com/recipe/carne-de-porco-%C3%A0-alentejana-504e4249ad120dda88453277cdd33f7e/carne+de+porco",
                    "yield": 4.0,
                    "dietLabels": [
                        "High-Fiber"
                    ],
                    "healthLabels": [
                        "Dairy-Free",
                        "Gluten-Free",
                        "Wheat-Free",
                        "Egg-Free",
                        "Peanut-Free",
                        "Tree-Nut-Free",
                        "Soy-Free",
                        "Fish-Free",
                        "Crustacean-Free",
                        "Celery-Free",
                        "Mustard-Free",
                        "Sesame-Free",
                        "Lupine-Free"
                    ],
                    "cautions": [
                        "Sulfites"
                    ],
                    "ingredientLines": [
                        "1 ½ tablespoons sweet paprika",
                        "2 cloves garlic, crushed and minced",
                        "1 tablespoon olive oil",
                        "Pinch of salt",
                        "2¼lbs (1 kg) boneless pork loin, cubed",
                        "½ cup white wine vinegar",
                        "2 bay leaves",
                        "2 tablespoons olive oil",
                        "3 garlic cloves, minced",
                        "1 onion, chopped",
                        "2-3 tablespoons tomato paste",
                        "1 cup white wine",
                        "2 ¼ lbs (1 kg) clams, scrubbed clean",
                        "3 large potatoes, peeled",
                        "3 tablespoons olive oil",
                        "Salt",
                        "Water",
                        "1 lemon, sliced into wedges (optional)",
                        "Cilantro/coriander leaves (optional)"
                    ],
                    "ingredients": [
                        {
                            "text": "1 ½ tablespoons sweet paprika",
                            "quantity": 1.5,
                            "measure": "tablespoon",
                            "food": "sweet paprika",
                            "weight": 10.2,
                            "foodCategory": "Condiments and sauces",
                            "foodId": "food_a9dpcnjb883g67b3lq82ca0421ql",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "2 cloves garlic, crushed and minced",
                            "quantity": 2.0,
                            "measure": "clove",
                            "food": "garlic",
                            "weight": 6.0,
                            "foodCategory": "vegetables",
                            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "1 tablespoon olive oil",
                            "quantity": 1.0,
                            "measure": "tablespoon",
                            "food": "olive oil",
                            "weight": 13.5,
                            "foodCategory": "Oils",
                            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "Pinch of salt",
                            "quantity": 1.0,
                            "measure": "pinch",
                            "food": "salt",
                            "weight": 0.380208333815447,
                            "foodCategory": "Condiments and sauces",
                            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "2¼lbs (1 kg) boneless pork loin, cubed",
                            "quantity": 2.25,
                            "measure": "pound",
                            "food": "boneless pork loin",
                            "weight": 1020.5828325,
                            "foodCategory": "meats",
                            "foodId": "food_avagutpasew697bkpd0ylbp099n9",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "½ cup white wine vinegar",
                            "quantity": 0.5,
                            "measure": "cup",
                            "food": "white wine vinegar",
                            "weight": 119.0,
                            "foodCategory": "Condiments and sauces",
                            "foodId": "food_ai77igmb8f0rj6blsokr8bxx5n2n",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "2 bay leaves",
                            "quantity": 2.0,
                            "measure": "<unit>",
                            "food": "bay leaves",
                            "weight": 1.2,
                            "foodCategory": "Condiments and sauces",
                            "foodId": "food_asx39x4ayja4jab6ivj6zayvkblo",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "2 tablespoons olive oil",
                            "quantity": 2.0,
                            "measure": "tablespoon",
                            "food": "olive oil",
                            "weight": 27.0,
                            "foodCategory": "Oils",
                            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "3 garlic cloves, minced",
                            "quantity": 3.0,
                            "measure": "clove",
                            "food": "garlic",
                            "weight": 9.0,
                            "foodCategory": "vegetables",
                            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "1 onion, chopped",
                            "quantity": 1.0,
                            "measure": "<unit>",
                            "food": "onion",
                            "weight": 125.0,
                            "foodCategory": "vegetables",
                            "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "2-3 tablespoons tomato paste",
                            "quantity": 2.5,
                            "measure": "tablespoon",
                            "food": "tomato paste",
                            "weight": 40.0,
                            "foodCategory": "canned vegetables",
                            "foodId": "food_auu2atfal07b6gbd1a5wsawy7u0s",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "1 cup white wine",
                            "quantity": 1.0,
                            "measure": "cup",
                            "food": "white wine",
                            "weight": 235.2,
                            "foodCategory": "wines",
                            "foodId": "food_bn44h7baron9ufaoxinmya8l0yye",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "2 ¼ lbs (1 kg) clams, scrubbed clean",
                            "quantity": 2.25,
                            "measure": "pound",
                            "food": "clams",
                            "weight": 1020.5828325,
                            "foodCategory": "seafood",
                            "foodId": "food_b12syzgajx227eahiup7wb240d41",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "3 large potatoes, peeled",
                            "quantity": 3.0,
                            "measure": "<unit>",
                            "food": "potatoes",
                            "weight": 1107.0,
                            "foodCategory": "vegetables",
                            "foodId": "food_abiw5baauresjmb6xpap2bg3otzu",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "3 tablespoons olive oil",
                            "quantity": 3.0,
                            "measure": "tablespoon",
                            "food": "olive oil",
                            "weight": 40.5,
                            "foodCategory": "Oils",
                            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "Salt",
                            "quantity": 0.0,
                            "measure": null,
                            "food": "Salt",
                            "weight": 23.000675240002895,
                            "foodCategory": "Condiments and sauces",
                            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "Water",
                            "quantity": 0.0,
                            "measure": null,
                            "food": "Water",
                            "weight": 0.0,
                            "foodCategory": "water",
                            "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "1 lemon, sliced into wedges (optional)",
                            "quantity": 1.0,
                            "measure": "<unit>",
                            "food": "lemon",
                            "weight": 58.0,
                            "foodCategory": "fruit",
                            "foodId": "food_a6uzc62astrxcgbtzyq59b6fncrr",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "Cilantro/coriander leaves (optional)",
                            "quantity": 1.0,
                            "measure": "leaf",
                            "food": "Cilantro",
                            "weight": 0.3,
                            "foodCategory": "vegetables",
                            "foodId": "food_alhzhuwb4lc7jnb5s6f02by60bzp",
                            "image": "https://picsum.photos/400/400"
                        }
                    ],
                    "calories": 4509.141737900001,
                    "totalWeight": 3837.9320172061102,
                    "totalTime": 540.0,
                    "cuisineType": [
                        "south american"
                    ],
                    "mealType": [
                        "lunch/dinner"
                    ],
                    "dishType": [
                        "main course"
                    ],
                    "totalNutrients": {
                        "ENERC_KCAL": {
                            "label": "Energy",
                            "quantity": 4509.141737900001,
                            "unit": "kcal"
                        },
                        "FAT": {
                            "label": "Fat",
                            "quantity": 178.78710513925,
                            "unit": "g"
                        },
                        "FASAT": {
                            "label": "Saturated",
                            "quantity": 30.063855560125,
                            "unit": "g"
                        },
                        "FATRN": {
                            "label": "Trans",
                            "quantity": 0.6633788411250001,
                            "unit": "g"
                        },
                        "FAMS": {
                            "label": "Monounsaturated",
                            "quantity": 79.58277091182501,
                            "unit": "g"
                        },
                        "FAPU": {
                            "label": "Polyunsaturated",
                            "quantity": 18.596705277975,
                            "unit": "g"
                        },
                        "CHOCDF": {
                            "label": "Carbs",
                            "quantity": 272.01173712025,
                            "unit": "g"
                        },
                        "CHOCDF.net": {
                            "label": "Carbohydrates (net)",
                            "quantity": 238.06993712025002,
                            "unit": "g"
                        },
                        "FIBTG": {
                            "label": "Fiber",
                            "quantity": 33.94180000000001,
                            "unit": "g"
                        },
                        "SUGAR": {
                            "label": "Sugars",
                            "quantity": 23.76941,
                            "unit": "g"
                        },
                        "SUGAR.added": {
                            "label": "Sugars, added",
                            "quantity": 0.0,
                            "unit": "g"
                        },
                        "PROCNT": {
                            "label": "Protein",
                            "quantity": 396.27290798325,
                            "unit": "g"
                        },
                        "CHOLE": {
                            "label": "Cholesterol",
                            "quantity": 959.3478625500001,
                            "unit": "mg"
                        },
                        "NA": {
                            "label": "Sodium",
                            "quantity": 8913.717542644203,
                            "unit": "mg"
                        },
                        "CA": {
                            "label": "Calcium",
                            "quantity": 751.5410274794666,
                            "unit": "mg"
                        },
                        "MG": {
                            "label": "Magnesium",
                            "quantity": 775.5832814970611,
                            "unit": "mg"
                        },
                        "K": {
                            "label": "Potassium",
                            "quantity": 9922.956951476492,
                            "unit": "mg"
                        },
                        "FE": {
                            "label": "Iron",
                            "quantity": 36.45261986103016,
                            "unit": "mg"
                        },
                        "ZN": {
                            "label": "Zinc",
                            "quantity": 27.531221800206108,
                            "unit": "mg"
                        },
                        "P": {
                            "label": "Phosphorus",
                            "quantity": 5038.50692655,
                            "unit": "mg"
                        },
                        "VITA_RAE": {
                            "label": "Vitamin A",
                            "quantity": 1225.8612059,
                            "unit": "µg"
                        },
                        "VITC": {
                            "label": "Vitamin C",
                            "quantity": 272.2398,
                            "unit": "mg"
                        },
                        "THIA": {
                            "label": "Thiamin (B1)",
                            "quantity": 5.566799291325,
                            "unit": "mg"
                        },
                        "RIBF": {
                            "label": "Riboflavin (B2)",
                            "quantity": 2.8990560598250004,
                            "unit": "mg"
                        },
                        "NIA": {
                            "label": "Niacin (B3)",
                            "quantity": 74.89139837070002,
                            "unit": "mg"
                        },
                        "VITB6A": {
                            "label": "Vitamin B6",
                            "quantity": 11.5208520206,
                            "unit": "mg"
                        },
                        "FOLDFE": {
                            "label": "Folate equivalent (total)",
                            "quantity": 273.225141625,
                            "unit": "µg"
                        },
                        "FOLFD": {
                            "label": "Folate (food)",
                            "quantity": 273.225141625,
                            "unit": "µg"
                        },
                        "FOLAC": {
                            "label": "Folic acid",
                            "quantity": 0.0,
                            "unit": "µg"
                        },
                        "VITB12": {
                            "label": "Vitamin B12",
                            "quantity": 120.6328908015,
                            "unit": "µg"
                        },
                        "VITD": {
                            "label": "Vitamin D",
                            "quantity": 5.1029141625,
                            "unit": "µg"
                        },
                        "TOCPHA": {
                            "label": "Vitamin E",
                            "quantity": 24.718562660000003,
                            "unit": "mg"
                        },
                        "VITK1": {
                            "label": "Vitamin K",
                            "quantity": 87.21256566500003,
                            "unit": "µg"
                        },
                        "Sugar.alcohol": {
                            "label": "Sugar alcohol",
                            "quantity": 0.0,
                            "unit": "g"
                        },
                        "WATER": {
                            "label": "Water",
                            "quantity": 2919.9508625284125,
                            "unit": "g"
                        }
                    },
                    "totalDaily": {
                        "ENERC_KCAL": {
                            "label": "Energy",
                            "quantity": 225.45708689500006,
                            "unit": "%"
                        },
                        "FAT": {
                            "label": "Fat",
                            "quantity": 275.0570848296154,
                            "unit": "%"
                        },
                        "FASAT": {
                            "label": "Saturated",
                            "quantity": 150.319277800625,
                            "unit": "%"
                        },
                        "CHOCDF": {
                            "label": "Carbs",
                            "quantity": 90.67057904008334,
                            "unit": "%"
                        },
                        "FIBTG": {
                            "label": "Fiber",
                            "quantity": 135.76720000000003,
                            "unit": "%"
                        },
                        "PROCNT": {
                            "label": "Protein",
                            "quantity": 792.5458159665,
                            "unit": "%"
                        },
                        "CHOLE": {
                            "label": "Cholesterol",
                            "quantity": 319.78262085,
                            "unit": "%"
                        },
                        "NA": {
                            "label": "Sodium",
                            "quantity": 371.4048976101751,
                            "unit": "%"
                        },
                        "CA": {
                            "label": "Calcium",
                            "quantity": 75.15410274794665,
                            "unit": "%"
                        },
                        "MG": {
                            "label": "Magnesium",
                            "quantity": 184.66268607072882,
                            "unit": "%"
                        },
                        "K": {
                            "label": "Potassium",
                            "quantity": 211.126743648436,
                            "unit": "%"
                        },
                        "FE": {
                            "label": "Iron",
                            "quantity": 202.51455478350087,
                            "unit": "%"
                        },
                        "ZN": {
                            "label": "Zinc",
                            "quantity": 250.28383454732827,
                            "unit": "%"
                        },
                        "P": {
                            "label": "Phosphorus",
                            "quantity": 719.7867037928571,
                            "unit": "%"
                        },
                        "VITA_RAE": {
                            "label": "Vitamin A",
                            "quantity": 136.20680065555555,
                            "unit": "%"
                        },
                        "VITC": {
                            "label": "Vitamin C",
                            "quantity": 302.4886666666667,
                            "unit": "%"
                        },
                        "THIA": {
                            "label": "Thiamin (B1)",
                            "quantity": 463.89994094375,
                            "unit": "%"
                        },
                        "RIBF": {
                            "label": "Riboflavin (B2)",
                            "quantity": 223.0043122942308,
                            "unit": "%"
                        },
                        "NIA": {
                            "label": "Niacin (B3)",
                            "quantity": 468.0712398168751,
                            "unit": "%"
                        },
                        "VITB6A": {
                            "label": "Vitamin B6",
                            "quantity": 886.2193862,
                            "unit": "%"
                        },
                        "FOLDFE": {
                            "label": "Folate equivalent (total)",
                            "quantity": 68.30628540625,
                            "unit": "%"
                        },
                        "VITB12": {
                            "label": "Vitamin B12",
                            "quantity": 5026.3704500625,
                            "unit": "%"
                        },
                        "VITD": {
                            "label": "Vitamin D",
                            "quantity": 34.019427750000006,
                            "unit": "%"
                        },
                        "TOCPHA": {
                            "label": "Vitamin E",
                            "quantity": 164.79041773333336,
                            "unit": "%"
                        },
                        "VITK1": {
                            "label": "Vitamin K",
                            "quantity": 72.67713805416669,
                            "unit": "%"
                        }
                    },
                    "digest": [
                        {
                            "label": "Fat",
                            "tag": "FAT",
                            "schemaOrgTag": "fatContent",
                            "total": 178.78710513925,
                            "hasRDI": true,
                            "daily": 275.0570848296154,
                            "unit": "g",
                            "sub": [
                                {
                                    "label": "Saturated",
                                    "tag": "FASAT",
                                    "schemaOrgTag": "saturatedFatContent",
                                    "total": 30.063855560125,
                                    "hasRDI": true,
                                    "daily": 150.319277800625,
                                    "unit": "g"
                                },
                                {
                                    "label": "Trans",
                                    "tag": "FATRN",
                                    "schemaOrgTag": "transFatContent",
                                    "total": 0.6633788411250001,
                                    "hasRDI": false,
                                    "daily": 0.0,
                                    "unit": "g"
                                },
                                {
                                    "label": "Monounsaturated",
                                    "tag": "FAMS",
                                    "schemaOrgTag": null,
                                    "total": 79.58277091182501,
                                    "hasRDI": false,
                                    "daily": 0.0,
                                    "unit": "g"
                                },
                                {
                                    "label": "Polyunsaturated",
                                    "tag": "FAPU",
                                    "schemaOrgTag": null,
                                    "total": 18.596705277975,
                                    "hasRDI": false,
                                    "daily": 0.0,
                                    "unit": "g"
                                }
                            ]
                        },
                        {
                            "label": "Carbs",
                            "tag": "CHOCDF",
                            "schemaOrgTag": "carbohydrateContent",
                            "total": 272.01173712025,
                            "hasRDI": true,
                            "daily": 90.67057904008334,
                            "unit": "g",
                            "sub": [
                                {
                                    "label": "Carbs (net)",
                                    "tag": "CHOCDF.net",
                                    "schemaOrgTag": null,
                                    "total": 238.06993712025002,
                                    "hasRDI": false,
                                    "daily": 0.0,
                                    "unit": "g"
                                },
                                {
                                    "label": "Fiber",
                                    "tag": "FIBTG",
                                    "schemaOrgTag": "fiberContent",
                                    "total": 33.94180000000001,
                                    "hasRDI": true,
                                    "daily": 135.76720000000003,
                                    "unit": "g"
                                },
                                {
                                    "label": "Sugars",
                                    "tag": "SUGAR",
                                    "schemaOrgTag": "sugarContent",
                                    "total": 23.76941,
                                    "hasRDI": false,
                                    "daily": 0.0,
                                    "unit": "g"
                                },
                                {
                                    "label": "Sugars, added",
                                    "tag": "SUGAR.added",
                                    "schemaOrgTag": null,
                                    "total": 0.0,
                                    "hasRDI": false,
                                    "daily": 0.0,
                                    "unit": "g"
                                }
                            ]
                        },
                        {
                            "label": "Protein",
                            "tag": "PROCNT",
                            "schemaOrgTag": "proteinContent",
                            "total": 396.27290798325,
                            "hasRDI": true,
                            "daily": 792.5458159665,
                            "unit": "g"
                        },
                        {
                            "label": "Cholesterol",
                            "tag": "CHOLE",
                            "schemaOrgTag": "cholesterolContent",
                            "total": 959.3478625500001,
                            "hasRDI": true,
                            "daily": 319.78262085,
                            "unit": "mg"
                        },
                        {
                            "label": "Sodium",
                            "tag": "NA",
                            "schemaOrgTag": "sodiumContent",
                            "total": 8913.717542644203,
                            "hasRDI": true,
                            "daily": 371.4048976101751,
                            "unit": "mg"
                        },
                        {
                            "label": "Calcium",
                            "tag": "CA",
                            "schemaOrgTag": null,
                            "total": 751.5410274794666,
                            "hasRDI": true,
                            "daily": 75.15410274794665,
                            "unit": "mg"
                        },
                        {
                            "label": "Magnesium",
                            "tag": "MG",
                            "schemaOrgTag": null,
                            "total": 775.5832814970611,
                            "hasRDI": true,
                            "daily": 184.66268607072882,
                            "unit": "mg"
                        },
                        {
                            "label": "Potassium",
                            "tag": "K",
                            "schemaOrgTag": null,
                            "total": 9922.956951476492,
                            "hasRDI": true,
                            "daily": 211.126743648436,
                            "unit": "mg"
                        },
                        {
                            "label": "Iron",
                            "tag": "FE",
                            "schemaOrgTag": null,
                            "total": 36.45261986103016,
                            "hasRDI": true,
                            "daily": 202.51455478350087,
                            "unit": "mg"
                        },
                        {
                            "label": "Zinc",
                            "tag": "ZN",
                            "schemaOrgTag": null,
                            "total": 27.531221800206108,
                            "hasRDI": true,
                            "daily": 250.28383454732827,
                            "unit": "mg"
                        },
                        {
                            "label": "Phosphorus",
                            "tag": "P",
                            "schemaOrgTag": null,
                            "total": 5038.50692655,
                            "hasRDI": true,
                            "daily": 719.7867037928571,
                            "unit": "mg"
                        },
                        {
                            "label": "Vitamin A",
                            "tag": "VITA_RAE",
                            "schemaOrgTag": null,
                            "total": 1225.8612059,
                            "hasRDI": true,
                            "daily": 136.20680065555555,
                            "unit": "µg"
                        },
                        {
                            "label": "Vitamin C",
                            "tag": "VITC",
                            "schemaOrgTag": null,
                            "total": 272.2398,
                            "hasRDI": true,
                            "daily": 302.4886666666667,
                            "unit": "mg"
                        },
                        {
                            "label": "Thiamin (B1)",
                            "tag": "THIA",
                            "schemaOrgTag": null,
                            "total": 5.566799291325,
                            "hasRDI": true,
                            "daily": 463.89994094375,
                            "unit": "mg"
                        },
                        {
                            "label": "Riboflavin (B2)",
                            "tag": "RIBF",
                            "schemaOrgTag": null,
                            "total": 2.8990560598250004,
                            "hasRDI": true,
                            "daily": 223.0043122942308,
                            "unit": "mg"
                        },
                        {
                            "label": "Niacin (B3)",
                            "tag": "NIA",
                            "schemaOrgTag": null,
                            "total": 74.89139837070002,
                            "hasRDI": true,
                            "daily": 468.0712398168751,
                            "unit": "mg"
                        },
                        {
                            "label": "Vitamin B6",
                            "tag": "VITB6A",
                            "schemaOrgTag": null,
                            "total": 11.5208520206,
                            "hasRDI": true,
                            "daily": 886.2193862,
                            "unit": "mg"
                        },
                        {
                            "label": "Folate equivalent (total)",
                            "tag": "FOLDFE",
                            "schemaOrgTag": null,
                            "total": 273.225141625,
                            "hasRDI": true,
                            "daily": 68.30628540625,
                            "unit": "µg"
                        },
                        {
                            "label": "Folate (food)",
                            "tag": "FOLFD",
                            "schemaOrgTag": null,
                            "total": 273.225141625,
                            "hasRDI": false,
                            "daily": 0.0,
                            "unit": "µg"
                        },
                        {
                            "label": "Folic acid",
                            "tag": "FOLAC",
                            "schemaOrgTag": null,
                            "total": 0.0,
                            "hasRDI": false,
                            "daily": 0.0,
                            "unit": "µg"
                        },
                        {
                            "label": "Vitamin B12",
                            "tag": "VITB12",
                            "schemaOrgTag": null,
                            "total": 120.6328908015,
                            "hasRDI": true,
                            "daily": 5026.3704500625,
                            "unit": "µg"
                        },
                        {
                            "label": "Vitamin D",
                            "tag": "VITD",
                            "schemaOrgTag": null,
                            "total": 5.1029141625,
                            "hasRDI": true,
                            "daily": 34.019427750000006,
                            "unit": "µg"
                        },
                        {
                            "label": "Vitamin E",
                            "tag": "TOCPHA",
                            "schemaOrgTag": null,
                            "total": 24.718562660000003,
                            "hasRDI": true,
                            "daily": 164.79041773333336,
                            "unit": "mg"
                        },
                        {
                            "label": "Vitamin K",
                            "tag": "VITK1",
                            "schemaOrgTag": null,
                            "total": 87.21256566500003,
                            "hasRDI": true,
                            "daily": 72.67713805416669,
                            "unit": "µg"
                        },
                        {
                            "label": "Sugar alcohols",
                            "tag": "Sugar.alcohol",
                            "schemaOrgTag": null,
                            "total": 0.0,
                            "hasRDI": false,
                            "daily": 0.0,
                            "unit": "g"
                        },
                        {
                            "label": "Water",
                            "tag": "WATER",
                            "schemaOrgTag": null,
                            "total": 2919.9508625284125,
                            "hasRDI": false,
                            "daily": 0.0,
                            "unit": "g"
                        }
                    ]
                }
            },
            {
                "recipe": {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_6cf986c50a054718abe09f443890c1e0",
                    "label": "Carne de Porco Alentejana - Pork Fillet Alentejo Style (Portugal)",
                    "image": "https://picsum.photos/800/600",
                    "source": "Food52",
                    "url": "https://food52.com/recipes/795-carne-de-porco-alentejana-pork-fillet-alentejo-style-portugal",
                    "shareAs": "http://www.edamam.com/recipe/carne-de-porco-alentejana-pork-fillet-alentejo-style-portugal-6cf986c50a054718abe09f443890c1e0/carne+de+porco",
                    "yield": 4.0,
                    "dietLabels": [
                        "Low-Carb"
                    ],
                    "healthLabels": [
                        "Sugar-Conscious",
                        "Paleo",
                        "Dairy-Free",
                        "Gluten-Free",
                        "Wheat-Free",
                        "Egg-Free",
                        "Peanut-Free",
                        "Tree-Nut-Free",
                        "Soy-Free",
                        "Fish-Free",
                        "Crustacean-Free",
                        "Celery-Free",
                        "Mustard-Free",
                        "Sesame-Free",
                        "Lupine-Free"
                    ],
                    "cautions": [],
                    "ingredientLines": [
                        "2 pounds pork fillet",
                        "1 tablespoon paprika, sweet or spanish smoked paprika",
                        "1/4 cup white wine",
                        "Salt",
                        "4 garlic cloves",
                        "4 tablespoons rendered lard (or extra virgin olive oil but it won't taste the same!)",
                        "1 tablespoon coriander - fresh leaves chopped",
                        "2 pounds clams, very fresh"
                    ],
                    "ingredients": [
                        {
                            "text": "2 pounds pork fillet",
                            "quantity": 2.0,
                            "measure": "pound",
                            "food": "pork",
                            "weight": 907.18474,
                            "foodCategory": "meats",
                            "foodId": "food_aisetlvawqaqp8a2uc28uaf46l5m",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "1 tablespoon paprika, sweet or spanish smoked paprika",
                            "quantity": 1.0,
                            "measure": "tablespoon",
                            "food": "smoked paprika",
                            "weight": 6.8,
                            "foodCategory": "Condiments and sauces",
                            "foodId": "food_a9dpcnjb883g67b3lq82ca0421ql",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "1/4 cup white wine",
                            "quantity": 0.25,
                            "measure": "cup",
                            "food": "white wine",
                            "weight": 58.8,
                            "foodCategory": "wines",
                            "foodId": "food_bn44h7baron9ufaoxinmya8l0yye",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "Salt",
                            "quantity": 0.0,
                            "measure": null,
                            "food": "Salt",
                            "weight": 11.68901688,
                            "foodCategory": "Condiments and sauces",
                            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "4 garlic cloves",
                            "quantity": 4.0,
                            "measure": "clove",
                            "food": "garlic",
                            "weight": 12.0,
                            "foodCategory": "vegetables",
                            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "4 tablespoons rendered lard (or extra virgin olive oil but it won't taste the same!)",
                            "quantity": 4.0,
                            "measure": "tablespoon",
                            "food": "lard",
                            "weight": 51.2,
                            "foodCategory": "Oils",
                            "foodId": "food_bq8ww91a79r6zrbzro0naaor0fa3",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "1 tablespoon coriander - fresh leaves chopped",
                            "quantity": 1.0,
                            "measure": "tablespoon",
                            "food": "coriander",
                            "weight": 5.0,
                            "foodCategory": "Condiments and sauces",
                            "foodId": "food_afpcy6rb44nx6gbfff63ga2cqksw",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "2 pounds clams, very fresh",
                            "quantity": 2.0,
                            "measure": "pound",
                            "food": "clams",
                            "weight": 907.18474,
                            "foodCategory": "seafood",
                            "foodId": "food_b12syzgajx227eahiup7wb240d41",
                            "image": "https://picsum.photos/400/400"
                        }
                    ],
                    "calories": 3138.4006616000006,
                    "totalWeight": 1948.16948,
                    "totalTime": 341.0,
                    "cuisineType": [
                        "american"
                    ],
                    "mealType": [
                        "lunch/dinner"
                    ],
                    "dishType": [
                        "main course"
                    ],
                    "totalNutrients": {
                        "ENERC_KCAL": {
                            "label": "Energy",
                            "quantity": 3138.4006616000006,
                            "unit": "kcal"
                        },
                        "FAT": {
                            "label": "Fat",
                            "quantity": 175.85783379600002,
                            "unit": "g"
                        },
                        "FASAT": {
                            "label": "Saturated",
                            "quantity": 61.525790127800015,
                            "unit": "g"
                        },
                        "FATRN": {
                            "label": "Trans",
                            "quantity": 0.13607771100000002,
                            "unit": "g"
                        },
                        "FAMS": {
                            "label": "Monounsaturated",
                            "quantity": 75.86846560200001,
                            "unit": "g"
                        },
                        "FAPU": {
                            "label": "Polyunsaturated",
                            "quantity": 20.277938216800003,
                            "unit": "g"
                        },
                        "CHOCDF": {
                            "label": "Carbs",
                            "quantity": 44.303315218,
                            "unit": "g"
                        },
                        "CHOCDF.net": {
                            "label": "Carbohydrates (net)",
                            "quantity": 39.583115218,
                            "unit": "g"
                        },
                        "FIBTG": {
                            "label": "Fiber",
                            "quantity": 4.7202,
                            "unit": "g"
                        },
                        "SUGAR": {
                            "label": "Sugars",
                            "quantity": 1.3876,
                            "unit": "g"
                        },
                        "SUGAR.added": {
                            "label": "Sugars, added",
                            "quantity": 0.0,
                            "unit": "g"
                        },
                        "PROCNT": {
                            "label": "Protein",
                            "quantity": 314.54664903400004,
                            "unit": "g"
                        },
                        "CHOLE": {
                            "label": "Cholesterol",
                            "quantity": 892.3218082000001,
                            "unit": "mg"
                        },
                        "NA": {
                            "label": "Sodium",
                            "quantity": 5917.1266574,
                            "unit": "mg"
                        },
                        "CA": {
                            "label": "Calcium",
                            "quantity": 595.1293018000001,
                            "unit": "mg"
                        },
                        "MG": {
                            "label": "Magnesium",
                            "quantity": 400.3578960000001,
                            "unit": "mg"
                        },
                        "K": {
                            "label": "Potassium",
                            "quantity": 3955.1406548000004,
                            "unit": "mg"
                        },
                        "FE": {
                            "label": "Iron",
                            "quantity": 24.479432234000004,
                            "unit": "mg"
                        },
                        "ZN": {
                            "label": "Zinc",
                            "quantity": 21.20717665,
                            "unit": "mg"
                        },
                        "P": {
                            "label": "Phosphorus",
                            "quantity": 3654.1257230000006,
                            "unit": "mg"
                        },
                        "VITA_RAE": {
                            "label": "Vitamin A",
                            "quantity": 1002.0939608000001,
                            "unit": "µg"
                        },
                        "VITC": {
                            "label": "Vitamin C",
                            "quantity": 10.298308440000001,
                            "unit": "mg"
                        },
                        "THIA": {
                            "label": "Thiamin (B1)",
                            "quantity": 8.371142218400001,
                            "unit": "mg"
                        },
                        "RIBF": {
                            "label": "Riboflavin (B2)",
                            "quantity": 2.7328520512,
                            "unit": "mg"
                        },
                        "NIA": {
                            "label": "Niacin (B3)",
                            "quantity": 45.662291682,
                            "unit": "mg"
                        },
                        "VITB6A": {
                            "label": "Vitamin B6",
                            "quantity": 4.695818446800001,
                            "unit": "mg"
                        },
                        "FOLDFE": {
                            "label": "Folate equivalent (total)",
                            "quantity": 58.711084400000004,
                            "unit": "µg"
                        },
                        "FOLFD": {
                            "label": "Folate (food)",
                            "quantity": 58.711084400000004,
                            "unit": "µg"
                        },
                        "FOLAC": {
                            "label": "Folic acid",
                            "quantity": 0.0,
                            "unit": "µg"
                        },
                        "VITB12": {
                            "label": "Vitamin B12",
                            "quantity": 107.13851779400001,
                            "unit": "µg"
                        },
                        "VITD": {
                            "label": "Vitamin D",
                            "quantity": 5.815923700000001,
                            "unit": "µg"
                        },
                        "TOCPHA": {
                            "label": "Vitamin E",
                            "quantity": 10.369544186000002,
                            "unit": "mg"
                        },
                        "VITK1": {
                            "label": "Vitamin K",
                            "quantity": 7.713969479999999,
                            "unit": "µg"
                        },
                        "Sugar.alcohol": {
                            "label": "Sugar alcohol",
                            "quantity": 0.0,
                            "unit": "g"
                        },
                        "WATER": {
                            "label": "Water",
                            "quantity": 1382.89313566,
                            "unit": "g"
                        }
                    },
                    "totalDaily": {
                        "ENERC_KCAL": {
                            "label": "Energy",
                            "quantity": 156.92003308000002,
                            "unit": "%"
                        },
                        "FAT": {
                            "label": "Fat",
                            "quantity": 270.5505135323077,
                            "unit": "%"
                        },
                        "FASAT": {
                            "label": "Saturated",
                            "quantity": 307.6289506390001,
                            "unit": "%"
                        },
                        "CHOCDF": {
                            "label": "Carbs",
                            "quantity": 14.767771739333332,
                            "unit": "%"
                        },
                        "FIBTG": {
                            "label": "Fiber",
                            "quantity": 18.8808,
                            "unit": "%"
                        },
                        "PROCNT": {
                            "label": "Protein",
                            "quantity": 629.0932980680001,
                            "unit": "%"
                        },
                        "CHOLE": {
                            "label": "Cholesterol",
                            "quantity": 297.4406027333334,
                            "unit": "%"
                        },
                        "NA": {
                            "label": "Sodium",
                            "quantity": 246.5469440583333,
                            "unit": "%"
                        },
                        "CA": {
                            "label": "Calcium",
                            "quantity": 59.51293018000001,
                            "unit": "%"
                        },
                        "MG": {
                            "label": "Magnesium",
                            "quantity": 95.3233085714286,
                            "unit": "%"
                        },
                        "K": {
                            "label": "Potassium",
                            "quantity": 84.15192882553193,
                            "unit": "%"
                        },
                        "FE": {
                            "label": "Iron",
                            "quantity": 135.99684574444447,
                            "unit": "%"
                        },
                        "ZN": {
                            "label": "Zinc",
                            "quantity": 192.792515,
                            "unit": "%"
                        },
                        "P": {
                            "label": "Phosphorus",
                            "quantity": 522.0179604285715,
                            "unit": "%"
                        },
                        "VITA_RAE": {
                            "label": "Vitamin A",
                            "quantity": 111.34377342222223,
                            "unit": "%"
                        },
                        "VITC": {
                            "label": "Vitamin C",
                            "quantity": 11.442564933333333,
                            "unit": "%"
                        },
                        "THIA": {
                            "label": "Thiamin (B1)",
                            "quantity": 697.5951848666668,
                            "unit": "%"
                        },
                        "RIBF": {
                            "label": "Riboflavin (B2)",
                            "quantity": 210.21938855384616,
                            "unit": "%"
                        },
                        "NIA": {
                            "label": "Niacin (B3)",
                            "quantity": 285.38932301250003,
                            "unit": "%"
                        },
                        "VITB6A": {
                            "label": "Vitamin B6",
                            "quantity": 361.21680360000005,
                            "unit": "%"
                        },
                        "FOLDFE": {
                            "label": "Folate equivalent (total)",
                            "quantity": 14.6777711,
                            "unit": "%"
                        },
                        "VITB12": {
                            "label": "Vitamin B12",
                            "quantity": 4464.1049080833345,
                            "unit": "%"
                        },
                        "VITD": {
                            "label": "Vitamin D",
                            "quantity": 38.77282466666667,
                            "unit": "%"
                        },
                        "TOCPHA": {
                            "label": "Vitamin E",
                            "quantity": 69.13029457333336,
                            "unit": "%"
                        },
                        "VITK1": {
                            "label": "Vitamin K",
                            "quantity": 6.428307899999999,
                            "unit": "%"
                        }
                    },
                    "digest": [
                        {
                            "label": "Fat",
                            "tag": "FAT",
                            "schemaOrgTag": "fatContent",
                            "total": 175.85783379600002,
                            "hasRDI": true,
                            "daily": 270.5505135323077,
                            "unit": "g",
                            "sub": [
                                {
                                    "label": "Saturated",
                                    "tag": "FASAT",
                                    "schemaOrgTag": "saturatedFatContent",
                                    "total": 61.525790127800015,
                                    "hasRDI": true,
                                    "daily": 307.6289506390001,
                                    "unit": "g"
                                },
                                {
                                    "label": "Trans",
                                    "tag": "FATRN",
                                    "schemaOrgTag": "transFatContent",
                                    "total": 0.13607771100000002,
                                    "hasRDI": false,
                                    "daily": 0.0,
                                    "unit": "g"
                                },
                                {
                                    "label": "Monounsaturated",
                                    "tag": "FAMS",
                                    "schemaOrgTag": null,
                                    "total": 75.86846560200001,
                                    "hasRDI": false,
                                    "daily": 0.0,
                                    "unit": "g"
                                },
                                {
                                    "label": "Polyunsaturated",
                                    "tag": "FAPU",
                                    "schemaOrgTag": null,
                                    "total": 20.277938216800003,
                                    "hasRDI": false,
                                    "daily": 0.0,
                                    "unit": "g"
                                }
                            ]
                        },
                        {
                            "label": "Carbs",
                            "tag": "CHOCDF",
                            "schemaOrgTag": "carbohydrateContent",
                            "total": 44.303315218,
                            "hasRDI": true,
                            "daily": 14.767771739333332,
                            "unit": "g",
                            "sub": [
                                {
                                    "label": "Carbs (net)",
                                    "tag": "CHOCDF.net",
                                    "schemaOrgTag": null,
                                    "total": 39.583115218,
                                    "hasRDI": false,
                                    "daily": 0.0,
                                    "unit": "g"
                                },
                                {
                                    "label": "Fiber",
                                    "tag": "FIBTG",
                                    "schemaOrgTag": "fiberContent",
                                    "total": 4.7202,
                                    "hasRDI": true,
                                    "daily": 18.8808,
                                    "unit": "g"
                                },
                                {
                                    "label": "Sugars",
                                    "tag": "SUGAR",
                                    "schemaOrgTag": "sugarContent",
                                    "total": 1.3876,
                                    "hasRDI": false,
                                    "daily": 0.0,
                                    "unit": "g"
                                },
                                {
                                    "label": "Sugars, added",
                                    "tag": "SUGAR.added",
                                    "schemaOrgTag": null,
                                    "total": 0.0,
                                    "hasRDI": false,
                                    "daily": 0.0,
                                    "unit": "g"
                                }
                            ]
                        },
                        {
                            "label": "Protein",
                            "tag": "PROCNT",
                            "schemaOrgTag": "proteinContent",
                            "total": 314.54664903400004,
                            "hasRDI": true,
                            "daily": 629.0932980680001,
                            "unit": "g"
                        },
                        {
                            "label": "Cholesterol",
                            "tag": "CHOLE",
                            "schemaOrgTag": "cholesterolContent",
                            "total": 892.3218082000001,
                            "hasRDI": true,
                            "daily": 297.4406027333334,
                            "unit": "mg"
                        },
                        {
                            "label": "Sodium",
                            "tag": "NA",
                            "schemaOrgTag": "sodiumContent",
                            "total": 5917.1266574,
                            "hasRDI": true,
                            "daily": 246.5469440583333,
                            "unit": "mg"
                        },
                        {
                            "label": "Calcium",
                            "tag": "CA",
                            "schemaOrgTag": null,
                            "total": 595.1293018000001,
                            "hasRDI": true,
                            "daily": 59.51293018000001,
                            "unit": "mg"
                        },
                        {
                            "label": "Magnesium",
                            "tag": "MG",
                            "schemaOrgTag": null,
                            "total": 400.3578960000001,
                            "hasRDI": true,
                            "daily": 95.3233085714286,
                            "unit": "mg"
                        },
                        {
                            "label": "Potassium",
                            "tag": "K",
                            "schemaOrgTag": null,
                            "total": 3955.1406548000004,
                            "hasRDI": true,
                            "daily": 84.15192882553193,
                            "unit": "mg"
                        },
                        {
                            "label": "Iron",
                            "tag": "FE",
                            "schemaOrgTag": null,
                            "total": 24.479432234000004,
                            "hasRDI": true,
                            "daily": 135.99684574444447,
                            "unit": "mg"
                        },
                        {
                            "label": "Zinc",
                            "tag": "ZN",
                            "schemaOrgTag": null,
                            "total": 21.20717665,
                            "hasRDI": true,
                            "daily": 192.792515,
                            "unit": "mg"
                        },
                        {
                            "label": "Phosphorus",
                            "tag": "P",
                            "schemaOrgTag": null,
                            "total": 3654.1257230000006,
                            "hasRDI": true,
                            "daily": 522.0179604285715,
                            "unit": "mg"
                        },
                        {
                            "label": "Vitamin A",
                            "tag": "VITA_RAE",
                            "schemaOrgTag": null,
                            "total": 1002.0939608000001,
                            "hasRDI": true,
                            "daily": 111.34377342222223,
                            "unit": "µg"
                        },
                        {
                            "label": "Vitamin C",
                            "tag": "VITC",
                            "schemaOrgTag": null,
                            "total": 10.298308440000001,
                            "hasRDI": true,
                            "daily": 11.442564933333333,
                            "unit": "mg"
                        },
                        {
                            "label": "Thiamin (B1)",
                            "tag": "THIA",
                            "schemaOrgTag": null,
                            "total": 8.371142218400001,
                            "hasRDI": true,
                            "daily": 697.5951848666668,
                            "unit": "mg"
                        },
                        {
                            "label": "Riboflavin (B2)",
                            "tag": "RIBF",
                            "schemaOrgTag": null,
                            "total": 2.7328520512,
                            "hasRDI": true,
                            "daily": 210.21938855384616,
                            "unit": "mg"
                        },
                        {
                            "label": "Niacin (B3)",
                            "tag": "NIA",
                            "schemaOrgTag": null,
                            "total": 45.662291682,
                            "hasRDI": true,
                            "daily": 285.38932301250003,
                            "unit": "mg"
                        },
                        {
                            "label": "Vitamin B6",
                            "tag": "VITB6A",
                            "schemaOrgTag": null,
                            "total": 4.695818446800001,
                            "hasRDI": true,
                            "daily": 361.21680360000005,
                            "unit": "mg"
                        },
                        {
                            "label": "Folate equivalent (total)",
                            "tag": "FOLDFE",
                            "schemaOrgTag": null,
                            "total": 58.711084400000004,
                            "hasRDI": true,
                            "daily": 14.6777711,
                            "unit": "µg"
                        },
                        {
                            "label": "Folate (food)",
                            "tag": "FOLFD",
                            "schemaOrgTag": null,
                            "total": 58.711084400000004,
                            "hasRDI": false,
                            "daily": 0.0,
                            "unit": "µg"
                        },
                        {
                            "label": "Folic acid",
                            "tag": "FOLAC",
                            "schemaOrgTag": null,
                            "total": 0.0,
                            "hasRDI": false,
                            "daily": 0.0,
                            "unit": "µg"
                        },
                        {
                            "label": "Vitamin B12",
                            "tag": "VITB12",
                            "schemaOrgTag": null,
                            "total": 107.13851779400001,
                            "hasRDI": true,
                            "daily": 4464.1049080833345,
                            "unit": "µg"
                        },
                        {
                            "label": "Vitamin D",
                            "tag": "VITD",
                            "schemaOrgTag": null,
                            "total": 5.815923700000001,
                            "hasRDI": true,
                            "daily": 38.77282466666667,
                            "unit": "µg"
                        },
                        {
                            "label": "Vitamin E",
                            "tag": "TOCPHA",
                            "schemaOrgTag": null,
                            "total": 10.369544186000002,
                            "hasRDI": true,
                            "daily": 69.13029457333336,
                            "unit": "mg"
                        },
                        {
                            "label": "Vitamin K",
                            "tag": "VITK1",
                            "schemaOrgTag": null,
                            "total": 7.713969479999999,
                            "hasRDI": true,
                            "daily": 6.428307899999999,
                            "unit": "µg"
                        },
                        {
                            "label": "Sugar alcohols",
                            "tag": "Sugar.alcohol",
                            "schemaOrgTag": null,
                            "total": 0.0,
                            "hasRDI": false,
                            "daily": 0.0,
                            "unit": "g"
                        },
                        {
                            "label": "Water",
                            "tag": "WATER",
                            "schemaOrgTag": null,
                            "total": 1382.89313566,
                            "hasRDI": false,
                            "daily": 0.0,
                            "unit": "g"
                        }
                    ]
                }
            },
            {
                "recipe": {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_22dfff3a84757e3a1d8cf01d9505d617",
                    "label": "Carne de Porco à Alentejana",
                    "image": "https://picsum.photos/800/600",
                    "source": "culinary-adventures-with-cam.blogspot.com",
                    "url": "http://culinary-adventures-with-cam.blogspot.com/2017/03/carne-de-porco-alentejana-foodnflix.html",
                    "shareAs": "http://www.edamam.com/recipe/carne-de-porco-%C3%A0-alentejana-22dfff3a84757e3a1d8cf01d9505d617/carne+de+porco",
                    "yield": 12.0,
                    "dietLabels": [],
                    "healthLabels": [
                        "Sugar-Conscious",
                        "Gluten-Free",
                        "Wheat-Free",
                        "Egg-Free",
                        "Peanut-Free",
                        "Tree-Nut-Free",
                        "Soy-Free",
                        "Fish-Free",
                        "Crustacean-Free",
                        "Celery-Free",
                        "Mustard-Free",
                        "Sesame-Free",
                        "Lupine-Free"
                    ],
                    "cautions": [
                        "Sulfites"
                    ],
                    "ingredientLines": [
                        "1 T smoked paprika",
                        "2 T sweet paprika",
                        "1 t hot paprika",
                        "1 t ground turmeric",
                        "2 pounds boneless pork loin, cubed",
                        "½ C white wine vinegar",
                        "2 bay leaves",
                        "2 T olive oil",
                        "3 garlic cloves, peeled and minced",
                        "1 organic white onion, peeled and chopped (approximately 1 C)",
                        "3 T olive oil",
                        "2-3 T tomato paste",
                        "1 C dry white wine",
                        "1 T fresh oregano leaves",
                        "2 pounds clams, scrubbed",
                        "2 pounds fingerling potatoes, boiled",
                        "2 T butter",
                        "freshly ground salt",
                        "freshly ground pepper",
                        "fresh organic lemon wedges for serving, optional",
                        "fresh cilantro for serving, optional"
                    ],
                    "ingredients": [
                        {
                            "text": "1 T smoked paprika",
                            "quantity": 1.0,
                            "measure": "teaspoon",
                            "food": "smoked paprika",
                            "weight": 2.3,
                            "foodCategory": "Condiments and sauces",
                            "foodId": "food_a9dpcnjb883g67b3lq82ca0421ql",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "2 T sweet paprika",
                            "quantity": 2.0,
                            "measure": "teaspoon",
                            "food": "sweet paprika",
                            "weight": 4.6,
                            "foodCategory": "Condiments and sauces",
                            "foodId": "food_a9dpcnjb883g67b3lq82ca0421ql",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "1 t hot paprika",
                            "quantity": 1.0,
                            "measure": "teaspoon",
                            "food": "paprika",
                            "weight": 2.3,
                            "foodCategory": "Condiments and sauces",
                            "foodId": "food_a9dpcnjb883g67b3lq82ca0421ql",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "1 t ground turmeric",
                            "quantity": 1.0,
                            "measure": "teaspoon",
                            "food": "ground turmeric",
                            "weight": 3.0,
                            "foodCategory": "Condiments and sauces",
                            "foodId": "food_bc3ig84amucgmwba3vixyatnyd9b",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "2 pounds boneless pork loin, cubed",
                            "quantity": 2.0,
                            "measure": "pound",
                            "food": "boneless pork loin",
                            "weight": 907.18474,
                            "foodCategory": "meats",
                            "foodId": "food_avagutpasew697bkpd0ylbp099n9",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "½ C white wine vinegar",
                            "quantity": 0.5,
                            "measure": "cup",
                            "food": "white wine vinegar",
                            "weight": 119.0,
                            "foodCategory": "Condiments and sauces",
                            "foodId": "food_ai77igmb8f0rj6blsokr8bxx5n2n",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "2 bay leaves",
                            "quantity": 2.0,
                            "measure": "<unit>",
                            "food": "bay leaves",
                            "weight": 1.2,
                            "foodCategory": "Condiments and sauces",
                            "foodId": "food_asx39x4ayja4jab6ivj6zayvkblo",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "2 T olive oil",
                            "quantity": 2.0,
                            "measure": "teaspoon",
                            "food": "olive oil",
                            "weight": 9.0,
                            "foodCategory": "Oils",
                            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "3 garlic cloves, peeled and minced",
                            "quantity": 3.0,
                            "measure": "clove",
                            "food": "garlic",
                            "weight": 9.0,
                            "foodCategory": "vegetables",
                            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "1 organic white onion, peeled and chopped (approximately 1 C)",
                            "quantity": 1.0,
                            "measure": "<unit>",
                            "food": "white onion",
                            "weight": 125.0,
                            "foodCategory": "vegetables",
                            "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "3 T olive oil",
                            "quantity": 3.0,
                            "measure": "teaspoon",
                            "food": "olive oil",
                            "weight": 13.5,
                            "foodCategory": "Oils",
                            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "2-3 T tomato paste",
                            "quantity": 2.5,
                            "measure": "teaspoon",
                            "food": "tomato paste",
                            "weight": 13.645833334025475,
                            "foodCategory": "canned vegetables",
                            "foodId": "food_auu2atfal07b6gbd1a5wsawy7u0s",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "1 C dry white wine",
                            "quantity": 1.0,
                            "measure": "cup",
                            "food": "dry white wine",
                            "weight": 235.2,
                            "foodCategory": "wines",
                            "foodId": "food_a656mk2a5dmqb2adiamu6beihduu",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "1 T fresh oregano leaves",
                            "quantity": 1.0,
                            "measure": "teaspoon",
                            "food": "oregano",
                            "weight": 1.0,
                            "foodCategory": "Condiments and sauces",
                            "foodId": "food_bkkw6v3bdf0sqiazmzyuiax7i8jr",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "2 pounds clams, scrubbed",
                            "quantity": 2.0,
                            "measure": "pound",
                            "food": "clams",
                            "weight": 907.18474,
                            "foodCategory": "seafood",
                            "foodId": "food_b12syzgajx227eahiup7wb240d41",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "2 pounds fingerling potatoes, boiled",
                            "quantity": 2.0,
                            "measure": "pound",
                            "food": "fingerling",
                            "weight": 907.18474,
                            "foodCategory": "vegetables",
                            "foodId": "food_b5m473aabh39qbbre3ypaa4uwd7j",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "2 T butter",
                            "quantity": 2.0,
                            "measure": "teaspoon",
                            "food": "butter",
                            "weight": 9.458333333813071,
                            "foodCategory": "Dairy",
                            "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "freshly ground salt",
                            "quantity": 0.0,
                            "measure": null,
                            "food": "salt",
                            "weight": 19.660550320007033,
                            "foodCategory": "Condiments and sauces",
                            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "freshly ground pepper",
                            "quantity": 0.0,
                            "measure": null,
                            "food": "pepper",
                            "weight": 9.830275160003517,
                            "foodCategory": "Condiments and sauces",
                            "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "fresh organic lemon wedges for serving, optional",
                            "quantity": 1.0,
                            "measure": "wedge",
                            "food": "lemon",
                            "weight": 7.0,
                            "foodCategory": "fruit",
                            "foodId": "food_a6uzc62astrxcgbtzyq59b6fncrr",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "fresh cilantro for serving, optional",
                            "quantity": 0.0,
                            "measure": null,
                            "food": "cilantro",
                            "weight": 32.767583866678386,
                            "foodCategory": "vegetables",
                            "foodId": "food_alhzhuwb4lc7jnb5s6f02by60bzp",
                            "image": "https://picsum.photos/400/400"
                        }
                    ],
                    "calories": 3616.188162878286,
                    "totalWeight": 3323.565375987677,
                    "totalTime": 0.0,
                    "cuisineType": [
                        "mexican"
                    ],
                    "mealType": [
                        "lunch/dinner"
                    ],
                    "dishType": [
                        "main course"
                    ],
                    "totalNutrients": {
                        "ENERC_KCAL": {
                            "label": "Energy",
                            "quantity": 3616.188162878286,
                            "unit": "kcal"
                        },
                        "FAT": {
                            "label": "Fat",
                            "quantity": 117.43807660204854,
                            "unit": "g"
                        },
                        "FASAT": {
                            "label": "Saturated",
                            "quantity": 24.9076730336157,
                            "unit": "g"
                        },
                        "FATRN": {
                            "label": "Trans",
                            "quantity": 0.9013942476823926,
                            "unit": "g"
                        },
                        "FAMS": {
                            "label": "Monounsaturated",
                            "quantity": 36.78009394170044,
                            "unit": "g"
                        },
                        "FAPU": {
                            "label": "Polyunsaturated",
                            "quantity": 11.65427093439254,
                            "unit": "g"
                        },
                        "CHOCDF": {
                            "label": "Carbs",
                            "quantity": 230.98252267219385,
                            "unit": "g"
                        },
                        "CHOCDF.net": {
                            "label": "Carbohydrates (net)",
                            "quantity": 199.91802726175092,
                            "unit": "g"
                        },
                        "FIBTG": {
                            "label": "Fiber",
                            "quantity": 31.064495410442937,
                            "unit": "g"
                        },
                        "SUGAR": {
                            "label": "Sugars",
                            "quantity": 18.05077021274872,
                            "unit": "g"
                        },
                        "SUGAR.added": {
                            "label": "Sugars, added",
                            "quantity": 0.0,
                            "unit": "g"
                        },
                        "PROCNT": {
                            "label": "Protein",
                            "quantity": 351.3532075808519,
                            "unit": "g"
                        },
                        "CHOLE": {
                            "label": "Cholesterol",
                            "quantity": 873.0890722676983,
                            "unit": "mg"
                        },
                        "NA": {
                            "label": "Sodium",
                            "quantity": 7719.096562237694,
                            "unit": "mg"
                        },
                        "CA": {
                            "label": "Calcium",
                            "quantity": 727.341240620212,
                            "unit": "mg"
                        },
                        "MG": {
                            "label": "Magnesium",
                            "quantity": 696.8097786988408,
                            "unit": "mg"
                        },
                        "K": {
                            "label": "Potassium",
                            "quantity": 8615.568054252428,
                            "unit": "mg"
                        },
                        "FE": {
                            "label": "Iron",
                            "quantity": 34.27056646446469,
                            "unit": "mg"
                        },
                        "ZN": {
                            "label": "Zinc",
                            "quantity": 24.551182496035388,
                            "unit": "mg"
                        },
                        "P": {
                            "label": "Phosphorus",
                            "quantity": 4456.626442076167,
                            "unit": "mg"
                        },
                        "VITA_RAE": {
                            "label": "Vitamin A",
                            "quantity": 1253.9807260610478,
                            "unit": "µg"
                        },
                        "VITC": {
                            "label": "Vitamin C",
                            "quantity": 207.0038789241548,
                            "unit": "mg"
                        },
                        "THIA": {
                            "label": "Thiamin (B1)",
                            "quantity": 4.891701890430584,
                            "unit": "mg"
                        },
                        "RIBF": {
                            "label": "Riboflavin (B2)",
                            "quantity": 2.5983713316865806,
                            "unit": "mg"
                        },
                        "NIA": {
                            "label": "Niacin (B3)",
                            "quantity": 65.63738164070848,
                            "unit": "mg"
                        },
                        "VITB6A": {
                            "label": "Vitamin B6",
                            "quantity": 10.003540440878472,
                            "unit": "mg"
                        },
                        "FOLDFE": {
                            "label": "Folate equivalent (total)",
                            "quantity": 251.19709417463866,
                            "unit": "µg"
                        },
                        "FOLFD": {
                            "label": "Folate (food)",
                            "quantity": 251.19709417463866,
                            "unit": "µg"
                        },
                        "FOLAC": {
                            "label": "Folic acid",
                            "quantity": 0.0,
                            "unit": "µg"
                        },
                        "VITB12": {
                            "label": "Vitamin B12",
                            "quantity": 107.24531543466749,
                            "unit": "µg"
                        },
                        "VITD": {
                            "label": "Vitamin D",
                            "quantity": 4.677798700007196,
                            "unit": "µg"
                        },
                        "TOCPHA": {
                            "label": "Vitamin E",
                            "quantity": 15.339975019038558,
                            "unit": "mg"
                        },
                        "VITK1": {
                            "label": "Vitamin K",
                            "quantity": 168.0856582970746,
                            "unit": "µg"
                        },
                        "Sugar.alcohol": {
                            "label": "Sugar alcohol",
                            "quantity": 0.0,
                            "unit": "g"
                        },
                        "WATER": {
                            "label": "Water",
                            "quantity": 2557.2844091335814,
                            "unit": "g"
                        }
                    },
                    "totalDaily": {
                        "ENERC_KCAL": {
                            "label": "Energy",
                            "quantity": 180.8094081439143,
                            "unit": "%"
                        },
                        "FAT": {
                            "label": "Fat",
                            "quantity": 180.67396400315158,
                            "unit": "%"
                        },
                        "FASAT": {
                            "label": "Saturated",
                            "quantity": 124.53836516807851,
                            "unit": "%"
                        },
                        "CHOCDF": {
                            "label": "Carbs",
                            "quantity": 76.99417422406462,
                            "unit": "%"
                        },
                        "FIBTG": {
                            "label": "Fiber",
                            "quantity": 124.25798164177175,
                            "unit": "%"
                        },
                        "PROCNT": {
                            "label": "Protein",
                            "quantity": 702.7064151617037,
                            "unit": "%"
                        },
                        "CHOLE": {
                            "label": "Cholesterol",
                            "quantity": 291.0296907558994,
                            "unit": "%"
                        },
                        "NA": {
                            "label": "Sodium",
                            "quantity": 321.6290234265706,
                            "unit": "%"
                        },
                        "CA": {
                            "label": "Calcium",
                            "quantity": 72.73412406202121,
                            "unit": "%"
                        },
                        "MG": {
                            "label": "Magnesium",
                            "quantity": 165.90709016639067,
                            "unit": "%"
                        },
                        "K": {
                            "label": "Potassium",
                            "quantity": 183.30995860111548,
                            "unit": "%"
                        },
                        "FE": {
                            "label": "Iron",
                            "quantity": 190.39203591369272,
                            "unit": "%"
                        },
                        "ZN": {
                            "label": "Zinc",
                            "quantity": 223.19256814577628,
                            "unit": "%"
                        },
                        "P": {
                            "label": "Phosphorus",
                            "quantity": 636.6609202965954,
                            "unit": "%"
                        },
                        "VITA_RAE": {
                            "label": "Vitamin A",
                            "quantity": 139.33119178456087,
                            "unit": "%"
                        },
                        "VITC": {
                            "label": "Vitamin C",
                            "quantity": 230.00430991572756,
                            "unit": "%"
                        },
                        "THIA": {
                            "label": "Thiamin (B1)",
                            "quantity": 407.64182420254866,
                            "unit": "%"
                        },
                        "RIBF": {
                            "label": "Riboflavin (B2)",
                            "quantity": 199.87471782204466,
                            "unit": "%"
                        },
                        "NIA": {
                            "label": "Niacin (B3)",
                            "quantity": 410.233635254428,
                            "unit": "%"
                        },
                        "VITB6A": {
                            "label": "Vitamin B6",
                            "quantity": 769.5031108368055,
                            "unit": "%"
                        },
                        "FOLDFE": {
                            "label": "Folate equivalent (total)",
                            "quantity": 62.799273543659666,
                            "unit": "%"
                        },
                        "VITB12": {
                            "label": "Vitamin B12",
                            "quantity": 4468.554809777812,
                            "unit": "%"
                        },
                        "VITD": {
                            "label": "Vitamin D",
                            "quantity": 31.185324666714642,
                            "unit": "%"
                        },
                        "TOCPHA": {
                            "label": "Vitamin E",
                            "quantity": 102.26650012692373,
                            "unit": "%"
                        },
                        "VITK1": {
                            "label": "Vitamin K",
                            "quantity": 140.07138191422882,
                            "unit": "%"
                        }
                    },
                    "digest": [
                        {
                            "label": "Fat",
                            "tag": "FAT",
                            "schemaOrgTag": "fatContent",
                            "total": 117.43807660204854,
                            "hasRDI": true,
                            "daily": 180.67396400315158,
                            "unit": "g",
                            "sub": [
                                {
                                    "label": "Saturated",
                                    "tag": "FASAT",
                                    "schemaOrgTag": "saturatedFatContent",
                                    "total": 24.9076730336157,
                                    "hasRDI": true,
                                    "daily": 124.53836516807851,
                                    "unit": "g"
                                },
                                {
                                    "label": "Trans",
                                    "tag": "FATRN",
                                    "schemaOrgTag": "transFatContent",
                                    "total": 0.9013942476823926,
                                    "hasRDI": false,
                                    "daily": 0.0,
                                    "unit": "g"
                                },
                                {
                                    "label": "Monounsaturated",
                                    "tag": "FAMS",
                                    "schemaOrgTag": null,
                                    "total": 36.78009394170044,
                                    "hasRDI": false,
                                    "daily": 0.0,
                                    "unit": "g"
                                },
                                {
                                    "label": "Polyunsaturated",
                                    "tag": "FAPU",
                                    "schemaOrgTag": null,
                                    "total": 11.65427093439254,
                                    "hasRDI": false,
                                    "daily": 0.0,
                                    "unit": "g"
                                }
                            ]
                        },
                        {
                            "label": "Carbs",
                            "tag": "CHOCDF",
                            "schemaOrgTag": "carbohydrateContent",
                            "total": 230.98252267219385,
                            "hasRDI": true,
                            "daily": 76.99417422406462,
                            "unit": "g",
                            "sub": [
                                {
                                    "label": "Carbs (net)",
                                    "tag": "CHOCDF.net",
                                    "schemaOrgTag": null,
                                    "total": 199.91802726175092,
                                    "hasRDI": false,
                                    "daily": 0.0,
                                    "unit": "g"
                                },
                                {
                                    "label": "Fiber",
                                    "tag": "FIBTG",
                                    "schemaOrgTag": "fiberContent",
                                    "total": 31.064495410442937,
                                    "hasRDI": true,
                                    "daily": 124.25798164177175,
                                    "unit": "g"
                                },
                                {
                                    "label": "Sugars",
                                    "tag": "SUGAR",
                                    "schemaOrgTag": "sugarContent",
                                    "total": 18.05077021274872,
                                    "hasRDI": false,
                                    "daily": 0.0,
                                    "unit": "g"
                                },
                                {
                                    "label": "Sugars, added",
                                    "tag": "SUGAR.added",
                                    "schemaOrgTag": null,
                                    "total": 0.0,
                                    "hasRDI": false,
                                    "daily": 0.0,
                                    "unit": "g"
                                }
                            ]
                        },
                        {
                            "label": "Protein",
                            "tag": "PROCNT",
                            "schemaOrgTag": "proteinContent",
                            "total": 351.3532075808519,
                            "hasRDI": true,
                            "daily": 702.7064151617037,
                            "unit": "g"
                        },
                        {
                            "label": "Cholesterol",
                            "tag": "CHOLE",
                            "schemaOrgTag": "cholesterolContent",
                            "total": 873.0890722676983,
                            "hasRDI": true,
                            "daily": 291.0296907558994,
                            "unit": "mg"
                        },
                        {
                            "label": "Sodium",
                            "tag": "NA",
                            "schemaOrgTag": "sodiumContent",
                            "total": 7719.096562237694,
                            "hasRDI": true,
                            "daily": 321.6290234265706,
                            "unit": "mg"
                        },
                        {
                            "label": "Calcium",
                            "tag": "CA",
                            "schemaOrgTag": null,
                            "total": 727.341240620212,
                            "hasRDI": true,
                            "daily": 72.73412406202121,
                            "unit": "mg"
                        },
                        {
                            "label": "Magnesium",
                            "tag": "MG",
                            "schemaOrgTag": null,
                            "total": 696.8097786988408,
                            "hasRDI": true,
                            "daily": 165.90709016639067,
                            "unit": "mg"
                        },
                        {
                            "label": "Potassium",
                            "tag": "K",
                            "schemaOrgTag": null,
                            "total": 8615.568054252428,
                            "hasRDI": true,
                            "daily": 183.30995860111548,
                            "unit": "mg"
                        },
                        {
                            "label": "Iron",
                            "tag": "FE",
                            "schemaOrgTag": null,
                            "total": 34.27056646446469,
                            "hasRDI": true,
                            "daily": 190.39203591369272,
                            "unit": "mg"
                        },
                        {
                            "label": "Zinc",
                            "tag": "ZN",
                            "schemaOrgTag": null,
                            "total": 24.551182496035388,
                            "hasRDI": true,
                            "daily": 223.19256814577628,
                            "unit": "mg"
                        },
                        {
                            "label": "Phosphorus",
                            "tag": "P",
                            "schemaOrgTag": null,
                            "total": 4456.626442076167,
                            "hasRDI": true,
                            "daily": 636.6609202965954,
                            "unit": "mg"
                        },
                        {
                            "label": "Vitamin A",
                            "tag": "VITA_RAE",
                            "schemaOrgTag": null,
                            "total": 1253.9807260610478,
                            "hasRDI": true,
                            "daily": 139.33119178456087,
                            "unit": "µg"
                        },
                        {
                            "label": "Vitamin C",
                            "tag": "VITC",
                            "schemaOrgTag": null,
                            "total": 207.0038789241548,
                            "hasRDI": true,
                            "daily": 230.00430991572756,
                            "unit": "mg"
                        },
                        {
                            "label": "Thiamin (B1)",
                            "tag": "THIA",
                            "schemaOrgTag": null,
                            "total": 4.891701890430584,
                            "hasRDI": true,
                            "daily": 407.64182420254866,
                            "unit": "mg"
                        },
                        {
                            "label": "Riboflavin (B2)",
                            "tag": "RIBF",
                            "schemaOrgTag": null,
                            "total": 2.5983713316865806,
                            "hasRDI": true,
                            "daily": 199.87471782204466,
                            "unit": "mg"
                        },
                        {
                            "label": "Niacin (B3)",
                            "tag": "NIA",
                            "schemaOrgTag": null,
                            "total": 65.63738164070848,
                            "hasRDI": true,
                            "daily": 410.233635254428,
                            "unit": "mg"
                        },
                        {
                            "label": "Vitamin B6",
                            "tag": "VITB6A",
                            "schemaOrgTag": null,
                            "total": 10.003540440878472,
                            "hasRDI": true,
                            "daily": 769.5031108368055,
                            "unit": "mg"
                        },
                        {
                            "label": "Folate equivalent (total)",
                            "tag": "FOLDFE",
                            "schemaOrgTag": null,
                            "total": 251.19709417463866,
                            "hasRDI": true,
                            "daily": 62.799273543659666,
                            "unit": "µg"
                        },
                        {
                            "label": "Folate (food)",
                            "tag": "FOLFD",
                            "schemaOrgTag": null,
                            "total": 251.19709417463866,
                            "hasRDI": false,
                            "daily": 0.0,
                            "unit": "µg"
                        },
                        {
                            "label": "Folic acid",
                            "tag": "FOLAC",
                            "schemaOrgTag": null,
                            "total": 0.0,
                            "hasRDI": false,
                            "daily": 0.0,
                            "unit": "µg"
                        },
                        {
                            "label": "Vitamin B12",
                            "tag": "VITB12",
                            "schemaOrgTag": null,
                            "total": 107.24531543466749,
                            "hasRDI": true,
                            "daily": 4468.554809777812,
                            "unit": "µg"
                        },
                        {
                            "label": "Vitamin D",
                            "tag": "VITD",
                            "schemaOrgTag": null,
                            "total": 4.677798700007196,
                            "hasRDI": true,
                            "daily": 31.185324666714642,
                            "unit": "µg"
                        },
                        {
                            "label": "Vitamin E",
                            "tag": "TOCPHA",
                            "schemaOrgTag": null,
                            "total": 15.339975019038558,
                            "hasRDI": true,
                            "daily": 102.26650012692373,
                            "unit": "mg"
                        },
                        {
                            "label": "Vitamin K",
                            "tag": "VITK1",
                            "schemaOrgTag": null,
                            "total": 168.0856582970746,
                            "hasRDI": true,
                            "daily": 140.07138191422882,
                            "unit": "µg"
                        },
                        {
                            "label": "Sugar alcohols",
                            "tag": "Sugar.alcohol",
                            "schemaOrgTag": null,
                            "total": 0.0,
                            "hasRDI": false,
                            "daily": 0.0,
                            "unit": "g"
                        },
                        {
                            "label": "Water",
                            "tag": "WATER",
                            "schemaOrgTag": null,
                            "total": 2557.2844091335814,
                            "hasRDI": false,
                            "daily": 0.0,
                            "unit": "g"
                        }
                    ]
                }
            },
            {
                "recipe": {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_10dd77ab462c429dc85529732b4afddc",
                    "label": "Carne De Porco A La Antejana",
                    "image": "https://picsum.photos/800/600",
                    "source": "Foodista",
                    "url": "http://www.foodista.com/recipe/BVJQ7RGT/carne-de-porco-a-la-antejana",
                    "shareAs": "http://www.edamam.com/recipe/carne-de-porco-a-la-antejana-10dd77ab462c429dc85529732b4afddc/carne+de+porco",
                    "yield": 6.0,
                    "dietLabels": [],
                    "healthLabels": [
                        "Dairy-Free",
                        "Gluten-Free",
                        "Wheat-Free",
                        "Egg-Free",
                        "Peanut-Free",
                        "Tree-Nut-Free",
                        "Soy-Free",
                        "Fish-Free",
                        "Crustacean-Free",
                        "Celery-Free",
                        "Mustard-Free",
                        "Sesame-Free",
                        "Lupine-Free",
                        "No oil added"
                    ],
                    "cautions": [
                        "Sulfites"
                    ],
                    "ingredientLines": [
                        "3 pounds pork loin cut, into 1-inch cubes",
                        "Pork Seasonings (see below)",
                        "1 large large onion or 2 small onions, chopped",
                        "3 cloves of garlic, chopped",
                        "3 bay leaves, crushed",
                        "2 tablespoons tomato paste",
                        "2 1/2 cups dry white wine",
                        "30 mahogany clams",
                        "parsley",
                        "salt and pepper, to taste",
                        "Pork Seasonings :",
                        "2 teaspoons paprika",
                        "2 teaspoons salt",
                        "1 teaspoon cayenne pepper",
                        "1 teaspoon garlic powder",
                        "1 teaspoon onion powder",
                        "1 teaspoon cracked black pepper",
                        "1 teaspoon dried thyme",
                        "1 teaspoon dried oregano"
                    ],
                    "ingredients": [
                        {
                            "text": "3 pounds pork loin cut, into 1-inch cubes",
                            "quantity": 3.0,
                            "measure": "pound",
                            "food": "pork loin",
                            "weight": 1360.77711,
                            "foodCategory": "meats",
                            "foodId": "food_aisetlvawqaqp8a2uc28uaf46l5m",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "Pork Seasonings (see below)",
                            "quantity": 0.0,
                            "measure": null,
                            "food": "Pork",
                            "weight": 0.0,
                            "foodCategory": "meats",
                            "foodId": "food_aisetlvawqaqp8a2uc28uaf46l5m",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "Pork Seasonings (see below)",
                            "quantity": 0.0,
                            "measure": null,
                            "food": "Seasonings",
                            "weight": 0.0,
                            "foodCategory": "Condiments and sauces",
                            "foodId": "food_aj7w3xab0epj7cbgkbkpwadysovd",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "1 large large onion or 2 small onions, chopped",
                            "quantity": 1.0,
                            "measure": "onion",
                            "food": "onions",
                            "weight": 146.484375,
                            "foodCategory": "vegetables",
                            "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "3 cloves of garlic, chopped",
                            "quantity": 3.0,
                            "measure": "clove",
                            "food": "garlic",
                            "weight": 9.0,
                            "foodCategory": "vegetables",
                            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "3 bay leaves, crushed",
                            "quantity": 3.0,
                            "measure": "<unit>",
                            "food": "bay leaves",
                            "weight": 1.7999999999999998,
                            "foodCategory": "Condiments and sauces",
                            "foodId": "food_asx39x4ayja4jab6ivj6zayvkblo",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "2 tablespoons tomato paste",
                            "quantity": 2.0,
                            "measure": "tablespoon",
                            "food": "tomato paste",
                            "weight": 32.0,
                            "foodCategory": "canned vegetables",
                            "foodId": "food_auu2atfal07b6gbd1a5wsawy7u0s",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "2 1/2 cups dry white wine",
                            "quantity": 2.5,
                            "measure": "cup",
                            "food": "dry white wine",
                            "weight": 588.0,
                            "foodCategory": "wines",
                            "foodId": "food_a656mk2a5dmqb2adiamu6beihduu",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "30 mahogany clams",
                            "quantity": 30.0,
                            "measure": "<unit>",
                            "food": "mahogany clams",
                            "weight": 435.0,
                            "foodCategory": "seafood",
                            "foodId": "food_b12syzgajx227eahiup7wb240d41",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "parsley",
                            "quantity": 0.0,
                            "measure": null,
                            "food": "parsley",
                            "weight": 26.018614850000006,
                            "foodCategory": "vegetables",
                            "foodId": "food_b244pqdazw24zobr5vqu2bf0uid8",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "salt and pepper, to taste",
                            "quantity": 0.0,
                            "measure": null,
                            "food": "salt",
                            "weight": 15.611168910000002,
                            "foodCategory": "Condiments and sauces",
                            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "salt and pepper, to taste",
                            "quantity": 0.0,
                            "measure": null,
                            "food": "pepper",
                            "weight": 7.805584455000001,
                            "foodCategory": "Condiments and sauces",
                            "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "2 teaspoons paprika",
                            "quantity": 2.0,
                            "measure": "teaspoon",
                            "food": "paprika",
                            "weight": 4.6,
                            "foodCategory": "Condiments and sauces",
                            "foodId": "food_a9dpcnjb883g67b3lq82ca0421ql",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "2 teaspoons salt",
                            "quantity": 2.0,
                            "measure": "teaspoon",
                            "food": "salt",
                            "weight": 12.0,
                            "foodCategory": "Condiments and sauces",
                            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "1 teaspoon cayenne pepper",
                            "quantity": 1.0,
                            "measure": "teaspoon",
                            "food": "cayenne pepper",
                            "weight": 1.8,
                            "foodCategory": "Condiments and sauces",
                            "foodId": "food_a8iooz3aris8gba605l07brngnrx",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "1 teaspoon garlic powder",
                            "quantity": 1.0,
                            "measure": "teaspoon",
                            "food": "garlic powder",
                            "weight": 3.1,
                            "foodCategory": "Condiments and sauces",
                            "foodId": "food_boq94r1a036492bdup9u1beyph0l",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "1 teaspoon onion powder",
                            "quantity": 1.0,
                            "measure": "teaspoon",
                            "food": "onion powder",
                            "weight": 2.4,
                            "foodCategory": "Condiments and sauces",
                            "foodId": "food_bmv8z27b1o25vcbu41ooyawd2zj4",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "1 teaspoon cracked black pepper",
                            "quantity": 1.0,
                            "measure": "teaspoon",
                            "food": "black pepper",
                            "weight": 2.9,
                            "foodCategory": "Condiments and sauces",
                            "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "1 teaspoon dried thyme",
                            "quantity": 1.0,
                            "measure": "teaspoon",
                            "food": "dried thyme",
                            "weight": 1.0,
                            "foodCategory": "Condiments and sauces",
                            "foodId": "food_avsq22zadwyb5cb5sl1byaa4mbo8",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "1 teaspoon dried oregano",
                            "quantity": 1.0,
                            "measure": "teaspoon",
                            "food": "dried oregano",
                            "weight": 1.0,
                            "foodCategory": "Condiments and sauces",
                            "foodId": "food_bkkw6v3bdf0sqiazmzyuiax7i8jr",
                            "image": "https://picsum.photos/400/400"
                        }
                    ],
                    "calories": 3733.2651461280507,
                    "totalWeight": 2630.1147960082117,
                    "totalTime": 0.0,
                    "cuisineType": [
                        "american"
                    ],
                    "mealType": [
                        "lunch/dinner"
                    ],
                    "dishType": [
                        "main course"
                    ],
                    "totalNutrients": {
                        "ENERC_KCAL": {
                            "label": "Energy",
                            "quantity": 3733.2651461280507,
                            "unit": "kcal"
                        },
                        "FAT": {
                            "label": "Fat",
                            "quantity": 177.47716392354792,
                            "unit": "g"
                        },
                        "FASAT": {
                            "label": "Saturated",
                            "quantity": 60.682176740715605,
                            "unit": "g"
                        },
                        "FATRN": {
                            "label": "Trans",
                            "quantity": 0.06525,
                            "unit": "g"
                        },
                        "FAMS": {
                            "label": "Monounsaturated",
                            "quantity": 77.23620102267996,
                            "unit": "g"
                        },
                        "FAPU": {
                            "label": "Polyunsaturated",
                            "quantity": 19.8945744330249,
                            "unit": "g"
                        },
                        "CHOCDF": {
                            "label": "Carbs",
                            "quantity": 72.35339020397751,
                            "unit": "g"
                        },
                        "CHOCDF.net": {
                            "label": "Carbohydrates (net)",
                            "quantity": 60.78782867181252,
                            "unit": "g"
                        },
                        "FIBTG": {
                            "label": "Fiber",
                            "quantity": 11.565561532165,
                            "unit": "g"
                        },
                        "SUGAR": {
                            "label": "Sugars",
                            "quantity": 17.087221466737002,
                            "unit": "g"
                        },
                        "SUGAR.added": {
                            "label": "Sugars, added",
                            "quantity": 0.0,
                            "unit": "g"
                        },
                        "PROCNT": {
                            "label": "Protein",
                            "quantity": 340.2422827249195,
                            "unit": "g"
                        },
                        "CHOLE": {
                            "label": "Cholesterol",
                            "quantity": 987.7895793,
                            "unit": "mg"
                        },
                        "NA": {
                            "label": "Sodium",
                            "quantity": 6101.328585137593,
                            "unit": "mg"
                        },
                        "CA": {
                            "label": "Calcium",
                            "quantity": 688.6307004874207,
                            "unit": "mg"
                        },
                        "MG": {
                            "label": "Magnesium",
                            "quantity": 512.014778560082,
                            "unit": "mg"
                        },
                        "K": {
                            "label": "Potassium",
                            "quantity": 6555.33537171221,
                            "unit": "mg"
                        },
                        "FE": {
                            "label": "Iron",
                            "quantity": 27.23242879640109,
                            "unit": "mg"
                        },
                        "ZN": {
                            "label": "Zinc",
                            "quantity": 28.15787989711272,
                            "unit": "mg"
                        },
                        "P": {
                            "label": "Phosphorus",
                            "quantity": 3808.4909955019,
                            "unit": "mg"
                        },
                        "VITA_RAE": {
                            "label": "Vitamin A",
                            "quantity": 714.5324185213501,
                            "unit": "µg"
                        },
                        "VITC": {
                            "label": "Vitamin C",
                            "quantity": 66.80066416049999,
                            "unit": "mg"
                        },
                        "THIA": {
                            "label": "Thiamin (B1)",
                            "quantity": 12.546371613582401,
                            "unit": "mg"
                        },
                        "RIBF": {
                            "label": "Riboflavin (B2)",
                            "quantity": 3.876367308622,
                            "unit": "mg"
                        },
                        "NIA": {
                            "label": "Niacin (B3)",
                            "quantity": 66.94601075630115,
                            "unit": "mg"
                        },
                        "VITB6A": {
                            "label": "Vitamin B6",
                            "quantity": 7.4293412133290495,
                            "unit": "mg"
                        },
                        "FOLDFE": {
                            "label": "Folate equivalent (total)",
                            "quantity": 130.05304627935,
                            "unit": "µg"
                        },
                        "FOLFD": {
                            "label": "Folate (food)",
                            "quantity": 130.05304627935,
                            "unit": "µg"
                        },
                        "FOLAC": {
                            "label": "Folic acid",
                            "quantity": 0.0,
                            "unit": "µg"
                        },
                        "VITB12": {
                            "label": "Vitamin B12",
                            "quantity": 56.28011868300001,
                            "unit": "µg"
                        },
                        "VITD": {
                            "label": "Vitamin D",
                            "quantity": 6.80388555,
                            "unit": "µg"
                        },
                        "TOCPHA": {
                            "label": "Vitamin E",
                            "quantity": 9.694796495707001,
                            "unit": "mg"
                        },
                        "VITK1": {
                            "label": "Vitamin K",
                            "quantity": 480.4512627928351,
                            "unit": "µg"
                        },
                        "Sugar.alcohol": {
                            "label": "Sugar alcohol",
                            "quantity": 0.0,
                            "unit": "g"
                        },
                        "WATER": {
                            "label": "Water",
                            "quantity": 1949.6903397059343,
                            "unit": "g"
                        }
                    },
                    "totalDaily": {
                        "ENERC_KCAL": {
                            "label": "Energy",
                            "quantity": 186.66325730640253,
                            "unit": "%"
                        },
                        "FAT": {
                            "label": "Fat",
                            "quantity": 273.0417906516122,
                            "unit": "%"
                        },
                        "FASAT": {
                            "label": "Saturated",
                            "quantity": 303.410883703578,
                            "unit": "%"
                        },
                        "CHOCDF": {
                            "label": "Carbs",
                            "quantity": 24.117796734659173,
                            "unit": "%"
                        },
                        "FIBTG": {
                            "label": "Fiber",
                            "quantity": 46.262246128659996,
                            "unit": "%"
                        },
                        "PROCNT": {
                            "label": "Protein",
                            "quantity": 680.484565449839,
                            "unit": "%"
                        },
                        "CHOLE": {
                            "label": "Cholesterol",
                            "quantity": 329.2631931,
                            "unit": "%"
                        },
                        "NA": {
                            "label": "Sodium",
                            "quantity": 254.22202438073305,
                            "unit": "%"
                        },
                        "CA": {
                            "label": "Calcium",
                            "quantity": 68.86307004874207,
                            "unit": "%"
                        },
                        "MG": {
                            "label": "Magnesium",
                            "quantity": 121.90828060954334,
                            "unit": "%"
                        },
                        "K": {
                            "label": "Potassium",
                            "quantity": 139.47522067472786,
                            "unit": "%"
                        },
                        "FE": {
                            "label": "Iron",
                            "quantity": 151.29127109111718,
                            "unit": "%"
                        },
                        "ZN": {
                            "label": "Zinc",
                            "quantity": 255.98072633738838,
                            "unit": "%"
                        },
                        "P": {
                            "label": "Phosphorus",
                            "quantity": 544.0701422145572,
                            "unit": "%"
                        },
                        "VITA_RAE": {
                            "label": "Vitamin A",
                            "quantity": 79.39249094681668,
                            "unit": "%"
                        },
                        "VITC": {
                            "label": "Vitamin C",
                            "quantity": 74.22296017833332,
                            "unit": "%"
                        },
                        "THIA": {
                            "label": "Thiamin (B1)",
                            "quantity": 1045.5309677985335,
                            "unit": "%"
                        },
                        "RIBF": {
                            "label": "Riboflavin (B2)",
                            "quantity": 298.18210066323076,
                            "unit": "%"
                        },
                        "NIA": {
                            "label": "Niacin (B3)",
                            "quantity": 418.4125672268822,
                            "unit": "%"
                        },
                        "VITB6A": {
                            "label": "Vitamin B6",
                            "quantity": 571.4877856406961,
                            "unit": "%"
                        },
                        "FOLDFE": {
                            "label": "Folate equivalent (total)",
                            "quantity": 32.5132615698375,
                            "unit": "%"
                        },
                        "VITB12": {
                            "label": "Vitamin B12",
                            "quantity": 2345.0049451250006,
                            "unit": "%"
                        },
                        "VITD": {
                            "label": "Vitamin D",
                            "quantity": 45.359237,
                            "unit": "%"
                        },
                        "TOCPHA": {
                            "label": "Vitamin E",
                            "quantity": 64.63197663804667,
                            "unit": "%"
                        },
                        "VITK1": {
                            "label": "Vitamin K",
                            "quantity": 400.3760523273626,
                            "unit": "%"
                        }
                    },
                    "digest": [
                        {
                            "label": "Fat",
                            "tag": "FAT",
                            "schemaOrgTag": "fatContent",
                            "total": 177.47716392354792,
                            "hasRDI": true,
                            "daily": 273.0417906516122,
                            "unit": "g",
                            "sub": [
                                {
                                    "label": "Saturated",
                                    "tag": "FASAT",
                                    "schemaOrgTag": "saturatedFatContent",
                                    "total": 60.682176740715605,
                                    "hasRDI": true,
                                    "daily": 303.410883703578,
                                    "unit": "g"
                                },
                                {
                                    "label": "Trans",
                                    "tag": "FATRN",
                                    "schemaOrgTag": "transFatContent",
                                    "total": 0.06525,
                                    "hasRDI": false,
                                    "daily": 0.0,
                                    "unit": "g"
                                },
                                {
                                    "label": "Monounsaturated",
                                    "tag": "FAMS",
                                    "schemaOrgTag": null,
                                    "total": 77.23620102267996,
                                    "hasRDI": false,
                                    "daily": 0.0,
                                    "unit": "g"
                                },
                                {
                                    "label": "Polyunsaturated",
                                    "tag": "FAPU",
                                    "schemaOrgTag": null,
                                    "total": 19.8945744330249,
                                    "hasRDI": false,
                                    "daily": 0.0,
                                    "unit": "g"
                                }
                            ]
                        },
                        {
                            "label": "Carbs",
                            "tag": "CHOCDF",
                            "schemaOrgTag": "carbohydrateContent",
                            "total": 72.35339020397751,
                            "hasRDI": true,
                            "daily": 24.117796734659173,
                            "unit": "g",
                            "sub": [
                                {
                                    "label": "Carbs (net)",
                                    "tag": "CHOCDF.net",
                                    "schemaOrgTag": null,
                                    "total": 60.78782867181252,
                                    "hasRDI": false,
                                    "daily": 0.0,
                                    "unit": "g"
                                },
                                {
                                    "label": "Fiber",
                                    "tag": "FIBTG",
                                    "schemaOrgTag": "fiberContent",
                                    "total": 11.565561532165,
                                    "hasRDI": true,
                                    "daily": 46.262246128659996,
                                    "unit": "g"
                                },
                                {
                                    "label": "Sugars",
                                    "tag": "SUGAR",
                                    "schemaOrgTag": "sugarContent",
                                    "total": 17.087221466737002,
                                    "hasRDI": false,
                                    "daily": 0.0,
                                    "unit": "g"
                                },
                                {
                                    "label": "Sugars, added",
                                    "tag": "SUGAR.added",
                                    "schemaOrgTag": null,
                                    "total": 0.0,
                                    "hasRDI": false,
                                    "daily": 0.0,
                                    "unit": "g"
                                }
                            ]
                        },
                        {
                            "label": "Protein",
                            "tag": "PROCNT",
                            "schemaOrgTag": "proteinContent",
                            "total": 340.2422827249195,
                            "hasRDI": true,
                            "daily": 680.484565449839,
                            "unit": "g"
                        },
                        {
                            "label": "Cholesterol",
                            "tag": "CHOLE",
                            "schemaOrgTag": "cholesterolContent",
                            "total": 987.7895793,
                            "hasRDI": true,
                            "daily": 329.2631931,
                            "unit": "mg"
                        },
                        {
                            "label": "Sodium",
                            "tag": "NA",
                            "schemaOrgTag": "sodiumContent",
                            "total": 6101.328585137593,
                            "hasRDI": true,
                            "daily": 254.22202438073305,
                            "unit": "mg"
                        },
                        {
                            "label": "Calcium",
                            "tag": "CA",
                            "schemaOrgTag": null,
                            "total": 688.6307004874207,
                            "hasRDI": true,
                            "daily": 68.86307004874207,
                            "unit": "mg"
                        },
                        {
                            "label": "Magnesium",
                            "tag": "MG",
                            "schemaOrgTag": null,
                            "total": 512.014778560082,
                            "hasRDI": true,
                            "daily": 121.90828060954334,
                            "unit": "mg"
                        },
                        {
                            "label": "Potassium",
                            "tag": "K",
                            "schemaOrgTag": null,
                            "total": 6555.33537171221,
                            "hasRDI": true,
                            "daily": 139.47522067472786,
                            "unit": "mg"
                        },
                        {
                            "label": "Iron",
                            "tag": "FE",
                            "schemaOrgTag": null,
                            "total": 27.23242879640109,
                            "hasRDI": true,
                            "daily": 151.29127109111718,
                            "unit": "mg"
                        },
                        {
                            "label": "Zinc",
                            "tag": "ZN",
                            "schemaOrgTag": null,
                            "total": 28.15787989711272,
                            "hasRDI": true,
                            "daily": 255.98072633738838,
                            "unit": "mg"
                        },
                        {
                            "label": "Phosphorus",
                            "tag": "P",
                            "schemaOrgTag": null,
                            "total": 3808.4909955019,
                            "hasRDI": true,
                            "daily": 544.0701422145572,
                            "unit": "mg"
                        },
                        {
                            "label": "Vitamin A",
                            "tag": "VITA_RAE",
                            "schemaOrgTag": null,
                            "total": 714.5324185213501,
                            "hasRDI": true,
                            "daily": 79.39249094681668,
                            "unit": "µg"
                        },
                        {
                            "label": "Vitamin C",
                            "tag": "VITC",
                            "schemaOrgTag": null,
                            "total": 66.80066416049999,
                            "hasRDI": true,
                            "daily": 74.22296017833332,
                            "unit": "mg"
                        },
                        {
                            "label": "Thiamin (B1)",
                            "tag": "THIA",
                            "schemaOrgTag": null,
                            "total": 12.546371613582401,
                            "hasRDI": true,
                            "daily": 1045.5309677985335,
                            "unit": "mg"
                        },
                        {
                            "label": "Riboflavin (B2)",
                            "tag": "RIBF",
                            "schemaOrgTag": null,
                            "total": 3.876367308622,
                            "hasRDI": true,
                            "daily": 298.18210066323076,
                            "unit": "mg"
                        },
                        {
                            "label": "Niacin (B3)",
                            "tag": "NIA",
                            "schemaOrgTag": null,
                            "total": 66.94601075630115,
                            "hasRDI": true,
                            "daily": 418.4125672268822,
                            "unit": "mg"
                        },
                        {
                            "label": "Vitamin B6",
                            "tag": "VITB6A",
                            "schemaOrgTag": null,
                            "total": 7.4293412133290495,
                            "hasRDI": true,
                            "daily": 571.4877856406961,
                            "unit": "mg"
                        },
                        {
                            "label": "Folate equivalent (total)",
                            "tag": "FOLDFE",
                            "schemaOrgTag": null,
                            "total": 130.05304627935,
                            "hasRDI": true,
                            "daily": 32.5132615698375,
                            "unit": "µg"
                        },
                        {
                            "label": "Folate (food)",
                            "tag": "FOLFD",
                            "schemaOrgTag": null,
                            "total": 130.05304627935,
                            "hasRDI": false,
                            "daily": 0.0,
                            "unit": "µg"
                        },
                        {
                            "label": "Folic acid",
                            "tag": "FOLAC",
                            "schemaOrgTag": null,
                            "total": 0.0,
                            "hasRDI": false,
                            "daily": 0.0,
                            "unit": "µg"
                        },
                        {
                            "label": "Vitamin B12",
                            "tag": "VITB12",
                            "schemaOrgTag": null,
                            "total": 56.28011868300001,
                            "hasRDI": true,
                            "daily": 2345.0049451250006,
                            "unit": "µg"
                        },
                        {
                            "label": "Vitamin D",
                            "tag": "VITD",
                            "schemaOrgTag": null,
                            "total": 6.80388555,
                            "hasRDI": true,
                            "daily": 45.359237,
                            "unit": "µg"
                        },
                        {
                            "label": "Vitamin E",
                            "tag": "TOCPHA",
                            "schemaOrgTag": null,
                            "total": 9.694796495707001,
                            "hasRDI": true,
                            "daily": 64.63197663804667,
                            "unit": "mg"
                        },
                        {
                            "label": "Vitamin K",
                            "tag": "VITK1",
                            "schemaOrgTag": null,
                            "total": 480.4512627928351,
                            "hasRDI": true,
                            "daily": 400.3760523273626,
                            "unit": "µg"
                        },
                        {
                            "label": "Sugar alcohols",
                            "tag": "Sugar.alcohol",
                            "schemaOrgTag": null,
                            "total": 0.0,
                            "hasRDI": false,
                            "daily": 0.0,
                            "unit": "g"
                        },
                        {
                            "label": "Water",
                            "tag": "WATER",
                            "schemaOrgTag": null,
                            "total": 1949.6903397059343,
                            "hasRDI": false,
                            "daily": 0.0,
                            "unit": "g"
                        }
                    ]
                }
            },
            {
                "recipe": {
                    "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_165032315f38620829119425c3a88c47",
                    "label": "Pork and Clams (Carne de Porco e Amêijoas) Recipe",
                    "image": "https://picsum.photos/800/600",
                    "source": "familycookbookproject.com",
                    "url": "https://familycookbookproject.com/recipe/3995396/pork-and-clams-carne-de-porco-e-amijoas.html",
                    "shareAs": "http://www.edamam.com/recipe/pork-and-clams-carne-de-porco-e-am%C3%AAijoas-recipe-165032315f38620829119425c3a88c47/carne+de+porco",
                    "yield": 10.0,
                    "dietLabels": [
                        "Low-Carb"
                    ],
                    "healthLabels": [
                        "Sugar-Conscious",
                        "Keto-Friendly",
                        "Paleo",
                        "Dairy-Free",
                        "Gluten-Free",
                        "Wheat-Free",
                        "Egg-Free",
                        "Peanut-Free",
                        "Tree-Nut-Free",
                        "Soy-Free",
                        "Fish-Free",
                        "Crustacean-Free",
                        "Celery-Free",
                        "Mustard-Free",
                        "Sesame-Free",
                        "Lupine-Free"
                    ],
                    "cautions": [],
                    "ingredientLines": [
                        "1-1/2 cups dry white wine",
                        "1 teaspoon paprika",
                        "2 teaspoons salt",
                        "1/2 teaspoon black pepper",
                        "2 cloves garlic, peeled and cut in half",
                        "1 bay leaf",
                        "2 pounds pork loin, cut into 1 inch cubes",
                        "3 teaspoons olive oil, divided",
                        "2 onions, peeled and thinly sliced",
                        "1 can Hunts canned diced tomatoes packed in juice.",
                        "1/4 teaspoon crushed red pepper flakes",
                        "24 small clams in shell, scrubbed",
                        "1/4 cup chopped fresh cilantro"
                    ],
                    "ingredients": [
                        {
                            "text": "1-1/2 cups dry white wine",
                            "quantity": 1.5,
                            "measure": "cup",
                            "food": "dry white wine",
                            "weight": 352.79999999999995,
                            "foodCategory": "wines",
                            "foodId": "food_a656mk2a5dmqb2adiamu6beihduu",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "1 teaspoon paprika",
                            "quantity": 1.0,
                            "measure": "teaspoon",
                            "food": "paprika",
                            "weight": 2.3,
                            "foodCategory": "Condiments and sauces",
                            "foodId": "food_a9dpcnjb883g67b3lq82ca0421ql",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "2 teaspoons salt",
                            "quantity": 2.0,
                            "measure": "teaspoon",
                            "food": "salt",
                            "weight": 12.0,
                            "foodCategory": "Condiments and sauces",
                            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "1/2 teaspoon black pepper",
                            "quantity": 0.5,
                            "measure": "teaspoon",
                            "food": "black pepper",
                            "weight": 1.45,
                            "foodCategory": "Condiments and sauces",
                            "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "2 cloves garlic, peeled and cut in half",
                            "quantity": 2.0,
                            "measure": "clove",
                            "food": "garlic",
                            "weight": 6.0,
                            "foodCategory": "vegetables",
                            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "1 bay leaf",
                            "quantity": 1.0,
                            "measure": "<unit>",
                            "food": "bay leaf",
                            "weight": 0.6,
                            "foodCategory": "Condiments and sauces",
                            "foodId": "food_asx39x4ayja4jab6ivj6zayvkblo",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "2 pounds pork loin, cut into 1 inch cubes",
                            "quantity": 2.0,
                            "measure": "pound",
                            "food": "pork loin",
                            "weight": 907.18474,
                            "foodCategory": "meats",
                            "foodId": "food_aisetlvawqaqp8a2uc28uaf46l5m",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "3 teaspoons olive oil, divided",
                            "quantity": 3.0,
                            "measure": "teaspoon",
                            "food": "olive oil",
                            "weight": 13.5,
                            "foodCategory": "Oils",
                            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "2 onions, peeled and thinly sliced",
                            "quantity": 2.0,
                            "measure": "<unit>",
                            "food": "onions",
                            "weight": 250.0,
                            "foodCategory": "vegetables",
                            "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "1 can Hunts canned diced tomatoes packed in juice.",
                            "quantity": 1.0,
                            "measure": "can",
                            "food": "canned diced tomatoes",
                            "weight": 190.0,
                            "foodCategory": "canned vegetables",
                            "foodId": "food_bnmkkwqa9h2p87bz171eoby0bsey",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "1/4 teaspoon crushed red pepper flakes",
                            "quantity": 0.25,
                            "measure": "teaspoon",
                            "food": "red pepper flakes",
                            "weight": 0.19270833334310772,
                            "foodCategory": "vegetables",
                            "foodId": "food_bispmxiaijcuxcagex14mbhk2o48",
                            "image": "https://picsum.photos/400/400g"
                        },
                        {
                            "text": "24 small clams in shell, scrubbed",
                            "quantity": 24.0,
                            "measure": "<unit>",
                            "food": "clams in shell",
                            "weight": 216.0,
                            "foodCategory": "seafood",
                            "foodId": "food_btfki7zbcnzgnkai1iruqbq7lalz",
                            "image": "https://picsum.photos/400/400"
                        },
                        {
                            "text": "1/4 cup chopped fresh cilantro",
                            "quantity": 0.25,
                            "measure": "cup",
                            "food": "cilantro",
                            "weight": 4.0,
                            "foodCategory": "vegetables",
                            "foodId": "food_alhzhuwb4lc7jnb5s6f02by60bzp",
                            "image": "https://picsum.photos/400/400"
                        }
                    ],
                    "calories": 2543.5096602000326,
                    "totalWeight": 1950.5231581634862,
                    "totalTime": 0.0,
                    "cuisineType": [
                        "mexican"
                    ],
                    "mealType": [
                        "lunch/dinner"
                    ],
                    "dishType": [
                        "main course"
                    ],
                    "totalNutrients": {
                        "ENERC_KCAL": {
                            "label": "Energy",
                            "quantity": 2543.5096602000326,
                            "unit": "kcal"
                        },
                        "FAT": {
                            "label": "Fat",
                            "quantity": 130.87833664616724,
                            "unit": "g"
                        },
                        "FASAT": {
                            "label": "Saturated",
                            "quantity": 42.08140538275009,
                            "unit": "g"
                        },
                        "FATRN": {
                            "label": "Trans",
                            "quantity": 0.0324,
                            "unit": "g"
                        },
                        "FAMS": {
                            "label": "Monounsaturated",
                            "quantity": 61.18260128900006,
                            "unit": "g"
                        },
                        "FAPU": {
                            "label": "Polyunsaturated",
                            "quantity": 14.45530300558364,
                            "unit": "g"
                        },
                        "CHOCDF": {
                            "label": "Carbs",
                            "quantity": 51.71089104167349,
                            "unit": "g"
                        },
                        "CHOCDF.net": {
                            "label": "Carbohydrates (net)",
                            "quantity": 42.23023375000402,
                            "unit": "g"
                        },
                        "FIBTG": {
                            "label": "Fiber",
                            "quantity": 9.480657291669472,
                            "unit": "g"
                        },
                        "SUGAR": {
                            "label": "Sugars",
                            "quantity": 19.25290604167068,
                            "unit": "g"
                        },
                        "SUGAR.added": {
                            "label": "Sugars, added",
                            "quantity": 0.0,
                            "unit": "g"
                        },
                        "PROCNT": {
                            "label": "Protein",
                            "quantity": 216.27215121766767,
                            "unit": "g"
                        },
                        "CHOLE": {
                            "label": "Cholesterol",
                            "quantity": 636.3263862000001,
                            "unit": "mg"
                        },
                        "NA": {
                            "label": "Sodium",
                            "quantity": 4520.796950550223,
                            "unit": "mg"
                        },
                        "CA": {
                            "label": "Calcium",
                            "quantity": 431.5004423092388,
                            "unit": "mg"
                        },
                        "MG": {
                            "label": "Magnesium",
                            "quantity": 320.89683583164344,
                            "unit": "mg"
                        },
                        "K": {
                            "label": "Potassium",
                            "quantity": 4431.368477019928,
                            "unit": "mg"
                        },
                        "FE": {
                            "label": "Iron",
                            "quantity": 14.393009871773398,
                            "unit": "mg"
                        },
                        "ZN": {
                            "label": "Zinc",
                            "quantity": 18.200080810830247,
                            "unit": "mg"
                        },
                        "P": {
                            "label": "Phosphorus",
                            "quantity": 2404.7353440500156,
                            "unit": "mg"
                        },
                        "VITA_RAE": {
                            "label": "Vitamin A",
                            "quantity": 325.46965313346277,
                            "unit": "µg"
                        },
                        "VITC": {
                            "label": "Vitamin C",
                            "quantity": 51.195318856669736,
                            "unit": "mg"
                        },
                        "THIA": {
                            "label": "Thiamin (B1)",
                            "quantity": 9.455320601150008,
                            "unit": "mg"
                        },
                        "RIBF": {
                            "label": "Riboflavin (B2)",
                            "quantity": 2.609966290616784,
                            "unit": "mg"
                        },
                        "NIA": {
                            "label": "Niacin (B3)",
                            "quantity": 44.69213447741752,
                            "unit": "mg"
                        },
                        "VITB6A": {
                            "label": "Vitamin B6",
                            "quantity": 5.136335410300079,
                            "unit": "mg"
                        },
                        "FOLDFE": {
                            "label": "Folate equivalent (total)",
                            "quantity": 91.31162865000499,
                            "unit": "µg"
                        },
                        "FOLFD": {
                            "label": "Folate (food)",
                            "quantity": 91.31162865000499,
                            "unit": "µg"
                        },
                        "FOLAC": {
                            "label": "Folic acid",
                            "quantity": 0.0,
                            "unit": "µg"
                        },
                        "VITB12": {
                            "label": "Vitamin B12",
                            "quantity": 29.172879121999998,
                            "unit": "µg"
                        },
                        "VITD": {
                            "label": "Vitamin D",
                            "quantity": 4.535923700000001,
                            "unit": "µg"
                        },
                        "TOCPHA": {
                            "label": "Vitamin E",
                            "quantity": 7.277368995666972,
                            "unit": "mg"
                        },
                        "VITK1": {
                            "label": "Vitamin K",
                            "quantity": 32.841260416677244,
                            "unit": "µg"
                        },
                        "Sugar.alcohol": {
                            "label": "Sugar alcohol",
                            "quantity": 0.0,
                            "unit": "g"
                        },
                        "WATER": {
                            "label": "Water",
                            "quantity": 1494.6287080734944,
                            "unit": "g"
                        }
                    },
                    "totalDaily": {
                        "ENERC_KCAL": {
                            "label": "Energy",
                            "quantity": 127.17548301000163,
                            "unit": "%"
                        },
                        "FAT": {
                            "label": "Fat",
                            "quantity": 201.35128714794962,
                            "unit": "%"
                        },
                        "FASAT": {
                            "label": "Saturated",
                            "quantity": 210.40702691375046,
                            "unit": "%"
                        },
                        "CHOCDF": {
                            "label": "Carbs",
                            "quantity": 17.23696368055783,
                            "unit": "%"
                        },
                        "FIBTG": {
                            "label": "Fiber",
                            "quantity": 37.922629166677886,
                            "unit": "%"
                        },
                        "PROCNT": {
                            "label": "Protein",
                            "quantity": 432.54430243533534,
                            "unit": "%"
                        },
                        "CHOLE": {
                            "label": "Cholesterol",
                            "quantity": 212.10879540000005,
                            "unit": "%"
                        },
                        "NA": {
                            "label": "Sodium",
                            "quantity": 188.3665396062593,
                            "unit": "%"
                        },
                        "CA": {
                            "label": "Calcium",
                            "quantity": 43.15004423092388,
                            "unit": "%"
                        },
                        "MG": {
                            "label": "Magnesium",
                            "quantity": 76.40400853134368,
                            "unit": "%"
                        },
                        "K": {
                            "label": "Potassium",
                            "quantity": 94.28443568127506,
                            "unit": "%"
                        },
                        "FE": {
                            "label": "Iron",
                            "quantity": 79.96116595429665,
                            "unit": "%"
                        },
                        "ZN": {
                            "label": "Zinc",
                            "quantity": 165.4552800984568,
                            "unit": "%"
                        },
                        "P": {
                            "label": "Phosphorus",
                            "quantity": 343.5336205785737,
                            "unit": "%"
                        },
                        "VITA_RAE": {
                            "label": "Vitamin A",
                            "quantity": 36.163294792606976,
                            "unit": "%"
                        },
                        "VITC": {
                            "label": "Vitamin C",
                            "quantity": 56.88368761852193,
                            "unit": "%"
                        },
                        "THIA": {
                            "label": "Thiamin (B1)",
                            "quantity": 787.9433834291674,
                            "unit": "%"
                        },
                        "RIBF": {
                            "label": "Riboflavin (B2)",
                            "quantity": 200.7666377397526,
                            "unit": "%"
                        },
                        "NIA": {
                            "label": "Niacin (B3)",
                            "quantity": 279.3258404838595,
                            "unit": "%"
                        },
                        "VITB6A": {
                            "label": "Vitamin B6",
                            "quantity": 395.10272386923685,
                            "unit": "%"
                        },
                        "FOLDFE": {
                            "label": "Folate equivalent (total)",
                            "quantity": 22.827907162501248,
                            "unit": "%"
                        },
                        "VITB12": {
                            "label": "Vitamin B12",
                            "quantity": 1215.5366300833334,
                            "unit": "%"
                        },
                        "VITD": {
                            "label": "Vitamin D",
                            "quantity": 30.239491333333337,
                            "unit": "%"
                        },
                        "TOCPHA": {
                            "label": "Vitamin E",
                            "quantity": 48.515793304446476,
                            "unit": "%"
                        },
                        "VITK1": {
                            "label": "Vitamin K",
                            "quantity": 27.3677170138977,
                            "unit": "%"
                        }
                    },
                    "digest": [
                        {
                            "label": "Fat",
                            "tag": "FAT",
                            "schemaOrgTag": "fatContent",
                            "total": 130.87833664616724,
                            "hasRDI": true,
                            "daily": 201.35128714794962,
                            "unit": "g",
                            "sub": [
                                {
                                    "label": "Saturated",
                                    "tag": "FASAT",
                                    "schemaOrgTag": "saturatedFatContent",
                                    "total": 42.08140538275009,
                                    "hasRDI": true,
                                    "daily": 210.40702691375046,
                                    "unit": "g"
                                },
                                {
                                    "label": "Trans",
                                    "tag": "FATRN",
                                    "schemaOrgTag": "transFatContent",
                                    "total": 0.0324,
                                    "hasRDI": false,
                                    "daily": 0.0,
                                    "unit": "g"
                                },
                                {
                                    "label": "Monounsaturated",
                                    "tag": "FAMS",
                                    "schemaOrgTag": null,
                                    "total": 61.18260128900006,
                                    "hasRDI": false,
                                    "daily": 0.0,
                                    "unit": "g"
                                },
                                {
                                    "label": "Polyunsaturated",
                                    "tag": "FAPU",
                                    "schemaOrgTag": null,
                                    "total": 14.45530300558364,
                                    "hasRDI": false,
                                    "daily": 0.0,
                                    "unit": "g"
                                }
                            ]
                        },
                        {
                            "label": "Carbs",
                            "tag": "CHOCDF",
                            "schemaOrgTag": "carbohydrateContent",
                            "total": 51.71089104167349,
                            "hasRDI": true,
                            "daily": 17.23696368055783,
                            "unit": "g",
                            "sub": [
                                {
                                    "label": "Carbs (net)",
                                    "tag": "CHOCDF.net",
                                    "schemaOrgTag": null,
                                    "total": 42.23023375000402,
                                    "hasRDI": false,
                                    "daily": 0.0,
                                    "unit": "g"
                                },
                                {
                                    "label": "Fiber",
                                    "tag": "FIBTG",
                                    "schemaOrgTag": "fiberContent",
                                    "total": 9.480657291669472,
                                    "hasRDI": true,
                                    "daily": 37.922629166677886,
                                    "unit": "g"
                                },
                                {
                                    "label": "Sugars",
                                    "tag": "SUGAR",
                                    "schemaOrgTag": "sugarContent",
                                    "total": 19.25290604167068,
                                    "hasRDI": false,
                                    "daily": 0.0,
                                    "unit": "g"
                                },
                                {
                                    "label": "Sugars, added",
                                    "tag": "SUGAR.added",
                                    "schemaOrgTag": null,
                                    "total": 0.0,
                                    "hasRDI": false,
                                    "daily": 0.0,
                                    "unit": "g"
                                }
                            ]
                        },
                        {
                            "label": "Protein",
                            "tag": "PROCNT",
                            "schemaOrgTag": "proteinContent",
                            "total": 216.27215121766767,
                            "hasRDI": true,
                            "daily": 432.54430243533534,
                            "unit": "g"
                        },
                        {
                            "label": "Cholesterol",
                            "tag": "CHOLE",
                            "schemaOrgTag": "cholesterolContent",
                            "total": 636.3263862000001,
                            "hasRDI": true,
                            "daily": 212.10879540000005,
                            "unit": "mg"
                        },
                        {
                            "label": "Sodium",
                            "tag": "NA",
                            "schemaOrgTag": "sodiumContent",
                            "total": 4520.796950550223,
                            "hasRDI": true,
                            "daily": 188.3665396062593,
                            "unit": "mg"
                        },
                        {
                            "label": "Calcium",
                            "tag": "CA",
                            "schemaOrgTag": null,
                            "total": 431.5004423092388,
                            "hasRDI": true,
                            "daily": 43.15004423092388,
                            "unit": "mg"
                        },
                        {
                            "label": "Magnesium",
                            "tag": "MG",
                            "schemaOrgTag": null,
                            "total": 320.89683583164344,
                            "hasRDI": true,
                            "daily": 76.40400853134368,
                            "unit": "mg"
                        },
                        {
                            "label": "Potassium",
                            "tag": "K",
                            "schemaOrgTag": null,
                            "total": 4431.368477019928,
                            "hasRDI": true,
                            "daily": 94.28443568127506,
                            "unit": "mg"
                        },
                        {
                            "label": "Iron",
                            "tag": "FE",
                            "schemaOrgTag": null,
                            "total": 14.393009871773398,
                            "hasRDI": true,
                            "daily": 79.96116595429665,
                            "unit": "mg"
                        },
                        {
                            "label": "Zinc",
                            "tag": "ZN",
                            "schemaOrgTag": null,
                            "total": 18.200080810830247,
                            "hasRDI": true,
                            "daily": 165.4552800984568,
                            "unit": "mg"
                        },
                        {
                            "label": "Phosphorus",
                            "tag": "P",
                            "schemaOrgTag": null,
                            "total": 2404.7353440500156,
                            "hasRDI": true,
                            "daily": 343.5336205785737,
                            "unit": "mg"
                        },
                        {
                            "label": "Vitamin A",
                            "tag": "VITA_RAE",
                            "schemaOrgTag": null,
                            "total": 325.46965313346277,
                            "hasRDI": true,
                            "daily": 36.163294792606976,
                            "unit": "µg"
                        },
                        {
                            "label": "Vitamin C",
                            "tag": "VITC",
                            "schemaOrgTag": null,
                            "total": 51.195318856669736,
                            "hasRDI": true,
                            "daily": 56.88368761852193,
                            "unit": "mg"
                        },
                        {
                            "label": "Thiamin (B1)",
                            "tag": "THIA",
                            "schemaOrgTag": null,
                            "total": 9.455320601150008,
                            "hasRDI": true,
                            "daily": 787.9433834291674,
                            "unit": "mg"
                        },
                        {
                            "label": "Riboflavin (B2)",
                            "tag": "RIBF",
                            "schemaOrgTag": null,
                            "total": 2.609966290616784,
                            "hasRDI": true,
                            "daily": 200.7666377397526,
                            "unit": "mg"
                        },
                        {
                            "label": "Niacin (B3)",
                            "tag": "NIA",
                            "schemaOrgTag": null,
                            "total": 44.69213447741752,
                            "hasRDI": true,
                            "daily": 279.3258404838595,
                            "unit": "mg"
                        },
                        {
                            "label": "Vitamin B6",
                            "tag": "VITB6A",
                            "schemaOrgTag": null,
                            "total": 5.136335410300079,
                            "hasRDI": true,
                            "daily": 395.10272386923685,
                            "unit": "mg"
                        },
                        {
                            "label": "Folate equivalent (total)",
                            "tag": "FOLDFE",
                            "schemaOrgTag": null,
                            "total": 91.31162865000499,
                            "hasRDI": true,
                            "daily": 22.827907162501248,
                            "unit": "µg"
                        },
                        {
                            "label": "Folate (food)",
                            "tag": "FOLFD",
                            "schemaOrgTag": null,
                            "total": 91.31162865000499,
                            "hasRDI": false,
                            "daily": 0.0,
                            "unit": "µg"
                        },
                        {
                            "label": "Folic acid",
                            "tag": "FOLAC",
                            "schemaOrgTag": null,
                            "total": 0.0,
                            "hasRDI": false,
                            "daily": 0.0,
                            "unit": "µg"
                        },
                        {
                            "label": "Vitamin B12",
                            "tag": "VITB12",
                            "schemaOrgTag": null,
                            "total": 29.172879121999998,
                            "hasRDI": true,
                            "daily": 1215.5366300833334,
                            "unit": "µg"
                        },
                        {
                            "label": "Vitamin D",
                            "tag": "VITD",
                            "schemaOrgTag": null,
                            "total": 4.535923700000001,
                            "hasRDI": true,
                            "daily": 30.239491333333337,
                            "unit": "µg"
                        },
                        {
                            "label": "Vitamin E",
                            "tag": "TOCPHA",
                            "schemaOrgTag": null,
                            "total": 7.277368995666972,
                            "hasRDI": true,
                            "daily": 48.515793304446476,
                            "unit": "mg"
                        },
                        {
                            "label": "Vitamin K",
                            "tag": "VITK1",
                            "schemaOrgTag": null,
                            "total": 32.841260416677244,
                            "hasRDI": true,
                            "daily": 27.3677170138977,
                            "unit": "µg"
                        },
                        {
                            "label": "Sugar alcohols",
                            "tag": "Sugar.alcohol",
                            "schemaOrgTag": null,
                            "total": 0.0,
                            "hasRDI": false,
                            "daily": 0.0,
                            "unit": "g"
                        },
                        {
                            "label": "Water",
                            "tag": "WATER",
                            "schemaOrgTag": null,
                            "total": 1494.6287080734944,
                            "hasRDI": false,
                            "daily": 0.0,
                            "unit": "g"
                        }
                    ]
                }
            }
        ]
    }
}