class HashTable {
    arr = [];
    hash(key) {
        let sum = 0;
        for(let i = 0; i < key.length; i++) {
            sum += key.charCodeAt(i);
        }
        return sum;
    }

    add(key, value) {
        this.arr[this.hash(key)] = this.arr[this.hash(key)] || [];
        this.arr[this.hash(key)].push({key, value});

    }

    get(key) {
        return this.arr[this.hash(key)].find((item) => item.key === key).value;
    }
}
const Hash = new HashTable();
Hash.add("ab","1");
Hash.add("ba", "2");
console.log(`${Hash.get("ab")} , ${Hash.get("ba")}`);