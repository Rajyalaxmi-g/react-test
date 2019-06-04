import React from "react";
import { Quote } from "./Quote";
import { phoneNumbers, defaultOffers, doublePlayOffers, addOnOffers } from "../constants";
import { OfferSelection } from "./OfferSelection";
import BasicServices from "./BasicServices/BasicServices";

class Ordering extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ppIcon: null,
            checked: [],
            expanded: [],
            navTabs: ["offerHeader", "basicServices", "additionalServices"],
            tabsInView: ["offerHeader"],
            currentTab: "offerHeader",
            firstname: "",
            lastname: "",
            isMobile: true,
            number: null,
            activeNumber: false,
            primaryphone: "",
            invalidNo: false,
            errors: {},
            tooltiptext: "",
            orderReason: "",
            phoneNumbers: phoneNumbers,
            defaultOffers: defaultOffers,
            selectedOffers: [],
            doublePlay: doublePlayOffers,
            addOn: addOnOffers
        };
    }
    baseState = this.state;

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value }, () => {
            this.Validate(name, value);
        });
    };

    Validate = (fieldName, value) => {
        const fieldValidationErrors = this.state.errors;
        switch (fieldName) {
            case "firstname":
                fieldValidationErrors.firstname = this.state.firstname.length === 0 ? true : false;
                break;
            case "lastname":
                fieldValidationErrors.lastname = this.state.lastname.length === 0 ? true : false;
                break;
            case "primaryphone":
                fieldValidationErrors.primaryphone = this.state.primaryphone.length === 0 ? true : false;
                if (this.state.primaryphone.length === 0) {
                    fieldValidationErrors.primaryphone = true;
                } else {
                    fieldValidationErrors.primaryphone = false;
                    for (var i = 0; i < this.state.phoneNumbers.length; i++) {
                        if (
                            this.state.primaryphone === this.state.phoneNumbers[i].phone &&
                            this.state.phoneNumbers[i].type === "mobile"
                        ) {
                            this.setState({
                                isMobile: true,
                                activeNumber: true,
                                tooltiptext: "This is a mobile number",
                                ppIcon: this.state.phoneNumbers[i].icon
                            });
                            fieldValidationErrors.primaryphone = false;
                            break;
                        } else if (
                            this.state.primaryphone === this.state.phoneNumbers[i].phone &&
                            this.state.phoneNumbers[i].type === "landline"
                        ) {
                            this.setState({
                                activeNumber: false,
                                tooltiptext: "This is landline number. Please try and get the customer's mobile number",
                                ppIcon: this.state.phoneNumbers[i].icon
                            });
                            fieldValidationErrors.primaryphone = false;
                            break;
                        } else {
                            console.log("invalid");
                            fieldValidationErrors.primaryphone = true;
                            this.setState({
                                activeNumber: false,
                                tooltiptext: "The phone number entered is invalid!",
                                ppIcon: "fa fa-times-circle"
                            });
                        }
                    }
                }

                break;
            default:
                break;
        }
        this.setState({ errors: fieldValidationErrors });
    };
    onChecked = e => {};
    handleRowChecked = e => {
        if (e.target.checked) {
            let tempArr = this.state.defaultOffers.filter(item => {
                return item.id === parseInt(e.target.name);
            });
            this.setState({
                selectedOffers: [...this.state.selectedOffers, ...tempArr]
            });
        } else {
            let filteredArray = this.state.selectedOffers.filter(item => item.id !== parseInt(e.target.name));
            this.setState({ selectedOffers: filteredArray });
        }
    };
    handleCheckboxes = event => {
        if (event.target.checked && event.target.name === "doublePlay") {
            this.setState({
                defaultOffers: [...this.state.defaultOffers, ...this.state.doublePlay]
            });
        }
        if (!event.target.checked && event.target.name === "doublePlay") {
            let filteredArray = this.state.defaultOffers.filter(e => {
                return !this.state.doublePlay.some(s => {
                    return s.id === e.id;
                });
            });

            let filteredArray1 = this.state.selectedOffers.filter(e => {
                return !this.state.doublePlay.some(s => {
                    return s.id === e.id;
                });
            });
            this.setState({
                selectedOffers: filteredArray1,
                defaultOffers: filteredArray
            });
        }

        if (event.target.checked && event.target.name === "addOn") {
            this.setState({
                defaultOffers: [...this.state.defaultOffers, ...this.state.addOn]
            });
        }
        if (!event.target.checked && event.target.name === "addOn") {
            let filteredArray = this.state.defaultOffers.filter(e => {
                return !this.state.addOn.some(s => {
                    return s.id === e.id;
                });
            });
            let filteredArray1 = this.state.selectedOffers.filter(e => {
                return !this.state.addOn.some(s => {
                    return s.id === e.id;
                });
            });
            this.setState({
                selectedOffers: filteredArray1,
                defaultOffers: filteredArray
            });
        }
    };

    removeSelectedOffers = offer => {
        offer.showCart = true;
        let filteredArray = this.state.selectedOffers.filter(item => item.id !== offer.id);
        this.setState({ selectedOffers: filteredArray });
    };

    addOffer = offer => {
        offer.showCart = false;
        const { selectedOffers } = this.state;
        this.setState({
            selectedOffers: [...selectedOffers, offer],
            defaultOffers: this.state.defaultOffers
        });
    };

    isOfferSelectionFormValid = () => {
        const errors = this.Validate(this.state.firstname, this.state.lastname, this.state.primaryphone);
        const isDisabled = Object.keys(errors).some(x => errors[x]);
        return !isDisabled;
    };

    handleNavClick = e => {
        console.log("e : ", e.target.id);
        this.setState({
            currentTab: e.target.id
        });
    };

    handleNextBtnClick = e => {
        window.localStorage.setItem("selectedOffers", JSON.stringify(this.state.selectedOffers));
        localStorage.setItem("fullName", this.state.lastname + ", " + this.state.firstname);
        const arr = this.state.navTabs;
        this.state.tabsInView.map(tab => {
            const i = arr.indexOf(tab);
            arr.splice(i, 1);
        });
        const viewTabs = this.state.tabsInView;
        if (arr[0]) {
            viewTabs.push(arr[0]);
            this.setState({
                tabsInView: viewTabs,
                currentTab: arr[0]
            });
        }
    };
    render() {
        const { firstname, lastname, selectedOffers, primaryphone, errors, currentTab, tooltiptext, ppIcon, activeNumber, defaultOffers } = this.state;
        const isOfferSelectionFormValid =
            firstname !== "" &&
            lastname !== "" &&
            primaryphone !== "" &&
            !errors.primaryphone &&
            selectedOffers.length !== 0;
        const shouldEnableNextBtn = {
            offerHeader: isOfferSelectionFormValid,
            basicServices: true,
            additionalServices: true
        }[currentTab];

        return (
            <div>
                <div className="col-sm-9 col-xs-12">
                    <div className="tab-col modal-container panel panel-default">
                        <div className="panel-body">
                            <div>
                                <nav className="collapse in" dimension="height">
                                    <ul className="nav nav-pills nav-justified">
                                        <li
                                            className={`offerHeader ${this.state.currentTab === "offerHeader" &&
                                                "active"}`}
                                            role="presentation"
                                            id="offerHeader"
                                            onClick={this.handleNavClick}
                                        >
                                            <span>Offer Selection ></span>
                                        </li>
                                        {this.state.tabsInView.includes("basicServices") && (
                                            <li
                                                className={`offerHeader ${this.state.currentTab === "basicServices" &&
                                                    "active"}`}
                                                role="presentation"
                                                id="basicServices"
                                                onClick={this.handleNavClick}
                                            >
                                                <span>Basic Services ></span>
                                            </li>
                                        )}
                                    </ul>
                                </nav>
                            </div>
                            {this.state.currentTab === "offerHeader" && 
                                <OfferSelection 
                                            errors={errors}
                                            firstname={firstname}
                                            handleChange={this.handleChange}
                                            lastname={lastname}
                                            tooltiptext={tooltiptext}
                                            ppIcon={ppIcon}
                                            activeNumber={activeNumber}
                                            onChecked={this.onChecked}
                                            handleCheckboxes={this.handleCheckboxes}
                                            selectedOffers={this.state.selectedOffers}
                                            removeSelectedOffers={this.removeSelectedOffers}
                                            defaultOffers={defaultOffers}
                                            addOffer={this.addOffer}
                                />
                            }
                            {
                                this.state.currentTab === "basicServices" && (
                                    <BasicServices updateQuote={this.props.updateQuote} selectedOffers={this.state.selectedOffers} />
                                )
                            }
                            {/* {this.state.currentTab === 'additionalServices' && <AdditionalServicesDemo />} */}
                            <div className="buttonGroupLeft">
                                <button disabled="" type="submit" className="btn btn-default disabled">
                                    Back
                                </button>
                                <button className="clearOrder btn btn-default" type="button">
                                    Clear Order
                                </button>
                            </div>
                            <div className="buttonGroupRight">
                                <button className="btn btn-default" type="button">
                                    Competitive Edge
                                </button>
                                <button
                                    onClick={this.handleNextBtnClick}
                                    className="btn btn-success"
                                    type="button"
                                    disabled={!shouldEnableNextBtn}
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rightScreen tab-col col-sm-3 col-xs-12">
                    <div className="quoteDiv">
                        <div className="quoteHeader row">
                            <span>Quote Summary</span>
                        </div>
                        {currentTab !== "offerHeader" && (
                            <div className="quoteSection row">
                                <div className="row">
                                    <Quote selectedOffers={this.state.selectedOffers} />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}
export default Ordering;
