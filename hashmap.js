// Use this when accessing bucket through index
/*
if (index < 0 || index >= buckets.length) 
{
    throw new Error("Trying to access index out of bound");
}
*/

class HashMap
{
    constructor()
    {
        this.hashMapSize = 16;
        this.map = Array(this.hashMapSize);
        this.count = 0;
    }

    hash(key)
    { // Only will work with strings
        let hashCode = 0;
        
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++)
        {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
        const bucket = hashCode % this.hashMapSize;
        console.log(bucket);
        return bucket;
    }

    set(key, value)
    {
        const hashedKey = this.hash(key);

        this.map[hashedKey] = value;
        this.count++;
        console.log(`Hashed Key: ${hashedKey} \nmap[hashedKey]: ${this.map[hashedKey]}`);
    }

    get(key)
    {
        const hashedKey = this.hash(key);

        if (this.map[hashedKey] != null)
        {
            return this.map[hashedKey];
        } 
        return null;
    }

    has(key)
    {
        const hashedKey = this.hash(key);

        if (this.map[hashedKey]) return true;
        else return false;
    }

    remove(key)
    {
        const hashedKey = this.hash(key);

        if (this.map[hashedKey])
        {
            delete this.map[hashedKey];
            this.count--;
            return true;
        } 
        return false;
    }

    length()
    {
        return this.count;
    }

    clear() // broken?
    {
        this.map.fill(null);
        this.count = 0;
    }

    keys()
    {
        let arrayOfKeys = [];
        for (let i = 0; i < this.map.length; i++)
        {
            if (this.map[i] != null)
            {
                arrayOfKeys.push(i);
            }
        }
        return arrayOfKeys;
    }

    values()
    {
        let arrayOfValues = [];
        for (let i = 0; i < this.map.length; i++)
        {
            if (this.map[i] != null)
            {
                arrayOfValues.push(this.map[i].value)
            }
        }
        return arrayOfValues;
    }

    entries()
    {
        let result = [];
        for (let i = 0; i < this.map.length; i++)
        {
            if (this.map[i] != null)
            {
            result.push([i, this.map[i]])
            }
        }
        return result
    }
}

const hash = new HashMap
hash.set("Clay", "Lets goo")
hash.set("Natalie", "Slay")
hash.set("Archie", "Bark")
hash.set("Jack", "Woof")
hash.set("Ruby", "Yap")

console.log(hash.has("Ye"))
console.log(hash.remove("Clay"))

console.log(hash.length())
console.log(hash.keys())
console.log(hash.entries())