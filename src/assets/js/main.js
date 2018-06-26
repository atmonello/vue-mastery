var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        brand: 'Vue Mastery',
        selectedVariant: 0,
        link: 'https://www.google.com.br/search?q=socks&oq=socks&aqs=chrome..69i57j69i60j0l4.816j0j7&sourceid=chrome&ie=UTF-8',
        sizes: ['P', 'M', 'G', 'XG'],
        cart: 0,
        variants: [
            {
                variantId: 01,
                variantColor: 'green',
                variantImage: './assets/img/green-socks.jpeg',
                variantQuantity: 10,
                variantOnSale: true
            },
            {
                variantId: 02,
                variantColor: 'blue',
                variantImage: './assets/img/blue-socks.jpeg',
                variantQuantity: 0,
                variantOnSale: false
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
        updateProduct(index){
            this.selectedVariant = index;
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product;
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity;
        },
        onSale() {
            if (this.variants[this.selectedVariant].variantOnSale) return this.title + ' is on Sale!';
            else return this.title + ' not on Sale! :(';
        }
    },
});