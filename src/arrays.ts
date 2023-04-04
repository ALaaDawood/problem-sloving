export class Arrays {
    public static buildArrayFromPermutation(nums: number[]): number[] {
        const ans = [];
        for (let i = 0; i < nums.length; i++) {
            ans[i] = nums[nums[i]];
        }
        return ans;
    };

    public static getConcatenation(nums: number[]): number[] {
        const ans = [];
        for (let i = 0; i < nums.length; i++) {
            ans[i] = nums[i];
            ans[nums.length + i] = nums[i];
        }
        return ans;
    };

    public static shuffleArray(nums: number[], n: number): (number | undefined)[] {
        const ans = [];
        const arr1 = nums.slice(0, n).reverse();
        const arr2 = nums.slice(n).reverse();
        for (let i = 0; i < nums.length; i++) {
            if (i % 2 === 0) {
                ans[i] = arr1.pop();
            } else {
                ans[i] = arr2.pop();
            }
        }
        return ans;
    };
    
    public static finalValueAfterOperations(operations: string[]): number {
        let X = 0;
        for (const operator of operations) {
            X = operator.includes("+") ? X + 1
                : X - 1
        }
        return X;
    };

    public static runningSum(nums: number[]): number[] {
        const rs = [nums[0]];
        for (let i = 1; i < nums.length; i++) {
            rs[i] = nums[i] + rs[i - 1];
        }
        return rs;
    };

}
