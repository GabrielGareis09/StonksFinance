const transactionFilter =
  document.getElementById("transactionFilter");

const transactionList =
  document.querySelector(".transaction-list");

/* PEGAR TRANSAÇÕES */

let transactions =
  JSON.parse(
    localStorage.getItem("transactions")
  ) || [];

/* RENDERIZAR */

function renderTransactions(filter = "all") {

  transactionList.innerHTML = "";

  transactions.forEach((transaction) => {

    const category =
      transaction.type;

    if (
      filter !== "all" &&
      category !== filter
    ) {
      return;
    }

    const isIncome =
      transaction.type === "entrada";

    const transactionItem =
      document.createElement("article");

    transactionItem.classList.add(
      "transaction-item"
    );

    transactionItem.innerHTML = `

      <div class="transaction-icon ${isIncome ? "income" : "expense"}">

        <i class="fas ${isIncome ? "fa-money-bill-trend-up" : "fa-cart-shopping"}"></i>

      </div>

      <div class="transaction-info">

        <strong>
          ${transaction.title}
        </strong>

        <span>
          ${isIncome ? "Entrada adicionada" : "Saída adicionada"}
        </span>

      </div>

      <div class="transaction-value ${isIncome ? "positive" : "negative"}">

        ${isIncome ? "+" : "-"} R$ ${transaction.value}

      </div>

    `;

    transactionList.prepend(
      transactionItem
    );

  });

}

/* FILTRO */

transactionFilter.addEventListener(
  "change",
  () => {

    renderTransactions(
      transactionFilter.value
    );

  }
);

/* INICIAR */

renderTransactions();