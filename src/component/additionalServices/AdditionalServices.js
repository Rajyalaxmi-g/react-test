export const additionalServices = [
    {
        serviceName: 'Spectrum Video',
        price: '$76.98',
        services: [
            {
                label: 'Spectrum Packages - Additional',
                level: 1,
                price: '$0.00',
                default: true,
                children: [
                    {
                        label: "Spectrum Multi-Cultural",
                        price: "$0.00",
                        children: [
                            {
                                label: "Chinese",
                                price: "$0.00",
                                children: [
                                    {
                                        label: "South Asian View",
                                        price: '$27.99'
                                    }
                                ]
                            },
                            {
                                label: "Filipino",
                                price: "$0.00",
                                children: [
                                    {
                                    label: "Filipino View",
                                    price: '$19.99'
                                    }
                                ]
                            },
                            {
                                label: "French",
                                price: "$0.00",
                                children: [
                                    {
                                        label: 'French View',
                                        price: "$6.99"
                                    }
                                ]
                            },
                            {
                                label: "Japanese",
                                price: "$0.00",
                                children: [
                                    {
                                        label: "TV Japan",
                                        price: "$14.99"
                                    }
                                ]
                            },
                            {
                                label: "Latino",
                                price: "$0.00",
                                children: [
                                    {
                                        label: "Latino Tier",
                                        price: '$8.99'
                                    }
                                ]
                            }

                        ]
                        
                    },
                    {
                        label: "Spectrum On Demand Channels" ,
                        price: "$0.00",
                        children: [
                            {
                                label: "2 Much",
                                price: '$14.99'
                            },
                            {
                                label: "Anime",
                                price: "$6.99"
                            },
                            {
                                label: "Disney Family SVOD",
                                price: "$4.99"
                            },
                            {
                                label: "Here!",
                                price: "$6.99"
                            },
                            {
                                label: "Karaoke",
                                price: '$6.99'
                            },
                            {
                                label: "Playboy",
                                price: "$19.99"
                            }
                        ]
                    },
                    {
                        label: "Spectrum Tier Channels",
                        price: "$0.00",
                        children: [
                            {
                                label: "Digi Tier 2",
                                price: "$12.00"
                            }
                        ]
                    },
                    {
                        label: "Spectrum Premium Channels",
                        price: '$0.00',
                        children: [
                            {
                                label: "Cinemax",
                                price: "$9.99"
                            },
                            {
                                label: "The Movie Channel",
                                price: "$9.99"
                            },
                            {
                                label: "Starz",
                                price: '$9.99'
                            },
                            {
                                label: "StarzEncore",
                                price: "$5.99"
                            },
                            {
                                label: "EPIX",
                                price: "$5.99"
                            }
                        ]
                    }
                    
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
            //    default: true,
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