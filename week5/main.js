

// Rewriting this code using "map()" & "filder()"
/*let numbers = [1, 2, 3, 4];
let newNumbers = [];

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 !== 0) {
        newNumbers.push(numbers[i] * 2);
    }
  }
console.log("The doubled numbers are", newNumbers); // [2, 6]*/

// Rewrite code 
let numbers = [1, 2, 3, 4];

let newNumbers=numbers.filter(number => (number %2));

//Let newNumbers=numbers.map(number => number%2);

console.log("The doubled numbers are", newNumbers);/* [2, 6]*/


//2 Collect two days' worth of tasks.

let monday = [
        {
            name     : 'Write a summary HTML/CSS',
            duration : 180
        },
        {
            name     : 'Some web development',
            duration : 120
        },
        {
            name     : 'Fix homework for class10',
            duration : 60
        },
        {
            name     : 'Talk to a lot of people',
            duration : 200
        }
    ];

let tuesday = [
        {
            name     : 'Keep writing summary',
            duration : 240
        },
        {
            name     : 'Some more web development',
            duration : 180
        },
        {
            name     : 'Staring out the window',
            duration  : 60
        },
        {
            name     : 'Talk to a lot of people',
            duration : 200
        },
        {
            name     : 'Look at application assignments new students',
            duration : 60
        }
    ];

let tasks = monday.concat(tuesday);

//2.2:-Convert the task durations to hours, instead of minutes.

let changeToHour=tasks.map((tasks) => tasks.duration / 60)
console.log(changeToHour);

//2.3:-Filter out everything that took two hours or more (remove from the collection)

let done_tasks = tasks.filter((tasks) => tasks.duration <= 60)
console.log(done_tasks);

//2.4:-Multiply the each duration by a per-hour rate for billing (you can decide yourself what Maartje should make per hour) and sum it all up.

let perHourTask=tasks.map((duration) => duration/60 * 50)
console.log(perHourTask);


//2.5:- Output a formatted Euro amount.
let euroSign=task.map((amount) => '€')
console.log(euroSign);
