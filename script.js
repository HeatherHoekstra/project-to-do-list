getList().then(response => {
  const lijst = response;
  showList(lijst);
});

const showList = lijst => {
  const jeTaak = lijst.name;
  const test = document.getElementById("test");
  test.innerHTML = jeTaak;
};
