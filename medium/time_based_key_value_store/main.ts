const NO_RESULT = "";

class TimeMap {
    public store: Record<string, (number | string)[][]> = {};

    constructor() {

    }

    set(key: string, value: string, timestamp: number): void {
        if (!this.store[key]) {
            this.store[key] = [];
        }

        this.store[key].push([timestamp, value]);
    }

    get(key: string, timestamp: number): string {
        const records = this.store[key];

        let res = NO_RESULT;

        if (!records) {
            return res;
        }

        let left = 0
        let right = records.length - 1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            let midTimestamp = records[mid][0] as number;

            if (midTimestamp <= timestamp) {
                res = records[mid][1] as string;

                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return res;
    }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */