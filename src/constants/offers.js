export const defaultOffers = [
    {
        id: 1,
        type: 'Promotional',
        offerName: 'Internet (44) SPP 2.0 #2753393 NC',
        price: '$44.99',
        showCart: true
    },
    {
        id: 2,
        type: 'Promotional',
        offerName: 'TV Select (44) SPP 2.0 #2752943 NC',
        price: '$44.99',
        showCart: true
    },
    {
        id: 3,
        type: 'Promotional',
        offerName: '2 Yr Internet - Competitive/Gig Escalation (44) SPP 2.0 #2773863 NC',
        price: '$64.99',
        showCart: true
    }
];

export const doublePlayOffers = [
    {
        id: 4,
        type: 'Promotional',
        offerName: 'TV Select + Internet (44/44) SPP 2.0 #2748993 NC',
        price: '$89.98',
        showCart: true,
        basicServices: [
            {
                serviceName: 'Spectrum Video',
                price: '$56.98',
                surcharge: {
                    label: 'Broadcast TV Surcharge',
                    price: '$11.99'
                },
                quoteSummaryDefaults: [],
                services: [
                    {
                        label: 'Spectrum TV',
                        level: 1,
                        price: '$0.00',
                        default: true,
                        children: [
                            {
                                label: 'Spectrum TV Select',
                                level: 2,
                                price: '$44.99',
                                default: true,
                                children: [
                                    {
                                        label: 'Spectrum TV Silver',
                                        level: 3,
                                        price: '$20.00',
                                        children: [
                                            {
                                                label: 'Spectrum TV Gold',
                                                level: 4,
                                                price: '$20.00'
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                serviceName: 'Spectrum Internet',
                price: '$44.99',
                quoteSummaryDefaults: [
                    { label: 'Spectrum Modem', price: '$0.00' },
                    { label: 'Spectrum Internet', price: '$44.99' }
                ],
                services: [
                    {
                        label: 'Spectrum Internet',
                        level: 1,
                        price: '$44.99',
                        default: true,
                        children: [
                            {
                                label: 'Spectrum Internet Plus',
                                level: 2,
                                price: '$0.00',
                                default: true
                            },
                            {
                                label: 'Spectrum Internet Ultra',
                                level: 2,
                                price: '$20.00'
                            },
                            {
                                label: 'Spectrum Internet Gig',
                                level: 2,
                                price: '$60.00'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 5,
        type: 'Promotional',
        offerName: 'Limited Basic + Internet (23/39) SPP #397223 NC',
        price: '$63.88',
        showCart: true
    },
    {
        id: 6,
        type: 'Promotional',
        offerName:
            '2 Yr TV Select + Internet Plus w/Free or Discounted DVR Svc Escalation (39/39) SPP #407371 NC',
        price: '$79.98',
        showCart: true
    },
    {
        id: 7,
        type: 'Promotional',
        offerName:
            '2 Yr TV Select + Internet Ultra - Competitive/Gig Escalation (39/39) SPP 2.0 #2775773 NC',
        price: '$79.98',
        showCart: true
    },
    {
        id: 8,
        type: 'Promotional',
        offerName:
            '2 Yr TV Select + Internet Ultra - Competitive/Non-Gig Escalation (39/59) SPP 2.0 #2778543 NC',
        price: '$99.98',
        showCart: true
    }
];

export const addOnOffers = [
    {
        id: 9,
        type: 'AddOn',
        offerName: 'Voice Bundled (9) SPP 2.0 #2755393 NC',
        price: '$9.99',
        showCart: true,
        basicServices: [
            {
                serviceName: 'Spectrum Voice',
                price: '$9.99',
                services: [
                    {
                        label: 'Spectrum Voice Primary Line',
                        price: '$9.99'
                    }
                ]
            }
        ]
    },
    {
        id: 10,
        type: 'AddOn',
        offerName: 'Voice - 2nd Line SPP #557133 NC',
        price: '$19.99',
        showCart: true
    }
];