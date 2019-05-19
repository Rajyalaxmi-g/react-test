const basicServices = [
    {
    serviceName: "Spectrum Video",
    price: "$56.98",
    surcharge: {
        label: "Broadcast TV Surcharge",
        price: "$11.99"
    },
    services: {
        spectrumTV: {
            label: "Spectrum TV",
            price: "$0.00",
            default: true,
            children: {
                spectrumTVSelect: {
                    label: "Spectrum TV Select",
                    price: "$44.99",
                    default: true,
                    children: {
                        spectrumTVSilver: {
                            label: "Spectrum TV Silver",
                            price: "$20.00",
                            children: {
                                spectrumTVGold: {
                                    label: "Spectrum TV Gold",
                                    price: "$20.00"
                                }
                            }
                        }
                    }
                }
            }
        }
    }
},
{
    serviceName: "Spectrum Internet",
    price: "$44.99",
    services: {
        spectrumInternet: {
            label: "Spectrum Internet",
            price: "$44.99",
            default: true, 
            children: {
                spectrumInternetPlus: {
                    label: "Spectrum Internet Plus",
                    price: "$0.00",
                    default: true
                },
                spectrumInternetUltra: {
                    label: "Spectrum Internet Ultra",
                    price: "$20.00",
                },
                spectrumInternetGig: {
                    label: "Spectrum Internet Gig",
                    price: "$60.00",
                }
            }
        }
    }
}]
