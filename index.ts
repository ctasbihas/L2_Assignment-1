function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === false) {
        return input.toLowerCase();
    } else {
        return input.toUpperCase();
    }
}

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    const higherRatings = items.filter(item => item.rating >= 4)
    return higherRatings
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
    const result: T[] = []
    for (let i = 0; i <= arrays.length - 1; i++) {
        result.push(...arrays[i])
    }
    return result;
}

class Vehicle {
    constructor(private make: string, private year: number) { }

    getInfo() {
        console.log(`Make: ${this.make}, Year: ${this.year}`);
    }
}
class Car extends Vehicle {
    constructor(make: string, year: number, private model: string) {
        super(make, year)
    }

    getModel() {
        console.log(`Model: ${this.model}`)
    };
}

function processValue(value: string | number): number {
    if (typeof value === 'string') {
        return value.length
    } else {
        return value * 2
    }
}

interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
    if (!products.length) return null;

    return products.reduce((oldExpensiveProduct, current) => (oldExpensiveProduct.price < current.price) ? current : oldExpensiveProduct)
}

enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType(day: Day): string {
    if (day === Day.Saturday || day === Day.Sunday) {
        return "Weekend"
    } else {
        return "Weekday"
    }
}

async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
        if (n >= 0) {
            setTimeout(() => {
                resolve(n ** 2);
            }, 1000);
        }else{
            reject(new Error("Negative number not allowed"));
        }
    });
}
