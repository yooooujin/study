// 현재 물품
const items = {
  milk: 1,
  egg: 2,
  kimchi: 6,
};

// 장보기 목록 만들기
const createShoppingList = (currentItems, neededItems) => {
  const shoppingList = {};

  Object.entries(neededItems).forEach(([neededItem, neededItemCount]) => {
    if (!currentItems[neededItem]) {
      shoppingList[neededItem] = neededItemCount;
    } else if (currentItems[neededItem] - neededItemCount < 0) {
      shoppingList[neededItem] = neededItemCount - currentItems[neededItem];
    }
  });

  return shoppingList;
};

// 냉장고 확인하기
const checkRefrigerator = () => {
  return items;
};

// 목록에 있는 것 구입하기
const buyItems = (shoppingList) => {
  Object.entries(shoppingList).forEach(([purchaseItem, purchaseItemCount]) => {
    if (!items[purchaseItem]) items[purchaseItem] = 0;
    items[purchaseItem] += purchaseItemCount;
    delete shoppingList[purchaseItem];
  });
};

// 장보기
const shopping = () => {
  const currentItems = checkRefrigerator();
  const neededItems = {
    milk: 1,
    cheese: 3,
    kimchi: 1,
  };

  console.log("------------------------------------------");
  console.log(" ");
  console.log("현재 냉장고에 들어 있는 물품 >", currentItems);
  console.log("필요한 물품들 >", neededItems);
  console.log(" ");

  const shoppingList = createShoppingList(currentItems, neededItems);

  console.log("------------------------------------------");
  console.log(" ");
  console.log("사야할 물품 목록 >", shoppingList);
  console.log(" ");
  console.log("------------------------------------------");

  buyItems(shoppingList);

  console.log(" ");
  console.log("장보기 완료!");
  console.log("냉장고 물품 확인하기 >", checkRefrigerator());
  console.log(" ");
  console.log("------------------------------------------");
};

shopping();
