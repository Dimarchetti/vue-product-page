Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: `
        <div class="product">

            <div class="product-image">
                <img :src="image" :alt="altText"/>
            </div>

            <div class="product-info">
                <h1>{{ title }}</h1>
                <p v-if="inStock">In Stock</p>
            <!--<p v-else-if="inventory <= 10 && inventory > 0">Almost out Stock</p> -->
                <p v-else>Out of Stock</p>
                <p>Shipping: {{ shipping }}</p>
                <span v-show=onSale>On Sale</span>
                <p>Details</p>
                <ul>
                    <li v-for="detail in details">{{ detail }}</li>
                </ul>

                <div v-for="(variant, index) in variants" 
                    :key="variant.variantId"
                    class="color-box"
                    :style="{ backgroundColor: variant.variantColor }" 
                    @mouseover="updateProduct(index)">
                </div>

                <button @click="addToCart" 
                    :disabled="!inStock"
                    :class="{ disabledButton: !inStock }">Add to Cart</button>
                <div class="cart">
                    <p>Cart {{ cart }}</p>
                </div>
            </div>

        </div>
`,

data() {
    return {
        product: 'Socks',
        brand: 'Vue Mastery',
        selectedVariant: 0,
        altText: 'A pair of socks',
        inventory: 12,
        onSale: true,
        details: ["80% Cotton", "20% Polyester", "Gender-neutral"],
        sizes: [38, 39, 40, 42],
        cart: 0,
        variants: [
            {
                variantId: 2234,
                variantColor: "Green",
                variantImage: "assets/vmSocks-green-onWhite.jpg",
                variantQuantity:10
            },
            {
                variantId: 2235,
                variantColor: "Blue",
                variantImage: "assets/vmSocks-blue-onWhite.jpg",
                variantQuantity:0
            },
        ],
    }
},
methods: {
    addToCart() {
        this.cart += 1
    },
    updateProduct(index) {
        this.selectedVariant = index
        console.log(index)
    }
},
computed: {
    title() {
        return this.brand + ' ' + this.product
    },
    image() {
        return this.variants[this.selectedVariant].variantImage
    },
    inStock() {
        return this.variants[this.selectedVariant].variantQuantity
    },
    shipping() {
        if(this.premium) {
            return "Free"
        }
        else {
            return "$2.99"
        }
    }
}
})

new Vue({
    el: '#app',
    data: {
        premium: false
    }
})