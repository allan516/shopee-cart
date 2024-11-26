// adicionar um item

async function addItem(userCart, item) {
  userCart.push(item);
}

// Deletar item do carrinho
async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);

  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

//Remover um item - diminui um item

// async function removeItem(userCart, index) {
//   if (index >= 0 && index < userCart.length) {
//     const deleteIndex = index - 1;
//     userCart.splice(deleteIndex, 1);
//   }
// }

async function removeItem(userCart, item) {
  const indexFound = userCart.findIndex((p) => p.name === item.name);
  if (indexFound === -1) {
    console.log("Item não encontrado.");
    return;
  }

  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1;
    return;
  }

  if (userCart[indexFound].quantity == 1) {
    userCart.splice(indexFound, 1);
    return;
  }
}

// Calcular o total do carrinho
async function calculateTotal(userCart) {
  console.log("\nValor total:");
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(`Total: ${result} 🎁`);
}

async function displayCart(userCart) {
  console.log("\nCarrinho de Compras: ");
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - R$ ${item.price} | ${
        item.quantity
      }x | Subtotal = ${item.subtotal()}`
    );
  });
}

export { addItem, calculateTotal, deleteItem, removeItem, displayCart };
