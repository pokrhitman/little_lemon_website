
const drinksItemsToDisplay = [
    {
        title: 'Soft Drinks',
        data: [
            {
                name: 'Iced Tea',
                price: '$3.50',
                img: "assets/drinks/iced_tea.png",
                nutrition: {
                    calories: 120,
                    sugar: 10
                }
            },

            {
                name: 'Lemonade',
                price: '$4.00',
                img: "assets/drinks/lemonade.png",
                nutrition: {
                    calories: 120,
                    sugar: 10
                }
            },

            {
                name: 'Smoothie',
                price: '$5.50',
                img: "assets/drinks/smoothie.png",
                nutrition: {
                    calories: 120,
                    sugar: 10
                }
            },
        ],
    },

    {
        title: 'Alcoholic Beverages',
        data: [
            {
                name: 'Selection of Tap Beers',
                price: '$5',
                img: "assets/drinks/beer.png",
                nutrition: {
                    calories: 120,
                }
            },

        ],
    },

    {
        title: 'Hot Beverages',
        data: [
            {
                name: 'Coffee',
                price: '$2.50',
                img: "assets/drinks/coffee.png",
                nutrition: {
                    calories: 0,
                    sugars: 0
                }
            },
            
            {
                name: 'Capuccino',
                price: '$3.50',
                img: "assets/drinks/capuccino.png",
                nutrition: {
                    calories: 120,
                    sugars: 1,
                    fat: 5
                }
            },
        ],
    },
];

export default drinksItemsToDisplay;