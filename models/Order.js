const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    products:{
      type: [
          {
              productId:{
                  type: String,
              },
              quantity:{
                  type: Number,
                  default: 1,
              },
          },
      ],
    },
    amount:{
        type: Number,
        required: true
    },

    address:{
        type: Object,
        required: true
    },
    staus:{
        type: String,
        default: "pending"
    }
   
}, {timestamps: true}
);

module.exports = mongoose.model("Order", orderSchema);