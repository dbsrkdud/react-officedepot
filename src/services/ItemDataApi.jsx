import { faker } from "@faker-js/faker/locale/ko";

const ItemDataApi = function () {

    const fakerItemList = [];

    for(let i = 0; i < 10; i++) {
        const fakerItem = {};
        fakerItem.id = i + 1;
        fakerItem.dep = faker.commerce.department();
        fakerItem.price = faker.commerce.price();
        fakerItem.isbn = faker.commerce.isbn();
        fakerItem.product = faker.commerce.product();
        fakerItem.productAdjective = faker.commerce.productAdjective();
        fakerItem.productDescription = faker.commerce.productDescription();
        fakerItem.productMaterial = faker.commerce.productMaterial();
        fakerItem.productName = faker.commerce.productName();
        fakerItem.url = faker.image.url();
        fakerItemList.push(fakerItem);
    }

    return {
        "item": [
            {
                id: 'item_01',
                name: 'name_01',
                detail: 'detail_01',
                price: 10000,
                category: '01',
                src: "/src/assets/images/item_01.jpg"
            },
            {
                id: 'item_02',
                name: 'name_02',
                detail: 'detail_02',
                price: 20000,
                category: '02',
                src: "/src/assets/images/item_02.jpg"
            },
            {
                id: 'item_03',
                name: 'name_03',
                detail: 'detail_03',
                price: 30000,
                category: '03',
                src: "/src/assets/images/item_03.jpg"
            },
            {
                id: 'item_04',
                name: 'name_04',
                detail: 'detail_04',
                price: 40000,
                category: '04',
                src: "/src/assets/images/item_04.jpg"
            },
            {
                id: 'item_05',
                name: 'name_05',
                detail: 'detail_05',
                price: 50000,
                category: '05',
                src: "/src/assets/images/item_05.jpg"
            }
        ],
        "recommendItem": [
            {
                id: 'item_01',
                name: 'name_01',
                detail: 'detail_01',
                price: 10000,
                category: '01',
                src: "/src/assets/images/item_01.jpg"
            },
            {
                id: 'item_03',
                name: 'name_03',
                detail: 'detail_03',
                price: 30000,
                category: '03',
                src: "/src/assets/images/item_03.jpg"
            },
            {
                id: 'item_05',
                name: 'name_05',
                detail: 'detail_05',
                price: 50000,
                category: '05',
                src: "/src/assets/images/item_05.jpg"
            }
        ],
        "fakerItem": fakerItemList,
    };
}
export default ItemDataApi;