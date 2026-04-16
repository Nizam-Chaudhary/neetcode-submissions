class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) return false;

        const countMap = new Map();

        for (let i = 0; i < s.length; i++) {
            countMap.set(s.charAt(i), (countMap.get(s.charAt(i)) ?? 0) + 1);
            countMap.set(t.charAt(i), (countMap.get(t.charAt(i)) ?? 0) - 1);
        }

        for (const [, v] of countMap) {
            if (v != 0) return false;
        }

        return true;
    }
}
