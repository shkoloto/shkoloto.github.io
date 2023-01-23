// list s uroci/danni
const lessons = [
  {
    title: "Repeat the above js way!",
    examples: ["ex1", "ex2", "ex3", "ex4"],
    descriptions: ["pros: reusable, dynamic", "cons: js izglejda plasheshto"],
    url: ["lesson_2.jpg", "lesson_2_1.jpg"],
  },
  {
    title: "Same template",
    examples: ["ex1", "ex2", "ex3"],
    descriptions: [
      "preizpolzvame edin i sysht template",
      "zapylvame go s danni dinamichno",
      "sega dannite idvat ot samiq fail no e syshto tolkova lesno da idvat ot server",
      "ex: facebook posts, tweets, etc...",
    ],
    url: ["lesson_2.jpg", "lesson_2_2.jpg"],
  },
  {
    title: "different content",
    examples: [
      "Na tozi princip rabotqt vsichki frameworks",
      "s mnogo po lesen syntax (stava samo po lesno)",
      "tuk ne gledame sintaks daje iskame da razberem na kakyv princip raboti celiq film",
    ],
    descriptions: ["something something", "bla bla", "bla bla bla"],
    url: ["lesson_2.jpg", "lesson_2_3.jpg"],
  },
  {
    title: "try out and for another time",
    examples: [
      "otvori koda i go razgledai",
      "probvai da dobavish urok",
      "probvai da runnesh funkciq 2 pyti",
      "save na dokumenta i refresh na stranicata",
      "ako neshto se schupi vinagi ima backup",
      "da chupish ponqkoga e edinstvenata opciq!",
    ],
    descriptions: [
      "drazni me kak na vseki urok pishe example i description",
      "za sledvasht pyt shte go napravim dvamata tova da e dinamichno",
      "clockoutvam 45 min pisahme :D",
    ],
    url: ["lesson_2.jpg", "lesson_2_4.jpg"],
  },
];

// pravim funkciq koqto shte izpolzvame mnogokratno
// imenata koito slagame v () sa danni koito shte polzvame vyv funkciqta no podavame otvyn
// ex ako runnem lessonTemplate("hubavata jiji") shte napravi urok s title ...
function lessonTemplate(title, examples, descriptions, imgUrl, id) {
  //pravim variable s ime template i pishem html-a izpolzvaiki malko js za dinamika
  // ${} e za da escapenem ot html
  // ${variable_name} postavq dannite ot dadeniq variable
  // .map() izpolzvame kogato imame poveche ot 1 set danni vyv variable. inache ${variablename}
  let template = `
    <div class="lesson-container">
        <h3 class="lesson-title">${title}</h3>
        <div class="lesson-example">
            <p class="slug">Example:</p>
            ${examples.map((example) => `<p>${example}</p>`).join(" \n ")}
        </div>
        <div class="lesson-description">
            <p class="slug">Description:</p>
            ${descriptions
              .map((description) => `<p>${description}</p>`)
              .join("\n ")}
        </div>
        <div class="lesson-code">
        <p class="slug">Code:</p>
        ${imgUrl.map((img) => `<img src="${img}" alt="image of code" />`)}
        </div>
    </div>`;
  // na tozi variable mu naznachavame element ot htmla s id koeto idva ot drugade
  const main = document.getElementById(`${id}`);
  // tuk variable main mu insertvame html template koito napisahme po gore
  main.insertAdjacentHTML("beforeend", template);
}
// sega pishem funkciq koqto shte loopne vseki urok ot variable lessons
// kato izvadi dannite za vseki individualen urok
// i na vseki loop gi podava na po gornata funkciq
function createLessons() {
  //loopvame variable lessons tolkova pyti kolkoto uroka/obekta ima
  lessons.forEach((singleLesson) => {
    //vseki loop vikame gornata funkciq s parametri izvadeni ot singleLesson
    lessonTemplate(
      singleLesson.title,
      singleLesson.examples,
      singleLesson.descriptions,
      singleLesson.url,
      "js-generated"
    );
  });
}
createLessons();
