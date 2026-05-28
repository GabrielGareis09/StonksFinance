const financeForm =
  document.getElementById("financeForm");

const transactionList =
  document.getElementById("transactionList");

/* CARREGAR TRANSAÇÕES */

let transactions =
  JSON.parse(
    localStorage.getItem("transactions")
  ) || [];

/* RENDERIZAR */

function renderTransactions() {

  transactionList.innerHTML = "";

  transactions.forEach((transaction) => {

    const isIncome =
      transaction.type === "entrada";

    const transactionItem =
      document.createElement("div");

    transactionItem.classList.add(
      "transaction-item"
    );

    transactionItem.innerHTML = `

      <div class="transaction-left">

        <div class="transaction-icon ${isIncome ? "income" : "expense"}">

          <i class="fas ${isIncome ? "fa-arrow-up" : "fa-arrow-down"}"></i>

        </div>

        <div>

          <strong>
            ${transaction.title}
          </strong>

          <p>
            ${isIncome ? "Entrada adicionada" : "Saída adicionada"}
          </p>

        </div>

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

/* ADICIONAR */

financeForm.addEventListener(
  "submit",
  (event) => {

    event.preventDefault();

    const title =
      document.getElementById("title").value;

    const value =
      document.getElementById("value").value;

    const type =
      document.getElementById("type").value;

    const newTransaction = {
      title,
      value,
      type
    };

    transactions.push(
      newTransaction
    );

    localStorage.setItem(
      "transactions",
      JSON.stringify(transactions)
    );

    renderTransactions();

    financeForm.reset();

  }
);

/* INICIAR */

renderTransactions();