// createReservationPrompt.js
import peopleIcon from "../assets/person_40dp_000000_FILL0_wght400_GRAD0_opsz40.svg";
import dropDownArrowIcon from "../assets/arrow_downward_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg";
import calendarIcon from "../assets/calendar_today_40dp_000000_FILL0_wght400_GRAD0_opsz40.svg";
import clockIcon from "../assets/nest_clock_farsight_analog_40dp_000000_FILL0_wght400_GRAD0_opsz40.svg"

export const createReservationPrompt = () => {

    const createIcon = (src, alt) => {
        const img = document.createElement("img");
        img.classList.add("reservation-icon");
        img.src = src;
        img.alt = alt;
        return img;
    }

    const createReservationButton = (icon1, alt, desc) => {
        const button = document.createElement("button");
        button.classList.add("reservation-button");
        const buttonIcon = createIcon(icon1, alt);
        const span = document.createElement("span");
        span.textContent = desc;
        const downArrowIcon = createIcon(dropDownArrowIcon, "dropdown arrow");

        button.append(buttonIcon, span, downArrowIcon);

        return button;

    }

    const reservationContainer = document.createElement("div");
    reservationContainer.classList.add("reservation-options");

    const reservationButtons = document.createElement("ul");
    reservationButtons.classList.add("reservation-buttons");

    const reservationItem1 = document.createElement("li");
    const reservationButton1 = createReservationButton(peopleIcon, "people", "2 People")
    reservationItem1.append(reservationButton1);

    const reservationItem2 = document.createElement("li");
    const reservationButton2 = createReservationButton(calendarIcon, "calendar", "Today");
    reservationItem2.append(reservationButton2);

    const reservationItem3 = document.createElement("li");
    const reservationButton3 = createReservationButton(clockIcon, "clock", "11:00 AM");
    reservationItem3.append(reservationButton3);

    reservationButtons.append(reservationItem1, reservationItem2, reservationItem3);

    const reserveButton = document.createElement("button");
    reserveButton.classList.add("reservation-button", "find-table-button");
    reserveButton.textContent = "Reserve a Table";

    reservationContainer.append(reservationButtons, reserveButton);

    return reservationContainer;

}