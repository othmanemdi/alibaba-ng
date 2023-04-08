export class Product {
    id: number;
    name: string;
    full_name: string;
    description: string;
    price: number;
    category: string;
    image?: string;
    categoryId?: number;

    public constructor(id: number, name: string, full_name: string, description: string, price: number, category: string, image?: string, categoryId?: number) {
        this.id = id;
        this.name = name;
        this.full_name = full_name;
        this.description = description;
        this.price = price;
        this.category = category;
        this.image = image;
        this.categoryId = categoryId;
    }
}
