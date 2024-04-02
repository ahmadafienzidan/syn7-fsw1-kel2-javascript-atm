const readLine = require("readline");

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const accountA = {
  name: "John Doe",
  balance: 0,
  pin: "123456",
  cardNumber: "1234 5678 1234 5678",
  transactions: [],
};

const accountB = {
  name: "Jane Doe",
  balance: 0,
  pin: "654321",
  cardNumber: "5678 1234 5678 1234",
  transactions: [],
};

const accounts = [accountA, accountB];


const cardNumber = accounts.map((account) => {
  return account["cardNumber"].replace(/ /g,"")
})

function validateCardNumber(input) {
  if (cardNumber.includes(input.toString())) {
    return true
  } else {
    return false
  }
}


function validatePin() {}


function checkBalance(cardNumber, pin) {
  const findAccount = accounts.find((acc) => acc.cardNumber === cardNumber && acc.pin === pin);
  if (findAccount) {
    console.log("Saldo Anda saat ini adalah: " + findAccount.balance);
  } else {
    console.log("Nomor kartu atau PIN yang Anda masukkan salah.");
  }
}


async function deposit(cardNumber) {
  let index = cardNumbers.indexOf(cardNumber)
  const jenis = "deposit"
  const jumlah = await askQuestion("Jumlah deposit: ")

  // add to transaction
  accounts[index].transactions.push({
    jenis,
    jumlah
  })
  
  // change balance
  accounts[index].balance += parseInt(jumlah)
  
  console.log(`
    status: success
    saldo: ${accounts[index].balance}
    transactions: ${JSON.stringify(accounts[index].transactions, null, "  ")}
  `)
}


function viewTransactions() {}

function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function main() {
  do {
    console.log("Menu ATM:");
    console.log("1. Cek Saldo");
    console.log("2. Setor Tunai");
    console.log("3. Riwayat Transaksi");
    console.log("4. Keluar");

    choice = await askQuestion("Masukkan pilihan Anda: ");

    switch (parseInt(choice)) {
      case 1:
        const cardNumber = await askQuestion("Masukkan nomor kartu Anda: ");
        const pin = await askQuestion("Masukkan PIN Anda: ");
        checkBalance(cardNumber, pin);
        break;
      case 2:
        break;
    }
  } while (choice !== 4);
}

main();
