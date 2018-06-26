Vue.component('product-sizes', {
    props: {
        sizes: {
            Type: Array,
            required: true
        }
    },
    template: '\
        <div class="product-sizes">\
            <p>Available sizes:</p>\
            <ul>\
                <li v-for="size in sizes">{{ size }}</li>\
            </ul>\
        </div>\
    ',
    
});

Vue.component('product', {
    props: {
        premium: {
            required: true,
            type: Boolean,
        },
        cart: {
            type: Array,
            required: true,
        }
    },
    template: '\
    <div class="product">\
        <div class="product-image">\
            <img v-bind:src="image">\
        </div>\
        <div class="product-info">\
            <h1><strong>{{ title }}</strong></h1>\
            <product-sizes :sizes="sizes"></product-sizes>\
            <div v-for="(variant, index) in variants" :key="variant.variantId" class="color-box" :style="{ backgroundColor: variant.variantColor }" v-on:mouseover="updateProduct(index)"></div>\
            <p v-if="inStock">In Stock</p>\
            <p v-show="inStock">Shipping: {{ shipping }}</p>\
            <p v-else :class="{ outOfStock: !inStock }">Out of Stock</p>\
            <p><a v-bind:href="link" target="_vblank">More products like this.</a></p>\
            <p v-show="onSale"><strong>{{ onSale }}</strong></p>\
            <button class="add ease" v-on:click="addToCart" :disabled="!inStock" :class="{ disabled: !inStock }">\
                Add to cart\
            </button>\
            <button class="remove ease" v-show="this.cart.length > 0" v-on:click="removeFromCart">Remove from cart</button>\
        </div>\
    </div>\
    ',
    data () {
        return {
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariant: 0,
            link: 'https://www.google.com.br/search?q=socks&oq=socks&aqs=chrome..69i57j69i60j0l4.816j0j7&sourceid=chrome&ie=UTF-8',
            sizes: ['P', 'M', 'G', 'XG'],
            variants: [
                {
                    variantId: '01',
                    variantColor: 'green',
                    variantImage: './assets/img/green-socks.jpeg',
                    variantQuantity: 10,
                    variantOnSale: true
                },
                {
                    variantId: '02',
                    variantColor: 'blue',
                    variantImage: './assets/img/blue-socks.jpeg',
                    variantQuantity: 6,
                    variantOnSale: false
                }
            ],

        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId);
            console.log(this.variants[this.selectedVariant].variantId)
        },
        removeFromCart(){
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].variantId);
            console.log(this.variants[this.selectedVariant].variantId);
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
        },
        shipping() {
            if (this.premium) {
                return "Free"
            }
            else {
                return "$5.99"
            }
        }
    },
});


var app = new Vue({
    el: '#app',
    data: {
        premium: false,
        cart: [],
    },
    methods: {
        updateCart(id) {
            this.cart.push(id);
        },
        removeFromCart(id) {
            for(var i = this.cart.length - 1; i >= 0; i--) {
                if (this.cart[i] === id) {
                   this.cart.splice(i, 1);
                }
            }
        }
    }
});

