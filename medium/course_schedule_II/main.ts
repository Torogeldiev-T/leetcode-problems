function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    const inDegrees = Array(numCourses).fill(0);
    const graph = Array.from({ length: numCourses }, () => []);

    for (const [course, preCourse] of prerequisites) {
        inDegrees[course]++;
        graph[preCourse].push(course);
    }

    const queue = [];

    for (let i = 0; i < inDegrees.length; i++) {
        if (inDegrees[i] === 0) {
            queue.push(i);
        }
    }

    const order: number[] = [];
    let index = 0;

    let head = 0;

    while (head < queue.length) {
        const preCourse = queue[head];
        order[index] = preCourse;

        for (const course of graph[preCourse]) {
            inDegrees[course]--;

            if (inDegrees[course] === 0) {
                queue.push(course);
            }
        }

        index++;
        head++;
    }

    if (index === numCourses) {
        return order;
    }

    return [];
};