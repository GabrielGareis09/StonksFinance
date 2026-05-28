const goalForm =
  document.getElementById("goalForm");

const goalsContainer =
  document.getElementById("goalsContainer");

const totalGoals =
  document.getElementById("totalGoals");

let goalsCount = 3;

goalForm.addEventListener(
  "submit",
  (event) => {

    event.preventDefault();

    const goalName =
      document.getElementById("goalName").value;

    const goalValue =
      Number(
        document.getElementById("goalValue").value
      );

    const goalSaved =
      Number(
        document.getElementById("goalSaved").value
      );

    const goalIcon =
      document.getElementById("goalIcon").value;

    const percentage =
      Math.min(
        (goalSaved / goalValue) * 100,
        100
      ).toFixed(0);

    const goalCard =
      document.createElement("div");

    goalCard.classList.add("goal-card");

    goalCard.innerHTML = `

      <div class="goal-top">

        <div>

          <h5>
            ${goalName}
          </h5>

          <span>
            Objetivo: R$ ${goalValue}
          </span>

        </div>

        <div class="goal-icon">

          <i class="fas ${goalIcon}"></i>

        </div>

      </div>

      <div class="progress-area">

        <div class="progress">

          <div
            class="progress-bar"
            style="width: ${percentage}%"
          ></div>

        </div>

        <div class="progress-info">

          <span>
            R$ ${goalSaved} guardados
          </span>

          <span>
            ${percentage}%
          </span>

        </div>

      </div>

    `;

    goalsContainer.prepend(goalCard);

    goalsCount++;

    totalGoals.textContent =
      goalsCount;

    goalForm.reset();

  }
);