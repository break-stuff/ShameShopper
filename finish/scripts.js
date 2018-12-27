Vue.filter('currency', function (value) {
  return !value ? '' : '$' + parseFloat(value).toFixed(2);
});

Vue.component('cart-item-row', {
  props: ['item', 'index', 'onRemove'],
  template: `
    <tr v-if="!item.edit">
        <td>{{ item.name }}</td>
        <td>{{ item.price | currency }}</td>
        <td>
            {{ item.quantity }}
        </td>
        <td>
            <input type="checkbox" class="" name="price" id="" v-model="item.isHealthy" disabled>
        </td>
        <td>{{ (item.quantity * item.price) | currency }}</td>
        <td>
            <button class="btn btn-info btn-sm" @click="item.edit = !item.edit">Edit</button>
            <button class="btn btn-danger btn-sm" @click="remove">Delete</button>
        </td>
        <td>
            <img v-if="item.isHealthy" src="https://media.giphy.com/media/2xO491sY6f0cM/giphy.gif" alt="huzzah">
            <img v-else src="https://media.giphy.com/media/JUEKek7t2bqYE/giphy.gif" alt="boo">
        </td>
    </tr>
    <tr v-else :class="[{'table-dark': item.edit}]">
        <td>
            <input type="text" class="form-control" name="name" id="" v-model="item.name" />
        </td>
        <td>
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text">$</span>
                </div>
                <input class="form-control" type="text" name="price" id="" v-model="item.price">
            </div>
        </td>
        <td>
            <div class="input-group">
                <input class="form-control" type="text" name="quantity" id="" v-model="item.quantity">
                <div class="input-group-append">
                    <button class="btn btn-secondary" @click="item.quantity--">-</button>
                    <button class="btn btn-secondary" @click="item.quantity++">+</button>
                </div>
            </div>
        </td>
        <td>
            <input type="checkbox" class="form-control" name="healthy" title="Be Honest" id="" v-model="item.isHealthy">
        </td>
        <td>
            {{ (item.quantity * item.price) | currency }}
        </td>
        <td>
            <button class="btn btn-info btn-sm" @click="item.edit = !item.edit">Save</button>
        </td>
        <td></td>
    </tr>
  `,
  methods: {
    remove: function () {
      this.onRemove({
        index: this.index
      });
    }
  }
});

Vue.component('add-cart-item', {
  props: ['onSave'],
  template: `
    <tr>
        <td>
            <input type="text" class="form-control" name="name" id="" v-model="newItem.name" />
        </td>
        <td>
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text">$</span>
                </div>
                <input class="form-control" type="text" name="price" id="" v-model="newItem.price">
            </div>
        </td>
        <td>
            <div class="input-group">
                <input class="form-control" type="text" name="quantity" id="" v-model="newItem.quantity">
                <div class="input-group-append">
                    <button class="btn btn-secondary" @click="newItem.quantity--">-</button>
                    <button class="btn btn-secondary" @click="newItem.quantity++">+</button>
                </div>
            </div>
        </td>
        <td>
            <input type="checkbox" class="form-control" name="price" id="" title="Be Honest" v-model="newItem.isHealthy" />
        </td>
        <td></td>
        <td>
            <input type="submit" class="btn btn-info" @click="addItemToCart" value="Add To Cart">
        </td>
        <td></td>
    </tr>
    `,
  data: function () {
    return {
      newItem: {
        name: '',
        quantity: 0,
        price: 0,
        isHealthy: false,
        edit: false
      }
    }
  },
  methods: {
    addItemToCart: function () {
      this.onSave({
        item: this.newItem
      });
      this.resetNewItem();
    },
    resetNewItem: function () {
      this.newItem = {
        name: '',
        quantity: 0,
        price: 0,
        isHealthy: false
      };
    },
  }
});

new Vue({
  el: '#app',
  data: {
    cart: [{
        name: 'Yogurt',
        quantity: 1,
        price: 1.00,
        isHealthy: true,
        edit: false
      },
      {
        name: 'Tomatoes',
        quantity: 2,
        price: 0.50,
        isHealthy: true,
        edit: false
      },
      {
        name: 'Chips',
        quantity: 5,
        price: 3.00,
        isHealthy: false,
        edit: false
      },
      {
        name: 'Beans',
        quantity: 4,
        price: 1.00,
        isHealthy: true,
        edit: false
      },
      {
        name: 'Candy',
        quantity: 2,
        price: 0.75,
        isHealthy: false,
        edit: false
      }
    ]
  },
  computed: {
    total: function () {
      return this.cart.length === 0 ?
        0 :
        this.cart
        .map(function (item) {
          return item.price * item.quantity;
        })
        .reduce(function (total, subtotal) {
          return total + subtotal;
        });
    }
  },
  methods: {
    addItem: function (event) {
      this.cart.push(event.item);
    },
    removeItem: function (event) {
      this.cart.splice(event.index, 1);
    }
  }
});
