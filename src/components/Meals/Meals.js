import AvailabelMeals from "./AvailableMeals";
import MealsSummary from './MealsSummary';
import { Fragment } from "react";

const Meals = () => {
    return (
        <Fragment>
            <MealsSummary />
            <AvailabelMeals />
        </Fragment>)
}

export default Meals;