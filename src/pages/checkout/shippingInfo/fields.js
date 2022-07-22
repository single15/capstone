export const SHIPPING_INFORMATION_FIELDS = [
    {
        label: 'Country',
        type: 'text',
        name: 'country',
        placeholder: 'Select Country',
        isRequired: true
    },
    {
        label: 'First Name',
        type: 'text',
        name: 'firstName',
        placeholder: 'First Name',
        isRequired: true,
        size: 6
    },
    {
        label: 'Last Name',
        type: 'text',
        name: 'lastName',
        placeholder: 'Last Name',
        isRequired: true,
        size: 6
    },
    {
        label: 'Street Address',
        type: 'text',
        name: 'streetAddress',
        placeholder: 'Address Line',
        isRequired: true,
        size: 6
    },
    {
        label: 'Street Address',
        type: 'text',
        name: 'streetAddress2',
        placeholder: 'Address Line 2',
        isRequired: false,
        size: 6
    },
    {
        label: 'City',
        type: 'text',
        name: 'city',
        placeholder: 'City',
        isRequired: true,
        size: 6
    },
    {
        label: 'State',
        type: 'text',
        name: 'state',
        placeholder: 'Select State',
        isRequired: true,
        size: 4
    },
    {
        label: 'ZIP',
        type: 'number',
        name: 'zip',
        placeholder: 'Zip code',
        isRequired: true,
        size: 2,
        max: 6,
        min: 5
    }
]