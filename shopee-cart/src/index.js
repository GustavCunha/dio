import * as cartService from './services/cart.js';
import createItem from './services/item.js';

async function main() {
	const myCart = [];
	const myWishList = [];

	try {
		const item1 = createItem('carrinho', 40.0, 1);
		const item2 = createItem('geladeira', 160.0, 3);

		cartService.addItem(myCart, item1);
		cartService.addItem(myCart, item2);

		cartService.removeItem(myCart, item2);
		cartService.removeItem(myCart, item2);

		cartService.displayCart(myCart);

		// cartService.deleteItem(myCart, item2.name);

		console.log('\nCart total is:');
		cartService.calculateTotal(myCart);
	} catch (error) {
		console.error('Erro ao executar operações no carrinho:', error);
	}
}

main();