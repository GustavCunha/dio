
function addItem(userCart, item) {
    userCart.push(item);
}

function calculateTotal(userCart) {
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`Total: R$ ${result.toFixed(2)}`);
    return result;
}

function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);
    if (index !== -1) {
        userCart.splice(index, 1);
        console.log(`Item '${name}' removido do carrinho.`);
    } else {
        console.log(`Item '${name}' não encontrado no carrinho.`);
    }
}

function removeItem(userCart, item) {
    const indexFound = userCart.findIndex((p) => p.name === item.name);
    if (indexFound === -1) {
        console.log('Item não encontrado');
        return;
    }
    if (userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
        return;
    }
    if (userCart[indexFound].quantity === 1) {
        userCart.splice(indexFound, 1);
        return;
    }
}

function displayCart(userCart) {
    console.log('\nShopee cart list:');
    if (userCart.length === 0) {
        console.log('Carrinho vazio.');
        return;
    }
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price.toFixed(2)} | ${item.quantity}x | Subtotal R$ ${item.subtotal().toFixed(2)}`);
    });
}

export { addItem, calculateTotal, deleteItem, displayCart, removeItem };
