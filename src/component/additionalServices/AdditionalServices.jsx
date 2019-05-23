const additionalServices = [
    {
        serviceName: 'Spectrum Video',
        price: '$76.98',
        services: [
            {
                label: 'Spectrum Packages - Additional',
                price: '$0.00',
                default: true,
                children: [
                    {
                        label: 'Spectrum On Demand Channels',
                        price: '$0.00',
                        children: [
                            {
                                label: '2 Much',
                                price: '$14.99'
                            },
                            {
                                label: 'Anime',
                                price: '$6.99'
                            },
                            {
                                label: 'Disney Family SVOD',
                                price: '$4.99'
                            },
                            {
                                label: 'Here!',
                                price: '$6.99'
                            },
                            {
                                label: 'Karaoke',
                                price: '$6.99'
                            },
                            {
                                label: 'Playboy',
                                price: '$19.99'
                            }
                        ]
                    },
                    {
                        label: 'Spectrum Premium Channels',
                        price: '$0.00',
                        children: [
                            {
                                label: 'Cinemax',
                                price: '$9.99'
                            },
                            {
                                label: 'The Movie Channel',
                                price: '$9.99'
                            },
                            {
                                label: 'Starz',
                                price: '$9.99'
                            },
                            {
                                label: 'StarEncore',
                                price: '$5.99'
                            },
                            {
                                label: 'EPIX',
                                price: '$5.99'
                            }
                        ]
                    },        
                ]
                
            }
        ]
    },
    {
        serviceName: 'Spectrum Miscellaneous',
        price: '$49.99',
        services: [
           {
               label: 'Miscellaneous General Services',
               price: '$0.00',
               default: true,
               children: [
                   {
                       label: 'Spectrum Wire Maintenance',
                       price: '$4.99'
                   },
                   {
                       label: 'Spectrum Contract Buyout',
                       price: '$0.00'
                   }
               ]
           }
        ]
    }
]