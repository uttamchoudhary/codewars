function solution(M) {
    M = JSON.parse(M);
    let number = M.length,
        numOfCircles = 0,
        groups = [];
    var IsiNCircle = new Array(number).fill(0);

    for (var i = 0; i < number; i++) {
        if (!IsiNCircle[i]) {
            IsiNCircle[i] = 1;
            findCircle(M, IsiNCircle, i);
            createResult(IsiNCircle);
            ++numOfCircles;
        }
    }
    return numOfCircles;
}

function createResult(circle) {
    let group = [];
    for (var i = 0; i < circle.length; i++) {
        if (circle[i]) {
            group.push(i)
        }
    }

}

function findCircle(friends, inCircle, studentIndex) {
    let length = friends.length;
    for (var i = 0; i < length; ++i) {
        if (friends[studentIndex][i] === 1 && !inCircle[i] && i !== studentIndex) {
            inCircle[i] = 1;
            findCircle(friends, inCircle, i);
        }
    }
    console.log(inCircle);
}

console.log(solution('[[1,1,0],[1,1,0],[0,0,1]]'));