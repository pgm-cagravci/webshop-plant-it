
import {EntitySchema} from 'typeorm'

export default new EntitySchema({
    name: "Promotion", // Will use table name `post` as default behaviour.
    tableName: "promotions", // Optional: Provide `tableName` property to override the default behaviour for table name. 
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        title: {
            type: "varchar",
            nullable: false
        },
        promoCode: {
            type: "text",
            unique: true,
            nullable: false
        },
        active: {
            type: "int"
        },
        value: {
            type: "text",
            nullable: false
        },
        type: {
            type: "text",
            nullable: false
        }
    },
    relations: {
        "product_": {
            target: "Product",
            type: "many-to-one",
            cascade: true
        }
    }
});