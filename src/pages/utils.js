export const CLOTHING_CATEGORIES = ['men\'s clothing', 'women\'s clothing'];

export const getBredcrumb = (category) => {
    switch (category) {
        case 'women':
            return {
                menuLabel: 'Shop',
                childMenu: {
                    menuLabel: 'Women\'s',
                    childMenu: {
                        menuLabel: 'Outerwear'
                    }
                }
            };
        case 'men':
            return {
                menuLabel: 'Shop',
                childMenu: {
                    menuLabel: 'Men\'s',
                    childMenu: {
                        menuLabel: 'Outerwear'
                    }
                }
            };
        case 'shop':
            return {
                menuLabel: 'Shop',
                childMenu: {
                    menuLabel: 'All'
                }
            };
        default:
            return {
                menuLabel: 'Shop',
                childMenu: {
                    menuLabel: `${category[0].toUpperCase()}${category.slice(1)}`
                }
            };
    }
}