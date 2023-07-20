import { useState } from "react";

const FilterConfig = () => {

    const [isSportOpen, setIsSportOpen] = useState(false);
    const [isLocationOpen, setIsLocationOpen] = useState(false);
    const [isUpcomingEventsOpen, setIsUpcomingEventsOpen] = useState(false);
    const [isEventSeriesOpen, setIsEventSeriesOpen] = useState(false);
    const [isTypeOpen, setIsTypeOpen] = useState(false);
    const [isBallTypeOpen, setIsBallTypeOpen] = useState(false);
    const [isVerifiedEventOpen, setIsVerifiedEventOpen] = useState(false);
    const [isPriceMoneyOpen, setIsPriceMoneyOpen] = useState(false);
    const [isMoreOpen, setIsMoreOpen] = useState(false); 

    const filters = [
        {
            filterTitle: "Sport",
            openFilter: () => {
            setIsSportOpen(!isSportOpen);
            setIsLocationOpen(false);
            setIsUpcomingEventsOpen(false);
            setIsEventSeriesOpen(false);
                setIsTypeOpen(false);
                setIsBallTypeOpen(false);
            setIsVerifiedEventOpen(false);
            setIsPriceMoneyOpen(false);
            setIsMoreOpen(false);
            },
            isFilterOpen: isSportOpen,
        },
        {
            filterTitle: "Location",
            openFilter: () => {
            setIsSportOpen(false);
            setIsLocationOpen(!isLocationOpen);
            setIsUpcomingEventsOpen(false);
            setIsEventSeriesOpen(false);
                setIsTypeOpen(false);
                setIsBallTypeOpen(false);
            setIsVerifiedEventOpen(false);
            setIsPriceMoneyOpen(false);
            setIsMoreOpen(false);
            },
            isFilterOpen: isLocationOpen,
        },
        {
            filterTitle: "Upcoming Events",
            openFilter: () => {
            setIsSportOpen(false);
            setIsLocationOpen(false);
            setIsUpcomingEventsOpen(!isUpcomingEventsOpen);
            setIsEventSeriesOpen(false);
                setIsTypeOpen(false);
                setIsBallTypeOpen(false);
            setIsVerifiedEventOpen(false);
            setIsPriceMoneyOpen(false);
            setIsMoreOpen(false);
            },
            isFilterOpen: isUpcomingEventsOpen,
        },
        {
            filterTitle: "Event Series",
            openFilter: () => {
            setIsSportOpen(false);
            setIsLocationOpen(false);
            setIsUpcomingEventsOpen(false);
            setIsEventSeriesOpen(!isEventSeriesOpen);
                setIsTypeOpen(false);
                setIsBallTypeOpen(false);
            setIsVerifiedEventOpen(false);
            setIsPriceMoneyOpen(false);
            setIsMoreOpen(false);
            },
            isFilterOpen: isEventSeriesOpen,
        },
        {
            filterTitle: "Type",
            openFilter: () => {
            setIsSportOpen(false);
            setIsLocationOpen(false);
            setIsUpcomingEventsOpen(false);
            setIsEventSeriesOpen(false);
            setIsTypeOpen(!isTypeOpen);
            setIsBallTypeOpen(false);
            setIsVerifiedEventOpen(false);
            setIsPriceMoneyOpen(false);
            setIsMoreOpen(false);
            },
            isFilterOpen: isTypeOpen,
        },
        {
            filterTitle: "Ball Type",
            openFilter: () => {
            setIsSportOpen(false);
            setIsLocationOpen(false);
            setIsUpcomingEventsOpen(false);
            setIsEventSeriesOpen(false);
            setIsTypeOpen(false);
            setIsBallTypeOpen(!isBallTypeOpen);
            setIsVerifiedEventOpen(false);
            setIsPriceMoneyOpen(false);
            setIsMoreOpen(false);
            },
            isFilterOpen: isBallTypeOpen,
        },
        {
            filterTitle: "Verified Event",
            openFilter: () => {
            setIsSportOpen(false);
            setIsLocationOpen(false);
            setIsUpcomingEventsOpen(false);
            setIsEventSeriesOpen(false);
                setIsTypeOpen(false);
                setIsBallTypeOpen(false);
            setIsVerifiedEventOpen(!isVerifiedEventOpen);
            setIsPriceMoneyOpen(false);
            setIsMoreOpen(false);
            },
            isFilterOpen: isVerifiedEventOpen,
        },
        {
            filterTitle: "Prize Money",
            openFilter: () => {
            setIsSportOpen(false);
            setIsLocationOpen(false);
            setIsUpcomingEventsOpen(false);
            setIsEventSeriesOpen(false);
                setIsTypeOpen(false);
                setIsBallTypeOpen(false);
            setIsVerifiedEventOpen(false);
            setIsPriceMoneyOpen(!isPriceMoneyOpen);
            setIsMoreOpen(false);
            },
            isFilterOpen: isPriceMoneyOpen,
        },
        {
            filterTitle: "More...",
            openFilter: () => {
            setIsSportOpen(false);
            setIsLocationOpen(false);
            setIsUpcomingEventsOpen(false);
            setIsEventSeriesOpen(false);
                setIsTypeOpen(false);
                setIsBallTypeOpen(false);
            setIsVerifiedEventOpen(false);
            setIsPriceMoneyOpen(false);
            setIsMoreOpen(!isMoreOpen);
            },
            isFilterOpen: isMoreOpen,
        },
    ];

    return filters;
}

export default FilterConfig;