// Story:
// Klient zapisuje spotkania ze swoimi kontrahentami w bazie danych w odpowiednich godzinach. Brakuje mu możliwości wyświetlania spotkań na jednym widoku. Przygotuj tablicę obiektów, która będzie przechowywała godzinę, dzień, nazwę i dane kontrahenta w tabeli spotkań. Zainspiruj się widokiem poniżej. Obok nazwy dnia powinna wyświetlać się data. Domyślnie wyświetla się bieżący tydzień. Na dole dodaj przyciski do przełączania pomiędzy tygodniami.

const meetings = [
  {
    time: "10:00",
    date: "2022-08-30",
    name: "WizardsOfCode",
  },
  {
    time: "11:00",
    date: "2022-08-30",
    name: "Google",
  },
  {
    time: "14:00",
    date: "2022-08-30",
    name: "Tencent",
  },
  {
    time: "13:00",
    date: "2022-09-14",
    name: "IBM",
  },
  {
    time: "12:00",
    date: "2022-09-14",
    name: "IMB",
  },
  {
    time: "10:00",
    date: "2022-09-12",
    name: "Rozgrzewka",
  },
  {
    time: "12:00",
    date: "2022-09-13",
    name: "Spanko",
  },

  {
    time: "13:00",
    date: "2022-09-05",
    name: "Alibaba",
  },
  {
    time: "11:00",
    date: "2022-09-05",
    name: "Google",
  },
  {
    time: "12:00",
    date: "2022-09-05",
    name: "Google1",
  },

  {
    time: "10:00",
    date: "2022-09-05",
    name: "Muzyka ",
  },
  {
    time: "11:00",
    date: "2022-09-06",
    name: "Samsung",
  },
  {
    time: "13:00",
    date: "2022-09-08",
    name: "Zbita Szybka0",
  },
  {
    time: "14:00",
    date: "2022-09-08",
    name: "Zbita Szybka1",
  },
  {
    time: "12:00",
    date: "2022-08-29",
    name: "YouTube",
  },
  {
    time: "11:00",
    date: "2022-09-29",
    name: "YouTube",
  },
  {
    time: "11:00",
    date: "2022-09-02",
    name: "Google",
  },
];

const table = document.querySelector("table");
let weekCounterRelatedToMonday = 0;

function getDatesForCurrentWeek() {
  let week = [];
  for (let i = 1; i <= 7; i++) {
    let curr = new Date();
    let first = curr.getDate() - curr.getDay() + i + weekCounterRelatedToMonday;
    let day = new Date(curr.setDate(first)).toISOString().split("T")[0];
    week.push(day);
  }
  return week;
}

//https://bobbyhadz.com/blog/javascript-get-monday-of-current-week

const generateTh = (dayName, date) => {
  return `<th class="title">GODZ.</th>
            <th class="title day">${dayName}<br />
            ${date}</th>`;
};

const createTable = () => {
  const header = document.createElement("thead");
  const body = document.createElement("tbody");
  const weekDays = ["Poniedzielek"];

  header.innerHTML = `${generateTh(weekDays[0], getDatesForCurrentWeek()[0])}
            <th class="title">GODZ.</th>
            <th class="title day">WTOREK<br />
            ${getDatesForCurrentWeek()[1]}</th>
            <th class="title">GODZ.</th>
            <th class="title day ">ŚRODA<br />
            ${getDatesForCurrentWeek()[2]}</th>
            <th class="title">GODZ.</th>
            <th class="title day">CZWARTEK<br />
            ${getDatesForCurrentWeek()[3]}</th>
            <th class="title">GODZ.</th>
            <th class="title day">PIĄTEK<br />
            ${getDatesForCurrentWeek()[4]}</th>`;

  table.appendChild(header);
  table.appendChild(body);
  for (let i = 0; i < 5; i++) {
    const tr = document.createElement("tr");
    body.appendChild(tr);
    for (let e = 0; e < 5; e++) {
      const time = document.createElement("th");
      const day = document.createElement("th");
      day.classList.add(`d${e}`);
      time.classList.add(`h${e}`);
      tr.appendChild(time);
      tr.appendChild(day);
    }
  }

  const h0 = Array.from(document.getElementsByClassName("h0"));
  const h1 = Array.from(document.getElementsByClassName("h1"));
  const h2 = Array.from(document.getElementsByClassName("h2"));
  const h3 = Array.from(document.getElementsByClassName("h3"));
  const h4 = Array.from(document.getElementsByClassName("h4"));

  const day0 = Array.from(document.getElementsByClassName("d0"));
  const day1 = Array.from(document.getElementsByClassName("d1"));
  const day2 = Array.from(document.getElementsByClassName("d2"));
  const day3 = Array.from(document.getElementsByClassName("d3"));
  const day4 = Array.from(document.getElementsByClassName("d4"));

  const allDay = [day0, day1, day2, day3, day4];
  const allH = [h0, h1, h2, h3, h4];

  const handleDate = () => {
    meetings.forEach((item) => {
      for (let index = 0; index < 5; index++) {
        if (item.date === getDatesForCurrentWeek()[index]) {
          for (let i = 0; i < 5; i++) {
            if (item.time === `1${i}:00`) {
              allDay[index][i].textContent = item.name;
              allH[index][i].textContent = item.time;
            }
          }
        }
      }
    });
  };

  handleDate();
};
createTable();

const prevWeek = () => {
  weekCounterRelatedToMonday -= 7;
  table.textContent = "";
  createTable();
};

const nextWeek = () => {
  table.textContent = "";
  weekCounterRelatedToMonday += 7;
  createTable();
};

document.querySelector(".prev").addEventListener("click", prevWeek);
document.querySelector(".next").addEventListener("click", nextWeek);
