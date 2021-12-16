export const asyncGetCall = async () => { // asynchronous API call
    try {
        const response = await fetch('https://randomuser.me/api/?inc=id,name,gender,dob,picture&nat=gb&results=10', // using fetch API to make GET request
            {
                method: 'GET',
            });
        let data = await response.json();
        console.log(data); // storing JSON format response in data and printing as output

        // sort the results array by age in an ascending order (IMP: here age is taken as ID given in Example 2)
        if (data) {
            data.results.sort((a, b) => {
                return a.dob.age - b.dob.age
            });
        }

        // iterate through the array and print the name and age in ascending order
        if (data) {
            data.results.forEach((e) => {
                console.log(`${e.name.first} ${e.name.last} ${e.dob.age}`);
            });
        }
        return data;
    } catch (error) {
        console.log(error) // log errors
    }
}