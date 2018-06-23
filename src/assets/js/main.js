var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: './assets/img/green-socks.jpeg',
        link: 'https://www.google.com.br/search?q=socks&oq=socks&aqs=chrome..69i57j69i60j0l4.816j0j7&sourceid=chrome&ie=UTF-8',
        inventory: 100,
        onSale: false,
        sizes: ['P', 'M', 'G', 'XG'],
        cart: 0,
        variants: [
            {
                variantId: 01,
                variantColor: 'green',
                variantImage: './assets/img/green-socks.jpeg'
            },
            {
                variantId: 02,
                variantColor: 'blue',
                variantImage: './assets/img/blue-socks.jpeg'
            }
        ],
    },
    methods: {
        addToCart() {
            this.cart++;
        },
        removeFromCart() {
            this.cart--;
        },
        updateProduct(variantImage){
            this.image = variantImage;
        }
    }
});