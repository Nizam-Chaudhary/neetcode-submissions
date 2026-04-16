class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const countMap = new Map();

        for (const c of s) {
            countMap.set(c, (countMap.get(c) ?? 0) + 1)
        }

        for (const c of t) {
            countMap.set(c, (countMap.get(c) ?? 0) - 1)
        }

        for (const [k,v] of countMap) {
            if (v != 0) return false
        }

        return true
    }
}
