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

}
