import React from "react";
import "./Statistics.less";

/* Компонент Statistics*/
export default function Statistics(props) {
  if (!props.statisticsData) return;

  const numOfVacancies = props.statisticsData.numOfVacancies;
  const numOfResumes = props.statisticsData.numOfResumes;
  const numOfCompanies = props.statisticsData.numOfCompanies;
  const numOfInvitations = props.statisticsData.numOfInvitations;

  const vacanciesExpressions = ["вакансия", "вакансии", "вакансий"];
  const resumesExpressions = ["резюме", "резюме", "резюме"];
  const companiesExpressions = ["компания", "компании", "компаний"];
  const invitationsExpressions = ["приглашение", "приглашения", "приглашений"];

  return (
    <div className="statistics">
      Сегодня на сайте
      {` ${numOfVacancies} ${declension(
        numOfVacancies,
        vacanciesExpressions
      )}, `}
      {`${numOfResumes} ${declension(numOfResumes, resumesExpressions)}, `}
      {`${numOfCompanies} ${declension(
        numOfCompanies,
        companiesExpressions
      )} и `}
      за неделю
      {` ${numOfInvitations} ${declension(
        numOfInvitations,
        invitationsExpressions
      )}.`}
    </div>
  );
}

//склонение окончаний
function declension(num, expressions) {
  const [one, some, many] = expressions;
  num = Number(num.replace(/\s/g, ""));
  let result;
  let count = num % 100;
  if (count >= 5 && count <= 20) {
    result = many;
  } else {
    count = count % 10;
    if (count == 1) {
      result = one;
    } else if (count >= 2 && count <= 4) {
      result = some;
    } else {
      result = many;
    }
  }
  return result;
}
