const items = document.querySelector(".items");
const input = document.querySelector(".footer_input");
const addBtn = document.querySelector(".footer_button");

function onAdd() {
  //1. 사용자 텍스트 가져오기
  const text = input.value;
  if (text === "") {
    input.focus();
    return;
  }
  //2. 새로운 아이템 생성(텍스트 + 삭제 버튼)
  const item = createItem(text);
  //3. items 컨테이너안에 새로만든 아이템을 추가
  items.appendChild(item);
  //4. 추가된 아이템 스크롤링
  item.scrollIntoView({ block: "center" });
  //5. input 초기화한다.
  input.value = "";
  input.focus();
}
let id = 0;
function createItem(text) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item_row");
  itemRow.setAttribute("data-id", id);
  itemRow.innerHTML = `
    <div class="item">
      <span class="item_name">${text}</span>
      <button class="item_delete" >
        <i class="fas fa-trash-alt" data-id=${id}></i>
      </button>
    </div>
    <div class="item_divider"></div>
    `;
  id++;

  return itemRow;
}

addBtn.addEventListener("click", () => {
  onAdd();
});

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    onAdd();
  }
});

items.addEventListener("click", (event) => {
  const id = event.target.dataset.id;
  if (id) {
    const toBeDeleted = document.querySelector(`.item_row[data-id="${id}"]`);
    toBeDeleted.remove();
  }
  // if(e.target.node)
});
