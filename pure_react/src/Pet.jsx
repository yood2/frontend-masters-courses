// const Pet = (param) => {
//     return React.createElement('div', {}, [
//         React.createElement('h1', {}, param.name),
//         React.createElement('h2', {}, param.animal),
//         React.createElement('h2', {}, param.breed),
//     ]);
// };

const Pet = (param) => {
    return (
        <div>
            <h1>{param.name}</h1>
            <h2>{param.animal}</h2>
            <h2>{param.breed}</h2>
        </div>
    );
};

export default Pet;
