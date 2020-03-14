export function isPc(ver) {
    const userAgent = navigator.userAgent;
    return !/Android|webOS|iPhone|iPod|BlackBerry/i.test(userAgent);
}