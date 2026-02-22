function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const inDegrees = Array(numCourses).fill(0);
    const graph = Array.from({ length: numCourses }, () => []);

    // computing incoming edges count for each vertice
    for (const [course, preCourse] of prerequisites) {
        inDegrees[course]++;
        graph[preCourse].push(course);
    }

    const queue = [];

    // adding to the queue all vertice indexes that have no incoming edges
    for (let i = 0; i < inDegrees.length; i++) {
        if (inDegrees[i] === 0) {
            queue.push(i);
        }
    }

    let index = 0;

    let head = 0;

    while (head < queue.length) {
        // course with no dependency - root course (prerequisite)
        const preCourse = queue[head];

        // iterate over all dependent courses and decrease their dependecy count
        // since we removing current preCourse from queue
        for (const course of graph[preCourse]) {
            inDegrees[course]--;

            if (inDegrees[course] === 0) {
                queue.push(course);
            }
        }

        index++;
        head++;
    }

    return index === numCourses;
};