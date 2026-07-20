function solve() {
    const input = JSON.parse(document.querySelector('textarea').value);

    const bestRestaurantOutput = document.querySelector('#bestRestaurant p');
    const workersOutput = document.querySelector('#workers p');

    const restaurants = {};

    for (const line of input) {
        const [restaurantName, workersInfo] = line.split(' - ');

        if (!restaurants[restaurantName]) {
            restaurants[restaurantName] = {
                workers: []
            };
        }

        const workers = workersInfo.split(', ');

        for (const worker of workers) {
            const [name, salary] = worker.split(' ');

            restaurants[restaurantName].workers.push({
                name,
                salary: Number(salary)
            });
        }
    }


    for (const restaurant of Object.values(restaurants)) {

        const salaries = restaurant.workers.map(worker => worker.salary);

        restaurant.avgSalary =
            salaries.reduce((sum, salary) => sum + salary, 0) / salaries.length;

        restaurant.bestSalary = Math.max(...salaries);
    }


    let bestRestaurantName = '';
    let bestRestaurant = null;


    for (const [name, restaurant] of Object.entries(restaurants)) {

        if (
            bestRestaurant === null ||
            restaurant.avgSalary > bestRestaurant.avgSalary
        ) {
            bestRestaurant = restaurant;
            bestRestaurantName = name;
        }
    }


    bestRestaurant.workers.sort((a, b) => b.salary - a.salary);


    bestRestaurantOutput.textContent =
        `Name: ${bestRestaurantName} Average Salary: ${bestRestaurant.avgSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;


    workersOutput.textContent = bestRestaurant.workers
        .map(worker => `Name: ${worker.name} With Salary: ${worker.salary}`)
        .join(' ');
}