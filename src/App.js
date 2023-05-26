import React, { useState } from "react";
import data from "./data";
import List from "./List";

function formatDate(date) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  return date.toLocaleDateString(undefined, options);
}

function App() {
  const [people] = useState(data);
  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePreviousDay = () => {
    const previousDate = new Date(currentDate);
    previousDate.setDate(previousDate.getDate() - 1);
    setCurrentDate(previousDate);
  };

  const handleNextDay = () => {
    const nextDate = new Date(currentDate);
    nextDate.setDate(nextDate.getDate() + 1);
    setCurrentDate(nextDate);
  };

  const handleMonthChange = (event) => {
    const selectedMonth = parseInt(event.target.value);
    const newDate = new Date(currentDate);
    newDate.setMonth(selectedMonth);
    setCurrentDate(newDate);
  };

  const filteredPeople = people.filter(
    (person) =>
      person.birthday.getMonth() === currentDate.getMonth() &&
      person.birthday.getDate() === currentDate.getDate()
  );

  return (
    <main>
      <section className="container">
        <h1 className="birthday--text">
          <span class="birthday-word birthday-word-1">Happy </span>
          <span class="birthday-word birthday-word-2">Birthday</span>
          <span class="birthday-word birthday-word-3">!!</span>
        </h1>
        <div className="month">
          <select
            id="month-select"
            onChange={handleMonthChange}
            value={currentDate.getMonth()}
          >
            <option value={0}>January</option>
            <option value={1}>February</option>
            <option value={2}>March</option>
            <option value={3}>April</option>
            <option value={4}>May</option>
            <option value={5}>June</option>
            <option value={6}>July</option>
            <option value={7}>August</option>
            <option value={8}>September</option>
            <option value={9}>October</option>
            <option value={10}>November</option>
            <option value={11}>December</option>
          </select>
        </div>

        <h2>
          {filteredPeople.length} birthdays on {formatDate(currentDate)}
        </h2>
        <List people={filteredPeople} />
        <div className="myButtons">
          <button onClick={handlePreviousDay}>Previous Day</button>
          <button onClick={handleNextDay}>Next Day</button>
        </div>
      </section>
    </main>
  );
}

export default App;
