import React from "react";

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, birthday, image } = person;
        const currentDate = new Date();
        const birthdate = new Date(birthday);

        const age = currentDate.getFullYear() - birthdate.getFullYear();
        const isBirthdayToday =
          currentDate.getMonth() === birthdate.getMonth() &&
          currentDate.getDate() === birthdate.getDate();

        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              {isBirthdayToday ? (
                <p>Today is their {age} birthday!</p>
              ) : (
                <p>
                  {name} turns {age} years old today!
                </p>
              )}
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
