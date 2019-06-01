import React from "react";

export default function QuoteOfferDetails({ selectedOffer, quote }) {
    const { selectedItems } = quote;
    const flattenedSelectedOffer = [];

    selectedOffer.basicServices.map(basicService => {
        let obj = {};
        obj.serviceName = basicService.serviceName;
        obj.price = basicService.price;
        let serviceItems = [];

        basicService.quoteSummaryDefaults && basicService.quoteSummaryDefaults.length > 0 && serviceItems.push.apply(serviceItems, basicService.quoteSummaryDefaults);

        basicService.services.map(service => {
            // if (service.default) {
            // 	serviceItems.push({ label: service.label, price: service.price })
            // }
            service.children &&
                service.children.map(child1 => {
                    if (child1.default) {
                        serviceItems.push({ label: child1.label, price: child1.price });
                    }
                    child1.children &&
                        child1.children.map(child2 => {
                            if (child2.default) {
                                serviceItems.push({ label: child2.label, price: child2.price });
                            }
                            child2.children &&
                                child2.children.map(child3 => {
                                    if (child3.default) {
                                        serviceItems.push({ label: child3.label, price: child3.price });
                                    }
                                });
                        });
                });
        });

        basicService.surcharge && serviceItems.push(basicService.surcharge);

        selectedItems.map(item => {
            const arr = item.split("-");
            if (arr.includes(basicService.serviceName)) {
                serviceItems.push({ label: arr[1], price: arr[2] });
            }
        });

        obj.serviceItems = serviceItems;

        flattenedSelectedOffer.push(obj);
    });

    console.log(flattenedSelectedOffer);

    return (
        <>
            {flattenedSelectedOffer.map(offer => {
                let computedOfferPrice = 0;
                offer.serviceItems.map(item => {
                    let price = Number(item.price.substr(1));
                    computedOfferPrice += price;
                });

                return (
                    <div className="quoteLobPlay1">
                        <div className="row quoteLobPlay1Style">
                            <div className="col-xs-12 lobPlay1DivStyle">
                                <div className="lobplayLabel">
                                    {/* <i className="material-icons__material-icons___2FaZp">live_tv</i> */}
                                    <span>{offer.serviceName}</span>
                                </div>
                                <span>${(computedOfferPrice && computedOfferPrice.toFixed(2)) || offer.price.substr(1)}</span>
                            </div>
                        </div>
                        <div>
                            {offer.serviceItems.map(item => {
                                return (
                                    <>
                                        <div className="col-xs-12 lobPlay1DivStyle">
                                            <div className="lobplayLabel">
                                                <span className="fa fa-plus iconStyle" />
                                                <span className="labelStyle">{item.label}</span>
                                            </div>
                                            <div className="lobplayPrice">
                                                <span>{item.price}</span>
                                            </div>
                                        </div>
                                        <hr />
                                    </>
                                );
                            })}
                        </div>
                        <div />
                    </div>
                );
            })}
        </>
    );
}


