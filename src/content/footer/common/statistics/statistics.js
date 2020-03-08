import React from "react";
import "./statistics.less";

export default function Statistics(props) {
    if (!props.statisticsData) return;

    const numOfVacancies = props.statisticsData.numOfVacancies;
    const numOfResumes = props.statisticsData.numOfResumes;
    const numOfCompanies = props.statisticsData.numOfCompanies;
    const numOfInvitations = props.statisticsData.numOfInvitations;

    return (
        <div className="statistics">
            {` Сегодня на сайте ${numOfVacancies} вакансий,  ${numOfResumes}  резюме, ${numOfCompanies} компании и 
             за неделю ${numOfInvitations} приглашения`}
        </div>
    );
}
