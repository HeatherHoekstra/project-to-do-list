async function getList() {
  const listUrl = `https://wincacademydatabase.firebaseio.com/heather/takenlijst.json`;
  const result = await fetch(listUrl, {
    method: "GET"
  });
  return result;
}

async function addTask(task) {
  const listUrl = `https://wincacademydatabase.firebaseio.com/heather/takenlijst.json`;
  const result = await fetch(listUrl, {
    method: "POST",
    body: `{"taak": "${task}"}`
  });
  return result;
}
