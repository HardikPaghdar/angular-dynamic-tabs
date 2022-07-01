import {Component} from '@angular/core';


interface Products {
    title: string
    description: string
    price: string
}

interface Data {
    category: string
    products: Array<Products>
}

interface Tab {
    keyword: string
    category: string
    filterProducts: Array<Products>
}

@Component({
    selector: 'tab-group-basic-example',
    templateUrl: 'tab-group-basic-example.html',
})

export class TabGroupBasicExample {
    selected = 'Mobile';
    onSubmit: boolean;
    public data: Array<Data> = [
        {
            category: "Mobile",
            products: [
                {
                    title: "Oneplus 6",
                    description: "ONEPLUS 6 (8GB, 128GB) (REFURBISHED) (VERY GOOD)",
                    price: "16,990.00"
                },
                {
                    title: "Iphone 13",
                    description: "Apple iPhone 13 (128GB ROM, MLPG3HN/A, Starlight White)",
                    price: "72,990.00"
                },
                {
                    title: "Samsung",
                    description: "Samsung Galaxy M12 (Blue,6GB RAM, 128GB Storage)",
                    price: "12,990.00"
                }
            ]
        },
        {
            category: "TV",
            products: [
                {
                    title: "LG",
                    description: "LG 80cm (32 Inch) HD Ready LED Android Smart TV (Auto Low Latency Mode, L32M6-RA, Black)",
                    price: "14,990.00"
                },
                {
                    title: "MI",
                    description: "Mi 80 cm (32 inches) HD Ready Android Smart LED TV 4A PRO | L32M5-AL (Black)",
                    price: "15,999.00"
                },
                {
                    title: "Croma",
                    description: "Croma 80cm (32 Inch) HD Ready TV (A Grade Panel, CREL7369, Black)",
                    price: "7,999.00"
                }
            ]
        },
        {
            category: "Laptop",
            products: [
                {
                    title: "Dell",
                    description: "Inspiron 14 5410 Laptop",
                    price: "84,990.00"
                },
                {
                    title: "Lenovo",
                    description: "Lenovo IdeaPad 3",
                    price: "34,990.00"
                },
                {
                    title: "HP",
                    description: "HP NB 255 G8 Laptop",
                    price: "29,990.00"
                }
            ]
        }
    ]

    public tabs: Array<Tab> = [{
        keyword: "",
        category: this.data[0].category,
        filterProducts: []
    }]

    public changeCategory = (i: number, e: any) => {
        this.tabs[i].category = e.value
    }

    public changeKeyword = (i: number, e: any) => {
        this.tabs[i].keyword = e.target.value
    }

    public addTab = () => {
        this.onSubmit = false
        this.tabs.push({
            keyword: "",
            category: this.data[0].category,
            filterProducts: []
        })
    }

    public removeTab = (k: number) => {
        this.onSubmit = false
        this.tabs = this.tabs.filter((v: Tab, i: number) => i !== k)
    }

    public searchProduct = (i: number) => {
        if(this.tabs[i].keyword.length <= 0){
            this.onSubmit =  true;
            return
        }
        this.tabs[i].filterProducts = this.data.find(c => c.category === this.tabs[i].category)?.products?.filter((p: Products) => p.title.toLowerCase().search(this.tabs[i].keyword.toLowerCase()) > -1) || []

    }
}