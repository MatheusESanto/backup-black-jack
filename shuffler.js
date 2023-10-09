export default function shuffler(Array) {
    return Array.sort(function (a, b) { return 0.5 - Math.random() })
} 