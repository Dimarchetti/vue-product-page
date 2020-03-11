new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        img: 'assets/vmSocks-green-onWhite.jpg',
        altText: 'A pair of socks',
        inventory: 12,
        inStock:false,
        onSale: true,
        details: ["80% Cotton", "20% Polyester", "Gender-neutral"],
        sizes: [38, 39, 40, 42],
        cart: 0,
        variants: [
            {
                variantId: 2234,
                variantColor: "Green",
                variantImage: "assets/vmSocks-green-onWhite.jpg"
            },
            {
                variantId: 2235,
                variantColor: "Blue",
                variantImage: "assets/vmSocks-blue-onWhite.jpg"
            },
        ],
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateProduct(variantImage) {
            this.img = variantImage
        }
    }
})