import mongoose from 'mongoose';


const Hair_CareSchema = new mongoose.Schema({
    name: {type: String,
        //  required:true
        },
    hair_type: {type: String, 
            // required:true
        },
    price: {type: Number, 
        // required:true
    },
    categories: {type: [String]},
    favorite: {type: Boolean,
         default:false
        },
    stars: {type: Number,
        //  required:true
        },
    imageUrl: {type: String, 
        // required:true
    },
    brand: {
        type: String,
        // required:true
    },
    item_form: {
        type: String,
        // required:true
    },
    item_volume: {
        type: String,
        // required:true
    },
    type_Product: {
        type: String,
        // required:true
    },
    discription: {
        type: String,
        // required:true
    }
}
);

export const Hair_CareModel = mongoose.model('hair_care', Hair_CareSchema);